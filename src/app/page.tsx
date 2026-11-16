"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductArtwork from "@/components/HomeProductArtwork";
import HomeExamplePrice from "@/components/HomeExamplePrice";
import HomeCustomerStories from "@/components/HomeCustomerStories";
import HomeHelpStrip from "@/components/HomeHelpStrip";
import HomeContactSection from "@/components/HomeContactSection";
import HomeSiteFooter from "@/components/HomeSiteFooter";
import HomeProductCarousel from "@/components/HomeProductCarousel";
import HomeEnquiryForm from "@/components/HomeEnquiryForm";
import HomeTypographyComparison from "@/components/HomeTypographyComparison";
import HomeColourPalette, { type PaletteSurface } from "@/components/HomeColourPalette";
import HomeColourProductChooser from "@/components/HomeColourProductChooser";
import { homePaints, homePaintFilters, featuredHomePaints, homeTechnicalGuide, homeContact, homeSectionVisibility, homeVanillaColourIdea, type HomePaint } from "@/lib/homepage-content";
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
// Preserve original array indices and legacy blues; the new vanilla is an illustrative idea.
const vanillaShade: Shade = { ...homeVanillaColourIdea, family: "Neutrals", note: "A soft vanilla colour idea. Confirm the physical shade with Ekotint." };
const paletteShades = Array.from(new Map([vanillaShade, shades[16], shades[0], ...brandShades, ...tonalShades, ...shades.filter((shade) => shade.family !== "Blues")].map((shade) => [shade.hex, shade])).values());
const knownShades = [...paletteShades, ...shades.filter((shade) => shade.family === "Blues")];

// Distinct design suggestions, not manufacturer-confirmed interior/exterior shade ranges.
const interiorColourOrder = ["#FCEEDE", "#A493AE", "#DDD5C5", "#816FB0", "#CF91C1", "#C4D0E6", "#D5CBDE", "#B496AC", "#DCD7E9", "#B1A6CE", "#E9CDE3", "#B14E9B", "#C99E8D", "#D7B6A2", "#655789", "#705579"];
const exteriorColourOrder = ["#EEEAE1", "#B8B4A7", "#C6AF93", "#777D5D", "#A6AF98", "#BA7C63", "#55614F", "#BDC5B0", "#96614D", "#2D56A4", "#7D96C7", "#234380", "#8A3D79"];
const surfaceColourIdeas: Record<PaletteSurface, Shade[]> = {
  Interior: interiorColourOrder.flatMap((hex) => { const shade = paletteShades.find((idea) => idea.hex === hex); return shade ? [shade] : []; }),
  Exterior: exteriorColourOrder.flatMap((hex) => { const shade = paletteShades.find((idea) => idea.hex === hex); return shade ? [shade] : []; }),
};

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
const enquiryColourOptions = [shades[16], ...brandShades, shades[0], shades[1], shades[5], shades[8], vanillaShade];
const products = homePaints;
type Product = HomePaint;

type Modal = "search" | "saved" | "enquiry" | "choose-paint" | null;

const stories = [
  { image: "/images/hero-wide-lavender-bedroom-v1.webp", mobileImage: "/images/hero-brand-lavender-bedroom.webp", width: 1672, height: 941, title: "Lavender bedroom", position: "center center", mobilePosition: "center center", alt: "Lavender bedroom with a linen bed, walnut bedside furniture and soft natural light" },
  { image: "/images/hero-exterior-lavender-v1.webp", mobileImage: "/images/hero-exterior-lavender-v1.webp", width: 1672, height: 941, title: "Lavender house exterior", position: "center center", mobilePosition: "72% center", alt: "Contemporary Pakistani house exterior with lavender plaster, blue accents, timber entrance and dark metal window frames" },
  { image: "/images/hero-purple-room.webp", mobileImage: "/images/hero-purple-room.webp", width: 1536, height: 1024, title: "Purple living room", position: "center 55%", mobilePosition: "60% center", alt: "Dusty-lilac living room with a cream sofa, walnut coffee table and afternoon sunshine" },
  { image: "/images/hero-exterior-lavender-courtyard-v4.webp", mobileImage: "/images/hero-exterior-lavender-courtyard-v4.webp", width: 1672, height: 941, title: "Lavender courtyard exterior", position: "center center", mobilePosition: "65% center", alt: "Wide courtyard with dusty lavender walls, muted blue entrance recesses, a timber door, potted olive tree and dappled sunlight" },
  { image: "/images/hero-wide-blue-dining-v1.webp", mobileImage: "/images/hero-brand-blue-dining.webp", width: 1672, height: 941, title: "Blue dining room", position: "center center", mobilePosition: "center center", alt: "Ekotint-blue dining room with a walnut table, pale chairs and warm daylight" },
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
  const [family, setFamily] = useState("All colours");
  const [paletteSurface, setPaletteSurface] = useState<PaletteSurface>("Interior");
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
  const [previousStoryIndex, setPreviousStoryIndex] = useState<number | null>(null);
  const [heroFocusPaused, setHeroFocusPaused] = useState(false);
  const [paintVisit, setPaintVisit] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const story = stories[storyIndex];
  const heroFrames = previousStoryIndex === null
    ? [{ item: story, leaving: false }]
    : [{ item: stories[previousStoryIndex], leaving: true }, { item: story, leaving: false }];
  const enquiryColour = hasChosenColour ? selected : null;
  const isSaved = (shade: Shade) => favorites.some((s) => s.hex.toUpperCase() === shade.hex.toUpperCase());

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
    let cancelled = false;
    let scheduleVersion = 0;
    const nextIndex = (storyIndex + 1) % stories.length;
    const next = stories[nextIndex];
    const preload = new Image();
    preload.src = window.matchMedia("(max-width: 800px)").matches ? next.mobileImage : next.image;
    const ready = preload.decode().then(() => true, () => false);
    const scheduleStory = () => {
      clearTimeout(timer);
      const version = ++scheduleVersion;
      if (heroFocusPaused || modal || mobileMenu || navOpen || document.hidden || motionPreference.matches) return;
      timer = setTimeout(async () => {
        const decoded = await ready;
        if (!decoded || cancelled || version !== scheduleVersion || document.hidden || motionPreference.matches) return;
        setPreviousStoryIndex(storyIndex);
        setStoryIndex(nextIndex);
      }, 5000);
    };
    scheduleStory();
    document.addEventListener("visibilitychange", scheduleStory);
    motionPreference.addEventListener("change", scheduleStory);
    return () => {
      cancelled = true;
      scheduleVersion++;
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", scheduleStory);
      motionPreference.removeEventListener("change", scheduleStory);
    };
  }, [heroFocusPaused, modal, mobileMenu, navOpen, storyIndex]);
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
    setSelected(shade); setHasChosenColour(true); setModal("choose-paint"); setNavOpen(false); setMobileMenu(false);
  }
  function paintHref(paint: Product) {
    const preference = hasChosenColour ? `?${new URLSearchParams({ colour: selected.hex.slice(1), colourName: selected.name })}` : "";
    return `/products/${paint.id}/${preference}`;
  }
  function browseFamily(name: string) {
    const targetFamily = families.includes(name) ? name : "All colours";
    if (targetFamily !== "All colours" && !surfaceColourIdeas[paletteSurface].some((shade) => shade.family === targetFamily)) {
      setPaletteSurface(paletteSurface === "Interior" ? "Exterior" : "Interior");
    }
    setFamily(targetFamily); setNavOpen(false); setMobileMenu(false);
    document.getElementById("colours")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  function changePaletteSurface(surface: PaletteSurface) { setPaletteSurface(surface); setFamily("All colours"); }
  function openEnquiry() { setModal("enquiry"); setMobileMenu(false); setNavOpen(false); }
  const searchedShades = paletteShades.filter((s) => `${s.name} ${s.family} ${s.hex}`.toLowerCase().includes(search.toLowerCase()));
  const searchedProducts = products.filter((p) => `${p.name} ${p.category} ${p.series}`.toLowerCase().includes(search.toLowerCase()));
  const visibleProducts = productFilter === "Featured" ? featuredHomePaints : productFilter === "All products" ? products : products.filter((p) => p.category === productFilter);

  const visiblePalette = family === "All colours" ? surfaceColourIdeas[paletteSurface] : surfaceColourIdeas[paletteSurface].filter((shade) => shade.family === family);

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
        {homeSectionVisibility.advice && <a className="utility-advice" href="#advice">Paint advice</a>}
        <a className="utility-contact-link" href="#contact">Contact us <Icon name="arrow" size={14} /></a>
      </nav>
    </div>
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#main" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" alt="Ekotint Paints — The Perfect Chemistry" width="153" height="62" /></a>
      <nav className="desktop-nav" aria-label="Main navigation"><button id="colour-menu-trigger" aria-expanded={navOpen} aria-controls="colour-menu" onClick={() => setNavOpen(!navOpen)}>Explore colours <Icon name="chevron" size={14} /></button><a href="#paints" onClick={() => setNavOpen(false)}>Paints & coatings</a>{homeSectionVisibility.manufacturer && <a href="#why-ekotint" onClick={() => setNavOpen(false)}>About Ekotint</a>}<a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search colours and paints" onClick={() => { setSearch(""); setNavOpen(false); setModal("search"); }}><Icon name="search" /></button><button className="icon-button saved-button" aria-label={`Saved colours, ${favorites.length} saved`} onClick={() => { setNavOpen(false); setModal("saved"); }}><Icon name="heart" />{favorites.length > 0 && <span className="saved-count">{favorites.length}</span>}</button><button className="icon-button mobile-menu-button" aria-label="Open menu" aria-expanded={mobileMenu} onClick={() => setMobileMenu(true)}><Icon name="menu" size={25} /></button></div>
      {navOpen && <div className="mega-menu" id="colour-menu"><div className="mega-inner"><div><p className="eyebrow">FIND YOUR KIND OF COLOUR</p><h2>A little curiosity.<br /><em>Endless possibilities.</em></h2><a className="text-link" href="#colours" onClick={() => setNavOpen(false)}>Explore the palettes <Icon name="arrow" size={18} /></a></div><div className="mega-families">{families.map((name) => <button key={name} onClick={() => browseFamily(name)}><span style={{ background: familySwatches[name] }} />{name}<Icon name="arrow" size={16} /></button>)}</div><div className="mega-tools"><a href="#paints" onClick={() => setNavOpen(false)}>Choose a paint to try colour <span>↗</span></a><button onClick={() => { setNavOpen(false); setModal("saved"); }}>Your saved colours <Icon name="heart" size={18} /></button><p>Explore a starting point.<br />Make it entirely your own.</p></div></div></div>}
    </header>

    <main id="main">
      <section className="immersive-hero" role="region" aria-roledescription="carousel" aria-label="Featured room colours" onFocusCapture={(e) => { if (e.target.matches(":focus-visible")) setHeroFocusPaused(true); }} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHeroFocusPaused(false); }}>
        {heroFrames.map(({ item, leaving }) => <picture
          className={`immersive-hero-picture${previousStoryIndex !== null ? leaving ? " is-leaving" : " is-entering" : ""}`}
          key={item.image}
          aria-hidden={leaving ? true : undefined}
          style={{ "--hero-image-position": item.position, "--hero-mobile-position": item.mobilePosition } as React.CSSProperties}
        >
          <source media="(max-width: 800px)" srcSet={item.mobileImage} />
          <img className="immersive-hero-image" src={item.image} alt={leaving ? "" : item.alt} width={item.width} height={item.height} fetchPriority={previousStoryIndex === null ? "high" : "auto"} decoding="async" />
        </picture>)}
        <div className="immersive-hero-content">
          <h1>From your front door<br />to your favourite room.</h1>
          <a className="immersive-hero-action" href="#paints">Find your paint <Icon name="arrow" size={20} /></a>
        </div>

      </section>

      <HomeHelpStrip />

      <section className="section product-section client-paints" id="paints" aria-labelledby="paints-heading">
        <div className="product-section-heading"><h2 id="paints-heading">Explore Ekotint paints</h2><p>Find a finish for your walls, roof, wood and metal.</p></div>
        {hasChosenColour && <div className="paint-colour-context" role="status"><span style={{ background: selected.hex }} /><p><strong>{selected.name}</strong> · Choose a paint to preview this colour.</p><button type="button" onClick={() => setHasChosenColour(false)} aria-label="Clear colour preference"><Icon name="close" size={15} /></button></div>}
        <div className="product-toolbar"><div className="product-tabs" role="group" aria-label="Browse paints by surface">{homePaintFilters.map((name) => <button type="button" key={name} className={productFilter === name ? "active" : ""} aria-pressed={productFilter === name} aria-controls="home-product-grid" onClick={() => setProductFilter(name)}>{name}</button>)}</div><span className="sr-only" aria-live="polite">{visibleProducts.length} {productFilter === "Featured" ? "featured finishes" : visibleProducts.length === 1 ? "finish" : "finishes"}</span></div>
        <HomeProductCarousel products={visibleProducts} category={productFilter} paintHref={paintHref} />
        <div className="product-collection-action"><button type="button" className="button button-brand" disabled>Explore all products<Icon name="arrow" size={19} /></button></div>
      </section>

      <HomeColourPalette colours={visiblePalette} family={family === "All colours" ? undefined : family} surface={paletteSurface} selectedHex={hasChosenColour ? selected.hex : undefined} paused={Boolean(modal || mobileMenu)} onSurfaceChange={changePaletteSurface} onChoose={showShade} onSaved={() => setModal("saved")} onClearFamily={() => setFamily("All colours")} />

      {homeSectionVisibility.manufacturer && <section className="brand-confidence section" id="why-ekotint" aria-labelledby="confidence-title">
        <div className="confidence-intro"><p className="eyebrow">THE PEOPLE BEHIND YOUR PAINT</p><h2 id="confidence-title">Beautiful colour.<br /><em>Clear answers.</em></h2><p>Choosing paint should feel exciting. And knowing what goes on your walls should feel simple.</p><p>We’re Ekotint, a paint manufacturer in Karachi. From decorative walls to protective coatings, start with your space and let’s find the right way forward.</p><a href={homeContact.phoneHref} className="text-link">Talk to Ekotint <Icon name="arrow" size={19} /></a></div>
        <div className="confidence-details">
          <div className="confidence-detail"><span className="confidence-number">01</span><div><h3>The right starting point.</h3><p>Interior or exterior. Wood, metal or roof. Explore finishes by surface, with preparation considered from the start.</p><a href="#paints">Find your finish <Icon name="arrow" size={17} /></a></div></div>
          <div className="confidence-detail"><span className="confidence-number">02</span><div><h3>The details, in writing.</h3><p>Read product-specific guidance on preparation, application and drying in Ekotint’s technical data sheets.</p></div></div>
          <div className="confidence-detail"><span className="confidence-number">03</span><div><h3>A conversation before a decision.</h3><p>Have a shade in mind or a tricky surface? Speak directly with Ekotint to confirm the colour and coating for your project.</p><a href={homeContact.phoneHref}>{homeContact.phone} <Icon name="phone" size={16} /></a></div></div>
        </div>
      </section>}

      {homeSectionVisibility.exteriorFeature && <section className="exterior-feature client-exterior"><div className="exterior-image"><img src="/images/premium-exterior-yellow-v2.webp" alt="Architectural inspiration with cool yellow exterior walls, white roof edges and a timber entrance" width="1536" height="1024" loading="lazy" /><span>OUTSIDE, REIMAGINED.</span></div><div className="exterior-copy"><p className="eyebrow">WALLS. ROOFS. FIRST IMPRESSIONS.</p><h2>A beautiful<br /><em>way home.</em></h2><p>Bring a considered finish to your exterior walls with Clima Shield. Start your roof project with Eko Shade, the dedicated roof coating in the Ekotint collection.</p><Link className="button button-white" href={paintHref(homePaints[1])}>Explore Clima Shield <Icon name="arrow" size={19} /></Link><Link className="roof-coating-callout" href={paintHref(homePaints.find((p) => p.id === "eko-shade")!)}><span className="roof-pack"><ProductArtwork product={homePaints.find((p) => p.id === "eko-shade")!} /></span><span><small>ABOVE IT ALL</small><strong>Meet Eko Shade.</strong><span>A coating made for your roof.</span></span><Icon name="arrow" size={23} /></Link></div></section>}
      {homeSectionVisibility.featuredFinishes && <section className="finishes-section section" id="coatings" aria-labelledby="finishes-heading">
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
      </section>}

      {homeSectionVisibility.advice && <section className="advice-section" id="advice"><div className="section advice-inner"><div className="advice-intro"><p className="eyebrow">LET’S MAKE IT FEEL SIMPLE</p><h2>Good questions.<br /><em>Great beginnings.</em></h2><p>A good finish starts with the right preparation.<br />Explore the product guidance before you paint.</p><a className="text-link technical-guide-link" href={homeTechnicalGuide} target="_blank" rel="noreferrer">Technical data sheets <Icon name="download" size={19} /></a><span className="technical-guide-meta">PDF · 9 pages · Preparation & application guidance</span><button className="text-link advice-project-link" onClick={openEnquiry}>Discuss your project <Icon name="arrow" size={18} /></button></div><div className="faq-list">{questions.map((item, index) => <div className={`faq-item ${faq === index ? "open" : ""}`} key={item.q}><h3><button aria-expanded={faq === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaq(faq === index ? null : index)}><span>{item.q}</span><Icon name={faq === index ? "minus" : "plus"} size={19} /></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={faq !== index}><p>{item.a}</p></div></div>)}</div></div></section>}

      <HomeCustomerStories />

      <HomeContactSection onEnquiry={openEnquiry} />

    </main>

    <HomeSiteFooter onPlan={openEnquiry} />
    {process.env.NODE_ENV === "development" && !modal && !mobileMenu && <HomeTypographyComparison refined={refinedTypography} onChange={setRefinedTypography} />}
    {toast && <div className="toast" role="status"><Icon name="check" size={18} />{toast}</div>}
    {(modal || mobileMenu) && typeof document !== "undefined" && createPortal(<div className={`modal-backdrop${modal === "choose-paint" ? " colour-chooser-overlay" : ""}`} onMouseDown={(e) => { if (e.target === e.currentTarget) { setModal(null); setMobileMenu(false); } }}><div className={`modal-panel home-dialog ${mobileMenu ? "menu-panel" : ""}${modal === "enquiry" ? " enquiry-dialog" : ""}${refinedTypography ? " typography-refined" : ""}`} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title"><button className="modal-close icon-button" aria-label="Close dialog" onClick={() => { setModal(null); setMobileMenu(false); }}><Icon name="close" /></button>
      {mobileMenu && <><p className="eyebrow">A WORLD OF POSSIBILITY</p><h2 id="dialog-title">Make it<br /><em>your own.</em></h2><nav className="mobile-nav" aria-label="Mobile navigation"><a href="#colours" onClick={() => setMobileMenu(false)}>Explore colours <Icon name="arrow" /></a><a href="#paints" onClick={() => setMobileMenu(false)}>Paints & coatings <Icon name="arrow" /></a>{homeSectionVisibility.advice && <a href="#advice" onClick={() => setMobileMenu(false)}>Paint advice <Icon name="arrow" /></a>}{homeSectionVisibility.manufacturer && <a href="#why-ekotint" onClick={() => setMobileMenu(false)}>Get to know Ekotint <Icon name="arrow" /></a>}<a href="#contact" onClick={() => setMobileMenu(false)}>Contact <Icon name="arrow" /></a><a href={homeContact.phoneHref}>Call {homeContact.phone} <Icon name="phone" /></a></nav><button className="button button-brand" onClick={openEnquiry}>Plan your project <Icon name="arrow" size={18} /></button></>}
      {modal === "search" && <><p className="eyebrow">FOLLOW YOUR CURIOSITY</p><h2 id="dialog-title">Find your<br /><em>next possibility.</em></h2><label className="search-input"><Icon name="search" /><input aria-label="Search colours or paints" placeholder="Try exterior, epoxy or Water Matt…" value={search} onChange={(e) => setSearch(e.target.value)} /></label><div className="search-results"><h3>Colours</h3>{searchedShades.slice(0, 6).map((s) => <button key={s.name} onClick={() => showShade(s)}><span className="result-swatch" style={{ background: s.hex }} /><span>{s.name}<small>{s.family} · {s.hex}</small></span><Icon name="arrow" size={18} /></button>)}{searchedShades.length === 0 && <p>No matching palette. Try a colour family or choose a paint to explore a custom colour.</p>}<h3>Paints & coatings</h3>{searchedProducts.map((p) => <Link key={p.id} href={paintHref(p)}><ProductArtwork product={p} /><span>{p.name}<small>{p.series} · {p.category}</small></span><Icon name="arrow" size={18} /></Link>)}</div></>}
      {modal === "saved" && <><p className="eyebrow">YOUR COLOUR STORY</p><h2 id="dialog-title">The ones<br /><em>you come back to.</em></h2><p className="modal-intro">Your favourite palettes and custom colours, saved in this browser on this device.</p>{favorites.length ? <div className="saved-grid">{favorites.map((s) => <div className="saved-shade" key={s.hex}><button className="saved-preview" style={{ background: s.hex }} aria-label={`Preview saved colour ${s.name} ${s.hex}`} onClick={() => showShade(s)} /><div><span>{s.name}<small>{s.hex}</small></span><button className="icon-button" aria-label={`Remove saved colour ${s.name} ${s.hex}`} onClick={() => saveShade(s)}><Icon name="close" size={17} /></button></div></div>)}</div> : <div className="empty-saved"><Icon name="heart" size={42} /><p>Something catching your eye?<br />Tap a heart to keep it here.</p></div>}<button className="button button-brand" onClick={() => { setModal(null); browseFamily(family); }}>Keep exploring <Icon name="arrow" size={18} /></button>{favorites.length > 0 && <button className="text-link saved-plan" onClick={openEnquiry}>Bring these into your project <Icon name="arrow" size={17} /></button>}</>}
      {modal === "choose-paint" && <HomeColourProductChooser colour={selected} surface={paletteSurface} saved={isSaved(selected)} onSave={() => saveShade(selected)} onEnquiry={openEnquiry} />}
      {modal === "enquiry" && <>
        <p className="eyebrow">LET’S TALK COLOUR</p>
        <h2 id="dialog-title">Tell us about<br /><em>your project.</em></h2>
        <HomeEnquiryForm paint={null} colour={enquiryColour} savedColours={favorites} colourOptions={enquiryColourOptions} />
      </>}
    </div></div>, document.body)}
  </div>;
}
