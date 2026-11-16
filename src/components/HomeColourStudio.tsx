"use client";

import { useEffect, useId, useState } from "react";
import Icon from "@/components/Icon";
import HomeRoomPhotoUpload from "@/components/HomeRoomPhotoUpload";
import { homeVanillaColourIdea } from "@/lib/homepage-content";
import { homePreviewScene, type HomePreviewSceneKey } from "@/lib/home-preview-scenes";

export type HomeColourIdea = { name: string; hex: string };
// Screen approximations inspired by common roof-coating ranges, not approved Eko Shade colours.
export const homeRoofColourIdeas: HomeColourIdea[] = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Light Grey", hex: "#D3D5D4" },
  { name: "Light Tan", hex: "#DED3BD" },
  { name: "Tan", hex: "#C3AE8C" },
];
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

type HomeColourStudioProps = { colour: HomeColourIdea; productName?: string; idPrefix?: string; variant?: "full" | "backdrop"; layout?: "standard" | "product"; scene?: HomePreviewSceneKey };

function wallPaintTransferTables(hex: string, referenceLuma: number, balanced = false) {
  return [1, 3, 5].map((start) => {
    const channel = parseInt(hex.slice(start, start + 2), 16) / 255;
    const diffuse = channel * 0.97 + 0.008;
    return Array.from({ length: 129 }, (_, index) => {
      if (balanced) {
        // Outdoor photos have brighter base surfaces than the original room.
        // Keep their texture/shadows without adding white into the chosen hue.
        const exposure = Math.min(1, Math.max(.65, .5 + .5 * (index / 128) / (referenceLuma * 1.15)));
        return Math.min(1, diffuse * exposure).toFixed(5);
      }
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
export default function HomeColourStudio({ colour, productName, idPrefix = "paint-room", variant = "full", layout = "standard", scene = "interior" }: HomeColourStudioProps) {
  const uniqueId = useId().replace(/:/g, "");
  const prefix = `${idPrefix}-${uniqueId}`;
  const [before, setBefore] = useState(false);
  const preview = homePreviewScene(scene);
  const [paintRed, paintGreen, paintBlue] = wallPaintTransferTables(colour.hex, preview.referenceLuma, preview.lighting === "balanced");
  useEffect(() => { setBefore(false); }, [colour.hex, scene]);

  return <section className={`home-colour-studio${variant === "backdrop" ? " hcs-backdrop" : ""}${variant === "full" && layout === "product" ? " hcs-product" : ""}`} data-preview-scene={scene} aria-label={`${preview.label}${productName ? ` while considering ${productName}` : ""}`}>
    {variant === "full" && layout === "standard" && <div className="hcs-toolbar">
      <span><Icon name="home" size={18} /><span><small>COLOUR PREVIEW</small><strong>{preview.label}</strong></span></span>
    </div>}
    <div className="hcs-scene">
      <svg viewBox="0 0 1536 1024" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${preview.mask && !before ? `${colour.name} ${preview.surface} colour in a ` : ""}${preview.description}`}>
        <defs>
          <clipPath id={`${prefix}-wall`} clipPathUnits="userSpaceOnUse"><path d={preview.mask} clipRule="evenodd" /></clipPath>
          <filter id={`${prefix}-paint`} filterUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1024" colorInterpolationFilters="sRGB">
            <feColorMatrix in="SourceGraphic" type="matrix" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" result={`${prefix}-lighting`} />
            <feComponentTransfer in={`${prefix}-lighting`}><feFuncR type="table" tableValues={paintRed} /><feFuncG type="table" tableValues={paintGreen} /><feFuncB type="table" tableValues={paintBlue} /></feComponentTransfer>
          </filter>
        </defs>
        <image href={preview.image} width="1536" height="1024" />
        {preview.mask && <image data-painted-wall="true" data-paint-colour={colour.hex} href={preview.image} width="1536" height="1024" clipPath={`url(#${prefix}-wall)`} filter={`url(#${prefix}-paint)`} opacity={before ? 0 : 1} />}
      </svg>
      {variant === "full" && layout === "product" && <span className="hcs-sample-tag">{preview.label}</span>}
      {variant === "full" && preview.mask && <button className="hcs-before" type="button" aria-pressed={before} onClick={() => setBefore((value) => !value)}>{before ? "See your colour" : "View before"}<Icon name="layers" size={17} /></button>}
      {variant === "full" && <span className="hcs-scene-label"><i style={{ background: before || !preview.mask ? preview.originalHex : colour.hex }} />{before || !preview.mask ? preview.originalLabel : colour.name}</span>}
    </div>
    {variant === "full" && layout === "standard" && <p className="hcs-note">{preview.note}</p>}
    {variant === "full" && layout === "standard" && <HomeRoomPhotoUpload idPrefix={prefix} />}
  </section>;
}
