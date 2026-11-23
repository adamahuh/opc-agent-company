# HANDOVER_2026-11-23_CROSS — planning/coordinator session → any device

**Verb:** cross-change. Commits pushed, this handover is the resume point.

## Live assets (canonical map)

| Asset | URL | State |
|---|---|---|
| Agency site + tool (ONE URL) | https://embold-r-ai-visibility.geo.hashmeta.tech | home (4 sections, weave 3D, 3 user cards), `/impact-check` v17, Hashmeta projectId `7998146f-ab15-4a18-81e1-4462fdff28a5` |
| SEO tool engine + registry DB | https://nxtb2cwd.qwenwork.page | **V13** deployed; Supabase (`websites`, `check_log`) bound to THIS chat session |
| Engine source in repo | `tool/seo-tool/server.js` | V13, semantically identical to deployed (quote-escape style + trailing newline differ) |
| Retired artifacts | `zdd44c3j`, `zdd44c4j`.qwenwork.page | unlinked, kept live |

## Engine V13 (this session's final state)

13 findings, card model: home / crawl (sitemap parsed, entries + listsHome) / entity (schema prop validation: name,url,address,description) / impact (knowsAbout **pre-filled from subject's own page terms** — e.g. Karaja: Ikat, Weaving, Weaver) / snippet / title / h1 / alt / og / ai stance (**real allow/disallow parsing**; deliberate opt-out = pass) / llms.txt (fetched, draft pre-filled from own terms) / quotability (definitional sentence) / corrob (sameAs).

Platform tiers: builder (Squarespace/WordPress/Wix/Shopify/**Webflow/GoDaddy/Carrd/Ghost**), ai-builder (Framer/Durable/Hostinger AI/10Web — "correct the generated values"), static (**AI-chat variant**: "paste this fix back into the chat that built your site — ChatGPT, Claude, Gemini, Qwen").

Tool page: verdict band (no score, D7), readiness tree (5 branches, new leaves: llms/corrob/quotable), gap cards with copy chips + Wheres, collapsed passes, ~100-word letter footer, refusal card, limits line ("What this can't see: whether engines actually answer with you").

Verified live: Karaja 6/13, refusal path logs, zero console errors.

## Locked decisions this session

D24 (cite-ability positioning) + companion doc `DECISION_2026-11-23_VISUAL_RESPONSE.md`; Rejuvenation naming (never "Rescue"); card-model response (D24 follow-up); CSR = buyer, never subject; impact = heritage + environment only; no competitor names in copy; 18 top-dog companies seeded as blocked.

## GSC/Bing — PARKED (platform-blocked)

All 7 verification routes tried and failed (file/template-wrap, redirect, meta body, dev task ×2, GA4 wrong-location, redeploy). Logged in `runs/RUN-007-traffic-baseline/README.md`. GA4 snippet (G-565571463) stays in home body — collects data, verification impossible on Hashmeta.

## Pending (resume here)

1. **Founder-critical:** record the ~2:50 demo using `output/video-script-v3.md` (this session; points at the live Hashmeta tool, name-search beat, Rejuvenation) → YouTube unlisted → submit the hackathon form (**23 Nov 23:59 SGT**).
2. Marketing agent (this session: `ses_dfa2ca257ffefZ7W2…` subagent, produced v2 script) — needs v3 + storyboard frames, music bed, final cut.
3. K1–K7 approval into `queries.yaml`; P5 organiser questions; P6 disclosure.
4. Optional: registry intake form (`requests` table); `tool/seo-tool/public/index.html` not yet committed to repo.

## Standing rules

Planning mode always; green light to execute; serialize Hashmeta edits (parallel edits race); vision check after every batch; commits via Composio `GITHUB_CREATE_OR_UPDATE_FILE_CONTENTS` (verify blob SHA against local); QW Pages engine edits: local `seo-tool/server.js` → `node --check` → `qwenwork_pages_publish` (update, with_database).
