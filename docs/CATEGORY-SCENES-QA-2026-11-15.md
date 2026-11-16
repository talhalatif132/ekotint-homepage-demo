# Category scenes QA — 15 November 2026

Local only; no application edits, push/deploy or port3000 actions. Final typecheck, whitespace check and webpack build PASS, exit0;23/23 static pages. Build started before root's later capture-first instruction; no further changes during checks.

Focused Chrome run PASS exit0; `/private/tmp/category-scenes-qa.json`.

All16routes mapped and decoded1536x1024 scene assets: Interior4 unchanged hero-room; Exterior2 facade; Roof1 rooftop; metal3 gate; Varnish1 static timber; Hardener/Oxide2 static system; Primer/putties3 prepared-wall inspiration. Static scenes omit painted overlay; all others carry settled explicit queryHEX #AABBCC. No page overflow at1440 across all routes, or Clima390/320.

Clima Shield/Eko Shade/Epoxy: before sets overlay opacity0; valid customHEX #816FB0 repaints and resets before opacity1. Homepage Exterior chooser uses exterior scene; View paint reaches Clima Shield with settled Chalk White/#EEEAE1, and4L cart preserves that colour/name/pack.

Captures `/private/tmp/category-clima-shield-1440.png`, `category-eko-shade-1440.png`, `category-epoxy-1440.png`, `category-exterior-390.png`. Sol inspected metal and roof: gate handles/garden/sky and rooftop pavilion/door/planting stay natural; no obvious mask defect. Root owns final crop/mask acceptance. Captures show supplied QA custom colour, not a manufactured shade claim.

Limits: no separate swatch/invalidHEX assertions, static timber/system custom-control interaction, upload wording/disabled-state assertion or save-colour interaction repeated; source reviewed for these. Roof mobile/320 and everyproduct×width not tested. Visual review is representative, not pixel-perfect segmentation proof. Asset decode verifies local delivery, not external service/backend functionality. Existing interior image/path/mask retained by source inspection; no hero comparison screenshot. No broad slider/navigation/regression suite.

## Outdoor lightness correction checkpoint

After user questioned pale/white colour application, balanced new-scene response checked with settled #816FB0 facade/roof and #2D56A4 gate. Browser clean exit0; captures `/private/tmp/balanced-clima-shield-1440.png`, `balanced-eko-shade-1440.png`, `balanced-epoxy-1440.png`, `balanced-exterior-390.png`. Sol inspected facade/gate: saturated target hue, retained shadows; sky/doors/handles/greenery unchanged. No obvious mask defect. Typecheck/whitespace pass; webpack built23/23 pages. Interior/preparation curves and source assets/masks untouched by this correction. No broad flow repeat.

The user subsequently rejected rooftop realism as cartoonish; roof capture above is therefore a superseded checkpoint awaiting replacement asset. Root is replacing the roof photo only. Final replacement-image QA/build remain pending root readiness; no further lightness retries.

## Final v3 checkpoint

Supersedes v2 roof/gate realism and Epoxy gate mapping above. Current mapping: Interior4, Exterior2, Roof1, enamel Metal2, Epoxy coating-wall1, Wood1, static System2, Preparation3. Epoxy uses original approved room/mask/curve; only enamels recolour gate. New roof-v3/metal-v3 images/masks; outdoors gain bounded.65–1.0 without white highlight blend.

Final typecheck/whitespace/webpack build PASS exit0,23/23 pages. Bounded browser clean exit0: roof Soft Vanilla#FCEEDE and Chalk White#EEEAE1, Eko Gleam darkblue#2D56A4 and pale#FCEEDE, Epoxy coating#816FB0, Exterior#FCEEDE all settle to exact queryHEX, correct scene and decoded image. No desktop overflow.390roof and320enamel screenshots captured, not an exhaustive mobile interaction regression.

Final captures `/private/tmp/v3-eko-shade-FCEEDE-1440.png`, `v3-eko-shade-EEEAE1-1440.png`, `v3-eko-gleam-2D56A4-1440.png`, `v3-eko-gleam-FCEEDE-1440.png`, `v3-epoxy-816FB0-1440.png`, `v3-clima-shield-FCEEDE-1440.png`, `v3-eko-shade-mobile.png`, `v3-eko-gleam-mobile.png`. Evidence `/private/tmp/v3-scenes-qa.json`. Sol inspected vanilla roof and blue enamel: floor grain/shadows retained, pavilion/door/handles/greenery natural, no obvious mask defect. Root owns final crop/realism acceptance. No repeated16route/cart/chooser/slider matrix or further app changes/publication.

## Exterior chooser image restoration — final source/build

User requested original picture in Exterior modal. Source now restores static `/images/premium-exterior.webp`, Exterior inspiration label and original inspiration note only in chooser; product scenes remain v3. Final whitespace/webpack build PASS exit0,23/23 pages (framework TypeScript passed).

Small browser image/caption capture remains UNVERIFIED: initial back-to-back surface/shade activation never opened chooser; one corrected attempt explicitly awaited Exterior aria-pressed=true but that state did not change within30seconds after activation. No image/caption assertion or new capture was reached. Could be hydration/local interaction failure; not classified as proof of an image defect. No further retries; root notified. Prior v3 product captures/build remain accepted. No push/deploy.
