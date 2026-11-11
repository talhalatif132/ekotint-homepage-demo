import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalogue, collectionName, getProduct } from "@/lib/catalogue";
import ProductView from "@/components/catalogue/ProductView";

export const dynamicParams = false;
export function generateStaticParams() { return catalogue.map((product) => ({ slug: product.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = getProduct(slug);
  if (!product) return { title: "Paint not found | Ekotint" };
  return { title: `${product.name} — ${collectionName(product.collection)} | Ekotint Paints`, description: product.description };
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = getProduct(slug);
  if (!product) notFound();
  return <ProductView key={product.id} product={product} />;
}
