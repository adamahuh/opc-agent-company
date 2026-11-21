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


## 2b. Summarization triggers — founder-commanded behaviour (19 Nov)

The founder asked for a **resume pack** used in exactly two situations. When
either fires, stop expanding and consolidate — a written summary, not a chat
wall.

| Trigger | What I do |
|---|---|
| **Information load is high** — multiple researched sources, several decisions pending, or we are about to choose next steps | Produce a compact consolidation **before** asking the next question: bottom line, verified facts w/ source+date, what changed in our position, what's locked, what's open, do-next-in-order. Written to `docs/HANDOVER_YYYY-MM-DD.md` so it survives the session. |
| **Founder is about to log off / says they'll come back** | Same file, plus: last commit hash, the one question that resumes the thread, the exact read order, and a "not proven yet" list so next-session me doesn't inherit an unearned claim. |

Hard rules on every summary: preserve numbers/dates/units verbatim; attribute
fact vs inference vs assumption vs founder-decision (handover
`AI_WORKING_HANDOVER.md §1`); never let the summary become rosier than the
source; name what was *not* verified. The quality gate I must pass is the
skill's own: *"could someone make a decision from this summary alone?"*

**Resume protocol for any new session:** 1) `git clone` / pull
`opc-agent-company` 2) read `docs/MEMORY.md` 3) newest
`docs/HANDOVER_*.md` 4) `docs/PRD.md` §10 open questions — then ask the
founder the single question already queued there. Don't re-litigate locked
decisions (D4–D8) unless they reopen one.

**Durability note:** sandbox working copies under `/tmp` are ephemeral.
GitHub is the durable record. So: **before a log-off summary, commit and push
that summary** — an unpushed handover is a handover nobody can read. Current
session summary: `docs/HANDOVER_2026-11-19.md`.


## 2c. Communication calibration (founder, 19 Nov — permanent)

Length is not the constraint; **comprehensibility is.** Write as if explaining
to a Singapore university business student: economics-literate, zero assumed
technical vocabulary. Apply:

- Any technical term gets a one-line plain definition on first use.
- Prefer local, checkable examples (SG institutions, SG crafts, SG prices in
  S$) over abstractions — the judges are in the same market.
- Explain **why a decision matters to the score or to revenue** before asking
  for it. If a question can't be motivated in two sentences, the question is
  premature.
- State plainly what we do **not** know and what would cost little to find
  out. No hedging, no jargon cover.
- **Self-check (added 19 Nov after founder flagged jargon creep):** before
  sending, scan my own draft for a term from the glossary list (SERP,
  crawlability, robots.txt, schema, IndexNow, YMYL, E-E-A-T, TBC, proxy,
  ABSENT/MEDIATED/THIN/OWNED, ledger, LD/Ship/Automata). Each one gets a plain
  definition inline the first time it appears in a message, or gets replaced.
  If a sentence needs a definition to be understood, the sentence was the
  problem, not the reader. Long answers are welcome; unexplained terms are not.
- Keep `docs/GLOSSARY.md` next to the work so "explain it" has one place to go.

**Register correction (founder, 19 Nov, after I over-corrected):** use the **precise
technical term**, then define it once inline in plain words. Simplifying *vocabulary* is
right; simplifying *the claim* is not. Never trade away a distinction to make a sentence
friendlier — when a term has to be softened for the sentence to land, the sentence is
wrong, not the term. Two-part self-check now: (a) glossary term appears undeclared →
define it; (b) a simplification drops a distinction that changes what we can claim →
restore the technical version and define it.

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

## 2d. Commands the founder uses — what I do when each one arrives

These are *his* words for *my* behaviour (his handover defines most; `resume` and the
defaults he ratified are ours). If one arrives I switch immediately and say so in one
line. If two conflict, the latest wins.

| Command | Meaning for me | What I produce |
|---|---|---|
| **`resume`** (founder's own definition, 19 Nov — replaces mine) | *check the github repo / handover for any updated materials, and resume the progress of the work* | `git pull`, list what the **other device** committed since my last HEAD, read `docs/HANDOVER_CROSS_DEVICE.md` (progress + pending P1–P8) and `MEMORY §6`, then 3-line status + **start the top unblocked pending item**; ask only when that item is genuinely blocked |
| **`change`** (founder's definition, 19 Nov) | *update the handover / GitHub repo with current progress and pending items for the other QwenWork on my other device to resume this work; if there are multiple agents, the other device creates them and replicates the same exact responsibilities — project context only* | Rewrite `docs/HANDOVER_CROSS_DEVICE.md` (dated, device named): progress incl. commit SHAs, pending table with owners+gates, **§3 sub-agent responsibility replication**, §4 durability rules; commit, **push, verify remote SHA == local HEAD**. Fan-out rule: sub-agents inherit the full charter in **this project only**, never a soft mandate, never personal tasks |
| **`use defaults`** | Ratify whatever I marked as working assumptions | Log as one decision row (dated, marked founder-ratified), state the assumptions as facts going forward, continue |
| **`go`** | Execute the exact scope named in my last message | Do only that scope; no new material decisions; report at the founder-contract's detail level |
| **`continue` / `continue from earlier`** | My reply was cut/derailed; finish it | Resume the cut sentence, don't restart the answer |
| **`all good?` / `what needs updating?`** | Status check, not a work order | Verified state (greps + `git status`/SHA equality), stale-content punch list, no edits unless he says go |
| **`noted, go`** | Do the punch list I just showed you | Edit + commit + push + verify; flag anything I could not fix |
| **`clean-ups and updates`** | Reconcile docs with what has since been learned | Sweep: README status/metrics, memory decision rows, superseded addenda marked superseded, stale blockers restated; grep-audit for TODO/unsupported claims |
| **`check` / `verify that`** | Measure it, don't reason about it | Primary-source fetch or CLI probe + report class (fact / inference / TBC). Never answer from memory when a check is cheap |
| **`ignore my prompt`** | He retracted an instruction mid-flight | Drop that work item; finish what I was doing before it; do not re-ask |
| **`nvm / nevermind`** | Cancel that thread | Continue existing thread; don't summarise the cancelled one at length |
| **`pause`** | Stop and write the log-off summary | `§2b` trigger #2: commit+push `HANDOVER_*` incl. next step in one line, storage/capability notes |
| **`explain this question`** | My framing was bad, not his understanding | Restate plainly, then re-ask. Never "as I said before" |
| **`that's a simplification / jargon`** | See `§2c` self-check | Precise term + one-line definition; restore any dropped distinction |
| **`LD`, `Ship`, `Automata`, `Borealis`, `end`, `Batch this`, `Manual batch`, `Show`, `Save`** | His original contract's modes | Behave per `docs/AI_WORKING_HANDOVER.md §2` — that file wins over mine |

## 3a-connector | Hashmeta connector, verified state (19 Nov, founder checked in-app; agent could not re-verify)

| Fact | Consequence |
|---|---|
| Connector tile exists, **Enabled = green, Authorization = green** | Account is linked. Not a capability claim |
| **"There is no website builder action"** (founder's read of the action list) | **M6 (Hashmeta site, 15%) cannot run through this connector.** The 15% needs either the Hashmeta web console directly, or the builder is on a different surface |
| My session could not see the tool catalog (`qwenwork extension resources list` → `HTTP 401 UNAUTHENTICATED`, twice, org + public pools) | **Environment limit, not a broken connection.** So I cannot enumerate what the connector *does* expose — and I won't guess |
| Their site markets **AI CMS** (publish) + **AI Visibility** (measure/citations) as products | The *measurement* half is what could beat our Manual Batch. If any exposed action returns citation/visibility data, that upgrades FR1 from "my fetch" to "the partner's own data" |

**Refinement 19 Nov (founder): the action list sits under `custom` and exposes
"keywords / commands"** — read-shaped data verbs, no publish action, which is consistent
with the connector having no site builder.

| Consequence | Why | Class |
|---|---|---|
| The 15% page cannot be built through this tile; `WEBSITE.md` paths 1–2 (console / organiser answer) stay the plan | Custom tiles are user/org-defined **endpoint definitions**, not the vendor's product surface — claiming "built with Hashmeta AI" off a wrapper is unverifiable and possibly against their ToS | **inference** from his check + our failed catalog reads |
| **A keyword read could upgrade FR1 more than the website moves us.** `data/queries.yaml` is human-guessed phrasing; sourced keyword lists/volumes per market + language (EN / 中文 / Malay / Tamil / JA) turn plausible queries into evidence-backed selection — which is also the multilingual edge we claim | better source → better data; touches Feasibility, QwenWork-use and the Innovation story, not one criterion | **assumption** until action names/schema are seen |
| So the useful ask changes shape: not "does it build sites" but **"what exactly do those keyword commands return"** (volumes? who ranks? AI answers? which market/language?) | Determines whether M1 consumes partner data (stronger) or stays fetch + Manual Batch (plenty good enough) | open |

**Two questions to send (one line each, organiser chat):** (a) which app surface do participants use to
build the Hashmeta-AI website for the 15% criterion? (b) does the connector expose an AI-visibility /
citation read action, and if so what's it called? Until (b) is answered, Manual Batch stays the primary
before-state source (unchanged plan).

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

## 3c. Communication rule added after founder feedback (19 Nov)

No invented working names get used more than twice before explaining why the
term exists and what it replaced. Internal shorthand must never be confused
with market terms. Names are always changeable — they are positioning
decisions, not facts.

**Working names in use, with their reason:**
| Name | What it means internally | Reason this name was chosen | Status |
|---|---|---|---|
| **Rescue** | First paid engagement: time-boxed citation audit + authoring/publishing the assets that fix the invisibility | An audit sounds shelveable; a rescue is bounded, has a visible outcome, and is one yes/no email for an institution. Not a market term; final name comes from the positioning decision | working |
| **Annual Account** | Recurring monitoring + reporting for institutions with mandate and budgets | The buyer's procurement word for "we're kept" — recurring, margin | working |

## 3d. Actor model (locks the relationship chain before payment structure)

| Actor | Identity | Contact required? | Why |
|---|---|---|---|
| **Asset-holder** | practitioner/guild/museum/cultural council whose material is being cited | **Yes** — one verification call per rescue | Their consent + credential byline is the citation mechanism: Hashmeta 9-factor #9 says bylined expert + Author schema get treated as more authoritative; institution marketing copy alone would be a weak source. Also protects us on truth + "explain any part of your submission" |
| **Buyer** | institution w/ mandate + reporting deadline | **Yes** — sale + delivery | Pays both tiers; already has an existing programme relationship with asset-holders (we ride the trust that already exists, we do not broker it) |
| **Beneficiary/ecosystem** | other practitioners, tourism, suppliers, learners | **No** | They get reached through asset-holder's platform |
| **Audience** | people asking web+AI engines about the craft | **No** | Measured indirectly: search + AI query evidence |

**Consequence for the demo (post-D9):** in real client work, a rescue needs 1
asset-holder relationship, not a market. During the hack that relationship is
substituted by the fictitious subject — but the *reason* the verification call
exists in the first place (a named credential + accuracy is what makes a
source citable; Hashmeta 9-factor #9) is a product requirement we should
*show* in the demo, not quietly drop. Label synthetic; never imply we worked
for a real named business.

## 3e. Naver / hosting field notes (19 Nov, tested from this sandbox)

**Naver (founder asked: don't you need a Korean SSN?): tested live.**

| What | Result | Class |
|---|---|---|
| `www.naver.com` | HTTP 200 (edge IP 23.206.180.176) — served **without** KR origin and without login | **fact** |
| `search.naver.com/search.naver?query=lacework` | HTTP 200, real SERP: title `lacework : 네이버 검색`, 862 KB, 46 non-Naver external result links, **"AI 브리핑" module present** | **fact** |
| `m.search.naver.com` | 820 KB from a KR-routed edge (114.111.39.3) | **fact** |
| `openapi.naver.com` | HTTP 200 | **fact** (root reachable ≠ API usable) |

The **SSN part is a real gate, but not the one you'd think**. Identity is not
needed to *read* results; it's needed to *register* a site — via
`Search Advisor`, which requires a Naver account and Korea real-name/business
verification (`business.naver.com/verify/manage/business/home.html`).
Foreigner path (passport-based "PASSPORT VERIFICATION" / in-person/foreign
mobile; Naver's 2024+ travel verification programme exists) — **TBC**, so I'm
not building on it.

**Naver API:** `developers.naver.com` apps list shows a "Search" service
(app registration via Naver login) — **TBC** whether new Search subscriptions
are still open in 2026; a 2026 report claims Naver banned AI use of the Search
API (secondary source) → we **cannot** rely on Naver programmatic access.
**Legal:** `search.naver.com/robots.txt` (19 Nov) *disallows every UA in
`/`*. So automated Naver SERP scraping breaches their robots + ToS;
**we do not do systematic Naver crawling.** Manual one-off sampling is OK;
systematic measurement is not.

**Hosting (Q3 resolved without a domain):** default = **`qw-pages` publishes
the subject site** — QwenWork, platform-native, one-click, files we control.
This is worth repeating in the demo: *the subject site was published by the
platform we're being scored on* = the "engine not checkbox" argument, 20%.
Fallback = GitHub Pages (`<user>.github.io`). Search Console: **no domain
verification at all** — URL-prefix property via HTML meta tag, GA4/GT. Bing
WMT: verified via meta tag / file at site root (their own help page
`bing.com/webmasters/help/verify-website-bd99495b`, "Verify your site") —
whether these methods work on a platform-issued subdomain = **TBC, 10-minute
test first build session, do not promise SC/BMT numbers in the demo until it
works.** New risk logged: **shared hosting namespace** — if the pages host
root returns a blocking `robots.txt` we cannot control, the site's AI-crawler
access might get blocked — check this, because it's a hidden blocker of the
after-state itself.

## 3f. Demo video assumption set (founder, 19 Nov) + Hashmeta shelved

Assumed structure — no organizer confirmation needed for any of it:
**A. problem → B. solution walkthrough → C. feasibility**, Hashmeta website
parked (founder will account for it later; it stays the 15% risk item).
Scoring read: A≈Innovation 25, B≈QwenWork use 20 + Demo 15, C≈Feasibility 25
→ the three acts hit ~85% of the score. **Fact:** ~15% (website) is currently
unaddressed on purpose, and the demo's engine answers are the **Manual Batch**
layer (founder's browser) — I cannot converse with ChatGPT/Gemini/Perplexity/
Copilot/Grok/DeepSeek/Ernie; programmatic engine querying would need API keys
(OpenAI/Google/Perplexity all offer web-connected modes) — **assumption:**
available with keys, **TBC:** whether the consumer *answer* matches the browser.
The browser evidence stays the primary (it's what the customer's customer sees),
so no part of act B depends on API access existing.

## 3g. Execution-agent handover (created 19 Nov)

`docs/HANDOVER_EXECUTION_AGENT.md` is the charter for the build-side chat: read order,
locked list (D5/D6a/D7/D9/D10/D13/D14/D15/§3f), M1-only scope + acceptance checks,
the **engine-answer boundary** (I verified: no conversation path into consumer chat
engines from this environment — founder browser or founder-supplied API keys only;
never substitute silently), stop-and-ask triggers, the founder-contract report format
(incl. the mandatory "what remains unproven" line), milestone table + cut line, and
§8 known gaps (organiser answers, Hashmeta access, Pages verification TBC, no API keys).
Durability facts are in §0 because `/tmp` wipes bit us twice this session.
**Workspace relocation (19 Nov):** the project now has a **workspace-root**
orientation doc — `HANDOVER_PROJECT.md` — covering canonical-vs-copy paths, sandbox
durability facts, the open list and the clock. If work moves folders, that file travels
with the clones and is the first thing the next chat should read.
**Note:** Multi-Agent mode has no docs entry and the founder could not find the toggle;
treat parallel sub-sessions as unavailable unless *he* confirms otherwise.

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
| D10 | 19 Nov | **Evidence posture = A + B** (founder). A: show audit → assets → published page → scheduled re-check, with proof boundaries visible. B: add one *retrieval-level* clip — engine with web access reads our just-published page and cites it — scripted, labelled, never called "Google ranks us now". C (projected score uplift) explicitly dropped. | projected-only (rejected) | Founder, agent recommendation accepted |
| D13 | 19 Nov | **ICP widened to 3 impact verticals** as instructed by founder (environmental + societal included): (1) vanishing trades/heritage custodians, (2) environmental/regeneration businesses, (3) society/community/empathetic orgs — **with a YMYL gate** on (3): health/legal/safety claims need a real credible human author, and we don't optimise a claim into existence. Demo claims restricted to (1)–(2); (3) enters the ICP, not the pitch numbers. Execution detail in `docs/EXECUTION.md §1, §6.2` | trades-only; everything-including-YMYL-claims | Founder instruction, agent refinement pending his yes |
| D14 | 19 Nov | **Primary-source correction to vendor GEO advice**: Google's own "Optimizing for generative AI search" (fetched 19 Nov) says skip chunking/llms.txt/inauthentic-mention tactics and that structured data *isn't required* for AI features (helps rich results). Our levers table grades each technique by evidence class rather than copying a vendor list — the trust wedge the impact market needs. Also: Google's AI-content guidance verbatim warns mass AI page generation "may violate… scaled content abuse" → our method is few expert-sourced assets w/ approval gate + ceiling. **This is the Innovation answer to "another AI SEO content tool".** | ungraded vendor list | Agent finding, founder to accept |
| D8 | 19 Nov | **Deferred by founder — and correctly so.** The question "who pays for the rescue?" cannot be answered until the actor model (3d above) is understood and agreed. Agent recommends same buyer for both tiers (1 motion, demo fits). Re-ask after D9/D10 lock. | | |
| D9 | 19 Nov | **Demo subject → LOCKED as a two-layer answer, on the founder's call.** His words: "we're just doing a hack… we don't need their permission because we're giving them free promo… if not, we just use fictitious businesses based on real examples." Resolved as: **measured layer = real SG trades** (public observation only, no consent required, `CANDIDATES.md`); **fixed layer = one fictitious business profiled from them, labelled synthetic.** Agent constraint kept inside his ruling: publishing *generated copy attributed to a real named practitioner* is out — a hallucination would attach to them, the T&Cs licence organisers to distribute our demo/materials, and the "explain any part" clause makes "did they approve this?" a question we'd lose. Shortlist + own-site checks: `docs/CANDIDATES.md` |
| D9-superseded | 19 Nov | **Subject we build against for the demo**. Evidence gathered (1 search, needs the AI-query test before it is proof): National Heritage Board runs a public Intangible Cultural Heritage directory at roots.gov.sg incl. "Nyonya beadwork and embroidery"; a named practitioner business nyonyaneedlework.com exists for the same craft; and third-party tutorial/marketplace sites (craftpassion.com, khinkhwab.com) publish on it too. **Inference, not yet measured:** the practitioner competes for visibility against an institution and against content farms that have SEO teams — which is precisely our product's problem statement, in the judges' own market. **FACT: we have not yet tested what AI engines actually answer.** | real trade + consent (rec); institution's public collection; anonymised real trades; fictional | **OPEN — being grilled** |
| D10 | 19 Nov | Honest evidence strategy: is "AI now cites us" a 6-day claim at all? Before-state IS freely measurable now; after-state indexing/ingestion is NOT guaranteed in 6 days. | index-after / retrieval-level proof / proxy labelled / asset-diff table only | **OPEN — grill after D9** |
| D6 | 19 Nov | ICP scope: founder answered "why not all?" to Institutions-vs-Trades-vs-Impact-businesses. Agent's counter: all three is not a segment, it is a *frame* — needs one beachhead for the demo + one pricing unit for the pitch | single beachhead (rec); unified "public-interest GEO" frame; two-tier (institution-funded + self-serve) | **UNRESOLVED** | — |
| D15 | 19 Nov | **No domain purchase.** Subject site published with **QwenWork Pages** (platform-published = 20% evidence), GitHub Pages fallback. Sub-question stayed open as TBC: does SC URL-prefix / Bing WMT verification actually work on platform-issued subdomains — 10-min test before build day 1; if it fails the after-state stays browser screenshots | buy a domain (rejected: adds cost, blocks nothing) | Founder's call, agent made Qwenwork pages the default. | reversible, cheap now / expensive during the build |
| D16 | 19 Nov | **Silent defaults ratified by the founder** — "let's stick with the four silent assumptions": (a) **D8** institution is the buyer for *both* tiers (one sales motion); (b) **D11** the video shows **measured credits** from real `runs/` and brackets where a dollar figure isn't earned yet — price is *chosen*, cost is *measured*, never invented; (c) a **named target institution** drawn from the verified shortlist, labelled *target, not client* — the 11 Dec "who's your first customer?" gets a real word, not a segment; (d) **recorded end-to-end demo** accepted, organiser question stays open; website stays parked by choice. | asking each separately before build | Founder (explicit) | high while pre-build (cheap to reopen) |
| D17 | 19 Nov | **Method gap surfaced in self-critique (`SOLUTION_CHECK.md` §3): the causal chain has a hole.** Content → *ranking* → *citation* is two slow hops, not one; our audit grades absence from an answer, and our remedy supplies the content step. **Our remedy attacks the first link when the binding constraint may be the second.** Fix proposed as **Leading Indicators** so the loop is falsifiable inside 6 days instead of asserting a visibility change we cannot yet see | pretend the chain is one step; drop after-state claims | Agent critique; founder decision open (S1/S2 below) | central |
| C1 | 19 Nov | **Statistical honesty flag:** the headline "invisibility" numbers (1.3% of 945,785 PH AI citations going to Filipino operators; 40%+ of *tested brands* in BAVIS tier D/F) are (i) vendor-published, (ii) about **different populations** — national citation economies and 100–200 tested brands, not SG craft custodians. Quoting them as if they describe *our* segment is a **denominator error** our own contract forbids. Our own 3-subject N is far too small for any % claim. **M1 selects which subject is a *real* case; it does not establish a population.** | quoting sponsor stats as our evidence with no label | Agent check | — |
| D20 | 19 Nov | **Strategy correction on my own muddling (founder challenged: "I thought we're exposing impact businesses to alternate search engines + AI").** The thesis never changed; I mislabelled a *strength* as a limitation. Correct framing: **submission/exposure is a real, verifiable act; proof of ranking/citation depends on our vantage point, and for the demo subject we hold that vantage (our own site ⇒ own Search Console / webmaster console = first-party crawl & index status).** Verified tonight: `indexnow.org` — "has support from **Microsoft Bing, Naver, Seznam.cz, Yandex, Yep**" (so a site-owner ping is a legitimate IndexNow act, *not* the robots-forbidden crawling of Naver pages — our "advisory only" line was about *measuring* Naver, and it stayed true); DDG's own help page — traditional links "**largely source from Bing**" (own crawler DuckDuckBot + own indexes too). Therefore: **one Bing-facing submission plausibly reaches Bing 4.8% + DuckDuckGo 0.64% + Yahoo 1.18% ≈ 6.6% of global web queries** (Yahoo backend = **assumption**, widely reported, not verified in this session), and Hashmeta's own claim that **99% of AI citations come from organic top-10** means the same fix compounds into the answer engines. **Demo pitch line: we do not compete with Google's top 10 — we make the tail the answer where competition is thin and the citation window is open.** New work item: **FR8 — submission & crawl-status module** (logged as attempts, outcome where verifiable). | framing exposure as a caveat (rejected); dropping alt-engine thesis (rejected) | Founder challenge, agent correction | central |
| R1 | 19 Nov | **Connector claim NOT verifiable from this sandbox — recorded as such.** `qwenwork extension resources list` (public + org pools) → extension HTTP **401 UNAUTHENTICATED** (2 calls, not retry-looped); the session-facing connector tools report **"No installed and enabled applications currently have an active connection."** So "Hashmeta connected" is *founder-reported app state*, not something I can see or use here — and by the marketplace lesson this session, connectors usually surface in **a new session**, not this one. **Do not claim the connector in the demo until an action actually returns data.** Founder to test in-app: enabled + authorised? What actions does it expose (site builder? project/site for our synthetic subject?) — that's the 15% | assuming the tool works because the badge shows green (exactly the rule `MEMORY §1` exists for) | Agent check | blocks FR6 |
| D22 | 19 Nov | **First real fetch-grade data (`runs/RUN-001-before/`): the demo subject is chosen by evidence.** Mokko Wood Studio = strong baseline (JSON-LD **LocalBusiness** + 21-URL sitemap) → *not* our invisibility case. Suikoushya = **0 JSON-LD blocks** but 4 `hreflang` links → structured-data gap in a multilingual site. `nyonyaneedlework.com` = valid JSON-LD + `index, follow` but **HTTP 500 on `/robots.txt` and `/sitemap.xml`** (homepage 200 under the same UA; also 500 for browser UA and spoofed Googlebot UA, with different error-body sizes) → **crawl-guidance-gap case**, my leading candidate. | picking taste-based (rejected); assuming all real trades are invisible (rejected — Mokko disproves it, that's why we measure) | Agent finding; founder confirmation open (D23) |
| D23 | 19 Nov | **Explicit non-claim, logged so the demo can't drift:** we do **not** know why the 500 happens, whether Google/Bing/Naver retry or treat 500-as-absent, or any ranking/citation effect. A **`robots.txt`** file (the file sites publish telling automated agents which paths they may request) returning 500 is an *observed server response*, and the four grades ABSENT/MEDIATED/THIN/OWNED still require engine answers from the founder's browser. Video line stays "we observed this, here's the control" — no causal story | claiming "broken robots.txt = invisible" (rejected) | Agent rule |
