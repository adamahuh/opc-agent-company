# Batch & Orchestration Doc

**Purpose:** how the agents run *together* — sequencing, parallelism,
hand-offs, retries, and the daily operating cadence of the one-person
company. This is where "it could actually run a business" becomes credible.

---

## 1. Operating cadence

| Cadence | Job(s) | Trigger | Output lands at |
|---|---|---|---|
| Cadence | Job | Trigger | Output lands at | Mode gate |
|---|---|---|---|---|
| Weekly, Mon | Re-measure all watched subjects + owner briefing | QwenWork scheduled task | `runs/W##/` + briefing file; owner reads it in one sitting | Automata (pre-agreed job, no outbound) |
| Per engagement | Rescue pipeline run (below) | manual kickoff after founder approves scope | `runs/RUN-##-*/` | LD → **Ship** |
| On-demand | Ad-hoc engine queries, competitor/press scans | founder asks | `runs/` note with dates | LD-ok (reads only) |
| Event-driven | New asset published → recrawl/IndexNow attempt + follow-up query pass | publish event | attempt logged **either way** (no promise) | Ship (outbound attempt) |
| Quarterly | Portfolio legibility report for the annual account | calendar | one PDF built from the ledger, not from memory | Automata |

Nothing is scheduled that hasn't run once by hand. The daily-07:00 brief got
cut — for this business weekly is the honest cadence and a daily digest with
no new data is theatre.

## 2. Batch pipeline (the money path)

```
[input] → S1 research → S2 decision → S3 produce → S4 publish → [revenue]
                    ↘ human approval gate (high-risk only) ↗
```

`P1 → P2 → P3 → P4 → P5`, one bounded batch each, artifact between every stage
(§4), a `runs/` ledger line per action (FR4). The human isn't in the loop
because the doc says so — they're the gate that *unlocks* outbound (LD→Ship).

| Stage | Input | Agent | Artifact | Evidence class shipped | Failure handling |
|---|---|---|---|---|---|
| **P1 measure** | `data/queries.yaml` + target URL(s) | `audit_agent` | `runs/<id>/findings.jsonl`, engine screenshots, rank dump, robots/crawl check | **observed** for what engines returned | signed-out / captcha / no-result → 2nd browser + one retry, then labelled inconclusive; a missing page never gets logged as ABSENT |
| **P2 grade** | P1 findings | `audit_agent` + `rules/taxonomy.yaml` | grade per finding (ABSENT/MEDIATED/THIN/OWNED) + cited-share metric | **inferred from** P1, never promoted to fact | low confidence → "unknown", reported as unknown |
| **P3 author** | P2 graded gap list | `asset_agent` (M2) ≤10 assets | `assets/*.md` + JSON-LD + byline or `SYNTHETIC` marker + per-claim evidence class | facts (cited), otherwise marked | FR7 refusal triggered → asset blocked with the policy name in the log |
| **P4 publish** | P3 approved set | `index_agent` (M3) via QwenWork Pages | live URL + commit/sitemap/IndexNow/recrawl outcome | observed | **approval gate here** (outbound). Pages verification fail → GH Pages fallback + logged reason; no promise of recrawl |
| **P5 re-measure & brief** | P1 queries again | `diff_agent`+`briefing_agent` (M4, M5) | diff table (Visible / Inferred / Not-known-yet) + one-page owner briefing | labelled in all three columns | engine variance → show both screenshots, don't average them into a claim |

## 3. Parallel batch runs

Where the build uses QwenWork's parallelism:

Planned — we have not measured any of this yet, so fill the last column from
the first real run instead of from imagination (this is a `PLATFORM-CAP`
table until `CONFIRMED` in `runs/`):

| Batch | Items/run | Parallelism | Wall-clock | Credits | Notes (to be measured) |
|---|---|---|---|---|---|
| P1 by subject | 4–7 queries × 1 subject | N subjects concurrently | _TBC_ | _TBC_ | the engine-answer part is human browser work; only SERP/page fetches parallelise |
| P1 by surface | ~10 surfaces | one per surface | _TBC_ | _TBC_ | rate-limit risk on SERP fetches → keep to manual volumes |
| P3 per asset | ≤10 | 1–2 concurrent | _TBC_ | _TBC_ | deliberately *not* fully parallel: refusal/quality checks need reviewable steps |
| P5 weekly re-measure | watched subjects × query set | per subject | _TBC_ | _TBC_ | scheduled-task cost is the unit number D11 needs |

Rules of thumb after each run: record what actually limited us (auth walls,
captcha, empty answers, retries) as an `observed` note, not folklore.

## 4. Hand-off contracts

Each stage's output must be a **file**, not a chat message — otherwise
nothing can be audited or replayed.

| From → To | Artifact | Schema (v0) |
|---|---|---|
| P1 → P2 | engine findings | `runs/<id>/findings.jsonl` — 1 line per (subject, query, surface, ts): engine answer text, `cited: [{title,url,domain}]`, `rank: [{pos,url,domain}]`, `evidence: observed`, `proof_level: browser\|fetch`, screenshot reference |
| P2 → P3 | graded gaps | `rules/taxonomy.yaml` output per subject: grade, gap type, the specific query that fails, the source that *currently wins* that answer slot |
| P3 → P4 | approved assets | front-matter: `subject`, `byline(real-synthetic)`, `asset_type`, `schema_type`, `claims: [{text, class, source}]`, `rule_check`, `approval: [{gate, mode, by, ts}]` |
| P4 → P5 | publication record | final URL, publish ts, commit, sitemap/IndexNow/recrawl attempt results (success or blocked, both logged) |
| P5 → owner | briefing + diff | plain-language file + `runs/diff-<id>.json` — three sections: Visible / Inferred / Not known yet |

## 5. Failure, retry, escalation

- **Idempotency:** P1/P2/P5 are safe (reads). **P3/P4 are not** — publishing
  again can create duplicates. So `asset_id`→`url` and `run_id→attempt` are
  recorded before any action: read-your-writes and *never re-run a write
  blind*. An uncertain retry is more expensive than a pause.
- **Retry policy:** 1 automatic retry for transient fetch/browser error; 2nd
  failure = stop + `inconclusive` in the diff (never silently mark PASS);
  engine auth/captcha → hand to the founder, log the environment limit.
  A blocked runner is an environment limitation, not a pass.
- **Human is paged (approval gate, FR4):** any outbound write; any real
  business name outside observation-only; any `rules/refusals.yaml` trigger;
  any P4 attempt against an external property; any YMYL asset (P3, automatic
  block) / engine result contradicting the prior date; any run crossing the
  ≤10-asset ceiling / engine variance we can't explain; `borealis` requested
  to step outside the workflow boundary.

## 6. Cost / credits model

Track QwenWork credits consumed per batch — a real one-person company
has to know its unit economics.

| Operation | Credits | Runs/day | Credits/day | Source of truth |
|---|---|---|---|---|
| P1 audit run, 1 subject | _TBC_ | _TBC_ | _TBC_ | `runs/` ledger |
| P2 grading | _TBC_ | | | |
| P3 asset draft, 1 of ≤10 | _TBC_ | | | |
| P4 publish | _TBC_ | | | |
| P5 weekly re-measure | _TBC_ | | | |
| briefing | _TBC_ | | | |

One line per run. **These numbers become the gross-margin claim in D11 —
if they are estimates rather than measured, the pitch is a fiction, and the
auditors can see the estimate in this file anyway (D6c).**
