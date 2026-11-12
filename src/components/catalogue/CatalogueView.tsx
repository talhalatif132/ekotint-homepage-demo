"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import ProductArtwork from "@/components/ProductArtwork";
import { catalogue, collections, type Collection } from "@/lib/catalogue";
import { PaintCard, ProjectInvitation } from "./CatalogueShell";

type Filters = { collection: string; category: string; use: string; q: string; sort: string };
const defaults: Filters = { collection: "all", category: "all", use: "all", q: "", sort: "featured" };
const uses = ["Interior", "Exterior", "Surface preparation", "Wood & metal", "Matt finishes"];
function readFilters(): Filters {
  const query = new URLSearchParams(window.location.search);
  const collection = query.get("collection") || "all";
  const category = query.get("category") || "all";
  const use = query.get("use") || "all";
  const sort = query.get("sort") || "featured";
  return { collection: collections.some((c) => c.id === collection) ? collection : "all", category: catalogue.some((p) => p.category === category) ? category : "all", use: uses.includes(use) ? use : "all", q: (query.get("q") || "").slice(0, 150), sort: ["featured", "az", "za"].includes(sort) ? sort : "featured" };
}

export default function CatalogueView() {
  const [filters, setFilters] = useState<Filters>(defaults);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [expanded, setExpanded] = useState<string[]>(["premium", "essentials"]);
  const drawer = useRef<HTMLElement>(null);
  const filterTrigger = useRef<HTMLButtonElement>(null);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const sync = () => setFilters(readFilters()); sync();
    window.addEventListener("popstate", sync);
    return () => { window.removeEventListener("popstate", sync); if (searchTimer.current) clearTimeout(searchTimer.current); };
  }, []);
  useEffect(() => {
    if (!mobileFilters) return;
    const overflow = document.body.style.overflow; document.body.style.overflow = "hidden";
    const items = () => Array.from(drawer.current?.querySelectorAll<HTMLElement>("button, input, select, a[href]") || []).filter((el) => el.getClientRects().length > 0);
    items()[0]?.focus({ preventScroll: true });
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileFilters(false);
      if (e.key === "Tab") {
        const all = items(); const first = all[0]; const last = all[all.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", key);
    return () => { document.body.style.overflow = overflow; document.removeEventListener("keydown", key); filterTrigger.current?.focus({ preventScroll: true }); };
  }, [mobileFilters]);

  function update(partial: Partial<Filters>, typing = false) {
    const next = { ...filters, ...partial }; setFilters(next);
    const save = () => {
      const query = new URLSearchParams();
      for (const [key, value] of Object.entries(next)) if (value !== defaults[key as keyof Filters] && value) query.set(key, value);
      const url = `${window.location.pathname}${query.size ? `?${query}` : ""}${window.location.hash}`;
      if (typing) window.history.replaceState(null, "", url); else window.history.pushState(null, "", url);
    };
    if (searchTimer.current) clearTimeout(searchTimer.current);
    if (typing) searchTimer.current = setTimeout(save, 250); else save();
  }
  const activeCollection = collections.find((c) => c.id === filters.collection);
  const found = catalogue.filter((p) =>
    (filters.collection === "all" || p.collection === filters.collection) &&
    (filters.category === "all" || p.category === filters.category) &&
    (filters.use === "all" || p.use === filters.use) &&
    `${p.name} ${p.use} ${p.finish} ${p.categoryLabel} ${p.description} ${collections.find((c) => c.id === p.collection)?.name}`.toLowerCase().includes(filters.q.trim().toLowerCase())
  ).sort((a, b) => filters.sort === "az" ? a.name.localeCompare(b.name) : filters.sort === "za" ? b.name.localeCompare(a.name) : 0);
  const activeCategory = catalogue.find((p) => p.category === filters.category)?.categoryLabel;
  const hasFilters = filters.collection !== "all" || filters.category !== "all" || filters.use !== "all" || !!filters.q;

  function categories(collection: Collection) {
    return Array.from(new Map(catalogue.filter((p) => p.collection === collection).map((p) => [p.category, p.categoryLabel])).entries());
  }

  return <main id="main" className="paint-main">
    <div className="pc-container"><nav className="pc-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">Our paints</span></nav></div>
    <section className="pc-catalogue-hero pc-container" aria-labelledby="catalogue-title"><div className="pc-catalogue-intro"><p className="pc-kicker">THE EKOTINT PAINT COLLECTION</p><h1 id="catalogue-title">Beautiful colour.<br /><em>A brilliant finish.</em></h1><p>For the walls that hold your stories.<br />And every little detail in between.</p><a className="pc-text-link" href="#collection">Find your paint <Icon name="arrow" size={21} /></a><div className="pc-hero-footnote"><span /><p>Inside. Outside. Entirely yours.</p></div></div><div className="pc-catalogue-story"><img src="/images/premium-room-plum.webp" width="1024" height="1536" alt="A muted plum reading room with a cream chair and warm sunlight" fetchPriority="high" /><div className="pc-story-caption"><span className="pc-caption-dot" /><span>A quieter kind of bold.<small>Interior inspiration</small></span></div></div><div className="pc-hero-pack"><span className="pc-kicker">PREMIUM COLLECTION</span><ProductArtwork product={catalogue[0]} /><div><strong>A little depth.<br />A whole new feeling.</strong><span>Water Matt <Icon name="arrow" size={18} /></span></div><Link href="/products/water-matt/" aria-label="Discover Water Matt" /></div></section>
    <div className="pc-range-strip"><div className="pc-container"><span><Icon name="home" size={22} />Made for your space</span><span><Icon name="layers" size={22} />A finish for every surface</span><Link href="/#paints"><Icon name="spark" size={22} />Choose a paint to preview colour <Icon name="arrow" size={18} /></Link></div></div>
    <section className="pc-container pc-collection-section" id="collection" aria-labelledby="collection-title"><div className="pc-collection-heading"><div><p className="pc-kicker">FIND YOUR FINISH</p><h2 id="collection-title">The right paint.<br /><span>For your kind of project.</span></h2></div><p>Explore the range by collection or surface.<br />Start with what you want to transform.</p></div>
      <div className="pc-range-tabs" aria-label="Paint collections"><button className={filters.collection === "all" && filters.category === "all" ? "active" : ""} aria-pressed={filters.collection === "all" && filters.category === "all"} onClick={() => update({ collection: "all", category: "all" })}>All paints <span>10</span></button>{collections.map((c) => <button key={c.id} className={filters.collection === c.id ? "active" : ""} aria-pressed={filters.collection === c.id} onClick={() => update({ collection: c.id, category: "all" })}>{c.name}<span>{catalogue.filter((p) => p.collection === c.id).length}</span></button>)}</div>
      <div className="pc-catalogue-layout">
        {mobileFilters && <div className="pc-filter-scrim" onClick={() => setMobileFilters(false)} />}
        <aside className={`pc-filter-panel ${mobileFilters ? "is-open" : ""}`} ref={drawer} {...(mobileFilters ? { role: "dialog", "aria-modal": true, "aria-label": "Filter paints" } : {})}>
          <div className="pc-filter-top"><h3>Explore the range</h3><button className="pc-icon pc-filter-close" aria-label="Close filters" onClick={() => setMobileFilters(false)}><Icon name="close" /></button></div>
          <div className="pc-filter-scroll">
          <button className={`pc-filter-all ${filters.collection === "all" && filters.category === "all" ? "active" : ""}`} onClick={() => update({ collection: "all", category: "all" })}>All collections <span>10</span></button>
          <div className="pc-category-tree">{collections.map((c) => <div key={c.id}><button className="pc-tree-parent" aria-expanded={expanded.includes(c.id)} aria-controls={`tree-${c.id}`} onClick={() => setExpanded(expanded.includes(c.id) ? expanded.filter((id) => id !== c.id) : [...expanded, c.id])}><span>{c.name}</span><Icon name={expanded.includes(c.id) ? "minus" : "plus"} size={16} /></button>{expanded.includes(c.id) && <div id={`tree-${c.id}`} className="pc-tree-children"><button className={filters.collection === c.id && filters.category === "all" ? "active" : ""} aria-pressed={filters.collection === c.id && filters.category === "all"} onClick={() => update({ collection: c.id, category: "all" })}>All {c.name}<span>5</span></button>{categories(c.id).map(([id, name]) => <button key={id} className={filters.collection === c.id && filters.category === id ? "active" : ""} aria-pressed={filters.collection === c.id && filters.category === id} onClick={() => update({ collection: c.id, category: id, use: "all" })}>{name}<span>{catalogue.filter((p) => p.collection === c.id && p.category === id).length}</span></button>)}</div>}</div>)}</div>
          <fieldset className="pc-surface-filters"><legend>Where are you painting?</legend>{uses.map((use) => <label key={use}><input type="checkbox" checked={filters.use === use} onChange={() => update({ use: filters.use === use ? "all" : use, category: "all" })} /><span>{use}</span><small>{catalogue.filter((p) => p.use === use && (filters.collection === "all" || p.collection === filters.collection)).length}</small></label>)}</fieldset>
          <div className="pc-help-note"><Icon name="spark" size={23} /><h4>A little help choosing?</h4><p>Start with the surface, then find the finish that feels right.</p><Link href="/#advice">Paint advice <Icon name="arrow" size={17} /></Link></div>
          </div>
          <button className="pc-button pc-filter-apply" onClick={() => setMobileFilters(false)}>Show {found.length} paints <Icon name="arrow" size={18} /></button>
        </aside>
        <div className="pc-results">
          <div className="pc-results-toolbar"><label className="pc-catalogue-search"><Icon name="search" size={20} /><input type="search" aria-label="Search the paint collection" placeholder="Search by paint, finish or surface" value={filters.q} onChange={(e) => update({ q: e.target.value }, true)} />{filters.q && <button aria-label="Clear search" onClick={() => update({ q: "" })}><Icon name="close" size={17} /></button>}</label><button ref={filterTrigger} className="pc-filter-trigger" aria-expanded={mobileFilters} onClick={() => setMobileFilters(true)}><Icon name="filter" size={20} />Filters</button><label className="pc-sort"><span>Sort by</span><select aria-label="Sort paints" value={filters.sort} onChange={(e) => update({ sort: e.target.value })}><option value="featured">Featured</option><option value="az">Name: A–Z</option><option value="za">Name: Z–A</option></select><Icon name="chevron" size={15} /></label></div>
          <div className="pc-results-meta"><p role="status" aria-live="polite"><strong>{found.length}</strong> {found.length === 1 ? "paint" : "paints"}{activeCollection ? ` in ${activeCollection.name}` : " to make your own"}</p>{hasFilters && <button onClick={() => update(defaults)}>Clear filters <Icon name="close" size={14} /></button>}</div>
          {hasFilters && <div className="pc-filter-chips">{activeCollection && <button onClick={() => update({ collection: "all", category: "all" })}>{activeCollection.name}<Icon name="close" size={13} /></button>}{activeCategory && <button onClick={() => update({ category: "all" })}>{activeCategory}<Icon name="close" size={13} /></button>}{filters.use !== "all" && <button onClick={() => update({ use: "all" })}>{filters.use}<Icon name="close" size={13} /></button>}{filters.q && <button onClick={() => update({ q: "" })}>“{filters.q}”<Icon name="close" size={13} /></button>}</div>}
          {found.length > 0 ? <div className="pc-product-grid">{found.map((product) => <PaintCard key={product.id} product={product} />)}</div> : <div className="pc-no-results"><Icon name="search" size={39} /><h3>A fresh start?</h3><p>No paints match these choices. Try another collection or clear a filter.</p><button className="pc-button" onClick={() => update(defaults)}>Explore all paints <Icon name="arrow" size={18} /></button></div>}
          {found.length > 0 && <div className="pc-endnote"><span /><p>You’ve explored {found.length === catalogue.length ? "the full collection" : `these ${found.length} ${found.length === 1 ? "paint" : "paints"}`}.<br /><Link href="/#paints">Choose a paint to try colour. <Icon name="arrow" size={16} /></Link></p><span /></div>}
        </div>
      </div>
    </section>
    <ProjectInvitation />
  </main>;
}
