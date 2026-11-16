# Sliders/modal QA — 15 November 2026

Local only; Sol changed no application source. Final typecheck, whitespace check and webpack build PASS, exit0;23/23 static pages.

Brighto runtime reference: product Swipers autoplay.enabled=false and product Slick autoplay=false remained stationary; lower shades_int/shades_ext autoplay=true/2000ms advanced3→12 in eight seconds. Hero excluded from inference. Evidence `/private/tmp/brighto-slider-inspect.json`.

Focused initial timing harness passed before its premature geometry assertion: in-view Interior1440 advanced twice with pointer resting over discs;390 advanced; Exterior switch reset0 and advanced; end wrapped0; reduced motion and keyboard focus each held scroll position over5.4seconds. Products' carousel source unchanged/manual. These timing assertions completed but their numerical snapshots were not persisted before the later harness failure; no invented values claimed.

Settled geometry run PASS exit0: Interior4results and Exterior2results at1440x900,1366x768,390x844,320x640 all have EXACT0px horizontal/vertical centre error, transform none, no document or panel horizontal overflow. Short/mobile cases expose internal vertical scrolling; desktop balanced content. Escape dismissed each. Geometry opening used direct DOM button activation to avoid moving autoplay targets; it is not a pointer-flow assertion. Evidence `/private/tmp/sliders-modal-geometry.json` and `/private/tmp/sliders-modal-qa.json`; captures `/private/tmp/chooser-centred-exterior.png`, `/private/tmp/chooser-centred-mobile.png`.

Retained View paint click arrived Water Matt with exact Soft Vanilla/FCEEDE query and no stale portal. Immediate wall snapshot was still default #A493AE before the query effect settled, so final settled wall-colour carry is not asserted by this run; prior focused chooser-navigation QA separately passed it. No further retries.

Harness limits: first geometry assertion measured existing modal-entry animation before settling; corrected350ms version yields exact centre. A subsequent coordinate click missed the moving rail and timed out; final layout-only opening used DOM activation. Overlay pause, offscreen/hidden-tab/pointer-down/nonoverflow/family guards, manual-arrow dwell reset, explicit Close/backdrop/focus return and mobile scroll-to-last-action access were source-reviewed or covered historically, not separately passed here. No broad cart/hero/reviews test, live publication, push, port3000 or external services. No application defect established by the harness timing failures.

## Two-shade movement and review-link deletion — final delta

Final typecheck/whitespace/webpack build PASS exit0,23/23. Hydration verified through actual Original comparison toggle/class change, then actual surface state changes. Interior and Exterior1440: measured pitch193.921875px; both autoplay and Next arrow moved388px, equal to two pitches within rounding.390 reduced-motion manual arrow moved267px at134.046875px pitch (scroll-snap/rounding within3px), no page overflow. Evidence `/private/tmp/two-shades-qa.json`. No full guard matrix repeated; previous one-item cadence evidence is superseded by this explicit two-shade request.

Static homepage confirms three removed review-link labels and customer-trust-links absent; nine reviews and reviews→contact order retained. Results also appended to SOL-REVIEW-LINKS-HANDOFF.md. The restored old Exterior popup was not exercised in this completed browser process: optional harness amendment landed after process startup; earlier runtime-capture limitation remains. No extra browser run for that optional check.
