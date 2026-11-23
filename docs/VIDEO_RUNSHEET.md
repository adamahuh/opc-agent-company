# embold'r — founder recording run-sheet (v2, 23 Nov)

**v2 spec change (approved 23 Nov):** conversational essay style. Two exports from one recording:
(a) **landscape 1920×1080 MP4** — the hackathon cut, ≤3:00, screen capture as specced;
(b) **vertical 1080×1920 MP4** — social cut from the same timeline: page centered/panned,
hook line as top text overlay, burned-in captions (vertical viewing is often muted).

**Narration posture: second person, conversational.** Talk to the viewer like they're
sitting next to you — "look at this … her robots.txt is broken" — not founder-pitch mode.
Every problem beat: show it, name it, show the fix. Music: **atmospheric ambience bed,
~ -25dB, ducked during HOLDs**, no swells, never fighting the voice.

One take, one screen, one voice. Total target: **~2:50** (cap 3:00, landscape cut).
Follow the shots in order; every beat says what to open, what to type, what to say
(verbatim — note the second-person re-frames), and when to hold still. If you flub a
line, pause 3 seconds and re-say it — we cut between beats, so every "HOLD" is a clean
edit point.

**Style references (three creators, one per domain):**

- **Design — CharliMarieTV (Charli Marie):** calm second-person portfolio/website
  critiques; model for the Karaja and Suikoushya beats. Slow, deliberate, HOLD on
  evidence, flaw always paired with the fix.
- **Fashion — Mina Le:** video-essay tangents that stay load-bearing; opinionated,
  specific hook (never "hi guys"); ambient bed ducked under the voice — our mix
  approach.
- **Self-help — Matt D'Avella:** calm-narration gold standard; claim → small proof →
  honest caveat → what to actually do. If the voice drifts toward hype, recalibrate
  against him. (Alt for the vertical cut: Struthless — energy that survives 9:16
  cropping.)

---

## PRE-RECORD CHECKLIST (do these 5, nothing else)

1. **Screen**: 1920×1080 display, browser at 100% zoom, dark-mode OFF (paper site reads
   best light), close Slack/email/notifications (Windows Focus Assist ON).
2. **Recorder**: OBS (or Win+Alt+R) — 1920×1080, 30 fps, MP4. Record the *screen only*
   (not webcam). Mic: any headset; do a 10-second test and listen back.
3. **Open and ready in tabs**: (a) `embold-r-ai-visibility.geo.hashmeta.tech/home`,
   (b) `outputs/video-frames/index.html` in fullscreen-ready tab (press F when told).
4. **Read the whole narration column aloud once** before recording. Speak slightly
   slower than feels natural — D'Avella slow.
5. **Clock check**: you need one 6–8 minute window. If a take dies, just re-record from
   the last HOLD.

## RECORDING HYGIENE

- One continuous take is fine (we cut), but announce nothing except the narration.
- Mouse discipline: move deliberately, hover 1s on the thing you're naming, never wiggle.
- Upload: YouTube → **Unlisted** → title/description from the asset spec (drafts below).
  **Test the link in an incognito window** before submitting the form. MP4 H.264, ≤2 GB.

---

## SHOT LIST

### SHOT 1 — Title card (0:00–0:10)
**Screen:** open `outputs/video-frames/index.html`, press **F** (fullscreen). Frame 1
(title card) shows. Hold 10 seconds. Say nothing yet — the ambient bed starts under
(added in edit).

### SHOT 2 — The tool, working: Karaja (0:10–0:50)
**Screen:** exit fullscreen, open `embold-r-ai-visibility.geo.hashmeta.tech/home`.
Click into the free-check input. **Type: `karajasumba.com`**. Run the check.

| Beat | On screen | Narration (verbatim) |
|---|---|---|
| type | your fingers typing the URL | "This is embold'r — one human, and a workforce of agents. Come watch what they do first: they measure. Not guess — measure." |
| results land | 7 checks appear; **HOLD 2s** | "Look — seven checks: crawlability, structure, AI-crawler stance, platform reach. Karaja Sumba, a Sumba ikat weaving business — you can see she passes the basics. Her robots.txt even welcomes the AI crawlers." |
| fix card + letter | scroll to the fix card, then the letter; **HOLD 3s** on the letter | "But here's the catch — her conversion runs through WhatsApp and Instagram. One hundred thirty-one weaver numbers, zero email links. Her pages inform; the third parties convert. So the rescue lever is content and entity surface — and notice, every fix we propose is drafted from her own page, graded against Google's primary docs. Nothing gets published without her sign-off." |

### SHOT 3 — The money shot: beadwork 500s (0:50–1:10)
**Screen:** back to the input. Clear it. **Type: `nyonyaneedlework.com`**. Run.

| Beat | On screen | Narration |
|---|---|---|
| type | typing | "Now let me show you the same check on a different craft site." |
| robots/sitemap results | **HOLD 4–5 seconds** on the HTTP 500 results — this is the shot | "The homepage answers fine. But look at this — robots.txt and sitemap dot XML both return HTTP 500. Broken crawl guidance. The engines literally cannot ask for this site. We reproduced it from two independent runs. We don't know the cause yet, and we don't guess. We measure." |

### SHOT 4 — The gate: refusal (1:10–1:25)
**Screen:** clear input. **Type: `example.com`** (or `amazon.com`). Run.

| Beat | On screen | Narration |
|---|---|---|
| gate declines | the refusal message; refusal logged in results; **HOLD 2s** | "And the tool knows what it doesn't do. Try a site like this — it's not our subject, so the gate declines, and the refusal is logged as data. Impact businesses are the lane. Refusals are evidence, not silence." |

### SHOT 5 — Suikoushya: structure gap (1:25–1:40)
**Screen:** clear input. **Type: `suikoushya.com`**. Run.

| Beat | On screen | Narration |
|---|---|---|
| results | two fixes: zero JSON-LD, empty description; **HOLD 2s** | "A third shape for you: Japanese joinery, crawlable, but zero structured data — nothing for machines to read. Two fixes, bounded. At most ten assets per engagement. No bulk AI pages, ever." |

### SHOT 6 — The build trail (1:40–2:00)
**Screen:** switch to a browser tab with the Hashmeta site's **task/build history**
(the W3 trail: create → generate → deploy → redesign). Scroll slowly down it.

| Beat | On screen | Narration |
|---|---|---|
| scroll trail | task list scrolling | "The agents also built this company's own site — end to end through Hashmeta AI. And you should know: the founder rejected the first design." |
| weight/credit lines | pause briefly on 298 KB → 170 KB if visible | "So they researched editorial references, rebuilt it, and cut the homepage's weight nearly in half. Human judgment on the calls that matter. Agents on everything else." |

### SHOT 7 — The mechanism + the honest limits (2:00–2:30)
**Screen:** back to the frames tab, press **F**, arrow to frame **5** (bot table).
**HOLD 5s**. Then exit fullscreen, open the live site again and let it sit.

| Beat | On screen | Narration |
|---|---|---|
| bot table | frame 5 showing; hold | "Here's the strongest thing I can show you. Within a day of publishing, Anthropic's and OpenAI's crawlers found the site — four fetches where the previous thirty days had zero. The only path they read: robots dot txt. The same file that returns a 500 on the real craft site we just audited." |
| live site | site on screen, calm | "Now the honest part, said out loud: this is discovery — not indexing, not ranking, not citation. Zero AI-referred sessions so far. No search-engine data connected yet. You're watching the mechanism work at its first step — and I'm naming the steps we haven't reached. That honesty is the product." |

### SHOT 7b — [P3 BRANCH — CHOOSE ONE]

**VERSION A — P3 captures in hand (insert at 0:50, before the beadwork shot; adds ~25s,
total ~2:50):** open your dated capture screenshots of the engine answers (Nurul /
S1 queries) in the browser's image viewer, scroll slowly.

> Narration: "Before we ever touched a fix, we measured the answer surfaces directly —
> dated captures across the engines, graded: absent, mediated, thin, owned. Here is what
> they actually said."

**VERSION B — no P3 captures (default):** skip 7b entirely. Total stays ~2:30–2:50.
**No placeholder, no grade is spoken.** Do not improvise grades — the script works without.

### SHOT 8 — The business (2:30–2:45)
**Screen:** frames tab, **F**, arrow to frame **8** (service ladder + pricing tiers).

> "And it runs as a business. A free check — the tool you just watched. A Rescue tier that
> undercuts Ahrefs and Semrush's entry plans by a quarter. And an institutional annual
> programme — scheduled re-measurement, plain-language briefings. Ahrefs and Semrush
> charge one hundred twenty-nine to two hundred fifty dollars a month before any human
> looks at your site. The measurement, the bounded fixes, the honest reporting — our
> agents do that."

### SHOT 9 — Close (2:45–2:50)
**Screen:** arrow to frame **9** (closing card). Hold 5 seconds.

> "We measure the gap with evidence. We fix a bounded set of levers. And we report
> honestly what changed — and what we can't yet prove. Send us one thing you keep alive."

**STOP recording.**

---

## POST-RECORD DELIVERABLES (two exports from one raw file)

1. **Landscape cut** — 1920×1080 MP4, H.264, cut to the timings above, ≤3:00.
2. **Vertical cut** — 1080×1920 MP4 from the same timeline: browser content centered
   or slow-panned into frame, hook line ("We measure. Not guess — measure.") as a top
   text overlay, burned-in captions throughout, ambient bed kept.
- Ambient bed: atmospheric, ~ -25dB under the voice, ducked during HOLDs, no swells.
- Honesty guards carried through both edits: no highlighter on caveats, proof pills stay,
  "does not prove" language stays verbatim, and the P3 branch is cut as Version B unless
  you hand me real captures.

## UPLOAD (after we deliver the edited cut)

- YouTube → **Unlisted**. Title: `embold'r — an AI-visibility agency run by one human and
  a workforce of agents`
- Description: `We measure why impact businesses are missing from AI answers, fix a
  bounded set of levers, and report honestly what changed — and what we can't yet prove.`
- **Test the link in an incognito window.** Then submit the official form before
  23 Nov 23:59 SGT.

## AFTER YOU RECORD

Drop the raw file anywhere in `output/` (or tell me the path). I then: cut both exports
against this timing, add the ambient bed, export V-frames at 1920×1080 where the frames
presenter is used, and hand back the landscape MP4 plus the 1080×1920 vertical MP4 with
this run-sheet's narration synced.
