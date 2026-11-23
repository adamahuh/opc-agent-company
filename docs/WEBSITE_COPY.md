# Website copy spec — embold'r agency front + free impact check

**Written:** 23 Nov 2026, after the 4-section restructure (hero / problem & solution / value / alt-CTA) and the tool move to `/impact-check`. Updated same day after the text-trim batch.

This is the text contract for the live site (`embold-r-ai-visibility.geo.hashmeta.tech`). Any future text change must preserve the rules below.

## 1. Audience targeting (locked 23 Nov)

The site speaks to **two audiences, in this order**:

1. **The practitioner** (weaver, restorer, environmental/community operator) — the *user* of the free check. Hero, alt-CTA and the tool page address them directly ("your work", "a letter addressed to the practitioner").
2. **The institution** (museums, councils, federations, tourist bodies, government buyers) — the *buyer*. The value section ("plain-language briefings for your board") and the Institutional annual tier address them.

Meaning-preserving edit applied 23 Nov: hero sub changed from "how visible impact-driven businesses are" to **"how visible your work is"** (direct address, same meaning).

## 2. Text trims (23 Nov, batch 2 — applied and vision-verified)

Long-winded and insider language was cut, meaning preserved:

- **Problem paragraph (home)** → "Weavers, restorers and community work across Southeast Asia are the *subject* of other people's pages — and absent from the answers engines actually give. We measured it: on one real craft site, even the crawl guidance is broken; on others, there is nothing for machines to read, and every customer converts on someone else's platform." (robots.txt/HTTP 500 jargon removed from customer-facing copy; the evidence detail stays in the repo's run logs.)
- **Solution paragraph (home)** → "We make the work *legible to the machines that write the answers*. Measure first — never assume. Then bounded fixes: at most ten, with the practitioner's sign-off, published and re-measured. No bulk AI pages, no ranking promises, ever." ("authoritativeness assets" / "dated artifact" insider terms removed.)
- **Tool page "Use it" beat** → "Google, Bing (which feeds ChatGPT), and the AI engines' crawlers" (Yandex and Copilot removed — wrong market for a SG/SEA audience.)
- **RUN-006 line (tool page)** → trimmed to "RUN-006 · instrument: Hashmeta platform traffic log · this site built with Hashmeta AI" (judge-facing ownership detail lives in the repo evidence trail, not the page.)
- **Boundaries line (home)** kept long — it is the contract.

## 3. Voice rules (unchanged from MEMORY D6–D17)

- Measure, never promise: no ranking/indexing/citation claims, anywhere.
- Plain language; the letter reads like correspondence, not a report.
- Every technical finding is labeled (`observed`, HTTP codes, run IDs); the 500 cause stays "unknown — we do not guess".
- Boundaries stay visible: ≤10 assets, practitioner sign-off, no bulk AI pages, refusals held as data.
- Pricing stays "on request" on-site; narrated benchmark numbers only ever appear in the demo video, never on the site.

## 4. The ochre highlight (`.hl`)

The warm highlight (`rgba(192,138,62,.28)` behind short key phrases) is a deliberate accent. Current uses on the home page — keep to **at most one per section, never in the same section twice**:

| Section | Highlighted phrase |
|---|---|
| Hero | (none — the italic em in the headline carries the emphasis) |
| Problem & solution | "can't read it" · "legible to the machines that write the answers" |
| Value | "one thing" |
| Alt-CTA | (underline treatment, ochre, on the closing link) |

The tool page uses none in body copy; the kintsugi gold seams carry the accent there.

## 5. Structure reference

- Home: 4 sections, weave 3D from the hero (transparent hero background, fixed canvases), sticky header with top-right "Free impact check" CTA, slim legal-only footer (no wordmark block).
- `/impact-check`: kintsugi 3D background, live engine, sample check, RUN-006 bot table, registry feed.
- Copy sources: this file is the single text contract; `STORYBOARD_SEO_TOOL.md` §4 governs the tool page's letter format.
