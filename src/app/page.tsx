"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/Icon";
import ProductArtwork from "@/components/HomeProductArtwork";
import { homePaints, homePaintFilters, featuredHomePaints, homeTechnicalGuide, homeContact, type HomePaint } from "@/lib/homepage-content";
import "./homepage.css";


type Shade = { name: string; hex: string; family: string; note: string };
function wallPaintTransferTables(hex: string) {
  // This prepared scene's diffuse wall is around 0.30 in encoded sRGB luma.
  // Use its lighting variation, rather than its olive hue or fixed brightness.
  const referenceLuma = 0.30;
  return [1, 3, 5].map((start) => {
    const channel = parseInt(hex.slice(start, start + 2), 16) / 255;
    const diffuse = channel * 0.97 + 0.008;
    return Array.from({ length: 129 }, (_, index) => {
      const exposure = 0.18 + 0.82 * (index / 128) / referenceLuma;
      const lit = exposure <= 1
        ? diffuse * exposure
        : 1 - (1 - diffuse) * Math.exp(-diffuse * (exposure - 1) / (1 - diffuse));
      // A soft highlight shoulder retains window light without washing out dark hues.
      const reflection = exposure > 1 ? 0.008 * (1 - 1 / exposure) : 0;
      return Math.min(1, Math.max(0, lit + reflection)).toFixed(5);
    }).join(" ");
  });
}
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
const families = ["Purples", "Neutrals", "Greens", "Earth tones", "Blues"];
const sceneShades = [shades[16], shades[0], shades[8], shades[12]];
const products = homePaints;
type Product = HomePaint;

type Modal = "search" | "saved" | "brief" | null;

const stories = [
  { image: "/images/premium-room-plum.webp", title: "A quieter kind of bold.", space: "The reading room", shade: shades[16], background: "#ece4ef", ink: "#302237", alt: "Original plum-wall reading corner with a cream lounge chair and a walnut pedestal table" },
  { image: "/images/premium-room-sage.webp", title: "Room to slow down.", space: "The everyday gathering", shade: shades[5], background: "#e1e7dc", ink: "#26332b", alt: "Sage-green dining nook with a walnut table, pale chairs and an architectural alcove" },
  { image: "/images/premium-room-bedroom.webp", title: "Soft starts. Slow mornings.", space: "The restful retreat", shade: shades[0], background: "#eee8df", ink: "#352c27", alt: "Warm ivory bedroom with a linen bed, walnut bedside furniture and soft natural light" },
  { image: "/images/hero-purple-room.webp", title: "Make a little more of life.", space: "The living room", shade: shades[17], background: "#503351", ink: "#ffffff", alt: "Dusty-lilac living room with a cream sofa, walnut coffee table and afternoon sunshine" },
];
const roomIdeas = [
  { image: "/images/premium-room-plum.webp", label: "01 / A CORNER OF YOUR OWN", title: "A little room for you.", description: "Quiet lilacs, soft textures and a moment to yourself.", family: "Purples", alt: stories[0].alt },
  { image: "/images/premium-room-bedroom.webp", label: "02 / THE SLOWER SIDE OF LIFE", title: "Wake up to something softer.", description: "Easy neutrals for the spaces where you unwind.", family: "Neutrals", alt: stories[2].alt },
  { image: "/images/premium-room-sage.webp", label: "03 / EVERYDAY, REIMAGINED", title: "Good company. Great colour.", description: "A fresh green perspective on your everyday rituals.", family: "Greens", alt: stories[1].alt },
];
const questions = [
  { q: "Which Ekotint range should I start with?", a: "Start with your surface and the finish you want. Explore Premium and Assez wall paints, putties and primers, or specialist enamels, varnish, epoxy and Eko Shade roof coating. The Ekotint team can help you confirm the right product and preparation for your project." },
  { q: "Can I explore my own custom colour?", a: "Yes. Use the colour picker or enter a six-digit HEX code in the colour studio. Save your ideas, then confirm the physical shade and the chosen product’s colour options with Ekotint. Screen colours are a guide." },
  { q: "What should I choose for exterior walls or a roof?", a: "Explore Clima Shield exterior acrylic wall emulsion and Weather Paint for exterior walls, or Eko Shade for a roof project. Walls and roofs need different coating systems and preparation. Speak with Ekotint about your surface before choosing." },
  { q: "Do you have finishes for wood and metal?", a: "The Premium range includes Eko Gleam gloss enamel, Synthetic Varnish, Epoxy, Eko PrimeOxide and 2K Hardener. Check the technical guidance for the exact surface, compatible coating system and application method before use." },
  { q: "How much paint will I need?", a: "Measure the area, subtract openings and use the spreading rate for your chosen product. Coverage is stated per coat in the technical sheets and varies by surface and application. Confirm the number of coats and available pack sizes with Ekotint." },
  { q: "Where can I find the technical guidance?", a: "Use the Technical data sheets link in this Paint advice section. It includes product-specific application, dilution, preparation and drying information. Ask Ekotint for the current sheet for any coating not covered in that document." },
];

function readSavedShades(value: unknown): Shade[] {
  if (!Array.isArray(value)) return [];
  const result = value.flatMap((item): Shade[] => {
    if (typeof item === "string") { const found = shades.find((s) => s.name === item); return found ? [found] : []; }
    if (item && typeof item === "object" && typeof item.name === "string" && /^#[0-9a-f]{6}$/i.test(item.hex) && typeof item.family === "string") {
      return [{ name: item.name, hex: item.hex.toUpperCase(), family: item.family, note: typeof item.note === "string" ? item.note : "Your saved colour." }];
    }
    return [];
  });
  return Array.from(new Map(result.map((item) => [item.hex.toUpperCase(), item])).values());
}

export default function Home() {
  const [family, setFamily] = useState("Purples");
  const [selected, setSelected] = useState<Shade>(shades[16]);
  const [before, setBefore] = useState(false);
  const [favorites, setFavorites] = useState<Shade[]>([]);
  const [modal, setModal] = useState<Modal>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [productFilter, setProductFilter] = useState("Featured");
  const [search, setSearch] = useState("");
  const [projectPaint, setProjectPaint] = useState<Product | null>(null);
  const [briefSaved, setBriefSaved] = useState(false);
  const [briefStored, setBriefStored] = useState(false);
  const [briefText, setBriefText] = useState("");
  const [toast, setToast] = useState("");
  const [faq, setFaq] = useState<number | null>(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [heroHovered, setHeroHovered] = useState(false);
  const [hexDraft, setHexDraft] = useState("#A493AE");
  const [hexError, setHexError] = useState("");
  const [studioVisit, setStudioVisit] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const story = stories[storyIndex];
  const nextStory = stories[(storyIndex + 1) % stories.length];
  const isSaved = (shade: Shade) => favorites.some((s) => s.hex.toUpperCase() === shade.hex.toUpperCase());

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("colour");
    if (!value || !/^[0-9a-f]{6}$/i.test(value)) return;
    const hex = `#${value.toUpperCase()}`;
    setSelected(shades.find((shade) => shade.hex === hex) || { name: "Custom colour", hex, family: "Custom", note: "Your own colour, made personal." });
    setHexDraft(hex); setBefore(false); setStudioVisit((visit) => visit + 1);
  }, []);
  useEffect(() => {
    try { setFavorites(readSavedShades(JSON.parse(localStorage.getItem("ekotint-colours") || "[]"))); } catch { /* Local storage is optional. */ }
  }, []);
  useEffect(() => {
    if (!playing || heroHovered || modal || mobileMenu || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => { if (!document.hidden) setStoryIndex((i) => (i + 1) % stories.length); }, 7000);
    return () => clearInterval(timer);
  }, [playing, heroHovered, modal, mobileMenu]);
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
    if (!studioVisit) return;
    const heading = document.querySelector<HTMLElement>("#colour-studio .section-heading");
    if (!heading) return;
    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0;
    // Run after any colour dialog closes, and skip the section's decorative top padding.
    window.scrollTo({
      top: window.scrollY + heading.getBoundingClientRect().top - headerHeight - 8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [studioVisit]);

  function saveShade(shade: Shade) {
    setFavorites((current) => {
      const exists = current.some((s) => s.hex.toUpperCase() === shade.hex.toUpperCase());
      const next = exists ? current.filter((s) => s.hex.toUpperCase() !== shade.hex.toUpperCase()) : [...current, shade];
      try { localStorage.setItem("ekotint-colours", JSON.stringify(next)); } catch { /* The current session still works. */ }
      setToast(exists ? `${shade.name} removed from your colours` : `${shade.name} saved to your colours`);
      return next;
    });
  }
  function showShade(shade: Shade) { setSelected(shade); setBefore(false); setModal(null); setNavOpen(false); setHexDraft(shade.hex); setHexError(""); setStudioVisit((visit) => visit + 1); }
  function browseFamily(name: string) { setFamily(name); setNavOpen(false); setMobileMenu(false); document.getElementById("colours")?.scrollIntoView({ behavior: "smooth" }); }
  function openProduct(p: Product) { setProjectPaint(p); setBriefSaved(false); setModal("brief"); setNavOpen(false); setMobileMenu(false); }
  function openBrief() { setProjectPaint(null); setBriefSaved(false); setModal("brief"); setMobileMenu(false); setNavOpen(false); }
  function stepStory(step: number) { setPlaying(false); setStoryIndex((i) => (i + step + stories.length) % stories.length); }
  function updateCustomColour(value: string) {
    setHexDraft(value.toUpperCase());
    setHexError("");
    const match = /^#?([0-9a-f]{6})$/i.exec(value.trim());
    // Keep the last valid preview while a HEX value is being edited.
    if (!match) return;
    const hex = `#${match[1].toUpperCase()}`;
    setSelected(shades.find((shade) => shade.hex === hex) || { name: "Custom colour", hex, family: "Custom", note: "Your own colour, ready to explore." });
    setBefore(false);
  }
  function validateCustomColour() {
    if (!/^#?[0-9a-f]{6}$/i.test(hexDraft.trim())) {
      setHexError("Enter six HEX digits, for example #A493AE.");
      return;
    }
    updateCustomColour(`#${hexDraft.trim().replace(/^#/, "")}`);
  }
  function applyCustomColour(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    validateCustomColour();
  }
  function saveBrief(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const text = `EKOTINT PAINTS — MY PROJECT BRIEF\n\nName: ${data.get("name") || "Not added"}\nEmail: ${data.get("email") || "Not added"}\nProject: ${data.get("project")}\nPaint / coating: ${projectPaint ? `${projectPaint.name} — ${projectPaint.series}` : "To discuss with Ekotint"}\nSelected colour: ${selected.name} ${selected.hex}\nSaved colours: ${favorites.map((s) => `${s.name} ${s.hex}`).join(", ") || "None yet"}\n\nNotes:\n${data.get("notes") || "No notes added."}`;
    try { localStorage.setItem("ekotint-project-brief", text); setBriefStored(true); } catch { setBriefStored(false); }
    setBriefText(text); setBriefSaved(true);
  }
  function downloadBrief() { const url = URL.createObjectURL(new Blob([briefText], { type: "text/plain" })); const link = document.createElement("a"); link.href = url; link.download = "My-Ekotint-Project.txt"; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
  const searchedShades = shades.filter((s) => `${s.name} ${s.family} ${s.hex}`.toLowerCase().includes(search.toLowerCase()));
  const searchedProducts = products.filter((p) => `${p.name} ${p.category} ${p.series}`.toLowerCase().includes(search.toLowerCase()));
  const visibleProducts = productFilter === "Featured" ? featuredHomePaints : productFilter === "All products" ? products : products.filter((p) => p.category === productFilter);
  const storyStyle = { "--story-bg": story.background, "--story-ink": story.ink, "--story-button": storyIndex === 3 ? "#ffffff" : "#653a7e", "--story-button-ink": storyIndex === 3 ? "#43284f" : "#ffffff" } as React.CSSProperties;
  const [paintRed, paintGreen, paintBlue] = wallPaintTransferTables(selected.hex);

  return <div className="home-site">
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
      <nav className="desktop-nav" aria-label="Main navigation"><button id="colour-menu-trigger" aria-expanded={navOpen} aria-controls="colour-menu" onClick={() => setNavOpen(!navOpen)}>Explore colours <Icon name="chevron" size={14} /></button><a href="#paints" onClick={() => setNavOpen(false)}>Paints & coatings</a><a href="#inspiration" onClick={() => setNavOpen(false)}>Inspiration</a><a href="#colour-studio" onClick={() => setNavOpen(false)}>Colour studio <span className="new-dot" /></a><a href="#why-ekotint" onClick={() => setNavOpen(false)}>About Ekotint</a></nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search colours and paints" onClick={() => { setSearch(""); setNavOpen(false); setModal("search"); }}><Icon name="search" /></button><button className="icon-button saved-button" aria-label={`Saved colours, ${favorites.length} saved`} onClick={() => { setNavOpen(false); setModal("saved"); }}><Icon name="heart" />{favorites.length > 0 && <span className="saved-count">{favorites.length}</span>}</button><button className="header-consult" onClick={openBrief}>Plan your project <Icon name="arrow" size={17} /></button><button className="icon-button mobile-menu-button" aria-label="Open menu" aria-expanded={mobileMenu} onClick={() => setMobileMenu(true)}><Icon name="menu" size={25} /></button></div>
      {navOpen && <div className="mega-menu" id="colour-menu"><div className="mega-inner"><div><p className="eyebrow">FIND YOUR KIND OF COLOUR</p><h2>A little curiosity.<br /><em>Endless possibilities.</em></h2><a className="text-link" href="#colours" onClick={() => setNavOpen(false)}>Explore the palettes <Icon name="arrow" size={18} /></a></div><div className="mega-families">{families.map((name, i) => <button key={name} onClick={() => browseFamily(name)}><span style={{ background: ["#A493AE", "#DDD5C5", "#A6AF98", "#BA7C63", "#788C9C"][i] }} />{name}<Icon name="arrow" size={16} /></button>)}</div><div className="mega-tools"><a href="#colour-studio" onClick={() => setNavOpen(false)}>Try it in a room <span>↗</span></a><a href="#custom-colour" onClick={() => setNavOpen(false)}>Create a custom colour <span>↗</span></a><button onClick={() => { setNavOpen(false); setModal("saved"); }}>Your saved colours <Icon name="heart" size={18} /></button><p>Explore a starting point.<br />Make it entirely your own.</p></div></div></div>}
    </header>

    <main id="main">
      <section className="editorial-hero" style={storyStyle} role="region" aria-roledescription="carousel" aria-label="Featured colour stories" onMouseEnter={() => setHeroHovered(true)} onMouseLeave={() => setHeroHovered(false)} onFocusCapture={() => setHeroHovered(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHeroHovered(false); }}>
        <div className="hero-layout">
          <div className="hero-copy"><p className="eyebrow"><span /> COLOUR FOR THE WAY YOU LIVE</p><h1>Your space.<br />Your colour.<br /><span>Our chemistry.</span></h1><p className="hero-description">From a quiet corner to a whole new beginning.<br /> Find the colour and finish that feel like home.</p><div className="hero-actions"><a className="button hero-primary" href="#colours">Explore colours <Icon name="arrow" size={19} /></a><a className="hero-secondary" href="#paints">Find your finish <Icon name="arrow" size={19} /></a></div><div className="hero-collection"><span className="collection-line" /><span>PAINTS & PROTECTIVE COATINGS<strong>Premium · Assez · Eko Shade</strong></span></div></div>
          <div className="hero-gallery">
            <div className="hero-image-frame">
              <img className="story-image" key={story.image} src={story.image} alt={story.alt} width={storyIndex === 3 ? 1536 : 1024} height={storyIndex === 3 ? 1024 : 1536} fetchPriority="high" />
              <span className="hero-image-label">{story.space}</span>
              <button className="hero-palette-card" onClick={() => showShade(story.shade)} aria-label={`Try ${story.shade.name} in the colour studio`}>
                <span className="hero-palette-swatch" style={{ background: story.shade.hex }} />
                <span className="hero-palette-name"><small>A COLOUR TO COME HOME TO</small><strong>{story.shade.name}</strong><span>{story.shade.hex} · Palette inspiration</span></span>
                <span className="hero-palette-action"><Icon name="arrow" size={21} /><span>Try this colour</span></span>
              </button>
            </div>
            <button className="hero-peek" onClick={() => stepStory(1)} aria-label={`Next colour story: ${nextStory.title}`}><img src={nextStory.image} alt="" width="1024" height="1536" /><span><Icon name="arrow" size={22} /></span></button>
            <div className="hero-story-meta"><p className="hero-story-caption">{story.title}</p><div className="hero-controls"><span className="slide-counter">0{storyIndex + 1}<span> / 0{stories.length}</span></span><button className="round-control previous" aria-label="Previous colour story" onClick={() => stepStory(-1)}><Icon name="arrow" size={20} /></button><button className="round-control" aria-label="Next colour story" onClick={() => stepStory(1)}><Icon name="arrow" size={20} /></button><button className="play-control" aria-label={playing ? "Pause colour stories" : "Play colour stories"} onClick={() => setPlaying(!playing)}><Icon name={playing ? "pause" : "play"} size={16} /></button></div></div>
          </div>
        </div><div className="hero-progress" aria-hidden="true">{stories.map((item, i) => <span key={item.image} className={i === storyIndex ? "active" : ""} />)}</div>
      </section>

      <nav className="confidence-strip" aria-label="Get to know Ekotint">
        <a href="#why-ekotint"><Icon name="layers" size={25} /><span><strong>The people behind your paint</strong><small>Get to know Ekotint</small></span><Icon name="arrow" size={18} /></a>
        <a href="#custom-colour"><Icon name="home" size={25} /><span><strong>See your colour in a room</strong><small>Explore the colour studio</small></span><Icon name="arrow" size={18} /></a>
        <a href={homeContact.phoneHref}><Icon name="phone" size={24} /><span><strong>A little help choosing?</strong><small>Talk to Ekotint · {homeContact.phone}</small></span><Icon name="arrow" size={18} /></a>
      </nav>

      <section className="section product-section client-paints" id="paints">
        <div className="section-heading"><div><p className="eyebrow">THE EKOTINT COLLECTION</p><h2>A finish for every surface.<br /><span>A feeling all your own.</span></h2></div><p className="section-description">Start with the surface you’re painting.<br />We’ll help you explore the possibilities.</p></div>
        <div className="range-signatures" aria-label="Ekotint ranges"><p><span className="range-signature-dot premium-dot" /><strong>Premium Series</strong><span>Decorative & protective finishes</span></p><p><span className="range-signature-dot asse-z-dot" /><strong>Assez Series</strong><span>Interior & exterior wall paints</span></p><p><span className="range-signature-dot roof-dot" /><strong>Eko Shade</strong><span>Roof coating</span></p></div>
        <div className="product-toolbar"><div className="product-tabs" aria-label="Browse paints by surface">{homePaintFilters.map((name) => <button key={name} className={productFilter === name ? "active" : ""} aria-pressed={productFilter === name} onClick={() => setProductFilter(name)}>{name}</button>)}</div><span className="collection-count" aria-live="polite">{visibleProducts.length} {productFilter === "Featured" ? "featured finishes" : visibleProducts.length === 1 ? "finish" : "finishes"}</span></div>
        <div className={`product-grid ${visibleProducts.length === 1 ? "single-product" : ""}`}>{visibleProducts.map((p) => <article className={`product-card product-${p.id}`} key={p.id} style={{ "--product-bg": p.background } as React.CSSProperties}><button type="button" className="product-photo" aria-label={`Plan a project with ${p.name}`} onClick={() => openProduct(p)}><span className="product-tag">{p.category}</span><ProductArtwork product={p} /><span className="product-view">Plan with this finish <Icon name="arrow" size={20} /></span></button><div className="product-caption"><div><span className="product-series">{p.series}</span><h3><button onClick={() => openProduct(p)}>{p.name}</button></h3><p>{p.finish}</p></div><button className="product-open" aria-label={`Add ${p.name} to a project brief`} onClick={() => openProduct(p)}><Icon name="plus" size={19} /></button></div></article>)}</div>
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

      <section className="exterior-feature client-exterior"><div className="exterior-image"><img src="/images/premium-exterior-yellow-v2.webp" alt="Architectural inspiration with cool yellow exterior walls, white roof edges and a timber entrance" width="1536" height="1024" loading="lazy" /><span>OUTSIDE, REIMAGINED.</span></div><div className="exterior-copy"><p className="eyebrow">WALLS. ROOFS. FIRST IMPRESSIONS.</p><h2>A beautiful<br /><em>way home.</em></h2><p>Bring a considered finish to your exterior walls with Clima Shield. Start your roof project with Eko Shade, the dedicated roof coating in the Ekotint collection.</p><button className="button button-white" onClick={() => openProduct(homePaints[1])}>Plan your exterior <Icon name="arrow" size={19} /></button><button className="roof-coating-callout" onClick={() => openProduct(homePaints.find((p) => p.id === "eko-shade")!)}><span className="roof-pack"><ProductArtwork product={homePaints.find((p) => p.id === "eko-shade")!} /></span><span><small>ABOVE IT ALL</small><strong>Meet Eko Shade.</strong><span>A coating made for your roof.</span></span><Icon name="arrow" size={23} /></button></div></section>
      <section className="finishes-section section" id="coatings" aria-labelledby="finishes-heading">
        <div className="finishes-intro">
          <div><p className="eyebrow">THE PREMIUM SERIES</p><h2 id="finishes-heading">Featured<br /><em>finishes.</em></h2></div>
          <div className="finishes-description">
            <p>Gloss enamel, varnish and epoxy for the details that complete your space. Find the finish and preparation that suit your surface.</p>
            <button className="text-link" onClick={() => { setProductFilter("Wood & metal"); document.getElementById("paints")?.scrollIntoView({ block: "start", behavior: "smooth" }); }}>Explore protective finishes <Icon name="arrow" size={20} /></button>
            <span className="finishes-signature">BEYOND THE WALLS</span>
          </div>
        </div>
        <div className="finishes-gallery">
          {[{ id: "eko-gleam", label: "Gloss enamel" }, { id: "synthetic-varnish", label: "Varnish" }, { id: "epoxy", label: "Two-component coating" }].map((item, index) => {
            const product = homePaints.find((paint) => paint.id === item.id)!;
            return (
              <button className={`finish-card finish-card-${item.id}${index === 0 ? " finish-card-featured" : ""}`} key={item.id} onClick={() => openProduct(product)} aria-label={`Plan with ${product.name}`}>
                <span className="finish-card-heading"><small>{item.label}</small><strong>{product.name}</strong></span>
                <span className="finish-pack"><ProductArtwork product={product} compact /></span>
                <span className="finish-card-action">Plan your finish <span className="finish-card-arrow"><Icon name="arrow" size={18} /></span></span>
              </button>
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
            {shades.filter((s) => s.family === family).map((s) => (
              <article className="shade-card" key={s.name}>
                <button className="shade-open" aria-label={`Preview ${s.name} in the room`} onClick={() => showShade(s)}>
                  <span className="shade-swatch" style={{ backgroundColor: s.hex }} aria-hidden="true" />
                  <span className="shade-title">{s.name}<small>{s.hex}</small></span>
                  <span className="shade-try">Preview room <span className="shade-arrow"><Icon name="arrow" size={19} /></span></span>
                </button>
                <button className={`shade-save ${isSaved(s) ? "is-saved" : ""}`} aria-label={`${isSaved(s) ? "Remove" : "Save"} ${s.name}`} aria-pressed={isSaved(s)} onClick={() => saveShade(s)}><Icon name="heart" size={19} /></button>
              </article>
            ))}
          </div>
          <div className="palette-note"><p>Illustrative palette ideas. Final shades and physical samples should be confirmed with Ekotint.</p><span>Made personal, by you.</span></div>
        </div>
      </section>

      <section className="studio-section section" id="colour-studio"><div className="section-heading"><div><p className="eyebrow">THE COLOUR STUDIO</p><h2>A little imagination.<br /><span>A whole new room.</span></h2></div><p className="section-description">Same space. A different feeling.<br />See what a change of colour could do.</p></div><div className="studio-layout" id="custom-colour"><div className="studio-image"><svg viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${before ? "Original olive wall" : selected.name + " wall colour"} in the prepared living room`}><defs><clipPath id="wall-mask" clipPathUnits="userSpaceOnUse"><path d="M113 0H1018V514C970 515 908 514 855 517L816 518 808 507Q806 504 801 506L762 512 718 504Q711 502 713 508L717 518 675 519 669 513Q660 510 647 513C615 513 584 512 568 516Q561 518 565 530L571 549C535 543 502 543 477 550C440 557 419 581 416 620L415 647 216 650 215 602 166 602 166 578 113 579Z" /></clipPath><filter id="wall-paint" filterUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1024" colorInterpolationFilters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" result="wall-lighting" /><feComponentTransfer in="wall-lighting"><feFuncR type="table" tableValues={paintRed} /><feFuncG type="table" tableValues={paintGreen} /><feFuncB type="table" tableValues={paintBlue} /></feComponentTransfer></filter></defs><image href="/images/hero-room.webp" width="1536" height="1024" /><image data-painted-wall="true" data-paint-colour={selected.hex} href="/images/hero-room.webp" width="1536" height="1024" clipPath="url(#wall-mask)" filter="url(#wall-paint)" opacity={before ? 0 : 1} style={{ transition: "opacity 250ms ease" }} /></svg><span className="studio-scene-tag">THE LIVING ROOM / PREPARED SCENE</span><button className="before-button" aria-pressed={before} onClick={() => setBefore(!before)}>{before ? "See your colour" : "View before"}<Icon name="layers" size={17} /></button><div className="scene-label"><span style={{ background: before ? shades[4].hex : selected.hex }} />{before ? "Original room" : selected.name}</div></div><div className="studio-copy">
          <div className="studio-intro"><span className="eyebrow">MAKE YOURSELF AT HOME</span><h3>Make it <em>your colour.</em></h3><p>Pick a shade or enter a HEX code.<br />See it in the room, straight away.</p></div>
          <form className="studio-custom-form" onSubmit={applyCustomColour} noValidate>
            <label className="colour-picker" title="Choose a custom colour"><span className="sr-only">Choose a custom colour</span><input type="color" aria-label="Choose a custom colour" value={selected.hex} onChange={(e) => updateCustomColour(e.target.value)} /></label>
            <label className="hex-field"><span>HEX COLOUR</span><input id="custom-hex" value={hexDraft} maxLength={7} spellCheck={false} autoComplete="off" autoCapitalize="characters" aria-invalid={!!hexError} aria-describedby={hexError ? "hex-error hex-help" : "hex-help"} onChange={(e) => updateCustomColour(e.target.value)} onBlur={validateCustomColour} /></label>
            <p className="studio-input-hint" id="hex-help">Changes appear in the room as you type.</p>
            {hexError && <p className="hex-error" id="hex-error" role="alert">{hexError}</p>}
          </form>
          <p className="studio-swatches-label">Or start with a favourite</p><div className="scene-swatches" aria-label="Room colour options">{sceneShades.map((s) => <button key={s.name} className={selected.hex === s.hex && !before ? "selected" : ""} aria-label={`Try ${s.name}`} aria-pressed={selected.hex === s.hex && !before} onClick={() => { setSelected(s); setHexDraft(s.hex); setHexError(""); setBefore(false); }}><span style={{ background: s.hex }} />{selected.hex === s.hex && !before && <Icon name="check" size={16} />}</button>)}</div><div className="selected-shade"><span className="selected-colour-block" style={{ background: selected.hex }} /><div><strong>{selected.name}</strong><span>{selected.hex}</span></div><button className="icon-button" aria-label={`${isSaved(selected) ? "Remove" : "Save"} preview colour`} onClick={() => saveShade(selected)}><Icon name="heart" fill={isSaved(selected) ? "currentColor" : "none"} /></button></div><button className="button button-brand studio-save" onClick={() => saveShade(selected)}>{isSaved(selected) ? "Colour saved" : "Save this colour"}<Icon name={isSaved(selected) ? "check" : "heart"} size={18} /></button><small className="preview-note">Colour is shown with simulated room lighting. Screens and real paint can differ; confirm your choice with a physical sample.</small></div></div></section>

      <section className="inspiration-section section" id="inspiration"><div className="section-heading"><div><p className="eyebrow">SPACES WITH SOMETHING TO SAY</p><h2>A place to begin.<br /><span>A thousand ways to feel.</span></h2></div><a className="text-link" href="#colours">Find your palette <Icon name="arrow" size={20} /></a></div><div className="inspiration-grid">{roomIdeas.map((room, index) => <article className={`room-card room-card-${index + 1}`} key={room.title}><button className="room-photo" onClick={() => browseFamily(room.family)} aria-label={`Explore ${room.family.toLowerCase()} inspired by ${room.title}`}><img src={room.image} alt={room.alt} width="1024" height="1536" loading="lazy" /><span className="room-photo-arrow"><Icon name="arrow" size={23} /></span></button><p className="eyebrow">{room.label}</p><h3>{room.title}</h3><p className="room-description">{room.description}</p><button className="room-palette-link" onClick={() => browseFamily(room.family)}>Explore the palette <Icon name="arrow" size={17} /></button></article>)}</div><p className="inspiration-note">Original AI-created room inspiration, imagined for this design preview.</p></section>

      <section className="advice-section" id="advice"><div className="section advice-inner"><div className="advice-intro"><p className="eyebrow">LET’S MAKE IT FEEL SIMPLE</p><h2>Good questions.<br /><em>Great beginnings.</em></h2><p>A good finish starts with the right preparation.<br />Explore the product guidance before you paint.</p><a className="text-link technical-guide-link" href={homeTechnicalGuide} target="_blank" rel="noreferrer">Technical data sheets <Icon name="download" size={19} /></a><span className="technical-guide-meta">PDF · 9 pages · Preparation & application guidance</span><button className="text-link advice-project-link" onClick={openBrief}>Create your project brief <Icon name="arrow" size={18} /></button></div><div className="faq-list">{questions.map((item, index) => <div className={`faq-item ${faq === index ? "open" : ""}`} key={item.q}><h3><button aria-expanded={faq === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaq(faq === index ? null : index)}><span>{item.q}</span><Icon name={faq === index ? "minus" : "plus"} size={19} /></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={faq !== index}><p>{item.a}</p></div></div>)}</div></div></section>

      <section className="closing-cta contact-cta" id="contact" aria-labelledby="contact-heading"><div className="closing-inner">
        <div className="contact-intro"><p className="eyebrow">LET’S MAKE SOMETHING BEAUTIFUL.</p><h2 id="contact-heading">Your next chapter.<br /><em>Let’s talk colour.</em></h2><p>A room you’re rethinking. A home you’re making.<br /> We’d love to hear what you have in mind.</p><button className="contact-plan-link" onClick={openBrief}>Start with a project brief <Icon name="arrow" size={20} /></button><small>Keep your ideas together, ready for a conversation.</small></div>
        <div className="contact-card"><span className="contact-card-label"><Icon name="phone" size={20} /> TALK TO EKOTINT</span><a className="contact-number" href={homeContact.phoneHref}>{homeContact.phone}<Icon name="arrow" size={26} /></a><p>Let’s discuss your surface, your colour<br />and the finish you’re looking for.</p><div className="contact-address"><Icon name="pin" size={21} /><div><strong>Karachi, Pakistan</strong><address>{homeContact.address}</address></div></div></div>
      </div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><a href="#main" className="footer-logo" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" alt="Ekotint Paints" width="181" height="73" /></a><p>A world of colour.<br /><em>Made personal.</em></p><a href="#main" className="back-top" aria-label="Back to top"><Icon name="arrow" size={24} /></a></div><div className="footer-links"><div><h3>Explore Ekotint</h3><a href="#paints">Paints & coatings</a><a href="#colours">Explore colours</a><a href="#inspiration">Room inspiration</a><a href="#colour-studio">Colour studio</a><a href="#why-ekotint">Get to know Ekotint</a></div><div><h3>Your next project</h3><button onClick={openBrief}>Plan your space</button><button onClick={() => setModal("saved")}>Your saved colours</button><a href="#custom-colour">Create a custom colour</a><a href="#advice">Paint advice</a></div><div><h3>Let’s talk colour</h3><a href={homeContact.phoneHref}>Contact Ekotint <span>↗</span></a><a className="footer-phone" href={homeContact.phoneHref}>{homeContact.phone}</a><p className="footer-address">{homeContact.address}</p><button className="footer-project" onClick={openBrief}>Start with an idea <Icon name="arrow" size={18} /></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ekotint Paints</span><p>Design preview · Original AI room imagery · Illustrative palettes</p><span>The perfect chemistry.</span></div></footer>
    {toast && <div className="toast" role="status"><Icon name="check" size={18} />{toast}</div>}
    {(modal || mobileMenu) && typeof document !== "undefined" && createPortal(<div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) { setModal(null); setMobileMenu(false); } }}><div className={`modal-panel home-dialog ${mobileMenu ? "menu-panel" : ""}`} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title"><button className="modal-close icon-button" aria-label="Close dialog" onClick={() => { setModal(null); setMobileMenu(false); }}><Icon name="close" /></button>
      {mobileMenu && <><p className="eyebrow">A WORLD OF POSSIBILITY</p><h2 id="dialog-title">Make it<br /><em>your own.</em></h2><nav className="mobile-nav" aria-label="Mobile navigation"><a href="#colours" onClick={() => setMobileMenu(false)}>Explore colours <Icon name="arrow" /></a><a href="#paints" onClick={() => setMobileMenu(false)}>Paints & coatings <Icon name="arrow" /></a><a href="#colour-studio" onClick={() => setMobileMenu(false)}>Colour studio <Icon name="arrow" /></a><a href="#inspiration" onClick={() => setMobileMenu(false)}>Inspiration <Icon name="arrow" /></a><a href="#advice" onClick={() => setMobileMenu(false)}>Paint advice <Icon name="arrow" /></a><a href="#why-ekotint" onClick={() => setMobileMenu(false)}>Get to know Ekotint <Icon name="arrow" /></a><a href={homeContact.phoneHref}>Call {homeContact.phone} <Icon name="phone" /></a></nav><button className="button button-brand" onClick={openBrief}>Plan your project <Icon name="arrow" size={18} /></button></>}
      {modal === "search" && <><p className="eyebrow">FOLLOW YOUR CURIOSITY</p><h2 id="dialog-title">Find your<br /><em>next possibility.</em></h2><label className="search-input"><Icon name="search" /><input aria-label="Search colours or paints" placeholder="Try exterior, epoxy or Water Matt…" value={search} onChange={(e) => setSearch(e.target.value)} /></label><div className="search-results"><h3>Colours</h3>{searchedShades.slice(0, 6).map((s) => <button key={s.name} onClick={() => showShade(s)}><span className="result-swatch" style={{ background: s.hex }} /><span>{s.name}<small>{s.family} · {s.hex}</small></span><Icon name="arrow" size={18} /></button>)}{searchedShades.length === 0 && <p>No matching palette. Try a colour family or create your own colour in the studio.</p>}<h3>Paints & coatings</h3>{searchedProducts.map((p) => <button key={p.id} onClick={() => openProduct(p)}><ProductArtwork product={p} /><span>{p.name}<small>{p.series} · {p.category}</small></span><Icon name="arrow" size={18} /></button>)}</div></>}
      {modal === "saved" && <><p className="eyebrow">YOUR COLOUR STORY</p><h2 id="dialog-title">The ones<br /><em>you come back to.</em></h2><p className="modal-intro">Your favourite palettes and custom colours, saved in this browser on this device.</p>{favorites.length ? <div className="saved-grid">{favorites.map((s) => <div className="saved-shade" key={s.hex}><button className="saved-preview" style={{ background: s.hex }} aria-label={`Preview saved colour ${s.name} ${s.hex}`} onClick={() => showShade(s)} /><div><span>{s.name}<small>{s.hex}</small></span><button className="icon-button" aria-label={`Remove saved colour ${s.name} ${s.hex}`} onClick={() => saveShade(s)}><Icon name="close" size={17} /></button></div></div>)}</div> : <div className="empty-saved"><Icon name="heart" size={42} /><p>Something catching your eye?<br />Tap a heart to keep it here.</p></div>}<button className="button button-brand" onClick={() => { setModal(null); browseFamily(family); }}>Keep exploring <Icon name="arrow" size={18} /></button>{favorites.length > 0 && <button className="text-link saved-plan" onClick={openBrief}>Bring these into your project <Icon name="arrow" size={17} /></button>}</>}
      {modal === "brief" && <><p className="eyebrow">YOUR NEXT CHAPTER</p><h2 id="dialog-title">Big ideas.<br /><em>A place to begin.</em></h2>{briefSaved ? <div className="brief-success"><span className="success-circle"><Icon name="check" size={28} /></span><h3>Your ideas, together.</h3><p>{briefStored ? "Your project brief is saved in this browser. Download a copy to keep. It hasn’t been sent to Ekotint." : "Your project brief is ready to download. This browser couldn’t save it, so download a copy before leaving. It hasn’t been sent to Ekotint."}</p><a className="text-link brief-call-link" href={homeContact.phoneHref}>Ready to discuss it? Call Ekotint <Icon name="phone" size={17} /></a><button className="button button-brand" onClick={downloadBrief}>Download your brief <Icon name="download" size={18} /></button></div> : <><p className="modal-intro">Collect your colours, coating choices and notes. This is your personal planning space; it doesn’t send an enquiry.</p>{projectPaint && <div className="brief-paint"><ProductArtwork product={projectPaint} /><div><span>{projectPaint.series}</span><strong>{projectPaint.name}</strong><p>{projectPaint.finish}</p></div></div>}<form className="brief-form" onSubmit={saveBrief}><div className="form-row"><label>Your name (optional)<input name="name" autoComplete="name" placeholder="Your name" /></label><label>Email address (optional)<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label></div><label>What are you planning?<select name="project" defaultValue={projectPaint?.category === "Exterior" ? "Exterior painting" : projectPaint?.category === "Roof coating" ? "Roof coating" : projectPaint?.category === "Wood & metal" ? "Wood & metal finishes" : projectPaint?.category === "Preparation" ? "Surface preparation" : "Interior refresh"}><option>Interior refresh</option><option>Exterior painting</option><option>Roof coating</option><option>Wood & metal finishes</option><option>Surface preparation</option><option>A whole new home</option><option>Commercial project</option><option>Still exploring</option></select></label><label>Notes about your space<textarea name="notes" rows={3} placeholder="The room, the feeling, the colours you love…" /></label><div className="brief-selected-colour"><span style={{ background: selected.hex }} /><p>YOUR CURRENT COLOUR<strong>{selected.name} · {selected.hex}</strong></p></div><button className="button button-brand" type="submit">Save my project brief <Icon name="arrow" size={18} /></button><small>Saved in this browser only. No enquiry is sent. Call 021-35121487 when you’re ready to talk.</small></form></>}</>}
    </div></div>, document.body)}
  </div>;
}
