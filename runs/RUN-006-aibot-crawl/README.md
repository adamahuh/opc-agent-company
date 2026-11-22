# RUN-006 — AI-crawler discovery of the embold'r site

**Date observed:** 2026-11-22 (data covers 2026-10-23 → 2026-11-21, plus today)
**Subject:** embold'r agency site, `https://embold-r-ai-visibility.geo.hashmeta.tech`
**Instrument:** Hashmeta `get_site_traffic` (platform's own visitor tracking) + `get_analytics_connections`
**proof_level:** platform-instrument (machine-recorded by the host, not a browser observation and not a fetch by us)

---

## Headline finding

**Two AI crawlers fetched the site within ~24 h of publication, on 2026-11-21.**

| Bot | Operator | Stated purpose | Fetches | Pages | Last fetch (UTC) |
|---|---|---|---|---|---|
| `ClaudeBot` | Anthropic | training | 3 | 1 | 2026-11-21 09:40:03 |
| `OAI-SearchBot` | OpenAI | search | 1 | 1 | 2026-11-21 07:55:42 |

Total AI-bot fetches on 21 Nov: **4** (previous 30 days: **0**).
Only path recorded: **`/robots.txt`** (4 fetches, 2 bots).

## What this does prove

- The site was **discovered by AI-engine crawlers** without any submission by us.
- Both crawlers' first act was to **read `robots.txt`** — the crawl-guidance file. This is
  the exact file class that returns **HTTP 500** on the beadwork subject (RUN-001/RUN-002).
  On our site it returns 200 and was successfully read. That is a real, dated,
  machine-recorded contrast between the two states — not an inferred one.
- Hashmeta's built-in tracking reports AI-bot activity **with no setup on our side**.
  This is a working measurement instrument, available today.

## What this does NOT prove (do not upgrade these)

- **Not indexing.** Reading robots.txt is step 1 of a crawl. No evidence any page entered
  an index or a model's retrieval corpus.
- **Not citation.** `aiReferrals` = **0 sessions, 0 visitors, 0% share** across the whole
  30-day window. No AI assistant has sent anyone to the site.
- **Not ranking.** `get_analytics_connections` returns Google **disconnected** and Bing
  **disconnected**. There is no Search Console or Bing data at all, so no query, impression
  or position evidence exists.
- **Not an audience.** The 6 human visitors on 21 Nov are self-generated, not customers:
  all channel `direct`, bounce rate 100%, 1 page/session, and the cities are
  Boardman/Newark/San Jose (US datacentre ranges — consistent with our own probes and the
  host's checks), Groningen NL, and one Ulu Bedok SG (the founder). Must never be presented
  as traffic or demand.

## Honest framing for the demo

> "Within a day of publishing, Anthropic's and OpenAI's crawlers found the site and read its
> robots.txt — the same file that returns a 500 on the real craft site we audited. That is
> discovery, not citation: zero AI-referred sessions so far, and no search-engine data
> connected yet. We are showing the mechanism working at its first step, and naming the
> steps we have not reached."

## Next instrument steps (not done)

1. Connect Google Search Console and Bing Webmaster to the site (`get_analytics_connections`
   currently shows both disconnected). Note: the site sits on a `*.geo.hashmeta.tech`
   subdomain we do not control DNS for — verification method and feasibility are **unverified**.
2. Re-read `get_site_traffic` after any content change to see whether bots progress past
   `/robots.txt` to content pages.
3. `list_site_reports` / `get_site_report` for the platform's own SEO-audit and AI-visibility
   scoring — **not yet run**; its methodology is unaudited, so treat its scores as
   vendor-reported, not independently verified.

## Credits / cost

Read-only platform queries. No credits consumed by this run beyond the two tool calls.
