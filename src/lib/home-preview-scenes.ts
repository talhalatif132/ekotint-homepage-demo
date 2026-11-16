import type { HomePaint } from "@/lib/homepage-content";

type PreviewScene = {
  image: string;
  label: string;
  description: string;
  surface: string;
  originalLabel: string;
  originalHex: string;
  referenceLuma: number;
  lighting?: "balanced";
  mask?: string;
  help: string;
  note: string;
};

const interiorMask = "M113 0H1018V514C970 515 908 514 855 517L816 518 808 507Q806 504 801 506L762 512 718 504Q711 502 713 508L717 518 675 519 669 513Q660 510 647 513C615 513 584 512 568 516Q561 518 565 530L571 549C535 543 502 543 477 550C440 557 419 581 416 620L415 647 216 650 215 602 166 602 166 578 113 579Z";
const previewNote = "Colour inspiration with simulated lighting. Confirm your physical shade and product suitability with Ekotint.";

export const homePreviewScenes = {
  interior: {
    image: "/images/hero-room.webp", label: "Sample living room",
    description: "sunlit interior living room", surface: "wall", originalLabel: "Original room",
    originalHex: "#777D5D", referenceLuma: .30, mask: interiorMask,
    help: "Pick a colour or enter its HEX code to preview it on the sample walls.", note: previewNote,
  },
  exterior: {
    image: "/images/previews/exterior-v2.webp", label: "Sample house exterior",
    description: "lavender courtyard with an exterior feature wall and timber entrance", surface: "exterior wall",
    originalLabel: "Original exterior", originalHex: "#A493AE", referenceLuma: .70, lighting: "balanced",
    // The clear facade only: keep the coping, recessed entry, door and planting natural.
    mask: "M0 234H1363V317H894V853H0Z",
    help: "Pick a colour or enter its HEX code to preview it on the exterior feature wall.", note: previewNote,
  },
  roof: {
    image: "/images/previews/roof-v3.webp", label: "Sample rooftop",
    description: "natural stone-toned rooftop with an ivory pavilion, timber door and olive planting", surface: "roof",
    originalLabel: "Original rooftop", originalHex: "#B4A899", referenceLuma: .70, lighting: "balanced",
    mask: "M0 744L534 657L553 657Q601 678 650 657L657 649L725 651L796 639H1017V648H1200L1235 662H1286V637H1302V668L1483 679V643H1499V683L1536 685V1024H0Z",
    help: "Pick a colour or enter its HEX code to preview it on the flat roof surface.", note: previewNote,
  },
  metal: {
    image: "/images/previews/metal-v3.webp", label: "Sample metal gate",
    description: "satin painted steel gate framed by ivory plaster and natural garden planting", surface: "metal gate",
    originalLabel: "Original metal gate", originalHex: "#788583", referenceLuma: .46, lighting: "balanced",
    // Even-odd holes preserve the bronze handles as well as the surrounding garden.
    mask: "M286 204H1257V850H286ZM732 440V599H754V440ZM790 439V598H812V439Z",
    help: "Pick a colour or enter its HEX code to preview it on the metal gate.", note: previewNote,
  },
  wood: {
    image: "/images/previews/wood-v2.webp", label: "Natural timber finish",
    description: "natural walnut entrance doors in a sunlit lavender courtyard", surface: "timber",
    originalLabel: "Natural timber", originalHex: "#986537", referenceLuma: .30,
    help: "Save a colour idea for your project. The natural timber image stays unchanged.",
    note: "Natural timber shown for finish inspiration. Confirm varnish, colour and surface options with Ekotint.",
  },
  preparation: {
    image: "/images/hero-room.webp", label: "Wall finish inspiration",
    description: "smooth finished interior wall in a sunlit living room", surface: "finished wall",
    originalLabel: "Original room", originalHex: "#777D5D", referenceLuma: .30, mask: interiorMask,
    help: "Explore a finishing-coat colour on the wall. Primer and putty prepare the base underneath.",
    note: "Finished-wall inspiration; the colour represents a finishing coat, not primer or putty. Confirm the complete system with Ekotint.",
  },
  coating: {
    image: "/images/hero-room.webp", label: "Wall coating inspiration",
    description: "sunlit feature wall in the prepared interior living room", surface: "wall",
    originalLabel: "Original room", originalHex: "#777D5D", referenceLuma: .30, mask: interiorMask,
    help: "Explore a colour idea on the sample wall. Confirm the surface and coating system with Ekotint.",
    note: "Illustrative wall colour. Confirm the substrate, preparation and complete protective-coating system with Ekotint.",
  },
  system: {
    image: "/images/previews/metal-v3.webp", label: "Coating system inspiration",
    description: "finished metal garden gate surrounded by ivory walls and planting", surface: "coating system",
    originalLabel: "Finished coating system", originalHex: "#6D8796", referenceLuma: .30,
    help: "Save a colour idea for the complete coating system. This inspiration image stays unchanged.",
    note: "Finished-system inspiration. Confirm the compatible products, mixing and finishing coat with Ekotint.",
  },
} satisfies Record<string, PreviewScene>;

export type HomePreviewSceneKey = keyof typeof homePreviewScenes;
export function homePreviewScene(key: HomePreviewSceneKey): PreviewScene { return homePreviewScenes[key]; }

export function homePreviewForProduct(product: HomePaint): HomePreviewSceneKey {
  if (product.id === "epoxy") return "coating";
  if (product.id === "synthetic-varnish") return "wood";
  if (product.id === "hardener" || product.id === "eko-prime-oxide") return "system";
  switch (product.category) {
    case "Exterior": return "exterior";
    case "Roof coating": return "roof";
    case "Wood & metal": return "metal";
    case "Preparation": return "preparation";
    default: return "interior";
  }
}
