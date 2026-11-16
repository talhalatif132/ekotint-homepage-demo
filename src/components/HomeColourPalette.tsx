"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import "@/app/colour-palette.css";

export type PaletteColour = { name: string; hex: string; family: string; note: string };
export type PaletteSurface = "Interior" | "Exterior";

type Props = {
  colours: PaletteColour[];
  surface: PaletteSurface;
  selectedHex?: string;
  family?: string;
  paused?: boolean;
  onSurfaceChange: (surface: PaletteSurface) => void;
  onChoose: (colour: PaletteColour) => void;
  onSaved: () => void;
  onClearFamily: () => void;
};

function twoColourSteps(row: HTMLDivElement) {
  const item = row.firstElementChild;
  const step = (item?.getBoundingClientRect().width || row.clientWidth) + (Number.parseFloat(window.getComputedStyle(row).columnGap) || 0);
  return step * 2;
}

export default function HomeColourPalette({ colours, surface, selectedHex, family, paused = false, onSurfaceChange, onChoose, onSaved, onClearFamily }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const colourKey = colours.map((colour) => colour.hex).join("|");

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollLeft = 0;
    const update = () => {
      const carousel = carouselRef.current;
      const disc = row.querySelector<HTMLElement>(".colour-circle-disc");
      const arrow = carousel?.querySelector<HTMLElement>(".colour-circle-arrow");
      if (carousel && disc && arrow) {
        const offset = disc.getBoundingClientRect().top - carousel.getBoundingClientRect().top + disc.getBoundingClientRect().height / 2 - arrow.getBoundingClientRect().height / 2;
        carousel.style.setProperty("--colour-arrow-top", `${Math.max(0, offset)}px`);
      }
      setCanPrevious(row.scrollLeft > 3);
      setCanNext(row.scrollLeft + row.clientWidth < row.scrollWidth - 3);
    };
    update();
    row.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(row);
    return () => { row.removeEventListener("scroll", update); observer.disconnect(); };
  }, [colourKey, surface]);

  useEffect(() => {
    const currentRow = rowRef.current;
    const currentCarousel = carouselRef.current;
    if (!currentRow || !currentCarousel || paused) return;
    const row = currentRow;
    const carousel = currentCarousel;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    let inView = false;
    let pointerDown = false;
    let focusPaused = carousel.contains(document.activeElement) && !!document.activeElement?.matches(":focus-visible");

    function clear() { window.clearTimeout(timer); }
    function schedule() {
      clear();
      if (!inView || document.hidden || motion.matches || pointerDown || focusPaused || row.scrollWidth <= row.clientWidth + 3) return;
      timer = window.setTimeout(() => {
        const end = row.scrollWidth - row.clientWidth;
        const wrap = row.scrollLeft >= end - 3;
        row.scrollTo({ left: wrap ? 0 : Math.min(end, row.scrollLeft + twoColourSteps(row)), behavior: wrap ? "instant" : "smooth" });
        schedule();
      }, 1500);
    }
    function onFocusIn(event: FocusEvent) {
      focusPaused = event.target instanceof HTMLElement && event.target.matches(":focus-visible");
      schedule();
    }
    function onFocusOut(event: FocusEvent) {
      if (!carousel.contains(event.relatedTarget as Node | null)) { focusPaused = false; schedule(); }
    }
    function onPointerDown() { pointerDown = true; clear(); }
    function onPointerUp() { pointerDown = false; schedule(); }

    const intersection = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      schedule();
    }, { threshold: .15 }) : null;
    if (intersection) intersection.observe(carousel);
    else inView = true;
    const resize = new ResizeObserver(schedule);
    resize.observe(row);
    motion.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", schedule);
    row.addEventListener("scroll", schedule, { passive: true });
    carousel.addEventListener("focusin", onFocusIn);
    carousel.addEventListener("focusout", onFocusOut);
    carousel.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    schedule();
    return () => {
      clear();
      intersection?.disconnect();
      resize.disconnect();
      motion.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", schedule);
      row.removeEventListener("scroll", schedule);
      carousel.removeEventListener("focusin", onFocusIn);
      carousel.removeEventListener("focusout", onFocusOut);
      carousel.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [colourKey, surface, paused]);

  function move(direction: number) {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * twoColourSteps(row), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  return <section className="colour-circle-section" id="colours" aria-labelledby="colour-palette-heading">
    <div className="colour-circle-inner">
      <div className="colour-circle-heading">
        <h2 id="colour-palette-heading">Explore Ekotint colours</h2>
        <p>Choose a shade to explore paints for your space.</p>
        <button className="colour-circle-saved" type="button" onClick={onSaved}>Saved colours <Icon name="heart" size={18} /></button>
      </div>
      <div className="colour-surface-tabs" role="group" aria-label="Where are you painting?">
        {(["Interior", "Exterior"] as const).map((item) => <button type="button" key={item} aria-pressed={surface === item} aria-controls="colour-circle-row" onClick={() => onSurfaceChange(item)}>{item}</button>)}
      </div>
      {family && <div className="colour-family-context"><span>{family}</span><button type="button" onClick={onClearFamily} aria-label={`Show all colours instead of ${family}`}>All colours <Icon name="close" size={13} /></button></div>}
      <div className="colour-circle-carousel" ref={carouselRef} aria-roledescription="carousel" aria-label={`${surface} colour ideas`}>
        <button className="colour-circle-arrow" type="button" aria-label="Previous colour ideas" aria-controls="colour-circle-row" disabled={!canPrevious} onClick={() => move(-1)}><Icon name="back" size={21} /></button>
        <div className="colour-circle-row" id="colour-circle-row" ref={rowRef} role="list">
          {colours.map((colour) => <div className="colour-circle-item" role="listitem" key={colour.hex}>
            <button className={`colour-circle-choice${selectedHex === colour.hex ? " is-selected" : ""}`} type="button" aria-label={`Choose a ${surface.toLowerCase()} paint for ${colour.name}, ${colour.hex}`} aria-haspopup="dialog" onClick={() => onChoose(colour)}>
              <span className="colour-circle-disc" style={{ backgroundColor: colour.hex }} aria-hidden="true" />
              <strong>{colour.name}</strong>
              <span className="colour-circle-code">{colour.hex}</span>
              <span className="colour-circle-action">View paints <Icon name="arrow" size={14} /></span>
            </button>
          </div>)}
        </div>
        <button className="colour-circle-arrow" type="button" aria-label="Next colour ideas" aria-controls="colour-circle-row" disabled={!canNext} onClick={() => move(1)}><Icon name="arrow" size={21} /></button>
      </div>
      <p className="colour-circle-note">Colour ideas for your {surface.toLowerCase()}. Confirm the physical shade and paint suitability with Ekotint.</p>
    </div>
  </section>;
}
