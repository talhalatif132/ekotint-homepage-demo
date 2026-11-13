# Product-page pack options

13 November 2026, Asia/Karachi. Local only; no publication approval.

## User instruction and scope

The user supplied the Clima Shield price-area screenshot (PKR3,450 and Pack size to be confirmed) and asked **“add here 1 l 4 l and 16 like brighto”**. No message timestamp was supplied. The assistant read this request; it was not part of an original CEO conversation. These three values are now explicitly user-supplied options for the local UI, superseding the earlier missing-pack placeholder in the current shared product-page template. They are not a manufacturer availability/price feed.

The current16 product pages use the same selector under their price: **1 L / 4 L / 16 L**, with1L selected initially. Native labelled radios provide pointer and keyboard selection, a checked outline and a visible keyboard focus ring. The matching Description facts list the same sizes. The main homepage row and other price consumers are unchanged.

## Functional handoff

- `src/lib/home-pack-sizes.ts` holds the tuple/type/validator and records user/demo provenance.
- `HomePaintProductView.tsx` hides the old pack note for this price area, renders the selector, clears obsolete cart status on size change, restores a valid `pack` query independently of colour and passes the selection to Add to cart. Missing/invalid queries retain1L. Existing quantity/colour controls remain.
- `HomePaintCart.tsx` identifies rows by product, colour and pack. Different sizes stay separate; the same combination merges. The size appears in cart content/status/remove labels and links back to the product with `pack=1|4|16`. Session storage retains it. Valid older rows without a pack remain labelled Pack not selected and distinct from new selections; explicitly invalid stored sizes are discarded.
- Existing illustrative unit prices/subtotals remain unchanged. No size multipliers, per-litre price assumptions, stock, payment or enquiry delivery were invented. Manufacturer size availability and per-size prices remain pending. These facts stay internal alongside the existing cart's established disclosure.

## Reference reviewed

[Brighto Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion) was reviewed on13 November through official page text extraction. It exposes Size with1Ltr/4Ltr/16Ltr above colour/quantity/cart and repeats those sizes in product information. That informs the clear price → size → colour/quantity relationship. The exact labels here come from the user's request. Ekotint retains its own purple typography/styles; no competitor price, product claim, shade code, shipping promise or code was copied. This was not a rendered pixel/breakpoint/variant-price audit. The installed Next16.4 client/server-component guide was reread before code changes.

## Validation

Implementation and peer source review complete; no blocker found. Sol's final typecheck, whitespace check, webpack build (23 static pages) and focused selector/cart checks passed: `PACK-SIZES-QA-2026-11-13.md`. Clima Shield1440/390 selection/keyboard/query/defaults, representative Water Matt controls, cart separation/merge/removal/reload/link restore, legacy unknown/invalid size handling and per-pack99 cap were exercised. Root visually inspected desktop/mobile selector captures; the sizes fit below the price with clear selection/focus styling. Full accessibility/all-route/real-order regression is outside this bounded check. Current handoff: `SOL-PACK-SIZES-HANDOFF.md`. No new publishing approval. No missing input blocks local UI review; genuine per-size pricing/availability remain client inputs.
