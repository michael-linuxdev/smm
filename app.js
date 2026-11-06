import { MODULE, FRAGEN, GESPRAECH } from "./data/kurs.js";

/* ---------- Hilfen ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const app = $("#app");
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const md = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const modById = id => MODULE.find(m => m.id === id);
const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16); const c = [n >> 16, (n >> 8) & 255, n & 255].map(v => Math.round(v * f)); return `rgb(${c.join(",")})`; };
const modGrad = m => `linear-gradient(150deg, ${m.farbe}, ${shade(m.farbe, .62)})`;

const I = {
 grund: '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
 platt: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
 content: '<path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8M8 12h5"/>',
 kpi: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 ads: '<path d="M3 11v2a1 1 0 001 1h3l6 5V5L7 10H4a1 1 0 00-1 1zM17 8a5 5 0 010 8"/>',
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
let S = { lek: {}, q: {}, proj: {}, last: null, tests: [] };
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
const TABS = [["start", "Start", "home"], ["lernen", "Lernen", "book"], ["pruefung", "Prüfung", "exam"], ["projekt", "Projekt", "proj"]];
function tabbar(active) {
 return `<nav class="tabbar" aria-label="Navigation">${TABS.map(([h, t, i]) => `<a href="#${h}" class="${active === h ? "on" : ""}">${ic(i)}<span>${t}</span></a>`).join("")}</nav>`;
}
function page(active, html) { app.innerHTML = `<div class="wrap">${html}</div>${tabbar(active)}`; window.scrollTo(0, 0); }
function head() { return `<div class="top"><div class="logo">${ic("bolt", 'stroke="#fff"')}</div><div class="t">SMM Coach<small>Social Media Manager (IHK)</small></div></div>`; }

function route() {
 closeStory();
 const h = (location.hash || "#start").slice(1);
 const [a, b, ...rest] = h.split("-");
 if (a === "lektion" && b) return openStory(b, rest.join("-"));
 if (a === "modul" && b) return viewModul(b);
 if (a === "quiz") return viewQuiz(b || "mix");
 if (h === "lernen") return viewLernen();
 if (h === "pruefung") return viewPruefung();
 if (h === "test") return viewTest();
 if (h === "gespraech") return viewTalk();
 if (h === "projekt") return viewProjekt();
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
function viewStart() {
 const p = allProgress(), n = nextLesson();
 const lessonsDone = Object.values(S.lek).filter(Boolean).length, lessonsAll = MODULE.reduce((s, m) => s + m.lektionen.length, 0);
 const best = S.tests.length ? Math.max(...S.tests) : null;
 page("start", `${head()}
 <section class="hero">
  <div class="kicker">${p > 0 ? "Weiter so" : "Willkommen"}</div>
  <h1>${p > 0 ? `${Math.round(p * 100)} % geschafft` : "Werde Social Media Manager"}</h1>
  <p style="opacity:.92;max-width:460px">${p > 0 ? "Kurze Lektionen, dann Quiz – so bleibt das Wissen hängen." : "In kurzen Story-Lektionen lernen, im Quiz festigen und das Abschlussprojekt Schritt für Schritt vorbereiten."}</p>
  <div class="hero-stat"><div><b>${lessonsDone}/${lessonsAll}</b><span>Lektionen</span></div><div><b>${POOL.filter(q => S.q[q.key]).length}</b><span>Fragen sicher</span></div><div><b>${best === null ? "–" : best + " %"}</b><span>Bester Test</span></div></div>
  ${n ? `<div class="row"><a class="btn white" href="#lektion-${n.m.id}-${n.l.id}">${ic("play")} ${p > 0 ? "Weiterlernen" : "Erste Lektion starten"}</a></div>` : ""}
 </section>
 <div class="sec-h"><h2>Deine Module</h2><a class="small muted" href="#lernen">Alle anzeigen</a></div>
 ${ringsHtml()}
 ${n ? `<div class="sec-h"><h2>Als Nächstes</h2></div>
 <a class="cont" href="#lektion-${n.m.id}-${n.l.id}" style="text-decoration:none"><div class="thumb" style="background:${modGrad(n.m)}">${ic(n.m.id)}</div><div><div class="small muted">${n.m.name} · ${n.l.min} Min.</div><b style="font-size:17px">${n.l.titel}</b></div><div class="play">${ic("play", 'style="color:#fff"')}</div></a>` : ""}
 <div class="sec-h"><h2>Trainieren</h2></div>
 <div class="tiles">
  <a class="tile" href="#quiz-mix" style="text-decoration:none"><div class="ti" style="background:linear-gradient(135deg,#ff9f1c,#ff5a5f)">${ic("shuffle")}</div><b>Schnell-Quiz</b><span>10 gemischte Fragen aus allen Modulen</span></a>
  <a class="tile" href="#test" style="text-decoration:none"><div class="ti" style="background:linear-gradient(135deg,#e83e8c,#7048e8)">${ic("exam")}</div><b>Probetest</b><span>20 Fragen wie im Lehrgangstest</span></a>
  <a class="tile" href="#gespraech" style="text-decoration:none"><div class="ti" style="background:linear-gradient(135deg,#7048e8,#1c7ed6)">${ic("talk")}</div><b>Fachgespräch</b><span>Typische Prüferfragen üben</span></a>
  <a class="tile" href="#projekt" style="text-decoration:none"><div class="ti" style="background:linear-gradient(135deg,#2f9e44,#1c7ed6)">${ic("proj")}</div><b>Projekt-Coach</b><span>Deine Strategie fürs Abschlussprojekt</span></a>
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
 <section class="mod-head" style="background:${modGrad(m)}"><div class="ic">${ic(m.id)}</div><h1>${m.name}</h1><p>${m.text}</p><div class="bar"><i style="width:${modProgress(m) * 100}%"></i></div></section>
 <ol class="steps">${m.lektionen.map((l, i) => { const ok = S.lek[m.id + "/" + l.id]; return `<li><div class="dot ${ok ? "ok" : ""}" style="${ok ? `background:${m.farbe}` : ""}">${ok ? ic("check", 'stroke-width="3"') : i + 1}</div><a class="item" href="#lektion-${m.id}-${l.id}" style="display:flex;align-items:center;gap:10px;width:100%;text-decoration:none;background:var(--surface);border-radius:18px;padding:14px 16px;box-shadow:var(--shadow)"><div><b>${l.titel}</b><span class="small muted">${l.folien.length} Karten · ${l.min} Min.${ok ? " · erledigt" : ""}</span></div><span class="chev">${ic("right")}</span></a></li>`; }).join("")}
 <li><div class="dot" style="${all ? "background:var(--grad);color:#fff" : ""}">${ic(all ? "bolt" : "lock")}</div><a class="item" href="#quiz-${m.id}" style="display:flex;align-items:center;gap:10px;width:100%;text-decoration:none;background:var(--surface);border-radius:18px;padding:14px 16px;box-shadow:var(--shadow)"><div><b>Modul-Quiz</b><span class="small muted">${modPool(m.id).length} Fragen · ${qDone(m.id)} sicher${all ? "" : " · empfohlen nach den Lektionen"}</span></div><span class="chev">${ic("right")}</span></a></li></ol>`);
}

/* ---------- Story-Player (Erstvermittlung) ---------- */
let storyEl = null, storyKey = null;
function closeStory() { if (storyEl) { storyEl.remove(); storyEl = null; document.body.style.overflow = ""; removeEventListener("keydown", storyKey); } }
function openStory(mid, lid) {
 const m = modById(mid), l = m && m.lektionen.find(x => x.id === lid);
 if (!l) return viewLernen();
 viewModul(mid);
 S.last = mid + "/" + lid; save();
 const F = [...l.folien, { k: "ende" }];
 let i = 0, answered = {};
 storyEl = document.createElement("div");
 storyEl.className = "story"; storyEl.style.background = modGrad(m);
 storyEl.setAttribute("role", "dialog"); storyEl.setAttribute("aria-label", l.titel);
 document.body.appendChild(storyEl); document.body.style.overflow = "hidden";
 const go = d => { const f = F[i]; if (d > 0 && f.k === "check" && !(i in answered)) return toast("Wähle zuerst eine Antwort"); i = Math.max(0, Math.min(F.length - 1, i + d)); draw(); };
 storyKey = e => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); if (e.key === "Escape") location.hash = "modul-" + mid; };
 addEventListener("keydown", storyKey);
 function draw() {
  const f = F[i], last = f.k === "ende";
  const kindName = { intro: "Lektion", text: "Wissen", liste: "Überblick", beispiel: "Beispiel", merke: "Merke", check: "Kurz-Check" }[f.k] || "";
  let body = "";
  if (f.k === "liste") body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><ul>${f.l.map((x, n) => `<li style="animation-delay:${n * 60}ms">${md(x)}</li>`).join("")}</ul>`;
  else if (f.k === "beispiel" || f.k === "merke") body = `<div class="note"><span class="kind">${kindName}</span><h2 style="color:var(--ink);font-size:clamp(22px,5vw,30px)">${md(f.h)}</h2><div class="body">${md(f.b)}</div></div>`;
  else if (f.k === "check") {
   const order = f._o || (f._o = shuf(f.a.map((t, k) => k)));
   const a = answered[i];
   body = `<span class="kind">${kindName}</span><h2 style="font-size:clamp(21px,4.6vw,28px)">${md(f.q)}</h2>${order.map((k, n) => { let cl = ""; if (a !== undefined) cl = k === f.c ? "ok" : k === a ? "bad" : "dim"; return `<button class="opt ${cl}" data-k="${k}"><span class="l">${"ABCD"[n]}</span><span>${esc(f.a[k])}</span></button>`; }).join("")}${a !== undefined ? `<div class="fb"><b>${a === f.c ? "Richtig!" : "Nicht ganz."}</b>${esc(f.e)}</div>` : ""}`;
  }
  else if (last) body = `<div style="text-align:center"><div class="confetti">🎉</div><span class="kind">Geschafft</span><h2>${esc(l.titel)}</h2><div class="body">Lektion abgeschlossen. ${nextIn(m, l) ? "Weiter mit der nächsten Lektion?" : "Jetzt im Modul-Quiz festigen!"}</div></div>`;
  else body = `<span class="kind">${kindName}</span><h2>${md(f.h)}</h2><div class="body">${md(f.b)}</div>`;
  const nx = nextIn(m, l);
  storyEl.innerHTML = `<div class="segs">${F.slice(0, -1).map((_, n) => `<i class="${n < i || last ? "on" : ""}"><b style="${n === i ? "width:100%" : ""}"></b></i>`).join("")}</div>
  <div class="shead"><div class="av">${ic(m.id)}</div><div class="n">${esc(l.titel)}<small>${esc(m.name)}</small></div><button class="x" aria-label="Schließen">${ic("x")}</button></div>
  <div class="stage">${f.k !== "check" && !last ? '<div class="tapzone l"></div><div class="tapzone r"></div>' : ""}<div class="slide">${body}</div></div>
  <div class="snav">${i > 0 ? `<button class="btn prev" aria-label="Zurück">${ic("left")}</button>` : ""}${last ? (nx ? `<a class="btn white" href="#lektion-${m.id}-${nx.id}">Nächste Lektion ${ic("right")}</a>` : `<a class="btn white" href="#quiz-${m.id}">Zum Modul-Quiz ${ic("right")}</a>`) : `<button class="btn white next">Weiter ${ic("right")}</button>`}</div>`;
  if (last) { S.lek[m.id + "/" + l.id] = true; save(); }
  $(".x", storyEl).onclick = () => location.hash = "modul-" + mid;
  $(".next", storyEl)?.addEventListener("click", () => go(1));
  $(".prev", storyEl)?.addEventListener("click", () => go(-1));
  $(".tapzone.l", storyEl)?.addEventListener("click", () => go(-1));
  $(".tapzone.r", storyEl)?.addEventListener("click", () => go(1));
  $$(".opt", storyEl).forEach(b => b.onclick = () => { if (i in answered) return; answered[i] = +b.dataset.k; const p = POOL.find(p => p.q === f.q); if (p && answered[i] === f.c) S.q[p.key] = true; save(); draw(); });
 }
 draw();
}
function nextIn(m, l) { const k = m.lektionen.indexOf(l); return m.lektionen[k + 1] || null; }

/* ---------- Quiz ---------- */
function quizCard(q, meta) {
 const order = shuf(q.a.map((_, k) => k));
 return { order, html: `<div class="qcard"><div class="qtop"><span class="chip" style="background:${modById(q.m).farbe}22;color:${shade(modById(q.m).farbe, .75)}">${modById(q.m).kurz}</span><span class="small muted">${meta}</span></div><div class="qtext">${esc(q.q)}</div>${order.map((k, n) => `<button class="opt" data-k="${k}"><span class="l">${"ABCD"[n]}</span><span>${esc(q.a[k])}</span></button>`).join("")}<div class="fbx"></div></div>` };
}
function viewQuiz(id) {
 const m = modById(id), isMix = !m;
 let list = isMix ? shuf(POOL).slice(0, 10) : shuf(modPool(id)).sort((a, b) => (S.q[a.key] ? 1 : 0) - (S.q[b.key] ? 1 : 0));
 const total = list.length; let queue = list.slice(), first = 0, miss = new Set(), n = 0;
 const backHref = isMix ? "#start" : "#modul-" + id;
 next();
 function next() {
  if (!queue.length) return done();
  const q = queue.shift(); n++;
  const { html } = quizCard(q, miss.has(q) ? "Wiederholung" : `${Math.min(n, total)} / ${total}`);
  page(isMix ? "start" : "lernen", `<a class="back" href="${backHref}">${ic("x")} Beenden</a><div class="bar dark" style="margin:0 0 16px"><i style="width:${(1 - (queue.length + 1) / (total + miss.size)) * 100}%"></i></div>${html}`);
  $$(".opt").forEach(b => b.onclick = () => {
   if ($(".fbx").innerHTML) return;
   const k = +b.dataset.k, ok = k === q.c;
   $$(".opt").forEach(x => { const xk = +x.dataset.k; x.classList.add(xk === q.c ? "ok" : xk === k ? "bad" : "dim"); });
   if (ok) { S.q[q.key] = true; if (!miss.has(q)) first++; } else { S.q[q.key] = false; miss.add(q); queue.push(q); }
   save();
   $(".fbx").innerHTML = `<div class="fb ${ok ? "ok" : "bad"}"><b>${ok ? "Richtig!" : "Nicht ganz – die Frage kommt gleich nochmal."}</b>${esc(q.e)}</div><button class="btn block" style="margin-top:14px" id="nx">Weiter ${ic("right")}</button>`;
   $("#nx").onclick = next; $("#nx").focus();
  });
 }
 function done() {
  const p = first / total;
  page(isMix ? "start" : "lernen", `<div class="qcard result"><div class="big-ring">${ringSvg(p, 150, 12, "var(--surface-2)")}<b>${Math.round(p * 100)}%</b></div><h2>${p >= .8 ? "Stark!" : p >= .5 ? "Gut gemacht!" : "Dranbleiben!"}</h2><p class="muted">${first} von ${total} Fragen beim ersten Versuch richtig.</p><div class="row" style="justify-content:center;margin-top:18px"><a class="btn ghost" href="${backHref}">Zurück</a><button class="btn" id="again">Nochmal</button></div></div>`);
  $("#again").onclick = () => viewQuiz(id);
 }
}

/* ---------- Prüfung ---------- */
function viewPruefung() {
 const best = S.tests.length ? Math.max(...S.tests) : null;
 page("pruefung", `${head()}<h1 style="margin-bottom:6px">Prüfung</h1><p class="muted" style="margin-bottom:18px">Je nach IHK besteht der Abschluss aus einem Lehrgangstest, einer Projektarbeit mit Präsentation und einem Fachgespräch. Frag bei deiner IHK nach dem genauen Ablauf.</p>
 <div class="tiles">
  <a class="tile" href="#test" style="text-decoration:none"><div class="ti" style="background:linear-gradient(135deg,#e83e8c,#7048e8)">${ic("exam")}</div><b>Probetest</b><span>20 Fragen, Auswertung am Ende${best !== null ? ` · Bestwert ${best} %` : ""}</span></a>
  <a class="tile" href="#gespraech" style="text-decoration:none"><div class="ti" style="background:linear-gradient(135deg,#7048e8,#1c7ed6)">${ic("talk")}</div><b>Fachgespräch</b><span>${GESPRAECH.length} typische Prüferfragen mit Antwort-Leitfaden</span></a>
  <a class="tile" href="#projekt" style="text-decoration:none"><div class="ti" style="background:linear-gradient(135deg,#2f9e44,#1c7ed6)">${ic("proj")}</div><b>Projekt-Coach</b><span>Strategie aufbauen und Lücken finden</span></a>
 </div>
 ${S.tests.length ? `<div class="sec-h"><h2>Deine Probetests</h2></div><div class="card"><div class="row" style="align-items:flex-end;gap:8px;height:120px">${S.tests.slice(-10).map(t => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><span class="small muted">${t}</span><div style="width:100%;max-width:36px;height:${Math.max(6, t)}px;border-radius:8px;background:${t >= 50 ? "var(--grad)" : "var(--bad-soft)"}"></div></div>`).join("")}</div></div>` : ""}`);
}
function viewTest() {
 page("pruefung", `<a class="back" href="#pruefung">${ic("left")} Prüfung</a><section class="hero"><div class="kicker">Probetest</div><h1>20 Fragen aus allen Modulen</h1><p style="opacity:.92">Wie im Lehrgangstest: kein Feedback zwischendurch, die Auswertung kommt am Ende. Viele IHK-Lehrgangstests gelten ab 50 % als bestanden.</p><div class="row"><button class="btn white" id="go">${ic("play")} Test starten</button></div></section>`);
 $("#go").onclick = () => {
  const list = shuf(POOL).slice(0, 20), ans = []; let p = 0; const t0 = Date.now();
  step();
  function step() {
   if (p === list.length) return result();
   const { html } = quizCard(list[p], `Frage ${p + 1} / ${list.length}`);
   page("pruefung", `<a class="back" href="#pruefung">${ic("x")} Abbrechen</a><div class="bar dark" style="margin:0 0 16px"><i style="width:${p / list.length * 100}%"></i></div>${html}`);
   $$(".opt").forEach(b => b.onclick = () => { b.classList.add("ok"); ans.push(+b.dataset.k); p++; setTimeout(step, 180); });
  }
  function result() {
   const ok = list.filter((q, k) => ans[k] === q.c).length, pct = Math.round(ok / list.length * 100), min = Math.max(1, Math.round((Date.now() - t0) / 60000));
   list.forEach((q, k) => S.q[q.key] = ans[k] === q.c); S.tests.push(pct); save();
   const wrong = list.map((q, k) => ({ q, a: ans[k] })).filter(x => x.a !== x.q.c);
   const byMod = {}; wrong.forEach(x => byMod[x.q.m] = (byMod[x.q.m] || 0) + 1);
   const weak = Object.entries(byMod).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([k]) => modById(k));
   page("pruefung", `<div class="qcard result"><div class="big-ring">${ringSvg(pct / 100, 150, 12, "var(--surface-2)", pct >= 50 ? null : "var(--bad)")}<b>${pct}%</b></div><h2>${pct >= 80 ? "Sehr gut vorbereitet!" : pct >= 50 ? "Bestanden!" : "Noch nicht bestanden"}</h2><p class="muted">${ok} von ${list.length} richtig · ${min} Min.</p>${weak.length ? `<p style="margin-top:12px">Übe am besten: ${weak.map(m => `<a class="chip" href="#modul-${m.id}" style="text-decoration:none">${m.kurz}</a>`).join(" ")}</p>` : ""}<div class="row" style="justify-content:center;margin-top:16px"><a class="btn ghost" href="#pruefung">Zurück</a><button class="btn" id="again">Neuer Test</button></div></div>
   ${wrong.length ? `<div class="sec-h"><h2>Zum Nacharbeiten</h2></div>${wrong.map(x => `<div class="card"><span class="chip">${modById(x.q.m).kurz}</span><p style="font-weight:700;margin-top:10px">${esc(x.q.q)}</p><p class="small" style="color:var(--bad)">Deine Antwort: ${esc(x.q.a[x.a])}</p><p class="small" style="color:var(--ok)">Richtig: ${esc(x.q.a[x.q.c])}</p><div class="fb ok" style="margin-top:8px">${esc(x.q.e)}</div></div>`).join("")}` : ""}`);
   $("#again").onclick = viewTest;
  }
 };
}
function viewTalk() {
 const order = shuf(GESPRAECH.map((_, i) => i)); let p = 0, open = false;
 draw();
 function draw() {
  const t = GESPRAECH[order[p]];
  page("pruefung", `<a class="back" href="#pruefung">${ic("left")} Prüfung</a><h1 style="margin-bottom:6px">Fachgespräch</h1><p class="muted" style="margin-bottom:16px">Beantworte die Frage erst laut – dann tippe auf die Karte.</p>
  <div class="flip ${open ? "open" : ""}" id="fl"><div class="inner"><div class="face front"><span class="small" style="opacity:.85;font-weight:700">Frage ${p + 1} von ${GESPRAECH.length}</span><div class="qtext">${esc(t.q)}</div><span class="small" style="opacity:.85">Tippen zum Umdrehen</span></div><div class="face back"><b class="display" style="font-size:18px">Eine gute Antwort enthält:</b><ul>${t.a.map(x => `<li>${ic("check", 'stroke-width="3"')}<span>${esc(x)}</span></li>`).join("")}</ul></div></div></div>
  <div class="row"><button class="btn ghost" id="pv">${ic("left")}</button><button class="btn" id="nx" style="flex:1">Nächste Frage ${ic("right")}</button></div>`);
  $("#fl").onclick = () => { open = !open; $("#fl").classList.toggle("open", open); };
  $("#nx").onclick = () => { p = (p + 1) % GESPRAECH.length; open = false; draw(); };
  $("#pv").onclick = () => { p = (p - 1 + GESPRAECH.length) % GESPRAECH.length; open = false; draw(); };
 }
}

/* ---------- Projekt-Coach ---------- */
const KAN = ["LinkedIn", "Instagram", "TikTok", "Facebook", "YouTube", "Pinterest", "X", "WhatsApp-Kanal", "Threads"];
const STEPS = [
 { id: "firma", t: "Unternehmen & Ausgangslage", h: "Wer ist das Unternehmen, was bietet es an, wie ist es heute auf Social Media aufgestellt? Was macht die Konkurrenz?" },
 { id: "ziel", t: "Ziele (SMART)", h: "z. B. „Bis 31.03. gewinnen wir über Instagram 15 Bewerbungen für Ausbildungsplätze.“" },
 { id: "persona", t: "Zielgruppe & Persona", h: "Name, Alter, Beruf, Wünsche, Probleme – welche Plattformen nutzt sie wann? Woher weißt du das?" },
 { id: "kanaele", t: "Kanäle", h: "Wähle bewusst und begründe – im Fachgespräch wird danach gefragt.", kan: true },
 { id: "content", t: "Inhalte & Redaktionsplan", h: "Themensäulen, Formate (Reel, Karussell …), Tonalität, wie oft, wer ist zuständig, wer gibt frei?" },
 { id: "kpi", t: "KPIs & Messung", h: "Pro Ziel: Kennzahl, Ausgangswert, Zielwert, Datenquelle, Reporting-Rhythmus." },
 { id: "budget", t: "Budget & Ressourcen", h: "Werbebudget, Produktion, interne Arbeitszeit, Tools, ggf. Dienstleister." },
 { id: "recht", t: "Recht & Risiken", h: "Impressum, Datenschutz, Bildrechte, Werbekennzeichnung, Gewinnspiele, KI, Krisenplan." }
];
function viewProjekt(step) {
 const P = S.proj; P.kan = P.kan || [];
 if (step === undefined) step = P._step || 0;
 if (step >= STEPS.length) return coach();
 P._step = step; save();
 const st = STEPS[step];
 page("projekt", `${head()}<h1 style="margin-bottom:6px">Projekt-Coach</h1><p class="muted" style="margin-bottom:16px">Baue Schritt für Schritt deine Social-Media-Strategie für das Abschlussprojekt. Alles bleibt auf deinem Gerät.</p>
 <div class="progress-steps">${STEPS.map((_, i) => `<i class="${i <= step ? "on" : ""}"></i>`).join("")}</div>
 <div class="qcard"><span class="small muted" style="font-weight:700">Schritt ${step + 1} von ${STEPS.length}</span><h2 style="margin:6px 0 4px">${st.t}</h2><p class="muted small" style="margin-bottom:14px">${st.h}</p>
 ${st.kan ? `<div class="chips" style="margin-bottom:16px">${KAN.map(k => `<label><input type="checkbox" value="${k}" ${P.kan.includes(k) ? "checked" : ""}><span>${k}</span></label>`).join("")}</div><div class="field"><label for="warum">Warum diese Kanäle?</label><div class="hint">Bezug zu Zielgruppe, Zielen und Ressourcen</div><textarea id="warum">${esc(P.warum || "")}</textarea></div>` : `<textarea id="${st.id}" style="min-height:150px">${esc(P[st.id] || "")}</textarea>`}
 </div>
 <div class="row">${step > 0 ? `<button class="btn ghost" id="pv">${ic("left")}</button>` : ""}<button class="btn" id="nx" style="flex:1">${step === STEPS.length - 1 ? "Prüfen & Gliederung erstellen" : "Weiter"} ${ic("right")}</button></div>
 ${Object.keys(P).some(k => !k.startsWith("_") && (Array.isArray(P[k]) ? P[k].length : P[k])) ? `<p style="text-align:center;margin-top:14px"><button class="btn ghost" id="toc" style="padding:10px 16px;font-size:14px">Direkt zur Auswertung</button></p>` : ""}`);
 const store = () => { $$("textarea").forEach(t => P[t.id] = t.value); if (st.kan) P.kan = $$(".chips input:checked").map(x => x.value); save(); };
 $$("textarea,input").forEach(el => el.addEventListener("input", store));
 $$(".chips input").forEach(el => el.addEventListener("change", store));
 $("#nx").onclick = () => { store(); viewProjekt(step + 1); };
 $("#pv")?.addEventListener("click", () => { store(); viewProjekt(step - 1); });
 $("#toc")?.addEventListener("click", () => { store(); coach(); });
}
function coach() {
 const P = S.proj, v = k => (P[k] || "").trim(), w = [];
 if (!v("ziel")) w.push("Es fehlt ein Ziel – ohne Ziel lässt sich der Erfolg nicht messen.");
 else {
  if (!/\d/.test(v("ziel"))) w.push("Dein Ziel enthält keine Zahl – ist es wirklich messbar?");
  if (!/(bis|202\d|monat|woche|quartal|q[1-4]|jan|feb|mär|apr|mai|jun|jul|aug|sep|okt|nov|dez|ende)/i.test(v("ziel"))) w.push("Dein Ziel hat keinen Termin – SMART-Ziele sind terminiert.");
 }
 if (!v("persona")) w.push("Die Zielgruppe fehlt – beschreibe mindestens eine Persona.");
 else if (!/(insight|daten|befrag|umfrage|studie|statistik|analyse)/i.test(v("persona"))) w.push("Woher kennst du die Zielgruppe? Nenne eine Datenquelle (Insights, Befragung, Studie).");
 if (!P.kan?.length) w.push("Du hast noch keinen Kanal gewählt.");
 else if (P.kan.length > 3) w.push(`Du planst ${P.kan.length} Kanäle – Prüfer fragen gern, ob das mit den Ressourcen realistisch ist.`);
 if (P.kan?.length && !v("warum")) w.push("Begründe deine Kanalwahl – das ist eine typische Prüfungsfrage.");
 if (!v("content")) w.push("Inhalte und Redaktionsplan fehlen.");
 else if (!/(säule|thema|themen)/i.test(v("content"))) w.push("Lege Themensäulen fest – so bleibt der Kanal erkennbar.");
 if (!v("kpi")) w.push("Es fehlen KPIs mit Ausgangs- und Zielwert.");
 else if (/follower/i.test(v("kpi")) && !/(klick|ctr|lead|bewerb|anfrage|conversion|engagement|umsatz|verkauf|reichweite)/i.test(v("kpi"))) w.push("Deine KPIs drehen sich nur um Follower – ergänze Kennzahlen, die direkt am Ziel hängen.");
 if (!v("budget")) w.push("Das Budget fehlt.");
 else if (!/(stunde|zeit|personal|\bh\b|produktion|foto|video|grafik)/i.test(v("budget"))) w.push("Im Budget fehlen interne Arbeitszeit oder Produktionskosten.");
 const r = v("recht").toLowerCase();
 [["impressum", "Impressum"], ["daten", "Datenschutz"], ["bild", "Bildrechte & Einwilligungen"], ["werb", "Werbekennzeichnung"], ["kris", "Krisenplan"]].forEach(([k, l]) => { if (!r.includes(k)) w.push(`Recht: „${l}“ fehlt noch.`); });
 const outline = `SOCIAL-MEDIA-STRATEGIE – GLIEDERUNG\n\n1. Ausgangslage\n${v("firma") || "–"}\n\n2. Ziele\n${v("ziel") || "–"}\n\n3. Zielgruppe / Persona\n${v("persona") || "–"}\n\n4. Kanäle: ${(P.kan || []).join(", ") || "–"}\nBegründung: ${v("warum") || "–"}\n\n5. Inhalte & Redaktionsplan\n${v("content") || "–"}\n\n6. KPIs & Reporting\n${v("kpi") || "–"}\n\n7. Budget & Ressourcen\n${v("budget") || "–"}\n\n8. Recht & Risiken\n${v("recht") || "–"}\n\n9. Fazit & nächste Schritte`;
 const score = Math.max(0, 1 - w.length / 14);
 page("projekt", `<button class="back" id="edit">${ic("left")} Bearbeiten</button>
 <div class="qcard result" style="padding:24px 20px"><div class="big-ring" style="width:120px;height:120px">${ringSvg(score, 120, 10, "var(--surface-2)")}<b style="font-size:28px">${Math.round(score * 100)}%</b></div><h2>${w.length ? "Fast da – ein paar Lücken" : "Vollständig!"}</h2><p class="muted">${w.length ? `Der Coach hat ${w.length} Hinweis${w.length > 1 ? "e" : ""} für dich.` : "Jetzt im Fachgespräch-Training üben."}</p></div>
 ${w.map(x => `<div class="tip">${ic("warn", 'style="color:var(--bad)"')}<span>${esc(x)}</span></div>`).join("")}
 ${!w.length ? `<a class="btn block" href="#gespraech">Fachgespräch üben ${ic("right")}</a>` : ""}
 <div class="card" style="margin-top:16px"><div class="row" style="justify-content:space-between"><h3>Gliederung für deine Präsentation</h3><button class="btn ghost" id="cp" style="padding:10px 16px">${ic("copy")} Kopieren</button></div><pre class="outline">${esc(outline)}</pre></div>`);
 $("#edit").onclick = () => viewProjekt(0);
 $("#cp").onclick = async () => { try { await navigator.clipboard.writeText(outline); toast("Gliederung kopiert"); } catch (e) { toast("Bitte Text markieren und kopieren"); } };
}

/* ---------- Start ---------- */
route();
if ("serviceWorker" in navigator && location.protocol === "https:" && !/claude|claudeusercontent/.test(location.host)) {
 navigator.serviceWorker.register("sw.js").catch(() => {});
}
