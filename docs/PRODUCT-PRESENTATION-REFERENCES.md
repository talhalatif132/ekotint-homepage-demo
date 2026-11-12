# Product presentation — discussion and references

13 November 2026, Asia/Karachi. Local UI/asset implementation and source review only; no publication approval.

## User and CEO direction

The user said pack images looked blurry and supplied **15 images in `/Users/sam/Downloads/Ekotint Product Images`**. They requested transparent floating packs without coloured panels, using their Brighto screenshot as the visual reference; removal of the Premium/Assez/Eko Shade three-series legend; a short centred heading/supporting line; and centred application filters.

Subsequent corrections said the packs were too large/zoomed, extra rows/gaps looked odd, and the category should show one compact horizontal row like the reference. The user then asked for more air around the tabs and **five Featured products**. These latest choices supersede the initial larger multi-row layout; no product autoplay was requested.

Reread the supplied discussion: CEO **02:21:47** asks how categories/product details were established; **02:26:59** prioritizes products/prices/category browsing; **02:32:55** asks for clear name/price presentation; **02:46:37** wants card prices visible without opening details. These motivate understandable product browsing. The exact floating-pack/centred presentation follows the user's latest request, not an invented CEO instruction. The assistant read the recorded CEO/user exchange and was not a participant in it.

## Reference checked, 13 November 2026

[Brighto's official homepage](https://brightopaints.com/) was checked through available text exposing a product heading, product names and Rs prices. This supports product/name/price hierarchy only. The **user's supplied screenshot** is the visual authority for centring and unframed packs; no current CSS/font/spacing/sharpness audit is claimed. No Brighto pack images, product prices, copy or code are reused. The Ekotint heading avoids unsupported bestseller claims.

## Asset provenance

The durable manifest [`CLIENT-HD-ASSET-INVENTORY.json`](CLIENT-HD-ASSET-INVENTORY.json), copied from the asset-preparation record, contains 15 original PNGs copied verbatim and matching full-resolution lossless WebPs. Each is **1753 × 2068** with true alpha transparency. Runtime paths are `/images/client/hd-<product-id>-v1.webp`; supplied PNG copies and old exports remain preserved. No resizing, cropping, sharpening, redraw or repainted labels. This is format conversion, not image generation. **Hydra-Matt is absent from the new folder** and keeps its older **1342 × 1600** asset.

The asset-preparation comparison records unchanged dimensions, exact decoded visible RGBA and alpha for all 15 equivalents; RGB values of fully transparent pixels may be canonicalized by WebP. WebPs total **21,975,850 bytes**, versus **34,571,600 bytes** for the corresponding supplied PNGs (36.4% smaller). This records asset fidelity/encoding only, not browser performance or rendered-sharpness validation.

Source-to-product mapping, all under `Ekotint Product Images/`:

| Source filename | Product ID / versioned project stem |
| --- | --- |
| `Ekotint Details-08.png` | `semi-plastic-emulsion` / `hd-semi-plastic-emulsion-v1` |
| `Ekotint Details-09.png` | `assez-wall-putty` / `hd-assez-wall-putty-v1` |
| `Ekotint Details-10.png` | `clima-shield` / `hd-clima-shield-v1` |
| `Ekotint Details-11.png` | `assez-gloss-enamel` / `hd-assez-gloss-enamel-v1` |
| `Ekotint Details-12.png` | `eko-shade` / `hd-eko-shade-v1` |
| `Ekotint Details-13.png` | `epoxy` / `hd-epoxy-v1` |
| `Ekotint Details-14.png` | `eko-prime-oxide` / `hd-eko-prime-oxide-v1` |
| `Ekotint Details-15.png` | `hardener` / `hd-hardener-v1` |
| `Ekotint Details-16.png` | `synthetic-varnish` / `hd-synthetic-varnish-v1` |
| `Ekotint Details-17.png` | `eko-gleam` / `hd-eko-gleam-v1` |
| `Ekotint Details-18.png` | `water-matt` / `hd-water-matt-v1` |
| `Ekotint Details-19.png` | `premium-semi-plastic` / `hd-premium-semi-plastic-v1` |
| `Ekotint Details-20.png` | `primer-emulsion` / `hd-primer-emulsion-v1` |
| `Ekotint Details-21.png` | `wall-putty` / `hd-wall-putty-v1` |
| `Ekotint Details-22.png` | `weather-paint` / `hd-weather-paint-v1` |

PNG and WebP copies live in `public/images/client/` under those stems. All 15 current product records use the new WebP URLs and explicit 1753 × 2068 dimensions; Hydra-Matt retains its existing URL/dimensions. Full paths, sizes, hashes and asset-only comparison details are in the durable manifest. Asset inspection does not establish browser sharpness, responsive sizing or passed UI validation.

## Presentation scope and limits

`src/app/product-presentation.css` is imported after previous page styles. The heading is **Explore Ekotint paints**, with one line: **Find a finish for your walls, roof, wood and metal.** The verbose heading/eyebrow/three-series legend are removed. Featured/Interior/Exterior/Wood & metal/Roof coating/Preparation remain centred/wrapping, with accessible grouping/pressed states/grid relationship and a screen-reader result count. Series stay in each product's metadata/caption; removing the legend does not merge Premium and Assez or establish a new category hierarchy.

The shared artwork component uses native lazy/async images with supplied dimensions/contain. Transparent packs retain soft grounding shadows; category/Ask overlays remain removed. **Normal cards now omit the short finish paragraph and duplicate plus**, retaining series (9px), name (18px), price (18px), short pack note (11px) and accessible pack/title enquiry actions. Pack regions are 220px high with maximum pack width 190px; ≤600px regions are 205px. Roof coating is the exception: desktop image-left/details-right, existing paragraph/plus and mobile stack remain.

`#home-product-grid:not(.single-product)` uses the selected count in `--visible-products`: one desktop row, maximum width `count × 230px + (count − 1) × 24px`, 24px gaps and no old minimum-height grid gap. Two-product categories stay compact/centred. At **≤1000px** the normal row becomes native horizontal scrolling with 220px tracks; ≤600px tracks are `min(68vw, 220px)`. CSS scroll snapping, 8px scroller/scroll padding and safe centring preserve access/focus; each category change resets `scrollLeft` to zero. This is intentional product-row scrolling, not page overflow or a JS/autoplay carousel.

The compact heading is 28–38px; section spacing is 44px desktop/36px mobile. The user's latest clarification asks for space **between the category labels**, not more vertical spacing. Only tab column gaps change: **56px desktop, 32px at ≤800px, 28px at ≤600px**. Existing 8px/4px row gaps, 28px heading-to-tabs margin and 26px toolbar bottom gap remain unchanged, as do compact packs. The disabled all-products control remains 44px high.

**Featured now contains five exact records:** Water Matt (`water-matt`), Clima Shield (`clima-shield`), Epoxy (`epoxy`), Eko Shade (`eko-shade`) and Primer Emulsion (`primer-emulsion`). All five fit the compact desktop row; narrower screens swipe. Other filters, amounts and enquiry scope remain unchanged. No added commerce or product autoplay.

All price amounts remain provisional demo data. Client hierarchy, overlapping uses, genuine prices/packs and shade compatibility remain unresolved; clearer imagery/layout does not complete the CEO's product-first journey. Tests/typecheck/browser QA/build remain unrun and delegated to Sol in `SOL-PRODUCT-PRESENTATION-HANDOFF.md`. Preserve other local work. No push, Site upload or publication; public version 16 remains unchanged.
