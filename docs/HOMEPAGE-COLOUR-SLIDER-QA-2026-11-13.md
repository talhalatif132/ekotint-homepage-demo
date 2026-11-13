# Homepage colour slider — Sol QA, 13 November 2026

Local-only validation on the existing `http://127.0.0.1:3023` preview. No publication approval for this new work; no build, upload, deployment or source change performed. Port 3000 was untouched. This separate report avoids conflicting with the handoff being prepared by root.

`npm run typecheck` passed.

Focused existing Chrome/Puppeteer checks passed:

- Advice/FAQ section and `#advice` links absent from the rendered homepage; colour section is the product section’s immediate next sibling.
- Interior has 16 colour ideas, Exterior 13, with no shared HEX values. Soft Vanilla is `#FCEEDE`. These are illustrative sets, not confirmed shade availability.
- Interior chooser cycles Water Matt, Hydra-Matt, Assez Semi Plastic Emulsion and Premium Semi Plastic Emulsion. Exterior cycles Clima Shield and Weather Paint and uses `/images/premium-exterior.webp` as a static original exterior image.
- Save updates its pressed state; Escape closes the chooser and returns focus to the colour choice. Header Greens filter switches to Exterior; choosing Interior resets the family filter and restores its 16 colours.
- At 1440 and 390px, both slider arrow centres were within 2px vertically of the colour-disc centre after render/resize. Next/previous move the row. Native touch input moved the mobile scroll row. No document horizontal overflow was observed for the tested palette/chooser views.
- Separate narrow Soft Vanilla check confirmed URL `.../products/water-matt/?colour=FCEEDE&colourName=Soft+Vanilla`, then followed the actual chooser link and verified the product wall colour `#FCEEDE` and selected name `Soft Vanilla`.

The main sequence recorded no page errors before its last URL assertion. That assertion was not counted as passed: it ran directly after a synthetic swipe/reset/open sequence and differed from the expected URL. The focused follow-up independently confirmed the actual Soft Vanilla link and arriving preview without source edits. No full product-route suite or production build was repeated.

Local captures for root review:

- `/private/tmp/ekotint-local-palette-1440.png`
- `/private/tmp/ekotint-local-palette-390.png`
- `/private/tmp/ekotint-local-chooser-1440.png`
- `/private/tmp/ekotint-local-chooser-390.png`

Not established by this run: manufacturer shade compatibility, physical paint accuracy, real upload/SAM, order/payment or enquiry delivery. The published Vercel baseline was not changed.
