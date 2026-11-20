# SMM Coach

Lern-App (PWA) zum Zertifikatslehrgang **Social Media Manager/-in (IHK)** – ausgerichtet auf den Fernlehrgang der HSB Akademie mit Abschlusstest beim IHK-Bildungszentrum Dresden.

- **Lernen:** sechs Module nach der Gliederung der HSB-Kursinformation, Story-Lektionen aus den Kursunterlagen mit Wissens-Checks, Zusatzwissen Social Ads und KI in der Redaktion (nicht im Probetest)
- **Üben:** Quiz pro Modul, Schnell-Quiz, Freitext in Runden à 8 mit Musterlösung und Selbstbewertung, Wiederholung (Leitner-System), Fehlerkiste, Glossar & Formeln
- **Prüfung:** Probetest mit 30 Fragen (Multiple Choice + Freitext), 60 Minuten oder ohne Zeitlimit, Vor/Zurück, Markieren, Übersicht, Teilpunkte beim Freitext
- **Lehrgang:** Ablauf, Kosten, Termine, Karriere

**Annahmen** (nicht offiziell bestätigt): Bestehensgrenze 50 % (bei IHK-Zertifikatstests üblich; Übungsziel 70 %), Anteil Freitext 5 von 30 à 2 Punkte, Multiple Choice teils mit mehreren richtigen Antworten (Punkt nur bei allen richtigen). Die App kennzeichnet das.

## Inhaltliche Grenze

**Höchstens 400 Fragen** (Quizfragen + Kurz-Checks in Lektionen). Neue Fragen nur im Tausch gegen bestehende. Prüfung: `node tests/check-data.mjs` (bricht bei mehr als 400 ab).

## Lektionen aus den Kursunterlagen

Lektionen, Quizfragen und Praxisprojekte stammen vollständig aus den Kursunterlagen. Die Lektionen aller Module sind Zusammenfassungen der Kurs-PDFs (Vorlesungsfolien und Studienbriefe smm1–smm3) in einfacher Sprache. Sie liegen in `data/lernen/` (eine Datei je Themenblock, eingebunden in `data/kurs.js`). Jede Lektion nennt ihre Quelle (`quelle`: Datei und Seiten) und hat genau einen Kurz-Check. Regeln wie beim Glossar: höchstens 18 Wörter pro Satz, Du-Ansprache, keine Abkürzungen – `node tests/check-data.mjs` prüft das. Veraltete Namen aus den Unterlagen sind angepasst (DDG statt TMG, TDDDG statt TTDSG, X statt Twitter). Zusatzmodul „KI in der Redaktion“ (aus dem Studienbrief „KI in der Onlineredaktion“) und „Social Ads“ zählen nicht zum Probetest. Der Vorlesungsplan (`data/vorlesungen.js`) verweist auf die neuen Lektionen. Die Kursunterlagen selbst (PDFs, Screenshots) liegen nicht im Repo.

**Quizfragen** liegen in `data/fragen/` (je Modul eine Datei, `beispiel.js` = die 30 offiziellen Beispielfragen des Abschlusstests in eigener Formulierung, markiert mit `beispiel: true` und im Quiz als „Beispielfrage Abschlusstest“ gekennzeichnet). Jede Frage nennt ihre Quelle; Freitext-Fragen haben eine Musterlösung (`bsp`).

**Praxisprojekte** (`data/praxis/`) sind die 9 Hausaufgaben des Lehrgangs: Aufgabenstellung → Lösungsweg (Entscheidungen mit Rückmeldung) → eigene Antwort mit Musterlösung → Lösung kompakt.

Grundsatz: Alles, was Fragen und Hausaufgaben verlangen, steht in einer Lektion. **Fortschritt** = bearbeitete Fragen ÷ alle Fragen (Quizfragen und Kurz-Checks, derzeit 390); jede bearbeitete Frage zählt, auch eine falsch beantwortete. Standard-Tagesziel 20 Fragen – damit steigt der Fortschritt um gut 5 % pro Tag. Mit Version 0.31 beginnt der Lernfortschritt für alle bei 0 % (Migration `mig3` in `app.js`); Einstellungen, Termine und Glossar-Markierungen bleiben.

## Glossar in einfacher Sprache

Die Begriffe stehen in `data/glossar.js` und `data/glossar2.js`. Die Texte in einfacher Sprache liegen in `data/einfach/` (alphabetisch: `01.js` bis `05.js` mit je 20 Begriffen, `06.js` mit den übrigen 70 – damit sind alle 170 Begriffe überarbeitet): eine Kurzerklärung und vier Karten für die Begriffs-Story (Was ist das? · Beispiel · Wozu brauchst du das? bzw. Nicht verwechseln · Merke). In der Glossarliste öffnet ein Tipp die Story, im Lektionstext führt „Mehr dazu“ im Begriffs-Blatt dorthin. Regeln: kurze Sätze (höchstens 18 Wörter), Du-Ansprache, keine Abkürzungen – `node tests/check-data.mjs` prüft das. Neue Datei auch in `sw.js` (ASSETS) eintragen.

### Lernpfad und „gelesen“

Die Glossarliste ist aufbauend sortiert: Abschnitte in Kursreihenfolge, darin Grundbegriffe zuerst. Die Reihenfolge steht in `data/lernpfad.js` (jeder Begriff genau einmal, bei seinem Modul – `node tests/check-data.mjs` prüft das). Über „A–Z“ lässt sich die Liste alphabetisch anzeigen; bei einer Suche zählt die Treffergüte. Ein Begriff gilt als gelesen, sobald die letzte Karte seiner Story erreicht ist (gespeichert in `S.gl`, also auch in der Sicherungsdatei). Der Haken rechts in der Liste setzt oder entfernt die Markierung von Hand, „Weiter mit …“ öffnet die nächste ungelesene Story, und in den Einstellungen lassen sich alle Markierungen zurücksetzen.

## Offene Stellen

`scripts/stellen-holen.mjs` holt täglich per GitHub Action (`.github/workflows/stellen.yml`, auch manuell unter „Actions“ startbar) passende Stellen aus der Jobbörse der Bundesagentur für Arbeit und schreibt `data/stellen.json`. Die Umkreissuche läuft auf dem Gerät mit `data/plz.json` (GeoNames, CC BY 4.0, über zauberware/postal-codes-json-xml-csv). Andere Jobbörsen ohne offene Schnittstelle werden nur verlinkt. Vor eigenen Pushes `git pull --rebase`, weil die Action täglich committet.

## Technik

Statische Dateien ohne Build: `index.html`, `app.css`, `app.js`, Inhalte in `data/`. Lernstand liegt nur im Browser (localStorage + IndexedDB), Export/Import als Datei in den Einstellungen.

Nach jeder Änderung `VERSION` in `app.js` und `CACHE` in `sw.js` hochzählen – dann erscheint in der App „Jetzt aktualisieren“.

Hosting: GitHub Pages mit `CNAME` → smm.micana.de.
