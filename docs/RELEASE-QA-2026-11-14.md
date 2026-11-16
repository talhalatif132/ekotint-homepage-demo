# Release QA — 14 November 2026

User explicitly authorised Vercel deployment; root owns packaging/publication. Sol performed read-only output validation, no deploy/push/app edits or port3000 action. Reused latest successful address CSS build; no application edits since it, so no redundant rebuild. Build ID `h7iorZvNPGIoborSKRRIh`.

Current out/ inspection PASS: homepage and all16current products exist, contain index/follow and no blocking robots/googlebot/bingbot metadata. Product Reviews trigger/panel absent. All directly referenced local scripts/CSS/images/fonts/PDF resolve to existing files after URL decoding; supplied PDF254374bytes. Latest nav15px/#39313e and address450/#62536a styles present. Compiled homepage chunk `app/page-8e1ee4caeb9d50d6.js` chooser-paint-card Link has href/children and no synchronous onClick close, preserving the validated direct-navigation fix.

Evidence `/private/tmp/release-qa-2026-11-14.json`; checker `/private/tmp/release-qa.py`. Source/config crawler override scan was already clean in INDEXING-METADATA-QA. Framework404 noindex is permitted. This does not promise indexing or an SEO score.

Filtered artifact route exclusion and production smoke pending root paths/URL. The unfiltered out/ includes preserved local legacy routes and must not be deployed directly. Release must omit catalogue index and older-only detail prototypes. No broad matrix repeat; earlier task reports retain runtime evidence/limits. Existing illustrative prices, fictional review content and deferred enquiry/checkout services are unchanged by this approved release.

## Filtered artifact gate — PASS

Inspected `.sites-runtime/vercel-release-2026-11-14` against current source IDs: exactly16product directories, no products-root files/catalogue index, and none of the three older-only detail directories.215files. All17approved HTML pages contain index/follow without blocking crawler metadata; every directly referenced local script/style/image/font/PDF remains present. Initial checker invocation had a syntax typo; corrected read-only check passed. Source and original out/ untouched.

Artifact matches metadata build ID `h7iorZvNPGIoborSKRRIh`; exclusion manifest `.sites-runtime/vercel-release-2026-11-14-source.json` records omitted local routes and unreferenced PNGs. Artifact ready for root's authorised deployment. Production smoke remains pending URL.

## Public production smoke — incomplete

Deployment reported by root: public alias `https://ekotint-paints-demo.vercel.app`, immutable `https://ekotint-paints-demo-fi3rgbkj1-talha-1d53.vercel.app`, deployment `dpl_HJxcS3z8BTcAMMZW1JzLvMESrcrC`.

Unauthenticated Chrome first attempt confirmed homepage HTTP200, index/follow with no X-Robots blocking header, latest nav600/address450 styles and opening Interior chooser. It timed out waiting for exact product URL/painted wall after View paint (20s), without preserving actual destination diagnostics; cannot classify that as an app defect or claim the journey passed. One retry relaxed canonical trailing-slash matching, but homepage networkidle2 itself timed out30s before additional assertions. No bypass/protection changes, calls/emails/forms or source/deployment edits.

Live cart/HEX/mobile/all16route/excluded404 checks therefore remain UNRUN. Local output/artifact gates and focused predeployment runtime checks above remain passed. Public smoke is not signed off; root notified of exact limits. No further repeated browser attempts pending.

## Final public HTTP release verification — PASS

Independent unauthenticated parallel HTTP matrix completed successfully: homepage plus all16current product routes return200, index/follow metadata and no X-Robots-Tag header. Catalogue index and all three older-only routes return404. Evidence `/private/tmp/release-http.json` (initial matrix), session74373 exit0.

Root independently confirmed public homepage bytes exactly equal the staged homepage: SHA256 `1a7787b8b18c45eac1d5dd16e3b787428c5d5a0767cf1d88406fbbfc41d8ee12`; evidence `/private/tmp/ekotint-production-home.html` and `/private/tmp/ekotint-production-home-headers.txt`. Deployment is READY at the public alias recorded above.

Full live browser journey remains inconclusive: network-idle timeout, followed by an early click before chooser hydration in the DOMContentLoaded diagnostic. Neither establishes an application defect; no successful complete live cart/mobile journey is claimed. Focused local runtime and filtered-artifact checks remain passed. Optional extra live RSC/PDF/hash checks were canceled on root instruction; they are not required for the passed release gate. No further verification or publication actions pending from Sol.

Cancellation timing note: optional HTTP session92812 had already completed with exit0 when termination was delivered. Its returned output includes public homepage hash matching root's value and representative PDF200/byte-match. No additional checks were launched or results required for release sign-off; saved `/private/tmp/release-http.json` may now contain the augmented run rather than the initial matrix. Session is closed.
