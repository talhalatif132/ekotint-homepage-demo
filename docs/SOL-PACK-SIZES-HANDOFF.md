# Sol handoff — 1 L / 4 L / 16 L product packs

13 November 2026. Read AGENTS.md, latest EKOTINT-PROJECT-HANDOVER.md and PACK-SIZES-REFERENCES.md. Local only; no push/deploy/publication approval. Preserve unrelated port3000.

**Validation completed:** Sol final typecheck/diff whitespace check/webpack build23/23 and the focused1440/390 selector/cart flow passed. Native ArrowRight, valid/invalid pack links, same/different pack identity, isolated removal, persistence, legacy unknown/invalid values and per-pack99 cap were verified. Water Matt also exposes three sizes. Root inspected settled desktop/mobile captures. Exact evidence/limits: PACK-SIZES-QA-2026-11-13.md. No further required implementation or repeated tests; user visual review remains. Future edits/failures can justify focused follow-up. No publishing.

## Ready for focused checks

User asked for1L,4L,16L in the product-price area like Brighto. Root added the native radio selector/styles in HomePaintProductView.tsx/home-product.css and the shared tuple/type/validator in home-pack-sizes.ts. Default1L; a valid pack query restores independently of colour. Product Description lists the same options. The old Pack size to be confirmed line is hidden only for the current detail price area. All16current detail pages share this template.

Pack-cart agent updated HomePaintCart.tsx so addItem takes the selected pack, identity/merge/remove/session storage include it, labels/status show it, and product links preserve `pack`. Valid legacy no-pack items remain unspecified/distinct, and explicitly malformed stored sizes are dropped. Existing unit prices/totals remain illustrative with no invented size scaling. Quantity/colour/photo/upload/checkout behaviour remains otherwise unchanged. Peer source review found no blocker; tests/build are assigned to Sol and not run by UI agents.

## Focused validation

1. Final typecheck, git diff whitespace check and webpack build. Reuse owned3023; no new dependency installation or port3000 actions. No unchanged broad hero/strip matrix.
2. Clima Shield1440/390: exactly1L/4L/16L below price, native selection/default1L/checked/focus styles, keyboard arrows/Space, no old pack placeholder in detail, no page overflow. Representative Water Matt uses the same options. Valid pack4/16 links restore; invalid/missing falls back1 independently of valid colour query. Description list aligns.
3. Same product/HEX with1/4/16 creates separate cart rows; same size merges. Quantity cap99 is per product+colour+pack. Removing one leaves other sizes. Reload keeps sizes; cart product link restores pack+colour. Verify header count/subtotal continue using quantities/current illustrative amounts with no size multiplier.
4. Seed one valid legacy item lacking pack and one invalid stored size: legacy remains Pack not selected, no false pack URL and no merge into a new chosen size; invalid size is discarded. Clear only test browser/session data, not user files.
5. Capture price/selector area desktop/mobile and representative cart after image decode/settled paint. Earlier QA captures were premature; wait for actual decode and paint before claiming visual evidence. Report exact scope/limits in PACK-SIZES-QA-2026-11-13.md. Coordinate any source fix before final build; do not publish.

Pending inputs: manufacturer availability/per-size prices and genuine product-shade compatibility. These do not block the three user-supplied local demo controls. No real backend/checkout changes authorized or required.

Copy/paste Sol prompt: Read docs/SOL-PACK-SIZES-HANDOFF.md. Validate the1L/4L/16L selector and pack-aware cart with focused desktop/mobile, keyboard, persistence, migration and final typecheck/build checks; record results. Existing prices remain illustrative; size-specific prices/availability pending. Keep local; do not publish.
