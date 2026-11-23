# D24 follow-up — visual response redesign (card model)

**Status:** LOCKED (founder-approved, 23 Nov 2026).

## Decision

The tool response (`/impact-check`, engine `nxtb2cwd` V11) is no longer a prose letter on screen. It is a **visual card report**:

1. Verdict band — state line ("N of M things machines need are working"), never a score.
2. Readiness tree enlarged (5 branches, gold/hollow leaves; "each leaf is something a machine can cite").
3. Gap finding cards — plain-world titles, one-sentence why, fix box with effort pill, copy chip (exact snippet), platform Where, graded-against source. Passes collapse to one quiet line.
4. Letter demoted to a ~100-word takeaway footer (copy button) — the document the practitioner keeps or hands to their site builder.
5. Refusal card gets the same treatment.

## Rationale

- D7's spirit is "no fake precision numbers" — not "no visuals". Visualizing *state* honours the lock; a 0–100 score would break it.
- Research baseline (PageSpeed/Lighthouse, Sitebulb, SEOptimer, SSL Labs, WebPageTest): verdict first, grouped findings, fix inside the finding, failing loud / passing quiet.
- The practitioner couldn't read the old letter; the letter remains the takeaway, not the screen.

## Honest mechanics (the basis of every claim)

3–4 polite fetches (home/robots/sitemap, once each), regex measurement, one `check_log` row. No ranking/indexing/citation data; one page deep; point-in-time. Nothing is written to the subject's site, ever.

## Implementation (23 Nov, live, vision-verified)

- Engine V11: `/api/check` returns structured `findings[]` (key/title/plain/status/detail/fix{label,snippet,where,effort,source}) + `verdict` + ~100-word `text`.
- Tool page: verdict band, enlarged tree, gap cards, collapsed passes, letter footer, refusal card; old mono checks table and separate fixes card removed.
- All prior locks unchanged: no-score, gate = registry (heritage + environment), refusals-as-data, pricing on request, ≤10 assets, sign-off.

Related: `docs/WEBSITE_COPY.md` §5 is the authoritative response contract; `runs/RUN-007-traffic-baseline/README.md` records the GSC/Bing platform-blocked route log.
