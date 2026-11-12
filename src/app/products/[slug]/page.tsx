import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalogue, collectionName, getProduct } from "@/lib/catalogue";
import ProductView from "@/components/catalogue/ProductView";
import HomePaintProductView from "@/components/HomePaintProductView";
import { homePaints } from "@/lib/homepage-content";

export const dynamicParams = false;
export function generateStaticParams() {
  return Array.from(new Set([...homePaints, ...catalogue].map((product) => product.id))).map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const current = homePaints.find((paint) => paint.id === slug);
  if (current) return { title: `${current.name} — ${current.series} | Ekotint Paints`, description: current.description };
  const product = getProduct(slug);
  if (!product) return { title: "Paint not found | Ekotint" };
  return { title: `${product.name} — ${collectionName(product.collection)} | Ekotint Paints`, description: product.description };
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const current = homePaints.find((paint) => paint.id === slug);
  if (current) return <HomePaintProductView key={current.id} product={current} />;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductView key={product.id} product={product} />;
}
