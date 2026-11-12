# Product-first detail and room preview

13 November 2026. User-approved local UI work; integration details are finalized after source preparation. No publication approval.

## Current user direction and CEO context

The user explicitly requested removal of the entire homepage Colour Studio, including its heading/upload toolbar, and a product-first route: click a paint, open its detail page and preview colour there, using Brighto Plastic Emulsion as the reference. Generic homepage colour/studio paths must first establish product context rather than lead to a detached room editor. This supersedes earlier instructions to keep the homepage studio or simply adjust its landing offset.

After the interruption, the user further authorized **local cart UI** and specified **one top section**: sofa/room preview on the left; product, price, **one** colour/HEX chooser, quantity and Add to cart on the right. Description/shade-guide/TDS tabs belong below. This supersedes the draft pack-first overview plus a second lower studio/duplicate controls. No shipping policy, real order, payment or backend is supplied/authorized.

Reread the supplied CEO/user discussion:

- **02:16:35:** questions whether the selected/current colour applies to a product and why product clicks open a brief instead of the expected enquiry flow.
- **02:24:18:** asks whether browsing begins with products or generic colours and which product supports a chosen shade.
- **02:25:52:** asks how palette choices connect to the room, what scene is being edited, and how own-photo/prepared-room paths relate.
- **02:32:55 / 02:38:40:** favours Brighto's product → related choices → room preview relationship and specifically discusses Plastic Emulsion.

The latest user request authorizes the product-detail/preview interface now; it does not supply actual packs, prices or shade compatibility. The assistant read the recorded exchange and was not a participant in the original CEO/user conversation.

## Official reference, 13 November 2026

[Brighto Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion) is the user's explicit reference. Official text exposes product price, pack/quantity choices, description and TDS information; supplied screenshots inform the top-section/tab hierarchy. This supports product-linked choices and a compact information structure, **not verification of working recolouring** or the competitor's delivery/checkout implementation. Detailed extraction limits are finalized after the reference review. No competitor images, shade names/codes, commercial facts, copy or code are reused.

## Integration scope and remaining limits

The homepage studio is removed rather than hidden behind its former heading. Current homepage product records should open their own detail view; the **16 current records** take precedence over overlapping older prototype data, with older-only routes/content preserved as fallback. Product-first navigation must preserve the compact five-Featured product presentation, correct images/series, filters and other homepage work. The completed route/component/context checkpoint is recorded below.

`HomeColourStudio` and `HomePaintProductView` are being revised for the single sofa-left/summary-right arrangement with one colour chooser and the authorized quantity/cart interface. Preview choices remain ideas until a client-approved product shade catalogue exists. Displayed prices remain provisional. Quantity/cart UI does not establish real stock, approved pack sizes or a working order/payment flow; no commercial facts/policies should be imported from Brighto or stale prototypes. Tabs contain description, illustrative shade guidance and technical guidance; do not add an invented shipping/returns policy.

Own-photo upload remains disabled/UI-only with future SAM work; real enquiry delivery remains deferred. Cart is a **local UI demonstration**, not real orders/payments/backend. The cart retains validated items within the browser tab using sessionStorage, with in-memory fallback; the completed source integration is recorded below. Source assets, old catalogue prototypes and unrelated changes remain preserved. Application tests/typecheck/browser QA/build are unrun and delegated to Sol in `SOL-PRODUCT-FIRST-HANDOFF.md`. No push, Site upload or publication; public version 16 remains unchanged.

## Resumed implementation checkpoint — 13 November 2026

The user supplied the previous interrupted-session transcript and explicitly asked to continue on `http://localhost:3023/products/epoxy/#product-colour-studio`. This pass reread the CEO timestamps and current project notes above; it does not attribute the original CEO conversation to this assistant.

Reopened the official [Brighto Plastic Emulsion page](https://brightopaints.com/products/plastic-emulsion) on **13 November 2026** with text extraction. It exposed quantity/Add to cart, product description, Shade Card and TDS sections. This review informed a single product-context chooser and grouped lower information. No browser interaction, visual geometry, recolouring, checkout or shipping behaviour was verified on Brighto; supplied user screenshots/instructions determine the sofa-left arrangement. No competitor assets, text, shade codes, prices, packs or policies were reused. Installed Next.js 16.4.3 server/client and CSS guides were read for the retained client component/scoped stylesheet implementation.

Source implementation is complete for local review: one visual-only `HomeColourStudio` at the top, one right-hand chooser, quantity and a per-tab demo cart; three information tabs below; no lower duplicate room or bucket hero. Current products retain source precedence over older prototypes. Generic legacy studio links now establish product context at the homepage paint selection; deliberate HEX/name queries are retained. Product-related links carry a deliberate colour idea. Tab contents use existing client-backed product records and the supplied technical-guide PDF. A Shade guide is explanatory, not an invented manufacturer shade-card download. Exact cart/storage behaviour and focused validation are documented in `SOL-PRODUCT-FIRST-HANDOFF.md`.

Static source review found and corrected the interrupted component-prop mismatch and a missing JSX panel closing tag. Cart item links use native document navigation to reinitialize same-product colour queries without a duplicate page editor. Application tests/typecheck/browser QA/build remain **unrun** for Sol. The source-only review does not establish passed layout, runtime or recolouring checks. The existing preview process on 3023 was left running; unrelated port 3000 was not touched. No push/upload/publication. Actual client prices/packs/compatibility, genuine reviews, real upload and delivery/order systems remain pending.

## Follow-up refinement and release approval — 13 November 2026

The user requested darker/more substantial text throughout this detail page, a more visible Upload photo control, no Apply button when colour can update immediately, at least five related paints and header-level Cart. This adds a shared current-product cart context/header bag rather than a disconnected header counter; one colour chooser remains. Six-digit valid HEX auto-previews, invalid/incomplete draft does not overwrite the last valid room, and Save/Add validate it. Five related packs use a compact desktop row and native horizontal scroll/snap below 1100px. Supporting text/headings/tabs have stronger contrast/weights and readable sizes; Upload your photo uses the Ekotint purple action treatment with explicit disabled Coming soon status. The user did not authorize upload/SAM/backend integration through this styling request.

Rechecked [Brighto Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion) through official text extraction on **13 November 2026**: its global Cart/count and product navigation support putting the shopping action in the header. Text review does not verify computed font/style/layout, recolouring or checkout. An attempted [Benjamin Moore products reference](https://www.benjaminmoore.com/en-us/products) returned an access/internal error in the web tool, so no new rendered/font evidence is claimed from it. Visual refinements follow the user's current criticism and established Ekotint system; no competitor asset/typeface/code is imported. CEO **02:32:55** supports coherent product-linked choices; **02:37:31** supports typography review. The assistant read these records, not participated in the original conversation.

The user's subsequent “publish all the work done” instruction authorizes this completed current homepage/detail release. Sol release checks/build are now running; record exact results in `RELEASE-QA-2026-11-13.md`. Actual public success/version must come from the Sites deployment result. Deferred legacy catalogue prototypes and real commercial/upload/backend functions remain outside the completed-release scope.
