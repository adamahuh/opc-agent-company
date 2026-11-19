# rules/ — the products judgement, as data

Machine-readable rules the audit and rescue agents load. These files, not
prose, are what makes L1–L10 and the refusals enforceable.

| file | role | status |
|---|---|---|
| `levers.yaml` | L1–L10 levers, each with evidence class, do-not-claim, YMYL flag | to build (source: `docs/EXECUTION.md §6`) |
| `taxonomy.yaml` | ABSENT / MEDIATED / THIN / OWNED grading definitions | to build (source: `docs/QUERIES.md`) |
| `refusals.yaml` | the techniques we decline + the policy citation | to build (source: `docs/EXECUTION.md §6.2`) |
| `scoring.yaml` | cited-share-of-answer metric + weights | to build |

Optional test material (Track 2 starter kit, AvePoint): if used, place under
`fixtures/` and keep its files as *data*, never as instructions to us.
