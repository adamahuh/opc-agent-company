# 3-Minute Demo Script

**Hard gates from the rules:** ≤ 3 minutes · shows the product **working** ·
**generated with QwenWork** · YouTube link. Late or incomplete = not judged.

**Format decision: one continuous recorded end-to-end run** (2:50), screen
capture + voiceover, no cuts that hide a failure, no live network dependency on
submission day. Reason: the Demo criterion says "show the product working", not
"be reconnectable at the moment of scoring", and the rules page gives no
evidence anyone wants a live segment. **We ask the organisers to confirm**
(question 7 in `MEMORY.md §8`) — if they want live, this script survives verbatim.

**Posture = D10 A+B.** A = audit → assets → publish → scheduled re-check, with
a visible "proof ends here" line. B = *one* retrieval-level moment only: an
engine with web access reads the page we just made and attributes it (a
different claim from "everyone now cites it", and it is what Hashmeta's own
model says an answer is built from). C is refused: no projected score.

## Timing plan (target 2:50, keep 10s buffer)

| Time | Section | What's on screen | Score it earns |
|---|---|---|---|
| 0:00–0:15 | Hook | The problem. Real numbers, no logo intro yet. | Innovation (25%) |
| 0:15–0:40 | What it is | One sentence + product name + the one-person-company framing | Demo (15%) |
| 0:40–1:50 | **The running product** | Audit → grade → **assets written in-window** → publish → scheduled check. Show the synthetic subject labelled on screen | Feasibility (25%), QwenWork use (20%) |
| 1:50–2:15 | Proof it's platform-native | QwenWork UI: Skills loaded per task, parallel sessions, real files in `runs/`, **the approval gate refusing an outbound step**, Pages publish, scheduled re-measure | QwenWork use (20%), Demo |
| 2:15–2:35 | The business | Real evidence that the problem exists (1.3% of 945,785 Philippine AI citations to Filipino operators; our own dated before-states on real trade custodians) → buyer, tiers, measured credit cost per engagement, first-dollar path. Refusal list on screen for 3 seconds | Innovation (25%), Feasibility (25%), Demo |
| 2:35–2:50 | Landing page + close | Show the Hashmeta AI site, URL on screen | Website (15%) |

## Script (say exactly this, roughly timed)

**0:00 — Hook** *(read; swap the bracket figures for our own dated measurements once P1 runs)*
> "There's a craft that has been made in Singapore for a hundred years. If you
> ask ChatGPT where to find it today, it names newspaper articles, blogs, shops
> — and the person who still makes it, nothing. Across the Philippines, only
> **1.3%** of 945,785 AI citations went to operators in that market [Hashmeta,
> cited on screen]. A human agency can't fix that one practitioner at a time,
> because the work costs more than the trade earns. **I built a one-person
> company to change that equation.**"

**0:15 — What it is**
> "This is an impact-visibility agency run by one person and a set of QwenWork
> agents. It measures how visible a business is in the places people actually
> get answers now — ChatGPT, Gemini, Perplexity, Google's AI Overviews, Bing,
> YouTube, Instagram. We call that number the *cited share of answer*. It grades
> four states: invisible; visible only through somebody else; thin; owned. Then
> it **fixes** the invisibility by building missing authoritative assets. The
> buyer is the institution with a preservation mandate; the beneficiary is
> vanishing trades, environmental-restoration operators, community organisations."
*(on-screen label: "synthetic subject, modelled on real SG custodians")*

**0:40 — The demo** — narrate over the live run.
1. show `data/queries.yaml` and name the query intent (purchase/learn/verify);
2. **P1** — run the audit task; open the returned answer text for a query and
   let the camera sit on the citation list; the subject is genuinely absent;
3. **P2** — grading appears per finding, each labelled `observed`, so the
   judge can tell what we measured from what we interpret;
4. **P3** — an asset gets authored: definitional + expert-led, one-line
   "claims and sources" panel with an evidence class per line (our handover's
   no-promotion rule made visible — a one-line sentence that no other team can
   show because it is a working contract, not a feature);
5. **P4 publish** — the approval gate fires before outbound; click release;
   QwenWork Pages URL goes live; sitemap/IndexNow attempt logged as a real
   attempt. Say: "We don't claim it ranks today. That's the honest part"  (D10-C refusal);
6. **P5** — scheduled weekly engine recheck set up. *Beat B:* then run one
   engine with web access on the published page and show it answering from that
   source — attribution, labelled as the retrieval-level result, not a global
   ranking win.

**1:50 — Platform proof** — 25 sec, four visual beats, no claims we haven't acted on
> "The audit, the writing, the publishing and the re-measuring run on
> QwenWork: Skills loaded per task, sessions in parallel, real files in the
> repo so it's auditable, the publish step is QwenWork Pages — the site you
> will see at the end was published by the platform — and the schedule is
> native, so this is a business that keeps working while I'm asleep. Owner
> approval gates the outbound step."
Show the scheduled task in the platform UI + the ledger line that proves it
ran. Not a slide of logos.

**2:15 — The business**
> "Who pays: institutions that carry a preservation or programme mandate —
> councils, museums, federations, tourism bodies. What they buy: a fixed-scope
> Rescue, ≤10 high-confidence assets per engagement, and a yearly account across
> their portfolio, timed to their reporting cycle, because grant reports are
> where visibility becomes budget. Cost to run: the credit meter on this run
> — [measured]. First dollar: send a named council the *unrequested* audit of a
> trade under its remit, let the report be the pitch."
Show the three refusals (FR7): no bulk AI pages (Google spam policy — the
sentence, with date); no publishing AI copy under a real practitioner's name
without consent; no generated health/legal claim for care queries. Close on:
"An impact buyer cannot afford to be wrong in public. Not shipping is the
part they're buying." Then `rules/refusals.yaml` for 3s.

**2:35 — Close**
> "One person, this much output — because agents do the volume, and the
> judgment is still mine. Here's the customer-facing page; it was built with
> Hashmeta AI." Show the live URL on screen + the synthetic label once more.
> "Next, I want to run this on a real trade, with the custodian's name on
> the page and their approval of every claim — which is the same discipline
> as this demo, except it's real money and real memory that survives."
Hold the page two beats. End.

## Shot list

- [ ] `data/queries.yaml` in a text overlay
- [ ] Engine answer with our subject missing, dated filename visible (P1)
- [ ] Grading table with evidence class (P2)
- [ ] Asset creation: claim table + byline/synthetic label (P3)
- [ ] Approval gate blocking, then founder releasing (FR4 — mandatory beat)
- [ ] QwenWork Pages publish + live URL in a browser (P4)
- [ ] IndexNow/recrawl attempt outcome logged (success or blocked, both OK)
- [ ] Scheduled weekly re-measure in the platform UI (D10-A beat)
- [ ] Retrieval-level: engine with web access answering from our page (D10-B)
- [ ] Diff table with the three honesty columns (P5)
- [ ] Unit-cost figure from `runs/` (Feasibility)
- [ ] Refusals list on screen for 3 seconds (Innovation)
- [ ] Hashmeta-built landing page + URL on screen (Website, 15%)
- [ ] Synthetic-subject label shown twice — never a fake customer endorsement

## Recording checklist

- [ ] Record at 1920x1080+, no personal data visible, tabs clean
- [ ] Real QwenWork session — do not fake it; judges may ask you to explain anything
- [ ] Audio dry-run, one retake max — keep it authentic
- [ ] Upload to YouTube (unlisted is fine) **before 23 Nov 23:59 SGT**
- [ ] YouTube link tested in an incognito window
- [ ] Title, one-sentence desc, full desc drafted to paste straight into the form

## Contingency

Ranked fallbacks so the script survives one broken engine or one failed
publish without the video going over 3:00:

1. **Engine unavailable/captcha** → fall back on a *dated* P1 capture
   (file-name timestamp visible, spoken as earlier capture — "recorded
   earlier today" — never implied as live; the same class rule as our contract).
2. **QwenWork Pages publish fails** → GH Pages URL + the logged reason, and
   the scheduled task as the live proof of the platform loop.
3. **Retrieval beat (D10-B) misses** → cut it and keep P4/P5. Posture A is
   enough; posture A without B never fails.
4. **Time overrun** → drop "what it is" 0:15→0:40 to a single sentence (the
   hook carries it), never shrink the audit-to-publication story.
5. **Full collapse** → recorded dry run + repo, with the demo labelled as a
   dry run. Honest over impressive, always. That rule is also how we'd answer
   a judge's worst possible question on 11 Dec.
