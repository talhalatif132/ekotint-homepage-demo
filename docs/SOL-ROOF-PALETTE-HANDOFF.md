# Sol handoff — Eko Shade rooftop colours

15 November 2026, Asia/Karachi. User supplied Eko Shade screenshot with Dusty Lilac selected and asked to check common rooftop colours and make them the defaults. This is a local-only palette correction, not publication approval.

Changed `HomeColourStudio.tsx` to export four roof preview ideas and `HomePaintProductView.tsx` to use them only when the scene is roof. White/#FFFFFF is the initial render and HEX default; Light Grey/#D3D5D4, Light Tan/#DED3BD and Tan/#C3AE8C complete the suggestions. All other products retain the existing nine ideas/default. Query colours, custom HEX, known-name lookup, saved ideas and cart colour context remain supported; no image, mask, transfer curve, layout, price or pack changes.

References checked 15 November via official search excerpts:

- https://www.gaf.com/en-us/document-library/documents/brochures-%26-literature/brochure__commercial_roofing_products_catalog_comgn295.pdf — GAF Diathon acrylic roof coating lists white, light grey, tan and light tan. This informs the four families, not an Ekotint formula or approval.
- https://documents.gaf.com/brochures-%26-literature/silicone-roof-coating-color-guide-comco299.pdf — standard silicone range includes white, tan, dark/light grey. Different chemistry; corroborating general roof-colour context only.
- https://henry.com/fileadmin/pdf/literature/Pro-Grade_988_Color_Program_Sell_Sheet_Double_142-3US-E295.pdf — official search excerpt lists white, grey and tan as standard roof-coating colours.

Screen HEX values are our approximations. Existing visible availability/physical-shade guidance remains; no official Eko Shade shade card or colour-specific heat performance was established. Earlier Henry custom-color flyer URL returned404 and energy.gov fetch failed; neither is used as supporting evidence. Current project handover/category notes were reread; no new competitor visual layout needed for this palette-only correction.

Root source review and `git diff --check` only; tests/build deliberately handed to Sol per AGENTS.md. Focused checks: bare Eko Shade route loads White with #FFFFFF in selected label/HEX/preview; exactly four neutral swatches; clicking Light Grey/Light Tan/Tan updates preview; explicit colour query still wins after effect; one save/cart check carries selected roof name/HEX; Interior default still Dusty Lilac with nine swatches; roof390px no overflow. Run typecheck/build once, preserve existing unrelated local work. No deployment or Git push.
