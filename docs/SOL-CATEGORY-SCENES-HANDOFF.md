# Sol handoff — category scenes

15November2026. Read AGENTS.md/latest handover and CATEGORY-SCENE-REFERENCES-2026-11-15.md. Astra/root handles UI; Sol checks/build. Local3023 only, port3000 untouched, no push/deploy.

Settled implementation: new home-preview-scenes metadata/masks and product mapping, shared HomeColourStudio accepts a scene, HomePaintProductView uses matching labels/help/note and upload context, homepage Exterior chooser now shows/recolours exterior facade. Four new1536x1024 premium courtyard/roof/gate/timber WebPs and preserved masters. Interior/hero images unchanged. Static timber/system scenes keep project-colour controls but do not misrepresent opaque colour application. Primer/putties retain beautiful room with explicit finishing-coat wording.

Focused validation:

1. Typecheck, whitespace and one final webpack build after source settles. No new suite/dependency.
2. All16 product routes: expected scene mapping/image HTTP+decoded dimensions; Exterior2→facade, Roof1→roof, Epoxy/Gleam/Gloss3→metal, Varnish→wood/static, Hardener/Oxide2→system/static, Primer/putties3→prepared-wall, Interior4→unchanged room. Verify no accidental old sofa on exterior/roof/metal/wood.
3. At1440x900 representative Interior, Clima Shield, Eko Shade, Epoxy, Varnish plus390/320 representative exterior/roof: no horizontal overflow or layout regression, visible main subject, both columns/controls usable. Capture desktop exterior/roof/metal and one mobile for root inspection. Use true screenshot rendering to assess colour-mask edges (wood/handles/sky/greenery untouched). If obvious bad mask/colour/crop, report to root for UI fix. Do not silently edit source.
4. On exterior/roof/metal, choose a swatch + valid custom HEX; confirm mask image colour data and visual change, before toggle, colour-change resets before. Static varnish/system stays natural, controls say project idea; invalid HEX keeps last valid render. Test one product query arrival after waiting for the client effect (last run immediate snapshot was premature), selected-colour save/cart still carry context, one lightweight cart check only. Original Interior rendering source/path/table remains unchanged.
5. Homepage Exterior colour→chooser uses exterior scene, correct colour and direct View paint retains chooser until route commit; Interior uses room. One settled context flow sufficient, do not repeat slider timing matrices. Existing paused/autoplay logic is unchanged.
6. Upload remains disabled Coming soon, room/project wording follows scene. Product Reviews still hidden. No external mail/payment/upload service assertions.

Use existing Chrome/Puppeteer harness, explicit hydrated readiness, DOMContentLoaded rather than networkidle. Open layout-only popup via DOM if the automatic rail moves targets; state that limit. Keep timed checks bounded; write CATEGORY-SCENES-QA-2026-11-15.md with actual passes/captures/unrun limits. Report first-yield browser approval status promptly; no repeated optional harness expansion.

No client input blocks this task; compatibility/pricing/TDS/review/backend deferrals remain. Local review is required before publication.

## User lightness correction after initial pass

Initial checks/build passed as recorded in CATEGORY-SCENES-QA-2026-11-15.md. User then showed lavender Exterior and questioned the white/pale sunlight effect. Root added balanced light response only for new facade/roof/gate scenes, with base references .70/.71/.49 from source-image samples, bounded gain .65–1.08 and no white reflection blend. Interior/preparation curve and all assets/masks remain unchanged. Please only verify this delta: exterior and roof at #816FB0, one darker blue gate, correct masks/background preservation and representative mobile; capture for root. One final typecheck/whitespace/build after settled source. Do not repeat all16 routes, cart, chooser, static or slider checks; prior passes remain valid for unchanged behavior. Record final results/limits in same QA report. No publish/push.

Copy/paste Sol prompt: Read docs/SOL-CATEGORY-SCENES-HANDOFF.md. Check all16 scene mappings, focused exterior/roof/metal HEX masks and static timber/system, chooser arrival and responsive fit; typecheck/build. Keep local, no push or deployment.

## Final v3 correction — supersedes prior pending delta scope

User rejected saturated roof/gate as cartoonish, accepted interior/exterior, questioned Epoxy's gate association. Current final source: roof-v3.webp and metal-v3.webp with natural photographic styling and new masks, preserved v2 exterior/wood. Epoxy explicitly maps to coating scene using approved original room/mask/curve; enamels2 use new gate, static system2 new gate unchanged by colour. All16 current counts: Interior4, Exterior2, Roof1, Metal2, Coating-wall1, Wood1, System2, Preparation3. Before identifiers/renderer remain shared. Balanced outdoor curve now .65–1.0 bounded shadow gain (no highlight clipping); interior/preparation/coating unchanged. Read references/current prompts for reason, not stale v2-only statements above.

Only remaining delta QA: capture/check new Roof at Soft Vanilla and Chalk White (should retain cream/grey identity, floor grain/shadows, no flat white wipe), new Eko Gleam gate darkblue and a pale shade with handles/greenery intact, Epoxy restored room and controls, Exterior pale shade still fits/natural. One390 roof/320 enamel fit. Confirm changed assets decode; no need repeat unaffected16 routes/cart/chooser/slider. Root must inspect final captures before completion. One final typecheck/whitespace/webpack build after final app source. Update same QA report with final current mappings/captures and coverage limits. No source changes by Sol, no push/deploy.

## Last user correction — Exterior popup original photo

V3 checks/build passed and root accepted rooftop Soft Vanilla/enamel blue/Epoxy room captures. User then supplied new+old Exterior popup screenshots and instructed “for this model show the old pic”. Restored only Exterior chooser to static `/images/premium-exterior.webp`, original Exterior inspiration stage label/note. Interior chooser and current product scenes untouched. Direct links/onClose removal and centring remain. Please one focused popup image/decode/caption check and one final build/whitespace check; no new broad flows/type matrix necessary. Record final current source checkpoint. Local only.

Final checkpoint: restored-popup source/whitespace/build23/23 passed. Runtime photo capture remains unverified after bounded activation timeouts; see CATEGORY-SCENES-QA-2026-11-15.md. Later slider tests did hydrate/validate actual controls but did not retest popup image. Root accepted v3 roof/enamel/Epoxy captures; current source preserved. Roof palette question received an explanation only: supplied pack identifies water/heat-proof roof coating for exterior rooftop context;9colours remain generic illustrative ideas and confirmed Eko Shade shades are missing. No invented availability or ceiling-paint classification. Further changes require instruction; local only, no push/deploy.
