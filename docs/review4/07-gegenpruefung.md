# 07 – Gegenprüfung der umgesetzten Inhalte (Version 0.14.0), Stand 06.11.2026

Geprüft wurde nur, was neu ist oder geändert wurde: `git diff HEAD~1 HEAD -- data/`, vor allem `data/lektionen4.js`. Im Arbeitsverzeichnis gibt es keine offenen Änderungen.
Freitext-Muster habe ich mit Node genau so getestet, wie die App bewertet: `new RegExp(muster, "i")`. Vorschlag „Richtig“ heißt: Treffer ≥ `min`.
Es gibt nur echte Befunde, ohne P3.

## Sachlich bestätigt (kein Befund)
- **Ice Bucket Challenge:** über 17 Mio. Videos, 115 Mio. US-$ für die ALS Association, im Vorjahreszeitraum 2,8 Mio. (Nature 550, S113, 2017).
- **EDEKA #heimkommen:** Start 28.11.2015 auf YouTube, Agentur Jung von Matt, über 20 Mio. Aufrufe nach 4 Tagen, über 43 Mio. bis 18.12. (Wikipedia „Heimkommen“).
- **Duolingo:** Start 11.02.2025, Dauer zwei Wochen, rund 1,7 Mrd. Impressionen bei einem Ziel von 70 Mio., rund 160.000 Nutzerbeiträge (Fast Company).
- **LEGO Ideas:** 10.000 Unterstützer, 1 % des Nettoumsatzes.
- **YouTube Shorts:** bis 3 Minuten seit Oktober 2024.
- **Pinterest:** 640 Mio. monatlich aktive Nutzer im 2. Quartal 2026 (Pinterest-Quartalsbericht beim SEC, 8-K).
- **Threads:** 500 Mio. monatlich aktive Nutzer, von Meta im Juni 2026 gemeldet.
- **ARD/ZDF-Medienstudie 2026:**
  - **ZDF-Seite:** n = 2.462. Social Media täglich 33 % mit 32 Minuten. Wöchentlich: YouTube 47 % und „Podcasts mit 34 Prozent“. Der Alt-Text der Grafik sagt ausdrücklich „wöchentlich“.
  - **onlinemarketing.de (24.09.2026):** Instagram 40 %, Facebook 28 %, TikTok 18 %, Snapchat 13 %, Pinterest 11 %, LinkedIn 8 %. Nach Alter 91/74/53/22 %.
  - **Widerspruch bei den Podcasts:** onlinemarketing.de nennt 25 %, die ZDF-Seite 34 %. Dass die App der ZDF-Angabe folgt, ist vertretbar. Abgleichen, sobald die Originalstudie erreichbar ist.
- **UWG Anhang Nr. 23b und 23c:** richtig zugeordnet. 23b betrifft die Behauptung „echte Kundenbewertungen“ ohne angemessene Prüfung, 23c gefälschte oder beauftragte Bewertungen.
- **Bewertungsrecht:** richtig dargestellt. Meinungen sind geschützt. Gegen Schmähkritik, Beleidigungen und unwahre Tatsachen hilft eine Meldung an das Portal.
- **Weitere geprüfte Angaben im Diff:**
  - § 5a Abs. 4 UWG mit der Vermutung einer Gegenleistung
  - Art. 28 und Art. 26 Abs. 3 DSA
  - Art. 83 DSGVO
  - Planet49 und Fashion ID
  - BGH 2024 zur Panoramafreiheit bei Drohnenfotos
  - EuGH Pelham II 2026 zum Pastiche
  - KI-Omnibus VO (EU) 2026/1744: Art. 4 verlangt jetzt nur noch, KI-Kompetenz zu fördern
  - ROAS-Check
  - Die Lektions-IDs in `vorlesungen.js` existieren alle, die KW-Montage stimmen.

---

## P1-1 Hausaufgaben-Freitext „viraler Effekt“: Eine falsche Definition bekommt „Richtig“
**Fundstelle:** `data/lektionen4.js`, FRAGEN_R4, Frage „Erläutern Sie kurz, was unter dem viralen Effekt …“, Muster 1 `teil|weiterge|…`

**Problem:** Das Muster `teil` trifft auch „Vor**teil**“, „Nach**teil**“, „An**teil**“ und „**Teil**nehmer“. Ein Beispiel: „Viral bedeutet, dass ein Unternehmen gezielt Anzeigen kauft. Vorteil: schnell. Beispiel EDEKA 2015 mit 20 Mio. Aufrufen.“ Diese Antwort erhält 4/4 (Treffer-Muster 11011), also den Vorschlag „Richtig“, obwohl die Definition falsch ist. Das ist genau die Hausaufgabe des laufenden Kurses.

**Beleg:** Node-Test. Mit der Korrektur erhält dieselbe Antwort ohne „Vorteil“-Treffer 1–2 Punkte. Gute Antworten erhalten 5/5 oder 4/5, die eigene `bsp`-Antwort 5/5.
```js
{ m: "einf", t: "frei", q: "Erläutern Sie kurz, was unter dem viralen Effekt im Rahmen von Social Media zu verstehen ist. Nennen Sie ein reales Beispiel für eine Kampagne, bei der der virale Effekt entscheidend für den Erfolg war.", muster: [
   ["Nutzer teilen und verbreiten Inhalte selbst weiter (von Person zu Person)", "\\bteil(?!nehm|weise)|geteilt|weiterteil|\\bshares?\\b|weiterge|weiterleit|verbreit|person zu person|nutzer zu nutzer"],
   ["Schnelle, sich selbst verstärkende (sprunghafte) Reichweite", "schnell|exponent|schneeball|rasant|lawine|lauffeuer|sprunghaft|selbst verstärk"],
   ["Earned Media: kaum bezahlte Reichweite, Unternehmen gibt nur den Anstoß", "earned|kostenlos|kostengünstig|geringe kosten|unbezahlt|organisch|ohne (bezahl|budget|werbung)|anstoß|impuls"],
   ["Reales Beispiel mit Name und Jahr, z. B. Ice Bucket Challenge 2014, EDEKA #heimkommen 2015, Duolingo 2025", "ice.?bucket|als association|edeka|heimkommen|duolingo|old spice"],
   ["Begründung mit Fakten: Mechanik (Nominierung, Emotion) und belegte Zahlen", "\\d|nominier|emotion|mitmach|rühr|humor"]
  ], min: 4, quelle: Q_NATURE, bsp: "• Viraler Effekt: Ein Inhalt verbreitet sich, weil Nutzer ihn selbst weiterteilen – von Person zu Person.\n• Jede Weitergabe erreicht ein neues Netzwerk, Algorithmen verstärken das: Reichweite wächst sprunghaft, ohne gekauft zu sein (Earned Media).\n• Beispiel: ALS Ice Bucket Challenge 2014 – Eiswasser-Video posten und drei Personen nominieren.\n• Über 17 Mio. Videos, rund 115 Mio. US-$ Spenden für die ALS Association (Nature, 2017).\n• Entscheidend war die Nominierung: Jede Teilnahme löste neue Teilnahmen aus." }
```

## P2-1 Freitext Pinterest/Snapchat: Vertauschte Plattformen bekommen „Richtig“
**Fundstelle:** `data/lektionen4.js`, Frage „Vergleichen Sie Pinterest und Snapchat …“

**Problem:** Die Muster prüfen nicht, zu welcher Plattform eine Eigenschaft genannt wird. Ein Beispiel: „Pinterest ist ein Messenger für Jugendliche mit Stories. Snapchat ist eine Suchmaschine mit Pinnwänden und Links zur Website.“ Diese Antwort erhält 4/3, also „Richtig“.

**Beleg:** Node-Test. Die Korrektur bindet jedes Merkmal an den Plattformnamen. Das Textfenster endet am Namen der jeweils anderen Plattform. Vertauschte Antworten (als Satz oder als Stichpunkte) erhalten danach 1/3. Gute Antworten erhalten 5/5, als Fließtext wie als Stichpunktliste.
```js
{ m: "platt", t: "frei", q: "Vergleichen Sie Pinterest und Snapchat hinsichtlich Zielgruppe, typischer Inhalte und Eignung für Unternehmen.", muster: [
   ["Pinterest: visuelle Suchmaschine, Ideen auf Pinnwänden", "pinterest(?:(?!snapchat)[\\s\\S]){0,150}(such|pinnwand|idee|inspiration)|(such|pinnwand|idee|inspiration)(?:(?!snapchat)[\\s\\S]){0,40}pinterest"],
   ["Pinterest: lange auffindbar, Traffic zur Website; Handel, Food, Einrichtung, Mode", "pinterest(?:(?!snapchat)[\\s\\S]){0,200}(langfrist|lange|monate|traffic|website|link|handel|rezept|einricht|mode|deko)"],
   ["Snapchat: Messenger für Jüngere, Fotos/Kurzvideos unter Freunden", "snapchat(?:(?!pinterest)[\\s\\S]){0,150}(jung|jugend|messenger|freund|chat)|(jung|jugend|messenger)(?:(?!pinterest)[\\s\\S]){0,40}snapchat"],
   ["Snapchat: Stories, AR-Linsen, Werbung; z. B. Ausbildungsmarketing", "snapchat(?:(?!pinterest)[\\s\\S]){0,200}(story|stories|\\bar\\b|ar-|augmented|linse|lens|filter|ausbildung|azubi)"],
   ["Beide für B2B selten erste Wahl / Wahl nach Zielgruppe begründen", "b2b|zielgrupp"]
  ], min: 3 }
```

## P2-2 Freitext Social Media Relations: Wer SMR und Influencer Marketing gleichsetzt, bekommt „Richtig“
**Fundstelle:** `data/lektionen4.js`, Frage „Erklären Sie den Begriff Social Media Relations und grenzen Sie ihn …“

**Problem:** Zwei Muster sind zu breit:
- `bezahl` (Muster 4) trifft auch „**un**bezahlt“.
- `werbung|anzeige` (Muster 5) trifft jede Erwähnung von Werbung.

Muster 1 zählt außerdem schon bloße Namen wie „Blogger“ oder „Journalisten“. So ergeben sich falsche Treffer:
- „Social Media Relations heißt, Blogger für Werbung zu bezahlen – das ist dasselbe wie Influencer Marketing.“ erhält 3/3.
- „SMR sind bezahlte Anzeigen mit Journalisten.“ erhält 3/3.

**Beleg:** Node-Test. Mit der Korrektur erhalten beide falschen Antworten 1/3. Gute Antworten erhalten 5/5 bzw. 4/5.
```js
{ m: "unt", t: "frei", q: "Erklären Sie den Begriff Social Media Relations und grenzen Sie ihn vom Influencer Marketing ab.", muster: [
   ["Beziehungspflege mit Meinungsmachern im Social Web (Blogger, Creator, Journalisten)", "beziehung|kontakt|pflege|dialog|vernetz"],
   ["Ziel: unbezahlte Berichterstattung / Earned Media / Glaubwürdigkeit", "earned|unbezahlt|nicht bezahlt|ohne bezahlung|freiwillig|bericht|empfehl|glaubwürd|vertrauen"],
   ["Grundsätze: Recherche, persönliche Ansprache, Mehrwert, Ehrlichkeit", "recherch|persönlich|mehrwert|ehrlich|transparen|exklusiv"],
   ["Influencer Marketing: bezahlte Kooperation / Gegenleistung", "(?<!un)bezahl|gegenleist|honorar|vergüt|vertrag|gekauft|sponsor"],
   ["Bei Gegenleistung Kennzeichnungspflicht als Werbung", "kennzeichn|werbekennz|als werbung|\\banzeige\\b"]
  ], min: 3 }
```

## P2-3 Freitext Influencer-KPIs: Eine falsche Zuordnung bekommt „Richtig“
**Fundstelle:** `data/lektionen4.js`, Frage „Wie messen Sie den Erfolg einer Influencer-Kampagne? Ordnen Sie …“

**Problem:** Die Frage verlangt ausdrücklich eine Zuordnung. Die Muster suchen aber nur Kennzahlwörter, egal zu welchem Ziel sie stehen. „Bekanntheit misst man mit Rabattcodes, Verkauf mit Reichweite, Interaktion mit Views.“ erhält 3/3.

**Beleg:** Node-Test. Mit der Korrektur (Ziel und Kennzahl in der Nähe, nicht über das nächste Ziel hinweg) erhält diese Antwort 1/3. „Ich messe nur Follower und Likes.“ erhält 0. Gute Antworten erhalten 4/4, als Liste „Bekanntheit: …“ wie als Fließtext.
```js
{ m: "unt", t: "frei", q: "Wie messen Sie den Erfolg einer Influencer-Kampagne? Ordnen Sie passende Kennzahlen den Zielen Bekanntheit, Interaktion und Verkauf zu.", muster: [
   ["Bekanntheit: Reichweite, Aufrufe/Views, Impressionen", "(bekannt|awareness)(?:(?!interakt|verkauf|engagement)[\\s\\S]){0,60}(reichweit|aufruf|view|impression)|(reichweit|aufruf|view|impression)(?:(?!interakt|verkauf|engagement)[\\s\\S]){0,40}(bekannt|awareness)"],
   ["Interaktion: Engagement-Rate, Kommentare, Shares, Saves", "(interakt|engagement)(?:(?!bekannt|verkauf)[\\s\\S]){0,60}(engagement|kommentar|share|geteilt|speicher|save|like)|(kommentar|share|geteilt|speicher|save|like)(?:(?!bekannt|verkauf)[\\s\\S]){0,40}(interakt|engagement)"],
   ["Verkauf: Rabattcodes, Tracking-Links/UTM, Conversions, Umsatz", "(verkauf|abverkauf|sales|kauf)(?:(?!bekannt|interakt)[\\s\\S]){0,60}(code|tracking|utm|link|conversion|umsatz|käufe|bestellung)|(code|tracking|utm|link|conversion|umsatz)(?:(?!bekannt|interakt)[\\s\\S]){0,40}(verkauf|sales)"],
   ["Ziele und Zielwerte vorab festlegen / Kosten in Relation (z. B. CPA, ROI)", "vorab|vorher|zielwert|\\bcpa\\b|\\broi\\b|kosten pro|budget"]
  ], min: 3 }
```

## P2-4 Freitext ORM: Falsche Praxis bekommt „Richtig“
**Fundstelle:** `data/lektionen4.js`, Frage „Was versteht man unter Online Reputation Management? Nennen Sie vier …“

**Problem:**
- `reputation` steht schon in der Frage. Wer den Begriff wiederholt, bekommt Punkt 1.
- `melden` trifft „Kritiker melden“.
- `website` trifft jede Erwähnung der Website.
- `antwort` trifft auch „ver**antwort**lich“.

Ein Beispiel: „Online Reputation Management heißt, schlechte Bewertungen löschen lassen, Kritiker melden und Fake-Bewertungen auf der Website veröffentlichen. Antworten ist unnötig.“ Diese Antwort erhält 4/4. Das widerspricht direkt der Merke-Karte „Taten statt Löschen“ und UWG Anhang Nr. 23c.

**Beleg:** Node-Test. Mit der Korrektur erhält diese Antwort 1/4. Gute Antworten erhalten 6/6 bzw. 5/6.
```js
{ m: "plan", t: "frei", q: "Was versteht man unter Online Reputation Management? Nennen Sie vier konkrete Maßnahmen.", muster: [
   ["Ruf/Image eines Unternehmens im Netz beobachten, pflegen, schützen", "\\bruf\\b|image|ansehen|reputation(?:(?!lösch)[\\s\\S]){0,40}(beobacht|pfleg|schütz|steuer|aufbau|verbesser)|(beobacht|pfleg|schütz|steuer)[\\s\\S]{0,40}reputation"],
   ["Monitoring von Erwähnungen und Bewertungen (Alerts, Tools)", "monitor|beobacht|alert|listening"],
   ["Auf Bewertungen und Kritik zeitnah und sachlich antworten", "(?<!ver)antwort|reagier|stellung"],
   ["Zufriedene Kunden um echte Bewertungen bitten", "bitten|aufforder|zufriedene"],
   ["Eigene Inhalte stärken (Website, Profile, Fachbeiträge)", "eigene[nr]? (inhalt|website|profil|kanäl|beitr)|content|fachbeitr|\\bseo\\b|(website|profil)[\\s\\S]{0,30}(pfleg|stärk|aktuell|ausbau|optimier)"],
   ["Krisenvorsorge, rechtswidrige Inhalte melden", "krise|rechtswidrig|unwahr|(portal|plattform|google)[\\s\\S]{0,30}meld|meld(en|ung)[\\s\\S]{0,30}(portal|plattform|google)"]
  ], min: 4 }
```

## P2-5 Freitext Restaurant-Bewertung: Eine feindselige Antwort bekommt „Richtig“
**Fundstelle:** `data/lektionen4.js`, Frage „Ein Restaurant erhält auf Google eine Ein-Stern-Bewertung …“

**Problem:**
- `melden` trifft „melden Sie sich nie wieder“.
- `andere` trifft „Andere Gäste waren zufrieden“.
- `dank` trifft auch „Ge**dank**en“.

„Das ist eine Lüge, melden Sie sich nie wieder. Andere Gäste waren zufrieden mit Personal und Pizza.“ erhält 3/3. Das ist das Gegenteil der Lektion `bewertungen`.

**Beleg:** Node-Test. Mit der Korrektur erhält diese Antwort 1/3. Gute Antworten erhalten 5/5 bzw. 4/5.
```js
{ m: "plan", t: "frei", q: "Ein Restaurant erhält auf Google eine Ein-Stern-Bewertung: „Unfreundliches Personal, kalte Pizza.“ Formulieren Sie eine Antwort und begründen Sie Ihr Vorgehen.", muster: [
   ["Dank für das Feedback, Person ernst nehmen", "\\bdank|bedank"],
   ["Bedauern / Entschuldigung, Fehler einräumen", "entschuldig|bedauer|leid|fehler"],
   ["Konkret auf Personal und Pizza eingehen", "personal|pizza|kalt|unfreundlich"],
   ["Lösung oder Einladung anbieten, Kontakt ins Private verlagern", "lösung|einlad|gutschein|kontakt|melden sie sich (gern|bei|direkt|unter|per)|meldet euch|telefon|mail|persönlich|privat"],
   ["Begründung: Mitlesende sehen den Umgang mit Kritik; nicht löschen", "mitles|öffentlich|andere[nr]? (gäste|kunden|leser|nutzer)[\\s\\S]{0,30}(sehen|lesen|zeig|wirk)|potenziell|künftig|vertrauen|image|nicht lösch|professionell"]
  ], min: 3 }
```

## P2-6 Folie „Threads“: „In der EU seit Ende 2023 auch ohne Instagram-Konto nutzbar“ stimmt so nicht
**Fundstelle:** `data/lektionen4.js`, Lektion `threads-bluesky`, Folie „Threads“

**Problem:** Beim EU-Start am 14.12.2023 konnte man Threads ohne Instagram-Konto nur **lesen**. Zum Posten brauchte man weiter ein Instagram-Konto. Eigene Threads-Profile ohne Instagram (Anmeldung per E-Mail oder Telefonnummer) testet Meta erst seit Mai 2025 mit ausgewählten EU-Nutzern. „Nutzbar“ verspricht Unternehmen also zu viel.

**Beleg:**
- MacRumors, 14.12.2023: EU-Nutzer können „simply browse Threads without having an Instagram account“.
- netinfluencer.com, 20.05.2025: Meta testet die Anmeldung ohne Instagram für ausgewählte EU-Nutzer.
- Open Terms Archive, 14.05.2025: Threads erweitert die Profilerstellung über Instagram-Nutzer hinaus.

Der Ersatz hat 46 Wörter und 297 Zeichen.
```js
{ k: "text", h: "Threads", b: "Text-App von **Meta**, 2023 gestartet und eng mit Instagram verbunden. In der EU lässt sich Threads seit Ende 2023 ohne Instagram-Konto **lesen**; eigene Profile ohne Instagram testet Meta seit 2025. Laut Meta im Juni 2026 rund **500 Mio.** monatlich aktive Nutzer. Vorteil: Start mit der Instagram-Community." }
```

## P2-7 MC „Welches soziale Netzwerk nutzten … die meisten …?“: Die Frage ist absolut gestellt, obwohl YouTube höher liegt
**Fundstelle:** `data/lektionen4.js`, FRAGEN_R4 (einf), dazu die Folie „Mindestens wöchentlich genutzt“ in `nutzung-de`

**Problem:** Die Frage klingt so, als sei Instagram das meistgenutzte Netzwerk überhaupt. Laut ZDF-Übersicht zur selben Studie nutzen aber 47 % YouTube wöchentlich, also mehr als Instagram mit 40 %. onlinemarketing.de nennt die 47 % ebenfalls. Die Antwort ist nur richtig, weil YouTube unter den Optionen fehlt. Lernende merken sich so „Instagram ist Nummer 1“. Die Folie verschweigt YouTube ebenfalls.

**Beleg:** ZDF-Medienforschung, Übersicht ARD/ZDF-Medienstudie 2026 (Alt-Text: „Es folgen bei Video YouTube mit 47 Prozent“). onlinemarketing.de, 24.09.2026.
```js
{ m: "einf", q: "Welches dieser Netzwerke nutzten laut Bericht zur ARD/ZDF-Medienstudie 2026 die meisten Menschen ab 14 mindestens wöchentlich?", a: ["Instagram", "Facebook", "TikTok", "LinkedIn"], c: 0, e: "Instagram 40 %, Facebook 28 %, TikTok 18 %, LinkedIn 8 % (berichtet von onlinemarketing.de). Die Videoplattform YouTube liegt mit 47 % noch darüber (ZDF).", quelle: Q_STUDIE }
```
```js
{ k: "liste", h: "Mindestens wöchentlich genutzt", l: ["Instagram: 40 % (Videoplattform YouTube: 47 %)", "Facebook: 28 % (minus 3 Punkte)", "TikTok: 18 %, Snapchat: 13 %", "Pinterest: 11 %, LinkedIn: 8 %", "Laut ARD/ZDF-Medienstudie 2026, berichtet von onlinemarketing.de und ZDF"] }
```

## P2-8 Lektions-Check und Poolfrage zur Ice Bucket Challenge sind fast identisch
**Fundstelle:** `data/lektionen4.js`:
- Lektion `viral-beispiele`, 1. Check „Was war der entscheidende virale Mechanismus der Ice Bucket Challenge?“
- FRAGEN_R4: „Was machte die ALS Ice Bucket Challenge 2014 vor allem viral?“

**Problem:** Beide haben dieselbe Kernfrage und wörtlich dieselben vier Antworten. Mit derselben Begründung hat der Umsetzer an anderer Stelle Doppelungen entfernt: den Mastodon-Check in `threads-bluesky` und die MC „Warum spricht man vom viralen Effekt?“. Hier ist die Doppelung stehen geblieben.

**Korrektur:** Den Zwischen-Check durch eine Frage ersetzen, die die drei Beispiele verbindet. Die Poolfrage bleibt.
```js
{ k: "check", q: "Was haben Ice Bucket Challenge, #heimkommen und „Duo ist tot“ gemeinsam?", a: ["Die Reichweite entstand vor allem, weil Menschen die Inhalte selbst teilten und weitertrugen", "Alle drei liefen ausschließlich als bezahlte TV-Werbung", "Alle drei waren Gewinnspiele mit wertvollen Sachpreisen", "Alle drei wurden nur den eigenen Followern angezeigt"], c: 0, e: "Ob Nominierung, Rührung oder Rätselraten: In allen drei Fällen trugen die Nutzer den Inhalt weiter – das ist der virale Effekt." }
```

---

## Zusammenfassung
**9 Befunde: P1 = 1, P2 = 8.**
- 6 betreffen Freitext-Muster. In jedem Fall bekommt eine sachlich falsche Antwort den Vorschlag „Richtig“.
- 3 betreffen Inhalte: Threads/EU, die absolut gestellte Frage zur Plattformnutzung, eine doppelte Frage.

**Die 5 wichtigsten Empfehlungen:**
1. Das Hausaufgaben-Muster `teil` reparieren (P1-1), weil es die Frage des laufenden Kurses betrifft.
2. Bei Vergleichs- und Zuordnungsfragen (Pinterest/Snapchat, Influencer-KPIs) Merkmale an den Plattform- bzw. Zielnamen binden (P2-1, P2-3).
3. Wörter aus der Frage selbst (z. B. „Reputation“) und kurze Wortteile ohne Wortgrenze (`teil`, `dank`, `antwort`, `melden`, `andere`, `bezahl`) systematisch in allen Mustern prüfen (P2-2, P2-4, P2-5).
4. Die Threads-Folie korrigieren, damit sie nicht mehr verspricht, dass Threads ohne Instagram voll nutzbar ist (P2-6).
5. Die Plattformfrage auf „dieser Netzwerke“ eingrenzen und YouTube mit 47 % auf der Folie nennen (P2-7).
