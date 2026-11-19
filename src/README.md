# src/ — audit engine implementation

| module | milestone | note |
|---|---|---|
| `serp_client.py` | M1 | Google/Bing/DDG fetch + rank parse; robots/crawler checks |
| `ai_client.py` | M1 | engine-answer ingestion; optional API mode, keys via env, not committed |
| `now.py` | M3 | IndexNow ping + recrawl requests, logged to `runs/` |
| `report.py` | M1 | grades ABSENT/MEDIATED/THIN/OWNED per `docs/QUERIES.md` |
| `diff.py` | M4 | before/after diff with the Visible / Inferred / Not-known-yet columns |

Every module writes into `runs/<run-id>/`. Secrets: environment only, never
in this folder, never in git — see the `.env` line in `.gitignore`.
