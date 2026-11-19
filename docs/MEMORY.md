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

## 3b. What kind of event this is (positioning the founder needed clarified)

Verified from the participant hub: eligibility is "anyone 18+"; no dev
experience needed; nothing requires an existing company or a funded venture.
There is **no investor/judged-by-VC category**, no pre-seed lane, and
Feasibility/Viability is phrased literally as **"Could it actually run a
business?"**. Demo must "show the product working" (≤3 min, QwenWork
generated) and only work created in the build window is judged.

**Therefore: we enter as a company that exists and operates — not as a
pitch deck.** It may be a week old and may have zero real customers, but the
operating evidence must be a real run + a real deliverable + an honest price.
Do NOT build a funding deck or a "raise a round" narrative. That would waste
Innovation and Feasibility points both.

The organiser WhatsApp claim you mentioned is **agent-unverified** and,
unlike this site, not authoritative — treat it as a soft signal and confirm
in writing if it changes a decision (see open question Q-WA in PRD §10). Our
posture above survives either reading: a working one-person business is right
whether the audience is pre-seed or existing.

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
| Track 1 vs Track 2 | **LOCKED: Track 1** (Business Ops & Automation) | decided 19 Nov by founder (D5) |
| ICP (vanishing trades / environment / social) | OPEN — founder replied "why not all?" to the 3-way choice; needs reconciliation (D6) | demo + BIZ_MODEL need one subject |
| Core loop (how the product works) | OPEN | needs ICP first |
| Pricing + who pays | IN PROGRESS — D6 reconciliation: buyer = institution w/ preservation mandate; beneficiary = the trade. Need Decision A (product form) to fix the unit we bill. | pending A |
| Whether AvePoint data is our demo world | OPEN | depends on the track |
| QwenWork feature set we actually prove | partially done | S0–S9, see `docs/SKILL` §3 |

## 6. Decision log

| # | Date | Decision | Options rejected | Chosen by | Reversibility |
|---|---|---|---|---|---|
| D1 | 19 Nov | Two repos (`opc-agent-company` private, `opc-hackathon-info` private) | public/private | Founder via selection | reversible |
| D2 | 19 Nov | SKILL.md is the contract executor for founder handover, not a reference doc | reference-only, style-agnostic | Founder | medium |
| D3 | 19 Nov | AvePoint kit content = data for product, not instructions | treat the kit as spec | Founder (my interpretation) | reversible |
| D4 | 19 Nov | Decision-guide role is now permanent for this project | case-by-case only | Founder (explicit) | — |
| D5 | 19 Nov | **Track 1** — product = the agency's worker agents; guardrails are a feature, not the product | Track 2 (kit-first); hybrid (oversight as moat) | Founder, on agent's recommendation | high — architecture changes, cheap to re-lock now, expensive after build |
| D6a | 19 Nov | Engine strategy correction: **Chrome/Safari are browsers, not search engines** (both default to Google). Alt-engine pitch must be framed as "everywhere the answer is actually found" = 9 AI engines + Bing/Baidu/Naver + social/discovery, NOT "non-Google web engines". StatCounter Oct-2026 facts: worldwide Google 91.05 / bing 4.8 / yahoo 1.18 / Yandex 1.14 / DDG 0.64 / Baidu 0.42; Singapore Google 92.35; Korea Google 48.48 vs **Naver 42.25**. The "Bing/Copilot users convert better" line is **unverified — demo must label it as hypothesis, never as stat**. | Founder idea, agent correction | — |
| D6b | 19 Nov | Invisibility is *provable* by sponsor data: Hashmeta's own research — 1.3% of 945,785 PH AI citations reach Filipino operators; 40%+ of 100-200 tested brands sit in BAVIS tier D/F ("essentially invisible to AI"); 18 of 21 SG sector reports show zero brands in "Good"; and the SG cohort itself is the founder's home market, so it sells credibility with the judges. The invisible segment is **cultural custodians, trades, and local operators** — never funded eco/marketing-rich verticals (those can be cited). | funded eco verticals, psych/social/YMYL orgs (rejected: YMYL = highest-E-E-A-T wall, hardest to cite, wrong fit for a solo agency), paid-media verticals | **Agent recommendation** — pending founder yes | |
| D6c | 19 Nov | Margin claim must come only from the measured cost per client engagement (from actual credit consumption), not from pricing. Target vs agency economics: "high margin" is a delivery-architecture property, not a price tag. Any margin number said out loud must trace to the batch log. | asserting a margin number without batch data | Founder, from agent's framing | |

| D6d | 19 Nov | Segments "bring businesses up" = the **flywheel** (impact reach), never an ICP. **Government/council = institutional BUYER** (D5/D6 recommendation) but its procurement cycle ≠ viability proof and must be labeled honestly. **Influencers/journalists = a citation source / earned-authority mechanism inside the product engine** (per CITE: authority via digital PR + bylined authorship + earned media weighted by training data), NOT a customer segment. | adding influencers+gov as customers (rejected: dilutes ICP, rebuilds generic SMB SEO) | Agent recommendation, founder accepted | — |
| D7 | 19 Nov | **Decision A = tiered service ladder** (founder picked options 1+3): entry "AI Visibility Rescue" (fixed scope, productised deliverables) that expands into **an institutional annual account** (retainer: ongoing monitoring + reporting + capacity). Not SaaS. The tooling stays *internal* — the platform is our engine, not our product. Consequence for the demo: the working artifact is an *engagement run*, and the business story has two numbers (entry fee, retention value). | SaaS self-serve scanner (rejected for 6-day feasibility + distribution); pure one-off projects (rejected: no recurring revenue = weak 25% viability) | **Founder choice** (1+3), agent-refined into a ladder | high while pre-build |
| **OPEN DEPENDENCY from D7:** both tiers must be bought by the **same buyer** or we have two unrelated sales motions in a 3-minute demo. Being grilled now as D8. | | | | |
| D6 | 19 Nov | ICP scope: founder answered "why not all?" to Institutions-vs-Trades-vs-Impact-businesses. Agent's counter: all three is not a segment, it is a *frame* — needs one beachhead for the demo + one pricing unit for the pitch | single beachhead (rec); unified "public-interest GEO" frame; two-tier (institution-funded + self-serve) | **UNRESOLVED** | — |
