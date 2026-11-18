import { homeTechnicalGuide } from "@/lib/homepage-content";

// Verified against the supplied nine-page TDS For Web.pdf, 13 November 2026.
// Do not assign Weather Shield to Clima Shield/Weather Paint, or assign
// unqualified sheets to the distinct Premium/Assez duplicate products.
const sheets: Record<string, { title: string; page: number; coverageSqMPerLitrePerCoat?: readonly [number, number] }> = {
  "water-matt": { title: "EkoMatt (Water Matt)", page: 4, coverageSqMPerLitrePerCoat: [12, 16] },
  "eko-gleam": { title: "EkoGleam (Gloss Enamel)", page: 3, coverageSqMPerLitrePerCoat: [12, 16] },
  "primer-emulsion": { title: "Primer Emulsion", page: 6, coverageSqMPerLitrePerCoat: [12, 16] },
  "epoxy": { title: "EkoRoest (Epoxy)", page: 8, coverageSqMPerLitrePerCoat: [12, 16] },
};

export function homeTechnicalSheet(productId: string) {
  const sheet = sheets[productId];
  return sheet ? { ...sheet, href: `${homeTechnicalGuide}#page=${sheet.page}` } : undefined;
}
