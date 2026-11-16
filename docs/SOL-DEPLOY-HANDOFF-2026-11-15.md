# Deployment handoff for the second Sol — 15 November 2026

This file was requested because the current session is nearing its limit. **This session prepared instructions only; it did not deploy, commit or push today's work.** Run the release steps when the user explicitly asks your Sol session to deploy the reviewed current version. Reading this file alone is not publication approval. The 14 November approval was already fulfilled.

## 1. Continue in this workspace

```sh
cd /Users/sam/Desktop/ekotint-homepage-demo
```

Read `AGENTS.md`, the newest entries at the top of `docs/EKOTINT-PROJECT-HANDOVER.md`, and this file. If changing application code, first read the relevant installed Next guide in `node_modules/next/dist/docs/`. Next is 16.4.3; the project uses a webpack static export.

**Use the existing working tree, including untracked files. Do not reset, pull over it, reclone or substitute GitHub's version.** The private GitHub backup at `8e748e1e45ff3a713a8724da2f7d00c955c7932c` predates later changes. Today's preview assets, `src/lib/home-preview-scenes.ts` and UI changes are local. A GitHub push is unnecessary for this CLI deployment and is outside this handoff. Preserve the accepted Kashif Tariq commit identity/history.

Local preview is `http://127.0.0.1:3023`. Leave unrelated port 3000 alone. Source prototypes stay in the workspace; exclusions apply only to the deployment artifact.

## 2. Preserve the final reviewed behavior

- Interior and Exterior colour sliders advance **two shades** on autoplay and previous/next arrows, with a five-second dwell. Product sliders remain manual following the recorded Brighto comparison. Keep existing motion, focus and visibility guards.
- The chooser modal is centred. View paint retains the modal until the product route commits. The Exterior chooser again shows the **original static beige courtyard**, `/images/premium-exterior.webp`, with its original inspiration captions. Exterior product detail pages keep the approved newer facade.
- The three links below reviews are removed: Know your finish, Talk to the team and Find Ekotint in Karachi. Reviews lead directly to contact. Preserve the separate upper help strip, contact design and shared footer.
- Interior image and hero remain unchanged. Current product scenes use `exterior-v2.webp`, `roof-v3.webp`, `metal-v3.webp` and `wood-v2.webp` under `public/images/previews/`. Do not restore rejected grey drafts or saturated roof/gate v2. Epoxy uses the original room as wall-coating inspiration, rather than a gate-only association.
- Preserve the balanced colour rendering, surface masks and static timber/coating-system exceptions. Product Reviews stays hidden. Explore all products and personal-photo upload stay disabled. Preserve the current median product layout, prices, packs, cart and enquiry behavior.
- Keep index/follow enabled on approved pages. Do not reintroduce noindex/nofollow.

Known content/service limits are unchanged: nine homepage reviews are fictional design samples, not verified customers; prices/packs and product-to-shade availability are not a completed manufacturer catalogue. Eko Shade is **exterior roof coating**, not interior ceiling paint. Its nine swatches/HEX input are illustrative ideas, not confirmed available roof colours; no shade card/TDS was supplied. Do not invent approved shades or silently redesign that UI during deployment. New scene images are generated illustrations, not client project photography. Enquiries do not send, personal-photo upload is Coming soon, and the cart does not process orders/payments. Email delivery, actual calls and product-specific roof traffic/finish suitability are unverified.

## 3. Validation evidence and the remaining narrow check

The final source already passed Sol's typecheck, whitespace check and webpack build: **23/23 exported pages**. At 1440px, both colour families' autoplay and Next moved 388px for a 193.92px item pitch; the 390px reduced-motion manual step also passed. Static export confirms the three review links are absent, nine reviews remain and reviews precede contact.

Read these for exact evidence and limits:

- `docs/SLIDERS-MODAL-QA-2026-11-15.md`
- `docs/CATEGORY-SCENES-QA-2026-11-15.md`
- `docs/SOL-SLIDERS-MODAL-HANDOFF.md`
- `docs/SOL-CATEGORY-SCENES-HANDOFF.md`
- `docs/SOL-REVIEW-LINKS-HANDOFF.md`

The final old Exterior popup restoration passed source/build checks, but its browser capture is **unverified** after two bounded harness activation timeouts. If checking it, wait for hydration and prove a real UI state change before selecting Exterior and a shade. Confirm the old beige courtyard, centred modal and View paint behavior. Do not report this check as already passed. Avoid an endless retry loop; record a harness limitation separately from an actual application defect. Earlier local category/colour/cart checks are recorded in the category QA.

For a fresh release export, run the following **sequentially**, resolving any actual failure before packaging. Do not run concurrent builds against the same `.next`/`out` directories. The last build is already green; no extra broad suite is needed after this release build unless a new failure/change warrants it.

```sh
npm run typecheck
git diff --check
npm run build
```

`npm run build` runs `next build --webpack`. The 23 exported pages include unfinished routes: successful export does **not** mean all 23 may be published. Keep source unchanged between build, fingerprinting and deployment; rebuild if application source/assets/config change.

## 4. Prepare a NEW, filtered static artifact

Never deploy the raw project directory, raw `out/` or the existing 14 November artifact. The previous preparer hardcodes both the old destination and source-metadata filename, and refuses to overwrite them.

Create a dated copy as follows. These commands have **not** been run by the handoff-writing session:

```sh
python3 - <<'PY'
from pathlib import Path

old = Path('.sites-runtime/prepare-vercel-release-2026-11-14.py')
new = Path('.sites-runtime/prepare-vercel-release-2026-11-15.py')
destination = Path('.sites-runtime/vercel-release-2026-11-15')
metadata = Path('.sites-runtime/vercel-release-2026-11-15-source.json')
assert not new.exists() and not destination.exists() and not metadata.exists(), (
    'Inspect the existing attempt before proceeding; do not overwrite it.'
)
config = Path('.sites-runtime/vercel-release-2026-11-14/vercel.json')
assert config.is_file(), 'Missing retained static Vercel configuration'
script = old.read_text().replace('2026-11-14', '2026-11-15')
script = script.replace(
    '.sites-runtime/vercel-release-homepage-v2/vercel.json',
    '.sites-runtime/vercel-release-2026-11-14/vercel.json',
)
new.write_text(script)
PY
python3 .sites-runtime/prepare-vercel-release-2026-11-15.py
```

If a 15 November attempt already exists, inspect it and its fingerprints first. Resume it only if it matches the current validated source; otherwise choose a fresh dated/suffixed preparer, artifact and metadata filename. Preserve earlier attempts and the 14 November artifact. Substitute the actual new paths in later commands.

The preparer reads the 16 current IDs from `homePaints`, copies their HTML and RSC `.txt` files plus shared assets, and omits the catalogue index and older-only product routes. Check its printed new build ID, source/artifact SHA256, file count and size. Verify the source fingerprint is still current immediately before upload. It covers sorted `src/**`, `public/**`, `next.config.ts`, `package.json`, `package-lock.json` using relative path + NUL + bytes + NUL. Do not reuse last release's hashes.

Allowed product IDs:

```text
water-matt
clima-shield
epoxy
hydra-matt
weather-paint
semi-plastic-emulsion
eko-shade
eko-gleam
synthetic-varnish
primer-emulsion
wall-putty
eko-prime-oxide
hardener
premium-semi-plastic
assez-wall-putty
assez-gloss-enamel
```

Before upload, require homepage plus exactly these 16 product directories, each with `index.html` and `index.txt`. Keep `_next` assets, RSC payloads, referenced images/fonts and `documents/ekotint-technical-data-sheets.pdf`. Check the new preview WebPs exist, and that referenced URLs resolve within the artifact. Remove only unreferenced PNG masters **from the artifact**; preserve originals/source.

These four URLs must remain absent/404:

```text
/products/
/products/gloss-enamel/
/products/semi-plastic-emulsion-2/
/products/wall-putty-2/
```

The retained static `vercel.json` is:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "version": 2,
  "framework": null,
  "buildCommand": null,
  "outputDirectory": ".",
  "trailingSlash": true,
  "headers": [{
    "source": "/_next/static/(.*)",
    "headers": [{"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}]
  }]
}
```

Do not add a catch-all SPA rewrite. Do not upload credentials, `.git`, environment files, `node_modules` or the whole `.sites-runtime` directory. The preparer/config/auth are ignored local files and are **not supplied by a fresh GitHub clone**. If absent, recreate the static packaging from the explicit rules/config above; authenticate through the normal CLI flow without exposing credentials.

## 5. Reuse the existing Vercel project and authentication

| Item | Existing value |
| --- | --- |
| Production URL | https://ekotint-paints-demo.vercel.app |
| Account | `talhabinlatif4-9527` |
| Team/scope | `talha-1d53` |
| Team ID | `team_RQ87e0z5ZExyNpeFEaPBplYf` |
| Project | `ekotint-paints-demo` |
| Project ID | `prj_vGXlQAoPd7VkwKGFSqDjMY17S5pn` |
| Last live deployment, 14 November | `dpl_HJxcS3z8BTcAMMZW1JzLvMESrcrC` |

Do not create another project/team, connect GitHub hosting, or change domains, protection or plan settings. Today's local work is not yet live.

Vercel CLI **65.15.0** is retained at the path below. Always pass the existing global-config directory; omitting it attempted an unavailable default directory in this sandbox. The explicit `--project` option is supported by this installed version and deploys to the existing project without requiring a directory link. [Official deploy documentation](https://vercel.com/docs/cli/deploy) and [project-linking documentation](https://vercel.com/docs/cli/project-linking) were checked on 15 November 2026.

Verify authentication without printing tokens or opening the credential file:

```sh
node /private/tmp/ekotint-vercel-npm-cache/_npx/67eb4586ca667318/node_modules/vercel/dist/vc.js \
  --global-config /Users/sam/Desktop/ekotint-homepage-demo/.sites-runtime/vercel-cli \
  whoami
```

If the temporary CLI executable is gone, use an available compatible CLI or reinstall this version in a temporary cache; reuse the existing config/auth. If authentication expired, use the CLI's interactive login/device flow. Never copy token contents into docs, source or tool output. If sandbox/network access fails, use the normal command escalation flow.

## 6. Deploy the prepared directory after the user's deployment instruction

The exact command for the fresh 15 November artifact is:

```sh
node /private/tmp/ekotint-vercel-npm-cache/_npx/67eb4586ca667318/node_modules/vercel/dist/vc.js \
  --global-config /Users/sam/Desktop/ekotint-homepage-demo/.sites-runtime/vercel-cli \
  deploy /Users/sam/Desktop/ekotint-homepage-demo/.sites-runtime/vercel-release-2026-11-15 \
  --project prj_vGXlQAoPd7VkwKGFSqDjMY17S5pn \
  --scope talha-1d53 --prod --yes --json
```

`--prod` updates production. `--yes` does not select the team, so retain `--scope`. **Do not add `--create-if-missing`, `--prebuilt` or `--verify`.** This is a plain static export, not Vercel's prebuilt Build Output API directory; the public smoke checks below do not need a protection-bypass secret.

Capture the returned deployment ID, immutable URL and status. Require **READY / production** before claiming success. If a call times out after creating a deployment, inspect that known deployment instead of immediately submitting another one. Use bounded status waits and continue user updates. Do not make a second approval request if the user already explicitly instructed this Sol session to deploy the reviewed current work.

## 7. Verify the live result and record it

Use unauthenticated public requests to both the immutable URL and production alias as appropriate:

1. Homepage plus all 16 approved product URLs return 200. The four excluded URLs return 404.
2. Homepage/current product HTML permits index/follow, with no blocking `X-Robots-Tag` response header. Confirm assets, new preview WebPs and TDS PDF return correctly.
3. Compare live homepage HTML bytes/hash with the prepared artifact and confirm the production alias points to the new deployment. Preserve the new build/source/artifact fingerprints.
4. Browser smoke at desktop and mobile: prove hydration with an actual visible state change, then check two-shade movement, removed review links, centred chooser/old Exterior popup, direct View paint navigation, category scene and colour/Before behavior, and basic cart context. Avoid `networkidle` waits on the animated homepage. No actual phone call, email, payment or disabled upload test is required.

Report HTTP/content checks separately from browser interaction checks. The previous release had successful public HTTP/content verification but an inconclusive full live navigation/cart journey; do not inherit a fictional live-interaction pass. Record any bounded harness limitation honestly. Fix a reproduced release defect and verify it before declaring completion; do not redesign unrelated sections.

Preserve the old `.sites-runtime/vercel-publication.json` as a dated prior record before updating it. Only record a successful new publication after READY and verification. Save new release provenance/QA in `docs/VERCEL-PUBLICATION-2026-11-15.md` and `docs/RELEASE-QA-2026-11-15.md` (or the actual later date), and update the top of `docs/EKOTINT-PROJECT-HANDOVER.md`, the CEO status notes and README as appropriate. Include the exact user deployment instruction, scope, deployment ID, URLs, build/fingerprints, exclusions and test limits. Do not commit or push merely to document the CLI deployment.

Final reply should give the live URL, verified scope and any material unverified checks. Do not say GitHub or the original ChatGPT Sites demo was updated; neither is part of this release.

## Copy/paste prompt for the second Sol

> Read AGENTS.md, docs/EKOTINT-PROJECT-HANDOVER.md and docs/SOL-DEPLOY-HANDOFF-2026-11-15.md. Deploy the current reviewed local version to the existing Vercel project, following the handoff's validation, filtered artifact, route exclusions and live checks. Preserve the latest two-shade sliders, category scenes, restored old Exterior popup and removed links below reviews. Do not redesign, reset local work or push GitHub. Record the new deployment and report the live URL with any validation limits.
