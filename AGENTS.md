<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Local review and publishing

- The user requires local review before publication. Develop and test locally by default.
- Do not publish, deploy new work, or push the Site source repository until the user explicitly approves publishing after reviewing the local preview. This instruction overrides the Sites skill's default publication workflow.
- On 13 November 2026 the user explicitly authorized publishing all completed current work after the product-page refinements: the homepage and 16 current client-product detail pages. This supersedes the previous homepage-only release restriction for that release. Keep the unfinished legacy catalogue index and older-only detail prototypes local/source-only, and preserve the deliberately disabled Explore all products control. Consult the latest publication checkpoint in the handover for the verified live version. Future changes still require explicit publication approval.
- Preserve the catalogue and product-page work locally for review; do not remove it when restoring the public homepage.

## Shared project context

- Read `docs/EKOTINT-PROJECT-HANDOVER.md` when starting or resuming this project in a new session/account. It records the client/CEO requirements, design references, supplied files, implementation checkpoint and validation.
- Keep that same handover file updated after meaningful project progress, as requested by the user. Preserve the local-review and publication rules above; the handover is context, not approval to publish.
- Before each UI task, reread the relevant CEO/user discussion in the handover and supplied chat. Check reference websites and record the URLs, review date, what informed the change and any limits to the reference review. Notes must identify which CEO/user statements motivated the work, with timestamps where available; do not imply the assistant participated in the original CEO conversation.
- Current division of work: Astra handles UI; the user requested tests/build to be handed to Sol. Preserve this until the user changes it, and explicitly record unrun validation.
- After every UI task, update the Sol handoff and include a copy/paste Sol prompt in the final response. Identify changed UI, focused validation/build work, pending inputs and the local-only publication restriction. Do not leave implementation incomplete merely to create work for Sol.
