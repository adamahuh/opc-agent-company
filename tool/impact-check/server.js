// embold'r — headless impact-check API + static flagship fallback
// One request per path, own UA, bounded timeout. Non-impact submissions are
// declined with a stated reason and logged to the registry. No accounts, no
// dashboard: the output is a letter addressed to the practitioner.
// CORS is open so the Hashmeta-hosted site can call this engine directly.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || '0.0.0.0';
const UA = 'emboldr-impact-check/0.1 (+visibility audit; contact pending)';
const SB_URL = process.env.SUPABASE_URL;
const SB_KEY = process.env.SUPABASE_ANON_KEY;
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

// --- impact gate (heuristic v1, human review pending) ---
const IMPACT_MARKERS = [
  'heritage','cultural','culture','artisan','craft','handmade','handwoven',
  'weaving','weaver','rattan','batik','ikat','restoration','conservation',
  'environmental','sustainability','sustainable','community','non-profit',
  'nonprofit','social enterprise','indigenous','traditional','ecological',
  'recycled','upcycled','fair trade','village','women-led','local craft'
];
const NON_IMPACT_MARKERS = [
  'casino','gambling','payday loan','crypto exchange','forex broker',
  'escort','vape shop','tobacco'
];

function classifyImpact(text, url) {
  const t = (text || '').toLowerCase();
  const hit = IMPACT_MARKERS.filter(m => t.includes(m));
  const bad = NON_IMPACT_MARKERS.filter(m => t.includes(m) || url.toLowerCase().includes(m));
  if (bad.length) return { verdict: 'declined', reason: `Non-impact category detected (${bad.join(', ')}). embold'r only serves impact-driven businesses.`, markers: bad };
  if (hit.length >= 2) return { verdict: 'accepted', reason: `Impact signals found: ${hit.slice(0, 5).join(', ')}.`, markers: hit };
  if (hit.length === 1) return { verdict: 'review', reason: `One weak impact signal (${hit[0]}). Queued for human review before any audit runs.`, markers: hit };
  return { verdict: 'declined', reason: 'No impact-driven signals detected on the page. embold\'r only serves impact-driven businesses — this is a gate, not a judgement of the business.', markers: [] };
}

// --- bounded fetch: one request per path ---
async function probe(url, timeout = 12000) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), timeout);
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: ctl.signal });
    const body = await r.text();
    return { status: r.status, ok: r.ok, body, finalUrl: r.url };
  } catch (e) {
    return { status: 0, ok: false, body: '', error: String(e && e.name || e) };
  } finally { clearTimeout(timer); }
}

function grade(status) {
  if (status === 200) return 'pass';
  if (status === 0) return 'blocked';
  return 'fail';
}

// --- AI answer-engine crawlers: the site's stance toward each ---
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'CCBot', 'Google-Extended'];
function botStance(robotsBody) {
  const t = (robotsBody || '');
  const out = {};
  for (const bot of AI_BOTS) {
    const re = new RegExp('user-agent:\\s*' + bot + '[\\s\\S]*?(?=user-agent:|$)', 'i');
    const m = t.match(re);
    if (!m) { out[bot] = 'unspecified'; continue; }
    out[bot] = /^[\s\S]*disallow:\s*\/\s*$/im.test(m[0].trim() + '\n') ? 'blocked' : 'allowed';
  }
  return out;
}

// --- one-click fixes: copy, paste, done ---
function buildFixes(url, origin, r) {
  const f = [];
  const robots = r.robots, sm = r.sm, jsonld = r.jsonld, desc = r.desc, canonical = r.canonical, stance = r.stance;
  if (robots.status !== 200) f.push({ problem: `robots.txt returns HTTP ${robots.status || 'no answer'}`, action: 'Restore crawl guidance — robots.txt must answer 200 for any engine to be guided.', snippet: 'User-agent: *\nAllow: /\n', where: 'robots.txt (site root)' });
  else if (robots.ok && !robots.body.includes('Sitemap:')) f.push({ problem: 'robots.txt has no Sitemap line', action: 'Tell every engine where your table of contents lives — one line.', snippet: `Sitemap: ${origin}/sitemap.xml`, where: 'append to robots.txt' });
  if (sm.status !== 200) f.push({ problem: `/sitemap.xml returns HTTP ${sm.status || 'no answer'}`, action: 'Publish a sitemap at the root, then submit it in Google Search Console.', snippet: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}</loc></url>\n</urlset>`, where: '/sitemap.xml' });
  const blocked = Object.entries(stance).filter(([, s]) => s === 'blocked').map(([b]) => b);
  if (blocked.length) f.push({ problem: `AI answer-engine crawlers blocked: ${blocked.join(', ')}`, action: 'Blocking these means ChatGPT/Claude-style answers cannot read you. Allow them if you want to be citable.', snippet: blocked.map(b => `User-agent: ${b}\nAllow: /`).join('\n\n'), where: 'robots.txt' });
  if (!jsonld) f.push({ problem: 'zero structured data (JSON-LD)', action: 'Make who-you-are machine-readable with one block engines and AI answers parse.', snippet: `<script type="application/ld+json">\n{"@context":"https://schema.org","@type":"Organization","name":"YOUR NAME","url":"${url}","description":"WHAT YOU DO, IN ONE SENTENCE"}\n</script>`, where: 'inside <head>' });
  if (!desc) f.push({ problem: 'empty meta description', action: 'Write your one-sentence summary — otherwise engines write it for you.', snippet: '<meta name="description" content="YOUR ONE SENTENCE — what you make, where, for whom">', where: 'inside <head>' });
  if (!canonical) f.push({ problem: 'no canonical URL declared', action: 'Declare the official address of this page so engines do not index duplicates.', snippet: `<link rel="canonical" href="${url}">`, where: 'inside <head>' });
  return f;
}

async function audit(url) {
  const home = await probe(url);
  const origin = new URL(home.finalUrl || url).origin;
  const robots = await probe(origin + '/robots.txt', 8000);
  const sm = await probe(origin + '/sitemap.xml', 8000);
  const html = home.body || '';
  const jsonld = (html.match(/application\/ld\+json/gi) || []).length;
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1]?.trim() || '';
  const desc = (html.match(/name=["']description["'][^>]*content=["']([^"']*)["']/i) || [])[1]?.trim() || '';
  const canonical = /rel=["']canonical["']/i.test(html);
  const gate = classifyImpact(html, url);
  const bytes = new Blob([html]).size;
  const stance = botStance(robots.body);
  const blockedBots = Object.entries(stance).filter(([, s]) => s === 'blocked').map(([b]) => b);
  const stanceNote = AI_BOTS.map(b => `${b}:${stance[b]}`).join(' · ');
  const checks = [
    { path: '/', status: home.status, grade: grade(home.status), note: bytes ? `${(bytes/1024).toFixed(0)} KB HTML` : 'unreachable' },
    { path: '/robots.txt', status: robots.status, grade: grade(robots.status), note: robots.ok && !robots.body.includes('Sitemap:') ? 'no Sitemap line' : robots.ok ? 'crawl guidance serves' : 'crawl guidance fails' },
    { path: '/sitemap.xml', status: sm.status, grade: grade(sm.status), note: sm.ok ? `${(sm.body.match(/<loc>/g) || []).length} URLs listed` : 'table of contents fails' },
    { path: 'AI crawlers stance', status: 200, grade: blockedBots.length ? 'fail' : 'pass', note: blockedBots.length ? `blocked: ${blockedBots.join(', ')}` : `no answer-engine crawler blocked (${stanceNote})` },
    { path: 'JSON-LD blocks', status: jsonld ? 200 : 404, grade: jsonld ? 'pass' : 'fail', note: jsonld ? `${jsonld} structured-data block(s)` : 'machines struggle to read who/what/where' },
    { path: 'meta description', status: desc ? 200 : 404, grade: desc ? 'pass' : 'fail', note: desc ? `"${desc.slice(0, 70)}${desc.length > 70 ? '…' : ''}"` : 'empty — engines write your summary for you' },
    { path: 'canonical', status: canonical ? 200 : 404, grade: canonical ? 'pass' : 'fail', note: canonical ? 'self-referencing declared' : 'not declared' }
  ];
  return { gate, checks, title, origin, auditedAt: new Date().toISOString(), robots, sm, jsonld, desc, canonical, stance };
}

function letter({ url, title, checks, gate }) {
  const failing = checks.filter(c => c.grade !== 'pass');
  const worst = ['fail', 'blocked'];
  const broken = checks.filter(c => worst.includes(c.grade));
  const lines = [];
  lines.push(`Dear practitioner,`);
  lines.push(``);
  lines.push(`You asked embold'r to look at ${url}${title ? ` ("${title}")` : ''}. Here is what the machines actually see today, and what we would fix first.`);
  lines.push(``);
  if (broken.length) {
    lines.push(`The urgent part: ${broken.map(c => c.path + ' returns ' + (c.status === 0 ? 'no answer' : 'HTTP ' + c.status)).join('; ')}. That is crawl guidance${broken.length > 1 ? ' and more' : ''} failing outright — engines cannot be guided to your work reliably.`);
  } else if (failing.length) {
    lines.push(`The machines can reach you. What they struggle with: ${failing.map(c => c.path).join(', ')}. Readable pages, but the meaning of who you are and what you do is not machine-readable yet.`);
  } else {
    lines.push(`Technically, everything we check serves correctly. The lever for you is content and entity surface — being the source answers cite, not just a page they can fetch.`);
  }
  lines.push(``);
  lines.push(`Every observation above is dated and reproducible. Nothing here promises ranking: search engines decide that. We fix the levers, then re-measure and tell you honestly what changed — and what we cannot prove.`);
  lines.push(``);
  lines.push(`Where this reaches: Google, Bing (which feeds ChatGPT and Copilot answers), Yandex — plus the AI answer engines themselves, whose crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended) must be allowed to read you. The check reads your site's stance toward each.`);
  lines.push(``);
  lines.push(`— embold'r (automated first pass; a human reads every accepted audit before any work begins)`);
  return lines.join('\n');
}

// --- registry (Supabase REST) ---
async function saveSubmission(row) {
  if (!SB_URL || !SB_KEY) return 'registry-unavailable';
  try {
    const r = await fetch(`${SB_URL}/rest/v1/impact_registry`, {
      method: 'POST',
      headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
      body: JSON.stringify(row)
    });
    return r.ok ? 'saved' : 'registry-error-' + r.status;
  } catch { return 'registry-unreachable'; }
}
async function listSubmissions() {
  if (!SB_URL || !SB_KEY) return [];
  try {
    const r = await fetch(`${SB_URL}/rest/v1/impact_registry?select=url,verdict,reason,submitted_at&order=submitted_at.desc&limit=50`, {
      headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}` }
    });
    return r.ok ? await r.json() : [];
  } catch { return []; }
}

// --- static flagship fallback ---
const MIME = { '.html': 'text/html; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.xml': 'text/xml; charset=utf-8', '.woff2': 'font/woff2' };
async function serveStatic(url, send) {
  let p = url.split('?')[0];
  if (p === '/') p = '/index.html';
  const file = path.normalize(path.join(import.meta.dirname, 'static', p));
  if (!file.startsWith(path.join(import.meta.dirname, 'static'))) return false;
  try {
    const buf = await readFile(file);
    const ext = path.extname(file);
    send(200, MIME[ext] || 'application/octet-stream', buf);
    return true;
  } catch { return false; }
}

const server = http.createServer(async (req, res) => {
  const send = (code, type, body) => {
    const h = { 'Content-Type': type, ...CORS };
    res.writeHead(code, h);
    res.end(body);
  };
  if (req.method === 'OPTIONS') return send(204, 'text/plain', '');
  if (req.method === 'GET' && req.url === '/api/registry') {
    const rows = await listSubmissions();
    return send(200, 'application/json', JSON.stringify(rows));
  }
  if (req.method === 'GET' && req.url === '/api/health') {
    return send(200, 'application/json', JSON.stringify({ ok: true, registry: SB_URL ? 'configured' : 'unconfigured' }));
  }
  if (req.method === 'POST' && req.url === '/api/check') {
    let body = '';
    for await (const chunk of req) body += chunk;
    let url;
    try { url = JSON.parse(body).url; } catch { return send(400, 'application/json', '{"error":"bad json"}'); }
    if (!url || !/^https?:\/\//i.test(url)) return send(400, 'application/json', '{"error":"absolute http(s) URL required"}');
    let host;
    try { host = new URL(url).hostname; } catch { return send(400, 'application/json', '{"error":"unparseable URL"}'); }
    const result = await audit(url);
    const fixes = buildFixes(url, result.origin, result);
    const row = {
      url, domain: host, submitted_at: new Date().toISOString(),
      verdict: result.gate.verdict, reason: result.gate.reason,
      keywords: result.gate.markers, checks: result.checks
    };
    row.registry = await saveSubmission(row);
    const declined = result.gate.verdict === 'declined';
    return send(200, 'application/json', JSON.stringify({
      verdict: result.gate.verdict, reason: result.gate.reason,
      checks: declined ? [] : result.checks,
      fixes: declined ? [] : fixes,
      platforms: ['Google', 'Bing (feeds ChatGPT and Copilot)', 'Yandex — one IndexNow ping covers Bing + Yandex', 'AI answers read you through crawlers: GPTBot, ClaudeBot, CCBot, Google-Extended'],
      letter: declined ? null : letter({ url, title: result.title, checks: result.checks, gate: result.gate }),
      registry: row.registry,
      note: declined
        ? 'Declined. This submission was logged to the impact registry (keyword-gate v1, human review pending). Non-impact businesses are outside what embold\u2019r serves.'
        : 'First pass is automated. A human reads every accepted audit before any work begins. This measures — it does not promise ranking.'
    }));
  }
  if (req.method === 'GET' && await serveStatic(req.url, send)) return;
  send(404, 'text/plain', 'not found');
});
server.listen(Number(PORT), HOST, () => console.log(`embold'r API + flagship fallback on ${HOST}:${PORT}`));
