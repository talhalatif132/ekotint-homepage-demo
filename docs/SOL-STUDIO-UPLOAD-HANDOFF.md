# Sol handoff — disabled studio photo option

**12 November 2026. UI implementation is local only. No push or publication.**

Read `AGENTS.md`, `docs/EKOTINT-PROJECT-HANDOVER.md` and `docs/STUDIO-UPLOAD-REFERENCES.md` first. Preserve all existing local changes.

## Changed UI

A compact purple toolbar directly above the Colour Studio's existing room/controls identifies the prepared-room preview and displays **“Upload your room photo”** as disabled with **“Coming soon”**. The user requested only the visible disabled option now; future SAM integration remains pending. The CEO requested working own-photo upload at **02:19:45** and clear default-room/own-photo wording at **02:25:52**; this UI is a partial step toward that request.

## Focused validation

- Check toolbar readability, spacing and wrapping on desktop and narrow mobile widths; keep the room and nearby colour controls easy to reach.
- Confirm the upload button is semantically disabled, does not open a chooser or trigger an action, and its status remains understandable to assistive technology.
- Confirm there is no new file input, upload/network handling or SAM dependency.
- Check existing HEX, swatches, save and before/after controls and palette/hero links into the studio still work.
- The `custom-colour` anchor is now on the toolbar so direct links show the photo options above the preview. Check those links and sticky-header clearance; the upload icon extends the existing shared `Icon` component.
- Run the appropriate typecheck and production build. Fix defects without redesigning; update the shared handover with actual results.

Tests, typecheck, browser QA and build were **not run during this UI task**. Working own-photo upload, wall selection and SAM integration are deliberately pending, not Sol's scope in this handoff.

## Copy/paste prompt

```text
Read AGENTS.md, docs/EKOTINT-PROJECT-HANDOVER.md and
docs/SOL-STUDIO-UPLOAD-HANDOFF.md. Validate the new Colour
Studio toolbar on desktop/mobile, including the disabled
Upload your room photo option and existing studio controls.
Run typecheck/build, fix defects without redesigning, and
update the handover. Upload/SAM integration remains pending.
Preserve local changes. Do not push or publish.
```
