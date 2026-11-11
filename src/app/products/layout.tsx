import { CatalogueShell } from "@/components/catalogue/CatalogueShell";
import "./products.css";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <CatalogueShell>{children}</CatalogueShell>;
}
