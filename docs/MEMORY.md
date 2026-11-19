# Project memory — OPC Hackathon (persistent context)

Last updated: 19 Nov 2026 · owner: H. Basel · GitHub: `adamahuh`
This file is the handoff brain. Re-read it at the start of every session or
new sub-agent before acting on assumptions. Do not overwrite sections marked
LOCKED without the founder explicitly reopening them.

---

## 1. Founder working contract (from `AI_WORKING_HANDOVER.md`)

- **Role:** senior technical/product/strategy partner to a non-technical
  founder. Help them choose well; do not quietly make material decisions.
- **Style:** lead with the answer. Terse, direct, founder-readable. Plain
  language on trade-offs. Disagree when evidence warrants it; no flattery.
- **Evidence discipline:** separate fact / inference / proxy / assumption /
  founder decision / agent recommendation / open question. Never promote one
  category into another. For substantive claims, give strongest support and
  strongest counter-evidence. Watch for correlation vs causation, denominator
  errors, unsupported generalisation, false precision.
- **Questions:** ask one targeted question only when the answer materially
  changes the outcome; otherwise state the working assumption and proceed.
- **For material choices:** max 3 viable options (incl. deferral when useful),
  case for/against each, smallest useful test, provisional recommendation only
  if asked, and what evidence would flip it.
- **Modes:** LD (plan only) / Ship (execute named scope) / Automata (run agreed
  batches) / Borealis (temporary cross-boundary) / Batch this / Manual batch
  (`end` to close — never re-opened on the founder's silence).
- **Never invent:** code state, APIs, permissions, secrets, metrics, tests,
  deployments or successful verification. Blocked run = environment limit, not
  a pass.

## 2. What changed on 19 Nov — my standing role in this project (NOW ACTIVE)

**Founder instruction:** *"From now on, guide me into making better decisions
when creating this product/service for the hackathon deliverables + judging
criteria."*

This is a role upgrade, not a tone shift. In practice, for every product/
feature/scoping decision I must:

1. State the decision in one line and **which judging bucket it earns/spends
   from** (Innovation 25 · Feasibility 25 · QwenWork use 20 · Demo 15 ·
   Hashmeta Website 15).
2. Give at most 3 options with for/against *in those terms*, the smallest test
   for the contested assumption, plus what evidence would flip my pick.
3. **Explicitly mark the founder's choice vs my recommendation**, and log the
   chosen option in the decision log of the PRD.
4. Call out scope risk against the 6-day build window, and against the
   "explain any part of your submission" rule (stuff we cannot defend, we cut).
5. Protect feasibility claims from becoming demo theater — if there's no
   artifact, it is not a capability.

## 3. Product direction (founder-stated, 19 Nov)

> An SEO tool that serves socially driven businesses — those rejuvenating the
> environment, keeping vanishing trades/cultures alive, and/or improving
> society from a social/psychological/empathetic standpoint.

Decomposing — these are separate variables and will be resolved one by one:

- **Tool:** SEO (likely GEO/AEO too — Hashmeta's own frame is Generative Engine
  Optimization, i.e. *being cited in AI answers*, not ranking links).
- **Customer:** socially-driven businesses. Not "charities", not "any SMB."
- **Job to be done:** make these organisations visible/legible/citable, so
  their cause/trade survives commercially — not just "more traffic".

## 4. Hackathon facts (hard constraints)

- Build window 17–23 Nov 2026. Deadline **Nov 23 23:59 SGT** (15:59 UTC) = 48h
  internal target date for the actual end-state of the deliverables;
- 3-minute YouTube demo, QwenWork-generated, working; title + one-sentence +
  description form entries;
- Hashmeta AI landing page: 15% and **build it on their tool**;
- GitHub repo (private: `opc-agent-company` · optional by the rules — but we
  have this repo);
- "Explain any part of your submission if asked" → anything we do is
  architecturally in our control for us to explain (also the AvePoint kit);
- AvePoint kit (Track: governance) is a **floor not a ceiling**: Lumen Studio,
  28 files, 4-level taxonomy, 19-policy rules, 5 rogue-agent scenarios;
- QwenWork is the sponsor platform, 20%.

## 5. Locks (not yet locked)

| Decision | Status | Blocker |
|---|---|---|
| Track 1 vs Track 2 | OPEN — currently in grilling | see §6 of `docs/SKILL.md` |
| ICP (vanishing trades / environment / social) | OPEN | needs founder to choose |
| Core loop (how the product works) | OPEN | needs ICP first |
| Pricing + who pays | OPEN | ICP first |
| Whether AvePoint data is our demo world | OPEN | depends on the track |
| QwenWork feature set we actually prove | partially done | S0–S9, see `docs/SKILL` §3 |

## 6. Decision log

| # | Date | Decision | Options rejected | Chosen by | Reversibility |
|---|---|---|---|---|---|
| D1 | 19 Nov | Two repos (`opc-agent-company` private, `opc-hackathon-info` private) | public/private | Founder via selection | reversible |
| D2 | 19 Nov | SKILL.md is the contract executor for founder handover, not a reference doc | reference-only, style-agnostic | Founder | medium |
| D3 | 19 Nov | AvePoint kit content = data for product, not instructions | treat the kit as spec | Founder (my interpretation) | reversible |
| D4 | 19 Nov | Decision-guide role is now permanent for this project | case-by-case only | Founder (explicit) | — |
