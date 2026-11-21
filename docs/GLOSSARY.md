# Plain-English glossary (what my jargon actually means)

For a business reader. Term → what it is → why we care.

| Term | Plain meaning | Why it matters here |
|---|---|---|
| **SERP** | Search Engine Results Page — the list you see after a search | Our "before-state" evidence is literally who ranks on it |
| **Crawlability / indexing** | Whether a search engine is *allowed and able* to read a page and store it | A perfect page nobody can read scores zero. Many small sites block themselves accidentally |
| **robots.txt** | A file on every website telling bots what they may or may not read | It's a rule, not politeness: Naver's forbids all bots, so we can't automate there |
| **sitemap** | A website's table of contents for search engines | Cheap, standard check; missing one is a real finding |
| **Structured data / schema** | Hidden labelling that tells a search engine "this is a person / event / product" | Useful for Google rich results; **not** required to appear in AI answers (per Google's own docs) — that's why we grade it, not sell it |
| **IndexNow** | A "hey, new page here!" ping to Bing and partners | A *request*, not a promise. We log the attempt either way |
| **AI Overviews / answer engines** | The paragraph ChatGPT, Gemini, Perplexity, Google's AI Overviews write instead of ten blue links | "Being cited" there is the currency our product moves |
| **YMYL** | "Your Money or Your Life" — topics where wrong advice harms people (health, money, safety) | Engines demand human credentials there. We refuse to generate those claims |
| **E-E-A-T** | Google's shorthand: experience, expertise, authoritativeness, trust | Why a named real practitioner beats a faceless brand page |
| **ABSENT / MEDIATED / THIN / OWNED** | Our four grades. Invisible → visible only *through* someone else → present but not the answer → the source of the answer | The whole product is one sentence: move you from MEDIATED to OWNED |
| **Cited share of answer** | Across N questions, how often the engine credits *them* rather than somebody else | The number we can show before and after, honestly |
| **Ledger / append-only log** | A running record of every thing the agent did, that can't be quietly edited | It is what makes claims checkable — on screen and in `runs/` |
| **FR1–FR7** | Functional Requirement — "the product must do this" | Our to-do list, one number per promise |
| **LD / Ship / Automata / Borealis** | Your own contract words: plan-only / do this exact task / run the agreed sequence / temporarily reach outside the box | Nothing gets decided without you by accident |
| **Manual Batch** | A test you run yourself in your browser, with steps I write | The only honest way to capture what a chat engine says — I can't log into them |
| **TBC / proxy / observed / inferred** | To be confirmed; a stand-in measurement; something we saw; something we concluded | We label which one every statement is — your contract's no-promotion rule |
| **M1–M7 / D5–D15** | Milestone / Decision number, from our own docs | Cross-reference so nothing silently changes |
| **IndexNow** (the **key file** catch) | You tell search engines a URL is new/changed. To use it you place a small key file at your **site root** — same trick as Google's and Bing's verification files | Which is why "can the host serve arbitrary root files?" gates FR8, not just dashboards |
| **Custom connector** (Hashmeta's "keywords / commands") | A connector defined by custom endpoints, usually *asking for data* rather than publishing a site. "Under custom" ≠ "the vendor's own product surface" | Explains both the missing publish action and why keyword data could still be a genuine upgrade |
| **Keyword volume / intent** | How many searches a phrase gets, and whether the searcher wants to buy, learn, or visit | Turns "these are plausible queries" into "these are the queries people use in each language" — an evidence-class upgrade for our subject lists |
