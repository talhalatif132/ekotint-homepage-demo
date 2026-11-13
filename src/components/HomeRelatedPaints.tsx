"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import HomeProductArtwork from "@/components/HomeProductArtwork";
import Icon from "@/components/Icon";
import { homePaints, type HomePaint } from "@/lib/homepage-content";
import styles from "./HomeRelatedPaints.module.css";

type Props = { product: HomePaint; colour?: { name: string; hex: string } };

export default function HomeRelatedPaints({ product, colour }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [navigation, setNavigation] = useState({ overflow: false, previous: false, next: false });
  const paints = homePaints.filter((paint) => paint.id !== product.id).sort((a, b) =>
    Number(b.category === product.category) - Number(a.category === product.category)
    || Number(b.series === product.series) - Number(a.series === product.series));
  const rowId = `${product.id}-related-paints`;
  const headingId = `${product.id}-related-paints-heading`;

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
  }, [product.id]);

  function scrollTo(left: number) {
    const row = rowRef.current;
    if (!row) return;
    row.scrollTo({ left: Math.max(0, Math.min(left, row.scrollWidth - row.clientWidth)), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  function move(direction: -1 | 1, wholePage = true) {
    const row = rowRef.current;
    if (!row) return;
    const css = window.getComputedStyle(row);
    const gap = Number.parseFloat(css.columnGap) || 0;
    const step = (row.firstElementChild?.getBoundingClientRect().width || row.clientWidth) + gap;
    const available = row.clientWidth - (Number.parseFloat(css.paddingLeft) || 0) - (Number.parseFloat(css.paddingRight) || 0);
    const count = wholePage ? Math.max(1, Math.floor((available + gap + 1) / step)) : 1;
    const current = direction < 0 ? Math.ceil(row.scrollLeft / step - .01) : Math.floor(row.scrollLeft / step + .01);
    scrollTo((current + direction * count) * step);
  }

  function onRowKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1, false);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault(); scrollTo(event.key === "Home" ? 0 : event.currentTarget.scrollWidth);
    }
  }

  return <section className={styles.section} aria-labelledby={headingId}>
    <div className={styles.heading}>
      <div><p className={styles.kicker}>KEEP EXPLORING</p><h2 id={headingId}>More from Ekotint.</h2></div>
      <div className={styles.actions}>
        <Link className={styles.back} href="/#paints">Back to paints <Icon name="arrow" size={17} /></Link>
        {navigation.overflow && <div className={styles.controls} role="group" aria-label="Browse more Ekotint paints">
          <button type="button" aria-label="Previous paints" aria-controls={rowId} disabled={!navigation.previous} onClick={() => move(-1)}><Icon name="back" size={21} /></button>
          <button type="button" aria-label="Next paints" aria-controls={rowId} disabled={!navigation.next} onClick={() => move(1)}><Icon name="arrow" size={21} /></button>
        </div>}
      </div>
    </div>
    <div className={styles.row} id={rowId} ref={rowRef} role="list" aria-label="More Ekotint paints" tabIndex={navigation.overflow ? 0 : undefined} onKeyDown={onRowKey}>
      {paints.map((paint) => <div className={styles.item} key={paint.id} role="listitem">
        <Link className={styles.card} href={`/products/${paint.id}/${colour ? `?${new URLSearchParams({ colour: colour.hex.replace(/^#/, ""), colourName: colour.name })}` : ""}`} aria-label={`View ${paint.name}, ${paint.series}, details${colour ? " and your colour preview" : ""}`}>
          <span className={styles.artwork}><HomeProductArtwork product={paint} /></span>
          <span className={styles.copy}><small>{paint.series}</small><strong>{paint.name}</strong><span>{paint.finish}</span></span>
          <Icon className={styles.cardArrow} name="arrow" size={20} />
        </Link>
      </div>)}
    </div>
  </section>;
}
