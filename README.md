# Ekotint Paints homepage demo

A responsive Next.js App Router / React / TypeScript homepage concept. The project exports to `out/` for a portable preview.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3023.

## Check and build

```sh
npm run typecheck
npm run build
```

The current demo includes a five-scene sliding hero (three interiors and two exteriors), six Featured paints, product-category carousels, Interior/Exterior colour ideas, search and saved colours, and 16 current client-product detail pages. Product details provide one prepared-room preview with live colour-picker/HEX input, before/after, 1 L/4 L/16 L demo pack selection, a session cart, information/review tabs and related paints. Shared contact and footer components provide a consistent finish across pages.

The wall preview remaps the original scene's lighting into the selected colour through SVG channel-transfer tables and a prepared wall mask; it is an approximate screen simulation, not calibrated paint matching. Shade/product availability is unconfirmed until manufacturer data is supplied. Displayed amounts are illustrative and are not size-specific client prices. Nine fictional homepage testimonials remain preview content; approved company/product review collections are separate and empty. Four product TDS mappings are verified; other products offer an exact-product sheet request.

The enquiry form prepares local UI state without sending or persisting an enquiry. The cart is kept in the current browser tab and does not place orders or accept payment. Own-room photo upload and Explore all products remain deliberately disabled. Preserved legacy catalogue/prototype code stays in this source backup; it is excluded from the current public release artifact.

The current product artwork uses the supplied client pack images, with earlier assets retained in source. Room imagery is original AI-generated inspiration, not a record of completed Ekotint installations. Asset provenance and prompts are recorded in `public/images/`, `docs/CLIENT-HD-ASSET-INVENTORY.json` and `docs/image-prompts/`. Displayed room palette names are illustrative design concepts rather than approved Ekotint shade codes. Product information is limited to supplied/verified material, with remaining manufacturer details recorded in the handover.

## Project context and source backup

Read `AGENTS.md` and `docs/EKOTINT-PROJECT-HANDOVER.md` before continuing work. `docs/CEO-FULL-CHAT-AUDIT-2026-11-14.md` records the latest complete feedback audit; dated QA reports distinguish validated behaviour from deferred inputs/services.

The user authorized a private GitHub source backup on 14 November 2026. A source push is separate from deployment: do not connect the backup repository to hosting or publish a new site as part of this backup. Local source/assets/docs and existing Git history are retained. Dependencies, generated builds, environment files and local hosting credentials are ignored; restore dependencies with `npm install` (or `npm ci` when using the committed lockfile). Original client documents outside this project folder are not included automatically.
