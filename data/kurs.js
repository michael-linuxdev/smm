// Lerninhalte SMM Coach – vollständig aus den Kursunterlagen (Vorlesungsfolien und Studienbriefe smm1–smm3),
// in einfacher Sprache. Lektionen: data/lernen/, Quizfragen: data/fragen/.
// Folientypen: intro, text, liste, beispiel, merke, bild, check (Kurz-Check, c = 0, die App mischt).
// Fragen: Multiple Choice (c = 0), Mehrfachauswahl (c = Liste der richtigen Indizes), Freitext (t: "frei").
// Harte Vorgabe: höchstens 400 Fragen insgesamt (Quizfragen + Kurz-Checks) – node tests/check-data.mjs.
import { L_EINF } from "./lernen/einf.js";
import { L_PLATT1 } from "./lernen/platt1.js";
import { L_PLATT2 } from "./lernen/platt2.js";
import { L_PLATT3 } from "./lernen/platt3.js";
import { L_UNT1 } from "./lernen/unt1.js";
import { L_UNT2 } from "./lernen/unt2.js";
import { L_RECHT } from "./lernen/recht.js";
import { L_KPI } from "./lernen/kpi.js";
import { L_PLAN } from "./lernen/plan.js";
import { L_KI } from "./lernen/ki.js";
import { L_ADS } from "./lernen/ads.js";
import { F_EINF } from "./fragen/einf.js";
import { F_PLATT } from "./fragen/platt.js";
import { F_UNT } from "./fragen/unt.js";
import { F_RECHT } from "./fragen/recht.js";
import { F_KPI } from "./fragen/kpi.js";
import { F_PLAN } from "./fragen/plan.js";
import { F_KI } from "./fragen/ki.js";
import { F_BEISPIEL } from "./fragen/beispiel.js";

export const MODULE = [
 { id: "einf", name: "Routenplaner Web 2.0", kurz: "Web 2.0", farbe: "#ff5a5f",
   text: "Was Social Media ist und wie es wirkt, Nutzung in Deutschland, Chancen und Risiken, Anwendungsfelder, Rolle, Kompetenzen und Berufsfeld.",
   lektionen: L_EINF },
 { id: "platt", name: "Plattformen & Tools", kurz: "Plattformen", farbe: "#ff9f1c",
   text: "Social Sharing, YouTube, Pinterest, Communitys, Blogs, LinkedIn, XING, X, Threads, Facebook, Instagram, TikTok, Hashtags und Tools.",
   lektionen: [...L_PLATT1, ...L_PLATT2, ...L_PLATT3] },
 { id: "unt", name: "Einbettung ins Unternehmen", kurz: "Einbettung", farbe: "#e83e8c",
   text: "Governance, Team und Prozesse, Guidelines, Konzeption von der Analyse bis zum Budget, Social Media Relations, Influencer, Recruiting, Employer Branding und Enterprise 2.0.",
   lektionen: [...L_UNT1, ...L_UNT2] },
 { id: "recht", name: "Recht & Richtlinien", kurz: "Recht", farbe: "#2f9e44",
   text: "Wichtige Gesetze, Impressum, Haftung und Lizenzen, Fanpages und Cookies, Abmahnungen, Werbekennzeichnung und Übungsfälle zum Datenschutz.",
   lektionen: L_RECHT },
 { id: "kpi", name: "Monitoring & Controlling", kurz: "Controlling", farbe: "#7048e8",
   text: "Monitoring und Analytics, messbare Ziele, Kennzahlen, ROI, Monitoring-Tools, Reporting und Optimierung.",
   lektionen: L_KPI },
 { id: "plan", name: "Planung & Umsetzung", kurz: "Umsetzung", farbe: "#1c7ed6",
   text: "Guter Content, Jahres- und Redaktionsplan, Produktion und Verbreitung, Community Management, Reputation, Shitstorm und Krisenmanagement.",
   lektionen: L_PLAN },
 { id: "ads", name: "Social Ads", kurz: "Social Ads", farbe: "#c2410c", zusatz: true,
   text: "Nicht Teil des Lehrplans und nicht im Probetest – aber in der Praxis gefragt: Anzeigen, Targeting, Funnel und Anzeigen-Kennzahlen.",
   lektionen: L_ADS },
 { id: "ki", name: "KI in der Redaktion", kurz: "KI", farbe: "#0e7490", zusatz: true,
   text: "Zusatzwissen aus dem Studienbrief „KI in der Onlineredaktion“: Grundlagen, Text-, Übersetzungs- und Bilder-KI, gutes Prompting. Nicht im Probetest.",
   lektionen: L_KI }
];

export const FRAGEN = [...F_BEISPIEL, ...F_EINF, ...F_PLATT, ...F_UNT, ...F_RECHT, ...F_KPI, ...F_PLAN, ...F_KI];
