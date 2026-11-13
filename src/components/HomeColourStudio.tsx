"use client";

import { useEffect, useId, useState } from "react";
import Icon from "@/components/Icon";
import HomeRoomPhotoUpload from "@/components/HomeRoomPhotoUpload";
import { homeVanillaColourIdea } from "@/lib/homepage-content";

export type HomeColourIdea = { name: string; hex: string };
export const homeColourIdeas: HomeColourIdea[] = [
  { name: "Dusty Lilac", hex: "#A493AE" },
  { name: "Ekotint Blue", hex: "#2D56A4" },
  { name: "Ekotint Lavender", hex: "#816FB0" },
  { name: "Ekotint Magenta", hex: "#B14E9B" },
  { name: "Soft Linen", hex: "#DDD5C5" },
  { name: "Chalk White", hex: "#EEEAE1" },
  { name: "Still Sage", hex: "#A6AF98" },
  { name: "Terracotta", hex: "#BA7C63" },
  homeVanillaColourIdea,
];

type HomeColourStudioProps = { colour: HomeColourIdea; productName?: string; idPrefix?: string; variant?: "full" | "backdrop"; layout?: "standard" | "product" };

function wallPaintTransferTables(hex: string) {
  const referenceLuma = 0.30;
  return [1, 3, 5].map((start) => {
    const channel = parseInt(hex.slice(start, start + 2), 16) / 255;
    const diffuse = channel * 0.97 + 0.008;
    return Array.from({ length: 129 }, (_, index) => {
      const exposure = 0.18 + 0.82 * (index / 128) / referenceLuma;
      const lit = exposure <= 1
        ? diffuse * exposure
        : 1 - (1 - diffuse) * Math.exp(-diffuse * (exposure - 1) / (1 - diffuse));
      const reflection = exposure > 1 ? 0.008 * (1 - 1 / exposure) : 0;
      return Math.min(1, Math.max(0, lit + reflection)).toFixed(5);
    }).join(" ");
  });
}

// A controlled visual only; the product page owns its single set of colour inputs.
export default function HomeColourStudio({ colour, productName, idPrefix = "paint-room", variant = "full", layout = "standard" }: HomeColourStudioProps) {
  const uniqueId = useId().replace(/:/g, "");
  const prefix = `${idPrefix}-${uniqueId}`;
  const [before, setBefore] = useState(false);
  const [paintRed, paintGreen, paintBlue] = wallPaintTransferTables(colour.hex);
  useEffect(() => { setBefore(false); }, [colour.hex]);

  return <section className={`home-colour-studio${variant === "backdrop" ? " hcs-backdrop" : ""}${variant === "full" && layout === "product" ? " hcs-product" : ""}`} aria-label={`Prepared room colour inspiration${productName ? ` while considering ${productName}` : ""}`}>
    {variant === "full" && layout === "standard" && <div className="hcs-toolbar">
      <span><Icon name="home" size={18} /><span><small>COLOUR PREVIEW</small><strong>Sample living room</strong></span></span>
    </div>}
    <div className="hcs-scene">
      <svg viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${before ? "Original olive wall" : `${colour.name} wall colour`} in the prepared interior living room`}>
        <defs>
          <clipPath id={`${prefix}-wall`} clipPathUnits="userSpaceOnUse"><path d="M113 0H1018V514C970 515 908 514 855 517L816 518 808 507Q806 504 801 506L762 512 718 504Q711 502 713 508L717 518 675 519 669 513Q660 510 647 513C615 513 584 512 568 516Q561 518 565 530L571 549C535 543 502 543 477 550C440 557 419 581 416 620L415 647 216 650 215 602 166 602 166 578 113 579Z" /></clipPath>
          <filter id={`${prefix}-paint`} filterUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1024" colorInterpolationFilters="sRGB">
            <feColorMatrix in="SourceGraphic" type="matrix" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" result={`${prefix}-lighting`} />
            <feComponentTransfer in={`${prefix}-lighting`}><feFuncR type="table" tableValues={paintRed} /><feFuncG type="table" tableValues={paintGreen} /><feFuncB type="table" tableValues={paintBlue} /></feComponentTransfer>
          </filter>
        </defs>
        <image href="/images/hero-room.webp" width="1536" height="1024" />
        <image data-painted-wall="true" data-paint-colour={colour.hex} href="/images/hero-room.webp" width="1536" height="1024" clipPath={`url(#${prefix}-wall)`} filter={`url(#${prefix}-paint)`} opacity={before ? 0 : 1} />
      </svg>
      {variant === "full" && layout === "product" && <span className="hcs-sample-tag">Sample living room</span>}
      {variant === "full" && <button className="hcs-before" type="button" aria-pressed={before} onClick={() => setBefore((value) => !value)}>{before ? "See your colour" : "View before"}<Icon name="layers" size={17} /></button>}
      {variant === "full" && <span className="hcs-scene-label"><i style={{ background: before ? "#777D5D" : colour.hex }} />{before ? "Original room" : colour.name}</span>}
    </div>
    {variant === "full" && layout === "standard" && <p className="hcs-note">Sample room with simulated lighting. Confirm your physical shade and product suitability with Ekotint.</p>}
    {variant === "full" && layout === "standard" && <HomeRoomPhotoUpload idPrefix={prefix} />}
  </section>;
}
