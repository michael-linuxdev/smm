// Datenprüfung vor jedem Release: node tests/check-data.mjs
// Harte Vorgabe: höchstens 400 Fragen insgesamt (FRAGEN + Kurz-Checks in Lektionen).
import { MODULE, FRAGEN } from "../data/kurs.js";
import { GLOSSAR } from "../data/glossar.js";
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
console.log(`Fragen: ${total}/${MAX_FRAGEN} · Lektionen: ${lids.length} · Glossar: ${gw.length}`);
if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); } else console.log("OK");
