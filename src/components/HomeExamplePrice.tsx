import type { HomePackSize } from "@/lib/home-pack-sizes";
import { homeDemoLitreRate, homeEstimatedPackPrice } from "@/lib/home-paint-pricing";

export default function HomeExamplePrice({ productId, showPackNote = true, packSize }: {
  productId: string;
  showPackNote?: boolean;
  packSize?: HomePackSize;
}) {
  const amount = packSize === undefined ? homeDemoLitreRate(productId) : homeEstimatedPackPrice(productId, packSize);
  if (amount === undefined) return null;
  return (
    <span className="home-example-price" aria-live={packSize === undefined ? undefined : "polite"} aria-atomic={packSize === undefined ? undefined : true}>
      <span className="home-price-line"><strong>PKR {amount.toLocaleString("en-PK")}</strong></span>
      {packSize !== undefined ? <small>Estimate · {packSize} L pack</small> : showPackNote && <small>Pack size to be confirmed</small>}
    </span>
  );
}
