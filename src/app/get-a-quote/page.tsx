import type { Metadata } from "next";
import HomePaintShell from "@/components/HomePaintShell";
import HomeQuotePage from "@/components/HomeQuotePage";

export const metadata: Metadata = {
  title: "Paint Estimator | Ekotint Paints",
  description: "Estimate Ekotint paint cost and coverage from litres or the surface area you plan to paint.",
};

export default function GetAQuotePage() {
  return <HomePaintShell activePage="quote"><HomeQuotePage /></HomePaintShell>;
}
