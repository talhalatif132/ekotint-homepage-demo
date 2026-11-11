import type { Metadata } from "next";
import CatalogueView from "@/components/catalogue/CatalogueView";

export const metadata: Metadata = {
  title: "Our Paints | Ekotint Paints",
  description: "Find your finish. Explore Ekotint Premium and Essentials Assez paints for interiors, exteriors, wood, metal and surface preparation.",
};
export default function ProductsPage() { return <CatalogueView />; }
