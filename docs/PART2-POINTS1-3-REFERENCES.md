# Voice message Part 2 — points 1, 2 and 3

13 November 2026, Asia/Karachi. Local only; no publication approval.

## Authorized scope and source

The user attached the complete translated Part2 message at `/Users/sam/.codex-account2/attachments/4ab5f073-ae8e-4f1b-b8d4-d08a84501558/Pasted text.txt`, then explicitly asked to move to **points1,2,3** after completing Part1. The later “continue” resumes those three points. No recording/message timestamps were supplied. The assistant read the supplied transcript and did not participate in the CEO conversation. Points4–13 are context for later work, not instructions to implement in this task: do not change reviews/footer/homepage ordering or hide sections now.

1. Product details: retain existing1L/4L/16L pack selection, improve wording/alignment and enlarge the predefined colour circles slightly.
2. Keep Description/Shade guide/Technical information; clarify what the shade guide does for the selected paint and offer its actual TDS.
3. Align right-hand details with the image at the top and bottom, and resolve the future room-photo area's placement.

## Local implementation

- **Latest middle-ground revision (13 November):** the user then said the right side looked crowded and the reduced image was too short, asking for a median between the two versions. This supersedes the densest compact arrangement. The image has a slightly larger column and a viewport-aware560–640px desktop minimum; summary metadata, colour controls and purchase controls are three distinct groups with real vertical spacing. On taller desktop screens the HEX field sits below its guidance, while shorter screens keep a compact paired row. Narrow desktops retain enough width for the enlarged swatches. No price/pack/cart/painting/TDS behaviour changes. Final Sol checks passed; exact scope is recorded below.
- **Latest screen-fit correction (13 November):** after the initial aligned layout, the user supplied the Epoxy screenshot and said the image was too large and required scrolling, asking to fit the image and its data together on screen. This supersedes the initial tall stretched panel. The desktop product heading/price share a row, pack controls sit beside their label, HEX guidance/field share a compact row, typography/spacing are reduced and the original 560px scene minimum is removed. The scene and summary still align without fixed-height text clipping; mobile remains a natural stack. The shorter confirmation note replaces implementation-focused demo-cart copy. All 1L/4L/16L, 50px swatch targets/40px discs, labels/help, quantity/cart and information tabs remain.
- Pack selection/cart functionality from the previous task is retained. Product swatch targets grow44→50px, with40px visible discs rather than32px; layout still wraps naturally.
- Product overview uses a balanced, stretched two-column grid. The actual scene and summary share one row and matching edges. Sample living room is an image badge; no separate toolbar offsets the image. Existing SVG/photo/mask remain unchanged; the scene fills its responsive panel without editing the asset. An explicit product layout leaves the decorative homepage backdrop unaffected.
- Simulated-lighting note and disabled own-room photo option sit in a shared row below the image/details pair. The upload purpose/Coming soon copy and native disabled state from Part1 remain. Mobile stacks scene, details, then support row; it restores a landscape sample-scene ratio rather than forcing desktop height.
- Shade guide identifies the selected product, explains preview→save→physical-sample/availability confirmation, displays the current colour/HEX, and returns keyboard focus/scroll to the existing chooser. No second picker or fabricated official shade catalogue was introduced.
- Technical information names the current product. A verified matching sheet opens the supplied bundle at that page; the actual source title/page is visible. Other products provide a product-and-series-specific Request TDS email action plus a separately labelled link to the supplied collection. No unrelated TDS is presented as that product's document.

## TDS evidence and limits

The original public `documents/ekotint-technical-data-sheets.pdf` is a9-page PDF. Root read cached extracted text and inspected original rendered pages3/4/6/8 under `/private/tmp/ekotint-client-docs-nov11/`, consistent with the client source notes in CLIENT-HOMEPAGE-CONTENT.md.

| Current product | Supplied page | Visible sheet title |
| --- | --- | --- |
| Water Matt |4|EkoMatt (Water Matt)|
| Eko Gleam |3|EkoGleam (Gloss Enamel)|
| Primer Emulsion |6|Primer Emulsion|
| Epoxy |8|EkoRoest (Epoxy)|

The remaining12current records need a product-specific file or confirmed association. Generic Wall Putty/Semi Plastic sheets cannot distinguish the separate Premium/Assez records. Weather Shield cannot be silently equated with Clima Shield or Weather Paint. EkoGleam is not automatically assigned to Assez Gloss Enamel. There is no verified sheet here for Hydra-Matt/Eko Shade/Eko PrimeOxide/2K Hardener/Synthetic Varnish. `home-technical-sheets.ts` intentionally maps only the four evidenced records. Fragment navigation depends on the visitor's PDF viewer; the page number/source name remain visible for manual navigation. These are supplied documents, not newly verified manufacturer revisions.

## Reference reviewed

[Brighto Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion) was rechecked on13 November through official page text, including after the user's compact-screen correction. It groups size/colour/quantity with product information, Shade Card and TDS. This informs the familiar structure and clear document distinction. The exact desktop alignment, screen-fit layout and modest swatch enlargement respond to the CEO/user's supplied instructions; no rendered Brighto size/geometry/variant behaviour was measured. No competitor artwork, prices, shade codes, claims or shipping terms were copied. Installed Next16.4 client-component/CSS guidance was reread for the correction; retained local Sites workflow informed implementation.

## Validation and remaining inputs

Implementation/source review completed by root. Two independent read-only UI/TDS reviewers reached account usage limits; root completed their source/PDF work directly. The preceding compact source passed18desktop/mobile and focused HEX/before/4Lcart/tab/TDS/actual-homepage-backdrop checks; a supplemental actual keyboard Enter return passed with the heading visible. **Final median-source Sol typecheck, whitespace check and production build passed (23/23 pages), along with8focused Epoxy/long-title desktop/mobile cases.** Complete scene/details/Add to cart fit1440×900/1366×768/1024×768 with matching edges;390px mobile stacks without page overflow. Root reviewed fresh1440/1366 captures and Sol reviewed mobile. The median change is layout grouping/styles only; no new full interaction regression was needed. Pointer activation during movement and all12TDSfallbacks were not exhaustively rechecked. Exact evidence/limits: PART2-POINTS1-3-QA-2026-11-13.md. Missing exact TDS associations/files, genuine per-size prices/available shades remain client inputs; frontend request fallback is implemented. No approval to publish or to implement Part2points4–13.
