# PRD — One-Person Company Agent Stack

**Doc owner:** H. Basel · **Status:** v0.2 — direction locked, shape open
**Build window:** 17–23 Nov 2026 · **Submission:** 23 Nov 23:59 SGT
**Read first:** `MEMORY.md` (founder contract + decision-guide role)

---

## 1. Founder direction (given 19 Nov, verbatim intent)

> An SEO tool serving socially-driven businesses — those rejuvenating the
> environment, keeping vanishing trades/cultures alive, and/or improving
> society from a social/psychological/empathetic standpoint.

Decomposed into three independent variables we must each lock separately:

| Variable | Options on the table | Status |
|---|---|---|
| A. Product form | **LOCKED: tiered service ladder** — entry "AI Visibility Rescue" → institutional annual account. The tooling is internal (our engine), not a SaaS product. | **LOCKED 19 Nov (D7)** |
| B. Paying customer | **buyer = institution w/ preservation mandate** (museum / cultural council / guild / heritage programme); **beneficiary = the trade, its remaining practitioners, and the local ecosystem**. Open sub-question (D8): does the same buyer purchase the entry tier too, or does the entry tier sell to practitioners/guilds? Currently leaning "yes, same buyer" so we have one sales motion. Influencers/journalists are an internal *citation mechanism* (D6d), not a customer segment. | **PART LOCKED** |
| C. The visibility surface we win | **LOCKED: multi-surface, GEO-primary.** Framed as "everywhere the answer is actually found" = AI answer engines (ChatGPT, Gemini, Perplexity, Claude, Copilot, Grok, AI Overviews, DeepSeek, Ernie, and local/regional engines where Naver/Baidu dominate) + classic search + social discovery. **Not** pitched as "we rank you on Bing". | **LOCKED (D6a)** |

### Evidence for C (StatCounter, Oct 2026 — facts, quoted with source and date)

**GEO/AEO is the play, not classic SEO.** Reasons, with the counter-evidence:

- *Support:* Hashmeta's entire framing is "AI shows no ads, returns no blue
  links — it generates one answer citing 3–5 sources." Their BAVIS model and
  the hub's scoring rewards a product that speaks their language. Vanishing
  trades and local eco businesses will never out-rank Wikipedia on head
   terms, but *can* be the cited source for "where do I find X craft /
  service in Y place" — an achievable win.
- *What undermines it:* GEO tooling is nascent; measurement ("am I cited?")
  is noisy and hard to prove in 3 minutes. Judges wanting a "real business"
  may read AI-citation counts as vanity metrics.

- StatCounter worldwide Oct-2026 search share: Google 91.05, Bing 4.8, Yahoo
  1.18, Yandex 1.14, DuckDuckGo 0.64, Baidu 0.42.
- StatCounter Singapore: Google 92.35. StatCounter South Korea: Google 48.48
  vs **Naver 42.25** (plus Daum). → "Alternative engines" is a *specific-market*
  strategy, not a global one. Any Bing/Copilot-conversion advantage claim is
  **UNVERIFIED — label it as a hypothesis in the demo.**

## 2. Problem statement — locked after Decision B

TODO. Must specify: the business type, what invisibility costs them today,
what they can currently afford, and why a human agency doesn't serve them.

## 3. Product thesis (the submission form's one-sentence description)

Draft v0 (will be re-forced after B + C):
> TODO — "The one-person agency that makes [X] the answer AI gives when
> someone asks where to find [service/craft]."

## 4. Why this is not a rebuild (Innovation 25%) — honest risk register

| Risk | Why a judge would say it | Our answer once decided |
|---|---|---|
| "Semrush/Ahrefs exist" | Classic SEO tooling is commoditised and crowded | We're not selling rank tracking; scope must be the citation/legibility loop |
| "You're pitching Hashmeta's own product to them" | Sponsor sells GEO services; a competing service is an odd hackathon entry | TODO — this is a **real conflict to resolve before B**. Options: be their *delivery* layer, serve the segment no agency touches, or build a wedge product that plugs their methodology |
| "Wrapping LLM output in an empathetic wrapper" | Empathy/SPOILS is a positioning claim that needs proof, not a feature | The mechanism for the "empathetic" mechanism must be specific + auditable in the demo |

## 5. Core loop (draft — depends on A)

1. **Ingest** the business: their site, their story, their offer, their
   trade's context (S1: file/skills).
2. **Diagnose** visibility: how AI engines describe/omit them right now —
   actual queries run, with screenshots as evidence (S7).
3. **Rebuild** the missing assets: definitional pages, structured content,
   schema, bylined authority, local/multilingual copy (S6).
4. **Ship + publish** the fixes (including the product's own website).
5. **Re-measure** and write the plain-language weekly to the owner.
   *Human (founder) approves outbound-facing changes; the agents do the rest.*

TODO: choose which steps are truly built vs. staged in the demo.

## 6. Requirements

### 6.1 Functional

| Ref | Requirement | Bucket it wins | Priority | Status |
|---|---|---|---|---|
| FR1 | Run ≥N real AI-engine queries against a target and log the verbatim answers + citations | Feasibility, QwenWork use, credibility | **MUST** | ☐ |
| FR2 | Produce the assets that change those answers, as real files (schema'd pages, structured content) | Innovation, Feasibility | **MUST** | ☐ |
| FR3 | Scheduled recurring re-measurement with a diff report for the owner | QwenWork use, Feasibility | **MUST** | ☐ |
| FR4 | Audit trail + founder-approval gate before outbound / published changes | Demo (visible depth), Innovation (their handover as a feature?) | **SHOULD** | ☐ |
| FR5 | One-pager "visibility score" for a non-technical owner | Demo, Feasibility | **SHOULD** | ☐ |
| FR6 | Customer-facing landing page (must be built with Hashmeta AI) | Website (15%) | **MUST** | ☐ |

### 6.2 Non-functional (from founder contract, not boilerplate)

- Every visible figure must trace to a stored artifact (log, screenshot,
  file). An unbacked number is a defect, per the handover's evidence rule.
- Evidence-class label in output: fact / inference / proxy / assumption.
- High-risk outbound actions require approval; no standing consent.
- Must withstand "explain any part of your submission."
- Demo must be one clean working run under 3:00 — no cuts hiding failures.

## 7. Out of scope (build-window discipline — add lines as we lock)

- Backlink outreach automation, crawl-audit parity with Ahrefs, paid ads,
  multi-tenant SaaS accounts/billing/dashboard, real customer onboarding,
  SOC2-ish compliance, mobile app.
- **TODO: add ours as the track lock settles.**

## 8. Success metrics for submission (23 Nov) and for the live pitch (11 Dec)

| Metric | Target | Proof artifact |
|---|---|---|
| Working end-to-end run on a real business | one complete loop | screen recording of the loop |
| ≥1 AI engine citing or describing the subject differently after our asset ships | before/after | dated screenshots |
| A business that could bill tomorrow | price + first-customer name + cost to serve | BIZ_MODEL.md |
| Platform depth visible | scheduled/parallel/file/publish/approval on screen | SKILL.md §4 artifacts |
| Website "you'd send it a customer" | live Hashmeta URL | URL + incognito test |

## 9. Dependencies, risks, assumptions

| Type | Item | Mitigation |
|---|---|---|
| Dependency | Access to run real AI-engine queries for before/after evidence | If engines are unavailable, fall back to locally reproduced queries + screenshots of public tools — **label the substitution as a proxy, not a fact** |
| Dependency | Hashmeta tooling account for the website | Founder to confirm account access |
| Risk | GEO measurement is slow; a true before/after may not land in 6 days | Design the demo around an instantaneous, verifiable output, not a 6-week outcome |
| Risk | Sponsor-overlap (pitching a service like a sponsor's business) | Resolve under Decision B before writing code |
| Assumption | Solo delivery is credible for a 6-day build | Cut breadth, deepen the loop |

## 9b. Actor & consent model — see `MEMORY.md §3d`. Rescue needs 1
asset-holder relationship (consent + byline + verification), not a market.

10. Open questions to answer in the grilling (this is the PRD's real
    to-do list)

1. ~~Track 1 vs Track 2~~ → LOCKED Track 1 (D5).~~demo subject~~ → LOCKED D9 two-layer (see §12).
2. Decision A — product form.
3. Decision B — paying customer (this is the Feasibility hinge **and** the
   sponsor-overlap fix).
4. Decision C — SEO vs GEO emphasis.
5. Is there a real business we can use as the demo subject this week (a
   genuine client beats a synthetic one on every weighted bucket)?
6. Which of FR1–FR6 do we actually build vs. mock? (mock = say so in repo)
7. What is the "empathetic/psychological" mechanism as a **feature**, not a
   value statement?
8. Any pre-existing asset to disclose at registration?

## 11. Decision log — mirror; the authoritative log lives in `MEMORY.md §6`

| # | Question | Options | Chosen | Who | Date |
|---|---|---|---|---|---|
| — | awaiting the grilling | | | | |

## 12. D9 outcome — demo subject (locked 19 Nov, founder's call)

Two-layer build, full list with sources/dates in `CANDIDATES.md`.

| Layer | Subject | What it proves |
|---|---|---|
| **Measured** | Real SG trades: verified practitioner sites `nyonyaneedlework.com`, `mokkowoodstudio.com`, `suikoushya.com` (each loaded 19 Nov, HTTP 200); press-only trades (rattan Chen Foon Kee, joss-stick Tay Guan Heng) as the extreme case | The problem is real and current → Feasibility/Viability + Innovation credibility. Public observation only |
| **Fixed** | One fictitious one-person craft business profiled from the above, labelled synthetic on screen and in site copy | The product running end-to-end → Demo + QwenWork-use evidence |

Line we do not cross: no AI-generated copy attributed to a real named
pritioner appears in the demo, the website, or anything the organisers may
redistribute under the licence clause.

Unlocks next: **D10** (what the 3-minute video is allowed to claim about
"after"), then **D11** (pricing with measured credit cost), then naming.
