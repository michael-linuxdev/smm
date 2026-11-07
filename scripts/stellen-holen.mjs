// Holt täglich offene Stellen für Social-Media-Berufe aus der Jobbörse der Bundesagentur für Arbeit
// (öffentliche Jobsuche-Schnittstelle, öffentliche Client-ID) und schreibt data/stellen.json.
// Einmalig bzw. wenn fehlend: data/plz.json (Postleitzahl → Ort + Koordinaten) für die Umkreissuche in der App.
// Läuft in GitHub Actions (siehe .github/workflows/stellen.yml), Node ≥ 20.
import { writeFile, readFile, access } from "node:fs/promises";

const API = "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs";
// Die Schnittstelle prüft Header; wir probieren nacheinander bekannte Varianten und merken uns die erste, die klappt.
const VARIANTEN = [
  { "X-API-Key": "jobboerse-jobsuche" },
  { "X-API-Key": "jobboerse-jobsuche", "User-Agent": "Jobsuche/2.9.2 (de.arbeitsagentur.jobboerse; build:1077; iOS 15.1.0) Alamofire/5.4.4", "Accept": "application/json" },
  { "X-API-Key": "jobboerse-jobsuche", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36", "Accept": "application/json", "Origin": "https://www.arbeitsagentur.de", "Referer": "https://www.arbeitsagentur.de/jobsuche/" }
];
let HEAD = VARIANTEN[0];
const BEGRIFFE = ["Social Media Manager", "Social Media", "Community Manager", "Content Manager", "Social Media Redakteur", "Online Marketing Manager", "Influencer Marketing"];
// Nur Stellen, deren Titel wirklich zum Berufsbild passt
const PASST = /social[\s-]?media|community[\s-]?manag|content[\s-]?(manag|creat|market|redakt|strateg|spezial)|influencer|online[\s-]?(marketing|redakt)|digital[\s-]?market|performance[\s-]?market|redakteur.*(online|digital|social)|kommunikation.*(digital|online|social)|tiktok|instagram|linkedin/i;
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function holen(params) {
  const url = API + "?" + new URLSearchParams(params);
  for (let versuch = 1; versuch <= 3; versuch++) {
    try {
      let r = await fetch(url, { headers: HEAD });
      if (r.status === 403 && versuch === 1) for (const v of VARIANTEN) { if (v === HEAD) continue; const r2 = await fetch(url, { headers: v }); console.warn("Variante", VARIANTEN.indexOf(v), r2.status); if (r2.ok) { HEAD = v; r = r2; break; } }
      if (r.ok) return await r.json();
      console.warn("HTTP", r.status, url, (await r.text()).slice(0, 200));
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

// Postleitzahlen-Tabelle (GeoNames, CC BY 4.0) – im Workflow vorher als /tmp/DE.txt entpackt
const plzDatei = new URL("../data/plz.json", import.meta.url);
try { await access(plzDatei); } catch {
  try {
    const roh = await readFile("/tmp/DE.txt", "utf8"), seen = new Set(), out = [];
    for (const z of roh.split("\n")) { const f = z.split("\t"); if (f.length < 11) continue; const k = f[1] + f[2]; if (seen.has(k)) continue; seen.add(k); out.push([f[1], f[2], +(+f[9]).toFixed(3), +(+f[10]).toFixed(3)]); }
    await writeFile(plzDatei, JSON.stringify({ quelle: "GeoNames (CC BY 4.0)", orte: out }));
    console.log("PLZ-Tabelle:", out.length);
  } catch (e) { console.warn("PLZ-Tabelle nicht erstellt:", e.message); }
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
// Zweite Quelle: Adzuna (nur mit kostenlosen Schlüsseln ADZUNA_ID/ADZUNA_KEY als Repository-Secrets)
if (process.env.ADZUNA_ID && process.env.ADZUNA_KEY) {
  for (const was of ["social media manager", "community manager", "content manager", "social media"]) {
    for (let page = 1; page <= 5; page++) {
      const u = `https://api.adzuna.com/v1/api/jobs/de/search/${page}?` + new URLSearchParams({ app_id: process.env.ADZUNA_ID, app_key: process.env.ADZUNA_KEY, what: was, results_per_page: 50, max_days_old: 45, "content-type": "application/json" });
      let d = null; try { const r = await fetch(u); d = r.ok ? await r.json() : (console.warn("Adzuna", r.status), null); } catch (e) { console.warn("Adzuna", e.message); }
      const res = d?.results || [];
      for (const j of res) {
        const t = (j.title || "").replace(/<[^>]+>/g, "");
        if (!PASST.test(t)) continue;
        const id = "az-" + j.id; if (jobs.has(id)) continue;
        jobs.set(id, { id, t, b: "", ag: j.company?.display_name || "", ort: j.location?.display_name || "", lat: j.latitude ?? null, lon: j.longitude ?? null, d: (j.created || "").slice(0, 10), ext: j.redirect_url || "", ho: /home.?office|remote/i.test(t + " " + (j.description || "")) ? 1 : 0, q: "Adzuna" });
      }
      console.log(`Adzuna ${was} S.${page}: ${res.length}`);
      if (res.length < 50) break;
      await sleep(400);
    }
  }
}
const liste = [...jobs.values()].sort((a, b) => (b.d || "").localeCompare(a.d || ""));
if (!liste.length) { console.error("Keine Stellen erhalten – Datei bleibt unverändert."); process.exit(0); }
await writeFile(new URL("../data/stellen.json", import.meta.url), JSON.stringify({ stand: new Date().toISOString(), quelle: [...new Set(liste.map(j => j.q || "Bundesagentur für Arbeit"))].join(", "), n: liste.length, jobs: liste }));
console.log("Gespeichert:", liste.length, "Stellen");

