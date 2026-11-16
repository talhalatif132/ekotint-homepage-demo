# Vercel publication — 14 November 2026

User approval: **“deplpoy on vercel now”** after local review of the latest address, navigation and product-flow refinements. This authorizes this release; future UI changes continue to require local review and fresh publication approval.

Vercel CLI returned success, **READY**, production, and assigned the existing alias:

- Production: https://ekotint-paints-demo.vercel.app
- Immutable deployment: https://ekotint-paints-demo-fi3rgbkj1-talha-1d53.vercel.app
- Deployment ID: `dpl_HJxcS3z8BTcAMMZW1JzLvMESrcrC`
- Dashboard: https://vercel.com/talha-1d53/ekotint-paints-demo/HJxcS3z8BTcAMMZW1JzLvMESrcrC
- Existing project: `ekotint-paints-demo` / `prj_vGXlQAoPd7VkwKGFSqDjMY17S5pn`
- Existing team: `talha-1d53` / `team_RQ87e0z5ZExyNpeFEaPBplYf`

The reviewed homepage and all16 current product detail pages are included. This includes prior Part2 homepage/contact/footer changes, current hero order, hidden product Reviews, related-product carousel/eased navigation, chooser-to-product continuity, sharper homepage navigation, subtle address text and index/follow metadata. Disabled catalogue/own-room upload and deferred services are unchanged. No new GitHub commit/push, Git hosting integration, custom domain, plan change or production-protection change was performed.

## Artifact and validation

Used the latest Sol-validated static export, build `h7iorZvNPGIoborSKRRIh`; no application source changed after the passing address-task webpack build (23/23 pages, including framework TypeScript). Sol independently checked all17 approved HTML pages, current compiled corrections, metadata and referenced assets. Fresh artifact `.sites-runtime/vercel-release-2026-11-14` contains215files/43.52MiB. Exactly16 approved product directories; unfinished catalogue index/three older-only detail routes and unused PNG masters are excluded from the artifact only. Source/originals and older artifacts remain intact.

- Source/assets/config SHA256: `9cd8763b3f30795fb733047056a086f2efd3c1553b91add583c31bf32e6a36b1`.
- Artifact SHA256 before deployment: `121f77486b86641d5e530ee88eff65b91e004b588c8693e3f38fbf00c235d83f`.
- Fingerprint scope and excluded paths: ignored `.sites-runtime/vercel-release-2026-11-14-source.json`.
- Current publication metadata: ignored `.sites-runtime/vercel-publication.json`; prior release preserved in `vercel-publication-2026-11-13.json`.
- Source checkpoint is the reviewed working tree after `8e748e1e45ff3a713a8724da2f7d00c955c7932c`, not that backup commit alone. GitHub backup remains unchanged.

Official [Vercel deploy documentation](https://vercel.com/docs/cli/deploy) reviewed14November confirms explicit project/scope/production options. Installed CLI65.15.0 help verified before use. Same-project deployment used retained CLI authentication; credentials were neither printed nor copied into the artifact. No Vercel connector tool was available; used the existing CLI workflow. The original ChatGPT Sites demo was not republished.

Unauthenticated live HTTP verification passed: all17 approved URLs return200, index/follow metadata and no blocking X-Robots-Tag; the catalogue index and three older-only detail URLs return404. Root's direct curl confirmed that live homepage HTML is byte-identical to staging (homepage SHA256 `1a7787b8b18c45eac1d5dd16e3b787428c5d5a0767cf1d88406fbbfc41d8ee12`).

The initial public browser run confirmed homepage200/index-follow/current navigation+address styles and chooser opening, but timed out awaiting product navigation; a network-idle retry also timed out. The final DOMContentLoaded diagnostic did not reach a product click because the chooser wait timed out, plausibly from a pre-hydration click. No full live navigation/cart flow is claimed. These harness outcomes do not establish an application defect; earlier focused local interaction checks remain the actual runtime evidence. Independent HTTP checks do not prove interactive behaviour. Exact evidence/limits: `RELEASE-QA-2026-11-14.md`.

The user's publishing approval is fulfilled for this reviewed release. Future UI changes still need local review/fresh publication approval. No pending publication step remains for the current artifact.
