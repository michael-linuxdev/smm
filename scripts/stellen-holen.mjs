// Holt täglich offene Stellen für Social-Media-Berufe aus der Jobbörse der Bundesagentur für Arbeit
// (öffentliche Jobsuche-Schnittstelle, öffentliche Client-ID) und schreibt data/stellen.json.
// Einmalig bzw. wenn fehlend: data/plz.json (Postleitzahl → Ort + Koordinaten) für die Umkreissuche in der App.
// Läuft in GitHub Actions (siehe .github/workflows/stellen.yml), Node ≥ 20.
import { writeFile, readFile, access } from "node:fs/promises";

const API = "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs";
const HEAD = { "X-API-Key": "jobboerse-jobsuche", "User-Agent": "smm-coach-stellen/1.0 (+https://smm.micana.de)" };
const BEGRIFFE = ["Social Media Manager", "Social Media", "Community Manager", "Content Manager", "Social Media Redakteur", "Online Marketing Manager", "Influencer Marketing"];
// Nur Stellen, deren Titel wirklich zum Berufsbild passt
const PASST = /social[\s-]?media|community[\s-]?manag|content[\s-]?(manag|creat|market|redakt|strateg|spezial)|influencer|online[\s-]?(marketing|redakt)|digital[\s-]?market|performance[\s-]?market|redakteur.*(online|digital|social)|kommunikation.*(digital|online|social)|tiktok|instagram|linkedin/i;
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function holen(params) {
  const url = API + "?" + new URLSearchParams(params);
  for (let versuch = 1; versuch <= 3; versuch++) {
    try {
      const r = await fetch(url, { headers: HEAD });
      if (r.ok) return await r.json();
      console.warn("HTTP", r.status, url);
    } catch (e) { console.warn("Fehler", e.message, url); }
    await sleep(1500 * versuch);
  }
  return null;
}

async function suche(was, extra = {}) {
  const out = [];
  for (let page = 1; page <= 10; page++) {
    const d = await holen({ was, angebotsart: 1, veroeffentlichtseit: 60, page, size: 100, pav: false, ...extra });
    const liste = d?.stellenangebote || [];
    out.push(...liste);
    if (liste.length < 100) break;
    await sleep(400);
  }
  return out;
}

const jobs = new Map();
for (const was of BEGRIFFE) {
  for (const [ho, extra] of [[false, {}], [true, { arbeitszeit: "ho" }]]) {
    const liste = await suche(was, extra);
    console.log(`${was}${ho ? " (Homeoffice)" : ""}: ${liste.length}`);
    for (const s of liste) {
      const titel = s.titel || s.beruf || "";
      if (!s.refnr || !PASST.test(titel + " " + (s.beruf || ""))) continue;
      const o = s.arbeitsort || {};
      const alt = jobs.get(s.refnr);
      if (alt) { if (ho) alt.ho = 1; continue; }
      jobs.set(s.refnr, {
        id: s.refnr, t: titel.trim(), b: s.beruf || "", ag: (s.arbeitgeber || "").trim(),
        ort: [o.plz, o.ort].filter(Boolean).join(" "), lat: o.koordinaten?.lat ?? null, lon: o.koordinaten?.lon ?? null,
        d: s.aktuelleVeroeffentlichungsdatum || s.modifikationsTimestamp?.slice(0, 10) || "",
        ext: s.externeUrl || "", ho: ho ? 1 : 0
      });
    }
    await sleep(500);
  }
}
const liste = [...jobs.values()].sort((a, b) => (b.d || "").localeCompare(a.d || ""));
if (!liste.length) { console.error("Keine Stellen erhalten – Datei bleibt unverändert."); process.exit(0); }
await writeFile(new URL("../data/stellen.json", import.meta.url), JSON.stringify({ stand: new Date().toISOString(), quelle: "Bundesagentur für Arbeit – Jobbörse", n: liste.length, jobs: liste }));
console.log("Gespeichert:", liste.length, "Stellen");

// Postleitzahlen-Tabelle nur anlegen, wenn sie fehlt (Quelle: zauberware/postal-codes-json-xml-csv, MIT-Lizenz, Daten aus GeoNames CC BY 4.0)
const plzDatei = new URL("../data/plz.json", import.meta.url);
try { await access(plzDatei); } catch {
  const r = await fetch("https://raw.githubusercontent.com/zauberware/postal-codes-json-xml-csv/master/data/DE/zipcodes.de.json");
  if (r.ok) {
    const roh = await r.json(), seen = new Set(), out = [];
    for (const z of roh) { const k = z.zipcode + z.place; if (seen.has(k)) continue; seen.add(k); out.push([z.zipcode, z.place, +(+z.latitude).toFixed(3), +(+z.longitude).toFixed(3)]); }
    await writeFile(plzDatei, JSON.stringify({ quelle: "GeoNames (CC BY 4.0) über zauberware/postal-codes-json-xml-csv", orte: out }));
    console.log("PLZ-Tabelle:", out.length);
  } else console.warn("PLZ-Tabelle nicht geladen:", r.status);
}
