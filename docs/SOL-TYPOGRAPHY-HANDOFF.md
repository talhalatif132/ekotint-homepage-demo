# Sol handoff — homepage typography comparison

12 November 2026. Read `AGENTS.md`, `EKOTINT-PROJECT-HANDOVER.md`, `TYPOGRAPHY-REVIEW.md` and relevant installed Next.js guides. Preserve local changes. No push, Site upload or publication; public version 16 remains unchanged.

The CEO's **02:37:31** request is to compare a professional alternative and revert if worse. The user's **“ok do that”** authorizes this local implementation. Astra has not run tests, typecheck, browser QA or build; Sol owns validation/focused fixes without redesign.

## Implemented comparison

- Scoped `src/app/typography.css` uses `.typography-refined` on the homepage wrapper and portalled dialogs: existing Manrope for body/display, fewer repeated italics, consistent 600 headings and readable responsive body/hints. No new fonts/dependencies or global catalogue restyle.
- Original CSS/Cormorant remain available. `HomeTypographyComparison.tsx` offers Refined/Original, defaults to Refined and does not persist the mode.
- The compact bottom-right comparison bar is gated by `process.env.NODE_ENV === "development"` and hidden while modals/mobile menu are open. The production UI must not expose review controls. Original removes the scoped refinement class, restoring pre-task type styles.

## Focused validation

1. Run `npm run typecheck`, `git diff --check` and `npm run build`; fix actual defects. Use Ekotint's preview on port 3023, avoiding the unrelated service on 3000. Restore the owned local preview if stopped for the build.
2. Compare Refined/Original at **320, 390, 768, 1024 and 1440px**, plus **200% text/zoom**. Check nav/header, hero title and CTAs, section hierarchy, long product names, price/action rows, pack note, palette labels, studio controls, review quotations, advice/FAQ and footer. Look for clipped text, horizontal overflow, broken word wraps, excessive gaps or cramped line height. Original mode should restore the previous typography without changing the underlying layout/data/functionality.
3. Check the comparison controls' keyboard/focus/pressed states and temporary mode switching. Ensure the bar covers no important content or actions at top/bottom/mobile viewports; it must hide for modals/mobile menu and return afterward. Confirm reopening/reloading does not promise persistent choice.
4. Open **search, saved-colour and enquiry dialogs** in both modes; confirm the portalled wrappers receive the active typography. Check long result names, saved ideas, fields, validation text, optional preferred-colour picker, ready summary/call/edit actions, focus containment and close behaviour. Do not add new type rules to unrelated catalogue pages to fix a homepage issue.
5. Serve the production export locally as appropriate and confirm the rendered UI contains no comparison bar/review controls. A control name remaining in bundled source is not itself a rendered production UI defect. Verify default refined typography remains coherent without relying on the dev-only control.
6. Recheck focused existing flows affected by text layout: hero controls/autoplay, palette/studio selection, disabled upload, product/enquiry actions and review navigation. Do not change their semantics, reintroduce demo-status labels, enable services/upload or restore the removed inspiration gallery. Existing pending handoffs remain applicable where unrun.
7. Record results/limitations in the handover and keep the local comparison available for user review. Do not push, upload or publish.

Final choice of Refined/Original remains with the user after local review. Actual prices/packs, approved customer content/portraits, product-shade mapping and real enquiry service remain pending; typography work does not settle them.
