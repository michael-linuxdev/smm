# Praxisprojekte für „SMM Coach“ – Format und Regeln

Ziel: 8 interaktive Praxisprojekte („echte Welt“), in denen Lernende ihr Wissen aus dem Lehrgang
Social Media Manager/-in (IHK) **anwenden**. Jedes Projekt ist eine vollständige, durchgehende Story
mit einer fiktiven, aber realistischen Firma in Deutschland (Sachsen bevorzugt). Die Lernenden sind
die Social-Media-Verantwortlichen und treffen Entscheidungen; die Story reagiert darauf.

Kontext der App: /home/claude/smm/docs/review4/KONTEXT.md lesen. Inhalte der App (Fachstand, Begriffe,
Lektionen) per Node: `import('/home/claude/smm/data/kurs.js')` → MODULE, FRAGEN. Die Projekte müssen
fachlich zu den Lektionen passen (gleiche Begriffe, gleiche Formeln, gleicher Rechtsstand Nov. 2026).
Fiktive Firmen und Personen – KEINE echten Firmennamen als Hauptfigur (reale Beispiele höchstens als
Vergleich in einer Rückmeldung mit Quelle).

## Datenformat (eine Datei je Agent, ES-Modul)

```js
export const PROJEKTE_X = [
{
  id: "baeckerei",                 // kurz, a–z und Bindestrich
  titel: "Die Bäckerei geht online",  // max. 32 Zeichen
  firma: "Bäckerei Krume, Leipzig",
  rolle: "Du übernimmst Social Media für …",   // 1 Satz
  kurz: "Vom ersten Profil zum messbaren Erfolg", // Untertitel max. 45 Zeichen
  module: ["unt", "plan", "recht", "kpi"],      // berührte Module (einf, platt, unt, recht, kpi, plan)
  min: 12,                          // Dauer in Minuten (10–15)
  schritte: [ … 12–16 Schritte … ]
}
];
```

Schritt-Typen (alle Texte Deutsch, Du-Form, einfache Sprache, **max. 60 Wörter je Schritt**,
Listen max. 5 Punkte à 12 Wörter, **fett** mit **Sternchen**; die Karten dürfen nicht scrollen):

1. Szene (Erzählung, Ausgangslage, neue Entwicklung):
   `{ k: "szene", h: "Überschrift", b: "Text", wer: "Name, Rolle" /* optional: wer spricht – dann ist b wörtliche Rede ohne Anführungszeichen */ }`
2. Daten (Zahlen, Ausschnitt aus Statistik, Kommentar, Brief, Briefing):
   `{ k: "daten", h: "…", l: ["Zeile 1", "Zeile 2", …] }`  // max. 6 Zeilen, z. B. „Reichweite: 4.200“
3. Entscheidung (Kern der Interaktivität):
   `{ k: "wahl", h: "Frage/Situation kurz", b: "Kontext 1–2 Sätze (optional)", o: [ { t: "Option", p: 2, fb: "Rückmeldung: was passiert, warum (Fachbegriff nennen)" }, … ] }`
   - 3 Optionen (manchmal 4). Punkte p: 2 = fachlich beste Wahl, 1 = vertretbar mit Schwächen, 0 = Fehler.
   - Genau eine Option mit p: 2. Optionen ähnlich lang; die beste nicht immer die längste/erste.
   - fb: 1–3 Sätze, erklärt die Folge in der Story UND das Fachprinzip. Keine Moralpredigt.
   - Die Story geht danach weiter, egal welche Wahl – spätere Szenen dürfen sich neutral formulieren.
4. Anwenden (kurze freie Aufgabe, wie in der Prüfung/Hausaufgabe):
   `{ k: "frei", h: "Aufgabe kurz", b: "Arbeitsauftrag (z. B. Formuliere ein SMART-Ziel …)", muster: [["Punkt der Musterlösung", "regex-ohne-Slashes"], …], min: 2, bsp: "ausformulierte Beispielantwort, Stichpunkte mit • und Zeilenumbrüchen \n" }`
   - 3–5 Musterpunkte, RegExp mit `new RegExp(r, "i")` geprüft – Wortanfänge mit `\\b` absichern,
     keine Treffer in harmlosen Wörtern (z. B. „teil“ in „Vorteil“). Mit Node an einer guten und einer
     falschen Antwort testen: gut ≥ min, falsch < min.
   - 1–2 Anwenden-Schritte je Projekt.
5. Rechnen (Kennzahlen aus den Daten):
   `{ k: "wahl", … }` mit Zahlen als Optionen ist erlaubt (Formeln wie in der App: Engagement-Rate =
   Interaktionen ÷ Reichweite × 100, CTR = Klicks ÷ Impressionen × 100, ROI = (Ertrag − Kosten) ÷ Kosten × 100,
   ROAS = Umsatz ÷ Werbekosten, CPC, CPM, Conversion-Rate …). Nachrechnen!
6. Abschluss:
   `{ k: "fazit", h: "Was du in diesem Projekt angewendet hast", l: ["…", "…", "…", "…"] }` – genau ein Mal am Ende.

Dramaturgie je Projekt (Beispiel): Ausgangslage → Analyse (Daten) → Entscheidung → Ziel/Persona
(Entscheidung oder Anwenden) → Kanal/Content → überraschende Wendung (z. B. kritischer Kommentar,
Rechtsfrage, Chef will etwas Problematisches) → Entscheidung → Ergebnis in Zahlen (Daten) → Rechnen/
Auswerten → Lessons learned (fazit). Mindestens 5 Entscheidungen, 1 Rechnen, 1–2 Anwenden je Projekt.
Realistisch: echte Rollen (Inhaberin, Geschäftsführer, Betriebsrat, Azubi, Agentur, Kunde),
realistische Budgets und Zahlen für kleine/mittlere Unternehmen in Sachsen.

## Prüfung vor Abgabe (Node)
- Datei importierbar, Pflichtfelder, ids eindeutig, genau ein fazit am Ende, je wahl genau eine Option p:2.
- Wortzahl je Schritt ≤ 60 (Optionen und fb zählen nicht mit), fb ≤ 45 Wörter.
- Alle RegExps kompilieren; gut/falsch-Test bestanden.
- Rechenergebnisse nachgerechnet.
