# Kontext für das unabhängige Gesamt-Review „SMM Coach“ (Stand 06.11.2026, Version 0.13.2)

## Was die App ist
PWA-Lern-App zum Zertifikatslehrgang **Social Media Manager/-in (IHK)** – Fernlehrgang der HSB Akademie (Leipzig), Abschlusstest beim IHK-Bildungszentrum Dresden gGmbH. Live: https://smm.micana.de (GitHub Pages). Code: /home/claude/smm (statisches ES-Modul-Projekt ohne Build: index.html, app.css, app.js, sw.js, data/*.js). Lokaler Server: `cd /home/claude/smm && python3 -m http.server 8765` (Playwright + Chromium sind installiert).

Zielgruppe: Teilnehmende des HSB-Lehrgangs, auch Quereinsteiger ohne Marketing-Vorwissen, ausdrücklich auch Menschen mit ADHS. Hauptnutzung auf dem iPhone als installierte App.

## Gesicherte Fakten zum Lehrgang
- HSB-Broschüre: /mnt/user-data/uploads/e09d6274-Kursinformationen_Social_Media_Manager_in.pdf (Kursdauer 4 Monate, ca. 10 h/Woche, 1 Live-Onlinevorlesung/Woche Mo 18:30–20:00 mit Aufzeichnung, 2 Workshoptage, 1.905 € inkl. 205 € IHK-Testgebühr, Abschlusstest online, 30 Fragen Multiple Choice + Freitext, 60 Minuten, Zulassung nach Einreichung aller Lernerfolgskontrollen = Hausaufgaben je Themenbereich).
- Gliederung laut Broschüre: 1 Routenplaner Web 2.0 · 2 Plattformen & Tools · 3 Einbettung ins Unternehmen · 4 Recht · 5 Monitoring & Controlling · 6 Planung & Umsetzung.
- **Vorlesungsplan des laufenden Kurses** (Foto: /home/claude/review4/vorlesungsplan.jpg): Social Media Management · KW42–46/26 Social Networks (5 Termine!) · KW47 Dozentensprechstunde Social Networks · KW48 Influencer Marketing und Social Media Relations · KW49 Anwendungsfelder des Social Media Managements · KW50 Aufbau einer Social Media Strategie · KW51 Unternehmensintegration und Social Media Governance · KW01/27 Dozentensprechstunde · KW02 Rechtsfragen im Social Web · KW03 Auswertungen in Social Media · KW04 Content- und Community Management · KW05 Online Reputation- und Krisenmanagement. Nächste Vorlesung Mo 23.11.2026.
- **Beispiel-Hausaufgabe** (Foto: /home/claude/review4/hausaufgabe.jpg): „Erläutern Sie kurz, was unter dem viralen Effekt im Rahmen von Social Media zu verstehen ist. Recherchieren und nennen Sie ein reales Beispiel für eine Kampagne, bei der der virale Effekt entscheidend für den Erfolg war.“ – kurz & knackig, stichpunktartig, max. 1 A4-Seite.

## Annahmen in der App (nicht offiziell bestätigt)
Bestehen ab 50 % (Übungsziel 70 %), im Probetest 5 Freitext-Fragen à 2 Punkte, teils Mehrfachantworten (Punkt nur bei allen richtigen).

## Vom Nutzer festgelegte Anforderungen (nicht in Frage stellen, nur prüfen ob umgesetzt)
Zurückhaltende, zugängliche Farben · Lektionen als Story-Karten, die nie scrollen und per Wischen nach unten schließen · Install-Aufforderung beim Erststart · „Jetzt aktualisieren“-Knopf · Start zeigt bearbeitete/gesamt Fragen · kein Fachgespräch · keine Safari-Linkvorschau beim langen Drücken · drei Reiter (Start, Prüfung, Lehrgang) nur als Symbole, alle drei Hauptseiten ohne Scrollen · „Weiterlernen“ startet die nächste neue Lektion · „Üben“ = Fehler + fällige Wiederholungen · Lernhilfen: Schritt für Schritt (Standard an), Tagesziel 10/15/25 (Standard 15), Fokusmodus, ruhige Darstellung, Vorlesen, Pausen-Erinnerung · Fachbegriffe antippbar mit Übersetzung beim ersten Auftreten · Sicherungs-Erinnerung erst nach 7, dann alle 14 Tage.

## Regeln für alle Prüfer
- **Keine Projektdateien ändern.** Nur den eigenen Bericht schreiben.
- Bericht auf Deutsch, je Befund: Priorität (P1 = falsch/kaputt/prüfungsschädlich, P2 = deutlich verbesserungswürdig, P3 = Feinschliff), Fundstelle (Datei + Lektion-ID/Folienüberschrift/Fragetext-Anfang bzw. Code-Zeile), Problem, Beleg/Quelle, konkrete Korrektur (bei Inhalten fertiger Ersatztext als JS-Objekt in eigenem ```js-Block).
- Am Ende: kurze Zusammenfassung mit Zahl der Befunde je Priorität und den 5 wichtigsten Empfehlungen.
