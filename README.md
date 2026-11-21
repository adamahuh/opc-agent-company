# OPC Agent Company — Living Trades Visibility

**One-Person Company Hackathon 2026 · QwenWork × Hashmeta AI · Track 1**
Build a company of one, run by your agents — and show it in a 3-minute demo.

**Status:** `BUILD-PREP` · decisions D1–D20 · **no product code executed yet** (everything
"run" so far is a logged read-only web lookup) · submission deadline **23 Nov 2026 23:59 SGT**
(internal target: 21 Nov)

## The one-liner

A one-person agency on QwenWork that makes vanishing trades, heritage custodians,
environmental-restoration operators and community organisations **the answer that
AI engines and search actually give** — measured, then fixed, then re-measured.

| Item | Value |
|---|---|
| Track | 1 — Business Operations & Automation (D5) |
| Form | Productised service ladder: entry **Rescue** → institutional **annual account** (D7). No SaaS, no dashboards, no multi-tenant auth. In-window naming: "Rescue" and "Annual Account" are working names (D12) |
| Buyer | Institutions with a preservation/programme mandate (councils, museums, guilds, heritage & sustainability programmes). Government = buyer, not proof (D6d) |
| Beneficiary | The trades, practitioners and their local ecosystem — the flywheel, never the ICP (D6d) |
| Surfaces | ChatGPT, Gemini, Perplexity, Claude, Copilot, Grok, AI Overviews, DeepSeek, Ernie, Bing, DDG, YouTube/IG/TikTok discovery, Naver/SEA regional engines (D6a) |
| Demo subject | Two layers (D9): measured on **real** SG businesses (public observation), fixed on **one synthetic** business clearly labelled as modelled on real ones |
| Publishing | QwenWork Pages for the synthetic subject site; no domain bought (D15). GitHub Pages only as fallback (unverified) |

## Read in this order

| # | File | Why |
|---|---|---|
| 1 | `docs/AI_WORKING_HANDOVER.md` | Founder working contract: decision classes, proof levels, mode gates. Everything below obeys it |
| 2 | `docs/MEMORY.md` | Role, facts, D1–D15 **decision log**. Resume point for any new session or agent |
| 3 | `docs/EXECUTION.md` | The plan: stack, devices/accounts, M1→M7 build order, levers L1–L10 + refusals, engine access matrix, risks |
| 4 | `docs/PRD.md` | Problem, requirements FR1–FR7, non-functional, open items |
| 5 | `docs/SKILL.md` + `docs/CANDIDATES.md` | Skill-status ledger vs `rules/`-backed claims, and real shortlist (verified own-sites) we use for the "before" evidence |
| 6 | `docs/QUERIES.md` → `data/queries.yaml` | Instrument spec + the exact queries we run. Nothing enters the video without all four evidence types |
| 7 | `docs/HANDOVER_2026-11-19.md` | Chronological session log — see the last addendum for where we paused |
| 8 | **`docs/HANDOVER_CROSS_DEVICE.md`** | Device-to-device handover (founder's `change` / `resume` commands): progress + pending P1–P8 with owners, the **sub-agent responsibility-replication rule** (project context only), and the durability/honesty rules the other device must keep |

`docs/{BIZ_MODEL,BATCH,DEMO_SCRIPT,WEBSITE}.md` were filled from D5–D15 in the
19 Nov doc round (`HANDOVER addendum 5`). Their open holes are **unfilled on
purpose**: pricing numbers wait for measured cost (D6c/D11), the website waits
on Hashmeta access, and the demo's bracketed figures wait on M1.

## The repo is the evidence

```
agents/  audit / asset (≤10 per engagement) / index / diff / briefing
rules/   levers.yaml · taxonomy.yaml · refusals.yaml · scoring.yaml  ← enforceable, not prose
data/    queries.yaml (5 subjects, multi-lingual, intents)
src/     serp_client.py · ai_client.py · now.py · report.py · diff.py
runs/    RUN-001-before/ · RUN-002-after/ + ledger.jsonl   ← committed on purpose
docs/    the paper trail a judge can read in one tab
```

> `.gitignore` deliberately un-ignores `runs/*.log`: the audit ledger is the
> 20%-scoring evidence. Never add broad ignores (`data/`, `runs/`, `*.log`)
> — it silently drops proof. Secrets: env only, `.env` stays ignored.

## Judging map

| Weight | Where we earn it | Artifact |
|---|---|---|
| 25% Innovation | "We sell the technique most AI SEO tools would rather you not ask Google about" — refusals-as-features, grounded in Google's own docs (D14) | `rules/refusals.yaml` + `EXECUTION §6` table with sources |
| 25% Feasibility & Viability | Buyer identity, price, marginal cost, first-dollar path | `BIZ_MODEL.md`; credits per run from `runs/` logs |
| 20% QwenWork platform | QwenWork runs the whole loop *and publishes the subject site* | task/parallel runs, scheduled briefing, published Pages URL, approval gate shown |
| 15% Demo | 2:50 recording, D10 posture A+B: before → build → publish → re-measure → briefing | `DEMO_SCRIPT.md` + YouTube link |
| 15% Hashmeta website | Live, customer-grade page built with Hashmeta AI. Connector =
**Enabled ✓ / Authorization ✓ / no website-builder action**, so the page routes via
organiser question or Hashmeta console — see `WEBSITE.md` "paths" | **open** — not dropped,
not faked |

## Hard submission checklist

- [ ] YouTube link (≤3:00, generated with QwenWork, product visibly working)
- [ ] Title · one-sentence description · project description → form
- [ ] Submit by **23 Nov 23:59 SGT** through the official form (late/incomplete = not judged)
- [ ] All contributors registered before deadline; pre-existing assets disclosed **at registration**
- [ ] All work created inside the 17–23 Nov build window
- [ ] Hashmeta AI page published
- [ ] Organiser answer received on the two ambiguities (Q-1/Q-2 in `docs/MEMORY.md`)

## What has *not* been proven yet — no implied status here

No audit measured, no asset generated, nothing published, no re-measurement
diff. Engine access claims are **fact for reachability** (tested 19 Nov) and
**TBC for verification**: we do not yet know Search Console / Bing WMT
verification works on a QwenWork Pages URL. `docs/SKILL.md` keeps rows the
tool cannot yet mark `CONFIRMED`.
