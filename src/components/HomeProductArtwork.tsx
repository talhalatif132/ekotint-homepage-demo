import type { HomePaint } from "@/lib/homepage-content";

// The JPEG artwork and its original PDF soft mask are exported together.
// No generated lettering, recolouring or artificial sharpening is applied.
export default function HomeProductArtwork({ product, compact = false }: { product: Pick<HomePaint, "image" | "name">; compact?: boolean }) {
  return <svg className="product-art client-product-art" viewBox={compact ? "195 240 530 640" : "150 195 620 760"} role="img" aria-label={`${product.name} — original Ekotint packaging`}>
    <image href={product.image} x="200" y="245" width="520" height="630" preserveAspectRatio="xMidYMid meet" />
  </svg>;
}
