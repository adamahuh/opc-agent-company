# How to upgrade this skill map for the hackathon

Operating manual for `SKILL.md` across the build window (17–23 Nov), so the
doc becomes judge-proof evidence rather than a feature list.

## The four upgrades that actually move the 20%

**1. Convert every claim to an artifact.** Each row in §2 must end with a
pointer to something checkable — a file, log line, or screenshot path. A row
whose evidence is a sentence ("agent checks invoices") stays TODO. The rules
reward visible work on the platform (see CRITERIA notes in the info repo).

**2. Prove depth over breadth.** Four rows that each demonstrate scheduled
task + parallel session + real file I/O + an approval gate beats fifteen
rows that say "capability used: yes." The criterion literally contrasts
"engine of the product" with "checkbox," so it is scored against depth.

**3. Wire the handover's gates into the product itself.** The modes
(LD / Ship / Automata), no standing consent, sensitivity levels and the
`NEVER` rule that blocks even if the owner asks are not style notes for us;
they are governance features the product can expose. If we take Track 2,
SKILL.md should read as a run-time spec, not a description beside it.

**4. Eliminate non-CNFIRMED rows before submission.** Anything marked
PLATFORM-CAP / USER-INSTALL / TO-BUILD either turns into a CONFIRMED row with
an attached proof artifact by 21 Nov, or it gets cut from scope — not
caveated. Judges cannot audit a caveat inside 3 minutes; cut silently.

## Skills vs the Skills + Extensions tab — the honest limits

- **This running session cannot hot-load a new skill.** My skill list is
  fixed at session start. Installing does not add it here; only a new session
  picks it up (+ separate connector authorization if it's a connector).
- **Marketplace lookups are currently not reachable from here.** The
  extension resource API returned 401 (unauthenticated) against this
  session's identity + org. From this current sandbox I cannot even list the
  catalog, and I cannot install anything to your account.
- **What you can do in ~3 min:** open QwenWork → Skills + Extensions tab →
  search a skill → Install + enable; then for a connector hit Authorize
  separately (two live-effect steps).
- **What I'll do right after:** paste the exact skill names back here and I
  will wire each into §2 — as a row with mode gate, external side effects,
  sensitivity level, audit events, and a concrete proof artifact for the
  demo.

## Build order for this doc (6-day plan)

| Day | Action in SKILL.md | Exit gate before moving |
|---|---|---|
| 17–18 (now) | Pick the track; lock 4–6 rows (S0–S9 is a superset, not a to-do list) | Every kept row has a capability owner + artifact shape |
| 18–19 | Implement S0 + S2: classification against the taxonomy + one append-only log channel | All 28 Lumen Studio files classified, 100% logged |
| 19–20 | S3 + S4: decision table from policy + approval gate, rule id visible in log | One real ALLOW and one real HOLD_FOR_APPROVAL on screen |
| 20 | S8: run 5 scripted misbehaviours, add one our own; label every catch P/F/INC/NT | 5/5 caught + 1/1 new, with evidence, per the handover's rules |
| 21 | S5 + S9: daily briefing generated *from the log*; legibility pass | Founder reads it and can say what went wrong yesterday with zero jargon |
| 21 EOD | §2 free of TODO/PLATFORM-CAP/USER-INSTALL | The remaining rows carry the score — cutting is protecting |
| 22 | Demo rows filled + screen capture of each artifact | Every row visible; no row unverified |
