"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Icon from "@/components/Icon";
import styles from "./HomeQuotePage.module.css";

type QuotePickerOption<Value extends string> = {
  value: Value;
  label: string;
  detail?: string;
  artwork?: ReactNode;
};

export type QuotePickerGroup<Value extends string> = {
  label?: string;
  options: readonly QuotePickerOption<Value>[];
};

export default function HomeQuotePicker<Value extends string>({ id, value, groups, placeholder, onChange }: {
  id: string;
  value: Value;
  groups: readonly QuotePickerGroup<Value>[];
  placeholder?: string;
  onChange: (value: Value) => void;
}) {
  const [active, setActive] = useState<Value | null>(null);
  const [placement, setPlacement] = useState({ above: false, height: 330 });
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const options = groups.flatMap((group) => group.options);
  const selected = options.find((option) => option.value === value);
  const open = active !== null;
  const menuId = id + "-options";
  const activeId = open ? menuId + "-" + active : undefined;

  function openPicker(preferred = selected?.value ?? options[0]?.value) {
    if (preferred === undefined) return;
    const bounds = trigger.current?.getBoundingClientRect();
    if (bounds) {
      const below = window.innerHeight - bounds.bottom - 16;
      const above = bounds.top - 120;
      const threshold = Math.min(220, options.length * 46 + 14);
      const opensAbove = below < threshold && above > below;
      setPlacement({ above: opensAbove, height: Math.max(100, Math.min(330, opensAbove ? above : below)) });
    }
    trigger.current?.focus({ preventScroll: true });
    setActive(preferred);
  }

  function closePicker() {
    setActive(null);
    trigger.current?.focus({ preventScroll: true });
  }

  function choose(next: Value) {
    closePicker();
    if (next !== value) onChange(next);
  }

  useEffect(() => {
    if (!open) return;
    function dismissOnOutsidePress(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setActive(null);
    }
    document.addEventListener("pointerdown", dismissOnOutsidePress);
    return () => document.removeEventListener("pointerdown", dismissOnOutsidePress);
  }, [open]);

  useEffect(() => {
    const panel = menu.current;
    const option = activeId && document.getElementById(activeId);
    if (!panel || !option) return;
    const bounds = panel.getBoundingClientRect();
    const itemBounds = option.getBoundingClientRect();
    if (itemBounds.top < bounds.top) panel.scrollTop += itemBounds.top - bounds.top;
    if (itemBounds.bottom > bounds.bottom) panel.scrollTop += itemBounds.bottom - bounds.bottom;
  }, [activeId]);

  function handleKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (active !== null) {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closePicker();
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        choose(active);
        return;
      }
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = options.findIndex((option) => option.value === active);
    const last = options.length - 1;
    const index = event.key === "Home" ? 0 : event.key === "End" ? last
      : event.key === "ArrowDown" ? Math.min(current + 1, last) : Math.max(current - 1, 0);
    if (open) {
      const next = options[index];
      if (next) setActive(next.value);
    } else {
      openPicker(event.key === "Home" || event.key === "End" ? options[index]?.value : undefined);
    }
  }

  function renderOption(option: QuotePickerOption<Value>) {
    const isSelected = value === option.value;
    return <div key={option.value} id={menuId + "-" + option.value} role="option" aria-selected={isSelected}
      className={styles.pickerOption} data-artwork={!!option.artwork} data-active={active === option.value}
      onMouseDown={(event) => event.preventDefault()} onClick={() => choose(option.value)}>
      {option.artwork && <span className={styles.pickerPack} aria-hidden="true">{option.artwork}</span>}
      <span>{option.label}{option.detail && <small>{option.detail}</small>}</span>
      {isSelected && <Icon name="check" size={17} />}
    </div>;
  }

  return <div className={styles.paintPicker} ref={root} onKeyDown={handleKeys} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setActive(null);
  }}>
    <button type="button" role="combobox" className={styles.pickerTrigger} id={id} ref={trigger}
      aria-labelledby={id + "-label " + id + "-value"} aria-expanded={open} aria-controls={menuId}
      aria-activedescendant={activeId}
      onClick={() => open ? setActive(null) : openPicker()}>
      <span id={id + "-value"}>{selected?.label ?? placeholder}{selected?.detail && <small>{selected.detail}</small>}</span>
      <Icon name="chevron" size={18} />
    </button>
    <div id={menuId} className={styles.pickerMenu} ref={menu} hidden={!open} role="listbox"
      aria-labelledby={id + "-label"} tabIndex={-1} data-above={placement.above} style={{ maxHeight: placement.height }}>
      {open && groups.map((group) => group.label ? <div className={styles.pickerGroup} key={group.label} role="group" aria-label={group.label}>
        <p aria-hidden="true">{group.label}</p>
        {group.options.map(renderOption)}
      </div> : group.options.map(renderOption))}
    </div>
  </div>;
}
