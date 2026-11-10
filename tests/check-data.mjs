// Datenprüfung vor jedem Release: node tests/check-data.mjs
// Harte Vorgabe: höchstens 400 Fragen insgesamt (FRAGEN + Kurz-Checks in Lektionen).
import { MODULE, FRAGEN } from "../data/kurs.js";
import { GLOSSAR, EINFACH } from "../data/glossar.js";
const MAX_FRAGEN = 400;
const checks = MODULE.flatMap(m => m.lektionen.flatMap(l => l.folien.filter(f => f.k === "check")));
const total = FRAGEN.length + checks.length, fehler = [];
if (total > MAX_FRAGEN) fehler.push(`Zu viele Fragen: ${total} (Limit ${MAX_FRAGEN}). Für jede neue Frage eine bestehende streichen.`);
const keys = new Map();
for (const q of [...FRAGEN, ...checks]) { const k = q.q.trim().slice(0, 60); if (keys.has(k)) fehler.push("Doppelter Fragenanfang: " + k); keys.set(k, 1); }
for (const q of FRAGEN) {
  if (q.t === "frei") { for (const [, r] of q.muster) { try { new RegExp(r, "i"); } catch (e) { fehler.push("RegExp kaputt: " + q.q.slice(0, 50)); } } }
  else if (Array.isArray(q.c) ? !q.c.every(i => q.a[i] !== undefined) : q.a[q.c] === undefined) fehler.push("Ungültige Lösung: " + q.q.slice(0, 50));
}
const lids = MODULE.flatMap(m => m.lektionen.map(l => l.id));
if (new Set(lids).size !== lids.length) fehler.push("Doppelte Lektions-IDs");
const gw = GLOSSAR.map(g => g.w); if (new Set(gw).size !== gw.length) fehler.push("Doppelte Glossar-Begriffe");
// Glossar in einfacher Sprache: Begriff muss existieren, alle Karten da, kurze Sätze, keine Abkürzungen
const woerter = t => t.replace(/\*\*/g, "").split(/\s+/).filter(Boolean).length;
for (const [w, e] of Object.entries(EINFACH)) {
  if (!gw.includes(w)) fehler.push("Einfache Sprache: Begriff nicht im Glossar: " + w);
  for (const k of ["d", "was", "bsp", "merke"]) if (!e[k]) fehler.push(`Einfache Sprache: ${w} ohne „${k}“`);
  if (!e.wozu === !e.verw) fehler.push(`Einfache Sprache: ${w} braucht genau eines von „wozu“ und „verw“`);
  if ((e.d || "").length > 160) fehler.push(`Einfache Sprache: Kurztext zu lang (${e.d.length}): ${w}`);
  for (const k of ["was", "bsp", "wozu", "verw", "merke"]) {
    const t = e[k]; if (!t) continue;
    if (t.length > (k === "merke" ? 160 : 330)) fehler.push(`Einfache Sprache: Karte „${k}“ zu lang (${t.length}): ${w}`);
    if (/\b(z\. ?B\.|d\. ?h\.|u\. ?a\.|bzw\.|ggf\.|usw\.|etc\.)/.test(t + " " + e.d)) fehler.push(`Einfache Sprache: Abkürzung in „${k}“: ${w}`);
    for (const satz of t.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„*(0-9])/)) if (woerter(satz) > 18) fehler.push(`Einfache Sprache: Satz mit mehr als 18 Wörtern in „${k}“: ${w} – ${satz.slice(0, 50)}…`);
  }
}
const mitStory = GLOSSAR.filter(g => g.s).length;
console.log(`Fragen: ${total}/${MAX_FRAGEN} · Lektionen: ${lids.length} · Glossar: ${gw.length} (einfach erklärt: ${mitStory})`);
if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); } else console.log("OK");
