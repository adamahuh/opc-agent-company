# HANDOVER — Execution agent (build-side chat)

**You are the executor.** A separate planning chat made the decisions; your job is to
build inside the 17–23 Nov window and report honestly. Read in this order before
touching anything:

1. `docs/AI_WORKING_HANDOVER.md` — founder contract: modes, evidence classes, proof
   levels, refusal to invent verification. You inherit it in full.
2. `docs/MEMORY.md` — locked decision log (D5–D15) + durability facts.
3. `docs/EXECUTION.md` — M1–M7 milestones, accounts/devices, engine access matrix,
   levers L1–L10, refusals, risk register.
4. `docs/PRD.md` FR1–FR7 (contract) · `docs/BATCH.md` P1→P5 (pipeline) ·
   `data/queries.yaml` + `docs/QUERIES.md` (M1 instrument) · `docs/CANDIDATES.md` (subject).

## 0. Repo + environment — read before assuming anything

```bash
git clone https://github.com/adamahuh/opc-agent-company      # product
git clone https://github.com/adamahuh/opc-hackathon-info     # rules/deadlines (reference)
```

Both **private**: you need GitHub access for the `adamahuh` account (the QwenWork
GitHub connector, or a token the founder supplies). Never echo it, never hardcode it,
never commit it.
**Fact, learned twice:** in this sandbox, working copies under `/tmp` have been wiped
mid-session and the `gh` credential-helper config vanished with them. So: clone into a
persistent path, commit+push frequently, and never treat a local copy as the only copy.
**Verification rule:** do not report "pushed" unless `git status -sb` shows
`main...origin/main` with no ahead marker **and** the remote commit equals local `HEAD`.
Check, then claim.

## 1. Locked — do not reopen silently

| Ref | Decision |
|---|---|
| D5 | **Track 1** — the product is the agency's worker agents; oversight is a feature, not the product |
| D7 | Productised service ladder (Rescue → institutional annual account). **No SaaS, no dashboards, no auth, no billing UI, no multi-tenancy** |
| D6a | Surfaces = "everywhere the answer is found": AI engines + Bing/Baidu/Naver + social discovery. Chrome/Safari are **browsers** defaulting to Google. Never frame as "we rank you on Bing" |
| D9 | **Two layers:** measured = real SG businesses, **public observation only**; fixed = one **labelled-synthetic** business. No AI copy published under a real practitioner's name |
| D10 | Posture **A+B**: audit → assets → publish → scheduled re-check, plus *one* retrieval-level demonstration (an engine reading our just-published page). **C refused — no projected visibility scores** |
| D13 | Three impact verticals (trades / environmental / community-care) **with the YMYL gate**: never generate health/legal/financial claims |
| D14 | Technique standard = Google primary documentation. llms.txt, chunking, inauthentic mentions and bulk AI pages are **not** sold; scaled-content-abuse exposure is a hard product constraint |
| D15 | **No domain purchase.** Publish via QwenWork Pages; GitHub Pages only as fallback |
| §3f | Demo = problem / walkthrough / feasibility, ≤3:00, YouTube. **Hashmeta website parked by the founder** — do not spend build time there |

Reopen a lock only if the founder asks. If new evidence contradicts a lock, **say so and
stop** — don't quietly change direction. A new observation justifies a proposal, not a
decision.

## 2. Scope now — M1 (audit engine). Nothing else

**Objective:** given a target and `data/queries.yaml`, produce a dated, auditable
before-state in `runs/<id>/`: per-query inventory, crawlability/robots/schema/entity
checks, and `report.py` grading **ABSENT / MEDIATED / THIN / OWNED** with the
cited-share-of-answer metric.

Acceptance checks (all must be true before you call M1 done):

- [ ] output is **files**, not chat text — `findings.jsonl`, screenshot/HTML refs, and one
      ledger line per performed action
- [ ] every record carries `evidence: observed|inferred` and `proof_level`, with a date
      taken from the artifact, never written in prose
- [ ] re-running P1 is safe (reads idempotent); a failed fetch logs `inconclusive`, and
      **absence of a page is never recorded as absence of visibility**
- [ ] refusals/ceiling are enforced as data (`rules/refusals.yaml`, ≤10 assets read from
      config), not as comments in a prompt
- [ ] unit cost is emitted per run (credits consumed) — this number is what act C needs

**Explicit non-goals:** Naver *automation* (their robots.txt disallows all crawling →
advisory gap only), bulk SERP scraping, dashboards, deployment pipelines, keyword-tool
parity, and any number that gets "estimated" into the margin story.

## 3. The boundary you cannot cross: engine answers are founder-side

Verified on the planning side: **there is no conversation path into consumer chat
engines** (ChatGPT/Gemini/Perplexity/Copilot/Grok) from this environment. So the
engine-answer rows in M1 come from the founder's browser (Manual Batch: fixed queries,
dated screenshots, verbatim answer text) — **or** from an official API where the founder
supplies keys (OpenAI/Google Gemini/Perplexity all have web-connected modes; **TBC**, and
API answers may differ from browser answers — label which one you got and never
substitute one for the other silently).
Your build covers the deterministic half: fetching and parsing public pages,
robots/sitemap/crawlability, structured-data validation, entity/listing checks,
IndexNow attempts, and the diff engine. Do not fabricate engine output to fill a table.

## 4. When you stop and ask

- Any outbound effect: publishing, pinging, messaging, anything touching a property we
  don't own → **Ship mode, founder's go**. A published-page experiment is the *only*
  outward thing currently in scope (M3, our own synthetic site).
- Any real business name appearing outside observation-only context → stop (D9).
- Any YMYL claim, any credential byline you cannot verify → stop (D13).
- A decision that changes behaviour, ownership, timing, data or a contract → stop and
  give options + trade-offs, don't pick.
- Anything you cannot explain out loud on 11 Dec (the "explain any part of your
  submission" rule) → don't ship it; say so.
- A blocked runner = environment limitation, **not** a pass. Report `unsupported`.

## 5. Report format after every batch (founder's contract, §5 of the handover)

1. files changed/added (paths) and commit hash
2. acceptance checks run, each **pass / fail / unsupported / not tested**
3. what the batch produced as artifacts (`runs/<id>/...`)
4. what remains **unproven** (explicit list — this line is not optional)
5. the next decision, framed as options, in the founder's scoring terms
6. credits consumed
7. handover file updated: added / changed / **removed/replaced** behaviour + contracts

Never present a plan as a verified result. Never mark founder QA passed.

## 6. Milestones & cut line (see `EXECUTION.md §3` for detail)

| Milestone | Definition of done | Priority |
|---|---|---|
| M1 audit | graded dated before-state, file artifacts | MUST |
| M2 assets | ≤10 rescue assets on the synthetic subject, evidence-classed | MUST |
| M3 publish | published via QwenWork Pages (+ **the verification TBC test**: does SC/Bing verification load on a platform subdomain — 10 min, day 1) | MUST |
| M4 diff | before/after + **Visible / Inferred / Not known yet** | MUST |
| M5 scheduled briefing | recurring job + plain-language owner report | MUST |
| M6 website | Hashmeta AI page — **parked** | deferred |
| M7 demo assembly | ≤2:50 shot list, no hidden cuts | SHOULD |

Deadline **23 Nov 23:59 SGT (15:59 UTC, 23 Nov)**; internal target **21 Nov** so a late
submission never happens. In-window only (commits before 17 Nov aren't ours; anything
pre-existing gets disclosed **at registration**, not in the form). If M3's verification
fails, say so in the video's honesty column — do not fake the first-party number.

## 7. Founder-facing assumptions you should inherit

Problem → walkthrough → feasibility is the demo spine; numbers in scripts are brackets
until M1 fills them; prices are *chosen*, costs are *measured* (D6c) and act C only
quotes what the ledger produced. The synthetic subject is labelled visibly, twice.

## 8. Known gaps / what we still don't know

Organiser answers pending: whether the website must be published *through* Hashmeta, and
whether "working live" permits a recorded end-to-end run. Hashmeta tool access unknown.
`Search Advisor`/Naver identity unverified. Whether QwenWork Pages allows SC/Bing
verification untested. No API keys confirmed present. Any of these can change scope —
flag them when you hit one rather than solving around it silently.
