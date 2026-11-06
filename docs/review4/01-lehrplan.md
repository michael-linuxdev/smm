# Review 4 · Prüfer 01: Lehrplan-Abdeckung und Prüfungsvorbereitung

Stand: 06.11.2026, App-Version 0.13.2. Geprüft wurde per Node-Import: `MODULE` und `FRAGEN` aus `data/kurs.js` (mit `lektionen3.js`, `grundwortschatz.js`, `fragen2.js`, `begriffsfragen.js`, `mehrfach.js`) sowie `GLOSSAR` aus `glossar.js` und `GLOSSAR_NEU` aus `glossar2.js`.
Bestand: **7 Module, 50 Lektionen, 368 Fragen** (davon 56 Freitext), 132 Glossarbegriffe.
Abgeglichen mit: (a) der HSB-Broschüre (Seitenübersicht der 6 Themenbereiche), (b) dem Vorlesungsplan-Foto (KW42/26–KW05/27), (c) dem Hausaufgaben-Foto (viraler Effekt).

Neue Inhalte stehen in **/home/claude/review4/01-neu.js**: 11 Lektionen, 36 Fragen (28 MC, 8 Freitext) und 7 Glossarbegriffe. Die Datei ist mit Node geprüft: Sie lässt sich importieren, es gibt keine ID-Kollision und keine doppelte Frage. Jede Lektion hat 4–6 Folien mit höchstens 50 Wörtern je Folie, Listen haben höchstens 5 Punkte mit je höchstens 12 Wörtern, und jede Lektion endet mit genau einer check-Folie. Alle RegExp-Strings lassen sich kompilieren. Die Freitext-Muster habe ich mit einer guten Musterantwort getestet (alle Punkte erkannt) und mit einer inhaltsleeren Antwort (0 Treffer).

---

## 1. Abdeckungsmatrix

Die Fragen-Zahlen sind per Stichwortsuche über Fragetext, Antworten und Muster ermittelt. Sie sind deshalb Näherungswerte, und eine Frage kann mehreren Themen zugeordnet sein. Die Spalte „+R4“ zeigt, was `01-neu.js` ergänzt.

### 1a. Vorlesungsplan (Foto)

| KW | Vorlesung (Dozent) | Lektionen in der App | Fragen ca. | Bewertung | +R4 |
|---|---|---|---|---|---|
| 06/27* | Social Media Management (Löschke) – inkl. Hausaufgabe „viraler Effekt“, TOC „Wie wird Social Media in Deutschland genutzt?“ | einf: web20, rolle, chancen, einsatz, fehler, grundwortschatz | 48 im Modul | Grundlagen **gut**. Zum **viralen Effekt** gibt es keine Lektion, nur 1 MC-Frage und einen Glossareintrag → **fehlt**. Zur **Nutzung in Deutschland** gibt es weder Lektion noch Frage → **fehlt** | viral, viral-beispiele, nutzung-de; 8 MC + 2 Freitext |
| 42–46/26 | Social Networks ×5 (Hergert) | linkedin, insta-tiktok, kanalwahl, x-xing-facebook, blogs-communitys | FB 17, IG 33, TikTok 14, YouTube 9, LinkedIn 14, XING 6, X 5, WhatsApp 9, Blog 8 | Gemessen an 5 Vorlesungsterminen nur **dünn**: Facebook und YouTube haben je 1 Folie. **Pinterest** (3 Fragen, keine Folie), **Snapchat** (1 Frage), **Podcasts** (0) und **Threads/Bluesky/Mastodon** (1 Folie) fehlen weitgehend | pinterest-snapchat, youtube-podcast, threads-bluesky; 7 MC + 1 Freitext |
| 47/26 | Sprechstunde Social Networks | – | – | – | – |
| 48/26 | **Influencer Marketing und Social Media Relations** (Löschke) | influencer (3 Folien, ohne Einstieg), Recht: Werbekennzeichnung | Influencer 15, PR/SMR 4 | Influencer **dünn**: Prozess, Vergütung und Erfolgsmessung fehlen. **Social Media Relations fehlen** komplett | smr, influencer-kampagne; 5 MC + 2 Freitext |
| 49/26 | **Anwendungsfelder des Social Media Managements** | einsatz (4 Folien), chancen | ca. 10 | **dünn**: nur eine Aufzählung. Crowdsourcing/Innovation, Social Customer Care und Social Commerce stehen nur im Glossar | anwendungsfelder; 3 MC + 1 Freitext |
| 50/26 | Aufbau einer Social Media Strategie | konzeption, strategie, analyse, ziele, persona, ressourcen, budget, content-strategie | > 60 | **gut** | – |
| 51/26 | Unternehmensintegration und Social Media Governance | einbettung, organisation, governance, governance-zugaenge | ca. 19 | **gut** | – |
| 02/27 | Rechtsfragen im Social Web (Awe/Eder) | rechtsgebiete, impressum, bildrechte, ugc-recht, datenschutz, dsgvo | 63 im Modul | **gut** | – |
| 03/27 | Auswertungen in Social Media | 9 kpi-Lektionen | 75 im Modul | **gut** | – |
| 04/27 | Content- und Community Management | redaktion, content-journey, produktion-streuung, community, content-strategie | > 38 | **gut** | – |
| 05/27 | **Online Reputation- und Krisenmanagement** | krise, community | Krise 17, **Reputation ≈ 0** | Krise **gut**. **Online Reputation Management fehlt**: kein Begriff, keine Lektion, kein Bewertungsmanagement. Fake-Bewertungen werden nur in einer Recht-Frage behandelt | orm, bewertungen; 5 MC + 2 Freitext |

\* Auf dem Foto steht vorn „Social Media Management, KW 06/27“. Laut Hausaufgaben-Foto (Gliederung „Was sind Social Media … Verantwortung des Social Media Managers“) war das die Einführungsvorlesung von Rita Löschke. KW 06/27 ist vermutlich ein Tippfehler auf der Folie oder eine Wiederholung. Für die Abdeckung spielt das keine Rolle.

### 1b. HSB-Broschüre (Seitenübersicht)

| Themenbereich / Unterpunkt | App-Lektionen | Bewertung |
|---|---|---|
| **1 Routenplaner Web 2.0** · Was ist Social Media | web20, grundwortschatz | gut |
| · Aufgabengebiete Social Media Manager | rolle | gut |
| · Potenziale und Chancen | chancen | gut |
| · **Anwendungsfelder des Social Media Managements** | einsatz | **dünn** → anwendungsfelder |
| · Typische Fehlerquellen | fehler | gut |
| · Risiken und Herausforderungen | chancen (Folie „Risiken“) | ausreichend; durch viral-Risiken ergänzt |
| · Ziele und Einsatzgebiete | einsatz, ziele | gut |
| **2 Plattformen & Tools** · Überblick Tools | tools, automatisierung | gut |
| · Relevante Kanäle und Plattformen | kanalwahl, web20 | ausreichend; nutzung-de liefert Daten |
| · Corporate Blogs, Communitys, Microblogging, KI | blogs-communitys | gut; Microblogging-Alternativen → threads-bluesky |
| · Facebook | x-xing-facebook, kanalwahl (je 1 Folie) | **dünn** (siehe Befund P2-5) |
| · Instagram | insta-tiktok | ausreichend |
| · XING | x-xing-facebook | gut (aktuell, Neuausrichtung 2023) |
| · LinkedIn | linkedin | ausreichend |
| · X | x-xing-facebook | gut |
| · TikTok | insta-tiktok | ausreichend |
| · YouTube | kanalwahl (1 Folie) | **dünn** → youtube-podcast |
| **3 Einbettung ins Unternehmen** (Konzeption … Governance) | 14 Lektionen | gut; **Influencer Marketing dünn** → influencer-kampagne, smr |
| **4 Recht** (alle 6 Unterpunkte) | 6 Lektionen | gut |
| **5 Monitoring & Controlling** (alle 7 Unterpunkte) | 9 Lektionen | gut |
| **6 Planung & Umsetzung** (alle 6 Unterpunkte) | 6 Lektionen | gut; Krisen ja, **Reputation fehlt** → orm, bewertungen |

**Fazit:** Die Broschüren-Gliederung ist fast vollständig abgedeckt. Lücken gibt es dort, wo der **Vorlesungsplan eigene Schwerpunkte** setzt: viraler Effekt (Hausaufgabe), Social Media Relations, Online Reputation Management, Anwendungsfelder und die Plattformbreite der 5 Social-Networks-Termine. Die nächsten drei Vorlesungen (KW48–50) und die letzte (KW05) betreffen genau diese Lücken.

---

## 2. Befunde

### P1-1 Viraler Effekt fehlt, obwohl er Hausaufgabe (Lernerfolgskontrolle) ist
- **Fundstelle:** keine Lektion. Nur `FRAGEN` „Was bedeutet „Viralität“ in Social Media?“ (m: einf) und Glossar „Viralität“.
- **Problem:** Laut Broschüre ist die Einreichung aller Lernerfolgskontrollen Voraussetzung für die Zulassung. Die App erklärt weder die Mechanik noch Erfolgsfaktoren oder Risiken, und sie nennt **kein einziges reales, belegtes Kampagnenbeispiel**. Genau das verlangt die Aufgabe: „Begriff erläutern + reales Beispiel recherchieren“.
- **Beleg:** Hausaufgaben-Foto. Definition und Erfolgsfaktoren: onlinemarketing.de-Lexikon, Haufe Akademie. Fallzahlen: Nature 2017, Wikipedia „Heimkommen“, Fast Company 2025 (siehe Quellen).
- **Korrektur:** Lektionen `viral` und `viral-beispiele` (Modul einf), 6 MC-Fragen und 2 Freitext-Fragen, darunter der exakte Hausaufgaben-Wortlaut mit Muster. Volltext in `01-neu.js`, Kern hier:

```js
{ id: "viral-beispiele", titel: "Virale Kampagnen: echte Beispiele", min: 4, folien: [
 { k: "beispiel", h: "ALS Ice Bucket Challenge (2014)", b: "Eiswasser über den Kopf, Video posten, drei Personen nominieren. Über **17 Mio.** Menschen luden Videos hoch, rund 440 Mio. sahen sie. Die ALS Association erhielt etwa **115 Mio. US-$** (Vorjahreszeitraum: 2,8 Mio.). Quelle: Nature, 2017." },
 { k: "beispiel", h: "EDEKA #heimkommen (2015)", b: "Weihnachtsspot von Jung von Matt, ab 28.11.2015 auf YouTube: Ein Großvater täuscht seinen Tod vor, damit die Familie heimkommt. Nach vier Tagen über **20 Mio.** Aufrufe, bis 18.12. über **43 Mio.** Treiber: starke Emotion. Quelle: Wikipedia „Heimkommen“." },
 { k: "beispiel", h: "Duolingo: „Duo ist tot“ (2025)", b: "Am 11.02.2025 verkündete Duolingo den „Tod“ seines Eulen-Maskottchens, vor allem auf TikTok. Fans spekulierten und erstellten rund **160.000** eigene Beiträge. Laut Unternehmen etwa **1,7 Mrd.** Impressionen in zwei Wochen – geplant waren 70 Mio. Quelle: Fast Company." },
 { k: "liste", h: "So löst du die Hausaufgabe", l: ["Begriff in ein bis zwei Sätzen definieren", "Mechanik erklären: Teilen, Netzwerk, Algorithmus", "Beispiel nennen: wer, wann, welche Plattform", "Belegte Zahlen und warum es viral wurde", "Quelle angeben, kurz und stichpunktartig bleiben"] },
 { k: "check", q: "Was war der entscheidende virale Mechanismus der Ice Bucket Challenge?", a: ["Jede Person nominierte weitere Personen zum Mitmachen", "Ein großes TV-Werbebudget der ALS Association", "Ein Gewinnspiel mit wertvollen Sachpreisen", "Bezahlte Anzeigen auf allen großen Plattformen"], c: 0, e: "Die Nominierung machte jede Teilnahme zum Startpunkt neuer Teilnahmen – ein Schneeballeffekt mit Millionen Videos." }
]}
```
- **Weiteres belegtes Beispiel für Fragen oder Erklärungen:** Old Spice „Response Campaign“ (2010). Darin entstanden über 186 personalisierte Antwortvideos in rund 2,5 Produktionstagen, die Kampagne kam auf über 65 Mio. Aufrufe (D&AD 2011).
- **Hinweis zur Genauigkeit:** Die Ice-Bucket-Zahlen sind gerundet und stammen aus Nature. Die Duolingo-Zahlen sind **Angaben des Unternehmens** (Fast Company nennt an anderer Stelle „fast 2 Mrd.“), deshalb heißt es auf der Folie „laut Unternehmen“.

### P1-2 Online Reputation Management fehlt (Abschlussvorlesung KW05/27)
- **Fundstelle:** Modul plan. Es gibt nur `krise` und `community`, der Begriff „Reputation“ kommt in keiner Lektion, keiner Frage und keinem Glossareintrag vor.
- **Problem:** Die Vorlesung heißt „Online Reputation- **und** Krisenmanagement“. Bewertungsmanagement (Google, Kununu) ist für KMU Alltag und gehört zum typischen Prüfungsstoff.
- **Beleg:** Vorlesungsplan-Foto. UWG Anhang Nr. 23b/23c (buzer.de). e-recht24 zum Umgang mit rechtswidrigen und Fake-Bewertungen.
- **Korrektur:** Lektionen `orm` und `bewertungen` (Modul plan), 5 MC-Fragen und 2 Freitext-Fragen (darunter „Antwort auf Ein-Stern-Bewertung formulieren“), Glossar „Online Reputation Management“. Im Modul plan **nach `krise`** einfügen.

### P1-3 Social Media Relations fehlen (Vorlesung KW48/26, nächster Termin 23.11.)
- **Fundstelle:** Modul unt, `influencer`. PR kommt nur als Stichwort in `einsatz` und im Glossar „PR“ vor.
- **Problem:** Die Hälfte des Vorlesungstitels wird nicht behandelt. Es fehlen die Abgrenzung von Media Relations, Social Media Relations und (bezahltem) Influencer Marketing sowie Social Media Newsroom und die Grundsätze der Blogger- und Creator-Ansprache.
- **Beleg:** Vorlesungsplan-Foto; TEAM LEWIS „Blogger Relations vs. Media Relations“.
- **Korrektur:** Lektion `smr` (Modul unt, direkt vor `influencer`), 3 MC-Fragen und 1 Freitext-Frage, Glossar „Social Media Relations“ und „Social Media Newsroom“.

### P2-1 Influencer Marketing zu knapp für eine eigene Vorlesung
- **Fundstelle:** `influencer`. Die Lektion hat 3 Folien ohne Einstiegsfolie (intro), keinen Kampagnenprozess, keine Vergütungsmodelle und keine Erfolgsmessung. Recht ist gut abgedeckt (6 Fragen zur Kennzeichnung).
- **Korrektur:** Lektion `influencer-kampagne` (Ablauf, Vergütung, KPIs), 2 MC-Fragen und 1 Freitext-Frage, Glossar „Affiliate“.

### P2-2 Anwendungsfelder nur als Aufzählung
- **Fundstelle:** `einsatz`, Folie „Einsatzgebiete“. Es ist eine Liste mit 7 Punkten und verstößt damit auch gegen die Vorgabe von höchstens 5 Punkten.
- **Problem:** Crowdsourcing/Innovation, Social Customer Care und Social Commerce werden nicht erklärt, und es gibt kein Praxisbeispiel.
- **Korrektur:** Lektion `anwendungsfelder` mit dem belegten Beispiel LEGO Ideas (10.000 Unterstützer, 1 % des Nettoumsatzes), dazu 3 MC-Fragen und 1 Freitext-Frage.

### P2-3 Nutzungsdaten Deutschland fehlen
- **Fundstelle:** keine. Die Einführungsvorlesung hatte laut Foto den Gliederungspunkt „Wie wird Social Media in Deutschland genutzt?“.
- **Korrektur:** Lektion `nutzung-de` mit Zahlen der **ARD/ZDF-Medienstudie 2026** (Befragung 27.01.–19.04.2026, n = 2.462, ab 14 Jahren). Mindestens wöchentlich nutzen Instagram 40 %, Facebook 28 %, TikTok 18 %, Snapchat 13 %, Pinterest 11 % und LinkedIn 8 %. Nach Alter nutzen Social Media mindestens wöchentlich 91 % (14–29), 74 % (30–49), 53 % (50–69) und 22 % (70+). Dazu kommen 2 MC-Fragen. **Hinweis:** Zu YouTube gibt der Bericht widersprüchliche Werte (47 % bzw. 71 %), deshalb habe ich YouTube bewusst ohne Zahl gelassen. Zahlen jährlich prüfen (Studie erscheint im Herbst).

### P2-4 Plattformbreite der 5 Social-Networks-Termine
- **Fundstelle:** Modul platt. Pinterest kommt nur in Distraktoren vor, Snapchat in 1 Frage, Podcasts gar nicht, YouTube auf 1 Folie, Threads/Bluesky/Mastodon auf 1 Folie.
- **Korrektur:** Lektionen `pinterest-snapchat` (Pinterest 640 Mio. MAU, Q2/2026), `youtube-podcast` und `threads-bluesky` (Threads laut Meta 500 Mio. MAU im Juni 2026). Dazu 7 MC-Fragen, 1 Freitext-Frage und Glossar „Fediverse“.

### P2-5 Facebook und LinkedIn im Detail
- **Fundstelle:** `x-xing-facebook` und `kanalwahl` haben je 1 Facebook-Folie, `linkedin` hat 5 Folien.
- **Problem:** Das reicht für einen Brückenkurs, ist aber gemessen an 5 Vorlesungsterminen knapp. Es fehlen z. B. Facebook-Gruppen vs. Seite, Events, Meta Business Suite sowie LinkedIn-Showcase-Seiten, Newsletter und Social Selling Index.
- **Korrektur:** Keine Ersatztexte geliefert, weil das Risiko von Doppelungen mit bestehenden Inhalten hoch ist. **Empfehlung:** nach den Vorlesungsfolien von P. Hergert je eine Vertiefungslektion „Facebook im Detail“ und „LinkedIn im Detail“ ergänzen, sobald die Folien vorliegen.

### P3-1 Listen mit mehr als 5 Punkten im Bestand
- **Fundstelle (15 Folien, per Node ermittelt):** `fehler` („Die häufigsten Fehler“: 8), `chancen` („Chancen“: 7), `einsatz` („Einsatzgebiete“: 7), `strategie` („Die 7 Schritte“: 7, inhaltlich begründet). Je 6 Punkte haben: `web20` „Arten von Social Media“, `rolle` „Typische Aufgaben“, `blogs-communitys` „KI sinnvoll einsetzen“, `konzeption` „Typische Bausteine“, `rechtsgebiete` „Die wichtigsten Rechtsgebiete“, `ugc-recht` „UGC rechtssicher teilen“, `dsgvo` „Grundsätze (Art. 5 DSGVO)“, `umsetzung` „Eine typische Roadmap“, `redaktion` „Spalten im Redaktionsplan“, `produktion-streuung` „Formate im Überblick“ und `community` „Shitstorm – was tun?“.
- **Problem:** Das widerspricht der Story-Karten-Vorgabe (keine Scroll-Gefahr, ADHS-freundlich).
- **Korrektur:** Je in zwei Folien teilen oder kürzen. Beispiel:
```js
{ k: "liste", h: "Chancen", l: ["Hohe Reichweite bei geringen Einstiegskosten", "Direkter Dialog und Service in Echtzeit", "Markenaufbau und Vertrauen", "Mitarbeitergewinnung", "Feedback, Marktforschung und gute Messbarkeit"] }
```

### P3-2 Vorlesungsreihenfolge in der App nicht sichtbar
- **Problem:** Die Module folgen der Broschüre, die Vorlesungen haben aber eine andere Reihenfolge (KW48 Influencer/SMR liegt in „Einbettung“, KW05 ORM in „Umsetzung“). Wer die App vorlesungsbegleitend nutzt, muss suchen.
- **Korrektur (optional):** Eine Zuordnung Vorlesung → Lektionen als Daten, z. B. für einen Hinweis „Passend zur nächsten Vorlesung“:
```js
export const VORLESUNGEN = [
 { kw: "48/26", datum: "2026-11-23", titel: "Influencer Marketing und Social Media Relations", lektionen: ["smr", "influencer", "influencer-kampagne", "impressum"] },
 { kw: "49/26", titel: "Anwendungsfelder des Social Media Managements", lektionen: ["anwendungsfelder", "einsatz", "chancen", "viral"] },
 { kw: "50/26", titel: "Aufbau einer Social Media Strategie", lektionen: ["konzeption", "strategie", "analyse", "ziele", "persona", "content-strategie"] },
 { kw: "51/26", titel: "Unternehmensintegration und Social Media Governance", lektionen: ["einbettung", "organisation", "governance", "governance-zugaenge"] },
 { kw: "02/27", titel: "Rechtsfragen im Social Web", lektionen: ["rechtsgebiete", "impressum", "bildrechte", "ugc-recht", "datenschutz", "dsgvo"] },
 { kw: "03/27", titel: "Auswertungen in Social Media", lektionen: ["kennzahlen", "kennzahlenmodelle", "daten", "monitoring", "report", "erfolg"] },
 { kw: "04/27", titel: "Content- und Community Management", lektionen: ["redaktion", "content-journey", "produktion-streuung", "community"] },
 { kw: "05/27", titel: "Online Reputation- und Krisenmanagement", lektionen: ["orm", "bewertungen", "krise"] }
];
```
(Das Datum gibt es nur für KW48, weil nur dieses auf dem Foto steht. Die übrigen Montage ergeben sich aus der KW.)

### P3-3 Glossar-Ergänzungen und Hinweis zum Abgleich
- **Korrektur:** `GLOSSAR_R4` in `01-neu.js` mit 7 Begriffen: Viraler Effekt, Online Reputation Management, Social Media Relations, Social Media Newsroom, Fediverse, Social Customer Care, Affiliate.
- **Achtung:** „Viraler Effekt“ hat die Synonyme „viralen Effekt“ und „Virales Marketing“. Das bestehende „Viralität“ hat die Synonyme „viral“ und „virale“. Je nachdem, wie der Begriffs-Matcher arbeitet (längster Treffer zuerst?), sollte man prüfen, dass „viralen Effekt“ nicht als „Viralität“ markiert wird. Die Synonyme „Mastodon“ und „Instanz“ bei „Fediverse“ ggf. weglassen, falls die Markierung „beim ersten Auftreten“ in Fragetexten zu viel Text unterstreicht.

---

## 3. Einbau-Hinweise
- Datei `01-neu.js` nach `data/r4.js` kopieren und in `kurs.js` **nach** dem Block „Gliederung nach der HSB-Kursinformation“ importieren, sonst überschreibt `M.x.lektionen = nimm([...])` die Ergänzungen. Empfohlene Positionen:
  - einf: `viral` und `viral-beispiele` nach `chancen`, `nutzung-de` nach `web20`, `anwendungsfelder` nach `einsatz`
  - platt: `pinterest-snapchat`, `youtube-podcast` und `threads-bluesky` nach `x-xing-facebook`
  - unt: `smr` und `influencer-kampagne` direkt nach `influencer`
  - plan: `orm` und `bewertungen` nach `krise`
- Die REGELN-Umsortierung in `kurs.js` betrifft nur Fragen ohne `neu3`. Neue Fragen deshalb wie im Kopfkommentar von `01-neu.js` mit `neu3: true` anhängen, damit ihr Modul `m` erhalten bleibt.
- Die Fragen haben, wo es Zahlen oder Recht betrifft, das Feld `quelle` (wie im Bestand).
- Das Feld `min` der Lektionen ist geschätzt (3–4 Minuten).

## 4. Quellen
- ALS Ice Bucket Challenge: Nature 550, S113 (2017) – https://www.nature.com/nature/journal/v550/n7676_supp_out/full/550S113a.html
- EDEKA #heimkommen: https://en.wikipedia.org/wiki/Heimkommen (Zahlen nach Presseberichten Dez. 2015)
- Duolingo „Death of Duo“: Fast Company – https://www.fastcompany.com/91313082/duolingo-dead-duo-owl-social-media-campaign
- Old Spice Response Campaign: D&AD 2011 – https://dandad.org/awards/professional/2011/digital-advertising/18325/old-spice-response-campaign
- Virales Marketing, Definition und Erfolgsfaktoren: https://onlinemarketing.de/lexikon/definition-virales-marketing · https://www.haufe-akademie.de/blog/glossar/virales-marketing/
- ARD/ZDF-Medienstudie 2026: https://onlinemarketing.de/cases/ard-zdf-medienstudie-2026-mediennutzung-deutschland (24.09.2026). Vor Veröffentlichung mit der Originalstudie abgleichen.
- Pinterest Q2/2026 (640 Mio. MAU): https://s204.q4cdn.com/369458543/files/doc_earnings/2026/q2/earnings-result/Q2-2026-Press-Release.pdf
- Threads 500 Mio. MAU (Meta, Juni 2026): https://wersm.com/threads-500-million-users-community-era/
- LEGO Ideas: https://ideas.lego.com/howitworks
- UWG Anhang Nr. 23b/23c: https://www.buzer.de/Anhang_UWG.htm
- Reputationsmanagement und rechtswidrige Bewertungen: https://www.e-recht24.de/ecommerce/13127-reputationsmanagement-fuer-unternehmen.html
- Blogger/Media Relations: https://www.teamlewis.com/de/magazin/blogger-relations-media-relations/

## 5. Zusammenfassung
**Befunde:** P1: 3 · P2: 5 · P3: 3 (gesamt 11).
Geliefert in `01-neu.js`: 11 Lektionen, 36 Fragen (28 MC, 8 Freitext) und 7 Glossarbegriffe, mit Node geprüft (0 Formatfehler).

**Die 5 wichtigsten Empfehlungen**
1. **Viraler Effekt** sofort einbauen (`viral`, `viral-beispiele` und die Freitext-Frage im Hausaufgaben-Wortlaut). Das ist eine zulassungsrelevante Lernerfolgskontrolle, und die App liefert dafür bisher kein belegtes Beispiel.
2. **Social Media Relations** und die Influencer-Vertiefung (`smr`, `influencer-kampagne`) vor der Vorlesung am **23.11.2026** einbauen.
3. **Online Reputation Management** (`orm`, `bewertungen`) ergänzen. Es ist das Thema der Abschlussvorlesung und für KMU praxisrelevant (Google- und Kununu-Bewertungen, UWG-Regeln zu Fake-Bewertungen).
4. Die **Plattformbreite** an die 5 Social-Networks-Termine anpassen (Pinterest, Snapchat, YouTube, Podcasts, Threads/Bluesky/Mastodon, Nutzungszahlen 2026). Später Facebook und LinkedIn anhand der Vorlesungsfolien vertiefen.
5. Optional eine **Zuordnung Vorlesung → Lektionen** anlegen und die 15 Listen mit mehr als 5 Punkten teilen, damit die App vorlesungsbegleitend und scrollfrei bleibt.
