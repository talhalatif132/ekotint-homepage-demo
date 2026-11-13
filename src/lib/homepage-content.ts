// Client-supplied documents, received 11 November 2026.
// Scope: homepage content only. Catalogue/detail pages are intentionally separate.
export type HomePaint = {
  id: string;
  name: string;
  series: string;
  category: "Interior" | "Exterior" | "Wood & metal" | "Roof coating" | "Preparation";
  image: string;
  imageWidth: number;
  imageHeight: number;
  finish: string;
  description: string;
  background: string;
};

export const homePaints: HomePaint[] = [
  { id: "water-matt", name: "Water Matt", series: "Premium Series", category: "Interior", image: "/images/client/hd-water-matt-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "A silky, smooth finish for interior walls.", description: "An interior decorative acrylic emulsion for walls, described as EkoMatt (Water Matt) in the technical data sheets.", background: "#eee8f1" },
  { id: "clima-shield", name: "Clima Shield", series: "Assez Series", category: "Exterior", image: "/images/client/hd-clima-shield-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "An exterior acrylic emulsion with a matt finish.", description: "The supplied packaging describes a 100% acrylic exterior wall emulsion with a durable matt finish and low dirt pick-up.", background: "#e7eae3" },
  { id: "epoxy", name: "Epoxy", series: "Premium Series", category: "Wood & metal", image: "/images/client/hd-epoxy-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "A two-component protective coating.", description: "A two-component high-build epoxy coating. The EkoRoest (Epoxy) technical sheet lists concrete, wood and metal applications.", background: "#e9e5ed" },
  { id: "hydra-matt", name: "Hydra-Matt", series: "Assez Series", category: "Interior", image: "/images/client/hydra-matt.webp", imageWidth: 1342, imageHeight: 1600, finish: "An acrylic emulsion for interior walls.", description: "The supplied Hydra-Matt packaging identifies an interior decorative acrylic emulsion for walls.", background: "#eeeae4" },
  { id: "weather-paint", name: "Weather Paint", series: "Premium Series", category: "Exterior", image: "/images/client/hd-weather-paint-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "Explore the Premium exterior range.", description: "Weather Paint is included in the client’s Premium Series presentation. Confirm the appropriate application system with Ekotint.", background: "#e5e9e4" },
  { id: "semi-plastic-emulsion", name: "Semi Plastic Emulsion", series: "Assez Series", category: "Interior", image: "/images/client/hd-semi-plastic-emulsion-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "An everyday finish for walls and ceilings.", description: "An economical interior acrylic emulsion for walls and ceilings, listed in the supplied technical data sheets.", background: "#f0e9e4" },
  { id: "eko-shade", name: "Eko Shade", series: "Roof Coating", category: "Roof coating", image: "/images/client/hd-eko-shade-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "A coating made for the roof above you.", description: "The client’s product presentation identifies Eko Shade as a roof coating. Ask Ekotint for substrate preparation and application guidance.", background: "#f1edda" },
  { id: "eko-gleam", name: "Eko Gleam", series: "Premium Series", category: "Wood & metal", image: "/images/client/hd-eko-gleam-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "A glossy finish for the finer details.", description: "An alkyd gloss enamel for interior and exterior applications, including walls, wood and metal, as listed in the EkoGleam technical sheet.", background: "#e6e8ef" },
  { id: "synthetic-varnish", name: "Synthetic Varnish", series: "Premium Series", category: "Wood & metal", image: "/images/client/hd-synthetic-varnish-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "Part of the Premium finishing range.", description: "Synthetic Varnish is included in the supplied Premium Series presentation. Confirm suitability, preparation and application with Ekotint.", background: "#eee6df" },
  { id: "primer-emulsion", name: "Primer Emulsion", series: "Premium Series", category: "Preparation", image: "/images/client/hd-primer-emulsion-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "Start with the right foundation.", description: "An acrylic emulsion primer for interior and exterior walls, with penetration and alkali resistance described in the technical data sheets.", background: "#e8e4ee" },
  { id: "wall-putty", name: "Wall Putty", series: "Premium Series", category: "Preparation", image: "/images/client/hd-wall-putty-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "A smoother beginning for your walls.", description: "An acrylic copolymer-based putty for interior surface preparation. The technical sheet describes an even base for the coats that follow.", background: "#eeeae3" },
  { id: "eko-prime-oxide", name: "Eko PrimeOxide", series: "Premium Series", category: "Preparation", image: "/images/client/hd-eko-prime-oxide-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "Explore the specialist preparation range.", description: "Eko PrimeOxide is included in the supplied Premium Series presentation. Ask Ekotint for its technical sheet and surface guidance.", background: "#e9e4e7" },
  { id: "hardener", name: "2K Hardener", series: "Premium Series", category: "Wood & metal", image: "/images/client/hd-hardener-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "For the specified coating system.", description: "2K Hardener is included in the supplied Premium Series presentation. Use only with the compatible system and mixing instructions specified by Ekotint.", background: "#e6e6ec" },
  { id: "premium-semi-plastic", name: "Semi Plastic Emulsion", series: "Premium Series", category: "Interior", image: "/images/client/hd-premium-semi-plastic-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "Explore the Premium interior emulsion range.", description: "The black-pack Semi Plastic Emulsion is a separate Premium Series product in the client’s presentation. Confirm its current application guidance with Ekotint.", background: "#eee7ed" },
  { id: "assez-wall-putty", name: "Wall Putty", series: "Assez Series", category: "Preparation", image: "/images/client/hd-assez-wall-putty-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "An even start for the coats that follow.", description: "The supplied Assez Wall Putty packaging describes an acrylic copolymer-based putty. Ask Ekotint for the correct preparation for your wall.", background: "#e5e9e2" },
  { id: "assez-gloss-enamel", name: "Gloss Enamel", series: "Assez Series", category: "Wood & metal", image: "/images/client/hd-assez-gloss-enamel-v1.webp", imageWidth: 1753, imageHeight: 2068, finish: "A glossy finish in the Assez collection.", description: "The supplied Assez Gloss Enamel packaging describes an alkyd enamel paint for a glossy finish. Confirm suitability and preparation with Ekotint.", background: "#e5e9ef" },
];

export const homePaintFilters = ["Featured", "Interior", "Exterior", "Wood & metal", "Roof coating", "Preparation"];
export const featuredHomePaints = homePaints.filter((paint) =>
  ["water-matt", "clima-shield", "epoxy", "eko-shade", "eko-gleam", "primer-emulsion"].includes(paint.id)
);
export const homeTechnicalGuide = "/documents/ekotint-technical-data-sheets.pdf";
// UI examples authorized on 12 November 2026. These are NOT client prices,
// estimates, minimum prices or confirmed pack offers. Keep the visible label.
export const homeExamplePrices: Record<string, number> = {
  "water-matt": 2850, "clima-shield": 3450, "epoxy": 4950,
  "hydra-matt": 2650, "weather-paint": 3250, "semi-plastic-emulsion": 1850,
  "eko-shade": 4250, "eko-gleam": 2450, "synthetic-varnish": 2250,
  "primer-emulsion": 1750, "wall-putty": 1250, "eko-prime-oxide": 1650,
  "hardener": 1450, "premium-semi-plastic": 2150, "assez-wall-putty": 1150,
  "assez-gloss-enamel": 2050,
};

export type HomeCustomerReview = {
  id: string;
  quote: string;
  customerName: string;
  project: string;
  sourceLabel: string;
  sourceUrl?: string;
};
// Legacy empty export retained for compatibility. New approved company/product
// review records belong in home-reviews.ts, with scope and publication evidence.
export const homeCustomerReviews: HomeCustomerReview[] = [];

export const homeContact = {
  phone: "021-35121487",
  phoneHref: "tel:+922135121487",
  // Published on https://ekotintpaint.com/contact-us/; reviewed 11 November 2026.
  email: "support@ekotintpaints.com",
  emailHref: "mailto:support@ekotintpaints.com",
  address: "E-9, Sector 31D, P&T Society, Industrial Area Korangi, Karachi",
};

// Hidden homepage sections remain in source for the client’s later review.
export const homeSectionVisibility = {
  advice: false,
  manufacturer: false,
  exteriorFeature: false,
  featuredFinishes: false,
};

// Screen-colour inspiration only; not an approved manufacturer shade/code.
export const homeVanillaColourIdea = { name: "Soft Vanilla", hex: "#FCEEDE" };
