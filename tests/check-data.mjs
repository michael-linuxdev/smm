// Datenprüfung vor jedem Release: node tests/check-data.mjs
// Harte Vorgabe: höchstens 400 Fragen insgesamt (FRAGEN + Kurz-Checks in Lektionen).
import { MODULE, FRAGEN } from "../data/kurs.js";
import { GLOSSAR, EINFACH } from "../data/glossar.js";
import { LERNPFAD } from "../data/lernpfad.js";
import { PROJEKTE } from "../data/projekte.js";
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
// Lernpfad: jeder Begriff genau einmal, beim richtigen Modul; nur bekannte Module
const pfadAlle = Object.values(LERNPFAD).flat();
for (const mid of Object.keys(LERNPFAD)) if (!MODULE.some(m => m.id === mid)) fehler.push("Lernpfad: unbekanntes Modul " + mid);
if (new Set(pfadAlle).size !== pfadAlle.length) fehler.push("Lernpfad: Begriff doppelt: " + pfadAlle.filter((w, i) => pfadAlle.indexOf(w) !== i).join(", "));
for (const w of pfadAlle) if (!gw.includes(w)) fehler.push("Lernpfad: Begriff nicht im Glossar: " + w);
for (const g of GLOSSAR) { if (!pfadAlle.includes(g.w)) fehler.push("Lernpfad: Begriff fehlt: " + g.w); else if (!(LERNPFAD[g.m] || []).includes(g.w)) fehler.push(`Lernpfad: ${g.w} steht nicht bei seinem Modul (${g.m})`); }
// Lektionen in einfacher Sprache (data/lernen/): kurze Sätze, keine Abkürzungen, genau ein Kurz-Check, Quelle angegeben
const ABK = /\b(z\. ?B\.|d\. ?h\.|u\. ?a\.|bzw\.|ggf\.|usw\.|etc\.|bspw\.|evtl\.|ca\.|inkl\.|vgl\.|sog\.)/;
const satzTeile = t => t.replace(/\*\*/g, "").split(/\n+|(?<=[.!?:])\s+(?=[A-ZÄÖÜ„(0-9])/).filter(x => x.trim());
for (const m of MODULE) for (const l of m.lektionen) {
  if (!l.quelle) continue; // nur Lektionen aus den Kursunterlagen
  if (l.folien.filter(f => f.k === "check").length !== 1) fehler.push(`Lektion ${l.id}: genau ein Kurz-Check nötig`);
  // Überschriften müssen sagen, worum es geht – keine Leerformeln, keine Doppelten in einer Lektion
  const hs = l.folien.map(f => f.h).filter(Boolean);
  for (const h of hs) if (/^(Worum es geht|Das Wichtigste|Überblick|Beispiel|Einführung|Fazit|Merke|Zusammenfassung)$/i.test(h.trim())) fehler.push(`Lektion ${l.id}: nichtssagende Überschrift „${h}“`);
  if (new Set(hs).size !== hs.length) fehler.push(`Lektion ${l.id}: doppelte Überschrift`);
  // Kurz halten (Nutzerfeedback „zu viel Text je Story“): max. 8 Karten, 30 Wörter je Karte, 4 Listenpunkte à 10 Wörter, 220 Wörter je Lektion
  if (l.folien.length > 8) fehler.push(`Lektion ${l.id}: ${l.folien.length} Karten (max. 8)`);
  let summe = 0;
  for (const f of l.folien) {
    if (f.k === "check") continue;
    const text = woerter(f.b || "") + (f.l || []).reduce((a, x) => a + woerter(x), 0);
    summe += text + woerter(f.h || "");
    if (text > 30) fehler.push(`Lektion ${l.id}: Karte „${f.h}“ hat ${text} Wörter (max. 30)`);
    if ((f.l || []).length > 4 || (f.l || []).some(x => woerter(x) > 10)) fehler.push(`Lektion ${l.id}: Liste „${f.h}“ zu lang (max. 4 Punkte à 10 Wörter)`);
  }
  if (summe > 220) fehler.push(`Lektion ${l.id}: ${summe} Wörter (max. 220)`);
  // Lange Wörter gliedern (einfache Sprache): ab 18 Buchstaben ohne Bindestrich nur feste Namen und Prüfungsbegriffe
  const NAMEN = /^(Kunsturhebergesetz|Bundesdatenschutzgesetz|Medienstaatsvertrag|Rundfunkstaatsvertrag|Selbstverständlichkeiten|operationalisierst|operationalisieren|Datenschutz-Grundverordnung)$/;
  for (const f of l.folien) if (f.k !== "check") for (const t of [f.h, f.b, ...(f.l || [])].filter(Boolean))
    for (const wort of t.replace(/\*\*/g, "").split(/[\s„“"()\/,.:;!?]+/)) if (!wort.startsWith("#")) for (const teil of wort.split("-")) if (teil.length >= 18 && !NAMEN.test(teil)) fehler.push(`Lektion ${l.id}: langes Wort „${teil}“ – mit Bindestrich gliedern oder umschreiben`);
  for (const f of l.folien) for (const t of [f.h, f.b, f.q, f.e, ...(f.l || []), ...(f.a || [])].filter(Boolean)) {
    if (ABK.test(t)) fehler.push(`Lektion ${l.id}: Abkürzung „${t.match(ABK)[0]}“ – ${t.slice(0, 50)}…`);
    for (const satz of satzTeile(t)) if (woerter(satz) > 18) fehler.push(`Lektion ${l.id}: Satz mit mehr als 18 Wörtern – ${satz.slice(0, 50)}…`);
  }
}
// Quizfragen aus den Kursunterlagen: Quelle angegeben, keine Abkürzungen, Freitext mit Musterlösung, die min erreicht
for (const q of FRAGEN) {
  const w = q.q.slice(0, 50);
  if (!q.quelle) fehler.push("Frage ohne Quelle: " + w);
  if (!MODULE.some(m => m.id === q.m)) fehler.push("Frage mit unbekanntem Modul: " + w);
  if (!lids.includes(q.lek)) fehler.push("Frage ohne gültige Lektion (lek): " + w);
  for (const t of [q.q, q.e, q.bsp, ...(q.a || [])].filter(Boolean)) if (ABK.test(t)) fehler.push(`Frage: Abkürzung „${t.match(ABK)[0]}“ – ${w}`);
  if (q.t === "frei") { if (!q.bsp) fehler.push("Freitext ohne Musterlösung: " + w); else if (q.muster.filter(([, r]) => { try { return new RegExp(r, "i").test(q.bsp); } catch (e) { return false; } }).length < q.min) fehler.push("Musterlösung erreicht min nicht: " + w); }
}
// Praxisprojekte (Hausaufgaben): Aufgabe → Lösungsweg → Musterlösung → Lösung kompakt
for (const p of PROJEKTE) {
  const S = p.schritte;
  if (S[0].k !== "szene" || S[S.length - 1].k !== "fazit" || !S.some(s => s.k === "frei")) fehler.push(`Projekt ${p.id}: Aufbau szene … frei … fazit fehlt`);
  for (const s of S) {
    if (s.k === "wahl" && s.o.filter(o => o.p === 2).length !== 1) fehler.push(`Projekt ${p.id}: Entscheidung ohne genau eine beste Option – ${s.h}`);
    if (s.k === "frei" && (!s.bsp || s.muster.filter(([, r]) => { try { return new RegExp(r, "i").test(s.bsp); } catch (e) { return false; } }).length < s.min)) fehler.push(`Projekt ${p.id}: Musterlösung fehlt oder erreicht min nicht`);
    for (const t of [s.h, s.b, s.bsp, ...(s.l || []), ...(s.o || []).flatMap(o => [o.t, o.fb])].filter(Boolean)) if (ABK.test(t)) fehler.push(`Projekt ${p.id}: Abkürzung „${t.match(ABK)[0]}“`);
  }
}
const mitStory = GLOSSAR.filter(g => g.s).length;
console.log(`Fragen: ${total}/${MAX_FRAGEN} · Lektionen: ${lids.length} · Glossar: ${gw.length} (einfach erklärt: ${mitStory})`);
if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); } else console.log("OK");
