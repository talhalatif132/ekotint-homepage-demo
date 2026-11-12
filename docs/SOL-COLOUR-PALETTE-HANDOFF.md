# Sol handoff — colour families and brand-derived shades

12 November 2026. Read AGENTS.md, the newest checkpoint in EKOTINT-PROJECT-HANDOVER.md and COLOUR-PALETTE-REFERENCES.md. Preserve all existing local changes. This is a focused QA/build handoff; do not redesign, push, upload or publish.

## UI implementation complete

- Tabs: **Purples, Neutrals, Blues, Lavender, Magenta, Greens, Earth tones**. The user rejected a separate Ekotint colours tab and explicitly requested only four Blues.
- Four visible shades per family: 28 total. Each brand family has the exact existing Blue/Lavender/Magenta base plus three illustrative tonal variants. Original Blues no longer appear in palette/search, while the other original families are unchanged.
- Original shades[] and three-item brandShades ordering are preserved for index-based hero, default and room favourites. Shared brandShades metadata maps to Blues/Lavender/Magenta; the existing studio Ekotint colours row remains.
- paletteShades supplies visible cards and search (28); knownShades adds the four legacy Blues (32) for legacy saved names, URL and custom HEX recognition. Object-form favourites remain accepted even if their older family labels differ. No storage wipe/migration.
- Header menu uses named familySwatches, covering all seven tabs. Original arched card styling, four-column desktop/two-column mobile grid, save and Preview room controls remain. No special three-card brand-grid CSS remains.
- Files: src/app/page.tsx; documentation records context/provenance. Any unrelated diff in homepage.css belongs to earlier work and must be preserved; this task's temporary brand-grid override was removed.
- CEO **02:24:18** motivates additional tabs and colour clarity; **02:25:52** provides palette-to-preview context. The user's corrections determine exact tab order and four-Blue limit. Tones are illustrative, not approved product shades. See references doc for the official Benjamin Moore text-only reference and limits.

## Validation for Sol (not run in this UI pass)

1. Run npm run typecheck, git diff --check and npm run build; fix only actual focused defects. Preserve the local-only boundary. Restore Ekotint preview on port 3023 if stopped; avoid Shipping on 3000.
2. Check seven tabs in exact order. Every family shows exactly four cards; Blues must not show its four old generic cards or a second row. Check header-menu family selection/swatches. Ensure no separate Ekotint colours main tab remains; the studio row should remain.
3. Verify exact base HEX and tonal values against the references doc. Select cards by pointer and keyboard; inspect name, HEX, picker, wall preview, before/after, scroll position and selected/save states. Check custom HEX, URL ?colour=2D56A4 / 816FB0 / B14E9B and old Blue Hour ?colour=788C9C recognition.
4. Save/reload/remove a base colour, tonal colour and legacy Blue Hour using both supported older string-name and object storage representations. Confirm no duplicate HEX/names in visible/known lists and no lost custom favourites.
5. Search Ekotint, Lavender, Magenta, brand names and HEX. Visible family search should expose its four shades. Known legacy Blues remain available via existing saved/studio/HEX paths without reappearing in the visible palette/search.
6. Review at 320, 390, 768, 1100 and 1440px: tab wrapping/scroll access, four-card layout, long names, save targets, focus, overflow and current room/hero defaults. Confirm original inspiration, hero order/autoplay, studio favourites, pricing/reviews and disabled Explore all products are preserved.
7. Record results/limitations in this handover and shared project handover. Earlier hero/pricing/review checks remain in SOL-HERO-BRAND-HANDOFF.md and SOL-PRICING-TRUST-HANDOFF.md; avoid repeating already-completed checks unnecessarily.

No tests, typecheck, browser QA or production build were run in the UI implementation pass. No publication. Actual prices/packs, approved reviews and product-shade compatibility remain pending under earlier handoffs.
