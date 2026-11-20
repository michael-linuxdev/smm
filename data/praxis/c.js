// Praxisprojekte aus den Hausaufgaben, Teil C (Stand November 2026). Fiktive Firmen und Personen.
// Grundlagen: data/lernen/kpi.js, platt1.js (Corporate Blogs), plan.js, platt3.js (Hashtags), recht.js (Cookie-Einwilligung II);
// smm2.pdf S. 1–42, smm3.pdf S. 64–91, smm1.pdf S. 77–170.
export const PRAXIS_C = [
{
  id: "blog-erfolg",
  titel: "Den Blog-Erfolg messen",
  firma: "Tischlerei Kühn, Chemnitz",
  rolle: "Du zeigst deiner Chefin, wie die Tischlerei den Erfolg ihres Blogs misst.",
  kurz: "Ziele, KPIs und Tools für den Firmenblog",
  module: ["kpi", "platt"],
  min: 10,
  schritte: [
    { k: "szene", h: "Die Aufgabe", wer: "Sandra Kühn, Geschäftsführerin",
      b: "Wir schreiben seit zwei Jahren einen **Blog** mit Tipps zu Holz und Möbeln. Aber niemand prüft, ob er etwas bringt. Ich möchte wissen: Wie messen wir den **Erfolg** sinnvoll? Nenne mir mindestens **drei Möglichkeiten**. Sag jeweils, was du misst, warum und wie. Zeig auch, woher die Daten kommen und welche **Tools** wir brauchen." },
    { k: "daten", h: "Die Vorgabe: deine Tabelle", l: [
      "**Spalten:** Nr. · Ziel/Fragestellung · Metriken/KPIs · Erhebung/Tools",
      "**1** · Sind die Bloginhalte für die Leser interessant? · Seitenaufrufe, Verweildauer · Google Analytics",
      "**2** · ? · ? · ?",
      "**3** · ? · ? · ?",
      "Zeile 2 und 3 füllst du selbst aus. Weitere Zeilen sind erlaubt."
    ] },
    { k: "wahl", h: "Womit fängst du an?", b: "Die Tabelle beginnt mit der Spalte **Ziel/Fragestellung**.",
      o: [
        { t: "Ich exportiere alle Werte aus dem Tool und suche das Wichtigste", p: 0,
          fb: "So ertrinkst du in Daten. Die Vorlesung sagt: „Was wollen wir wissen?“ kommt vor „Was können wir messen?“. Ohne Ziel weißt du nicht, welche Zahl zählt." },
        { t: "Ich kläre zuerst, was der Blog erreichen soll, dann wähle ich KPIs", p: 2,
          fb: "Richtig. Erst das **Ziel**, dann die **Kennzahl**. So arbeitet auch das **BVDW-Modell**: Ziel, Indikator, Kennzahl, Erhebungsmethode. Genau diese Reihenfolge hat auch deine Tabelle." },
        { t: "Ich zähle die Likes der Posts, die auf den Blog verlinken", p: 1,
          fb: "Likes zeigen etwas Interesse an den Posts. Über den Blog selbst sagen sie wenig. Nicht alles Zählbare zählt. Wähle Kennzahlen, die zum Ziel des Blogs passen." }
      ] },
    { k: "daten", h: "Was der Kurs zum Blog-Erfolg sagt", l: [
      "**Corporate Blog:** Besucher, Lesedauer, Herkunft aus Suche, KI und Social",
      "**Weitere Blog-KPIs:** Newsletter-Anmeldungen, Leads, Nennung in KI-Antworten",
      "**Webtracking:** Klicks, Downloads, Leads, Verkäufe",
      "**Befragung:** Bekanntheit, Zufriedenheit, Net Promoter Score",
      "**Monitoring:** Nennungen und Sentiment, etwa mit Google Alerts",
      "**Best Practice:** pro Kanal ein Ziel, wenige Kennzahlen monatlich berichten"
    ] },
    { k: "wahl", h: "Zeile 2: Welche Fragestellung passt am besten?", b: "Zeile 1 prüft schon, ob die Inhalte interessant sind. Zeile 2 soll etwas Neues zeigen.",
      o: [
        { t: "Gefällt den Lesern das neue Design des Blogs?", p: 1,
          fb: "Eine mögliche Frage. Die Antwort misst aber vor allem Geschmack. Du klärst das nur per **Befragung**. Für das Geschäft der Tischlerei bringt sie wenig." },
        { t: "Finden neue Leser den Blog, und über welche Wege?", p: 2,
          fb: "Stark. Ein Blog nützt nur, wenn man ihn findet. Die KPIs sind **Besucher** und **Herkunft**: Suche, Social, KI. Google Analytics zeigt die Quellen. **Tracking-URLs** markieren Links aus Social-Media-Posts." },
        { t: "Wie viele Artikel schreiben wir pro Monat?", p: 0,
          fb: "Das gehört in den Redaktionsplan. Die Zahl der Artikel zeigt deine Arbeit, nicht die Wirkung. Erfolg misst du bei den Lesern." }
      ] },
    { k: "wahl", h: "Zeile 3: Bringt der Blog dem Geschäft etwas?", b: "Sandra will wissen, ob aus Lesern Kunden werden. Welche KPI passt dazu?",
      o: [
        { t: "Anfragen aus dem Blog über das Kontaktformular, per Webtracking gezählt", p: 2,
          fb: "Genau. **Leads** und die **Conversion Rate** zeigen den Wert für das Geschäft. Webtracking misst, wer vom Artikel zum Formular geht. Im Vertrieb prüfst du, ob daraus Aufträge werden." },
        { t: "Die Zahl der Instagram-Follower nach jedem neuen Blogartikel", p: 0,
          fb: "Follower sind eine Kennzahl für Reichweite auf Instagram. Follower zeigen nicht, ob Blog-Leser zu Kunden werden. Ziel und KPI passen nicht zusammen." },
        { t: "Eine Umfrage im Jahr, ob Kunden den Blog kennen", p: 1,
          fb: "Die **Befragung** ist eine Methode aus dem BVDW-Modell. Die Umfrage zeigt Bekanntheit. Ob Anfragen entstehen, misst sie aber ungenau und zu selten." }
      ] },
    { k: "wahl", h: "Wie erhebst du die Daten richtig?", b: "Google Analytics soll auf der Website mit dem Blog laufen.",
      o: [
        { t: "Ich baue das Tool ein und lese die Zahlen einmal im Jahr ab", p: 1,
          fb: "Das Tool passt. Einmal im Jahr ist aber zu selten. Die Vorlesung empfiehlt monatliche Berichte mit wenigen Kennzahlen. Nur so erkennst du Trends und steuerst gegen." },
        { t: "Ich hole eine aktive Einwilligung im Cookie-Banner und berichte monatlich", p: 2,
          fb: "Richtig. Tracking-Cookies brauchen eine **aktive Einwilligung**. Ein vorausgefülltes Häkchen reicht nicht, so der BGH 2020. Monatliche Berichte zeigen **Soll und Ist** und lösen Maßnahmen aus." },
        { t: "Ich frage einen Stammleser des Blogs nach seiner Meinung", p: 0,
          fb: "Eine einzelne Meinung ist keine Messung. Das Urteil ist zufällig und nicht vergleichbar. Erfolg misst du mit Kennzahlen und festen Methoden." }
      ] },
    { k: "frei", h: "Fülle die Tabelle aus",
      b: "Schreib mindestens **drei Zeilen** für die Tabelle. Nenne je Zeile das **Ziel**, die **KPIs** und die **Erhebung mit Tools**. Zeile 1 darfst du aus der Vorgabe übernehmen.",
      muster: [
        ["Inhalte interessant: Seitenaufrufe, Verweildauer", "seitenaufruf|verweildauer|lesedauer"],
        ["Blog wird gefunden: Besucher und Herkunft", "herkunft|quelle|\\bsuche|traffic|besucher"],
        ["Leser werden Kunden: Leads, Anfragen, Newsletter", "\\blead|anfrage|conversion|newsletter"],
        ["Tool: Google Analytics oder Webtracking", "analytics|tracking"],
        ["Weitere Erhebung: Befragung, Monitoring, Vertrieb", "befrag|umfrage|monitoring|alerts|vertrieb|controlling"]
      ],
      min: 3,
      bsp: "• **1 Interesse:** Sind die Inhalte interessant? KPIs: Seitenaufrufe, Verweildauer. Tool: Google Analytics.\n• **2 Reichweite:** Finden neue Leser den Blog? KPIs: Besucher, Herkunft aus Suche, Social und KI. Tools: Google Analytics, Tracking-URLs in Posts.\n• **3 Geschäft:** Werden Leser zu Kunden? KPIs: Leads über das Kontaktformular, Newsletter-Anmeldungen, Conversion Rate. Tools: Webtracking, Zählung im Vertrieb.\n• **4 Ruf:** Wie spricht man über den Blog? KPIs: Erwähnungen, Kommentare, Sentiment. Tool: Google Alerts oder Talkwalker Alerts.\n• **Erhebung:** Tracking nur mit aktiver Einwilligung. Werte monatlich im Report vergleichen." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Erst das Ziel klären, dann passende KPIs wählen (BVDW-Modell).",
      "**Interesse:** Seitenaufrufe und Verweildauer, gemessen mit Google Analytics",
      "**Reichweite:** Besucher und Herkunft, mit Analytics und Tracking-URLs",
      "**Geschäft:** Leads und Newsletter-Anmeldungen per Webtracking und Vertrieb",
      "Tracking nur mit Einwilligung. Ergebnisse monatlich berichten."
    ] }
  ]
},
{
  id: "hundefutter",
  titel: "Themen für den Futter-Shop",
  firma: "Gutnapf Naturfutter, Leipzig",
  rolle: "Du gewinnst als Social Media Manager neue Kunden für einen Futter-Shop.",
  kurz: "Themen mit Mehrwert für den Redaktionsplan",
  module: ["plan", "platt"],
  min: 10,
  schritte: [
    { k: "szene", h: "Die Aufgabe", wer: "Katrin Brandt, Inhaberin",
      b: "Wir verkaufen online gesundes, artgerechtes Hundefutter ohne Zusatzstoffe. Über Social Media wollen wir **neue Kunden** gewinnen. Du bist unser Social Media Manager. Finde Themen mit **Mehrwert** für den **Redaktionsplan**. Schlag mindestens **drei Ideen** vor. Die Zielgruppe soll uns darüber finden. Und die Inhalte sollen ihr etwas nützen." },
    { k: "daten", h: "Die Ausgangslage", l: [
      "**Produkt:** Hundefutter ohne Zusatzstoffe, Verkauf nur im Online-Shop",
      "**Ziel:** neue Kunden über Social Media gewinnen",
      "**Zielgruppe:** Hundehalter, denen Gesundheit und Herkunft wichtig sind",
      "**Bisher:** fast nur Produktfotos mit Preis, kaum Reaktionen",
      "**Kanäle:** Instagram, Facebook und ein Blog im Shop"
    ] },
    { k: "wahl", h: "Was ist eigentlich gefragt?",
      o: [
        { t: "Mehr Produktposts mit Rabatt, damit schneller gekauft wird", p: 0,
          fb: "Für deine Produkte interessiert sich meist niemand, sagt die Vorlesung. Menschen interessieren sich für ihre Bedürfnisse. Reine Werbung soll nur rund **10 %** ausmachen (Faustregel **70-20-10**)." },
        { t: "Themen, die Hundehaltern helfen und zu unserem Futter passen", p: 2,
          fb: "Genau. Gesucht ist **Mehrwert-Content**: informieren, beraten, inspirieren, unterhalten. Das nennt man **Content Marketing**. Nach der Faustregel sind **70 %** der Beiträge Mehrwert-Themen." },
        { t: "Lustige Hundevideos, egal zu welchem Thema", p: 1,
          fb: "Unterhaltung kann Reichweite bringen. Ohne Bezug zur Ernährung finden dich aber nicht die richtigen Leute. Guter Content passt zur Marke und bringt Nutzen." }
      ] },
    { k: "wahl", h: "Wie findest du Themen, nach denen Hundehalter suchen?",
      o: [
        { t: "Ich frage nur das Team, was es selbst spannend findet", p: 1,
          fb: "Ideen aus dem Team sind wertvoll. Aber du ahnst nur, was die Zielgruppe will. Ergänze **Recherche-Tools**, Kundenfragen und Feedback aus dem Monitoring." },
        { t: "Ich nutze das W-Fragen-Tool, Answer the Public und Kundenfragen", p: 2,
          fb: "Richtig. Diese Tools zeigen echte **Fragen** zu einem Keyword, etwa „Hundefutter ohne Zusatzstoffe“. Auch der Support liefert Ideen. So triffst du Themen, nach denen gesucht wird." },
        { t: "Ich übernehme die Themen des größten Wettbewerbers", p: 0,
          fb: "Der Wettbewerb darf inspirieren. Kopieren macht dich aber austauschbar. Mehrwert entsteht aus deiner eigenen Expertise und den Fragen deiner Zielgruppe." }
      ] },
    { k: "daten", h: "Das ergibt deine Recherche", l: [
      "„Was darf mein Hund nicht fressen?“",
      "„Wie stelle ich das Futter richtig um?“",
      "„Was bedeuten die Angaben auf dem Etikett?“",
      "„Welches Futter passt für Welpen und alte Hunde?“",
      "„Wie viel Futter braucht mein Hund am Tag?“"
    ] },
    { k: "wahl", h: "Welche Idee passt am besten in den Plan?", b: "Prüfe jede Idee mit der Frage: Warum sollte jemand das finden, lesen und teilen?",
      o: [
        { t: "Serie „Etikett-Check“: Was steckt wirklich im Futter?", p: 2,
          fb: "Stark. Das Thema beantwortet eine echte Frage und zeigt eure **Kompetenz**. Als **Content-Serie** liefert es viele Beiträge. Als Carousel und Blogartikel nutzt du es mehrfach (**Repurposing**)." },
        { t: "Post „Unser Futter ist das beste“ mit Produktfoto", p: 0,
          fb: "Das ist reine Werbung ohne Nutzen. Niemand sucht danach. Solche Posts gehören höchstens in die **10 %** Werbung." },
        { t: "Jeden Monat ein Gewinnspiel mit Futterpaketen", p: 1,
          fb: "Gewinnspiele sind **interaktive Inhalte** und bringen Reaktionen. Oft kommen aber Schnäppchenjäger statt Kunden. Als Ergänzung okay, als Kernthema zu wenig Mehrwert." }
      ] },
    { k: "wahl", h: "Wie sorgst du dafür, dass man euch findet?",
      o: [
        { t: "30 Hashtags unter jeden Instagram-Post", p: 0,
          fb: "Hashtags bringen 2026 kaum noch Reichweite. Auf Instagram reichen **3–5**. Zu viele wirken unseriös und helfen nicht beim Einordnen." },
        { t: "Suchbegriffe in Text und Untertitel, dazu wenige genaue Hashtags", p: 2,
          fb: "Richtig. Hashtags geben heute **Einordnung und Kontext**. Suchbegriffe wie „Futter umstellen“ gehören in Text, Untertitel und Bildbeschreibung. Auf TikTok helfen 3–5 genaue Hashtags bei der Suche." },
        { t: "Gar keine Hashtags, die bringen nichts mehr", p: 1,
          fb: "Reichweite bringen Hashtags kaum noch. Dafür helfen sie dem Algorithmus beim **Einordnen**. Nischen-Hashtags wie #Hundeernährung machen Themen auffindbar." }
      ] },
    { k: "frei", h: "Deine Themenideen",
      b: "Schlag mindestens **drei Themen- oder Inhaltsideen** für den Redaktionsplan vor. Nenne je Idee das Format und den **Nutzen** für Hundehalter. Sag kurz, wie die Zielgruppe euch darüber findet.",
      muster: [
        ["Ratgeber: Futter umstellen oder Futtermenge", "umstell|futtermenge|wie viel|portion"],
        ["Wissen: Etikett, Zutaten, Zusatzstoffe erklären", "etikett|zutat|zusatzstoff|inhaltsstoff"],
        ["Gesundheit: Was der Hund nicht fressen darf", "giftig|gefährlich|nicht fressen|gesundheit|allergi"],
        ["Mehrwert-Formate: Rezept, Serie, Checkliste, Blick hinter die Kulissen", "rezept|serie|faq|checklist|behind|herstell"],
        ["Gefunden werden: Suchbegriffe, Hashtags, Kundenfragen", "hashtag|suchbegriff|keyword|w-fragen|answer"]
      ],
      min: 3,
      bsp: "• **Etikett-Check:** Carousel-Serie, was im Futter steckt und was Zusatzstoffe sind. Nutzen: Halter verstehen Etiketten.\n• **Futter richtig umstellen:** Blogartikel und Reel mit Plan in Schritten. Nutzen: weniger Magenprobleme.\n• **Das darf dein Hund nicht fressen:** Checkliste als Grafik zum Speichern. Nutzen: Gesundheit, Evergreen Content.\n• **Snack-Rezept der Woche:** wiederkehrendes Format mit gesunden Leckerlis.\n• **Behind the Scenes:** So stellen wir unser Futter her.\n• **Gefunden werden:** Kundenfragen aus dem W-Fragen-Tool als Titel, Suchbegriffe im Text, 3–5 Hashtags wie #Hundeernährung." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Mehrwert vor Werbung: 70 % Nutzen, 20 % Kuratiertes, 10 % Werbung",
      "Themen aus echten Fragen: Recherche-Tools, Support, Feedback",
      "Ideen: Etikett-Check, Futter umstellen, Giftliste, Rezepte, Behind the Scenes",
      "Formate mehrfach nutzen: Serie, Repurposing, Evergreen Content",
      "Gefunden werden über Suchbegriffe im Text und wenige genaue Hashtags"
    ] }
  ]
},
{
  id: "krisenhandbuch",
  titel: "Das Social-Media-Krisenhandbuch",
  firma: "Lindner Getränke GmbH, Zwickau",
  rolle: "Du stellst das Krisenhandbuch für die Social-Media-Kanäle zusammen.",
  kurz: "Der Masterplan für den Ernstfall",
  module: ["plan", "unt"],
  min: 11,
  schritte: [
    { k: "szene", h: "Die Aufgabe", wer: "Martina Lindner, Geschäftsführerin",
      b: "Eine Krise kann uns jederzeit treffen. Dann muss jeder wissen, was zu tun ist. Bitte erstelle ein **Social-Media-Krisenhandbuch**. Es soll durch den ganzen **Krisenmanagement-Prozess** führen. Vor allem soll es unser schriftlicher **Masterplan** für den Ernstfall sein. Stell zusammen, welche Punkte und Inhalte hineingehören." },
    { k: "wahl", h: "Wie baust du das Handbuch auf?",
      o: [
        { t: "Als Sammlung fertiger Antworten auf böse Kommentare", p: 1,
          fb: "Antwortvorlagen gehören hinein. Allein sind sie aber zu wenig. Es fehlen Rollen, Meldeketten, Monitoring und die Auswertung danach." },
        { t: "Entlang der 5 Phasen des Krisenmanagements, von Prävention bis Neustart", p: 2,
          fb: "Richtig. Das Handbuch folgt dem **Krisenkreislauf**. So deckt es die Zeit vor, während und nach der Krise ab. Nach dem Neustart beginnt die Prävention von vorn." },
        { t: "Erst schreiben, wenn eine Krise da ist, dann passt es genau", p: 0,
          fb: "Dann ist es zu spät. In der **Goldenen Stunde** zählt jede Minute. Das Handbuch ist Teil der **Prävention** und muss vorher fertig sein." }
      ] },
    { k: "daten", h: "Die 5 Phasen aus dem Kurs", l: [
      "**1 Prävention:** Risikoanalyse, Krisenteam und Krisenplan, Vorbeugung, Schulung",
      "**2 Analyse:** Monitoring und Früherkennung",
      "**3 Bewältigung:** Kommunikation, Schadensbegrenzung, Überwachung",
      "**4 Auswertung:** Analyse, Manöverkritik, Optimierung",
      "**5 Neustart:** Kommunikation und Reputationsaufbau"
    ] },
    { k: "wahl", h: "Wann ist eine Krise eine Krise?", b: "Das Handbuch braucht klare Schwellen. Sonst gibt es bei jeder Kritik Alarm.",
      o: [
        { t: "Sobald ein einzelner negativer Kommentar erscheint", p: 0,
          fb: "Nicht jede schlechte Bewertung ist ein **Shitstorm**. Einzelne Kritik beantwortet das normale **Community Management**. Sonst ist das Krisenteam ständig im Einsatz." },
        { t: "Erst wenn Zeitungen und Fernsehen darüber berichten", p: 1,
          fb: "Das ist schon Stufe 5 der Skala. Dann hast du viel Zeit verloren. Je später du die Krise bemerkst, desto weniger Zeit bleibt dir." },
        { t: "Nach der Shitstorm-Skala, mit festen Stufen und Schwellwerten", p: 2,
          fb: "Richtig. Die **Shitstorm-Skala** von Schwede und Graf hat die Stufen 0 bis 6. Im Handbuch legst du fest, ab welcher Stufe wer handelt. Krisen-Alarme im Monitoring-Tool melden die Schwellwerte." }
      ] },
    { k: "wahl", h: "Wer entscheidet im Ernstfall?",
      o: [
        { t: "Wer gerade Dienst hat, antwortet nach eigenem Gefühl", p: 0,
          fb: "Ohne Regeln widersprechen sich Antworten schnell. Die Vorlesung fordert **Krisenstab, Meldeketten und Zuständigkeiten**. Die Kommunikation wird gebündelt." },
        { t: "Immer nur die Geschäftsführung, alle anderen warten", p: 1,
          fb: "Die Geschäftsführung gehört ins Krisenteam. Allein ist sie aber oft nicht schnell erreichbar. Fehlt eine Vertretung, verstreicht die **Goldene Stunde**." },
        { t: "Ein Krisenteam mit Rollen, Vertretung, Meldekette und Kontaktliste", p: 2,
          fb: "Genau. Das Handbuch nennt, wer informiert wird, wer entscheidet und wer freigibt. Dazu kommen Telefonnummern und Vertretungen. So kommunizierst du **sofort und gebündelt**." }
      ] },
    { k: "wahl", h: "Was gehört in den Teil Bewältigung?",
      o: [
        { t: "Kommentare sperren und Kritik löschen, bis es ruhig ist", p: 0,
          fb: "Der Fall **Nestlé** zeigt das Gegenteil. Zensur und Schweigen machten die Krise größer. Sachliche Kritik löschst du nicht." },
        { t: "Abwarten, bis alle Fakten vollständig geklärt sind", p: 1,
          fb: "Fakten prüfen ist wichtig. Lange Stille wirkt aber wie Desinteresse. Ein kurzes erstes Statement zeigt: Wir kümmern uns." },
        { t: "Schnell Stellung nehmen, Werbung stoppen, Fragen gebündelt beantworten", p: 2,
          fb: "Richtig. Selbst und sofort kommunizieren, sonst tun es andere. Geplante Werbung setzt du aus. Du informierst intern und beobachtest den Verlauf. Schnell handelte auch Procter & Gamble beim Fall **Ariel**: Der Konzern stoppte den Verkauf der Packung." }
      ] },
    { k: "wahl", h: "Was fehlt noch für den Ernstfall?", b: "Das Handbuch liegt fertig im Ordner. Bisher hat es niemand benutzt.",
      o: [
        { t: "Eine Kopie per E-Mail an alle Mitarbeitenden", p: 1,
          fb: "Gut, dass alle davon wissen. Lesen ersetzt aber kein Training. Erst die Übung zeigt Lücken im Ablauf." },
        { t: "Schulung, Übung im Rollenspiel und regelmäßige Aktualisierung", p: 2,
          fb: "Richtig. Der **Krisen-Check** fragt: Wurde der Notfallplan im Rollenspiel geübt? Auch ein **Shitstorm-Simulator** hilft. Kontaktlisten und Risiken prüfst du regelmäßig." },
        { t: "Nichts, ein fertiges Handbuch reicht völlig aus", p: 0,
          fb: "Ein Plan, den niemand kennt, hilft im Stress kaum. Der **Krisen-Check** fragt ausdrücklich nach Schulung und Übung." }
      ] },
    { k: "frei", h: "Was gehört ins Krisenhandbuch?",
      b: "Stell die **Punkte und Inhalte** für das Krisenhandbuch zusammen. Ordne sie den Phasen des Krisenmanagements zu. Denk an die Vorbereitung, den Ernstfall und die Zeit danach.",
      muster: [
        ["Prävention: Risikoanalyse, Guidelines, Schulung und Übung", "risiko|krisenthem|guideline|richtlinie|schulung|schulen|übung|simulat"],
        ["Krisenteam: Rollen, Meldekette, Kontaktliste", "krisenteam|krisenstab|meldekette|zuständig|\\brolle|kontaktliste"],
        ["Analyse: Monitoring und Shitstorm-Skala", "monitoring|früherkenn|shitstorm|skala|schwellw|alarm"],
        ["Bewältigung: Stellungnahme, Vorlagen, Werbung stoppen", "stellungnahme|statement|vorlage|werbung|bündel|goldene"],
        ["Auswertung und Neustart", "auswert|manöverkritik|neustart|nachbereit|vertrauen"]
      ],
      min: 3,
      bsp: "• **Einführung:** Ziel, Geltung, Definition einer Krise\n• **Prävention:** Risikoanalyse mit Krisenthemen, Kritikern und Fürsprechern, Guidelines, Schulung und Übung\n• **Krisenteam:** Rollen, Vertretung, Meldekette, Kontaktliste, Freigaben\n• **Analyse:** Monitoring der Kanäle und Bewertungsportale, Shitstorm-Skala mit Schwellwerten und Alarm\n• **Bewältigung:** erste Stellungnahme in der Goldenen Stunde, Antwortvorlagen, Werbung stoppen, intern informieren, Verlauf beobachten\n• **Auswertung:** Auslöser, Maßnahmen und Wirkung prüfen, Manöverkritik, Handbuch aktualisieren\n• **Neustart:** Gelerntes zeigen, Vertrauen aufbauen\n• **Anhang:** Krisen-Check als Checkliste" },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Das Handbuch folgt den 5 Phasen des Krisenmanagement-Prozesses.",
      "**Vorher:** Risiken, Guidelines, Krisenteam, Meldekette, Schulung und Übung",
      "**Früherkennung:** Monitoring und Shitstorm-Skala mit klaren Schwellwerten",
      "**Im Ernstfall:** schnell, offen und gebündelt kommunizieren, nicht zensieren",
      "**Danach:** auswerten, Handbuch verbessern, Vertrauen neu aufbauen"
    ] }
  ]
}
];
