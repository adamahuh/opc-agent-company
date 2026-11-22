# STORYBOARD — the SEO enhancement tool ("paste a weaver's link")

**Written:** 22 Nov 2026 · Windows execution device · **Status: PROPOSAL for founder review. Nothing built, nothing published.**

Founder's request, verbatim: *"enable the seo changes to be made with our website e.g able to
enhance seo by putting the weaver's link into our system from their perspective"* — and
*"this process also needs to be designed aesthetically, so storyboard this as well."*

Frames are **proposals, not playback proof**. No rendered state exists yet.

---

## 1. What the tool actually is

One input: a practitioner's URL. One output: **a letter addressed to them**, containing the
specific changes that would make their own work readable to search and AI engines — written
from their perspective, in plain language, with the replacement text already drafted and every
recommendation graded against Google's primary docs.

**"From their perspective" is the whole differentiator.** Conventional SEO tools output a score
and a technical dump for an expert to interpret. Ours outputs something the practitioner can
read and act on without hiring anyone. That is `SKILL.md` row **S9** — legibility as the win
condition — turned into a product surface.

Concretely, for `karajasumba.com` the output would include, in her framing:

> *Your `/contact` page has no meta description, so when it appears in a search result the
> engine writes its own snippet from whatever text it finds first. You have a workshop in Sumba
> and 131 weavers behind you — the snippet should say so. Here is one, drafted from your own
> page text: "…"*

Note what that is **not**: it is not a score, not a grade, not a projected ranking.

---

## 2. The material choice — three options, because this touches a locked decision

**The tension:** D7 locks *service ladder, no SaaS / dashboards / auth / billing /
multi-tenant*. A public self-serve tool where anyone pastes any URL and gets a report is,
on a plain reading, **a SaaS dashboard**. Separately, our own politeness rule says *"we read
robots.txt as evidence, we do not act as a search engine"* — and an open on-demand fetcher of
arbitrary third-party URLs **is** acting as a crawler.

This is a founder decision, not an agent call.

| | A — Internal instrument | B — Gated public tool | C — Open self-serve |
|---|---|---|---|
| **What** | We run it; it produces the practitioner-facing letter. Never exposed as a public form | Public page, but fetches only domains on an **operator-approved allowlist**, rate-limited | Anyone, any URL, any time |
| **For** | Cleanest D7 fit — it stays a *service*, and the demo shows the agent using it, which is the Track 1 story | Real product surface, real demo interactivity, still bounded | Maximum demo impact; judges can touch it |
| **Against** | Judges cannot interact with it | Needs an allowlist UI and a refusal path; partial D7 tension | **Breaches D7 and the politeness rule.** Also makes us an open proxy |
| **Smallest test** | Run it once against Karaja, save the letter to `runs/` | Publish with a 1-domain allowlist, attempt a non-allowlisted URL, confirm it refuses | — |

**Provisional recommendation: A now, B for the demo.** Build the real instrument, prove it on
Karaja, then expose a gated public page whose allowlist contains exactly the demo subject. That
gives judges something to touch, keeps D7 defensible, and produces a *second* refusal beat —
the tool declining an unapproved domain is the same class of evidence as the content refusals
in §4 frame 6. **Evidence that would change this:** if the organisers confirm a working tool
scores under Feasibility regardless of the SaaS wording, C becomes arguable.

---

## 3. Architecture

| Layer | Choice | Status |
|---|---|---|
| Hosting | **QW Pages, dynamic** — Node 22, self-contained, reads `process.env.PORT` and `HOST`, port 8081 | PLATFORM-CAP (documented in the `qw-pages` skill; **not yet exercised here**) |
| Fetch | **Server-side**, never in the browser — avoids CORS, lets us send our own UA (`OPC-audit/0.2`), and lets us honour the target's `robots.txt` before requesting anything | Ports the logic already proven in `src/serp_client.py` |
| Paths per domain | 4, one request each: `/`, `/robots.txt`, `/sitemap.xml`, one content page | Same bounded shape as RUN-002 and RUN-005 |
| Storage | **None in iteration one.** Stateless request → response. Supabase only if we later want audit history | Avoids provisioning until it earns its place |
| Rules | `rules/config.yaml` (≤10 asset ceiling, YMYL gate) and `rules/refusals.yaml` (11 refusals) loaded as **data**, evaluated server-side | Already exists — built in M1 |
| Grading | Every technique checked against Google's primary docs (D14). No `llms.txt` claims, no bulk AI pages, no thin location/language variants | Existing refusal list |

**Failure handling, per contract §6:** a non-200, timeout, consent wall, captcha or redirect
trap yields `inconclusive` with `proof_level: fetch` — never a silent pass, never a fabricated
result. A blocked fetch is an environment limit, not evidence of absence.

---

## 4. Aesthetic storyboard — ten compositions

Same system as `STORYBOARD_SITE.md`: warm paper, Source Serif 4 for reading content, Source
Sans 3 for UI chrome, system mono for machine data, **one** ochre highlighter mark per section,
hairline rules instead of colour bands. The governing reference is **Are.na** — a page that
reads like a carefully typeset document rather than a marketing site — crossed with
**Stripe Press** for the ledger-like data rows.

The critical design rule: **the output is a document, not a dashboard.** No score dials, no
traffic-light rings, no gauge charts. Those are the visual language of a tool that ranks you;
ours reports to you.

| # | Composition | What is on screen | Copy / annotation |
|---|---|---|---|
| 1 | **Empty state** | A single hairline-bordered input on paper, one forest button, generous whitespace. Nothing else | Placeholder: *https://their-site.com* · reassurance line in italic grey beneath the button: **"We fetch four paths, once each. Nothing is submitted anywhere, and nothing is stored."** |
| 2 | **Fetching** | A live mono list, one line per path, each appearing as it is requested — not a spinner | `GET / … 200` · `GET /robots.txt … 200` · Honest, sequential, and it *shows the work*. If a path fails, the line says `500 — inconclusive` in place, and the run continues |
| 3 | **The technical finding** | Status codes as a mono block beside a short plain-language gloss | For a failing site: **"Their homepage answers. Their robots.txt does not."** No causal claim — the cause is unknown and stays unknown |
| 4 | **The letter** ← *the centrepiece* | Set in Source Serif 4, narrow measure, addressed to the practitioner by the name found on their own site. Reads like correspondence, not a report | Opens with what they already do well, then the gaps, then the drafted replacements. First person plural from us, second person to them |
| 5 | **The proposed assets** | A ledger of at most **10** rows: asset, what it fixes, the Google primary-doc basis, and the drafted text | The ceiling is rendered as a visible count — *"4 of 10 assets"* — so the constraint is a design element, not a hidden rule |
| 6 | **The refusal** | A visibly distinct block, same hairline treatment, no red | *"We will not write these."* Rendered straight from `rules/refusals.yaml`: no invented credentials or reviews, no generated health/legal/financial claims, no bulk AI pages, no thin location variants. **A tool that refuses is the demo** |
| 7 | **The diff** | One concrete before/after, side by side in mono — e.g. Karaja's empty `/contact` meta description against the drafted one | Only real observed values. **Never invent a "before"** (contract §6, Visual proof) |
| 8 | **The limits** | Four pills, text-labelled, never colour-only | `not tested` indexing · `not tested` ranking · `unsupported` citation lift · `inconclusive` anything the fetch could not reach |
| 9 | **The handoff** | What happens next, and who does it | Two paths: *we implement it for you under the Rescue engagement*, or *hand this letter to whoever builds your site*. Both honest; neither promises a ranking |
| 10 | **The operator log** | The audit-trail entry this run just wrote: timestamp, target, paths, status codes, rules evaluated, refusals fired | This is `SKILL.md` row **S2** made visible — the oversight spine showing its own work |

**Transitions:** frame 1→2 is the only animated moment (the mono list building line by line,
~120ms per row, suppressed entirely under `prefers-reduced-motion`). Everything else is static.
No scroll-jacking, no carousel — `design.md` §6 forbids both.

**One hand-made mark:** a single ochre highlighter rectangle behind the phrase *"from their
perspective"* in frame 4. Nowhere else on the page.

---

## 5. Why this is worth building, stated plainly

- It converts our **audit method** — currently a Python script and a markdown report — into
  something a judge can touch in twenty seconds.
- It makes the **refusal list** legible. Eleven refusals as YAML is a claim; a tool that
  declines in front of you is a demonstration. That is the S3/S8 evidence the 20% criterion
  is asking for.
- It produces the **practitioner-facing letter**, which is the actual deliverable we sell.
  Right now that artifact does not exist in any form.
- It is honest about its own limits on-screen (frame 8), which is the brand.

## 6. What it does not do

It does not submit anything to any search engine. It does not modify anyone's website. It does
not contact anyone. It does not predict rankings, and it cannot — indexing, ranking and AI
citation are separately measured outcomes, and per `MEMORY.md` D17 the causal chain
content → ranking → citation is **two slow hops, not one**. It does not prove that fixing these
levers changes AI-answer visibility; nothing in this project has proven that yet.

## 7. Open decisions for the founder

1. **Option A, B or C** (§2). Recommendation: A now, B for the demo.
2. **Allowlist contents** if B — Karaja only, or also the synthetic fixture?
3. **Does the letter get published?** It names a real practitioner and describes real gaps in
   her site. Publishing that without her permission would violate D9's spirit even though she
   is not the synthetic subject. Recommendation: **the letter is generated and shown, but not
   published**, and any real change to `karajasumba.com` requires the site owner's permission.
4. **Naming.** "Paste a weaver's link" is the internal description, not a product name.
5. **Nothing here is built.** Dynamic QW Pages remains unexercised in this project, so the
   first real test is a minimal hello-world server before any of this UI exists.
