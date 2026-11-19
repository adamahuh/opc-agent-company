# Business Model & Viability

**Why:** Feasibility & Viability = **25%**, and "Could it actually run a
business?" is the question a judge asks out loud at the 11 Dec pitch.
Fill this before you build anything optional.

---

## 1. The one-person company, defined

- **The human does:** the judgment — picking the subject, deciding what is
  true about a craft or a restoration project, granting/rejecting the approval
  gate before anything goes outbound (FR4), holding the institutional
  relationship, and writing nothing under a real person's name without consent.
- **The agents do:** the volume — query runs across ten surfaces, grading
  ABSENT/MEDIATED/THIN/OWNED, drafting assets under the ≤10 ceiling
  (FR7/`rules/refusals.yaml`), publishing, re-measuring, diffing, briefing.
  Every one of those writes a `runs/` ledger line first, so the human's
  judgment has a real record behind it.
- **Headcount:** 1. This is the point. Do not let scope creep imply a team.

## 2. Customer

| Field | Answer |
|---|---|
| Field | Answer | class |
|---|---|---|
| Who **pays** | Institutions with a preservation or programme mandate: cultural councils, museums, guilds/federations, heritage & sustainability programmes, tourism bodies | **founder decision** (D6d) |
| Who **benefits** | Vanishing trades & custodians; environmental/restoration operators; community & care organisations | **founder decision** (D13) |
| Segment economics of the buyer | They already fund preservation programmes, have reporting deadlines, and buy outcome-based services; no in-house SEO/GEO capability | **inference** |
| What they pay today | A brand-facing GEO/SEO agency does this work (Hashmeta's public case studies = funded brands, APAC F500) — the trades/care segment is served by *nobody*, or by a one-off freelance consultant whose work vanishes | **inference**; quantify with 3 quotes by 21 Nov |
| Pain frequency | Continuous (queries never stop), reported quarterly against mandate | **inference** |

## 3. Offer & pricing

**Two tiers, one buyer, one sales motion (D8's dependency, resolved by the
ladder in D7). Numbers are placeholders until FR1–FR4 run and give us
measured cost (D6c): the price column below must be *chosen*, the cost column
must be *measured* — they do not come from the same place.**

| Tier | Price (target, **assumption**) | Included | Fulfilment cost | Margin rule |
|---|---|---|---|---|
| **Rescue** | S$___ flat, ≤10 assets, one trade/collection, fixed scope, ~10 working days | graded audit → assets → publish → re-check attempt + plain-language report | measured credits/engagement from `runs/` | margin = price − (credits + hours × my rate); must be >50% to be a real company (target, not fact) |
| **Annual account** | S$___ /yr | N rescues/quarter across their portfolio, scheduled re-measurement, quarterly legibility report, capacity/workshop briefings | same, ×volume | the account is what makes it a business, not a project |

Positioning constraint: cheaper than an agency retainer, priced above
freelance writing, justified because we are *auditing* not just writing —
our refusals (FR7) are the reason it costs less than a human shop and more
than a prompt.

## 4. Unit economics (the slide that wins Feasibility)

```
Revenue per customer   = $___
QwenWork credits cost  = $___   ← must be real, not hand-waved
LLM/tooling cost       = $___
Hosting/other          = $___
──────────────────────────────
Contribution margin    = $___
```

## 5. Path to first dollar

Concrete, dated, and doable by one person:

1. Build FR1+FR7 for the synthetic subject, publish, re-measure — the
   engagement exists and is repeatable (M1–M4).
2. Run 15 named institutional targets' public programmes (museum/trade-programme
   and craft-council portfolios) through the audit, uninvited, and send each
   one *their own* graded finding, free, as the door mail. 25–40 min each.
3. Offer a paid pilot against their next grant-report deadline, so the buyer's
   *own* reporting cycle, not our enthusiasm, is what signs. Budget the honest
   cycle: months, not days — say that out loud on 11 Dec, it is a feature of
   institution-selling, not a bug in the plan.

**Named target:** at least one institution we can actually name from Tier A/B
(`CANDIDATES.md`). Founder to pick; the pitch answer to "who's your first
customer?" must not be "everyone".

## 6. Moat / why this doesn't get copied in a weekend

Three things a weekend clone will not have:

1. **A refusal list backed by primary sources.** Copying a vendor playbook is
   trivial, `rules/refusals.yaml` is not, because it argues with what the market
   sells (llms.txt, chunking, bulk AI pages, schema-equals-AI-citation). That
   is what makes it safe — and sellable — to an institution.
2. **A cross-surface grading instrument + ledger.** `data/queries.yaml`, the
   four-surface engine set plus social discovery, and the dated ABSENT/MEDIATED/
   THIN/OWNED diff are the product's memory, and they can't be faked without
   actually doing the work.
3. **The un-served list itself.** Segment selection is the moat: the buyer
   (institutional mandate) and the beneficiary (vanishing trades / care orgs)
   are a relationship an agency will not build for unit economics reasons.
   Copy the tool and you still don't have the list.

## 7. What breaks first at 10x volume

Not the models, not the site. First to break:

1. **My judgment hours** — the verification/byline/consent step (FR4, §1) is a
   human bottleneck by design. At 10× we would start shipping unverified
   assets, i.e. exactly what we refuse. So the ceiling isn't technical, it's
   our quality rule; scale means raising the *price* or picking fewer, deeper
   accounts.
2. **Cross-surface manual sampling** — engines have no clean programme path
   for some surfaces, Naver's robots disallow crawlers; at 10× we'd be
   hand-running queries (the Manual Batch problem, `EXECUTION §6.3`) or
   breaking access rules.
3. **Institutional sales throughput** — one founder can hold a few
   relationships at once; annual accounts cap the customer count, not the
   automation.
That answer is what a "one-person company" is *supposed* to look like, and
says so plainly to judges.

## 8. Regulatory / trust considerations

Track 1 product, but Track 2 rigour is how it's sold. Four items, all enforced
as behaviour, not policy pages:

- **YMYL gate (D13):** care/health/legal/financial claims are never
  AI-generated; the bylined human author is mandatory or the asset doesn't ship.
- **PDPA (Singapore):** personal data in our audits (practitioner names,
  contact details) is handled minimally and not published outbound without
  consent — this is not an SEO concern until we hold data on people.
- **Attribution:** our line — observation of public information is fine;
  publishing generated copy *as* a real person is not (D9). In a hackathon
  this is the difference between a demo and a message from someone's lawyer.
- **Platform rules:** Google spam policy (scaled content abuse) and per-site
  robots.txt (Naver disallow-all) are treated as *product constraints*, so a
  customer's ranking survives the next core update. That is the trust
  proposition institutions buy.
