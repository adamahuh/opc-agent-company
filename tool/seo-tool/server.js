// embold'r — "impact check" SEO tool (Option A internal instrument + Option B gated public)
// Gated: only sites in the websites registry (operator-approved allowlist) can be checked.
// No scores, no dashboards: one output — a plain-language letter to the practitioner.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8081;
const SUPA = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_ANON_KEY;
const UA = 'opc-audit/0.2 (+impact-visibility-check)';
const AI_CRAWLERS = ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'CCBot', 'Google-Extended', 'PerplexityBot'];

function supa(method, table, query) {
  const url = `${SUPA}/rest/v1/${table}${query || ''}`;
  return fetch(url, { method, headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=representation' } })
    .then(r => r.json().then(j => ({ ok: r.ok, j })));
}

function send(res, code, body, type) {
  res.writeHead(code, {
    'Content-Type': type || 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(body);
}

const j = o => JSON.stringify(o);

async function fetchDoc(url, timeoutMs = 12000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html,application/xml,text/plain,*/*' }, redirect: 'follow', signal: ac.signal });
    const text = await r.text();
    return { status: r.status, finalUrl: r.url, text: text.slice(0, 400000), bytes: text.length };
  } catch (e) {
    return { status: 0, finalUrl: url, text: '', bytes: 0, error: String(e && e.name || e) };
  } finally { clearTimeout(t); }
}

function titleOf(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].replace(/\s+/g, ' ').trim() : null;
}
function metaDesc(html) {
  const m = html.match(/<meta[^>]+name=["']description["'][^>]*>/i) || html.match(/<meta[^>]+property=["']og:description["'][^>]*>/i);
  if (!m) return null;
  const c = m[0].match(/content=["']([\s\S]*?)["']/i);
  return c ? c[1].replace(/\s+/g, ' ').trim() : null;
}
function firstPara(html) {
  const body = (html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ').replace(/<svg[\s\S]*?<\/svg>/gi, ' ').replace(/<!--[\s\S]*?-->/g, ' ').match(/<body[\s\S]*<\/body>/i) || [html])[0];
  const text = body.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = text.match(/[A-Z][^.!?\n]{30,220}[.!?]/g) || [];
  const NAV = /login|account|english|menu|cart|checkout|sign in|sign up|subscribe|newsletter|jump to|skip to/i;
  const good = sentences.find(s => /^[A-Z][A-Za-z0-9 ,''’—&-]+[.!?]$/.test(s) && /[a-z]{3,}\s[a-z]{3,}/.test(s) && !NAV.test(s) && s.split(/\s+/).length >= 6);
  return good || null;
}

async function runAudit(site) {
  const a_homeIsPlainHtml = html => !/drupal|joomla|squarespace|webflow|framer/i.test(html); // heuristic: no known-builder markers
  const base = site.url.replace(/\/$/, '');
  const [home, robots] = await Promise.all([fetchDoc(base + '/'), fetchDoc(base + '/robots.txt')]);
  let sitemapUrl = base + '/sitemap.xml';
  if (robots.status === 200) {
    const m = robots.text.match(/^sitemap:\s*(\S+)/im);
    if (m) sitemapUrl = m[1];
  }
  const sitemap = robots.status === 200 ? await fetchDoc(sitemapUrl) : { status: null, skipped: true };
  // llms.txt — AI-answer guidance file (draft standard, llmstxt.org); fetched once, only when robots answers
  const llmsTxt = await fetchDoc(base + '/llms.txt');
  // AI-crawler stance: parse allow/disallow per bot from robots.txt sections
  const robotStance = {};
  if (robots.status === 200) {
    const lines = robots.text.split(/\r?\n/).map(l => l.replace(/#.*$/, '').trim()).filter(Boolean);
    let section = [];
    const applySection = bots => { const dis = section.some(l => /^disallow:\s*\/\s*$/i.test(l)); const hasRules = section.some(l => /^(allow|disallow):/i.test(l)); bots.forEach(b => { robotStance[b] = dis ? 'disallowed' : (hasRules ? 'explicit-allow' : 'named'); }); };
    let current = [];
    for (const l of lines) {
      const ua = l.match(/^user-agent:\s*(.+)$/i);
      if (ua) { if (current.length) applySection(current); section = []; current = []; current.push(ua[1].trim().toLowerCase()); continue; }
      if (current.length) { if (/^(allow|disallow):/i.test(l)) { section.push(l); } else if (!/^crawl-delay|^sitemap/i.test(l)) { applySection(current); current = []; section = []; } }
    }
    if (current.length) applySection(current);
  }
  const html = home.status === 200 ? home.text : '';
  const visibleText = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').toLowerCase();
  // Parse sitemap entries (bounded: cap at 500 URLs)
  const sitemapUrls = sitemap.status === 200
    ? (sitemap.text.match(/<loc>[^<]+<\/loc>/gi) || []).slice(0, 500).map(m => m.replace(/<\/?loc>/g, '').trim())
    : [];
  // Content quotability: answer-shaped text LLMs actually quote (from the homepage text we already have)
  const quotableSentence = (() => {
    const sents = visibleText.match(/[^.!?]{40,300}[.!?]/g) || [];
    const def = sents.find(s => /\b(is|are)\s+(a|an|the)\b/i.test(s) && s.split(/\s+/).length >= 10);
    return def ? def.trim() : null;
  })();
  const hasFaq = /faq|frequently asked|<summary|question/i.test(html) && (visibleText.match(/\?/g) || []).length >= 2;
  const jsonLdBlocks = (html.match(/<script[^>]+application\/ld\+json[^>]*>[\s\S]*?<\/script>/gi) || []);
  const h1s = (html.match(/<h1[^>]*>/gi) || []).length;
  const imgs = (html.match(/<img[^>]*>/gi) || []);
  const imgsNoAlt = imgs.filter(t => !/\salt\s*=/i.test(t)).length;
  const ogT = /property=["']og:title["']/i.test(html);
  const ogI = /property=["']og:image["']/i.test(html);
  const schemaTypes = [];
  for (const b of jsonLdBlocks) {
    try {
      const o = JSON.parse(b.replace(/^<script[^>]*>/i, '').replace(/<\/script>\s*$/i, ''));
      const walk = x => { if (Array.isArray(x)) { x.forEach(walk); } else if (x && typeof x === 'object') { if (x['@type']) schemaTypes.push(String(x['@type'])); if (x['@graph']) x['@graph'].forEach(walk); } };
      walk(o);
    } catch (e) { schemaTypes.push('(unparsable)'); }
  }
  let entity = null;
  for (const b of jsonLdBlocks) {
    try {
      const o = JSON.parse(b.replace(/^<script[^>]*>/i, '').replace(/<\/script>\s*$/i, ''));
      const ents = [];
      const walk = x => { if (Array.isArray(x)) { x.forEach(walk); } else if (x && typeof x === 'object') { if (/organization|localbusiness|store/i.test(String(x['@type'] || ''))) ents.push(x); if (x['@graph']) x['@graph'].forEach(walk); } };
      walk(o);
      if (ents[0]) {
        entity = {
          type: ents[0]['@type'],
          hasName: !!ents[0].name,
          hasDescription: !!ents[0].description,
          hasKnowsAbout: !!(ents[0].knowsAbout && ents[0].knowsAbout.length),
          hasSameAs: !!(ents[0].sameAs && ents[0].sameAs.length),
          // schema property validation (Google rich-results required/recommended props)
          hasUrl: !!ents[0].url,
          hasAddress: !!(ents[0].address && (typeof ents[0].address === 'string' || ents[0].address['@type'] || ents[0].address.streetAddress)),
          hasTelephone: !!ents[0].telephone,
          hasImage: !!(ents[0].image && (Array.isArray(ents[0].image) ? ents[0].image.length : true)),
        };
        break;
      }
    } catch (e) { }
  }
  // Impact descriptors extracted from the subject's OWN page text (never invented)
  const IMPACT_TERMS = {
    craft: ['ikat', 'weaving', 'weaver', 'woven', 'handwoven', 'handloom', 'textile', 'batik', 'natural dye', 'dyeing', 'rattan', 'bamboo craft', 'woodcarving', 'pottery', 'ceramics', 'silversmith', 'embroidery', 'loom', 'handwoven cloth'],
    heritage: ['heritage', 'traditional', 'cultural', 'ancestral', 'generations', 'customary', 'indigenous', 'folk', 'artisan'],
    environment: ['environmental', 'restoration', 'conservation', 'reforestation', 'mangrove', 'watershed', 'river', 'forest', 'biodiversity', 'sustainable', 'ecosystem', 'coral', 'reef', 'native species'],
    community: ['community', 'cooperative', 'village', 'women weavers', 'local artisans', 'livelihoods'],
  };
  const impactTerms = [];
  for (const [cat, terms] of Object.entries(IMPACT_TERMS)) {
    for (const t of terms) {
      if (visibleText.includes(t) && !impactTerms.includes(t)) impactTerms.push(t);
      if (impactTerms.length >= 6) break;
    }
  }
  // Platform detection: builder / AI-builder / static-generator tiers
  const gen = (html.match(/<meta[^>]+name=["']generator["'][^>]*>/i) || [''])[0].match(/content=["']([^"']+)["']/i);
  const generator = gen ? gen[1].toLowerCase() : '';
  let platform = null, platformTier = null;
  if (/squarespace/i.test(html)) { platform = 'Squarespace'; platformTier = 'builder'; }
  else if (/\bwp-content\b|\bwp-json\b/i.test(html)) { platform = 'WordPress'; platformTier = 'builder'; }
  else if (/wix\.com|wixstatic/i.test(html)) { platform = 'Wix'; platformTier = 'builder'; }
  else if (/cdn\.shopify|shopify\.theme/i.test(html)) { platform = 'Shopify'; platformTier = 'builder'; }
  else if (/webflow|website-files\.com/i.test(html)) { platform = 'Webflow'; platformTier = 'builder'; }
  else if (/godaddysites|godaddy/i.test(html)) { platform = 'GoDaddy'; platformTier = 'builder'; }
  else if (/carrd\.co/i.test(html)) { platform = 'Carrd'; platformTier = 'builder'; }
  else if (/ghost\.org|\.ghost\.net|ghost-sdk/i.test(html) || /ghost/.test(generator)) { platform = 'Ghost'; platformTier = 'builder'; }
  else if (/framer\.com|framerusercontent/i.test(html)) { platform = 'Framer'; platformTier = 'ai-builder'; }
  else if (/durable\.co/i.test(html)) { platform = 'Durable'; platformTier = 'ai-builder'; }
  else if (/hostinger/i.test(html)) { platform = 'Hostinger AI'; platformTier = 'ai-builder'; }
  else if (/10web/i.test(html)) { platform = '10Web'; platformTier = 'ai-builder'; }
  else if (/_next\/static/i.test(html)) { platform = 'Next.js'; platformTier = 'static'; }
  else if (/_astro\//i.test(html)) { platform = 'Astro'; platformTier = 'static'; }
  else if (/jekyll/.test(generator)) { platform = 'Jekyll'; platformTier = 'static'; }
  else if (/hugo/.test(generator)) { platform = 'Hugo'; platformTier = 'static'; }
  else if (!platformTier && a_homeIsPlainHtml(html)) { platformTier = 'static'; }
  const st = { title: titleOf(html), h1s, imgs: imgs.length, imgsNoAlt, og: { title: ogT, image: ogI }, schemaTypes, entity, platform, platformTier };
  const robotLines = {};
  for (const b of AI_CRAWLERS) robotLines[b] = robots.status === 200 ? (robotStance[b] || (robots.text.match(new RegExp('^(?:User-agent:\\s*)?' + b + '\\b', 'im')) ? 'named' : 'default-allow')) : 'unreadable';
  return {
    site, home: { status: home.status, title: titleOf(html), bytes: home.bytes },
    robots: { status: robots.status, robotLines },
    sitemap: { status: sitemap.status, url: sitemapUrl, entries: sitemapUrls.length, listsHome: sitemapUrls.some(u => u.replace(/\/$/, '') === base) },
    llmsTxt: { status: llmsTxt.status, length: llmsTxt.status === 200 ? llmsTxt.bytes : 0 },
    quotability: { sentence: quotableSentence, hasFaq },
    jsonLd: { count: jsonLdBlocks.length },
    meta: { description: metaDesc(html) },
    firstPara: firstPara(html),
    impactTerms,
    structure: st,
  };
}

const WHERE = {
  Squarespace: {
    title: 'Where: Squarespace — Pages → hover the homepage → \u22ef (page settings) → SEO → Page title.',
    meta: 'Where: Squarespace — same panel: Pages → \u22ef → SEO → SEO description.',
    head: 'Where: Squarespace — Home menu → Settings → Advanced → Code Injection → HEADER (paste, Save).',
    alt: 'Where: Squarespace — edit the image block → Design tab → the alt text field.',
    h1: 'Where: Squarespace — edit the page; the first Title block is the main heading — keep exactly one at the top.',
    robots: 'Where: Squarespace generates robots.txt automatically — a 500 is a platform fault, not yours; report it to Squarespace support with the timestamp.'
  },
  WordPress: {
    title: 'Where: WordPress — edit the page → the Yoast/RankMath SEO box → SEO title.',
    meta: 'Where: WordPress — the same SEO box → meta description.',
    head: 'Where: WordPress — a plugin like "Insert Headers and Footers" (Settings → Insert Headers), or Appearance → Theme File Editor → header.php before </head>.',
    alt: 'Where: WordPress — edit the page → click the image → the alt text field in the block.',
    h1: 'Where: WordPress — the page title is normally the H1; avoid extra H1s in the body.',
    robots: 'Where: robots.txt is generated by WordPress or your host — a 500 is a server fault; ask your host.'
  },
  Wix: {
    title: 'Where: Wix — Editor → click the page menu → Page SEO settings → Page title.',
    meta: 'Where: Wix — the same Page SEO panel → SEO description.',
    head: 'Where: Wix — Settings → Custom Code → Add code → place in "Head", all pages.',
    alt: 'Where: Wix — click the image in the Editor → the gear → Alt text.',
    h1: 'Where: Wix — the main heading element on the page; keep one at the top.',
    robots: 'Where: Wix generates robots.txt — a 500 is a platform fault; contact Wix support.'
  },
  Shopify: {
    title: 'Where: Shopify — admin \u2192 Online Store \u2192 Preferences \u2192 Homepage title.',
    meta: 'Where: Shopify — the same Preferences page \u2192 meta description.',
    head: 'Where: Shopify — Online Store \u2192 Themes \u2192 \u22ef \u2192 Edit code \u2192 theme.liquid, before </head>.',
    alt: 'Where: Shopify — Products \u2192 the image \u2192 the Alt text field.',
    h1: 'Where: Shopify — the theme section heading on the homepage.',
    robots: 'Where: Shopify generates robots.txt — a 500 is a platform fault; contact Shopify support.'
  },
  Webflow: {
    title: 'Where: Webflow — open the page \u2192 Page settings (gear) \u2192 SEO \u2192 Title.',
    meta: 'Where: Webflow — the same Page settings \u2192 SEO \u2192 Description.',
    head: 'Where: Webflow — Site settings \u2192 Custom Code \u2192 Inside <head> tag (all pages), or per-page in Page settings \u2192 Custom Code.',
    alt: 'Where: Webflow — select the image \u2192 the settings (D) panel \u2192 Alt text.',
    h1: 'Where: Webflow — the heading element at the top; set its tag to H1.',
    robots: 'Where: Webflow generates robots.txt — a 500 is a platform fault; contact Webflow support.'
  },
  GoDaddy: {
    title: 'Where: GoDaddy — edit the site \u2192 SEO \u2192 Page title (per section/page).',
    meta: 'Where: GoDaddy — the same SEO panel \u2192 Meta description.',
    head: 'Where: GoDaddy — Website Builder has no code injection; add the snippet via the SEO panel, or move the site to a builder with head access.',
    alt: 'Where: GoDaddy — click the image \u2192 settings \u2192 Alt text.',
    h1: 'Where: GoDaddy — the first heading section on the page.',
    robots: 'Where: GoDaddy generates robots.txt — a 500 is a platform fault; contact GoDaddy support.'
  },
  Carrd: {
    title: 'Where: Carrd — page settings (gear) \u2192 SEO \u2192 Title.',
    meta: 'Where: Carrd — the same SEO panel \u2192 Description.',
    head: 'Where: Carrd — Settings \u2192 Custom code \u2192 head (site-wide) or section embed.',
    alt: 'Where: Carrd — click the image \u2192 the gear \u2192 Alt text.',
    h1: 'Where: Carrd — the heading element; style it as the main heading.',
    robots: 'Where: Carrd generates robots.txt — a 500 is a platform fault; contact Carrd support.'
  },
  Ghost: {
    title: 'Where: Ghost — Settings \u2192 per-post settings \u2192 Meta title.',
    meta: 'Where: Ghost — the same panel \u2192 Meta description.',
    head: 'Where: Ghost — Settings \u2192 Code injection \u2192 Site header.',
    alt: 'Where: Ghost — the image in the editor \u2192 alt text field.',
    h1: 'Where: Ghost — the post title is the H1; avoid extra H1s in the body.',
    robots: 'Where: Ghost generates robots.txt — a 500 is a platform fault; contact Ghost support.'
  },
  Framer: {
    title: 'Where: Framer — open the page \u2192 Page settings \u2192 SEO \u2192 Title.',
    meta: 'Where: Framer — the same Page settings \u2192 SEO \u2192 Description.',
    head: 'Where: Framer — Page settings \u2192 Custom Code \u2192 Head. If your site came out of an AI builder, correct the generated values rather than re-generating.',
    alt: 'Where: Framer — select the image \u2192 the properties panel \u2192 Alt.',
    h1: 'Where: Framer — the heading layer; set its tag to H1.',
    robots: 'Where: Framer generates robots.txt — a 500 is a platform fault; contact Framer support.'
  }
};

function buildFixes(a) {
  const s = a.site;
  const W = WHERE[(a.structure && a.structure.platform)] || {};
  const tier = (a.structure && a.structure.platformTier) || null;
  const FALLBACK = tier === 'static'
    ? { title: 'Where: open your HTML file (or layout template) \u2014 find <title> in <head>, edit, redeploy. If your site came out of an AI chat (ChatGPT, Claude, Gemini, Qwen): paste this fix back into the chat and ask it to place it.', meta: 'Where: your HTML file \u2014 add the meta tag inside <head>, redeploy \u2014 or paste the fix into the chat that built your site and ask it to place it.', head: 'Where: your HTML file \u2014 paste inside <head>, then re-upload/re-deploy. Or paste the snippet into the AI chat that built your site (ChatGPT, Claude, Gemini, Qwen) and ask it to apply it.', alt: 'Where: your HTML file \u2014 add alt="..." inside the <img> tag; or ask the AI chat that built the site to add descriptions.', wH1: 'Where: your HTML file \u2014 keep exactly one <h1> at the top of the page; or ask the AI chat that built the site.' }
    : tier === 'ai-builder'
      ? { title: 'Where: your AI builder\u2019s SEO settings \u2014 correct the value it generated (check it, don\u2019t re-generate).', meta: 'Where: your AI builder\u2019s SEO settings \u2014 correct the generated description.', head: 'Where: your AI builder\u2019s custom-code / header field if it has one; otherwise its SEO settings. Correct the generated values rather than re-generating.', alt: 'Where: your AI builder\u2019s image settings \u2014 the alt text field.', wH1: 'Where: your page editor \u2014 the main heading element.' }
      : { title: 'Where: your site builder\u2019s page SEO settings \u2014 look for \u201ctitle\u201d.', meta: 'Where: your site builder\u2019s page SEO settings \u2014 look for \u201cdescription\u201d.', head: 'Where: your site builder\u2019s custom-code / header field, before </head>.', alt: 'Where: your site builder\u2019s image settings \u2014 the alt text field.', wH1: 'Where: your page editor \u2014 the main heading element.' };
  const wTitle = W.title || FALLBACK.title;
  const wMeta = W.meta || FALLBACK.meta;
  const wHead = W.head || FALLBACK.head;
  const wAlt = W.alt || FALLBACK.alt;
  const wH1 = W.h1 || FALLBACK.wH1;
  const fixes = [];
  if (!a.meta.description && a.firstPara) fixes.push({ label: 'Page description (meta)', text: `Add a one-line description to your pages. Draft, from your own text: "${a.firstPara}" ${wMeta} (source: Google Search Central, "Control your snippets").`, snippet: `<meta name="description" content="${a.firstPara.replace(/"/g, '&quot;')}">` });
  if (a.jsonLd.count === 0) fixes.push({ label: 'Structured data — what you are', text: `Add one structured-data block so AI answers can cite what you are \u2014 paste: <script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","url":"${s.url}"}</script> ${wHead} (source: Google structured data docs).`, snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","url":"${s.url}"}</script>` });
  if (a.robots.status === 500 || a.sitemap.status === 500) fixes.push({ label: 'Crawl guidance (robots / sitemap)', text: `Repair robots.txt and the sitemap so engines can ask for your rules. ${W.robots || 'robots.txt is generated by your platform \u2014 a 500 here is a platform fault, not yours; report it to your builder\u2019s support with the timestamp. We do not guess causes.'} (source: Google\u2019s robots.txt reference \u2014 a robots.txt file must be reachable).` });
  if (a.structure) {
    if (!a.structure.title) fixes.push({ label: 'Page title', text: `Add a page title: <title>${s.name} \u2014 your craft, your place</title> ${wTitle} (source: Google Search Central, title links docs).`, snippet: `<title>${s.name} \u2014 your craft, your place</title>` });
    if (a.structure.entity && !a.structure.entity.hasKnowsAbout && !a.structure.entity.hasDescription) fixes.push({ label: 'Impact schema — what you keep alive', text: `Extend what machines can cite about your work \u2014 paste: <script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","knowsAbout":["your craft, in your own words","materials or methods, in your own words"]}</script> \u2014 replace the two quoted phrases with your own words. Two JSON-LD blocks on one page are fine; machines merge them. ${wHead} (source: schema.org LocalBusiness + knowsAbout).`, snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","knowsAbout":["your craft, in your own words","materials or methods, in your own words"]}</script>` });
    if (a.jsonLd.count > 0 && !a.structure.schemaTypes.some(t => /organization|localbusiness/i.test(t))) fixes.push({ label: 'Entity block — what you are', text: `Paste this so machines know what you are: <script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","url":"${s.url}"}</script> ${wHead} (source: Google structured data docs).`, snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","url":"${s.url}"}</script>` });
    if (!a.structure.og.title || !a.structure.og.image) fixes.push({ label: 'Share card (Open Graph)', text: `Paste these so shared links show a card: <meta property="og:title" content="${s.name}"> <meta property="og:description" content="One line on your work, in your words"> <meta property="og:image" content="Link to one good photo of your work"> ${wHead} (source: Open Graph standard).`, snippet: `<meta property="og:title" content="${s.name}">\n<meta property="og:description" content="One line on your work, in your words">\n<meta property="og:image" content="Link to one good photo of your work">` });
    if (a.structure.imgsNoAlt > 0) fixes.push({ label: `Image descriptions (alt) \u00d7${a.structure.imgsNoAlt}`, text: `Add a short description to every image, in your own words: <img src="cloth.jpg" alt="Handwoven ikat cloth, natural dye"> ${wAlt} (source: Google image SEO docs).`, snippet: `alt="Handwoven ikat cloth, natural dye"` });
    if (a.structure.h1s !== 1) fixes.push({ label: 'Main heading (H1)', text: `Give the homepage exactly one main heading that states what you do. ${wH1} (source: Google heading-order guidance).` });
  }
  if (fixes.length === 0) fixes.push({ label: 'Nothing bounded to propose', text: 'Nothing bounded to propose from this run \u2014 your site passes the basics. The lever we would work next is content and entity surface, not crawl repair.' });
  return fixes;
}

// ---- Visual findings (card model) ----
// Each finding: { key, title, plain, status: 'pass'|'gap', detail, fix: {label, snippet, where, effort, source} | null }
function buildFindings(a) {
  const s = a.site;
  const W = WHERE[(a.structure && a.structure.platform)] || {};
  const tier = (a.structure && a.structure.platformTier) || null;
  const FALLBACK = tier === 'static'
    ? { title: 'your HTML file (or layout template) \u2014 find <title> in <head>, edit, redeploy. If your site came out of an AI chat (ChatGPT, Claude, Gemini, Qwen), paste this fix back into the chat and ask it to place it.', meta: 'your HTML file \u2014 add the meta tag inside <head>, redeploy \u2014 or paste the fix into the chat that built your site.', head: 'your HTML file \u2014 paste inside <head>, then re-upload/re-deploy. Or paste the snippet into the AI chat that built your site and ask it to apply it.', alt: 'your HTML file \u2014 add alt="..." inside the <img> tag; or ask the AI chat that built the site.', wH1: 'your HTML file \u2014 keep exactly one <h1> at the top; or ask the AI chat that built the site.' }
    : tier === 'ai-builder'
      ? { title: 'your AI builder\u2019s SEO settings \u2014 correct the value it generated (check it, don\u2019t re-generate).', meta: 'your AI builder\u2019s SEO settings \u2014 correct the generated description.', head: 'your AI builder\u2019s custom-code / header field if it has one; otherwise its SEO settings. Correct the generated values rather than re-generating.', alt: 'your AI builder\u2019s image settings \u2014 the alt text field.', wH1: 'your page editor \u2014 the main heading element.' }
      : { title: 'your site builder\u2019s page SEO settings \u2014 look for \u201ctitle\u201d.', meta: 'your site builder\u2019s page SEO settings \u2014 look for \u201cdescription\u201d.', head: 'your site builder\u2019s custom-code / header field, before </head>.', alt: 'your site builder\u2019s image settings \u2014 the alt text field.', wH1: 'your page editor \u2014 the main heading element.' };
  const wTitle = W.title || FALLBACK.title;
  const wMeta = W.meta || FALLBACK.meta;
  const wHead = W.head || FALLBACK.head;
  const wAlt = W.alt || FALLBACK.alt;
  const wH1 = W.h1 || FALLBACK.wH1;
  const st = a.structure || {};
  const F = [];

  // 1. Homepage reachable
  F.push(a.home.status === 200
    ? { key: 'home', title: 'Your site opens', plain: 'Machines that visit your homepage get a proper answer.', status: 'pass', detail: `HTTP 200${a.home.bytes ? `, ~${Math.round(a.home.bytes / 1024)} KB` : ''}.`, fix: null }
    : { key: 'home', title: 'Your site did not answer', plain: 'When a machine knocked, nobody answered \u2014 engines can\u2019t read a page that won\u2019t open.', status: 'gap', detail: `HTTP ${a.home.status || 'no response'} on this run.`, fix: { label: 'Check with whoever hosts your site', where: 'Send them this finding with the timestamp.', effort: 'ask', source: 'measured this run' } });

  // 2. Crawl guidance (robots + sitemap)
  const robots500 = a.robots.status === 500 || a.sitemap.status === 500;
  if (a.robots.status === 200 && a.sitemap.status === 200) {
    F.push({ key: 'crawl', title: 'Engines can ask for your rules', plain: 'Your robots.txt and sitemap both answer \u2014 machines can find every page you list.', status: 'pass', detail: `robots.txt 200 · sitemap 200${a.sitemap.entries ? `, ${a.sitemap.entries} page${a.sitemap.entries > 1 ? 's' : ''} listed` : ''}${a.sitemap.entries && !a.sitemap.listsHome ? ' \u00b7 homepage not listed' : ''}.`, fix: null });
  } else if (robots500) {
    F.push({ key: 'crawl', title: 'Your signposts are broken', plain: 'The file that tells engines which pages exist is failing \u2014 this is your site builder\u2019s fault, not yours.', status: 'gap', detail: `robots.txt HTTP ${a.robots.status}, sitemap HTTP ${a.sitemap.status}. Reproduced across two runs; cause unknown \u2014 we do not guess.`, fix: { label: 'Report it to your platform', where: W.robots || 'Your platform generates these files \u2014 a 500 is a platform fault. Report it to their support with the timestamp.', effort: 'ask', source: 'Google\u2019s robots.txt reference \u2014 the file must be reachable' } });
  } else {
    F.push({ key: 'crawl', title: 'Engines can\u2019t read your rules', plain: 'Without a working robots.txt, engines cannot ask which pages they may read.', status: 'gap', detail: `robots.txt HTTP ${a.robots.status || 'no response'}${a.sitemap.status !== 200 ? ` · sitemap HTTP ${a.sitemap.status || 'not requested'}` : ''}.`, fix: { label: 'Report it to your platform', where: W.robots || 'Your platform generates these files \u2014 report a failure to their support with the timestamp.', effort: 'ask', source: 'Google\u2019s robots.txt reference' } });
  }

  // 3. What you are (entity) \u2014 schema property validation on required/recommended props
  const ka = (a.impactTerms && a.impactTerms.length) ? a.impactTerms.map(t => t.replace(/\b\w/g, c => c.toUpperCase())) : null;
  const entityish = (st.schemaTypes || []).some(t => /organization|localbusiness|store/i.test(t));
  const missingProps = st.entity ? ['name', 'url', 'address', 'description'].filter(p => !st.entity['has' + p[0].toUpperCase() + p.slice(1)]) : [];
  if (entityish) {
    F.push({ key: 'entity', title: 'Machines know what you are', plain: `Your pages say it in machine-readable form: ${(st.schemaTypes || []).join(', ')}. This is what AI answers cite.`, status: missingProps.length ? 'gap' : 'pass', detail: `${a.jsonLd.count} structured-data block${a.jsonLd.count > 1 ? 's' : ''}.` + (missingProps.length ? ` Missing recommended properties: ${missingProps.join(', ')}.` : ' Name, url, address, description all present.'), fix: missingProps.length ? { label: 'Complete what you are', snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","url":"${s.url}","address":{"@type":"PostalAddress","addressLocality":"Your town","addressCountry":"Your country"},${ka ? `"knowsAbout":${JSON.stringify(ka)}` : '"description":"One line on your work, in your own words"'}}</script>`, where: wHead, effort: '5-minute fix', source: 'Google LocalBusiness rich-result required properties' } : null });
  } else if (a.jsonLd.count > 0) {
    F.push({ key: 'entity', title: 'Machines can\u2019t tell what you are', plain: 'Your pages have some structured data, but nothing says \u201cthis is a business, this is its name\u201d \u2014 so AI answers can\u2019t cite you as the source.', status: 'gap', detail: `Blocks present: ${(st.schemaTypes || []).join(', ') || 'unparsable'} \u2014 no LocalBusiness/Organization.`, fix: { label: 'Paste this so machines know what you are', snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","url":"${s.url}"}</script>`, where: wHead, effort: '2-minute fix', source: 'Google structured data docs' } });
  } else {
    F.push({ key: 'entity', title: 'Machines can\u2019t tell what you are', plain: 'Your pages carry no structured data at all \u2014 machines read your words but nothing tells them what your business *is*, so AI answers can\u2019t cite you.', status: 'gap', detail: 'Zero JSON-LD blocks found.', fix: { label: 'Paste this so machines know what you are', snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","url":"${s.url}"}</script>`, where: wHead, effort: '2-minute fix', source: 'Google structured data docs' } });
  }

  // 4. Impact schema (knowsAbout) \u2014 pre-filled from the subject's OWN page text
  if (st.entity && !st.entity.hasKnowsAbout && !st.entity.hasDescription) {
    F.push({ key: 'impact', title: 'Your impact is not cite-able yet', plain: 'Machines know you exist \u2014 but nothing tells them what you keep alive (your craft, materials, heritage). That is what impact buyers search for.', status: 'gap', detail: 'Entity block found, no knowsAbout / description.' + (ka ? ` Terms found on your own pages: ${ka.join(', ')}.` : ' No impact terms found in your page text \u2014 the descriptors must be your words, so we do not invent them.'), fix: { label: 'Tell machines what you keep alive', snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}",${ka ? `"knowsAbout":${JSON.stringify(ka)}` : `"knowsAbout":["your craft, in your own words","materials or methods, in your own words"]`}}</script>`, where: wHead + (ka ? ' \u2014 pre-filled with terms found on your own pages; check them and Save.' : ' \u2014 replace the two quoted phrases with your own words \u2014 two JSON-LD blocks on one page are fine; machines merge them.'), effort: ka ? '2-minute fix' : '5-minute fix', source: 'schema.org LocalBusiness + knowsAbout' } });
  } else if (st.entity && (st.entity.hasKnowsAbout || st.entity.hasDescription)) {
    F.push({ key: 'impact', title: 'What you keep alive is cite-able', plain: 'Your structured data carries the craft/impact descriptors \u2014 machines can cite what you preserve.', status: 'pass', detail: 'knowsAbout/description present.', fix: null });
  }

  // 5. Your snippet (meta description)
  if (a.meta.description) {
    F.push({ key: 'snippet', title: 'Your words are the snippet', plain: 'When your link appears in search, engines show the line you wrote \u2014 not text they guessed.', status: 'pass', detail: `Set: \u201c${a.meta.description.slice(0, 90)}\u2026\u201d`, fix: null });
  } else {
    F.push({ key: 'snippet', title: 'Engines write your blurb for you', plain: 'No page description \u2014 so when your link shows up, the engine grabs whatever text it finds first. This is the line buyers read.', status: 'gap', detail: a.firstPara ? `Draft, from your own page: \u201c${a.firstPara}\u201d` : 'No clean sentence found to draft from \u2014 write one line on your work.', fix: a.firstPara ? { label: 'Copy your one-line description', snippet: `<meta name="description" content="${a.firstPara.replace(/"/g, '&quot;')}">`, where: wMeta, effort: '2-minute fix', source: 'Google Search Central, \u201cControl your snippets\u201d' } : { label: 'Write one line on your work', snippet: `<meta name="description" content="One line on your work, in your own words">`, where: wMeta, effort: '2-minute fix', source: 'Google Search Central, \u201cControl your snippets\u201d' } });
  }

  // 6. Page title
  if (st.title) {
    F.push({ key: 'title', title: 'Your headline is set', plain: `The strongest single line for search reads: \u201c${st.title}\u201d.`, status: 'pass', detail: 'Title tag present.', fix: null });
  } else {
    F.push({ key: 'title', title: 'No headline for engines', plain: 'Your homepage has no page title \u2014 the strongest single line for search and AI answers is missing.', status: 'gap', detail: 'Title tag empty.', fix: { label: 'Paste your page title', snippet: `<title>${s.name} \u2014 your craft, your place</title>`, where: wTitle, effort: '2-minute fix', source: 'Google Search Central, title links docs' } });
  }

  // 7. Main heading
  if (st.h1s === 1) {
    F.push({ key: 'h1', title: 'One clear topic line', plain: 'Your homepage has exactly one main heading \u2014 machines read its topic clearly.', status: 'pass', detail: 'H1 count: 1.', fix: null });
  } else {
    F.push({ key: 'h1', title: 'Machines can\u2019t find the topic', plain: `Your homepage has ${st.h1s} main headings \u2014 machines prefer exactly one clear statement of what you do.`, status: 'gap', detail: `H1 count: ${st.h1s}.`, fix: { label: 'Keep one main heading at the top', snippet: null, where: wH1, effort: '5-minute fix', source: 'Google heading-order guidance' } });
  }

  // 8. Image descriptions
  if (st.imgsNoAlt === 0) {
    F.push({ key: 'alt', title: 'Your work is visible to machines', plain: 'Every image carries a text description \u2014 machines that can\u2019t see still know what you make.', status: 'pass', detail: `${st.imgs} images, all described.`, fix: null });
  } else {
    F.push({ key: 'alt', title: 'Your work is invisible to machines', plain: `${st.imgsNoAlt} of ${st.imgs} images have no text description \u2014 a machine that can\u2019t see sees nothing.`, status: 'gap', detail: `${st.imgsNoAlt} missing alt text.`, fix: { label: 'Describe one image at a time', snippet: `alt="Handwoven ikat cloth, natural dye"`, where: wAlt, effort: '10 minutes, a few at a time', source: 'Google image SEO docs' } });
  }

  // 9. Share card
  if (st.og && st.og.title && st.og.image) {
    F.push({ key: 'og', title: 'Shared links show your card', plain: 'On WhatsApp and Instagram, your link opens with your name and a photo of your work \u2014 not a bare URL.', status: 'pass', detail: 'og:title + og:image present.', fix: null });
  } else {
    F.push({ key: 'og', title: 'Shared links look empty', plain: 'No share card \u2014 when someone forwards your link on WhatsApp, it shows a bare URL. On WhatsApp and Instagram, the card is the storefront.', status: 'gap', detail: 'Missing Open Graph tags.', fix: { label: 'Paste your share card', snippet: `<meta property="og:title" content="${s.name}">\n<meta property="og:description" content="One line on your work, in your words">\n<meta property="og:image" content="Link to one good photo of your work">`, where: wHead, effort: '2-minute fix', source: 'Open Graph standard' } });
  }

  // 10. AI stance \u2014 allow/disallow per crawler (a deliberate opt-out is a stance, not a failure)
  if (a.robots.status === 200) {
    const named = AI_CRAWLERS.filter(b => a.robots.robotLines[b] !== 'default-allow' && a.robots.robotLines[b] !== 'unreadable');
    const disallowed = AI_CRAWLERS.filter(b => a.robots.robotLines[b] === 'disallowed');
    if (disallowed.length) {
      F.push({ key: 'ai', title: 'Your stance on AI is on the record', plain: `Your robots.txt explicitly opts out of ${disallowed.join(', ')} \u2014 you decided, not your platform defaults. Machines respect it; so do we.`, status: 'pass', detail: `Opted out: ${disallowed.join(', ')}.`, fix: null });
    } else if (named.length) {
      F.push({ key: 'ai', title: 'Your stance on AI is on the record', plain: `Your robots.txt explicitly addresses ${named.join(', ')} \u2014 you decided, not your platform defaults.`, status: 'pass', detail: `Named in robots.txt: ${named.join(', ')}.`, fix: null });
    } else {
      F.push({ key: 'ai', title: 'AI crawlers follow your platform\u2019s defaults', plain: 'Your robots.txt doesn\u2019t address the AI-answer crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended) \u2014 their access follows defaults your platform chose.', status: 'gap', detail: 'Not named in robots.txt.', fix: null });
    }
  }

  // 11. llms.txt \u2014 AI-answer guidance file (draft standard)
  F.push(a.llmsTxt && a.llmsTxt.status === 200
    ? { key: 'llms', title: 'AI answers can read your guidance', plain: 'You publish llms.txt \u2014 the emerging file that tells AI answer-engines what your work is. Early adopters get cited more.', status: 'pass', detail: `llms.txt found, ${a.llmsTxt.length} bytes.`, fix: null }
    : { key: 'llms', title: 'No llms.txt for AI answers', plain: 'AI answer-engines are adopting llms.txt \u2014 a plain page that tells them what you keep alive. Yours is absent.', status: 'gap', detail: 'Not found at /llms.txt (draft standard, llmstxt.org).', fix: { label: 'Publish your llms.txt draft', snippet: `# ${s.name}\n\n> ${(a.quotability && a.quotability.sentence) ? a.quotability.sentence : 'One line on what you keep alive, in your own words'}\n\n## What we do\n\n${ka ? ka.join(', ') : 'Your craft, materials or methods \u2014 in your own words'}\n\nDocs: [Home](${s.url})`, where: wHead, effort: '5-minute fix', source: 'llmstxt.org draft standard' } });

  // 12. Content quotability \u2014 answer-shaped text LLMs actually quote
  if (a.quotability && (a.quotability.sentence || a.quotability.hasFaq)) {
    F.push({ key: 'quotable', title: 'Your words are answer-shaped', plain: 'Your page carries definitional text \u2014 the kind of sentence AI answers quote verbatim, with your name on it.', status: 'pass', detail: a.quotability.sentence ? `Found: \u201c${a.quotability.sentence.slice(0, 90)}\u2026\u201d` : 'FAQ-style passages present.', fix: null });
  } else {
    F.push({ key: 'quotable', title: 'Nothing for an AI answer to quote', plain: 'AI answers quote short definitional sentences \u2014 \u201cwho is X\u201d needs an \u201cX is a \u2026\u201d on your page. There isn\u2019t one.', status: 'gap', detail: 'No definitional sentence or FAQ passage found on the homepage.', fix: { label: 'Write one answer-shaped sentence', snippet: `${s.name} is a ${(ka && ka[0]) ? ka[0].toLowerCase() + ' ' : ''}practice in your own words \u2014 one sentence, written by you, that answers \u201cwho are they?\u201d`, where: 'Add it near the top of your homepage, in your own words \u2014 we draft the shape, never the content.', effort: 'write it', source: 'how AI answers select quotable passages' } });
  }

  // 13. Entity corroboration (sameAs)
  if (st.entity && st.entity.hasSameAs) {
    F.push({ key: 'corrob', title: 'Who you are is corroborated', plain: 'Your structured data links to the same business elsewhere (maps, socials) \u2014 the cross-source signals AI engines use to trust an entity.', status: 'pass', detail: 'sameAs links present.', fix: null });
  } else {
    F.push({ key: 'corrob', title: 'Who you are stands alone', plain: 'Nothing on your page connects your business to the same business elsewhere \u2014 maps, socials, directories. Engines trust entities that appear in more than one place.', status: 'gap', detail: 'No sameAs links in structured data.', fix: { label: 'Connect who you are', snippet: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${s.name}","sameAs":["Your Google Maps link","Your Instagram or Facebook page"]}</script>`, where: wHead + ' \u2014 replace the two links with yours. Listing them is the machine-checkable part; earning them is the Rejuvenation work.', effort: '5-minute fix', source: 'schema.org sameAs \u2014 entity corroboration' } });
  }
  return F;
}

function letter(a) {
  const s = a.site;
  const F = buildFindings(a);
  const gaps = F.filter(f => f.status === 'gap');
  const L = [];
  L.push(`Dear ${s.name},`);
  L.push('');
  L.push(gaps.length === 0
    ? `We measured ${s.url} and found nothing bounded to fix \u2014 the basics machines need are in place. The next lever is content and entity surface, and that work is yours to approve.`
    : `We measured ${s.url}. ${F.length - gaps.length} of ${F.length} things machines need are already working \u2014 the ${gaps.length} gap${gaps.length > 1 ? 's' : ''} above come with exact fixes: each is copy-paste, and the Where line names the exact setting in ${a.structure && a.structure.platform ? a.structure.platform : 'your site builder'}.`);
  L.push('');
  L.push('How we work:');
  L.push('\u2014 No bulk AI-generated pages, ever. No health, legal or financial claims.');
  L.push('\u2014 No ranking promises \u2014 anyone who promises one is selling you one.');
  L.push('\u2014 Nothing is published without your sign-off.');
  L.push('');
  L.push('Next: we can implement this for you under the Rejuvenation engagement, or hand this letter to whoever builds your site.');
  L.push('');
  L.push('\u2014 embold\'r, measured ' + new Date().toISOString().slice(0, 10) + ', one human and a workforce of agents.');
  return L.join('\n');
}

function refusalLetter(s) {
  return `Dear ${s.name || 'visitor'},\n\nThis check declined to run.\n\n${s.name ? s.name + ' is listed in our registry as a non-impact business — the impact gate applies the same way to everyone.' : 'The site you named is not in our registry of impact-driven businesses.'} embold'r works with heritage and environmental operators; we are not a general SEO tool, and the refusal is logged as data, not hidden. Refusals are evidence.\n\nIf you run an impact business and would like to be tracked, say so and a human will review the addition.`;
}

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x');
  if (req.method === 'OPTIONS') return send(res, 204, '');
  if (req.method === 'GET' && u.pathname === '/') {
    const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));
    return send(res, 200, html, 'text/html; charset=utf-8');
  }
  if (req.method === 'GET' && u.pathname === '/api/search') {
    const q = (u.searchParams.get('q') || '').trim();
    if (!q) return send(res, 200, j([]));
    const { j: rows } = await supa('GET', 'websites', `?name=ilike.*${encodeURIComponent(q)}*&order=name&limit=8`);
    return send(res, 200, j(rows || []));
  }
  if (req.method === 'GET' && u.pathname === '/api/check') {
    const name = (u.searchParams.get('name') || '').trim();
    if (!name) return send(res, 400, j({ error: 'name required' }));
    const { j: rows } = await supa('GET', 'websites', `?name=ilike.*${encodeURIComponent(name)}*&limit=1`);
    const site = (rows || [])[0];
    if (!site) {
      const body = { refusal: true, text: `Dear visitor,\n\nThis check declined to run.\n\n"${name}" is not in our registry of impact-driven businesses. Our gate declines unknown and non-impact sites, and the refusal is logged as data, not hidden. Refusals are evidence.\n\nIf you run an impact business and would like to be tracked, say so and a human will review the addition.` };
      // log refusal without website row
      await fetch(`${SUPA}/rest/v1/check_log`, { method: 'POST', headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: j({ website_id: null, kind: 'refusal', outcome: 'not in registry: ' + name }) });
      return send(res, 200, j(body));
    }
    if (!site.is_impact) {
      await fetch(`${SUPA}/rest/v1/check_log`, { method: 'POST', headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: j({ website_id: site.id, kind: 'refusal', outcome: 'not an impact business' }) });
      return send(res, 200, j({ refusal: true, text: refusalLetter(site) }));
    }
    try {
      const a = await runAudit(site);
      const text = letter(a);
      const findings = buildFindings(a);
      const gaps = findings.filter(f => f.status === 'gap').length;
      await fetch(`${SUPA}/rest/v1/check_log`, { method: 'POST', headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: j({ website_id: site.id, kind: 'audit', outcome: `home:${a.home.status} robots:${a.robots.status} sitemap:${a.sitemap.status} jsonld:${a.jsonLd.count}` }) });
      return send(res, 200, j({
        refusal: false,
        subject: { name: site.name, url: site.url, sector: site.sector },
        platform: (a.structure && a.structure.platform) || null,
        verdict: { pass: findings.length - gaps, total: findings.length, gaps, line: gaps === 0 ? 'Everything machines need is working. The next lever is content and entity surface.' : `${findings.length - gaps} of ${findings.length} things machines need are working. Here ${gaps === 1 ? 'is the gap' : 'are the ' + gaps + ' gaps'} \u2014 each with an exact fix.` },
        findings,
        text
      }));
    } catch (e) {
      return send(res, 500, j({ error: 'audit failed: ' + String(e) }));
    }
  }
  send(res, 404, j({ error: 'not found' }));
});

server.listen(PORT, () => console.log('embold\'r impact-check on', PORT));