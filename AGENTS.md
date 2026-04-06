<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Repo contract

- Preserve existing user changes in the worktree. If unexpected edits conflict with your task, stop and ask.
- Prefer server components in `app/**`; only `AnalyticsBridge` and `RevealSection` should stay as direct client entry points unless a browser API or hook is truly required.
- Keep content changes inside `app/content/**` and keep presentation rules shared in `app/content/presentation.js` instead of scattering them through UI files.
- Reuse shared renderers in `app/components/**` before adding duplicate icon, link, or section wrappers.

## Repo map

- `app/content/site.js`: site metadata
- `app/content/navigation.js`: nav and social links
- `app/content/sections/*.js`: domain content modules
- `app/content/siteContent.js`: stable aggregation layer consumed by pages and scripts
- `app/content/presentation.js`: shared display rules such as blog category styling and featured-game ordering
- `scripts/check-*.mjs`: validation gates for content, assets, and structure

## Done definition

- `npm run check:content`
- `npm run check:assets`
- `npm run check:structure`
- `npm run build`

For routine content edits, `npm run verify` is the default pre-push gate.

## Content rules

- External links must use `https://`.
- Local assets must live under `public/` unless intentionally served from an `app/` route file.
- Blog dates must stay in `YYYY-MM-DD`.
- `featuredOnHome` game entries must have unique contiguous `featuredOrder` values starting at `1`.
- If you add a new section-level rule, put the rule in validation scripts and, when relevant, in `app/content/presentation.js`.
