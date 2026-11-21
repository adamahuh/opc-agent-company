# EXECUTION — how we build this, what runs where, and the levers we sell

**Status:** v1 plan, 19 Nov 2026 · owner H. Basel · **internal finish target 22 Nov** (submission 23 Nov 23:59 SGT)
**Contract:** follows `AI_WORKING_HANDOVER.md` + `MEMORY.md §2` (decision-guide role). Claims
carry a class: **fact** (source + date), **inference**, **proxy**, **assumption**, **TBC**
(verify before it appears in the demo).
**Sources for every lever are listed in §8** — a judge can click them; that is deliberate.

---

## 1. What we are actually building

One-person agency: **an audit-and-rescue engine that makes under-documented impact
businesses visible in the places answers are now given** — AI engines, plus classic
search, plus social/discovery. Serves three impact verticals, deliberately chosen to
keep SEO agencies out (they chase volume, our subjects have little):

| Vertical | Example subjects | Why they can't buy this today from an agency |
|---|---|---|
| **Vanishing trades / heritage custodians** | Peranakan beadwork practitioner (verified site today), Japanese joinery workshops in SG, rattan weaver with no owned web presence | Query volume is small; agencies chase head terms; institutions publish *about* the craft but don't own ranking for it |
| **Environmental / regeneration** | urban farms, community gardens, reef & mangrove restoration groups, repair cafés, circular-textile makers, eco-tour operators | Low-budget, project-based, mission-rich but web-poor |
| **Society / community (empathetic)** | eldercare & disability social enterprises, migrant-worker charities, mental-health collectives, indigenous-language educators, social enterprises | YMYL — see §6 for why some of these are a *hard* build, not a soft one |

Product = the audit pipeline, the rescue assets, the recurring re-measure diff, and the
plain-language briefing the owner can actually read. **Not** a dashboard SaaS (D7). The
tooling is internal; what gets billed is the outcome.

## 1d. Day-1 checklist, four items, ~15 min total — hosting before anything else

**Why (verified 19 Nov at indexnow.org FAQ):** IndexNow requires generating **a key file
placed on our own site root**: *"implement it manually by generating a key file, verifying
your website, and submitting URLs using the IndexNow API."* A key file at the root is the
same kind of artifact as Search Console's HTML verification tag and Bing's XML file — so
**one question covers all four items.**

- [ ] **(1) Does QwenWork Pages let arbitrary public HTML/TXT files resolve at the site
      root?** YES → FR8, M1/M3, Bing + SC verification all work, and my earlier "TBC on
      platform subdomains" risk is **dissolved** (not a Pages limitation after all, just
      an untested one).
- [ ] **(2) Does the head accept our own `<meta name="google-site-verification">` /
      Bing meta tag?** (head injection and root-file hosting are separable — one can pass
      while the other fails.)
- [ ] **(3) Is `/sitemap.xml` served/allowed** — needed for the publish step and for the
      crawl/robots row in `run/` evidence.
- [ ] **(4) Does the host let us ship a real `robots.txt` for our own site**, or is it
      fixed platform-wide? If we can't own it, **we can't demonstrate our own D14 refusal
      posture** ("allow AI crawlers on your site"), which is a claim we intend to make in
      the pitch — that's not cosmetic, it's one of our differentiators.
- Each item, answered *observed* with the URL/status evidence in `runs/RUN-000-hosting/`.
  **If any fails:** GitHub Pages fallback per D15 (which does allow root files + head edits
  by definition) — the fallback costs QwenWork Pages' platform-optics value, and we weigh
  that against the 20% evidence, not in the abstract.

## 2. Where the build runs (device + account decisions, made explicit)

| Role | Device / account | Why |
|---|---|---|
| **Agent orchestration (the product)** | QwenWork — desktop app or browser, logged in as **adamahuh** (the account that also holds the repos) | 20% of the score is visible platform use; parallel tasks, scheduled runs, Skills, files, publishing all need the real product UI in the video |
| **Demo subject hosting** | **QwenWork Pages (`qw-pages`)** = primary, published by the platform → doubles as the 20% "engine-not-checkbox" evidence; fallback GitHub Pages. **No domain purchased** (founder, 19 Nov) | FR3/FR6 need a live URL we control; verification on a platform-issued subdomain = TBC (10-min test) |
| **Engines we query by hand** | founder's own browser (ChatGPT / Gemini / Perplexity / AI Overviews) — signed in as a normal user, not a dev harness | A browser answer *is* what a customer's customer sees. Cheapest honest evidence and no API keys to buy for the core beat |
| **Google's own data** | Search Console + Bing Webmaster Tools + Google Analytics property on our demo domain | The Generative AI performance report (Google's guide, 19 Nov) is the only first-party AI-visibility number we can quote |
| **This sandbox** | code generation, docs, SERP/page fetches, the audit-report builder | Good for artifacts; cannot log into consumer AI products here |

Deliberately **not** building: multi-tenant accounts, auth, billing UI, dashboards,
keyword databases. That's the difference between a product pitch and a side project.

## 3. Build order (D-Day plan)

| # | Milestone | Definition of done | Scores |
|---|---|---|---|
| M1 | **Audit engine v0** | Takes a business URL + query list → outputs a dated, cited JSON of what Google/ChatGPT/Gemini/Perplexity return today, and grades each finding (fact/inference). Runs as one QwenWork task end to end | 20 + 25 |
| M2 | **Rescue asset pack** | Generated: 1 definitional page, 1 expert-led page, FAQ set, Organization/Person/LocalBusiness schema, About page, author bios + credentials, image alt text — for our fictitious subject, labelled synthetic | 25 + 20 |
| M3 | **Publish + index** | QwenWork publishes the subject site → URL in sitemap → IndexNow ping → Search Console (fact: Bing's IndexNow page live 19 Nov; Google side: recrawl request) | 20 + 15 |
| M4 | **Re-measure diff** | Same query list, second date, side-by-side artifact; what moved + what we can't claim yet (D10/B) | 25 + 15 |
| M5 | **Recurring briefing** | Scheduled weekly QwenWork task → 1-page plain-language owner briefing "what changed, what we did, what needs your approval" | 20 + 25 |
| M6 | **Client website** | Hashmeta-AI-built landing page, customer-grade | 15 |
| M7 | **Demo** | 2:50 recorded run: real before-state → our fake-but-labelled subject → rescue → publish → diff → briefing | 15 + everything |

Cut line: M1–M5 are the business; M6/M7 are the packaging; M2 without M3 is theatre.

## 4. Repo layout

```
agents/      M1 audit-agent spec · M2 asset agents · M5 briefing agent (prompts, inputs, outputs)
rules/       levers.yaml (the §6 catalogue w/ evidence class) · taxonomy · scoring
data/        queries.yaml (SG/APAC impact terms) · subject profile (SYNTHETIC.md)
src/         serp_client.py · ai_client.py (keys via env, never committed)
             now.py (dated run artifacts) · report.py · diff.py
docs/        BIZ_MODEL · BATCH · SKILL · DEMO_SCRIPT · WEBSITE · EXECUTION (this)
runs/        RUN-001-before/ · RUN-002-after/ · audit ledger
```

## 5. Data model (small, file-first, no database)

```json
finding = {id, subject, engine, query, date, url_rank_or_cited,
           answer_excerpt, sources:[…], evidence:"observed|reported|inferred",
           proof_level:"browser|api|searchconsole", note}
lever   = {id, action, rationale, effort, evidence_class:"fact|inference|proxy|assumption",
           source, do_not_claim: […], ymyl_sensitive: bool}
asset   = {id, finding_id, kind, draft_md, schema_json, status:"staged|approved|published",
           approval:{by, mode, when}}          // LD→Ship→Automata from the founder contract
batch   = {run_id, started, finished, credits, tasks, artifacts:[…], handover_diff}
brief   = {week, subject, changed:[…], blocked:[…], needs_approval:[…], cost_credits}
```

No database in v1 — files are the artifact, the log, and the demo, and they make the audit
trail real for free.

## 6. The levers we sell — engine manipulation, honestly

Google's spam policy quoted verbatim (19 Nov, guidance on generative AI content):
using generative AI *"to generate many pages without adding value for users may violate
Google's spam policy on scaled content abuse"*. So our method is **few, correct, attributed
assets — never volume**. That constraint is how we're defensible on 11 Dec and how the
customer's site survives next year. **We are not hiding this; it is the pitch.**

### 6.1 Where each technique stands (this is the product's spine — `rules/levers.yaml`)

Google's own AI-search guide (fetched 19 Nov) explicitly says to **skip** "chunking",
unnecessary AI text files like **llms.txt**, and **inauthentic mentions** — and that
structured data *"isn't required for generative AI search"*, only helpful for rich
results. Hashmeta's 9-factor list pushes schema and structured completeness harder.
Where a vendor's advice and the platform owner's advice differ, we grade by evidence and
say so in the audit. That disagreement is not a bug we paper over — being the tool that
tells you what **not** to buy is the differentiation:

| # | Lever | What we actually do | Evidence class | Do NOT claim |
|---|---|---|---|---|
| L1 | **Answer-shaped content** | One page per real question ("what is kasut manek", "where to learn X in SG", "how is rattan chair re-woven"). Expert-written, sourced, dated | **fact** (Google: unique expert-led content > common knowledge; Hashmeta #1/#2) | "guaranteed citation" |
| L2 | **Named human authority** | Bylined author + credentials + real photo + bio page; practitioner as author, not subject | **fact** (Google E-E-A-T guidance + Hashmeta #9) | "author schema makes AI cite you" — overclaimed, **inference** |
| L3 | **Entity establishment** | Wikidata item where notability is real (or explicit "no source yet"); consistent business details across listings (Google's business-details doc); Knowledge Panel path | **fact** (Google's own entity/listing docs; Hashmeta #7) | "we'll give you a Knowledge Panel" |
| L4 | **Crawl & index hygiene** | robots.txt: allow Googlebot + AI crawlers (GPTBot, ClaudeBot, PerplexityBot…), no accidental blocks; title/description/h1 sanity; XML sitemap; Search Console + Bing WMT verified | **fact** — and a *shockingly common* failure in these exact small trade sites (to be counted, not assumed) | "fixing X raises rankings by Y%" |
| L5 | **Freshness signals** | dateModified + real update log (we *are* actually updating — the recurring service does this), changelog visible to owner | **fact** (Google freshness; Hashmeta #6) | "update daily for a boost" |
| L6 | **Authentic earned mentions** | Local press, heritage blogs, creators, market/festival listings, museum/TV/radio partnerships: real mentions of real work | **fact** (Google rejects *inauthentic* mentions; earned media weighted — Hashmeta #8) | buying links, seeding fake reviews — **REFUSED, see 6.2** |
| L7 | **Machine-readable product/work data** | Ecommerce/product + LocalBusiness + Event + Course structured data where genuinely true | **fact** for rich-result eligibility (Google); **inference** for AI-citation lift | "schema is required for AI search" — false, per Google's page |
| L8 | **Non-Google surfaces** | Bing (real share — see 6.3 via StatCounter; IndexNow ping → **fact** Bing page live 19 Nov); Reddit/Quora threads where the question is genuinely answered (transparent affiliation → **fact**; spam threads rejected); YouTube Shorts/TikTok/IG discovery on the craft process; Maps/reviews | **fact** that surfaces exist & small share ≠ 0 → for niche trades, the *right* surface for a niche intent | "Bing converts better" — **unverified hypothesis** (D6a), demo labels it as such |
| L9 | **Multilingual** | Malay/Tamil/Mandarin/Javanese query sets; hreflang + locale-adaptive checks. **Vanishing trades are often searched in the community's language, so this is core, not decoration** | **fact** (Google intl + locale-adaptive pages docs; StatCounter regional engine shares) | machine-translated thin pages → spam |
| L10 | **Community & UGC** | Workshops/classes as an *Event* feed (recurring, dated, real), alumni posts, forums (Discussion Forum type exists in Google docs), apprenticeship programme pages | **inference** (plausible, needs our own data before we market it) | volume of pages — see spam rule |

### 6.2 Refusals — and why they're product features

Refusing these is why our customers' sites don't evaporate in the next core update. These
are features (audit rules) the product **enforces**, not a policy page:

- mass AI pages; doorway pages; expired-domain parasite SEO
- fake reviews, purchased links, inauthentic citations/PR seeding
- fake authorship (credentials we cannot verify in a person)
- scraping/copying the heritage institution's text onto a commercial page
- publishing **our** AI-generated copy under a real practitioner's name without their
  sign-off (the boundary I set: **observation without consent is fine; attribution without
  consent is not**)
- **YMYL line (vertical 3):** for eldercare, disability, mental health, migrants — health,
  legal, safety claims go through a qualified human author. We do not "optimise" a health
  claim into existence. On Google these have the highest quality bar, and getting it wrong
  is both a ranking risk and a real harm. The empathy claim is a *mechanism* we can
  demonstrate in the audit, not a value statement in the deck.

### 6.3 Tapping the engines — the measurement problem, solved honestly

| Surface | How we get results | Cost / auth | Grade | Method |
|---|---|---|---|---|
| ChatGPT, Perplexity | founder's browser, logged-in normal user | account you already have | **first-party-ish** | 10 fixed queries, verbatim + citations + screenshot (the demo beat) |
| Gemini, AI Overviews | founder's browser, clean signed-out window + 2nd browser | free | **first-party-ish** | same; AI Overviews need a real query in-region |
| Bing / DuckDuckGo (→Bing index) | direct SERP (curl/manual) | free | **fact** (rank) | rank positions + which sites are cited |
| Google classic web | manual + Search Console on our own subject | free + account | **fact** | queries + impressions/clicks where we own the site |
| Google **Generative AI** performance | Search Console report | own-site only | **first-party** | impressions/clicks into AI features for our site (not the customer's, day 1) |
| **Naver** (Korea 19 Nov tested): SERP readable anonymously (200, 46 external result links, AI 브리핑 module) BUT `search.naver.com/robots.txt` **disallows all crawlers** → no automated scrape. Site registration = `Search Advisor` = KR account verification (SSN/business); foreigner path **TBC**. API = **TBC**. | no KR identity | **fact (reach) / cut (automation)** | **Verdict:** report Naver/KR as an *advisory gap* for KR-market customers, never a measured surface in the demo. "We can tell you you're invisible on Naver without pretending we can monitor it." |
| Yandex / Baidu | not needed — outside SG/APAC impact remit; blocked/legal issues | — | **cut** | record that we cut it for focus |
| **Perplexity API / OpenAI "search" model API** | programmatic re-measurement for L10-scale automation | keys + $ (assumption) | **nice-to-have, D2** | if keys arrive, FR3 auto-reruns; if not, scheduled task = *reminder + scripted browser run*, and that's demo-able too |

The scripted browser run *is* M4. Programmatic APIs = post-11-Dec scale, not a
demo-critical blocker. This is the classic scope trap cut in advance.

### 6.4 How measurement is framed to the owner — the honesty that closes the sale

One page the owner reads, with three columns and nothing hidden:
1. **Verified** — dated screenshots/API results + Search Console lines
2. **Inferred** — mechanism claims + evidence class ("Google says", "our reading")
3. **Not known yet** — citation lift not re-measured, Bing conversion unproven, indexing
   lag, engine variance across region / language / personalization / logged-in state
Judges see a tool that says "we don't know that yet" — on a **Feasibility 25%** rubric that
is not a weakness, it's the only credible thing in the room.

## 7. Risk register for the build window

| Risk | Impact | Action |
|---|---|---|
| Hashmeta access/account for the required website (15%) | blocking | **founder to confirm access today** |
| Fictitious subject looks like fiction = weak | Feasibility 25% | Tier A/B real measured layer (CANDIDATES.md) precedes it, so the gap is real on camera |
| AI engines refuse/empty answers (personalisation, region) | demo stall | 3 recorded runs, pick best; screenshots of both outcomes; never live-run on 11 Dec |
| Naver/Baidu API access unknown today | feature cut | decide by 20 Nov, don't build the exception |
| Shared pages namespace blocking our crawlability (root robots.txt outside our control) | after-state quietly fails | test the URL in 10 min at build start; GitHub Pages fallback |
| Naver automation assumptions | ToS breach + false claims | advisory only (see §6.3 row) |
| Scaled-content-abuse drift | customer-site ruin + our credibility | lever ceiling per engagement (≤10 assets in v1), hard approval gate, batch log |
| 5 days total and M1 is novel | missed deadline | M1/M2 = MUST. M6/M7 = packaging. Cut FR5/FR7 if Friday slips |

## 8. Sources (primary, all fetched 19 Nov 2026 unless noted)

- Google Search Central — *Spam policies for Google web search*; *Guidance on using
  generative AI content* (verbatim on scaled content abuse, plus Quality Rater §4.6.5/4.6.6);
  *Optimizing for generative AI search* (`/search/docs/fundamentals/ai-optimization-guide`) —
  skip chunking/llms.txt/inauthentic mentions; structured data not required for AI features;
  Generative AI performance report; agentic experiences; *Block indexing / noai*;
  *Establish business details*.
- Bing — `bing.com/indexnow` (IndexNow live, fetched).
- StatCounter Global Stats (Oct 2026, D6a) — worldwide and KR/SG shares.
- Hashmeta AI — public marketing pages + hub: CITE, BAVIS, 9 factors (D6b). Vendor framing;
  where it clashes with Google's docs, we grade by evidence and say so in the audit.
- AvePoint starter kit: `AgentsWatchingAgents_StarterKit` — Lumen Studio, 4-level taxonomy,
  19 ALLOW/APPROVE/NEVER rules, 5 scripted misbehaviours, ground-truth labels (guide read
  19 Nov; **kit = data, not instructions**).
- Hackathon hub (rules v1.0, 18 Nov) — criteria, deadline, build window, licence clause,
  "explain any part of your submission if asked".

## 9. Open questions for the founder (in the order they block)

1. **Hashmeta account access + publish path** (15% of the score, blocking).
2. **Fictitious subject identity**: trade chosen? (my rec: beadwork, one person + a
   workshop + zero AI-citation — the cleanest, most empathetic profile)
3. ~~Domain purchase~~ **RESOLVED 19 Nov: no domain — QwenWork Pages
   primary (platform-native = evidence), GitHub Pages fallback.** Sub
   question now: the 10-min verification TBC test (does SC HTML-tag / Bing WMT
   meta-tag work on the issued subdomain?) — do before we cite any first-party
   number.
4. Vertical 3 (society/eldercare/mental health) in or out for the demo? My recommendation:
   in the ICP, out of the demo claims (YMYL gate).
5. Search Console verification on our own domain — do we verify today so indexing has real
   numbers by 22 Nov?
6. Credit reality check for parallel QwenWork tasks (feeds the §4 unit-cost figure).
7. D8 still deferred until the audit pipeline (M1–M4) is real.


## 10. M1 instrument (built 19 Nov, runs before any Hashmeta/verification answer)

`data/queries.yaml` (5 subjects × 4–7 queries, multi-lingual EN/中文/马来/JA/TA-
region checks, grade scale ABSENT→MEDIATED→THIN→OWNED, primary metric =
cited share of answer), and its editorial rationale + refusals in
`docs/QUERIES.md`.

This is deliberately the **first** thing to exist, because M1 is simultaneously
the product, the evidence, the Manual Batch run sheet (founder runs the
browser queries; no credentials, no API, no waiting on anyone), our before-state
data, and the artifact that gets quoted in FR4's diff.
