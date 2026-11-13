# Indexing metadata — Sol handoff

14 November 2026, Asia/Karachi.

The user reviewed the PageSpeed warning showing `noindex, nofollow`, confirmed that the current version is approved for deployment, and explicitly requested removing those directives. This supersedes the earlier preview-indexing restriction for this version. The assistant did not participate in the original CEO conversation; this change follows the user's latest direct instruction.

## Change

Only `src/app/layout.tsx`: `robots: { index: true, follow: true }`. Next's metadata output should be `<meta name="robots" content="index, follow" />`. No UI, routes, assets, contact details or product behaviour changed.

## Focused verification

Sol owns typecheck/build and generated-output checks. Verify the homepage and all 16 current product pages have the positive robots metadata and no blocking robots directive. Framework error/404 pages can legitimately have `noindex`; distinguish these from public content. Inspect source/config for any additional robots directives or `X-Robots-Tag` override. Record results and limits in `INDEXING-METADATA-QA-2026-11-14.md`. No visual browser regression is needed for this metadata-only change.

Completed: Sol typecheck, whitespace check and static build passed (23/23 pages). Actual generated HTML for the homepage plus all 16 current products contains `index, follow` without blocking crawler metadata. No source/config overrides were found. See the QA report for evidence and unrun live-hosting checks. No pending local validation remains.

## Approval and release

No pending input blocks this change. The current version has user approval for the next deployment. This task changes and verifies source; it does not execute hosting operations. The next release must reuse the established Vercel project/team and preserve the existing exclusion of unfinished legacy catalogue/prototype pages. The disabled catalogue control remains disabled.

## References and limits

Reviewed 14 November 2026: installed Next documentation, `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`, robots section, establishes the typed metadata and generated positive directive. The earlier PageSpeed explanation also consulted [Chrome's crawlability audit](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable) and [Google's noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing). Removing the blocking directive permits indexing; neither an immediate search listing nor SEO 100 is guaranteed. No live-domain crawling, Search Console request or deployment is part of this verification.

## Copy/paste prompt

Verify the indexing metadata change using this handoff. Run typecheck and the static build, inspect the homepage plus all 16 current product pages for index/follow without blocking robots directives, and record exact results and limits. Preserve other work and preview port 3023. No UI regression, live-domain check or hosting operation is needed for this task.
