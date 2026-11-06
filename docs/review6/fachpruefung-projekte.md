# Fachprüfung der 8 Praxisprojekte (SMM Coach, Stand 06.11.2026)

Geprüft: `data/projekte-a.js` … `-d.js` (über `data/projekte.js` → `PROJEKTE`), alle 128 Schritte. Rechnungen nachgerechnet, alle 10 Freitext-Aufgaben mit Node gegen gute und falsche Antworten getestet, Rechtsstand und Firmennamen per Websuche geprüft.

**Ohne Befund (geprüft und korrekt):**
- Meta-Gewinnspielregeln (fitness #3, tourismus #4): Auf Facebook sind Teilen und Freunde-Markieren als Bedingung verboten. Auf Instagram ist Markieren in Kommentaren erlaubt, falsches Markieren nicht. Quelle: IT-Recht-Kanzlei, Stand 30.10.2025.
- BGH VI ZR 1244/20 vom 09.08.2022 (hotel #5): Die Rüge „kein Gästekontakt“ reicht aus, das Portal muss dann prüfen.
- UWG Anhang Nr. 23b/23c und § 5b Abs. 3 UWG (hotel #2, #6).
- UWG Anhang Nr. 4a ab 27.09.2026 (mode #10): Das ist laut IHK Gera die richtige Nummer für allgemeine Umweltaussagen.
- § 57a StBerG (kanzlei #7, #8).
- § 26 Abs. 2 BDSG: Laut buzer.de ist der Wortlaut weiter „schriftlich oder elektronisch“.
- Einwilligung Minderjähriger (Can, 17): Er selbst und die Eltern müssen zustimmen. § 113 BGB greift beim Ausbildungsverhältnis nicht.
- § 87 Abs. 1 Nr. 6 BetrVG (maschinenbau #10).
- § 22/23 KUG.
- § 59 UrhG mit BGH 2024 zu Drohnen (tourismus #6).
- Shitstorm-Skala (stadtwerke #4): Stufe 4 heißt „starker Wind“, Stufe 6 „Orkan“ (Quelle: schieb.de).
- Kaushik-Kennzahlen pro Beitrag (tourismus #12/#13): passen zur Lektion „Kennzahlenmodelle“.

Alle übrigen Rechnungen stimmen. Dazu gehören ER 4,8 %, CPA 60/200 €, 600 € je Einstellung, ER 0,9 %, CR 4 %, ROI 28 % und 100 %, Sentiment 50 → 20 %, CR 5 %, CPA 100 €, Sterne 4,1, +4 %/+18 %, Amplification 90 und Conversation 70.

Nicht verwechslungsgefährlich: Bäckerei Krume (ist der Lehrbeispiel-Name aus den Lektionen), Lindwerk, Faden & Fluss, Stadtwerke Muldenau, Auwald Fitness, Felsenkuss, Silberauen. Zu ihnen gab es keine Treffer in Sachsen.

---

## Befund 1 – P1 · kanzlei · Kopfdaten (Feld `firma`)

**Problem:** „Elbtal Steuerberatung“ gibt es wirklich in Dresden: die „Elbtal Steuerberatung GmbH Steuerberatungsgesellschaft“. In der Story läuft die Kanzlei fast in einen Bruch der Verschwiegenheit (Mandantenpost mit Betrag), und ein Ex-Azubi ist der einzige Super-Admin. Lernende könnten das auf die echte Kanzlei beziehen. Der Name kommt nur im Feld `firma` vor (projekte-c.js, Zeile 143).

**Beleg:**
- https://www.steuertipps.de/steuerberater/sachsen/dresden/633-elbtal-steuerberatung-gmbh-steuerberatungsgesellschaft
- https://www.steuer-berater.de/dresden/elbtal-steuerberatung-gmbh-steuerberatungsgesellschaft-aUMI7t

**Ersatz:** Den neuen Namen bilden die fiktiven Partner aus der Story. Die Websuche fand dazu keinen Treffer in Dresden.

```js
// kanzlei #kopf (nur Feld firma ersetzen)
{ firma: "Seidel & Hoffmann Steuerberater PartG mbB, Dresden" }
```

## Befund 2 – P1 · hotel #6 · „Drei Ideen für bessere Sterne“

**Problem:** Die Option „nur ausgewählte 5-Sterne-Stimmen zeigen, ohne Angaben zur Prüfung“ bekommt p:1 („vertretbar“). Sie ist aber selbst unlauter:
- Wer Verbraucherbewertungen zugänglich macht, muss angeben, ob und wie er ihre Echtheit prüft (§ 5b Abs. 3 UWG). Fehlt das, ist das Irreführung durch Unterlassen (§ 5a Abs. 1 UWG).
- Die Rückmeldung sagt selbst „wäre irreführend“.

Auf die Frage „Welcher ist rechtlich sauber?“ gibt es damit zwei rechtswidrige Optionen, und eine davon bekommt Punkte. Das widerspricht der Lektion, die ausdrücklich gegen Rosinenpicken bei Bewertungen ist.

**Beleg:** § 5b Abs. 3 UWG, § 5a Abs. 1 UWG. UWG Anhang Nr. 23c nennt ausdrücklich auch die „falsche Darstellung“ von Bewertungen.

**Ersatz:** p:1 wird eine erlaubte, aber schwächere Variante. Die Frage zielt jetzt auf „sauber und glaubwürdig“.

```js
// hotel #6
{ k: "wahl", h: "Drei Ideen für bessere Sterne", b: "Für die Hotel-Website liegen drei Vorschläge auf dem Tisch. Welcher ist rechtlich sauber und am glaubwürdigsten?",
  o: [
    { t: "Agentur-Angebot: 40 Fünf-Sterne-Bewertungen von „echten Profilen“ für 290 €", p: 0, fb: "Das ist die Beauftragung gefälschter Bewertungen – nach **UWG, Anhang Nr. 23c** immer unlauter. Abmahnung und Ärger mit Google drohen, egal wie echt die Profile wirken." },
    { t: "Alle Google-Bewertungen per Widget zeigen, mit Hinweis „nicht von uns geprüft“", p: 1, fb: "Erlaubt: Du sagst offen, dass nicht geprüft wird (§ 5b Abs. 3 UWG), und zeigst auch Kritik. Aber ungeprüfte Stimmen überzeugen weniger – und die Fake-Welle stünde mit auf deiner Website." },
    { t: "Bewertungen aus dem Buchungssystem zeigen – nur Gäste mit Buchungsnummer", p: 2, fb: "Richtig: Das ist eine echte **Verifizierung**. Du informierst offen über die Prüfung (§ 5b Abs. 3 UWG). Nur dann darfst du behaupten, die Bewertungen stammen von echten Gästen (**Anhang Nr. 23b**)." }
  ] }
```

## Befund 3 – P2 · hotel #14 · „Was meldest du Anja?“

**Problem:** Die p:2-Rückmeldung nennt den Vergleich Q3 mit Q3 des Vorjahres einen „Soll-Ist-Vergleich“. Das ist ein Zeitvergleich (Vorjahresvergleich). Ein Soll-Ist-Vergleich misst gegen ein vorher geplantes Ziel. So definiert es auch die App in der Lektion „Erfolg bewerten: ROI, ROAS & Soll-Ist“ („Ziele planen (Soll), Ergebnisse messen (Ist)“), und so nutzen es die anderen Projekte richtig (baeckerei #14, fitness #14). Prüfungsrelevante Begriffsverwechslung.

**Beleg:** MODULE, Lektion `erfolg`, Folie „Soll-Ist-Vergleich“.

```js
// hotel #14
{ k: "wahl", h: "Was meldest du Anja?", b: "Die **Antwortquote** liegt bei 188 ÷ 200 × 100 = 94 %. Anja fragt: „Und die Buchungen? Plus 18 %, oder?“",
  o: [
    { t: "Ja, +18 % mehr Direktbuchungen – das ist allein der Erfolg der Bewertungen", p: 0, fb: "Q1 ist Nebensaison, Q3 Hauptsaison. Der Vergleich zeigt vor allem die **Saison**, nicht die Wirkung der Bewertungen. Ursache und Zusammenhang sind nicht dasselbe." },
    { t: "Die Buchungen lieber gar nicht berichten, nur Sterne und Antwortquote", p: 1, fb: "Sterne und Antwortquote sind wichtig. Aber das Ziel ist Umsatz – ein guter Bericht zeigt deshalb auch die Buchungen, nur richtig verglichen." },
    { t: "+4 % zum Vorjahresquartal; bessere Bewertungen sind ein möglicher Grund unter mehreren", p: 2, fb: "Richtig: 366 ÷ 352 = **+4 %** im fairen **Vorjahresvergleich** derselben Saison. Für einen **Soll-Ist-Vergleich** bräuchtest du ein vorher festgelegtes Ziel. Ehrlich eingeordnet bleibt der Bericht glaubwürdig." }
  ] }
```

## Befund 4 – P2 · kanzlei #10 · „Darf der Beitrag so raus?“

**Problem:**
1. Die p:2-Option („Nur mit schriftlicher Einwilligung …“) legt nahe, dass der Entwurf mit Einwilligung so erscheinen darf. „Dank uns 40.000 € Steuern gespart 💪“ bleibt aber reißerische Erfolgswerbung und ist nicht sachlich im Sinne von § 57a StBerG. Option p:1 kritisiert genau das, p:2 nicht: Das ist ein Widerspruch.
2. Die p:0-Rückmeldung sagt „Ohne **schriftliche** Einwilligung ist der Beitrag ein Berufsrechtsverstoß“. Die Entbindung von der Verschwiegenheit braucht gesetzlich keine Schriftform. Schriftlich ist nur zum Beweis dringend zu empfehlen.

**Beleg:** § 57a StBerG („über die berufliche Tätigkeit in Form und Inhalt sachlich unterrichtet“), § 57 Abs. 1 StBerG, § 203 StGB (Offenbarungsbefugnis durch Einwilligung, formfrei).

```js
// kanzlei #10
{ k: "wahl", h: "Darf der Beitrag so raus?",
  o: [
    { t: "Nur mit schriftlicher Einwilligung und sachlich, sonst anonymer Praxisfall", p: 2, fb: "Richtig: Mandantendaten nur mit **ausdrücklicher Einwilligung**, und auch dann sachlich statt „Dank uns gespart 💪“ (§ 57a StBerG). Ohne Einwilligung wird ein neutraler Fall daraus („Ein Handwerksbetrieb fragte uns …“), ohne Ort, Foto und Betrag." },
    { t: "Ja – der Bäcker freut sich bestimmt über die Werbung", p: 0, fb: "Schon dass jemand Mandant ist, fällt unter die **Verschwiegenheit** (§ 57 StBerG, § 203 StGB). Ohne seine Einwilligung – zum Beweis schriftlich – ist der Beitrag ein Berufsrechtsverstoß." },
    { t: "Name weglassen, aber „Bäcker aus Pirna“ und Betrag behalten", p: 1, fb: "Besser, aber mit Foto und Ort bleibt der Mandant **erkennbar**. Und „dank uns gespart“ ist reißerisch statt sachlich." }
  ] }
```

## Befund 5 – P2 · mode #8 · „„Muss ich das kennzeichnen?““

**Problem:** Als Beleg dafür, dass schon Gratisprodukte eine Gegenleistung sind, nennt der Schritt „BGH 2021“. Die Entscheidung dazu ist BGH, 13.01.2022, I ZR 35/21 („Influencerin III“, kostenlos überlassene Produkte). Die BGH-Urteile von 2021 betrafen Beiträge **ohne** Gegenleistung. Die App zitiert in FRAGEN richtig „BGH, 13.01.2022, I ZR 35/21“. Das Projekt widerspricht dem.

**Beleg:**
- https://www.beck-aktuell.de/daily/meldung/detail/bgh-influencerin-iii-werbung-auch-bei-geschenktem-produkt
- https://www.wbs.legal/wettbewerbsrecht/bgh-zu-influencern-kennzeichnungspflichte-werbung-auch-bei-geschenktem-produkt-59419/

```js
// mode #8
{ k: "wahl", h: "„Muss ich das kennzeichnen?“", b: "Lea, eine der vier, schreibt: „Bei mir gibt es kein Honorar, ich bekomme nur die Kleider. Dann ist das doch keine Werbung, oder?“",
  o: [
    { t: "Doch: „Werbung“ an den Anfang, bei Storys auf jede Kachel", p: 2, fb: "Auch **Gratisprodukte** sind eine Gegenleistung (**§ 5a Abs. 4 UWG**; BGH 2022, „Influencerin III“). Dann muss der Beitrag auf den ersten Blick als Werbung erkennbar sein. Ohne Kennzeichnung droht auch euch eine Abmahnung." },
    { t: "Ja, ein „#ad“ am Ende der Hashtags genügt", p: 0, fb: "Ein „#ad“ zwischen anderen Hashtags ist **nicht auf den ersten Blick** erkennbar. Klar ist „Werbung“ oder „Anzeige“ am Anfang." },
    { t: "Ja, das Label „Bezahlte Partnerschaft“ der Plattform reicht", p: 1, fb: "Das Plattform-Label hilft, ist aber klein und nicht überall sichtbar. Darauf allein besser nicht bauen – zusätzlich **„Werbung“** an den Anfang." }
  ] }
```

## Befund 6 – P2 · baeckerei #3 · „Formuliere ein SMART-Ziel“

**Problem:** Der Musterpunkt „Messbar“ prüft nur auf `\d` und zählt deshalb die Jahreszahl mit. Das falsche Vanity-Ziel „Bis Ende Februar 2027 mehr Follower auf Instagram gewinnen.“ erreicht 3 von min 3 und gilt als bestanden. Genau das lehrt das Projekt in #14 als Fehler. Getestet mit Node: Treffer [0,1,1,1,0].

**Ersatz:** „Messbar“ braucht jetzt eine Zahl vor Vorbestellungen oder ein Prozent, und min steigt auf 4. Node-Test:

| Antwort | Treffer | Ergebnis |
|---|---|---|
| bsp | 5 | bestanden |
| „Bis Ende Februar 2027 kommen 150 Vorbestellungen über den Instagram-Link.“ | 4 | bestanden |
| Follower-Ziel | 2 | nicht bestanden |
| „Bis Ende Februar 2027 1.000 Follower auf Instagram, junge Leute.“ | 3 | nicht bestanden |

```js
// baeckerei #3
{ k: "frei", h: "Formuliere ein SMART-Ziel", b: "Jana sagt: „Mehr junge Leute sollen vorbestellen.“ Mach daraus ein **SMART-Ziel** für Social Media bis Ende Februar 2027.",
  muster: [
    ["Spezifisch: Vorbestellungen als Ziel", "vorbestell|bestellung"],
    ["Messbar: Zahl der Vorbestellungen (oder Steigerung in %)", "\\b\\d[\\d.]*\\s?(%|prozent|(neue|zusätzliche|weitere|online-?)?\\s?(vor)?bestell)"],
    ["Terminiert: klares Enddatum", "\\bbis\\b|\\d{1,2}\\.\\s?\\d{1,2}\\.|\\bende\\b|\\b(dezember|januar|februar|märz)\\b|\\b20\\d\\d\\b"],
    ["Messweg: über Instagram-Link, WhatsApp oder Code", "\\blink|\\bcode\\b|rabattcode|\\butm|instagram|whatsapp"],
    ["Zielgruppe benannt (z. B. 20 bis 35 Jahre)", "\\bjung|\\b(18|20|25)\\s?(–|-|bis)\\s?(30|35|40)\\b|studi|neukund"]
  ],
  min: 4,
  bsp: "• Bis 28.02.2027 (terminiert)\n• gehen pro Monat 150 Vorbestellungen ein (messbar)\n• über den Instagram-Link und den Code „KRUME“ (spezifisch, messbar)\n• vor allem von Neukunden zwischen 20 und 35 (Zielgruppe)\n• mit 1.500 € und 4 Stunden pro Woche realistisch" }
```

## Befund 7 – P2 · kanzlei #3 · „SMART-Ziel formulieren“

**Problem:** Wie in Befund 6 erfüllt `\d` den Musterpunkt schon mit einer Jahreszahl. „Mehr Follower auf LinkedIn im Jahr 2027.“ und „Wir wollen bis 2027 auf LinkedIn 500 Follower.“ erreichen 3 von min 3. Verlangt war aber ein Ziel für **Mandatsanfragen**. Node: Treffer [1,1,0,1].

**Ersatz:** Die Zahl muss jetzt bei Anfragen, Leads oder Erstgesprächen stehen. Node-Test:

| Antwort | Treffer | Ergebnis |
|---|---|---|
| bsp | 4 | bestanden |
| „Bis Ende 2027 10 Erstgespräche mit Geschäftsführern über LinkedIn.“ | 4 | bestanden |
| beide Follower-Ziele | 2 | nicht bestanden |
| „Mehr Anfragen über LinkedIn.“ | 2 | nicht bestanden |

```js
// kanzlei #3
{ k: "frei", h: "SMART-Ziel formulieren", b: "Die Partner wollen wissen, woran sie den Erfolg erkennen. Formuliere ein **SMART-Ziel** für Mandatsanfragen über LinkedIn.",
  muster: [
    ["Konkrete Zahl an Anfragen, Leads oder Erstgesprächen", "\\b\\d+\\s?(%|prozent|(qualifizierte|neue|zusätzliche|weitere)?\\s?(mandats)?(anfrage|leads?\\b|erstgespr|mandat|kontaktanfrage|gespräch))"],
    ["Klarer Zeitraum oder Termin", "\\bbis\\b|\\bmonat|\\bquartal|\\bhalbjahr|\\bwoche|\\bjahr|\\b20\\d\\d\\b"],
    ["Messgröße: Anfragen, Leads oder Erstgespräche", "\\banfrage|\\bleads?\\b|\\bmandat|\\berstgespr|\\bkontaktanfrage|\\bgespräch"],
    ["Zielgruppe oder Kanal", "\\blinkedin|\\bmittelst|\\bunternehm|\\bgeschäftsführ|\\bentscheider|\\bfirmen"]
  ],
  min: 3,
  bsp: "• Bis 30. Juni 2027 kommen über LinkedIn 12 qualifizierte Mandatsanfragen\n• Zielgruppe: Geschäftsführung mittelständischer Firmen in Sachsen\n• Gemessen über Formular mit UTM-Link und Nachfrage im Erstgespräch\n• Ausgangswert: bisher 0 Anfragen über LinkedIn" }
```

## Befund 8 – P2 · tourismus #3 · „Ziel und Zielgruppe festlegen“

**Problem:**
1. „Zahl mit Messgröße“ erkennt ausdrücklich „follower“ an, obwohl das Projekt Follower in #14 als Vanity Metric einordnet. „Bis Ende September 10.000 Follower auf Instagram für junge Leute.“ erreicht 4 von min 3. Node: [1,1,1,1].
2. Eine gute Antwort mit „230 zusätzliche Anfragen“ fällt durch: Ein Wort zwischen Zahl und Messgröße wird nicht erkannt.

**Ersatz:**
- „follower“ entfernt, ein Zwischenwort erlaubt, Kanäle ergänzt.
- min steigt auf 4. Die Aufgabe verlangt ausdrücklich Zahl, Kennzahl, Zeitraum und Kanal.

Node-Test:

| Antwort | Treffer | Ergebnis |
|---|---|---|
| bsp | 4 | bestanden |
| „Bis zum 30.09.2027 sollen 230 zusätzliche Anfragen über Instagram kommen, Zielgruppe Familien aus Leipzig.“ | 4 | bestanden |
| Follower-Ziel | 3 | nicht bestanden |
| „Bis September 2027 1 Million Views …, junge Familien.“ | 3 | nicht bestanden |

```js
// tourismus #3
{ k: "frei", h: "Ziel und Zielgruppe festlegen", b: "Formuliere für die Kampagne ein **SMART-Ziel**. Nenne dazu die **Hauptzielgruppe**. Denk an Zahl, Kennzahl, Zeitraum und Kanal.",
  muster: [
    ["Zahl mit Messgröße (Anfragen, Buchungen, Gäste-Beiträge – nicht Follower)", "\\d[\\d.,]*\\s?(%|prozent|([a-zäöüß-]+\\s)?(buchung|übernacht|beitr|anfrag|gäste|besuch|klick|ankünft))"],
    ["Zeitraum oder Termin", "\\bbis\\b|\\bende\\b|\\binnerhalb\\b|\\bmonat|\\bwochen\\b|quartal|\\bsommer|\\bseptember|\\b20\\d\\d\\b"],
    ["Konkrete Zielgruppe", "famili|\\bpaare?\\b|kurzurlaub|wander|\\bjunge|leipzig|dresden|chemnitz|berlin|\\d+ ?(bis|–|-) ?\\d+ jahr"],
    ["Kanal oder Mechanik", "instagram|tiktok|facebook|youtube|hashtag|\\bugc\\b|website|webseite|\\breels?\\b|creator|influencer"]
  ],
  min: 4,
  bsp: "• Ziel: Bis 30. September 2027 steigen die Buchungsanfragen über die Website um 15 % gegenüber dem Vorjahreszeitraum.\n• Zusätzlich: 2.000 Gäste-Beiträge mit dem Kampagnen-Hashtag auf Instagram.\n• Zielgruppe: junge Familien (30–45 Jahre) aus Leipzig, Dresden und Berlin, die Kurzurlaub in der Natur suchen." }
```

## Befund 9 – P2 · fitness #14 · „Was steht oben in deinem Bericht an Ronny?“

**Problem:** In der p:2-Rückmeldung steht „100 € … Zwei Monatsbeiträge“. Zwei Monatsbeiträge sind 2 × 59 € = 118 €. 100 € sind knapp 1,7 Beiträge. Das ist ein Rechenfehler in einer Rechen-Rückmeldung.

```js
// fitness #14
{ k: "wahl", h: "Was steht oben in deinem Bericht an Ronny?",
  o: [
    { t: "„1.900 neue Follower – das beste Ergebnis seit Jahren!“", p: 0, fb: "Follower sind hier eine **Vanity Metric**: 420 sind schon wieder weg. Über den Geschäftserfolg sagt die Zahl wenig." },
    { t: "„48 Probetrainings statt 40, 12 Neumitglieder zu 100 € je Mitglied“", p: 2, fb: "Richtig: **Soll-Ist-Vergleich** am Ziel (48 statt 40) und Kosten je Neumitglied (**CPA** = 1.200 € ÷ 12 = 100 €). Weniger als zwei Monatsbeiträge (2 × 59 € = 118 €) – das versteht jeder Inhaber." },
    { t: "„1.480 Teilnahmen und 640 Kommentare schon an Tag 4“", p: 1, fb: "Zeigt Engagement, aber nicht den Erfolg. Kennzahlen gehören in den Anhang, oben steht die Zahl, die am Ziel hängt." }
  ] }
```

## Befund 10 – P2 · mode #3 und tourismus #7 · Handles mit negativer Zuschreibung

**Problem:** Zwei Profile tragen echt aussehende Instagram-Handles und werden als Käufer von Followern dargestellt:
- `@nachhaltignora` (mode #3, Kandidat C)
- `@travel.dreams` (tourismus #7, Option p:0)

Generische Handles wie „travel.dreams“ sind auf Instagram mit hoher Wahrscheinlichkeit vergeben. Der Vorwurf „gekaufte Follower“ träfe dann eine reale Person. Prüfen ließ sich das per Websuche nicht, denn Instagram ist nicht indexiert. Das Risiko ist bei negativer Darstellung aber unnötig. Neutral oder positiv dargestellte Handles (`@wanderwilma`, `@stylebyvanessa`) sind weniger heikel und bleiben. Der Vorschlag ersetzt nur die negativ belegten Profile durch Beschreibungen ohne Handle.
```js
// mode #3
{ k: "daten", h: "Die Shortlist", l: [
  "**A** @stylebyvanessa: 410.000 Follower, Ø Reichweite 38.000, Ø 340 Interaktionen, 5.500 €/Reel",
  "**B** Vier Mikro-Influencerinnen aus Sachsen: je 12.000–35.000 Follower, Engagement-Rate 4–7 %",
  "**B** zusammen: 3.600 € Honorar für drei, Lea nur Kleidung; alle je zwei Teile",
  "**C** Öko-Profil: 88.000 Follower, +30.000 in einer Woche",
  "**C** Ø Reichweite 2.500, Kommentare meist „Nice 🔥“ von Profilen ohne Bild"
] }
```

```js
// tourismus #7
{ k: "wahl", h: "Welche Creatorin oder welcher Creator?", b: "Für das **Seeding** willst du regionale Creators einbinden. Budget: 2.500 €.",
  o: [
    { t: "@wanderwilma: 23.000 Follower, Familien-Wandertouren, 70 % aus Mitteldeutschland, Engagement-Rate 5,2 %", p: 2, fb: "Richtig: Sie passt zur Zielgruppe und hat eine aktive Community. Die **Engagement-Rate** zählt mehr als die Follower-Zahl. Ihr Publikum ist nah dran und kommt eher wirklich vorbei." },
    { t: "@cityjonas: 180.000 Follower, Lifestyle aus Berlin, Engagement-Rate 0,8 %, Preis 4.000 €", p: 1, fb: "Viel Reichweite, aber wenig Beteiligung und kaum Bezug zur Region. Außerdem sprengt er das Budget. Für **Seeding** zählt die Passung zur Zielgruppe." },
    { t: "Ein Reiseprofil: 95.000 Follower für 300 €, Follower meist aus dem Ausland, Engagement-Rate 0,2 %", p: 0, fb: "Viele Follower, fast keine Interaktion, falsches Publikum – typische Hinweise auf **gekaufte Follower**. Das Geld wäre verloren." }
  ] }
```

## Befund 11 – P2 · tourismus #0 und hotel #10/#11 · Doppelte Personennamen

**Problem:** Wer mehrere Projekte spielt, trifft dieselben Namen in anderen Rollen:
- **Frank Seidel** ist in kanzlei der Partner und in tourismus der Bürgermeister. Dazu kommen „Frau Seidel“ (baeckerei) und Pressesprecherin „Katrin Seidel“ (stadtwerke).
- **Ronny** ist in fitness der Inhaber und in hotel der beleidigende Küchenchef.

Das verwirrt gerade die Zielgruppe mit ADHS. Weitere Dopplungen (Jana in baeckerei/mode, Lea in maschinenbau/mode) sind weniger störend, weil die Rollen ähnlich sind. Vorschlag: nur die beiden auffälligsten Fälle ändern.

```js
// tourismus #0
{ k: "szene", h: "Der Auftrag", wer: "Bürgermeister Matthias Kunze, Vorstandsvorsitzender", b: "Unsere Region kennt keiner unter 50. Wir brauchen ein **virales Video** – so wie damals die Ice Bucket Challenge! Ganz Deutschland soll über die Silberauen reden. Du hast 15.000 Euro und bis Mai Zeit. Im Herbst will der Vorstand Ergebnisse sehen." }
```

```js
// hotel #10
{ k: "szene", h: "Nachts um halb zwölf", b: "Ein Gast schreibt: „Schnitzel zäh, 1 Stern.“ Küchenchef **Marco** hat das Google-Passwort und antwortet nachts: „Wer Ketchup aufs Schnitzel kippt, hat eh keine Ahnung. Bleib beim Imbiss, du Banause.“ Am Morgen kursiert der Screenshot in einer Facebook-Gruppe der Region: 140 Kommentare." }
```

```js
// hotel #11
{ k: "wahl", h: "Wie reagiert das Hotel?",
  o: [
    { t: "Antwort stehen lassen – Marco hat beim Schnitzel fachlich ja recht", p: 0, fb: "Eine Beleidigung bleibt eine Beleidigung, egal wer recht hat. Alle Mitlesenden sehen, wie das Hotel mit Gästen umgeht. Die Welle wird größer." },
    { t: "Antwort löschen, sich als Inhaberin öffentlich entschuldigen, Zugänge neu regeln", p: 2, fb: "Richtig: Fehler offen zugeben und zeigen, was sich ändert. Dazu gehört **Social Media Governance**: Nur zwei Personen antworten, eigene Rollen statt geteiltem Passwort. Kritische Antworten gehen vorher zur Freigabe." },
    { t: "Antwort still löschen und hoffen, dass sich alles beruhigt", p: 1, fb: "Das Löschen ist richtig, aber der Screenshot ist längst im Umlauf. Schweigen wirkt wie Vertuschen. Erst eine Entschuldigung und neue Regeln beenden die Diskussion." }
  ] }
```

---

## Zusammenfassung

**11 Befunde: 2 × P1, 9 × P2.**

| Priorität | Befunde |
|---|---|
| P1 | 1 Firmenname kanzlei; 2 hotel #6, p:1 für eine unlautere Option |
| P2 | 3 hotel #14 Soll-Ist; 4 kanzlei #10; 5 mode #8 BGH-Jahr; 6–8 drei Freitext-RegExps; 9 fitness #14 Rechnung; 10 Handles; 11 doppelte Namen |

**Die 5 wichtigsten Empfehlungen:**
1. Die Kanzlei umbenennen, denn „Elbtal Steuerberatung“ gibt es real in Dresden.
2. In hotel #6 die p:1-Option durch eine rechtmäßige Variante ersetzen (§ 5b Abs. 3 UWG).
3. Die SMART-Freitexte (baeckerei #3, kanzlei #3, tourismus #3) so absichern, dass Follower-Ziele nicht bestehen.
4. In hotel #14 „Vorjahresvergleich“ statt „Soll-Ist-Vergleich“ schreiben, damit der Begriff zu den Lektionen passt.
5. In kanzlei #10 auch bei Einwilligung Sachlichkeit verlangen (§ 57a StBerG) und mode #8 auf BGH 2022 („Influencerin III“) korrigieren.
