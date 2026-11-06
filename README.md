# SMM Coach

Lern-App (PWA) zum Zertifikatslehrgang **Social Media Manager/-in (IHK)** – ausgerichtet auf den Fernlehrgang der HSB Akademie mit Abschlusstest beim IHK-Bildungszentrum Dresden.

- **Lernen:** sechs Module nach der Gliederung der HSB-Kursinformation, Story-Lektionen mit Wissens-Checks, Zusatzwissen Social Ads (nicht im Probetest)
- **Üben:** Quiz pro Modul, Schnell-Quiz, Freitext in Runden à 8 mit Musterlösung und Selbstbewertung, Wiederholung (Leitner-System), Fehlerkiste, Glossar & Formeln
- **Prüfung:** Probetest mit 30 Fragen (Multiple Choice + Freitext), 60 Minuten oder ohne Zeitlimit, Vor/Zurück, Markieren, Übersicht, Teilpunkte beim Freitext
- **Lehrgang:** Ablauf, Kosten, Termine, Karriere

**Annahmen** (nicht offiziell bestätigt): Bestehensgrenze 50 % (bei IHK-Zertifikatstests üblich; Übungsziel 70 %), Anteil Freitext 5 von 30 à 2 Punkte, Multiple Choice teils mit mehreren richtigen Antworten (Punkt nur bei allen richtigen). Die App kennzeichnet das.

## Inhaltliche Grenze

**Höchstens 400 Fragen** (Quizfragen + Kurz-Checks in Lektionen). Neue Fragen nur im Tausch gegen bestehende. Gestrichene stehen in `data/gestrichen.js`. Prüfung: `node tests/check-data.mjs` (bricht bei mehr als 400 ab).

## Technik

Statische Dateien ohne Build: `index.html`, `app.css`, `app.js`, Inhalte in `data/`. Lernstand liegt nur im Browser (localStorage + IndexedDB), Export/Import als Datei in den Einstellungen.

Nach jeder Änderung `VERSION` in `app.js` und `CACHE` in `sw.js` hochzählen – dann erscheint in der App „Jetzt aktualisieren“.

Hosting: GitHub Pages mit `CNAME` → smm.micana.de.
