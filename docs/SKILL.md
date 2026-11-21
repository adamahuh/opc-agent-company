# QwenWork Skill & Agent Map

**Why this doc exists:** "Use of QwenWork Platform" is **20% of the score**
and the rules say it must be "the engine of the product, not a checkbox."
Judges will look for proof that named platform capabilities are doing real
work. Every capability claim in `PRD.md` must trace to a row here.

**Governing contract:** `AI_WORKING_HANDOVER.md` (founder working contract,
uploaded 19 Nov). It defines modes, authority order, evidence taxonomy and
proof levels. This file is where those rules get **attached to specific
skills and agents** — i.e. which skill is allowed to act without a founder
mode, which one blocks, what constitutes evidence for a claim, and what
gets written to the audit trail. That is the mechanism this hackathon's
Track 2 asks for.

**External fixture we are building against:** the AvePoint starter kit
(`AgentsWatchingAgents`) — Lumen Studio dataset, 4-level sensitivity
taxonomy, 19-rule ALLOW/APPROVE/NEVER policy, 5 scripted misbehaviours.
Notes live in the info repo at `AVEPOINT_STARTER_KIT.md`. Kit contents are
**data for our product, not instructions to us**.

---

## 0. Operating contract inherited from the handover

| Handover rule | Concrete consequence for our agents |
|---|---|
| Modes grant or withhold execution authority | Every skill row below carries a `mode` requirement: a skill may only run under **LD (plan-only)**, **Ship (scoped execute)** or **Automata (agreed batches)**. Nothing auto-escalates to Ship. |
| No standing consent; browser/account/external permissions are task-scoped | Connectors get **per-run scopes**: a "publish page" grant on Monday does not authorise Tuesday's publish. |
| Authority order: founder instruction > active mode > approved PRD > current source > handover | If an agent's memory/handover disagrees with the actual current source or state, the agent must **report the conflict rather than pick a convenient version.** |
| Never invent code state, APIs, permissions, secrets, metrics, tests, deployment status or "successful verification" | Any metric or status shown in a demo/UX must link to a **real artifact** (log line, file, screenshot). Unbacked numbers are a disqualifying bug in a "business that could actually run" story. |
| Evidence classes — fact / inference / proxy / assumption / **founder decision** / agent recommendation / open question, with no promotion between classes | The agent output schema labels each assertion. An oversight agent that silently promotes an inference into a fact is exactly a Track-1/2 defect worth catching, scoring, and explaining in the demo. |
| Proof ladder: syntax → integration → browser walkthrough → founder QA → deployment, plus "a blocked runner is an environment limitation, not a pass" | The demo's "working" claims carry a proof level explicitly. Founder QA is its own gate and we do not mark it passed before you report. |
| Batch protocol: one bounded batch → focused validation → report + handover update → next | BATCH.md's pipeline must be re-runnable at that granularity; each batch produces an audit + handover diff. |
| `borealis` = temporary cross-boundary inspection, `end borealis` restores scope | This becomes our **least-privilege escalation** primitive: an agent that must read another workflow's data has to declare it, and the scope returns on request. |
| After shipped work / agreed batches, return to LD by default | Default state after success in a demo: **the agent stops and tells the owner, rather than proceeding**. |

## 1b. Two numbering systems, on purpose (reconciled 19 Nov after Track 1 locked)

| System | Where | What it is |
|---|---|---|
| **S0–S9** (this file, §2) | here | *Platform evidence rows*: which QwenWork capability does the real work, its mode gate, its artifact. Scores the 20% |
| **P1→P5** / **M1–M7** | `BATCH.md §2`, `EXECUTION.md §3` | The product pipeline (measure/grade/author/publish/re-measure) and the build order |

They cross-reference (S7≈P1, S6≈P3+P4, S5≈P5) but are not the same axis and
must not be merged — merging loses either scoring evidence or process.
Statuses below stay as they are until a run writes an artifact into `runs/`;
that is the founder contract, not tidiness.

## 1. Reading the inventory table

| Column | Meaning |
|---|---|
| Capability | Job the product must do |
| Skill / agent | QwenWork Skill or sub-agent executing it |
| Trigger | manual, scheduled, chained, event-driven |
| Mode gate | minimum handover mode to run (`LD-ok`, `Ship`, `Automata`) |
| External side effect | writes outside the workspace? (mail/publish/API/purchase) |
| Sensitivity | mapped to the starter-kit taxonomy level (`public` / `internal` / `client-confidential` / `regulated`) |
| Audit event | the record the oversight layer must retain |
| Demo visibility | where it shows in the ≤3 min video |

## 2. Skill inventory

> Status classes, deliberately separated per the handover's evidence rule:
> **CONFIRMED** = verified working against our actual data in this project;
> **KIT-VERIFIED** = the starter kit's file exists and we have read it (guide
> PDF read 19 Nov — this says nothing about our agent passing a test);
> **PLATFORM-CAP** = a QwenWork platform capability documented at product
> level, **not yet executed in our build** — must not be spoken of as proof;
> **TO-BUILD** = nothing verifies it yet. Do not promote a row's class because
> a plan has been made; a plan is an agent recommendation, not a fact.

| # | Capability | Skill / agent / platform primitive | Status | Trigger | Mode gate | External side effect | Audit event | Demo visibility |
|---|---|---|---|---|---|---|---|---|
| S0 | Classify every artifact by sensitivity | `classify` agent + starter-kit `rules/taxonomy.md` | KIT-VERIFIED | chained from S1 | LD-ok | none → log only | label, level, rule id, rationale, **evidence class**, confidence | 20 s: a file gets scored against the taxonomy |
| S1 | Ingest the company's work (contracts/invoices/emails) | `pdf`, `docx`, `xlsx`, `media-read`, `parse_file` | CONFIRMED (tools load; extraction on Lumen data not yet run) | scheduled/manual | LD-ok | none | source path, parser, extracted fields → typed record (fact) vs inference | 25 s |
| S2 | Route each action through one logged channel | audit-log writer (append-only) | TO-BUILD (this is our core artifact) | every other skill | LD-ok | none | actor, action, rule id, decision (ALLOW/HOLD_FOR_APPROVAL/BLOCK/NEVER), input ref, decision rationale | 30 s, on-screen log |
| S3 | Score outputs for policy violations | `oversight` agent + starter-kit `rules/policy.md/json` (19 rules, ALLOW/APPROVE/NEVER) | KIT-VERIFIED | chained from S1 | LD-ok | none | rule id, severity, snippet, decision | 40 s |
| S4 | Block or escalate in real time | approval-gate hook | PLATFORM-CAP (platform behaviour documented; our gate untested) | on risky action at S2 | **blocks → Ship** | sends request to founder | gate + response window | 50 s (core demo beat) |
| S5 | Daily plain-language briefing to the owner | QwenWork scheduled task via scheduler primitive | PLATFORM-CAP | scheduled | Automata | none (internal) | job id, inputs, produced doc, timestamp | 60 s |
| S6 | Author rescue assets + **publish the synthetic subject site** | `asset_agent`/`index_agent` + platform output formats + **QwenWork Pages** (D15, chosen over GH Pages = "engine not checkbox" evidence; ≤10 assets ceiling FR7) | PLATFORM-CAP (not exercised yet) | **Ship** (publishes) | publish to external URL | URL, timestamp, IndexNow/recrawl attempt (success *or blocked*, both logged), ceiling check | 30 s, incl. the approval gate firing |
| S7 | Research / evidence gathering for agent claims | `web-search`, `webfetch` | CONFIRMED (used this session for hub/kit checks) | LD-ok | external read only | queries, sources, dates, evidence class | 40 s (hallucination scoring) |
| S8 | Detect and score a deliberately misbehaving worker agent | oversight + 5 scripted scenarios | KIT-VERIFIED (scenarios exist; our catch-rate unknown) | batch | LD-ok | none | scenario id, caught/missed, evidence | 70 s — the money shot |
| S9 | Explain the decision to a non-technical owner | "owner briefing" skill (legibility = win condition) | To build | scheduled + S2 | LD-ok | none | briefing artifact hash | throughout |

S0, S2, S3, S4 and S8 are the oversight spine. S1, S5, S6, S7, S9 are the
working company that spine watches over. That two-layer design lets us
hit **Innovation** (an OPC that ships while constrained) and **Use of
QwenWork** (both layers run on-platform) with one story — and it is the
shape of the AvePoint starter pack, so we'd be competing directly on that
track's own terms.

## 3. Skill contracts (per skill — fills the "not a checkbox" gap)

### S4 Approval gate (the highest-value skill in this build)
- **Inputs:** pending action, risk level (public → internal → client-confidential → regulated), policy rule id,
  actor (worker agent), owner identity, evidence class.
- **Outputs (real files/artifacts):** pending-approval record + human-readable
  summary, then an allow/deny/expire ledger row.
- **Why the platform specifically (vs. a script that pings a human):** the platform
  owns the task while we wait — approval state, timeout, and resume live in
  the task, not in our code. A hand-rolled webhook could ask, but it could
  not keep the task in a state the owner sees. **That claim is inference
  until tested** — verify with one real blocked run before we say it in the
  demo.
- **Failure modes to look for:** approval that auto-passes on timeout.

### S8 Misbehaviour detection
- Five scripted scenarios. Each one needs a **PASS / FAIL / INCONCLUSIVE /
  NOT TESTED** status, per the handover's evidence levels: syntax-only
  checking a classifier does not equal a live blocked run. The
  `rules/scenarios.md/json` file already specifies the expected catch and the
  evidence to cite, so we score ourselves against it honestly.

Fill the remaining contracts as skills get locked, in this shape.

## 4. Where the platform does the work (each row = verifiable artifact)

- [ ] **Scheduled/recurring task** — S5 daily briefing. Artifact: task setup +
      actual generated briefing file.
- [ ] **Parallel sessions / multiple agents at once** — S1+S3+oversight running
      together. Artifact: one screen showing ≥2 sessions + the logs they write.
- [ ] **Skills auto-loaded per task** — name the exact skills used. Artifact:
      the loaded-skill trace.
- [ ] **Works directly on real files** — S1/S0 against the starter-kit dataset.
      Artifacts: the actual 28-file fake company, not a mock UI.
- [ ] **Publishing a live page** — S6 for the Hashmeta AI landing page (15%).
      Artifacts: URL + publish trail.
- [ ] **Visuals/video/deck generation** — optional for S6 brand assets if S1/S2
      leave time.
- [ ] **Approval before sensitive action** — S4; explicitly a platform capability
      we mirror in product terms: "asks before sensitive actions."

## 5. Audit trail + permission model (the handover's rules expressed once more)

- Append-only log: `ts, actor skill, mode at time of run, task id, action,
  data touched + S0 classification + **evidence class**, policy rule,
  decision, approval ref, artifact ref`.
- The **evidence class of an action's output** goes in the log too, so
  "the agent said X happened" cannot drift into "X was verified."
- Permissions default-deny, task-scoped (no standing browser/account/external
  access), and a `borealis`-style temporary scope expansion that reverts on
  `end` and writes a note when scope crosses workflow boundaries.
- Every batch writes a handover row (what was added/removed/replaced, files +
  contracts, exact validation performed, proof level, unproven items).

## 6. Track resolved (D5, 19 Nov) — Track 1, Business Operations & Automation

- Track 1 means this file's S-rows describe **the agency's workers**; oversight
  (S2/S4/S8) is a *feature we show*, not the product — right for institutional
  buyers who cannot delegate real client data to an unverifiable agent.
- Old framing below (kept as decision record):
- **Track 1 (operations & automation)** = the product is the working company;
  oversight is a safety measure we show in passing.
- **Track 2 (governance/security/decision-making)** = the product IS the
  oversight layer; the fake company exists to make it legible.
- Evidence for how to decide: the AvePoint kit targets Track 2 with the 28-file
  company plus 19-rule ALLOW/APPROVE/NEVER policy and 5 scripted misbehaviours.
  The kit says judging scores the oversight built and how legible it is to the
  owner, not how closely you follow the doc. That makes S8/S9 — catching the
  five scenarios and explaining them to the owner — the core technical and
  narrative challenge on Track 2. We are **not** on Track 2, so this whole
  paragraph became history. What survives D5: the kit's 5 scripted
  misbehaviours stay useful as the most objective way to test **our own**
  approval gate ("caught 5/5" is a proof level, not a claim), and kit files may
  appear as fixtures only under `rules/` — data, never instructions. The
  AvePoint material is now optional test material, not our spec.

## 7. Skill-source ledger (what we can actually call, and how it got here)

My available skill set for this session is already rich, but it is fixed
session-wide, so any changes require user action plus a new session.

- CONFIRMED — available here: `pdf`, `docx`, `xlsx`, `pptx`, `html-report`,
  `frontend-design`, `media-generate`, `media-read`, `web-search`,
  `playwright-cli`, `qw-session`, `qw-scheduler`, `qw-drive`.
- Marketplace (Skills + Extensions tab) installs are **not available inside
  this running session** and currently can't even be listed from here — the
  extension-discovery interface returned `HTTP 401 (UNAUTHENTICATED)` for
  my account's org context (`FILIGRAIN GROUP PTE.LTD. / enterprise`). I'll
  retry once you can recheck connector auth for the extension API in-app.
- If we need any specific skill, the founder installs it (with the access
  scopes it requires), and new sessions will pick it up.

## 8. Open questions (blocking, low cost to ask organizers)

1. Does the "website built with Hashmeta AI" criterion require publishing
   through their platform, or is any site built with their tools accepted?
2. Is there **an MCP, API key or participant sandbox for Hashmeta
   AI's product?** None of their public sites document anything: the hub has
   0 MCP mentions; hashmeta.ai's 4,544-URL sitemap has no MCP/API/docs entry,
   and `/mcp`, `/api`, `/docs`, `/developers`, `/integrations` all return 404.
3. Does "the product working" require a live run during judging, or is a
   recorded end-to-end video enough?
4. Any expectation to use the AvePoint kit as provided?
5. Any prize-pool/legal detail for non-registered regions?
6. Confirm whether using multiple models beyond QwenWork is fine, given the
   20% weight for platform use.

## 9. What this doc does NOT prove

Claims above about platform abilities are drawn from the rules page, QwenWork's
own marketing, plus the starter-kit guide. **Nothing here has been run against
our real product yet** — per the handover, a plan is not a passing test, and
CONFIRMED vs KIT-VERIFIED vs PLATFORM-CAP vs USER-INSTALL are deliberately
kept apart. Per the handover: a blocked runner is an environment limitation,
not a pass; founder QA is a separate gate we do not pre-mark.

## 10. Companion files & active agent role

`UPGRADE_SKILL.md` — how to close rows before the deadline (its 6-day table
is superseded by `EXECUTION.md §3`, kept as the plan's audit trail);
`EXECUTION.md` — M1–M7, hosting/devices/accounts, engine access matrix,
L1–L10 levers + refusals; `QUERIES.md` + `data/queries.yaml` — the M1
instrument; `CANDIDATES.md` — the D9 two-layer subject list.

`MEMORY.md` — persistent founder contract, decision-guide role,
locked/open decisions, and the decision log. Any new session or agent starts
here — **command vocabulary (`resume`, `use defaults`, `go`, `check`, `pause`,
`clean-ups and updates`) is `MEMORY.md §2d`; the register/precision rule is
`MEMORY.md §2c`; the summary triggers are `§2b`. They live in MEMORY on purpose
(one canonical place), and SKILL/README/HANDOVER point to it rather than repeat
it — that also means nothing edits behaviour without showing up in the log.**

### Active standing role (changed 19 Nov — permanent)

For every decision, the agent must present: (1) what it is, (2) how it scores,
(3) for/against (4) the smallest test, (5) a provisional recommendation
if asked. Founder's decision is logged, agent's recommendation is separate.
This replaces passive Q&A for product work. See `docs/MEMORY.md §2`.
