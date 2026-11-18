"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import HomeColourStudio, { homeColourIdeas, homeRoofColourIdeas, type HomeColourIdea } from "@/components/HomeColourStudio";
import HomeEnquiryForm from "@/components/HomeEnquiryForm";
import HomeExamplePrice from "@/components/HomeExamplePrice";
import HomeRelatedPaints from "@/components/HomeRelatedPaints";
import HomeRoomPhotoUpload from "@/components/HomeRoomPhotoUpload";
import { useHomePaintCart } from "@/components/HomePaintCart";
import Icon from "@/components/Icon";
import { homeContact, homeTechnicalGuide, type HomePaint } from "@/lib/homepage-content";
import { homePackSizes, isHomePackSize, type HomePackSize } from "@/lib/home-pack-sizes";
import { homeTechnicalSheet } from "@/lib/home-technical-sheets";
import { getPublishedProductReviews } from "@/lib/home-reviews";
import { consumeProductPreviewNavigation } from "@/lib/home-product-navigation";
import { homePreviewForProduct, homePreviewScene } from "@/lib/home-preview-scenes";
import { homeQuoteHref } from "@/lib/home-quote";
import "@/app/products/home-product.css";
import reviewStyles from "./HomeProductReviews.module.css";

type SavedColour = HomeColourIdea & { family: string; note: string };
// Hidden at the user's request, 14 November 2026; retain the renderer/data for later.
const showProductReviews = false;
const allInfoTabs = [{ id: "description", label: "Description" }, { id: "shades", label: "Shade guide" }, { id: "technical", label: "Technical information" }, { id: "reviews", label: "Reviews" }] as const;
const infoTabs = allInfoTabs.filter((tab) => showProductReviews || tab.id !== "reviews");
type InfoTab = typeof infoTabs[number]["id"];

function savedIdeas(value: unknown): SavedColour[] {
  if (!Array.isArray(value)) return [];
  const ideas = value.flatMap((item): SavedColour[] => {
    if (typeof item === "string") {
      const known = [...homeColourIdeas, ...homeRoofColourIdeas].find((idea) => idea.name === item);
      return known ? [{ ...known, family: "Custom", note: "Your saved colour idea." }] : [];
    }
    if (item && typeof item === "object" && typeof item.name === "string" && typeof item.hex === "string" && /^#[0-9a-f]{6}$/i.test(item.hex)) {
      return [{ name: item.name, hex: item.hex.toUpperCase(), family: typeof item.family === "string" ? item.family : "Custom", note: typeof item.note === "string" ? item.note : "Your saved colour idea." }];
    }
    return [];
  });
  return Array.from(new Map(ideas.map((idea) => [idea.hex, idea])).values());
}

export default function HomePaintProductView({ product }: { product: HomePaint }) {
  const previewScene = homePreviewForProduct(product);
  const preview = homePreviewScene(previewScene);
  const colourIdeas = previewScene === "roof" ? homeRoofColourIdeas : homeColourIdeas;
  const knownColourIdeas = [...homeColourIdeas, ...homeRoofColourIdeas];
  const [colour, setColour] = useState<HomeColourIdea>(colourIdeas[0]);
  const [hasChosenColour, setHasChosenColour] = useState(false);
  const [hexDraft, setHexDraft] = useState(colourIdeas[0].hex);
  const [hexError, setHexError] = useState("");
  const [savedColours, setSavedColours] = useState<SavedColour[]>([]);
  const [saveStatus, setSaveStatus] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [packSize, setPackSize] = useState<HomePackSize>(1);
  const [cartStatus, setCartStatus] = useState("");
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<InfoTab>("description");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { addItem } = useHomePaintCart();
  const hexRef = useRef<HTMLInputElement>(null);
  const saved = savedColours.some((idea) => idea.hex === colour.hex);
  const quantityValue = Number(quantity);
  const validQuantity = quantity.trim() !== "" && Number.isInteger(quantityValue) && quantityValue >= 1 && quantityValue <= 99;
  const technicalSheet = homeTechnicalSheet(product.id);
  const productReviews = showProductReviews ? getPublishedProductReviews(product.id) : [];
  const requestTechnicalSheet = `${homeContact.emailHref}?subject=${encodeURIComponent(`Technical data sheet request: ${product.name} (${product.series})`)}`;

  useEffect(() => {
    try { setSavedColours(savedIdeas(JSON.parse(localStorage.getItem("ekotint-colours") ?? "[]"))); } catch { /* Saving remains optional. */ }
    const query = new URLSearchParams(window.location.search);
    const requestedPack = Number(query.get("pack"));
    if (isHomePackSize(requestedPack)) setPackSize(requestedPack);
    const requested = query.get("colour");
    if (requested && /^[0-9a-f]{6}$/i.test(requested)) {
      const hex = `#${requested.toUpperCase()}`;
      const requestedName = query.get("colourName")?.trim().slice(0, 80);
      setColour(requestedName ? { name: requestedName, hex } : knownColourIdeas.find((idea) => idea.hex === hex) ?? { name: "Custom colour", hex });
      setHexDraft(hex);
      setHasChosenColour(true);
    }
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!consumeProductPreviewNavigation(product.id)) return;
      document.getElementById("paint-product-title")?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [product.id]);

  useEffect(() => {
    const dialog = enquiryOpen ? dialogRef.current : null;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [enquiryOpen]);

  function chooseColour(idea: HomeColourIdea) {
    setColour(idea); setHexDraft(idea.hex); setHasChosenColour(true); setHexError(""); setSaveStatus(""); setCartStatus("");
  }

  function draftColour(focusOnError = true): HomeColourIdea | null {
    const hex = `#${hexDraft.trim().replace(/^#/, "").toUpperCase()}`;
    if (!/^#[0-9A-F]{6}$/.test(hex)) {
      setHexError("Enter a valid colour code, for example #A493AE.");
      if (focusOnError) hexRef.current?.focus();
      return null;
    }
    return hex === colour.hex ? colour : knownColourIdeas.find((idea) => idea.hex === hex) ?? savedColours.find((idea) => idea.hex === hex) ?? { name: "Custom colour", hex };
  }

  function saveColour() {
    const idea = draftColour();
    if (!idea) return;
    chooseColour(idea);
    let stored: unknown[] = savedColours;
    try {
      const value: unknown = JSON.parse(localStorage.getItem("ekotint-colours") ?? "[]");
      if (Array.isArray(value)) stored = value;
    } catch { /* Keep the current visit's colours if storage is unavailable. */ }
    const existing = savedIdeas(stored).some((savedIdea) => savedIdea.hex === idea.hex);
    // Preserve unknown legacy entries when updating this one colour.
    const next = stored.filter((item) => typeof item === "string" ? knownColourIdeas.find((known) => known.name === item)?.hex !== idea.hex : !(item && typeof item === "object" && "hex" in item && typeof item.hex === "string" && item.hex.toUpperCase() === idea.hex));
    if (!existing) next.push({ ...idea, family: "Custom", note: "A colour idea to confirm with Ekotint for your chosen product." });
    setSavedColours(savedIdeas(next));
    try {
      localStorage.setItem("ekotint-colours", JSON.stringify(next));
      setSaveStatus(existing ? "Colour removed from your saved ideas." : "Colour saved in this browser.");
    } catch { setSaveStatus(existing ? "Colour removed for this visit." : "Colour kept for this visit."); }
  }

  function editHex(value: string) {
    setHexDraft(value); setHexError("");
    const hex = `#${value.trim().replace(/^#/, "").toUpperCase()}`;
    if (!/^#[0-9A-F]{6}$/.test(hex)) return;
    const idea = hex === colour.hex ? colour : knownColourIdeas.find((idea) => idea.hex === hex) ?? savedColours.find((idea) => idea.hex === hex) ?? { name: "Custom colour", hex };
    setColour(idea); setHasChosenColour(true); setSaveStatus(""); setCartStatus("");
  }

  function addToCart() {
    if (!validQuantity) return;
    const idea = draftColour();
    if (!idea) return;
    const result = addItem(product.id, idea, quantityValue, packSize);
    if (result.ok) chooseColour(idea);
    setCartStatus(result.message);
  }

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % infoTabs.length;
    else if (event.key === "ArrowLeft") next = (index + infoTabs.length - 1) % infoTabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = infoTabs.length - 1;
    else return;
    event.preventDefault();
    setActiveTab(infoTabs[next].id);
    document.getElementById(`${product.id}-tab-${infoTabs[next].id}`)?.focus();
  }

  function returnToColourPreview() {
    const heading = document.getElementById(`${product.id}-colour-heading`);
    heading?.focus({ preventScroll: true });
    document.getElementById("product-colour-studio")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }

  return <main className="home-paint-detail" id="main">
    <div className="hpd-container">
      <nav className="hpd-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#paints">Paints &amp; coatings</Link><span>/</span><span aria-current="page">{product.name}</span></nav>
      <section className="hpd-overview" id="product-colour-studio" aria-labelledby="paint-product-title">
        <HomeColourStudio colour={colour} productName={product.name} idPrefix={product.id} layout="product" scene={previewScene} />
        <div className="hpd-summary">
          <div className="hpd-product-meta">
          <div className="hpd-product-heading">
            <div><p className="hpd-kicker">{product.series}</p><h1 id="paint-product-title" tabIndex={-1}>{product.name}</h1></div>
            <HomeExamplePrice productId={product.id} showPackNote={false} />
          </div>
          <p className="hpd-finish">{product.finish}</p>
          <fieldset className="hpd-pack-sizes">
            <legend>Pack size</legend>
            <div>{homePackSizes.map((size) => <label key={size}>
              <input type="radio" name={`${product.id}-pack-size`} value={size} checked={packSize === size} onChange={() => { setPackSize(size); setCartStatus(""); }} />
              <span>{size} L</span>
            </label>)}</div>
          </fieldset>
          </div>
          <div className="hpd-colours">
            <div className="hpd-colour-heading"><h2 id={`${product.id}-colour-heading`} tabIndex={-1}>{preview.mask ? "Choose your colour" : "Project colour idea"}</h2><button className="hpd-save-colour" type="button" aria-label={`${saved ? "Remove" : "Save"} ${colour.name}${saved ? " from saved colours" : ""}`} aria-pressed={saved} onClick={saveColour}><Icon name="heart" size={17} style={{ fill: saved ? "currentColor" : "none" }} /><span>{saved ? "Saved" : "Save colour"}</span></button></div>
            <div className="hpd-swatches" role="group" aria-label="Colour ideas for your project">{colourIdeas.map((idea) => <button type="button" key={idea.hex} aria-label={`${preview.mask ? "Preview" : "Choose"} ${idea.name}, ${idea.hex}`} title={`${idea.name} · ${idea.hex}`} aria-pressed={colour.hex === idea.hex} onClick={() => chooseColour(idea)}><span style={{ background: idea.hex }} />{colour.hex === idea.hex && <Icon name="check" size={16} />}</button>)}</div>
            <p className="hpd-selected-colour"><strong>{colour.name}</strong><span>{colour.hex}</span></p>
            <div className="hpd-custom-colour-section" role="group" aria-labelledby={`${product.id}-custom-heading`} aria-describedby={`${product.id}-hex-help`}>
              <h3 id={`${product.id}-custom-heading`}>{preview.mask ? "Try your own colour" : "Save a colour idea"}</h3>
              <p className="hpd-custom-colour-help" id={`${product.id}-hex-help`}>{preview.help}</p>
              <div className="hpd-custom-colour">
                <label className="hpd-colour-picker"><span className="hpd-sr-only">Pick a custom project colour</span><input type="color" value={colour.hex} onChange={(event) => chooseColour(knownColourIdeas.find((idea) => idea.hex === event.target.value.toUpperCase()) ?? { name: "Custom colour", hex: event.target.value.toUpperCase() })} /></label>
                <label className="hpd-hex-label" htmlFor={`${product.id}-hex`}>Colour code (HEX)<input ref={hexRef} id={`${product.id}-hex`} value={hexDraft} onChange={(event) => editHex(event.target.value)} onBlur={() => { draftColour(false); }} spellCheck={false} autoComplete="off" maxLength={7} aria-invalid={!!hexError} aria-describedby={`${product.id}-hex-help${hexError ? ` ${product.id}-hex-error` : ""}`} /></label>
                {hexError && <p className="hpd-input-error" id={`${product.id}-hex-error`} role="alert">{hexError}</p>}
              </div>
            </div>
            <p className="hpd-save-status" role="status">{saveStatus}</p>
          </div>
          <div className="hpd-order">
          <div className="hpd-purchase">
            <div className="hpd-quantity"><label htmlFor={`${product.id}-quantity`}>Quantity</label><div><button type="button" aria-label="Decrease quantity" disabled={validQuantity && quantityValue <= 1} onClick={() => setQuantity(String(Math.max(1, (validQuantity ? quantityValue : 1) - 1)))}><Icon name="minus" size={17} /></button><input id={`${product.id}-quantity`} type="number" inputMode="numeric" min={1} max={99} step={1} value={quantity} onChange={(event) => setQuantity(event.target.value)} onBlur={() => { if (!validQuantity) setQuantity(String(Math.max(1, Math.min(99, Math.trunc(Number(quantity)) || 1)))); }} aria-invalid={!validQuantity} aria-describedby={!validQuantity ? `${product.id}-quantity-help` : undefined} /><button type="button" aria-label="Increase quantity" disabled={validQuantity && quantityValue >= 99} onClick={() => setQuantity(String(Math.min(99, (validQuantity ? quantityValue : 1) + 1)))}><Icon name="plus" size={17} /></button></div></div>
            <button className="hpd-button hpd-add-cart" type="button" disabled={!validQuantity} onClick={addToCart}>Add to cart <Icon name="arrow" size={20} /></button>
          </div>
          {!validQuantity && <p className="hpd-input-error" id={`${product.id}-quantity-help`}>Choose a whole quantity from 1 to 99.</p>}
          <p className="hpd-cart-status" role="status">{cartStatus}</p>
          <p className="hpd-order-note">Confirm price and shade availability with Ekotint.</p>
          <Link className="hpd-text-link hpd-quote-link" href={homeQuoteHref(product.id, packSize, validQuantity ? quantityValue : 1)} onClick={(event) => { if (!validQuantity) event.preventDefault(); }}>Get an estimate for this paint <Icon name="arrow" size={17} /></Link>
          <button className="hpd-text-link hpd-enquire-link" type="button" onClick={() => setEnquiryOpen(true)}>Have a question? Ask Ekotint <Icon name="arrow" size={17} /></button>
          </div>
        </div>
        <div className="hpd-preview-support">
          <p className="hcs-note">{preview.note}</p>
          <HomeRoomPhotoUpload idPrefix={`${product.id}-own-room`} context={previewScene === "interior" || previewScene === "preparation" || previewScene === "coating" ? "room" : "surface"} />
        </div>
      </section>

      <section className="hpd-information" aria-label={`${product.name} information`}>
        <div className={`hpd-tabs ${reviewStyles.tabs}`} role="tablist" aria-label="Product information">{infoTabs.map((tab, index) => <button type="button" key={tab.id} role="tab" id={`${product.id}-tab-${tab.id}`} aria-selected={activeTab === tab.id} aria-controls={`${product.id}-panel-${tab.id}`} tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => setActiveTab(tab.id)} onKeyDown={(event) => moveTab(event, index)}>{tab.label}</button>)}</div>
        <div className="hpd-tab-panel" role="tabpanel" id={`${product.id}-panel-description`} aria-labelledby={`${product.id}-tab-description`} hidden={activeTab !== "description"} tabIndex={0}><div><h2>About {product.name}</h2><p>{product.description}</p></div><dl className="hpd-product-facts"><div><dt>Collection</dt><dd>{product.series}</dd></div><div><dt>Finish &amp; application</dt><dd>{product.finish}</dd></div><div><dt>Pack sizes</dt><dd>{homePackSizes.map((size) => `${size} L`).join(" · ")}</dd></div></dl></div>
        <div className="hpd-tab-panel" role="tabpanel" id={`${product.id}-panel-shades`} aria-labelledby={`${product.id}-tab-shades`} hidden={activeTab !== "shades"} tabIndex={0}>
          <div><h2>Choosing a shade for {product.name}</h2><p>{preview.mask ? "Try the colour circles or enter a HEX code in the preview above, then save the colour you like." : "Choose and save a project colour idea above. The image is finish inspiration and stays unchanged."}</p><p>The colours are preview ideas. Confirm the available shades for {product.name} with Ekotint and compare a physical sample.</p><button className="hpd-text-link" type="button" onClick={returnToColourPreview}>{preview.mask ? "Change colour in the preview" : "Choose a project colour"} <Icon name="arrow" size={17} /></button></div>
          <div className="hpd-shade-summary"><span style={{ background: colour.hex }} /><div><small>Your colour idea for {product.name}</small><strong>{colour.name}</strong><span>{colour.hex}</span></div></div>
        </div>
        <div className="hpd-tab-panel" role="tabpanel" id={`${product.id}-panel-technical`} aria-labelledby={`${product.id}-tab-technical`} hidden={activeTab !== "technical"} tabIndex={0}>
          <div><h2>{product.name} technical data</h2><p>{technicalSheet ? "Read the supplied technical data sheet for surface preparation, thinning and application guidance." : `Ask Ekotint for the technical data sheet for ${product.name} in the ${product.series}.`}</p></div>
          <div className="hpd-technical-links">
            {technicalSheet ? <a className="hpd-document" href={technicalSheet.href} target="_blank" rel="noreferrer"><Icon name="document" size={27} /><span><strong>Open {product.name} TDS</strong><small>{technicalSheet.title} · PDF · page {technicalSheet.page}</small></span><Icon name="download" size={20} /></a> : <a className="hpd-document" href={requestTechnicalSheet}><Icon name="mail" size={27} /><span><strong>Request {product.name} TDS</strong><small>Contact Ekotint for this product’s sheet</small></span><Icon name="arrow" size={20} /></a>}
            <a className="hpd-text-link" href={homeTechnicalGuide} target="_blank" rel="noreferrer">Browse supplied TDS collection <Icon name="document" size={17} /></a>
          </div>
        </div>
        {showProductReviews && <div className="hpd-tab-panel" role="tabpanel" id={`${product.id}-panel-reviews`} aria-labelledby={`${product.id}-tab-reviews`} hidden={activeTab !== "reviews"} tabIndex={0} data-review-scope="product" data-product-id={product.id}>
          <div><h2>Reviews for {product.name}</h2><p>Customer feedback on this paint and its finish.</p></div>
          <div className={reviewStyles.content}>
            {productReviews.length > 0 ? <div className={reviewStyles.list}>{productReviews.map((review) => <figure className={reviewStyles.review} key={review.id}>
              <blockquote><p>{review.quote}</p></blockquote>
              <figcaption><strong>{review.customerName}</strong><span>{review.project}</span>{review.sourceUrl ? <a className="hpd-text-link" href={review.sourceUrl} target="_blank" rel="noreferrer">{review.sourceLabel || "Read review"} <Icon name="arrow" size={15} /></a> : review.sourceLabel && <small>{review.sourceLabel}</small>}</figcaption>
            </figure>)}</div> : <div className={reviewStyles.empty}><p>No reviews have been published for this paint yet.</p><button className="hpd-text-link" type="button" onClick={() => setEnquiryOpen(true)}>Ask about {product.name} <Icon name="arrow" size={17} /></button></div>}
          </div>
        </div>}
      </section>

      <HomeRelatedPaints product={product} colour={hasChosenColour ? colour : undefined} />
    </div>

    <dialog className="hpd-enquiry-dialog" ref={dialogRef} aria-labelledby="hpd-enquiry-heading" onCancel={(event) => { event.preventDefault(); setEnquiryOpen(false); }} onClose={() => setEnquiryOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setEnquiryOpen(false); }}>
      <div className="hpd-enquiry-inner"><button className="hpd-dialog-close" type="button" aria-label="Close enquiry" onClick={() => setEnquiryOpen(false)}><Icon name="close" size={22} /></button><p className="hpd-kicker">LET’S TALK COLOUR</p><h2 id="hpd-enquiry-heading">Tell us about your project.</h2>{enquiryOpen && <HomeEnquiryForm paint={product} colour={hasChosenColour ? colour : null} savedColours={savedColours} colourOptions={homeColourIdeas} />}</div>
    </dialog>
  </main>;
}
