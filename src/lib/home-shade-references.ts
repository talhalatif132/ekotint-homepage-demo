// Stable IDs for the website's preview palette. These are not manufacturer
// shade or tinting codes. Keep existing IDs when changing display order.
const previewReferences: Readonly<Record<string, string>> = {
  "#A493AE": "EK-001", // Dusty Lilac
  "#FCEEDE": "EK-002", // Soft Vanilla
  "#DDD5C5": "EK-003", // Soft Linen
  "#816FB0": "EK-004", // Ekotint Lavender
  "#CF91C1": "EK-005", // Soft Magenta
  "#C4D0E6": "EK-006", // Airy Blue
  "#D5CBDE": "EK-007", // Lilac Mist
  "#B496AC": "EK-008", // Soft Mauve
  "#DCD7E9": "EK-009", // Lavender Veil
  "#B1A6CE": "EK-010", // Soft Lavender
  "#E9CDE3": "EK-011", // Petal Magenta
  "#B14E9B": "EK-012", // Ekotint Magenta
  "#C99E8D": "EK-013", // Clay Blush
  "#D7B6A2": "EK-014", // Desert Rose
  "#655789": "EK-015", // Deep Lavender
  "#705579": "EK-016", // Plum Velvet
  "#EEEAE1": "EK-017", // Chalk White
  "#B8B4A7": "EK-018", // Quiet Stone
  "#C6AF93": "EK-019", // Warm Sand
  "#777D5D": "EK-020", // Olive Grove
  "#A6AF98": "EK-021", // Still Sage
  "#BA7C63": "EK-022", // Terracotta
  "#55614F": "EK-023", // Fern Shade
  "#BDC5B0": "EK-024", // Eucalyptus
  "#96614D": "EK-025", // Burnt Sienna
  "#2D56A4": "EK-026", // Ekotint Blue
  "#7D96C7": "EK-027", // Soft Cobalt
  "#234380": "EK-028", // Midnight Blue
  "#8A3D79": "EK-029", // Deep Magenta
  "#FFFFFF": "EK-030", // White (roof preview)
  "#D3D5D4": "EK-031", // Light Grey (roof preview)
  "#DED3BD": "EK-032", // Light Tan (roof preview)
  "#C3AE8C": "EK-033", // Tan (roof preview)
  "#788C9C": "EK-034", // Blue Hour (legacy idea)
  "#BCCAC7": "EK-035", // Sea Mist (legacy idea)
  "#475E6A": "EK-036", // Deep Harbour (legacy idea)
  "#D2DDE0": "EK-037", // Cloud Blue (legacy idea)
};

export function homeShadeReference(hex: string): string | undefined {
  const key = hex.trim().toUpperCase();
  return /^#[0-9A-F]{6}$/.test(key) ? previewReferences[key] : undefined;
}
