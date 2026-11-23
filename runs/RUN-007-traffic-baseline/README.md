# RUN-007 — Traffic-level baseline (our site) + GSC/Bing blocked-route log

**Date:** 2026-11-23 (UTC)
**Subject:** embold'r agency site — `https://embold-r-ai-visibility.geo.hashmeta.tech`
**Instrument:** Hashmeta platform visitor tracking (server-side, `get_site_traffic`)
**Status:** COMPLETED (traffic baseline). GSC/Bing: PLATFORM-BLOCKED (documented below).

## 1. Traffic baseline (real, measured)

Tracking active since 2026-11-21 07:02 UTC (site publish). All figures from the platform instrument, pulled 2026-11-23.

| Metric | Value |
|---|---|
| Views | 14 |
| Sessions | 12 |
| Unique visitors | 8 |
| Bounce rate | 91.7% |
| Pages/session | 1.2 |
| Channels | direct 12/12 (100%) |
| Devices | desktop 12 views / mobile 2 |
| Countries | SG 3 visitors (Ulu Bedok), US 4, NL 1 |
| Previous 30 days | 0 / 0 / 0 (site did not exist) |

Daily: 21 Nov — 6 views / 6 visitors; 22 Nov — 8 views / 3 visitors. Top page: `/` (14 views).

## 2. AI bot observations (reconciles RUN-006)

| Bot | Fetches | Purpose | Operator | Last seen | Path |
|---|---|---|---|---|---|
| ClaudeBot | 3 | training | Anthropic | 2026-11-21 09:40 UTC | `/robots.txt` |
| OAI-SearchBot | 1 | search | OpenAI | 2026-11-21 07:55 UTC | `/robots.txt` |

All 4 fetches on 21 Nov within ~24h of publish; previous 30 days = 0. This **reconciles RUN-006's 3+1** (the earlier site page showing "2+2" was stale). Discovery-level only: crawl ≠ indexing ≠ citation.

**aiReferrals: 0 sessions, 0%, measured** (not assumed) across the tracking window. No assistant platforms in source data yet.

## 3. GSC / Bing / GA4 — the blocked-route log

Google Search Console verification for `https://embold-r-ai-visibility.geo.hashmeta.tech` was attempted through every available method. All blocked by Hashmeta's architecture (page content is rendered inside the platform template; no `<head>` injection, no raw root files, no DNS control).

| Route | Attempt | Result |
|---|---|---|
| HTML file | Page created at exact slug `/googlee0676348de37316b.html`, served 200 directly | FAILED — response wrapped in site template (~37KB), not the bare one-line file Google requires ("verification file has the wrong content") |
| Redirect workaround | 301/308 from exact dotted path to the page | FAILED — Google does not follow redirects for file verification; also removed to serve directly |
| HTML tag (meta) | `<meta name="google-site-verification" content="O4H60uZx…">` placed on home page | FAILED — renders in body, Google requires `<head>` ("tag not in correct location") |
| Hashmeta dev task | AI task "Add GSC verification meta tag to site head" | FAILED — task log: "must be injected into the site-wide `<head>`… outside the scope of page-level block editing" (2 attempts, `---PAGE_NO_CHANGE---`) |
| Google Analytics method | GA4 property 565571463 connected in Hashmeta; gtag.js snippet injected by us into home page body | FAILED — Google: "tracking code on your site is in the wrong location… verify with the snippet placed in the `<head>` section" |
| DNS / Domain property | Not attempted | Not possible — site is a subdomain of `hashmeta.tech`; we don't control the DNS zone |
| deploy_site / retry_site_deploy | API redeploy of live site | BLOCKED (409: site already live); manual rebuild executed 2026-11-23 04:30 UTC — no `<head>` injection available |

**Bing Webmaster:** account connected, no site property (`siteUrl: null`); import-from-GSC path unavailable because GSC is unverified.

**Google Analytics 4:** property connected (embold'r, 565571463). Platform does not inject a gtag; we injected the snippet into the home page body ourselves on 2026-11-23 — data collection works from the body (verification does not), so GA4 now collects real traffic alongside the platform instrument. GA traffic totals were 0 at connect time.

**Conclusion (honest):** query-level demand-side measurement (impressions/clicks/positions, queries surfaced) is **not available** for this site on this platform. Demand-side evidence for the demo remains: RUN-006 + this run's bot observations (supply-side discovery) and the traffic baseline above. No claims beyond that.

## 4. What this run proves

- The measure→publish→re-measure loop has a **working traffic-level instrument** with a genuine before (0) and after (14 views / 8 visitors / 2 days) for our own site.
- AI crawlers read the site's `robots.txt` within 24h of publish — twice-observed, now reconciled (3+1).
- aiReferrals = 0 is a **measured** zero, not an assumption.
- GSC/Bing are platform-blocked, with the full route log above — refusals and limits held as evidence, per the house rules.
