import { homePaints } from "@/lib/homepage-content";
import { isHomePackSize, type HomePackSize } from "@/lib/home-pack-sizes";
import { homeDemoLitreRate } from "@/lib/home-paint-pricing";
import { homeTechnicalSheet } from "@/lib/home-technical-sheets";

export const quoteCoats = [1, 2] as const;
export const quoteLitresBounds = { min: 1, max: 10_000 } as const;
export const quoteRoofProductId = "eko-shade";

export type HomeQuoteLine = {
  id: string;
  productId: string;
  litres: string;
  coats: typeof quoteCoats[number];
  area?: string;
  mode: "litres" | "area";
  extraLitres?: number;
};

export type QuoteRange = { min: number; max: number };

export const quoteMoney = (amount: number) => `PKR ${amount.toLocaleString("en-PK", { maximumFractionDigits: 2 })}`;

function quoteDecimal(value: string, minimum: number, maximum: number): number | null {
  const trimmed = value.trim();
  if (!/^(?:\d+(?:\.\d{1,2})?|\.\d{1,2})$/.test(trimmed)) return null;
  const amount = Number(trimmed);
  return Number.isFinite(amount) && amount >= minimum && amount <= maximum ? amount : null;
}

export const quoteLitres = (value: string) => quoteDecimal(value, quoteLitresBounds.min, quoteLitresBounds.max);
export const quoteArea = (value: string) => quoteDecimal(value, 0.1, 1_000_000);

const squareFeetPerSquareMetre = 1 / 0.3048 ** 2;
const wholeArea = new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 });
const smallArea = new Intl.NumberFormat("en-PK", { maximumFractionDigits: 1 });
function formatArea(area: number) {
  if (area < .1) return "<0.1";
  return (area < 10 ? smallArea : wholeArea).format(area);
}

const exampleCoverageSqFtPerLitre = 233;
// The legacy generic roof coating rate is an assumption until Eko Shade coverage is confirmed.
const provisionalRoofCoverageSqFtPerLitre = 25;

function coverageRateInSquareFeet(productId: string): QuoteRange | null {
  if (!productId) return null;
  const technicalRate = homeTechnicalSheet(productId)?.coverageSqMPerLitrePerCoat;
  if (technicalRate) return { min: technicalRate[0] * squareFeetPerSquareMetre, max: technicalRate[1] * squareFeetPerSquareMetre };
  const assumedRate = productId === quoteRoofProductId ? provisionalRoofCoverageSqFtPerLitre : exampleCoverageSqFtPerLitre;
  return { min: assumedRate, max: assumedRate };
}

export function quoteQuantity(line: HomeQuoteLine): QuoteRange | null {
  if (line.mode !== "area") {
    const litres = quoteLitres(line.litres);
    return litres === null ? null : { min: litres, max: litres };
  }
  const area = quoteArea(line.area ?? "");
  const rates = coverageRateInSquareFeet(line.productId);
  if (area === null || rates === null) return null;
  const coatedArea = area * line.coats;
  return {
    min: Math.ceil(coatedArea / rates.max * 10) / 10,
    max: Math.ceil(coatedArea / rates.min * 10) / 10,
  };
}

export function quoteQuantityLabel({ min, max }: QuoteRange) {
  const litresLabel = (value: number) => value.toLocaleString("en-PK", { maximumFractionDigits: 2 });
  return `${litresLabel(min)}${min !== max ? `–${litresLabel(max)}` : ""} L`;
}

export function quoteCoverage(line: HomeQuoteLine) {
  const litres = quoteLitres(line.litres);
  const rates = coverageRateInSquareFeet(line.productId);
  if (litres === null || rates === null) return null;

  const min = formatArea(litres * rates.min / line.coats);
  const max = formatArea(litres * rates.max / line.coats);
  return `${min}${max !== min ? `–${max}` : ""} sq ft`;
}

export function quoteExampleRate(productId: string): number | null {
  if (!homePaints.some((paint) => paint.id === productId)) return null;
  return homeDemoLitreRate(productId) ?? null;
}

export function homeQuoteHref(productId: string, packSize: HomePackSize, quantity: number) {
  const query = new URLSearchParams({ product: productId, pack: String(packSize), quantity: String(quantity) });
  return `/get-a-quote/?${query}`;
}

export function quoteLineFromQuery(query: URLSearchParams): HomeQuoteLine | null {
  const productId = query.get("product") ?? "";
  if (!homePaints.some((paint) => paint.id === productId)) return null;
  const pack = Number(query.get("pack"));
  const quantity = Number(query.get("quantity"));
  const validPack = isHomePackSize(pack);
  const validQuantity = Number.isInteger(quantity) && quantity >= 1 && quantity <= 99;
  const litres = validPack && validQuantity ? String(pack * quantity) : "";
  return {
    id: "paint-1", productId, coats: 2,
    litres, mode: litres ? "litres" : "area",
  };
}
