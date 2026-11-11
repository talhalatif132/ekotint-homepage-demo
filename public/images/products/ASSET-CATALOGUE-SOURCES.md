# Ekotint catalogue original pack assets and source facts

Prepared 11 November 2026 from the supplied public WooCommerce Store API snapshot at `/private/tmp/ekotint-public-products-nov11.json` and the ten linked original pack images. [Public product feed](https://ekotintpaint.com/wp-json/wc/store/v1/products?per_page=100).

The snapshot contains ten distinct listings: five Premium Series and five Essentials Assez Series. The seven missing images were downloaded without modification into this folder. Water Matt, Clima Shield and Hydra-Matt reuse their existing original PNGs in the parent folder. All ten images were inspected with `view_image`; the PNG source artwork and labels remain unchanged. No AI image generation, retouch, crop, sharpening or color alteration was performed in this asset task.

All originals are 920 × 1100 opaque PNGs with a pale background (top-left sampled RGB 246, 246, 244). The source pack artwork is inherently soft at fine-print scale. Preserve its authentic labels rather than reconstructing the small text. Full dimensions, byte sizes, SHA-256 hashes, source URLs, descriptions, categories and missing-field markers are in `catalogue-source-data.json`.

## Image inventory and approximate pack bounds

Bounds below are conservative visual estimates of `(x, y, width, height)` in original image pixels. They are layout guides, not exact SVG silhouettes or physical container dimensions.

| Product and source page | Series | Local public asset | Approximate pack bounds |
| --- | --- | --- | --- |
| [Weather Paint](https://ekotintpaint.com/product/weather-paint/) (`weather-paint`, ID 12494) | Premium Series | `/images/products/weather-paint.png` | 208, 252, 505, 598 |
| [Wall Putty](https://ekotintpaint.com/product/wall-putty-2/) (`wall-putty-2`, ID 12492) | Premium Series | `/images/products/wall-putty-2.png` | 208, 253, 505, 598 |
| [Primer Emulsion](https://ekotintpaint.com/product/primer-emulsion/) (`primer-emulsion`, ID 12490) | Premium Series | `/images/products/primer-emulsion.png` | 212, 257, 498, 594 |
| [Semi Plastic Emulsion](https://ekotintpaint.com/product/semi-plastic-emulsion-2/) (`semi-plastic-emulsion-2`, ID 12486) | Premium Series | `/images/products/semi-plastic-emulsion-2.png` | 219, 258, 498, 593 |
| [Water Matt](https://ekotintpaint.com/product/water-matt/) (`water-matt`, ID 12482) | Premium Series | `/images/water-matt.png` | 218, 267, 486, 579 |
| [Clima Shield](https://ekotintpaint.com/product/clima-shield/) (`clima-shield`, ID 12305) | Essentials Assez Series | `/images/clima-shield.png` | 217, 262, 488, 585 |
| [Gloss Enamel](https://ekotintpaint.com/product/gloss-enamel/) (`gloss-enamel`, ID 12299) | Essentials Assez Series | `/images/products/gloss-enamel.png` | 226, 266, 479, 568 |
| [Hydra-Matt](https://ekotintpaint.com/product/hydra-matt/) (`hydra-matt`, ID 12296) | Essentials Assez Series | `/images/hydra-matt.png` | 218, 257, 489, 585 |
| [Semi Plastic Emulsion](https://ekotintpaint.com/product/semi-plastic-emulsion/) (`semi-plastic-emulsion`, ID 12293) | Essentials Assez Series | `/images/products/semi-plastic-emulsion.png` | 215, 265, 494, 584 |
| [Wall Putty](https://ekotintpaint.com/product/wall-putty/) (`wall-putty`, ID 12290) | Essentials Assez Series | `/images/products/wall-putty.png` | 226, 262, 479, 571 |

## Supplied and missing product specifications

All ten products have **no supplied pack sizes, numerical coverage rate, weight, physical dimensions or SKU** in this feed. Every listing has empty `attributes` and `variations` arrays. Product-name wording, generic category text, earlier calculator assumptions or apparent bucket size must not be substituted for those missing facts. This task does not establish product-page FAQ or TDS specifications.

All ten expose raw USD zero values, empty `price_html`, `is_purchasable: false`, and zero reviews. These do not establish a real selling price or customer rating. The stock flag is true in the snapshot; no delivery lead time was established by this task.

| Slug | Finish explicitly supplied in product description | Qualitative coverage wording only |
| --- | --- | --- |
| `weather-paint` | Not supplied | Not supplied |
| `wall-putty-2` | Not supplied | Not supplied |
| `primer-emulsion` | Not supplied | Not supplied |
| `semi-plastic-emulsion-2` | gentle sheen | excellent coverage |
| `water-matt` | matt-finish | superior coverage |
| `clima-shield` | durable matte finish | Not supplied |
| `gloss-enamel` | high-gloss | Not supplied |
| `hydra-matt` | matt finish | Not supplied |
| `semi-plastic-emulsion` | soft sheen | excellent coverage |
| `wall-putty` | Not supplied | Not supplied |

Two Wall Putty listings and two Semi Plastic Emulsion listings are separate products with different series, IDs, slugs and packaging. They must not be collapsed into duplicate records. Weather Paint also has an anomalous Common & Brand Colors category link under the Essentials Assez category branch, but its explicit series category is Premium Series; the full original category mapping is preserved in JSON.

## Exact source descriptions and image URLs

The following are the source brand descriptions, reproduced for catalogue data preparation. Their performance statements have not been independently tested.

### Weather Paint — Premium Series (`weather-paint`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/1-1.png).

Categories: Common & Brand Colors, Exterior Finishes (Premium), Premium Series.

> A premium exterior-grade paint formulated to withstand harsh weather. Delivers excellent protection against UV rays, rain, and dirt, keeping walls fresh and vibrant year-round.

### Wall Putty — Premium Series (`wall-putty-2`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/2-1.png).

Categories: Premium Series, Wall Putty & Primers (Premium).

> High-quality putty that smooths wall surfaces and fills imperfections. Provides an even base, improving paint adhesion and ensuring a seamless finish.

### Primer Emulsion — Premium Series (`primer-emulsion`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/3-1.png).

Categories: Premium Series, Wall Putty & Primers (Premium).

> An advanced undercoat that ensures strong adhesion and a flawless topcoat finish. Enhances paint longevity and provides a perfect base for all wall types.

### Semi Plastic Emulsion — Premium Series (`semi-plastic-emulsion-2`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/4-1.png).

Categories: Interior Emulsions (Premium), Premium Series.

> A versatile and washable interior paint offering a gentle sheen and excellent coverage. Perfect for modern homes seeking color vibrancy with a touch of elegance.

### Water Matt — Premium Series (`water-matt`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2024/04/Untitled-920-x-1100-px.png).

Categories: Premium Series, Water Matt (Premium).

> A smooth, elegant matt-finish paint designed for superior coverage and a soft, luxurious look. Ideal for interiors, it provides durability, easy cleaning, and long-lasting beauty.

### Clima Shield — Essentials Assez Series (`clima-shield`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/4.png).

Categories: Essentials Assez Series, Exterior Finishes.

> A premium exterior 100% acrylic emulsion engineered for Pakistan’s climate. Delivers a durable matte finish with UV, algae/fungus, and dirt-pick-up resistance to keep façades fresher for longer. Low-odor, breathable, and ideal for cement plaster, concrete, and fiber cement surfaces.

### Gloss Enamel — Essentials Assez Series (`gloss-enamel`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/5.png).

Categories: Essentials Assez Series, Gloss Enamels.

> An oil-based, high-gloss paint ideal for wood, metal, and trim surfaces. It gives a rich, durable shine while protecting against rust, moisture, and daily wear.

### Hydra-Matt — Essentials Assez Series (`hydra-matt`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/3.png).

Categories: Essentials Assez Series, Hydra-Matt Series.

> A luxurious matt finish paint designed for a velvety, elegant appearance. Hydra-Matt offers strong opacity, anti-fungal protection, and long-lasting color stability.

### Semi Plastic Emulsion — Essentials Assez Series (`semi-plastic-emulsion`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/2.png).

Categories: Essentials Assez Series, Interior Emulsions.

> A premium interior coating offering soft sheen and excellent coverage. Resistant to mild stains and easy to clean, it’s perfect for living rooms, bedrooms, and hallways.

### Wall Putty — Essentials Assez Series (`wall-putty`)

Source image: [original PNG](https://ekotintpaint.com/wp-content/uploads/2025/10/1.png).

Categories: Essentials Assez Series, Wall Putty & Primers.

> A high-quality undercoat used to level and smooth wall surfaces before painting. It enhances paint adhesion, provides an even base, and increases paint durability.

