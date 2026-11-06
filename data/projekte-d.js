// Praxisprojekte 7 und 8 für „SMM Coach“ (Stand November 2026)
export const PROJEKTE_D = [
{
  id: "hotel",
  titel: "Sterne im Netz",
  firma: "Familienhotel Felsenkuss, Kurort Rathen",
  rolle: "Du übernimmst Bewertungen und Social Media für ein Familienhotel mit Restaurant.",
  kurz: "Vom Bewertungsfrust zu einem guten Ruf",
  module: ["plan", "recht", "unt", "kpi"],
  min: 14,
  schritte: [
    { k: "szene", h: "Ein Hotel unter Druck", b: "Das **Familienhotel Felsenkuss** liegt in der Sächsischen Schweiz: 38 Zimmer, Restaurant mit Elbterrasse. Inhaberin **Anja Lehmann** ist verzweifelt: Die Google-Sterne sinken, Buchungen auch. Seit Freitag hagelt es 1-Stern-Bewertungen. Und auf Instagram vergleichen Gäste das Hotel mit dem Nachbarhaus. Du sollst das in den Griff bekommen." },
    { k: "daten", h: "Bestandsaufnahme", l: [
      "Google: 400 Bewertungen, Ø 3,6 Sterne",
      "Seit Freitag: 30 × 1 Stern in 48 Stunden, ohne Text",
      "Fake-Verdacht: neue Profile, keine anderen Bewertungen",
      "Antwortquote der letzten 12 Monate: 9 %",
      "Echte Kritik: Frühstück, Lärm, WLAN, Rezeption",
      "Instagram: Gäste vergleichen Fotos mit dem Nachbarhotel"
    ] },
    { k: "wahl", h: "Womit fängst du an?", b: "Du hast diese Woche zehn Stunden für das Thema.", o: [
      { t: "Monitoring aufbauen: alle Bewertungsprofile prüfen, Benachrichtigungen einrichten", p: 2, fb: "Richtig: Ohne **Monitoring** weißt du nicht, wo über das Hotel gesprochen wird. Gepflegte **Bewertungsprofile** und Benachrichtigungen sind die Basis jedes **Online Reputation Managements**." },
      { t: "Sofort alle 400 alten Bewertungen der Reihe nach beantworten, auch die von vor drei Jahren", p: 1, fb: "Fleißig, aber unklug priorisiert. Antworten auf jahrealte Bewertungen liest kaum jemand. Erst Überblick und **Monitoring**, dann zuerst die neuen und kritischen Bewertungen beantworten." },
      { t: "Ein Paket mit 50 positiven Bewertungen kaufen, damit der Durchschnitt schnell wieder steigt", p: 0, fb: "Gekaufte Bewertungen sind unlauter (**UWG, Anhang Nr. 23c**) und verstoßen gegen die Google-Richtlinien. Fliegt das auf, ist der Ruf schlimmer beschädigt als durch jede 1-Stern-Welle." }
    ] },
    { k: "daten", h: "Eine echte Beschwerde", l: [
      "Sabine R., 2 Sterne, Gast vom letzten Wochenende:",
      "„Zimmer 14: Heizung rauschte die ganze Nacht.",
      "Frühstück um 9:30 Uhr: Rührei alle, keiner füllte nach.",
      "An der Rezeption hieß es nur: Da kann man nichts machen.“",
      "Anja Lehmann: Das stimmt leider. Das Heizungsventil ist inzwischen getauscht.",
      "Zwei Servicekräfte waren an dem Tag krank."
    ] },
    { k: "frei", h: "Antworte auf die Beschwerde", b: "Schreibe die öffentliche Antwort des Hotels auf die Bewertung von Sabine R. Die Kritik ist **berechtigt**. Achte auf die **fünf Schritte** einer guten Antwort.", muster: [
      ["Dank für das Feedback", "\\bdank"],
      ["Fehler einräumen, Entschuldigung", "entschuldig|tut uns (sehr |wirklich |aufrichtig )?leid|bedauer|\\bberechtigt|zu recht|unser fehler"],
      ["Konkret auf die Kritik eingehen", "heizung|frühstück|rührei|zimmer 14|\\brezeption|\\blärm"],
      ["Lösung oder Änderung nennen", "behoben|repariert|ausgetauscht|getauscht|geändert|ab sofort|künftig|in zukunft|verbessert|nachgefüllt|schulung|\\bbesprochen"],
      ["Persönlichen Kontakt anbieten", "melden sie sich|schreiben sie (uns|mir)|rufen sie|\\banrufen|e-mail|\\bmail\\b|telefon|kontaktier|persönlich|direkt (an|bei)"]
    ], min: 3, bsp: "• Liebe Frau R., danke für Ihr offenes Feedback.\n• Sie haben recht: Die Heizung in Zimmer 14 war defekt, und beim Frühstück wurde nicht nachgefüllt. Das tut uns leid.\n• Das Ventil ist inzwischen getauscht, Rührei gibt es künftig bis 10:30 Uhr.\n• Melden Sie sich gern per E-Mail bei mir – wir möchten das wiedergutmachen.\n• Anja Lehmann, Inhaberin" },
    { k: "wahl", h: "Die Fake-Welle", b: "Anja will unter jede der 30 verdächtigen Bewertungen schreiben: „Anzeige ist raus, unser Anwalt meldet sich.“", o: [
      { t: "Öffentlich drohen, damit die Verfasser wissen, dass wir uns wehren", p: 0, fb: "Drohungen wirken auf Mitlesende unsouverän und heizen die Lage an (**Streisand-Effekt**). Die anonymen Verfasser schreckt das kaum ab – andere Gäste dagegen schon." },
      { t: "Screenshots sichern, bei Google begründet melden, sachlich antworten", p: 2, fb: "Richtig: **Dokumentieren und melden** statt drohen. Begründe konkret, z. B. „kein Gast laut Buchungssystem“. Nach dem BGH (2022) muss ein Portal bei so einer Rüge die Bewertung prüfen. Bleibt Google untätig, hilft ein Anwalt." },
      { t: "Gar nicht reagieren – irgendwann gehen die Bewertungen in der Masse unter", p: 1, fb: "Ruhe bewahren ist gut, aber 30 Fake-Bewertungen drücken den Schnitt sofort. Ohne **Meldung** bleiben sie stehen. Wer prüft und meldet, hat gute Chancen auf Entfernung." }
    ] },
    { k: "wahl", h: "Drei Ideen für bessere Sterne", b: "Für die Hotel-Website liegen drei Vorschläge auf dem Tisch. Welcher ist rechtlich sauber und am glaubwürdigsten?",
  o: [
    { t: "Agentur-Angebot: 40 Fünf-Sterne-Bewertungen von „echten Profilen“ für 290 €", p: 0, fb: "Das ist die Beauftragung gefälschter Bewertungen – nach **UWG, Anhang Nr. 23c** immer unlauter. Abmahnung und Ärger mit Google drohen, egal wie echt die Profile wirken." },
    { t: "Alle Google-Bewertungen per Widget zeigen, mit Hinweis „nicht von uns geprüft“", p: 1, fb: "Erlaubt: Du sagst offen, dass nicht geprüft wird (§ 5b Abs. 3 UWG), und zeigst auch Kritik. Aber ungeprüfte Stimmen überzeugen weniger – und die Fake-Welle stünde mit auf deiner Website." },
    { t: "Bewertungen aus dem Buchungssystem zeigen – nur Gäste mit Buchungsnummer", p: 2, fb: "Richtig: Das ist eine echte **Verifizierung**. Du informierst offen über die Prüfung (§ 5b Abs. 3 UWG). Nur dann darfst du behaupten, die Bewertungen stammen von echten Gästen (**Anhang Nr. 23b**)." }
  ] },
    { k: "wahl", h: "Gäste um Bewertungen bitten", b: "Der Juniorchef schlägt vor: „Wer 5 Sterne gibt, bekommt 10 % Rabatt auf den nächsten Aufenthalt.“", o: [
      { t: "Ein Schild an der Rezeption aufhängen: „Bewerten Sie uns!“", p: 1, fb: "Erlaubt, aber wenig wirksam. Ein Aushang ohne direkten Link und ohne persönliche Bitte bringt kaum neue Bewertungen." },
      { t: "Den Rabatt umsetzen – das bringt schnell viele Fünf-Sterne-Bewertungen", p: 0, fb: "Eine Gegenleistung, die an eine Sternzahl geknüpft ist, verfälscht das Bild. Das ist irreführend (UWG) und verstößt gegen die Google-Richtlinien. Google kann solche Bewertungen löschen." },
      { t: "Alle Gäste per QR-Karte und Mail nach der Abreise fragen – ohne Bedingung", p: 2, fb: "Richtig: **Alle** Gäste fragen, ohne Gegenleistung und ohne Sternvorgabe. Das bringt ehrliche Bewertungen. Und viele zufriedene Gäste, die sonst schweigen, melden sich dann auch." }
    ] },
    { k: "szene", h: "Gäste als Botschafter", wer: "Anja Lehmann, Inhaberin", b: "Auf Instagram vergleichen die Leute ständig Fotos. Ich will echte Gäste zeigen: die Familie aus Leipzig beim Frühstück auf der Terrasse, die Kinder mit dem Elbblick. Kannst du das heute noch posten? Die Eltern haben beim Fotografieren gelacht, das passt schon." },
    { k: "wahl", h: "Das Familienfoto", o: [
      { t: "Ein Hinweisschild aufhängen: „Im Hotel wird für Social Media fotografiert“", p: 0, fb: "Ein Schild ersetzt keine **Einwilligung**. Wer erkennbar abgebildet ist, muss zustimmen (**§ 22 KUG**, DSGVO). Die Ausnahmen in § 23 KUG greifen hier nicht." },
      { t: "Das mündliche Okay des Vaters am Frühstückstisch reicht aus", p: 1, fb: "Ein Anfang, aber schwer zu beweisen. Bei Kindern müssen die **Sorgeberechtigten** zustimmen. Halte die Einwilligung schriftlich oder elektronisch fest, mit Kanal und Dauer." },
      { t: "Schriftliche Einwilligung beider Eltern: Kanäle, Dauer, Widerruf", p: 2, fb: "Richtig: Das **Recht am eigenen Bild** gilt auch für Kinder. Die Einwilligung der **Sorgeberechtigten** ist dokumentiert, Umfang und Widerrufsrecht sind klar. So kannst du das Foto ohne Risiko nutzen." }
    ] },
    { k: "szene", h: "Nachts um halb zwölf", b: "Ein Gast schreibt: „Schnitzel zäh, 1 Stern.“ Küchenchef **Marco** hat das Google-Passwort und antwortet nachts: „Wer Ketchup aufs Schnitzel kippt, hat eh keine Ahnung. Bleib beim Imbiss, du Banause.“ Am Morgen kursiert der Screenshot in einer Facebook-Gruppe der Region: 140 Kommentare." },
    { k: "wahl", h: "Wie reagiert das Hotel?",
  o: [
    { t: "Antwort stehen lassen – Marco hat beim Schnitzel fachlich ja recht", p: 0, fb: "Eine Beleidigung bleibt eine Beleidigung, egal wer recht hat. Alle Mitlesenden sehen, wie das Hotel mit Gästen umgeht. Die Welle wird größer." },
    { t: "Antwort löschen, sich als Inhaberin öffentlich entschuldigen, Zugänge neu regeln", p: 2, fb: "Richtig: Fehler offen zugeben und zeigen, was sich ändert. Dazu gehört **Social Media Governance**: Nur zwei Personen antworten, eigene Rollen statt geteiltem Passwort. Kritische Antworten gehen vorher zur Freigabe." },
    { t: "Antwort still löschen und hoffen, dass sich alles beruhigt", p: 1, fb: "Das Löschen ist richtig, aber der Screenshot ist längst im Umlauf. Schweigen wirkt wie Vertuschen. Erst eine Entschuldigung und neue Regeln beenden die Diskussion." }
  ] },
    { k: "daten", h: "Sechs Monate später", l: [
      "Start: 400 Bewertungen, Ø 3,6 Sterne",
      "Davon 30 Fake-1-Sterne – nach Meldung entfernt",
      "Neu in 6 Monaten: 200 Bewertungen, Ø 4,7 Sterne",
      "Beantwortet: 188 von 200 neuen Bewertungen",
      "Direktbuchungen Q3: 366 (Q1: 310)",
      "Direktbuchungen Q3 Vorjahr: 352"
    ] },
    { k: "wahl", h: "Wie hoch ist der neue Sternedurchschnitt?", b: "Rechne mit allen Bewertungen, die jetzt online stehen.", o: [
      { t: "4,2 Sterne", p: 0, fb: "Das ist der einfache Mittelwert aus 3,6 und 4,7. Er ist falsch, weil die Gruppen unterschiedlich groß sind. Du musst **gewichtet** rechnen." },
      { t: "4,1 Sterne", p: 2, fb: "Richtig: 400 × 3,6 = 1.440 Sterne, minus 30 Fakes = 1.410 bei 370 Bewertungen. Dazu 200 × 4,7 = 940. Ergibt 2.350 ÷ 570 = **4,1**." },
      { t: "3,8 Sterne", p: 0, fb: "Das ist nur der Wert nach dem Entfernen der Fakes: 1.410 ÷ 370 = 3,8. Die 200 neuen Bewertungen fehlen noch." },
      { t: "4,7 Sterne", p: 0, fb: "Das ist nur der Schnitt der neuen Bewertungen. Google rechnet mit allen 570 Bewertungen, die online stehen." }
    ] },
    { k: "wahl", h: "Was meldest du Anja?", b: "Die **Antwortquote** liegt bei 188 ÷ 200 × 100 = 94 %. Anja fragt: „Und die Buchungen? Plus 18 %, oder?“",
  o: [
    { t: "Ja, +18 % mehr Direktbuchungen – das ist allein der Erfolg der Bewertungen", p: 0, fb: "Q1 ist Nebensaison, Q3 Hauptsaison. Der Vergleich zeigt vor allem die **Saison**, nicht die Wirkung der Bewertungen. Ursache und Zusammenhang sind nicht dasselbe." },
    { t: "Die Buchungen lieber gar nicht berichten, nur Sterne und Antwortquote", p: 1, fb: "Sterne und Antwortquote sind wichtig. Aber das Ziel ist Umsatz – ein guter Bericht zeigt deshalb auch die Buchungen, nur richtig verglichen." },
    { t: "+4 % zum Vorjahresquartal; bessere Bewertungen sind ein möglicher Grund unter mehreren", p: 2, fb: "Richtig: 366 ÷ 352 = **+4 %** im fairen **Vorjahresvergleich** derselben Saison. Für einen **Soll-Ist-Vergleich** bräuchtest du ein vorher festgelegtes Ziel. Ehrlich eingeordnet bleibt der Bericht glaubwürdig." }
  ] },
    { k: "fazit", h: "Was du in diesem Projekt angewendet hast", l: [
      "**ORM:** Monitoring und gepflegte Bewertungsprofile zuerst",
      "Berechtigte Kritik: danken, zugeben, lösen, Kontakt anbieten",
      "Fakes melden statt drohen; nie kaufen (UWG Nr. 23b/23c)",
      "Alle Gäste fragen, ohne Gegenleistung; Bildrechte einholen",
      "Governance für Zugänge; Kennzahlen fair vergleichen"
    ] }
  ]
},
{
  id: "tourismus",
  titel: "Die Kampagne soll viral gehen",
  firma: "Tourismusverband Silberauen e. V., Mittelsachsen",
  rolle: "Du bist die Social-Media-Managerin bzw. der Social-Media-Manager eines regionalen Tourismusverbands.",
  kurz: "Von der Viral-Idee zum ehrlichen Reporting",
  module: ["einf", "unt", "recht", "plan", "kpi"],
  min: 14,
  schritte: [
    { k: "szene", h: "Der Auftrag", wer: "Bürgermeister Matthias Kunze, Vorstandsvorsitzender", b: "Unsere Region kennt keiner unter 50. Wir brauchen ein **virales Video** – so wie damals die Ice Bucket Challenge! Ganz Deutschland soll über die Silberauen reden. Du hast 15.000 Euro und bis Mai Zeit. Im Herbst will der Vorstand Ergebnisse sehen." },
    { k: "daten", h: "Ausgangslage", l: [
      "Instagram: 3.900 Follower, Ø Reichweite 2.100 je Beitrag",
      "Übernachtungen im Jahr: 380.000, Ø Alter der Gäste: 58",
      "Wunsch-Zielgruppe: junge Familien, Kurzurlauber",
      "Herkunft: vor allem Leipzig, Dresden, Chemnitz, Berlin",
      "Highlights: Schloss Rabenfels, Aussichtspunkt Rabenkanzel, Turm Silberpfeil",
      "Budget: 15.000 € für Mai bis September"
    ] },
    { k: "wahl", h: "Was sagst du dem Bürgermeister?", o: [
      { t: "„Viralität kann niemand garantieren. Wir schaffen Voraussetzungen und messen an Zielen.“", p: 2, fb: "Richtig: **Viralität ist nicht planbar.** Fördern kannst du sie mit Emotion, einfacher **Mitmach-Mechanik** und gezieltem **Seeding**. Die Ice Bucket Challenge war ein seltener Ausnahmefall (Nature, 2017)." },
      { t: "„Wir kopieren die Ice Bucket Challenge: Eiswasser über den Kopf am Stausee.“", p: 1, fb: "Mitmach-Mechanik ist gut, aber eine Kopie wirkt alt. Ihr fehlt der Bezug zur Region und zu einem guten Zweck. Und Mutproben am Wasser bringen ein Sicherheitsrisiko." },
      { t: "„Mit 15.000 € Werbebudget kaufen wir eine Million Views – dann sind wir doch viral.“", p: 0, fb: "Gekaufte Reichweite ist **Paid Media**, nicht viral. Der virale Effekt entsteht, wenn Nutzer selbst teilen (**Earned Media**). Kaufen lässt er sich nicht." }
    ] },
    { k: "frei", h: "Ziel und Zielgruppe festlegen", b: "Formuliere für die Kampagne ein **SMART-Ziel**. Nenne dazu die **Hauptzielgruppe**. Denk an Zahl, Kennzahl, Zeitraum und Kanal.",
  muster: [
    ["Zahl mit Messgröße (Anfragen, Buchungen, Gäste-Beiträge – nicht Follower)", "\\d[\\d.,]*\\s?(%|prozent|([a-zäöüß-]+\\s)?(buchung|übernacht|beitr|anfrag|gäste|besuch|klick|ankünft))"],
    ["Zeitraum oder Termin", "\\bbis\\b|\\bende\\b|\\binnerhalb\\b|\\bmonat|\\bwochen\\b|quartal|\\bsommer|\\bseptember|\\b20\\d\\d\\b"],
    ["Konkrete Zielgruppe", "famili|\\bpaare?\\b|kurzurlaub|wander|\\bjunge|leipzig|dresden|chemnitz|berlin|\\d+ ?(bis|–|-) ?\\d+ jahr"],
    ["Kanal oder Mechanik", "instagram|tiktok|facebook|youtube|hashtag|\\bugc\\b|website|webseite|\\breels?\\b|creator|influencer"]
  ],
  min: 4,
  bsp: "• Ziel: Bis 30. September 2027 steigen die Buchungsanfragen über die Website um 15 % gegenüber dem Vorjahreszeitraum.\n• Zusätzlich: 2.000 Gäste-Beiträge mit dem Kampagnen-Hashtag auf Instagram.\n• Zielgruppe: junge Familien (30–45 Jahre) aus Leipzig, Dresden und Berlin, die Kurzurlaub in der Natur suchen." },
    { k: "wahl", h: "Welche Kampagnen-Idee?", o: [
      { t: "Hochwertiger Imagefilm für 12.000 €, Start auf YouTube und der Website", p: 1, fb: "Ein schöner Film kann helfen, aber ihm fehlt die **Mitmach-Mechanik**. Ohne Anlass zum Teilen bleibt die Reichweite bei bezahlter Ausspielung hängen – und das Budget ist fast weg." },
      { t: "Gewinnspiel: „Teile diesen Beitrag in deiner Chronik und gewinne ein Wochenende“", p: 0, fb: "Meta verbietet, das Teilen in der eigenen Chronik zur Teilnahme vorzuschreiben. Außerdem bringt das Teilen keine echten Inhalte über die Region." },
      { t: "Hashtag-Aktion #SilberauenMoment: Gäste zeigen ihren Lieblingsplatz", p: 2, fb: "Richtig: einfache Idee, Emotion und **Mitmach-Mechanik**. Die Beiträge der Gäste (**UGC**) sind glaubwürdig und erreichen neue Netzwerke. Wichtig: klare Teilnahmebedingungen und Datenschutzhinweise." }
    ] },
    { k: "wahl", h: "Die besten Gästefotos nutzen", b: "Nach einer Woche gibt es 640 Beiträge mit #SilberauenMoment. Die schönsten sollen auf den Kanal des Verbands, einige auch in eine Anzeige.", o: [
      { t: "Herunterladen und posten – wer den Hashtag nutzt, ist einverstanden", p: 0, fb: "Ein Hashtag ist keine Lizenz. Wer ein fremdes Foto **neu hochlädt**, veröffentlicht es selbst und braucht die Zustimmung der Rechteinhaber. Sonst droht eine Abmahnung." },
      { t: "Per Nachricht fragen: Kanäle, Dauer, auch Werbung? Zustimmung sichern, Urheber nennen", p: 2, fb: "Richtig: So sind die **Nutzungsrechte** klar, auch für Anzeigen. Denk an **abgebildete Personen**: Auch sie müssen zustimmen. Für schnelle Story-Reposts reicht oft die **Repost-Funktion**." },
      { t: "Nur mit der Repost-Funktion in der Story teilen und auf Anzeigen mit UGC verzichten", p: 1, fb: "Die **Repost-Funktion** verweist auf das Original und ist meist weniger riskant. Für Feed-Beiträge und Werbung brauchst du aber ausdrücklich eingeräumte Rechte – so verschenkst du die besten Inhalte." }
    ] },
    { k: "wahl", h: "Das Drohnenfoto", b: "Das Top-Foto zeigt den modernen Aussichtsturm **Silberpfeil** (Architekturbüro, 2019) per Drohne von oben. Es soll auf Plakate und in Anzeigen.", o: [
      { t: "Kein Problem: Der Turm steht öffentlich, das deckt die Panoramafreiheit ab", p: 0, fb: "Die **Panoramafreiheit (§ 59 UrhG)** gilt nur für die Sicht von öffentlichen Wegen. Drohnenaufnahmen von oben deckt sie nicht (BGH 2024). Der Turm ist als Bauwerk geschützt." },
      { t: "Nur den Fotografen fragen und ihm eine Lizenz für Plakate abkaufen", p: 1, fb: "Die Rechte am Foto sind damit geklärt, die am Bauwerk aber nicht. Für die Drohnensicht brauchst du zusätzlich die Erlaubnis der Architekten – oder ein Foto vom Boden." },
      { t: "Lizenz vom Fotografen und Okay der Architekten – sonst Foto vom Wanderweg", p: 2, fb: "Richtig: Zwei Rechte, zwei Erlaubnisse. Ein Foto vom öffentlichen Weg fällt unter die **Panoramafreiheit**. Prüfe auch die Drohnenregeln: Über Naturschutzgebieten ist Fliegen meist verboten." }
    ] },
    { k: "wahl", h: "Welche Creatorin oder welcher Creator?", b: "Für das **Seeding** willst du regionale Creators einbinden. Budget: 2.500 €.",
  o: [
    { t: "@wanderwilma: 23.000 Follower, Familien-Wandertouren, 70 % aus Mitteldeutschland, Engagement-Rate 5,2 %", p: 2, fb: "Richtig: Sie passt zur Zielgruppe und hat eine aktive Community. Die **Engagement-Rate** zählt mehr als die Follower-Zahl. Ihr Publikum ist nah dran und kommt eher wirklich vorbei." },
    { t: "@cityjonas: 180.000 Follower, Lifestyle aus Berlin, Engagement-Rate 0,8 %, Preis 4.000 €", p: 1, fb: "Viel Reichweite, aber wenig Beteiligung und kaum Bezug zur Region. Außerdem sprengt er das Budget. Für **Seeding** zählt die Passung zur Zielgruppe." },
    { t: "Ein Reiseprofil: 95.000 Follower für 300 €, Follower meist aus dem Ausland, Engagement-Rate 0,2 %", p: 0, fb: "Viele Follower, fast keine Interaktion, falsches Publikum – typische Hinweise auf **gekaufte Follower**. Das Geld wäre verloren." }
  ] },
    { k: "wahl", h: "Wie wird der Beitrag gekennzeichnet?", b: "@wanderwilma bekommt 800 € und zwei Übernachtungen. Der Bürgermeister meint: „Wir sind ein Verein, das ist doch keine Werbung.“", o: [
      { t: "Gar nicht – der Verband verkauft ja nichts und zahlt nur die Übernachtung", p: 0, fb: "Geld und Übernachtungen sind eine **Gegenleistung**. Der Beitrag wirbt für die Region und ihre Betriebe. Ohne Kennzeichnung ist das Schleichwerbung (§ 5a Abs. 4 UWG)." },
      { t: "„Werbung“ an den Anfang jedes Beitrags und jeder Story-Kachel, per Vertrag", p: 2, fb: "Richtig: Werbung muss **auf den ersten Blick** erkennbar sein. Das Label „Bezahlte Partnerschaft“ kannst du zusätzlich nutzen. Im Vertrag regelst du Kennzeichnung, Freigabe und Nutzungsrechte." },
      { t: "Nur das Instagram-Label „Bezahlte Partnerschaft“ aktivieren, das reicht", p: 1, fb: "Das Label hilft, ist aber leicht zu übersehen. Darauf allein solltest du nicht bauen. Sicherer ist „Werbung“ am Anfang des Beitrags und auf jeder Story-Kachel." }
    ] },
    { k: "szene", h: "Ärger unter dem Reel", wer: "Kommentar von Heike M., Anwohnerin", b: "Seit eurer tollen Kampagne parken jeden Sonntag 200 Autos in unserer Straße zur Rabenkanzel. Müll im Wald, Lärm bis abends. Wir wohnen hier! Danke für nichts. – 86 Likes, 41 Antworten, auch der Ortschaftsrat kommentiert." },
    { k: "wahl", h: "Wie reagierst du?", o: [
      { t: "Mit einer Standardantwort danken: „Wir freuen uns über jeden Gast in den Silberauen!“", p: 1, fb: "Freundlich, aber am Thema vorbei. Wer echte Probleme schildert und eine Floskel bekommt, fühlt sich nicht ernst genommen. Die Kritik wächst weiter." },
      { t: "Die Kommentare ausblenden, damit die Kampagne nicht beschädigt wird", p: 0, fb: "Sachliche Kritik zu verstecken verstärkt sie oft (**Streisand-Effekt**). Die Anwohner tragen den Ärger dann in die Lokalpresse. Löschen ist nur bei Beleidigungen oder Rechtsverstößen nach Netiquette angebracht." },
      { t: "Kritik anerkennen, Maßnahmen nennen (Shuttle, Parkplatz), Treffen anbieten", p: 2, fb: "Richtig: schnell, ehrlich und mit Taten. Die Kritik am **Overtourism** ist berechtigt. Du bewirbst die Rabenkanzel nicht mehr, nennst Alternativen und lädst zum Gespräch ein. So wird aus Kritik Vertrauen." }
    ] },
    { k: "daten", h: "Ergebnis nach der Kampagne", l: [
      "Beiträge des Verbands: 24, Reichweite gesamt: 410.000",
      "Likes: 18.400 · Kommentare: 1.680 · Shares: 2.160",
      "Gäste-Beiträge mit #SilberauenMoment: 3.150",
      "Buchungsanfragen Website: 1.240 (Vorjahr: 1.010)",
      "Anwohnerkritik: nach Shuttle-Start deutlich weniger",
      "Kosten gesamt: 15.000 €"
    ] },
    { k: "wahl", h: "Wie hoch ist die Amplification Rate nach Kaushik?", o: [
      { t: "70 pro Beitrag", p: 0, fb: "Das sind die Kommentare pro Beitrag (1.680 ÷ 24) – also die **Conversation Rate**. Amplification misst das Weiterverbreiten." },
      { t: "0,53 %", p: 1, fb: "Das ist der Anteil der Shares an der Reichweite (2.160 ÷ 410.000). Viele Tools rechnen so. Kaushik rechnet aber **pro Beitrag** – nenne immer die Bezugsgröße." },
      { t: "90 pro Beitrag", p: 2, fb: "Richtig: **Amplification Rate** = Shares ÷ Beiträge = 2.160 ÷ 24 = **90** Weiterverbreitungen pro Beitrag." },
      { t: "160 pro Beitrag", p: 0, fb: "Hier sind Kommentare und Shares addiert: 3.840 ÷ 24. Kaushik trennt die beiden Kennzahlen bewusst." }
    ] },
    { k: "wahl", h: "Und die Conversation Rate?", o: [
      { t: "767 pro Beitrag", p: 0, fb: "Das sind die Likes pro Beitrag (18.400 ÷ 24 ≈ 767) – also die **Applause Rate**." },
      { t: "70 pro Beitrag", p: 2, fb: "Richtig: **Conversation Rate** = Kommentare ÷ Beiträge = 1.680 ÷ 24 = **70** Kommentare pro Beitrag." },
      { t: "90 pro Beitrag", p: 0, fb: "Das ist die **Amplification Rate** (Shares pro Beitrag). Für die Conversation Rate zählen die Kommentare." }
    ] },
    { k: "wahl", h: "Der Bericht an den Vorstand", b: "Der Bürgermeister fragt: „Waren wir jetzt viral?“ Der Vorstand will eine Seite.", o: [
      { t: "Eine Seite mit Reichweite, Likes und den schönsten Gästefotos", p: 1, fb: "Anschaulich, aber nur **Vanity Metrics**. Der Vorstand erfährt nicht, ob die Ziele erreicht sind und was eine Anfrage gekostet hat." },
      { t: "Scorecard: je Ziel Kennzahl, Zielwert, Ist – inkl. Anwohnerkritik", p: 2, fb: "Richtig: Eine **Balanced Scorecard** zeigt mehrere Blickwinkel: z. B. Anfragen +23 % (Gäste), 15.000 € ÷ 230 zusätzliche Anfragen ≈ 65 € je Anfrage (Finanzen), Antwortzeit (Prozesse), Lehren (Lernen)." },
      { t: "„Ja, 410.000 Reichweite!“ – die Anwohnerkritik lassen wir weg", p: 0, fb: "Reichweite allein heißt nicht viral, und das Weglassen von Kritik macht den Bericht unglaubwürdig. Der Vorstand erfährt es ohnehin aus dem Ortschaftsrat." }
    ] },
    { k: "fazit", h: "Was du in diesem Projekt angewendet hast", l: [
      "Viralität ist nicht planbar: Emotion, Mitmach-Mechanik, Seeding",
      "SMART-Ziel und klare Zielgruppe statt „viral gehen“",
      "UGC: Rechte einholen; Panoramafreiheit gilt nicht für Drohnen",
      "Creators nach Passung wählen und als Werbung kennzeichnen",
      "Kritik ernst nehmen; Kaushik-Kennzahlen pro Beitrag in der Scorecard"
    ] }
  ]
}
];
