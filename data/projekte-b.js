// Praxisprojekte 3 und 4 für „SMM Coach“ (Stand November 2026, deutsches Recht).
// Fiktive Firmen und Personen. Rechtsquellen: § 5a Abs. 4 UWG, BGH 09.09.2021 (I ZR 90/20, I ZR 125/20, I ZR 126/20),
// Anhang zu § 3 Abs. 3 UWG Nr. 4a (pauschale Umweltaussagen, gilt seit 27.09.2026 – Drittes Gesetz zur Änderung des UWG),
// Shitstorm-Skala nach Barbara Schwede und Daniel Graf (2012, Stufen 0–6, angelehnt an die Beaufort-Skala).
export const PROJEKTE_B = [
{
  id: "mode",
  titel: "Influencer für faire Mode",
  firma: "Faden & Fluss, Dresden",
  rolle: "Du planst die erste Influencer-Kampagne für ein kleines Modelabel aus Dresden.",
  kurz: "Von der Auswahl bis zur ROI-Rechnung",
  module: ["unt", "recht", "kpi", "plan"],
  min: 14,
  schritte: [
    { k: "szene", h: "Zwei Gründerinnen, ein Plan", wer: "Mira Petrović, Mitgründerin",
      b: "Jana und ich verkaufen faire Mode aus Bio-Baumwolle, genäht in Polen, über unseren Online-Shop. Im Mai 2027 startet die **Sommerkollektion**. Wir wollen bekannter werden und mehr verkaufen. Für Influencer haben wir **6.000 €**. Du sollst die Kampagne planen. Wo fangen wir an?" },
    { k: "wahl", h: "Welches Ziel schreibst du ins Konzept?",
      o: [
        { t: "Im Sommer 2027 mit Influencern möglichst viel verkaufen", p: 0,
          fb: "Mira fragt: „Wann ist das geschafft?“ Das Ziel ist weder messbar noch terminiert. Nach **SMART** fehlt eine Zahl und ein Datum – auswerten kann man es so nicht." },
        { t: "1.–30.06.2027: 120 Bestellungen über Influencer-Codes", p: 2,
          fb: "Spezifisch, messbar, terminiert und mit dem Budget realistisch: ein **SMART-Ziel**. Später kannst du **Soll und Ist** vergleichen." },
        { t: "Bis Ende Juni 2027 eine Million Menschen erreichen", p: 1,
          fb: "Messbar und terminiert – aber mit 6.000 € kaum **erreichbar** und nur auf Bekanntheit bezogen. Verkäufe, das zweite Ziel, fehlen ganz." }
      ] },
    { k: "wahl", h: "Wie baust du die Kampagne entlang der Customer Journey auf?",
      b: "Die Kampagne soll Bekanntheit **und** Verkäufe bringen.",
      o: [
        { t: "Nur Posts mit Rabattcode, denn am Ende zählen allein die Verkäufe", p: 1,
          fb: "Bestandskunden kaufen vielleicht. Wer euch nicht kennt, springt aber nicht direkt zum Kauf. Die Phasen **Aufmerksamkeit** und **Überlegung** fehlen." },
        { t: "Möglichst lustige Reels, damit sie viral gehen", p: 0,
          fb: "Viele Aufrufe, aber kein Weg zum Shop. Ohne nächsten Schritt endet die Journey in der **Aufmerksamkeitsphase** – Verkäufe bleiben Zufall." },
        { t: "Reels für Aufmerksamkeit, Try-on für Überlegung, Code für Kauf", p: 2,
          fb: "**Phasengerechter Content**: Reichweite am Anfang, Orientierung (Stoff, Passform) in der Mitte, Rabattcode als klarer Anstoß. Je Phase passt eine eigene KPI." }
      ] },
    { k: "daten", h: "Die Shortlist", l: [
  "**A** @stylebyvanessa: 410.000 Follower, Ø Reichweite 38.000, Ø 340 Interaktionen, 5.500 €/Reel",
  "**B** Vier Mikro-Influencerinnen aus Sachsen: je 12.000–35.000 Follower, Engagement-Rate 4–7 %",
  "**B** zusammen: 3.600 € Honorar für drei, Lea nur Kleidung; alle je zwei Teile",
  "**C** Öko-Profil: 88.000 Follower, +30.000 in einer Woche",
  "**C** Ø Reichweite 2.500, Kommentare meist „Nice 🔥“ von Profilen ohne Bild"
] },
    { k: "wahl", h: "Rechne nach: Wie hoch ist die Engagement-Rate von A?",
      b: "Engagement-Rate = Interaktionen ÷ Reichweite × 100",
      o: [
        { t: "rund 0,9 %", p: 2,
          fb: "340 ÷ 38.000 × 100 ≈ **0,9 %**. Bei den Mikro-Influencerinnen liegt sie bei 4–7 %. Große Reichweite heißt nicht großes Interesse." },
        { t: "rund 0,08 %", p: 1,
          fb: "Das ist die Rate bezogen auf die **Follower** (340 ÷ 410.000). Auch üblich – aber ihr habt Reichweite als Bezug festgelegt. Immer angeben, worauf sich die Rate bezieht." },
        { t: "rund 9 %", p: 0,
          fb: "Kommafehler: 340 ÷ 38.000 = 0,0089, mal 100 ergibt **0,9 %**, nicht 9 %. Mit 9 % würde A viel besser aussehen, als es ist." }
      ] },
    { k: "wahl", h: "Wen nehmt ihr?",
      o: [
        { t: "A – eine große Reichweite bringt am meisten Bekanntheit", p: 1,
          fb: "Viele sehen das Reel, aber nur wenige interagieren. Ein Post verbraucht fast das ganze Budget – kein Puffer, kein Test. **Makro-Influencer** passen eher zu großen Marken." },
        { t: "B – vier Mikro-Influencerinnen aus der Region", p: 2,
          fb: "**Mikro-Influencer** haben engere, aktivere Communitys, passen zur regionalen Marke und verteilen das Risiko auf vier Köpfe. Es bleibt Budget für Produktion und Reserve." },
        { t: "C – viele Follower zum fairen Preis", p: 0,
          fb: "Sprunghafter Zuwachs, winzige Reichweite, Floskel-Kommentare: typische Zeichen für **gekaufte Follower**. Das Geld wäre verloren, im schlimmsten Fall auch euer Ruf." }
      ] },
    { k: "wahl", h: "Wie prüfst du die vier Kandidatinnen von B genauer?",
      o: [
        { t: "Ab 10.000 Followern ist die Reichweite groß genug – das passt", p: 0,
          fb: "Die Follower-Zahl ist eine **Vanity Metric** und lässt sich kaufen. Über Echtheit und Passung sagt sie nichts." },
        { t: "Statistik-Screenshots, Follower-Verlauf und Kommentare prüfen", p: 2,
          fb: "Echte Insights (Reichweite, Herkunft, Alter der Follower), ein gleichmäßiger Follower-Verlauf und echte Gespräche in den Kommentaren zeigen, ob die **Community** echt ist und passt." },
        { t: "Sie schriftlich bestätigen lassen, dass alle Follower echt sind", p: 1,
          fb: "Eine Zusicherung im Vertrag ist sinnvoll, ersetzt aber keine **Prüfung**. Zahlen aus der Statistik selbst ansehen ist schneller und sicherer." }
      ] },
    { k: "frei", h: "Briefing und Vertrag",
      b: "Die vier Influencerinnen sagen zu. Notiere die **wichtigsten Punkte**, die in Briefing und Vertrag geregelt werden müssen.",
      muster: [
        ["Werbekennzeichnung („Werbung“/„Anzeige“)", "kennzeichn|\\bwerbung|\\banzeige|bezahlte partner"],
        ["Nutzungsrechte (Kanäle, Dauer, auch für eigene Anzeigen)", "nutzungsrecht|\\brechte\\b|\\blizenz|weiterverwend|wiederverwend|nutzung (der|in|für)"],
        ["Freigabe der Inhalte vor Veröffentlichung", "freigabe|freigeb|freigegeb|abnahme|\\bvorab|(geben|gibt|geb)\\b.{0,25}\\bfrei\\b|vorher (sehen|zeigen|prüfen|schicken|abstimmen)"],
        ["Vergütung (Honorar plus Produkte)", "vergütung|honorar|bezahl|gegenleistung|\\bpreis|\\bgage|\\bentgelt"],
        ["Inhalte, Botschaften, Formate und Zeitraum", "botschaft|zeitraum|\\btermin|zeitplan|\\bformat|\\breels?\\b|\\bstor(y|ys|ies)\\b|kernaussage|\\banzahl"]
      ],
      min: 3,
      bsp: "• Inhalt: 2 Reels + 3 Storys, Kernbotschaft „fair & bequem“\n• Zeitraum: 1.–30.06.2027\n• Kennzeichnung „Werbung“ am Anfang, jede Story-Kachel\n• Freigabe vorab durch uns\n• Nutzungsrechte: eigene Kanäle und Anzeigen, 12 Monate\n• Vergütung: 1.200 € + 2 Teile" },
    { k: "wahl", h: "„Muss ich das kennzeichnen?“", b: "Lea, eine der vier, schreibt: „Bei mir gibt es kein Honorar, ich bekomme nur die Kleider. Dann ist das doch keine Werbung, oder?“",
  o: [
    { t: "Doch: „Werbung“ an den Anfang, bei Storys auf jede Kachel", p: 2, fb: "Auch **Gratisprodukte** sind eine Gegenleistung (**§ 5a Abs. 4 UWG**; BGH 2022, „Influencerin III“). Dann muss der Beitrag auf den ersten Blick als Werbung erkennbar sein. Ohne Kennzeichnung droht auch euch eine Abmahnung." },
    { t: "Ja, ein „#ad“ am Ende der Hashtags genügt", p: 0, fb: "Ein „#ad“ zwischen anderen Hashtags ist **nicht auf den ersten Blick** erkennbar. Klar ist „Werbung“ oder „Anzeige“ am Anfang." },
    { t: "Ja, das Label „Bezahlte Partnerschaft“ der Plattform reicht", p: 1, fb: "Das Plattform-Label hilft, ist aber klein und nicht überall sichtbar. Darauf allein besser nicht bauen – zusätzlich **„Werbung“** an den Anfang." }
  ] },
    { k: "daten", h: "Entwurf zur Freigabe: Leas Reel",
      l: [
        "Video: Lea radelt im Sommerkleid über die Augustusbrücke",
        "Text: „Die **nachhaltigste Mode Deutschlands** – 100 % umweltfreundlich! 🌍“",
        "Darunter: „Mit LEA15 spart ihr 15 %“",
        "Kennzeichnung: fehlt",
        "Fakt laut Jana: Bio-Baumwolle mit GOTS-Siegel, genäht in Polen"
      ] },
    { k: "wahl", h: "Was meldest du Lea zurück?",
      o: [
        { t: "Freigeben – das ist ihr Stil, und genau der wirkt so echt", p: 0,
          fb: "Zwei Probleme gehen online: keine Kennzeichnung und eine **pauschale Umweltaussage**. „Umweltfreundlich“ ohne anerkannten Nachweis ist seit 27.09.2026 unzulässig (UWG, Anhang Nr. 4a)." },
        { t: "„Werbung“ ergänzen, Umweltaussage konkret und belegbar machen", p: 2,
          fb: "Lea behält Bild und Ton, ändert nur zwei Dinge: Kennzeichnung vorn und eine **konkrete, belegbare Aussage** wie „Bio-Baumwolle mit GOTS-Siegel“. Pauschale Öko-Superlative sind ein Abmahnrisiko." },
        { t: "Den ganzen Text selbst schreiben und ihn Lea wörtlich vorgeben", p: 1,
          fb: "Rechtlich sicher, aber der Post klingt dann nach Werbeprospekt. Die Stärke von Influencern ist ihre **Authentizität**. Besser: klare Vorgaben, eigene Worte." }
      ] },
    { k: "wahl", h: "Wie ordnest du die Verkäufe den Influencerinnen zu?",
      o: [
        { t: "Je Person ein eigener Code und ein eigener UTM-Link", p: 2,
          fb: "Mit **LEA15** usw. und Links wie ?utm_source=instagram&utm_campaign=sommer27&utm_content=lea siehst du im Shop und in der Web-Analyse, wer welche Käufe bringt." },
        { t: "Ein gemeinsamer Code SOMMER15 für alle vier", p: 1,
          fb: "Ihr messt die Kampagne gesamt, aber nicht, welche **Influencerin** wirkt. Für die nächste Runde fehlt genau diese Info." },
        { t: "Den Follower-Zuwachs im Kampagnenmonat genau beobachten", p: 0,
          fb: "Follower sagen nichts über **Verkäufe**. Ohne Codes oder Tracking-Links lässt sich kein Umsatz zuordnen – und keine ROI-Rechnung machen." }
      ] },
    { k: "daten", h: "Juni 2027: Das Ergebnis",
      l: [
        "Reichweite gesamt: 96.000 · Likes: 7.400 · neue Follower: 1.850",
        "Klicks über UTM-Links: 3.200",
        "Bestellungen mit Influencer-Codes: 128 (Soll: 120)",
        "Umsatz daraus: 16.000 € (Ø Bestellwert 125 €)",
        "Kosten: 3.600 € Honorar, 600 € Kleidung (Einkauf), 800 € Versand und Fotos = 5.000 €",
        "Rohertrag (Deckungsbeitrag): 40 % vom Umsatz"
      ] },
    { k: "wahl", h: "Was stellst du im Bericht nach vorn?",
      b: "Jana ist begeistert: „7.400 Likes! Das ist doch der Erfolg!“",
      o: [
        { t: "Die 7.400 Likes und die 1.850 neuen Follower", p: 0,
          fb: "Sieht gut aus, sagt aber wenig über das Ziel: **Vanity Metrics**. Euer Ziel waren Bestellungen." },
        { t: "128 Bestellungen statt 120, Conversion-Rate 4 %", p: 2,
          fb: "Das sind die **KPIs**, die am Ziel hängen: Soll übertroffen, und 128 ÷ 3.200 × 100 = **4 %** der Klicks wurden zu Käufen. Reichweite und Likes ergänzen als Bekanntheits-Kennzahlen." },
        { t: "Die Gesamtreichweite von 96.000 erreichten Menschen", p: 1,
          fb: "Passt zum Teilziel **Bekanntheit**, aber nicht zum Hauptziel Verkäufe. Gehört in den Bericht – nur nicht an erste Stelle." }
      ] },
    { k: "wahl", h: "Rechne: Wie hoch ist der ROI der Kampagne?",
      b: "ROI = (Ertrag − Kosten) ÷ Kosten × 100. Ertrag ist der Rohertrag, nicht der Umsatz.",
      o: [
        { t: "220 %", p: 0,
          fb: "Hier wurde mit dem **Umsatz** gerechnet: (16.000 − 5.000) ÷ 5.000. Vom Umsatz müssen aber erst Ware und Herstellung bezahlt werden. Richtig: 6.400 € Rohertrag → **28 %**." },
        { t: "ROAS 3,2", p: 0,
          fb: "16.000 ÷ 5.000 = 3,2 ist die Formel des **ROAS** – die gilt für Umsatz aus **Anzeigen** je Euro Werbekosten. Gefragt ist der ROI der Kooperation: **28 %**." },
        { t: "28 %", p: 2,
          fb: "Rohertrag 40 % von 16.000 € = 6.400 €. (6.400 − 5.000) ÷ 5.000 × 100 = **28 %**. Die Kampagne hat sich gelohnt – und die neuen Kundinnen kaufen vielleicht wieder." },
        { t: "128 %", p: 0,
          fb: "6.400 ÷ 5.000 × 100 = 128 % zeigt nur das Verhältnis von Ertrag zu Kosten. Beim **ROI** werden die Kosten erst abgezogen: **28 %**." }
      ] },
    { k: "fazit", h: "Was du in diesem Projekt angewendet hast",
      l: [
        "**SMART-Ziel** und phasengerechter Content entlang der Customer Journey",
        "Influencer-Auswahl: **Engagement-Rate** statt Follower, gekaufte Follower erkennen",
        "Briefing und Vertrag: Nutzungsrechte, Freigabe, **Kennzeichnung** auch bei Gratisprodukten",
        "Keine pauschalen Umweltaussagen: konkret und belegbar formulieren",
        "Tracking mit Codes und UTM, **ROI** mit Rohertrag statt Vanity Metrics"
      ] }
  ]
},
{
  id: "stadtwerke",
  titel: "Shitstorm bei den Stadtwerken",
  firma: "Stadtwerke Muldenau GmbH",
  rolle: "Du betreust die Social-Media-Kanäle der Stadtwerke einer sächsischen Mittelstadt.",
  kurz: "Vom ersten Alarm bis zur Nachbereitung",
  module: ["plan", "kpi", "recht", "unt"],
  min: 14,
  schritte: [
    { k: "szene", h: "Eine heikle Woche",
      b: "Die **Stadtwerke Muldenau** versorgen 38.000 Haushalte mit Strom, Gas und Wasser. Am Dienstag gehen die Briefe zur **Strompreiserhöhung um 12 %** raus. Am Wochenende davor bekommt die Kunden-App ein Update. Du bist allein im Social-Media-Team, die Pressestelle sitzt eine Etage höher." },
    { k: "wahl", h: "Wie stellst du das Monitoring für diese Woche ein?",
      o: [
        { t: "Die Statistik der eigenen Kanäle einmal pro Woche ansehen", p: 0,
          fb: "So siehst du nur eigene Kanäle und das viel zu spät. Kritik in Gruppen oder Bewertungen bleibt unentdeckt. **Früherkennung** braucht laufendes Monitoring." },
        { t: "Jede einzelne Erwähnung sofort als Push-Meldung aufs Handy holen", p: 1,
          fb: "Du bekommst alles – und übersiehst im Rauschen das Wichtige. **Alert-Schwellen** nicht zu niedrig setzen." },
        { t: "Alerts bei Anstieg und Begriffen wie „Abzocke“, mit Bereitschaft", p: 2,
          fb: "**Alerts** für plötzliche Anstiege und Schlüsselbegriffe plus eine feste **Zuständigkeit** auch abends: So erkennst du eine Welle in den ersten Stunden." }
      ] },
    { k: "daten", h: "Dienstag, 19:40 Uhr: Alarm",
      l: [
        "Die App schickt 9.000 Kunden eine Push-Nachricht: „Ihr neuer Abschlag: 238 €“ – doppelt so hoch wie richtig",
        "Erwähnungen: sonst 30 am Tag, jetzt 640 in 3 Stunden",
        "Häufige Begriffe: „Abzocke“, „doppelt“, „kündigen“",
        "Kritik auf Facebook, Instagram, in Stadtgruppen und Google-Bewertungen",
        "Muldenauer Anzeiger online: „Ärger um Stadtwerke-App“",
        "Ton: meist verärgert, vereinzelt Beleidigungen"
      ] },
    { k: "wahl", h: "Was tust du als Erstes?",
      o: [
        { t: "Sofort einen langen Post schreiben und alles erklären", p: 1,
          fb: "Schnell ist gut. Aber ohne Fakten von der IT riskierst du falsche Aussagen, die du später zurücknehmen musst. Erst **Lage klären**, dann kurz reagieren." },
        { t: "Fakten bei der IT klären, Krisenteam informieren", p: 2,
          fb: "Du klärst: falscher Wert durch einen Fehler im Update, abgebucht wird nichts. Gleichzeitig läuft der **Krisenplan** an. So kann in kurzer Zeit eine erste, richtige Reaktion raus." },
        { t: "Bis morgen früh warten, bis alle im Büro sind", p: 0,
          fb: "Über Nacht füllen sich die Kanäle, Gerüchte entstehen. Ob Kritik zur Krise wird, entscheidet sich in den **ersten Stunden**." }
      ] },
    { k: "wahl", h: "Wie stufst du die Lage auf der Shitstorm-Skala ein?",
      b: "Skala nach Schwede und Graf: Stufe 0 (Windstille) bis 6 (Orkan).",
      o: [
        { t: "Stufe 1: vereinzelte Kritik, noch kein Handlungsbedarf", p: 0,
          fb: "Hunderte Beiträge auf mehreren Kanälen und ein Online-Bericht sind keine vereinzelte Kritik. Wer die Lage **unterschätzt**, reagiert zu spät." },
        { t: "Stufe 4: mehrere Gruppen, erste Presseberichte", p: 2,
          fb: "Viele Kanäle, verschiedene Gruppen, ein Online-Bericht, aber kein bundesweites Thema: etwa **Stufe 4 („starker Wind“)**. Nach Eskalationsmatrix übernimmt jetzt das Krisenteam." },
        { t: "Stufe 6: Orkan – alle Kanäle sofort vom Netz nehmen", p: 0,
          fb: "Stufe 6 heißt: überwiegend aggressiver Ton und Berichte in allen Medien. So weit ist es nicht. Kanäle zu schließen wirkt wie **Flucht** und verlagert die Kritik." }
      ] },
    { k: "frei", h: "Holding Statement",
      b: "Formuliere ein kurzes **Holding Statement** für Facebook und Instagram (3–5 Sätze). Fakten: Fehler im App-Update, angezeigter Abschlag falsch, abgebucht wird nichts.",
      muster: [
        ["Bedauern / Entschuldigung", "bedauer|entschuldig|tut uns (sehr |wirklich )?leid|\\bsorry"],
        ["Fehler offen benennen", "fehler|\\bpanne|technisch|störung"],
        ["Wichtigste Klarstellung: Es wird nichts abgebucht", "nicht abgebucht|keine (abbuchung|zahlung)|nichts (wird )?abgebucht|nicht (ab)?gezogen|bleibt (unverändert|gleich|wie bisher)|müss?en nichts (tun|unternehmen)|bisherige[nr]? abschlag"],
        ["Ankündigung weiterer Infos mit Zeitpunkt", "\\bupdates?\\b|weitere informationen|melden uns|bis morgen|bis \\d|\\d+ ?uhr|halten (euch|sie) auf dem|informieren (euch|sie) (bis|um|sobald|weiter)"],
        ["Anlaufstelle (Infoseite, Hotline)", "hotline|infoseite|\\blink|\\bfaq|telefon|kundenservice|website|webseite"]
      ],
      min: 3,
      bsp: "Viele von euch haben heute eine falsche Push-Nachricht bekommen – das tut uns leid. Ursache ist ein technischer Fehler im App-Update. Wichtig: Abgebucht wird nur euer bisheriger Abschlag. Wir arbeiten an der Korrektur und melden uns bis morgen 10 Uhr. Fragen: Hotline 03xxx 123 oder Infoseite (Link)." },
    { k: "wahl", h: "Wer gibt das Statement frei?",
      b: "Eskalationsmatrix: Stufe 0–2 Social-Media-Team · Stufe 3–4 Krisenteam mit Pressestelle · ab Stufe 5 führt die Geschäftsführung. Pressesprecherin Katrin Seidel ist erreichbar, Geschäftsführer Dr. Brenner im Zug.",
      o: [
        { t: "Du postest allein, denn jetzt zählt jede Minute", p: 0,
          fb: "Ohne Abstimmung kann der Kundenservice am Telefon etwas anderes sagen als du online. Die **Eskalationsmatrix** legt die Freigabe nicht ohne Grund fest." },
        { t: "Frau Seidel gibt frei, Dr. Brenner wird informiert", p: 2,
          fb: "So sieht es die **Eskalationsmatrix** für Stufe 4 vor. Dazu eine **Q&A-Liste**, damit Kundenservice, Pressestelle und du dieselben Antworten geben." },
        { t: "Warten, bis Dr. Brenner aus dem Zug persönlich freigibt", p: 1,
          fb: "Vorsichtig, aber das kostet Stunden. Für Stufe 4 ist die Pressestelle zuständig. Den Geschäftsführer **informieren** reicht hier." }
      ] },
    { k: "daten", h: "Mittwoch, 8 Uhr: Kommentare unter eurem Post",
      l: [
        "„Und wer erklärt mir, warum der Strom trotzdem 12 % teurer wird?“",
        "„Hab bei der Hotline 40 Minuten gewartet. Ernsthaft?“",
        "„Die blöde Kuh Sandra K. im Kundenservice gehört gefeuert!“",
        "„Stadtwerke = Betrüger! Ich weiß, wo der Chef wohnt.“",
        "„Billigstrom hier: www.strom-spar-deal…“"
      ] },
    { k: "wahl", h: "Wie gehst du mit diesen Kommentaren um?",
      o: [
        { t: "Auf jede Kritik antworten, aber nur den Werbe-Spam löschen", p: 1,
          fb: "Sachliche Kritik zu beantworten ist richtig. Aber Beleidigung und Drohung bleiben stehen. Als Seitenbetreiber haftest du **ab Kenntnis** – jetzt musst du handeln und deine Mitarbeiterin schützen." },
        { t: "Antworten; Beleidigung, Drohung, Spam sichern und entfernen", p: 2,
          fb: "Sachliche Fragen sachlich beantworten. Beleidigung und Drohung verstoßen gegen die **Netiquette**: Screenshot mit Datum und Link, dann entfernen, die Drohung melden. Ab Kenntnis musst du **unverzüglich** handeln." },
        { t: "Alle negativen Kommentare löschen, Antworten per Nachricht", p: 0,
          fb: "Sachliche Kritik zu löschen wirkt wie **Zensur**. Die Leute posten Screenshots der gelöschten Kommentare – und die Welle wird größer." }
      ] },
    { k: "wahl", h: "Der Chef will alles weg haben",
      b: "Dr. Brenner ruft an: „Schalten Sie die Kommentare ab und löschen Sie das ganze negative Zeug. Das liest ja jeder!“",
      o: [
        { t: "Erklären: Löschen verstärkt die Welle, Antworten helfen", p: 2,
          fb: "Du nennst den **Streisand-Effekt**: Wer Kritik unterdrückt, macht sie größer. Rechtswidriges wird nach Netiquette entfernt, der Rest beantwortet. Dr. Brenner stimmt zu – mit einem Video-Statement von ihm." },
        { t: "Machen, was er sagt – er ist schließlich der Chef", p: 0,
          fb: "Die gelöschten Kommentare tauchen als Screenshots in Stadtgruppen auf: „Stadtwerke zensieren!“ Der **Streisand-Effekt** schlägt zu, der Anzeiger berichtet erneut." },
        { t: "Kommentare für 24 Stunden begrenzen und das offen sagen", p: 1,
          fb: "Kurz begrenzen und offen begründen kann bei Hass helfen. Hier ist die Kritik aber meist sachlich – sie wandert dann in Gruppen ab, wo du **nicht antworten** kannst." }
      ] },
    { k: "wahl", h: "Wo bündelst du die Informationen?",
      b: "Im Krisenplan liegt eine vorbereitete **Dark Site** für Störungen.",
      o: [
        { t: "Auf jedem Kanal eine eigene, ausführliche Erklärung posten", p: 1,
          fb: "Viel Arbeit, und bei jedem Update veralten fünf Texte an fünf Stellen. Widersprüche sind programmiert. Besser: eine **zentrale Stelle**." },
        { t: "Nur eine Pressemitteilung an den Muldenauer Anzeiger schicken", p: 0,
          fb: "Die Betroffenen fragen auf Facebook und Instagram – dort bleibt es still. **Funkstille** auf den eigenen Kanälen heizt die Spekulation an." },
        { t: "Dark Site als Infoseite freischalten und überall verlinken", p: 2,
          fb: "Eine **zentrale Infoseite** mit FAQ, Uhrzeit des letzten Stands und Hotline. Alle Kanäle verweisen dorthin. So gibt es eine Wahrheit, die du laufend aktualisierst." }
      ] },
    { k: "szene", h: "Donnerstag: neue Baustelle",
      b: "Die Lage beruhigt sich. Da landet ein Screenshot in der Stadtgruppe: Monteur Toni schreibt auf seinem privaten Facebook-Profil, Arbeitgeber „Stadtwerke Muldenau“ sichtbar: „Wer über 12 % heult, soll halt mit Kerzen heizen 😂“. 300 wütende Reaktionen in einer Stunde." },
    { k: "wahl", h: "Wie reagiert ihr?",
      o: [
        { t: "Gespräch mit Toni, Post löschen lassen, Guidelines schärfen", p: 2,
          fb: "Toni löscht den Post selbst. Ihr schreibt: „Das entspricht nicht unserer Haltung.“ Danach: **Social-Media-Guidelines** für privates Posten mit Firmenbezug und Schulungen – mit dem Betriebsrat abgestimmt." },
        { t: "Öffentlich mitteilen, dass Toni eine Abmahnung bekommt", p: 0,
          fb: "Personalmaßnahmen gehören nicht in die Öffentlichkeit – das verletzt Tonis **Persönlichkeitsrechte** und lenkt die Wut auf eine Person. Die Debatte wird größer, nicht kleiner." },
        { t: "Nichts tun – das ist schließlich sein privates Profil", p: 1,
          fb: "Toni darf privat seine Meinung sagen. Aber mit sichtbarem Arbeitgeber wird der Post den **Stadtwerken** zugerechnet. Schweigen wirkt wie Zustimmung." }
      ] },
    { k: "daten", h: "Nachbereitung: Sentiment im Vergleich",
      l: [
        "Krisenwoche: 2.400 Erwähnungen – 240 positiv, 960 neutral, 1.200 negativ",
        "Vier Wochen später: 1.000 Erwähnungen – 180 positiv, 620 neutral, 200 negativ",
        "Kündigungen wegen der App-Panne: 37",
        "Aufrufe der Infoseite: 14.500",
        "Ø Antwortzeit auf Kommentare: von 9 Stunden auf 50 Minuten"
      ] },
    { k: "wahl", h: "Rechne: Wie hat sich der Anteil negativer Erwähnungen verändert?",
      b: "Sentiment Ratio = positiv : neutral : negativ, in % aller Erwähnungen.",
      o: [
        { t: "Von 1.200 auf 200 – also um 30 % gesunken", p: 0,
          fb: "Zwei Fehler: Absolute Zahlen sind kein Anteil, und 1.200 → 200 wäre −83 %. Richtig: 50 % → **20 %**." },
        { t: "Von 50 % auf 20 % – um 30 Prozentpunkte", p: 2,
          fb: "1.200 ÷ 2.400 = **50 %**, 200 ÷ 1.000 = **20 %**. Sentiment Ratio jetzt **18 : 62 : 20**. Der Anteil sinkt um 30 **Prozentpunkte** – das sind relativ 60 % weniger." },
        { t: "Von 50 % auf 20 % – um 30 Prozent", p: 1,
          fb: "Die Anteile stimmen. Aber 50 % → 20 % ist ein Rückgang um 30 **Prozentpunkte** (relativ um 60 %). Im Bericht der Geschäftsführung macht das einen großen Unterschied." }
      ] },
    { k: "fazit", h: "Was du in diesem Projekt angewendet hast",
      l: [
        "**Monitoring** mit Alerts und Bereitschaft als Frühwarnsystem",
        "Lage mit der **Shitstorm-Skala** einstufen, Freigabe nach **Eskalationsmatrix**",
        "**Holding Statement** und zentrale Infoseite (Dark Site) statt Funkstille",
        "Kritik beantworten, Rechtswidriges nach Netiquette entfernen – **Streisand-Effekt** vermeiden",
        "Guidelines für Mitarbeitende und **Sentiment**-Auswertung in der Nachbereitung"
      ] }
  ]
}
];
