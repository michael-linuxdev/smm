# 06 – Umsetzung der inhaltlichen Befunde (Review 4), Stand 06.11.2026

Geändert wurden nur Dateien unter `/home/claude/smm/data/`. Nichts ist committet.
- **Geändert:** `kurs.js`, `lektionen3.js`, `fragen2.js`, `mehrfach.js`, `begriffsfragen.js`, `grundwortschatz.js`, `glossar.js`, `glossar2.js`
- **Neu:** `data/lektionen4.js` mit `LEKTIONEN_R4` (10 Lektionen) und `FRAGEN_R4` (25 MC, 10 Freitext). Die Datei wird in `kurs.js` importiert, die Lektionen kommen über die Map `alle` und die `nimm`-Listen hinein, die Fragen mit `neu3: true`.
- **Neu:** `data/vorlesungen.js` (`VORLESUNGEN`: KW → Lektionen). Diese Daten wirken erst, wenn `app.js` sie einliest.

**Für den Koordinator:**
1. `sw.js` muss `data/lektionen4.js` (und ggf. `data/vorlesungen.js`) in `ASSETS` aufnehmen, sonst fehlen die Inhalte offline. Zusätzlich die Cache-Version erhöhen.
2. Optionale Datenfelder, die die App bisher ignoriert:
   - `abschnitt` an den Lektionen `konzeption`, `ressourcen` und `content-strategie` (05 P2-7.3)
   - `bsp` (ausformulierte Beispielantwort, 05 P2-6) an der Hausaufgabenfrage zum viralen Effekt und an der UGC-Freitextfrage

## Statistik vorher → nachher

| Modul | Lektionen | Folien | MC | Mehrfach | Freitext |
|---|---|---|---|---|---|
| einf | 6 → 9 | 32 → 53 | 34 → 42 | 8 → 8 | 6 → 9 |
| platt | 7 → 10 | 40 → 58 | 40 → 45 | 8 → 8 | 9 → 10 |
| unt | 14 → 16 | 78 → 92 | 48 → 53 | 8 → 8 | 12 → 15 |
| recht | 6 → 6 | 34 → 39 | 44 → 44 | 8 → 8 | 11 → 11 |
| kpi | 9 → 9 | 50 → 52 | 58 → 58 | 8 → 8 | 9 → 9 |
| plan | 6 → 8 | 35 → 44 | 32 → 37 | 8 → 8 | 7 → 10 |
| ads (Zusatz) | 2 → 2 | 11 → 11 | 9 → 11 | 0 | 1 → 1 |
| **Summe** | **50 → 60** | **280 → 349** | **265 → 290** | **48 → 48** | **55 → 65** |

Fragen gesamt: 368 → 403. Glossar: 160 → 170 Einträge. Formeln: 10 → 15.

**Prüfungen (Node):**
- Alle Module laden, keine Warnung „Lektion ohne Modul“.
- Keine doppelten Lektions-IDs und keine doppelten Fragenschlüssel (erste 60 Zeichen).
- Jede MC-Frage hat ein gültiges `c`, jede Mehrfachfrage ein `c`-Array.
- Alle RegExps kompilieren, Glossar ohne doppelte `w` oder `syn`.
- Jede Lektion hat 4–7 Folien und endet mit genau einer check-Folie.
- Keine Liste hat mehr als 5 Punkte.
- Kein Folientext hat mehr als 50 Wörter oder 420 Zeichen (gemessen ohne Überschrift).
- **Vorher** gab es 21 Formatverstöße: Grundwortschatz mit 8 Folien und Merke am Ende, 15 Listen mit mehr als 5 Punkten, 5 zu lange Folien. Jetzt sind es 0.
- Überlauftest `python3 /tmp/t_all.py 375 667`: „Folien geprüft 409 Überlauf []“, ERR [].

**Freitext-RegExps:** 31 neue oder geänderte Muster mit je einer guten und einer falschen Antwort getestet. Alle guten Antworten bestehen, keine falsche besteht. Darunter die Angriffstests aus den Berichten:
- „Dezentral ist gut.“ ergibt 1/4
- „Kritische Kommentare löschen …“ ergibt 3/4
- „10,8 %“ und „0,85“ ergeben 0/2
- „Seeding … verbindlich“ ergibt 1/4
- „Im Social Media Management arbeitet man mit IT …“ ergibt 0/3
- „Shitstorm, viel Aufwand, Abmahnungen.“ ergibt 3/4
- „Web 2.0 ist schneller …“ ergibt 0/2

## Einordnung der neuen Lektionen (Reihenfolge nach Vorlesungsplan)

- **einf:** grundwortschatz, web20, **nutzung-de**, rolle, chancen, **viral**, **viral-beispiele**, einsatz (jetzt *Anwendungsfelder & Ziele*), fehler
- **platt:** blogs-communitys, linkedin, insta-tiktok, x-xing-facebook (+ WhatsApp), **youtube-podcast**, **pinterest-snapchat**, **threads-bluesky**, kanalwahl (jetzt *Die richtige Kanalwahl*, am Ende der Plattformen), tools, automatisierung
- **unt:** … content-strategie, influencer, **influencer-kampagne**, **smr**, recruiting (KW48: Influencer → Kampagne → Abgrenzung SMR)
- **plan:** … community, krise, **orm**, **bewertungen** (KW05)

Die Lektion `anwendungsfelder` aus 01-neu.js ist **nicht** als eigene Lektion angelegt. Ihr Inhalt steckt in der bestehenden Lektion `einsatz`, die dieselbe ID behält, damit der Lernfortschritt erhalten bleibt. So gibt es keine doppelte Liste „Einsatzgebiete“. Damit stammen 10 der 11 Lektionen aus 01 als eigene Lektionen.

## Zahlen der ARD/ZDF-Medienstudie 2026 (Aufgabe 3)

Die Originalstudie (ard-zdf-medienstudie.de) war nicht abrufbar.
- **Bestätigt** über die ZDF-Übersichtsseite (Herausgeber):
  - n = 2.462 ab 14 Jahren
  - Social Media täglich 33 % mit 32 Minuten
  - YouTube wöchentlich 47 %
  - **Podcasts wöchentlich 34 %**
- **Widerspruch:** 01-neu.js nannte nach onlinemarketing.de „Podcasts 25 %, bei 14- bis 29-Jährigen 38 %“. Diese Werte habe ich durch die ZDF-Angabe 34 % ersetzt. Die 38 % sind entfallen.
- **Nicht in der Originalquelle bestätigt:** die Plattformwerte (Instagram 40, Facebook 28, TikTok 18, Snapchat 13, Pinterest 11, LinkedIn 8 %) und die Altersgruppen (91/74/53/22 %). Sie stehen nur bei onlinemarketing.de.
  - Auf Folien und in Fragen sind sie deshalb ausdrücklich gekennzeichnet: „laut ARD/ZDF-Medienstudie 2026, berichtet von onlinemarketing.de“ bzw. „laut Bericht zur ARD/ZDF-Medienstudie 2026“.
  - Das Feld `quelle` nennt die Sekundärquelle.
- **Weitere Zahlen nachgeprüft:**
  - EDEKA #heimkommen: 28.11.2015, über 20 Mio. nach 4 Tagen, 43 Mio. bis 18.12. (Wikipedia)
  - Duolingo: 11.02.2025, 1,7 Mrd. Impressionen in zwei Wochen, Ziel 70 Mio., rund 160.000 Beiträge (Fast Company; Unternehmensangaben, auf der Folie als „laut Unternehmen“ markiert)

## 01 – Lehrplan

| Befund | Status |
|---|---|
| P1-1 Viraler Effekt | **umgesetzt:** Lektionen `viral` und `viral-beispiele`. **Angepasst:** In `viral` ist „Seeding“ (aus 05) ergänzt und „exponentiell“ durch „sprunghaft“ ersetzt. In `viral-beispiele` gibt es einen Zwischen-Check und einen Abschluss-Check „Was gehört zu einem realen Beispiel?“. Die EDEKA-Folie nennt jetzt auch Parodien als Treiber. Die Freitext-Frage im Hausaufgaben-Wortlaut (min 4, mit `bsp`) und die Frage „Erfolgsfaktoren/Risiken“ sind übernommen. Bei den MC-Fragen sind nur 5 der 6 übernommen: „Warum spricht man vom ‚viralen‘ Effekt?“ fehlt bewusst, weil es fast dasselbe fragt wie die bestehende Frage „Was bedeutet ‚Viralität‘“. |
| P1-2 ORM | **umgesetzt:** `orm` und `bewertungen` nach `krise`, 5 MC und 2 Freitext. Glossar „Online Reputation Management“ (de gekürzt auf „Rufmanagement im Netz“). |
| P1-3 Social Media Relations | **umgesetzt:** `smr` (dazu die Merke-Karte „Erst Beziehung, dann Bitte“ aus 05), 3 MC und 1 Freitext. Glossar „Social Media Relations“ und „Social Media Newsroom“ (de gekürzt). |
| P2-1 Influencer-Kampagne | **umgesetzt:** `influencer-kampagne`, 2 MC und 1 Freitext, Glossar „Affiliate“. |
| P2-2 Anwendungsfelder | **angepasst:** In `einsatz` integriert (7 Folien: Ziele, Nach außen, Zwischen-Check, Nach innen, LEGO Ideas, Check). Die alte 7er-Liste ist entfernt. Social Commerce und Social Customer Care sind fett hervorgehoben und erklärt. Freitext „vier Anwendungsfelder“ übernommen. Statt der Crowdsourcing-Definitionsfrage (sie hätte die bestehende Getränkehersteller-Frage gedoppelt) gibt es eine neue MC zu LEGO Ideas. |
| P2-3 Nutzung Deutschland | **angepasst:** `nutzung-de` mit Quellenkennzeichnung (siehe oben). Die Altersfrage dient als Lektions-Check. Die Plattform-MC hat jetzt den Fragetext „laut Bericht zur …“. |
| P2-4 Plattformbreite | **umgesetzt:** `pinterest-snapchat`, `youtube-podcast` (mit YouTube-Details aus 02-B14) und `threads-bluesky`. Threads ist korrigiert: In der EU seit Ende 2023 auch ohne Instagram nutzbar. Der Check „Was ist das Besondere an Mastodon?“ war gleichlautend mit einer bestehenden Poolfrage und ist durch einen Kanalwahl-Check zu Bluesky ersetzt. Die MC-Frage „YouTube Shorts“ hat jetzt „bis zu drei Minuten“. 7 MC und 1 Freitext. |
| P2-5 Facebook/LinkedIn im Detail | **nicht umgesetzt**, laut Bericht ausdrücklich ohne Ersatztext. Es soll nach den Vorlesungsfolien von P. Hergert ergänzt werden. Teilweise abgedeckt durch 02-B13 (LinkedIn-Seitenfunktionen) und 02-B16 (WhatsApp). |
| P3-1 Listen über 5 Punkte | **umgesetzt**, alle 15: web20, rolle, chancen (Ersatztext aus 01), einsatz (neu aufgebaut), fehler (in „Fehler in der Planung“ und „Fehler im Alltag“ geteilt), strategie (7 Schritte in 5 Zeilen, Nummern erhalten), blogs-communitys, konzeption, rechtsgebiete, ugc-recht, dsgvo, umsetzung (Roadmap 1–5), redaktion, produktion-streuung, community (Liste durch Merke-Karte mit Verweis auf `krise` ersetzt). |
| P3-2 Vorlesung → Lektionen | **umgesetzt als Daten:** `data/vorlesungen.js`, mit allen KW-Montagen und den Sprechstunden. Die Anzeige in der App ist Sache des Koordinators. |
| P3-3 Glossar | **angepasst:** Statt eines zweiten Eintrags „Viraler Effekt“ ist der bestehende Eintrag **„Viralität“** erweitert (Ice-Bucket-Beispiel, syn „viralen Effekt“, „Viraler Effekt“, „viralen“, „Virales Marketing“). So gibt es keine konkurrierenden Treffer. „Fediverse“ ist ohne die Synonyme „Mastodon“ und „Instanz“ angelegt, weil das zu viel unterstrichen hätte. Alle `de` sind höchstens 32 Zeichen lang und ohne Klammern. |

## 02 – Fachprüfung einf / platt / unt

| Befund | Status |
|---|---|
| B01 Abschlusspräsentation | **umgesetzt** (strategie, Intro: „Hausaufgaben und Abschlusstest“) |
| B02 LinkedIn/TikTok-RegExp | **umgesetzt** (gut 6/4, „Fachwissen-Artikel“ 2/4) |
| B03 Employer-Branding-RegExp | **umgesetzt** |
| B04 Hub-and-Spoke | **umgesetzt:** Folie gekürzt auf ≤ 50 Wörter, Glossar ersetzt, Check-Erklärung angepasst |
| B05 Organisationsmodelle | **umgesetzt** (min 4) |
| B06 Web 1.0/2.0 | **umgesetzt** |
| B07 ziel(?!grupp) | **umgesetzt** (beide Fragen) |
| B08 Risiken + Gegenmaßnahme | **umgesetzt** (min 4) |
| B09 Persona | **umgesetzt** |
| B10 Begriffe web20 | **umgesetzt:** Intro mit O’Reilly 2005. Die neue Liste hat 4 statt 6 Punkte: Crowdsourcing und Social Commerce werden jetzt in `einsatz` erklärt, die Liste bleibt so bei höchstens 5. Glossar „Netzwerkeffekt“ und „Filterblase“ (de „Filter Bubble“, Pariser in `d`). |
| B11 Viral-Folie in chancen | **nicht als eigene Folie:** Durch die Lektionen `viral` und `viral-beispiele` ersetzt, sonst gäbe es eine Doppelung. |
| B12 Instagram/TikTok-Funktionen | **angepasst:** Die Instagram-Textfolie ist durch die Liste „Formate & Funktionen“ ersetzt (Highlights, Collab, Broadcast, Insights). Der Hinweis zum Business-Konto steht jetzt im Intro. Die TikTok-Liste ist neu. Die Lektion hat damit 7 Folien. |
| B13 LinkedIn-Funktionen | **umgesetzt** |
| B14 kanalwahl | **angepasst:** YouTube-Details stehen in `youtube-podcast` (Thumbnail, Kapitel ab 0:00, Shorts bis 3 Min.), Pinterest in `pinterest-snapchat`. Die Facebook-Dopplung ist entfernt. `kanalwahl` heißt jetzt „Die richtige Kanalwahl“ und hat ein neues Intro sowie das Beispiel „Kanalwahl für die Bäckerei Krume“. |
| B15 Microblogging | **angepasst:** Abgedeckt durch `threads-bluesky` (Meta/Threads, dezentral, Fediverse). Die Folie in `blogs-communitys` bleibt unverändert, um Doppelungen zu vermeiden. |
| B16 WhatsApp | **umgesetzt:** neue Folie in `x-xing-facebook`, Titel jetzt „X, XING, Facebook & WhatsApp“, Formulierung „direkt bei Meta oder über einen Anbieter“ (wie B34) |
| B17 Vision/Mission | **umgesetzt** (Folie und Glossar „Vision und Mission“) |
| B18 McAfee | **umgesetzt** |
| B19 EVP & Co. | **umgesetzt** |
| B20 PEST | **umgesetzt** |
| B21 PESO | **umgesetzt:** Folie gekürzt, Check-Erklärung um einen Satz zu Shared Media ergänzt |
| B22 Hero-Hub-Help | **umgesetzt:** Damit die Lektion bei 7 Folien bleibt, sind Storytelling-Text und Beispiel zu einer Folie zusammengelegt. Glossar `m` auf `unt` gesetzt. |
| B23 Budgetmethoden | **umgesetzt** (Folie und Glossar `m: unt` mit erweiterter Erklärung) |
| B24–B26 RegExps | **umgesetzt** |
| B27 Fehler-RegExp | **umgesetzt** |
| B28 WhatsApp-RegExp | **umgesetzt** |
| B29 Business-Konto | **umgesetzt** |
| B30 KI | **umgesetzt** |
| B31 KI-Kompetenz | **umgesetzt** (gekürzt) |
| B32 budget-Titel | **umgesetzt:** „Budget & Kampagnenplanung“ |
| B33 Lead-Gen/Spark Ads | **umgesetzt:** `m: "ads"`, fragen2.js |
| B34 WhatsApp-API | **umgesetzt** (Erklärung `e`) |
| B35 Mehrfach-Längen | **umgesetzt** (beide Fragen) |
| B36 Fediverse | **umgesetzt** (zusammengeführt mit 01-Glossar, de „Verbund dezentraler Netzwerke“) |
| B37 Publishing-Dublette | **umgesetzt:** neue MC „Welche Zusatzfunktion …“. Der alte Fortschritt dieser Frage entfällt. |

## 03 – Fachprüfung recht / kpi / plan / ads

| Nr. | Status |
|---|---|
| 1 ROAS-Check | **umgesetzt** („300 %“ statt „400 %“) |
| 2 Shitstorm-RegExp | **umgesetzt** |
| 3 Abschlussprojekt | **umgesetzt**, zusammen mit 05 P2-8: Es gilt die Merke-Karte aus 05 „Vor jedem Post kurz prüfen“. Sie ist kürzer und enthält keine Angabe zum Lehrgang mehr. |
| 4 § 26 Abs. 2 BDSG | **umgesetzt** an allen vier Stellen (Folie gekürzt, MC `e`, Freitext, Fall) |
| 5 Kaushik im Glossar | **umgesetzt** |
| 6 ROI-Ertrag | **umgesetzt:** Folie und `e` der fragen2-Frage. Der Fragetext war schon korrekt. |
| 7 Werbekennzeichnung | **umgesetzt:** Folie gekürzt, Merke-Karte „Ohne Gegenleistung?“ ergänzt, impressum hat jetzt 7 Folien |
| 8 Anzeigen-Kennzahlen im Kern | **umgesetzt:** Liste „Anzeigen-Kennzahlen kompakt“ in `erfolg`, ohne das Rechenbeispiel, damit sie in die Längengrenze passt. „Messlücken & weitere Messgrößen“ in `daten`. |
| 9 Rechts-Sonderfälle | **umgesetzt:** drei Listen in `bildrechte`, `rechtsgebiete` und `dsgvo`, gekürzt. Weggefallen sind „ab Einsichtsfähigkeit auch des Kindes“ und der BNetzA-Klammerzusatz. |
| 10 Gewinnspiel-RegExp | **umgesetzt** |
| 11 Nachweis-RegExp | **umgesetzt** |
| 12 ER/CTR-RegExp | **umgesetzt** |
| 13 Funnel-RegExp | **umgesetzt** |
| 14 Gewinnspiel-Folie | **umgesetzt** (gekürzt auf ≤ 50 Wörter) |
| 15 Impressum-RegExp | **umgesetzt** |
| 16 Wirtschafts-ID | **umgesetzt** |
| 17 Urheberrecht kompakt | **umgesetzt** (gekürzt) |
| 18 Fanpage VG Köln | **umgesetzt**, gekürzt: „VG Köln 2025 verneint, Berufung läuft“ |
| 19 Monitoring/Listening | **umgesetzt** (MC `e` und Glossar) |
| 20 Engagement-Glossar | **umgesetzt** |
| 21 FORMELN | **umgesetzt** (+5) |
| 22 Deckungsbeitrag | **umgesetzt** (de gekürzt) |
| 23 Engagement-Rate-Länge | **umgesetzt** (begriffsfragen.js) |
| 24 DSGVO-Bußgeld | **umgesetzt** |
| 25 Dopplungen | **umgesetzt:** Die Shitstorm-Liste in `community` ist durch einen Verweis auf `krise` ersetzt (die alte Merke-Karte „Krisenplan“ ist darin aufgegangen). Das ROAS-Beispiel der Begriffsfrage rechnet jetzt 300 € → 1.500 € = 5. **Nicht geändert:** die Dopplung Reporting-MC/Check (nicht falsch, laut Bericht nur eine Empfehlung). |
| 26 Targeting-Merke | **umgesetzt** (ads-basis, „Grenzen beim Targeting“) |

## 05 – Didaktik (nur Inhalte)

| Befund | Status |
|---|---|
| P1-1 Fokusmodus | Code → Koordinator |
| P1-2 (a) Lektion viraler Effekt | **zusammengeführt mit 01** (siehe oben): kein zweiter Lektionsentwurf, Seeding und Hausaufgaben-Aufbau übernommen |
| P1-2 (b) Freitext „Erläutern + reales Beispiel“ | **umgesetzt:** viraler Effekt (01-Wortlaut, Muster aus 01 und 05 zusammengeführt), Influencer mit realem Beispiel, Shitstorm mit realem Beispiel |
| P1-2 (c) Hausaufgaben-Begleiter, Tipp-Box | Code → Koordinator. Inhaltlich steht der Aufbau auf der Folie „So löst du die Hausaufgabe“. |
| P2-1 Doppelte Übersetzungen | **Daten umgesetzt:** Autor-Klammern in grundwortschatz entfernt (PR, HR, Kampagne, Lead), SYN_ALT Reichweite ohne de („Reach“ ist jetzt nur noch Synonym), Engagement de „Beteiligung“, Impressionen de „Einblendungen“. Die Änderung an `linkTerms` macht der Koordinator. |
| P2-2 Antipp-Hinweis | **Daten umgesetzt** (Intro grundwortschatz). Die Karte „Lernhilfen“ macht der Koordinator. |
| P2-3 bis P2-6, P2-9 | Code → Koordinator. Daten-Teil von P2-6: `bsp` an zwei Freitextfragen. |
| P2-7 Vorlesung, SMR, Gliederung unt | **umgesetzt:** `vorlesungen.js`, `smr`, `abschnitt`-Felder. Der Lehrgang-Text in app.js ist Sache des Koordinators. |
| P2-8 Abschlussprojekt | **umgesetzt** (siehe 03-3) |
| P2-10 zu lange Karten | **umgesetzt:** ugc „Hochladen“ in zwei Folien geteilt, „Haftung“ und „KI-Inhalte“ gekürzt, „Definitionen ändern sich“ gekürzt, Betriebsrat mit Quellenzeile. **Angepasst:** „Korrelation“ ist als *eine* gekürzte Folie umgesetzt („Gleichzeitig heißt nicht deshalb“). Eine Teilung hätte `daten` auf 8 Folien gebracht. |
| P3-3 Merke-Überschriften | **umgesetzt** für rolle, web20, fehler, insta-tiktok, kanalwahl, automatisierung, strategie, budget, organisation, benchmarking, bildrechte, ressourcen, content-journey, krise, community, datenschutz. Die Merke-Karte im grundwortschatz ist entfallen (siehe unten). |
| P3-4 Mid-Checks/Beispiele | **teilweise:** Zwischen-Checks in `einsatz` und `viral-beispiele`, Beispielkarten in `kanalwahl` und `einsatz`. Keine flächendeckende Umstellung. |
| P3-1, P3-2, P3-5–P3-7 | Code → Koordinator |

**grundwortschatz:** Die Lektion hatte 8 Folien und endete mit einer Merke-Karte. Das verletzte die Regel „4–7 Folien, Check am Ende“. Die Merke-Karte „Fachwörter sind Abkürzungen …“ ist entfallen, der Glossar- und Antipp-Hinweis steht jetzt im Intro. Die Lektion hat 7 Folien, der Zwischen-Check zu B2B bleibt.

## Offene Punkte
1. **sw.js-Precache:** `data/lektionen4.js` ergänzen (Koordinator), sonst fehlen neue Inhalte offline.
2. **ARD/ZDF-Plattformzahlen** jährlich prüfen und mit der Originalstudie abgleichen, sobald ard-zdf-medienstudie.de erreichbar ist.
3. 01 P2-5 (Facebook/LinkedIn im Detail) erst nach den Vorlesungsfolien.
4. Das Modul `unt` hat jetzt 16 Lektionen. Die `abschnitt`-Gliederung wirkt erst mit Code.
5. Fortschritt geht nur bei der geänderten Publishing-MC (B37) verloren (neuer Fragenanfang). Alle übrigen geänderten Poolfragen behalten ihren Fragetext-Anfang.
