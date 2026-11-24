"use client";

import { useEffect, useRef, useState } from "react";
import type { LatLngTuple, Map as LeafletMap, Marker, Popup } from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "@/components/Icon";
import { getDealerDirectionsHref, getDealerPhoneHref, showroomDealers, type ShowroomDealer } from "./dealers";
import styles from "./showroom.module.css";

type MapStatus = "loading" | "ready" | "tiles-unavailable" | "unavailable";

function createDealerPopup(dealer: ShowroomDealer) {
  const popup = document.createElement("div");
  popup.className = styles.dealerDetails;

  const title = document.createElement("h2");
  title.textContent = dealer.name;

  const address = document.createElement("address");
  address.textContent = dealer.address;
  popup.append(title, address);

  if (dealer.contactName) {
    const contact = document.createElement("dl");
    contact.className = styles.dealerContact;
    const label = document.createElement("dt");
    label.textContent = "Contact person";
    const name = document.createElement("dd");
    name.textContent = dealer.contactName;
    contact.append(label, name);
    popup.append(contact);
  }

  const phones = document.createElement("div");
  phones.className = styles.popupPhones;
  for (const phone of dealer.phones) {
    const call = document.createElement("a");
    call.href = getDealerPhoneHref(phone);
    call.textContent = `Call ${phone}`;
    call.setAttribute("aria-label", `Call ${dealer.name} at ${phone}`);
    phones.append(call);
  }

  const directions = document.createElement("a");
  directions.className = styles.directions;
  directions.href = getDealerDirectionsHref(dealer);
  directions.textContent = "Get directions";
  directions.setAttribute("aria-label", `Get directions to ${dealer.name} in Google Maps`);

  popup.append(phones, directions);
  return popup;
}

function panToOpenDealer(map: LeafletMap, marker: Marker) {
  const popup = marker.getPopup()?.getElement();
  const pin = marker.getElement();
  if (!popup || !pin) return;

  map.stop();
  const view = map.getContainer().getBoundingClientRect();
  const details = popup.getBoundingClientRect();
  const point = pin.getBoundingClientRect();
  const left = Math.min(details.left, point.left);
  const right = Math.max(details.right, point.right);
  const top = Math.min(details.top, point.top);
  const bottom = Math.max(details.bottom, point.bottom);

  const topPadding = 62;
  const sidePadding = Math.max(0, Math.min(60, (view.width - (right - left)) / 2));
  // Allow room to see streets below the pin, using the space left by the popup.
  const bottomPadding = Math.max(0, Math.min(72, view.height - (bottom - top) - topPadding));
  const x = Math.min(0, left - view.left - sidePadding) || Math.max(0, right - view.right + sidePadding);
  const y = Math.min(0, top - view.top - topPadding) || Math.max(0, bottom - view.bottom + bottomPadding);

  if (Math.round(x) || Math.round(y)) {
    map.panBy([x, y], { duration: 0.28, animate: !window.matchMedia("(prefers-reduced-motion: reduce)").matches });
  }
}

function positionHoverCard(map: LeafletMap, popup: Popup, marker: Marker) {
  const card = popup.getElement();
  if (!card) return;

  const size = map.getSize();
  const pin = map.latLngToContainerPoint(marker.getLatLng());
  const width = card.offsetWidth;
  const sideInset = Math.max(0, Math.min(60, (size.x - width) / 2));
  const above = pin.y - 44 - 62;
  const below = size.y - 24 - (pin.y + 10);
  const canFitOnRight = pin.x + 24 + width <= size.x - sideInset;
  const canFitOnLeft = pin.x - 24 - width >= sideInset;
  let x = Math.max(sideInset + width / 2, Math.min(pin.x, size.x - sideInset - width / 2));
  let y = pin.y - 44;
  let placement = "above";

  if (above < card.offsetHeight) {
    if (below >= card.offsetHeight) {
      placement = "below";
      y = pin.y + 10 + card.offsetHeight;
    } else if (canFitOnRight || canFitOnLeft) {
      placement = "beside";
      x = pin.x + (canFitOnRight ? 1 : -1) * (24 + width / 2);
      y = Math.min(size.y - 24, Math.max(62 + card.offsetHeight, pin.y - 20 + card.offsetHeight / 2));
    } else {
      // A narrow viewport can have room beside neither the pin nor the whole card.
      placement = above >= below ? "above" : "below";
      const availableHeight = Math.max(above, below);
      popup.options.maxHeight = Math.max(44, Math.floor(availableHeight) - 30);
      popup.update();
      if (placement === "below") y = pin.y + 10 + card.offsetHeight;
    }
  }

  card.dataset.placement = placement;
  card.style.setProperty("--dealer-card-tip", `${pin.x - x + width / 2}px`);
  popup.setLatLng(map.containerPointToLatLng([x, y]));
}

export default function ShowroomMap() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<(() => void) | null>(null);
  const [status, setStatus] = useState<MapStatus>("loading");
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) return;

    let cancelled = false;
    let map: LeafletMap | undefined;
    let openedMarker: Marker | undefined;
    let hoverPopup: Popup | undefined;
    let hoverCloseTimeout: number | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let loadingTimeout: number | undefined;

    function handleFullscreenChange() {
      setFullscreen(document.fullscreenElement === frame);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || (!openedMarker && !hoverPopup?.isOpen())) return;

      event.preventDefault();
      event.stopPropagation();
      const marker = openedMarker;
      if (marker) {
        marker.closePopup();
        marker.getElement()?.focus({ preventScroll: true });
      } else {
        hoverPopup?.close();
      }
    }

    async function initializeMap(canvas: HTMLDivElement) {
      try {
        const L = await import("leaflet");
        if (cancelled) return;

        const locator = L.map(canvas, { scrollWheelZoom: false, zoomControl: false, zoomSnap: 0.25 });
        map = locator;
        const positions = showroomDealers.map(({ latitude, longitude }): LatLngTuple => [latitude, longitude]);
        const bounds = L.latLngBounds(positions);
        const fitDealers = () => locator.fitBounds(bounds, { padding: [34, 40], maxZoom: 13, animate: false });
        resetRef.current = () => {
          locator.closePopup();
          fitDealers();
        };
        fitDealers();

        let loadedTile = false;
        const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
          maxZoom: 19,
        });
        tiles.once("tileload", () => {
          loadedTile = true;
          window.clearTimeout(loadingTimeout);
          setStatus("ready");
        });
        tiles.on("load", () => {
          if (!loadedTile) setStatus("tiles-unavailable");
        });
        loadingTimeout = window.setTimeout(() => {
          if (!loadedTile) setStatus("tiles-unavailable");
        }, 8000);
        locator.attributionControl.setPrefix(false);
        tiles.addTo(locator);
        L.control.zoom({ position: "bottomright" }).addTo(locator);

        const popupOptions = { maxWidth: 236, minWidth: 192, autoPan: false };
        const hoverCard = L.popup({ ...popupOptions, className: `${styles.mapPopup} ${styles.hoverPopup}`, offset: [0, 0] });
        hoverPopup = hoverCard;

        const cancelHoverClose = () => window.clearTimeout(hoverCloseTimeout);
        const closeHoverCard = () => {
          cancelHoverClose();
          hoverCard.close();
        };
        const startHoverClose = () => {
          cancelHoverClose();
          hoverCloseTimeout = window.setTimeout(() => {
            if (!hoverCard.getElement()?.contains(document.activeElement)) closeHoverCard();
          }, 220);
        };
        const handleHoverFocusOut = (event: FocusEvent) => {
          const card = hoverCard.getElement();
          if (card && !card.matches(":hover") && !card.contains(event.relatedTarget as Node | null)) startHoverClose();
        };

        hoverCard.on("add", () => {
          canvas.dataset.dealerOpen = "true";
          const card = hoverCard.getElement();
          card?.addEventListener("pointerenter", cancelHoverClose);
          card?.addEventListener("pointerleave", startHoverClose);
          card?.addEventListener("focusin", cancelHoverClose);
          card?.addEventListener("focusout", handleHoverFocusOut);
        });
        hoverCard.on("remove", () => {
          cancelHoverClose();
          if (!openedMarker) delete canvas.dataset.dealerOpen;
        });
        locator.on("movestart", closeHoverCard);

        const icon = L.divIcon({ className: styles.marker, iconSize: [44, 44], iconAnchor: [22, 42], popupAnchor: [0, -39] });
        showroomDealers.forEach((dealer, index) => {
          const marker = L.marker(positions[index], { icon, riseOnHover: true }).addTo(locator);
          marker.bindPopup(() => createDealerPopup(dealer), {
            ...popupOptions,
            className: styles.mapPopup,
            // Leave room for the controls, the pin, and the map below it on short screens.
            maxHeight: Math.min(236, canvas.clientHeight - 172),
          });
          marker.on("popupopen", () => {
            closeHoverCard();
            openedMarker = marker;
            canvas.dataset.dealerOpen = "true";
            panToOpenDealer(locator, marker);
          });
          marker.on("popupclose", () => {
            if (openedMarker !== marker) return;
            openedMarker = undefined;
            delete canvas.dataset.dealerOpen;
          });
          const element = marker.getElement();
          element?.setAttribute("aria-label", `Show ${dealer.name}`);
          element?.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "mouse" || openedMarker) return;

            cancelHoverClose();
            hoverCard.options.maxHeight = Math.min(236, canvas.clientHeight - 116);
            hoverCard.setLatLng(marker.getLatLng()).setContent(createDealerPopup(dealer)).openOn(locator);
            positionHoverCard(locator, hoverCard, marker);
          });
          element?.addEventListener("pointerleave", startHoverClose);
          element?.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;

            event.preventDefault();
            marker.openPopup();
            const firstLink = marker.getPopup()?.getElement()?.querySelector("a");
            firstLink?.focus({ preventScroll: true });
            const scrollable = firstLink?.closest<HTMLElement>(".leaflet-popup-scrolled");
            if (firstLink && scrollable) {
              const clippedHeight = firstLink.getBoundingClientRect().bottom - scrollable.getBoundingClientRect().bottom;
              scrollable.scrollTop += Math.max(0, Math.ceil(clippedHeight));
            }
          });
        });

        resizeObserver = new ResizeObserver(() => locator.invalidateSize({ pan: false, debounceMoveend: true }));
        resizeObserver.observe(canvas);
      } catch {
        map?.remove();
        map = undefined;
        resetRef.current = null;
        window.clearTimeout(loadingTimeout);
        if (!cancelled) setStatus("unavailable");
      }
    }

    setCanFullscreen(document.fullscreenEnabled);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    canvas.addEventListener("keydown", handleEscape);
    void initializeMap(canvas);

    return () => {
      cancelled = true;
      window.clearTimeout(loadingTimeout);
      window.clearTimeout(hoverCloseTimeout);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      canvas.removeEventListener("keydown", handleEscape);
      resizeObserver?.disconnect();
      map?.remove();
      delete canvas.dataset.dealerOpen;
      resetRef.current = null;
    };
  }, []);

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement === frameRef.current) await document.exitFullscreen();
      else await frameRef.current?.requestFullscreen();
    } catch {
      setCanFullscreen(false);
    }
  }

  const showControls = status === "ready" || status === "tiles-unavailable";

  return (
    <>
      <a className={styles.skipMap} href="#dealer-list">Skip to dealer list</a>
      <div className={styles.mapFrame} ref={frameRef}>
        <div className={styles.mapCanvas} ref={canvasRef} aria-label="Interactive map of Ekotint dealers in Karachi" role="region" />
        {showControls && (
          <div className={styles.mapControls}>
            <button className={styles.reset} type="button" onClick={() => resetRef.current?.()}>
              <Icon name="pin" size={18} /> Show all dealers
            </button>
            {canFullscreen && (
              <button className={styles.fullscreen} type="button" aria-label={fullscreen ? "Exit fullscreen map" : "Fullscreen map"} onClick={toggleFullscreen}>
                <Icon name="fullscreen" size={22} />
              </button>
            )}
          </div>
        )}
        {status !== "ready" && (
          <div className={styles.mapStatus} role="status">
            {status === "loading" ? "Loading dealer map…" : "The street map is unavailable. Browse the dealer list for contact details and directions."}
          </div>
        )}
        <noscript><p className={styles.noScript}>Browse the dealer list for contact details and directions.</p></noscript>
      </div>
    </>
  );
}
