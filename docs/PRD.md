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

## 2. Problem statement (locked against D5–D15, 19 Nov)

Small impact-driven operators — heritage craft practitioners, environmental
restoration groups, community and care organisations — are increasingly the
*subject* of other people's pages while being absent from the answers
themselves. Ask an AI engine or a non-Google search "where can I learn X /
who still makes Y / who restores Z near me" and the answer names a journalist's
feature, a hobby blog, a marketplace or an institution's write-up. Never the
person doing the work. Their own site either does not exist (we verified
press-only trade identities in `CANDIDATES.md`) or competes against that
authority gap with no SEO capability.

**Cost of invisibility** (mechanism inference; M1 quantifies it for us): lost
workshop bookings, commissions, volunteers and donors, and for trades the
training pipeline itself, because nobody can find someone to learn from.
**What they can currently afford:** nothing like an agency retainer — which is
exactly why an agency does not serve them. Our unit cost has to collapse to
QwenWork credit cost (D6c), not to their budget.

**Why a human agency won't do this:** query volume per subject is tiny, the
content is evidence- and multilingual-heavy (EN/中文/Malay/Tamil/JA), and the
refusal list in `EXECUTION §6.2` is economically impossible to honour at
agency cost. Only agent delivery makes an honest, low-volume, high-rigour
engagement viable at all.

## 2b. Personas, user stories and the weekly flow

**Standard check (19 Nov):** a PRD normally names *who* uses the product and
*what they're trying to do*, in their own words (Figma's PRD guide lists
"user personas and user stories" and "user flows" among the core sections;
ours had neither — added here on purpose, in that guide's plain style).

| Persona | Who they really are | What they care about | What they don't have |
|---|---|---|---|
| **Ms Lim — programme officer** | Works at a museum / arts council / heritage programme; owns a preservation portfolio (e.g. 22 traditional trades under a grant) | Proof for the grant report, nothing embarrassing published wrong, one clean thing to forward to her director | Time, SEO knowledge, budget for a full agency |
| **Mr Rahman — custodian** | A sole practitioner keeping a vanishing trade alive (beadwork, weaving, joinery, restoration); sells pieces and workshop places | Bookings, apprentices, being found by the right buyer, not being described wrongly | No marketing staff; an agency can't cost this out for him |
| **You — the agency** | One person running the whole company on QwenWork agents + your judgment | Repeating a fixed method, defensible evidence, low cost per client | A team. Which is the point |

**User stories (plain "as a… I want… so that…" format):**

1. As **Ms Lim**, I want to see which trades in my portfolio an AI assistant can
   and cannot find, with dated screenshots, **so that** my grant report shows a
   gap I fixed instead of a claim I made up.
2. As **Mr Rahman**, I want one clear page that explains my craft in the words
   people actually search — in English *and* my community's languages — **so
   that** the answer names me, not a hobby blog.
3. As **the agency**, I want every finding and asset to carry its own evidence
   class (what was measured vs. what was guessed) and a record of who approved
   it outbound — **so that** a buyer with a reputation can trust the work and I
   can re-sell the method next quarter.

**The week as the owner experiences it (user flow):**

1. **Monday** the agent runs the same fixed questions on everything you watch
   → nothing you do.
2. Same afternoon you get a **one-page brief**: what changed, what the agent
   did, what's blocked waiting on you. No dashboard, no login, readable in
   five minutes at your desk.
3. Anything going out to the public sits in a folder **until you click
   approve** that week — the gate is deliberate, not an oversight.
4. At reporting time (quarterly or grant deadline), the brief history for the
   period becomes the evidence pack. **You were invisible → we shipped this →
   here's what the engines said before and after.**

> Note that the flow above *is* the pitch for the annual account: it repeats
> without you, and it always reports in your language, not ours.

## 3. Product thesis (the submission form's one-sentence description)

Working draft v1 (names still working names — D12):
> **The one-person agency that makes vanishing trades, restoration projects
> and community organisations the answer AI search gives when someone asks
> where to find, learn, or support them.**

Form/field reality: keep the one-sentence field under ~140 characters. Short
variant for the pitch: **"Visibility rescue for the work nobody indexes."**
Both pending the D12 positioning pass.

## 4. Why this is not a rebuild (Innovation 25%) — honest risk register

| Risk | Why a judge would say it | Our answer once decided |
|---|---|---|
| "Semrush/Ahrefs exist" | Classic SEO tooling is commoditised and crowded | We're not selling rank tracking; scope must be the citation/legibility loop |
| "You're pitching Hashmeta's own product to them" | Sponsor sells GEO services; a competing service is an odd hackathon entry | **RESOLVED (D6b + D13 + D14).** We take the segment their own portfolio shows agencies don't serve — sub-scale trade custodians, restoration groups and community/care orgs, not Bosch / OCBC / CapitaLand-tier funded brands — we grade every technique against Google's primary guidance rather than a provider's list, and we publish the refusal list as enforced rules. We are the delivery layer for the tail they can't bill, not a rival for their book of business. Residual unknown is purely practical: account/tool access for the 15% website item |
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

**Build vs staged for the demo (D9 + D10 posture A/B):**

| Step | In-window reality | How it appears |
|---|---|---|
| 1 ingest | built — M1 reads real subjects' public material; the fix target is the labelled-synthetic subject | on camera |
| 2 diagnose | built — real queries, dated, verbatim, graded ABSENT/MEDIATED/THIN/OWNED | on camera (founder browser = Manual Batch; I take SERP/page inventory + report build) |
| 3 rebuild assets | built, ≤10 per engagement, evidence-classed, bylined real or labelled synthetic | on camera |
| 4 publish | built — QwenWork Pages publish + IndexNow attempt; result logged either way, no promise | on camera |
| 5 re-measure + briefing | scheduled re-check; after-state may be **partial and is reported as partial** (D10-B). No projected score (D10-C refused) | on camera |
| approval gate | FR4 shown once as a real block-and-release on an outbound action | on camera |

## 6. Requirements

### 6.1 Functional

| Ref | Requirement | Bucket it wins | Priority | Status |
|---|---|---|---|---|
| FR1 | Run ≥N real AI-engine queries against a target and log the verbatim answers + citations | Feasibility, QwenWork use, credibility | **MUST** | ☐ |
| FR2 | Produce the assets that change those answers, as real files (schema'd pages, structured content) | Innovation, Feasibility | **MUST** | ☐ |
| FR3 | Scheduled recurring re-measurement with a diff report for the owner | QwenWork use, Feasibility | **MUST** | ☐ |
| FR4 | Audit trail + approval gate before outbound/published changes; gate refuses even when the owner asks, where a rule forbids it | Demo depth, Innovation, institutional-buyer credibility | **MUST** (upgraded: the buyer is an institution, the gate *is* the sale) | ☐ |
| FR5 | One-pager "visibility score" for a non-technical owner | Demo, Feasibility | **SHOULD** | ☐ |
| FR6 | Customer-facing landing page (must be built with Hashmeta AI) | Website (15%) | **MUST** | ☐ **blocked** — account access (`MEMORY` open items) |
| FR7 | Refusals + per-engagement asset ceiling (≤10) enforced as data in `rules/`, checked before any publish | Innovation (D14 differentiation), Feasibility (the customer's site survives algorithm updates) | **MUST** | ☐ |

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
- **Pointer, not duplication (PRD-standard "release criteria")**: what
  "done, accepted and submitted" means lives in `opc-hackathon-info/CHECKLIST.md`
  and the `README.md` submission checklist; this PRD defines the product, the
  checklist defines release. Keep them split so a judge reading the PRD isn't
  handed a task list.

- Domain purchase. Multi-tenant accounts, SaaS dashboards, keyword databases.
  Paid ads, link marketplaces, review solicitation (FR7 refusal). Competitor or
  SERP scraping at scale. Naver *automation* (their robots.txt disallows
  crawling → advisory gap only). Wikipedia article creation for a client.
  Health/legal/financial claim generation for YMYL topics (a qualified human is
  the author, or it does not ship).
- Out of the demo: any projected "after" visibility score (D10-C refused), any
  first-party Search Console number before the verification TBC test passes.

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
| Risk | Sponsor-overlap | **Resolved** in §4 (segment + evidence standard + published refusals) — what remains is access logistics, listed as a dependency, not strategy |
| Dependency | Whether Search Console (URL-prefix) or Bing WMT verification works on a platform-issued subdomain (QwenWork Pages / GH Pages) | **TBC — 10-minute test, build day 1.** No first-party number on screen before it passes. Consequence if it fails: after-state evidence = browser screenshots + diff only (still honest under D10) |
| Assumption | Solo delivery is credible for a 6-day build | Cut breadth, deepen the loop |

## 9b. Actor & consent model — see `MEMORY.md §3d`. Rescue needs 1
asset-holder relationship (consent + byline + verification) **in real client
work**. In this hack the measured layer is public observation only and the
fixed layer is labelled-synthetic, so no verification call lands in-window;
but the *reason* the call exists (a bylined real person is what makes a source
citable, Hashmeta 9-factor #9) stays in the product as a feature, not a policy
paragraph.

## 10. Open questions — pruned after the grilling (this is the resume list)

1. ~~Track~~ **LOCKED D5** · ~~demo subject~~ **LOCKED D9** (§13) ·
   ~~product form~~ **LOCKED D7** · ~~paying customer~~ **LOCKED D6d + §3b** ·
   ~~SEO vs GEO emphasis~~ **LOCKED D6a + D14** · ~~build vs mock~~ **LOCKED §5 table**
2. Entry fee and annual account contents once FR1 is real (D11).
3. Does the FR7 ceiling of 10 assets per engagement fit our actual workload, or
   is the right number 6?
4. Post-11-Dec: can we convert one *real* Tier-A business from the verified
   shortlist into a first pilot — and only then attach a real name to it?
5. Empathetic/psychological as a mechanism is answered **in shape** by
   D13/D14/YMYL + legibility-first briefing; still needs naming for a
   non-technical owner (FR5 language design, D12).
6. **Founder action:** does any pre-existing asset get disclosed **at
   registration** (Rule 2)? All our docs/repos so far began 19 Nov, inside the
   window — confirm nothing predates it.
7. **Two ambiguities to put to organizers** (one message in their WhatsApp):
   does FR6 require publishing *through* Hashmeta, and is "working live"
   satisfiable by a recorded end-to-end run? Recorded today is my assumption.

## 11. Decision log — mirror; authoritative log in `MEMORY.md §6`

| # | Question | Chosen | Why the alternatives lost |
|---|---|---|---|
| D5 | Track | **Track 1** Business Ops & Automation | Track 2 = kit-first governance product; we keep kit material as optional test/fixture only |
| D7 | Product form | **Productised service ladder** (Rescue → institutional annual account) | SaaS needs distribution we can't own in 5 days; one-off projects = no recurring revenue story |
| D6a | Visibility surfaces | **"Everywhere the answer is found"** — AI engines + Bing/Baidu/Naver + social discovery; browsers ≠ engines (D6a correction) | "non-Google web engines" contradicted StatCounter (Google ~90%+ of web queries) |
| D6b | Invisibility evidence | Sponsor-published numbers first, then replicate our own queries in M1 | quoting the gap without measuring it, or measuring without sources |
| D6c | Margin claims | Only claims traceable to measured credit cost per engagement | asserting an unmeasured margin in front of judges |
| D6d | Gov / influencers / flywheel | gov = buyer not proof; influencers = citation mechanism *inside* the product; "brings businesses up" = impact reach | adding them as customer segments = two unrelated sales motions in a 3-minute demo |
| D9 | Demo subject | **Real measured layer + labelled-synthetic fixed layer** | naming a real client inside AI copy we wrote = attribution risk + redistribution licence + "explain any part" |
| D10 | Evidence posture | **A + B** (retrieval-level moment), **C refused** | a projected score is unverifiable in 6 days and reads as theatre under questioning |
| D13 | Impact verticals | trades + environmental + community/care **with the YMYL content gate** | care vertical without a credibility gate = real harm risk, not just ranking risk |
| D14 | Technique standard | Google's primary docs grade every lever; vendor advice marked as such | copying one provider's technique list (the Innovation-25% trap) |
| D15 | Hosting | **QwenWork Pages, no domain purchased** | a domain buys us nothing in-window and adds cost, DNS and verification risk |
| D11 / D12 | pricing · naming | **OPEN** | D11 waits on measured cost; D12 needs the positioning pass |

## 13. D9 outcome — demo subject (locked 19 Nov, founder's call)

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
