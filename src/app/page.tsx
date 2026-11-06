"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type IconName = "arrow" | "search" | "heart" | "menu" | "close" | "check" | "plus" | "minus" | "sun" | "home" | "layers" | "spark" | "download";
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
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

type Shade = { name: string; hex: string; family: string; note: string };
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
  { id: "water-matt", name: "Water Matt", category: "Interior", finish: "A quietly beautiful interior.", image: "/images/water-matt.webp", description: "A rich, non-reflective finish for interior walls. Bring depth and a considered matt appearance to the spaces you live in.", detail: "Interior walls · Matt finish", surface: "Designed for interior spaces" },
  { id: "clima-shield", name: "Clima Shield", category: "Exterior", finish: "Beautiful, come rain or shine.", image: "/images/clima-shield.webp", description: "A premium 100% acrylic exterior emulsion engineered for Pakistan’s climate. A durable matt finish with resistance to UV, algae, fungus and dirt pick-up.", detail: "Exterior walls · Acrylic emulsion", surface: "Cement plaster, concrete and fibre cement" },
  { id: "hydra-matt", name: "Hydra-Matt", category: "Matt finish", finish: "Depth you can see. A finish you feel.", image: "/images/hydra-matt.webp", description: "A velvety matt appearance with strong opacity, antifungal protection and colour stability. A refined finish for a fresh perspective on your space.", detail: "Matt finish · Strong opacity", surface: "Explore the Hydra-Matt finish" },
];
type Product = typeof products[number];
type Modal = "search" | "saved" | "product" | "brief" | null;

export default function Home() {
  const [family, setFamily] = useState("Purples");
  const [selected, setSelected] = useState<Shade>(shades[16]);
  const [before, setBefore] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [modal, setModal] = useState<Modal>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [product, setProduct] = useState<Product>(products[0]);
  const [productFilter, setProductFilter] = useState("All paints");
  const [search, setSearch] = useState("");
  const [briefSaved, setBriefSaved] = useState(false);
  const [briefText, setBriefText] = useState("");
  const [toast, setToast] = useState("");
  const [faq, setFaq] = useState<number | null>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem("ekotint-colours") || "[]"); if (Array.isArray(saved)) setFavorites(saved.filter((name) => shades.some((s) => s.name === name))); } catch { /* Storage is optional. */ }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(""), 2600); return () => clearTimeout(timer); }, [toast]);
  useEffect(() => {
    if (!modal && !mobileMenu) return;
    const previous = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => modalRef.current?.querySelector<HTMLElement>("button, input, a, select, textarea")?.focus(), 40);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setModal(null); setMobileMenu(false); }
      if (e.key === "Tab" && modalRef.current) {
        const items = Array.from(modalRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input, a[href], select, textarea')).filter((el) => el.offsetParent !== null);
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(timer); document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKey); previous?.focus(); };
  }, [modal, mobileMenu]);

  function saveShade(shade: Shade) {
    setFavorites((current) => {
      const next = current.includes(shade.name) ? current.filter((n) => n !== shade.name) : [...current, shade.name];
      try { localStorage.setItem("ekotint-colours", JSON.stringify(next)); } catch { /* Keep the session usable without storage. */ }
      setToast(next.includes(shade.name) ? `${shade.name} added to your colours` : `${shade.name} removed`);
      return next;
    });
  }
  function showShade(shade: Shade) { setSelected(shade); setBefore(false); setModal(null); document.getElementById("colour-studio")?.scrollIntoView({ behavior: "smooth", block: "center" }); }
  function openProduct(p: Product) { setProduct(p); setModal("product"); }
  function openBrief() { setBriefSaved(false); setModal("brief"); }
  function navigate() { setMobileMenu(false); }
  function saveBrief(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const data = new FormData(e.currentTarget);
    const text = `EKOTINT PAINTS — MY PROJECT BRIEF\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}\nFavourite colours: ${favorites.join(", ") || selected.name}\n\nNotes:\n${data.get("notes") || "No notes added."}`;
    try { localStorage.setItem("ekotint-project-brief", text); } catch { /* Download remains available. */ }
    setBriefText(text); setBriefSaved(true);
  }
  function downloadBrief() { const url = URL.createObjectURL(new Blob([briefText], { type: "text/plain" })); const link = document.createElement("a"); link.href = url; link.download = "My-Ekotint-Project.txt"; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
  const searchedShades = shades.filter((s) => `${s.name} ${s.family} ${s.hex}`.toLowerCase().includes(search.toLowerCase()));
  const searchedProducts = products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(search.toLowerCase()));
  const faqs = [
    { q: "How do I find the right paint for my space?", a: "Start with where you’re painting: indoors or outdoors. Then consider your surface, the look you want and the preparation it needs. Explore the paint collection or save a project brief to discuss your requirements with Ekotint." },
    { q: "Can I see how a colour might look in a room?", a: "Yes. Explore the prepared room in our Colour Studio and switch between the example palettes. Lighting and screens affect colour, so always check a physical shade before making your final choice." },
    { q: "Which paint should I choose for exterior walls?", a: "Clima Shield is an exterior acrylic emulsion made for Pakistan’s climate. Ekotint also lists Weather Paint for exterior applications. Choose the product and preparation system that suit your particular surface." },
    { q: "How much paint will I need?", a: "Measure the walls you plan to paint, subtract doors and windows, and consider the recommended number of coats. The correct quantity depends on the chosen product, surface and application method. Ask Ekotint for the approved coverage information for your project." },
  ];

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="announcement"><span>THE PERFECT CHEMISTRY. THE PERFECT FEELING.</span><button onClick={openBrief}>Let’s talk colour <span>↗</span></button></div>
    <header className="site-header">
      <a className="brand" href="#" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" alt="Ekotint Paints — The Perfect Chemistry" width="153" height="62" /></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#colours">Explore colours</a><a href="#paints">Our paints</a><a href="#inspiration">Inspiration</a><a href="#colour-studio">Colour studio <span className="new-dot" /></a></nav>
      <div className="header-actions"><button className="icon-button" aria-label="Search colours and paints" onClick={() => { setSearch(""); setModal("search"); }}><Icon name="search" /></button><button className="icon-button saved-button" aria-label={`Saved colours, ${favorites.length} saved`} onClick={() => setModal("saved")}><Icon name="heart" />{favorites.length > 0 && <span className="saved-count">{favorites.length}</span>}</button><button className="header-consult" onClick={openBrief}>Plan your space <Icon name="arrow" size={17} /></button><button className="icon-button mobile-menu-button" aria-label="Open menu" aria-expanded={mobileMenu} onClick={() => setMobileMenu(true)}><Icon name="menu" size={26} /></button></div>
    </header>

    <main id="main">
      <section className="hero" aria-label="Colour inspiration">
        <div className="hero-content"><p className="eyebrow light"><span /> A WORLD OF COLOUR, A FEELING OF HOME</p><h1>A little colour.<br /><em>A whole new<br className="desktop-break" /> feeling.</em></h1><p className="hero-description">Beautiful paint. Personal colour.<br />For the spaces you make your own.</p><div className="hero-cta"><a href="#colours" className="button button-cream">Find your colour <Icon name="arrow" size={19} /></a><a href="#colour-studio" className="hero-text-link">Try it in a room <span>↗</span></a></div><div className="hero-colour-note"><span className="hero-mini-palette" aria-hidden="true"><i /><i /><i /></span><span>A palette of possibilities.<br /><strong>A feeling that’s all yours.</strong></span></div></div>
        <div className="hero-visual"><img className="hero-image" src="/images/hero-purple-room.webp" alt="Warm sunlight across a dusty-lilac wall in a contemporary living room with a cream sofa and walnut table" width="1536" height="1024" fetchPriority="high" /><button className="hero-palette" onClick={() => showShade(shades[16])}><span className="palette-dot" /><span><small>THE LILAC EDIT</small><strong>A softer way to live.</strong></span><span className="palette-arrow">↗</span></button><span className="hero-photo-caption">COLOUR IS PERSONAL. MAKE IT YOURS.</span></div>
      </section>

      <div className="intro-strip"><p>Beautiful colour.<br /><em>Considered for your space.</em></p><span><Icon name="home" /> Interior & exterior paints</span><span><Icon name="layers" /> A finish for every feeling</span><span><Icon name="sun" /> Inspired by everyday living</span></div>

      <section className="section colour-section" id="colours">
        <div className="section-top reveal"><div><p className="eyebrow">01 / THE COLOUR COLLECTION</p><h2>Meet your next<br /><em>favourite colour.</em></h2></div><div className="section-intro"><p>From the quietly comforting to the beautifully bold. Find a palette that feels like you.</p><div className="family-tabs" role="tablist" aria-label="Colour families">{families.map((name) => <button key={name} role="tab" aria-selected={family === name} aria-controls="shade-grid" className={family === name ? "active" : ""} onClick={() => setFamily(name)}>{name}</button>)}</div></div></div>
        <div className="shade-grid" id="shade-grid" role="tabpanel" aria-label={`${family} colours`}>{shades.filter((s) => s.family === family).map((s, index) => <article className="shade-card" key={s.name}><div className="shade-sample" style={{ backgroundColor: s.hex }}><button className={`shade-save ${favorites.includes(s.name) ? "is-saved" : ""}`} aria-label={`${favorites.includes(s.name) ? "Remove" : "Save"} ${s.name}`} aria-pressed={favorites.includes(s.name)} onClick={() => saveShade(s)}><Icon name="heart" size={19} /></button><button className="shade-open" style={{ color: shadeTextColor(s.hex) }} onClick={() => showShade(s)} aria-label={`Preview ${s.name} in the room`}><span className="shade-number">0{index + 1}</span><span className="shade-try">Try this colour <Icon name="arrow" size={18} /></span></button></div><div className="shade-caption"><h3>{s.name}</h3><span>{s.hex}</span></div></article>)}</div>
        <div className="section-bottom"><p>Illustrative palettes. Save a colour for your project.</p><button className="text-link" onClick={() => setModal("saved")}>Your saved colours <Icon name="arrow" size={17} /></button></div>
      </section>

      <section className="studio-section" id="colour-studio">
        <div className="studio-image"><svg viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${before ? "Original olive wall" : selected.name + " wall colour"} in the prepared living room`}><defs><clipPath id="wall-mask"><path d="M113 0H1018V508L980 513 978 546 928 548 927 514 565 513 562 544 485 545 449 563 417 602 415 647 216 651 214 601 166 599 164 576 113 570Z" /></clipPath></defs><image href="/images/hero-room.webp" width="1536" height="1024" /><rect width="1536" height="1024" clipPath="url(#wall-mask)" fill={selected.hex} style={{ mixBlendMode: "color", opacity: before || selected.name === "Olive Grove" ? 0 : 0.73, transition: "fill 600ms ease, opacity 400ms ease" }} /></svg><div className="scene-label"><span className="scene-label-dot" style={{ backgroundColor: before ? shades[4].hex : selected.hex }} />{before ? "Original room" : selected.name}</div><button className="before-button" aria-pressed={before} onClick={() => setBefore((v) => !v)}>{before ? "See your colour" : "View before"} <Icon name={before ? "spark" : "layers"} size={15} /></button></div>
        <div className="studio-copy"><p className="eyebrow">02 / THE COLOUR STUDIO</p><h2>A space.<br /><em>Endless possibilities.</em></h2><p>A colour can change the whole feeling of a room. A quiet corner. A fresh beginning. See what feels right to you.</p><div className="scene-swatches" aria-label="Room colour options">{sceneShades.map((s) => <button key={s.name} className={selected.name === s.name && !before ? "selected" : ""} style={{ "--swatch": s.hex } as React.CSSProperties} aria-label={`Try ${s.name}`} aria-pressed={selected.name === s.name && !before} onClick={() => { setSelected(s); setBefore(false); }}><span style={{ backgroundColor: s.hex }} />{selected.name === s.name && !before && <Icon name="check" size={19} />}</button>)}</div><div className="selected-shade"><div><strong>{selected.name}</strong><span>{selected.note}</span></div><button className="icon-button" onClick={() => saveShade(selected)} aria-label={`${favorites.includes(selected.name) ? "Remove" : "Save"} preview colour`}><Icon name="heart" fill={favorites.includes(selected.name) ? "currentColor" : "none"} size={21} /></button></div><button className="button button-dark" onClick={() => { setFamily(selected.family); document.getElementById("colours")?.scrollIntoView({ behavior: "smooth" }); }}>Explore this palette <Icon name="arrow" size={18} /></button><small className="preview-note">On-screen colours are a guide. Always check a physical shade before choosing your paint.</small></div>
      </section>

      <section className="section product-section" id="paints"><div className="section-top reveal"><div><p className="eyebrow">03 / PAINT WITH POSSIBILITY</p><h2>Find the finish<br /><em>for your space.</em></h2></div><div className="product-heading-right"><p>The right paint is where it all begins.<br />Explore the possibilities, inside and out.</p><div className="product-tabs" aria-label="Paint location filter">{["All paints", "Interior", "Exterior"].map((s) => <button key={s} className={productFilter === s ? "active" : ""} aria-pressed={productFilter === s} onClick={() => setProductFilter(s)}>{s}</button>)}</div></div></div><div className="product-grid">{products.filter((p) => productFilter === "All paints" || p.category === productFilter).map((p) => <article className="product-card" key={p.id}><button className="product-photo" onClick={() => openProduct(p)} aria-label={`Explore ${p.name}`}><span className="product-tag">{p.category.toUpperCase()}</span><img src={p.image} alt={`${p.name} Ekotint paint container`} loading="lazy" width="920" height="1100" /><span className="product-circle"><Icon name="arrow" /></span></button><div className="product-caption"><div><h3>{p.name}</h3><p>{p.finish}</p></div><button className="product-open" aria-label={`${p.name} product details`} onClick={() => openProduct(p)}><Icon name="plus" size={20} /></button></div></article>)}</div></section>

      <section className="inspiration-section" id="inspiration"><div className="inspiration-image"><img src="/images/interior-room.webp" alt="A warm brown painted living room with a sofa and contrasting light furniture" width="608" height="750" loading="lazy" /><span>THE ART OF FEELING AT HOME</span></div><div className="inspiration-copy reveal"><p className="eyebrow">04 / ROOMS WITH PERSONALITY</p><h2>Good rooms<br />begin with<br /><em>a feeling.</em></h2><p>That first cup of tea. The late afternoon light. Your favourite people, in your favourite place.</p><p>Make space for the colours that make you feel at home.</p><button className="text-link" onClick={() => { setFamily("Earth tones"); document.getElementById("colours")?.scrollIntoView({ behavior: "smooth" }); }}>Find your inspiration <Icon name="arrow" size={18} /></button><div className="inspiration-palette"><span style={{ background: "#9A765D" }} /><span style={{ background: "#D2B49A" }} /><span style={{ background: "#E5DED2" }} /><span style={{ background: "#4D5848" }} /><small>A little warmth.<br />A lot of character.</small></div></div></section>

      <section className="section faq-section" id="advice"><div className="faq-intro reveal"><p className="eyebrow">A LITTLE GUIDANCE</p><h2>A good place<br /><em>to begin.</em></h2><p>A few answers to help you<br />take the next step.</p><button className="text-link" onClick={openBrief}>Tell us about your space <Icon name="arrow" size={17} /></button></div><div className="faq-list">{faqs.map((item, index) => <div className={`faq-item ${faq === index ? "open" : ""}`} key={item.q}><h3><button aria-expanded={faq === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaq(faq === index ? null : index)}><span>{item.q}</span><Icon name={faq === index ? "minus" : "plus"} size={18} /></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={faq !== index}><p>{item.a}</p></div></div>)}</div></section>

      <section className="closing-cta"><div className="closing-lines" aria-hidden="true"><span /><span /><span /></div><p className="eyebrow">YOUR NEXT CHAPTER, IN COLOUR</p><h2>Let’s make it<br /><em>feel like you.</em></h2><button className="button button-cream" onClick={openBrief}>Plan your space <Icon name="arrow" size={20} /></button><p>Big ideas. Small changes. We’re here for both.</p></section>
    </main>

    <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><img src="/images/ekotint-logo.png" alt="Ekotint Paints" width="181" height="73" /><p>The perfect chemistry.<br />A world of possibilities.</p></div><div className="footer-column"><h3>Explore</h3><a href="#colours">Our colours</a><a href="#paints">Our paints</a><a href="#colour-studio">Colour studio</a><a href="#inspiration">Inspiration</a></div><div className="footer-column"><h3>Let us help</h3><a href="#advice">Paint advice</a><button onClick={openBrief}>Plan your project</button><button onClick={() => setModal("saved")}>Saved colours</button><a href="https://ekotintpaint.com/contact-us/" target="_blank" rel="noreferrer">Contact Ekotint ↗</a></div><div className="footer-thought"><span className="eyebrow">A HOME IS A FEELING.</span><p>Find yours<br /><em>in colour.</em></p><a href="#colours" aria-label="Explore colour collection"><Icon name="arrow" size={29} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ekotint Paints</span><span>Homepage concept · Room palettes are illustrative.</span><a href="#main">Back to top ↑</a></div></footer>

    {toast && <div className="toast" role="status"><Icon name="check" size={17} />{toast}</div>}

    {(modal || mobileMenu) && typeof document !== "undefined" && createPortal(<div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) { setModal(null); setMobileMenu(false); } }}><div className={`modal-panel ${mobileMenu ? "menu-panel" : ""} ${modal === "product" ? "product-modal" : ""}`} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="dialog-title"><button className="modal-close icon-button" onClick={() => { setModal(null); setMobileMenu(false); }} aria-label="Close dialog"><Icon name="close" /></button>
      {mobileMenu ? <><p className="eyebrow">EKOTINT PAINTS</p><h2 id="dialog-title">A world<br /><em>of colour.</em></h2><nav className="mobile-nav" aria-label="Mobile navigation"><a href="#colours" onClick={navigate}>Explore colours <Icon name="arrow" /></a><a href="#paints" onClick={navigate}>Our paints <Icon name="arrow" /></a><a href="#colour-studio" onClick={navigate}>Colour studio <Icon name="arrow" /></a><a href="#inspiration" onClick={navigate}>Inspiration <Icon name="arrow" /></a><a href="#advice" onClick={navigate}>Paint advice <Icon name="arrow" /></a></nav><button className="button button-dark" onClick={() => { setMobileMenu(false); openBrief(); }}>Plan your space <Icon name="arrow" size={18} /></button></> : null}
      {modal === "search" && <><p className="eyebrow">FIND YOUR INSPIRATION</p><h2 id="dialog-title">What feels <em>like you?</em></h2><label className="search-input"><Icon name="search" /><input aria-label="Search colours or paints" placeholder="Try sage, interior or Clima Shield…" value={search} onChange={(e) => setSearch(e.target.value)} /></label><div className="search-results"><h3>Colours</h3>{searchedShades.slice(0, 6).map((s) => <button key={s.name} onClick={() => showShade(s)}><span className="result-swatch" style={{ backgroundColor: s.hex }} /><span>{s.name}<small>{s.family}</small></span><Icon name="arrow" size={17} /></button>)}{searchedShades.length === 0 && <p>No matching palettes. Try a colour family or a paint name.</p>}<h3>Paints</h3>{searchedProducts.map((p) => <button key={p.id} onClick={() => openProduct(p)}><img src={p.image} width="40" height="46" alt="" /><span>{p.name}<small>{p.category}</small></span><Icon name="arrow" size={17} /></button>)}</div></>}
      {modal === "saved" && <><p className="eyebrow">YOUR COLOUR STORY</p><h2 id="dialog-title">The ones<br /><em>you love.</em></h2><p className="modal-intro">Keep your favourite palettes together, then take them into your next project.</p>{favorites.length ? <div className="saved-grid">{shades.filter((s) => favorites.includes(s.name)).map((s) => <div className="saved-shade" key={s.name}><button className="saved-preview" style={{ backgroundColor: s.hex }} onClick={() => showShade(s)} aria-label={`Preview saved colour ${s.name}`} /><div><span>{s.name}</span><button className="icon-button" aria-label={`Remove saved colour ${s.name}`} onClick={() => saveShade(s)}><Icon name="close" size={16} /></button></div></div>)}</div> : <div className="empty-saved"><Icon name="heart" size={40} /><p>A little inspiration goes a long way.<br />Tap the heart on a colour to save it here.</p></div>}<button className="button button-dark" onClick={() => { setModal(null); document.getElementById("colours")?.scrollIntoView({ behavior: "smooth" }); }}>Keep exploring <Icon name="arrow" size={18} /></button>{favorites.length > 0 && <button className="text-link saved-plan" onClick={openBrief}>Add these to a project brief <Icon name="arrow" size={17} /></button>}</>}
      {modal === "product" && <><div className="product-modal-image"><img src={product.image} alt={`${product.name} paint container`} width="920" height="1100" /></div><div className="product-modal-copy"><p className="eyebrow">EKOTINT / {product.category.toUpperCase()}</p><h2 id="dialog-title">{product.name}</h2><p className="product-modal-tagline">{product.finish}</p><p>{product.description}</p><div className="product-detail-line"><Icon name="layers" size={18} /><span>{product.detail}</span></div><div className="product-detail-line"><Icon name="home" size={18} /><span>{product.surface}</span></div><button className="button button-dark" onClick={openBrief}>Plan a project with this paint <Icon name="arrow" size={17} /></button><a className="text-link" href="#colour-studio" onClick={() => setModal(null)}>Find a colour you love <Icon name="arrow" size={16} /></a></div></>}
      {modal === "brief" && <><p className="eyebrow">A NEW BEGINNING</p><h2 id="dialog-title">Your space.<br /><em>Your colour story.</em></h2>{briefSaved ? <div className="brief-success"><span className="success-circle"><Icon name="check" size={26} /></span><h3>Your ideas, in one place.</h3><p>Your project brief is saved on this device. Download it to keep or share with your Ekotint adviser.</p><button className="button button-dark" onClick={downloadBrief}>Download your brief <Icon name="download" size={17} /></button></div> : <><p className="modal-intro">Gather your ideas into a project brief you can save and share.</p><form className="brief-form" onSubmit={saveBrief}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label></div><label>What are you planning?<select name="project" defaultValue="Interior refresh"><option>Interior refresh</option><option>Exterior painting</option><option>A whole new home</option><option>Commercial project</option><option>Still exploring</option></select></label><label>Tell us a little about your space<textarea name="notes" rows={3} placeholder="The room, the feeling, the colours you’re drawn to…" /></label><button className="button button-dark" type="submit">Save my project brief <Icon name="arrow" size={18} /></button><small>Your brief stays on this device until you choose to share it.</small></form></>}</>}
    </div></div>, document.body)}
  </>;
}
