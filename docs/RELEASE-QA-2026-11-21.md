# Vercel release QA — 21 November 2026, Asia/Karachi

User approval: “plz deploy the code on vercel”. Scope: current reviewed working tree, including the estimator and FAQ, homepage and 16 current product pages. No UI redesign or GitHub push in this task.

## Completed pre-publication checks

- `npm run typecheck`, `git diff --check`, `npm run build` passed. Build generated 25 static pages including local-only legacy routes.
- Filtered artifact contains 19 public content pages: home, FAQ, estimator and 16 current products. Catalogue index and three older-only product pages omitted; originals retained. No catch-all rewrite.
- Browser checked the exact filtered static export at port3031. Water Matt10L query prefill yielded example PKR28,500. One coat showed1,292–1,722sqft, two coats646–861sqft; cost unchanged. Mobile390/320 had no horizontal overflow; FAQ disclosure opened at390; product page loaded. No page JS errors. Browser evidence: `/private/tmp/ekotint-release-qa-nov21.json`; screenshot `/private/tmp/ekotint-release-quote-1440.png` inspected.
- This focused smoke check does not repeat the full historical slider/cart/cross-browser suite. Prices remain illustrative; coverage/source and commercial limits remain in the estimator handoff. Email enquiry opens the visitor’s mail app; no new backend delivery integration.

## Fingerprints

Build ID: `LMFhNhk3PUkx1e38N7Fc7`

Source SHA256: `4dd1492961617c1a18e095500bb6eb2e0fc3d26cc52768823f20cb97855c252f`

Artifact SHA256: `45efeca24a8df9eedde53dc176abc0ae0e89fa143b5c8de446ad3c61f298dfa8`

234 files,46.26MiB. Standalone upload copy excludes Git metadata and credentials.

## Publication

READY / production: `dpl_2z2t5aMtHJY3gnsfbUziwPxJauT8`.

- Production: https://ekotint-paints-demo.vercel.app
- Immutable deployment: https://ekotint-paints-demo-ify4oxkgl-talha-1d53.vercel.app
- Existing project/team retained. CLI65.15.0 installed in temporary cache; existing account authenticated. Static artifact uploaded outside Git ancestry, preserving source history/identity. No GitHub push or original Sites publication.
- Unauthenticated production verification:19content URLs200,4excluded URLs404,5scene/PDF assets200. Homepage, estimator and FAQ bytes exactly match the artifact. All19pages allow indexing/following, with no blocking robots header.
- Live Chrome repeated query prefill/sample total, one/two coat coverage and unchanged cost,390/320quote fit,390FAQ disclosure and product-page load. No JS errors. This does not claim a full slider/cart/cross-browser regression pass.
- Prior publication metadata preserved at `.sites-runtime/vercel-publication-before-2026-11-21.json`. Current metadata and HTTP evidence saved in `.sites-runtime/vercel-publication.json` and `vercel-live-check-2026-11-21.json`.
