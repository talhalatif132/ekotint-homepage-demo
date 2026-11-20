import type { HomePackSize } from "@/lib/home-pack-sizes";
import { homeExamplePrices } from "@/lib/homepage-content";

// Use the quote calculator's existing illustrative rate across the preview.
// The rates and derived amounts are not manufacturer prices or pack offers.
export function homeDemoLitreRate(productId: string): number | undefined {
  const amount = homeExamplePrices[productId];
  return typeof amount === "number" ? amount : undefined;
}

export function homeEstimatedPackPrice(productId: string, packSize: HomePackSize): number | undefined {
  const rate = homeDemoLitreRate(productId);
  return rate === undefined ? undefined : rate * packSize;
}
