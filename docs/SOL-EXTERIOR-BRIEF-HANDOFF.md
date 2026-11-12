# Sol handoff — exterior brief colour context

**Superseded workflow and forced colour, 12 November 2026:** the user subsequently chose enquiry-demo UI, then approved optional Preferred colour/Change colour/Help me choose. Follow `SOL-ENQUIRY-UI-HANDOFF.md` for current checks. Forced Exterior Yellow `#E9D54B` and automatic initial-studio defaults are removed; only deliberate colour choices carry into a new enquiry, with form changes isolated from global studio state. There is no enquiry storage/download. **Do not run the old forced-yellow/save/download checklist below as current requirements or restore that flow.** History is preserved; deferred catalogue prototypes remain outside scope.

12 November 2026. Read `AGENTS.md`, `EKOTINT-PROJECT-HANDOVER.md`, the exterior-brief section of `HERO-BRAND-REFERENCES.md` and relevant installed Next.js guides. Preserve existing local changes. No push, Site upload or publication; public version 16 remains unchanged.

The user requested UI work from Astra and tests/build from Sol. No tests, typecheck, browser QA or build were run for this change. Validate the implementation and fix focused defects without redesigning.

## Change and rationale

The user clarified that “Your current colour” in Eko Shade's brief should show the exterior house yellow; the photograph itself must remain unchanged. A derived `briefColour` uses **Exterior Yellow / `#E9D54B` / Exterior inspiration** when the selected product category is Exterior or Roof coating. Modal colour box and saved/downloaded brief share that value. Other selected products and generic briefs continue using the studio's current colour; global selection is not overwritten.

The HEX is a representative pixel average from the existing house asset, not a confirmed manufactured paint/shade code. CEO **02:16:35** and **02:32:55** support colour/product context clarity, while this particular association follows the user's clarification. Reference/provenance limits are in the hero reference doc. No image was repainted. Do not add demo-status labels to the homepage or modal; keep implementation/provisional-content notes internal per the user's existing preference.

## Focused validation

1. Run `npm run typecheck`, `git diff --check` and `npm run build`; fix actual defects. Use the existing Ekotint preview on port 3023 and avoid the unrelated service on 3000. If the owned dev process is stopped for build, restore it afterward.
2. Select a distinctive studio HEX first. Open Eko Shade through the Roof coating card and exterior promotional entry; confirm “Your current colour” shows Exterior Yellow and `#E9D54B`, with the correct yellow swatch. Check Clima Shield and Weather's current Exterior product entries receive the same brief context. Verify the selected product's name, series, project type and notes remain correct for each entry rather than being replaced by Eko Shade metadata.
3. Close each exterior/roof brief and confirm the studio still has its original HEX, name, preview and saved-colour state. Exercise before/after view without changing that global colour. Open an Interior product and a generic project brief next; both must use the original current studio selection, not leak the exterior preset. Check another non-exterior product as well.
4. Save/download the exterior brief and compare modal colour, in-memory saved text, `ekotint-project-brief` localStorage entry and downloaded text: colour name and HEX must consistently use the derived brief colour while retaining the correct product/series, project and notes. The existing text format does not store the colour family; do not add fields merely for this check. Repeat with a non-exterior/generic brief to verify it records the studio colour. Check normal reopen/new-brief flow does not retain the wrong product's colour context. Preserve existing browser-storage failure handling if exercised.
5. Review at desktop and mobile sizes for colour-box/name/HEX wrapping, modal focus/close behaviour and unchanged house imagery. Preserve the Roof coating image-left/details-right desktop layout/mobile stack, existing price/action polish, pack-size note and label-removal decisions.
6. Confirm saving remains browser-local and downloadable, with no enquiry sent or new outbound operation. This change does not implement product-specific shade availability, actual prices/packs or a real enquiry endpoint. Record results/limits in the handover and keep the local preview ready; do not publish.

## Pending inputs

Client-approved product-colour compatibility and shade codes, actual packs/prices, genuine review content/portraits and real enquiry integration remain outstanding. This exterior inspiration default does not resolve those inputs. Earlier focused handoffs remain applicable where still unrun.
