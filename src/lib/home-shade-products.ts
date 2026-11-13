import { homePaints, type HomePaint } from "@/lib/homepage-content";

export type HomePaintSurface = "Interior" | "Exterior";

// Add only client-confirmed relationships. A screen HEX or surface category
// alone is not evidence that a product is available in a particular shade.
export type HomeShadeProductAvailability = {
  hex: string;
  surface: HomePaintSurface;
  productIds: readonly string[];
  sourceReference: string;
};

export const homeShadeProductAvailability: readonly HomeShadeProductAvailability[] = [];

export function homePaintsForShade(
  hex: string,
  surface: HomePaintSurface,
  availability: readonly HomeShadeProductAvailability[] = homeShadeProductAvailability,
): { confirmed: boolean; products: HomePaint[] } {
  const colour = hex.trim().toUpperCase();
  const match = /^#[0-9A-F]{6}$/.test(colour)
    ? availability.find((entry) => entry.hex.toUpperCase() === colour && entry.surface === surface && entry.sourceReference.trim())
    : undefined;
  const relevantPaints = homePaints.filter((paint) => paint.category === surface);
  return {
    confirmed: !!match,
    // Confirmed surface relationships override the provisional primary category:
    // some finishes have more than one valid application.
    products: match ? homePaints.filter((paint) => match.productIds.includes(paint.id)) : relevantPaints,
  };
}
