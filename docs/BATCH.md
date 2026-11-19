# Batch & Orchestration Doc

**Purpose:** how the agents run *together* — sequencing, parallelism,
hand-offs, retries, and the daily operating cadence of the one-person
company. This is where "it could actually run a business" becomes credible.

---

## 1. Operating cadence

| Cadence | Job(s) | Trigger | Output lands at |
|---|---|---|---|
| Daily 07:00 | Morning business brief | scheduled task | TODO |
| Weekly | TODO | | |
| On-demand | TODO | manual prompt | |
| Event-driven | TODO | new file / new customer | |

## 2. Batch pipeline (the money path)

```
[input] → S1 research → S2 decision → S3 produce → S4 publish → [revenue]
                    ↘ human approval gate (high-risk only) ↗
```

Describe each stage: input format, skill, output artifact, failure handling.

TODO

## 3. Parallel batch runs

Where the build uses QwenWork's parallelism:

| Batch | Items per run | Concurrency | Wall-clock | Notes |
|---|---|---|---|---|
| TODO | | | | |

Rules of thumb learned during build: TODO

## 4. Hand-off contracts

Each stage's output must be a **file**, not a chat message — otherwise
nothing can be audited or replayed.

| From → To | Artifact | Schema |
|---|---|---|
| S1 → S2 | TODO | |

## 5. Failure, retry, escalation

- Idempotency: is re-running a step safe? TODO
- Retry policy: TODO
- When does the human get paged? TODO

## 6. Cost / credits model

Track QwenWork credits consumed per batch — a real one-person company
has to know its unit economics.

| Operation | Estimated credits | Runs/day | Credits/day |
|---|---|---|---|
| TODO | | | |
