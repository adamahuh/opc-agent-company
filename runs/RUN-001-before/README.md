# RUN-001-before — first fetch-grade pass (read-only, public pages)

**What ran:** `curl` HTTPS `GET` on 4 paths per domain (homepage, `/robots.txt`,
`/sitemap.xml`, `/sitemap_index.xml`) — one request each, **our own UA string
(`opc-audit/0.1`, labelled research)**, unauthenticated, no writes, no submissions.
**Files:** `findings.fetch.jsonl` (3 records), `followup-user-agent.jsonl` (1 re-test).

## Observed (not inferred)

| Site | Schema (`JSON-LD`) | `robots.txt` | `sitemap.xml` | `hreflang` | `meta robots` |
|---|---|---|---|---|---|
| `nyonyaneedlework.com` | 1 block — Organization, BreadcrumbList, ImageObject, ListItem, EntryPoint | **HTTP 500** | **HTTP 500** | none | `index, follow` |
| `mokkowoodstudio.com` | 3 blocks incl. **LocalBusiness**, Organization, WebSite | 200, not blocking | 200, **21 URLs** | none | absent |
| `suikoushya.com` | **0 blocks** | 200, not blocking | 200, **12 URLs** | **4 links** | `max-image-preview…` |

## What this changes — the demo subject is now chosen by evidence, not by taste

**These are three different diseases, all real:** Mokko = **strong baseline** (LocalBusiness
markup + a 21-URL sitemap), so *not* our invisibility case; Suikoushya = **multilingual but
no structured data**; the beadwork site = **valid structured data but broken crawl
guidance**. The "500" finding is the most interesting artifact of the day: it was also the
one claim I re-tested before writing — under browser UA *and* spoofed Googlebot UA,
`robots.txt` and `sitemap.xml` stay 500 while the homepage stays 200 (and the error body
size differs by UA: 188 vs 2704 bytes).

**What that finding is not, yet:** we don't know *why* (their handler or a proxy), don't
know whether engines retry or ignore a 500 robots, and assert **no** ranking impact. The
honest grade for all three sites is still empty here — this pass measured *crawl
guidance and structure*, while ABSENT/MEDIATED/THIN/OWNED need engine answers (founder
browser). The follow-up file records the UA control test so the claim in the video is
"we observed 500 on those paths, here's the control," not "their robots.txt is missing."
