"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type IconName = "arrow" | "search" | "heart" | "menu" | "close" | "check" | "plus" | "minus" | "sun" | "home" | "layers" | "spark" | "download" | "pause" | "play" | "chevron";
function Icon({ name, size = 22, ...props }: { name: IconName; size?: number } & React.SVGProps<SVGSVGElement>) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    heart: <path d="M20.7 4.7a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.1-1.1a5.4 5.4 0 0 0-7.6 7.6L12 21l8.7-8.7a5.4 5.4 0 0 0 0-7.6Z" />,
    menu: <><path d="M3 7h18M3 12h18M3 17h18" /></>,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    check: <path d="m5 12 4 4L20 5" />,
    plus: <path d="M12 4v16M4 12h16" />,
    minus: <path d="M4 12h16" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 1v2M12 21v2M1 12h2M21 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M19.8 4.2l-1.4 1.4M5.6 18.4l-1.4 1.4" /></>,
    home: <><path d="m3 10 9-7 9 7v11H3Z" /><path d="M9 21v-8h6v8" /></>,
    layers: <><path d="m12 3 10 6-10 6L2 9Z" /><path d="m2 14 10 6 10-6M2 18l10 6 10-6" /></>,
    spark: <><path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7Z" /></>,
    pause: <><path d="M9 5v14M15 5v14" /></>,
    play: <path d="m8 4 12 8-12 8Z" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

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
function shadeTextColor(hex: string) {
  const [r, g, b] = [1, 3, 5].map((start) => {
    const value = parseInt(hex.slice(start, start + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722 > 0.179 ? "#000000" : "#ffffff";
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
const products = [
  { id: "water-matt", name: "Water Matt", category: "Interior", finish: "A quietly beautiful interior.", image: "/images/water-matt.png", description: "A rich, non-reflective finish for interior walls. Bring depth and a considered matt appearance to the spaces you live in.", detail: "Interior walls · Matt finish", surface: "Designed for interior spaces" },
  { id: "clima-shield", name: "Clima Shield", category: "Exterior", finish: "Beautiful, come rain or shine.", image: "/images/clima-shield.png", description: "A premium 100% acrylic exterior emulsion engineered for Pakistan’s climate. A durable matt finish with resistance to UV, algae, fungus and dirt pick-up.", detail: "Exterior walls · Acrylic emulsion", surface: "Cement plaster, concrete and fibre cement" },
  { id: "hydra-matt", name: "Hydra-Matt", category: "Matt finish", finish: "Depth you can see. A finish you feel.", image: "/images/hydra-matt.png", description: "A velvety matt appearance with strong opacity, antifungal protection and colour stability. A refined finish for a fresh perspective on your space.", detail: "Matt finish · Strong opacity", surface: "Explore the Hydra-Matt finish" },
];
type Product = typeof products[number];
const packSilhouettes: Record<string, string> = {
  "water-matt": "M254 272Q453 265 649 271L665 272 675 286 680 297H690Q700 298 700 308L699 332Q699 337 692 338L691 356Q691 365 680 366L678 370 646 810Q644 818 638 822C610 832 559 838 500 839C425 840 350 834 300 826Q280 822 277 812L244 368H229Q218 367 218 357L219 338Q216 333 220 326L223 301Q223 292 237 292L246 279Q248 272 254 272Z",
  "clima-shield": "M252 270Q458 264 652 268L666 270 676 285 681 294H690Q701 294 701 304L700 330Q700 337 694 338L694 355Q693 363 681 364L679 368 647 810Q645 820 638 824C611 834 560 839 500 840C425 841 350 834 300 828Q279 824 276 814L242 365H229Q219 364 220 354L220 335Q216 330 220 322L223 299Q224 291 237 291L246 276Q248 270 252 270Z",
  "hydra-matt": "M253 264Q457 258 652 263L667 265 676 280 681 288H691Q702 289 702 299L701 323Q701 330 694 331L694 348Q694 356 681 358L647 809Q644 817 636 820C611 831 559 834 500 835C424 836 350 830 300 822Q280 819 277 810L242 359H230Q219 358 220 347L220 328Q216 323 220 316L224 293Q224 285 237 285L247 270Q249 264 253 264Z",
};
function ProductArtwork({ product }: { product: Product }) {
  const id = useId().replace(/:/g, "");
  const clipId = `pack-outline-${id}`;
  const sharpId = `pack-clarity-${id}`;
  return <svg className="product-art" viewBox="150 195 620 760" role="img" aria-label={`${product.name} Ekotint paint container`}>
    <defs>
      <clipPath id={clipId} clipPathUnits="userSpaceOnUse"><path d={packSilhouettes[product.id]} /></clipPath>
      <filter id={sharpId} x="200" y="240" width="520" height="630" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feConvolveMatrix order="3" kernelMatrix="0 -0.18 0 -0.18 1.72 -0.18 0 -0.18 0" divisor="1" edgeMode="duplicate" preserveAlpha="true" />
      </filter>
    </defs>
    <g clipPath={`url(#${clipId})`}><image href={product.image} width="920" height="1100" filter={`url(#${sharpId})`} /></g>
  </svg>;
}
type Modal = "search" | "saved" | "product" | "brief" | null;

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
  { q: "Where do I start when choosing paint?", a: "Start with the surface and where you are painting: indoors or outdoors. Then consider your preferred finish. Explore the product details or collect your ideas in a project brief to discuss with Ekotint." },
  { q: "Can I choose my own custom colour?", a: "Yes. Use the colour picker or enter a six-digit HEX code in the colour studio to preview your selection. You can save it with your project ideas. The preview is a digital guide; confirm the physical paint colour with Ekotint." },
  { q: "Which paint is suitable for exterior walls?", a: "Clima Shield is an exterior acrylic emulsion. Ekotint also lists Weather Paint for exterior applications. The appropriate preparation and primer depend on your surface and project." },
  { q: "How much paint will I need?", a: "Measure the walls, subtract openings, and consider the product’s approved coverage and number of coats. Share the measurements with Ekotint to confirm quantities and the available pack sizes." },
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
  const [product, setProduct] = useState<Product>(products[0]);
  const [productFilter, setProductFilter] = useState("All paints");
  const [search, setSearch] = useState("");
  const [briefSaved, setBriefSaved] = useState(false);
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
  function showShade(shade: Shade) { setSelected(shade); setBefore(false); setModal(null); setNavOpen(false); setHexDraft(shade.hex); setStudioVisit((visit) => visit + 1); }
  function browseFamily(name: string) { setFamily(name); setNavOpen(false); setMobileMenu(false); document.getElementById("colours")?.scrollIntoView({ behavior: "smooth" }); }
  function openProduct(p: Product) { setProduct(p); setModal("product"); setNavOpen(false); }
  function openBrief() { setBriefSaved(false); setModal("brief"); setMobileMenu(false); setNavOpen(false); }
  function stepStory(step: number) { setPlaying(false); setStoryIndex((i) => (i + step + stories.length) % stories.length); }
  function applyCustomColour(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const hex = `#${hexDraft.trim().replace(/^#/, "")}`.toUpperCase();
    if (!/^#[0-9A-F]{6}$/.test(hex)) { setHexError("Enter a six-digit HEX code, for example #A493AE."); document.getElementById("custom-hex")?.focus(); return; }
    setHexError(""); showShade({ name: "Custom colour", hex, family: "Custom", note: "Your own colour, ready to explore." });
  }
  function saveBrief(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    const text = `EKOTINT PAINTS — MY PROJECT BRIEF\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}\nSelected colour: ${selected.name} ${selected.hex}\nSaved colours: ${favorites.map((s) => `${s.name} ${s.hex}`).join(", ") || "None yet"}\n\nNotes:\n${data.get("notes") || "No notes added."}`;
    try { localStorage.setItem("ekotint-project-brief", text); } catch { /* Download remains available. */ }
    setBriefText(text); setBriefSaved(true);
  }
  function downloadBrief() { const url = URL.createObjectURL(new Blob([briefText], { type: "text/plain" })); const link = document.createElement("a"); link.href = url; link.download = "My-Ekotint-Project.txt"; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
  const searchedShades = shades.filter((s) => `${s.name} ${s.family} ${s.hex}`.toLowerCase().includes(search.toLowerCase()));
  const searchedProducts = products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase()));
  const storyStyle = { "--story-bg": story.background, "--story-ink": story.ink, "--story-button": storyIndex === 3 ? "#ffffff" : "#653a7e", "--story-button-ink": storyIndex === 3 ? "#43284f" : "#ffffff" } as React.CSSProperties;
  const [paintRed, paintGreen, paintBlue] = wallPaintTransferTables(selected.hex);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="utility-bar"><span>THE PERFECT CHEMISTRY. A WORLD OF POSSIBILITY.</span><div><a href="#advice">Paint advice</a><a href="https://ekotintpaint.com/contact-us/" target="_blank" rel="noreferrer">Contact Ekotint <span>↗</span></a></div></div>
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#main" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" alt="Ekotint Paints — The Perfect Chemistry" width="153" height="62" /></a>
      <nav className="desktop-nav" aria-label="Main navigation"><button id="colour-menu-trigger" aria-expanded={navOpen} aria-controls="colour-menu" onClick={() => setNavOpen(!navOpen)}>Explore colours <Icon name="chevron" size={14} /></button><a href="#paints" onClick={() => setNavOpen(false)}>Our paints</a><a href="#inspiration" onClick={() => setNavOpen(false)}>Inspiration</a><a href="#colour-studio" onClick={() => setNavOpen(false)}>Colour studio <span className="new-dot" /></a></nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search colours and paints" onClick={() => { setSearch(""); setNavOpen(false); setModal("search"); }}><Icon name="search" /></button><button className="icon-button saved-button" aria-label={`Saved colours, ${favorites.length} saved`} onClick={() => { setNavOpen(false); setModal("saved"); }}><Icon name="heart" />{favorites.length > 0 && <span className="saved-count">{favorites.length}</span>}</button><button className="header-consult" onClick={openBrief}>Plan your project <Icon name="arrow" size={17} /></button><button className="icon-button mobile-menu-button" aria-label="Open menu" aria-expanded={mobileMenu} onClick={() => setMobileMenu(true)}><Icon name="menu" size={25} /></button></div>
      {navOpen && <div className="mega-menu" id="colour-menu"><div className="mega-inner"><div><p className="eyebrow">FIND YOUR KIND OF COLOUR</p><h2>A little curiosity.<br /><em>Endless possibilities.</em></h2><a className="text-link" href="#colours" onClick={() => setNavOpen(false)}>Explore the palettes <Icon name="arrow" size={18} /></a></div><div className="mega-families">{families.map((name, i) => <button key={name} onClick={() => browseFamily(name)}><span style={{ background: ["#A493AE", "#DDD5C5", "#A6AF98", "#BA7C63", "#788C9C"][i] }} />{name}<Icon name="arrow" size={16} /></button>)}</div><div className="mega-tools"><a href="#colour-studio" onClick={() => setNavOpen(false)}>Try it in a room <span>↗</span></a><a href="#custom-colour" onClick={() => setNavOpen(false)}>Create a custom colour <span>↗</span></a><button onClick={() => { setNavOpen(false); setModal("saved"); }}>Your saved colours <Icon name="heart" size={18} /></button><p>Explore a starting point.<br />Make it entirely your own.</p></div></div></div>}
    </header>

    <main id="main">
      <section className="editorial-hero" style={storyStyle} role="region" aria-roledescription="carousel" aria-label="Featured colour stories" onMouseEnter={() => setHeroHovered(true)} onMouseLeave={() => setHeroHovered(false)} onFocusCapture={() => setHeroHovered(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHeroHovered(false); }}>
        <div className="hero-layout">
          <div className="hero-copy"><p className="eyebrow"><span /> COLOUR, WITH A POINT OF VIEW.</p><h1>Your space.<br />Your colour.<br /><span>Your story.</span></h1><p className="hero-description">For the everyday moments.<br />And everything you imagine next.</p><div className="hero-actions"><a className="button hero-primary" href="#colours">Explore colours <Icon name="arrow" size={19} /></a><a className="hero-secondary" href="#paints">Find your paint <Icon name="arrow" size={19} /></a></div><div className="hero-collection"><span className="collection-line" /><span>THE POSSIBILITIES COLLECTION<br /><strong>Four spaces. A fresh perspective.</strong></span></div></div>
          <div className="hero-gallery"><div className="hero-image-frame" key={story.image}><img className="story-image" src={story.image} alt={story.alt} width={storyIndex === 3 ? 1536 : 1024} height={storyIndex === 3 ? 1024 : 1536} fetchPriority="high" /><span className="hero-image-label">{story.space}</span></div><button className="hero-peek" onClick={() => stepStory(1)} aria-label={`Next colour story: ${nextStory.title}`}><img src={nextStory.image} alt="" width="1024" height="1536" /><span><Icon name="arrow" size={22} /></span></button><div className="hero-story-meta"><button className="hero-story-colour" onClick={() => showShade(story.shade)}><i style={{ background: story.shade.hex }} /><span><small>{story.title}</small><strong>{story.shade.name} <span>{story.shade.hex}</span></strong></span><Icon name="arrow" size={20} /></button><div className="hero-controls"><span className="slide-counter">0{storyIndex + 1}<span> / 0{stories.length}</span></span><button className="round-control previous" aria-label="Previous colour story" onClick={() => stepStory(-1)}><Icon name="arrow" size={20} /></button><button className="round-control" aria-label="Next colour story" onClick={() => stepStory(1)}><Icon name="arrow" size={20} /></button><button className="play-control" aria-label={playing ? "Pause colour stories" : "Play colour stories"} onClick={() => setPlaying(!playing)}><Icon name={playing ? "pause" : "play"} size={16} /></button></div></div></div>
        </div><div className="hero-progress" aria-hidden="true">{stories.map((item, i) => <span key={item.image} className={i === storyIndex ? "active" : ""} />)}</div>
      </section>

      <nav className="journey-strip" aria-label="Start exploring"><a href="#colours"><Icon name="spark" size={27} /><span><strong>Find your colour</strong><small>Follow a feeling. Explore a palette.</small></span><Icon name="arrow" size={21} /></a><a href="#paints"><Icon name="layers" size={27} /><span><strong>Choose your finish</strong><small>Meet the paints behind your project.</small></span><Icon name="arrow" size={21} /></a><a href="#colour-studio"><Icon name="home" size={27} /><span><strong>Picture the possibilities</strong><small>Try a colour before you decide.</small></span><Icon name="arrow" size={21} /></a></nav>

      <section className="section product-section" id="paints"><div className="section-heading"><div><p className="eyebrow">THE PAINT COLLECTION</p><h2>A fresh perspective.<br /><span>For every surface.</span></h2></div><p className="section-description">Inside, outside, and the spaces in between.<br />Find the finish that feels right for your project.</p></div><div className="product-toolbar"><div className="product-tabs" aria-label="Paint location filter">{["All paints", "Interior", "Exterior"].map((name) => <button key={name} className={productFilter === name ? "active" : ""} aria-pressed={productFilter === name} onClick={() => setProductFilter(name)}>{name}</button>)}</div><span className="collection-count">{products.filter((p) => productFilter === "All paints" || p.category === productFilter).length} featured {productFilter === "Exterior" ? "paint" : "paints"}</span></div><div className="product-grid">{products.filter((p) => productFilter === "All paints" || p.category === productFilter).map((p) => <article className={`product-card product-${p.id}`} key={p.id}><button className="product-photo" aria-label={`Explore ${p.name}`} onClick={() => openProduct(p)}><span className="product-tag">{p.category}</span><ProductArtwork product={p} /><span className="product-view">Discover the paint <Icon name="arrow" size={20} /></span></button><div className="product-caption"><div><h3>{p.name}</h3><p>{p.finish}</p></div><button className="product-open" aria-label={`${p.name} product details`} onClick={() => openProduct(p)}><Icon name="plus" size={19} /></button></div></article>)}</div></section>

      <section className="exterior-feature"><div className="exterior-image"><img src="/images/premium-exterior.webp" alt="Original architectural concept of a contemporary villa courtyard with off-white and greige walls, walnut door and olive planting" width="1536" height="1024" loading="lazy" /><span>OUTSIDE, REIMAGINED.</span></div><div className="exterior-copy"><p className="eyebrow">A DIFFERENT KIND OF WELCOME</p><h2>Good things<br />start <em>outside.</em></h2><p>Give the first impression a little more feeling. Explore exterior paint for the spaces that welcome you home.</p><button className="button button-white" onClick={() => openProduct(products[1])}>Discover Clima Shield <Icon name="arrow" size={19} /></button><div className="exterior-palette" aria-label="Illustrative exterior palette"><span style={{ background: "#E9E3D8" }} /><span style={{ background: "#B1A89A" }} /><span style={{ background: "#6D7160" }} /><small>Warm neutrals.<br />A natural connection.</small></div></div></section>

      <section className="colour-section" id="colours"><div className="section colour-inner"><div className="section-heading"><div><p className="eyebrow">FOLLOW YOUR FEELING</p><h2>So many possibilities.<br /><span>One that feels like you.</span></h2></div><button className="text-link" onClick={() => setModal("saved")}>Your saved colours <Icon name="heart" size={18} /></button></div><div className="colour-toolbar"><div className="family-tabs" role="tablist" aria-label="Colour families">{families.map((name) => <button key={name} role="tab" aria-selected={family === name} aria-controls="shade-grid" className={family === name ? "active" : ""} onClick={() => setFamily(name)}>{name}</button>)}</div><span>Find a starting point. Make it yours.</span></div><div className="shade-grid" id="shade-grid" role="tabpanel" aria-label={`${family} colours`}>{shades.filter((s) => s.family === family).map((s, index) => <article className="shade-card" key={s.name} style={{ background: s.hex, color: shadeTextColor(s.hex) }}><button className={`shade-save ${isSaved(s) ? "is-saved" : ""}`} aria-label={`${isSaved(s) ? "Remove" : "Save"} ${s.name}`} aria-pressed={isSaved(s)} onClick={() => saveShade(s)}><Icon name="heart" size={20} /></button><button className="shade-open" aria-label={`Preview ${s.name} in the room`} onClick={() => showShade(s)}><span className="shade-number">0{index + 1} / THE PALETTE</span><span className="shade-title">{s.name}<small>{s.hex}</small></span><span className="shade-try">Picture it in a room <Icon name="arrow" size={21} /></span></button></article>)}</div><div className="palette-note"><p>Illustrative palette ideas. Final shades and physical samples should be confirmed with Ekotint.</p><span>Made personal, by you.</span></div><div className="custom-colour-strip" id="custom-colour"><div><h3>Your colour doesn’t need a name.</h3><p>Pick your own shade or enter a HEX code to try it in the studio.</p></div><form className="custom-colour-form" onSubmit={applyCustomColour} noValidate><label className="colour-picker" title="Choose a custom colour"><span className="sr-only">Choose a custom colour</span><input type="color" aria-label="Choose a custom colour" value={/^#[0-9a-f]{6}$/i.test(hexDraft) ? hexDraft : "#A493AE"} onChange={(e) => { setHexDraft(e.target.value.toUpperCase()); setHexError(""); }} /></label><label className="hex-field"><span>HEX COLOUR</span><input id="custom-hex" value={hexDraft} maxLength={7} spellCheck={false} autoComplete="off" aria-invalid={!!hexError} aria-describedby={hexError ? "hex-error" : undefined} onChange={(e) => { setHexDraft(e.target.value); setHexError(""); }} /></label><button type="submit" className="custom-apply" aria-label="Try custom colour in the room">Try it <Icon name="arrow" size={19} /></button>{hexError && <p className="hex-error" id="hex-error" role="alert">{hexError}</p>}</form></div></div></section>

      <section className="studio-section section" id="colour-studio"><div className="section-heading"><div><p className="eyebrow">THE COLOUR STUDIO</p><h2>A little imagination.<br /><span>A whole new room.</span></h2></div><p className="section-description">Same space. A different feeling.<br />See what a change of colour could do.</p></div><div className="studio-layout"><div className="studio-image"><svg viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${before ? "Original olive wall" : selected.name + " wall colour"} in the prepared living room`}><defs><clipPath id="wall-mask" clipPathUnits="userSpaceOnUse"><path d="M113 0H1018V514C970 515 908 514 855 517L816 518 808 507Q806 504 801 506L762 512 718 504Q711 502 713 508L717 518 675 519 669 513Q660 510 647 513C615 513 584 512 568 516Q561 518 565 530L571 549C535 543 502 543 477 550C440 557 419 581 416 620L415 647 216 650 215 602 166 602 166 578 113 579Z" /></clipPath><filter id="wall-paint" filterUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1024" colorInterpolationFilters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" result="wall-lighting" /><feComponentTransfer in="wall-lighting"><feFuncR type="table" tableValues={paintRed} /><feFuncG type="table" tableValues={paintGreen} /><feFuncB type="table" tableValues={paintBlue} /></feComponentTransfer></filter></defs><image href="/images/hero-room.webp" width="1536" height="1024" /><image data-painted-wall="true" data-paint-colour={selected.hex} href="/images/hero-room.webp" width="1536" height="1024" clipPath="url(#wall-mask)" filter="url(#wall-paint)" opacity={before ? 0 : 1} style={{ transition: "opacity 250ms ease" }} /></svg><span className="studio-scene-tag">THE LIVING ROOM / PREPARED SCENE</span><button className="before-button" aria-pressed={before} onClick={() => setBefore(!before)}>{before ? "See your colour" : "View before"}<Icon name="layers" size={17} /></button><div className="scene-label"><span style={{ background: before ? shades[4].hex : selected.hex }} />{before ? "Original room" : selected.name}</div></div><div className="studio-copy"><span className="eyebrow">MAKE YOURSELF AT HOME</span><h3>One wall.<br /><em>Endless possibility.</em></h3><p>Try a feeling. Change your mind. Find a colour you can see yourself living with.</p><div className="scene-swatches" aria-label="Room colour options">{sceneShades.map((s) => <button key={s.name} className={selected.hex === s.hex && !before ? "selected" : ""} aria-label={`Try ${s.name}`} aria-pressed={selected.hex === s.hex && !before} onClick={() => { setSelected(s); setHexDraft(s.hex); setBefore(false); }}><span style={{ background: s.hex }} />{selected.hex === s.hex && !before && <Icon name="check" size={16} />}</button>)}</div><div className="selected-shade"><span className="selected-colour-block" style={{ background: selected.hex }} /><div><strong>{selected.name}</strong><span>{selected.hex}</span></div><button className="icon-button" aria-label={`${isSaved(selected) ? "Remove" : "Save"} preview colour`} onClick={() => saveShade(selected)}><Icon name="heart" fill={isSaved(selected) ? "currentColor" : "none"} /></button></div><button className="button button-brand studio-save" onClick={() => saveShade(selected)}>{isSaved(selected) ? "Colour saved" : "Save this colour"}<Icon name={isSaved(selected) ? "check" : "heart"} size={18} /></button><a className="text-link" href="#custom-colour">Or create your own colour <Icon name="arrow" size={17} /></a><small className="preview-note">Colour is shown with simulated room lighting. Screens and real paint can differ; confirm your choice with a physical sample.</small></div></div></section>

      <section className="inspiration-section section" id="inspiration"><div className="section-heading"><div><p className="eyebrow">SPACES WITH SOMETHING TO SAY</p><h2>A place to begin.<br /><span>A thousand ways to feel.</span></h2></div><a className="text-link" href="#colours">Find your palette <Icon name="arrow" size={20} /></a></div><div className="inspiration-grid">{roomIdeas.map((room, index) => <article className={`room-card room-card-${index + 1}`} key={room.title}><button className="room-photo" onClick={() => browseFamily(room.family)} aria-label={`Explore ${room.family.toLowerCase()} inspired by ${room.title}`}><img src={room.image} alt={room.alt} width="1024" height="1536" loading="lazy" /><span className="room-photo-arrow"><Icon name="arrow" size={23} /></span></button><p className="eyebrow">{room.label}</p><h3>{room.title}</h3><p className="room-description">{room.description}</p><button className="room-palette-link" onClick={() => browseFamily(room.family)}>Explore the palette <Icon name="arrow" size={17} /></button></article>)}</div><p className="inspiration-note">Original AI-created room inspiration, imagined for this design preview.</p></section>

      <section className="advice-section" id="advice"><div className="section advice-inner"><div className="advice-intro"><p className="eyebrow">LET’S MAKE IT FEEL SIMPLE</p><h2>Good questions.<br /><em>Great beginnings.</em></h2><p>A little guidance goes a long way.<br />Let’s find your next step.</p><button className="text-link" onClick={openBrief}>Tell us about your project <Icon name="arrow" size={18} /></button></div><div className="faq-list">{questions.map((item, index) => <div className={`faq-item ${faq === index ? "open" : ""}`} key={item.q}><h3><button aria-expanded={faq === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaq(faq === index ? null : index)}><span>{item.q}</span><Icon name={faq === index ? "minus" : "plus"} size={19} /></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={faq !== index}><p>{item.a}</p></div></div>)}</div></div></section>

      <section className="closing-cta"><div className="closing-inner"><div><p className="eyebrow">THE NEXT CHAPTER IS YOURS.</p><h2>Make it<br /><em>your own.</em></h2></div><div className="closing-copy"><p>A new home. A fresh start.<br />Or just a different way to see your favourite room.</p><button className="button button-white" onClick={openBrief}>Plan your project <Icon name="arrow" size={20} /></button><span>Good things start with an idea.</span></div><div className="closing-swatch-art" aria-hidden="true"><i /><i /><i /></div></div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><a href="#main" className="footer-logo" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" alt="Ekotint Paints" width="181" height="73" /></a><p>A world of colour.<br /><em>Made personal.</em></p><a href="#main" className="back-top" aria-label="Back to top"><Icon name="arrow" size={24} /></a></div><div className="footer-links"><div><h3>Explore Ekotint</h3><a href="#paints">Our paint collection</a><a href="#colours">Explore colours</a><a href="#inspiration">Room inspiration</a><a href="#colour-studio">Colour studio</a></div><div><h3>Your next project</h3><button onClick={openBrief}>Plan your space</button><button onClick={() => setModal("saved")}>Your saved colours</button><a href="#custom-colour">Create a custom colour</a><a href="#advice">Paint advice</a></div><div><h3>Let’s talk colour</h3><a href="https://ekotintpaint.com/contact-us/" target="_blank" rel="noreferrer">Contact Ekotint <span>↗</span></a><p>Bring your ideas, shade choices<br />and project brief to an adviser.</p><button className="footer-project" onClick={openBrief}>Start with an idea <Icon name="arrow" size={18} /></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ekotint Paints</span><p>Design preview · Original AI room imagery · Illustrative palettes</p><span>The perfect chemistry.</span></div></footer>
    {toast && <div className="toast" role="status"><Icon name="check" size={18} />{toast}</div>}
    {(modal || mobileMenu) && typeof document !== "undefined" && createPortal(<div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) { setModal(null); setMobileMenu(false); } }}><div className={`modal-panel ${mobileMenu ? "menu-panel" : ""} ${modal === "product" ? "product-modal" : ""}`} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title"><button className="modal-close icon-button" aria-label="Close dialog" onClick={() => { setModal(null); setMobileMenu(false); }}><Icon name="close" /></button>
      {mobileMenu && <><p className="eyebrow">A WORLD OF POSSIBILITY</p><h2 id="dialog-title">Make it<br /><em>your own.</em></h2><nav className="mobile-nav" aria-label="Mobile navigation"><a href="#colours" onClick={() => setMobileMenu(false)}>Explore colours <Icon name="arrow" /></a><a href="#paints" onClick={() => setMobileMenu(false)}>Our paints <Icon name="arrow" /></a><a href="#colour-studio" onClick={() => setMobileMenu(false)}>Colour studio <Icon name="arrow" /></a><a href="#inspiration" onClick={() => setMobileMenu(false)}>Inspiration <Icon name="arrow" /></a><a href="#advice" onClick={() => setMobileMenu(false)}>Paint advice <Icon name="arrow" /></a></nav><button className="button button-brand" onClick={openBrief}>Plan your project <Icon name="arrow" size={18} /></button></>}
      {modal === "search" && <><p className="eyebrow">FOLLOW YOUR CURIOSITY</p><h2 id="dialog-title">Find your<br /><em>next possibility.</em></h2><label className="search-input"><Icon name="search" /><input aria-label="Search colours or paints" placeholder="Try lilac, exterior or Water Matt…" value={search} onChange={(e) => setSearch(e.target.value)} /></label><div className="search-results"><h3>Colours</h3>{searchedShades.slice(0, 6).map((s) => <button key={s.name} onClick={() => showShade(s)}><span className="result-swatch" style={{ background: s.hex }} /><span>{s.name}<small>{s.family} · {s.hex}</small></span><Icon name="arrow" size={18} /></button>)}{searchedShades.length === 0 && <p>No matching palette. Try a colour family or create your own colour in the studio.</p>}<h3>Paints</h3>{searchedProducts.map((p) => <button key={p.id} onClick={() => openProduct(p)}><ProductArtwork product={p} /><span>{p.name}<small>{p.category}</small></span><Icon name="arrow" size={18} /></button>)}</div></>}
      {modal === "saved" && <><p className="eyebrow">YOUR COLOUR STORY</p><h2 id="dialog-title">The ones<br /><em>you come back to.</em></h2><p className="modal-intro">Your favourite palettes and custom colours, all in one place.</p>{favorites.length ? <div className="saved-grid">{favorites.map((s) => <div className="saved-shade" key={s.hex}><button className="saved-preview" style={{ background: s.hex }} aria-label={`Preview saved colour ${s.name} ${s.hex}`} onClick={() => showShade(s)} /><div><span>{s.name}<small>{s.hex}</small></span><button className="icon-button" aria-label={`Remove saved colour ${s.name} ${s.hex}`} onClick={() => saveShade(s)}><Icon name="close" size={17} /></button></div></div>)}</div> : <div className="empty-saved"><Icon name="heart" size={42} /><p>Something catching your eye?<br />Tap a heart to keep it here.</p></div>}<button className="button button-brand" onClick={() => { setModal(null); browseFamily(family); }}>Keep exploring <Icon name="arrow" size={18} /></button>{favorites.length > 0 && <button className="text-link saved-plan" onClick={openBrief}>Bring these into your project <Icon name="arrow" size={17} /></button>}</>}
      {modal === "product" && <><div className={`product-modal-image product-${product.id}`}><ProductArtwork product={product} /></div><div className="product-modal-copy"><p className="eyebrow">EKOTINT / {product.category.toUpperCase()}</p><h2 id="dialog-title">{product.name}</h2><p className="product-modal-tagline">{product.finish}</p><p>{product.description}</p><div className="product-detail-line"><Icon name="layers" size={19} /><span>{product.detail}</span></div><div className="product-detail-line"><Icon name="home" size={19} /><span>{product.surface}</span></div><button className="button button-brand" onClick={openBrief}>Plan a project with this paint <Icon name="arrow" size={18} /></button><a className="text-link" href="#colour-studio" onClick={() => setModal(null)}>Find a colour you love <Icon name="arrow" size={17} /></a></div></>}
      {modal === "brief" && <><p className="eyebrow">YOUR NEXT CHAPTER</p><h2 id="dialog-title">Big ideas.<br /><em>A place to begin.</em></h2>{briefSaved ? <div className="brief-success"><span className="success-circle"><Icon name="check" size={28} /></span><h3>Your ideas, together.</h3><p>Your project brief is saved on this device. Download it to keep or share with an Ekotint adviser.</p><button className="button button-brand" onClick={downloadBrief}>Download your brief <Icon name="download" size={18} /></button></div> : <><p className="modal-intro">Gather your colour choices and ideas into a project brief.</p><form className="brief-form" onSubmit={saveBrief}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label></div><label>What are you planning?<select name="project" defaultValue="Interior refresh"><option>Interior refresh</option><option>Exterior painting</option><option>A whole new home</option><option>Commercial project</option><option>Still exploring</option></select></label><label>Tell us about your space<textarea name="notes" rows={3} placeholder="The room, the feeling, the colours you love…" /></label><div className="brief-selected-colour"><span style={{ background: selected.hex }} /><p>YOUR CURRENT COLOUR<strong>{selected.name} · {selected.hex}</strong></p></div><button className="button button-brand" type="submit">Save my project brief <Icon name="arrow" size={18} /></button><small>Your brief stays on this device until you choose to share it.</small></form></>}</>}
    </div></div>, document.body)}
  </>;
}
