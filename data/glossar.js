import { GLOSSAR_NEU, SYN_ALT } from "./glossar2.js";
import { E01 } from "./einfach/01.js";
import { E02 } from "./einfach/02.js";
import { E03 } from "./einfach/03.js";
import { E04 } from "./einfach/04.js";
import { E05 } from "./einfach/05.js";
// Glossar & Formeln. m = Modul-ID für die Farbe. Stand 11/2026.
export const GLOSSAR = [
 { w: "Balanced Scorecard", m: "kpi", d: "Kennzahlensystem, das Ziele aus vier Blickwinkeln misst: Finanzen, Kunden, interne Prozesse sowie Lernen und Entwicklung. Im Social-Media-Controlling verbindet sie Kanal-KPIs mit den Unternehmenszielen." },
 { w: "Sentiment Ratio", m: "kpi", d: "Verhältnis positiver, neutraler und negativer Erwähnungen, z. B. 60 % positiv, 30 % neutral, 10 % negativ. Zeigt die Stimmung gegenüber Marke oder Thema." },
 { w: "Conversation Rate", m: "kpi", d: "Kommentare bzw. Antworten pro Beitrag (nach Avinash Kaushik). Beispiel: 160 Kommentare auf 20 Beiträge = 8 pro Beitrag. Manche Tools teilen zusätzlich durch die Follower und geben Prozent an – dann die Bezugsgröße nennen." },
 { w: "Amplification Rate", m: "kpi", d: "Weiterverbreitungen (Shares, Reposts) pro Beitrag (nach Avinash Kaushik). Beispiel: 60 Shares auf 20 Beiträge = 3 pro Beitrag. Manche Tools teilen zusätzlich durch die Follower – dann die Bezugsgröße nennen." },
 { w: "Customer Journey", m: "plan", d: "Der Weg einer Person vom ersten Kontakt mit einer Marke bis zum Kauf und darüber hinaus. Jede Berührung unterwegs ist ein Touchpoint." },
 { w: "Touchpoint", m: "plan", d: "Berührungspunkt zwischen Kunde und Marke, z. B. ein Post, eine Anzeige, eine Bewertung oder ein Gespräch im Laden." },
 { w: "Status-quo-Analyse", m: "unt", d: "Bestandsaufnahme vor der Strategie: Welche Kanäle gibt es, wie laufen sie, was machen Wettbewerber, welche Ressourcen sind da? Werkzeuge sind z. B. Social-Media-Audit und SWOT-Analyse." },
 { w: "SWOT-Analyse", m: "unt", d: "Stärken und Schwächen (intern) sowie Chancen und Risiken (extern) werden gegenübergestellt, um daraus Strategien abzuleiten." },
 { w: "Governance", m: "unt", d: "Regeln und Zuständigkeiten für Social Media im Unternehmen: Wer darf was posten, wer gibt frei, wer reagiert in der Krise, welche Richtlinien gelten." },
 { w: "Social-Media-Guidelines", m: "recht", d: "Richtlinien für Mitarbeitende zum Umgang mit Social Media – beruflich und privat, z. B. zu Vertraulichkeit, Kennzeichnung und Tonalität." },
 { w: "Microblogging", m: "platt", d: "Kurze Beiträge, die schnell und häufig veröffentlicht werden, z. B. auf X, Threads, Bluesky oder Mastodon." },
 { w: "Corporate Blog", m: "platt", d: "Blog eines Unternehmens auf eigener Website. Owned Media: Die Inhalte gehören dem Unternehmen und sind über Suchmaschinen lange auffindbar." },
 { w: "Krisenkommunikation", m: "plan", d: "Geplante Kommunikation vor, während und nach einer Krise: Vorbereitung (Krisenplan, Dark Site), schnelle erste Reaktion (Holding Statement), Nachbereitung." },
 { w: "Holding Statement", m: "plan", d: "Kurze erste Stellungnahme in einer Krise: Man bestätigt, dass man das Thema kennt, prüft und sich wieder meldet." },

 { w: "A/B-Test", m: "kpi", d: "Zwei Varianten (z. B. einer Anzeige) werden gegeneinander getestet. Sie unterscheiden sich in genau einem Merkmal, damit klar ist, was den Unterschied macht." },
 { w: "Active Sourcing", m: "unt", d: "Unternehmen sprechen passende Kandidaten aktiv an, z. B. auf LinkedIn oder XING, statt nur auf Bewerbungen zu warten." },
 { w: "Algorithmus", m: "platt", d: "Regelwerk einer Plattform, das entscheidet, welche Inhalte wem in welcher Reihenfolge angezeigt werden." },
 { w: "Benchmarking", m: "kpi", d: "Vergleich der eigenen Kennzahlen mit Wettbewerbern, der Branche oder der eigenen Vergangenheit." },
 { w: "Community Management", m: "plan", d: "Betreuung der Community: zuhören, antworten, moderieren – im Ton der Marke." },
 { w: "Content-Säulen / Themensäulen", m: "unt", d: "3–5 feste Themenfelder, über die ein Kanal regelmäßig berichtet. Sie geben dem Auftritt ein klares Profil." },
 { w: "Conversion", m: "kpi", d: "Gewünschte Handlung eines Nutzers, z. B. Kauf, Anfrage, Bewerbung oder Newsletter-Anmeldung." },
 { w: "Corporate Influencer", m: "unt", d: "Mitarbeitende, die auf ihren eigenen Profilen für das Unternehmen sprechen und so Reichweite und Vertrauen aufbauen." },
 { w: "Custom Audience", m: "ads", d: "Eigene Zielgruppe für Anzeigen, z. B. Website-Besucher oder Kundenliste (Datenschutz beachten)." },
 { w: "Deepfake", m: "recht", d: "Mit KI erzeugte oder veränderte Bilder, Videos oder Töne, die echte Personen, Orte oder Ereignisse täuschend echt zeigen. Nach der EU-KI-Verordnung offenzulegen." },
 { w: "Earned Media", m: "unt", d: "Reichweite, die andere freiwillig erzeugen: Shares, Erwähnungen, Bewertungen, Presseberichte." },
 { w: "Employer Branding", m: "unt", d: "Aufbau einer attraktiven Arbeitgebermarke." },
 { w: "Engagement", m: "kpi", d: "Alle Interaktionen mit einem Inhalt: Likes, Kommentare, Shares, Saves. Manche Plattformen zählen auch Klicks mit – dann im Bericht angeben, was gezählt wurde." },
 { w: "Enterprise 2.0", m: "unt", d: "Einsatz von Social-Media-Prinzipien und -Werkzeugen für die interne Zusammenarbeit (Wikis, interne Netzwerke, Chats)." },
 { w: "Funnel", m: "plan", d: "Trichter-Modell der Kundenreise: Bekanntheit → Interesse → Kauf/Handlung → Bindung. Je Stufe passen andere Inhalte und Ziele." },
 { w: "Gemeinsame Verantwortlichkeit", m: "recht", d: "Fanpage-Betreiber und Plattform sind gemeinsam für den Datenschutz verantwortlich (EuGH 2018, Art. 26 DSGVO)." },
 { w: "Hub-and-Spoke", m: "unt", d: "Organisationsmodell: ein zentrales Team (Hub) setzt Standards, schult und koordiniert; Fachabteilungen oder Standorte (Spokes) liefern Inhalte zu oder posten im vorgegebenen Rahmen selbst. Bei mehreren Marken oder Ländern: Multiple Hub-and-Spoke mit mehreren Hubs." },
 { w: "Impressionen", m: "kpi", d: "Wie oft ein Inhalt insgesamt angezeigt wurde – auch mehrfach bei derselben Person." },
 { w: "Impressumspflicht", m: "recht", d: "Geschäftlich genutzte Online-Auftritte brauchen ein leicht erkennbares, unmittelbar erreichbares und ständig verfügbares Impressum (§ 5 DDG)." },
 { w: "KPI", m: "kpi", d: "Key Performance Indicator: Kennzahl, die zeigt, ob ein Ziel erreicht wird." },
 { w: "Lead", m: "kpi", d: "Kontakt mit Interesse, z. B. Anfrage, Formular, Bewerbung." },
 { w: "Lookalike Audience", m: "ads", d: "Zielgruppe, die einer Ausgangsgruppe (z. B. Bestandskunden) ähnlich ist; von der Werbeplattform berechnet." },
 { w: "Monitoring / Social Listening", m: "kpi", d: "Social Monitoring erfasst laufend, was über Marke, Produkte und Wettbewerb gesagt wird – auch außerhalb der eigenen Kanäle. Social Listening wertet diese Gespräche aus: Stimmung, Themen, Trends." },
 { w: "Netiquette", m: "plan", d: "Öffentliche Diskussionsregeln auf einem Kanal – Grundlage, um Beleidigungen oder Spam zu entfernen." },
 { w: "Owned Media", m: "unt", d: "Eigene Kanäle: Website, Profile, Newsletter, Blog." },
 { w: "Paid Media", m: "unt", d: "Bezahlte Reichweite: Anzeigen, Sponsoring, bezahlte Influencer-Kooperationen." },
 { w: "Persona", m: "unt", d: "Fiktive, aber typische Vertreterin der Zielgruppe mit Alter, Beruf, Zielen, Problemen und Mediennutzung." },
 { w: "Recht am eigenen Bild", m: "recht", d: "Erkennbar abgebildete Personen müssen der Veröffentlichung in der Regel zustimmen (KUG, DSGVO)." },
 { w: "Redaktionsplan", m: "plan", d: "Plan, welche Inhalte wann auf welchem Kanal erscheinen und wer zuständig ist." },
 { w: "Reichweite", m: "kpi", d: "Anzahl der Personen, die einen Inhalt mindestens einmal gesehen haben." },
 { w: "Reporting", m: "kpi", d: "Regelmäßige Auswertung der eigenen Kennzahlen gegen die Ziele – mit Interpretation und Handlungsempfehlungen." },
 { w: "Retargeting", m: "ads", d: "Erneute Ansprache von Personen, die schon Kontakt hatten (z. B. Website besucht). Tracking braucht meist eine Einwilligung." },
 { w: "Sentiment", m: "kpi", d: "Tonalität von Erwähnungen: positiv, neutral oder negativ." },
 { w: "Share of Voice", m: "kpi", d: "Anteil der Erwähnungen der eigenen Marke an allen Erwähnungen im Markt." },
 { w: "Shitstorm", m: "plan", d: "Welle öffentlicher, oft emotionaler Kritik in kurzer Zeit." },
 { w: "SMART", m: "unt", d: "Zielformel: spezifisch, messbar, attraktiv/akzeptiert, realistisch, terminiert." },
 { w: "Social Recruiting", m: "unt", d: "Personalgewinnung über Social Media." },
 { w: "Storytelling", m: "plan", d: "Botschaften als Geschichte erzählen – z. B. Person, Problem, Lösung, Ergebnis." },
 { w: "Targeting", m: "ads", d: "Auswahl der Zielgruppe für Anzeigen nach Demografie, Interessen, Verhalten oder eigenen Listen." },
 { w: "User Generated Content", m: "recht", d: "Inhalte, die Nutzer selbst erstellen. Vor dem Teilen um Erlaubnis fragen." },
 { w: "Vanity Metrics", m: "kpi", d: "Kennzahlen, die gut aussehen, aber wenig über den Geschäftserfolg sagen, z. B. Follower allein." },
 { w: "Web 2.0", m: "einf", d: "„Mitmach-Web“: Nutzer erstellen und teilen selbst Inhalte, statt nur zu lesen." }
];

export const FORMELN = [
 { n: "Engagement-Rate", f: "Interaktionen ÷ Reichweite × 100", b: "300 Interaktionen bei 10.000 Reichweite = 3 %", h: "Manchmal auch auf Follower oder Impressionen bezogen – im Bericht immer die Basis nennen." },
 { n: "Click-Through-Rate (CTR)", f: "Klicks ÷ Impressionen × 100", b: "50 Klicks bei 5.000 Impressionen = 1 %" },
 { n: "Conversion-Rate", f: "Conversions ÷ Klicks (bzw. Besucher) × 100", b: "15 Anfragen bei 300 Klicks = 5 %" },
 { n: "CPM (Cost per Mille)", f: "Kosten ÷ Impressionen × 1.000", b: "50 € für 10.000 Impressionen = 5 € CPM" },
 { n: "CPC (Cost per Click)", f: "Kosten ÷ Klicks", b: "60 € für 120 Klicks = 0,50 € CPC" },
 { n: "CPL (Cost per Lead)", f: "Kosten ÷ Leads", b: "200 € für 40 Bewerbungen = 5 € CPL" },
 { n: "Share of Voice", f: "Erwähnungen eigene Marke ÷ alle Erwähnungen im Markt × 100", b: "150 von 1.000 Erwähnungen = 15 %" },
 { n: "Follower-Wachstum", f: "(Follower Ende − Follower Anfang) ÷ Follower Anfang × 100", b: "von 800 auf 1.000 Follower = 25 %" },
 { n: "ROI (Return on Investment)", f: "(Ertrag − Kosten) ÷ Kosten × 100", b: "1.500 € Ertrag bei 1.000 € Kosten → (1.500 − 1.000) ÷ 1.000 × 100 = 50 %", h: "Ertrag = der der Maßnahme zurechenbare Rohertrag bzw. Deckungsbeitrag, nicht der reine Umsatz." },
 { n: "ROAS (Return on Ad Spend)", f: "Umsatz aus Anzeigen ÷ Werbekosten", b: "2.000 € Umsatz bei 500 € Werbekosten = ROAS 4 (also 4 € Umsatz je 1 €)" },
 { n: "CPA (Cost per Action)", f: "Kosten ÷ Conversions", b: "1.500 € für 60 Käufe = 25 € CPA" },
 { n: "Frequenz", f: "Impressionen ÷ Reichweite", b: "30.000 Impressionen bei 12.000 Personen = 2,5", h: "Kann nie unter 1 liegen." },
 { n: "Conversation Reach (Altimeter)", f: "Aktiv Beteiligte ÷ alle Erreichten × 100", b: "400 von 20.000 Erreichten = 2 %" },
 { n: "Conversation / Amplification / Applause Rate (Kaushik)", f: "Kommentare bzw. Shares bzw. Likes ÷ Anzahl Beiträge", b: "60 Shares auf 20 Beiträge = Amplification Rate 3", h: "Kaushik rechnet pro Beitrag; Tools teilen oft zusätzlich durch Follower." },
 { n: "Soll-Ist-Abweichung", f: "(Ist − Soll) ÷ Soll × 100", b: "Soll 40, Ist 28 Bewerbungen = −30 %" }
];

// Erweiterung für Quereinsteiger: neue Begriffe + Schreibvarianten/Übersetzungen der vorhandenen
for (const g of GLOSSAR) { const x = SYN_ALT[g.w]; if (x) Object.assign(g, x); }
GLOSSAR.push(...GLOSSAR_NEU);

// Einfache Sprache: neue Kurzerklärung (d) und vier Karten (s) für die Begriffs-Story. Texte in data/einfach/.
export const EINFACH = Object.assign({}, E01, E02, E03, E04, E05);
for (const g of GLOSSAR) {
 const e = EINFACH[g.w]; if (!e) continue;
 g.d = e.d;
 g.s = [
  { kind: "Begriff", h: g.w, b: e.was },
  { kind: "Beispiel", h: "Ein Beispiel", b: e.bsp, note: 1 },
  e.verw ? { kind: "Achtung", h: "Nicht verwechseln", b: e.verw } : { kind: "Nutzen", h: "Wozu brauchst du das?", b: e.wozu },
  { kind: "Merke", h: "Das nimmst du mit", b: e.merke, note: 1 }
 ];
}
