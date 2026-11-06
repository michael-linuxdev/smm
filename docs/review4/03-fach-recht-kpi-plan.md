# Fachprüfung Recht & Kennzahlen – Module `recht`, `kpi`, `plan`, `ads`

Prüfer: unabhängiger Fachprüfer (Schwerpunkt Recht und Kennzahlen) · Stand der Prüfung: 06.11.2026 · App-Version 0.13.2

## Umfang und Methode

- MODULE und FRAGEN wurden per Node aus `data/kurs.js` geladen, also im Endzustand nach allen `splice`-, `nimm`- und `REGELN`-Umbauten. Geprüft wurden:
  - **36 Lektionen** mit allen Folien: recht 6, kpi 9, plan 6, ads 2
  - **192 Fragen** mit m ∈ {recht, kpi, plan, ads}: MC mit einer Antwort, Mehrfachantworten (c als Array) und **28 Freitextfragen**
  - **92 Glossar-Einträge** dieser Module (recht 28, kpi 34, plan 19, ads 11)
  - alle **10 FORMELN**
- Alle Rechenbeispiele habe ich nachgerechnet: Folien, MC, Mehrfachantworten, Glossar und FORMELN, zusammen 41 Zahlenbeispiele. **Alle Ergebnisse stimmen.** Probleme gibt es nur bei der Eindeutigkeit (Befund 1) und bei Begriffen (Befund 6).
- Jede Freitext-RegExp habe ich mit `new RegExp(muster, "i")` an je einer guten, einer mittelmäßigen und einer falschen Antwort getestet (Tabelle im Anhang). Für die Problemfälle gab es zusätzliche Angriffstests.
- Keine Kollisionen der Fragenschlüssel (`q:` + die ersten 60 Zeichen) in diesen Modulen.
- Zweifelsfälle habe ich im Web nachgeprüft (Quellen am Ende).

### Ausdrücklich als korrekt bestätigt (Stand 11/2026)

**Impressum und Plattformen**
- DDG statt TMG seit 14.05.2024, Pflichtangaben nach § 5 DDG (Stammkapital nur, wenn Kapital angegeben wird), E-Mail-Pflicht.
- § 6 DDG für Gewinnspiel-Bedingungen.
- BNetzA als Koordinator für digitale Dienste (§ 12 DDG).
- DSA Art. 17, 20, 21 und 28.
- BGH III ZR 179/20: Anhörung vor einer Kontosperrung.

**Datenschutz**
- TDDDG § 25 (früher TTDSG).
- EuGH C-210/16 Wirtschaftsakademie (2018), C-40/17 Fashion ID (2019), C-673/17 Planet49 (2019).
- Bußgeldrahmen nach Art. 83 DSGVO.

**Werbung und Wettbewerb**
- § 5a Abs. 4 UWG mit Vermutungsregel.
- BGH I ZR 35/21 „Influencerin III“: Auch ein geschenktes Produkt ist eine Gegenleistung.
- UWG Anhang Nr. 23c (gefälschte Bewertungen).
- Glücksspiel nach § 3 GlüStV.

**Urheber- und Bildrecht**
- § 23 KUG, § 59 UrhG mit BGH I ZR 67/23 (Drohnenaufnahmen, 23.10.2024).
- § 64 UrhG (70 Jahre), CC BY-NC.

**KI-Verordnung**
- Art. 50 KI-VO gilt seit 02.08.2026.
- Digital Omnibus = VO (EU) 2026/1744, in Kraft seit 27.07.2026:
  - Art. 4 von „sicherstellen“ zu „fördern“ abgeschwächt
  - Art. 50 Abs. 2 für Altsysteme bis 02.12.2026 verschoben
  - Deepfake-Pflicht (Abs. 4) nicht verschoben
  - Hochrisiko nach Anhang III ab 02.12.2027

**Plattform-Fakten**
- Instagram erlaubt höchstens 5 Hashtags (Dezember 2025).
- Meta stellt auf „Views“ um (Instagram-Impressionen für Beiträge ab Juli 2024 entfallen).

**Kennzahlenmodelle**
- Kaushik 2011, Altimeter 2010 (Conversation Reach, Sentiment Ratio).
- Kaplan/Norton HBR 1992; Fiege 2010 (Whitepaper, Buch 2012); Forrester 2010.
- Shitstorm-Skala Schwede/Graf, Stufen 0–6.

---

## Befunde

### P1 – falsch, kaputt oder prüfungsschädlich

#### 1. P1 – Verständnisfrage ROAS hat zwei richtige Antworten
**Fundstelle:** `data/kurs.js` Z. 426, Lektion `erfolg`, check „Eine Kampagne kostet 500 € und bringt 2.000 € Umsatz. Wie hoch ist der ROAS?“

**Problem:** Der Ablenker „400 %“ ist ebenfalls richtig. Der ROAS wird in der Praxis oft in Prozent angegeben (Google Ads „Ziel-ROAS 400 %“). Die App selbst bestätigt das an drei Stellen:
- Frage „Mit 2.000 € Werbebudget …“: Antwort „4 (bzw. 400 %)“
- Freitext CPM/CPC/CPA/ROAS: Musterlösung „4 (400 %)“, RegExp akzeptiert `400\s?%`
- Mehrfachantwort zu ROI/ROAS: „Der ROAS beträgt 4 (400 %)“

Wer „400 %“ wählt, wird also falsch bewertet.

**Korrektur:** Ablenker „300 %“ (typischer Fehler: (Umsatz − Kosten) ÷ Kosten).
```js
{ k: "check", q: "Eine Kampagne kostet 500 € und bringt 2.000 € Umsatz. Wie hoch ist der ROAS?", a: ["4", "0,25", "1.500", "300 %"], c: 0, e: "ROAS = 2.000 ÷ 500 = 4 (oft auch als 400 % angegeben) – also 4 € Umsatz je 1 € Werbung. 300 % entsteht, wenn man fälschlich (Umsatz − Kosten) ÷ Kosten rechnet." }
```

#### 2. P1 – Shitstorm-Freitext belohnt „Kritik löschen“
**Fundstelle:** `data/kurs.js` Z. 374, FREI „Wie reagieren Sie als Social Media Manager auf einen Shitstorm?“ (nach REGELN im Modul `plan`)

**Problem:** Der Musterpunkt „Berechtigte Kritik nicht löschen“ hat die RegExp `lösch`. Sie trifft auch das Gegenteil. Test: „Kritische Kommentare löschen, schnell reagieren, Lage prüfen, Fehler zugeben“ ergibt **4 von min. 4, gilt also als bestanden**, obwohl die Kernaussage falsch ist. Das verfestigt genau den Fehler, den die Lektionen bekämpfen.

**Korrektur:** Neue RegExp getestet:
- gute Antwort 6
- mittlere 2
- obige falsche 3 (fällt durch)
- „nicht löschen“, „stehen lassen“, „keinesfalls löschen“ werden erkannt
```js
{m:"unt",t:"frei",q:"Wie reagieren Sie als Social Media Manager auf einen Shitstorm? Beschreiben Sie das Vorgehen.",muster:[["Lage einschätzen (berechtigt? Ausmaß?)","einschätz|analys|lage|prüf"],["Krisenplan aktivieren, intern abstimmen","krisenplan|intern|abstimm|geschäftsführ"],["Schnell erste Reaktion zeigen","schnell|zeitnah|reagier"],["Sachlich bleiben, Fehler eingestehen, Lösung anbieten","sachlich|fehler|entschuld|lösung"],["Berechtigte Kritik nicht löschen","nicht.{0,20}lösch|lösch.{0,20}nicht|stehen lass|kein.{0,10}lösch|nicht entfern|nicht zensier"],["Nachbereitung, daraus lernen","nachbereit|auswert|lernen"]],min:4}
```

---

### P2 – deutlich verbesserungswürdig

#### 3. P2 – Falsche Angabe zum Lehrgang: „Abschlussprojekt“
**Fundstelle:** `data/kurs.js` Z. 177, Lektion `datenschutz`, Folie merke „Merke“

**Problem:** „Recht ist im Abschlussprojekt ein eigener Baustein“. Der Lehrgang hat **kein Abschlussprojekt**. Laut HSB-Broschüre gibt es einen Online-Abschlusstest (30 Fragen, MC und Freitext, 60 Min.) und vorher Hausaufgaben je Themenbereich. Das kann Lernende verunsichern.

**Beleg:** KONTEXT.md (Broschüre, Vorlesungsplan KW02/27 „Rechtsfragen im Social Web“).
```js
{ k: "merke", h: "Merke", b: "Recht ist ein eigener Themenbereich des Lehrgangs (Vorlesung „Rechtsfragen im Social Web“). Checkliste vor jedem Post: **Impressum, Datenschutz, Bildrechte, Werbekennzeichnung, Gewinnspielregeln, KI-Kennzeichnung**." }
```

#### 4. P2 – Mitarbeiterfotos: „BAG verlangt Schriftform“ ist veraltet und widersprüchlich
**Fundstellen:**
- (a) `data/kurs.js` Z. 169, Lektion `bildrechte`, Folie „Recht am eigenen Bild“
- (b) Z. 215, Frage „Du willst ein Teamfoto posten …“, Feld e
- (c) Z. 376, Freitext „Foto von einer Firmenfeier …“, Musterpunkt „Bei Mitarbeitenden schriftlich (BAG)“
- (d) Z. 390, Fall „LinkedIn-Seite … Event“, Musterpunkt „bei Mitarbeitenden schriftlich“

**Problem:** Das BAG-Urteil (8 AZR 1010/13, 11.12.2014) beruhte auf § 4a BDSG a. F. Heute gilt **§ 26 Abs. 2 S. 3 BDSG: „schriftlich oder elektronisch“**, unverändert in Kraft. Nach EuGH C-34/21 steht § 26 Abs. 1 in Frage, Abs. 2 wenden Aufsichtsbehörden und Praxis weiter an. Die Mehrfachantwort-Frage „Sie möchten Fotos von Mitarbeitenden …“ sagt schon richtig „schriftlich oder elektronisch dokumentiert“. Das widerspricht (a) bis (d).

Zusätzlich trifft in (c) die RegExp `bag` auch Wörter wie „Bagger“.

**Beleg:** § 26 Abs. 2 BDSG (Fassung 2. DSAnpUG-EU, laut buzer.de unverändert).

Ersatz (a):
```js
{ k: "text", h: "Recht am eigenen Bild", b: "Wer erkennbar abgebildet ist, muss grundsätzlich **einwilligen** (§ 22 KUG, DSGVO). Bei Mitarbeitenden die Einwilligung **schriftlich oder elektronisch** einholen und dokumentieren (§ 26 Abs. 2 BDSG) – freiwillig, ohne Nachteile bei einem Nein. Auf das Widerrufsrecht hinweisen. Ausnahmen (§ 23 KUG) gibt es eng begrenzt, z. B. wenn Personen nur Beiwerk sind oder bei Versammlungen." }
```
Ersatz (b):
```js
{m:"recht",q:"Du willst ein Teamfoto posten. Was brauchst du?",a:["Die Einwilligung der Abgebildeten", "Nichts, sie sind ja Mitarbeitende", "Nur die Zustimmung der Geschäftsführung", "Einen Hinweis auf das Foto im Impressum"],c:0,e:"Recht am eigenen Bild und DSGVO – bei Mitarbeitenden freiwillig und schriftlich oder elektronisch (§ 26 Abs. 2 BDSG)."}
```
Ersatz (c). Getestet: gut 5, mittel 2, „Bagger“-Text 1.
```js
{m:"recht",t:"frei",q:"Sie möchten ein Foto von einer Firmenfeier mit Mitarbeitenden posten. Was müssen Sie rechtlich beachten?",muster:[["Einwilligung der erkennbar abgebildeten Personen","einwillig|zustimm|erlaubnis"],["Bei Mitarbeitenden schriftlich oder elektronisch dokumentiert (§ 26 Abs. 2 BDSG), freiwillig","schriftlich|elektronisch|dokument|\\bbag\\b|textform|§ ?26|freiwillig"],["Hinweis auf Widerrufsrecht","widerruf"],["Recht am eigenen Bild / DSGVO","eigenen bild|kug|dsgvo|datenschutz"],["Urheberrecht des Fotografen klären","urheber|fotograf|nutzungsrecht"]],min:3}
```
Ersatz (d):
```js
{m:"recht",t:"frei",q:"Fall: Für die LinkedIn-Seite haben Sie auf einem Event fotografiert. Vorne ist eine Mitarbeiterin im Gespräch mit einem Kunden klar zu erkennen, im Hintergrund unbeteiligte Gäste und auf einer Leinwand das Logo eines Wettbewerbers. Was prüfen Sie vor dem Posten, und was tun Sie, um rechtssicher zu sein?",muster:[["Recht am eigenen Bild (§ 22 KUG) und Datenschutz (DSGVO)","kug|eigenen bild|persönlichkeit|dsgvo|datenschutz"],["Einwilligung von Mitarbeiterin und Kunde einholen – bei Mitarbeitenden schriftlich oder elektronisch dokumentiert","einwillig|zustimm|erlaubnis|freigabe|model release"],["Unbeteiligte Gäste unkenntlich machen oder anderen Bildausschnitt wählen","verpixel|unkenntlich|unscharf|blur|zuschneid|ausschnitt|beschneid|retusch"],["Ausnahmen (Beiwerk, Versammlung) greifen bei deutlich erkennbaren Einzelnen meist nicht","beiwerk|versammlung|§ ?23|ausnahme"],["Fremdes Logo: kein Eindruck von Kooperation oder Herabsetzung (Marken-/Wettbewerbsrecht) – sicherer entfernen","logo|marke|wettbewerb|uwg|konkurren"]],min:3}
```

#### 5. P2 – Glossar widerspricht der Lektion bei Conversation Rate und Amplification Rate
**Fundstelle:** `data/glossar.js` Z. 6 und 7

**Problem:** Das Glossar sagt „Kommentare pro Beitrag **im Verhältnis zur Follower-Zahl**“. Die Lektion `kennzahlenmodelle` und ihre Verständnisfrage zur Amplification Rate rechnen nach Kaushik **pro Beitrag** (60 Shares ÷ 20 Beiträge = 3). Wer im Glossar nachschlägt, rechnet die Prüfungsfrage falsch. Kaushik (2011) definiert: „# of audience comments (or replies) per post“ bzw. „# of reshares per post“.
```js
{ w: "Conversation Rate", m: "kpi", d: "Kommentare bzw. Antworten pro Beitrag (nach Avinash Kaushik). Beispiel: 160 Kommentare auf 20 Beiträge = 8 pro Beitrag. Manche Tools teilen zusätzlich durch die Follower und geben Prozent an – dann die Bezugsgröße nennen." }
```
```js
{ w: "Amplification Rate", m: "kpi", d: "Weiterverbreitungen (Shares, Reposts) pro Beitrag (nach Avinash Kaushik). Beispiel: 60 Shares auf 20 Beiträge = 3 pro Beitrag. Manche Tools teilen zusätzlich durch die Follower – dann die Bezugsgröße nennen." }
```

#### 6. P2 – ROI: „Ertrag“ wird in der Lektion nicht erklärt
**Fundstelle:**
- `data/kurs.js` Z. 423, Lektion `erfolg`, Folie „ROI“
- `data/fragen2.js` Z. 778 ff., Frage „Eine Maßnahme kostet 2.000 € …“

**Problem:** Die Folie nennt „Ertrag“ ohne Erklärung. Quereinsteiger setzen Ertrag = Umsatz. Genau das wertet die Mehrfachantwort-Frage „Eine Kampagne kostet 1.000 € und bringt 4.000 € Umsatz …“ als Fehler („300 % wäre fälschlich mit Umsatz statt Gewinn gerechnet“). Nur Glossar und FORMELN erklären „Ertrag = Deckungsbeitrag“.

In der Frage „Eine Maßnahme kostet 2.000 €“ heißt es zudem „(Gewinn − Investition)“. Die Zahl 5.000 € ist aber ein Deckungsbeitrag *vor* Kosten, kein Gewinn. „Gewinn minus Investition“ wäre doppelt abgezogen. Das ist begrifflich falsch, das Ergebnis 150 % stimmt.
```js
{ k: "text", h: "ROI", b: "**Return on Investment** = (Ertrag − Kosten) ÷ Kosten × 100.\n**Ertrag** = der Rohertrag bzw. **Deckungsbeitrag**, den die Maßnahme bringt – **nicht der Umsatz**.\nBeispiel: 1.500 € Deckungsbeitrag bei 1.000 € Kosten → **50 %**." }
```
```js
{ m: "kpi", q: "Eine Maßnahme kostet 2.000 €. Vor Abzug dieser Kosten bringt sie einen Deckungsbeitrag von 5.000 €. Wie hoch ist der ROI?", a: ["150 %", "250 %", "60 %", "40 %"], c: 0, e: "ROI = (Deckungsbeitrag − Kosten) ÷ Kosten × 100 = (5.000 − 2.000) ÷ 2.000 × 100 = 150 %.", quelle: "" }
```

#### 7. P2 – Werbekennzeichnung: Ausnahme ohne Gegenleistung fehlt, Plattform-Label zu absolut
**Fundstelle:** `data/kurs.js` Z. 163, Lektion `impressum`, Folie „Werbung kennzeichnen“

**Problem 1:** Die Folie lehrt nur die Pflicht. Die Gegenseite fehlt: Ohne Entgelt oder ähnliche Gegenleistung liegt grundsätzlich kein kommerzieller Zweck vor. Das sagen § 5a Abs. 4 S. 2 und 3 UWG (seit 28.05.2022, mit Vermutung zulasten der Influencerin) und BGH vom 09.09.2021 (I ZR 90/20 Hummels, I ZR 125/20, I ZR 126/20). Genau das fragt die Frage „Wann muss ein Beitrag über ein fremdes Produkt nach § 5a Abs. 4 UWG nicht als Werbung gekennzeichnet werden?“. Ohne Lektionsgrundlage ist sie für Quereinsteiger kaum lösbar.

**Problem 2:** „Die Plattformfunktion ‚Bezahlte Partnerschaft‘ allein genügt nicht“ ist als feste Rechtsregel zu absolut. Der Leitfaden der Medienanstalten (Stand 06/2021) erlaubt ausdrücklich die Bezeichnung „bezahlte Werbepartnerschaft“. Er verlangt Sichtbarkeit zu Beginn und auf jeder Story-Kachel und lehnt „ad“ und „sponsored by“ ab. Empfehlenswert bleibt, sich nicht allein auf das Label zu verlassen.

Ersatz der Folie:
```js
{ k: "text", h: "Werbung kennzeichnen", b: "Werbliche Inhalte müssen **auf den ersten Blick als Werbung erkennbar** sein (§ 5a Abs. 4 UWG, § 22 MStV, § 6 DDG) – bei jeder Gegenleistung: Geld, **Gratisprodukte**, Provisionen. Deutlich „Werbung“ oder „Anzeige“ an den Anfang, bei Stories auf jede Kachel. „#ad“ oder „sponsored“ reichen nicht; auf das Plattform-Label „Bezahlte Partnerschaft“ allein sollte man sich nicht verlassen." }
```
Neue Folie direkt danach (`LX("impressum").folien.splice(5, 0, …)`, also vor der check-Folie):
```js
{ k: "merke", h: "Ohne Gegenleistung?", b: "Wer für einen Beitrag über ein fremdes Produkt **nichts bekommt** – kein Geld, kein Produkt, keine Provision –, muss ihn grundsätzlich nicht als Werbung kennzeichnen (§ 5a Abs. 4 UWG, BGH 2021). Aber: Eine Gegenleistung wird **vermutet**; die Person muss das Gegenteil glaubhaft machen." }
```

#### 8. P2 – Kennzahlen im Probetest ohne Lektionsgrundlage im Kernmodul
**Fundstelle:** Modul `kpi` (kein `zusatz`, also im Probetest) im Vergleich zu Modul `ads` (`zusatz: true`)

**Problem:** Die Lektion `ads-kpi` (CPM, CPC, CPL, Conversion-Rate, A/B-Test) liegt seit dem Umbau nur noch im Zusatzmodul, das nicht im Probetest vorkommt. Die zugehörigen Fragen tragen aber weiter `m:"kpi"` und landen im Probetest, z. B.:
- „Was bedeutet CPM?“, „… CPL?“, „… CPC?“
- „300 Klicks führen zu 15 Anfragen …“
- „Sie geben 240 € aus …“, „Der CPM liegt bei 8 € …“
- Freitext „Eine Kampagne kostet 1.200 € … CPM, CPC, CPA und ROAS“

Außerdem haben folgende Begriffe gar keine Folie, nur einen Glossar-Eintrag oder auch den nicht: Frequenz, Abschlussrate (Completion Rate), Dark Social (keine Glossar-Seite), Attribution/Last Click, Mikro-/Makro-Conversion, Absprungrate. Insgesamt sind das 14 Fragen im Kernpool ohne Lernfolie.

**Korrektur:** Zwei Folien in Kernlektionen einfügen.
- In `erfolg` vor der check-Folie: `LX("erfolg").folien.splice(5, 0, …)`
- In `daten` vor der check-Folie: `LX("daten").folien.splice(5, 0, …)`

Alternativ `ads-kpi` zusätzlich in `M.kpi.lektionen` aufnehmen.
```js
{ k: "liste", h: "Anzeigen-Kennzahlen kompakt", l: ["**CPM** = Kosten ÷ Impressionen × 1.000 (50 € für 10.000 = 5 €)", "**CPC** = Kosten ÷ Klicks", "**CPL / CPA** = Kosten ÷ Leads bzw. Conversions", "**Conversion-Rate** = Conversions ÷ Klicks × 100", "**Frequenz** = Impressionen ÷ Reichweite – wie oft eine Person die Anzeige im Schnitt sieht"] }
```
```js
{ k: "liste", h: "Messlücken & weitere Messgrößen", l: ["**Dark Social:** Teilen per WhatsApp, E-Mail oder DM – kaum messbar, erscheint oft als „direkt“", "**Attribution „Last Click“:** Der letzte Kontakt vor dem Kauf bekommt alles – Social Media wird leicht unterschätzt", "**Mikro-Conversion** (z. B. Newsletter) vs. **Makro-Conversion** (z. B. Kauf)", "**Absprungrate:** Besucher gehen ohne weitere Aktion wieder", "**Abschlussrate (Video):** vollständige Views ÷ alle Views × 100"] }
```

#### 9. P2 – Rechtsfragen ohne Lektionsgrundlage
**Fundstelle:** Modul `recht`, Fragen aus `fragen2.js`, `mehrfach.js` und `begriffsfragen.js`

**Problem:** Die Fragen fragen geprüftes und korrektes Wissen ab, das in keiner Folie steht:
- Panoramafreiheit § 59 UrhG mit BGH-Drohnenurteil
- Kinderfotos (Sorgeberechtigte)
- KI-Bilder ohne Urheberrechtsschutz
- CD-Musik nur privat
- Planet49 (vorangekreuztes Häkchen)
- Fashion ID (Like-Button)
- Glücksspiel (Einsatz + Zufall)
- Abmahnung → strafbewehrte Unterlassungserklärung
- gefälschte Bewertungen (UWG Anhang Nr. 23c)
- unbelegte Spitzenstellungswerbung (§ 5 UWG)
- Landesmedienanstalten und BNetzA als Aufsicht

Quereinsteiger können das nur raten.

**Korrektur:** Drei kurze Folien:
- `bildrechte` vor der check-Folie: `LX("bildrechte").folien.splice(5, 0, …)`
- `rechtsgebiete` vor der check-Folie: `splice(5, 0, …)`
- `dsgvo` vor der check-Folie: `splice(4, 0, …)`
```js
{ k: "liste", h: "Sonderfälle bei Bildern & Musik", l: ["**Panoramafreiheit (§ 59 UrhG):** Bauwerke und Kunst dauerhaft an öffentlichen Plätzen dürfen gezeigt werden – nicht aus unzugänglicher Perspektive, z. B. per Drohne (BGH 2024)", "**Kinder:** Einwilligung der Sorgeberechtigten, ab Einsichtsfähigkeit auch des Kindes", "**Rein KI-erzeugte Bilder** sind meist nicht urheberrechtlich geschützt – Rechte Dritter können trotzdem verletzt sein", "**Gekaufte CD oder Song:** nur private Nutzung, für Videos braucht es eine Lizenz"] }
```
```js
{ k: "liste", h: "Abmahnung, Bewertungen & Aufsicht", l: ["**Abmahnung:** Aufforderung, eine **strafbewehrte Unterlassungserklärung** abzugeben – meist plus Anwaltskosten", "**Gefälschte Bewertungen** zu beauftragen ist verboten (UWG, Anhang Nr. 23c)", "**Spitzenstellung** („Das beste … Deutschlands“) nur mit Beleg – sonst Irreführung (§ 5 UWG)", "**Aufsicht:** Landesmedienanstalten prüfen die Werbekennzeichnung (MStV), die Bundesnetzagentur koordiniert den DSA in Deutschland"] }
```
```js
{ k: "liste", h: "Einwilligung – aber richtig", l: ["**Aktiv:** vorangekreuzte Häkchen zählen nicht (EuGH Planet49, 2019)", "**Freiwillig und informiert**, für einen bestimmten Zweck", "Jederzeit **widerrufbar** – darauf hinweisen", "**Ablehnen** muss so einfach sein wie Zustimmen", "Eingebundener Like-Button: Website und Meta gemeinsam verantwortlich (EuGH Fashion ID, 2019)"] }
```

#### 10. P2 – Gewinnspiel-Freitext: Fehltreffer schon durch Fragewörter
**Fundstelle:** `data/kurs.js` Z. 377, FREI „Nennen Sie wichtige Bestandteile rechtssicherer Teilnahmebedingungen …“

**Problem:** Drei Muster treffen Wörter, die fast jede Antwort enthält:
- `ende` trifft „Teilneh**mende**“
- `gewinn` trifft „**Gewinn**spiel“
- `alter` trifft „Veransta**lter**“

Die mittelmäßige Antwort „Veranstalter, Ende der Aktion und was man gewinnt (Preis)“ bekommt so 4 Punkte und besteht. Die inhaltsleere Antwort „Teilnehmende müssen den Beitrag liken, dann gibt es beim Gewinnspiel etwas zu gewinnen“ bekommt 2.

**Korrektur:** Neue RegExps getestet: gut 6, die Leerantwort 0. Mit `\balter` bekommt „Veranstalter“ keinen Alters-Punkt mehr.
```js
{m:"recht",t:"frei",q:"Nennen Sie wichtige Bestandteile rechtssicherer Teilnahmebedingungen für ein Gewinnspiel.",muster:[["Veranstalter","veranstalt"],["Zeitraum / Teilnahmeschluss","zeitraum|\\bende\\b|enddatum|schluss|frist|datum|bis zum"],["Teilnahmevoraussetzungen (z. B. Alter, Wohnsitz)","voraussetz|\\balter|mindestalter|volljährig|wohnsitz|teilnahmeberecht"],["Gewinn und Auswahl/Benachrichtigung der Gewinner","gewinn(?!spiel|en\\b)|preis|auslos|ziehung|verlos|benachricht"],["Datenschutzhinweise","daten"],["Hinweis zur Plattform (nicht beteiligt) und Freistellung","plattform|instagram|facebook|meta|freistell|haftung"]],min:4}
```

#### 11. P2 – Freitext „Nachweis Social Media → Verkäufe“: zwei Punkte mit fast gleicher RegExp
**Fundstelle:** `data/fragen2.js` Z. 1651 ff.

**Problem:** „Conversion-Tracking/Pixel – mit Einwilligung“ und „Conversion-Ziele definieren“ nutzen fast dieselbe RegExp (`conversion|kauf|anfrage|anmeld|lead`). Ein einziges Wort „Kauf“ bringt zwei Punkte, Pixel und Einwilligung werden nie geprüft. Außerdem findet `kauf` das Wort „Käufe“ nicht.
```js
{ m: "kpi", t: "frei", q: "Wie können Sie nachweisen, dass Social-Media-Aktivitäten zu Website-Besuchen und Verkäufen führen? Beschreiben Sie Ihr Vorgehen.", muster: [["UTM-Parameter an Links", "utm|parameter|link.{0,15}kennzeich"], ["Web-Analyse-Tool (z. B. Matomo, Google Analytics)", "analytics|matomo|web.?analys|ga4|tracking.?tool"], ["Conversion-Tracking/Pixel – mit Einwilligung", "pixel|conversion.?tracking|conversions?.?api|einwillig|consent|cookie"], ["Conversion-Ziele definieren (Kauf, Anfrage, Anmeldung)", "conversion|ziel|k[aä]uf|anfrage|anmeld|lead"], ["Attribution berücksichtigen (z. B. Last Click, mehrere Kontaktpunkte)", "attribut|last.?click|kontaktpunkt|touchpoint|customer journey"], ["Eigene Rabattcodes oder Landingpages je Kanal", "rabattcode|gutschein|landing ?page|eigene[rn]? code"]], min: 3, quelle: "" }
```
Getestet: gut 6, mittel 2, falsch 0.

#### 12. P2 – Rechenfreitext ER/CTR: Fehltreffer bei „10,8“, Dezimalzahl wird nicht erkannt
**Fundstelle:** `data/kurs.js` Z. 379, FREI „Ein Beitrag hat 8.000 Reichweite, 12.000 Impressionen …“

**Problem:**
- Die CTR-RegExp `0[,.]8` trifft auch „10,8 %“ oder „0,85“.
- Die richtige Dezimalangabe „CTR = 0,008“ wird nicht erkannt.
- Für die ER wird „0,05“ nicht erkannt.
```js
{m:"kpi",t:"frei",q:"Ein Beitrag hat 8.000 Reichweite, 12.000 Impressionen, 400 Interaktionen und 96 Klicks. Berechnen Sie Engagement-Rate (auf Reichweite) und CTR.",muster:[["Engagement-Rate = 400 ÷ 8.000 × 100 = 5 %","(^|[^\\d,.])5\\s?(%|prozent)|5,0\\s?%|(^|[^\\d,.])0[,.]05(?!\\d)"],["CTR = 96 ÷ 12.000 × 100 = 0,8 %","(^|[^\\d,.])0[,.]8(?!\\d)|(^|[^\\d,.])0[,.]008(?!\\d)"]],min:2}
```
Getestet:
- „0,8 %“ und „0.8%“ werden erkannt, „CTR 0,008“ ebenfalls.
- „10,8 %“ und „0,85“ werden nicht mehr erkannt.
- gut 2, mittel 1, falsch 0.

#### 13. P2 – Funnel-Freitext: zu lockere Teilwörter
**Fundstelle:** `data/fragen2.js` Z. 1812 ff., „Erklären Sie das Funnel-Modell bzw. die Customer Journey …“

**Problem:** `see` trifft „**See**ding“, `bind` trifft „ver**bind**lich“. „Seeding über Influencer und verbindliche Kaufentscheidung“ bekommt 3 Punkte. Neu: 1 Punkt.
```js
{ m: "plan", t: "frei", q: "Erklären Sie das Funnel-Modell bzw. die Customer Journey und ordnen Sie jeder Phase passende Social-Media-Inhalte zu.", muster: [["Aufmerksamkeit (Awareness): reichweitenstarke, unterhaltsame Inhalte", "aufmerksam|awareness|attention|bekannt|\\bsee\\b"], ["Interesse/Abwägung (Consideration): Tipps, Vergleiche, Erklärvideos", "interess|consider|abwäg|think|vergleich|tipp"], ["Kauf/Handlung (Conversion): Angebote, Retargeting, Call-to-Action", "kauf|conversion|action|handlung|\\bdo\\b|retarget|angebot"], ["Bindung (Loyalty/Care): Service, Community, exklusive Inhalte", "kundenbind|\\bbindung|loyal|\\bcare\\b|service|stammkund|community"], ["Empfehlung (Advocacy): UGC, Bewertungen", "empfehl|advocacy|ugc|bewertung|weiterempf"]], min: 4, quelle: "" }
```

---

### P3 – Feinschliff

#### 14. P3 – Gewinnspiel-Folie: Glücksspielgrenze fehlt, Facebook-Verbot ungenau
**Fundstelle:** `data/kurs.js` Z. 175, Lektion `datenschutz`, Folie „Rechtssicheres Gewinnspiel“

**Problem:**
- „Teile den Beitrag“ ist ungenau. Meta verbietet das Teilen **in der persönlichen Chronik** und das Markieren von Freunden als Teilnahmeweg.
- Die Grenze zum Glücksspiel fehlt (gefragt in „Wodurch wird ein Gewinnspiel zum genehmigungspflichtigen Glücksspiel?“).
- Die Einwilligung zur Veröffentlichung von Gewinnernamen fehlt (gefragt in der Mehrfachantwort zu Gewinnspielen).
```js
{ k: "liste", h: "Rechtssicheres Gewinnspiel", l: ["Teilnahmebedingungen: Veranstalter, Zeitraum, Teilnahme, Gewinn, Auswahl der Gewinner – leicht zugänglich und eindeutig (§ 6 DDG)", "Datenschutzhinweise; Gewinnernamen nur mit Einwilligung veröffentlichen", "Plattform von jeder Haftung freistellen und klarstellen, dass sie das Gewinnspiel nicht sponsert oder organisiert", "Auf Facebook verboten: „Teile in deiner Chronik“ oder „Markiere Freunde“ als Teilnahmebedingung", "Kein Einsatz verlangen – Einsatz plus Zufall kann verbotenes Glücksspiel sein (§ 3 GlüStV)"] }
```

#### 15. P3 – Impressum-Freitext: „profil“ gibt einen Gratis-Punkt
**Fundstelle:** `data/kurs.js` Z. 375, FREI „Welche Anforderungen gelten für das Impressum …“

**Problem:** Die Frage nennt selbst das „Social-Media-Profil“. Daher trifft `link|profil|bio` fast immer, auch bei „Auf dem Profil muss ein Impressum sein“. Bestehen allein reicht so zwar nicht (min. 3), die Rückmeldung ist aber irreführend. Korrektur:
```js
{m:"recht",t:"frei",q:"Welche Anforderungen gelten für das Impressum auf einem geschäftlich genutzten Social-Media-Profil?",muster:[["Pflicht nach § 5 Digitale-Dienste-Gesetz (DDG)","ddg|digitale.dienste"],["Leicht erkennbar","erkennbar"],["Unmittelbar erreichbar (wenige Klicks)","erreichbar|klick"],["Ständig verfügbar","verfügbar|ständig"],["Praxis: Link in der Profil-Info","link|profil-?info|profilbeschreib|\\bbio\\b|kontaktinfo"]],min:3}
```

#### 16. P3 – Impressum-Liste ohne Wirtschafts-Identifikationsnummer
**Fundstelle:** `data/kurs.js` Z. 436, Folie „Was ins Impressum gehört (§ 5 DDG)“

**Problem:** § 5 Abs. 1 Nr. 6 DDG nennt neben der USt-IdNr. auch die Wirtschafts-IdNr. (§ 139c AO), die seit Ende 2024 vergeben wird.
```js
{ k: "liste", h: "Was ins Impressum gehört (§ 5 DDG)", l: ["Name und Anschrift, bei Firmen Rechtsform und Vertretungsberechtigte", "E-Mail und ein weiterer schneller Kontaktweg", "Handelsregister und Registernummer", "Umsatzsteuer-ID bzw. Wirtschafts-ID, falls vorhanden", "Bei redaktionellen Inhalten: verantwortliche Person (§ 18 MStV)"] }
```

#### 17. P3 – Urheberrecht kompakt: Lichtbild-Frist ungenau, Pastiche-Urteil 2026 fehlt
**Fundstelle:** `data/kurs.js` Z. 437, Folie „Urheberrecht kompakt“

**Problem:** Einfache Lichtbilder sind 50 Jahre **nach Erscheinen** geschützt (§ 72 Abs. 3 UrhG), nicht nach dem Tod. Der EuGH hat den Pastiche-Begriff am 14.04.2026 geklärt (C-590/23 Pelham II): erkennbarer künstlerischer Dialog mit dem Original, kein Auffangtatbestand, keine verdeckte Nachahmung.
```js
{ k: "liste", h: "Urheberrecht kompakt", l: ["Schutz bis 70 Jahre nach dem Tod des Urhebers, einfache Lichtbilder 50 Jahre nach Erscheinen", "Zitat (§ 51 UrhG) nur mit Belegzweck und Quellenangabe", "Parodie, Karikatur, Pastiche (§ 51a) – z. B. manche Memes: Bezug zum Original muss erkennbar sein (EuGH 2026), kein Freibrief", "Creative-Commons-Lizenzen: Bedingungen wie Namensnennung einhalten", "Fremde Logos und Marken nicht als eigene Werbung nutzen"] }
```

#### 18. P3 – Fanpage: aktueller Streitstand konkretisieren
**Fundstelle:** `data/kurs.js` Z. 174, Folie „Gemeinsame Verantwortung“

**Problem:** „Weiter umstritten“ stimmt, lässt sich aber belegen. Das VG Köln hat am 17.07.2025 (13 K 1419/23) die Mitverantwortung des Bundespresseamts für Cookies auf der Fanpage verneint. Der BfDI hat Berufung zum OVG Münster eingelegt.
```js
{ k: "text", h: "Gemeinsame Verantwortung", b: "Der EuGH hat 2018 entschieden: Betreiber einer Facebook-Fanpage sind **gemeinsam mit Facebook** (heute Meta) für den Datenschutz verantwortlich. Deshalb brauchen Unternehmensprofile eigene **Datenschutzhinweise** und eine Vereinbarung nach **Art. 26 DSGVO** (bei Meta: Page-Insights-Zusatz). Ob das auch für Metas Cookies gilt, ist offen: Das VG Köln verneinte es 2025, das Verfahren läuft weiter." }
```

#### 19. P3 – Social Monitoring und Social Listening uneinheitlich definiert
**Fundstelle:**
- `data/kurs.js` Z. 206, Frage „Was beobachtet Social Listening?“, Feld e
- `data/glossar.js` Z. 41

**Problem:** Die Lektion `monitoring` trennt: Monitoring = erfassen, Listening = auswerten. Die Erklärung „Social Listening ist Teil des Monitorings“ und der Glossar-Eintrag „Monitoring / Social Listening: Laufendes Beobachten …“ verwischen das.
```js
{m:"kpi",q:"Was beobachtet Social Listening?",a:["Gespräche und Stimmung über Marke, Produkte und Branche", "Nur die Likes und Kommentare auf dem eigenen Profil", "Die Ladezeit und Verfügbarkeit der eigenen Website", "Die Zahl der Abonnenten des eigenen Newsletters"],c:0,e:"Social Listening wertet Gespräche über Marke, Produkte und Branche aus – auch außerhalb der eigenen Kanäle. Das laufende Erfassen der einzelnen Erwähnungen heißt Social Monitoring."}
```
```js
{ w: "Monitoring / Social Listening", m: "kpi", d: "Social Monitoring erfasst laufend, was über Marke, Produkte und Wettbewerb gesagt wird – auch außerhalb der eigenen Kanäle. Social Listening wertet diese Gespräche aus: Stimmung, Themen, Trends." }
```

#### 20. P3 – Engagement: Glossar zählt Klicks mit, Lektion und Mehrfachantwort nicht
**Fundstelle:** `data/glossar.js` Z. 31

**Problem:** Das Glossar nennt „…, Saves, Klicks“. Die Lektion `kennzahlen` und die Mehrfachantwort-Frage „Welche Kennzahlen zählen zu den Interaktionen?“ nennen Likes, Kommentare, Shares und Saves. Klicks werden separat über die CTR gemessen.
```js
{ w: "Engagement", m: "kpi", d: "Alle Interaktionen mit einem Inhalt: Likes, Kommentare, Shares, Saves. Manche Plattformen zählen auch Klicks mit – dann im Bericht angeben, was gezählt wurde." }
```

#### 21. P3 – FORMELN unvollständig im Vergleich zu den Prüfungsfragen
**Fundstelle:** `data/glossar.js`, FORMELN

**Problem:** CPA, Frequenz, Conversation Reach, Kaushik-Raten und die Soll-Ist-Abweichung werden gerechnet, stehen aber nicht in der Formelsammlung. Vorschlag zum Anhängen:
```js
{ n: "CPA (Cost per Action)", f: "Kosten ÷ Conversions", b: "1.500 € für 60 Käufe = 25 € CPA" }
```
```js
{ n: "Frequenz", f: "Impressionen ÷ Reichweite", b: "30.000 Impressionen bei 12.000 Personen = 2,5", h: "Kann nie unter 1 liegen." }
```
```js
{ n: "Conversation Reach (Altimeter)", f: "Aktiv Beteiligte ÷ alle Erreichten × 100", b: "400 von 20.000 Erreichten = 2 %" }
```
```js
{ n: "Conversation / Amplification / Applause Rate (Kaushik)", f: "Kommentare bzw. Shares bzw. Likes ÷ Anzahl Beiträge", b: "60 Shares auf 20 Beiträge = Amplification Rate 3", h: "Kaushik rechnet pro Beitrag; Tools teilen oft zusätzlich durch Follower." }
```
```js
{ n: "Soll-Ist-Abweichung", f: "(Ist − Soll) ÷ Soll × 100", b: "Soll 40, Ist 28 Bewerbungen = −30 %" }
```

#### 22. P3 – Glossar-Eintrag „Deckungsbeitrag“ fehlt
**Fundstelle:** `data/glossar2.js` (GLOSSAR_NEU)

**Problem:** Der Begriff kommt in zwei Prüfungsfragen und im ROI-Glossar vor, wird aber nirgends erklärt. Für Quereinsteiger ist er nicht selbstverständlich.
```js
{ w: "Deckungsbeitrag", de: "Beitrag zur Deckung der Fixkosten", m: "kpi", d: "Umsatz minus variable Kosten (z. B. Wareneinsatz). Er zeigt, was Verkäufe wirklich zum Gewinn beitragen, und ist beim ROI der „Ertrag“. Beispiel: 4.000 € Umsatz, 2.500 € Wareneinsatz = 1.500 € Deckungsbeitrag.", syn: ["Deckungsbeitrag", "Rohertrag"] }
```

#### 23. P3 – Richtige Antwort verrät sich durch ihre Länge
**Fundstelle:** `data/begriffsfragen.js` Z. 211, „Was zeigt die Engagement-Rate?“

**Problem:** Die richtige Antwort hat 100 Zeichen, die Ablenker 50 bis 56. Das ist die einzige auffällige Frage in den vier Modulen.
```js
{ m: "kpi", q: "Was zeigt die Engagement-Rate?", a: ["Interaktionen im Verhältnis zur Reichweite", "Wie viele Mitarbeitende Beiträge teilen", "Neue Follower eines Profils pro Monat", "Durchschnittliche Wiedergabedauer von Videos"], c: 0, e: "Engagement-Rate = Interaktionen ÷ Reichweite × 100. Im Bericht immer angeben, worauf sie bezogen ist (Reichweite, Follower oder Impressionen)." }
```

#### 24. P3 – DSGVO-Bußgeld: Zusatz „der höhere Betrag“ fehlt
**Fundstelle:** `data/kurs.js` Z. 403, Lektion `dsgvo`, Folie „Rechtsgrundlage nötig (Art. 6)“
```js
{ k: "text", h: "Rechtsgrundlage nötig (Art. 6)", b: "Jede Verarbeitung braucht eine Rechtsgrundlage, z. B. **Einwilligung**, **Vertrag** oder **berechtigtes Interesse**. Betroffene müssen informiert werden (Art. 13) und haben Rechte, z. B. auf **Auskunft** und **Löschung**. Verstöße können Bußgelder bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes kosten – je nachdem, was höher ist (Art. 83)." }
```

#### 25. P3 – Inhaltliche Dopplungen im Modul `plan` und `kpi`
**Fundstelle:**
- Lektion `community`, Folie „Shitstorm – was tun?“ und merke „Krisenplan“, gegenüber Lektion `krise`
- Frage „Was gehört in ein gutes Reporting?“ gegenüber der check-Folie „Was macht ein Reporting wertvoll?“ in `report` (fast gleiche Frage und Antwort)
- Das ROAS-Beispiel 2.000 € ÷ 500 € steht viermal da: Folie, check, Begriffsfrage, Glossar.

**Problem:** Das ist nicht falsch, verschenkt aber Übungswert.

**Empfehlung:**
- In `community` die Shitstorm-Liste durch einen Verweis auf die Lektion „Kritik- & Krisenmanagement“ ersetzen.
- In der Begriffsfrage zum ROAS (`begriffsfragen.js`, „Was beschreibt der ROAS“) im Feld e andere Zahlen verwenden, z. B. 300 € → 1.500 € = 5.

#### 26. P3 – Jugendschutz-Folie bei Anzeigen: Verbot sensibler Daten (DSA Art. 26 Abs. 3) ergänzen
**Fundstelle:** `data/kurs.js` Z. 438, Lektion `ads-basis`, merke „Jugendschutz bei Anzeigen“ (Modul Zusatz)
```js
{ k: "merke", h: "Grenzen beim Targeting", b: "Plattformen dürfen Minderjährigen **keine Werbung auf Basis von Profiling** zeigen (Art. 28 DSA) und für niemanden Anzeigen auf Basis **sensibler Daten** wie Gesundheit, Religion oder sexueller Orientierung ausspielen (Art. 26 Abs. 3 DSA). Wer Schüler für Ausbildungsplätze erreichen will, setzt deshalb stärker auf **organische Inhalte** und Eltern, Lehrkräfte oder Erwachsene als Zielgruppe." }
```

---

## Anhang: Test aller 28 Freitext-RegExps (Ist-Stand)

Anzahl erkannter Musterpunkte für eine gute, eine mittelmäßige und eine falsche Beispielantwort.

| Frage (Anfang) | Modul | min/Punkte | gut | mittel | falsch | Bewertung |
|---|---|---|---|---|---|---|
| Social-Media-Guidelines für Mitarbeitende | recht | 3/5 | 5 | 2 | 0 | ok |
| Shitstorm – Vorgehen | plan | 4/6 | 6 | 2 | 3 (4 mit „Kommentare löschen …“) | **Befund 2** |
| Impressum-Anforderungen | recht | 3/5 | 5 | 2 | 1 | Befund 15 |
| Foto Firmenfeier | recht | 3/5 | 5 | 1 | 0 | ok (Befund 4) |
| Teilnahmebedingungen Gewinnspiel | recht | 4/6 | 6 | 3 (4 mit „Veranstalter, Ende …“) | 2 | **Befund 10** |
| Monitoring vs. Reporting | kpi | 2/3 | 3 | 2 | 0 | ok |
| Rechnung ER/CTR | kpi | 2/2 | 2 | 1 | 0 (1 mit „10,8 %“) | **Befund 12** |
| Monatsreporting GF | kpi | 3/5 | 5 | 2 | 0 | ok |
| Aufgaben Community Management | plan | 4/6 | 6 | 2 | 0 | ok |
| Krisenplan | plan | 4/7 | 7 | 2 | 0 | ok |
| Influencer-Kooperation rechtlich | recht | 3/6 | 6 | 1 | 0 | ok |
| Datenschutz Fanpage | recht | 3/6 | 6 | 1 | 0 | ok |
| Tracking-Pixel | recht | 3/6 | 6 | 2 | 0 | ok |
| KI-Inhalte rechtlich | recht | 3/6 | 6 | 2 | 0 | ok |
| Rechnung CPM/CPC/CPA/ROAS | kpi | 3/4 | 4 | 2 | 0 | ok – auch ohne €-Zeichen; „ROAS 4,8“ wird richtig abgelehnt |
| Nachweis Social → Verkäufe | kpi | 3/6 | 6 | 2 | 0 | Befund 11 (Doppel-RegExp) |
| Ziele → KPI | kpi | 3/4 | 4 | 2 | 0 | ok |
| Ads-Kampagne 50 Bewerbungen | ads | 4/7 | 7 | 3 | 0 | ok |
| Funnel / Customer Journey | plan | 4/5 | 5 | 3 | 0 (3 mit „Seeding … verbindlich“) | Befund 13 |
| Kundenfoto (UGC) | recht | 3/5 | 5 | 1 | 0 | ok |
| Fünf Rechtsgebiete | recht | 5/7 | 6 | 3 | 0 | ok |
| Social Media BSC | kpi | 3/5 | 5 | 1 | 0 | ok |
| Anstieg Erwähnungen interpretieren | kpi | 3/5 | 5 | 1 | 0 | ok |
| Fachvortrag verwerten | plan | 3/5 | 5 | 0 | 0 | ok |
| Konzeption umsetzen | plan | 3/5 | 5 | 2 | 0 | ok |
| Fall Mode-Shop Likes | kpi | 4/6 | 6 | 2 | 0 | ok (lockere Phrase `nicht.{0,30}umsatz`, unkritisch) |
| Fall Event-Foto | recht | 3/5 | 5 | 1 | 0 | ok (Befund 4) |
| Fall sachliche Kritik Facebook | plan | 4/6 | 6 | 2 | 0 | ok – „nicht lösch“ korrekt gelöst |

Keine RegExp wirft einen Syntaxfehler. Alle Ersatz-RegExps in diesem Bericht habe ich mit denselben Antworten nachgetestet.

---

## Zusammenfassung

**Befunde:** 26 – **P1: 2 · P2: 11 · P3: 13**

Rechtlich ist der Stoff auf aktuellem Stand und durchweg korrekt: DDG, TDDDG, DSA, KI-VO mit Digital Omnibus 2026/1744, BGH- und EuGH-Rechtsprechung. Alle 41 Rechenbeispiele stimmen. Die Schwächen liegen bei Eindeutigkeit, Lücken zwischen Lektionen und Fragen, und bei einigen Freitext-RegExps.

**Die 5 wichtigsten Empfehlungen**
1. **ROAS-Verständnisfrage reparieren:** Ablenker „400 %“ durch „300 %“ ersetzen (Befund 1).
2. **Shitstorm-Freitext:** Die RegExp für „nicht löschen“ muss die Verneinung verlangen. Sonst wird die falsche Kernaussage belohnt (Befund 2). Dazu die Gewinnspiel-, ER/CTR-, Nachweis- und Funnel-RegExps nachschärfen (Befunde 10 bis 13).
3. **Mitarbeiterfotos einheitlich nach § 26 Abs. 2 BDSG:** „schriftlich oder elektronisch, freiwillig“ statt „BAG-Schriftform“, an allen vier Stellen (Befund 4).
4. **Lücken zwischen Probetest und Lektionen schließen:** Anzeigen-Kennzahlen und Messgrößen als Folien ins Kernmodul `kpi` (Befund 8). Rechtliche Sonderfälle (Panoramafreiheit, Planet49, Abmahnung, Fake-Bewertungen, Glücksspiel) als Folien in `recht` (Befunde 9 und 14). Dazu die Ausnahme „ohne Gegenleistung keine Kennzeichnung“ (Befund 7).
5. **Begriffe vereinheitlichen:** ROI-„Ertrag“ als Deckungsbeitrag auf der Folie erklären (Befund 6), Kaushik-Raten im Glossar „pro Beitrag“ (Befund 5), „Abschlussprojekt“ streichen (Befund 3).

---

## Quellen (Webrecherche 06.11.2026)

- IHK Lüneburg-Wolfsburg: [Digital-Omnibus-Verordnung zur KI in Kraft getreten](https://www.ihk.de/ihklw/produkte/beratung-und-service/ecommerce-und-internet/digital-omnibus-verordnung-zur-ki-tritt-in-kraft-7142858) – VO (EU) 2026/1744, in Kraft 27.07.2026, Art. 4 „fördern“, Art. 50 Abs. 2 Altsysteme bis 02.12.2026, Deepfake-Pflicht nicht verschoben, Anhang III ab 02.12.2027
- buzer.de: [§ 26 BDSG](https://www.buzer.de/26_BDSG.htm) – Abs. 2 S. 3 „schriftlich oder elektronisch“, Fassung von 2019, unverändert
- Medienanstalten: [Leitfaden Werbekennzeichnung Online-Medien (Stand 06/2021)](https://www.ma-hsh.de/files/ma-hsh/Aufgaben/Leitfaden_Medienanstalten_Werbekennzeichnung_Online-Medien%281%29.pdf) – „bezahlte Werbepartnerschaft“ zulässig, „ad“ und „sponsored by“ unzureichend
- WBS Legal / beck-aktuell: [BGH I ZR 35/21 – Influencerin III](https://www.wbs.legal/wettbewerbsrecht/bgh-zu-influencern-kennzeichnungspflichte-werbung-auch-bei-geschenktem-produkt-59419/), [beck-aktuell](https://www.beck-aktuell.de/daily/meldung/detail/bgh-influencerin-iii-werbung-auch-bei-geschenktem-produkt)
- EuGH: [Pressemitteilung 50/26 zu C-590/23 Pelham (14.04.2026)](https://curia.europa.eu/site/upload/docs/application/pdf/2026-04/cp260050de.pdf)
- LTO: [VG Köln 13 K 1419/23 – Bundespresseamt darf Facebook-Seite weiter betreiben](https://www.lto.de/recht/nachrichten/n/13k141923-vg-koeln-bfdi-facebook-bpa-meta); BfDI: [Berufung zum OVG Münster](https://www.bfdi.bund.de/SharedDocs/Pressemitteilungen/EN/2025/12_Fanpage-appeals.html)
- Business Today: [Instagram limits hashtag usage to 5 per reel and post (19.12.2025)](https://www.businesstoday.in/technology/news/story/no-more-hashtag-stuffing-instagram-limits-hashtag-usage-to-just-5-per-reel-and-post-507444-2025-12-19)
- allsocial.de: [Fiege, Social Media Balanced Scorecard (Whitepaper 2010)](https://allsocial.de//wp-content/uploads/2010/07/smbc.pdf)
