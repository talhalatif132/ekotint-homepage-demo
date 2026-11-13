// Pack options supplied by the user for the local product-page demo,
// 13 November 2026. Manufacturer availability and size-specific prices remain pending.
export const homePackSizes = [1, 4, 16] as const;
export type HomePackSize = typeof homePackSizes[number];

export function isHomePackSize(value: unknown): value is HomePackSize {
  return homePackSizes.some((size) => size === value);
}
