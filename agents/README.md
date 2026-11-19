# agents/ — agent definitions, prompts, schedules

QwenWork Skills are chosen inside tasks, not here. **This folder holds our own
decisions**, and they must be short enough to explain out loud on 11 Dec
("explain any part of your submission").

| file | purpose |
|---|---|
| `audit_agent.md` | M1 — reads `data/queries.yaml`, writes `runs/`, grades per rules/taxonomy |
| `asset_agent.md` | M2 — authorship of rescue assets, ≤10 per engagement (scaled-content-abuse ceiling), every claim traces to an evidence class; byline is real person or explicitly synthetic |
| `index_agent.md` | M3 — publishes via QwenWork Pages, sitemap + IndexNow / recrawl, logs the attempt either way |
| `diff_agent.md` | M4 — re-measures, reports Visible / Inferred / Not-known-yet |
| `briefing_agent.md` | M5 — scheduled plain-language owner briefing, incl. what needs their approval |

Mode gates (LD / Ship / Automata / Borealis) follow `docs/MEMORY.md §1`.
Anything publishing outward requires **Ship**; nothing self-escalates.
