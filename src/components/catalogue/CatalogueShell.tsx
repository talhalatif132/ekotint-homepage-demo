"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/Icon";
import ProductArtwork from "@/components/ProductArtwork";
import { catalogue, collectionName, getProduct, productHref, type PaintProduct } from "@/lib/catalogue";

type Ideas = {
  saved: string[]; toggle: (id: string) => void;
  plan: (product?: PaintProduct, hex?: string) => void;
  notify: (message: string) => void;
};
const IdeasContext = createContext<Ideas | null>(null);
export function usePaintIdeas() { return useContext(IdeasContext)!; }
type Dialog = "search" | "saved" | "brief" | "menu" | null;
type SavedColour = { name: string; hex: string };

export function CatalogueShell({ children }: { children: React.ReactNode }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [colours, setColours] = useState<SavedColour[]>([]);
  const [dialog, setDialog] = useState<Dialog>(null);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [planned, setPlanned] = useState<PaintProduct>();
  const [plannedHex, setPlannedHex] = useState<string>();
  const [brief, setBrief] = useState("");
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("ekotint-saved-products") || "[]");
      if (Array.isArray(stored)) setSaved(stored.filter((id) => typeof id === "string" && getProduct(id)));
      const shades = JSON.parse(localStorage.getItem("ekotint-colours") || "[]");
      if (Array.isArray(shades)) setColours(shades.filter((s) => s && typeof s.name === "string" && /^#[0-9a-f]{6}$/i.test(s.hex)));
    } catch { /* Saving ideas is optional when browser storage is unavailable. */ }
  }, []);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(timer);
  }, [toast]);
  useEffect(() => {
    if (!dialog) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(panel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]') || []).filter((el) => el.getClientRects().length > 0);
    const timer = setTimeout(() => {
      const input = dialog === "search" ? panel.current?.querySelector<HTMLInputElement>("input") : null;
      (input || focusable()[0] || panel.current)?.focus({ preventScroll: true });
    }, 20);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDialog(null);
      if (event.key !== "Tab") return;
      const items = focusable(); const first = items[0]; const last = items[items.length - 1];
      if (!items.length) { event.preventDefault(); panel.current?.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(timer); document.removeEventListener("keydown", onKey); document.body.style.overflow = overflow; previous?.focus({ preventScroll: true }); };
  }, [dialog]);

  function toggle(id: string) {
    const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
    setSaved(next);
    try { localStorage.setItem("ekotint-saved-products", JSON.stringify(next)); } catch { /* Session-only ideas still work. */ }
    setToast(next.includes(id) ? "Paint added to your saved ideas." : "Paint removed from your saved ideas.");
  }
  function plan(product?: PaintProduct, hex?: string) { setPlanned(product); setPlannedHex(hex); setBrief(""); setDialog("brief"); }
  function saveBrief(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const paints = planned ? [planned] : saved.map(getProduct).filter(Boolean) as PaintProduct[];
    const text = ["EKOTINT PAINTS — PROJECT IDEAS", "", `Name: ${form.get("name") || "Not supplied"}`, `Project: ${form.get("project")}`, "", "PAINTS", ...paints.map((p) => `${p.name} — ${collectionName(p.collection)}`), ...(plannedHex ? [`Colour idea: ${plannedHex}`] : []), ...colours.map((c) => `Saved colour: ${c.name} ${c.hex}`), "", "PROJECT NOTES", String(form.get("notes") || ""), "", "Confirm surface suitability, colour samples, pack sizes, coverage and pricing with Ekotint before ordering."].join("\n");
    setBrief(text);
    try { localStorage.setItem("ekotint-product-brief", text); } catch { /* Download remains available. */ }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = "Ekotint-project-brief.txt"; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const matches = catalogue.filter((p) => `${p.name} ${p.use} ${p.finish} ${collectionName(p.collection)}`.toLowerCase().includes(search.trim().toLowerCase()));

  return <IdeasContext.Provider value={{ saved, toggle, plan, notify: setToast }}>
    <div className="paint-site">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="utility-bar"><span>THE PERFECT CHEMISTRY. A WORLD OF POSSIBILITY.</span><div><Link href="/#advice">Paint advice</Link><a href="https://ekotintpaint.com/contact-us/" target="_blank" rel="noreferrer">Contact Ekotint ↗</a></div></div>
      <header className="site-header paint-header">
        <Link className="brand" href="/" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" width="153" height="62" alt="Ekotint Paints — The Perfect Chemistry" /></Link>
        <nav className="desktop-nav" aria-label="Main navigation"><Link href="/#colours">Explore colours</Link><Link href="/products/" className="paint-nav-active" aria-current="page">Our paints</Link><Link href="/#inspiration">Inspiration</Link><Link href="/#colour-studio">Colour studio <span className="new-dot" /></Link></nav>
        <div className="header-actions"><button className="icon-button" aria-label="Search paints" onClick={() => { setSearch(""); setDialog("search"); }}><Icon name="search" /></button><button className="icon-button saved-button" aria-label={`Saved ideas, ${saved.length + colours.length} saved`} onClick={() => setDialog("saved")}><Icon name="heart" />{saved.length + colours.length > 0 && <span className="saved-count">{saved.length + colours.length}</span>}</button><button className="header-consult" onClick={() => plan()}>Plan your project <Icon name="arrow" size={18} /></button><button className="icon-button mobile-menu-button" aria-label="Open menu" onClick={() => setDialog("menu")}><Icon name="menu" size={25} /></button></div>
      </header>
      {children}
      <footer className="site-footer paint-footer"><div className="footer-top"><Link className="footer-logo" href="/" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" width="181" height="73" alt="Ekotint Paints" /></Link><p>A world of colour.<br /><em>Made personal.</em></p><a className="back-top" href="#main" aria-label="Back to top"><Icon name="arrow" size={24} /></a></div><div className="footer-links"><div><h3>Explore Ekotint</h3><Link href="/products/">Our paint collection</Link><Link href="/#colours">Explore colours</Link><Link href="/#inspiration">Room inspiration</Link><Link href="/#colour-studio">Colour studio</Link></div><div><h3>Your next project</h3><button onClick={() => plan()}>Plan your space</button><button onClick={() => setDialog("saved")}>Your saved ideas</button><Link href="/#custom-colour">Create a custom colour</Link><Link href="/#advice">Paint advice</Link></div><div><h3>Let’s talk colour</h3><a href="https://ekotintpaint.com/contact-us/" target="_blank" rel="noreferrer">Contact Ekotint ↗</a><p>Bring your ideas, shade choices<br />and project brief to an adviser.</p><button className="footer-project" onClick={() => plan()}>Start with an idea <Icon name="arrow" size={18} /></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ekotint Paints</span><p>Design preview · Original AI room imagery · Illustrative palettes</p><span>The perfect chemistry.</span></div></footer>
      {toast && <div className="paint-toast" role="status"><Icon name="check" size={18} />{toast}</div>}
      {dialog && typeof document !== "undefined" && createPortal(<div className="paint-overlay" onMouseDown={(e) => { if (e.currentTarget === e.target) setDialog(null); }}><div className={`paint-dialog ${dialog === "menu" ? "paint-menu-dialog" : ""}`} ref={panel} role="dialog" aria-modal="true" aria-labelledby="paint-dialog-title" tabIndex={-1}><button className="paint-dialog-close" aria-label="Close dialog" onClick={() => setDialog(null)}><Icon name="close" size={23} /></button>
        {dialog === "menu" && <><p className="pc-kicker">A WORLD OF POSSIBILITY</p><h2 id="paint-dialog-title">Find your next idea.</h2><nav className="paint-mobile-links" aria-label="Mobile navigation"><Link href="/" onClick={() => setDialog(null)}>Home <Icon name="arrow" /></Link><Link href="/products/" onClick={() => setDialog(null)}>Our paints <Icon name="arrow" /></Link><Link href="/#colours">Explore colours <Icon name="arrow" /></Link><Link href="/#inspiration">Inspiration <Icon name="arrow" /></Link><Link href="/#colour-studio">Colour studio <Icon name="arrow" /></Link></nav><button className="pc-button" onClick={() => plan()}>Plan your project <Icon name="arrow" /></button></>}
        {dialog === "search" && <><p className="pc-kicker">A LITTLE CURIOSITY</p><h2 id="paint-dialog-title">Find your finish.</h2><label className="paint-search-dialog"><Icon name="search" /><input placeholder="Search paints, surfaces or finishes…" aria-label="Search paints, surfaces or finishes" value={search} onChange={(e) => setSearch(e.target.value)} /></label><p className="paint-dialog-count">{matches.length} {matches.length === 1 ? "paint" : "paints"} to explore</p><div className="paint-dialog-results">{matches.map((p) => <Link href={productHref(p)} key={p.id} onClick={() => setDialog(null)}><span className="paint-mini-pack" style={{ background: p.background }}><ProductArtwork product={p} /></span><span><strong>{p.name}</strong><small>{collectionName(p.collection)} · {p.finish}</small></span><Icon name="arrow" size={19} /></Link>)}{!matches.length && <p className="paint-empty">No paints match that search. Try “matt”, “exterior” or a product name.</p>}</div><Link className="pc-text-link" href="/products/" onClick={() => setDialog(null)}>Explore all products <Icon name="arrow" size={18} /></Link></>}
        {dialog === "saved" && <><p className="pc-kicker">YOUR NEXT CHAPTER</p><h2 id="paint-dialog-title">The ideas you keep.</h2><p className="paint-dialog-intro">A few favourites. A little inspiration. The beginning of your next space.</p>{!saved.length && !colours.length ? <div className="paint-empty"><Icon name="heart" size={38} /><p>Tap a heart on a paint to keep it here.</p><button className="pc-button" onClick={() => setDialog(null)}>Keep exploring <Icon name="arrow" /></button></div> : <><div className="paint-dialog-results">{saved.map((id) => { const p = getProduct(id)!; return <div className="paint-saved-row" key={id}><Link href={productHref(p)} onClick={() => setDialog(null)}><span className="paint-mini-pack" style={{ background: p.background }}><ProductArtwork product={p} /></span><span><strong>{p.name}</strong><small>{collectionName(p.collection)}</small></span></Link><button className="pc-icon" aria-label={`Remove ${p.name} ${collectionName(p.collection)}`} onClick={() => toggle(id)}><Icon name="close" size={18} /></button></div>; })}</div>{colours.length > 0 && <div className="paint-saved-colours"><h3>Saved colours</h3>{colours.map((c) => <Link key={c.hex} href={`/?colour=${c.hex.slice(1)}#colour-studio`}><span style={{ background: c.hex }} /><span>{c.name}<small>{c.hex}</small></span><Icon name="arrow" size={18} /></Link>)}</div>}<button className="pc-button pc-wide" onClick={() => plan()}>Bring these into a project <Icon name="arrow" /></button></>}</>}
        {dialog === "brief" && <><p className="pc-kicker">FROM AN IDEA TO A SPACE</p><h2 id="paint-dialog-title">Make a little plan.</h2>{brief ? <div className="paint-brief-success"><span><Icon name="check" size={30} /></span><h3>Your ideas, together.</h3><p>Your brief is ready to download and share with an Ekotint adviser.</p><button className="pc-button" onClick={download}>Download your brief <Icon name="download" size={19} /></button><button className="pc-text-link" onClick={() => setBrief("")}>Edit your ideas <Icon name="back" size={17} /></button></div> : <><p className="paint-dialog-intro">Collect your paint choices and project details in one place.</p>{planned && <div className="paint-brief-product"><span className="paint-mini-pack" style={{ background: planned.background }}><ProductArtwork product={planned} /></span><div><strong>{planned.name}</strong><small>{collectionName(planned.collection)}{plannedHex && ` · ${plannedHex}`}</small></div></div>}<form className="paint-brief-form" onSubmit={saveBrief}><label>Your name <span>(optional)</span><input name="name" autoComplete="name" placeholder="Your name" maxLength={100} /></label><label>What are you planning?<select name="project" defaultValue={planned?.use === "Exterior" ? "Exterior refresh" : "Interior refresh"}><option>Interior refresh</option><option>Exterior refresh</option><option>Wood & metal details</option><option>Surface preparation</option><option>A whole new home</option><option>Commercial project</option></select></label><label>Tell us about your space<textarea name="notes" rows={4} placeholder="The surface, room measurements, colour ideas and any questions…" maxLength={3000} /></label><button className="pc-button pc-wide" type="submit">Create my project brief <Icon name="arrow" size={19} /></button><small>Your brief stays on this device. Download it when you’re ready to share.</small></form></>}</>}
      </div></div>, document.body)}
    </div>
  </IdeasContext.Provider>;
}

export function SavePaint({ product, label = false }: { product: PaintProduct; label?: boolean }) {
  const { saved, toggle } = usePaintIdeas(); const active = saved.includes(product.id);
  return <button className={label ? "pc-save-label" : "pc-save"} aria-pressed={active} aria-label={`${active ? "Unsave" : "Save"} ${product.name} ${collectionName(product.collection)}`} onClick={() => toggle(product.id)}><Icon name="heart" size={21} fill={active ? "currentColor" : "none"} />{label && (active ? "Saved to your ideas" : "Save this paint")}</button>;
}

export function PaintCard({ product }: { product: PaintProduct }) {
  return <article className="pc-card"><div className="pc-card-visual" style={{ background: product.background }}><span className="pc-card-use">{product.use}</span><SavePaint product={product} /><Link className="pc-card-image" href={productHref(product)} aria-label={`Explore ${product.name} ${collectionName(product.collection)}`}><ProductArtwork product={product} /><span className="pc-card-discover">Discover the paint <Icon name="arrow" size={21} /></span></Link></div><div className="pc-card-copy"><span className="pc-kicker">{collectionName(product.collection)}</span><Link href={productHref(product)}><h3>{product.name}</h3><Icon name="arrow" size={21} /></Link><p>{product.tagline}</p><span className="pc-card-finish">{product.finish} <i /> {product.categoryLabel}</span></div></article>;
}

export function ProjectInvitation() {
  const { plan } = usePaintIdeas();
  return <section className="pc-project-invite"><div><p className="pc-kicker">A LITTLE GUIDANCE GOES A LONG WAY</p><h2>Good ideas deserve<br /><em>a beautiful finish.</em></h2></div><div><p>Found a paint you like? Bring your colours, surface details and questions together.</p><button className="pc-button pc-button-white" onClick={() => plan()}>Plan your project <Icon name="arrow" size={20} /></button></div><div className="pc-invite-art" aria-hidden="true"><i /><i /><i /></div></section>;
}
