"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import "@/app/colour-palette.css";

export type PaletteColour = { name: string; hex: string; family: string; note: string };
export type PaletteSurface = "Interior" | "Exterior";

type Props = {
  colours: PaletteColour[];
  surface: PaletteSurface;
  selectedHex?: string;
  family?: string;
  onSurfaceChange: (surface: PaletteSurface) => void;
  onChoose: (colour: PaletteColour) => void;
  onSaved: () => void;
  onClearFamily: () => void;
};

export default function HomeColourPalette({ colours, surface, selectedHex, family, onSurfaceChange, onChoose, onSaved, onClearFamily }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const colourKey = colours.map((colour) => colour.hex).join("|");

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollLeft = 0;
    const update = () => {
      const carousel = carouselRef.current;
      const disc = row.querySelector<HTMLElement>(".colour-circle-disc");
      const arrow = carousel?.querySelector<HTMLElement>(".colour-circle-arrow");
      if (carousel && disc && arrow) {
        const offset = disc.getBoundingClientRect().top - carousel.getBoundingClientRect().top + disc.getBoundingClientRect().height / 2 - arrow.getBoundingClientRect().height / 2;
        carousel.style.setProperty("--colour-arrow-top", `${Math.max(0, offset)}px`);
      }
      setCanPrevious(row.scrollLeft > 3);
      setCanNext(row.scrollLeft + row.clientWidth < row.scrollWidth - 3);
    };
    update();
    row.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(row);
    return () => { row.removeEventListener("scroll", update); observer.disconnect(); };
  }, [colourKey, surface]);

  function move(direction: number) {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * row.clientWidth * .8, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  return <section className="colour-circle-section" id="colours" aria-labelledby="colour-palette-heading">
    <div className="colour-circle-inner">
      <div className="colour-circle-heading">
        <h2 id="colour-palette-heading">Explore Ekotint colours</h2>
        <p>Choose a shade to explore paints for your space.</p>
        <button className="colour-circle-saved" type="button" onClick={onSaved}>Saved colours <Icon name="heart" size={18} /></button>
      </div>
      <div className="colour-surface-tabs" role="group" aria-label="Where are you painting?">
        {(["Interior", "Exterior"] as const).map((item) => <button type="button" key={item} aria-pressed={surface === item} aria-controls="colour-circle-row" onClick={() => onSurfaceChange(item)}>{item}</button>)}
      </div>
      {family && <div className="colour-family-context"><span>{family}</span><button type="button" onClick={onClearFamily} aria-label={`Show all colours instead of ${family}`}>All colours <Icon name="close" size={13} /></button></div>}
      <div className="colour-circle-carousel" ref={carouselRef} aria-roledescription="carousel" aria-label={`${surface} colour ideas`}>
        <button className="colour-circle-arrow" type="button" aria-label="Previous colour ideas" aria-controls="colour-circle-row" disabled={!canPrevious} onClick={() => move(-1)}><Icon name="back" size={21} /></button>
        <div className="colour-circle-row" id="colour-circle-row" ref={rowRef} role="list">
          {colours.map((colour) => <div className="colour-circle-item" role="listitem" key={colour.hex}>
            <button className={`colour-circle-choice${selectedHex === colour.hex ? " is-selected" : ""}`} type="button" aria-label={`Choose a ${surface.toLowerCase()} paint for ${colour.name}, ${colour.hex}`} aria-haspopup="dialog" onClick={() => onChoose(colour)}>
              <span className="colour-circle-disc" style={{ backgroundColor: colour.hex }} aria-hidden="true" />
              <strong>{colour.name}</strong>
              <span className="colour-circle-code">{colour.hex}</span>
              <span className="colour-circle-action">View paints <Icon name="arrow" size={14} /></span>
            </button>
          </div>)}
        </div>
        <button className="colour-circle-arrow" type="button" aria-label="Next colour ideas" aria-controls="colour-circle-row" disabled={!canNext} onClick={() => move(1)}><Icon name="arrow" size={21} /></button>
      </div>
      <p className="colour-circle-note">Colour ideas for your {surface.toLowerCase()}. Confirm the physical shade and paint suitability with Ekotint.</p>
    </div>
  </section>;
}
