# Website copy spec — embold'r agency front + free impact check

**Written:** 23 Nov 2026, after the 4-section restructure (hero / problem & solution / value / alt-CTA) and the tool move to `/impact-check`. Updated same day: text-trim batch, cite-ability positioning (D24), platform-specific fix instructions, Rejuvenation naming (D12 follow-up), copy-paste affordances (V10), evidence-section removal from the tool page, and the visual response redesign (card model, V11).

This is the text contract for the live site (`embold-r-ai-visibility.geo.hashmeta.tech`). Any future text change must preserve the rules below.

## 1. Audience targeting (locked 23 Nov)

The site speaks to **three audiences, in this order**:

1. **The practitioner** (heritage craft, environmental operator) — the *user* of the free check. Hero, alt-CTA and the tool page address them directly ("your work", "a letter addressed to the practitioner").
2. **The CSR-driven company** — a *funder*. The "Verified impact portfolio" tier addresses them. Never a registry subject.
3. **The institution** (museums, councils, federations, government buyers) — a *buyer/steward*. The value section ("plain-language briefings for your board") and the Institutional annual tier address them.

## 2. Positioning (D24, locked 23 Nov)

**"We make impact itself cite-able — machine-readable, traceable to its source, verifiable by buyers."**

- Differentiation is framed as *why impact work needs what traditional SEO can't give* (machines citing provenance/craft/stewardship; buyers asking engines, not ads).
- **No competitor names in public copy.** Competitor comparison is a founder answer for judges, not site copy.
- No overclaiming verification: "verification stays the buyer's job; we make it traceable."

## 3. Text trims (23 Nov, applied and vision-verified)

- **Problem paragraph (home)** — "Weavers, restorers and community work across Southeast Asia are the *subject* of other people's pages — and absent from the answers engines actually give. We measured it: on one real craft site, even the crawl guidance is broken; on others, there is nothing for machines to read, and every customer converts on someone else's platform."
- **Solution paragraph (home)** — "We make the work *legible to the machines that write the answers*. Measure first — never assume. Then bounded fixes: at most ten, with the practitioner's sign-off, published and re-measured. No bulk AI pages, no ranking promises, ever."
- Tool "Use it" beat — "We check what machines can read, know, and cite about your impact — then fix it in plain language: a letter with copy-paste fixes and exact instructions for your site builder."
- Yandex and Copilot removed (wrong market for SG/SEA).
- RUN-006 line trimmed to "RUN-006 · instrument: Hashmeta platform traffic log · this site built with Hashmeta AI".
- Boundaries line kept long — it is the contract.

## 4. Voice rules (from MEMORY D4–D17)

- Measure, never promise: no ranking/indexing/citation claims, anywhere.
- Plain language; the letter reads like correspondence, not a report.
- Every technical finding is labeled (`observed`, HTTP codes, run IDs); the 500 cause stays "unknown — we do not guess" — and is attributed to the *platform*, not the practitioner.
- Boundaries stay visible: ≤10 assets, practitioner sign-off, no bulk AI pages, refusals held as data.
- Pricing stays "on request" on-site; narrated benchmark numbers only ever in the demo video.
- Internal audit notes (D23, WhatsApp counts) never appear in customer letters — data only.

## 5. The response contract — visual card model (engine nxtb2cwd V11)

**The tool response is a visual report, not a wall of prose.** Screen order on `/impact-check`:

1. **Verdict band** — subject (name, URL, sector, detected site builder), then the state line: *"N of M things machines need are working. Here are the gaps — each with an exact fix."* State, never a score (D7 held: no aggregate number).
2. **Readiness tree** (enlarged) — 5 branches (Reachable / What you are / Your snippet / Page structure / How you share), gold vs hollow leaves; caption: "each leaf is something a machine can cite."
3. **Gap finding cards** — one per broken thing. Each card: a plain title in the practitioner's world ("Engines write your blurb for you", "Your work is invisible to machines"), one-sentence why-it-matters, mono detail line, and a dashed **fix box**: effort pill ("2-minute fix"), **"Copy the snippet"** chip (exact paste-ready snippet), the platform-specific **Where**, and a "graded against" source. Failing things are loud; passing things collapse to one quiet line ("N things already working — view").
4. **Letter footer** — ~100 words, the takeaway document (copy button): greeting, one-paragraph summary, "How we work" contract, Rejuvenation next-step, sign-off. The screen carries the information; the letter is what the practitioner keeps or hands to their site builder.
5. **Refusal card** — same visual treatment: gate verdict, one reason, one next step; refusal logged as data.

Engine mechanics (honest basis of every claim): 3–4 polite fetches (home, robots, sitemap), regex measurement, one `check_log` row. No ranking/traffic/query data for the subject; one page deep; point-in-time.

Per-fix rules carried over: every paste-in fix carries a **platform-specific Where** (Squarespace/WordPress/Wix/Shopify auto-detected, generic fallback); impact-schema fix extends LocalBusiness with `knowsAbout` — placeholders marked "in your own words"; never invented descriptors. 500s are platform faults — "report to support with the timestamp. We do not guess causes."

- **Copy-paste affordances:** "Copy the letter" button on every result (accepted and refusal); copy chip per fix — one click copies the exact snippet (JSON-LD block, meta description, OG tags, alt text).
- **Naming (D12 follow-up, locked 23 Nov):** the practitioner offering is the "AI Visibility **Rejuvenation**" (never "Rescue" — it made practitioners sound poor). The CSR tier funds "impact engagements". "Rejuvenation" is reserved for our offering only.

## 6. The ochre highlight (`.hl`)

At most **one per section, never twice in the same section**. Home: "can't read it" (problem/solution), "one thing" (value). Tool page: none in body copy; kintsugi gold seams carry the accent.

## 7. Structure reference

- Home: 4 sections, weave 3D from the hero (transparent hero + header), sticky header with top-right "Free impact check" CTA (translucent, 45%), slim legal-only footer. Value = 3 cards as **target users** (The practitioner → Rejuvenation / The CSR-driven company → impact engagements / The institution → annual account).
- `/impact-check`: kintsugi 3D from the header, name-search input + suggestions from the registry, Enter key runs the check, result only: verdict band, readiness tree (no score), gap finding cards with copy chips, collapsed passes, letter footer, refusal card. **The RUN-006 bot table and the sample-check block were removed from the tool page** (clutter) — RUN-006 evidence lives in `runs/` and RUN-007; the site's copy no longer cites bot numbers.
- Copy sources: this file is the single text contract; `STORYBOARD_SEO_TOOL.md` §4 governs the letter format; `DECISION_2026-11-23_CITE_ABILITY.md` records D24.
