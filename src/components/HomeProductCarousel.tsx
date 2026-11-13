"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import ProductArtwork from "@/components/HomeProductArtwork";
import HomeExamplePrice from "@/components/HomeExamplePrice";
import type { HomePaint } from "@/lib/homepage-content";

export default function HomeProductCarousel({ products, category, paintHref }: {
  products: HomePaint[];
  category: string;
  paintHref: (paint: HomePaint) => string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [navigation, setNavigation] = useState({ overflow: false, previous: false, next: false });

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollLeft = 0;
    const measure = () => {
      const end = Math.max(0, row.scrollWidth - row.clientWidth);
      const next = { overflow: end > 2, previous: row.scrollLeft > 2, next: row.scrollLeft < end - 2 };
      setNavigation((current) => current.overflow === next.overflow && current.previous === next.previous && current.next === next.next ? current : next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    if (row.firstElementChild) observer.observe(row.firstElementChild);
    row.addEventListener("scroll", measure, { passive: true });
    return () => { observer.disconnect(); row.removeEventListener("scroll", measure); };
  }, [category, products.length]);

  function move(direction: -1 | 1) {
    const row = rowRef.current;
    if (!row) return;
    const card = row.firstElementChild;
    const gap = Number.parseFloat(window.getComputedStyle(row).columnGap) || 0;
    const step = (card?.getBoundingClientRect().width || row.clientWidth) + gap;
    const page = Math.max(1, Math.floor((row.clientWidth + gap) / step));
    row.scrollBy({ left: direction * page * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  return <>
    <div className={`product-carousel${navigation.overflow ? " has-overflow" : ""}`} style={{ "--rail-slots": Math.max(1, Math.min(products.length, 5)) } as React.CSSProperties}>
      <div className="product-grid" id="home-product-grid" ref={rowRef} tabIndex={navigation.overflow ? 0 : undefined} role="group" aria-label={`${category} paints`}>
        {products.map((paint) => <article className={`product-card product-${paint.id}`} key={paint.id}>
          <Link className="product-photo" href={paintHref(paint)} aria-label={`View ${paint.name} details and colour preview`}><ProductArtwork product={paint} /></Link>
          <div className="product-caption">
            <div className="product-description"><span className="product-series">{paint.series}</span><h3><Link href={paintHref(paint)}>{paint.name}</Link></h3></div>
            <div className="product-price-action"><HomeExamplePrice productId={paint.id} showPackNote={false} /></div>
          </div>
        </article>)}
      </div>
      {navigation.overflow && <div className="product-row-controls" role="group" aria-label={`Browse ${category.toLowerCase()} paints`}>
        <button type="button" className="product-row-previous" aria-label={`Previous ${category.toLowerCase()} paints`} aria-controls="home-product-grid" disabled={!navigation.previous} onClick={() => move(-1)}><Icon name="back" size={21} /></button>
        <button type="button" className="product-row-next" aria-label={`Next ${category.toLowerCase()} paints`} aria-controls="home-product-grid" disabled={!navigation.next} onClick={() => move(1)}><Icon name="arrow" size={21} /></button>
      </div>}
    </div>
    <p className="product-price-note">Contact Ekotint for current prices and pack sizes.</p>
  </>;
}
