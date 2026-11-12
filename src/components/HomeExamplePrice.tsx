import { homeExamplePrices } from "@/lib/homepage-content";

export default function HomeExamplePrice({ productId }: { productId: string }) {
  const amount = homeExamplePrices[productId];
  if (amount === undefined) return null;
  return (
    <span className="home-example-price">
      <span className="home-price-line"><strong>PKR {amount.toLocaleString("en-PK")}</strong></span>
      <small>Pack size to be confirmed</small>
    </span>
  );
}
