import type { HomePaint } from "@/lib/homepage-content";

// Full-resolution client artwork, with its original transparency and lettering.
// Native image sizing avoids the old SVG frame's extra inset around each pack.
export default function HomeProductArtwork({ product, compact = false }: { product: Pick<HomePaint, "image" | "imageWidth" | "imageHeight" | "name">; compact?: boolean }) {
  return <img
    className={`product-art client-product-art${compact ? " compact-product-art" : ""}`}
    src={product.image}
    alt={`${product.name} — original Ekotint packaging`}
    width={product.imageWidth}
    height={product.imageHeight}
    loading="lazy"
    decoding="async"
    style={{ objectFit: "contain" }}
  />;
}
