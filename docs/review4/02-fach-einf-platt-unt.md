# Fachprüfung Module `einf`, `platt`, `unt` – SMM Coach 0.13.2

Prüfer: unabhängige Fachprüfung (Inhalte), Stand 06.11.2026
Grundlage: `MODULE` und `FRAGEN` aus `data/kurs.js` per Node geladen, also mit allen späteren Umsortierungen (Gliederung nach HSB-Kursinformation, `REGELN`-Umzug der Fragen), dazu `GLOSSAR` aus `data/glossar.js` mit `glossar2.js`.

**Geprüfter Umfang**
- `einf` (6 Lektionen): grundwortschatz, web20, rolle, chancen, einsatz, fehler
- `platt` (7 Lektionen): blogs-communitys, linkedin, insta-tiktok, kanalwahl, x-xing-facebook, tools, automatisierung
- `unt` (14 Lektionen): konzeption, strategie, analyse, einbettung, ziele, persona, ressourcen, budget, organisation, governance, governance-zugaenge, content-strategie, influencer, recruiting
- Folien: 150 (davon 27 Verständnis-Checks)
- Fragen: 173, davon 123 Einfach-MC, 22 Mehrfachantworten und 28 Freitext
- Glossar: 68 Einträge mit `m` ∈ {einf, platt, unt}

**Methode**
- Jede Folie, jede Frage und jeder Glossar-Eintrag wurde gelesen und fachlich bewertet.
- Plattform- und Rechtsfakten wurden im Web nachgeprüft (Quellen stehen bei den Befunden und im Anhang).
- Alle 28 Freitext-RegExps wurden mit Node an je einer guten, einer mittelmäßigen und einer falschen Antwort getestet, so wie die App sie auswertet: `new RegExp(muster, "i")`.
- Alle Ersatz-RegExps unten wurden mit denselben Antworten nachgetestet.
- Eine Längenanalyse der MC-Antworten ergab: Bei 22 von 150 Einfach-MC ist die richtige Antwort die längste. Das sind 15 % und damit weniger als bei Zufall (25 %). Die Länge verrät die Lösung also nicht systematisch.

**Hinweis zu Ersatzobjekten**
- Folien-Objekte haben das Format aus `kurs.js`.
- Frage-Objekte haben das Format der jeweiligen Quelldatei: `kurs.js` FREI ohne `quelle`, `fragen2.js` mit `quelle`, `mehrfach.js` ohne `quelle`.
- „Neu einfügen“ bedeutet, dass die Folie an der genannten Stelle ergänzt wird, z. B. per `folien.splice(…)` wie im bestehenden Ergänzungsblock von `kurs.js`.

---

## P1 – falsch, kaputt oder prüfungsschädlich

### B01 · P1 · Lektion `strategie`, Folie 0 „Von der Analyse zum Plan“ (`data/kurs.js`, ALT → grund → strategie)
**Problem:** „Genau diesen Ablauf zeigst du auch in deiner **Abschlusspräsentation**.“ Diese Prüfungsform gibt es im Lehrgang nicht. Der Satz führt Lernende in die Irre und widerspricht der Nutzervorgabe „kein Fachgespräch“.
**Beleg:** HSB-Kursinformation, S. „Hausaufgaben und Abschluss“: 60-minütiger IHK-Abschlusstest online mit 30 Fragen (Multiple Choice und Freitext). Eine Präsentation oder ein Fachgespräch ist nicht vorgesehen.
**Korrektur:**
```js
{ k: "intro", h: "Von der Analyse zum Plan", b: "Eine Social-Media-Strategie folgt einem klaren Ablauf. Diesen Ablauf brauchst du in den Hausaufgaben und im **Abschlusstest** – etwa bei Freitext-Fragen wie „Nennen Sie die Schritte …“." }
```

### B02 · P1 · Freitext „Vergleichen Sie LinkedIn und TikTok …“ (`data/fragen2.js` ~Z. 1230)
**Problem:** `muster[0]` („LinkedIn: berufliche Zielgruppe, Fach- und Führungskräfte, B2B“) hat eine kopierte RegExp von `muster[1]` (`fachwissen|fachbeitr|…`). Die LinkedIn-Zielgruppe wird deshalb nie erkannt. Jedes Wort wie „Fachwissen“ zählt dafür doppelt.
**Test (vorher):**
- gut 6/4
- mittel („berufliche Kontakte und B2B, TikTok für junge Leute mit Videos“) **2/4**, obwohl die Zielgruppe genannt ist
- falsch („Beide sind soziale Netzwerke mit Videos und Fachwissen-Artikeln“) **3/4**

**Test (nachher):** gut 6/4 · mittel 3/4 · falsch 2/4
**Korrektur:**
```js
{
"m": "platt",
"t": "frei",
"q": "Vergleichen Sie LinkedIn und TikTok hinsichtlich Zielgruppe, typischer Inhalte und passender Unternehmensziele.",
"muster": [
["LinkedIn: berufliche Zielgruppe, Fach- und Führungskräfte, B2B", "beruf|fachkr|führungskr|b2b|business|karriere|professional|entscheider"],
["LinkedIn-Inhalte: Fachwissen, Einblicke, Texte/Dokumente", "fachwissen|fachbeitr|expert|dokument|karussell|artikel|text"],
["TikTok: eher junge Zielgruppe", "jung|gen ?z|jugend|schüler|teen"],
["TikTok-Inhalte: kurze, authentische, unterhaltsame Videos", "kurzvideo|video|authent|unterhalt|trend"],
["TikTok: Ausspielung nach Interesse, Reichweite auch ohne viele Follower", "interess|algorithm|für dich|fyp|ohne (viele )?follower"],
["Ziele: LinkedIn Recruiting/Leads/Expertise – TikTok Bekanntheit/Azubi-Recruiting", "recruit|lead|bekannt|azubi|ausbild|image|reichweit"]
],
"min": 4,
"quelle": ""
}
```

### B03 · P1 · Freitext „Was versteht man unter Employer Branding? …“ (`data/fragen2.js` ~Z. 1394)
**Problem:** `muster[4]` („Reaktion auf Arbeitgeberbewertungen / Candidate Experience“) prüft auf `\bwerte\b|unternehmenswert|kultur|mission|benefit`. Das ist fast dieselbe RegExp wie `muster[5]` („Werte und Kultur“).
- Wer „auf kununu-Bewertungen antworten“ schreibt, bekommt den Punkt nicht.
- Wer „Werte“ schreibt, bekommt ihn doppelt.

**Test (vorher):** gut [111101] (Bewertungen nicht erkannt)
**Test (nachher):** gut 6/3 · mittel 2/3 · falsch 1/3
**Korrektur:**
```js
{
"m": "unt",
"t": "frei",
"q": "Was versteht man unter Employer Branding? Nennen Sie drei Social-Media-Maßnahmen, die es unterstützen.",
"muster": [
["Aufbau einer attraktiven Arbeitgebermarke / EVP", "arbeitgebermarke|arbeitgeber|evp|value proposition|image als"],
["Authentische Einblicke in Team und Arbeitsalltag", "einblick|alltag|team|hinter den kulissen|behind"],
["Mitarbeitende als Botschafter / Corporate Influencer", "botschaft|corporate influencer|mitarbeit|advocacy|azubi"],
["Stellenanzeigen / Social Ads mit Targeting", "stellenanzeig|stellenangebot|jobanzeig|anzeige|\\bads\\b|targeting|\\bjobs?\\b"],
["Reaktion auf Arbeitgeberbewertungen / Candidate Experience", "bewertung|kununu|glassdoor|candidate experience|bewerbungsprozess|rückmeld|schnell (antwort|reagier)"],
["Werte und Kultur zeigen", "wert|kultur|mission|benefit|vorteil"]
],
"min": 3,
"quelle": ""
}
```

---

## P2 – deutlich verbesserungswürdig

### B04 · P2 · Widerspruch Hub-and-Spoke: Lektion `organisation`, Folie 0 „Wer macht Social Media?“ und Glossar „Hub-and-Spoke“ (`data/glossar.js` Z. 35) gegenüber Mehrfachfrage „Was trifft auf das Hub-and-Spoke-Modell … zu?“ (`data/mehrfach.js` Z. 26)
**Problem:** Die Quellen beschreiben die Rolle der Fachabteilungen unterschiedlich:
- Lektion und Glossar: Die Fachabteilungen (Spokes) „liefern Inhalte zu“. Das klingt, als poste nur der Hub.
- Mehrfachfrage: Als **richtig** gilt „Abteilungen oder Standorte posten selbst im vorgegebenen Rahmen“.

Wer die Lektion gelernt hat, kreuzt diese Antwort eher nicht an. Außerdem fragt „Ein Konzern hat mehrere Marken …“ nach *Multiple Hub-and-Spoke*, das nirgends gelehrt wird.
**Beleg:** Altimeter/Owyang (2010), „Social Business Readiness“: Beim Hub-and-Spoke-Modell unterstützt ein funktionsübergreifendes Zentralteam die Geschäftseinheiten, die Einheiten setzen selbst um. Owyang nennt fünf Modelle: dezentral, zentral, Hub-and-Spoke, Multiple Hub-and-Spoke („Dandelion“) und holistisch („Honeycomb“).
**Korrektur Folie** (ersetzt `organisation` Folie 0):
```js
{ k: "text", h: "Wer macht Social Media?", b: "**Zentral:** ein Team steuert alles – einheitlich, aber weit weg von den Fachabteilungen.\n**Dezentral:** jede Abteilung macht selbst – nah dran, aber uneinheitlich.\n**Hub-and-Spoke:** ein Zentralteam (Hub) setzt Standards, schult und koordiniert; Abteilungen (Spokes) liefern zu oder posten im vorgegebenen Rahmen selbst – der häufigste Kompromiss. Konzerne nutzen oft **mehrere Hubs**, z. B. je Marke oder Land." }
```
**Korrektur Glossar:**
```js
{ w: "Hub-and-Spoke", m: "unt", d: "Organisationsmodell: ein zentrales Team (Hub) setzt Standards, schult und koordiniert; Fachabteilungen oder Standorte (Spokes) liefern Inhalte zu oder posten im vorgegebenen Rahmen selbst. Bei mehreren Marken oder Ländern: Multiple Hub-and-Spoke mit mehreren Hubs." }
```
(Ersetzt `glossar.js` Z. 35 vollständig. `de` und `syn` kommen weiterhin aus `SYN_ALT` in `glossar2.js`.)

### B05 · P2 · Freitext „Beschreiben Sie die Organisationsmodelle zentral, dezentral und Hub-and-Spoke …“ (`data/kurs.js`, FREI)
**Problem:**
- `zentral` trifft auch auf „**de**zentral“. „Dezentral ist gut.“ bekommt deshalb 2 von 3 Punkten.
- Die geforderten Vor- und Nachteile werden gar nicht geprüft.
- Das Beschriftungsfeld des dritten Punkts übernimmt den Lektionsfehler aus B04.

**Test (vorher):** gut 3/3 · mittel 2/3 · falsch („Dezentral ist gut.“) **2/3**
**Test (nachher):** gut 4/4 · mittel 1/4 · falsch 1/4 · nur Modellnamen ohne Bewertung 3/4 (nicht bestanden)
**Korrektur:**
```js
{m:"unt",t:"frei",q:"Beschreiben Sie die Organisationsmodelle zentral, dezentral und Hub-and-Spoke mit je einem Vor- oder Nachteil.",muster:[["Zentral: ein Team steuert alles – einheitlich, aber fern der Fachabteilungen","(^|[^e])zentral"],["Dezentral: Abteilungen posten selbst – nah dran, aber uneinheitlich","dezentral"],["Hub-and-Spoke: Zentrum setzt Standards und koordiniert, Abteilungen setzen im Rahmen um – Kompromiss","hub|spoke|nabe|speiche"],["Je Modell ein Vor- oder Nachteil (z. B. einheitlich, nah dran, Kompromiss)","einheitlich|konsisten|kontroll|nah|fern|weit weg|distanz|langsam|engpass|flexib|kompromiss|abstimm|fachwissen"]],min:4}
```

### B06 · P2 · Freitext „Erklären Sie den Unterschied zwischen Web 1.0 und Web 2.0.“ (`data/kurs.js`, FREI)
**Problem:** Die Wörter `teil`, `inhalte`, `nutzer` und `viele` sind zu allgemein. „Teil“ steckt z. B. auch in „Vor**teil**“. Die falsche Antwort „Web 2.0 ist schneller und hat mehr Inhalte und viele Videos.“ erreicht deshalb **2/2** und gilt als voll bestanden. Gleichzeitig werden „interagieren“ und „kommentieren“ nicht erkannt, weil die RegExp nur `interakt` und `kommentar` enthält.
**Test (nachher):**
- gut 3/2
- mittel („Mitmach-Web“) 1/2
- falsch 0/2
- „Früher statische Seiten, heute können alle selbst posten und kommentieren.“ 3/2
**Korrektur:**
```js
{m:"einf",t:"frei",q:"Erklären Sie den Unterschied zwischen Web 1.0 und Web 2.0.",muster:[["Web 1.0: Anbieter veröffentlichen, Nutzer lesen nur","lesen|gelesen|passiv|statisch|anbieter|einbahn|konsum|one.to.many|redaktion"],["Web 2.0: Nutzer erstellen und teilen selbst Inhalte","erstell|mitmach|user.?generated|\\bugc\\b|prosum|selbst[\\s\\S]{0,30}(inhalt|post|veröffentlich|schreib|teil)|nutzer[\\s\\S]{0,40}(erstell|teil|post|schreib|veröffentlich|produzier)"],["Interaktion / Dialog, viele mit vielen","interakt|interag|dialog|many|komment|austausch|vernetz|miteinander"]],min:2}
```

### B07 · P2 · Freitexte „Wie würden Sie entscheiden, welche Plattformen …“ (platt) und „Nennen Sie die Schritte zur Planung einer Social-Media-Strategie …“ (unt) (`data/kurs.js`, FREI)
**Problem:** Die RegExp `ziel` trifft auch auf „**Ziel**gruppe“. Ein einziges Wort bringt so zwei Punkte.
- Plattformen: Die mittelmäßige Antwort „Ich schaue, wo meine Zielgruppe ist.“ erreicht 2/3.
- Schritte: Die falsche Antwort „Zielgruppe, Logo, Hashtags, Gewinnspiel …“ erreicht 2/5.
Abhilfe schafft ein negativer Lookahead `ziel(?!grupp)`. Den unterstützen alle Browser, anders als Lookbehind.

**Test (nachher):**
- Plattformen: gut 3/3 · mittel 1/3 · falsch 1/3
- Schritte: gut 7/5 · mittel 3/5 · falsch 1/5
**Korrektur:**
```js
{m:"platt",t:"frei",q:"Wie würden Sie entscheiden, welche Plattformen ein Unternehmen nutzt? Nennen Sie mindestens drei Kriterien.",muster:[["Wo ist die Zielgruppe aktiv?","zielgrupp|persona"],["Passt die Plattform zum Ziel?","ziel(?!grupp)|zweck"],["Passen Format und Inhalte (Video, Bild, Text)?","format|inhalt|video|bild"],["Reichen Zeit, Personal und Budget?","ressourc|zeit|personal|budget"],["Was macht der Wettbewerb?","wettbewerb|konkurrenz"]],min:3}
```
```js
{m:"plan",t:"frei",q:"Nennen Sie die Schritte zur Planung einer Social-Media-Strategie in sinnvoller Reihenfolge.",muster:[["Analyse der Ausgangslage","analys|ist-|ausgangs|status.quo|audit"],["Ziele (SMART)","ziel(?!grupp)|smart"],["Zielgruppe / Persona","zielgrupp|persona"],["Kanäle auswählen","kanal|kanäle|plattform"],["Inhalte & Redaktionsplan","inhalt|content|redaktion"],["Budget & Ressourcen","budget|ressourc"],["Erfolgsmessung / KPIs","kpi|mess|kennzahl|erfolg"]],min:5}
```
(Im Quelltext steht `m:"plan"`. Die App setzt per `REGELN` zur Laufzeit `unt`. Daher bleibt `plan` hier stehen.)

### B08 · P2 · Freitext „Nennen Sie drei Risiken von Social Media für Unternehmen und je eine Gegenmaßnahme.“ (`data/fragen2.js` ~Z. 1171)
**Problem:** Die Frage verlangt ausdrücklich Gegenmaßnahmen. Die RegExps bestehen aber zu vier Fünfteln aus Risiko-Mustern, dazu `min: 3`. „Shitstorm, viel Aufwand, Abmahnungen.“ besteht also ohne eine einzige Gegenmaßnahme mit 3/3.
**Test (nachher, `min: 4`, Gegenmaßnahmen-Muster erweitert):** gut 4/4 · mittel (nur Risiken) 3/4, nicht bestanden · falsch 0/4
**Korrektur:**
```js
{
"m": "einf",
"t": "frei",
"q": "Nennen Sie drei Risiken von Social Media für Unternehmen und je eine Gegenmaßnahme.",
"muster": [
["Kontrollverlust / Shitstorm → Monitoring, Krisenplan", "kontroll|shitstorm|kritik|krise"],
["Hoher Zeit- und Personalaufwand → Planung, Ressourcen, Redaktionsplan", "aufwand|zeit|ressourc|personal"],
["Rechtsverstöße → Schulung, Guidelines, Prüfung", "recht|abmahn|urheber|datenschutz|impressum"],
["Abhängigkeit von Plattform/Algorithmus → eigene Kanäle (Website, Newsletter)", "abhängig|algorithm|plattform|eigene kanäle|newsletter|website"],
["Je Risiko eine Gegenmaßnahme (Monitoring, Krisenplan, Guidelines, Schulung, Redaktionsplan, eigene Kanäle)", "monitor|krisenplan|guideline|richtlinie|schul|leitfad|redaktionsplan|planung|vertretung|prüf|eigene (kanäle|website)|newsletter"]
],
"min": 4,
"quelle": ""
}
```

### B09 · P2 · Freitext „Beschreiben Sie eine Persona für ein Unternehmen Ihrer Wahl …“ (`data/kurs.js`, FREI)
**Problem:** Eine gute Antwort im Stil der eigenen Lektions-Persona fällt durch: „Lena, 17, Schülerin in Leipzig, möchte eine Ausbildung, Problem: unsicher, nutzt TikTok abends.“ erreicht nur **2/3**.
- Alter als Zahl, „Schülerin“ und „möchte“ werden nicht erkannt.
- `ziel` trifft wieder auf „Zielgruppe“, so bekommt die falsche Antwort „Unsere Zielgruppe sind alle …“ einen Punkt.

**Test (nachher):** gut 4/3 · mittel („Ein Kunde, 40 Jahre alt.“) 1/3 · falsch 0/3
**Korrektur:**
```js
{m:"plan",t:"frei",q:"Beschreiben Sie eine Persona für ein Unternehmen Ihrer Wahl. Welche Angaben gehören hinein?",muster:[["Name, Alter, Wohnort, Beruf","\\d{2}|alter|jahr|beruf|wohn|lebt|schüler|student|azubi|angestellt|rentner|mutter|vater"],["Ziele und Wünsche","ziel(?!grupp)|wunsch|wünsch|möchte|will|sucht|träum"],["Probleme / Pain Points","problem|pain|sorge|unsicher|angst|ärger|frust|keine zeit|schwierig|fehlt"],["Mediennutzung: welche Plattformen, wann","instagram|linkedin|tiktok|facebook|youtube|pinterest|whatsapp|nutzt|plattform|kanal|kanäle|online"]],min:3}
```

### B10 · P2 · Lücke `einf`: Fragen zu Begriffen, die keine Folie lehrt (Lektion `web20`)
**Problem:** Die folgenden Fragen prüfen Begriffe, die in keiner Folie der App vorkommen, auch nicht in anderen Modulen. Teils fehlen sie sogar im Glossar (Per-Node-Suche über alle Folien):
- „Wer hat den Begriff ‚Web 2.0‘ … bekannt gemacht?“ (O’Reilly)
- „Was versteht man unter einem ‚Prosumer‘?“
- „Was beschreibt der Netzwerkeffekt?“ (kein Glossar-Eintrag)
- „Was ist mit einer ‚Filterblase‘ gemeint?“ (kein Glossar-Eintrag)
- „Was regelt der Algorithmus …?“
- „Was versteht man unter ‚Social Commerce‘?“
- „Ein Getränkehersteller lässt seine Community … abstimmen“ (Crowdsourcing)

Quereinsteiger lernen diese Begriffe nur aus der Erklärung nach einer falschen Antwort.
**Korrektur 1** (ersetzt `web20` Folie 0):
```js
{ k: "intro", h: "Vom Lesen zum Mitmachen", b: "Im frühen Internet (**Web 1.0**) haben Unternehmen Inhalte veröffentlicht, Nutzer haben nur gelesen. Mit dem **Web 2.0** – bekannt gemacht 2005 durch Tim O’Reillys Aufsatz „What Is Web 2.0“ – können alle selbst Inhalte erstellen, teilen und kommentieren." }
```
**Korrektur 2** (neu einfügen in `web20` nach Folie 2 „Arten von Social Media“):
```js
{ k: "liste", h: "Begriffe des Mitmach-Webs", l: ["**Prosumer:** Nutzer konsumieren und produzieren Inhalte", "**Netzwerkeffekt:** je mehr Nutzer, desto wertvoller die Plattform", "**Algorithmus:** entscheidet, wer welche Beiträge in welcher Reihenfolge sieht", "**Filterblase:** Feeds zeigen vor allem Passendes zu bisherigen Interessen", "**Crowdsourcing:** Ideen oder Mithilfe der Community nutzen", "**Social Commerce:** direkt im Netzwerk kaufen, z. B. im TikTok Shop"] }
```
**Korrektur 3** (neue Glossar-Einträge, `glossar2.js`, Abschnitt einf):
```js
{ w: "Netzwerkeffekt", de: "Wert durch Nutzerzahl", m: "einf", d: "Der Nutzen einer Plattform steigt, je mehr Menschen sie nutzen – weil man dort mehr Kontakte und Inhalte findet. Beispiel: Ein Messenger lohnt sich erst, wenn Freunde ihn auch haben.", syn: ["Netzwerkeffekt", "Netzwerkeffekte"] }
```
```js
{ w: "Filterblase", de: "Filter Bubble (Eli Pariser, 2011)", m: "einf", d: "Personalisierte Feeds zeigen vor allem Inhalte, die zu bisherigen Interessen passen; andere Sichtweisen erscheinen seltener. Beispiel: Wer oft Backvideos ansieht, bekommt fast nur noch Backvideos.", syn: ["Filterblase", "Filterblasen", "Filter Bubble"] }
```

### B11 · P2 · Lücke `einf`: viraler Effekt ohne Folie und ohne Praxisbeispiel (Lektion `chancen`)
**Problem:**
- „Viralität“ wird nur in einer Frage und im Glossar erklärt.
- Die echte Beispiel-Hausaufgabe des Kurses verlangt genau das: Begriff erklären und eine reale Kampagne nennen.
- Die App liefert kein reales Beispiel.

**Beleg:** Hausaufgabe (Foto `review4/hausaufgabe.jpg`). Nature 550, S113 (2017) zur ALS Ice Bucket Challenge 2014: über 100 Mio. US-Dollar Spenden für die ALS Association in wenigen Wochen, CBS News.
**Korrektur** (neu einfügen in `chancen` nach Folie 1 „Chancen“):
```js
{ k: "beispiel", h: "Der virale Effekt", b: "**Viral** heißt: Ein Inhalt verbreitet sich, weil Nutzer ihn von sich aus weiterteilen – wie ein Virus, ohne bezahlte Reichweite. Beispiel **Ice Bucket Challenge** (2014): Menschen kippten sich Eiswasser über den Kopf, posteten das Video und nominierten Freunde. Die ALS Association erhielt so in wenigen Wochen über 100 Mio. US-Dollar Spenden." }
```

### B12 · P2 · Lücke `platt`: Instagram- und TikTok-Funktionen nur in Fragen (Lektion `insta-tiktok`)
**Problem:** Mehrere Funktionen werden abgefragt, aber in keiner Folie erklärt:
- Instagram: Collab-Beitrag, Broadcast-Kanal, Highlights (Fragen „Was ist ein Collab-Beitrag …“, „Wofür nutzt man einen Broadcast-Kanal …“, Mehrfachfrage „Was trifft auf Instagram zu?“)
- TikTok: Stitch, Duett, Commercial Music Library, Spark Ads (Fragen „Was ist ein ‚Stitch‘ …“, „Welche Musik sollten Unternehmen laut TikTok …“, „Was sind TikTok Spark Ads?“)

**Korrektur** (neu einfügen in `insta-tiktok` nach Folie 1 „Instagram“ bzw. nach Folie 2 „TikTok“):
```js
{ k: "liste", h: "Instagram-Funktionen für Unternehmen", l: ["**Highlights:** Stories dauerhaft im Profil sammeln", "**Collab-Beitrag:** ein Beitrag erscheint bei allen beteiligten Konten", "**Broadcast-Kanal:** Einweg-Nachrichten an Follower, die beitreten", "**Insights:** Statistiken im Business- oder Creator-Konto"] }
```
```js
{ k: "liste", h: "TikTok-Funktionen", l: ["**Duett:** eigenes Video läuft neben einem fremden", "**Stitch:** kurzer Ausschnitt eines fremden Videos vor dem eigenen", "**Commercial Music Library:** Musik, die Unternehmen nutzen dürfen", "**Spark Ads:** bestehende Videos als Anzeige bewerben (→ Zusatzmodul Social Ads)"] }
```

### B13 · P2 · Lücke `platt`: LinkedIn-Seitenfunktionen (Lektion `linkedin`)
**Problem:** Die Frage „Wofür eignet sich eine Fokusseite …“, die Frage zu Lead-Gen-Formularen und die Mehrfachfrage „Welche Funktionen stehen Unternehmensseiten auf LinkedIn zur Verfügung?“ (Events, Newsletter, Fokusseiten) haben keine Grundlage in den Folien.
**Korrektur** (neu einfügen in `linkedin` nach Folie 1 „Personen- vs. Unternehmensprofil“):
```js
{ k: "liste", h: "Funktionen der Unternehmensseite", l: ["**Fokusseiten** (Showcase Pages) für einzelne Marken oder Bereiche", "**Newsletter**, die Abonnenten benachrichtigen", "**Veranstaltungen** (Events) mit Anmeldung", "**Stellenanzeigen** und Einblicke als Arbeitgeber", "**Lead-Gen-Formulare** in Anzeigen: mit Profildaten vorausgefüllt"] }
```

### B14 · P2 · Lektion `kanalwahl`: YouTube-Details fehlen, Pinterest fehlt, Facebook doppelt
**Problem:**
- YouTube: Kapitel (Zeitstempel ab 0:00), Thumbnail und die Shorts-Länge von bis zu 3 Minuten werden abgefragt (Fragen „Wie legt man auf YouTube Kapitel …“, „Welche Funktion hat das Thumbnail …“, Mehrfachfrage „Was trifft auf YouTube zu?“), aber nicht gelehrt.
- Pinterest wird zweimal abgefragt („Zu welcher Art von Plattform gehört Pinterest …“, „Eine Hochzeitsplanerin …“), hat aber keine Folie.
- Facebook steht dagegen fast gleich doppelt: `kanalwahl` Folie 1 und `x-xing-facebook` Folie 3, die direkt danach folgt.

**Beleg:** YouTube-Hilfe: Shorts bis 3 Minuten seit 15.10.2024. Kapitel brauchen einen ersten Zeitstempel 0:00.
**Korrektur 1** (ersetzt `kanalwahl` Folie 0):
```js
{ k: "text", h: "YouTube", b: "YouTube ist auch eine **Suchmaschine**: Tutorials, Erklärvideos und Produkt-Demos werden oft noch Jahre später gefunden. Ein klares **Thumbnail** (Vorschaubild) entscheidet über den Klick, **Kapitel** legt man per Zeitstempel ab 0:00 in der Beschreibung an. **Shorts** sind Hochkant-Videos bis drei Minuten." }
```
**Korrektur 2** (ersetzt `kanalwahl` Folie 1 „Facebook“, das in `x-xing-facebook` ausführlicher steht):
```js
{ k: "text", h: "Pinterest", b: "Pinterest ist eine **visuelle Such- und Inspirationsplattform**: Menschen suchen Ideen für Rezepte, Wohnen, Hochzeit oder Mode und speichern **Pins**, die auf Websites verlinken. Pins bleiben lange auffindbar – gut, um dauerhaft Besucher auf die eigene Website zu holen." }
```

### B15 · P2 · Lücke `platt`: Threads, Mastodon und Fediverse (Lektion `blogs-communitys`, Folie 3 „Microblogging“)
**Problem:** Die Fragen „Was trifft auf Threads zu?“, „Was ist das Besondere an Mastodon?“ und die Mehrfachfrage „Was trifft auf Mastodon und das Fediverse zu?“ setzen voraus, dass Mastodon dezentral ist (Server, ActivityPub) und Threads zu Meta gehört. Die Folie nennt nur die Namen.
**Beleg:** Seit Dezember 2023 können EU-Nutzer Threads ohne Instagram-Verknüpfung nutzen (Bloomberg, 14.12.2023). Das passt zur Erklärung der Threads-Frage.
**Korrektur:**
```js
{ k: "text", h: "Microblogging", b: "Kurze Beiträge, schnell und oft in Echtzeit: **X**, **Threads** (von Meta, optional mit Instagram verknüpft), **Bluesky** und **Mastodon** (dezentral: viele unabhängige Server im **Fediverse**). Geeignet für Neuigkeiten und den Dialog mit Presse und Fachpublikum. Nachteil: Beiträge veralten in Stunden – man muss **schnell und dauerhaft** präsent sein." }
```

### B16 · P2 · Lücke `platt`: WhatsApp (Lektion `x-xing-facebook`)
**Problem:** Es gibt drei Fragen zu WhatsApp-Kanälen und zur WhatsApp Business Plattform: zwei MC und die Freitextfrage „Welche Vorteile und Grenzen haben WhatsApp-Kanäle …“ (Verlauf 30 Tage). In den Folien steht dazu nichts.
**Beleg:** WhatsApp-Blog „Introducing WhatsApp Channels“: Admin- und Follower-Nummern bleiben privat, der Verlauf wird bis zu 30 Tage gespeichert. Der Link ist in der App bereits als `quelle` hinterlegt.
**Korrektur** (neu einfügen in `x-xing-facebook` nach Folie 3 „Facebook“):
```js
{ k: "text", h: "WhatsApp für Unternehmen", b: "**WhatsApp-Kanäle:** Einweg-Updates an Abonnenten; Telefonnummern von Admins und Followern bleiben verborgen, Updates werden bis zu 30 Tage gespeichert. **WhatsApp Business App:** kostenlos für kleine Betriebe. **WhatsApp Business Plattform (API):** mehrere Bearbeiter, Automatisierung, CRM-Anbindung – meist über einen Anbieter." }
```

### B17 · P2 · Lektion `einbettung`: Vision und Mission fehlen, zweimal dieselbe Überschrift
**Problem:**
- Die Fragen „Welche Reihenfolge der Zielhierarchie ist richtig …“ (Vision → Unternehmensziele → …) und „Was beschreibt die Mission …“ prüfen Begriffe, die keine Folie und kein Glossar-Eintrag erklärt.
- Folie 1 (Bild) und Folie 2 (Liste) heißen beide „Die Ziel-Pyramide“.

**Korrektur** (ersetzt `einbettung` Folie 2):
```js
{ k: "liste", h: "Beispiel: von der Vision zum Post", l: ["**Vision** (Zukunftsbild): „Die beliebteste Bäckerei Dresdens“", "**Mission** (Auftrag heute): „Frisches Handwerksbrot für die Region“", "Unternehmensziel: Umsatz im Raum Dresden um 10 % steigern", "Marketingziel: Bekanntheit in der Region erhöhen", "Social-Media-Ziel: Reichweite der Instagram-Beiträge in der Region verdoppeln"] }
```
**Glossar neu** (`glossar2.js`, Abschnitt unt):
```js
{ w: "Vision und Mission", de: "Zukunftsbild und Auftrag", m: "unt", d: "Vision = langfristiges Zukunftsbild (wo wir in 10 Jahren stehen). Mission = Zweck und Auftrag heute (was wir für wen tun). Aus beiden werden Unternehmens-, Marketing- und Social-Media-Ziele abgeleitet.", syn: ["Vision", "Mission", "Unternehmensvision", "Unternehmensmission"] }
```

### B18 · P2 · Lektion `organisation`, Folie 3 „Enterprise 2.0“: Urheber fehlt
**Problem:** Die Frage „Wer prägte 2006 den Begriff ‚Enterprise 2.0‘?“ (McAfee) fragt etwas ab, das nirgends steht.
**Beleg:** McAfee, A. P.: „Enterprise 2.0: The Dawn of Emergent Collaboration“, MIT Sloan Management Review, Frühjahr 2006.
**Korrektur:**
```js
{ k: "text", h: "Enterprise 2.0", b: "Begriff von **Andrew McAfee** (2006): Social-Media-Prinzipien **im Unternehmen**. Interne Netzwerke, Wikis, Chats und gemeinsame Dokumente machen Wissen auffindbar und erleichtern die Zusammenarbeit zwischen Abteilungen." }
```

### B19 · P2 · Lektion `recruiting`: Fachbegriffe nur in Fragen
**Problem:** EVP, Candidate Experience, Employee Advocacy und die Voraussetzungen eines Corporate-Influencer-Programms werden in vier MC-Fragen und in der Freitextfrage „Was versteht man unter Employer Branding?“ geprüft. Die Lektion erwähnt keinen dieser Begriffe.
**Korrektur** (neu einfügen in `recruiting` nach Folie 1 „Social Recruiting“):
```js
{ k: "liste", h: "Begriffe rund ums Employer Branding", l: ["**EVP** (Employer Value Proposition): Nutzenversprechen als Arbeitgeber", "**Candidate Experience:** alle Erfahrungen Bewerbender – von der Anzeige bis zur Zu- oder Absage", "**Employee Advocacy:** Mitarbeitende teilen freiwillig Unternehmensinhalte", "**Corporate-Influencer-Programm:** freiwillig, mit Schulung und klaren Leitlinien"] }
```

### B20 · P2 · Lektion `analyse`: PEST fehlt
**Problem:** Die Frage „Welche Analyse untersucht politische, wirtschaftliche, soziokulturelle und technologische Umfeldfaktoren?“ hat in der Lektion keine Grundlage. Der Begriff steht nur im Glossar.
**Korrektur** (neu einfügen in `analyse` nach Folie 1 „SWOT-Analyse“):
```js
{ k: "text", h: "PEST: das Umfeld prüfen", b: "Die **PEST-Analyse** prüft äußere Einflüsse: **P**olitik, **E**conomy (Wirtschaft), **S**oziales/Gesellschaft, **T**echnologie – als **PESTEL** zusätzlich Umwelt und Recht. Die Ergebnisse fließen in die **Chancen und Risiken** der SWOT. Beispiel: Steigende Energiepreise treffen die Bäckerei." }
```

### B21 · P2 · Lektion `strategie`, Folie 3 „Owned, Paid, Earned“: PESO fehlt
**Problem:** Die Frage „Was ergänzt das PESO-Modell …?“ (Shared Media) wird nicht gelehrt. Zusätzlich widerspricht der Check auf Folie 6 leicht: Teilen ist im PESO-Modell *Shared*, in der Folie aber *Earned*. Die Ergänzung klärt beides.
**Korrektur:**
```js
{ k: "text", h: "Owned, Paid, Earned", b: "**Owned Media**: eigene Kanäle (Profile, Website, Newsletter). **Paid Media**: bezahlte Reichweite (Anzeigen, Influencer). **Earned Media**: Reichweite, die andere freiwillig erzeugen (Shares, Erwähnungen, Presse, Bewertungen). Das **PESO-Modell** trennt davon **Shared Media** ab: Inhalte, die in sozialen Netzwerken geteilt werden." }
```

### B22 · P2 · Lektion `content-strategie`: Hero-Hub-Help fehlt
**Problem:** Die Frage „Im Hero-Hub-Help-Modell: Was sind ‚Help‘-Inhalte?“ (Modul unt) wird in keiner Folie gelehrt. Das Glossar ordnet den Begriff `plan` zu.
**Korrektur** (neu einfügen in `content-strategie` nach Folie 1 „Themensäulen“):
```js
{ k: "text", h: "Hero, Hub, Help", b: "Ein Planungsmodell aus dem YouTube-Umfeld: **Hero** = seltene, aufwendige Highlights (z. B. Kampagnenvideo), **Hub** = regelmäßige Serien, die Stammpublikum zurückholen, **Help** = nützliche Inhalte, die gesucht werden (Tutorials, FAQ)." }
```

### B23 · P2 · Lektion `budget`: Methoden der Budgetfestlegung fehlen
**Problem:** Die Fragen „Wie geht die Ziel-Aufgaben-Methode … vor?“ und die Mehrfachfrage „Welche Methoden gibt es, um ein Social-Media-Budget festzulegen?“ (Ziel-Aufgaben, Prozent vom Umsatz, Wettbewerb) haben keine Lektionsgrundlage. Der Glossar-Eintrag „Ziel-Aufgaben-Methode“ hat `m: "ads"`. Das ist das Zusatzmodul, das ausdrücklich nicht im Probetest vorkommt, die Fragen stehen aber in `unt`.
**Korrektur Folie** (neu einfügen in `budget` nach Folie 1 „Kostenblöcke“):
```js
{ k: "liste", h: "Wie hoch soll das Budget sein?", l: ["**Ziel-Aufgaben-Methode:** Was ist zum Ziel nötig, was kostet das? – am besten begründbar", "**Prozent vom Umsatz:** fester Anteil – einfach, aber ohne Zielbezug", "**Wettbewerbsorientiert:** an den Ausgaben der Konkurrenz ausrichten", "**Restbudget:** „was übrig bleibt“ – einfach, aber planlos"] }
```
**Korrektur Glossar** (`glossar2.js` Z. 122):
```js
{ w: "Ziel-Aufgaben-Methode", m: "unt", d: "Budget-Planung vom Ziel her: Was ist zu tun, um das Ziel zu erreichen, und was kostet das? Beispiel: 10 Bewerbungen nötig, bei 20 € pro Bewerbung sind 200 € Budget nötig. Weitere Methoden: Prozent vom Umsatz, Orientierung am Wettbewerb.", syn: ["Ziel-Aufgaben-Methode"] }
```

---

## P3 – Feinschliff

### B24 · P3 · Freitext „Social Media Manager arbeiten an einer Schnittstelle …“ (`data/fragen2.js` ~Z. 1138)
**Problem:** `management` im Geschäftsführungs-Muster trifft auch auf „Social Media **Management**“. Die falsche Antwort „Im Social Media Management arbeitet man mit IT, Buchhaltung und Einkauf zusammen.“ bekommt dadurch einen Punkt.
**Test (nachher):** gut 3/3 · mittel 2/3 · falsch 0/3
**Korrektur:**
```js
{
"m": "einf",
"t": "frei",
"q": "Social Media Manager arbeiten an einer Schnittstelle im Unternehmen. Nennen Sie drei Abteilungen und je ein Beispiel für die Zusammenarbeit.",
"muster": [
["Marketing: Kampagnen, Reichweite, Leads", "marketing|kampagn|werb"],
["Vertrieb: Anfragen, Social Selling, Leads weitergeben", "vertrieb|verkauf|sales|social selling"],
["Personal/HR: Recruiting, Employer Branding", "\\bhr\\b|personal|recruit|bewerb|arbeitgeber|employer"],
["Kundenservice: Fragen und Beschwerden beantworten", "service|kundendienst|beschwerd|support"],
["PR/Unternehmenskommunikation: Presse, Krisen", "\\bpr\\b|presse|öffentlichkeit|krise|kommunikationsabteil|unternehmenskommunikation"],
["Geschäftsführung: Ziele, Freigaben, Budget", "geschäftsführ|geschäftsleitung|unternehmensleitung|chef|inhaber|vorstand|freigab"]
],
"min": 3,
"quelle": ""
}
```

### B25 · P3 · Freitext „Erläutern Sie mindestens drei Unterschiede zwischen Social Media und klassischen Massenmedien …“ (`data/fragen2.js` ~Z. 1200)
**Problem:** „Man kann kommentieren“ ist ein Kernunterschied, wird aber nicht erkannt. Die RegExp prüft nur `kommentar`, `interakt` trifft nicht auf „interagieren“.
**Test (nachher):** gut 4/3 · mittel 2/3 · falsch 1/3
**Korrektur:**
```js
{
"m": "einf",
"t": "frei",
"q": "Erläutern Sie mindestens drei Unterschiede zwischen Social Media und klassischen Massenmedien wie Zeitung oder Fernsehen.",
"muster": [
["Dialog statt Einbahnstraße (many-to-many statt one-to-many)", "dialog|many|einbahn|interakt|interag|zwei.?weg|austausch|komment|antwort|mitreden|feedback"],
["Nutzer erstellen selbst Inhalte (User Generated Content)", "nutzer|user|selbst|erstell|ugc|prosum"],
["Geschwindigkeit / Echtzeit", "echtzeit|schnell|sofort|geschwindig"],
["Gute Messbarkeit", "mess|kennzahl|kpi|statistik|analys"],
["Zielgenaue Ansprache / Targeting", "ziel.{0,10}(genau|gerichtet)|targeting|personalis|zielgrupp"],
["Geringe Einstiegskosten / Algorithmus bestimmt Sichtbarkeit", "kosten|günstig|algorithm"]
],
"min": 3,
"quelle": ""
}
```

### B26 · P3 · Freitext „Erstellen Sie eine kurze SWOT-Analyse für den Social-Media-Auftritt eines regionalen Handwerksbetriebs …“ (`data/fragen2.js`)
**Problem:** `stärke` trifft auf „ver**stärke**n“. Die Floskel-Antwort „Wir verstärken unsere Präsenz, nutzen jede Chance und vermeiden jede Gefahr, deshalb posten wir mehr.“ erreicht 4/5. Wortgrenzen helfen teilweise.
**Test (nachher):** gut 5/5 · mittel 3/5 · Floskel 3/5
**Korrektur:**
```js
{
"m": "unt",
"t": "frei",
"q": "Erstellen Sie eine kurze SWOT-Analyse für den Social-Media-Auftritt eines regionalen Handwerksbetriebs (je mindestens ein Punkt) und leiten Sie eine Maßnahme ab.",
"muster": [
["Stärke (intern), z. B. engagiertes Team, sichtbare Projekte", "\\bstärken?\\b|strength"],
["Schwäche (intern), z. B. wenig Zeit, kein Know-how", "\\bschwächen?\\b|weakness"],
["Chance (extern), z. B. Fachkräftesuche über Social Media, lokale Zielgruppe", "\\bchancen?\\b|opportunit"],
["Risiko (extern), z. B. Konkurrenz, Algorithmusänderung", "\\brisik|threat|bedroh|\\bgefahr"],
["Abgeleitete Strategie/Maßnahme", "maßnahm|empfehl|daher|deshalb|ableit|abgeleitet"]
],
"min": 5,
"quelle": ""
}
```

### B27 · P3 · Freitext „Nennen Sie vier typische Fehler im Social Media Management.“ (`data/kurs.js`, FREI)
**Problem:** `bild` trifft auf „man **bild**et sich weiter“. Gemeinsam mit `zeit` erreicht so eine Antwort ohne echte Fehlerquelle 3/4.
**Korrektur:**
```js
{m:"einf",t:"frei",q:"Nennen Sie vier typische Fehler im Social Media Management.",muster:[["Ohne Ziele / Strategie starten","ziel|strateg|plan"],["Zu viele Kanäle / zu wenig Ressourcen","kanäle|kanal|ressourc|zeit"],["Unregelmäßig posten, verwaiste Profile","unregelm|verwaist|regelmäßig|selten"],["Nur Werbung, kein Dialog","werbung|dialog|senden"],["Kritik löschen oder ignorieren","kritik|lösch|ignor"],["Erfolg nicht messen","mess|kpi|kennzahl|auswert"],["Rechtliche Fehler","recht|impressum|bildrecht|\\bbilder?\\b|foto|urheber"]],min:4}
```

### B28 · P3 · Freitext „Welche Vorteile und Grenzen haben WhatsApp-Kanäle …“ (`data/fragen2.js` ~Z. 1266)
**Problem:** `nummer` gibt den Datenschutz-Punkt auch für die falsche Aussage „sehen alle Nummern“.
**Korrektur:**
```js
{
"m": "platt",
"t": "frei",
"q": "Welche Vorteile und Grenzen haben WhatsApp-Kanäle für ein Unternehmen?",
"muster": [
["Direkter Zugang zu Nutzern über eine sehr verbreitete App", "verbreit|direkt|handy|smartphone|push|viele nutzen"],
["Datenschutz: Telefonnummern von Admins und Followern nicht sichtbar", "nummer[\\s\\S]{0,40}(nicht|privat|verborgen|unsichtbar|geschützt)|datenschutz|privat|anonym"],
["Einweg-Kommunikation / Broadcast, kaum Dialog", "einweg|broadcast|kein.{0,10}dialog|nur senden|reaktion|umfrage"],
["Verlauf nur begrenzt gespeichert (bis zu 30 Tage)", "30 tage|begrenzt|gelöscht|verlauf"],
["Follower müssen aktiv abonnieren; Reichweite muss aufgebaut werden", "abonn|\\bfolgen\\b|follower gewinn|aufbau|bewerb"]
],
"min": 3,
"quelle": "https://blog.whatsapp.com/introducing-whatsapp-channels-a-private-way-to-follow-what-matters?lang=de"
}
```

### B29 · P3 · Glossar „Business-Konto“ (`data/glossar2.js` Z. 33)
**Problem:** „Creator-Konto für Selbstständige“ stimmt so nicht. Bei Instagram ist das Creator-Konto für Creator, Influencer und Personen des öffentlichen Lebens gedacht. Selbstständige mit Betrieb nutzen meist das Business-Konto.
**Korrektur:**
```js
{ w: "Business-Konto", de: "Unternehmenskonto", m: "platt", d: "Kontoart für Firmen mit Statistiken und Werbefunktionen; für Creator und Influencer gibt es das ähnliche Creator-Konto. Beispiel: Der Malerbetrieb sieht, wann seine Follower online sind.", syn: ["Business-Konto", "Creator-Konto", "Creator-Konten", "Unternehmenskonto"] }
```

### B30 · P3 · Glossar „KI“ (`data/glossar2.js` Z. 28)
**Problem:** Die Definition „Software, die aus Daten lernt und … Texte, Bilder oder Videos erzeugt“ beschreibt nur *generative* KI. Sortier-Algorithmen, Übersetzung und Sentiment-Analyse sind ebenfalls KI und kommen in denselben Lektionen vor.
**Korrektur:**
```js
{ w: "KI", de: "Künstliche Intelligenz", m: "einf", d: "Software, die aus Daten Muster lernt und damit Aufgaben löst, z. B. Inhalte sortieren, Texte übersetzen oder Stimmungen erkennen. Generative KI erzeugt selbst Texte, Bilder oder Videos. Beispiel: Ein KI-Tool schlägt drei Bildunterschriften vor – ein Mensch prüft sie vor dem Posten.", syn: ["KI", "Künstliche Intelligenz", "KI-Tools", "KI-Tool", "generative KI", "KI-generiert"] }
```

### B31 · P3 · Lektion `automatisierung`, Folie „KI-Kompetenz im Team“ (`data/kurs.js`, Ergänzungsblock `LX("automatisierung")…`)
**Problem:** Die Aussage ist inhaltlich richtig, aber unscharf („durch den Digital Omnibus 2026 abgeschwächt“). Für die Prüfung ist eine genaue Fundstelle hilfreich.
**Beleg:** IHK Lüneburg-Wolfsburg: Verordnung (EU) 2026/1744 vom 08.07.2026, in Kraft seit 27.07.2026. Art. 4 verlangt jetzt nur noch „Maßnahmen zu ergreifen, um die KI-Kompetenz … zu fördern“. Die Deepfake-Kennzeichnung nach Art. 50 Abs. 4 gilt unverändert seit 02.08.2026.
**Korrektur:**
```js
{ k: "text", h: "KI-Kompetenz im Team", b: "Unternehmen, die KI-Tools einsetzen, sollen die **KI-Kompetenz** ihrer Mitarbeitenden fördern (Art. 4 EU-KI-Verordnung; seit dem Digital Omnibus, VO (EU) 2026/1744, als Förderpflicht statt „sicherstellen“). Ziel: Alle wissen, was die Tools können, wo Risiken liegen und was zu prüfen ist. Deepfakes sind seit 02.08.2026 zu kennzeichnen." }
```

### B32 · P3 · Lektionstitel `budget` (`data/kurs.js`, Zeile `alle["budget"].titel = "Ressourcen & Budget planen";`)
**Problem:** Direkt vor dieser Lektion steht in `unt` die Lektion „Ressourcenplanung“. „Ressourcen & Budget planen“ wirkt wie eine Dublette. Inhaltlich geht es um Kosten, Budgetmethoden (nach B23) und Kampagnenplanung.
**Korrektur:**
```js
{ id: "budget", titel: "Budget & Kampagnenplanung" }
```
(also im Code: `alle["budget"].titel = "Budget & Kampagnenplanung";`)

### B33 · P3 · Fragen „Was ist der Vorteil von Lead-Gen-Formularen in LinkedIn-Anzeigen?“ und „Was sind TikTok Spark Ads?“ (`data/fragen2.js` Z. 205/213, `m: "platt"`)
**Problem:** Beide Fragen behandeln reine Anzeigenformate. Laut Konzept der App stehen Social Ads nicht im Lehrplan und kommen nicht in den Probetest. Hier landen sie über `platt` aber doch darin. Das widerspricht der eigenen Gliederung. Vorschlag: `m: "ads"` (nur das Modul ändert sich, der Rest bleibt gleich).
**Korrektur:**
```js
{ "m": "ads", "q": "Was ist der Vorteil von Lead-Gen-Formularen in LinkedIn-Anzeigen?", "a": ["Sie sind mit Profildaten vorausgefüllt, Interessenten müssen LinkedIn nicht verlassen", "Sie sind immer kostenlos, weil sie nicht als Werbeanzeige abgerechnet werden", "Sie ersetzen die Datenschutzhinweise, eine Einwilligung ist nicht nötig", "Sie funktionieren nur ohne Targeting und erreichen alle LinkedIn-Nutzer"], "c": 0, "e": "Weniger Aufwand für Nutzer bedeutet meist mehr abgeschlossene Formulare und damit mehr Leads.", "quelle": "" }
```
```js
{ "m": "ads", "q": "Was sind TikTok Spark Ads?", "a": ["Bestehende organische Videos – eigene oder von Creatorn mit Erlaubnis – werden beworben", "Eigens produzierte Werbespots, die nie organisch auf einem Profil erscheinen", "Werbung ausschließlich mit Text und Bild, ganz ohne Video oder Ton", "Anzeigen, die Videos von Konkurrenten ohne deren Erlaubnis automatisch bewerben"], "c": 0, "e": "Spark Ads nutzen echte Beiträge samt Interaktionen und wirken dadurch nativer als klassische Anzeigen.", "quelle": "" }
```

### B34 · P3 · Frage „Ein Versandhändler möchte Kundenanfragen über WhatsApp … bearbeiten“ (`data/fragen2.js` Z. 319)
**Problem:** Die Lösung „über einen Anbieter“ klingt zwingend. Die Cloud API kann man aber auch direkt bei Meta nutzen.
**Korrektur:**
```js
{ "m": "platt", "q": "Ein Versandhändler möchte Kundenanfragen über WhatsApp mit mehreren Mitarbeitenden und Anbindung an sein CRM bearbeiten. Was passt?", "a": ["Die WhatsApp Business Plattform (API), z. B. über einen Anbieter", "Die private WhatsApp-App auf einem gemeinsamen Diensthandy", "Die kostenlose WhatsApp Business App auf einem Smartphone", "Eine WhatsApp-Gruppe mit allen Kunden und Mitarbeitenden"], "c": 0, "e": "Die Business Plattform ist für größere Unternehmen mit mehreren Bearbeitern, Automatisierung und Systemanbindung gedacht – direkt bei Meta oder über einen Anbieter.", "quelle": "" }
```

### B35 · P3 · Mehrfachfragen „Welche Bestandteile gehören in eine Content-Strategie?“ und „Welche Methoden gibt es, um ein Social-Media-Budget festzulegen?“ (`data/mehrfach.js` Z. 27 und 29)
**Problem:** Die Antwortlänge verrät die Lösung:
- Content-Strategie: Die Distraktoren sind im Schnitt 52 Zeichen lang, die richtigen Antworten nur 31.
- Budget: Die richtigen Antworten sind im Schnitt 31 Zeichen lang, die Distraktoren 23. „Orientierung an den Ausgaben der Wettbewerber“ fällt besonders auf.

**Korrektur:**
```js
{ m: "unt", q: "Welche Bestandteile gehören in eine Content-Strategie?", a: ["Fertige Texte für zwölf Monate", "Das Gebot für jede einzelne Anzeige", "Themenfelder bzw. Content-Säulen", "Tonalität und Bildsprache der Marke", "Passende Formate je Kanal"], c: [2, 3, 4], e: "Die Content-Strategie legt Themen, Tonalität und Formate fest. Fertige Beitragstexte gehören in die laufende Redaktionsplanung, einzelne Anzeigengebote in die Kampagnensteuerung." }
```
```js
{ m: "unt", q: "Welche Methoden gibt es, um ein Social-Media-Budget festzulegen?", a: ["Ziel-Aufgaben-Methode", "SWOT-Gewichtungs-Methode", "PDCA-Zyklus-Methode", "Prozent-vom-Umsatz-Methode", "Wettbewerbs-Paritäts-Methode"], c: [0, 3, 4], e: "Budgets lassen sich aus Zielen und Aufgaben, als Anteil am Umsatz oder in Anlehnung an die Ausgaben der Wettbewerber ableiten. SWOT ist eine Analysemethode, PDCA ein Verbesserungszyklus." }
```

### B36 · P3 · Neuer Glossar-Eintrag „Fediverse“ (`data/glossar2.js`, Abschnitt platt)
**Problem:** Das Fediverse ist Lösungsbestandteil von zwei Fragen und hat keinen Glossar-Eintrag.
**Korrektur:**
```js
{ w: "Fediverse", de: "föderiertes Universum", m: "platt", d: "Verbund vieler unabhängiger Server, die über ein gemeinsames Protokoll (ActivityPub) zusammenarbeiten. Man kann Konten auf anderen Servern folgen. Bekanntestes Beispiel: Mastodon; auch Threads kann Beiträge ins Fediverse teilen.", syn: ["Fediverse", "ActivityPub", "Mastodon"] }
```

### B37 · P3 · Dublette: Check `tools` Folie 5 „Wofür nutzt man ein Publishing-Tool vor allem?“ und MC „Was ist ein Vorteil von Publishing-Tools?“ (`data/kurs.js`, NEU_Q)
**Problem:** Frage und richtige Antwort sind praktisch gleich („mehrere Kanäle planen und zeitgesteuert veröffentlichen“). Das ist nicht falsch, bringt aber keinen Mehrwert. Vorschlag: Die MC-Frage auf den gemeinsamen Posteingang oder die Statistik ausrichten.
**Korrektur:**
```js
{m:"platt",q:"Welche Zusatzfunktion bieten viele Publishing-Tools neben dem zeitgesteuerten Posten?",a:["Einen gemeinsamen Posteingang und Statistiken für mehrere Kanäle", "Mehr Follower durch eine bessere Platzierung im Algorithmus", "Den Wegfall der Impressumspflicht für alle verbundenen Kanäle", "Kostenloses Schalten von Werbeanzeigen auf allen Plattformen"],c:0,e:"Tools wie Hootsuite, Buffer oder die Meta Business Suite bündeln Planung, Posteingang und Auswertung."}
```

---

## Geprüft und in Ordnung (Auswahl, mit Beleg)

- **X:** DSA-Geldbuße der EU-Kommission von 120 Mio. € am 05.12.2025, u. a. wegen des blauen Hakens, des Werbearchivs und des Datenzugangs für Forschende (TechCrunch, eucrim). Die Community-Notes-Beschreibung stimmt.
- **XING:** Gruppen wurden eingestellt, seit Oktober 2023 positioniert sich XING als Jobs-Netzwerk. Auch Quellen von 2026 beschreiben XING als nahezu reine Jobplattform (alexandergraham.de, 18.03.2026). Lektion und Fragen sind aktuell.
- **Threads:** Seit 2023 in der EU auch ohne Instagram nutzbar. Die Erklärung „nicht mehr zwingend“ stimmt.
- **YouTube Shorts** bis 3 Minuten (seit Oktober 2024), Kapitel ab 0:00 – stimmt.
- **WhatsApp-Kanäle:** Nummern bleiben privat, Verlauf bis zu 30 Tage – stimmt (WhatsApp-Blog).
- **Digital Omnibus (VO (EU) 2026/1744):** Art. 4 wurde zur Förderpflicht abgeschwächt. Die Aussage der Lektion stimmt, siehe B31 zur Präzisierung.
- **BAG 13.12.2016 – 1 ABR 7/15** (Besucher-Beiträge der Facebook-Seite, § 87 Abs. 1 Nr. 6 BetrVG) – stimmt.
- **Weitere Fakten:** SMART, SWOT, RACI (genau ein „A“), Owned/Paid/Earned, Hub-and-Spoke als häufigstes Modell (Altimeter 2010), Tim O’Reilly 2005, Andrew McAfee 2006, gemeinsame Verantwortlichkeit für Fanpages (EuGH C-210/16) und die Rechnungen (Wochenaufwand 10 h, Zeitbedarf ≈ 9 h) – alle korrekt.
- **Mehrfachfragen:** Alle 22 sind eindeutig. Die markierten Antworten sind vollständig richtig, die Distraktoren eindeutig falsch.
- **Freitext ohne Befund:** „Drei Chancen“, „Tools Planung/Gestaltung/Zusammenarbeit“, „Regeln für KI-Tools“, „SMART-Ziel Bäckerei“, „Kostenblöcke“, „Workflow mit Freigaben“, „KI-Einsatz und Risiko“, „Ziel aus Unternehmensziel ableiten“, „Content-Strategie“, „Blog/Community/Microblogging“, „XING und X“, „Governance-Elemente“, „Agentur auslagern“ und „B2B-Fall Kanäle“. Getestet: Die guten Antworten bestehen, die falschen nicht. Die mittelmäßigen liegen knapp unter dem Mindestwert.

## Zusammenfassung

| Priorität | Anzahl | Befunde |
|---|---|---|
| P1 | 3 | B01–B03 |
| P2 | 20 | B04–B23 |
| P3 | 14 | B24–B37 |
| **Summe** | **37** | |

**Die 5 wichtigsten Empfehlungen**
1. **„Abschlusspräsentation“ streichen (B01).** Der Lehrgang endet mit einem Online-Test aus MC und Freitext. Eine Präsentation gibt es nicht.
2. **Die zwei kaputten Freitext-RegExps reparieren (B02, B03).** Bei LinkedIn/TikTok und Employer Branding wurde je eine RegExp kopiert, dadurch werden richtige Punkte nie erkannt.
3. **Die Lücken zwischen Lektionen und Fragen schließen (B10–B23).** Rund 40 Fragen in den drei Modulen prüfen Wissen, das keine Folie vermittelt. Betroffen sind u. a. Prosumer, Netzwerkeffekt, Filterblase, Collab/Broadcast, Stitch, LinkedIn-Fokusseiten, YouTube-Kapitel, Pinterest, Threads/Mastodon, WhatsApp, Vision/Mission, PEST, PESO, Hero-Hub-Help, EVP und Budgetmethoden. Die Ersatzfolien oben sind kurz genug für nicht scrollende Story-Karten (≤ 400 Zeichen).
4. **Den Hub-and-Spoke-Widerspruch zwischen Lektion, Glossar und Mehrfachfrage auflösen (B04)** und die Organisations-RegExp so ändern, dass „zentral“ nicht mehr auf „dezentral“ trifft und Vor- und Nachteile geprüft werden (B05).
5. **Das Beispiel zum viralen Effekt ergänzen (B11).** Es passt direkt zur echten Hausaufgabe des Kurses. Außerdem die RegExps für Web 1.0/2.0, Ziel/Zielgruppe, Persona und Risiken mit Gegenmaßnahme schärfen (B06–B09).

## Quellen (Web-Recherche 06.11.2026)
- IHK Lüneburg-Wolfsburg: „Digital-Omnibus-Verordnung zur KI in Kraft getreten“ – https://www.ihk.de/ihklw/produkte/beratung-und-service/ecommerce-und-internet/digital-omnibus-verordnung-zur-ki-tritt-in-kraft-7142858
- TechCrunch, 05.12.2025: EU fines X €120M – https://techcrunch.com/2025/12/05/in-its-first-dsa-penalty-eu-fines-x-e120m-for-deceptive-blue-check-verification-system
- eucrim: EU Fines X €120 Million – https://eucrim.eu/news/eu-fines-x-120-million-in-first-dsa-non-compliance-decision/
- Bloomberg, 14.12.2023: Threads ohne Instagram-Verknüpfung in der EU – https://www.bloomberg.com/news/articles/2023-12-14/meta-lets-eu-users-sign-up-to-threads-without-an-instagram-link
- alexandergraham.de, 18.03.2026: XING vs. LinkedIn – https://alexandergraham.de/en/xing-vs-linkedin-nutzerzahlen/
- Nature 550, S113 (2017): Ice Bucket Challenge – https://www.nature.com/nature/journal/v550/n7676_supp_out/full/550S113a.html
- CBS News: Ice Bucket Challenge Impact – https://www.cbsnews.com/baltimore/news/als-association-ice-bucket-challenge-actually-had-a-dramatic-impact
- HSB-Kursinformation (PDF im Upload-Ordner), Vorlesungsplan und Hausaufgabe (`review4/`)
