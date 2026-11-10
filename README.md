# SMM Coach

Lern-App (PWA) zum Zertifikatslehrgang **Social Media Manager/-in (IHK)** – ausgerichtet auf den Fernlehrgang der HSB Akademie mit Abschlusstest beim IHK-Bildungszentrum Dresden.

- **Lernen:** sechs Module nach der Gliederung der HSB-Kursinformation, Story-Lektionen mit Wissens-Checks, Zusatzwissen Social Ads (nicht im Probetest)
- **Üben:** Quiz pro Modul, Schnell-Quiz, Freitext in Runden à 8 mit Musterlösung und Selbstbewertung, Wiederholung (Leitner-System), Fehlerkiste, Glossar & Formeln
- **Prüfung:** Probetest mit 30 Fragen (Multiple Choice + Freitext), 60 Minuten oder ohne Zeitlimit, Vor/Zurück, Markieren, Übersicht, Teilpunkte beim Freitext
- **Lehrgang:** Ablauf, Kosten, Termine, Karriere

**Annahmen** (nicht offiziell bestätigt): Bestehensgrenze 50 % (bei IHK-Zertifikatstests üblich; Übungsziel 70 %), Anteil Freitext 5 von 30 à 2 Punkte, Multiple Choice teils mit mehreren richtigen Antworten (Punkt nur bei allen richtigen). Die App kennzeichnet das.

## Inhaltliche Grenze

**Höchstens 400 Fragen** (Quizfragen + Kurz-Checks in Lektionen). Neue Fragen nur im Tausch gegen bestehende. Gestrichene stehen in `data/gestrichen.js`. Prüfung: `node tests/check-data.mjs` (bricht bei mehr als 400 ab).

## Glossar in einfacher Sprache

Die Begriffe stehen in `data/glossar.js` und `data/glossar2.js`. Die Texte in einfacher Sprache liegen in `data/einfach/` (alphabetisch: `01.js` bis `05.js` mit je 20 Begriffen, `06.js` mit den übrigen 70 – damit sind alle 170 Begriffe überarbeitet): eine Kurzerklärung und vier Karten für die Begriffs-Story (Was ist das? · Beispiel · Wozu brauchst du das? bzw. Nicht verwechseln · Merke). In der Glossarliste öffnet ein Tipp die Story, im Lektionstext führt „Mehr dazu“ im Begriffs-Blatt dorthin. Regeln: kurze Sätze (höchstens 18 Wörter), Du-Ansprache, keine Abkürzungen – `node tests/check-data.mjs` prüft das. Neue Datei auch in `sw.js` (ASSETS) eintragen.

## Offene Stellen

`scripts/stellen-holen.mjs` holt täglich per GitHub Action (`.github/workflows/stellen.yml`, auch manuell unter „Actions“ startbar) passende Stellen aus der Jobbörse der Bundesagentur für Arbeit und schreibt `data/stellen.json`. Die Umkreissuche läuft auf dem Gerät mit `data/plz.json` (GeoNames, CC BY 4.0, über zauberware/postal-codes-json-xml-csv). Andere Jobbörsen ohne offene Schnittstelle werden nur verlinkt. Vor eigenen Pushes `git pull --rebase`, weil die Action täglich committet.

## Technik

Statische Dateien ohne Build: `index.html`, `app.css`, `app.js`, Inhalte in `data/`. Lernstand liegt nur im Browser (localStorage + IndexedDB), Export/Import als Datei in den Einstellungen.

Nach jeder Änderung `VERSION` in `app.js` und `CACHE` in `sw.js` hochzählen – dann erscheint in der App „Jetzt aktualisieren“.

Hosting: GitHub Pages mit `CNAME` → smm.micana.de.
