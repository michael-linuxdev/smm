import { MODULE, FRAGEN } from "./data/kurs.js";

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
 bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 warn: '<path d="M12 3l10 18H2zM12 10v5M12 18v.5"/>',
 copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V5a1 1 0 011-1h11"/>',
 shuffle: '<path d="M3 6h4l10 12h4M3 18h4l3-3.5M14 9.5L17 6h4M18 3l3 3-3 3M18 15l3 3-3 3"/>'
};
const ic = (n, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${I[n]}</svg>`;

/* ---------- Speicher ---------- */
let S = { lek: {}, q: {}, last: null, tests: [], pruefung: "" };
try { Object.assign(S, JSON.parse(localStorage.getItem("smm-coach") || "{}")); } catch (e) {}
const save = () => { try { localStorage.setItem("smm-coach", JSON.stringify(S)); } catch (e) {} };
function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("on"), 2200); }

/* ---------- Fragenpool ---------- */
// Alle Fragen eines Moduls: Quizfragen + Verständnisfragen aus den Lektionen. Schlüssel stabil über Text.
const POOL = [];
MODULE.forEach(m => m.lektionen.forEach(l => l.folien.filter(f => f.k === "check").forEach(f => POOL.push({ m: m.id, q: f.q, a: f.a, c: f.c, e: f.e }))));
FRAGEN.forEach(f => POOL.push(f));
POOL.forEach((p, i) => p.key = p.m + ":" + p.q.slice(0, 40));

const lekDone = m => m.lektionen.filter(l => S.lek[m.id + "/" + l.id]).length;
const modPool = id => POOL.filter(p => p.m === id);
const qDone = id => modPool(id).filter(p => S.q[p.key]).length;
const modProgress = m => { const a = lekDone(m) / m.lektionen.length, b = qDone(m.id) / modPool(m.id).length; return a * .5 + b * .5; };
const allProgress = () => MODULE.reduce((s, m) => s + modProgress(m), 0) / MODULE.length;

function ringSvg(p, size = 76, w = 4, track = "var(--line)", color = null) {
 const r = (size - w) / 2, c = 2 * Math.PI * r, id = "g" + Math.random().toString(36).slice(2, 7);
 return `<svg class="prog" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5a5f"/><stop offset=".5" stop-color="#e83e8c"/><stop offset="1" stop-color="#7048e8"/></linearGradient></defs><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${track}" stroke-width="${w}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color || `url(#${id})`}" stroke-width="${w}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - Math.max(.0001, p))}"/></svg>`;
}

/* ---------- Router ---------- */
const TABS = [["start", "Start", "home"], ["lernen", "Lernen", "book"], ["pruefung", "Prüfung", "exam"], ["lehrgang", "Lehrgang", "info"]];
function tabbar(active) {
 return `<nav class="tabbar" aria-label="Navigation">${TABS.map(([h, t, i]) => `<a href="#${h}" class="${active === h ? "on" : ""}">${ic(i)}<span>${t}</span></a>`).join("")}</nav>`;
}
function page(active, html) { app.innerHTML = `<div class="wrap">${html}</div>${tabbar(active)}`; window.scrollTo(0, 0); }
function head() { return `<div class="top"><div class="logo">${ic("bolt", 'stroke="#fff"')}</div><div class="t">SMM Coach<small>Social Media Manager (IHK)</small></div></div>`; }

function route() {
 closeStory(); clearInterval(testTimer);
 const h = (location.hash || "#start").slice(1);
 const [a, b, ...rest] = h.split("-");
 if (a === "lektion" && b) return openStory(b, rest.join("-"));
 if (a === "modul" && b) return viewModul(b);
 if (a === "quiz") return viewQuiz(b || "mix");
 if (h === "lernen") return viewLernen();
 if (h === "pruefung") return viewPruefung();
 if (h === "test") return viewTest();
 if (h === "lehrgang") return viewLehrgang();
 return viewStart();
}
addEventListener("hashchange", route);

/* ---------- Start ---------- */
function nextLesson() {
 for (const m of MODULE) for (const l of m.lektionen) if (!S.lek[m.id + "/" + l.id]) return { m, l };
 return null;
}
function ringsHtml() {
 return `<div class="rings">${MODULE.map(m => {
  const p = modProgress(m);
  return `<a class="ring" href="#modul-${m.id}" style="text-decoration:none"><div class="r">${ringSvg(p)}<div class="ic" style="background:${modGrad(m)}">${ic(m.id)}</div>${p >= .999 ? `<div class="done-badge">${ic("check", 'stroke="#fff" stroke-width="3"')}</div>` : ""}</div><div class="lbl">${m.kurz}</div></a>`;
 }).join("")}</div>`;
}
const PASS = 70; // Bestehensgrenze: Annahme, nicht offiziell bestätigt
function daysLeft() { if (!S.pruefung) return null; const d = Math.ceil((new Date(S.pruefung + "T09:00") - Date.now()) / 86400000); return isNaN(d) ? null : d; }
function viewStart() {
 const p = allProgress(), n = nextLesson(), dl = daysLeft();
 const lessonsDone = Object.values(S.lek).filter(Boolean).length, lessonsAll = MODULE.reduce((s, m) => s + m.lektionen.length, 0);
 const best = S.tests.length ? Math.max(...S.tests) : null;
 const perWeek = dl > 0 ? Math.ceil((lessonsAll - lessonsDone) / Math.max(1, dl / 7)) : null;
 page("start", `${head()}
 <section class="hero">
  <div class="kicker">${dl !== null && dl >= 0 ? (dl === 0 ? "Heute ist Prüfung – viel Erfolg!" : `Noch ${dl} Tag${dl === 1 ? "" : "e"} bis zur Prüfung`) : p > 0 ? "Weiter so" : "Willkommen"}</div>
  <h1>${p > 0 ? `${Math.round(p * 100)} % geschafft` : "Werde Social Media Manager"}</h1>
  <p style="opacity:.92;max-width:460px">${p > 0 ? (perWeek ? `Plan: etwa ${perWeek} Lektion${perWeek === 1 ? "" : "en"} pro Woche, dann passt es bis zur Prüfung.` : "Kurze Lektionen, dann Quiz – so bleibt das Wissen hängen.") : "Vorbereitung auf den Abschlusstest beim IHK-Bildungszentrum Dresden: Story-Lektionen, Quiz, Freitext-Training und Probetest wie im Original."}</p>
  <div class="hero-stat"><div><b>${lessonsDone}/${lessonsAll}</b><span>Lektionen</span></div><div><b>${POOL.filter(q => S.q[q.key]).length}</b><span>Fragen sicher</span></div><div><b>${best === null ? "–" : best + " %"}</b><span>Bester Test</span></div></div>
  ${n ? `<div class="row"><a class="btn white" href="#lektion-${n.m.id}-${n.l.id}">${ic("play")} ${p > 0 ? "Weiterlernen" : "Erste Lektion starten"}</a></div>` : ""}
 </section>
 ${S.pruefung ? "" : `<a class="cont" href="#lehrgang" style="margin-bottom:6px"><div class="thumb" style="background:var(--grad-strong)">${ic("cal")}</div><div><b style="font-size:16px">Prüfungstermin eintragen</b><div class="small muted">Dann zeigt dir die App, wie viel du pro Woche lernen solltest.</div></div><span class="chev" style="margin-left:auto;color:var(--ink-3)">${ic("right")}</span></a>`}
 <div class="sec-h"><h2>Deine Module</h2><a class="small muted" href="#lernen">Alle anzeigen</a></div>
 ${ringsHtml()}
 ${n ? `<div class="sec-h"><h2>Als Nächstes</h2></div>
 <a class="cont" href="#lektion-${n.m.id}-${n.l.id}"><div class="thumb" style="background:${modGrad(n.m)}">${ic(n.m.id)}</div><div><div class="small muted">${n.m.name} · ${n.l.min} Min.</div><b style="font-size:17px">${n.l.titel}</b></div><div class="play">${ic("play", 'style="color:#fff"')}</div></a>` : ""}
 <div class="sec-h"><h2>Trainieren</h2></div>
 <div class="tiles">
  <a class="tile" href="#quiz-mix"><div class="ti" style="background:linear-gradient(135deg,#c2410c,#c92a2a)">${ic("shuffle")}</div><b>Schnell-Quiz</b><span>10 gemischte Fragen aus allen Modulen</span></a>
  <a class="tile" href="#quiz-frei"><div class="ti" style="background:linear-gradient(135deg,#a61e4d,#6741d9)">${ic("pen")}</div><b>Freitext üben</b><span>${FREI_POOL().length} offene Fragen mit Musterlösung</span></a>
  <a class="tile" href="#test"><div class="ti" style="background:var(--grad-strong)">${ic("exam")}</div><b>Probetest</b><span>30 Fragen in 60 Minuten – wie in Dresden</span></a>
  <a class="tile" href="#lehrgang"><div class="ti" style="background:linear-gradient(135deg,#2b8a3e,#1864ab)">${ic("info")}</div><b>Lehrgang & Karriere</b><span>Ablauf, Prüfung, Kosten, Gehalt und Jobs</span></a>
 </div>`);
}

/* ---------- Lernen ---------- */
function viewLernen() {
 page("lernen", `${head()}<h1 style="margin-bottom:6px">Lernen</h1><p class="muted" style="margin-bottom:18px">Sechs Module – jedes mit kurzen Lektionen und einem Quiz.</p>
 ${MODULE.map(m => { const p = modProgress(m); return `<a class="cont" href="#modul-${m.id}" style="text-decoration:none;margin-bottom:12px"><div class="thumb" style="background:${modGrad(m)}">${ic(m.id)}</div><div style="flex:1;min-width:0"><b style="font-size:17px">${m.name}</b><div class="small muted">${lekDone(m)}/${m.lektionen.length} Lektionen · ${qDone(m.id)}/${modPool(m.id).length} Fragen</div><div class="bar dark" style="margin-top:8px"><i style="width:${p * 100}%"></i></div></div></a>`; }).join("")}`);
}
function viewModul(id) {
 const m = modById(id); if (!m) return viewLernen();
 const d = lekDone(m), all = d === m.lektionen.length;
 page("lernen", `<a class="back" href="#lernen">${ic("left")} Module</a>
 <section class="mod-head" style="--m:${m.farbe}"><div class="ic">${ic(m.id)}</div><h1>${m.name}</h1><p>${m.text}</p><div class="bar"><i style="width:${modProgress(m) * 100}%"></i></div></section>
 <ol class="steps">${m.lektionen.map((l, i) => { const ok = S.lek[m.id + "/" + l.id]; return `<li><div class="dot ${ok ? "ok" : ""}" style="${ok ? `background:${shade(m.farbe, .6)}` : ""}">${ok ? ic("check", 'stroke-width="3"') : i + 1}</div><a class="item" href="#lektion-${m.id}-${l.id}" style="display:flex;align-items:center;gap:10px;width:100%;text-decoration:none;background:var(--surface);border-radius:18px;padding:14px 16px;box-shadow:var(--shadow)"><div><b>${l.titel}</b><span class="small muted">${l.folien.length} Karten · ${l.min} Min.${ok ? " · erledigt" : ""}</span></div><span class="chev">${ic("right")}</span></a></li>`; }).join("")}
 <li><div class="dot" style="${all ? "background:var(--grad);color:#fff" : ""}">${ic(all ? "bolt" : "lock")}</div><a class="item" href="#quiz-${m.id}" style="display:flex;align-items:center;gap:10px;width:100%;text-decoration:none;background:var(--surface);border-radius:18px;padding:14px 16px;box-shadow:var(--shadow)"><div><b>Modul-Quiz</b><span class="small muted">${modPool(m.id).length} Fragen · ${qDone(m.id)} sicher${all ? "" : " · empfohlen nach den Lektionen"}</span></div><span class="chev">${ic("right")}</span></a></li></ol>`);
}

/* ---------- Story-Player (Erstvermittlung) ---------- */
let storyEl = null, storyKey = null;
function closeStory() { if (storyEl) { storyEl.remove(); storyEl = null; if (!document.getElementById("gate")) document.body.classList.remove("no-scroll"); removeEventListener("keydown", storyKey); } }
function openStory(mid, lid) {
 const m = modById(mid), l = m && m.lektionen.find(x => x.id === lid);
 if (!l) return viewLernen();
 viewModul(mid);
 S.last = mid + "/" + lid; save();
 const F = [...l.folien, { k: "ende" }];
 let i = 0, answered = {};
 storyEl = document.createElement("div");
 storyEl.className = "story"; storyEl.style.setProperty("--m", m.farbe);
 storyEl.setAttribute("role", "dialog"); storyEl.setAttribute("aria-label", l.titel);
 document.body.appendChild(storyEl); document.body.classList.add("no-scroll");
 const go = d => { const f = F[i]; if (d > 0 && f.k === "check" && !(i in answered)) return toast("Wähle zuerst eine Antwort"); i = Math.max(0, Math.min(F.length - 1, i + d)); draw(); };
 storyKey = e => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); if (e.key === "Escape") location.hash = "modul-" + mid; };
 addEventListener("keydown", storyKey);
 function draw() {
  const f = F[i], last = f.k === "ende";
  const kindName = { intro: "Lektion", text: "Wissen", liste: "Überblick", beispiel: "Beispiel", merke: "Merke", check: "Kurz-Check" }[f.k] || "";
  let body = "";
  if (f.k === "liste") body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><ul>${f.l.map((x, n) => `<li style="animation-delay:${n * 60}ms">${md(x)}</li>`).join("")}</ul>`;
  else if (f.k === "beispiel" || f.k === "merke") body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><div class="body">${md(f.b)}</div>`;
  else if (f.k === "check") {
   const order = f._o || (f._o = shuf(f.a.map((t, k) => k)));
   const a = answered[i];
   body = `<span class="kind">${kindName}</span><h2 style="font-size:1.3em">${md(f.q)}</h2>${order.map((k, n) => { let cl = ""; if (a !== undefined) cl = k === f.c ? "ok" : k === a ? "bad" : "dim"; return `<button class="opt ${cl}" data-k="${k}"><span class="l">${"ABCD"[n]}</span><span>${esc(f.a[k])}</span></button>`; }).join("")}${a !== undefined ? `<div class="fb ${a === f.c ? "ok" : "bad"}"><b>${a === f.c ? "Richtig!" : "Nicht ganz."}</b>${esc(f.e)}</div>` : ""}`;
  }
  else if (last) body = `<div style="text-align:center"><div class="confetti">🎉</div><span class="kind">Geschafft</span><h2>${esc(l.titel)}</h2><div class="body">Lektion abgeschlossen. ${nextIn(m, l) ? "Weiter mit der nächsten Lektion?" : "Jetzt im Modul-Quiz festigen!"}</div></div>`;
  else body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><div class="body">${md(f.b)}</div>`;
  const nx = nextIn(m, l);
  storyEl.innerHTML = `<div class="segs">${F.slice(0, -1).map((_, n) => `<i class="${n < i || last ? "on" : ""}"><b style="${n === i ? "width:100%" : ""}"></b></i>`).join("")}</div>
  <div class="shead"><div class="av">${ic(m.id)}</div><div class="n">${esc(l.titel)}<small>${esc(m.name)}</small></div><button class="x" aria-label="Schließen">${ic("x")}</button></div>
  <div class="stage">${f.k !== "check" && !last ? '<div class="tapzone l"></div><div class="tapzone r"></div>' : ""}<div class="slide ${f.k === "beispiel" || f.k === "merke" ? "note" : ""}">${body}</div></div>
  <div class="snav">${i > 0 ? `<button class="btn prev" aria-label="Zurück">${ic("left")}</button>` : ""}${last ? (nx ? `<a class="btn" href="#lektion-${m.id}-${nx.id}">Nächste Lektion ${ic("right")}</a>` : `<a class="btn" href="#quiz-${m.id}">Zum Modul-Quiz ${ic("right")}</a>`) : `<button class="btn next">Weiter ${ic("right")}</button>`}</div>`;
  if (last) { S.lek[m.id + "/" + l.id] = true; save(); }
  $(".x", storyEl).onclick = () => location.hash = "modul-" + mid;
  $(".next", storyEl)?.addEventListener("click", () => go(1));
  $(".prev", storyEl)?.addEventListener("click", () => go(-1));
  $(".tapzone.l", storyEl)?.addEventListener("click", () => go(-1));
  $(".tapzone.r", storyEl)?.addEventListener("click", () => go(1));
  fitSlide();
  $$(".opt", storyEl).forEach(b => b.onclick = () => { if (i in answered) return; answered[i] = +b.dataset.k; const p = POOL.find(p => p.q === f.q); if (p && answered[i] === f.c) S.q[p.key] = true; save(); draw(); });
 }
 draw();
}
// Kein Scrollen in Storys: Schrift so lange verkleinern, bis die Karte in die Bühne passt.
function fitSlide() {
 const stage = $(".stage", storyEl), slide = $(".slide", storyEl); if (!stage || !slide) return;
 let k = 1; slide.style.setProperty("--k", k);
 while (slide.scrollHeight > stage.clientHeight - 8 && k > .55) { k -= .04; slide.style.setProperty("--k", k.toFixed(2)); }
}
addEventListener("resize", () => storyEl && fitSlide());
function nextIn(m, l) { const k = m.lektionen.indexOf(l); return m.lektionen[k + 1] || null; }

/* ---------- Quiz ---------- */
const FREI_POOL = () => POOL.filter(q => q.t === "frei");
const MC_POOL = () => POOL.filter(q => q.t !== "frei");
const freiMatch = (q, txt) => q.muster.map(([, kw]) => { try { return new RegExp(kw, "i").test(txt); } catch (e) { return false; } });
function chip(q) { const m = modById(q.m); return `<span class="chip" style="background:color-mix(in srgb,${m.farbe} 14%,var(--surface));color:color-mix(in srgb,${m.farbe} 58%,#000)">${m.kurz}${q.t === "frei" ? " · Freitext" : ""}</span>`; }
function quizCard(q, meta) {
 if (q.t === "frei") return { html: `<div class="qcard"><div class="qtop">${chip(q)}<span class="small muted">${meta}</span></div><div class="qtext">${esc(q.q)}</div><textarea id="ftxt" placeholder="Deine Antwort in Stichpunkten …" style="min-height:140px"></textarea><div class="fbx"></div></div>` };
 const order = shuf(q.a.map((_, k) => k));
 return { order, html: `<div class="qcard"><div class="qtop">${chip(q)}<span class="small muted">${meta}</span></div><div class="qtext">${esc(q.q)}</div>${order.map((k, n) => `<button class="opt" data-k="${k}"><span class="l">${"ABCD"[n]}</span><span>${esc(q.a[k])}</span></button>`).join("")}<div class="fbx"></div></div>` };
}
function musterHtml(q, txt) {
 const hit = freiMatch(q, txt || ""), n = hit.filter(Boolean).length;
 return `<div class="fb ${n >= q.min ? "ok" : "bad"}" style="margin-top:12px"><b>Musterlösung</b><span class="small">Gefordert: mindestens ${q.min} Punkt${q.min > 1 ? "e" : ""}. ${txt ? `In deiner Antwort erkannt: ${n}.` : ""}</span><ul class="muster">${q.muster.map(([t], i) => `<li class="${hit[i] ? "hit" : ""}">${ic(hit[i] ? "check" : "right", 'stroke-width="3"')}<span>${esc(t)}</span></li>`).join("")}</ul><span class="small muted">Die Erkennung ist nur eine Hilfe – entscheide selbst, ob deine Antwort passt.</span></div>`;
}
function viewQuiz(id) {
 const m = modById(id), isMix = id === "mix", isFrei = id === "frei";
 let list = isMix ? shuf(MC_POOL()).slice(0, 10) : isFrei ? shuf(FREI_POOL()) : shuf(modPool(id)).sort((a, b) => (S.q[a.key] ? 1 : 0) - (S.q[b.key] ? 1 : 0));
 if (!m && !isMix && !isFrei) return viewLernen();
 const total = list.length; let queue = list.slice(), first = 0, miss = new Set(), n = 0;
 const backHref = m ? "#modul-" + id : "#start", tab = m ? "lernen" : "start";
 next();
 function next() {
  if (!queue.length) return done();
  const q = queue.shift(); n++;
  const { html } = quizCard(q, miss.has(q) ? "Wiederholung" : `${Math.min(n, total)} / ${total}`);
  page(tab, `<a class="back" href="${backHref}">${ic("x")} Beenden</a><div class="bar dark" style="margin:0 0 16px"><i style="width:${(1 - (queue.length + 1) / (total + miss.size)) * 100}%"></i></div>${html}`);
  const rate = ok => { if (ok) { S.q[q.key] = true; if (!miss.has(q)) first++; } else { S.q[q.key] = false; miss.add(q); queue.push(q); } save(); };
  const weiter = () => { $(".fbx").insertAdjacentHTML("beforeend", `<button class="btn block" style="margin-top:14px" id="nx">Weiter ${ic("right")}</button>`); $("#nx").onclick = next; $("#nx").focus(); };
  if (q.t === "frei") {
   $(".fbx").innerHTML = `<button class="btn ghost block" style="margin-top:12px" id="show">Musterlösung anzeigen</button>`;
   $("#show").onclick = () => {
    const txt = $("#ftxt").value; $("#ftxt").readOnly = true;
    $(".fbx").innerHTML = musterHtml(q, txt) + `<p style="font-weight:700;margin:14px 0 8px">Wie gut war deine Antwort?</p><div class="row"><button class="btn ghost" data-r="0" style="flex:1">Daneben</button><button class="btn ghost" data-r="1" style="flex:1">Teilweise</button><button class="btn" data-r="2" style="flex:1">Richtig</button></div>`;
    $$("[data-r]").forEach(b => b.onclick = () => { rate(b.dataset.r === "2"); $(".fbx .row").remove(); $(".fbx p:last-of-type")?.remove(); toast(b.dataset.r === "2" ? "Stark!" : "Kommt nochmal dran"); weiter(); });
   };
   return;
  }
  $$(".opt").forEach(b => b.onclick = () => {
   if ($(".fbx").innerHTML) return;
   const k = +b.dataset.k, ok = k === q.c;
   $$(".opt").forEach(x => { const xk = +x.dataset.k; x.classList.add(xk === q.c ? "ok" : xk === k ? "bad" : "dim"); });
   rate(ok);
   $(".fbx").innerHTML = `<div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "Richtig!" : "Nicht ganz – die Frage kommt gleich nochmal."}</b>${esc(q.e)}</div>`;
   weiter();
  });
 }
 function done() {
  const p = first / total;
  page(tab, `<div class="qcard result"><div class="big-ring">${ringSvg(p, 150, 12, "var(--surface-2)")}<b>${Math.round(p * 100)}%</b></div><h2>${p >= .8 ? "Stark!" : p >= .5 ? "Gut gemacht!" : "Dranbleiben!"}</h2><p class="muted">${first} von ${total} Fragen beim ersten Versuch richtig.</p><div class="row" style="justify-content:center;margin-top:18px"><a class="btn ghost" href="${backHref}">Zurück</a><button class="btn" id="again">Nochmal</button></div></div>`);
  $("#again").onclick = () => viewQuiz(id);
 }
}

/* ---------- Prüfung ---------- */
function viewPruefung() {
 const best = S.tests.length ? Math.max(...S.tests) : null;
 page("pruefung", `${head()}<h1 style="margin-bottom:6px">Prüfung</h1><p class="muted" style="margin-bottom:18px">Abschlusstest beim IHK-Bildungszentrum Dresden: 30 Fragen, Multiple Choice und Freitext, 60 Minuten, online von zu Hause. <a href="#lehrgang" style="text-decoration:underline">Mehr zum Ablauf</a></p>
 <div class="tiles">
  <a class="tile" href="#test"><div class="ti" style="background:var(--grad-strong)">${ic("exam")}</div><b>Probetest</b><span>30 Fragen · 60 Min. · Bestehen ab ${PASS} %*${best !== null ? ` · Bestwert ${best} %` : ""}</span></a>
  <a class="tile" href="#quiz-frei"><div class="ti" style="background:linear-gradient(135deg,#a61e4d,#6741d9)">${ic("pen")}</div><b>Freitext üben</b><span>Offene Fragen mit Musterlösung und Selbstcheck</span></a>
  <a class="tile" href="#quiz-mix"><div class="ti" style="background:linear-gradient(135deg,#c2410c,#c92a2a)">${ic("shuffle")}</div><b>Schnell-Quiz</b><span>10 Multiple-Choice-Fragen</span></a>
 </div>
 <p class="small muted" style="margin-top:12px">* Die Bestehensgrenze ist nicht veröffentlicht. Die App rechnet vorsichtig mit ${PASS} % – frag bei der HSB Akademie oder dem IHK-Bildungszentrum Dresden nach.</p>
 ${S.tests.length ? `<div class="sec-h"><h2>Deine Probetests</h2></div><div class="card"><div class="row" style="align-items:flex-end;gap:8px;height:130px">${S.tests.slice(-10).map(t => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><span class="small muted">${t}</span><div style="width:100%;max-width:36px;height:${Math.max(6, t)}px;border-radius:8px;background:${t >= PASS ? "var(--grad-strong)" : "var(--bad-soft)"}"></div></div>`).join("")}</div></div>` : ""}`);
}
let testTimer = null;
function viewTest() {
 clearInterval(testTimer);
 const nMC = Math.min(22, MC_POOL().length), nFr = Math.min(30 - nMC, FREI_POOL().length);
 page("pruefung", `<a class="back" href="#pruefung">${ic("left")} Prüfung</a><section class="hero"><div class="kicker">Probetest wie in Dresden</div><h1>${nMC + nFr} Fragen · 60 Minuten</h1><p style="opacity:.95">${nMC} Multiple-Choice- und ${nFr} Freitext-Fragen aus allen sechs Themen. Kein Feedback zwischendurch. Am Ende bewertest du deine Freitext-Antworten selbst anhand der Musterlösung. Bestanden ab ${PASS} % (Annahme).</p><div class="row"><button class="btn white" id="go">${ic("clock")} Test starten</button></div></section>`);
 $("#go").onclick = () => {
  const list = shuf([...shuf(MC_POOL()).slice(0, nMC), ...shuf(FREI_POOL()).slice(0, nFr)]), ans = []; let p = 0;
  const end = Date.now() + 60 * 60000;
  const tick = () => { const r = Math.max(0, end - Date.now()), el = $("#timer"); if (el) { el.textContent = `${Math.floor(r / 60000)}:${String(Math.floor(r / 1000) % 60).padStart(2, "0")}`; el.classList.toggle("low", r < 5 * 60000); } if (r <= 0) { clearInterval(testTimer); toast("Die Zeit ist um"); result(); } };
  testTimer = setInterval(tick, 1000);
  step();
  function step() {
   if (p === list.length) { clearInterval(testTimer); return result(); }
   const q = list[p], { html } = quizCard(q, `Frage ${p + 1} / ${list.length}`);
   page("pruefung", `<div class="row" style="justify-content:space-between;margin-bottom:12px"><a class="back" href="#pruefung" style="margin:0">${ic("x")} Abbrechen</a><span class="timer" id="timer">60:00</span></div><div class="bar dark" style="margin:0 0 16px"><i style="width:${p / list.length * 100}%"></i></div>${html}`);
   tick();
   if (q.t === "frei") { $(".fbx").innerHTML = `<button class="btn block" style="margin-top:12px" id="nx">Weiter ${ic("right")}</button>`; $("#nx").onclick = () => { ans[p] = $("#ftxt").value; p++; step(); }; return; }
   $$(".opt").forEach(b => b.onclick = () => { b.classList.add("sel"); ans[p] = +b.dataset.k; p++; setTimeout(step, 180); });
  }
  function result() {
   const rated = {};
   const mcOk = list.filter((q, k) => q.t !== "frei" && ans[k] === q.c).length;
   const fr = list.map((q, k) => ({ q, k })).filter(x => x.q.t === "frei");
   draw();
   function draw() {
    const frPts = Object.values(rated).reduce((a, b) => a + b, 0), allRated = fr.every(x => x.k in rated);
    const pct = Math.round((mcOk + frPts) / list.length * 100);
    const wrong = list.map((q, k) => ({ q, a: ans[k] })).filter(x => x.q.t !== "frei" && x.a !== x.q.c);
    page("pruefung", `<div class="qcard result"><div class="big-ring">${ringSvg(pct / 100, 150, 12, "var(--surface-2)", pct >= PASS ? null : "var(--bad)")}<b>${pct}%</b></div><h2>${!allRated ? "Fast fertig" : pct >= PASS ? "Bestanden!" : "Noch nicht bestanden"}</h2><p class="muted">Multiple Choice: ${mcOk} von ${list.length - fr.length} richtig${fr.length ? ` · Freitext: ${allRated ? frPts + " von " + fr.length + " Punkten" : "bitte unten selbst bewerten"}` : ""}</p><p class="small muted">Bestehensgrenze ${PASS} % (Annahme)</p></div>
    ${fr.length ? `<div class="sec-h"><h2>Freitext selbst bewerten</h2></div>${fr.map(({ q, k }) => `<div class="card">${chip(q)}<p style="font-weight:700;margin:10px 0 6px">${esc(q.q)}</p><div class="answer">${ans[k] ? esc(ans[k]) : "<i>Keine Antwort</i>"}</div>${musterHtml(q, ans[k])}<div class="row" style="margin-top:12px">${[[0, "Daneben"], [.5, "Teilweise"], [1, "Richtig"]].map(([v, t]) => `<button class="btn ${rated[k] === v ? "" : "ghost"}" data-k="${k}" data-v="${v}" style="flex:1">${t}</button>`).join("")}</div></div>`).join("")}` : ""}
    ${allRated ? `<div class="row" style="justify-content:center;margin:8px 0 20px"><a class="btn ghost" href="#pruefung">Zurück</a><button class="btn" id="again">Neuer Test</button></div>` : ""}
    ${wrong.length ? `<div class="sec-h"><h2>Multiple Choice nacharbeiten</h2></div>${wrong.map(x => `<div class="card">${chip(x.q)}<p style="font-weight:700;margin-top:10px">${esc(x.q.q)}</p><p class="small" style="color:var(--bad)">Deine Antwort: ${x.a === undefined ? "keine" : esc(x.q.a[x.a])}</p><p class="small" style="color:var(--ok)">Richtig: ${esc(x.q.a[x.q.c])}</p><div class="fb ok" style="margin-top:8px">${esc(x.q.e)}</div></div>`).join("")}` : ""}`);
    $$("[data-v]").forEach(b => b.onclick = () => { const y = scrollY; rated[b.dataset.k] = +b.dataset.v; draw(); scrollTo(0, y); });
    $("#again")?.addEventListener("click", viewTest);
    if (allRated && !draw.saved) { draw.saved = true; list.forEach((q, k) => S.q[q.key] = q.t === "frei" ? rated[k] === 1 : ans[k] === q.c); S.tests.push(pct); save(); }
   }
  }
 };
}

/* ---------- Lehrgang & Karriere (IHK Dresden / HSB Akademie) ----------
   Angaben aus öffentlichen Kursbeschreibungen, Stand 11/2026 – ohne Gewähr. */
const SRC = {
 kurs: ["fernstudi.net – Social Media Manager/-in (IHK), HSB Akademie", "https://www.fernstudi.net/weiterbildung/wirtschaft/public-relations/13937"],
 zfu: ["ZFU – Zulassung Nr. 686514", "https://zfu.de/download-pdf/lehrgangssuche-uebersicht/686514"],
 hsb: ["HSB Akademie", "https://www.hsb-akademie.de"],
 step: ["StepStone – Gehalt Social Media Manager/in", "https://www.stepstone.de/gehalt/Social-Media-Manager-in.html"],
 indeed: ["Indeed – Gehalt Social Media Manager", "https://de.indeed.com/salaries/social-media-manager-Salaries,-DE"]
};
const src = (...k) => `<p class="small muted src">Quelle: ${k.map(x => `<a href="${SRC[x][1]}" target="_blank" rel="noopener">${SRC[x][0]}</a>`).join(" · ")}</p>`;
function viewLehrgang() {
 const dl = daysLeft();
 page("lehrgang", `${head()}<h1 style="margin-bottom:6px">Lehrgang & Karriere</h1><p class="muted" style="margin-bottom:18px">Social Media Manager/-in (IHK) mit Abschlusstest beim IHK-Bildungszentrum Dresden.</p>

 <div class="card"><h2 style="margin-bottom:8px">${ic("cal", 'style="width:22px;height:22px;vertical-align:-4px"')} Dein Prüfungstermin</h2>
  <p class="small muted">Der Termin wird individuell mit dem IHK-Bildungszentrum abgestimmt. Trag ihn ein, sobald du ihn kennst.</p>
  <div class="row" style="margin-top:10px"><input type="date" id="pdate" value="${esc(S.pruefung || "")}" style="flex:1;min-width:180px"><button class="btn ghost" id="pdel" ${S.pruefung ? "" : "hidden"}>Löschen</button></div>
  ${dl !== null ? `<p style="margin-top:10px;font-weight:700">${dl > 0 ? `Noch ${dl} Tag${dl === 1 ? "" : "e"}.` : dl === 0 ? "Heute ist Prüfung – viel Erfolg!" : "Der Termin liegt in der Vergangenheit."}</p>` : ""}
 </div>

 <div class="sec-h"><h2>So läuft der Lehrgang ab</h2></div>
 <ol class="road">
  <li><b>Anmeldung bei der HSB Akademie</b><span>Fernlehrgang aus Leipzig, staatlich zugelassen (ZFU-Nr. 686514). Besondere Voraussetzungen gibt es nicht; Grundkenntnisse in Englisch, Marketing und am PC sind hilfreich.</span></li>
  <li><b>Selbstlernphase online</b><span>Lernmodule auf dem Onlinecampus zu den sechs Themen, die du auch hier in der App findest. Rechne mit etwa 8–10 Stunden pro Woche.</span></li>
  <li><b>Online-Vorlesungen</b><span>Live-Vorlesungen montags 18:30–20:00 Uhr – je nach Angabe 14 bis 16 Termine.</span></li>
  <li><b>Zwei Workshops</b><span>Zwei ganztägige Workshops (9–16 Uhr). Die Teilnahme ist freiwillig, aber empfohlen.</span></li>
  <li><b>Abschlusstest beim IHK-Bildungszentrum Dresden</b><span>Wenn alle Module bearbeitet sind und du nachweist, dass du ausreichend vorbereitet bist, wird der Termin individuell abgestimmt.</span></li>
  <li><b>IHK-Zertifikat</b><span>Mit bestandenem Test erhältst du das Zertifikat „Social Media Manager/-in (IHK)“. Ohne IHK-Test ist auch ein Abschluss mit HSB-Zertifikat möglich.</span></li>
 </ol>
 ${src("kurs", "zfu")}

 <div class="sec-h"><h2>Der Abschlusstest</h2></div>
 <div class="card"><dl class="facts">
  <dt>Form</dt><dd>Online-Test, von zu Hause – kein Prüfungszentrum</dd>
  <dt>Umfang</dt><dd>30 Fragen, Multiple Choice und Freitext</dd>
  <dt>Dauer</dt><dd>60 Minuten</dd>
  <dt>Prüfende Stelle</dt><dd>IHK-Bildungszentrum Dresden gGmbH</dd>
  <dt>Bestehen</dt><dd>Nicht veröffentlicht – die App rechnet mit ${PASS} % (Annahme)</dd>
 </dl>
 <div class="tip good" style="margin-top:12px">${ic("bolt", 'style="color:var(--ok)"')}<span><b>Tipp:</b> Bei Freitext-Fragen in Stichpunkten antworten und genau so viele Punkte nennen, wie gefragt sind. Das trainierst du unter <a href="#quiz-frei" style="text-decoration:underline">Freitext üben</a>.</span></div>
 ${src("kurs")}</div>

 <div class="sec-h"><h2>Kosten & Förderung</h2></div>
 <div class="card"><dl class="facts">
  <dt>Mit IHK-Zertifikat</dt><dd>1.905 € gesamt, inklusive IHK-Testgebühr (umsatzsteuerbefreit)</dd>
  <dt>Nur HSB-Zertifikat</dt><dd>1.700 €</dd>
  <dt>Zahlung</dt><dd>Zinslose Ratenzahlung möglich</dd>
  <dt>Förderung</dt><dd>Bildungsgutschein laut Anbieter möglich – vorher bei Agentur für Arbeit oder Jobcenter klären</dd>
  <dt>Steuer</dt><dd>Berufliche Weiterbildung ist in der Regel als Werbungskosten absetzbar</dd>
 </dl>${src("kurs")}</div>

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

 <p class="small muted" style="margin:24px 0 0">SMM Coach ist ein unabhängiges Lernangebot und kein offizielles Angebot der IHK Dresden, des IHK-Bildungszentrums Dresden oder der HSB Akademie. Alle Angaben ohne Gewähr, Stand November 2026. Verbindlich sind die Informationen des Anbieters.</p>`);
 $("#pdate").onchange = e => { S.pruefung = e.target.value; save(); toast(S.pruefung ? "Prüfungstermin gespeichert" : "Termin gelöscht"); viewLehrgang(); };
 $("#pdel").onclick = () => { S.pruefung = ""; save(); viewLehrgang(); };
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
const GATE_KEY = "smm.gateSkip", GATE_HOURS = 6;
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
  "ios-safari": ["Unten (iPhone) bzw. oben (iPad) auf das Teilen-Symbol {S} tippen.", "Nach unten scrollen und „Zum Home-Bildschirm“ wählen.", "Oben rechts auf „Hinzufügen“ tippen."],
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
const gateSkipped = () => { try { return Date.now() - (+localStorage.getItem(GATE_KEY) || 0) < GATE_HOURS * 3600000; } catch (e) { return false; } };
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
   <div class="top"><div class="logo">${ic("bolt", 'stroke="#fff"')}</div><div class="t">SMM Coach<small>Social Media Manager (IHK)</small></div></div>
   ${appInstalled ? `<h1 id="gate-h" tabindex="-1">Die App ist installiert</h1><div class="tip good" style="margin-top:14px">Öffne sie jetzt über das Symbol „SMM Coach“ auf deinem Startbildschirm. Dieses Browserfenster kannst du schließen.</div>`
   : `<h1 id="gate-h" tabindex="-1">Zuerst die App installieren</h1><p class="muted" style="margin:8px 0 16px">Dauert 20 Sekunden – danach lernst du wie in einer richtigen App.</p>
    <div class="card"><h3 style="margin-bottom:10px">So geht's</h3>${installGuide(p)}${p.browser === "inapp" || p.browser === "other" ? `<button class="btn ghost" data-act="copy-url" style="margin-top:6px">Adresse kopieren</button>` : ""}</div>
    <ul class="gate-why"><li>${ic("check", 'stroke-width="3"')}<span><b>Immer auf dem Startbildschirm</b> – ein Tipp, und du lernst weiter.</span></li><li>${ic("check", 'stroke-width="3"')}<span><b>Funktioniert ohne Internet</b> – auch in Bahn und Pause.</span></li><li>${ic("check", 'stroke-width="3"')}<span><b>Dein Lernstand ist sicherer</b> – der Browser löscht ihn nicht so leicht.</span></li></ul>
    ${p.os === "ios" && p.browser !== "inapp" ? `<div class="tip">${ic("warn", 'style="color:var(--bad)"')}<span>Wichtig auf iPhone und iPad: Was du hier im Browser lernst, wird <b>nicht</b> in die installierte App übernommen. Installiere deshalb jetzt zuerst.</span></div>` : ""}`}
   <button class="gate-skip" data-act="gate-skip">${appInstalled ? "Trotzdem im Browser weiter" : "Ohne Installation im Browser weiter"}</button></div>`;
 };
 draw();
 document.body.classList.add("no-scroll");
 const el = $("#gate");
 el.onclick = async e => {
  const t = e.target;
  if (t.closest('[data-act="native-install"]')) return nativeInstall();
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
