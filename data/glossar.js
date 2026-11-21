// Glossar & Formeln. Stand 11/2026. Alle Begriffe kommen in den Lektionen, Quizfragen oder Hausaufgaben vor.
// Die Begriffe stehen je Modul in data/einfach/<modul>.js – mit Schreibweisen (syn), Übersetzung (de),
// Kurzerklärung (d) und den vier Karten der Begriffs-Story. Die Reihenfolge dort ist der Lernpfad (data/lernpfad.js).
// m = Modul-ID für Farbe und Lernpfad = das Modul, in dem der Begriff im Kurs vorkommt.
import { G_EINF } from "./einfach/einf.js";
import { G_PLATT } from "./einfach/platt.js";
import { G_UNT } from "./einfach/unt.js";
import { G_RECHT } from "./einfach/recht.js";
import { G_KPI } from "./einfach/kpi.js";
import { G_PLAN } from "./einfach/plan.js";
import { G_KI } from "./einfach/ki.js";

export const TEILE = { einf: G_EINF, platt: G_PLATT, unt: G_UNT, recht: G_RECHT, kpi: G_KPI, plan: G_PLAN, ki: G_KI };

// Einfache Sprache: Kurzerklärung (d) und Karten (was, bsp, wozu oder verw, merke) je Begriff
export const EINFACH = Object.assign({}, ...Object.values(TEILE));

export const GLOSSAR = Object.entries(TEILE).flatMap(([m, teil]) => Object.entries(teil).map(([w, e]) => ({
 w, ...(e.de ? { de: e.de } : {}), m, d: e.d, syn: e.syn || [w],
 s: [
  { kind: "Begriff", h: w, b: e.was },
  { kind: "Beispiel", h: "Ein Beispiel", b: e.bsp, note: 1 },
  e.verw ? { kind: "Achtung", h: "Nicht verwechseln", b: e.verw } : { kind: "Nutzen", h: "Wozu brauchst du das?", b: e.wozu },
  { kind: "Merke", h: "Das nimmst du mit", b: e.merke, note: 1 }
 ]
})));

// Formeln wie in den Lektionen (Modul Controlling, ohne m; sonst m = Modul für „Das Wichtigste“).
export const FORMELN = [
 { n: "ROI (Return on Investment)", f: "Gewinn ÷ investiertes Kapital × 100", b: "200 € Einsatz bringen 1.000 € Umsatz → 800 € Gewinn ÷ 200 € × 100 = 400 %", h: "Gewinn = Ertrag minus Kosten. Wer den Umsatz statt den Gewinn teilt, rechnet falsch." },
 { n: "CPC (Cost per Click)", f: "Kosten ÷ Klicks", b: "600 € für 1.200 Klicks = 0,50 € pro Klick" },
 { n: "CPA (Cost per Action)", f: "Kosten ÷ Conversions", b: "750 € für 10 Conversions = 75 € pro Conversion" },
 { n: "Conversion Rate (CVR)", f: "Conversions ÷ Klicks × 100", b: "10 Conversions bei 500 Klicks = 2 %" },
 { n: "CPL (Cost per Lead)", f: "Kosten ÷ Leads", b: "360 € für 24 Leads = 15 € pro Lead" },
 { n: "CPO (Cost per Order)", f: "Kosten ÷ Bestellungen", b: "600 € für 30 Bestellungen = 20 € pro Bestellung" },
 { n: "TKP / CPM (Tausender-Kontakt-Preis)", f: "Kosten ÷ Kontakte × 1.000", b: "450 € für 90.000 Kontakte = 450 € ÷ 90 = 5 €" },
 { n: "Customer Acquisition Cost (CAC)", f: "Kosten ÷ neue Kunden", b: "2.000 € für 50 neue Kunden = 40 € pro Kunde" },
 { n: "Engagement-Rate", f: "Interaktionen ÷ Reichweite × 100", b: "60 Likes + 25 Kommentare + 15 Shares = 100 Interaktionen bei 2.000 Reichweite = 5 %" },
 { n: "Share of Voice (SOV)", f: "eigene Nennungen ÷ alle Nennungen × 100", b: "300 von 1.200 Nennungen = 25 %" },
 { n: "Sentiment (Anteil positiv)", f: "positive Beiträge ÷ alle Beiträge × 100", b: "180 positive von 300 Beiträgen = 60 % positiv" },
 { n: "Issue Resolution Rate", f: "gelöste Anfragen ÷ alle Anfragen × 100", b: "170 von 200 Anfragen gelöst = 85 %" },
 { n: "Completion Rate", f: "bis zum Ende gesehen ÷ alle Aufrufe × 100", b: "400 von 1.000 Zuschauern sehen bis zum Schluss = 40 %" },
 { n: "Soll-Ist-Vergleich", f: "Ist ÷ Soll × 100", b: "Soll 1.000, Ist 850 Follower = 85 % Zielerreichung" },
 { n: "Daumenformel Budget", m: "unt", f: "Budget ≤ 50–60 % der erwarteten Einnahmen", b: "48 Gäste × 1.250 € = 60.000 € Einnahmen → höchstens 30.000–36.000 € Budget (empfohlen 35.000 €)" },
 { n: "Influencer-Preis (Faustwert)", m: "unt", f: "100 € pro 10.000 Follower und Post", b: "50.000 Follower → rund 500 € pro Post", h: "Der Preis hängt auch von Aufwand, Nutzungsrechten und Exklusivität ab." }
];
