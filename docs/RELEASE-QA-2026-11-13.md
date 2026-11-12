# Release QA — 13 November 2026

Sol validation of the frozen completed homepage and 16 current product details. The user explicitly authorized publishing this completed work; root handles source/package/publication. This QA agent did not push, upload or publish. Older catalogue index and older-only prototype routes remain in source and must be excluded from the release artifact by root.

## Passed

- `npm run typecheck` and `git diff --check`.
- Existing Chrome/Puppeteer browser checks on the owned preview, without new dependencies: five Featured paints, all 16 current product links reached through surface filters, no detached homepage studio, phone/email links retained.
- All 16 current detail routes returned 200 and showed their current product name/series, one prepared-room scene, header cart, disabled Upload your photo / Coming soon, five related paints and loaded related artwork. Current source artwork paths exist, including both Semi Plastic Emulsion and Wall Putty variants and Hydra-Matt/Eko Shade.
- Epoxy: direct query/hash colour, valid six-digit HEX updates preview immediately without Apply; selected HEX agrees with rendered-wall data; before/after; saving/reload; invalid draft error/focus; duplicate cart additions merge; different colours stay separate; same-product cart colour link reloads correct selection.
- Clima Shield: cart persists from Epoxy and refresh; 99-per-colour limit; zero quantity clamps to one on actual blur; keyboard arrow/End product tabs; technical PDF returns 200 with `%PDF-` signature; malformed/duplicate stored cart entries sanitize; removing last item shows empty state.
- Homepage and Clima Shield geometry at 320, 390, 768, 1024 and 1440px: no document overflow. Prepared room is left of summary on desktop and stacked above it on mobile.
- No page errors and no non-GET/HEAD requests during the completed main browser sequence.

Screenshots: `/private/tmp/ekotint-release-home-1440.png`, `/private/tmp/ekotint-release-product-1440.png`, `/private/tmp/ekotint-release-product-390.png`. Root reviewed desktop/mobile captures. A focused follow-up scrolled the related section into view at 390px and confirmed all five images complete with positive natural width; the initial full-page mobile capture preceded lazy loading. Follow-up screenshot: `/private/tmp/ekotint-release-related-390.png`; image results: `/private/tmp/ekotint-release-mobile-related.json`. Main machine results: `/private/tmp/ekotint-release-qa-results.json`.

## Limits

The optional storage-denial harness did not reach its expected saved-status assertion and is not recorded as passed. This does not establish a source defect; normal session storage and save/reload were exercised successfully. Enquiry submission/delivery, real upload/SAM, orders/payment, real prices/packs/shade compatibility, genuine review evidence and legacy prototype functionality are not established by this QA. Scene before/after changes were exercised; no physical-colour accuracy is claimed.

Two initial harness assertions were corrected: the homepage has surface filters rather than an All products filter; synthetic quantity input must focus before testing blur. These were test-harness errors, with no app source change.

## Build and preview checkpoint

`npm run build` (`next build --webpack`) passed: compilation, TypeScript and static generation completed, 23/23 generation tasks. `out/` is fresh and all 16 current product directories contain their current detail HTML. No app source edits were needed during this QA.

The full source also generates three older-only detail directories: `gloss-enamel`, `semi-plastic-emulsion-2`, `wall-putty-2`. Root should exclude these from the release copy, plus the five catalogue-index files directly under `out/products/`: `index.html`, `index.txt`, `__next._full.txt`, `__next._tree.txt`, `__next.products.__PAGE__.txt`. Preserve all files within the 16 current product directories, including `index.html`, `index.txt`, `__next._full.txt`, `__next._tree.txt`, `__next.products.$d$slug.__PAGE__.txt`.

Owned preview PID 41087 on 127.0.0.1:3023 was stopped for the build to avoid `.next` conflicts, then `npm run dev` was restarted in tool session 81868, listener PID 70678. Unrelated port 3000 was untouched. Root owns publication and live verification.
