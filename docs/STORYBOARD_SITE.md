# STORYBOARD — embold'r agency site, built via code

**Written:** 22 Nov 2026 · Windows execution device · **Status: PROPOSAL for founder review. Nothing built, nothing published.**

Adapted from the contract's storyboard rule (`AI_WORKING_HANDOVER.md` §5): compositions are
annotated with copy, assets and transitions, capped at ten per chronological branch. Frames
below are **proposals, not playback proof** — no rendered screenshot exists yet, so per the
`Vision` rule these cannot establish motion, timing or final appearance.

---

## 0. Can we build it via code? Yes — proven, not assumed

| Route | Status | Evidence |
|---|---|---|
| **QW Pages, static** | **CONFIRMED** | `runs/RUN-003-hosting` — `/`, `robots.txt`, `sitemap.xml` all HTTP 200 at `y633cekp.qwenwork.page`; V2→V3→V4 redeploys clean |
| **QW Pages, dynamic (Node 22 + Supabase)** | PLATFORM-CAP | Documented in the `qw-pages` / `qw-pages-supabase` skills; **not exercised in this project** |
| **Hashmeta AI build** | **CONFIRMED** | Live at `embold-r-ai-visibility.geo.hashmeta.tech`; ~42 credits across four tasks |

So there are two real routes and they are **not interchangeable**:

- **Hashmeta** satisfies the scored 15% criterion ("website built with Hashmeta AI"). A
  hand-coded site does **not** earn that 15%, however good it looks.
- **Code** gives us the SEO tool's server-side fetch, which Hashmeta's CMS does not expose.

**Recommendation:** keep the Hashmeta site as the scored 15% deliverable, and build the
**SEO tool** as a separate code-built page. Do not replace one with the other. This is a
founder decision (D-list), not an agent call — see §5.

---

## 1. Top three references, with real live examples

All six exemplars below were status-checked 22 Nov (HTTP 200). Fonts and hex values are taken
from PageProofer's per-site teardowns, not inferred.

### Reference 1 — Editorial layout and hierarchy
*Source: Tubik, "Information, Beautified: 13 Editorial Web Designs"*

| Real example | What to steal | What to avoid |
|---|---|---|
| **every.to** | High-contrast Signifier serif with ornamental swash initials against a stark magazine grid; warm off-white `#fdfaf7` hero; **one** icy cyan accent `#9ce5f5` | The nocturnal black sections — too fashion-forward for institutional buyers |
| **basecamp.com** | **A signed founder letter**, slightly rotated. An **underlined index of links instead of a nav bar**. Hard numbers, unpolished customer video. Almost no decoration | Heavy 800-weight grotesk headlines — that is the loud route, not ours |

Basecamp is the single most transferable reference for us: every device it uses *signals
honesty*, which is precisely our brand claim. The signed letter is the honesty device we
should adopt — see §4, frame 8.

### Reference 2 — Oversized serif display type
*Source: a1.gallery serif collection (262 examples)*

| Real example | What to steal | What to avoid |
|---|---|---|
| **readwise.io** | **Source Serif 4 at 64px / weight 600 / tracking −0.02em, with one italicised word per headline.** Warm paper `#fbf9f3`. A flat highlighter rectangle behind one phrase per section | The peach-to-tangerine gradient panels — our design.md §1 forbids gradients |
| **press.stripe.com** | Ivar Headline/Display; **hairline rules and zero rounded corners**; each item gets a full-bleed colour band sampled from its own artwork. "Reads like a hardbound catalogue, not a website" | Full-bleed colour bands need artwork we do not have rights to |

**Readwise is the important one: it runs our exact proposed display font in production, as the
whole brand.** That upgrades Source Serif 4 in `design.md` §4 from "proposed, unverified" to
"proven at scale by a named site."

### Reference 3 — Warm-paper editorial mood
*Source: PageProofer "Warm & Editorial" collection*

| Real example | What to steal | What to avoid |
|---|---|---|
| **are.na** | **One typeface, one size (19px), hierarchy from weight alone.** Narrow centred column. Almost no colour beyond warm greys and a deep navy. Restraint *signals the product's values* — no ads, no algorithm, user-owned thinking | Total austerity — we do need to sell something |
| **hey.com** | Warm canvas `#f9f7f5`; loud opinion at headline level, calm and readable underneath | 83px/900 gradient-filled headlines — anti-institutional |

**Are.na is our closest narrative match.** Its restraint is not minimalism for taste; it is
the visual form of a set of commitments. That is exactly what our evidence discipline is —
and it is the argument for keeping the page austere even though we *could* decorate it.

---

## 2. Font storyboard

### Decision: keep Source Serif 4 + Source Sans 3 — now with two independent validations

| Role | Face | Weight / size | Why | Licence |
|---|---|---|---|---|
| Display (H1) | **Source Serif 4** | 600, fluid 56–72px, line-height 1.05, tracking −0.02em, **one word italicised** | Readwise runs it as an entire brand identity; PageProofer names it first in the serif route | **SIL OFL — free** |
| Section (H2) | Source Serif 4 | 500, 40–48px | Same family, hierarchy from size + weight | SIL OFL — free |
| Body | **Source Sans 3** | 400, 18px, line-height 1.5–1.6, measure ≤680px | Themex names it for "research-driven publications… where the content needs to feel direct and trustworthy." Same superfamily as the display face, so metrics harmonise | **SIL OFL — free** |
| UI chrome, nav, buttons, labels | Source Sans 3 | 500–600, 15–17px | PageProofer: **never** set buttons or UI chrome in the serif (Stripe Press is the sole all-serif exception) | SIL OFL — free |
| Data / timestamps / SHAs / hex values | system mono | 400, 13–14px | Evidence must look like evidence. Mono says "machine-recorded" | system |

**Rejected, and why it matters:** the more distinctive editorial faces — Canela, Noe Display,
Tiempos Text, Freight Text, Ivar, Signifier, Graphik, Areal — are **all commercial licences**,
several charging separately for web use or capping page views. Our constraint is $0. So the
"boring" choice is actually the correct one, and it is validated by a named production site
rather than by taste. **Lora** and **Newsreader** are the free fallbacks if Source Serif 4
renders poorly on the target host.

Loading discipline: WOFF2, `font-display: swap`, preload only the two weights actually used
above the fold, no unused language subsets — but never subset away the glyphs our Chinese and
Malay query strings need.

---

## 3. Graphics storyboard

The reference guidance is blunt: **no stock photography, no generic 3D blobs, no AI-generic
illustration.** Use real people, real footage, commissioned illustration. We have **no
permission-cleared craft imagery** (`design.md` §1 already records this), so we do not
fabricate any. Instead:

| Graphic device | Specification | Source of truth |
|---|---|---|
| **The ochre highlighter** | One flat rectangle, `#C08A3E` at ~28% opacity, behind **exactly one key phrase per section**. Never behind a whole sentence, never twice in a section | Readwise's `#f7dc1f` highlighter, re-toned to our earth palette. This is the answer to the founder's earlier "we need a highlight colour" — it is a *mark*, not just an accent |
| **Evidence cards** | White `#ffffff` on paper, **1px hairline `#dbd7cd`**, no shadow *or* a soft ~4% shadow — never both. Mono timestamp, proof-level pill, artifact path | Our own `runs/` artifacts. These *are* the imagery |
| **The bot table** | Set RUN-006 as a real table: bot name, operator, stated purpose, fetch count, last timestamp. No icon, no logo wall | `runs/RUN-006-aibot-crawl` — Anthropic and OpenAI crawlers, 4 fetches, `/robots.txt` |
| **Proof-level pills** | Text label **plus** shape/weight, never colour alone (WCAG 1.4.1). States: `pass` `fail` `blocked` `unsupported` `not tested` `inconclusive` | Contract §6 vocabulary, adopted 22 Nov |
| **Hairline rules, not colour bands** | Sections separated by a 1px rule or generous whitespace (100–180px), never alternating background colours | PageProofer principle 7 |
| **One hand-made mark** | A single squiggle divider, used at most twice on the page | Basecamp / HEY. Beyond that it becomes noise |

**Explicitly not used:** engine-logo walls (Google/ChatGPT/Perplexity badges), dashboard
mock-ups, floating glass panels, gradients, invented impact counters, fake testimonials,
decorative card grids for every section.

---

## 4. Content storyboard — ten compositions

Chronological branch: **a single scrolling page**. Container 1200px, text measure ≤680px,
120–180px between sections.

| # | Composition | Copy (final wording where locked) | Assets | Transition |
|---|---|---|---|---|
| 1 | **Hero** — asymmetric, text left, whitespace right | Eyebrow: *AI visibility for the work worth keeping* · H1: **Be the answer. Not just the article.** (italicise *answer*) · Sub: the adopted slogan, verbatim | none — type only | fade-in, 300ms, respects `prefers-reduced-motion` |
| 2 | **The problem, segmented** | "Some of the work institutions support has infrastructure. Some has structure but no way for machines to read it easily. Some has crawl guidance that fails outright." | three hairline-bordered cards: Mokko / Suikoushya / beadwork, each with its dated observation | scroll-reveal, staggered 80ms |
| 3 | **The finding that reproduced** | Beadwork: homepage 200, `robots.txt` 500, `sitemap.xml` 500. Two machines, two networks, same result. **Cause unknown — we do not guess causes.** | mono status-code block | none (static) |
| 4 | **The method** | Measure → build approved assets → re-check and report | three numbered steps, hanging numerals in Source Serif 4 | none |
| 5 | **What happened when we published** | "Within a day, Anthropic's and OpenAI's crawlers found the site and read its `robots.txt` — the same file that returns a 500 on the craft site we audited." Then, immediately: **"That is discovery, not citation."** | the real RUN-006 bot table | none |
| 6 | **The limits, spoken aloud** | Zero AI-referred sessions. Search Console and Bing disconnected. No ranking data exists. Six human visitors, all self-generated | four `unsupported` / `not tested` pills | none |
| 7 | **The programme** | AI Visibility Rescue (fixed scope, one subject) → institutional annual programme. **Pricing on request** — no invented number | two-column spread | none |
| 8 | **A signed note from the operator** | First person, plain, specific. States what we will not do. *This is the Basecamp honesty device* | signature in Source Serif 4 italic | none |
| 9 | **Boundaries** | ≤10 assets per engagement · practitioner sign-off · no bulk AI pages · no generated health, legal or financial claims · refusals held as data, not prose | the refusal list rendered from `rules/refusals.yaml` | none |
| 10 | **Close** | H2: **Send us one thing you keep alive.** · CTA: `[Contact pending]` — stays a visible placeholder until the founder supplies a real route. **No fake form, no fake success state** | one forest-filled button | none |

Composition 5→6 is the deliberate beat: the strongest thing we can show, immediately followed
by what it does not prove. That juxtaposition *is* the brand, and it is what makes the page
defensible under the "explain any part of your submission" rule.

---

## 5. Open decisions for the founder

1. **Which route carries the 15%?** Recommendation: Hashmeta stays the scored site; the
   code-built page is the SEO tool. Building the agency site in code instead would forfeit the
   Hashmeta criterion.
2. **Palette correction.** The references are emphatic: **one accent, rationed.** We currently
   carry three (forest `#294B3A`, clay `#A65D43`, ochre `#C08A3E`). Proposal: **forest is the
   single action accent** (CTAs, links, active states); **ochre becomes the highlighter mark
   only**; **clay is retired** or demoted to a single decorative squiggle. Our paper `#F6F2E9`
   is also slightly darker than the reference range `#f9f7f5`–`#fdfaf7` — worth testing both.
3. **The signed note (composition 8).** Needs the founder's real words and name. I will not
   ghost-write a personal signature.
4. **Contact route.** Still `[Contact pending]`. Until it exists the page cannot convert anyone.
5. **Contrast is still unverified.** Ochre `#C08A3E` against paper, and ink-on-ochre for the
   highlighter, must be measured before use on small text. Nothing in this storyboard certifies
   WCAG conformance.
