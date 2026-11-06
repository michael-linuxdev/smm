# Review 05 – Didaktik und Lernerlebnis (SMM Coach 0.13.2, Stand 06.11.2026)

**Prüfer:** unabhängiger Prüfer Didaktik/Lernerlebnis · **Keine Projektdateien geändert.**

**Methode:** App lokal (`python3 -m http.server 8765`) mit Playwright/Chromium im iPhone-Viewport 390×844 durchgespielt, Screenshots angesehen. Dabei drei Personen nacheinander:

1. **Quereinsteigerin ohne Vorwissen:** Erststart, Install-Hinweis, „Loslegen“, die ganze Lektion „Grundwortschatz Marketing“ im Modus Schritt für Schritt (30 Tipper), Begriffe antippen, Kurz-Checks absichtlich falsch beantwortet.
2. **Teilnehmer mit ADHS:** Lernhilfen eingeschaltet (Fokusmodus, Schritt für Schritt an/aus). Die dichtesten Lektionen angesehen (`recht/ugc-recht`, `kpi/daten`, `unt/governance-zugaenge`, `recht/datenschutz`), außerdem Pausen-Erinnerung und Vorlesen im Code.
3. **Teilnehmerin zwei Wochen vor dem Test:** Prüfungstermin auf den 20.11.2026 gesetzt, kompletten Probetest (30 Fragen) bearbeitet und abgegeben, Freitexte bewertet. Danach „Üben“, „Freitext üben“ mit Musterlösung und das Glossar.

Zusätzlich habe ich die Daten mit Node ausgewertet: 50 Lektionen, Kartentypen, Wortzahl je Karte, alle 54 Freitext-Fragen mit Musterlösung. Abgeglichen habe ich mit KONTEXT.md, dem Vorlesungsplan und dem Foto der Hausaufgabe.

**Gesamteindruck:** Für Einsteiger ist die App sehr zugänglich. Der Grundwortschatz mit der Bäckerei Krume ist ein guter Einstieg. Die Story-Karten sind meist kurz (im Schnitt 18–47 Wörter). Kurz-Checks geben eine freundliche, erklärende Rückmeldung. Die Sprache ist durchgehend einfach und duzt. Annahmen zum Test sind sauber gekennzeichnet.

Die größten Lücken betreffen zwei Dinge. Erstens die **Freitext-Kompetenz**, die Lehrgang und Test wirklich verlangen: Erläutern, Begründen und ein **reales Beispiel** nennen. Zweitens die **Endphase vor der Prüfung**: Es gibt keinen Lernplan pro Tag, keine Zusammenfassung je Modul und keine Auswertung nach Themen. Außerdem sperrt der Fokusmodus versehentlich den Weg zur Prüfung.

---

## P1 – falsch, kaputt oder prüfungsschädlich

### P1-1 Im Fokusmodus gibt es keinen Weg zu Probetest und „Freitext üben“
- **Fundstelle:** `app.css:388` (`:root[data-focus] .tabbar, … .fx … {display:none}`), `app.js:263–288` (`viewStart`)
- **Problem:** Der Fokusmodus blendet die Reiterleiste aus. Auf der Startseite bleiben nur „Weiterlernen“, „Üben“, „Glossar“ und eventuell „Prüfungstermin eintragen“. Es gibt **keinen Link zu `#pruefung`**. Wer den Fokusmodus nutzt, also gerade die ADHS-Zielgruppe, erreicht Probetest und Freitext-Training nur, wenn sie den Fokusmodus wieder ausschaltet. Für Person 3 ist das prüfungsschädlich.
- **Beleg:** Screenshot nach dem Einschalten des Fokusmodus: Startseite ohne Reiter und ohne Prüfungslink. Im Code gibt es auf `#start` kein `href="#pruefung"`.
- **Korrektur:** Im Fokusmodus eine Karte „Prüfung üben“ auf Start zeigen. Die Ein-Ziel-Logik bleibt erhalten, weil es eine einzige zusätzliche Karte ist.
```js
// app.js viewStart(), direkt nach der „Üben“-Karte einfügen
${S.set?.focus ? `<a class="cont" href="#pruefung" style="margin-bottom:10px"><div class="thumb" style="background:var(--grad-strong)">${ic("exam")}</div><div><b style="font-size:1rem">Prüfung üben</b><div class="small muted">Probetest und Freitext-Training</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""}
```
Außerdem den Beschreibungstext in den Einstellungen anpassen (`app.js:949`):
```js
["focus", "Fokusmodus", "Blendet Menüleiste und Statistiken aus. Zur Prüfung kommst du über die Karte „Prüfung üben“ auf Start."]
```

### P1-2 Der Aufgabentyp „Begriff erläutern + reales Beispiel“ (Hausaufgabe) wird nirgends trainiert. Es gibt keine einzige reale Kampagne in der App
- **Fundstelle:** `data/*.js` (alle Inhalte), `app.js:504` (Tipp-Box Freitext), `app.js:721–723` (Lehrgang/Hausaufgabe)
- **Problem:**
  - Die Hausaufgaben sind Voraussetzung für die Zulassung zum Test. Die Beispiel-Hausaufgabe verlangt: „Erläutern Sie kurz, was unter dem **viralen Effekt** … zu verstehen ist. Recherchieren und nennen Sie ein **reales Beispiel** für eine Kampagne …“ (stichpunktartig, höchstens eine A4-Seite).
  - Der virale Effekt kommt in der App nur als Glossar-Eintrag (`glossar2.js:23`) und als eine MC-Frage vor (`fragen2.js:27`). Eine Lektion dazu fehlt.
  - Keine der 54 Freitext-Fragen verlangt ein **reales** Beispiel. Höchstens heißt es „Unternehmen Ihrer Wahl“ oder eine erfundene Bäckerei.
  - Ich habe nach bekannten Kampagnen gesucht (Ice Bucket, Edeka, Dove, BVG, Sixt, IKEA, Red Bull): **0 Treffer**.
  - Die Freitext-Tipps (Benennen – Begründen – Konkret werden) behandeln den Aufbau „Definition → Wirkmechanismus → Beispiel mit Beleg“ nicht.
- **Beleg:** Foto der Hausaufgabe, Node-Auswertung aller Freitext-Fragen, `grep` über `data/`.
- **Korrektur:** in drei Teilen.

**(a) Neue Lektion „Viraler Effekt“** in `einf`, nach `chancen`. Die Zahlen sind belegt: Die Ice Bucket Challenge brachte der ALS Association laut übereinstimmenden Berichten rund 115 Mio. US-Dollar (z. B. thenewsminute.com: „how 115 million dollars collected through ALS ice bucket challenge is being spent“). Edekas „#heimkommen“ führte laut Horizont das Unruly-Ranking 2015 als „deutscher Viral-Hit des Jahres“ an. Die Karten fordern trotzdem ausdrücklich dazu auf, Quellen selbst zu prüfen.
```js
viral: { id: "viral", titel: "Der virale Effekt", min: 4, folien: [
 { k: "intro", h: "Wie ein Lauffeuer", b: "Ein Inhalt ist **viral**, wenn Menschen ihn so oft weiterteilen, dass er sich von selbst immer weiter verbreitet – ähnlich wie ein Virus von Mensch zu Mensch. Die Reichweite kommt dann vor allem durch die Nutzer, nicht durch bezahlte Werbung." },
 { k: "liste", h: "Warum teilen Menschen etwas?", l: ["**Gefühl:** Es berührt, überrascht oder bringt zum Lachen", "**Mitmachen:** Man kann selbst teilnehmen (Challenge, Hashtag)", "**Zugehörigkeit:** Teilen zeigt, wofür man steht", "**Einfachheit:** Die Idee versteht man in Sekunden", "**Netzwerk:** Jeder, der teilt, erreicht neue Menschen"] },
 { k: "beispiel", h: "Ice Bucket Challenge (2014)", b: "Menschen kippten sich Eiswasser über den Kopf, posteten das Video und **nominierten drei Freunde** – verbunden mit einem Spendenaufruf für die Nervenkrankheit ALS. Durch das Nominieren verbreitete sich die Aktion weltweit. Die ALS Association erhielt laut Berichten rund **115 Millionen US-Dollar** Spenden." },
 { k: "beispiel", h: "Edeka #heimkommen (2015)", b: "Ein Weihnachtsspot über einen einsamen Großvater, der seine Familie mit einer vorgetäuschten Todesanzeige nach Hause holt. Der Film wurde vor allem **geteilt** und diskutiert – laut Branchenranking war er 2015 der meistgeteilte deutsche Werbefilm. Auch Kritik („geschmacklos?“) trug zur Verbreitung bei." },
 { k: "text", h: "Planbar? Nur zum Teil", b: "Viralität lässt sich **nicht garantieren**. Man kann sie aber wahrscheinlicher machen: starke Idee, einfacher Mitmach-Mechanismus, gezieltes **Seeding** (erste Verbreitung über passende Personen). Risiko: Auch Fehler und Kritik können viral gehen – siehe **Shitstorm**." },
 { k: "check", q: "Was macht den viralen Effekt aus?", a: ["Nutzer teilen den Inhalt weiter und verbreiten ihn so selbst", "Ein hohes Werbebudget sorgt für viele Einblendungen", "Der Algorithmus zeigt den Beitrag allen Followern an", "Der Beitrag wird oben im Profil angeheftet"], c: 0, e: "Viral heißt: Die Verbreitung kommt vor allem durch das Teilen der Nutzer, nicht durch bezahlte Reichweite." },
 { k: "merke", h: "So beantwortest du „Erläutern + Beispiel“", b: "1. **Begriff** in einem Satz erklären. 2. **Wie es wirkt** (Mechanismus). 3. **Reales Beispiel:** wer, was, wann, Ergebnis – mit Quelle. 4. **Fazit:** Warum war der Effekt hier entscheidend? Zahlen immer selbst nachprüfen." }
]}
```

**(b) Neue Freitext-Fragen vom Typ „Erläutern + Beispiel“**, im Format von `kurs.js:366`. Sie passen zu den nächsten Vorlesungen laut Vorlesungsplan (KW48–KW05).
```js
{m:"einf",t:"frei",q:"Erläutern Sie kurz, was unter dem viralen Effekt in Social Media zu verstehen ist, und nennen Sie ein reales Beispiel für eine Kampagne, bei der er entscheidend war.",muster:[
 ["Definition: Inhalt wird von Nutzern massenhaft weitergeteilt und verbreitet sich von selbst","teil|weiterg|verbreit|schneeball|lauffeuer"],
 ["Ohne (oder mit wenig) bezahlte Reichweite – Nutzer sind die Verbreiter","unbezahlt|ohne (budget|werbung)|organisch|nutzer|earned"],
 ["Auslöser: Emotion, Mitmach-Mechanismus, Einfachheit, Seeding","emotion|gefühl|lustig|berühr|mitmach|challenge|nominier|seeding|einfach"],
 ["Reales Beispiel mit Name und Jahr (z. B. Ice Bucket Challenge 2014, Edeka #heimkommen 2015)","ice ?bucket|heimkommen|edeka|20[012]\\d"],
 ["Begründung, warum der virale Effekt den Erfolg ausmachte (Ergebnis, z. B. Spenden, Bekanntheit)","spende|millionen|mio|bekannt|erfolg|ergebnis|weil"]],min:4},
{m:"unt",t:"frei",q:"Erläutern Sie, was Influencer-Marketing ist, und nennen Sie ein reales Beispiel einer Kooperation. Woran messen Sie den Erfolg?",muster:[
 ["Definition: Zusammenarbeit mit Personen, die in ihrer Community Vertrauen und Reichweite haben","vertrauen|reichweit|community|meinungsführ"],
 ["Arten: Nano/Mikro bis Makro/Mega – Passung wichtiger als Größe","nano|mikro|makro|mega|passung|passt"],
 ["Reales Beispiel (Marke, Person, Jahr)","\\b20[12]\\d\\b|kooperation mit|@"],
 ["Werbekennzeichnung als Pflicht","kennzeichn|anzeige|werbung"],
 ["Erfolgsmessung: Engagement-Rate, Klicks/Rabattcode, Conversions – nicht nur Follower","engagement|rabattcode|code|klick|conversion|utm"]],min:4},
{m:"plan",t:"frei",q:"Erläutern Sie den Begriff Shitstorm und nennen Sie ein reales Beispiel. Was hat das Unternehmen richtig oder falsch gemacht?",muster:[
 ["Definition: Welle massenhafter, oft emotionaler Kritik in kurzer Zeit","welle|massenhaft|empör|viele (kritische|negative)|kritik"],
 ["Abgrenzung zur sachlichen Einzelkritik","sachlich|einzel|berechtigt"],
 ["Reales Beispiel mit Unternehmen und Jahr","\\b20[012]\\d\\b"],
 ["Bewertung der Reaktion (schnell, ehrlich, Lösung – oder löschen/ignorieren)","schnell|entschuldig|lösung|gelöscht|ignorier|streisand"],
 ["Lehre für die eigene Praxis (Krisenplan, Monitoring)","krisenplan|monitoring|vorbereit|lernen"]],min:4}
```
Musterlösungen mit Platzhalter-Beispielen sind ehrlicher als erfundene Fallbeispiele. Deshalb prüft das Muster nur, *dass* ein datiertes Beispiel genannt wird.

**(c) Hausaufgaben-Begleiter.** Eine neue Karte auf der Seite „Prüfung“ unter „Freitext üben“. Sie verlinkt die passende Lektion und Frage:
```js
// app.js viewPruefung(), nach der Karte „Freitext üben“
<details class="card tippbox"><summary><b>Hausaufgabe schreiben – so geht's</b></summary><ol class="small" style="margin:8px 0 0;padding-left:20px">
<li><b>Begriff erklären:</b> ein bis zwei Sätze in eigenen Worten.</li>
<li><b>Wie wirkt es?</b> Zwei bis drei Stichpunkte zum Mechanismus.</li>
<li><b>Reales Beispiel:</b> Wer? Was? Wann? Ergebnis? Mit Quelle (Link, Datum).</li>
<li><b>Fazit:</b> Warum war der Effekt hier entscheidend?</li></ol>
<p class="small" style="margin:8px 0 0">Kurz und in Stichpunkten, höchstens eine A4-Seite. Zahlen aus dem Internet immer bei einer zweiten Quelle prüfen. Abgabefrist im HSB Campus beachten.</p></details>
```
Außerdem in der Tipp-Box „So schreibst du Freitext-Antworten“ (`app.js:504`) einen vierten Punkt ergänzen:
```js
<li><b>„Erläutern“ heißt:</b> Begriff erklären, Wirkung beschreiben, Beispiel nennen – nicht nur aufzählen.</li>
```

---

## P2 – deutlich verbesserungswürdig

### P2-1 Doppelte, verschachtelte und irreführende Übersetzungen beim ersten Auftreten
- **Fundstelle:** `app.js:423–441` (`linkTerms`, v. a. Zeile 435–436), `data/glossar2.js:155, 160, 172`, `data/grundwortschatz.js`
- **Problem:** Gleich in der **ersten Karte**, die eine Quereinsteigerin sieht, stehen gestapelte Klammern:
  - „**PR** (Public Relations) (Öffentlichkeitsarbeit)“
  - „**HR** (Human Resources) (Personalabteilung) … **Recruiting** (Personalgewinnung)“
  - „Fotos und Videos (**Content** (Inhalt)) erreichen 5.000 Menschen (**Reichweite** (Reach))“
  - „Ein **Lead** (Interessenten-Kontakt) ist ein Kontakt mit Interesse“: die Erklärung steht doppelt
  - In `kpi/daten`: „**Interaktionen** (Beteiligung, Interaktion)“

  Ursache: Die Prüfung `!txt.includes(kurz)` sieht nur den Textknoten im `<strong>`. Die Klammer des Autors steht im nächsten Knoten. Bei deutschen Wörtern zeigt die App außerdem eine *englische* „Übersetzung“ (Reichweite → Reach). Das wirkt wie eine Erklärung, ist aber keine.
- **Beleg:** Screenshots der Karten „Wer macht was?“ und „Eine Kampagne bei Krume“.
- **Korrektur:**
```js
// app.js linkTerms(): vor dem Anhängen der Übersetzung prüfen, ob direkt danach schon eine Klammer
// oder eine Erklärung folgt bzw. die Übersetzung nur eine Form des gefundenen Worts ist.
const after = (node.parentElement.tagName === "STRONG" ? node.parentElement.nextSibling?.textContent : txt.slice(m.index + m[0].length)) || "";
const schonErklaert = /^\s*(\(|ist\b|heißt\b|sind\b|:)/i.test(after) || /:\s*$/.test(m[0]);
const gleicheWurzel = kurz && kurz.toLowerCase().includes(m[0].toLowerCase().slice(0, 7));
if (kurz && !schonErklaert && !gleicheWurzel && kurz.length <= 32 && seenDe && !seenDe.has(i) && … ) { … }
```
```js
// data/glossar2.js – englische Entsprechung nicht als Übersetzung ausgeben
"Reichweite": { syn: ["Reichweite", "Reichweiten", "Reach"] },
"Engagement": { de: "Beteiligung", syn: ["Engagement", "Interaktionen"] },
"Impressionen": { de: "Einblendungen", syn: ["Impressionen", "Impressions", "Impression"] },
```
Ersatz für die doppelten Autor-Klammern in `grundwortschatz.js` (eine Erklärung reicht):
```js
{ k: "liste", h: "Wer macht was?", l: [
 "**Marketing:** sorgt dafür, dass Kunden das Angebot kennen und kaufen",
 "**PR:** pflegt den guten Ruf, z. B. in der Lokalzeitung",
 "**Social Selling:** Vertrieb knüpft Kundenkontakte über soziale Netzwerke",
 "**HR:** die Personalabteilung – sie kümmert sich um **Recruiting**",
 "**Employer Branding:** zeigt, warum man gern hier arbeitet"
] },
{ k: "beispiel", h: "Eine Kampagne bei Krume", b: "Vier Wochen **Kampagne** fürs neue Dinkelbrot. Die Fotos und Videos (**Content**) sehen 5.000 Menschen – das ist die **Reichweite**. 200 liken oder kommentieren (**Engagement**). 40 klicken auf „Vorbestellen“, 10 bestellen wirklich. Die Bestellung ist die **Conversion** – die gewünschte Handlung." },
```

### P2-2 Der Einstieg erklärt nicht, dass man Begriffe antippen kann, und fragt nicht nach Lernhilfen
- **Fundstelle:** `data/grundwortschatz.js:3` (Intro-Karte), `app.js:263` (`viewStart`)
- **Problem:** „Loslegen“ startet sofort die erste Lektion. Die Intro-Karte verweist auf „das Glossar“, sagt aber nicht, dass **unterstrichene Wörter antippbar** sind. Das ist die wichtigste Hilfe für Person 1. Die Lernhilfen (Pausen-Erinnerung ist standardmäßig aus, Fokusmodus, ruhige Darstellung) liegen hinter dem Zahnrad. Person 2 findet sie nicht von selbst.
- **Korrektur:**
```js
{ k: "intro", h: "Keine Angst vor Fachwörtern", b: "Marketing steckt voller Fachbegriffe, oft auf Englisch. Dahinter stehen meist **einfache Ideen**. Wir begleiten die **Bäckerei Krume** aus Leipzig und lernen dabei die wichtigsten Wörter. **Tipp:** Gepunktet unterstrichene Wörter kannst du antippen – dann erscheint eine kurze Erklärung." },
```
Nach der ersten abgeschlossenen Lektion einmalig eine Karte auf Start zeigen (wird mit `S.set.hilfeGefragt = 1` gemerkt):
```js
${S.lek.grundwortschatz && !S.set.hilfeGefragt ? `<a class="cont" href="#einstellungen" onclick="S.set.hilfeGefragt=1;save()" style="margin-bottom:10px"><div class="thumb" style="background:linear-gradient(135deg,#2b8a3e,#1864ab)">${ic("bolt")}</div><div><b style="font-size:1rem">Lernhilfen einstellen</b><div class="small muted">Fokusmodus, Pausen-Erinnerung, ruhige Darstellung – z. B. bei ADHS.</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>` : ""}
```

### P2-3 Der Lernplan rechnet mit Zusatz-Lektionen, gibt nur einen Wochenwert und verspricht zu viel
- **Fundstelle:** `app.js:264–267, 275`
- **Problem:** Beim Termin in 14 Tagen zeigt die App „Plan: etwa 25 Lektionen pro Woche, dann passt es bis zur Prüfung.“
  - `lessonsAll` enthält die zwei Lektionen des Zusatzmoduls Social Ads, das nicht geprüft wird.
  - Es gibt keinen Tageswert und keinen Puffer für Wiederholung und Probetests.
  - „dann passt es“ ist ein Versprechen, das die App nicht halten kann.
  - Die Lektionen pro Woche passen nicht zum Tagesziel, das in *Fragen* zählt.
- **Korrektur:**
```js
const kern = KERN(), kernAll = kern.reduce((s, m) => s + m.lektionen.length, 0), kernDone = kern.reduce((s, m) => s + lekDone(m), 0);
const offen = kernAll - kernDone, lernTage = dl > 3 ? dl - 3 : Math.max(1, dl); // letzte 3 Tage: nur wiederholen + Probetest
const proTag = dl > 0 && offen > 0 ? Math.ceil(offen / lernTage) : 0;
const planText = !dl || dl <= 0 ? "" : offen === 0 ? "Alle Lektionen geschafft. Jetzt: täglich „Üben“ und pro Woche zwei Probetests."
 : dl <= 3 ? "Endspurt: keine neuen Lektionen mehr – nur noch „Üben“, Zusammenfassungen und ein Probetest."
 : `Vorschlag: ${proTag} Lektion${proTag === 1 ? "" : "en"} pro Tag und danach „Üben“. Die letzten 3 Tage bleiben für Wiederholung und Probetests.`;
```

### P2-4 Es fehlen Endspurt, Zusammenfassungen je Modul („Das Wichtigste auf einen Blick“) und Lernkarten
- **Fundstelle:** `app.js:250` (`nextLesson` ist streng der Reihe nach), `app.js:291` (`viewModul`), `app.js:895` (`viewGlossar`)
- **Problem:** Person 3 hat 14 Tage und 48 offene Lektionen. „Weiterlernen“ startet trotzdem den Grundwortschatz.
  - Es gibt keine kompakte Wiederholung pro Modul und keinen Spickzettel.
  - Das Glossar ist nur eine Liste: ohne deutsche Übersetzung in der Liste, ohne Filter nach Modul und ohne Lernkarten-Modus (Vorderseite Begriff, Rückseite Erklärung).
  - Merke-Karten gibt es nur in 28 von 50 Lektionen (unt: 6 von 14). Daraus allein lässt sich keine vollständige Zusammenfassung bauen.
- **Korrektur:**
  1. **„Das Wichtigste auf einen Blick“** je Modul als neue Route `#kompakt-<modul>`, verlinkt in `viewModul` über dem Modul-Quiz. Inhalt: alle Merke-Karten sowie die Überschriften und Punkte der Überblick-Karten des Moduls, danach die Formeln. In den 22 Lektionen ohne Merke-Karte je eine ergänzen (Liste: `node` über `MODULE` → `!l.folien.some(f => f.k === "merke")`).
  ```js
  function viewKompakt(id) {
   const m = modById(id); if (!m) return viewStart();
   const teile = m.lektionen.flatMap(l => l.folien.filter(f => f.k === "merke" || f.k === "liste").map(f => `<div class="card"><span class="small muted">${esc(l.titel)}</span>${f.k === "liste" ? `<b>${md(f.h)}</b><ul class="small">${f.l.map(x => `<li>${md(x)}</li>`).join("")}</ul>` : `<p style="margin:4px 0 0">${md(f.b)}</p>`}</div>`));
   page("start", `<a class="back" href="#modul-${id}">${ic("left")} ${esc(m.kurz)}</a><h1>Das Wichtigste: ${esc(m.name)}</h1>${teile.join("")}`);
   linkTerms($("#app"));
  }
  ```
  2. **Lernkarten-Modus im Glossar** („Begriffe üben“): Begriff zeigen → antippen → `de` und `d` zeigen → „Wusste ich“ / „Noch nicht“. Die Antwort geht über `grade("g:" + g.w, ok)` in das vorhandene Leitner-System. `POOL_KEYS` muss dafür die Glossar-Schlüssel kennen. Filter: „nur Modul …“.
  3. **Endspurt ab 21 Tagen vor dem Termin:** Auf Start wechselt der Hauptknopf zu „Endspurt heute“: zuerst Üben (Fehler und fällige Fragen), dann die nächste ungelesene Lektion des **schwächsten Moduls** laut letztem Probetest (siehe P2-5), zuletzt zwei Freitext-Fragen.

### P2-5 Der Probetest mischt die Module nicht gleichmäßig, und die Auswertung zeigt keine Stärken und Schwächen
- **Fundstelle:** `app.js:590–594` (Ziehung der Fragen), `app.js:652–668` (`viewAuswertung`)
- **Problem:**
  - Die Fragen werden rein zufällig gezogen. In einem Lauf kamen je 6× Web 2.0 und Controlling dran, aber nur 3× Einbettung als MC. Freitext-Fragen können doppelt aus einem Modul stammen.
  - Das ist weniger realistisch als ein Test, der alle sechs Themenbereiche abdeckt.
  - Die Auswertung sagt nur „Noch nicht bestanden (31 %)“ und listet falsche MC-Fragen. Es fehlt die Antwort auf die eigentliche Frage von Person 3: *Was muss ich jetzt lernen?*
  - Vor der Freitext-Bewertung zeigt die App groß einen roten Ring mit „17 %“. Das demotiviert, obwohl noch Punkte fehlen.
- **Korrektur:**
```js
// app.js #go: gleichmäßig nach Modul ziehen (25 MC: 4 je Modul + 1 Rest; 5 Freitexte aus 5 verschiedenen Modulen)
const mods = KERN().map(m => m.id), pick = (a, n) => shuf(a).slice(0, n);
const mcAll = pool.filter(q => q.t !== "frei");
let mc = mods.flatMap(id => pick(mcAll.filter(q => q.m === id), Math.floor(nMC / mods.length)));
mc = [...mc, ...pick(mcAll.filter(q => !mc.includes(q)), nMC - mc.length)];
const fr = shuf(mods).slice(0, nFr).map(id => pick(pool.filter(q => q.t === "frei" && q.m === id), 1)[0]).filter(Boolean);
const ids = shuf([...mc, ...fr]).map(q => q.key);
```
```js
// app.js viewAuswertung(), nach dem Ergebnis-Block (nur wenn sc.allRated)
const proMod = KERN().map(m => { const ix = qs.map((_, i) => i).filter(i => qs[i].m === m.id);
 const ok = ix.filter(i => qs[i].t === "frei" ? (r.rated[i] ?? 0) >= .5 : istRichtig(qs[i], r.ans[i])).length;
 return { m, ok, n: ix.length, p: ix.length ? ok / ix.length : 1 }; }).filter(x => x.n).sort((a, b) => a.p - b.p);
`<div class="sec-h"><h2>Nach Themen</h2></div><div class="card">${proMod.map(x => `<div class="row" style="justify-content:space-between"><span>${esc(x.m.kurz)}</span><b>${x.ok} von ${x.n}</b></div>`).join("")}
 <p class="small" style="margin-top:8px">Am meisten bringt jetzt: <a href="#kompakt-${proMod[0].m.id}">${esc(proMod[0].m.kurz)} wiederholen</a> und das <a href="#quiz-${proMod[0].m.id}">Modul-Quiz</a>.</p></div>`
```
Vor der Freitext-Bewertung den Ring neutral färben und die Zahl ersetzen:
```js
${!sc.allRated ? `<b style="font-size:1rem">MC ${sc.mc}/${sc.mcN}</b>` : `<b>${sc.pct}%</b>`}
```

### P2-6 Die Freitext-Musterlösung ist nur eine Stichwortliste, und die Selbstbewertung lenkt zu „Richtig“
- **Fundstelle:** `app.js:487–490` (`musterHtml`), `app.js:512–517` (Bewertungsknöpfe)
- **Problem:**
  1. Die Musterlösung besteht aus nackten Stichpunkten, z. B. „Urheberin nennen“. Sie zeigt nicht, **wie eine volle Antwort mit Begründung aussieht**, obwohl die Tipp-Box genau das fordert („Begründen: immer das Warum“).
  2. „Richtig“ ist als einziger Knopf farbig hervorgehoben. „Daneben“ und „Teilweise“ sind blass. Das schiebt zur milden Selbstbewertung, und die App weiß selbst, dass diese meist zu mild ausfällt (`app.js:261`).
  3. Man kann die Lösung mit leerem Feld abrufen. Ohne eigenen Versuch fehlt der Abruf-Effekt.
  4. Die automatische Erkennung („erkannt: 2 von 5“) fließt nicht als Vorschlag in die Bewertung ein.
- **Korrektur:**
```js
// Knöpfe gleichwertig, Vorschlag aus der Erkennung vormarkieren
const n = freiMatch(q, txt).filter(Boolean).length, vorschlag = n >= q.min ? 2 : n >= Math.ceil(q.min / 2) ? 1 : 0;
`<p class="rate-q">Wie gut war deine Antwort? <span class="small muted">Vorschlag nach Stichwörtern: ${["Daneben", "Teilweise", "Richtig"][vorschlag]}</span></p>
<div class="row rate-row">${["Daneben", "Teilweise", "Richtig"].map((t, k) => `<button type="button" class="btn ghost ${k === vorschlag ? "sel" : ""}" data-r="${k}" style="flex:1">${t}</button>`).join("")}</div>`
```
```js
// leeres Feld: Knopftext ändern statt sperren (kein Zwang, aber ein Anstoß)
$("#ftxt").oninput = () => $("#show").textContent = $("#ftxt").value.trim() ? "Musterlösung anzeigen" : "Ohne eigene Antwort zur Lösung";
// Feld mit so vielen Spiegelstrichen vorbelegen, wie Punkte gefordert sind
$("#ftxt").placeholder = Array.from({ length: q.min }, (_, i) => `${i + 1}. …`).join("\n");
```
Optional in den Daten pro Freitext-Frage ein Feld `bsp` mit einer ausformulierten Beispielantwort für volle Punktzahl, die unter der Liste erscheint. Beispiel für die UGC-Frage:
```js
bsp: "• Rechte klären: Die Kundin ist Urheberin – ich frage per Direktnachricht, ob wir das Foto nutzen dürfen, weil ohne Erlaubnis eine Urheberrechtsverletzung droht.\n• Umfang festhalten: Kanäle, Dauer, auch Werbung? Zustimmung als Screenshot speichern.\n• Personen auf dem Foto: Sind sie erkennbar, brauche ich auch deren Einwilligung (Recht am eigenen Bild).\n• Urheberin nennen, z. B. „Foto: @name“.\n• Sicherer Weg: Repost- oder Teilen-Funktion der Plattform statt erneutem Hochladen."
```

### P2-7 Die Reihenfolge folgt der Broschüre, aber nicht dem laufenden Vorlesungsplan. „Social Media Relations“ und „Online Reputation“ fehlen
- **Fundstelle:** `data/kurs.js:472–477` (Reihenfolge), `kurs.js:414` (Lektion `influencer`, nur 4 Karten), `app.js:721` („Die App folgt genau dieser Gliederung“)
- **Problem:** Die Reihenfolge innerhalb der Module ist sinnvoll: Grundwortschatz → Web 2.0 → Rolle → Chancen; Konzeption → Strategie → Analyse → Ziele → Persona. Die Vorlesungen laufen aber anders:
  - KW48 Influencer & Social Media Relations: in der App Lektion 13 von 14 im Modul „Einbettung“
  - KW49 Anwendungsfelder: in der App Modul 1
  - KW51 Governance
  - KW02 Recht
  - KW03 Auswertungen
  - KW04 Content/Community
  - KW05 Reputation/Krise

  Wer passend zur Vorlesung lernen will, muss suchen. Für **Social Media Relations** und **Online-Reputationsmanagement** gibt es keine Lektion und keinen Glossar-Eintrag (0 Treffer). Die Influencer-Lektion ist mit 4 Karten die dünnste, obwohl genau dieses Thema als Nächstes kommt (23.11.2026). Mit 14 Lektionen ist das Modul „Einbettung“ außerdem für Person 2 unübersichtlich lang, und es gibt zwei ähnliche Paare: `ressourcen`/`budget` und `community`/`krise`.
- **Korrektur:**
  1. Eine Karte „Diese Woche in der Vorlesung“ auf der Lehrgang-Seite oder auf Start (über dem Hero), gesteuert über eine Tabelle:
  ```js
  const VORLESUNG = [ // KW-Montag → Thema → passende Lektionen
   ["2026-11-23", "Influencer Marketing und Social Media Relations", ["unt/influencer", "unt/smr"]],
   ["2026-11-30", "Anwendungsfelder des Social Media Managements", ["einf/einsatz", "einf/chancen", "unt/recruiting"]],
   ["2026-12-07", "Aufbau einer Social Media Strategie", ["unt/konzeption", "unt/strategie", "unt/analyse", "unt/ziele", "unt/persona"]],
   ["2026-12-14", "Unternehmensintegration und Social Media Governance", ["unt/einbettung", "unt/organisation", "unt/governance", "unt/governance-zugaenge"]],
   ["2027-01-11", "Rechtsfragen im Social Web", ["recht/rechtsgebiete", "recht/impressum", "recht/bildrechte", "recht/ugc-recht", "recht/datenschutz", "recht/dsgvo"]],
   ["2027-01-18", "Auswertungen in Social Media", ["kpi/kennzahlen", "kpi/kennzahlenmodelle", "kpi/daten", "kpi/report", "kpi/erfolg"]],
   ["2027-01-25", "Content- und Community Management", ["unt/content-strategie", "plan/redaktion", "plan/content-journey", "plan/community"]],
   ["2027-02-01", "Online Reputation- und Krisenmanagement", ["plan/krise", "plan/reputation"]]
  ];
  ```
  (Die Daten stammen aus dem Foto des Vorlesungsplans: KW-Montage, nicht offiziell bestätigt. In der App als „laut deinem Vorlesungsplan“ kennzeichnen.)
  2. Neue Lektion zu Social Media Relations (die Lektion `reputation` analog dazu):
  ```js
  smr: { id: "smr", titel: "Social Media Relations", min: 3, folien: [
   { k: "intro", h: "Beziehungen statt Werbeflächen", b: "**Social Media Relations** heißt: langfristige Beziehungen zu Menschen pflegen, die im Netz Gehör finden – Creator, Blogger, Fachleute, Journalistinnen. Anders als beim bezahlten Influencer-Posting steht der **Austausch** im Mittelpunkt." },
   { k: "liste", h: "Typische Maßnahmen", l: ["Relevante Personen finden und beobachten (Monitoring)", "Exklusive Infos, Einladungen zu Events, Produkttests", "Auf Beiträge reagieren, Fragen schnell beantworten", "Ehrlich bleiben: kein Druck, keine gekaufte Meinung"] },
   { k: "text", h: "Abgrenzung", b: "**Influencer-Marketing** ist meist eine bezahlte Kooperation mit Vertrag und Werbekennzeichnung. **Social Media Relations** ist Beziehungspflege – ähnlich wie Pressearbeit. Bekommt jemand ein Produkt geschenkt und berichtet darüber, gilt trotzdem: kennzeichnen." },
   { k: "check", q: "Was unterscheidet Social Media Relations vom klassischen Influencer-Marketing?", a: ["Langfristige Beziehungspflege statt einzelner bezahlter Posts", "Es gibt keine Regeln zur Werbekennzeichnung", "Man arbeitet nur mit sehr großen Accounts", "Es geht nur um Anzeigen in sozialen Netzwerken"], c: 0, e: "Social Media Relations ähnelt der Pressearbeit: Vertrauen und Austausch über längere Zeit. Werbekennzeichnung gilt trotzdem, sobald es eine Gegenleistung gibt." },
   { k: "merke", h: "Erst Beziehung, dann Bitte", b: "Wer nur dann schreibt, wenn er etwas will, wird ignoriert. **Zuerst zuhören und Mehrwert bieten.**" }
  ]}
  ```
  3. Die Modulansicht von `unt` in drei Zwischenüberschriften gliedern: „Strategie & Ziele“ (konzeption … persona), „Ressourcen & Organisation“ (ressourcen … governance-zugaenge), „Inhalte & Menschen“ (content-strategie, influencer, smr, recruiting). Dafür ein optionales Feld `abschnitt` an der ersten Lektion jedes Blocks setzen und es in `viewModul` als `<li class="sec">` ausgeben.
  4. Ersatztext `app.js:721`:
  ```js
  <li><b>Sechs Themenbereiche</b><span>Routenplaner Web 2.0 · Plattformen & Tools · Einbettung ins Unternehmen · Recht · Monitoring & Controlling · Planung & Umsetzung. Die App ist nach dieser Gliederung aufgebaut. Die Vorlesungen können eine andere Reihenfolge haben – unter „Diese Woche in der Vorlesung“ findest du die passenden Lektionen.</span></li>
  ```

### P2-8 Falsche Angabe „Abschlussprojekt“
- **Fundstelle:** `data/kurs.js:177` (Lektion `recht/datenschutz`, Merke-Karte)
- **Problem:** „Recht ist im Abschlussprojekt ein eigener Baustein …“. Laut Broschüre gibt es kein Abschlussprojekt, sondern Hausaufgaben je Themenbereich und einen Abschlusstest. Das verunsichert und ist sachlich falsch.
- **Korrektur:**
```js
{ k: "merke", h: "Vor jedem Post kurz prüfen", b: "Impressum da? Werbung gekennzeichnet? Rechte an Bild, Musik und Text geklärt? Datenschutz beachtet? Bei Gewinnspielen Teilnahmebedingungen, bei KI-Inhalten Kennzeichnung." },
```

### P2-9 „Sicher bestanden“ und „dann passt es“ versprechen zu viel
- **Fundstelle:** `app.js:660`, `app.js:275`
- **Problem:** Die Bestehensgrenze ist eine Annahme, und die Freitexte bewertet die Person selbst. „Sicher bestanden (72 %)“ ist deshalb eine Übertreibung, die der eigenen Kennzeichnung der App widerspricht.
- **Korrektur:**
```js
sc.pct >= ZIEL ? `Ziel erreicht (${sc.pct} %)` : sc.pct >= PASS ? `Über der angenommenen Grenze (${sc.pct} %)` : `Noch unter der angenommenen Grenze (${sc.pct} %)`
```
Für `app.js:275` siehe den Ersatztext in P2-3.

### P2-10 Einige Karten sind zu textlastig oder zu juristisch für Einsteiger
- **Fundstelle:**
  - `data/lektionen3.js:83` „Hochladen, Teilen, Einbetten“ (70 Wörter)
  - `lektionen3.js:94` „Korrelation ≠ Kausalität“ (63 Wörter)
  - `recht/datenschutz` „KI-Inhalte“ (62 Wörter)
  - `recht/ugc-recht` „Haftung für Kommentare“ (58 Wörter)
  - `kpi/daten` „Definitionen ändern sich“ (57 Wörter)
  - `lektionen3.js:59` „Betriebsrat bei Tools“ (Paragrafenkette und Aktenzeichen „1 ABR 7/15“)
- **Problem:** Auf dem iPhone passen diese Karten nur noch knapp auf den Schirm (Schriftgröße „Normal“). Ein Absatz mit drei Gedanken überfordert Person 1 und Person 2. Aktenzeichen und Daten von Urteilen sind für einen 60-Minuten-Test mit Multiple Choice und kurzen Freitexten kaum prüfungsrelevant. Sie erhöhen aber die Lesezeit.
- **Korrektur:** Längere Karten (über 50 Wörter) auf zwei Karten aufteilen und Fundstellen in eine kleine Zeile „Quelle:“ verschieben. Fertige Ersatztexte:
```js
{ k: "text", h: "Hochladen = selbst veröffentlichen", b: "Wer ein fremdes Foto oder Video **herunterlädt und neu hochlädt**, veröffentlicht es selbst. Dafür braucht es die **Zustimmung** der Person, der die Rechte gehören." },
{ k: "text", h: "Teilen und Einbetten", b: "Die **Teilen- oder Repost-Funktion** der Plattform und das **Einbetten** zeigen auf das Original. Das ist meist weniger riskant – aber nicht in jedem Fall geklärt. Für **Werbung** mit fremden Inhalten immer ausdrücklich fragen." },
```
```js
{ k: "text", h: "Gleichzeitig heißt nicht deshalb", b: "Steigen zwei Werte zusammen, verursacht nicht unbedingt der eine den anderen. Beispiel: Im Dezember steigen Interaktionen **und** Umsatz – der Grund kann einfach **Weihnachten** sein." },
{ k: "text", h: "Ursachen prüfen", b: "Besser: **A/B-Test** oder **Vergleichsgruppe** (z. B. eine Region mit, eine ohne Kampagne). **UTM-Links** zeigen, über welchen Beitrag jemand in den Shop kam – das ist ein Hinweis, noch kein Beweis." },
```
```js
{ k: "text", h: "Betriebsrat bei Tools", b: "Kann ein Tool **Verhalten oder Leistung** von Mitarbeitenden überwachen, darf der Betriebsrat **mitbestimmen** – auch wenn niemand überwachen will. Das gilt z. B. für Besucher-Beiträge auf einer Facebook-Seite oder Tools mit Bearbeiter-Statistiken.\n\n_Quelle: § 87 Abs. 1 Nr. 6 BetrVG; BAG, 1 ABR 7/15_" },
```

---

## P3 – Feinschliff

### P3-1 Schritt für Schritt teilt am Doppelpunkt. Der „Weiter“-Knopf unterscheidet nicht zwischen Satz und Karte
- **Fundstelle:** `app.js:324` (`saetze`: Regex `(?<=[.!?:])`), `app.js:362` („Weiter“ in beiden Fällen)
- **Problem:** Es entstehen Bruchstücke wie „**B2B** heißt:“, „Rechtlich gilt aber:“ und „Unbekanntes Wort?“ als eigene Schritte. Der Grundwortschatz braucht 30 Tipper für 8 Karten. Person 2 weiß nicht, ob noch Sätze kommen oder die nächste Karte. Die Segmentleiste oben zählt nur Karten.
- **Korrektur:** Nur an `.!?` trennen. Solange Teile verborgen sind, heißt der Knopf „Mehr (2)“ und die Karte bekommt unten kleine Punkte für die verbleibenden Teile:
```js
const saetze = t => stepOn() ? t.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„*(])/).map((x, n) => rv(md(x), n)).join(" ") : md(t);
// in draw(): const rest = $$(".rv.h", storyEl).length; if (rest) nb.innerHTML = `Mehr <span class="small">(${rest})</span>`;
```

### P3-2 Vorlesen liest im Modus Schritt für Schritt auch die noch verborgenen Sätze
- **Fundstelle:** `app.js:477` (Klon von `.slide` enthält `.rv.h`)
- **Korrektur:** Verborgene Teile aus dem Klon entfernen: `c.querySelectorAll(".rv.h").forEach(x => x.remove());`. Alternativ bewusst die ganze Karte lesen und dann alle Teile aufdecken. Wichtig ist nur, dass Ton und Bild übereinstimmen.

### P3-3 17 Merke-Karten tragen die Überschrift „Merke“ unter dem Etikett „MERKE“
- **Fundstelle:** z. B. `grundwortschatz`, `web20`, `rolle`, `fehler`, `insta-tiktok`, `kanalwahl`, `automatisierung`, `strategie`, `ressourcen`, `budget`, `organisation`, `bildrechte`, `datenschutz`, `benchmarking`, `content-journey`, `community`, `krise`
- **Problem:** Das ist doppelt und verschenkt die Überschrift als Merkhilfe. Für den Spickzettel aus P2-4 sind Überschriften mit einer Aussage deutlich nützlicher.
- **Korrektur (Beispiele):**
```js
{ k: "merke", h: "Fachwort = einfache Frage", b: "…" },            // grundwortschatz
{ k: "merke", h: "Dialog statt Sendung", b: "…" },                // web20
{ k: "merke", h: "Jede Maßnahme zahlt auf ein Ziel ein", b: "…" }, // rolle
{ k: "merke", h: "Lieber wenige Kanäle gut", b: "…" },            // fehler
{ k: "merke", h: "Routine automatisieren, Beziehung nicht", b: "…" }, // automatisierung
{ k: "merke", h: "Erst Analyse, dann Kanäle", b: "…" },           // strategie
{ k: "merke", h: "Kritik nicht löschen", b: "…" },                // krise
```

### P3-4 Der Kartenmix ist einseitig: 38 von 50 Lektionen ohne Beispiel-Karte, 49 von 50 mit nur einem Kurz-Check am Ende
- **Fundstelle:** `data/*` (Node-Auswertung der Kartentypen)
- **Problem:** Viele Text-Karten enthalten zwar ein Beispiel, aber der Wechsel Erklären → Beispiel → Check ist selten. Bei Lektionen mit 6–7 Karten kommt der Abruf erst ganz am Ende. Person 2 ist dann oft schon abgelenkt.
- **Korrektur:** Regel für neue und überarbeitete Lektionen: ab 6 Karten **ein Check in der Mitte** (nach Karte 3). Mindestens eine Karte vom Typ `beispiel` mit einem Fall aus dem Alltag (Krume, Handwerksbetrieb) oder einem realen Fall. Zuerst bei den Lektionen ohne `beispiel` im Recht-Modul (alle 6) und in `kpi/kennzahlen`, `kpi/erfolg`.

### P3-5 Das Tagesziel „0 von 15 Fragen“ ist beim Erststart unklar
- **Fundstelle:** `app.js:273`
- **Problem:** Person 1 steht vor einer Lektion, nicht vor einem Quiz. „Fragen“ passt erst, wenn klar ist, dass Kurz-Checks mitzählen.
- **Korrektur:**
```js
<b>${ok ? "Tagesziel geschafft ✓" : "Heute"}</b><span>${Math.min(h, g)} von ${g} Antworten</span>
// darunter einmalig, solange h === 0 && !hasProgress(S):
<p class="small" style="margin:4px 0 0;opacity:.85">Kurz-Checks in Lektionen und Quizfragen zählen mit.</p>
```

### P3-6 Die Ende-Karte jeder Lektion sagt nichts über das Gelernte
- **Fundstelle:** `app.js:359`
- **Problem:** „Lektion abgeschlossen. Weiter mit der nächsten Lektion?“ verschenkt die letzte Wiederholung. Für Person 2 ist das außerdem ein guter Pausenpunkt.
- **Korrektur:** Die Merke-Aussage der Lektion noch einmal zeigen und eine Pause anbieten:
```js
const mk = l.folien.find(f => f.k === "merke");
`<div class="body">${mk ? `<b>Das nimmst du mit:</b> ${md(mk.b)}<br><br>` : ""}${nextIn(m, l) ? "Weiter mit der nächsten Lektion – oder kurz Pause machen." : "Jetzt im Modul-Quiz festigen."}</div>`
```

### P3-7 Der Probetest hat für Freitext keine Zeitorientierung
- **Fundstelle:** `app.js:588` (Tipp-Box „So gehst du vor“)
- **Problem:** „Pro Frage grob 2 Minuten“ gilt nicht für Freitext. Wer bei Freitext sorgfältig schreibt, braucht 4–5 Minuten, also bei 5 Fragen etwa 20–25 Minuten.
- **Korrektur:**
```js
<li>Multiple Choice: etwa 1 Minute pro Frage. Freitext: 4–5 Minuten, in Stichpunkten. Freitexte lieber zuerst – sie bringen doppelte Punkte (Annahme).</li>
```

---

## Wie die drei Personen die App erleben (Kurzfassung)

| Person | Was gut funktioniert | Was hakt |
|---|---|---|
| Quereinsteigerin | Grundwortschatz mit Bäckerei-Geschichte, Begriffe antippbar, freundliche Rückmeldung bei „Nicht ganz.“, Glossar mit Beispielen | Gestapelte Klammern gleich auf Karte 2 (P2-1), kein Hinweis aufs Antippen (P2-2), einzelne Absatz- und Paragrafen-Karten (P2-10) |
| ADHS | Karten ohne Scrollen, Schritt für Schritt, ruhige Zeitanzeige im Test, freundlicher Wiedereinstieg nach Pause, Fehler kommen in derselben Runde noch einmal | Fokusmodus sperrt die Prüfung (P1-1), Lernhilfen schwer zu finden (P2-2), Bruchstück-Schritte und unklarer „Weiter“-Knopf (P3-1), Modul mit 14 Lektionen ohne Gliederung (P2-7) |
| Zwei Wochen vor dem Test | Probetest wie angekündigt (30/60, Markieren, Übersicht, Annahmen offen gelegt), falsche Antworten landen in „Üben“ | Kein Tagesplan oder Endspurt (P2-3, P2-4), keine Auswertung nach Themen (P2-5), keine Zusammenfassung und keine Lernkarten (P2-4), Musterlösungen ohne Beispielantwort (P2-6), Hausaufgaben-Typ fehlt (P1-2) |

**Sprache:** Durchgehend einfach, freundlich und in Du-Form. Annahmen sind klar markiert („Annahme“, „nicht offiziell bestätigt“) auf Start, in der Prüfung, beim Probetest und im Lehrgang. Ausnahmen: „Sicher bestanden“, „dann passt es“ und „Abschlussprojekt“ (P2-8, P2-9).

---

## Zusammenfassung

**Befunde:** P1: 2 · P2: 10 · P3: 7 (gesamt 19)

**Die 5 wichtigsten Empfehlungen**
1. **Freitext vom Typ „Erläutern + reales Beispiel“ trainieren** (P1-2): Lektion „Der virale Effekt“ mit realen Kampagnen, drei neue Freitext-Fragen und ein Hausaufgaben-Begleiter auf der Seite „Prüfung“.
2. **Fokusmodus reparieren** (P1-1): Karte „Prüfung üben“ auf Start, damit die ADHS-Zielgruppe den Probetest erreicht.
3. **Endspurt für die letzten Wochen** (P2-3, P2-4, P2-5): Tagesplan ohne Zusatzmodul, Probetest gleichmäßig nach Modulen gezogen, Auswertung „Nach Themen“ mit Link zum schwächsten Modul, „Das Wichtigste auf einen Blick“ je Modul, Lernkarten im Glossar.
4. **Freitext-Feedback ehrlicher machen** (P2-6): gleichwertige Bewertungsknöpfe mit Vorschlag aus der Erkennung, ausformulierte Beispielantwort, Antwortfeld mit Spiegelstrichen vorbelegt.
5. **Einstieg glätten und an der Vorlesung ausrichten** (P2-1, P2-2, P2-7): doppelte Übersetzungen entfernen, auf die antippbaren Begriffe hinweisen, Lernhilfen nach der ersten Lektion anbieten, „Diese Woche in der Vorlesung“ und neue Lektion „Social Media Relations“ vor dem 23.11.2026.
