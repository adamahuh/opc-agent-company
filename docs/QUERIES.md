# Audit query set — v0 (M1 input)

Dated 19 Nov 2026. **Design rule: an engine query must be the wording a real
person uses, in the language they'd use it in. We do not invent "branded
queries" to make results look better.** Query sets per subject; run
verbatim; store `answer_excerpt`, `cited_sources`, `rank_positions` and a
screenshot reference. Nothing scored without all four.

## Surface matrix we agree to attempt (see `EXECUTION.md §6.3` for the why)

| Surface | Mode | Legal / auth |
|---|---|---|
| Google web + AI Overviews | real browser, **signed out**, SG | free |
| ChatGPT, Gemini, Perplexity | logged-in personal browser, founder runs the clicks | free, **manual batch** |
| Bing / DuckDuckGo | browser | free (DDG ~0.66% worldwide; Bing/Copilot "higher intent/older/wealthier" claims **unverified — hypothesis only**) |
| YouTube/Instagram/TikTok search | browser | free — *the real discovery channel for craft demos* |
| Naver | browser manual only | `robots.txt` disallows all crawlers → **never automated**, advisory gap only |

## S1 — beadwork practitioner (synthetic subject, modelled on `nyonyaneedlework.com`)

intent: purchase · learn · verify existence · institutional

```
en:  Peranakan beadwork shoes Singapore
en:  kasut manek Singapore buy
en:  where to learn Peranakan beadwork Singapore
en:  Nyonya beaded slippers maker Singapore
en:  traditional beading workshop Singapore
zh:  加东娘惹手工珠绣鞋 新加坡            # Peranakan Nyonya handmade beaded shoes
ms:  kasut manek Nyonya tradisional Singapura
cy:  Peranakan beaded shoes workshop Singapore (cross-check only)
```

## S2 — rattan hand-weaver (no owned site exists = the invisibility proof itself)

```
en: last rattan chair weaver Singapore
en: hand woven rattan chair Singapore maker
en: buy handmade rattan furniture Singapore artisan
en: rattan weaving workshop Singapore
zh: 新加坡 手工藤椅 老师傅
```

## S3 — woodworking school (Suikoushya / Mokko pattern)

```
en: Japanese joinery class Singapore
en: traditional Japanese woodwork workshop Singapore
en: suikoushya singapore          # navigational check
ja: 日本大工 教室 シンガポール      # mother-tongue intent
```

## S4 — environmental / regeneration vertical

```
en: mangrove restoration Singapore volunteer
en: community garden Singapore adopt a plot
en: urban farm Singapore buy produce
en: repair cafe Singapore fix electronics
en: circular textile upcycling Singapore studio
ms: taman bandar Singapura sukarela
ta: சமூக தோட்டம் சென்னை         # (regional-language coverage check, not SG-only)
```

## S5 — societal/care vertical — **YMYL GATE ON**, questions only, never claims

```
en: elder care social enterprise Singapore
en: disability arts studio Singapore
en: migrant workers community centre Singapore support
en: how do I find a trustworthy home care provider Singapore   # information-only; authority = the source we surface, never us
```
S5 never produces content that makes a health, legal or financial claim — the
audit checks *whether an authoritative source answers*, not writes it. Full
rationale in `EXECUTION.md §6.2` and the refusal list.

## Methodological limits (added 19 Nov — do not skip these when we claim anything)

1. **Geo/personalisation.** This sandbox does **not** egress as Singapore-resident,
   signed-out traffic. Anything fetched from here is a *fetch-grade* observation about
   the public page (does it exist, is it crawlable, what does it say), not a claim about
   what an SG user sees on a results page or in an AI answer. Hence: engine rows carry
   `proof_level: browser` and come from the founder's Manual Batch; fetch rows carry
   `proof_level: fetch` and are never presented as "the engine said." Mixing those two
   columns would make our before-state unfalsifiable, so the distinction is load-bearing.
2. **Absent ≠ failed to load.** A consent wall, captcha, redirect trap, timeout or
   non-200 response is `inconclusive`, logged as such. Only a successful, retained fetch
   that shows no citation/rank supports **ABSENT**. Otherwise we would be inventing
   invisibility from our own crawler's failures (contract: a blocked runner is an
   environment limit, not a pass).
3. **Politeness & identity.** One request per URL, our own user-agent (never
   masquerading as Googlebot/Bingbot), honour each audited site's `robots.txt`
   (**the file a site publishes to tell automated agents which paths they may
   request**), no authenticated or write calls. We audit robots files as data; we don't
   act like a search engine.
4. **Scope honesty.** A read-only pass measures surfaces reachable from public fetch:
   which entity listings exist (business directories, institutional pages), page-level
   structure, crawlability, schema validity, multilingual coverage. It cannot see
   ranking in Google's web index, logged-in state, AI Overviews, or any chat-engine answer

## Scoring

| grade | meaning | evidence |
|---|---|---|
| **ABSENT** | subject not mentioned by the engine answer | screenshot + answer excerpt |
| **MEDIATED** | engine cites a third party (news, blog, heritage body) *about* the subject, not the subject | source list showing no owned domain |
| **THIN** | subject present but not in the answer/citation, only in web results | SERP rank list |
| **OWNED** | subject's own page cited/ranked for its own intent | both |

**Metric we report:** *cited share of answer* (`sources where url host ==
subject domain`) over N queries. That is the number that moves — and the
number we can honestly show **before** the fix, since a 6-day window cannot
promise full after-state re-indexing (see D10: posture A+B).
