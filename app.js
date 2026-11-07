import { MODULE, FRAGEN } from "./data/kurs.js";
import { GLOSSAR, FORMELN } from "./data/glossar.js";
import { BILDER } from "./data/bilder.js";
import { VORLESUNGEN } from "./data/vorlesungen.js";
import { PROJEKTE, PRAXIS_FREI } from "./data/projekte.js";
import { PROJEKTBILDER } from "./data/projektbilder.js";

/* ---------- Hilfen ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $("#app");
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const md = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const modById = id => MODULE.find(m => m.id === id);
const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16); const c = [n >> 16, (n >> 8) & 255, n & 255].map(v => Math.round(v * f)); return `rgb(${c.join(",")})`; };
const modGrad = m => `linear-gradient(150deg, ${shade(m.farbe, .72)}, ${shade(m.farbe, .5)})`;

const I = {
 einf: '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
 platt: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 unt: '<path d="M4 21V7l8-4 8 4v14M9 21v-5h6v5M8 10h.01M12 10h.01M16 10h.01M8 13h.01M16 13h.01"/>',
 kpi: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 plan: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/>',
 repeat: '<path d="M4 12a8 8 0 0114-5.3L20 9M20 4v5h-5M20 12a8 8 0 01-14 5.3L4 15M4 20v-5h5"/>',
 box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
 abc: '<path d="M4 18l4-12 4 12M5.5 14h5M14 6h4a3 3 0 010 6h-4zM14 12h4.5a3 3 0 010 6H14z"/>',
 download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
 upload: '<path d="M12 21V9M7 14l5-5 5 5M5 3h14"/>',
 trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
 search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
 cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 pen: '<path d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3"/>',
 clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 recht: '<path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 006 0zM18 7l-3 7a3 3 0 006 0z"/>',
 home: '<path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>',
 book: '<path d="M4 5h7a2 2 0 012 2v12a2 2 0 00-2-2H4zM20 5h-7a2 2 0 00-2 2v12a2 2 0 012-2h7z"/>',
 exam: '<path d="M9 4h6v3H9zM6 6h2v2h8V6h2a1 1 0 011 1v13a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1zm2.5 9l2 2 4.5-4.5"/>',
 proj: '<path d="M12 2l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L3 9l6-1z" opacity="0"/><path d="M4 20h16M6 16l4-9 4 6 3-4 3 7"/>',
 talk: '<path d="M4 5h11v8H8l-4 3zM9 16h7l4 3v-8h-3"/>',
 play: '<path d="M7 4l13 8-13 8z" fill="currentColor" stroke="none"/>',
 check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 x: '<path d="M6 6l12 12M18 6L6 18"/>',
 left: '<path d="M15 5l-7 7 7 7"/>',
 right: '<path d="M9 5l7 7-7 7"/>',
 lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
 ads: '<path d="M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1zM15 9a3 3 0 010 6M18 6a7 7 0 010 12"/>',
 speaker: '<path d="M4 9v6h4l5 4V5L8 9H4zM16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/>',
 focus: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
 praxis: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18M11 13v2h2v-2"/>',
 bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 warn: '<path d="M12 3l10 18H2zM12 10v5M12 18v.5"/>',
 copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V5a1 1 0 011-1h11"/>',
 shuffle: '<path d="M3 6h4l10 12h4M3 18h4l3-3.5M14 9.5L17 6h4M18 3l3 3-3 3M18 15l3 3-3 3"/>'
};
const LET = "ABCDEFGH";
const ic = (n, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${I[n]}</svg>`;

/* ---------- Speicher ----------
   Doppelt: localStorage (schnell) + IndexedDB (robuster). Beim Start gewinnt der neuere Stand (Zeitstempel).
   Fragen und Lektionen haben stabile Schlüssel (unabhängig vom Modul), alte Schlüssel werden migriert. */
const KEY = "smm-coach", VERSION = "0.18.0";
const DEF = () => ({ lek: {}, q: {}, srs: {}, last: null, tests: [], pruefung: "", day: null, seen: 0, set: { size: "m", theme: "auto", goal: "25", vibe: true, step: true, mig1: 1, mig2: 1 }, lastBackup: 0, created: Date.now(), updated: 0, run: null, lastRun: null });
let S = DEF();
try { const x = JSON.parse(localStorage.getItem(KEY) || "null"); if (x) S = Object.assign(DEF(), x); } catch (e) {}
const IDB = { db: null };
function idbOpen() { return new Promise(res => { try { const r = indexedDB.open("smm-coach", 1); r.onupgradeneeded = () => r.result.createObjectStore("kv"); r.onsuccess = () => { IDB.db = r.result; res(r.result); }; r.onerror = () => res(null); } catch (e) { res(null); } }); }
function idbGet() { return new Promise(res => { if (!IDB.db) return res(null); try { const q = IDB.db.transaction("kv").objectStore("kv").get(KEY); q.onsuccess = () => res(q.result || null); q.onerror = () => res(null); } catch (e) { res(null); } }); }
function idbPut(v) { try { IDB.db?.transaction("kv", "readwrite").objectStore("kv").put(v, KEY); } catch (e) {} }
let quotaWarned = false;
const save = () => {
 S.updated = Date.now();
 const v = JSON.stringify(S);
 try { localStorage.setItem(KEY, v); } catch (e) { if (!quotaWarned) { quotaWarned = true; setTimeout(() => toast("Speichern im Browser fehlgeschlagen – bitte eine Sicherungsdatei erstellen"), 0); } }
 idbPut(v);
};
const hasProgress = st => !!st && !!(Object.keys(st.lek || {}).length || Object.keys(st.q || {}).length || (st.tests || []).length);
const progressSize = st => st ? Object.keys(st.lek || {}).length + Object.keys(st.q || {}).length + (st.tests || []).length : 0;
async function storageInit() {
 await idbOpen();
 const v = await idbGet();
 // Neueren Stand nehmen (falls der Browser localStorage geleert oder nur teilweise behalten hat)
 if (v) { try {
  const x = JSON.parse(v);
  const xNewer = (x.updated || 0) > (S.updated || 0) || (!S.updated && progressSize(x) > progressSize(S));
  if (xNewer && hasProgress(x)) { let lsHatte = false; try { lsHatte = hasProgress(JSON.parse(localStorage.getItem(KEY) || "null")); } catch (e) {} S = Object.assign(DEF(), x); normalizeState(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} applySettings(); route(); if (!lsHatte) toast("Lernstand wiederhergestellt"); return persist(); }
 } catch (e) {} }
 if (hasProgress(S)) save();
 persist();
}
async function persist() { try { if (navigator.storage?.persist && !(await navigator.storage.persisted())) await navigator.storage.persist(); } catch (e) {} }
// Mehrere Tabs: Änderungen aus einem anderen Tab übernehmen
addEventListener("visibilitychange", () => { if (document.hidden) save(); });
addEventListener("pagehide", () => save());
addEventListener("storage", e => {
 if (e.key !== KEY || !e.newValue) return;
 try { S = Object.assign(DEF(), JSON.parse(e.newValue)); normalizeState(); applySettings(); if (!storyEl && !/^#(quiz|test|auswertung|einstellungen)/.test(location.hash)) route(); } catch (x) {}
});
function applySettings() {
 const r = document.documentElement;
 r.dataset.size = S.set?.size || "m";
 if (S.set?.theme && S.set.theme !== "auto") r.dataset.theme = S.set.theme; else delete r.dataset.theme;
 r.toggleAttribute("data-focus", !!S.set?.focus);
 r.toggleAttribute("data-calm", !!S.set?.calm);
 const dark = S.set?.theme === "dark" || (S.set?.theme !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
 document.querySelectorAll('meta[name="theme-color"]').forEach(m => { m.removeAttribute("media"); m.content = dark ? "#110e16" : "#f7f4f1"; });
}
applySettings();
// Wiedereinstieg: Wer länger weg war, bekommt eine freundliche Begrüßung statt Rückstands-Zahlen
const PAUSE_TAGE = S.seen ? Math.floor((Date.now() - S.seen) / 86400000) : 0;
S.seen = Date.now();

/* Wiederholen mit System (Leitner): Fach 0–5, Abstand in Tagen */
const BOX_DAYS = [0, 1, 3, 7, 14, 30];
/* ---------- Lernhilfen: Tagesziel, Serien, Vibration ---------- */
const dayLocal = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const goal = () => +(S.set?.goal || 25);
const stepOn = () => S.set?.step !== false; // Schritt für Schritt: Standard an
const heute = () => (S.day && S.day.d === dayLocal() ? S.day.n : 0);
function buzz(p) { if (S.set?.vibe !== false && navigator.vibrate) try { navigator.vibrate(p); } catch (e) {} }
let serie = 0;
function lernZaehler(ok) {
 if (!S.day || S.day.d !== dayLocal()) S.day = { d: dayLocal(), n: 0 };
 S.day.n++;
 buzz(ok ? 18 : [40, 50, 40]);
 serie = ok ? serie + 1 : 0;
 if (S.day.n === goal()) { setTimeout(() => toast(`Tagesziel geschafft: ${goal()} Fragen ✓`), 400); buzz([30, 60, 30, 60, 60]); }
 else if (ok && [3, 5, 10, 15, 20].includes(serie)) setTimeout(() => toast(`${serie} richtig in Folge!`), 400);
}
function grade(key, ok, zaehlen = true) {
 if (zaehlen) lernZaehler(ok);
 const e = S.srs[key] || { b: 0, w: 0 };
 if (ok) e.b = Math.min(5, e.b + 1); else { e.b = 0; e.w = (e.w || 0) + 1; }
 e.due = Date.now() + (ok ? BOX_DAYS[e.b] * 86400000 : 10 * 60000);
 S.srs[key] = e; S.q[key] = ok;
}
const dueKeys = () => Object.entries(S.srs).filter(([k, e]) => e.due <= Date.now() && POOL_KEYS.has(k)).map(([k]) => k);
const errorKeys = () => Object.entries(S.srs).filter(([k, e]) => e.w > 0 && e.b < 3 && POOL_KEYS.has(k)).map(([k]) => k);
function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("on"), 2200); }

/* ---------- Fragenpool ---------- */
// Alle Fragen: Quizfragen + Verständnisfragen aus den Lektionen. Schlüssel = Fragetext (stabil, unabhängig vom Modul).
const POOL = [];
MODULE.forEach(m => m.lektionen.forEach(l => l.folien.filter(f => f.k === "check").forEach(f => POOL.push({ m: m.id, q: f.q, a: f.a, c: f.c, e: f.e, lek: l.id }))));
FRAGEN.forEach(f => POOL.push(f));
const qkey = q => q.id ? "id:" + q.id : "q:" + q.q.trim().slice(0, 60);
POOL.forEach(p => p.key = qkey(p));
const POOL_KEYS = new Set(POOL.map(p => p.key));
const LEGACY_MODS = ["einf", "platt", "unt", "recht", "kpi", "plan", "grund", "content", "ads"];
// Alte Schlüssel (Modul + 40 Zeichen) und alte Lektionsschlüssel (Modul/Lektion) übernehmen, verwaiste entfernen
function normalizeState() {
 S.q = S.q || {}; S.srs = S.srs || {}; S.lek = S.lek || {}; S.set = Object.assign({ size: "m", theme: "auto", goal: "25", vibe: true, step: true }, S.set || {});
 if (!S.set.mig1) { S.set.step = true; S.set.mig1 = 1; } // neue Standards 0.11.2
 if (!S.set.mig2) { S.set.goal = "25"; S.set.mig2 = 1; } // Standard-Tagesziel 25 (0.17)
 // Verwaiste Schlüssel werden geparkt (S.orph), nicht gelöscht – so kann eine Frage nach einer Textkorrektur
 // (Feld „alt“ = alte Fragetexte) ihren Lernstand zurückbekommen.
 S.orph = S.orph || {}; S.orph.q = S.orph.q || {}; S.orph.srs = S.orph.srs || {};
 for (const p of POOL) for (const old of [...LEGACY_MODS.map(mid => mid + ":" + p.q.slice(0, 40)), "q:" + p.q.trim().slice(0, 60), ...(p.alt || []).map(t => "q:" + t.trim().slice(0, 60))]) {
  if (old === p.key || p.key in S.q) continue;
  if (old in S.q) { S.q[p.key] = S.q[old]; if (S.srs[old]) S.srs[p.key] = S.srs[old]; }
  else if (old in S.orph.q) { S.q[p.key] = S.orph.q[old]; if (S.orph.srs[old]) S.srs[p.key] = S.orph.srs[old]; }
 }
 for (const k of Object.keys(S.q)) if (!POOL_KEYS.has(k)) { S.orph.q[k] = S.q[k]; delete S.q[k]; }
 for (const k of Object.keys(S.srs)) if (!POOL_KEYS.has(k)) { S.orph.srs[k] = S.srs[k]; delete S.srs[k]; }
 // T8: importierte Daten säubern (Schutz vor eingeschleustem Code)
 S.tests = (Array.isArray(S.tests) ? S.tests : []).map(Number).filter(n => Number.isFinite(n) && n >= 0 && n <= 100).map(Math.round);
 const iso = v => /^\d{4}-\d{2}-\d{2}$/.test(v || "") ? v : "";
 S.pruefung = iso(S.pruefung); S.kursStart = iso(S.kursStart); S.workshops = [0, 1].map(k => iso((S.workshops || [])[k]));
 const okSet = { size: ["s", "m", "l", "xl"], theme: ["auto", "light", "dark"], goal: ["10", "15", "25"], pomo: ["", "10", "25"], clock: ["", "genau"] };
 for (const [k, v] of Object.entries(okSet)) if (!v.includes(String(S.set[k] ?? v[0]))) S.set[k] = k === "goal" ? "25" : v[0];
 if (S.run && !(Array.isArray(S.run.ids) && S.run.ans && typeof S.run.ans === "object")) S.run = null;
 if (S.lastRun && !(Array.isArray(S.lastRun.ids) && S.lastRun.ans && typeof S.lastRun.ans === "object")) S.lastRun = null;
 const LIDS = new Set(MODULE.flatMap(m => m.lektionen.map(l => l.id)));
 for (const k of Object.keys(S.lek)) { const id = k.includes("/") ? k.split("/")[1] : k; if (S.lek[k] && LIDS.has(id)) S.lek[id] = true; if (k !== id || !LIDS.has(id)) delete S.lek[k]; }
}
normalizeState();

const lekDone = m => m.lektionen.filter(l => S.lek[l.id]).length;
const modPool = id => POOL.filter(p => p.m === id);
const qDone = id => modPool(id).filter(p => S.q[p.key]).length;
const modProgress = m => { const a = lekDone(m) / m.lektionen.length, b = qDone(m.id) / modPool(m.id).length; return a * .5 + b * .5; };
const KERN = () => MODULE.filter(m => !m.zusatz);
const allProgress = () => KERN().reduce((s, m) => s + modProgress(m), 0) / KERN().length;

function ringSvg(p, size = 76, w = 4, track = "var(--line)", color = null) {
 const r = (size - w) / 2, c = 2 * Math.PI * r, id = "g" + Math.random().toString(36).slice(2, 7);
 return `<svg class="prog" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5a5f"/><stop offset=".5" stop-color="#e83e8c"/><stop offset="1" stop-color="#7048e8"/></linearGradient></defs><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${track}" stroke-width="${w}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color || `url(#${id})`}" stroke-width="${w}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - Math.max(.0001, p))}"/></svg>`;
}

/* ---------- Router ---------- */
const TABS = [["start", "Start", "home"], ["praxis", "Praxis", "praxis"], ["pruefung", "Prüfung", "exam"], ["lehrgang", "Lehrgang", "info"], ["einstellungen", "Einstellungen", "gear"]];
function tabbar(active) {
 return `<nav class="tabbar" aria-label="Navigation">${TABS.filter(([h]) => h !== "praxis" || (PROJEKTE.length && PRAXIS_FREI)).map(([h, t, i]) => `<a href="#${h}" data-tab aria-label="${t}" title="${t}" class="${active === h ? "on" : ""}"${active === h ? ' aria-current="page"' : ""}>${ic(i)}<span class="sr-only">${t}</span></a>`).join("")}</nav>`;
}
function page(active, html, o = {}) {
 const y = scrollY;
 app.innerHTML = `<div class="wrap${o.compact ? " compact" : ""}">${html}</div>${tabbar(active)}`;
 const h1 = $("h1", app);
 document.title = (h1 ? h1.textContent.trim() + " – " : "") + "SMM Coach";
 if (o.keep) { scrollTo(0, y); return; }
 scrollTo(0, 0);
 // Fokus auf die Überschrift, damit Screenreader den Seitenwechsel ansagen
 if (h1 && page.n++) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
}
page.n = 0;
function head(t = "Social Media Manager (IHK)") { return `<div class="top"><div class="t">${t}</div></div>`; }

/* ---------- Navigation: „Zurück“ führt dorthin, wo man herkam ----------
   Tab-Wurzeln setzen den Verlauf zurück, damit Zurück nie in einen anderen Reiter springt. */
const TAB_ROOTS = ["#start", "#praxis", "#pruefung", "#lehrgang", "#einstellungen"];
const NAV = { st: (() => { try { return JSON.parse(sessionStorage.getItem("nav")) || []; } catch (e) { return []; } })(), rep: false };
function navTrack() {
 const h = location.hash || "#start", st = NAV.st;
 if (TAB_ROOTS.includes(h)) NAV.st = [h];
 else if (NAV.rep && st.length) st[st.length - 1] = h;
 else if (st[st.length - 2] === h) st.pop();
 else if (st[st.length - 1] !== h) st.push(h);
 NAV.rep = false;
 if (NAV.st.length > 40) NAV.st.splice(0, NAV.st.length - 40);
 try { sessionStorage.setItem("nav", JSON.stringify(NAV.st)); } catch (e) {}
}
function replaceHash(h) { NAV.rep = true; location.replace(h); }
function goBack(fallback) { if (NAV.st.length > 1) history.back(); else replaceHash(fallback); }
addEventListener("hashchange", navTrack); navTrack();
document.addEventListener("click", e => {
 if (e.defaultPrevented) return;
 const tabA = e.target.closest("a[data-tab]");
 if (tabA) { // Reiterwechsel: Verlauf bis zur Reiter-Wurzel zurückspulen, damit System-Zurück nicht zwischen Reitern springt
  e.preventDefault(); const href = tabA.getAttribute("href"), n = NAV.st.length - 1;
  if (n > 0) { addEventListener("popstate", () => replaceHash(href), { once: true }); history.go(-n); } else replaceHash(href);
  return;
 }
 const r = e.target.closest("a[data-rep]"); if (r) { e.preventDefault(); replaceHash(r.getAttribute("href")); return; }
 const a = e.target.closest("a.back[href^='#'], a[data-back]"); if (!a) return;
 e.preventDefault(); goBack(a.getAttribute("href"));
});
function route() {
 closeStory(); clearInterval(testTimer);
 const h = (location.hash || "#start").slice(1);
 const [a, b, ...rest] = h.split("-");
 if (a === "lektion" && b) return openStory(b, rest.join("-"));
 if (a === "modul" && b) return viewModul(b);
 if (h === "mini") { const n = nextLesson(); return replaceHash(n ? `#lektion-${n.m.id}-${n.l.id}` : "#quiz-mini"); }
 if (h === "endspurt") { // erst Fehler/Wiederholung, dann schwächstes Modul, sonst nächste Lektion
  if (uebenN()) return replaceHash("#quiz-ueben");
  const lr = S.lastRun && S.lastRun.saved ? schwaechstesModul(S.lastRun) : null;
  if (lr) { const l = lr.lektionen.find(x => !S.lek[x.id]); return replaceHash(l ? `#lektion-${lr.id}-${l.id}` : `#quiz-${lr.id}`); }
  return replaceHash("#mini");
 }
 if (a === "kompakt" && b) return viewKompakt(b);
 if (a === "quiz") return viewQuiz(b || "mix");
 if (h === "lernen") return replaceHash("#start"); // Reiter „Lernen“ gibt es nicht mehr – alles ist auf Start
 if (h === "pruefung") return viewPruefung();
 if (h === "test") return viewTest();
 if (h === "auswertung") return viewAuswertung();
 if (h === "lehrgang") return viewLehrgang();
 if (h === "glossar") return viewGlossar();
 if (h === "praxis") return viewPraxis();
 if (a === "projekt" && b) return openProjekt([b, ...rest].join("-"));
 if (h === "einstellungen") return viewEinstellungen();
 return viewStart();
}
addEventListener("hashchange", route);

/* ---------- Pausen-Timer: sanfter Hinweis nach 10 oder 25 Minuten Lernen ---------- */
let pomo0 = 0, hiddenAt = 0;
function pomoCheck() {
 const min = +(S.set?.pomo || 0), h = location.hash.slice(1);
 const lernt = /^(lektion|quiz|modul)/.test(h);
 if (!min || !lernt || $("#pomo")) return;
 if (!pomo0) { pomo0 = Date.now(); return; }
 if (Date.now() - pomo0 < min * 60000) return;
 buzz([60, 80, 60]);
 const el = document.createElement("div"); el.id = "pomo"; el.className = "pomo"; el.setAttribute("role", "status");
 el.innerHTML = `<div><b>${min} Minuten geschafft.</b><span>Zeit für eine kurze Pause – aufstehen, trinken, durchatmen.</span></div><div class="row"><button class="btn ghost" data-p="weiter">Noch 5 Min.</button><button class="btn" data-p="pause">Pause machen</button></div>`;
 document.body.appendChild(el);
 el.onclick = e => { const b = e.target.closest("[data-p]"); if (!b) return; el.remove(); if (b.dataset.p === "weiter") pomo0 = Date.now() - (min - 5) * 60000; else { pomo0 = 0; location.hash = "start"; toast("Gute Pause! Die App merkt sich, wo du warst."); } };
}
setInterval(pomoCheck, 20000);
addEventListener("hashchange", pomoCheck);
document.addEventListener("visibilitychange", () => { if (document.hidden) hiddenAt = Date.now(); else if (hiddenAt && Date.now() - hiddenAt > 10 * 60000) pomo0 = 0; });

/* ---------- Start ---------- */
function nextLesson() {
 for (const m of MODULE) for (const l of m.lektionen) if (!S.lek[l.id]) return { m, l };
 return null;
}
function ringsHtml() {
 return `<div class="rings">${MODULE.map(m => {
  const p = modProgress(m);
  return `<a class="ring" href="#modul-${m.id}" style="text-decoration:none"><div class="r">${ringSvg(p)}<div class="ic" style="background:${modGrad(m)}">${ic(m.id)}</div>${p >= .999 ? `<div class="done-badge">${ic("check", 'stroke="#fff" stroke-width="3"')}</div>` : ""}</div><div class="lbl">${m.kurz}</div></a>`;
 }).join("")}</div>`;
}
const PASS = 50; // Bestehensgrenze: bei IHK-Zertifikatstests üblich 50 %, für Dresden nicht offiziell bestätigt
const ZIEL = 70; // Übungsziel mit Sicherheitspuffer (Selbstbewertung der Freitexte ist meist zu milde)
// Termine: Beginn der Weiterbildung, zwei Workshop-Tage, Prüfung
const TERMINE = [["beginn", "Beginn"], ["ws1", "Workshop 1"], ["ws2", "Workshop 2"], ["pruefung", "Prüfung"]];
const terminWert = k => k === "pruefung" ? S.pruefung || "" : k === "beginn" ? S.kursStart || "" : (S.workshops || [])[k === "ws1" ? 0 : 1] || "";
function terminSetzen(k, v) { if (k === "pruefung") S.pruefung = v; else if (k === "beginn") S.kursStart = v; else { S.workshops = S.workshops || ["", ""]; S.workshops[k === "ws1" ? 0 : 1] = v; } }
const tageBis = d => d ? Math.ceil((new Date(d + "T09:00") - Date.now()) / 86400000) : null;
function naechsterTermin() {
 return TERMINE.map(([k, t]) => ({ k, t: k === "pruefung" ? "Prüfung" : k === "beginn" ? "Start der Weiterbildung" : t, d: tageBis(terminWert(k)) })).filter(x => x.d !== null && x.d >= 0).sort((a, b) => a.d - b.d)[0] || null;
}
function terminInfo() {
 const n = naechsterTermin(); if (!n) return TERMINE.some(([k]) => terminWert(k)) ? "Alle eingetragenen Termine liegen in der Vergangenheit." : "Trag deine Termine ein, sobald du sie kennst.";
 return n.d === 0 ? `Heute: ${n.t}${n.k === "pruefung" ? " – viel Erfolg!" : ""}` : `Als Nächstes: ${n.t} in ${n.d} Tag${n.d === 1 ? "" : "en"}.`;
}
// Nächste Online-Vorlesung für DICH: montags 18:30, frühestens ab deinem Kursbeginn.
// Vor dem Beginn zählt der Vorlesungsplan (Foto des laufenden Kurses) nicht – da startest du ja erst.
function naechsteOnline() {
 const heuteD = dayLocal(), jetzt = new Date(), ab = S.kursStart && S.kursStart > heuteD ? S.kursStart : heuteD;
 const laeuft = d => d > heuteD || (d === heuteD && jetzt.getHours() * 60 + jetzt.getMinutes() < 20 * 60);
 const v = VORLESUNGEN.find(x => x.datum >= ab && laeuft(x.datum));
 if (v) return v;
 if (!S.kursStart) return null;
 // Nach dem bekannten Plan: einfach den nächsten Montag ab Beginn nehmen
 const d = new Date(ab + "T12:00"); while (d.getDay() !== 1) d.setDate(d.getDate() + 1);
 const iso = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
 return laeuft(iso) ? { datum: iso, titel: "Online-Vorlesung" } : null;
}
// Countdown auf Start: Prüfung + nächster Termin (Beginn, Workshop, Online-Vorlesung)
function countdowns() {
 const heuteD = dayLocal(), jetzt = new Date(), out = [];
 const tage = d => Math.round((new Date(d + "T12:00") - new Date(heuteD + "T12:00")) / 86400000);
 const evs = [];
 if (S.kursStart && S.kursStart >= heuteD) evs.push({ t: "Beginn", d: S.kursStart, i: "play" });
 (S.workshops || []).forEach((w, k) => { if (w && w >= heuteD) evs.push({ t: `Workshop ${k + 1}`, d: w, i: "pen" }); });
 const v = naechsteOnline();
 if (v) evs.push({ t: /sprechstunde/i.test(v.titel || "") ? "Sprechstunde" : "Online-Vorlesung", d: v.datum, i: "clock", zeit: "18:30" });
 evs.sort((a, b) => a.d.localeCompare(b.d));
 // Beginn und erste Vorlesung am selben Tag zusammenfassen
 if (evs[0] && evs[1] && evs[0].d === evs[1].d && evs[0].t === "Beginn") { evs[0] = { ...evs[1], t: "Beginn + Vorlesung" }; }
 if (S.pruefung && S.pruefung >= heuteD) out.push({ t: "Prüfung", d: S.pruefung, i: "exam", haupt: true });
 if (evs[0]) out.push(evs[0]);
 return out.map(e => ({ ...e, n: tage(e.d) }));
}
function countdownHtml() {
 const c = countdowns(); if (!c.length) return "";
 const wann = e => e.n === 0 ? (e.zeit ? `heute ${e.zeit}` : "heute") : e.n === 1 ? (e.zeit ? `morgen ${e.zeit}` : "morgen") : `in ${e.n} Tagen`;
 const dat = e => new Date(e.d + "T12:00").toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" }) + (e.zeit ? `, ${e.zeit}` : "");
 return `<div class="countdown">${c.map(e => `<a href="#lehrgang" class="cd ${e.haupt ? "haupt" : ""}" aria-label="${esc(e.t)} ${esc(dat(e))}, ${esc(wann(e))}">${ic(e.i)}<span><b>${e.n > 1 ? `${e.n} Tage` : wann(e)}</b><small>${esc(e.t)}</small><small>${esc(dat(e))}</small></span></a>`).join("")}</div>`;
}
function daysLeft() { if (!S.pruefung) return null; const d = Math.ceil((new Date(S.pruefung + "T09:00") - Date.now()) / 86400000); return isNaN(d) ? null : d; }
// Hauptseiten sollen ohne Scrollen passen: notfalls die unwichtigsten Hinweiskarten ausblenden
/* ---------- Vorlesungsplan (laut Foto des Teilnehmers, nicht offiziell) ---------- */
const LEK = id => { for (const m of MODULE) { const l = m.lektionen.find(x => x.id === id); if (l) return { m, l }; } return null; };
const datumDE = d => new Date(d + "T12:00").toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
// nächste Vorlesung mit Inhalt (ab heute; Montag gilt noch bis zum Ende des Tages)
function naechsteVorlesung() { const heuteD = dayLocal(), ab = S.kursStart && S.kursStart > heuteD ? S.kursStart : heuteD; return VORLESUNGEN.find(v => v.datum >= ab && v.lektionen.length) || null; }
function fitMain() {
 const tb = $(".tabbar"); if (!tb) return;
 const limit = () => tb.getBoundingClientRect().top - 6;
 const last = () => { const k = [...$(".wrap").children].filter(e => e.offsetParent); return k[k.length - 1]?.getBoundingClientRect().bottom || 0; };
 for (const el of $$(".wrap > .cont:not([href='#glossar']):not([href='#test'])").reverse()) { if (last() <= limit()) break; el.hidden = true; }
}
function viewStart() {
 const p = allProgress(), n = nextLesson(), dl = daysLeft();
 const lessonsDone = Object.values(S.lek).filter(Boolean).length, lessonsAll = MODULE.reduce((s, m) => s + m.lektionen.length, 0);
 const best = S.tests.length ? Math.max(...S.tests) : null;
 const kern = KERN(), kernAll = kern.reduce((a, m) => a + m.lektionen.length, 0), kernDone = kern.reduce((a, m) => a + lekDone(m), 0);
 const offen = kernAll - kernDone, lernTage = dl > 3 ? dl - 3 : Math.max(1, dl), proTag = dl > 0 && offen > 0 ? Math.ceil(offen / lernTage) : 0;
 const planText = !(dl > 0) ? "" : offen === 0 ? "Alle Lektionen geschafft. Jetzt täglich „Üben“ und pro Woche zwei Probetests." : dl <= 3 ? "Endspurt: keine neuen Lektionen mehr – nur noch „Üben“, Kompakt-Wiederholung und ein Probetest." : proTag > 3 ? `Alles schaffst du nicht mehr – setz Schwerpunkte: täglich „Üben“, dann das schwächste Modul kompakt. Etwa ${Math.min(offen, lernTage * 3)} Lektionen gehen noch gut.` : `Vorschlag: ${proTag} Lektion${proTag === 1 ? "" : "en"} pro Tag, danach „Üben“. Die letzten 3 Tage bleiben für Wiederholung und Probetests.`;
 const endspurt = dl !== null && dl >= 0 && dl <= 14;
 page("start", `${head()}
 <div><h2 class="sr-only">Deine Module</h2>
 ${ringsHtml()}</div>
 <section class="hero">
  <div class="kicker">${PAUSE_TAGE >= 3 && hasProgress(S) ? "Schön, dass du wieder da bist" : dl === 0 ? "Heute ist Prüfung – viel Erfolg!" : p > 0 ? "Weiter so" : "Willkommen"}</div>
  <h1>${p > 0 ? `${Math.round(p * 100)} % insgesamt geschafft` : "Werde Social Media Manager"}</h1>
  ${(() => { const h = heute(), g = goal(), ok = h >= g; return `<div class="hgoal ${ok ? "ok" : ""}"><div class="row" style="justify-content:space-between;align-items:center"><b>${ok ? "Tagesziel geschafft ✓" : "Heute"}</b><span>${Math.min(h, g)} von ${g} Fragen</span></div><div class="hbar" aria-hidden="true"><i style="width:${Math.min(1, h / g) * 100}%"></i></div></div>`; })()}
  <p style="opacity:.92;max-width:460px">${p > 0 ? planText : "Lektionen, Quiz und Probetest für deinen IHK-Abschlusstest."}</p>
  <div class="hero-stat fx"><div><b>${kernDone}/${kernAll}</b><span>Lektionen</span></div><div><b>${POOL.filter(q => q.key in S.q).length}/${POOL.length}</b><span>Fragen bearbeitet</span></div><div><b>${best === null ? "–" : best + " %"}</b><span>Bester Test</span></div></div>
  <div class="row"><a class="btn white" href="${endspurt ? "#endspurt" : "#mini"}">${ic("play")} ${endspurt ? "Endspurt heute" : p > 0 ? "Weiterlernen" : "Loslegen"}</a></div>
 </section>
 ${countdownHtml()}
 ${[(S.run ? `<a class="cont" href="#test" style="margin-bottom:10px"><div class="thumb" style="background:var(--grad-strong)">${ic("clock")}</div><div><b style="font-size:1rem">Probetest läuft</b><div class="small muted">Weitermachen, wo du aufgehört hast</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""), ((() => { const n = naechsterTermin(); if (!n || n.k === "pruefung" || n.d > 7) return ""; return `<a class="cont" href="#lehrgang"><div class="thumb" style="background:linear-gradient(135deg,#2b8a3e,#1864ab)">${ic("cal")}</div><div><b style="font-size:1rem">${esc(n.t)} ${n.d === 0 ? "heute" : n.d === 1 ? "morgen" : `in ${n.d} Tagen`}</b><div class="small muted">${n.k === "beginn" ? "Am besten vorher den Grundwortschatz lernen" : "Termin im Lehrgang ansehen"}</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>`; })()), (() => { const v = naechsteVorlesung(); if (!v) return ""; const offen = v.lektionen.map(LEK).filter(x => x && !S.lek[x.l.id]); if (!offen.length) return ""; const t = (new Date(v.datum + "T12:00") - Date.now()) / 86400000; if (t > 8) return ""; return `<a class="cont" href="#lektion-${offen[0].m.id}-${offen[0].l.id}"><div class="thumb" style="background:linear-gradient(135deg,#2b8a3e,#1864ab)">${ic("cal")}</div><div><b style="font-size:1rem">Vorlesung ${datumDE(v.datum)}: ${esc(v.titel)}</b><div class="small muted">${offen.length} passende Lektion${offen.length === 1 ? "" : "en"} vorab lernen</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>`; })(), ((() => { const d = uebenN(); return d ? `<a class="cont" href="#quiz-ueben" style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#1864ab,#6741d9)">${ic("repeat")}</div><div><b style="font-size:1rem">Üben: ${Math.min(d, 10)} Frage${d === 1 ? "" : "n"}</b><div class="small muted">Fehler und fällige Wiederholungen – damit es bis zur Prüfung sitzt.</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""; })()), (S.lek.grundwortschatz && !S.set?.hilfeGefragt ? `<a class="cont" href="#einstellungen" data-hilfe style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#2b8a3e,#1864ab)">${ic("focus")}</div><div><b style="font-size:1rem">Lernhilfen einstellen</b><div class="small muted">Fokusmodus, Pausen, ruhige Darstellung – z. B. bei ADHS</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""), (hasProgress(S) && Date.now() - (S.lastBackup || S.created || 0) > (S.lastBackup ? 14 : 7) * 86400000 /* erste Erinnerung nach 7 Tagen, danach alle 14 */ ? `<a class="cont" href="#einstellungen" style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#495057,#212529)">${ic("download")}</div><div><b style="font-size:1rem">Lernstand sichern</b><div class="small muted">Lade eine Sicherungsdatei herunter – falls der Browser Daten löscht.</div></div><span class="chev" style="margin-left:auto;color:var(--ink-3)">${ic("right")}</span></a>` : ""), (platform().standalone && !hasProgress(S) && !S.set?.restoreGesehen && !S.day && Date.now() - (S.created || 0) < 3 * 86400000 ? `<a class="cont" href="#einstellungen" data-restore style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#495057,#212529)">${ic("upload")}</div><div><b style="font-size:1rem">Kommst du aus dem Browser?</b><div class="small muted">Dort gesicherten Lernstand in den Einstellungen wiederherstellen.</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""), (S.pruefung ? "" : `<a class="cont" href="#lehrgang" style="margin-bottom:6px"><div class="thumb" style="background:var(--grad-strong)">${ic("cal")}</div><div><b style="font-size:1rem">Termine eintragen</b><div class="small muted">Beginn, Workshops und Prüfung – für deinen Lernplan.</div></div><span class="chev" style="margin-left:auto;color:var(--ink-3)">${ic("right")}</span></a>`)].filter(Boolean).slice(0, 2).join("")}
 <a class="cont" href="#glossar" style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#2b8a3e,#1864ab)">${ic("abc")}</div><div><b style="font-size:1rem">Glossar & Formeln</b><div class="small muted">${GLOSSAR.length} Begriffe und ${FORMELN.length} Formeln nachschlagen</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>
`, { compact: true });
 fitMain();
 const rg = $(".rings"); if (rg) { const upd = () => rg.classList.toggle("end", rg.scrollLeft + rg.clientWidth >= rg.scrollWidth - 4); rg.addEventListener("scroll", upd, { passive: true }); upd(); }
}

/* ---------- Lernen ---------- */
const uebenN = () => new Set([...errorKeys(), ...dueKeys()]).size;
function schwaechstesModul(r) {
 const qs = r.ids.map(k => byKey.get(k)).filter(Boolean);
 const pm = KERN().map(m => { const ix = qs.map((_, i) => i).filter(i => qs[i].m === m.id); const ok = ix.filter(i => qs[i].t === "frei" ? (r.rated?.[i] ?? 0) >= .5 : istRichtig(qs[i], r.ans[i])).length; return { m, p: ix.length ? ok / ix.length : 1 }; }).sort((a, b) => a.p - b.p);
 return pm[0]?.m || null;
}
// „Das Wichtigste auf einen Blick“: Merke- und Überblick-Karten eines Moduls
function viewKompakt(id) {
 const m = modById(id); if (!m) return viewStart();
 const teile = m.lektionen.flatMap(l => l.folien.filter(f => f.k === "merke" || f.k === "liste").map(f => `<div class="card kompakt"><span class="small muted">${esc(l.titel)}</span>${f.k === "liste" ? `<b style="display:block;margin-top:2px">${md(f.h)}</b><ul class="small">${f.l.map(x => `<li>${md(x)}</li>`).join("")}</ul>` : `<b style="display:block;margin-top:2px">${md(f.h)}</b><p class="small" style="margin:4px 0 0">${md(f.b)}</p>`}</div>`));
 const fo = FORMELN.filter(f => modById(f.m)?.id === id || (!f.m && id === "kpi"));
 page("start", `<a class="back" href="#modul-${id}">${ic("left")} ${esc(m.kurz)}</a><h1 style="margin-bottom:12px">Das Wichtigste: ${esc(m.name)}</h1>${teile.join("")}${fo.length ? `<div class="card kompakt"><b>Formeln</b><ul class="small">${fo.map(f => `<li><b>${esc(f.n)}:</b> ${esc(f.f)}</li>`).join("")}</ul></div>` : ""}<div class="row" style="margin:14px 0"><a class="btn" href="#quiz-${id}">Modul-Quiz</a></div>`);
 linkTerms($("#app"));
}
function viewModul(id) {
 const m = modById(id); if (!m) return viewStart();
 const d = lekDone(m), all = d === m.lektionen.length;
 page("start", `<a class="back" href="#start">${ic("left")} Start</a>
 <section class="mod-head" style="--m:${m.farbe}"><div class="ic">${ic(m.id)}</div><h1>${m.name}</h1><p>${m.text}</p><div class="bar"><i style="width:${modProgress(m) * 100}%"></i></div></section>
 <a class="cont" href="#kompakt-${m.id}" style="margin-bottom:14px"><div class="thumb" style="background:${modGrad(m)}">${ic("book")}</div><div><b style="font-size:1rem">Das Wichtigste auf einen Blick</b><div class="small muted">Alle Merksätze und Übersichten des Moduls</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>
 <ol class="steps">${m.lektionen.map((l, i) => { const ok = S.lek[l.id]; return `${l.abschnitt ? `<li class="abschnitt" aria-hidden="true"><span>${esc(l.abschnitt)}</span></li>` : ""}<li><div class="dot ${ok ? "ok" : ""}" style="${ok ? `background:${shade(m.farbe, .6)}` : ""}">${ok ? ic("check", 'stroke-width="3"') : i + 1}</div><a class="item" href="#lektion-${m.id}-${l.id}" style="display:flex;align-items:center;gap:10px;width:100%;text-decoration:none;background:var(--surface);border-radius:18px;padding:14px 16px;box-shadow:var(--shadow)"><div><b>${l.titel}</b><span class="small muted">${l.folien.length} Karten · ${l.min} Min.${ok ? " · erledigt" : ""}</span></div><span class="chev">${ic("right")}</span></a></li>`; }).join("")}
 <li><div class="dot" style="${all ? "background:var(--grad);color:#fff" : ""}">${ic(all ? "bolt" : "focus")}</div><a class="item" href="#quiz-${m.id}" style="display:flex;align-items:center;gap:10px;width:100%;text-decoration:none;background:var(--surface);border-radius:18px;padding:14px 16px;box-shadow:var(--shadow)"><div><b>Modul-Quiz</b><span class="small muted">${modPool(m.id).length} Fragen · ${qDone(m.id)} sicher${all ? "" : " · empfohlen nach den Lektionen"}</span></div><span class="chev">${ic("right")}</span></a></li></ol>`);
}

/* ---------- Praxisprojekte: interaktive Fallgeschichten ---------- */
const projStand = id => (S.proj = S.proj || {}, S.proj[id] = S.proj[id] || { i: 0, wahl: {}, frei: {}, pts: {} });
const projMax = pr => pr.schritte.reduce((a, f) => a + (f.k === "wahl" || f.k === "frei" ? 2 : 0), 0);
const projPunkte = st => Object.values(st.pts || {}).reduce((a, b) => a + b, 0);
function viewPraxis() {
 page("praxis", `${head("Praxisprojekte")}<h1 class="sr-only">Praxisprojekte</h1>
 <p class="small muted praxis-intro">Wende dein Wissen in echten Situationen an: Du triffst die Entscheidungen.</p>
 ${PROJEKTE.length ? `<div class="ptiles">${PROJEKTE.map(pr => { const st = S.proj?.[pr.id], max = projMax(pr), done = st?.done, lauf = st && !done && st.i > 0;
  return `<a class="ptile" href="#projekt-${pr.id}"><div class="pimg">${PROJEKTBILDER[pr.id] || ""}${done ? `<span class="pbadge ok">✓ ${Math.round((st.best ?? projPunkte(st)) / max * 100)} %</span>` : lauf ? `<span class="pbadge">${st.i + 1}/${pr.schritte.length}</span>` : ""}</div><b>${esc(pr.titel)}</b><span>${esc(pr.firma)} · ${pr.min} Min.</span></a>`; }).join("")}</div>`
  : `<div class="card"><p>Die Praxisprojekte werden gerade vorbereitet.</p></div>`}`, { compact: true });
}
function openProjekt(id) {
 const pr = PROJEKTE.find(x => x.id === id); if (!pr) return viewPraxis();
 viewPraxis();
 const st = projStand(id); if (st.done) { st.i = 0; st.wahl = {}; st.frei = {}; st.pts = {}; st.done = false; } save();
 const F = pr.schritte, closeP = () => goBack("#praxis");
 storyEl = document.createElement("div"); storyEl.className = "story projekt"; storyEl.style.setProperty("--m", "#5c6b7a");
 storyEl.setAttribute("role", "dialog"); storyEl.setAttribute("aria-modal", "true"); storyEl.setAttribute("aria-label", "Praxisprojekt: " + pr.titel);
 document.body.appendChild(storyEl); document.body.classList.add("no-scroll");
 const kinds = { szene: "Szene", daten: "Daten", wahl: "Entscheidung", frei: "Anwenden", fazit: "Fazit" };
 const fertig = i => F[i].k === "wahl" ? i in st.wahl : F[i].k === "frei" ? i in st.pts : true;
 const go = d => { if (d > 0 && !fertig(st.i)) return toast(F[st.i].k === "wahl" ? "Triff zuerst eine Entscheidung" : "Bearbeite zuerst die Aufgabe"); if (canSay) speechSynthesis.cancel(); st.i = Math.max(0, Math.min(F.length - 1, st.i + d)); save(); draw(); };
 storyKey = e => { if (e.key === "Escape") closeP(); if (e.target.tagName === "TEXTAREA") return; if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
 addEventListener("keydown", storyKey);
 const seenDe = new Set();
 function draw() {
  const i = st.i, f = F[i], last = i === F.length - 1;
  let body = `<span class="kind">${kinds[f.k] || ""}</span><h2>${md(f.h || "")}</h2>`;
  if (f.k === "szene") body += f.wer ? `<div class="wer"><span class="av-p">${esc(f.wer.trim()[0] || "?")}</span><span class="small muted">${esc(f.wer)}</span></div><div class="body zitat">${md(f.b)}</div>` : `<div class="body">${md(f.b)}</div>`;
  else if (f.k === "daten") body += `<ul class="daten">${f.l.map(x => `<li>${md(x)}</li>`).join("")}</ul>`;
  else if (f.k === "wahl") {
   const a = st.wahl[i]; f._o = f._o || shuf(f.o.map((_, k) => k));
   body += `${f.b ? `<div class="body small-body">${md(f.b)}</div>` : ""}${f._o.map((k, n) => { const o = f.o[k]; let cl = ""; if (a !== undefined) cl = k === a ? (o.p === 2 ? "ok" : o.p === 1 ? "mid" : "bad") : o.p === 2 ? "ok-hint" : "dim"; return `<button type="button" class="opt ${cl}" data-k="${k}" ${a !== undefined ? "disabled" : ""}><span class="l">${LET[n]}</span><span class="ot">${esc(o.t)}</span></button>`; }).join("")}
   ${a !== undefined ? `<div role="status" class="fb ${f.o[a].p === 2 ? "ok" : f.o[a].p === 1 ? "mid" : "bad"}"><b>${f.o[a].p === 2 ? "Starke Entscheidung" : f.o[a].p === 1 ? "Vertretbar – aber es geht besser" : "Das geht schief"}</b>${esc(f.o[a].fb)}${f.o[a].p < 2 ? `<br><span class="small">Beste Wahl: ${esc(f.o.find(o => o.p === 2).t)}</span>` : ""}</div>` : ""}`;
  } else if (f.k === "frei") {
   const done = i in st.pts, txt = st.frei[i] || "";
   if (!done) body += `<div class="body small-body">${md(f.b)}</div><label class="sr-only" for="ptxt">Deine Antwort</label><textarea id="ptxt" placeholder="${Array.from({ length: f.min }, (_, k) => `${k + 1}. …`).join("&#10;")}">${esc(txt)}</textarea><button type="button" class="btn ghost block" id="pchk" style="margin-top:8px">Mit Musterlösung vergleichen</button>`;
   else { const hit = freiMatch(f, txt), n = hit.filter(Boolean).length; body += `<div class="answer small">${txt ? esc(txt) : "<i>Keine Antwort</i>"}</div><div class="fb ${st.pts[i] === 2 ? "ok" : st.pts[i] === 1 ? "mid" : "bad"}"><b>Musterlösung · ${n} von ${f.muster.length} Punkten erkannt</b><ul class="muster">${f.muster.map(([t], k) => `<li class="${hit[k] ? "hit" : ""}">${ic(hit[k] ? "check" : "right", 'stroke-width="3"')}<span>${esc(t)}</span></li>`).join("")}</ul>${f.bsp ? `<details class="bsp"><summary>Beispielantwort</summary><p class="small" style="white-space:pre-line;margin:6px 0 0">${esc(f.bsp)}</p></details>` : ""}</div>`; }
  } else if (f.k === "fazit") {
   const pts = projPunkte(st), max = projMax(pr), pc = Math.round(pts / max * 100);
   body += `<div class="presult"><b>${pts} von ${max} Punkten · ${pc} %</b><span>${pc >= 80 ? "Starke Projektleitung!" : pc >= 50 ? "Solide – ein paar Entscheidungen gehen noch besser." : "Lies die Rückmeldungen nach und versuche es noch einmal."}</span></div><ul>${f.l.map(x => `<li>${md(x)}</li>`).join("")}</ul>`;
  }
  storyEl.innerHTML = `<div class="segs" aria-hidden="true">${F.map((_, n) => `<i class="${n < i ? "on" : ""}"><b style="${n === i ? "width:100%" : ""}"></b></i>`).join("")}</div>
  <div class="shead"><div class="av pimg-av">${PROJEKTBILDER[pr.id] || ic("praxis")}</div><div class="n">${esc(pr.titel)}<small>${esc(pr.firma)} · ${i + 1}/${F.length}</small></div>${sayBtn()}<button class="x" aria-label="Schließen">${ic("x")}</button></div>
  <div class="stage"><div class="slide ${f.k === "szene" && f.wer ? "note" : ""} ${f.k === "fazit" ? "fazit" : ""}">${body}</div></div>
  <div class="snav">${i > 0 ? `<button class="btn prev" aria-label="Zurück">${ic("left")}</button>` : ""}${last ? `<button class="btn" id="pfin">Projekt abschließen ${ic("check")}</button>` : `<button class="btn next" ${fertig(i) ? "" : "aria-disabled=\"true\""}>Weiter ${ic("right")}</button>`}</div>`;
  $(".x", storyEl).onclick = closeP;
  $(".next", storyEl)?.addEventListener("click", () => go(1));
  $(".prev", storyEl)?.addEventListener("click", () => go(-1));
  $("#pfin", storyEl)?.addEventListener("click", () => { st.done = true; st.best = Math.max(st.best || 0, projPunkte(st)); save(); buzz([20, 40, 20]); toast("Projekt abgeschlossen"); closeP(); });
  $$(".opt", storyEl).forEach(b => b.onclick = () => { if (i in st.wahl) return; const k = +b.dataset.k, p = f.o[k].p; st.wahl[i] = k; st.pts[i] = p; lernZaehler(p === 2); save(); draw(); });
  const ta = $("#ptxt", storyEl);
  if (ta) { ta.oninput = () => { st.frei[i] = ta.value; save(); }; $("#pchk", storyEl).onclick = () => { const txt = ta.value; st.frei[i] = txt; const n = freiMatch(f, txt).filter(Boolean).length; st.pts[i] = !txt.trim() ? 0 : n >= f.min ? 2 : n >= Math.ceil(f.min / 2) ? 1 : 0; lernZaehler(st.pts[i] === 2); save(); draw(); }; }
  linkTerms($(".slide", storyEl), seenDe);
  fitSlide(); requestAnimationFrame(fitSlide); if (draw.first !== false) { watchFit(); draw.first = false; $(".x", storyEl).focus({ preventScroll: true }); }
 }
 draw();
}

/* ---------- Story-Player (Erstvermittlung) ---------- */
let storyEl = null, storyKey = null;
function closeStory() { if (canSay) speechSynthesis.cancel(); if (storyEl) { storyEl.remove(); storyEl = null; if (!document.getElementById("gate")) document.body.classList.remove("no-scroll"); removeEventListener("keydown", storyKey); } }
function openStory(mid, lid) {
 const m = modById(mid), l = m && m.lektionen.find(x => x.id === lid);
 if (!l) return viewStart();
 viewModul(mid);
 S.last = mid + "/" + lid; save();
 const F = [...l.folien, { k: "ende" }];
 let i = 0, answered = {};
 storyEl = document.createElement("div");
 storyEl.className = "story"; storyEl.style.setProperty("--m", m.farbe);
 storyEl.setAttribute("role", "dialog"); storyEl.setAttribute("aria-modal", "true"); storyEl.setAttribute("aria-label", "Lektion: " + l.titel);
 document.body.appendChild(storyEl); document.body.classList.add("no-scroll");
 const seenDe = new Set(); // Übersetzung nur beim ersten Auftreten in der Lektion
 let rev = 1; // Schritt für Schritt: wie viele Teile der Karte sichtbar sind
 const go = d => {
  const f = F[i]; if (d > 0 && f.k === "check" && !(i in answered)) return toast("Wähle zuerst eine Antwort");
  const parts = $$(".rv", storyEl);
  if (d > 0 && parts.length && rev < parts.length) { const el = parts[rev]; el.classList.remove("h"); el.tabIndex = -1; el.focus({ preventScroll: true }); rev++; buzz(8); draw.mehr?.(); return; }
  if (canSay) speechSynthesis.cancel();
  i = Math.max(0, Math.min(F.length - 1, i + d)); rev = 1; draw();
 };
 const rv = (html, n) => stepOn() ? `<span class="rv ${n > 0 ? "h" : ""}">${html}</span>` : html;
 const saetze = t => stepOn() ? t.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„*(])/).map((x, n) => rv(md(x), n)).join(" ") : md(t);
 const closeS = () => goBack("#modul-" + mid);
 storyKey = e => {
  if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); if (e.key === "Escape") closeS();
  if (e.key === "Tab") { const f = $$("button,a[href]", storyEl).filter(x => !x.disabled); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
 };
 addEventListener("keydown", storyKey);
 // Nach unten wischen schließt die Story (wie bei Instagram)
 let t0 = null;
 storyEl.addEventListener("touchstart", e => { const t = e.touches[0]; t0 = { x: t.clientX, y: t.clientY, drag: false }; }, { passive: true });
 storyEl.addEventListener("touchmove", e => {
  if (!t0) return; const t = e.touches[0], dy = t.clientY - t0.y, dx = t.clientX - t0.x;
  if (!t0.drag && dy > 12 && dy > Math.abs(dx) * 1.3) t0.drag = true;
  if (t0.drag) { storyEl.style.transition = "none"; storyEl.style.transform = `translateY(${Math.max(0, dy)}px) scale(${1 - Math.min(dy, 400) / 4000})`; storyEl.style.opacity = String(1 - Math.min(dy, 400) / 800); }
 }, { passive: true });
 const end = e => {
  if (!t0) return; const dy = (e.changedTouches?.[0]?.clientY ?? t0.y) - t0.y, drag = t0.drag; t0 = null;
  if (!drag) return;
  storyEl.style.transition = "transform .22s ease, opacity .22s ease";
  if (dy > 110) { storyEl.style.transform = "translateY(100%)"; storyEl.style.opacity = "0"; setTimeout(closeS, 200); }
  else { storyEl.style.transform = ""; storyEl.style.opacity = ""; }
 };
 storyEl.addEventListener("touchend", end); storyEl.addEventListener("touchcancel", end);
 function draw() {
  const f = F[i], last = f.k === "ende";
  const kindName = { intro: "Lektion", text: "Wissen", liste: "Überblick", beispiel: "Beispiel", merke: "Merke", check: "Kurz-Check", bild: "Schaubild" }[f.k] || "";
  let body = "";
  if (f.k === "liste") body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><ul>${f.l.map((x, n) => `<li class="${stepOn() ? "rv" + (n ? " h" : "") : ""}" style="animation-delay:${n * 60}ms">${md(x)}</li>`).join("")}</ul>`;
  else if (f.k === "beispiel" || f.k === "merke") body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><div class="body">${saetze(f.b)}</div>`;
  else if (f.k === "check") {
   const order = f._o || (f._o = shuf(f.a.map((t, k) => k)));
   const a = answered[i];
   body = `<span class="kind">${kindName}</span><h2 style="font-size:1.3em">${md(f.q)}</h2>${order.map((k, n) => { let cl = ""; if (a !== undefined) cl = k === f.c ? "ok" : k === a ? "bad" : "dim"; return `<button type="button" class="opt ${cl}" data-k="${k}" ${a !== undefined ? "disabled" : ""}><span class="l">${LET[n]}</span><span class="ot">${esc(f.a[k])}</span><span class="mark" aria-hidden="true">${cl === "ok" ? "✓" : cl === "bad" ? "✗" : ""}</span></button>`; }).join("")}<div role="status" aria-live="polite">${a !== undefined ? `<div class="fb ${a === f.c ? "ok" : "bad"}"><b>${a === f.c ? "Richtig!" : "Nicht ganz."}</b>${esc(f.e)}</div>` : ""}</div>`;
  }
  else if (f.k === "bild") body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><div class="dg">${BILDER[f.svg] || ""}</div>${f.b ? `<div class="body small-body">${md(f.b)}</div>` : ""}`;
  else if (last) body = `<div style="text-align:center"><div class="confetti">🎉</div><span class="kind">Geschafft</span><h2>${esc(l.titel)}</h2><div class="body">${(() => { const mk = l.folien.find(f => f.k === "merke"); return mk ? `<b>Das nimmst du mit:</b> ${md(mk.b)}<br><br>` : ""; })()}${nextIn(m, l) ? "Weiter mit der nächsten Lektion – oder kurz Pause machen." : "Jetzt im Modul-Quiz festigen."}<p class="small muted" style="margin-top:.6em">${lekDone(m) + (S.lek[l.id] ? 0 : 1)} von ${m.lektionen.length} Lektionen in ${esc(m.kurz)}</p></div></div>`;
  else body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><div class="body">${saetze(f.b)}</div>`;
  const nx = nextIn(m, l);
  storyEl.innerHTML = `<p class="sr-only" aria-live="polite">${last ? "Lektion geschafft" : `Karte ${i + 1} von ${F.length - 1}`}</p><div class="segs" aria-hidden="true">${F.slice(0, -1).map((_, n) => `<i class="${n < i || last ? "on" : ""}"><b style="${n === i ? "width:100%" : ""}"></b></i>`).join("")}</div>
  <div class="shead"><div class="av">${ic(m.id)}</div><div class="n">${esc(l.titel)}<small>${esc(m.name)}</small></div>${sayBtn()}<button class="x" aria-label="Schließen">${ic("x")}</button></div>
  <div class="stage">${f.k !== "check" && !last ? '<div class="tapzone l"></div><div class="tapzone r"></div>' : ""}<div class="slide ${f.k === "beispiel" || f.k === "merke" ? "note" : ""}">${body}</div></div>
  <div class="snav">${i > 0 ? `<button class="btn prev" aria-label="Zurück">${ic("left")}</button>` : ""}${last ? (nx ? `<a class="btn" data-rep href="#lektion-${m.id}-${nx.id}">Nächste Lektion ${ic("right")}</a>` : `<a class="btn" data-rep href="#quiz-${m.id}">Zum Modul-Quiz ${ic("right")}</a>`) : (f.k === "check" && !(i in answered) ? `<button class="btn next" aria-disabled="true">Antwort wählen</button>` : `<button class="btn next">Weiter ${ic("right")}</button>`)}</div>`;
  if (last && !S.lek[l.id]) { S.lek[l.id] = true; save(); buzz([20, 40, 20]); }
  const mehr = () => { const rest = $$(".rv.h", storyEl).length, nb = $(".next", storyEl); if (nb && nb.getAttribute("aria-disabled")) return; if (nb) nb.innerHTML = rest ? `Weiter lesen <span class="dots" aria-hidden="true">${"●".repeat(rest)}</span>` : `Weiter ${ic("right")}`; }; mehr(); draw.mehr = mehr;
  $(".x", storyEl).onclick = closeS;
  $(".next", storyEl)?.addEventListener("click", () => go(1));
  $(".prev", storyEl)?.addEventListener("click", () => go(-1));
  const viaTerm = e => { e.currentTarget.style.pointerEvents = "none"; const t = document.elementFromPoint(e.clientX, e.clientY); e.currentTarget.style.pointerEvents = ""; const tb = t?.closest(".term"); if (tb) { termSheet(+tb.dataset.g); return true; } };
  $(".tapzone.l", storyEl)?.addEventListener("click", e => viaTerm(e) || go(-1));
  $(".tapzone.r", storyEl)?.addEventListener("click", e => viaTerm(e) || go(1));
  linkTerms($(".slide", storyEl), seenDe);
  fitSlide(); requestAnimationFrame(fitSlide); if (draw.first !== false) watchFit();
  if (draw.first !== false) { draw.first = false; const sl = $(".slide", storyEl); sl.tabIndex = -1; sl.focus({ preventScroll: true }); } else if (!storyEl.contains(document.activeElement)) ($(".next", storyEl) || $(".x", storyEl)).focus({ preventScroll: true });
  $$(".opt", storyEl).forEach(b => b.onclick = () => { if (i in answered) return; answered[i] = +b.dataset.k; const p = POOL.find(p => p.q === f.q); if (p) grade(p.key, answered[i] === f.c); save(); draw(); });
 }
 draw();
}
// Kein Scrollen in Storys: Schrift so lange verkleinern, bis die Karte in die Bühne passt.
// Karte so verkleinern, dass nichts abgeschnitten wird. Läuft erneut, wenn Schrift
// nachgeladen ist oder sich die Größe ändert (iOS: Adressleiste, Drehen, Schriftgröße).
function fitSlide() {
 if (!storyEl) return;
 const stage = $(".stage", storyEl), slide = $(".slide", storyEl); if (!stage || !slide) return;
 const avail = stage.clientHeight - 8; if (avail <= 0) return;
 const fits = () => slide.scrollHeight <= avail && slide.scrollHeight <= slide.clientHeight + 1;
 slide.style.setProperty("--k", 1); let lo = Math.max(.5, 14 / parseFloat(getComputedStyle(slide).fontSize)), hi = 1;
 if (fits()) return;
 for (let i = 0; i < 8; i++) { const mid = (lo + hi) / 2; slide.style.setProperty("--k", mid.toFixed(3)); if (fits()) lo = mid; else hi = mid; }
 slide.style.setProperty("--k", lo.toFixed(3));
}
let fitRO = null;
function watchFit() {
 fitRO?.disconnect();
 const stage = storyEl && $(".stage", storyEl); if (!stage) return;
 if ("ResizeObserver" in window) { fitRO = new ResizeObserver(() => requestAnimationFrame(fitSlide)); fitRO.observe(stage); }
 document.fonts?.ready.then(() => requestAnimationFrame(fitSlide));
}
addEventListener("resize", () => storyEl && fitSlide());
function nextIn(m, l) { const k = m.lektionen.indexOf(l); return m.lektionen[k + 1] || null; }

/* ---------- Quiz ---------- */
// Richtig/falsch nicht nur über Farbe: Symbol + Text für Screenreader
function markOpt(x, st) { x.classList.add(st); x.disabled = st === "dim"; const m = $(".mark", x); if (m) m.textContent = st === "ok" ? "✓" : st === "bad" ? "✗" : ""; if (st !== "dim") x.setAttribute("aria-label", (st === "ok" ? "Richtige Antwort: " : "Deine Antwort, falsch: ") + $(".ot", x)?.textContent); }
const FREI_POOL = () => POOL.filter(q => q.t === "frei" && !isZusatz(q));
const isZusatz = q => !!modById(q.m)?.zusatz;
const MC_POOL = () => POOL.filter(q => q.t !== "frei" && !isZusatz(q));
const freiMatch = (q, txt) => q.muster.map(([, kw]) => { try { return new RegExp(kw, "i").test(txt); } catch (e) { return false; } });
function chip(q) { const m = modById(q.m); return `<span class="chip mchip" style="--m:${m.farbe}">${m.kurz}${q.t === "frei" ? " · Freitext" : ""}</span>`; }
/* ---------- Fachbegriffe antippbar (Glossar) + Übersetzung beim ersten Auftreten ---------- */
const TERM_RX = (() => {
 const v = [];
 GLOSSAR.forEach((g, i) => [g.w, ...(g.syn || [])].forEach(t => { if (t && t.length >= 2) v.push([t, i]); }));
 v.sort((a, b) => b[0].length - a[0].length);
 const map = new Map(v.map(([t, i]) => [t.toLowerCase(), i]));
 const rx = new RegExp(`(?<![\\p{L}\\p{N}_-])(${v.map(([t]) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?![\\p{L}\\p{N}_])`, "giu");
 return { rx, map };
})();
// Abkürzungen nur in exakter Schreibweise (sonst „pr“ in Wörtern usw.)
const termIdx = t => { const i = TERM_RX.map.get(t.toLowerCase()); if (i === undefined) return; const g = GLOSSAR[i], all = [g.w, ...(g.syn || [])]; if (t.length <= 4 && !all.includes(t)) return; return i; };
function linkTerms(root, seenDe) {
 if (!root) return;
 const used = new Set(), w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest("button,a,.term,.kind,.chip,textarea,.mark,.l") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
 const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
 for (const node of nodes) {
  const txt = node.nodeValue; TERM_RX.rx.lastIndex = 0; let m, last = 0, frag = null;
  while ((m = TERM_RX.rx.exec(txt))) {
   const i = termIdx(m[0]); if (i === undefined || used.has(i)) continue;
   used.add(i); frag = frag || document.createDocumentFragment();
   frag.append(txt.slice(last, m.index));
   const b = document.createElement("span"); b.className = "term"; b.setAttribute("role", "button"); b.tabIndex = 0; b.dataset.g = i; b.textContent = m[0]; frag.append(b);
   const g = GLOSSAR[i];
   const kurz = g.de && g.de.length <= 32 && !/[()]/.test(g.de) ? g.de : g.de?.split(/\s[–(]/)[0];
   const after = (node.parentElement.tagName === "STRONG" && m.index + m[0].length >= txt.length ? node.parentElement.nextSibling?.textContent : txt.slice(m.index + m[0].length)) || "";
   const schonErklaert = /^(-|\s*(\(|ist\b|heißt\b|sind\b|bedeutet\b|:|–))/i.test(after) || !!node.parentElement.closest("h1,h2,h3");
   const gleicheWurzel = kurz && (kurz.toLowerCase().includes(m[0].toLowerCase().slice(0, 7)) || kurz.toLowerCase().startsWith(m[0].toLowerCase().split(/[- ]/)[0]));
   if (kurz && !schonErklaert && !gleicheWurzel && kurz.length <= 32 && seenDe && !seenDe.has(i) && kurz.toLowerCase() !== m[0].toLowerCase() && !txt.toLowerCase().includes(kurz.toLowerCase())) { seenDe.add(i); const d = document.createElement("span"); d.className = "de"; d.textContent = ` (${kurz})`; frag.append(d); }
   last = m.index + m[0].length;
  }
  if (frag) { frag.append(txt.slice(last)); node.replaceWith(frag); }
 }
}
function termSheet(i) {
 const g = GLOSSAR[i]; if (!g) return; $("#tsheet")?.remove();
 const m = modById(g.m) || MODULE[0];
 const el = document.createElement("div"); el.id = "tsheet"; el.className = "tsheet"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "ts-h");
 el.innerHTML = `<div class="ts-in" style="--m:${m.farbe}"><div class="ts-grip" aria-hidden="true"></div><h2 id="ts-h">${esc(g.w)}</h2>${g.de ? `<p class="ts-de">${esc(g.de)}</p>` : ""}<p>${esc(g.d)}</p><div class="row" style="margin-top:14px">${sayBtn()}<button type="button" class="btn" id="ts-ok" style="flex:1">Verstanden</button></div></div>`;
 document.body.appendChild(el);
 const opener = document.activeElement;
 const close = () => { el.remove(); opener?.focus?.({ preventScroll: true }); };
 el.onclick = e => { if (e.target === el) close(); };
 $("#ts-ok", el).onclick = close; $("#ts-ok", el).focus({ preventScroll: true });
 $("[data-say]", el)?.addEventListener("click", e => { e.stopPropagation(); say(g.w + ". " + (g.de ? g.de + ". " : "") + g.d); }, true);
 el.addEventListener("keydown", e => { if (e.key === "Escape") { e.stopPropagation(); close(); } });
 let y0 = null; const box = $(".ts-in", el);
 box.addEventListener("touchstart", e => { y0 = e.touches[0].clientY; e.stopPropagation(); }, { passive: true });
 box.addEventListener("touchmove", e => { if (y0 === null) return; const dy = Math.max(0, e.touches[0].clientY - y0); box.style.transform = `translateY(${dy}px)`; e.stopPropagation(); }, { passive: true });
 box.addEventListener("touchend", e => { const dy = e.changedTouches[0].clientY - (y0 ?? 0); y0 = null; e.stopPropagation(); if (dy > 80) close(); else box.style.transform = ""; });
}
document.addEventListener("click", e => { if (e.target.closest("[data-hilfe]")) { S.set.hilfeGefragt = 1; save(); } if (e.target.closest("[data-restore]")) { S.set.restoreGesehen = 1; save(); } });
document.addEventListener("keydown", e => { const t = e.target.closest?.(".term"); if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); termSheet(+t.dataset.g); } });
document.addEventListener("click", e => { const t = e.target.closest(".term"); if (!t) return; e.stopPropagation(); termSheet(+t.dataset.g); }, true);

/* ---------- Mehrfachantworten: c ist dann ein Array ---------- */
const isMulti = q => Array.isArray(q.c);
const istRichtig = (q, ans) => isMulti(q) ? Array.isArray(ans) && ans.length === q.c.length && q.c.every(k => ans.includes(k)) : ans === q.c;
const richtigText = q => isMulti(q) ? q.c.map(k => q.a[k]).join(" · ") : q.a[q.c];
const MULTI_HINT = `<p class="multi-hint">${"☑︎"} Mehrere Antworten richtig – wähle alle passenden.</p>`;

/* ---------- Vorlesen (Sprachausgabe des Geräts) ---------- */
const canSay = "speechSynthesis" in window;
function sayBtn() { return canSay ? `<button type="button" class="iconbtn say" data-say aria-label="Vorlesen" title="Vorlesen">${ic("speaker")}</button>` : ""; }
function say(text) {
 if (!canSay) return; const ss = speechSynthesis;
 if (ss.speaking) { ss.cancel(); return; }
 const u = new SpeechSynthesisUtterance(text.replace(/\s+/g, " ").trim()); u.lang = "de-DE"; u.rate = .95;
 const v = ss.getVoices().find(v => v.lang?.startsWith("de")); if (v) u.voice = v;
 ss.speak(u);
}
document.addEventListener("click", e => {
 const b = e.target.closest("[data-say]"); if (!b) return;
 const box = b.closest(".qcard") || b.closest(".story");
 const src = box?.classList.contains("story") ? $(".slide", box) : box;
 if (!src) return;
 const c = src.cloneNode(true); c.querySelectorAll(".rv.h").forEach(x => x.remove()); c.querySelectorAll(".chip,.kind,[data-say],.l,.mark,.small,textarea,.fbx,.sr-only").forEach(x => x.remove());
 c.querySelectorAll(".opt").forEach((o, n) => o.prepend("Antwort " + LET[n] + ": ")); c.querySelectorAll("li,.opt,h2,p").forEach(x => x.append(/[.!?:]\s*$/.test(x.textContent) ? " " : ". "));
 say(c.textContent);
});
addEventListener("hashchange", () => canSay && speechSynthesis.cancel());
function quizCard(q, meta) {
 if (q.t === "frei") return { html: `<div class="qcard"><div class="qtop">${chip(q)}<span class="small muted">${meta}</span>${sayBtn()}</div><p class="qtext" id="qt">${esc(q.q)}</p><label class="sr-only" for="ftxt">Deine Antwort</label><textarea id="ftxt" placeholder="Deine Antwort in Stichpunkten …" style="min-height:140px"></textarea><div class="fbx" role="status" aria-live="polite"></div></div>` };
 const order = shuf(q.a.map((_, k) => k));
 return { order, html: `<div class="qcard"><div class="qtop">${chip(q)}<span class="small muted">${meta}</span>${sayBtn()}</div><p class="qtext" id="qt">${esc(q.q)}</p>${isMulti(q) ? MULTI_HINT : ""}<div role="group" aria-labelledby="qt">${order.map((k, n) => `<button type="button" class="opt" data-k="${k}" ${isMulti(q) ? 'aria-pressed="false"' : ""}><span class="l">${LET[n]}</span><span class="ot">${esc(q.a[k])}</span><span class="mark" aria-hidden="true"></span></button>`).join("")}</div>${isMulti(q) ? `<button type="button" class="btn block" id="chk" style="margin-top:6px" disabled>Antwort prüfen</button>` : ""}<div class="fbx" role="status" aria-live="polite"></div></div>` };
}
function musterHtml(q, txt) {
 const hit = freiMatch(q, txt || ""), n = hit.filter(Boolean).length;
 return `<div class="fb muster-box" style="margin-top:12px"><b>Musterlösung</b><span class="small">Gefordert: mindestens ${q.min} Punkt${q.min > 1 ? "e" : ""}. ${txt ? `In deiner Antwort erkannt: ${n}.` : ""}</span><ul class="muster">${q.muster.map(([t], i) => `<li class="${hit[i] ? "hit" : ""}">${ic(hit[i] ? "check" : "right", 'stroke-width="3"')}<span>${esc(t)}</span></li>`).join("")}</ul>${q.bsp ? `<details class="bsp"><summary>Beispiel für eine volle Antwort</summary><p class="small" style="white-space:pre-line;margin:6px 0 0">${esc(q.bsp)}</p></details>` : ""}<span class="small muted">Die Erkennung ist nur eine Hilfe – entscheide selbst, ob deine Antwort passt.</span></div>`;
}
function viewQuiz(id) {
 const m = modById(id), isMini = id === "mini", isMix = id === "mix" || isMini, isFrei = id === "frei", isWdh = id === "ueben" || id === "wdh" || id === "fehler", isErr = false; // isErr: Altlast, Fehlerkiste ist in „Üben“ aufgegangen
 const byKeys = ks => shuf(POOL.filter(q => ks.includes(q.key)));
 let list = isMini ? [...byKeys(dueKeys()).filter(q => q.t !== "frei"), ...shuf(MC_POOL().filter(q => !(q.key in S.q))), ...shuf(MC_POOL())].filter((q, i, a) => a.indexOf(q) === i).slice(0, 5) : isWdh ? [...byKeys(errorKeys()), ...byKeys(dueKeys())].filter((q, i, a) => a.indexOf(q) === i).slice(0, 10) : isErr ? byKeys(errorKeys()) : isMix ? shuf(MC_POOL()).slice(0, 10) : isFrei ? shuf(FREI_POOL()).sort((a, b) => (S.q[a.key] ? 1 : 0) - (S.q[b.key] ? 1 : 0)).slice(0, 8) : shuf(modPool(id)).sort((a, b) => (S.q[a.key] ? 1 : 0) - (S.q[b.key] ? 1 : 0));
 if (!m && !isMix && !isFrei && !isWdh && !isErr) return viewStart();
 if (!list.length) { page("start", `<a class="back" href="#start">${ic("left")} Start</a><div class="qcard result"><h2>Gerade nichts zu üben</h2><p class="muted">Keine offenen Fehler und keine fälligen Wiederholungen. Lerne mit der nächsten Lektion weiter oder mach ein Schnell-Quiz.</p><div class="row" style="justify-content:center;margin-top:16px"><a class="btn" href="#mini">${ic("play")} Weiterlernen</a><a class="btn ghost" href="#quiz-mix">Schnell-Quiz</a></div></div>`); return; }
 const total = list.length; let queue = list.slice(), first = 0, miss = new Set(), n = 0;
 const backHref = m ? "#modul-" + id : isWdh || isMini ? "#start" : "#pruefung", tab = m || isWdh || isMini ? "start" : "pruefung";
 next();
 function next() {
  if (!queue.length) return done();
  const q = queue.shift(); n++;
  const { html } = quizCard(q, miss.has(q) ? "Wiederholung" : `${Math.min(n, total)} / ${total}`);
  page(tab, `<h1 class="sr-only">${isFrei ? "Freitext üben" : isWdh ? "Üben" : m ? m.name + " – Quiz" : "Schnell-Quiz"}</h1><div class="row qhead"><a class="back" href="${backHref}" style="margin:0">${ic("x")} Beenden</a><span class="chip">${isFrei ? "Freitext üben" : isWdh ? "Üben · Fehler & Wiederholung" : m ? "Modul-Quiz" : isMini ? "Kurz-Quiz" : "Schnell-Quiz"}</span></div>${isFrei ? `<details class="card tippbox" style="margin:0 0 14px"><summary><b>So schreibst du Freitext-Antworten</b></summary><ol class="small" style="margin:8px 0 0;padding-left:20px"><li><b>Benennen:</b> Problem oder Fachbegriff nennen (z. B. „Vanity Metrics“, „Recht am eigenen Bild“).</li><li><b>Begründen:</b> immer das Warum – „weil die Zielgruppe …“.</li><li><b>Konkret werden:</b> wie du es umsetzt, mit Beispiel.</li></ol><p class="small" style="margin:8px 0 0">Stichpunkte statt langer Fließtexte. Genau so viele Punkte nennen, wie gefragt. Bei Unsicherheit das Prinzip beschreiben – dafür gibt es oft Teilpunkte. Im Test wirst du gesiezt – hier üben wir genau so.</p></details>` : ""}<div class="bar dark" style="margin:0 0 16px" aria-hidden="true"><i style="width:${(1 - (queue.length + 1) / (total + miss.size)) * 100}%"></i></div>${html}`);
  linkTerms($(".qtext")); { const qt = $("#qt"); if (qt && n > 1) { qt.tabIndex = -1; qt.focus({ preventScroll: true }); } }
  const rate = (ok, requeue = !ok) => { grade(q.key, ok); if (ok) { if (!miss.has(q)) first++; } else if (requeue && !miss.has(q)) { miss.add(q); queue.push(q); } else miss.add(q); save(); };
  const weiter = () => { $(".fbx").insertAdjacentHTML("afterend", `<button type="button" class="btn block" style="margin-top:14px" id="nx">Weiter ${ic("right")}</button>`); $("#nx").onclick = next; const calm = matchMedia("(prefers-reduced-motion: reduce)").matches || S.set?.calm; $(".fbx").scrollIntoView({ block: "start", behavior: calm ? "auto" : "smooth" }); $("#nx").focus({ preventScroll: true }); };
  if (q.t === "frei") {
   // Knopf bleibt stehen (nicht ersetzen, kein blur) – die Lösung erscheint darunter
   $(".fbx").insertAdjacentHTML("beforebegin", `<button type="button" class="btn ghost block" style="margin-top:12px" id="show">Ohne eigene Antwort zur Lösung</button>`);
   $("#ftxt").placeholder = Array.from({ length: q.min }, (_, k) => `${k + 1}. …`).join("\n");
   $("#ftxt").addEventListener("input", () => { const b = $("#show"); if (b && !b.disabled) b.textContent = $("#ftxt").value.trim() ? "Musterlösung anzeigen" : "Ohne eigene Antwort zur Lösung"; });
   $("#show").onclick = () => {
    const btn = $("#show"); if (btn.disabled) return;
    btn.disabled = true; btn.textContent = "Musterlösung siehe unten";
    const txt = $("#ftxt").value; $("#ftxt").readOnly = true;
    $(".fbx").innerHTML = musterHtml(q, txt) + `${(() => { const n = freiMatch(q, txt).filter(Boolean).length, vs = !txt.trim() ? 0 : n >= q.min ? 2 : n >= Math.ceil(q.min / 2) ? 1 : 0; return `<p class="rate-q" style="font-weight:700;margin:14px 0 8px">Wie gut war deine Antwort? <span class="small muted" style="font-weight:500">Vorschlag nach Stichwörtern: ${["Daneben", "Teilweise", "Richtig"][vs]}</span></p><div class="row rate-row" role="group" aria-label="Selbstbewertung">${["Daneben", "Teilweise", "Richtig"].map((t, k) => `<button type="button" class="btn ghost ${k === vs ? "sel" : ""}" data-r="${k}" style="flex:1">${t}</button>`).join("")}</div>`; })()}`;
    $$("[data-r]").forEach(b => b.onclick = () => { const r = b.dataset.r; rate(r === "2", r === "0"); $(".rate-row")?.remove(); $(".rate-q")?.remove(); toast(r === "2" ? "Stark!" : r === "1" ? "Gut – kommt in der Wiederholung wieder" : "Kommt gleich nochmal dran"); weiter(); });
   };
   return;
  }
  if (isMulti(q)) {
   const sel = new Set();
   $$(".opt").forEach(b => b.onclick = () => { if ($(".fbx").innerHTML) return; const k = +b.dataset.k; sel.has(k) ? sel.delete(k) : sel.add(k); b.classList.toggle("sel", sel.has(k)); b.setAttribute("aria-pressed", sel.has(k)); $("#chk").disabled = !sel.size; });
   $("#chk").onclick = () => {
    if ($(".fbx").innerHTML) return; const ans = [...sel], ok = istRichtig(q, ans);
    $$(".opt").forEach(x => { x.removeAttribute("aria-pressed"); const k = +x.dataset.k, soll = q.c.includes(k), ist = sel.has(k); x.classList.remove("sel"); markOpt(x, soll ? "ok" : ist ? "bad" : "dim"); if (soll && !ist) x.classList.add("missed"); });
    $("#chk").remove(); rate(ok);
    $(".fbx").innerHTML = `<div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "Richtig – alle gefunden!" : "Nicht ganz – grün sind alle richtigen Antworten."}</b>${esc(q.e)}</div>`;
    weiter();
   };
   return;
  }
  $$(".opt").forEach(b => b.onclick = () => {
   if ($(".fbx").innerHTML) return;
   const k = +b.dataset.k, ok = k === q.c;
   $$(".opt").forEach(x => markOpt(x, +x.dataset.k === q.c ? "ok" : +x.dataset.k === k ? "bad" : "dim"));
   rate(ok);
   $(".fbx").innerHTML = `<div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "Richtig!" : "Nicht ganz – die Frage kommt gleich nochmal."}</b>${esc(q.e)}</div>`; linkTerms($(".fbx .fb"));
   weiter();
  });
 }
 function done() {
  const p = first / total;
  page(tab, `<div class="qcard result"><div class="big-ring">${ringSvg(p, 150, 12, "var(--surface-2)")}<b>${Math.round(p * 100)}%</b></div><h2>${p >= .8 ? "Stark!" : p >= .5 ? "Gut gemacht!" : "Dranbleiben!"}</h2><p class="muted">${first} von ${total} Fragen beim ersten Versuch richtig.</p><div class="row" style="justify-content:center;margin-top:18px"><button class="btn ghost-w" id="again">Nochmal</button><a class="btn" href="#mini">${ic("play")} Weiterlernen</a></div>${miss.size ? `<a class="btn ghost-w block" href="#quiz-ueben" style="margin-top:10px">${ic("repeat")} ${miss.size} Fehler gleich üben</a>` : ""}</div>`);
  $("#again").onclick = () => viewQuiz(id);
 }
}

/* ---------- Prüfung ----------
   Probetest im bekannten Format (30 Fragen, MC + Freitext, 60 Min.). Unbekannt und daher Annahmen:
   Verhältnis MC/Freitext, Bestehensgrenze, Navigation. Der Test wird laufend gespeichert (S.run). */
const TEST_N = 30, TEST_FR = 5, TEST_MIN = 60, FR_W = 2; // Freitext: 5 Fragen à 2 Punkte (Annahme), MC/Mehrfach à 1 Punkt (alle richtigen nötig)
const byKey = new Map(POOL.map(q => [q.key, q]));
const examPool = () => POOL.filter(q => !modById(q.m)?.zusatz);
function testScore(r) {
 const qs = r.ids.map(k => byKey.get(k)).filter(Boolean);
 let mc = 0, fr = 0, frMax = 0, frRated = 0;
 qs.forEach((q, i) => { if (q.t === "frei") { frMax++; if (i in (r.rated || {})) { frRated++; fr += r.rated[i]; } } else if (istRichtig(q, r.ans[i])) mc++; });
 const mcN = qs.length - frMax, pts = mc + fr * FR_W, max = mcN + frMax * FR_W;
 return { n: qs.length, mc, mcN, fr, frMax, pts, max, allRated: frRated === frMax, pct: Math.round(pts / Math.max(1, max) * 100) };
}
function viewPruefung() {
 const best = S.tests.length ? Math.max(...S.tests) : null, last = S.tests.length ? S.tests[S.tests.length - 1] : null;
 const open = S.lastRun && !S.lastRun.saved;
 page("pruefung", `${head("Prüfung")}<h1 class="sr-only">Prüfung</h1>
 ${S.run ? `<a class="cont" href="#test" style="margin-bottom:12px"><div class="thumb" style="background:var(--grad-strong)">${ic("clock")}</div><div><b style="font-size:1rem">Probetest fortsetzen</b><div class="small muted">${Object.keys(S.run.ans).length} von ${S.run.ids.length} beantwortet${S.run.end ? ` · noch ${Math.max(0, Math.ceil((S.run.end - Date.now()) / 60000))} Min.` : ""}</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""}
 ${open ? `<a class="cont" href="#auswertung" style="margin-bottom:12px"><div class="thumb" style="background:linear-gradient(135deg,#a61e4d,#6741d9)">${ic("pen")}</div><div><b style="font-size:1rem">Auswertung abschließen</b><div class="small muted">Freitexte deines letzten Probetests bewerten</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""}
 <section class="hero">
  <div class="kicker">Probetest</div>
  <h1>30 Fragen · 60 Minuten</h1>
  <p style="opacity:.92">Multiple Choice und Freitext wie im Abschlusstest. Bestanden ab ${PASS} %, dein Ziel: ${ZIEL} %.</p>
  ${best !== null ? `<div class="hero-stat"><div><b>${last} %</b><span>Letzter Test</span></div><div><b>${best} %</b><span>Bester Test</span></div><div><b>${S.tests.length}</b><span>Tests</span></div></div>` : ""}
  <div class="row"><a class="btn white" href="#test">${ic("exam")} ${S.run ? "Fortsetzen" : "Probetest starten"}</a></div>
 </section>
 <a class="cont" href="#quiz-frei" style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#a61e4d,#6741d9)">${ic("pen")}</div><div><b style="font-size:1rem">Freitext üben</b><div class="small muted">8 offene Fragen mit Musterlösung</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>
 <a class="cont" href="#quiz-mix" style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#c2410c,#c92a2a)">${ic("shuffle")}</div><div><b style="font-size:1rem">Schnell-Quiz</b><div class="small muted">10 gemischte Fragen</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>
 ${S.tests.length > 1 ? `<div class="sec-h"><h2>Verlauf deiner Probetests</h2></div><div class="card"><div class="row" style="align-items:flex-end;gap:8px;height:130px" role="img" aria-label="Ergebnisse der letzten Probetests: ${S.tests.slice(-10).join(", ")} Prozent">${S.tests.slice(-10).map(t => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><span class="small muted">${t}</span><div style="width:100%;max-width:36px;height:${Math.max(6, t)}px;border-radius:8px;background:${t >= PASS ? "var(--grad-strong)" : "var(--bad-soft)"}"></div></div>`).join("")}</div></div>` : ""}
 <div class="sec-h"><h2>Was ist sicher, was angenommen?</h2></div>
 <div class="card small"><p style="margin:0 0 6px"><b>Sicher:</b> 30 Fragen, Multiple Choice und Freitext, 60 Minuten, online beim IHK-Bildungszentrum Dresden.</p><p style="margin:0"><b>Angenommen:</b> bestanden ab ${PASS} % (bei IHK-Zertifikatstests üblich), 5 Freitext-Fragen mit doppeltem Gewicht, teils mehrere richtige Antworten. Deine eigene Freitext-Bewertung fällt meist milder aus als die der Prüfer – deshalb das Ziel ${ZIEL} %. <a href="#lehrgang" style="text-decoration:underline">Mehr unter Lehrgang</a></p></div>`, { compact: true });
 foldSections($("#app"));
}
let testTimer = null;
function viewTest() {
 clearInterval(testTimer);
 if (S.run) return runTest();
 const nFr = Math.min(TEST_FR, FREI_POOL().filter(q => !modById(q.m)?.zusatz).length), nMC = TEST_N - nFr;
 page("pruefung", `<a class="back" href="#pruefung">${ic("left")} Prüfung</a><section class="hero"><div class="kicker">Probetest</div><h1>${TEST_N} Fragen · ${TEST_MIN} Minuten</h1><p>Aufgebaut wie der bekannte Abschlusstest: Multiple Choice (auch mit mehreren richtigen Antworten) und Freitext aus allen sechs Themen. Die App nimmt ${nFr} Freitext-Fragen à ${FR_W} Punkte an – offiziell veröffentlicht ist die Verteilung nicht. Du kannst vor- und zurückblättern, Fragen markieren und Antworten ändern. Bestanden ab ${PASS} % (Annahme).</p>
  <details class="tstrat"><summary>So gehst du vor</summary><ol><li>Erst alles beantworten, was du sicher weißt.</li><li>Schwierige Fragen <b>markieren</b> und überspringen – später zurückkommen.</li><li>Freitext in Stichpunkten: benennen, begründen, konkret werden.</li><li>Multiple Choice: etwa 1 Minute pro Frage. Freitext: 4–5 Minuten, in Stichpunkten. Freitexte nicht ans Ende schieben – sie zählen doppelt (Annahme).</li><li>Zum Schluss die <b>Übersicht</b> prüfen: Ist noch etwas offen?</li></ol></details>
  <label class="check"><input type="checkbox" id="notime"> Ohne Zeitlimit üben</label>
  <div class="row"><button class="btn white" id="go">${ic("clock")} Test starten</button></div></section>`);
 $("#go").onclick = () => {
  const pool = examPool();
  // gleichmäßig über die sechs Themen: MC je Modul gleich viele, Freitexte aus verschiedenen Modulen
  const mods = KERN().map(m => m.id), pick = (a, n) => shuf(a).slice(0, n), mcAll = pool.filter(q => q.t !== "frei");
  let mc = mods.flatMap(id => pick(mcAll.filter(q => q.m === id), Math.floor(nMC / mods.length)));
  mc = [...mc, ...pick(mcAll.filter(q => !mc.includes(q)), nMC - mc.length)];
  let fr = shuf(mods).slice(0, nFr).map(id => pick(pool.filter(q => q.t === "frei" && q.m === id), 1)[0]).filter(Boolean);
  fr = [...fr, ...pick(pool.filter(q => q.t === "frei" && !fr.includes(q)), nFr - fr.length)];
  const ids = shuf([...mc, ...fr]).map(q => q.key);
  S.run = { ids, ans: {}, mark: {}, p: 0, start: Date.now(), end: $("#notime").checked ? null : Date.now() + TEST_MIN * 60000 };
  save(); runTest();
 };
}
// Ruhige Zeitanzeige: Balken + gerundete Minuten statt tickender Sekunden
function calmClock(ms, r) { const tot = r.end - r.start, m = Math.ceil(ms / 60000); return `<i class="tb" aria-hidden="true"><b style="width:${Math.max(0, ms / tot * 100)}%"></b></i><span>${m > 1 ? `noch ca. ${m} Min.` : "letzte Minute"}</span>`; }
function runTest(confirmMode) {
 const r = S.run; if (!r) return viewTest();
 clearInterval(testTimer);
 const qs = r.ids.map(k => byKey.get(k));
 const left = () => r.end ? Math.max(0, r.end - Date.now()) : null;
 const fmt = ms => `${Math.floor(ms / 60000)}:${String(Math.floor(ms / 1000) % 60).padStart(2, "0")}`;
 if (r.end && left() <= 0) return finishTest(true);
 const tick = () => { const ms = left(), el = $("#timer"); if (ms === null || !el) return; if (S.set?.clock === "genau") el.textContent = fmt(ms); else { el.innerHTML = calmClock(ms, r); } el.classList.toggle("low", ms < 5 * 60000); if (ms < 5 * 60000 && !r.warned) { r.warned = true; save(); toast("Noch 5 Minuten"); } if (ms <= 0) { clearInterval(testTimer); finishTest(true); } };
 if (r.end) testTimer = setInterval(tick, 1000);
 const answered = i => (i in r.ans) && (qs[i].t === "frei" ? String(r.ans[i]).trim() !== "" : !Array.isArray(r.ans[i]) || r.ans[i].length > 0);
 if (r.view === "overview" || confirmMode) return overview(confirmMode);
 const p = r.p, q = qs[p];
 const order = q.t === "frei" ? null : (r.order = r.order || {}, r.order[p] = r.order[p] || shuf(q.a.map((_, k) => k)));
 page("pruefung", `<h1 class="sr-only">Probetest, Frage ${p + 1} von ${qs.length}</h1>
  <div class="row testbar"><button class="back" id="abort" style="margin:0">${ic("x")} Abbrechen</button><button class="back" id="ov" style="margin:0">Übersicht</button>${r.end ? `<span class="timer ${S.set?.clock === "genau" ? "" : "calm"}" id="timer" role="timer" aria-label="Verbleibende Zeit">${S.set?.clock === "genau" ? fmt(left()) : calmClock(left(), r)}</span>` : `<span class="chip">ohne Zeitlimit</span>`}</div>
  <div class="bar dark" style="margin:0 0 16px" aria-hidden="true"><i style="width:${qs.filter((_, i) => answered(i)).length / qs.length * 100}%"></i></div>
  <div class="qcard"><div class="qtop">${chip(q)}<span class="small muted">Frage ${p + 1} / ${qs.length}${r.mark[p] ? " · markiert" : ""}</span></div><p class="qtext" id="qt">${esc(q.q)}</p>
  ${q.t === "frei" ? `<label class="sr-only" for="ftxt">Deine Antwort</label><textarea id="ftxt" placeholder="Deine Antwort in Stichpunkten …" style="min-height:160px">${esc(r.ans[p] || "")}</textarea>`
   : isMulti(q) ? `${MULTI_HINT}<div role="group" aria-labelledby="qt">${order.map((k, n) => { const on = (r.ans[p] || []).includes(k); return `<button type="button" role="checkbox" aria-checked="${on}" class="opt ${on ? "sel" : ""}" data-k="${k}"><span class="l">${LET[n]}</span><span>${esc(q.a[k])}</span></button>`; }).join("")}</div>`
   : `<div role="radiogroup" aria-labelledby="qt">${order.map((k, n) => `<button type="button" role="radio" aria-checked="${r.ans[p] === k}" class="opt ${r.ans[p] === k ? "sel" : ""}" data-k="${k}"><span class="l">${LET[n]}</span><span>${esc(q.a[k])}</span></button>`).join("")}</div>`}
  </div>
  <div class="row testnav"><button class="btn ghost" id="prev" ${p === 0 ? "disabled" : ""} aria-label="Vorherige Frage">${ic("left")}</button><button class="btn ghost" id="mark" aria-pressed="${!!r.mark[p]}">${r.mark[p] ? "Markiert" : "Markieren"}</button>${p < qs.length - 1 ? `<button class="btn" id="next" style="flex:1">Weiter ${ic("right")}</button>` : `<button class="btn" id="fin" style="flex:1">Abgeben</button>`}</div>`);
 const go = np => { r.p = Math.max(0, Math.min(qs.length - 1, np)); save(); runTest(); };
 if (q.t === "frei") { const ta = $("#ftxt"); let t; ta.oninput = () => { r.ans[p] = ta.value; clearTimeout(t); t = setTimeout(save, 400); $(".bar i").style.width = qs.filter((_, i) => answered(i)).length / qs.length * 100 + "%"; }; ta.onblur = save; }
 else if (isMulti(q)) $$(".opt").forEach(b => b.onclick = () => { const k = +b.dataset.k, a = new Set(r.ans[p] || []); a.has(k) ? a.delete(k) : a.add(k); r.ans[p] = [...a].sort(); save(); const on = a.has(k); b.classList.toggle("sel", on); b.setAttribute("aria-checked", on); $(".bar i").style.width = qs.filter((_, i) => answered(i)).length / qs.length * 100 + "%"; });
 else $$(".opt").forEach(b => b.onclick = () => { r.ans[p] = +b.dataset.k; save(); $$(".opt").forEach(x => { const on = x === b; x.classList.toggle("sel", on); x.setAttribute("aria-checked", on); }); $(".bar i").style.width = qs.filter((_, i) => answered(i)).length / qs.length * 100 + "%"; });
 $("#prev").onclick = () => go(p - 1);
 $("#next")?.addEventListener("click", () => go(p + 1));
 $("#fin")?.addEventListener("click", () => { r.view = "overview"; save(); runTest(true); });
 $("#mark").onclick = () => { r.mark[p] = !r.mark[p]; if (!r.mark[p]) delete r.mark[p]; save(); runTest(); };
 $("#ov").onclick = () => { r.view = "overview"; save(); runTest(); };
 $("#abort").onclick = () => confirmBox("Probetest abbrechen?", "Deine Antworten werden verworfen.", "Test abbrechen", () => { S.run = null; save(); clearInterval(testTimer); location.replace("#pruefung"); });
 function overview(sure) {
  const open = qs.map((_, i) => i).filter(i => !answered(i));
  page("pruefung", `<div class="row testbar"><button class="back" id="back" style="margin:0">${ic("left")} Zur Frage ${r.p + 1}</button>${r.end ? `<span class="timer ${S.set?.clock === "genau" ? "" : "calm"}" id="timer">${S.set?.clock === "genau" ? fmt(left()) : calmClock(left(), r)}</span>` : ""}</div>
   <h1 style="margin:6px 0 4px">Übersicht</h1><p class="muted small">${qs.length - open.length} von ${qs.length} beantwortet${Object.keys(r.mark).length ? ` · ${Object.keys(r.mark).length} markiert` : ""}</p>
   <div class="ovgrid">${qs.map((x, i) => `<button type="button" data-i="${i}" class="${answered(i) ? "done" : ""} ${r.mark[i] ? "mk" : ""}" aria-label="Frage ${i + 1}${answered(i) ? ", beantwortet" : ", offen"}${r.mark[i] ? ", markiert" : ""}">${i + 1}${x.t === "frei" ? "<small>T</small>" : ""}</button>`).join("")}</div>
   <p class="small muted">Gestrichelt = offen · ⚑ = markiert · T = Freitext</p>
   ${sure && open.length ? `<div class="tip" role="alert">${ic("warn", 'style="color:var(--bad)"')}<span>${open.length} Frage${open.length === 1 ? " ist" : "n sind"} noch offen.</span></div><button class="btn block" id="toopen">Zur ersten offenen Frage (${open[0] + 1})</button><button class="btn ghost-w block" id="submit" style="margin-top:8px">Trotzdem abgeben</button>` : `<button class="btn block" id="submit">Test abgeben</button>`}`);
  $("#toopen")?.addEventListener("click", () => { r.view = null; r.p = open[0]; save(); runTest(); });
  $$(".ovgrid button").forEach(b => b.onclick = () => { r.view = null; r.p = +b.dataset.i; save(); runTest(); });
  $("#back").onclick = () => { r.view = null; save(); runTest(); };
  $("#submit").onclick = () => { if (open.length && !sure) return runTest(true); finishTest(false); };
 }
}
function finishTest(timeout) {
 clearInterval(testTimer);
 const r = S.run; if (!r) return;
 S.lastRun = { ids: r.ids, ans: r.ans, rated: {}, at: Date.now(), timeout: !!timeout, saved: false };
 S.run = null; save();
 if (timeout) toast("Die Zeit ist um – der Test wurde abgegeben");
 replaceHash("#auswertung"); if (location.hash === "#auswertung") viewAuswertung();
}
function viewAuswertung() {
 const r = S.lastRun; if (!r) return viewPruefung();
 const qs = r.ids.map(k => byKey.get(k)).filter(Boolean);
 const sc = testScore(r);

 const fr = qs.map((q, i) => ({ q, i })).filter(x => x.q.t === "frei");
 const wrong = qs.map((q, i) => ({ q, a: r.ans[i] })).filter(x => x.q.t !== "frei" && !istRichtig(x.q, x.a));
 page("pruefung", `<h1 class="sr-only">Auswertung Probetest</h1><div class="qcard result"><div class="big-ring" aria-hidden="true">${ringSvg(sc.allRated ? sc.pct / 100 : sc.mc / Math.max(1, sc.mcN), 150, 12, "var(--surface-2)", !sc.allRated ? "var(--ink-3)" : sc.pct >= PASS ? null : "var(--bad)")}${sc.allRated ? `<b>${sc.pct}%</b>` : `<b style="font-size:1.1rem">MC ${sc.mc}/${sc.mcN}</b>`}</div>
  <h2 aria-live="polite">${!sc.allRated ? "Fast fertig – bewerte deine Freitexte" : sc.pct >= ZIEL ? "Ziel erreicht" : sc.pct >= PASS ? `Bestanden – weiter Richtung ${ZIEL} %` : "Noch nicht bestanden – das holst du auf"}</h2>
  <p class="muted">Multiple Choice: ${sc.mc} von ${sc.mcN} richtig${sc.frMax ? ` · Freitext: ${sc.allRated ? String(sc.fr * FR_W).replace(".", ",") + " von " + sc.frMax * FR_W + " Punkten" : "noch nicht bewertet"}` : ""}${sc.allRated ? ` · gesamt ${String(sc.pts).replace(".", ",")} von ${sc.max} Punkten` : ""}${r.timeout ? " · Zeit abgelaufen" : ""}</p><p class="small muted">Bestanden ab ${PASS} % (üblich, nicht offiziell bestätigt) · Übungsziel ${ZIEL} %</p></div>
  ${fr.length ? `<div class="sec-h"><h2>Freitext selbst bewerten</h2></div><p class="small muted" style="margin:-4px 0 10px">Im echten Test korrigieren Fachdozent und IHK-Bildungszentrum. Sei streng: Teilpunkte nur, wenn wirklich Teile der Musterlösung drinstehen.</p>${fr.map(({ q, i }) => `<div class="card">${chip(q)}<p style="font-weight:700;margin:10px 0 6px">${esc(q.q)}</p><div class="answer">${r.ans[i] ? esc(r.ans[i]) : "<i>Keine Antwort</i>"}</div>${musterHtml(q, r.ans[i])}<div class="row" role="group" aria-label="Bewertung" style="margin-top:12px">${[[0, "0 Punkte"], [.5, "1 Punkt"], [1, "2 Punkte"]].map(([v, t]) => `<button type="button" class="btn ${r.rated[i] === v ? "" : "ghost"}" aria-pressed="${r.rated[i] === v}" data-i="${i}" data-v="${v}" style="flex:1">${t}</button>`).join("")}</div></div>`).join("")}` : ""}
  ${sc.allRated ? (() => { const pm = KERN().map(m => { const ix = qs.map((_, i) => i).filter(i => qs[i].m === m.id); const ok = ix.filter(i => qs[i].t === "frei" ? (r.rated[i] ?? 0) >= .5 : istRichtig(qs[i], r.ans[i])).length; return { m, ok, n: ix.length, p: ix.length ? ok / ix.length : 1 }; }).filter(x => x.n).sort((a, b) => a.p - b.p); return pm.length ? `<div class="card"><h2 class="h3" style="margin-top:0">Nach Themen</h2>${pm.map(x => `<div style="padding:5px 0"><div class="row" style="justify-content:space-between"><span>${esc(x.m.kurz)}</span><b>${x.ok}/${x.n}</b></div><div class="bar2"><i style="width:${x.p * 100}%;background:${x.m.farbe}"></i></div></div>`).join("")}<p class="small" style="margin:8px 0 0">Am meisten bringt jetzt: <a href="#kompakt-${pm[0].m.id}" style="text-decoration:underline">${esc(pm[0].m.kurz)} kompakt wiederholen</a> und das <a href="#quiz-${pm[0].m.id}" style="text-decoration:underline">Modul-Quiz</a>.</p></div>` : ""; })() : ""}
  
  ${r.saved ? `<div class="row" style="justify-content:center;margin:8px 0 20px"><a class="btn ghost-w" href="#quiz-ueben">${ic("repeat")} Fehler üben</a><button class="btn" id="again">Neuer Test</button></div>` : ""}
  ${wrong.length ? `<div class="sec-h"><h2>Multiple Choice nacharbeiten</h2></div>${wrong.map(x => `<div class="card">${chip(x.q)}<p style="font-weight:700;margin-top:10px">${esc(x.q.q)}</p><p class="small bad-t">✗ Deine Antwort: ${x.a === undefined || (Array.isArray(x.a) && !x.a.length) ? "keine" : esc(Array.isArray(x.a) ? x.a.map(k => x.q.a[k]).join(" · ") : x.q.a[x.a])}</p><p class="small ok-t">✓ Richtig: ${esc(richtigText(x.q))}</p><div class="fb ok" style="margin-top:8px">${esc(x.q.e)}</div></div>`).join("")}` : ""}`, { keep: !!viewAuswertung.keep });
 viewAuswertung.keep = false;
 $$("[data-v]").forEach(b => b.onclick = () => {
  r.rated[b.dataset.i] = +b.dataset.v;
  const sc2 = testScore(r);
  if (r.saved && r.tIdx !== undefined) S.tests[r.tIdx] = sc2.pct; // Korrektur nach dem Speichern: Ergebnis anpassen
  else if (sc2.allRated && !r.saved) { r.saved = true; r.tIdx = S.tests.length; qs.forEach((q, i) => grade(q.key, q.t === "frei" ? r.rated[i] === 1 : istRichtig(q, r.ans[i]), false)); S.tests.push(sc2.pct); toast("Ergebnis gespeichert – Bewertung bleibt änderbar"); }
  save(); viewAuswertung.keep = true; viewAuswertung(); });
 $("#again")?.addEventListener("click", () => { location.hash = "test"; });
 $("#commit")?.addEventListener("click", () => { r.saved = true; qs.forEach((q, i) => grade(q.key, q.t === "frei" ? r.rated[i] === 1 : istRichtig(q, r.ans[i]), false)); S.tests.push(testScore(r).pct); save(); toast("Ergebnis gespeichert"); viewAuswertung(); });
}
// Eigene Rückfrage statt confirm() (in installierten Apps teils blockiert)
function confirmBox(title, text, okLabel, onOk) {
 $("#cbox")?.remove();
 const el = document.createElement("div"); el.id = "cbox"; el.className = "cbox"; el.setAttribute("role", "alertdialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "cbox-h");
 el.innerHTML = `<div class="cbox-in"><h2 id="cbox-h">${esc(title)}</h2><p class="muted">${esc(text)}</p><div class="row"><button class="btn ghost" id="cno" style="flex:1">Zurück</button><button class="btn danger" id="cyes" style="flex:1">${esc(okLabel)}</button></div></div>`;
 document.body.appendChild(el);
 const opener = document.activeElement;
 const close = () => { el.remove(); opener?.focus?.({ preventScroll: true }); };
 el.addEventListener("keydown", e => { if (e.key === "Escape") close(); if (e.key === "Tab") { const a = $("#cno", el), z = $("#cyes", el); if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } } });
 $("#cno", el).onclick = close; el.onclick = e => { if (e.target === el) close(); };
 $("#cyes", el).onclick = () => { close(); onOk(); };
 $("#cno", el).focus();
}
// Während eines laufenden Tests: Wegnavigieren nur nach Rückfrage
document.addEventListener("click", e => {
 const a = e.target.closest("a[href^='#']"); if (!a || !S.run || location.hash !== "#test") return;
 if (a.getAttribute("href") === "#test") return;
 e.preventDefault();
 confirmBox("Test verlassen?", "Dein Test bleibt gespeichert und du kannst ihn unter „Prüfung“ fortsetzen. Die Zeit läuft weiter.", "Verlassen", () => { location.hash = a.getAttribute("href").slice(1); });
}, true);

/* ---------- Lehrgang & Karriere (IHK Dresden / HSB Akademie) ----------
   Angaben aus öffentlichen Kursbeschreibungen, Stand 11/2026 – ohne Gewähr. */
const SRC = {
 kurs: ["fernstudi.net – Social Media Manager/-in (IHK), HSB Akademie", "https://www.fernstudi.net/weiterbildung/wirtschaft/public-relations/13937"],
 zfu: ["ZFU – Zulassung Nr. 686514", "https://zfu.de/download-pdf/lehrgangssuche-uebersicht/686514"],
 hsb: ["HSB Akademie", "https://www.hsb-akademie.de"],
 broschuere: ["HSB Akademie – Kursinformation Social Media Manager/-in (IHK), Stand 2026", "https://www.hsb-akademie.de"],
 step: ["StepStone – Gehalt Social Media Manager/in", "https://www.stepstone.de/gehalt/Social-Media-Manager-in.html"],
 indeed: ["Indeed – Gehalt Social Media Manager", "https://de.indeed.com/salaries/social-media-manager-Salaries,-DE"]
};
const src = (...k) => `<p class="small muted src">Quelle: ${k.map(x => `<a href="${SRC[x][1]}" target="_blank" rel="noopener">${SRC[x][0]}</a>`).join(" · ")}</p>`;
/* ---------- Offene Stellen (täglich per GitHub Action aus der BA-Jobbörse, Filter auf dem Gerät) ---------- */
let STELLEN = null, PLZ = null;
const laden = async u => { const r = await fetch(u, { cache: "no-cache" }); if (!r.ok) throw new Error(r.status); return r.json(); };
function km(a, b, c, d) { const R = 6371, r = x => x * Math.PI / 180, dl = r(c - a), dn = r(d - b); const h = Math.sin(dl / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); }
function ortFinden(q) {
 q = q.trim().toLowerCase(); if (!q || !PLZ) return null;
 const o = PLZ.orte, plz = /^\d{5}$/.test(q) ? o.find(x => x[0] === q) : /^\d{2,4}$/.test(q) ? o.find(x => x[0].startsWith(q)) : null;
 if (plz) return { name: plz[1] + " (" + plz[0] + ")", lat: plz[2], lon: plz[3] };
 const hits = o.filter(x => x[1].toLowerCase() === q); const h = hits.length ? hits : o.filter(x => x[1].toLowerCase().startsWith(q));
 if (!h.length) return null; // Mittelpunkt aller PLZ des Ortes
 const lat = h.reduce((a, x) => a + x[2], 0) / h.length, lon = h.reduce((a, x) => a + x[3], 0) / h.length;
 return { name: h[0][1], lat, lon };
}
function stellenInit() {
 const det = $("#stellen-h")?.closest("details") || $(".card.stellen")?.closest("details"); if (!det) return;
 const zeigen = async () => {
  const box = $("#slist");
  try { if (!STELLEN) [STELLEN, PLZ] = await Promise.all([laden("data/stellen.json"), laden("data/plz.json").catch(() => null)]); }
  catch (e) { box.innerHTML = `<p class="small">Noch keine Stellenliste vorhanden. Sie wird jeden Morgen automatisch erstellt – bitte später noch einmal schauen.</p>`; return; }
  const q = $("#s-ort").value, r = +$("#s-km").value, ho = $("#s-ho").checked, ort = ortFinden(q);
  S.stellenOrt = q; S.stellenKm = r; S.stellenHo = ho; save();
  let liste = STELLEN.jobs.map(j => ({ ...j, e: ort && j.lat != null ? km(ort.lat, ort.lon, j.lat, j.lon) : null }));
  if (ort) liste = liste.filter(j => (j.e !== null && j.e <= r) || (ho && j.ho)).sort((a, b) => (a.e ?? 9e9) - (b.e ?? 9e9) || b.d.localeCompare(a.d));
  else if (q.trim()) { box.innerHTML = `<p class="small">Ort „${esc(q)}“ nicht gefunden. Versuch es mit der Postleitzahl.</p>`; return; }
  else liste = ho ? liste.filter(j => j.ho) : liste;
  const stand = new Date(STELLEN.stand), alt = (Date.now() - stand) / 86400000;
  const datum = d => d ? new Date(d + "T12:00").toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" }) : "";
  const zeig = liste.slice(0, box.dataset.mehr ? 200 : 25);
  const enc = encodeURIComponent(ort?.name?.replace(/ \(.*\)/, "") || q || "");
  box.innerHTML = `<p class="small muted" style="margin:6px 0 8px">${ort ? `${liste.length} Stelle${liste.length === 1 ? "" : "n"} im Umkreis von ${r} km um ${esc(ort.name)}` : q.trim() ? "" : `${liste.length} Stellen deutschlandweit – gib einen Ort ein`} · Stand ${stand.toLocaleDateString("de-DE")} ${stand.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}${alt > 2 ? " (älter)" : ""}</p>
  ${zeig.length ? `<ul class="jobs">${zeig.map(j => `<li><a href="${esc(j.ext && /^https?:/.test(j.ext) ? j.ext : "https://www.arbeitsagentur.de/jobsuche/jobdetail/" + encodeURIComponent(j.id))}" target="_blank" rel="noopener noreferrer"><b>${esc(j.t)}</b><span>${esc(j.ag)}</span><span class="small muted">${esc(j.ort)}${j.e !== null && ort ? ` · ${Math.round(j.e)} km` : ""}${j.ho ? " · Homeoffice möglich" : ""}${j.d ? ` · seit ${datum(j.d)}` : ""}</span></a></li>`).join("")}</ul>` : `<p class="small">Keine passenden Stellen. Vergrößere den Umkreis oder nimm Homeoffice-Stellen dazu.</p>`}
  ${liste.length > zeig.length ? `<button class="btn ghost block" id="s-mehr">Alle ${liste.length} anzeigen</button>` : ""}
  <p class="small muted" style="margin:10px 0 0">Quelle: Jobbörse der Bundesagentur für Arbeit, täglich aktualisiert. Weitersuchen: <a href="https://www.stepstone.de/jobs/social-media-manager${enc ? "/in-" + enc : ""}?radius=${r}" target="_blank" rel="noopener noreferrer">StepStone</a> · <a href="https://de.indeed.com/jobs?q=Social+Media+Manager&l=${enc}&radius=${r}" target="_blank" rel="noopener noreferrer">Indeed</a> · <a href="https://www.linkedin.com/jobs/search/?keywords=Social%20Media%20Manager&location=${enc}" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>`;
  $("#s-mehr")?.addEventListener("click", () => { box.dataset.mehr = 1; zeigen(); });
 };
 let t; $("#s-ort").addEventListener("input", () => { clearTimeout(t); t = setTimeout(zeigen, 350); });
 $("#s-km").onchange = zeigen; $("#s-ho").onchange = zeigen;
 det.addEventListener("toggle", () => { if (det.open) zeigen(); });
}
function viewLehrgang() {
 const dl = daysLeft();
 page("lehrgang", `${head("Lehrgang & Karriere")}<h1 class="sr-only">Lehrgang & Karriere</h1>

 <div class="card termin"><h2 class="sr-only">Deine Termine</h2>
  <div class="tgrid">${TERMINE.map(([k, t]) => `<div class="tcell"><label for="t-${k}">${t}</label><input type="date" id="t-${k}" data-termin="${k}" required value="${esc(terminWert(k))}"></div>`).join("")}</div>
  <p class="small" style="margin:8px 0 0;font-weight:700" id="pinfo" aria-live="polite">${esc(terminInfo())}</p>
 </div>

 <div class="sec-h"><h2>Vorlesungsplan</h2></div>
 <div class="card"><p class="small muted" style="margin:0 0 8px">Laut Vorlesungsplan des laufenden Kurses (nicht offiziell bestätigt). Live montags 18:30–20:00 Uhr, mit Aufzeichnung. Die Themen wiederholen sich – Termine vor deinem Beginn sind blass. Tippe auf ein Thema für die passenden Lektionen.</p>
  <ol class="vplan">${VORLESUNGEN.map(v => { const ls = v.lektionen.map(LEK).filter(Boolean), done = ls.filter(x => S.lek[x.l.id]).length, nv = naechsteOnline() === v; return `<li class="${v.datum < dayLocal() || (S.kursStart && v.datum < S.kursStart) ? "vorbei" : ""} ${nv ? "naechste" : ""}">${ls.length ? `<details><summary><span class="kw">${datumDE(v.datum)}</span><span>${esc(v.titel)}${nv ? " · <b>nächste</b>" : ""}</span><span class="small muted">${done}/${ls.length}</span></summary><ul>${ls.map(x => `<li><a href="#lektion-${x.m.id}-${x.l.id}">${S.lek[x.l.id] ? "✓ " : ""}${esc(x.l.titel)}</a></li>`).join("")}</ul></details>` : `<div class="vrow"><span class="kw">${datumDE(v.datum)}</span><span>${esc(v.titel)}</span></div>`}</li>`; }).join("")}</ol></div>

 <div class="sec-h"><h2>Der Lehrgang auf einen Blick</h2></div>
 <div class="card"><dl class="facts">
  <dt>Anbieter</dt><dd>HSB Akademie, Leipzig – Fernlehrgang, staatlich zugelassen (ZFU-Nr. 686514)</dd>
  <dt>Start</dt><dd>Jeden Montag möglich</dd>
  <dt>Dauer</dt><dd>4 Monate, etwa 10 Stunden pro Woche</dd>
  <dt>Vorlesung</dt><dd>1 Live-Onlinevorlesung pro Woche (montags 18:30–20:00 Uhr), mit Aufzeichnung</dd>
  <dt>Workshops</dt><dd>2 Workshoptage, online oder vor Ort – freiwillig, aber empfohlen</dd>
  <dt>Betreuung</dt><dd>Sprechstunden mit den Dozierenden, Studienbetreuung</dd>
  <dt>Ausprobieren</dt><dd>Kostenlose Schnuppervorlesung</dd>
 </dl>${src("broschuere", "zfu")}</div>

 <div class="sec-h"><h2>So läuft der Lehrgang ab</h2></div>
 <ol class="road">
  <li><b>Anmeldung bei der HSB Akademie</b><span>Besondere Voraussetzungen gibt es nicht; Grundkenntnisse in Englisch, Marketing und am PC sind hilfreich.</span></li>
  <li><b>Sechs Themenbereiche</b><span>Routenplaner Web 2.0 · Plattformen & Tools · Einbettung ins Unternehmen · Recht · Monitoring & Controlling · Planung & Umsetzung. Die App folgt genau dieser Gliederung.</span></li>
  <li><b>Hausaufgabe nach jedem Themenbereich</b><span>Eine praxisbezogene Lernerfolgskontrolle mit individuellem Feedback der Dozierenden.</span></li>
  <li><b>Zulassung zum Test</b><span>Erst wenn alle Lernerfolgskontrollen eingereicht sind. Den Wunschtermin vereinbarst du mit der Studienbetreuung – auch samstags möglich.</span></li>
  <li><b>Abschlusstest</b><span>60 Minuten auf einem Online-Portal des IHK-Bildungszentrums Dresden.</span></li>
  <li><b>IHK-Zertifikat</b><span>Nach bestandenem Test vom IHK-Bildungszentrum Dresden gGmbH: „Social Media Manager/-in (IHK)“. Ohne IHK-Test ist auch ein HSB-Zertifikat möglich.</span></li>
 </ol>
 ${src("broschuere", "kurs")}

 <div class="sec-h"><h2>Der Abschlusstest</h2></div>
 <div class="card"><dl class="facts">
  <dt>Form</dt><dd>Online-Test von zu Hause, personalisiert</dd>
  <dt>Umfang</dt><dd>30 Fragen, Multiple Choice und Freitext</dd>
  <dt>Dauer</dt><dd>60 Minuten</dd>
  <dt>Korrektur</dt><dd>Fachdozent und IHK-Bildungszentrum Dresden. Freitexte werden von Hand bewertet, Teilpunkte sind möglich – das Ergebnis kommt deshalb nicht sofort.</dd>
  <dt>Prüfende Stelle</dt><dd>IHK-Bildungszentrum Dresden gGmbH</dd>
  <dt>Testgebühr</dt><dd>205 €, in der Kursgebühr enthalten</dd>
 </dl>
 <h3 style="margin:14px 0 6px">Nicht veröffentlicht – in der App angenommen</h3>
 <ul class="ticks small">
  <li>Bestehensgrenze: die App rechnet mit ${PASS} % der Punkte, wie bei IHK-Zertifikatstests üblich – und empfiehlt ${ZIEL} % als Übungsziel</li>
  <li>Anteil Freitext: die App nimmt 5 von 30 Fragen an, jede zählt doppelt</li>
  <li>Multiple Choice teils mit mehreren richtigen Antworten – Punkt nur, wenn alle richtigen gewählt sind</li>
  <li>Vor- und Zurückspringen im Test erlaubt</li>
 </ul>
 <p class="small muted">Frag am besten deine Studienbetreuung oder Dozierenden.</p>
 <div class="tip good" style="margin-top:12px">${ic("bolt", 'style="color:var(--ok)"')}<span><b>Tipp:</b> Bei Freitext-Fragen in Stichpunkten antworten und genau so viele Punkte nennen, wie gefragt sind. Das trainierst du unter <a href="#quiz-frei" style="text-decoration:underline">Freitext üben</a>.</span></div>
 ${src("broschuere", "kurs")}</div>

 <div class="sec-h"><h2>Kosten & Förderung</h2></div>
 <div class="card"><dl class="facts">
  <dt>Mit IHK-Zertifikat</dt><dd>1.905 € gesamt inklusive 205 € IHK-Testgebühr (umsatzsteuerbefreit)</dd>
  <dt>Zahlung</dt><dd>Einmalig oder in 4 zinslosen Raten</dd>
  <dt>Nur HSB-Zertifikat</dt><dd>1.700 €</dd>
  <dt>Förderung</dt><dd>Laut Anbieter möglich, z. B. Bildungsgutschein – vorher bei Agentur für Arbeit oder Jobcenter klären</dd>
  <dt>Steuer</dt><dd>Berufliche Weiterbildung ist in der Regel als Werbungskosten absetzbar</dd>
 </dl>${src("broschuere", "kurs")}</div>

 <div class="sec-h"><h2>Karriere & Gehalt</h2></div>
 <div class="card">
  <div class="stats3"><div><b>38.600 €</b><span>Ø brutto/Jahr laut StepStone (Spanne 32.200–46.200 €)</span></div><div><b>38.700 €</b><span>Ø in Dresden laut StepStone (32.400–45.800 €)</span></div><div><b>44.843 €</b><span>Ø laut Indeed (787 Angaben, Stand 10/2026)</span></div></div>
  <p class="small" style="margin-top:12px">Die Zahlen schwanken je nach Quelle. Entscheidend sind Berufserfahrung, Unternehmensgröße, Branche und Region – in Großstädten im Westen und Süden wird meist mehr gezahlt als in Sachsen.</p>
  ${src("step", "indeed")}
 </div>
 <div class="card"><h3 style="margin-bottom:8px">Wo Social Media Manager arbeiten</h3><ul class="ticks">
  <li>In Unternehmen jeder Größe – meist im Marketing oder in der Unternehmenskommunikation</li>
  <li>In Werbe-, Social-Media- und PR-Agenturen</li>
  <li>Bei Verbänden, Kammern, Kommunen, Hochschulen und Vereinen</li>
  <li>Selbstständig als Freelancer für kleine Unternehmen</li></ul></div>
 <div class="card"><h3 style="margin-bottom:8px">Typische Jobtitel & Spezialisierungen</h3><div class="chips static">${["Social Media Manager", "Community Manager", "Social Media Redakteur", "Content Creator", "Paid Social / Social Ads Manager", "Influencer Marketing Manager", "Employer Branding", "Social Media Strategist"].map(t => `<span>${t}</span>`).join("")}</div></div>
 <div class="card"><h3 style="margin-bottom:8px">So geht es weiter</h3><ol class="road small-road">
  <li><b>Einstieg</b><span>Junior Social Media Manager oder Redakteur – oft mit Zertifikat und ersten eigenen Praxisprojekten</span></li>
  <li><b>Social Media Manager</b><span>Eigene Kanäle, Strategie und Budget verantworten</span></li>
  <li><b>Senior / Teamleitung</b><span>Team führen, Kampagnen über mehrere Kanäle steuern</span></li>
  <li><b>Head of Social Media / Leitung Kommunikation</b><span>Strategische Gesamtverantwortung</span></li></ol>
  <p class="small" style="margin-top:8px">Aufbauend bietet die HSB Akademie weitere IHK-Zertifikate an, z. B. Social Advertising Manager, Online Marketing Manager, Content Marketing Manager oder KI Marketing Manager.</p>${src("hsb")}</div>
 <div class="tip good">${ic("check", 'style="color:var(--ok)" stroke-width="3"')}<span><b>Tipp für Bewerbungen:</b> Zeig ein kleines Portfolio – z. B. eine Beispielstrategie, einen Redaktionsplan und ein Reporting. Das Zertifikat gehört ins LinkedIn-Profil.</span></div>

 <div class="sec-h" id="stellen-h"><h2>Offene Stellen</h2></div>
 <div class="card stellen"><div class="srow"><label class="sr-only" for="s-ort">Ort oder Postleitzahl</label><input id="s-ort" type="search" inputmode="search" autocomplete="postal-code" placeholder="Ort oder PLZ, z. B. Leipzig" value="${esc(S.stellenOrt || "")}"><label class="sr-only" for="s-km">Umkreis</label><select id="s-km">${[10, 25, 50, 100].map(k => `<option value="${k}" ${+(S.stellenKm || 25) === k ? "selected" : ""}>${k} km</option>`).join("")}</select></div>
  <label class="check" style="padding:6px 0"><input type="checkbox" id="s-ho" ${S.stellenHo ? "checked" : ""}> auch Homeoffice-Stellen aus ganz Deutschland</label>
  <div id="slist" aria-live="polite"><p class="small muted">Wird geladen, sobald du den Abschnitt öffnest.</p></div></div>
 <p class="small muted nofold" style="margin:24px 0 0">SMM Coach ist ein unabhängiges Lernangebot und kein offizielles Angebot der IHK Dresden, des IHK-Bildungszentrums Dresden oder der HSB Akademie. Alle Angaben ohne Gewähr, Stand November 2026. Verbindlich sind die Informationen des Anbieters.</p>`, { compact: true });
 foldSections($("#app"));
 stellenInit();
 $$("[data-termin]").forEach(inp => inp.onchange = () => { terminSetzen(inp.dataset.termin, inp.value); save(); $("#pinfo").textContent = terminInfo(); toast(inp.value ? "Termin gespeichert" : "Termin gelöscht"); });
}

// Abschnitte (.sec-h + folgende Inhalte) in einklappbare Blöcke verwandeln
function foldSections(root, openFirst = false) {
 $$(".sec-h", root).forEach((h, n) => {
  const d = document.createElement("details"); d.className = "fold"; if (openFirst && n === 0) d.open = true;
  const sm = document.createElement("summary"); sm.innerHTML = h.innerHTML; d.append(sm);
  let x = h.nextElementSibling;
  while (x && !x.classList.contains("sec-h") && !x.classList.contains("nofold")) { const nx = x.nextElementSibling; d.append(x); x = nx; }
  h.replaceWith(d);
 });
}

/* ---------- Start ---------- */
route();
if ("serviceWorker" in navigator && location.protocol === "https:" && !/claude|claudeusercontent/.test(location.host)) {
 navigator.serviceWorker.register("sw.js").catch(() => {});
}

/* ---------- Als App installieren (wie Einbürgerungs-App) ----------
   Handy/Tablet im Browser: Vollbild-Hinweis „Zuerst installieren“ bei jedem neuen Besuch.
   „Im Browser weiter“ gilt 6 Stunden, danach erscheint der Hinweis wieder. Solange: Balken oben. */
const APP_URL = "https://smm.micana.de";
const GATE_KEY = "smm.gateSkip";
let deferredPrompt = null, appInstalled = false;
addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredPrompt = e; $$('[data-act="native-install"]').forEach(b => b.hidden = false); });
addEventListener("appinstalled", () => { appInstalled = true; toast("App installiert"); if ($("#gate")) installGate(true); });
function platform() {
 const ua = navigator.userAgent;
 const standalone = matchMedia("(display-mode: standalone)").matches || matchMedia("(display-mode: fullscreen)").matches || navigator.standalone === true;
 const ios = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
 const android = /Android/.test(ua);
 const inapp = /Instagram|FBAN|FBAV|Line\/|Telegram|WhatsApp|TikTok|LinkedInApp|; wv\)/i.test(ua);
 let browser = "other";
 if (inapp) browser = "inapp";
 else if (ios) browser = /CriOS/.test(ua) ? "chrome" : /FxiOS/.test(ua) ? "firefox" : /EdgiOS/.test(ua) ? "edge" : /Safari/.test(ua) ? "safari" : "other";
 else if (android) browser = /SamsungBrowser/.test(ua) ? "samsung" : /Firefox/.test(ua) ? "firefox" : /EdgA/.test(ua) ? "edge" : /OPR|Opera/.test(ua) ? "opera" : /Chrome/.test(ua) ? "chrome" : "other";
 else browser = /Edg\//.test(ua) ? "edge" : /Chrome/.test(ua) ? "chrome" : /Firefox/.test(ua) ? "firefox" : /Safari/.test(ua) ? "safari" : "other";
 return { os: ios ? "ios" : android ? "android" : "desktop", browser, standalone };
}
const SHARE = '<svg width="18" height="18" viewBox="0 0 24 24" style="vertical-align:-3px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M12 3v12M8 7l4-4 4 4M5 12v8h14v-8"/></svg>';
function installSteps(os, browser) {
 const S2 = {
  "ios-safari": ["Auf ⋯ neben der Adressleiste tippen, dann auf „Teilen“ {S} (ältere iOS-Versionen: Teilen-Symbol {S} unten).", "Nach unten scrollen und „Zum Home-Bildschirm“ wählen.", "„Als Web-App öffnen“ eingeschaltet lassen und oben rechts auf „Hinzufügen“ tippen."],
  "ios-chrome": ["Oben rechts in der Adresszeile auf das Teilen-Symbol {S} tippen.", "„Zum Home-Bildschirm“ wählen (eventuell erst „Mehr“ antippen).", "Auf „Hinzufügen“ tippen."],
  "ios-firefox": ["Unten rechts auf das Menü ☰ tippen.", "„Teilen“ wählen, dann „Zum Home-Bildschirm“.", "Auf „Hinzufügen“ tippen."],
  "ios-edge": ["Unten auf das Menü ⋯ tippen, dann auf „Teilen“ {S}.", "„Zum Home-Bildschirm“ wählen.", "Auf „Hinzufügen“ tippen."],
  "ios-other": ["Öffne diese Seite in Safari (Adresse kopieren und in Safari einfügen).", "Dann Teilen {S} → „Zum Home-Bildschirm“ → „Hinzufügen“."],
  "android-chrome": ["Oben rechts auf das Menü ⋮ tippen.", "„App installieren“ oder „Zum Startbildschirm hinzufügen“ wählen.", "Mit „Installieren“ bestätigen."],
  "android-samsung": ["Unten rechts auf das Menü ☰ tippen.", "„Seite hinzufügen zu“ wählen, dann „Startbildschirm“.", "Mit „Hinzufügen“ bestätigen."],
  "android-firefox": ["Auf das Menü ⋮ tippen.", "„Installieren“ bzw. „Zum Startbildschirm hinzufügen“ wählen.", "Mit „Hinzufügen“ bestätigen."],
  "android-edge": ["Unten auf das Menü ⋯ tippen.", "„Zum Telefon hinzufügen“ bzw. „App installieren“ wählen.", "Bestätigen."],
  "android-opera": ["Auf das Menü ⋮ tippen.", "„Zum Startbildschirm hinzufügen“ wählen.", "Bestätigen."],
  "android-other": ["Öffne diese Seite am besten in Chrome.", "Menü ⋮ → „App installieren“."],
  "inapp": ["Du hast die Seite aus einer App (z. B. Instagram, LinkedIn oder WhatsApp) geöffnet. Von dort kann man nichts installieren.", "Tippe oben rechts auf ⋯ bzw. ⋮ und wähle „Im Browser öffnen“.", "Dann erscheint die passende Anleitung."],
  "desktop-chrome": ["Rechts in der Adresszeile auf das Installieren-Symbol (Bildschirm mit Pfeil) klicken.", "„Installieren“ bestätigen."],
  "desktop-edge": ["Rechts in der Adresszeile auf „App verfügbar“ klicken.", "„Installieren“ bestätigen."],
  "desktop-safari": ["Im Menü „Ablage“ → „Zum Dock hinzufügen“ wählen."],
  "desktop-other": ["Am bequemsten lernst du am Handy: smm.micana.de öffnen und dort installieren."]
 };
 return S2[browser === "inapp" ? "inapp" : `${os}-${browser}`] || S2[`${os}-other`] || S2["desktop-other"];
}
const OS_NAME = { ios: "iPhone / iPad", android: "Android", desktop: "Computer" };
const BR_NAME = { safari: "Safari", chrome: "Chrome", firefox: "Firefox", edge: "Edge", samsung: "Samsung Internet", opera: "Opera", inapp: "In-App-Browser", other: "Browser" };
const installGuide = p => `<p class="small muted" style="margin:0 0 10px">Erkannt: ${OS_NAME[p.os]} · ${BR_NAME[p.browser]}</p>
 <button class="btn block" data-act="native-install" ${deferredPrompt ? "" : "hidden"} style="margin-bottom:12px">Jetzt installieren</button>
 <ol class="isteps">${installSteps(p.os, p.browser).map(s => `<li>${esc(s).replace(/\{S\}/g, SHARE)}</li>`).join("")}</ol>`;
async function nativeInstall() { if (!deferredPrompt) return; deferredPrompt.prompt(); const r = await deferredPrompt.userChoice; deferredPrompt = null; if (r.outcome === "accepted") { appInstalled = true; if ($("#gate")) installGate(true); } }
const gateSkipped = () => { try { return !!localStorage.getItem(GATE_KEY); } catch (e) { return false; } };
async function detectInstalled() { try { const a = await navigator.getInstalledRelatedApps?.(); if (a && a.length) appInstalled = true; } catch (e) {} return appInstalled; }
function installGate(force) {
 const p = platform();
 $("#nag")?.remove(); document.body.classList.remove("nagged");
 if (p.standalone) { $("#gate")?.remove(); return; }
 if (p.os === "desktop") return; // Computer: kein Zwang
 if (!force && gateSkipped()) { $("#gate")?.remove(); return nag(); }
 const draw = () => {
  let el = $("#gate");
  if (!el) { el = document.createElement("div"); el.id = "gate"; el.className = "gate"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-labelledby", "gate-h"); document.body.appendChild(el); }
  el.innerHTML = `<div class="gate-in">
   <div class="top"><div class="t">Social Media Manager (IHK)</div></div>
   ${appInstalled ? `<h1 id="gate-h" tabindex="-1">Die App ist installiert</h1><div class="tip good" style="margin-top:14px">Öffne sie jetzt über das Symbol „SMM Coach“ auf deinem Startbildschirm. Dieses Browserfenster kannst du schließen.</div>`
   : `<h1 id="gate-h" tabindex="-1">Zuerst die App installieren</h1><p class="muted" style="margin:8px 0 16px">Dauert 20 Sekunden – danach lernst du wie in einer richtigen App.</p>
    <div class="card"><h3 style="margin-bottom:10px">So geht's</h3>${installGuide(p)}${p.browser === "inapp" || p.browser === "other" ? `<button class="btn ghost" data-act="copy-url" style="margin-top:6px">Adresse kopieren</button>` : ""}</div>
    <ul class="gate-why"><li>${ic("check", 'stroke-width="3"')}<span><b>Immer auf dem Startbildschirm</b> – ein Tipp, und du lernst weiter.</span></li><li>${ic("check", 'stroke-width="3"')}<span><b>Funktioniert ohne Internet</b> – auch in Bahn und Pause.</span></li><li>${ic("check", 'stroke-width="3"')}<span><b>Dein Lernstand ist sicherer</b> – der Browser löscht ihn nicht so leicht.</span></li></ul>
    ${p.os === "ios" && p.browser !== "inapp" ? (hasProgress(S)
      ? `<div class="tip">${ic("warn", 'style="color:var(--bad)"')}<span><b>Deinen Lernstand mitnehmen:</b> Auf iPhone und iPad hat die installierte App einen eigenen Speicher. Erstelle jetzt eine Sicherung, installiere die App und tippe dort in den Einstellungen auf „Wiederherstellen“.</span></div><button class="btn block" data-act="backup" style="margin-bottom:8px">${ic("download")} Sicherung erstellen</button>`
      : `<div class="tip">${ic("warn", 'style="color:var(--bad)"')}<span>Wichtig auf iPhone und iPad: Was du hier im Browser lernst, wird <b>nicht</b> in die installierte App übernommen. Installiere deshalb am besten jetzt.</span></div>`) : ""}`}
   <button class="gate-skip" data-act="gate-skip">${appInstalled ? "Trotzdem im Browser weiter" : "Ohne Installation im Browser weiter"}</button></div>`;
 };
 draw();
 document.body.classList.add("no-scroll");
 const el = $("#gate");
 el.onclick = async e => {
  const t = e.target;
  if (t.closest('[data-act="native-install"]')) return nativeInstall();
  if (t.closest('[data-act="backup"]')) return exportBackup();
  if (t.closest('[data-act="copy-url"]')) { try { await navigator.clipboard.writeText(APP_URL); toast("Adresse kopiert – im Browser einfügen"); } catch (x) { toast(APP_URL); } return; }
  if (t.closest('[data-act="gate-skip"]')) { try { localStorage.setItem(GATE_KEY, String(Date.now())); } catch (x) {} el.remove(); document.body.classList.remove("no-scroll"); nag(); }
 };
 if (!force && !appInstalled) detectInstalled().then(x => { if (x && $("#gate")) draw(); });
 $("#gate-h")?.focus();
}
function nag() {
 if ($("#nag")) return;
 const el = document.createElement("button"); el.id = "nag"; el.className = "nag";
 el.innerHTML = `<span><b>App nicht installiert</b></span><span class="go">Installieren ${ic("right")}</span>`;
 el.onclick = () => installGate(true);
 document.body.appendChild(el); document.body.classList.add("nagged");
}
installGate();

/* ---------- Glossar & Formeln ---------- */
function viewGlossar() {
 let tab = "begriffe";
 page("start", `<a class="back" href="#start">${ic("left")} Start</a><h1 style="margin-bottom:12px">Glossar & Formeln</h1>
 <div class="searchbox">${ic("search")}<input type="search" id="gq" placeholder="Begriff suchen …" aria-label="Begriff suchen" autocomplete="off"></div>
 <div class="seg" role="tablist" aria-label="Ansicht"><button type="button" role="tab" data-t="begriffe" aria-selected="true" class="on">Begriffe</button><button type="button" role="tab" data-t="formeln" aria-selected="false">Formeln</button><button type="button" role="tab" data-t="karten" aria-selected="false">Lernkarten</button></div>
 <p class="small muted" id="gcount" aria-live="polite" style="margin:-6px 0 8px"></p><div id="glist"></div>`);
 const norm = t => t.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[-\s_/]+/g, "");
 const score = (g, qy) => { const w = norm(g.w + " " + (g.syn || []).join(" ")), q = norm(qy); return w.startsWith(q) ? 0 : w.includes(q) ? 1 : 2; };
 const draw = () => {
  const qy = $("#gq").value;
  const items = GLOSSAR.filter(g => !qy || norm(g.w + " " + (g.syn || []).join(" ") + " " + (g.de || "") + " " + g.d).includes(norm(qy))).sort((a, b) => (qy ? score(a, qy) - score(b, qy) : 0) || a.w.localeCompare(b.w, "de"));
  const fs = FORMELN.filter(f => !qy || norm(f.n + " " + f.f).includes(norm(qy)));
  $$(".seg button").forEach(b => { const on = b.dataset.t === tab; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); b.textContent = { karten: "Lernkarten", begriffe: "Begriffe", formeln: "Formeln" }[b.dataset.t]; });
  $(".searchbox").hidden = tab === "karten";
  if (tab === "karten") return karte();
  $("#gcount").textContent = tab === "begriffe" ? `${items.length} Begriffe` : `${fs.length} Formeln`;
  $("#glist").innerHTML = tab === "begriffe"
   ? (items.length ? items.map(g => { const m = modById(g.m) || MODULE[0]; return `<div class="gl" style="--m:${m.farbe}"><h2 class="gw">${esc(g.w)}</h2><p>${esc(g.d)}</p><span class="small muted">${m.kurz}</span></div>`; }).join("") : `<p class="muted">Kein Begriff gefunden.</p>`)
   : (fs.length ? fs.map(f => `<div class="card formel"><h2 class="gw">${esc(f.n)}</h2><div class="eq">${esc(f.f)}</div><p class="small"><b>Beispiel:</b> ${esc(f.b)}</p>${f.h ? `<p class="small muted">${esc(f.h)}</p>` : ""}</div>`).join("") : `<p class="muted">Keine Formel gefunden.</p>`);
 };
 // Lernkarten: Begriff → antippen → Erklärung → „Wusste ich“ / „Noch nicht“ (bekannte kommen seltener)
 S.gk = S.gk || {};
 let deck = [], kk = 0;
 const neuesDeck = () => { const z = GLOSSAR.map((g, i) => ({ g, i, w: (S.gk[g.w] || 0) })).sort((a, b) => a.w - b.w || Math.random() - .5); deck = z.slice(0, 15); kk = 0; };
 function karte() {
  if (!deck.length || kk >= deck.length) neuesDeck();
  const { g, i } = deck[kk], mod = modById(g.m) || MODULE[0], known = Object.values(S.gk).filter(v => v >= 2).length;
  $("#gcount").textContent = `Karte ${kk + 1} von ${deck.length}`;
  $("#glist").innerHTML = `<p class="small muted" style="margin:4px 0 10px">${known} von ${GLOSSAR.length} Begriffen sicher · Karte ${kk + 1} von ${deck.length}</p>
   <button type="button" class="flipcard" id="fc" style="--m:${mod.farbe}" aria-live="polite"><span class="small muted">${esc(mod.kurz)}</span><b>${esc(g.w)}</b><span class="fc-hint small muted">Antippen zum Umdrehen</span></button>
   <div class="row" id="fcr" hidden style="margin-top:12px"><button type="button" class="btn ghost" data-k="0" style="flex:1">Noch nicht</button><button type="button" class="btn ghost" data-k="1" style="flex:1">Wusste ich</button></div>`;
  $("#fc").onclick = () => { $("#fc").innerHTML = `<span class="small muted">${esc(g.w)}</span>${g.de ? `<b style="font-size:1.05rem">${esc(g.de)}</b>` : ""}<span style="font-size:.98rem;line-height:1.5">${esc(g.d)}</span>`; $("#fc").classList.add("back"); $("#fcr").hidden = false; };
  $$("#fcr [data-k]").forEach(b => b.onclick = () => { const ok = b.dataset.k === "1"; S.gk[g.w] = ok ? (S.gk[g.w] || 0) + 1 : 0; lernZaehler(ok); save(); kk++; if (kk >= deck.length) { toast("Runde geschafft!"); neuesDeck(); } karte(); });
 }
 $("#gq").addEventListener("input", draw);
 $$(".seg button").forEach(b => b.onclick = () => { tab = b.dataset.t; draw(); });
 draw();
}

/* ---------- Einstellungen & Datensicherung ---------- */
function exportBackup() {
 const blob = new Blob([JSON.stringify({ app: "smm-coach", v: 1, date: new Date().toISOString(), data: S }, null, 1)], { type: "application/json" });
 const name = `smm-coach-sicherung-${new Date().toISOString().slice(0, 10)}.json`;
 const done = () => { S.lastBackup = Date.now(); save(); toast("Sicherung erstellt"); if (location.hash === "#einstellungen") viewEinstellungen({ keep: true }); };
 const file = new File([blob], name, { type: "application/json" });
 // Erst nach erfolgreichem Teilen/Herunterladen als gesichert merken
 if (navigator.canShare?.({ files: [file] }) && platform().os !== "desktop") { navigator.share({ files: [file], title: "SMM Coach Sicherung" }).then(done).catch(() => toast("Sicherung nicht abgeschlossen")); return; }
 const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
 done();
}
const summary = st => `${Object.values(st.lek || {}).filter(Boolean).length} Lektionen, ${Object.keys(st.q || {}).length} Fragen bearbeitet, ${(st.tests || []).length} Probetests`;
function importBackup(file) {
 const r = new FileReader();
 r.onload = () => {
  try {
   const x = JSON.parse(r.result);
   const d = x && x.data;
   if (x.app !== "smm-coach" || !d || typeof d !== "object" || typeof (d.lek || {}) !== "object" || typeof (d.q || {}) !== "object" || !Array.isArray(d.tests || [])) throw new Error();
   viewEinstellungen({ keep: true, pending: x });
  } catch (e) { toast("Das ist keine gültige SMM-Coach-Sicherung"); }
 };
 r.readAsText(file);
}
function viewEinstellungen(o = {}) {
 const confirmReset = !!o.reset, pend = o.pending;
 const seg = (key, opts, label) => `<div class="seg" role="group" aria-label="${label}">${opts.map(([v, t]) => `<button type="button" data-${key}="${v}" aria-pressed="${(S.set[key] || "") === v}" class="${(S.set[key] || "") === v ? "on" : ""}">${t}</button>`).join("")}</div>`;
 const lb = S.lastBackup ? new Date(S.lastBackup).toLocaleDateString("de-DE") : "noch nie";
 page("einstellungen", `${head("Einstellungen")}<h1 class="sr-only">Einstellungen</h1>
 <div class="card"><h2 class="h3">Schriftgröße</h2><p class="small muted" style="margin:2px 0 10px">Gilt für die ganze App.</p>${seg("size", [["s", "Klein"], ["m", "Normal"], ["l", "Groß"], ["xl", "Sehr groß"]], "Schriftgröße")}</div>
 <div class="card"><h2 class="h3">Design</h2><p class="small muted" style="margin:2px 0 10px">„Automatisch“ folgt der Einstellung deines Geräts.</p>${seg("theme", [["auto", "Automatisch"], ["light", "Hell"], ["dark", "Dunkel"]], "Design")}</div>
 <div class="card" id="lernhilfen"><h2 class="h3">Lernhilfen</h2><p class="small muted" style="margin:2px 0 6px">Für mehr Fokus und weniger Überforderung – zum Beispiel bei ADHS.</p>
  ${[["focus", "Fokusmodus", "Blendet Statistiken und Extras aus – nur das Nötigste bleibt."], ["step", "Schritt für Schritt", "Lektionskarten zeigen Satz für Satz bzw. Punkt für Punkt – weiter mit Tippen."], ["calm", "Ruhige Darstellung", "Keine Animationen, gedämpfte Farben, gut lesbare Schrift mit mehr Abstand."], ["vibe", "Vibration bei Antworten", "Kurzes Feedback bei richtig und falsch (nicht auf iPhone)."]].map(([k, t, d]) => `<label class="check sw"><input type="checkbox" data-opt="${k}" ${(k === "vibe" || k === "step" ? S.set[k] !== false : !!S.set[k]) ? "checked" : ""}><span><b>${t}</b><span class="small muted">${d}</span></span></label>`).join("")}
  <h3 class="small" style="margin:14px 0 6px">Tagesziel</h3>${seg("goal", [["10", "10 Fragen"], ["15", "15 Fragen"], ["25", "25 Fragen"]], "Tagesziel")}
  <h3 class="small" style="margin:14px 0 6px">Pausen-Erinnerung</h3>${seg("pomo", [["", "Aus"], ["10", "Nach 10 Min."], ["25", "Nach 25 Min."]], "Pausen-Erinnerung")}
  <h3 class="small" style="margin:14px 0 6px">Zeit im Probetest</h3>${seg("clock", [["", "Ruhig (Balken)"], ["genau", "Genau (Sekunden)"]], "Zeitanzeige im Probetest")}
  <p class="small muted" style="margin-top:12px">Vorlesen: Tippe in Lektionen und Fragen auf ${ic("speaker", 'style="width:16px;height:16px;vertical-align:-3px"')}.</p></div>
 <div class="card" id="sicherung"><h2 class="h3">Lernstand sichern</h2><p class="small muted" style="margin:2px 0 12px">Dein Fortschritt liegt nur auf diesem Gerät. Mit einer Sicherungsdatei kannst du ihn wiederherstellen oder auf ein anderes Gerät mitnehmen. Letzte Sicherung: ${lb}.</p>
  <div class="row"><button class="btn" id="exp">${ic("download")} Sicherung erstellen</button><label class="btn ghost" for="imp">${ic("upload")} Wiederherstellen</label><input type="file" id="imp" accept="application/json,.json" hidden></div>
  ${pend ? `<div class="tip" role="alert" style="margin-top:12px">${ic("warn", 'style="color:var(--bad)"')}<span><b>Lernstand ersetzen?</b><br>Sicherung vom ${esc(new Date(pend.date || 0).toLocaleDateString("de-DE"))}: ${summary(pend.data)}.<br>Aktuell auf diesem Gerät: ${summary(S)}.</span></div><div class="row"><button class="btn ghost" id="impno">Abbrechen</button><button class="btn" id="impyes">Ersetzen</button></div>` : ""}
  <p class="small muted" style="margin-top:10px" id="storeinfo"></p></div>
 <div class="card"><h2 class="h3">App</h2><p class="small muted" style="margin:2px 0 10px">Installierte Version: ${VERSION}</p><div class="row" style="margin-top:8px"><button class="btn" id="upchk">${ic("repeat")} Nach Updates suchen</button><button class="btn ghost" id="inst">Als App installieren</button><a class="btn ghost" href="#lehrgang">Prüfungstermin</a></div></div>
 <div class="card" id="loeschen"><h2 class="h3">Fortschritt löschen</h2><p class="small muted" style="margin:2px 0 12px">Löscht Lektionen, Fragen, Wiederholungen und Testergebnisse auf diesem Gerät.</p>
  ${confirmReset ? `<div class="tip">${ic("warn", 'style="color:var(--bad)"')}<span>Wirklich alles löschen? Das lässt sich nur mit einer Sicherungsdatei rückgängig machen.</span></div><div class="row"><button class="btn ghost" id="rno">Abbrechen</button><button class="btn danger" id="ryes">${ic("trash")} Endgültig löschen</button></div>` : `<button class="btn ghost" id="reset">${ic("trash")} Fortschritt löschen</button>`}</div>
 <p class="small muted" style="text-align:center;margin-top:20px">SMM Coach · Version ${VERSION}<br>Unabhängiges Lernangebot, kein offizielles Angebot der IHK oder der HSB Akademie.</p>`, { keep: o.keep });
 const refocus = sel => { viewEinstellungen({ keep: true }); $(sel)?.focus({ preventScroll: true }); };
 $$("button[data-size]").forEach(b => b.onclick = () => { S.set.size = b.dataset.size; save(); applySettings(); refocus(`button[data-size="${b.dataset.size}"]`); });
 $$("button[data-theme]").forEach(b => b.onclick = () => { S.set.theme = b.dataset.theme; save(); applySettings(); refocus(`button[data-theme="${b.dataset.theme}"]`); });
 ["goal", "pomo", "clock"].forEach(k => $$(`button[data-${k}]`).forEach(b => b.onclick = () => { S.set[k] = b.dataset[k]; if (k === "pomo") pomo0 = 0; save(); refocus(`button[data-${k}="${b.dataset[k]}"]`); }));
 $$("[data-opt]").forEach(c => c.onchange = () => { S.set[c.dataset.opt] = c.checked; save(); applySettings(); if (c.dataset.opt === "vibe" && c.checked) buzz(30); toast(`${{ focus: "Fokusmodus", step: "Schritt für Schritt", calm: "Ruhige Darstellung", vibe: "Vibration" }[c.dataset.opt]} ${c.checked ? "an" : "aus"}`); });
 $("#impno")?.addEventListener("click", () => viewEinstellungen({ keep: true }));
 $("#impyes")?.addEventListener("click", () => { S = Object.assign(DEF(), pend.data); normalizeState(); save(); applySettings(); toast("Lernstand wiederhergestellt"); viewEinstellungen({ keep: true }); });
 $("#exp").onclick = exportBackup;
 $("#upchk").onclick = async () => {
  const b = $("#upchk"); b.disabled = true; b.textContent = "Suche …";
  try {
   const reg = await navigator.serviceWorker?.getRegistration();
   if (!reg) { location.reload(); return; }
   await reg.update();
   await new Promise(r => setTimeout(r, 1500));
   const w = reg.waiting || reg.installing;
   if (w) { updateBanner(w); toast("Neue Version gefunden"); }
   else toast(`Du hast die aktuelle Version (${VERSION})`);
  } catch (e) { toast("Keine Verbindung – später nochmal versuchen"); }
  b.disabled = false; b.innerHTML = `${ic("repeat")} Nach Updates suchen`;
 };
 $("#imp").onchange = e => e.target.files[0] && importBackup(e.target.files[0]);
 $("#inst").onclick = () => { const p = platform(); if (p.standalone) toast("Die App ist bereits installiert"); else if (p.os === "desktop") toast("Am Computer: Installieren-Symbol in der Adresszeile"); else installGate(true); };
 $("#reset")?.addEventListener("click", () => viewEinstellungen({ keep: true, reset: true }));
 $("#rno")?.addEventListener("click", () => viewEinstellungen({ keep: true }));
 if (confirmReset) $("#ryes")?.focus({ preventScroll: false });
 if (pend) $("#impyes")?.scrollIntoView({ block: "center" });
 $("#ryes")?.addEventListener("click", () => { const keep = { set: S.set, lastBackup: S.lastBackup }; S = Object.assign(DEF(), keep); save(); toast("Fortschritt gelöscht"); location.replace("#start"); });
 (async () => { try { const p = await navigator.storage?.persisted?.(); $("#storeinfo").textContent = `${IDB.db ? "✓ Doppelte Speicherung aktiv" : "Nur einfache Speicherung"} · ${p ? "✓ Dauerhafter Speicher vom Browser bestätigt" : "Dauerhafter Speicher nicht bestätigt – am sichersten: App installieren und ab und zu sichern."}`; } catch (e) {} })();
}

/* ---------- Updates: neue Version anbieten ---------- */
function updateBanner(worker) {
 if ($("#upd")) return;
 const el = document.createElement("div"); el.id = "upd"; el.className = "upd"; el.setAttribute("role", "status");
 el.innerHTML = `<span><b>Neue Version verfügbar</b><span class="small">Mit neuen Inhalten und Verbesserungen.</span></span><button class="btn white">Jetzt aktualisieren</button>`;
 el.querySelector("button").onclick = () => { worker.postMessage({ type: "SKIP_WAITING" }); el.querySelector("button").textContent = "Wird aktualisiert …"; setTimeout(() => location.reload(), 2500); };
 document.body.appendChild(el);
}
if ("serviceWorker" in navigator && location.protocol === "https:") {
 navigator.serviceWorker.getRegistration().then(reg => {
  if (!reg) return;
  if (reg.waiting && navigator.serviceWorker.controller) updateBanner(reg.waiting);
  reg.addEventListener("updatefound", () => { const w = reg.installing; w?.addEventListener("statechange", () => { if (w.state === "installed" && navigator.serviceWorker.controller) updateBanner(w); }); });
  setInterval(() => reg.update().catch(() => {}), 60 * 60000);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") reg.update().catch(() => {}); });
 }).catch(() => {});
 let reloaded = false;
 navigator.serviceWorker.addEventListener("controllerchange", () => { if (!reloaded && $("#upd")) { reloaded = true; location.reload(); } });
}
storageInit();
