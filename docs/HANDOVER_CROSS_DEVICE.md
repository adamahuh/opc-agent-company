# Cross-device handover (run this command on the other device)

**Written:** 19 Nov 2026 by the *planning* device · **for:** the *execution* device (new
QwenWork session, same `adamahuh` account) · **replaced by:** the next dated handover.
Founder's meaning of this file: `change` = write current progress + pending items so the
**other device can pick up the same body of work**, and — if it fans out sub-agents —
they carry the **same responsibilities** (not a shrunk scope), **inside this project only**.

## Current change checkpoint — 22 Nov 2026, Windows execution device

This checkpoint supersedes the older progress/pending statements below where they conflict.

**Durability blocker is RESOLVED — read this first.** `git` is still not installed on this
machine and `gh` is still not authenticated, so there is no local clone and no `.git`
directory. But pushing does **not** require them: the connected **GitHub connector**
(Composio) exposes `GITHUB_LIST_COMMITS` and `GITHUB_COMMIT_MULTIPLE_FILES`, which read and
write `adamahuh/opc-agent-company` directly over the API. That is a real commit on `main`
with a real SHA — it satisfies the durability rule. What it does **not** give us: a local
`.git`, so `git status -sb` and `git log HEAD..origin/main` remain unavailable, and
"remote SHA == local HEAD" must be verified by **re-listing remote commits** instead.

**Remote state verified this checkpoint:** `origin/main` HEAD =
`12ba7c647a65de4c9c7507d55a541ae900866b34` (2026-11-21T03:19:56Z, "change: cross-device
handover refreshed for c1d6808 …"). **No inbound commits from the other device** since the
local archive was taken, so there was nothing to pull and no collision to resolve.

Founder requested routinely using `change`; its canonical definition stays in
`docs/MEMORY.md §2d`: save cross-device progress and exact agent responsibilities, commit,
**push**, verify the remote. Two clarifications adopted 22 Nov on the founder's instruction:
1. **`change` always includes the GitHub push** — a handover written only to local disk is
   not a completed `change`. If no push path exists, say so explicitly and do not report
   `change` as done.
2. **`resume` always accounts for the latest GitHub changes first** — list remote commits and
   read anything the other device pushed *before* continuing local work, so neither device
   builds on a stale tree.

### Progress and evidence boundaries

- Project name: embold'r. Root design.md contains the editorial-craft specification; an in-chat static review used Georgia/system-sans fallback fonts. Source font loading, responsiveness and contrast are not established by that preview. Ochre #C08A3E is proposed, not approved or tested.
- M1 deterministic scripts and RUN-002-fetch artifacts were created in the earlier session. Engine-answer measurement remains pending founder captures. Reinspect files before promoting historical results into fresh checks.
- Historical P1 deployment receipt: https://y633cekp.qwenwork.page/ V3; homepage, robots.txt and sitemap.xml probes returned 200. This replaced the handover snapshot at that URL. Do not republish merely to repeat those checks.
- P1 was previously overstated as fully passed: actual Google/Bing verification tokens, IndexNow key-file validation and submission acceptance remain UNPROVEN. Generic metadata/root-file delivery is not ownership verification. Hosting does not prove indexing, retrieval or citation lift.
- P3 manual script: runs/RUN-004-founder/SCRIPT.md. No founder captures supplied yet. Review grading definitions against QUERIES.md before ingestion: S1 is a synthetic category fixture, not a verified real entity; do not grade an unspecified subject or assume sparse multilingual results prove a language gap. Keep classic search results and AI-answer surfaces separate. Log region, time, login state, sources and capture paths; blocked access is inconclusive.
- Hashmeta actions are exposed in the current tool catalogue; authorised site access and a real Hashmeta build remain untested. Earlier statements that no builder actions exist are historical, not current blockers.
- Correct earlier simplification: making search content accessible does NOT establish that AI visibility follows. Search indexing, AI retrieval and citation are separately measured outcomes. Search crawlers and model-training crawlers need separate consent decisions.
- KIV ideas remain inactive: interactive expansion, stylised QR and mobile/tablet MVP. BIV requires founder recall and scope decisions. Never encode an invented destination.
- Cash-free tools are a constraint, not a verified $0 total: check sponsor access, quotas and platform/model usage; record unavailable credit data as unsupported.

### Pro-model batch plan — plan only, no execution grant

Use the pro model for reasoning/copy/review; deterministic scripts perform repeatable measurement. Each batch ends with focused checks, runs/ artifacts, a handover delta and return to plan-only. No build/publish/schedule is authorised by this plan. Keep website work separate from the SEO/AI-visibility function.

| Batch | Inputs and work | Output / acceptance | Dependencies and approval |
|---|---|---|---|
| B0 — Reconcile and restore durability | Read charter lock list, EXECUTION, QUERIES, queries.yaml, WEBSITE, design.md and existing run artifacts. Check current remote/local state | Verified status table; conflicts and historical claims labelled; preserve local changes before any fresh clone. A real clone and remote SHA equality are required for pushed claims | Git/auth blocker first. No overwriting archive work; no secrets in logs |
| W1 — Agency content lock | Approved positioning, slogan, institutional buyer, evidence limitations; resolve copy contradictions | Hashmeta-ready copy: hero, audience, method, evidence, service ladder, boundaries, CTA/footer. No fabricated prices, clients, rankings or universal invisibility | Founder approves claims, contact route and operator details |
| W2 — Visual specification and QA preview | design.md, approved copy; proposed Source Serif 4/Source Sans 3 and ochre accent | Desktop/mobile preview; font licence/file checks; measured contrast; shared alignment and readable wrapping. No mock form success | Founder accepts typography/palette. QR/MVP stays KIV |
| W3 — Hashmeta AI draft | Discover exact schemas, read selected site's setup and publish mode; provide approved design/copy to Hashmeta's own AI | Unpublished draft plus actual task/build trail. HTML copy, crawlable navigation and metadata reviewed; unsupported controls recorded | Scoped draft-build approval; verify no automatic publish before writes. Do not select unrelated sites |
| W4 — Agency release gate | Actual draft, approved contact details, real assets | Focused mobile/desktop, keyboard/focus, reflow, contrast, links, factual labels and metadata checks; founder QA recorded separately | Explicit release approval before Hashmeta publish. Separate permission for analytics, test form submission or competition submission |
| E1 — Browser baseline ingestion | Founder P3 screenshots, verbatim answers, citations, timestamps and conditions; exact query instrument | Validated browser-evidence rows and report. Missing evidence = pending/inconclusive. Citation denominator defined; no generic SERP promoted to AI answer; no invented synthetic entity absence | Founder captures first. Confirm subject identity and grading before scoring |
| E2 — Bounded rescue design | E1 findings + technical fetch evidence + qualified source material | Finding-to-action mapping; labelled-synthetic content pack within ≤10 assets; count convention explicit. Refusals and YMYL gate enforced; no fake credentials/schema identities | Founder selects D23 subject/fictional identity and approves content. Real business changes require owner authority |
| E3 — Verification/submission gate | Existing P1 evidence; actual GSC/Bing tokens and IndexNow key when provided | Exact token/key delivery checked; ownership verification and submission receipts saved, or blocked status logged. Do not claim indexing from HTTP 200/202 | Explicit site-owner/account/submission authority. Do not buy a domain or change crawler-training consent by default |
| E4 — Synthetic release and retrieval | Approved E2 pack, confirmed Page target and release scope | QW Pages deployment receipt; bounded requested technical checks; retained engine retrieval capture if available. Retrieval is not organic discovery or improvement | Scoped publish approval; current Chat already has a Page, so update targets it and replaces current live content. Resolve desired target before shipping |
| E5 — Comparable re-measurement | Same instrument, defined observation conditions and before/after artifacts | Diff and owner briefing distinguish changed/unchanged/inconclusive, technical delivery, indexing and citation. No projected scores or fabricated lift | Needs second capture; no waiting for guaranteed re-indexing |
| E6 — Recurring operations | Proven measurement path, briefing format, approved cadence and delivery destination | Saved scheduled job and actual status; subsequent briefing evidence only after execution. Human-browser steps become capture requests, not imaginary automated engine reads | Explicit scheduling approval. Quotas/cost recorded, not guessed |
| F1 — Demo assembly | Website build trail + E1–E6 evidence + measured cost where available | ≤3-minute narrative: real observation → labelled synthetic intervention → approved release → honest result → owner briefing. Proof level for each claim | Founder QA and separate submission authority |

Parallel responsibility split: website agent owns W1–W4; SEO agent owns E1–E6; coordinator owns B0/F1, integrations and approvals. All receive the full project charter and identical truthfulness/authority rules; split work, not safeguards. Each writes only its assigned runs/ subtree, reports paths and unresolved checks, and never grants itself publication or account authority. W1/W2 can proceed alongside E1 once inputs exist; W3 waits for W1/W2 approval; E2 waits for evidence/subject decision; F1 waits for actual artifacts.

## 0. How the other device starts (exact steps)

```bash
git clone https://github.com/adamahuh/opc-agent-company && cd opc-agent-company
git clone https://github.com/adamahuh/opc-hackathon-info
```
Then read in order: `docs/AI_WORKING_HANDOVER.md` → `docs/MEMORY.md` (incl. **§2d commands**,
**§2c register**, **§3a-connector**) → `docs/HANDOVER_EXECUTION_AGENT.md` (the charter) →
docs/EXECUTION.md §3 milestones + **§1d the day-1 hosting checklist** → docs/QUERIES.md +
`data/queries.yaml`. Confirm §1 of the charter (lock list) in one line before building.

`change` twice creates two files; each carries date + device name, latest wins, and the
older is kept for audit. `resume` on either device = `git pull`, check for the *other*
device's commits since your last HEAD, then continue from "pending" below.

## 1. Progress (state at commit `c1d6808`, planning device)

**Locked decisions D4–D23** (authoritative copy in `MEMORY §6`) — key ones:

- **D5** Track 1 (workers, not guardrails) · **D7/D8/D16/D17** service ladder, institution
  buys both tiers, no SaaS/dashboards/multi-tenant · **D6a** "everywhere the answer is
  found" (9 AI engines + Bing/Baidu/Naver/DDG + social discovery) — never "we rank you on
  Bing" · **D6b** sponsor's own invisibility data as the thesis + the denominator caution ·
  **D6c** margin claims only from measured credit cost · **D9** two-layer demo: real
  measured layer + **labelled-synthetic** fixed layer, no AI copy attributed to a real
  named practitioner · **D10** posture A+B, projected-score claims refused · **D13** three
  impact verticals + YMYL gate · **D14** Google primary docs grade every technique (llms.txt
  /chunking/bulk AI pages refused; ≤10 assets/engagement) · **D15** no domain; QwenWork
  Pages primary (GH Pages fallback) · **D20–D21** exposure = act, proof = vantage; FR8
  submission module.

**Built (artifacts; no product code yet):** GLOSSARY; EXECUTION M1–M7 + hosting checklist
+ engine access matrix + refusals; PRD (~280 lines) with personas/user stories/weekly flow;
QUERIES instrument + `data/queries.yaml` (5 subjects, multilingual, ABSENT→MEDIATED→THIN→
OWNED); HANDOVER set incl. this file; **`rules/` + `runs/` trees created so the refusal list
is data, not prose**. 21+ commits pushed, local == remote at write time.
**Capability facts (measured, not remembered):** Naver readable *without* a Korean passport;
**both** `www.naver.com/robots.txt` and `search.naver.com/robots.txt` return
`User-agent:* / Disallow:/` (search *adds*: AI training + RAG retrieval "STRICTLY
PROHIBITED", naming `GPTBot` + `OAI-SearchBot`) → no Naver automation;
`indexnow.org` supporters = Bing, Naver, Seznam.cz, Yandex, Yep, with a key-file-at-root
requirement; DDG help: traditional links "largely source from Bing"; StatCounter Oct-2026
shares (Google 91.05% worldwide / SG 92.35; Korea Google 48.48 vs Naver 42.25);
**no Hashmeta MCP exists publicly**; extension catalog returns **401** from the sandbox.

## 2. Pending, ordered — with the owner

| # | Pending | Owner | Gate it unlocks |
|---|---|---|---|
| P1 | **§1d hosting checklist** (4 items: ~15 min): root-file hosting (IndexNow key / Bing XML / SC meta), head injection, `/sitemap.xml`, **our own `/robots.txt` on the published site** | execution device | M3 publish, FR8, first-party after-state proof, our AI-crawler posture claim |
| P2 | **M1 fetch pass — DONE partly, planning device (`runs/RUN-001-before/`, commit `c1d6808`): 3 domains × 4 paths + a UA control re-test.** Findings: **Mokko has strong structured data (`LocalBusiness` + 21-URL sitemap) → drop it as our example**; **Suikoushya has 0 JSON-LD but 4 `hreflang` links**; **beadwork site returns HTTP 500 on `/robots.txt` + `/sitemap.xml`** (homepage 200 under same UA; 500 for browser UA *and* spoofed Googlebot, different error-body sizes). **Remaining:** grade the *answer* surfaces — needs P3 | execution device (continue: `report.py` to render, `diff.py` later) | M2/M4/M5 |
| P2b | **Decision D23 to confirm in front of you:** make the **beadwork (crawl-guidance-gap)** subject the demo's fixed layer, or the **Suikoushya (structured-data-gap)** one? My pick: beadwork — most different, most checkable, best "not our fault it's invisible" story, but the 500 cause is **unknown and must stay labelled as an observation** | founder | act 1's spine + M2 |
| P3 | **Manual Batch — the only path to the four grades.** founder browser, signed-out, in SG: run S1 set (7 queries) on ChatGPT/Gemini/Perplexity + Google web + AI Overviews + Bing/DDG, verbatim answer + citation list + screenshot file names, date each | **founder only — this unblocks P2b** | ABSENT/MEDIATED/THIN/OWNED; act 1 |
| P4 | **Hashmeta connector** — action list + provenance test (below) | founder + organising device | 15% path 2; possibly a *better* FR1 data source |
| P5 | **The two organiser questions** (one message): (a) where do participants build the *Hashmeta-AI* page? (b) is a recorded end-to-end run accepted for "working live"? | founder | 15% ceiling; demo posture certainty |
| P6 | Pre-existing-work disclosure **at registration** (D16 silent default = none; confirm) | founder | eligibility clean-up |
| P7 | D11 pricing + D12 naming | founder, after P2 | act 3 numbers |
| P8 | Cut line **21 Nov** (submission 23 Nov 23:59 SGT / 15:59 UTC, **not** local midnight). Top-10 email ~30 Nov, live pitch 11 Dec | device 2 | — |

## 3. Responsibilities to replicate, if the other device fans out multiple agents

Sub-sessions inherit **this project's charter verbatim — same scope, same rules, the same
"explain any part of the submission" standard.** No sub-agent gets a softer mandate, and
none of it leaks outside this project (`MEMORY §2d` / founder rule: project context only).
Split axes (not authority):

| Sub-agent scope | Allowed | Never |
|---|---|---|
| Per-subject audit | read-only fetch of that subject's public pages + `data/queries.yaml` for its row set; write its own `runs/` subtree | publish/index ping/submit, contacting anyone, other subjects |
| Structured-data & schema validity checks | validate + report | generate YMYL claims; invent bylines (D13/D14) |
| Report/diff build | render M4 tables from ledger files inside the project | interpret engine answers it didn't capture |
| Website copy | paste `WEBSITE.md` §3 fields into whichever path P4/P5 decides | call our own site "Hashmeta-built" if not |
| **Marketing / demo video** (live sub-agent, chatId `mwq1cvctyscvqu7b`, title "marketing") | read handover + `CRITERIA.md`/`DEADLINES.md`/`RULES.md`; draft the ≤3:00 script from **actual artifacts** in `runs/`; generate visuals/music/video inside QwenWork; write to `output/` | publish anything; invent evidence, clients, rankings or projected lift; put a `[PENDING FOUNDER CAPTURES]` slot into the script as if it were measured; upload to YouTube or submit the form (founder-only) |

Each writes its artifact path(s) + the checks it can and cannot show, and one line into the
next handover. None publishes or messages anyone; the founder's `Ship` instruction covers
exactly one named task and doesn't widen.

## 4. Durability + honesty rules the other device must keep

1. `/tmp` has been wiped **four** times. Clone into a persistent path; commit+push per
   milestone; GitHub is the store.
1b. **When `git`/`gh` are unavailable (current Windows device), push through the GitHub
    connector instead of skipping the push.** Sequence: `GITHUB_LIST_COMMITS`
    (`owner=adamahuh`, `repo=opc-agent-company`, `sha=main`) to read remote HEAD and detect
    the other device's commits → reconcile locally → `GITHUB_COMMIT_MULTIPLE_FILES` with
    `branch=main`, `upserts=[{path, content}]`, and an author block of
    `name=adamahuh` / `email=190331173+adamahuh@users.noreply.github.com` → re-list commits to
    confirm the new SHA is on `main`. Never pass `force=true`; it overwrites history. Record
    the resulting SHA in the handover, because there is no local HEAD to compare against.
2. After a sandbox reset: `gh auth setup-git` and set repo-local `user.name=adamahuh`,
   `user.email=190331173+adamahuh@users.noreply.github.com` (a fresh clone loses both).
3. **Verify before claiming** ("pushed" = `git status -sb` in sync + remote SHA == local
   HEAD; "done" only at the proof level actually reached). Report blocked runner as an
   environment limit. Founder QA is never pre-marked, and don't promote a `PLATFORM-CAP` /
   `TO-BUILD` status in `SKILL.md §2` on the strength of a plan.
4. If a `.replace` on a doc no-ops, check the anchor (grep) rather than trusting the commit —
   that's already bitten the planning device three times.
5. Locked decisions are reopened **only** by the founder. Conflicting evidence → state it and
   stop; don't quietly pick a convenient version.

## 5. Delta since the last `change` (so the other device reads only what's new)

### 22 Nov 2026 — Windows execution device (this checkpoint)

**Durability unblocked.** Everything from 21–22 Nov that previously existed only on local
disk is now pushed to `origin/main` via the GitHub connector (§4 rule 1b). The standing
"un-pushed work" risk that bit this project twice is closed for this batch.

**D23 is RESOLVED — the subject fork is no longer open.** Karaja Sumba
(`karajasumba.com`, Sumba ikat weaving, owns her site) is the audit subject. Nurul
Akriliyati (Tenganan geringsing) is retained as **before-state evidence only** — she is
third-party-mediated, so she cannot be a conversion-facing client subject. Beadwork stays
as the real observed technical finding, not as the demo subject. Rationale (founder's):
an owned site is the only place a CTA can convert; third-party presence is rented traffic
with no client surface.

**The agency site is BUILT and LIVE — W3 is done, with a real build trail.**
`https://embold-r-ai-visibility.geo.hashmeta.tech` (home, terms, privacy). Built end-to-end
with Hashmeta AI through the connector: `create_site` → analyze → `plan_site_pages` →
`generate_site` (11 steps) → deploy, ~8 credits. Then iteration two: content cleanup
(6.7 cr) removed a template placeholder card and corrected two overclaims; privacy policy
rewritten (7.1 cr) after probing the live site and finding exactly one cookie
(`vsl_visitor_id`) contradicting the generated policy's analytics claims; redesign (19.9 cr)
after the founder rejected the first result — homepage 298 KB → 170 KB. One 30-day trial
licence consumed (hackathon invite code). **The `emboldr` prefix was NOT taken**: switching
requires a brand-new deployment, which the founder explicitly forbade as a duplicate.

**RUN-006 is the strongest evidence we have.** Within ~24 h of publishing, `ClaudeBot`
(Anthropic, purpose: training, 3 fetches) and `OAI-SearchBot` (OpenAI, purpose: search,
1 fetch) hit the site — 4 fetches total, previous 30 days **0**, only path `/robots.txt`.
That is the exact file class returning **HTTP 500** on the beadwork subject. Hard limits,
do not upgrade: this is **discovery**, not indexing/ranking/citation; `aiReferrals` = **0**
sessions; Google Search Console and Bing Webmaster are both **disconnected** (zero query,
impression or position data exists); the 6 human visitors on 21 Nov are **self-generated**
(100% bounce, all `direct`, US datacentre IPs + one SG hit = the founder), never traffic.

**RUN-005 Karaja baseline + conversion-path audit.** She is in the "has infrastructure"
bucket: 200s across home/robots/sitemap, 2 JSON-LD blocks, canonical, 9-URL sitemap, and
Squarespace's default robots.txt **explicitly permits** GPTBot/ClaudeBot/CCBot/
Google-Extended. So her rescue lever is **content and entity surface, not crawl repair** —
a clean contrast with the beadwork 500s. Conversion is **fully mediated**: WhatsApp links
(131 individual weaver numbers on meet-the-weavers), Instagram, **zero** email links, one
form; `/contact` and `/donate` have empty meta descriptions; pages 500–870 KB. Gaps: no
`lang` attribute, generic title, only 9 URLs. A 7-query set (K1–K7) is drafted at
`runs/RUN-005-karaja/QUERY-SET-DRAFT.md`, **awaiting founder approval to enter
`queries.yaml` as subject S6** — that is a D-list change, so it is the founder's call.

**Also new:** `runs/RUN-003-hosting` (QW Pages gate: `/`, `robots.txt`, `sitemap.xml` all
200 — but this proves root-file *delivery* only, **not** GSC/Bing verification or IndexNow
acceptance); `runs/RUN-004-founder/SCRIPT.md` (P3 manual batch, still **not run**);
`runs/ITERATION-2-2026-11-21.md`; `design.md` §10b now cites six live visual-reference URLs
(status-checked 22 Nov) behind the redesign; `docs/PRD.md` §14 Idea Vault holds the KIV items
(stylised QR, mobile/tablet MVP, own-site ranking experiment, owned-site subject preference).

**A marketing sub-agent is now live** (chatId `mwq1cvctyscvqu7b`) — responsibilities and
limits in §3. It has `output/video-script-v1.md` and was briefed on 22 Nov to produce v2
against the resolved subject, the real Hashmeta trail and RUN-006. **It has not generated
any visuals**; the founder reviews the script first.

**Standing instruction for every future session / device (founder, 22 Nov evening): the
FIRST thing any new agent session does in this project is spin up (or resume) a dedicated
chat agent named `marketing`.** Its role and responsibility: **everything demo-video and
marketing** — the ≤3:00 submission video (script, storyboard frames, thumbnail, OG card,
favicon/logo candidates, music, assembly), YouTube metadata, brand assets and any
promotional copy. It works from `output/demo video.md` (the master brief: frameworks,
structures, design tokens, asset inventory, pricing narration, evidence inventory,
production pipeline) plus `output/video-script-v2.md` and `output/video-assets-spec-v1.md`.
Hard limits unchanged: no publishing, no YouTube upload, no form submission, no invented
evidence — those stay founder-only. The existing live marketing session IS this agent
(chatId above); on any new device, recreate it with this paragraph as its charter before
doing other work.

**Still not proven — unchanged and still load-bearing:** no engine-answer grades for any
subject (P3 is the only path and needs the founder's signed-out in-country browser); no
before→after pair exists; no indexing, ranking or citation improvement; the beadwork 500's
**cause** is still unknown (D23 forbids a causal story); the agency site has no working
contact route, so it cannot convert anyone; credits-per-run remain `unsupported` in this
environment.

**Pricing structure for demo feasibility (founder instruction, 22 Nov evening — supersedes
the "pricing on request" stance for *narration purposes only*).** Three tiers: free, an
upsell-bait tier, and the true paid plan. Benchmarks (verified 22 Nov 2026): Ahrefs Lite
$129/mo, Standard $249/mo, Advanced $449/mo (ahrefs.com/pricing via Activepieces, 3 Nov 2026
read); Semrush Pro $139.95/mo, Guru $249.95/mo, Business $499.95/mo (Backlinko/Semrush,
updated Feb 2026). Rule: undercut by **25% monthly, 35% annually (annual per-month)**:

| Tier | Purpose | Monthly | Annual (per-month) | Benchmark undercut |
|---|---|---|---|---|
| **Free** | the free check (one subject, four paths — the tool itself) | $0 | $0 | — |
| **Bait / entry** (upsell bridge) | visibility monitoring, limited subjects | **$96–105/mo** | **$84–91/mo** | 25%/35% under Ahrefs Lite ($129) / Semrush Pro ($139.95) |
| **True plan** (what we want customers on) | full programme: audit + ≤10-asset rescue + re-measure + briefings | **$187/mo** | **$162/mo** | 25%/35% under Ahrefs Standard ($249) / Semrush Guru ($249.95) |

Narration line for the demo (feasibility segment): tools like Ahrefs and Semrush charge
$129–250 a month *before* any human looks at your site; our entry tier undercuts them by a
quarter, and the work — measurement, bounded fixes, honest reporting — is done by agents.
**Guardrails:** (a) the "trap bait" framing is internal positioning language — never appears
on the site or in the video verbatim; (b) the live site still says "pricing on request";
if these numbers go public on the site that is a founder release-gate decision, not an
agent edit; (c) prices are plan figures, not measured credit costs — D6c (margin claims
only from measured credit cost) still forbids any margin/profitability claim.

**Founder MVP recording for the video — yes.** The marketing agent cannot fabricate
screen captures of the tool or of founder-in-country browser checks. What the founder
should record (screen recording, 1920×1080 if possible): (1) the free-check tool running
on a real URL; (2) the P3 engine-answer captures (if that batch runs); (3) optionally a
narration voice track. The marketing agent then edits everything into the ≤3:00 cut with
the already-rendered frames, generated music and VO. Raw clips can be dropped into
`output/` and the marketing session picks them up.

### 21 Nov 2026 — planning device (previous delta, retained for audit)

- **First real data exists.** `runs/RUN-001-before/` = 3 domains × 4 paths, `findings.fetch.jsonl`
  + `followup-user-agent.jsonl` + a README written at evidence-class level.
- **The subject decision got empirical.** Mokko's structured-data baseline *disproves* "all real
  trades are invisible" — which makes our honesty stronger and means the fixed layer must be the
  500 site (crawl-guidance gap) or Suikoushya (no structured data, multilingual). **D23 is yours.**
  *(Superseded 22 Nov: D23 resolved to Karaja Sumba — see above.)*
- **SKILL S1 can finally say `CONFIRMED`** — fetch-grade extraction + an artifact path, not a plan.
- **Everything I could *not* do:** no grades (they need engine answers), no publish, no
  submissions, no connector calls (every pool 401s from this sandbox), no cause for the 500.
  *(Partly superseded 22 Nov: the GitHub and Hashmeta connectors both work from the Windows
  device; publish and a real Hashmeta build are done. Grades and the 500's cause are still open.)*
- **Nothing from the other device has appeared on `origin/main` yet** (`git log HEAD..origin/main`
  empty as of `c1d6808`) — no branch collisions to resolve.
