# QwenWork Skill & Agent Map

**Why this doc exists:** "Use of QwenWork Platform" is **20% of the score**
and the rules say it must be "the engine of the product, not a checkbox."
This is the doc that proves it. Every capability claim in the PRD maps to a
Skill/agent defined here.

---

## How to read this

| Column | Meaning |
|---|---|
| Capability | The job the product must do |
| Skill / agent | The QwenWork Skill or sub-agent that performs it |
| Trigger | Manual, scheduled, chained, or event-driven |
| Human gate | Whether it needs approval before acting |
| Evidence for demo | Where this is *visible* in the 3-min video |

## Skill inventory

| # | Capability | Skill / agent | Trigger | Human gate | Evidence in demo |
|---|---|---|---|---|---|
| S1 | TODO | TODO | scheduled | | |
| S2 | TODO | TODO | chained from S1 | | |
| S3 | TODO | TODO | manual | | |

## Skill usage notes

### Skill: TODO
- **Inputs:** TODO
- **Outputs (real files, not chat text):** TODO
- **Why the platform specifically (vs. an API call in a script):** TODO
- **Failure modes observed during build:** TODO

## Where the platform does the heavy lifting

<!-- List the concrete platform features you lean on. Judges look for this. -->
- [ ] Parallel tasks (multiple sub-agents working at once)
- [ ] Scheduled / recurring tasks (daily brief, automated ops)
- [ ] Skills for specialized jobs, auto-loaded per task
- [ ] Working directly with the user's local files
- [ ] Publishing live pages
- [ ] Video / image / voice generation for marketing
- [ ] Approval gates on sensitive actions (Track 2: this is your product)

## Track 2 addendum — governance layer

If we pick Track 2, define here:
- Permission model per agent (what each Skill may touch)
- Audit trail format (who/what/when, append-only)
- Approval-gate policy (which actions block on a human)
- Rollback / revocation behavior

TODO
