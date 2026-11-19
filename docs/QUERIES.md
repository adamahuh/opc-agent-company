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
