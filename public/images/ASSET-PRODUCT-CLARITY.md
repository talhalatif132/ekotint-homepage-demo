# Product artwork clarity update — 6 November 2026

The final website uses the original, lossless `water-matt.png`, `clima-shield.png` and `hydra-matt.png` files already in this folder. None of their text or packaging artwork was replaced.

`ProductArtwork` in `src/app/page.tsx` displays those PNGs through individually traced SVG silhouettes, a tighter shared frame, and a mild sRGB convolution filter (centre 1.72, four adjacent samples −0.18). This increases local edge clarity without a global hue, saturation or brightness adjustment. Soft shadows are applied at display time. The previous darken blend and lossy WebP sources were removed from product presentation. Card colours and copy are unchanged. The same original artwork is used in cards, search and product dialogs.

Built-in `image_gen.imagegen` was tried for three transparent product cleanups. Those trials were rejected because some fine print, colour saturation and alpha edges changed. They are not referenced by the website. The existing original PNGs remain authoritative; small print remains limited by the source resolution.

## Trial prompts (not used in the published product images)

### water-matt

Source edit target: `water-matt.png`

Use case: background-extraction / precise-object-edit.
Asset type: clean high-resolution product cutout for the existing Ekotint Paints website.
Input image 1 is the EDIT TARGET, an authentic product-pack image. Edit this exact pack; do not redesign it.
Primary request: make a clean, crisp, studio-quality version of this same bucket, with slightly clearer edges, cleaner plastic and lid definition and natural neutral light. Remove the pale opaque backdrop and return genuine transparency. Container centered, same angle and proportions, entire lid and base visible, no extra props. Use a square composition with the bucket occupying about 78% of canvas height. Keep the full original silhouette, all labels, and every printed design element in exactly the same positions and proportions.
STRICT INVARIANTS: keep all packaging colours, logo gradients, blue band colour, black/white areas, and every word of original text unchanged. Preserve the original typefaces, letter spacing, letter case and line breaks. Do not invent or rewrite fine print; retain it as in the reference. No new text, no new claims, no extra logos, no replacement bucket. Do not repaint the branding or alter the product identity. No colour cast, no oversaturation, no dramatic reflections, no glossy CGI finish, no background scene. Only conservative clarity cleanup and clean alpha extraction; maintain a believable photographed plastic bucket.
The black bucket must stay black. Preserve the large exact blue-purple-magenta Ekotint mark. Visible text includes "EKOTINT", "PAINTS", "The Perfect Chemistry" and "WATER MATT"; keep the original small descriptive print unchanged.

### clima-shield

Source edit target: `clima-shield.png`

Use case: background-extraction / precise-object-edit.
Asset type: clean high-resolution product cutout for the existing Ekotint Paints website.
Input image 1 is the EDIT TARGET, an authentic product-pack image. Edit this exact pack; do not redesign it.
Primary request: make a clean, crisp, studio-quality version of this same bucket, with slightly clearer edges, cleaner plastic and lid definition and natural neutral light. Remove the pale opaque backdrop and return genuine transparency. Container centered, same angle and proportions, entire lid and base visible, no extra props. Use a square composition with the bucket occupying about 78% of canvas height. Keep the full original silhouette, all labels, and every printed design element in exactly the same positions and proportions.
STRICT INVARIANTS: keep all packaging colours, logo gradients, blue band colour, black/white areas, and every word of original text unchanged. Preserve the original typefaces, letter spacing, letter case and line breaks. Do not invent or rewrite fine print; retain it as in the reference. No new text, no new claims, no extra logos, no replacement bucket. Do not repaint the branding or alter the product identity. No colour cast, no oversaturation, no dramatic reflections, no glossy CGI finish, no background scene. Only conservative clarity cleanup and clean alpha extraction; maintain a believable photographed plastic bucket.
The white bucket, grey-white lid and exact blue band stay the same colours. Visible text includes "EKOTINT", "PAINTS", "The Perfect Chemistry", "ASSEZ", "series", and "CLIMA SHIELD"; preserve every original word, typography, blue dotted side pattern and small descriptive print unchanged.

### hydra-matt

Source edit target: `hydra-matt.png`

Use case: background-extraction / precise-object-edit.
Asset type: clean high-resolution product cutout for the existing Ekotint Paints website.
Input image 1 is the EDIT TARGET, an authentic product-pack image. Edit this exact pack; do not redesign it.
Primary request: make a clean, crisp, studio-quality version of this same bucket, with slightly clearer edges, cleaner plastic and lid definition and natural neutral light. Remove the pale opaque backdrop and return genuine transparency. Container centered, same angle and proportions, entire lid and base visible, no extra props. Use a square composition with the bucket occupying about 78% of canvas height. Keep the full original silhouette, all labels, and every printed design element in exactly the same positions and proportions.
STRICT INVARIANTS: keep all packaging colours, logo gradients, blue band colour, black/white areas, and every word of original text unchanged. Preserve the original typefaces, letter spacing, letter case and line breaks. Do not invent or rewrite fine print; retain it as in the reference. No new text, no new claims, no extra logos, no replacement bucket. Do not repaint the branding or alter the product identity. No colour cast, no oversaturation, no dramatic reflections, no glossy CGI finish, no background scene. Only conservative clarity cleanup and clean alpha extraction; maintain a believable photographed plastic bucket.
The white bucket, grey-white lid and exact blue band stay the same colours. Visible text includes "EKOTINT", "PAINTS", "The Perfect Chemistry", "ASSEZ", "series", and "HYDRA-MATT"; preserve every original word, typography, blue dotted side pattern and small descriptive print unchanged.
