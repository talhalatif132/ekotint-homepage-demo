export type Collection = "premium" | "essentials";
export type PaintProduct = {
  id: string; name: string; collection: Collection; category: string; categoryLabel: string;
  use: string; finish: string; tagline: string; description: string; image: string;
  background: string; benefits: string[]; surface: string; room: string; roomAlt: string;
  colour: boolean;
};

export const collections = [
  { id: "premium", name: "Premium", description: "A considered finish, from the first coat to the last.", accent: "#705579" },
  { id: "essentials", name: "Essentials Assez", description: "The everyday range. Made for the way you live.", accent: "#3e6884" },
] as const;

const interiorRoom = "/images/premium-room-plum.webp";
const bedroom = "/images/premium-room-bedroom.webp";
const exterior = "/images/premium-exterior.webp";
const interiorAlt = "Room inspiration with a muted plum wall, cream lounge chair and walnut side table";
const exteriorAlt = "Exterior inspiration with warm neutral walls and a contemporary timber entrance";

// Product names, collections and specifications are based on Ekotint's public
// catalogue feed, checked 11 November 2026. See public/images/products/ASSET-CATALOGUE-SOURCES.md.
// A zero price in that feed is not a selling price. Pack sizes and coverage are
// deliberately omitted until supplied by the manufacturer.
export const catalogue: PaintProduct[] = [
  { id: "water-matt", name: "Water Matt", collection: "premium", category: "water-matt", categoryLabel: "Water Matt", use: "Interior", finish: "Matt", tagline: "A quietly beautiful interior.", description: "A smooth, elegant matt finish for interior walls. Designed for a soft, luxurious appearance, with superior coverage, easy cleaning and lasting colour.", image: "/images/water-matt.png", background: "#eee8ef", benefits: ["Smooth matt finish", "Easy to clean", "Interior walls"], surface: "Interior walls", room: interiorRoom, roomAlt: interiorAlt, colour: true },
  { id: "clima-shield", name: "Clima Shield", collection: "essentials", category: "exterior", categoryLabel: "Exterior finishes", use: "Exterior", finish: "Matt", tagline: "Beautiful, come rain or shine.", description: "A 100% acrylic exterior emulsion engineered for Pakistan’s climate. A breathable, low-odour matt finish with resistance to UV, algae, fungus and dirt pick-up.", image: "/images/clima-shield.png", background: "#e6eae2", benefits: ["100% acrylic emulsion", "UV resistance", "Algae & fungus resistance"], surface: "Cement plaster, concrete & fibre cement", room: exterior, roomAlt: exteriorAlt, colour: true },
  { id: "hydra-matt", name: "Hydra-Matt", collection: "essentials", category: "hydra-matt", categoryLabel: "Hydra-Matt series", use: "Matt finishes", finish: "Matt", tagline: "Depth you can see. A finish you feel.", description: "A velvety matt appearance with strong opacity, antifungal protection and long-lasting colour stability. A refined finish for a fresh perspective on your space.", image: "/images/hydra-matt.png", background: "#eeeae3", benefits: ["Velvety matt appearance", "Strong opacity", "Colour stability"], surface: "Confirm suitability for your surface with Ekotint", room: bedroom, roomAlt: "Bedroom inspiration with a warm ivory wall and a linen bed", colour: true },
  { id: "weather-paint", name: "Weather Paint", collection: "premium", category: "exterior", categoryLabel: "Exterior finishes", use: "Exterior", finish: "Exterior coating", tagline: "An enduring first impression.", description: "An exterior-grade paint formulated to withstand harsh weather. Helps protect walls against UV rays, rain and dirt, keeping the outside of your home fresh and vibrant.", image: "/images/products/weather-paint.png", background: "#e7eae3", benefits: ["Weather protection", "UV resistance", "Dirt resistance"], surface: "Exterior walls", room: exterior, roomAlt: exteriorAlt, colour: true },
  { id: "semi-plastic-emulsion-2", name: "Semi Plastic Emulsion", collection: "premium", category: "interior", categoryLabel: "Interior emulsions", use: "Interior", finish: "Soft sheen", tagline: "Everyday living, beautifully finished.", description: "A versatile, washable interior paint with a gentle sheen and excellent coverage. Brings colour vibrancy and an elegant finish to modern homes.", image: "/images/products/semi-plastic-emulsion-2.png", background: "#f0e9e4", benefits: ["Washable finish", "Gentle sheen", "Interior application"], surface: "Interior walls", room: "/images/premium-room-sage.webp", roomAlt: "Dining room inspiration with sage walls and a walnut table", colour: true },
  { id: "semi-plastic-emulsion", name: "Semi Plastic Emulsion", collection: "essentials", category: "interior", categoryLabel: "Interior emulsions", use: "Interior", finish: "Soft sheen", tagline: "Colour for the moments in between.", description: "An interior coating with a soft sheen and excellent coverage. Resistant to mild stains and easy to clean, for living rooms, bedrooms and hallways.", image: "/images/products/semi-plastic-emulsion.png", background: "#e9e4ee", benefits: ["Easy to clean", "Soft sheen", "Mild stain resistance"], surface: "Interior walls, bedrooms & hallways", room: bedroom, roomAlt: "Bedroom inspiration with a warm ivory wall and a linen bed", colour: true },
  { id: "gloss-enamel", name: "Gloss Enamel", collection: "essentials", category: "enamels", categoryLabel: "Gloss enamels", use: "Wood & metal", finish: "High gloss", tagline: "The details make the difference.", description: "An oil-based, high-gloss paint for wood, metal and trim. A rich, durable shine with protection against rust, moisture and daily wear.", image: "/images/products/gloss-enamel.png", background: "#e4e9ec", benefits: ["High-gloss finish", "Wood, metal & trim", "Moisture protection"], surface: "Wood, metal & trim", room: interiorRoom, roomAlt: interiorAlt, colour: true },
  { id: "wall-putty-2", name: "Wall Putty", collection: "premium", category: "preparation", categoryLabel: "Putty & primers", use: "Surface preparation", finish: "Smooth base", tagline: "Beautiful walls begin beneath the surface.", description: "A high-quality putty that smooths wall surfaces and fills imperfections. Creates an even base, improves paint adhesion and helps achieve a seamless finish.", image: "/images/products/wall-putty-2.png", background: "#eeeae2", benefits: ["Smooths imperfections", "Even surface", "Improves adhesion"], surface: "Wall surface preparation", room: bedroom, roomAlt: "Bedroom inspiration with a warm ivory wall and a linen bed", colour: false },
  { id: "primer-emulsion", name: "Primer Emulsion", collection: "premium", category: "preparation", categoryLabel: "Putty & primers", use: "Surface preparation", finish: "Undercoat", tagline: "The foundation of a lasting finish.", description: "An undercoat designed for strong adhesion and a flawless topcoat finish. Helps improve paint longevity and provides a consistent base for the coats that follow.", image: "/images/products/primer-emulsion.png", background: "#e9e5ed", benefits: ["Strong adhesion", "Consistent base", "Supports a lasting finish"], surface: "Wall undercoat; confirm preparation for your surface", room: interiorRoom, roomAlt: interiorAlt, colour: false },
  { id: "wall-putty", name: "Wall Putty", collection: "essentials", category: "preparation", categoryLabel: "Putty & primers", use: "Surface preparation", finish: "Smooth base", tagline: "A smoother start to your space.", description: "An undercoat used to level and smooth walls before painting. Enhances paint adhesion, provides an even base and supports a durable finish.", image: "/images/products/wall-putty.png", background: "#e6e9e5", benefits: ["Levels wall surfaces", "Even base", "Improves adhesion"], surface: "Wall surface preparation", room: bedroom, roomAlt: "Bedroom inspiration with a warm ivory wall and a linen bed", colour: false },
];

export const colourIdeas = [
  { name: "Dusty Lilac", hex: "#A493AE" }, { name: "Soft Linen", hex: "#DDD5C5" },
  { name: "Still Sage", hex: "#A6AF98" }, { name: "Terracotta", hex: "#BA7C63" },
  { name: "Blue Hour", hex: "#788C9C" }, { name: "Plum Velvet", hex: "#705579" },
];
export const collectionName = (id: Collection) => collections.find((item) => item.id === id)!.name;
// Preserve legacy catalogue variants when linking to the current client records.
const currentProductIds: Record<string, string> = {
  "wall-putty": "assez-wall-putty",
  "wall-putty-2": "wall-putty",
  "semi-plastic-emulsion-2": "premium-semi-plastic",
  "gloss-enamel": "assez-gloss-enamel",
};
export const productHref = (product: Pick<PaintProduct, "id">) => `/products/${currentProductIds[product.id] || product.id}/`;
export const getProduct = (id: string) => catalogue.find((product) => product.id === id);
