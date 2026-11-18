"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import HomeProductArtwork from "@/components/HomeProductArtwork";
import Icon from "@/components/Icon";
import { homePaintFilters, homePaints } from "@/lib/homepage-content";
import styles from "./HomeQuotePage.module.css";

const groups = homePaintFilters.filter((category) => category !== "Featured").map((category) => ({
  category,
  paints: homePaints.filter((paint) => paint.category === category),
}));

export default function HomeQuotePaintPicker({ id, value, onChange }: {
  id: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [above, setAbove] = useState(false);
  const [menuHeight, setMenuHeight] = useState(320);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const selected = homePaints.find((paint) => paint.id === value);

  function close(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) trigger.current?.focus({ preventScroll: true });
  }

  function focusOption(option?: HTMLButtonElement) {
    const panel = menu.current;
    if (!option || !panel) return;
    option.focus({ preventScroll: true });
    const itemBounds = option.getBoundingClientRect();
    const bounds = panel.getBoundingClientRect();
    if (itemBounds.top < bounds.top) panel.scrollTop += itemBounds.top - bounds.top;
    if (itemBounds.bottom > bounds.bottom) panel.scrollTop += itemBounds.bottom - bounds.bottom;
  }

  function openPicker() {
    const bounds = trigger.current?.getBoundingClientRect();
    if (bounds) {
      const roomBelow = window.innerHeight - bounds.bottom - 16;
      const roomAbove = bounds.top - 120;
      const openAbove = roomBelow < 220 && roomAbove > roomBelow;
      setAbove(openAbove);
      setMenuHeight(Math.max(108, Math.min(330, openAbove ? roomAbove : roomBelow)));
    }
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    const initial = menu.current?.querySelector<HTMLButtonElement>('button[aria-pressed="true"]')
      ?? menu.current?.querySelector<HTMLButtonElement>("button");
    focusOption(initial ?? undefined);
    function dismissOnOutsidePress(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", dismissOnOutsidePress);
    return () => document.removeEventListener("pointerdown", dismissOnOutsidePress);
  }, [open]);

  function handleKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openPicker();
      }
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close(true);
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const options = Array.from(menu.current?.querySelectorAll<HTMLButtonElement>("button") ?? []);
    const current = options.findIndex((option) => option === document.activeElement);
    const index = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1
      : event.key === "ArrowDown" ? Math.min(current + 1, options.length - 1) : Math.max(current - 1, 0);
    event.preventDefault();
    focusOption(options[index]);
  }

  return <div className={styles.paintPicker} ref={root} onKeyDown={handleKeys} onBlur={(event) => {
    if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) close();
  }}>
    <button type="button" className={styles.pickerTrigger} id={id} ref={trigger}
      aria-labelledby={id + "-label " + id + "-value"} aria-expanded={open} aria-controls={id + "-options"}
      onClick={() => open ? close() : openPicker()}>
      <span id={id + "-value"}>{selected ? <>{selected.name}<small>{selected.series}</small></> : "Choose a paint"}</span>
      <Icon name="chevron" size={18} />
    </button>
    <div id={id + "-options"} className={styles.pickerMenu} ref={menu} hidden={!open}
      role="group" aria-labelledby={id + "-label"} data-above={above} style={{ maxHeight: menuHeight }}>
      {open && groups.map(({ category, paints }) => <div className={styles.pickerGroup} key={category}>
        <p>{category}</p>
        {paints.map((paint) => <button type="button" data-paint-id={paint.id} className={styles.pickerOption} aria-pressed={paint.id === value}
          key={paint.id} onClick={() => { onChange(paint.id); close(true); }}>
          <span className={styles.pickerPack} aria-hidden="true"><HomeProductArtwork product={paint} compact /></span>
          <span>{paint.name}<small>{paint.series}</small></span>
          {paint.id === value && <Icon name="check" size={17} />}
        </button>)}
      </div>)}
    </div>
  </div>;
}
