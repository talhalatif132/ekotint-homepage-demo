# Ekotint release checks — 15 November 2026

User explicitly requested: “now plz deploy on vercel”. Existing project/team, homepage plus16 current products; legacy catalogue and3 older-only detail routes remain excluded. All source/originals retained; no GitHub push.

Fresh typecheck, whitespace check and webpack build passed;23 static pages before filtering. Artifact `.sites-runtime/vercel-release-2026-11-15` contains221files/46.00MiB, build `FMZVEsP-xvBcWNOcDshMT`. Source SHA256 `6a5532fb4cc98bd888d367026863c1057b251a62bb90e4009f221113df9ca7f9`; artifact SHA256 `6755722a40d2f34f56d1c33917c7bdf6d5ebd78218ab55b446a56fe96fee1389`. Source fingerprint rechecked after packaging, all approved HTML local asset references resolve after URL decoding;4 preview WebPs and TDS included. RoofWhite/InteriorLilac defaults confirmed in export.

Focused Chrome browser checks against this exact artifact on temporary3024 passed:

- Eko Shade White/#FFFFFF default and exactly4neutral swatches; LightGrey updates painted roof and demo cart name/HEX; explicitTan query overrides default;390px has no page overflow.
- WaterMatt retains nine swatches and DustyLilac default.
- Hydrated homepage Interior/Exterior each advanced388px (two193.92px pitches) within2200ms observation after reset; configured idle delay1500ms.
- Exterior modal exact0px x/y centre error at1440×900; original static beige courtyard restored. ViewPaint navigated to ClimaShield with chosen shade query and dismissed portal after route commit.
- No page JavaScript errors in the focused run.

Evidence `/private/tmp/ekotint-release-2026-11-15-local.json`; harness `/private/tmp/ekotint-release-2026-11-15.cjs`. First harness tried a development-only typography control absent from production; corrected to prove hydration via actual surface state. First asset scan did not decode escaped[slug] paths; corrected scanner passed. Neither established an app defect. No source edits after the passing build. Broad historical pause/visibility/keyboard/physical-device cases were not repeated. No actual email/payment/upload tested; existing demo content and manufacturer availability limits remain.

Public deployment results are recorded in `VERCEL-PUBLICATION-2026-11-15.md` once verified.

Final result: READY/production `dpl_J7y1R5S2Se1EAvYrsVkJbTo8iE94`. Unauthenticated live HTTP17approved routes200/index-follow,4excluded404,4sceneWebPs/TDS200; homepage byte-identical to artifact. Same focused browser harness PASSED against production including both slider movements388px/387.84px expected,0px modal-centre errors, roofcolour/cart/query/mobile and productnavigation; noJSerrors. Evidence `/private/tmp/ekotint-release-2026-11-15-live.json` and `.sites-runtime/vercel-live-check-2026-11-15.json`. Provider-blocked first attempt and identical standalone successful retry are documented in the publication record; no Git identity/history changes.
