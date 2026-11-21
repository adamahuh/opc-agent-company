# Cross-device handover (run this command on the other device)

**Written:** 19 Nov 2026 by the *planning* device · **for:** the *execution* device (new
QwenWork session, same `adamahuh` account) · **replaced by:** the next dated handover.
Founder's meaning of this file: `change` = write current progress + pending items so the
**other device can pick up the same body of work**, and — if it fans out sub-agents —
they carry the **same responsibilities** (not a shrunk scope), **inside this project only**.

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

Each writes its artifact path(s) + the checks it can and cannot show, and one line into the
next handover. None publishes or messages anyone; the founder's `Ship` instruction covers
exactly one named task and doesn't widen.

## 4. Durability + honesty rules the other device must keep

1. `/tmp` has been wiped **four** times. Clone into a persistent path; commit+push per
   milestone; GitHub is the store.
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

- **First real data exists.** `runs/RUN-001-before/` = 3 domains × 4 paths, `findings.fetch.jsonl`
  + `followup-user-agent.jsonl` + a README written at evidence-class level.
- **The subject decision got empirical.** Mokko's structured-data baseline *disproves* "all real
  trades are invisible" — which makes our honesty stronger and means the fixed layer must be the
  500 site (crawl-guidance gap) or Suikoushya (no structured data, multilingual). **D23 is yours.**
- **SKILL S1 can finally say `CONFIRMED`** — fetch-grade extraction + an artifact path, not a plan.
- **Everything I could *not* do:** no grades (they need engine answers), no publish, no
  submissions, no connector calls (every pool 401s from this sandbox), no cause for the 500.
- **Nothing from the other device has appeared on `origin/main` yet** (`git log HEAD..origin/main`
  empty as of `c1d6808`) — no branch collisions to resolve.
