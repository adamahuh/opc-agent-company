# Website copy spec — embold'r agency front + free impact check

**Written:** 23 Nov 2026, after the 4-section restructure (hero / problem & solution / value / alt-CTA) and the tool move to `/impact-check`. Updated same day: text-trim batch, cite-ability positioning (D24), platform-specific fix instructions.

This is the text contract for the live site (`embold-r-ai-visibility.geo.hashmeta.tech`). Any future text change must preserve the rules below.

## 1. Audience targeting (locked 23 Nov)

The site speaks to **three audiences, in this order**:

1. **The practitioner** (heritage craft, environmental operator) — the *user* of the free check. Hero, alt-CTA and the tool page address them directly ("your work", "a letter addressed to the practitioner").
2. **The CSR-driven company** — a *funder*. The "Verified impact portfolio" tier addresses them. Never a registry subject.
3. **The institution** (museums, councils, federations, government buyers) — a *buyer/steward*. The value section ("plain-language briefings for your board") and the Institutional annual tier address them.

## 2. Positioning (D24, locked 23 Nov)

**"We make impact itself cite-able — machine-readable, traceable to its source, verifiable by buyers."**

- Differentiation is framed as *why impact work needs what traditional SEO can't give* (machines citing provenance/craft/stewardship; buyers asking engines, not ads).
- **No competitor names in public copy.** Competitor comparison is a founder answer for judges.
- No overclaiming: "verification stays the buyer's job; we make it traceable."

## 3. Text trims (23 Nov, applied and vision-verified)

- **Problem paragraph (home)** → "Weavers, restorers and community work across Southeast Asia are the *subject* of other people's pages — and absent from the answers engines actually give. We measured it: on one real craft site, even the crawl guidance is broken; on others, there is nothing for machines to read, and every customer converts on someone else's platform."
- **Solution paragraph (home)** → "We make the work *legible to the machines that write the answers*. Measure first — never assume. Then bounded fixes: at most ten, with the practitioner's sign-off, published and re-measured. No bulk AI pages, no ranking promises, ever."
- Tool "Use it" beat → "We check what machines can read, know, and cite about your impact — then fix it in plain language: a letter with copy-paste fixes and exact instructions for your site builder."
- Yandex and Copilot removed (wrong market for SG/SEA).
- RUN-006 line trimmed to "RUN-006 · instrument: Hashmeta platform traffic log · this site built with Hashmeta AI".
- Boundaries line kept long — it is the contract.

## 4. Voice rules (from MEMORY D6–D17)

- Measure, never promise: no ranking/indexing/citation claims, anywhere.
- Plain language; the letter reads like correspondence, not a report.
- Every technical finding is labeled (`observed`, HTTP codes, run IDs); the 500 cause stays "unknown — we do not guess" — and is attributed to the *platform*, not the practitioner.
- Boundaries stay visible: ≤10 assets, practitioner sign-off, no bulk AI pages, refusals held as data.
- Pricing stays "on request" on-site; narrated benchmark numbers only ever in the demo video.
- Internal audit notes (D23, WhatsApp counts) never appear in customer letters — data only.

## 5. The letter contract (engine, nxtb2cwd V8)

- Opens: "Here is what stands between your work and the answers engines give — and exactly how to close each gap."
- Every paste-in fix carries a **platform-specific Where** (Squarespace/WordPress/Wix/Shopify auto-detected, generic fallback): title/meta → page SEO panel; JSON-LD/OG → Code Injection/HEADER; alt → image settings; H1 → first title block; robots/sitemap 500 → "platform fault, report to support — we do not guess causes."
- Impact-schema fix: extends existing LocalBusiness with `knowsAbout` — placeholders marked "in your own words"; never invented descriptors.
- Closes: "machines can read you, know what you are, and — once these fixes land — cite what you keep alive. Verification stays the buyer's job; we make it traceable. And no honest tool can promise a ranking — anyone who promises one is selling you one."
- "How we work" section (was "We will not do these things") + "we do the bounded work that makes you cite-able."

## 6. The ochre highlight (`.hl`)

At most **one per section, never twice in the same section**. Home: "can't read it" + "legible to the machines" (problem/solution), "one thing" (value). Tool page: none in body copy; kintsugi gold seams carry the accent.

## 7. Structure reference

- Home: 4 sections, weave 3D from the hero (transparent hero + header), sticky header with top-right "Free impact check" CTA (translucent), slim legal-only footer. Value = 3 cards (Rescue / Verified impact portfolio / Institutional annual).
- `/impact-check`: kintsugi 3D from the header, name-search input + suggestions from the registry, readiness tree (5 branches, no score), checks table, letter, RUN-006 bot table.
- Copy sources: this file is the single text contract; `STORYBOARD_SEO_TOOL.md` §4 governs the letter format; `DECISION_2026-11-23_CITE_ABILITY.md` records D24.
