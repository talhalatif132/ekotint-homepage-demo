# Pack sizes — focused Sol QA

13 November2026. Exact-source typecheck, git diff whitespace check and webpack production build pass (23/23 static pages). One bounded existing Chrome/Puppeteer run against preview3023; no app edits/dependencies/server stops/port3000 actions/publication.

Clima Shield at1440×900 and390×900: exactly three native radio options1 L/4 L/16 L under unchanged PKR3,450 price. No old pack-placeholder next to price; no page horizontal overflow. Selected background computes rgb(243,237,247). Valid URL pack4 restores4; native ArrowRight selects16. Missing/invalid999 pack defaults1. WaterMatt also renders three options.

Meaningful session-cart checks passed:

- Same ClimaShield/HEX#AABBCC with1/4/16 creates three separate rows. Adding4 again merges only4L to quantity2.
- Removing4L leaves1L/16L. Actual cart links carry pack and colour/name. Following16L link restores selected16 and same colour; session rows persist after navigation/reload.
- Stored legacy item without pack remains “Pack not selected”. Explicit stored pack3 is omitted from rendered cart. A subsequent valid write persists only sanitized rows.
- Stored1L quantity99 rejects another addition without increasing it; same product/colour4L still accepts quantity1. Boundary is per pack.
- No browser page errors. No size-based price multiplier introduced; same illustrative unit amount remains.

Screenshots after instant scroll, image decode, double animation frame and400ms paint settling: `/private/tmp/pack-sizes-1440.png`, `/private/tmp/pack-sizes-390.png`. Root visually inspected both: price/three options/checked and keyboard focus styling fit clearly; user review remains. Evidence `/private/tmp/pack-qa.json`; script `/private/tmp/pack-qa.cjs` (assertions).

Limits: focused native keyboard ArrowRight and radio selection checked, not a full screen-reader/cart accessibility audit. No broad hero/strip regression, real order/payment or manufacturer availability validation. Legacy invalid input remains in raw session storage until a valid cart mutation writes sanitized state; it is never rendered/used as a valid row. Real pack availability and per-size prices remain pending internally. Local only; fresh approval required before publishing.
