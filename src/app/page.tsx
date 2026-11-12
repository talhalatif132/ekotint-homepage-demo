"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductArtwork from "@/components/HomeProductArtwork";
import HomeExamplePrice from "@/components/HomeExamplePrice";
import HomeCustomerStories from "@/components/HomeCustomerStories";
import HomeEnquiryForm from "@/components/HomeEnquiryForm";
import HomeTypographyComparison from "@/components/HomeTypographyComparison";
import { homePaints, homePaintFilters, featuredHomePaints, homeTechnicalGuide, homeContact, type HomePaint } from "@/lib/homepage-content";
import "./homepage.css";
import "./typography.css";
import "./hero-minimal.css";
import "./product-presentation.css";


type Shade = { name: string; hex: string; family: string; note: string };
const shades: Shade[] = [
  { name: "Soft Linen", hex: "#DDD5C5", family: "Neutrals", note: "A soft, sun-warmed neutral." },
  { name: "Chalk White", hex: "#EEEAE1", family: "Neutrals", note: "An easy, quietly luminous white." },
  { name: "Quiet Stone", hex: "#B8B4A7", family: "Neutrals", note: "A grounded, gentle grey." },
  { name: "Warm Sand", hex: "#C6AF93", family: "Neutrals", note: "A little warmth, beautifully understated." },
  { name: "Olive Grove", hex: "#777D5D", family: "Greens", note: "Earthy, familiar and full of character." },
  { name: "Still Sage", hex: "#A6AF98", family: "Greens", note: "A breath of calm for your everyday." },
  { name: "Fern Shade", hex: "#55614F", family: "Greens", note: "A deep green with a gentle side." },
  { name: "Eucalyptus", hex: "#BDC5B0", family: "Greens", note: "Fresh, softened and naturally easy." },
  { name: "Terracotta", hex: "#BA7C63", family: "Earth tones", note: "The warmth of clay, the feeling of home." },
  { name: "Clay Blush", hex: "#C99E8D", family: "Earth tones", note: "A quiet blush with an earthy soul." },
  { name: "Burnt Sienna", hex: "#96614D", family: "Earth tones", note: "Rich, enveloping and expressive." },
  { name: "Desert Rose", hex: "#D7B6A2", family: "Earth tones", note: "A warm pink softened by sunlight." },
  { name: "Blue Hour", hex: "#788C9C", family: "Blues", note: "The stillness of a late afternoon sky." },
  { name: "Sea Mist", hex: "#BCCAC7", family: "Blues", note: "An airy blue with a hint of green." },
  { name: "Deep Harbour", hex: "#475E6A", family: "Blues", note: "A confident colour to settle into." },
  { name: "Cloud Blue", hex: "#D2DDE0", family: "Blues", note: "Light, open and full of possibility." },
  { name: "Dusty Lilac", hex: "#A493AE", family: "Purples", note: "A soft lilac with a quietly expressive spirit." },
  { name: "Plum Velvet", hex: "#705579", family: "Purples", note: "Rich, thoughtful and beautifully enveloping." },
  { name: "Lilac Mist", hex: "#D5CBDE", family: "Purples", note: "A gentle touch of colour, a little room to breathe." },
  { name: "Soft Mauve", hex: "#B496AC", family: "Purples", note: "A little warmth. A softer way to see your space." },
];
const families = ["Purples", "Neutrals", "Blues", "Lavender", "Magenta", "Greens", "Earth tones"];
const brandShades: Shade[] = [
  { name: "Ekotint Blue", hex: "#2D56A4", family: "Blues", note: "An inspiration colour from Ekotint’s brand palette. Confirm a physical paint shade with the team." },
  { name: "Ekotint Lavender", hex: "#816FB0", family: "Lavender", note: "An inspiration colour from Ekotint’s brand palette. Confirm a physical paint shade with the team." },
  { name: "Ekotint Magenta", hex: "#B14E9B", family: "Magenta", note: "An inspiration colour from Ekotint’s brand palette. Confirm a physical paint shade with the team." },
];
// Illustrative screen-colour variations, not client-approved paint shade codes.
const tonalShades: Shade[] = [
  { name: "Airy Blue", hex: "#C4D0E6", family: "Blues", note: "A light blue inspiration, developed from Ekotint’s brand blue." },
  { name: "Soft Cobalt", hex: "#7D96C7", family: "Blues", note: "A softened blue inspiration, developed from Ekotint’s brand blue." },
  { name: "Midnight Blue", hex: "#234380", family: "Blues", note: "A deeper blue inspiration, developed from Ekotint’s brand blue." },
  { name: "Lavender Veil", hex: "#DCD7E9", family: "Lavender", note: "A light lavender inspiration, developed from Ekotint’s brand lavender." },
  { name: "Soft Lavender", hex: "#B1A6CE", family: "Lavender", note: "A softened lavender inspiration, developed from Ekotint’s brand lavender." },
  { name: "Deep Lavender", hex: "#655789", family: "Lavender", note: "A deeper lavender inspiration, developed from Ekotint’s brand lavender." },
  { name: "Petal Magenta", hex: "#E9CDE3", family: "Magenta", note: "A light magenta inspiration, developed from Ekotint’s brand magenta." },
  { name: "Soft Magenta", hex: "#CF91C1", family: "Magenta", note: "A softened magenta inspiration, developed from Ekotint’s brand magenta." },
  { name: "Deep Magenta", hex: "#8A3D79", family: "Magenta", note: "A deeper magenta inspiration, developed from Ekotint’s brand magenta." },
];
// Keep shades[] itself unchanged: the room favourites/defaults use its indices.
// Each visible family has four shades. Preserve older blues for saved/linked colours.
const paletteShades = [...brandShades, ...tonalShades, ...shades.filter((shade) => shade.family !== "Blues")];
const knownShades = [...paletteShades, ...shades.filter((shade) => shade.family === "Blues")];
const familySwatches: Record<string, string> = {
  Purples: shades[16].hex,
  Neutrals: shades[0].hex,
  Greens: shades[5].hex,
  "Earth tones": shades[8].hex,
  Blues: brandShades[0].hex,
  Lavender: brandShades[1].hex,
  Magenta: brandShades[2].hex,
};
// Colour ideas for enquiries; product-specific shade availability is still pending.
const enquiryColourOptions = [shades[16], ...brandShades, shades[0], shades[1], shades[5], shades[8]];
const products = homePaints;
type Product = HomePaint;

type Modal = "search" | "saved" | "enquiry" | null;

const stories = [
  { image: "/images/hero-wide-lavender-bedroom-v1.webp", mobileImage: "/images/hero-brand-lavender-bedroom.webp", width: 1672, height: 941, title: "Lavender bedroom", position: "center center", mobilePosition: "center center", alt: "Lavender bedroom with a linen bed, walnut bedside furniture and soft natural light" },
  { image: "/images/hero-purple-room.webp", mobileImage: "/images/hero-purple-room.webp", width: 1536, height: 1024, title: "Purple living room", position: "center 55%", mobilePosition: "60% center", alt: "Dusty-lilac living room with a cream sofa, walnut coffee table and afternoon sunshine" },
  { image: "/images/hero-wide-blue-dining-v1.webp", mobileImage: "/images/hero-brand-blue-dining.webp", width: 1672, height: 941, title: "Blue dining room", position: "center center", mobilePosition: "center center", alt: "Ekotint-blue dining room with a walnut table, pale chairs and warm daylight" },
  { image: "/images/hero-wide-magenta-reading-v1.webp", mobileImage: "/images/hero-brand-magenta-reading.webp", width: 1672, height: 941, title: "Magenta reading room", position: "center center", mobilePosition: "center center", alt: "Magenta-wall reading corner with a cream lounge chair and a walnut pedestal table" },
];
const questions = [
  { q: "Which Ekotint range should I start with?", a: "Start with your surface and the finish you want. Explore Premium and Assez wall paints, putties and primers, or specialist enamels, varnish, epoxy and Eko Shade roof coating. The Ekotint team can help you confirm the right product and preparation for your project." },
  { q: "Can I explore my own custom colour?", a: "Yes. Choose a paint to open its product page, then use the colour picker or enter a six-digit HEX code. Save your ideas, then confirm the physical shade and the chosen product’s colour options with Ekotint. Screen colours are a guide." },
  { q: "What should I choose for exterior walls or a roof?", a: "Explore Clima Shield exterior acrylic wall emulsion and Weather Paint for exterior walls, or Eko Shade for a roof project. Walls and roofs need different coating systems and preparation. Speak with Ekotint about your surface before choosing." },
  { q: "Do you have finishes for wood and metal?", a: "The Premium range includes Eko Gleam gloss enamel, Synthetic Varnish, Epoxy, Eko PrimeOxide and 2K Hardener. Check the technical guidance for the exact surface, compatible coating system and application method before use." },
  { q: "How much paint will I need?", a: "Measure the area, subtract openings and use the spreading rate for your chosen product. Coverage is stated per coat in the technical sheets and varies by surface and application. Confirm the number of coats and available pack sizes with Ekotint." },
  { q: "Where can I find the technical guidance?", a: "Use the Technical data sheets link in this Paint advice section. It includes product-specific application, dilution, preparation and drying information. Ask Ekotint for the current sheet for any coating not covered in that document." },
];

function readSavedShades(value: unknown): Shade[] {
  if (!Array.isArray(value)) return [];
  const result = value.flatMap((item): Shade[] => {
    if (typeof item === "string") { const found = knownShades.find((s) => s.name === item); return found ? [found] : []; }
    if (item && typeof item === "object" && typeof item.name === "string" && /^#[0-9a-f]{6}$/i.test(item.hex) && typeof item.family === "string") {
      return [{ name: item.name, hex: item.hex.toUpperCase(), family: item.family, note: typeof item.note === "string" ? item.note : "Your saved colour." }];
    }
    return [];
  });
  return Array.from(new Map(result.map((item) => [item.hex.toUpperCase(), item])).values());
}

export default function Home() {
  const [family, setFamily] = useState("Purples");
  const [refinedTypography, setRefinedTypography] = useState(true);
  const [selected, setSelected] = useState<Shade>(shades[16]);
  const [hasChosenColour, setHasChosenColour] = useState(false);
  const [favorites, setFavorites] = useState<Shade[]>([]);
  const [modal, setModal] = useState<Modal>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [productFilter, setProductFilter] = useState("Featured");
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [faq, setFaq] = useState<number | null>(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [heroFocusPaused, setHeroFocusPaused] = useState(false);
  const [storyDwell, setStoryDwell] = useState(0);
  const [paintVisit, setPaintVisit] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);
  const story = stories[storyIndex];
  const enquiryColour = hasChosenColour ? selected : null;
  const isSaved = (shade: Shade) => favorites.some((s) => s.hex.toUpperCase() === shade.hex.toUpperCase());

  useEffect(() => {
    if (productGridRef.current) productGridRef.current.scrollLeft = 0;
  }, [productFilter]);

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("colour");
    if (!value || !/^[0-9a-f]{6}$/i.test(value)) return;
    const hex = `#${value.toUpperCase()}`;
    setSelected(knownShades.find((shade) => shade.hex === hex) || { name: "Custom colour", hex, family: "Custom", note: "Your own colour, made personal." });
    setHasChosenColour(true);
    setPaintVisit((visit) => visit + 1);
  }, []);
  useEffect(() => {
    try { setFavorites(readSavedShades(JSON.parse(localStorage.getItem("ekotint-colours") || "[]"))); } catch { /* Local storage is optional. */ }
  }, []);
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    const scheduleStory = () => {
      clearTimeout(timer);
      setReducedMotion(motionPreference.matches);
      if (!playing || heroFocusPaused || modal || mobileMenu || navOpen || document.hidden || motionPreference.matches) return;
      timer = setTimeout(() => setStoryIndex((i) => (i + 1) % stories.length), 5000);
    };
    scheduleStory();
    document.addEventListener("visibilitychange", scheduleStory);
    motionPreference.addEventListener("change", scheduleStory);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", scheduleStory);
      motionPreference.removeEventListener("change", scheduleStory);
    };
  }, [playing, heroFocusPaused, modal, mobileMenu, navOpen, storyIndex, storyDwell]);
  useEffect(() => {
    const next = stories[(storyIndex + 1) % stories.length];
    const preload = new Image();
    preload.src = window.matchMedia("(max-width: 800px)").matches ? next.mobileImage : next.image;
  }, [storyIndex]);
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(""), 2600); return () => clearTimeout(timer); }, [toast]);
  useEffect(() => {
    if (!navOpen) return;
    const closeOutside = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) setNavOpen(false); };
    const closeEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setNavOpen(false); document.getElementById("colour-menu-trigger")?.focus(); } };
    document.addEventListener("pointerdown", closeOutside); document.addEventListener("keydown", closeEscape);
    return () => { document.removeEventListener("pointerdown", closeOutside); document.removeEventListener("keydown", closeEscape); };
  }, [navOpen]);
  useEffect(() => {
    if (!modal && !mobileMenu) return;
    const previous = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => modalRef.current?.querySelector<HTMLElement>("button, input, a, select, textarea")?.focus(), 40);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setModal(null); setMobileMenu(false); }
      if (event.key === "Tab" && modalRef.current) {
        const items = Array.from(modalRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input, a[href], select, textarea')).filter((el) => el.offsetParent !== null);
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(timer); document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKey); previous?.focus(); };
  }, [modal, mobileMenu]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const previousHeight = root.style.getPropertyValue("--home-header-height");
    const previousPriority = root.style.getPropertyPriority("--home-header-height");
    const updateHeight = () => root.style.setProperty("--home-header-height", `${header.getBoundingClientRect().height}px`);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => {
      observer.disconnect();
      if (previousHeight) root.style.setProperty("--home-header-height", previousHeight, previousPriority);
      else root.style.removeProperty("--home-header-height");
    };
  }, []);

  useEffect(() => {
    if (!paintVisit) return;
    const workspace = document.getElementById("paints");
    if (!workspace) return;
    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0;
    // Close overlays before revealing the paint selection for this colour idea.
    window.scrollTo({
      top: window.scrollY + workspace.getBoundingClientRect().top - headerHeight - 8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [paintVisit]);

  function saveShade(shade: Shade) {
    setFavorites((current) => {
      const exists = current.some((s) => s.hex.toUpperCase() === shade.hex.toUpperCase());
      const next = exists ? current.filter((s) => s.hex.toUpperCase() !== shade.hex.toUpperCase()) : [...current, shade];
      try { localStorage.setItem("ekotint-colours", JSON.stringify(next)); } catch { /* The current session still works. */ }
      setToast(exists ? `${shade.name} removed from your colours` : `${shade.name} saved to your colours`);
      return next;
    });
  }
  function showShade(shade: Shade) {
    setSelected(shade); setHasChosenColour(true); setModal(null); setNavOpen(false);
    setPaintVisit((visit) => visit + 1);
  }
  function paintHref(paint: Product) {
    const preference = hasChosenColour ? `?${new URLSearchParams({ colour: selected.hex.slice(1), colourName: selected.name })}` : "";
    return `/products/${paint.id}/${preference}`;
  }
  function browseFamily(name: string) { setFamily(name); setNavOpen(false); setMobileMenu(false); document.getElementById("colours")?.scrollIntoView({ behavior: "smooth" }); }
  function openEnquiry() { setModal("enquiry"); setMobileMenu(false); setNavOpen(false); }
  function selectStory(index: number) { setStoryIndex(index); setStoryDwell((dwell) => dwell + 1); }
  function stepStory(step: number) { selectStory((storyIndex + step + stories.length) % stories.length); }
  function toggleStories() {
    // An explicit Play action resumes even when the control keeps keyboard focus.
    if (!playing || heroFocusPaused) { setPlaying(true); setHeroFocusPaused(false); setStoryDwell((dwell) => dwell + 1); }
    else setPlaying(false);
  }
  const searchedShades = paletteShades.filter((s) => `${s.name} ${s.family} ${s.hex}`.toLowerCase().includes(search.toLowerCase()));
  const searchedProducts = products.filter((p) => `${p.name} ${p.category} ${p.series}`.toLowerCase().includes(search.toLowerCase()));
  const visibleProducts = productFilter === "Featured" ? featuredHomePaints : productFilter === "All products" ? products : products.filter((p) => p.category === productFilter);
  const storyStyle = { "--hero-image-position": story.position, "--hero-mobile-position": story.mobilePosition } as React.CSSProperties;

  return <div className={`home-site${refinedTypography ? " typography-refined" : ""}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="utility-bar">
      <div className="utility-contact">
        <a className="utility-phone" href={homeContact.phoneHref} aria-label={`Call Ekotint on ${homeContact.phone}`}><Icon name="phone" size={15} />{homeContact.phone}</a>
        <a className="utility-email" href={homeContact.emailHref} aria-label={`Email Ekotint at ${homeContact.email}`}><Icon name="mail" size={16} /><span className="utility-email-full">{homeContact.email}</span><span className="utility-email-short">Email us</span></a>
      </div>
      <span className="utility-tagline">The perfect chemistry.</span>
      <nav className="utility-links" aria-label="Contact and help">
        <a className="utility-location" href="#contact" aria-label="Ekotint location and contact details in Karachi"><Icon name="pin" size={15} /><span>Karachi<span className="utility-country">, Pakistan</span></span></a>
        <a className="utility-advice" href="#advice">Paint advice</a>
        <a className="utility-contact-link" href="#contact">Contact us <Icon name="arrow" size={14} /></a>
      </nav>
    </div>
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#main" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" alt="Ekotint Paints — The Perfect Chemistry" width="153" height="62" /></a>
      <nav className="desktop-nav" aria-label="Main navigation"><button id="colour-menu-trigger" aria-expanded={navOpen} aria-controls="colour-menu" onClick={() => setNavOpen(!navOpen)}>Explore colours <Icon name="chevron" size={14} /></button><a href="#paints" onClick={() => setNavOpen(false)}>Paints & coatings</a><a href="#why-ekotint" onClick={() => setNavOpen(false)}>About Ekotint</a><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search colours and paints" onClick={() => { setSearch(""); setNavOpen(false); setModal("search"); }}><Icon name="search" /></button><button className="icon-button saved-button" aria-label={`Saved colours, ${favorites.length} saved`} onClick={() => { setNavOpen(false); setModal("saved"); }}><Icon name="heart" />{favorites.length > 0 && <span className="saved-count">{favorites.length}</span>}</button><button className="icon-button mobile-menu-button" aria-label="Open menu" aria-expanded={mobileMenu} onClick={() => setMobileMenu(true)}><Icon name="menu" size={25} /></button></div>
      {navOpen && <div className="mega-menu" id="colour-menu"><div className="mega-inner"><div><p className="eyebrow">FIND YOUR KIND OF COLOUR</p><h2>A little curiosity.<br /><em>Endless possibilities.</em></h2><a className="text-link" href="#colours" onClick={() => setNavOpen(false)}>Explore the palettes <Icon name="arrow" size={18} /></a></div><div className="mega-families">{families.map((name) => <button key={name} onClick={() => browseFamily(name)}><span style={{ background: familySwatches[name] }} />{name}<Icon name="arrow" size={16} /></button>)}</div><div className="mega-tools"><a href="#paints" onClick={() => setNavOpen(false)}>Choose a paint to try colour <span>↗</span></a><button onClick={() => { setNavOpen(false); setModal("saved"); }}>Your saved colours <Icon name="heart" size={18} /></button><p>Explore a starting point.<br />Make it entirely your own.</p></div></div></div>}
    </header>

    <main id="main">
      <section className="immersive-hero" style={storyStyle} role="region" aria-roledescription="carousel" aria-label="Featured room colours" onFocusCapture={(e) => { if (e.target.matches(":focus-visible")) setHeroFocusPaused(true); }} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHeroFocusPaused(false); }}>
        <picture className="immersive-hero-picture" key={story.image}>
          <source media="(max-width: 800px)" srcSet={story.mobileImage} />
          <img className="immersive-hero-image" src={story.image} alt={story.alt} width={story.width} height={story.height} fetchPriority="high" decoding="async" />
        </picture>
        <div className="immersive-hero-content">
          <h1>Make room for colour.</h1>
          <a className="immersive-hero-action" href="#paints">Explore paints <Icon name="arrow" size={20} /></a>
        </div>
        <div className="immersive-hero-controls">
          <button className="immersive-hero-control previous" type="button" aria-label="Previous colour story" onClick={() => stepStory(-1)}><Icon name="arrow" size={20} /></button>
          <div className="immersive-hero-dots" role="group" aria-label="Choose a colour story">{stories.map((item, i) => <button type="button" key={item.image} aria-label={`Show ${item.title.toLowerCase()}`} aria-current={i === storyIndex ? "true" : undefined} onClick={() => selectStory(i)}><span /></button>)}</div>
          <button className="immersive-hero-control" type="button" disabled={reducedMotion} title={reducedMotion ? "Automatic slides are off for reduced motion" : undefined} aria-label={reducedMotion ? "Automatic slides are off for reduced motion" : playing && !heroFocusPaused ? "Pause colour stories" : "Play colour stories"} onClick={toggleStories}><Icon name={!reducedMotion && playing && !heroFocusPaused ? "pause" : "play"} size={17} /></button>
          <button className="immersive-hero-control" type="button" aria-label="Next colour story" onClick={() => stepStory(1)}><Icon name="arrow" size={20} /></button>
        </div>
      </section>

      <nav className="confidence-strip" aria-label="Get to know Ekotint">
        <a href="#why-ekotint"><Icon name="layers" size={25} /><span><strong>The people behind your paint</strong><small>Get to know Ekotint</small></span><Icon name="arrow" size={18} /></a>
        <a href="#paints"><Icon name="home" size={25} /><span><strong>Try colour with your paint</strong><small>Choose a paint to open its preview</small></span><Icon name="arrow" size={18} /></a>
        <a href={homeContact.phoneHref}><Icon name="phone" size={24} /><span><strong>A little help choosing?</strong><small>Talk to Ekotint · {homeContact.phone}</small></span><Icon name="arrow" size={18} /></a>
      </nav>

      <section className="section product-section client-paints" aria-labelledby="paints-heading">
        <div className="product-section-heading"><h2 id="paints-heading">Explore Ekotint paints</h2><p>Find a finish for your walls, roof, wood and metal.</p></div>
        {hasChosenColour && <div className="paint-colour-context" role="status"><span style={{ background: selected.hex }} /><p><strong>{selected.name}</strong> · Choose a paint to preview this colour.</p><button type="button" onClick={() => setHasChosenColour(false)} aria-label="Clear colour preference"><Icon name="close" size={15} /></button></div>}
        <div className="product-toolbar" id="paints"><div className="product-tabs" role="group" aria-label="Browse paints by surface">{homePaintFilters.map((name) => <button type="button" key={name} className={productFilter === name ? "active" : ""} aria-pressed={productFilter === name} aria-controls="home-product-grid" onClick={() => setProductFilter(name)}>{name}</button>)}</div><span className="sr-only" aria-live="polite">{visibleProducts.length} {productFilter === "Featured" ? "featured finishes" : visibleProducts.length === 1 ? "finish" : "finishes"}</span></div>
        <div className={`product-grid ${visibleProducts.length === 1 ? "single-product" : ""}`} id="home-product-grid" ref={productGridRef} style={{ "--visible-products": visibleProducts.length } as React.CSSProperties}>
          {visibleProducts.map((p) => <article className={`product-card product-${p.id}`} key={p.id}>
            <Link className="product-photo" href={paintHref(p)} aria-label={`View ${p.name} details and colour preview`}><ProductArtwork product={p} /></Link>
            <div className="product-caption">
              <div className="product-description"><span className="product-series">{p.series}</span><h3><Link href={paintHref(p)}>{p.name}</Link></h3>{visibleProducts.length === 1 && <p>{p.finish}</p>}</div>
              <div className="product-price-action">
                <HomeExamplePrice productId={p.id} />
                {visibleProducts.length === 1 && <Link className="product-open" href={paintHref(p)} aria-label={`View ${p.name} details`}><Icon name="plus" size={19} /></Link>}
              </div>
            </div>
          </article>)}
        </div>
        <div className="product-collection-action"><button type="button" className="button button-brand" disabled>Explore all products<Icon name="arrow" size={19} /></button></div>
      </section>

      <section className="brand-confidence section" id="why-ekotint" aria-labelledby="confidence-title">
        <div className="confidence-intro"><p className="eyebrow">THE PEOPLE BEHIND YOUR PAINT</p><h2 id="confidence-title">Beautiful colour.<br /><em>Clear answers.</em></h2><p>Choosing paint should feel exciting. And knowing what goes on your walls should feel simple.</p><p>We’re Ekotint, a paint manufacturer in Karachi. From decorative walls to protective coatings, start with your space and let’s find the right way forward.</p><a href={homeContact.phoneHref} className="text-link">Talk to Ekotint <Icon name="arrow" size={19} /></a></div>
        <div className="confidence-details">
          <div className="confidence-detail"><span className="confidence-number">01</span><div><h3>The right starting point.</h3><p>Interior or exterior. Wood, metal or roof. Explore finishes by surface, with preparation considered from the start.</p><a href="#paints">Find your finish <Icon name="arrow" size={17} /></a></div></div>
          <div className="confidence-detail"><span className="confidence-number">02</span><div><h3>The details, in writing.</h3><p>Read product-specific guidance on preparation, application and drying in Ekotint’s technical data sheets.</p></div></div>
          <div className="confidence-detail"><span className="confidence-number">03</span><div><h3>A conversation before a decision.</h3><p>Have a shade in mind or a tricky surface? Speak directly with Ekotint to confirm the colour and coating for your project.</p><a href={homeContact.phoneHref}>{homeContact.phone} <Icon name="phone" size={16} /></a></div></div>
        </div>
      </section>

      <section className="exterior-feature client-exterior"><div className="exterior-image"><img src="/images/premium-exterior-yellow-v2.webp" alt="Architectural inspiration with cool yellow exterior walls, white roof edges and a timber entrance" width="1536" height="1024" loading="lazy" /><span>OUTSIDE, REIMAGINED.</span></div><div className="exterior-copy"><p className="eyebrow">WALLS. ROOFS. FIRST IMPRESSIONS.</p><h2>A beautiful<br /><em>way home.</em></h2><p>Bring a considered finish to your exterior walls with Clima Shield. Start your roof project with Eko Shade, the dedicated roof coating in the Ekotint collection.</p><Link className="button button-white" href={paintHref(homePaints[1])}>Explore Clima Shield <Icon name="arrow" size={19} /></Link><Link className="roof-coating-callout" href={paintHref(homePaints.find((p) => p.id === "eko-shade")!)}><span className="roof-pack"><ProductArtwork product={homePaints.find((p) => p.id === "eko-shade")!} /></span><span><small>ABOVE IT ALL</small><strong>Meet Eko Shade.</strong><span>A coating made for your roof.</span></span><Icon name="arrow" size={23} /></Link></div></section>
      <section className="finishes-section section" id="coatings" aria-labelledby="finishes-heading">
        <div className="finishes-intro">
          <div><p className="eyebrow">THE PREMIUM SERIES</p><h2 id="finishes-heading">Featured<br /><em>finishes.</em></h2></div>
          <div className="finishes-description">
            <p>Gloss enamel, varnish and epoxy for the details that complete your space. Find the finish and preparation that suit your surface.</p>
            <button className="text-link" onClick={() => { setProductFilter("Wood & metal"); document.getElementById("paints")?.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); }}>Explore protective finishes <Icon name="arrow" size={20} /></button>
            <span className="finishes-signature">BEYOND THE WALLS</span>
          </div>
        </div>
        <div className="finishes-gallery">
          {[{ id: "eko-gleam", label: "Gloss enamel" }, { id: "synthetic-varnish", label: "Varnish" }, { id: "epoxy", label: "Two-component coating" }].map((item, index) => {
            const product = homePaints.find((paint) => paint.id === item.id)!;
            return (
              <Link className={`finish-card finish-card-${item.id}${index === 0 ? " finish-card-featured" : ""}`} key={item.id} href={paintHref(product)} aria-label={`View ${product.name} details and colour preview`}>
                <span className="finish-card-heading"><small>{item.label}</small><strong>{product.name}</strong><HomeExamplePrice productId={product.id} /></span>
                <span className="finish-pack"><ProductArtwork product={product} compact /></span>
                <span className="finish-card-action">Explore this paint <span className="finish-card-arrow"><Icon name="arrow" size={18} /></span></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="colour-section" id="colours">
        <div className="section colour-inner">
          <div className="section-heading">
            <div><p className="eyebrow">FOLLOW YOUR FEELING</p><h2>So many possibilities.<br /><span>One that feels like you.</span></h2></div>
            <button className="text-link" onClick={() => setModal("saved")}>Your saved colours <Icon name="heart" size={18} /></button>
          </div>
          <div className="colour-toolbar">
            <div className="family-tabs" role="group" aria-label="Colour families">
              {families.map((name) => <button key={name} aria-pressed={family === name} aria-controls="shade-grid" className={family === name ? "active" : ""} onClick={() => setFamily(name)}>{name}</button>)}
            </div>
            <span>Find a starting point. Make it yours.</span>
          </div>
          <div className="shade-grid" id="shade-grid" role="region" aria-label={`${family} colours`}>
            {paletteShades.filter((s) => s.family === family).map((s) => (
              <article className="shade-card" key={s.name}>
                <button className="shade-open" aria-label={`Choose a paint to preview ${s.name}`} onClick={() => showShade(s)}>
                  <span className="shade-swatch" style={{ backgroundColor: s.hex }} aria-hidden="true" />
                  <span className="shade-title">{s.name}<small>{s.hex}</small></span>
                  <span className="shade-try">Choose a paint <span className="shade-arrow"><Icon name="arrow" size={19} /></span></span>
                </button>
                <button className={`shade-save ${isSaved(s) ? "is-saved" : ""}`} aria-label={`${isSaved(s) ? "Remove" : "Save"} ${s.name}`} aria-pressed={isSaved(s)} onClick={() => saveShade(s)}><Icon name="heart" size={19} /></button>
              </article>
            ))}
          </div>
          <div className="palette-note"><p>Illustrative palette ideas. Final shades and physical samples should be confirmed with Ekotint.</p><span>Made personal, by you.</span></div>
        </div>
      </section>

      <section className="advice-section" id="advice"><div className="section advice-inner"><div className="advice-intro"><p className="eyebrow">LET’S MAKE IT FEEL SIMPLE</p><h2>Good questions.<br /><em>Great beginnings.</em></h2><p>A good finish starts with the right preparation.<br />Explore the product guidance before you paint.</p><a className="text-link technical-guide-link" href={homeTechnicalGuide} target="_blank" rel="noreferrer">Technical data sheets <Icon name="download" size={19} /></a><span className="technical-guide-meta">PDF · 9 pages · Preparation & application guidance</span><button className="text-link advice-project-link" onClick={openEnquiry}>Discuss your project <Icon name="arrow" size={18} /></button></div><div className="faq-list">{questions.map((item, index) => <div className={`faq-item ${faq === index ? "open" : ""}`} key={item.q}><h3><button aria-expanded={faq === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaq(faq === index ? null : index)}><span>{item.q}</span><Icon name={faq === index ? "minus" : "plus"} size={19} /></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={faq !== index}><p>{item.a}</p></div></div>)}</div></div></section>

      <HomeCustomerStories />

      <section className="closing-cta contact-cta" id="contact" aria-labelledby="contact-heading"><div className="closing-inner">
        <div className="contact-intro"><p className="eyebrow">LET’S MAKE SOMETHING BEAUTIFUL.</p><h2 id="contact-heading">Your next chapter.<br /><em>Let’s talk colour.</em></h2><p>A room you’re rethinking. A home you’re making.<br /> We’d love to hear what you have in mind.</p><button className="contact-plan-link" onClick={openEnquiry}>Tell us about your project <Icon name="arrow" size={20} /></button><small>Share your details and the finish you have in mind.</small></div>
        <div className="contact-card"><span className="contact-card-label"><Icon name="phone" size={20} /> TALK TO EKOTINT</span><a className="contact-number" href={homeContact.phoneHref}>{homeContact.phone}<Icon name="arrow" size={26} /></a><p>Let’s discuss your surface, your colour<br />and the finish you’re looking for.</p><a className="contact-email" href={homeContact.emailHref}><Icon name="mail" size={17} /><span>{homeContact.email}</span></a><div className="contact-address"><Icon name="pin" size={21} /><div><strong>Karachi, Pakistan</strong><address>{homeContact.address}</address></div></div></div>
      </div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><a href="#main" className="footer-logo" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" alt="Ekotint Paints" width="181" height="73" /></a><p>A world of colour.<br /><em>Made personal.</em></p><a href="#main" className="back-top" aria-label="Back to top"><Icon name="arrow" size={24} /></a></div><div className="footer-links"><div><h3>Explore Ekotint</h3><a href="#paints">Paints & coatings</a><a href="#colours">Explore colours</a><a href="#why-ekotint">Get to know Ekotint</a></div><div><h3>Your next project</h3><button onClick={openEnquiry}>Plan your space</button><button onClick={() => setModal("saved")}>Your saved colours</button><a href="#paints">Try colour with a paint</a><a href="#advice">Paint advice</a></div><div><h3>Let’s talk colour</h3><a href={homeContact.phoneHref}>Contact Ekotint <span>↗</span></a><a className="footer-phone" href={homeContact.phoneHref}>{homeContact.phone}</a><p className="footer-address">{homeContact.address}</p><button className="footer-project" onClick={openEnquiry}>Start with an idea <Icon name="arrow" size={18} /></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ekotint Paints</span><p>Design preview · Original AI room imagery · Illustrative palettes</p><span>The perfect chemistry.</span></div></footer>
    {process.env.NODE_ENV === "development" && !modal && !mobileMenu && <HomeTypographyComparison refined={refinedTypography} onChange={setRefinedTypography} />}
    {toast && <div className="toast" role="status"><Icon name="check" size={18} />{toast}</div>}
    {(modal || mobileMenu) && typeof document !== "undefined" && createPortal(<div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) { setModal(null); setMobileMenu(false); } }}><div className={`modal-panel home-dialog ${mobileMenu ? "menu-panel" : ""}${modal === "enquiry" ? " enquiry-dialog" : ""}${refinedTypography ? " typography-refined" : ""}`} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title"><button className="modal-close icon-button" aria-label="Close dialog" onClick={() => { setModal(null); setMobileMenu(false); }}><Icon name="close" /></button>
      {mobileMenu && <><p className="eyebrow">A WORLD OF POSSIBILITY</p><h2 id="dialog-title">Make it<br /><em>your own.</em></h2><nav className="mobile-nav" aria-label="Mobile navigation"><a href="#colours" onClick={() => setMobileMenu(false)}>Explore colours <Icon name="arrow" /></a><a href="#paints" onClick={() => setMobileMenu(false)}>Paints & coatings <Icon name="arrow" /></a><a href="#advice" onClick={() => setMobileMenu(false)}>Paint advice <Icon name="arrow" /></a><a href="#why-ekotint" onClick={() => setMobileMenu(false)}>Get to know Ekotint <Icon name="arrow" /></a><a href="#contact" onClick={() => setMobileMenu(false)}>Contact <Icon name="arrow" /></a><a href={homeContact.phoneHref}>Call {homeContact.phone} <Icon name="phone" /></a></nav><button className="button button-brand" onClick={openEnquiry}>Plan your project <Icon name="arrow" size={18} /></button></>}
      {modal === "search" && <><p className="eyebrow">FOLLOW YOUR CURIOSITY</p><h2 id="dialog-title">Find your<br /><em>next possibility.</em></h2><label className="search-input"><Icon name="search" /><input aria-label="Search colours or paints" placeholder="Try exterior, epoxy or Water Matt…" value={search} onChange={(e) => setSearch(e.target.value)} /></label><div className="search-results"><h3>Colours</h3>{searchedShades.slice(0, 6).map((s) => <button key={s.name} onClick={() => showShade(s)}><span className="result-swatch" style={{ background: s.hex }} /><span>{s.name}<small>{s.family} · {s.hex}</small></span><Icon name="arrow" size={18} /></button>)}{searchedShades.length === 0 && <p>No matching palette. Try a colour family or choose a paint to explore a custom colour.</p>}<h3>Paints & coatings</h3>{searchedProducts.map((p) => <Link key={p.id} href={paintHref(p)}><ProductArtwork product={p} /><span>{p.name}<small>{p.series} · {p.category}</small></span><Icon name="arrow" size={18} /></Link>)}</div></>}
      {modal === "saved" && <><p className="eyebrow">YOUR COLOUR STORY</p><h2 id="dialog-title">The ones<br /><em>you come back to.</em></h2><p className="modal-intro">Your favourite palettes and custom colours, saved in this browser on this device.</p>{favorites.length ? <div className="saved-grid">{favorites.map((s) => <div className="saved-shade" key={s.hex}><button className="saved-preview" style={{ background: s.hex }} aria-label={`Preview saved colour ${s.name} ${s.hex}`} onClick={() => showShade(s)} /><div><span>{s.name}<small>{s.hex}</small></span><button className="icon-button" aria-label={`Remove saved colour ${s.name} ${s.hex}`} onClick={() => saveShade(s)}><Icon name="close" size={17} /></button></div></div>)}</div> : <div className="empty-saved"><Icon name="heart" size={42} /><p>Something catching your eye?<br />Tap a heart to keep it here.</p></div>}<button className="button button-brand" onClick={() => { setModal(null); browseFamily(family); }}>Keep exploring <Icon name="arrow" size={18} /></button>{favorites.length > 0 && <button className="text-link saved-plan" onClick={openEnquiry}>Bring these into your project <Icon name="arrow" size={17} /></button>}</>}
      {modal === "enquiry" && <>
        <p className="eyebrow">LET’S TALK COLOUR</p>
        <h2 id="dialog-title">Tell us about<br /><em>your project.</em></h2>
        <HomeEnquiryForm paint={null} colour={enquiryColour} savedColours={favorites} colourOptions={enquiryColourOptions} />
      </>}
    </div></div>, document.body)}
  </div>;
}
