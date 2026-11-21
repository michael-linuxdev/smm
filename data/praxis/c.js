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
    { k: "szene", h: "Abgabe: eine Mess-Tabelle mit 3 Zeilen", wer: "Sandra Kühn, Geschäftsführerin",
      b: "Wir schreiben seit zwei Jahren einen **Blog** mit Tipps zu Holz und Möbeln. Niemand prüft, ob er etwas bringt. Zeig mir, wie wir den **Erfolg** sinnvoll messen. Gib mir dazu eine **Tabelle mit mindestens drei Zeilen**. Jede Zeile nennt ein **Ziel**, passende **KPIs** und die **Erhebung mit Tool**. Zeile 1 habe ich schon ausgefüllt." },
    { k: "daten", h: "Die Vorlage: Zeile 1 steht schon", l: [
      "**Spalten:** Nr. · Ziel/Fragestellung · Metriken/KPIs · Erhebung/Tools",
      "**1** · Sind die Bloginhalte für die Leser interessant? · Seitenaufrufe, Verweildauer · Google Analytics",
      "**2** · ? · ? · ?",
      "**3** · ? · ? · ?",
      "Zeile 2 und 3 füllst du selbst aus. Weitere Zeilen sind erlaubt."
    ] },
    { k: "wahl", h: "Schritt 1: Was kommt zuerst, Ziel oder Zahl?", b: "Die Tabelle beginnt mit der Spalte **Ziel/Fragestellung**. Wie gehst du vor?",
      o: [
        { t: "Ich exportiere alle Werte aus dem Tool und suche dann das Wichtigste", p: 0,
          fb: "So ertrinkst du in Daten. „Was wollen wir wissen?“ kommt vor „Was können wir messen?“. Ohne Ziel weißt du nicht, welche Zahl zählt." },
        { t: "Ich kläre zuerst, was der Blog erreichen soll", p: 2,
          fb: "Richtig. Der Merksatz der Lektion „Ziele messbar machen: SMART und BVDW-Modell“ lautet: Erst das Ziel, dann die Kennzahl. Das **BVDW-Modell** geht vom Ziel über den Indikator zu Kennzahl und Erhebungsmethode. Genau so ist deine Tabelle gebaut." },
        { t: "Ich übernehme die Kennzahlen, die andere Tischlereien berichten", p: 1,
          fb: "Vergleiche können anregen. Allgemeingültige Messgrößen gibt es aber nicht, sagt die Lektion. Kennzahlen leitest du aus den eigenen Zielen ab." }
      ] },
    { k: "daten", h: "Kurswissen: Blog-KPIs und Messmethoden", l: [
      "**Lektion „Corporate Blogs, Vlog & Microblogging“:** Erfolg messen pro Kanal",
      "**Blog-KPIs:** Besucher, Lesedauer, Herkunft, Newsletter-Anmeldungen, Leads, Nennung in KI-Antworten",
      "**Best Practice:** pro Kanal 1 Ziel, nur passende Kennzahlen monatlich berichten",
      "**Lektion „Ziele messbar machen“:** 5 Messmethoden im BVDW-Modell",
      "**Methoden:** Social Media Analytics, Monitoring, Webtracking, Befragung, internes Controlling"
    ] },
    { k: "wahl", h: "Schritt 2: Welche Frage taugt für eine neue Zeile?", b: "Eine gute Zeile fragt nach der **Wirkung** des Blogs. Zeile 1 fragt schon nach dem Interesse.",
      o: [
        { t: "Wie viele Artikel veröffentlichen wir pro Monat?", p: 0,
          fb: "Das misst deine Arbeit, nicht die Wirkung. Die Zahl gehört in den Redaktionsplan. Frage besser, was der Blog bei den Lesern auslöst." },
        { t: "Gefällt den Lesern das neue Design des Blogs?", p: 1,
          fb: "Eine mögliche Frage. Die Antwort misst aber vor allem Geschmack und hilft dem Geschäft wenig. Stärker sind Fragen nach Reichweite, Ruf oder Anfragen." },
        { t: "Werden aus Blog-Lesern Interessenten, die bei uns anfragen?", p: 2,
          fb: "Stark. Die Frage hängt an einem Ziel der Organisation: Aufträge gewinnen. Kennzahl und Methode leitest du daraus ab. Eine zweite gute Frage wäre: Finden neue Leser den Blog?" }
      ] },
    { k: "wahl", h: "Schritt 3: Welche Methode zählt die Anfragen?", b: "Du willst wissen, wie viele Leser vom Artikel zum **Kontaktformular** gehen.",
      o: [
        { t: "Webtracking: Google Analytics verfolgt den Weg vom Artikel zum Formular", p: 2,
          fb: "Richtig. **Webtracking** misst Klicks, Downloads, Leads und Verkäufe. Daraus berechnest du die **Conversion Rate**. Ob Aufträge entstehen, zeigt das interne Controlling im Vertrieb." },
        { t: "Monitoring mit Google Alerts", p: 0,
          fb: "Google Alerts findet Nennungen im Web. Klicks auf der eigenen Website sieht das Tool nicht. Monitoring passt eher zur Frage nach dem Ruf." },
        { t: "Neue Kunden sagen in einer Befragung, wie sie euch gefunden haben", p: 1,
          fb: "Eine **Befragung** ergänzt gut, wie beim Check-in im Hotel-Beispiel der Lektion. Allein ist sie ungenau. Leser, die nicht anfragen, erfasst sie nicht." }
      ] },
    { k: "wahl", h: "Schritt 4: Zählt alles, was man zählen kann?", b: "Sandra schlägt vor: „Wir zählen einfach die Likes unter unseren Instagram-Posts zum Blog.“",
      o: [
        { t: "Gute Idee, viele Likes zeigen den Erfolg des Blogs", p: 0,
          fb: "Likes messen Interesse an den Posts auf Instagram. Über Leser und Anfragen im Blog sagen sie wenig. Ziel und KPI passen nicht zusammen." },
        { t: "Likes höchstens als Nebenwert, im Bericht zählen die Blog-KPIs", p: 2,
          fb: "Genau. „Nicht alles, was zählbar ist, zählt“, heißt es in der Lektion „Die wichtigsten Kennzahlen“. Wähle je Ziel wenige passende KPIs, etwa Besucher, Lesedauer oder Leads." },
        { t: "Wir zählen Likes, Shares, Follower und alles andere dazu", p: 1,
          fb: "Mehr Zahlen machen den Bericht nicht besser. Viele passen nicht zum Ziel. Best Practice: pro Kanal 1 Ziel und nur passende Kennzahlen." }
      ] },
    { k: "wahl", h: "Schritt 5: Wie erhebst du die Daten sauber?", b: "Google Analytics soll auf der Website mit dem Blog laufen.",
      o: [
        { t: "Ich baue das Tool ein und lese die Zahlen einmal im Jahr ab", p: 1,
          fb: "Das Tool passt. Einmal im Jahr ist aber zu selten. Mit einem Monatsbericht erkennst du Trends und steuerst rechtzeitig gegen." },
        { t: "Ein Stammleser sagt uns ehrlich seine Meinung", p: 0,
          fb: "Eine einzelne Meinung ist keine Messung. Das Urteil ist zufällig und nicht vergleichbar. Erfolg misst du mit Kennzahlen und festen Methoden." },
        { t: "Aktive Einwilligung im Cookie-Banner, dann ein kurzer Monatsbericht", p: 2,
          fb: "Richtig. Tracking-Cookies brauchen ein **aktives Ja**, so der BGH 2020 (Lektion „Fanpages, Datentransfer in die USA & Cookies“). Der Bericht vergleicht **Soll und Ist**. Merke: Miss nie nur des Messens wegen." }
      ] },
    { k: "frei", h: "Fülle die Mess-Tabelle aus",
      b: "Schreib mindestens **drei Zeilen** für die Tabelle. Nenne je Zeile das **Ziel**, die **KPIs** und die **Erhebung mit Tool**. Zeile 1 darfst du übernehmen. Ergänze einen Satz, wie ihr sauber und regelmäßig erhebt.",
      muster: [
        ["Zeile Interesse: Seitenaufrufe oder Verweildauer", "seitenaufruf|aufrufe|verweildauer|lesedauer|lesezeit"],
        ["Zeile Reichweite: Besucher und ihre Herkunft", "herkunft|quelle|\\bsuche|suchmaschine|traffic|besucher|neue leser"],
        ["Zeile Geschäft: Leads, Anfragen oder Newsletter", "\\blead|anfrage|kontaktformular|conversion|newsletter|auftr[aä]g"],
        ["Passende Methode je Zeile: Analytics, Webtracking, Befragung, Monitoring", "analytics|tracking|befrag|umfrage|monitoring|alerts|controlling"],
        ["Saubere Erhebung: Einwilligung und monatlicher Soll-Ist-Vergleich", "einwillig|cookie|zustimm|monatlich|soll und ist|soll-ist"]
      ],
      min: 3,
      bsp: "• **Zeile 1 Interesse:** Sind die Inhalte interessant? KPIs: Seitenaufrufe, Verweildauer. Tool: Google Analytics.\n• **Zeile 2 Reichweite:** Finden neue Leser den Blog? KPIs: Besucher, Herkunft aus Suche, Social und KI. Tools: Google Analytics, Tracking-URLs in Posts.\n• **Zeile 3 Geschäft:** Werden Leser zu Kunden? KPIs: Anfragen über das Kontaktformular, Newsletter-Anmeldungen, Conversion Rate. Tools: Webtracking, Abgleich im Vertrieb.\n• **Zeile 4 Ruf:** Wie spricht man über uns? KPIs: Nennungen, Sentiment. Tool: Google Alerts.\n• **Erhebung:** aktive Einwilligung im Cookie-Banner. Monatlich Soll und Ist vergleichen, dann Maßnahmen ableiten." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Erst das Ziel, dann die Kennzahl: Zeile für Zeile nach dem BVDW-Modell",
      "**Interesse:** Seitenaufrufe, Verweildauer · Google Analytics",
      "**Reichweite:** Besucher, Herkunft · Analytics und Tracking-URLs",
      "**Geschäft:** Anfragen, Newsletter, Conversion Rate · Webtracking und Vertrieb",
      "**Erhebung:** aktive Einwilligung, Monatsbericht mit Soll und Ist",
      "War es schwer? Wiederhole die Lektion „Ziele messbar machen: SMART und BVDW-Modell“."
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
    { k: "szene", h: "Abgabe: 3 Themen mit Format und Nutzen", wer: "Katrin Brandt, Inhaberin",
      b: "Wir verkaufen online gesundes Hundefutter ohne Zusatzstoffe. Über Social Media wollen wir **neue Kunden** gewinnen. Schlag mir mindestens **drei Themenideen** für den **Redaktionsplan** vor. Nenne je Idee das **Format** und den **Nutzen** für Hundehalter. Sag auch, wie die Zielgruppe uns darüber **findet**." },
    { k: "daten", h: "Die Ausgangslage: viel Werbung, kaum Reaktionen", l: [
      "**Produkt:** Hundefutter ohne Zusatzstoffe, Verkauf nur im Online-Shop",
      "**Ziel:** neue Kunden über Social Media gewinnen",
      "**Zielgruppe:** Hundehalter, denen Gesundheit und Herkunft wichtig sind",
      "**Bisher:** fast nur Produktfotos mit Preis, kaum Reaktionen",
      "**Kanäle:** Instagram, Facebook und ein Blog im Shop"
    ] },
    { k: "wahl", h: "Schritt 1: Welche Art von Content ist gefragt?",
      o: [
        { t: "Mehr Produktposts mit Rabatt, damit schneller gekauft wird", p: 0,
          fb: "Für deine Produkte interessiert sich meist niemand. Menschen suchen Lösungen für ihre Bedürfnisse. Nach der Faustregel **70-20-10** ist nur rund 10 % reine Werbung." },
        { t: "Lustige Hundevideos, egal zu welchem Thema", p: 1,
          fb: "Unterhaltung kann Reichweite bringen. Ohne Bezug zur Ernährung finden dich aber nicht die richtigen Leute. Guter Content passt zur Marke und bringt Nutzen." },
        { t: "Themen, die Hundehaltern helfen und zum Futter passen", p: 2,
          fb: "Genau. Gesucht ist **Content Marketing**: informieren, beraten, inspirieren, unterhalten (Lektion „Guter Content und die 5 Ps“). Nach der Faustregel **70-20-10** sind 70 % der Beiträge Mehrwert." }
      ] },
    { k: "wahl", h: "Schritt 2: Woher kommen Themen, nach denen gesucht wird?",
      o: [
        { t: "Aus Recherche-Tools wie dem W-Fragen-Tool und aus Kundenfragen", p: 2,
          fb: "Richtig. Die Tools zeigen echte **Fragen** zu einem Keyword wie „Hundefutter ohne Zusatzstoffe“. Auch Support und Monitoring liefern Ideen. Die Tools stehen in der Lektion „Content produzieren, verbreiten und prüfen“." },
        { t: "Nur aus dem Team: Was finden wir selbst spannend?", p: 1,
          fb: "Ideen aus dem Team sind wertvoll. Allein ahnst du aber nur, was die Zielgruppe will. Ergänze Recherche-Tools, Kundenfragen und Feedback aus dem Monitoring." },
        { t: "Vom größten Wettbewerber, dessen Themen wir übernehmen", p: 0,
          fb: "Der Wettbewerb darf inspirieren. Kopieren macht dich aber austauschbar. Mehrwert entsteht aus eigener Expertise und den Fragen deiner Zielgruppe." }
      ] },
    { k: "daten", h: "Deine Recherche: 5 echte Fragen von Hundehaltern", l: [
      "„Was darf mein Hund nicht fressen?“",
      "„Wie stelle ich das Futter richtig um?“",
      "„Was bedeuten die Angaben auf dem Etikett?“",
      "„Welches Futter passt für Welpen und alte Hunde?“",
      "„Wie viel Futter braucht mein Hund am Tag?“"
    ] },
    { k: "wahl", h: "Schritt 3: Welche Idee besteht den Mehrwert-Test?", b: "Die Lektion „Guter Content und die 5 Ps“ fragt: Warum sollte jemand das finden, lesen, liken und teilen?",
      o: [
        { t: "Jeden Monat ein Gewinnspiel mit Futterpaketen", p: 1,
          fb: "Gewinnspiele sind **interaktive Inhalte** und bringen Reaktionen. Oft kommen aber Schnäppchenjäger statt Kunden. Als Ergänzung okay, als Kernthema zu wenig Mehrwert." },
        { t: "Serie „Etikett-Check“: Was steckt wirklich im Futter?", p: 2,
          fb: "Stark. Die Idee beantwortet eine echte Frage aus der Recherche. Die Serie zeigt eure **Kompetenz** und passt zum Futter ohne Zusatzstoffe. Genau das macht guten Content aus." },
        { t: "Post „Unser Futter ist das beste“ mit Produktfoto", p: 0,
          fb: "Das ist reine Werbung ohne Nutzen. Niemand sucht danach. Solche Posts gehören höchstens in die **10 %** Werbung." }
      ] },
    { k: "wahl", h: "Schritt 4: Wie holst du mehr aus einer Idee heraus?", b: "Das Team hat wenig Zeit. Jede gute Idee soll mehrere Beiträge liefern.",
      o: [
        { t: "Aus einem Blogartikel ein Carousel, ein Reel und 2–3 Posts machen", p: 2,
          fb: "Richtig. Das ist **Repurposing**. Anleitungen und Checklisten bleiben lange aktuell (**Evergreen Content**). Große Themen teilst du in eine **Content-Serie** auf." },
        { t: "Jeden Tag ein neues Thema, damit es nie langweilig wird", p: 0,
          fb: "So fehlt Zeit für Qualität. Die Lektion rät zu 3 bis 5 Posts pro Woche. Merke: **Qualität geht vor Quantität**." },
        { t: "Einen langen Blogartikel schreiben und dann abwarten", p: 1,
          fb: "Ein Ratgeber im Blog ist eine gute Basis. Leser kommen aber nicht von allein. Du musst den Artikel auch auf Instagram und Facebook verbreiten." }
      ] },
    { k: "wahl", h: "Schritt 5: Wie findet die Zielgruppe eure Beiträge?",
      o: [
        { t: "30 Hashtags unter jeden Instagram-Post", p: 0,
          fb: "Hashtags bringen 2026 kaum noch Reichweite. Auf Instagram reichen höchstens **3–5**. Zu viele wirken unseriös und helfen nicht beim Einordnen." },
        { t: "Gar keine Hashtags, die bringen nichts mehr", p: 1,
          fb: "Reichweite bringen Hashtags kaum noch. Hashtags helfen dem Algorithmus aber beim **Einordnen**. Nischen-Hashtags wie #Hundeernährung machen Themen auffindbar." },
        { t: "Suchbegriffe in Text und Titel, dazu 3–5 genaue Hashtags", p: 2,
          fb: "Richtig. Hashtags ordnen heute ein (Lektion „Hashtags richtig einsetzen“). Suchbegriffe gehören in Text, Untertitel und Bildbeschreibung. Im Blog werden Kundenfragen zu Überschriften." }
      ] },
    { k: "frei", h: "Deine Themenideen für den Redaktionsplan",
      b: "Schlag mindestens **drei Themenideen** für den Redaktionsplan vor. Nenne je Idee das **Format** und den **Nutzen** für Hundehalter. Sag kurz, wie die Zielgruppe euch darüber findet.",
      muster: [
        ["Ratgeber-Thema: Futter umstellen oder Futtermenge", "umstell|futtermenge|wie viel|portion|welpe|senior|alte hunde"],
        ["Wissens-Thema: Etikett, Zutaten oder Zusatzstoffe", "etikett|zutat|zusatzstoff|inhaltsstoff"],
        ["Gesundheits-Thema: Was der Hund nicht fressen darf", "giftig|gefährlich|nicht fressen|verboten|allergi|gesundheit"],
        ["Passendes Format je Idee: Carousel, Reel, Blogartikel, Checkliste, Serie", "carousel|karussell|reel|video|blogartikel|checklist|serie|grafik|rezept|behind|faq"],
        ["Gefunden werden: Suchbegriffe, Fragen als Titel, wenige Hashtags", "hashtag|suchbegriff|keyword|w-fragen|answer the public|überschrift|titel"]
      ],
      min: 3,
      bsp: "• **Etikett-Check:** Carousel-Serie, was im Futter steckt. Nutzen: Halter verstehen Zutaten und Zusatzstoffe.\n• **Futter richtig umstellen:** Blogartikel mit Plan in Schritten, daraus ein Reel. Nutzen: weniger Magenprobleme.\n• **Das darf dein Hund nicht fressen:** Checkliste als Grafik zum Speichern. Nutzen: Gesundheit, Evergreen Content.\n• **Futtermenge für Welpen und Senioren:** Tabelle im Blog, dazu „Tipp der Woche“ auf Instagram.\n• **Gefunden werden:** Kundenfragen als Überschrift, Suchbegriffe in Text und Untertitel, 3–5 Hashtags wie #Hundeernährung.\n• **Mix:** 70 % Mehrwert, höchstens 10 % Werbung." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Mehrwert vor Werbung: Faustregel 70-20-10",
      "Themen aus echten Fragen: Recherche-Tools, Support, Monitoring",
      "Je Idee Format und Nutzen: Etikett-Check, Futter umstellen, Giftliste, Futtermenge",
      "Mehrfach nutzen: Repurposing, Content-Serie, Evergreen Content",
      "Gefunden werden: Suchbegriffe im Text, 3–5 genaue Hashtags",
      "War es schwer? Wiederhole „Guter Content und die 5 Ps“ und „Content planen: Jahres- und Redaktionsplan“."
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
    { k: "szene", h: "Abgabe: die Gliederung des Krisenhandbuchs", wer: "Martina Lindner, Geschäftsführerin",
      b: "Eine Krise kann uns jederzeit treffen. Dann muss jeder wissen, was zu tun ist. Erstelle die **Gliederung** für unser **Social-Media-Krisenhandbuch**. Es ist unser schriftlicher **Masterplan** für den Ernstfall. Nenne die **Kapitel** und ihre **Inhalte**. Das Handbuch führt durch den ganzen **Krisenmanagement-Prozess**: vorher, im Ernstfall und danach." },
    { k: "wahl", h: "Schritt 1: Nach welchem Modell gliederst du?",
      o: [
        { t: "Als Sammlung fertiger Antworten auf böse Kommentare", p: 1,
          fb: "Antwortvorlagen gehören hinein. Allein sind sie aber zu wenig. Es fehlen Rollen, Meldeketten, Monitoring und die Auswertung danach." },
        { t: "Entlang der 5 Phasen des Krisenmanagements, von Prävention bis Neustart", p: 2,
          fb: "Richtig. Die Lektion „Der Krisenmanagement-Prozess“ beschreibt einen **Kreislauf in 5 Phasen**. So deckt das Handbuch die Zeit vor, während und nach der Krise ab. Nach dem Neustart beginnt die Prävention von vorn." },
        { t: "Erst schreiben, wenn eine Krise da ist, dann passt es genau", p: 0,
          fb: "Dann ist es zu spät. In der **Goldenen Stunde** zählt jede Minute. Das Handbuch ist Teil der **Prävention** und muss vorher fertig sein." }
      ] },
    { k: "daten", h: "Das Gerüst: die 5 Phasen des Krisenkreislaufs", l: [
      "**1 Prävention:** Risikoanalyse, Krisenteam und Krisenplan, Vorbeugung, Schulung",
      "**2 Analyse:** Monitoring und Früherkennung",
      "**3 Bewältigung:** Kommunikation, Schadensbegrenzung, Überwachung",
      "**4 Auswertung:** Analyse, Manöverkritik, Optimierung",
      "**5 Neustart:** Kommunikation und Reputationsaufbau",
      "Jede Phase wird ein Kapitel. Die nächsten Schritte füllen die Kapitel."
    ] },
    { k: "wahl", h: "Schritt 2: Ab wann ist es eine Krise?", b: "Das Kapitel Analyse braucht klare Schwellen. Sonst gibt es bei jeder Kritik Alarm.",
      o: [
        { t: "Nach der Shitstorm-Skala, mit festen Stufen und Schwellwerten", p: 2,
          fb: "Richtig. Die **Shitstorm-Skala** von Schwede und Graf hat die Stufen 0 bis 6 (Lektion „Reputation, Krise und Shitstorm“). Im Handbuch legst du fest, ab welcher Stufe wer handelt. Krisen-Alarme im Monitoring-Tool melden die Schwellwerte." },
        { t: "Sobald ein einzelner negativer Kommentar erscheint", p: 0,
          fb: "Nicht jede schlechte Bewertung ist ein **Shitstorm**. Einzelne Kritik beantwortet das normale **Community Management**. Sonst ist das Krisenteam ständig im Einsatz." },
        { t: "Erst wenn Zeitungen und Fernsehen darüber berichten", p: 1,
          fb: "Das ist schon Stufe 5 der Skala. Dann hast du viel Zeit verloren. Je später du die Krise bemerkst, desto weniger Zeit bleibt dir." }
      ] },
    { k: "wahl", h: "Schritt 3: Wer entscheidet im Ernstfall?", b: "Dieses Kapitel gehört zur Prävention. Im Ernstfall ist keine Zeit, Rollen zu klären.",
      o: [
        { t: "Wer gerade Dienst hat, antwortet nach eigenem Gefühl", p: 0,
          fb: "Ohne Regeln widersprechen sich Antworten schnell. Die Lektion nennt **Krisenstab, Meldeketten und Zuständigkeiten**. So bündelst du die Kommunikation." },
        { t: "Immer nur die Geschäftsführung, alle anderen warten", p: 1,
          fb: "Die Geschäftsführung gehört ins Krisenteam. Allein ist sie aber oft nicht schnell erreichbar. Fehlt eine Vertretung, verstreicht die **Goldene Stunde**." },
        { t: "Ein Krisenteam mit Rollen, Vertretung, Meldekette und Kontaktliste", p: 2,
          fb: "Genau. Das Handbuch nennt, wer informiert wird, wer entscheidet und wer freigibt. Dazu kommen Telefonnummern und Vertretungen. So kommunizierst du **sofort und gebündelt**." }
      ] },
    { k: "wahl", h: "Schritt 4: Was tust du in der Goldenen Stunde?", b: "Das Kapitel Bewältigung beschreibt die ersten Schritte im Ernstfall.",
      o: [
        { t: "Schnell Stellung nehmen, Werbung stoppen, Fragen gebündelt beantworten", p: 2,
          fb: "Richtig. Selbst und sofort kommunizieren, sonst tun es andere. Geplante Werbung setzt du aus und informierst intern. Procter & Gamble stoppte beim Fall **Ariel** schnell den Verkauf der Packung." },
        { t: "Kommentare sperren und Kritik löschen, bis es ruhig ist", p: 0,
          fb: "Der Fall **Nestlé** zeigt das Gegenteil. Zensur und Schweigen machten die Krise größer. Sachliche Kritik löschst du nicht." },
        { t: "Abwarten, bis alle Fakten vollständig geklärt sind", p: 1,
          fb: "Fakten prüfen ist wichtig. Lange Stille wirkt aber wie Desinteresse. Ein kurzes erstes Statement zeigt: Wir kümmern uns." }
      ] },
    { k: "wahl", h: "Schritt 5: Was steht im Kapitel nach der Krise?", b: "Die Kritik ist abgeklungen. Wie geht es weiter?",
      o: [
        { t: "Sofort wieder Werbung zum Krisenthema posten", p: 0,
          fb: "Das reißt die Wunde wieder auf. Beim **Neustart** sollen neue Posts weit weg vom Krisenthema sein. Erst zeigst du, was du gelernt hast." },
        { t: "Auswerten, das Handbuch anpassen und Vertrauen neu aufbauen", p: 2,
          fb: "Richtig. Die **Auswertung** prüft Auslöser, Maßnahmen und Wirkung (Manöverkritik). Beim **Neustart** zeigst du, was du gelernt hast. Burger King gewann so mit Offenheit Vertrauen zurück." },
        { t: "Nur zählen, wie viele negative Kommentare es gab", p: 1,
          fb: "Die Zahl gehört zur Auswertung. Allein erklärt sie aber nicht, was gut oder schlecht lief. Prüfe auch Auslöser, eigene Maßnahmen und die Reaktion der Kritiker." }
      ] },
    { k: "wahl", h: "Schritt 6: Wie wird das Handbuch einsatzbereit?", b: "Das Handbuch liegt fertig im Ordner. Bisher hat es niemand benutzt.",
      o: [
        { t: "Eine Kopie per E-Mail an alle Mitarbeitenden", p: 1,
          fb: "Gut, dass alle davon wissen. Lesen ersetzt aber kein Training. Erst die Übung zeigt Lücken im Ablauf." },
        { t: "Nichts, ein fertiges Handbuch reicht völlig aus", p: 0,
          fb: "Ein Plan, den niemand kennt, hilft im Stress kaum. Der **Krisen-Check** fragt ausdrücklich nach Schulung und Übung." },
        { t: "Schulung, Übung im Rollenspiel und regelmäßige Aktualisierung", p: 2,
          fb: "Richtig. Der **Krisen-Check** fragt: Wurde der Notfallplan im Rollenspiel geübt? Auch ein **Shitstorm-Simulator** hilft. Das steht in der Lektion „Krisen aus der Praxis und Krisen-Check“." }
      ] },
    { k: "frei", h: "Die Gliederung des Krisenhandbuchs",
      b: "Erstelle die **Gliederung** des Krisenhandbuchs. Ordne die Kapitel den **5 Phasen** zu. Nenne je Kapitel die wichtigsten **Inhalte**: vorher, im Ernstfall und danach.",
      muster: [
        ["Prävention: Risikoanalyse, Guidelines, Schulung und Übung", "risiko|krisenthem|guideline|richtlinie|schulung|schulen|übung|üben|simulat"],
        ["Krisenteam: Rollen, Vertretung, Meldekette, Kontaktliste", "krisenteam|krisenstab|meldekette|zuständig|\\brolle|vertretung|kontaktliste"],
        ["Analyse: Monitoring und Shitstorm-Skala mit Schwellwerten", "monitoring|früherkenn|shitstorm|skala|schwellw|alarm"],
        ["Bewältigung: erstes Statement, Vorlagen, Werbung stoppen", "stellungnahme|statement|vorlage|werbung|bündel|goldene|sofort"],
        ["Danach: Manöverkritik, Handbuch anpassen, Vertrauen aufbauen", "manöverkritik|auslöser|handbuch (anpass|aktualis|verbess)|vertrauen|reputationsaufbau|nachbereit"]
      ],
      min: 3,
      bsp: "• **Einführung:** Ziel, Geltung, ab wann eine Krise eine Krise ist\n• **Prävention:** Risikoanalyse mit Krisenthemen, Kritikern und Fürsprechern, Guidelines, Schulung und Übung\n• **Krisenteam:** Rollen, Vertretung, Meldekette, Kontaktliste, Freigaben\n• **Analyse:** Monitoring der Kanäle und Bewertungsportale, Shitstorm-Skala mit Schwellwerten und Alarm\n• **Bewältigung:** erste Stellungnahme in der Goldenen Stunde, Antwortvorlagen, Werbung stoppen, intern informieren, Verlauf beobachten\n• **Auswertung:** Auslöser, Maßnahmen und Wirkung prüfen, Manöverkritik, Handbuch anpassen\n• **Neustart:** Gelerntes zeigen, Vertrauen aufbauen\n• **Anhang:** Krisen-Check als Checkliste" },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Gliederung nach 5 Phasen: Prävention, Analyse, Bewältigung, Auswertung, Neustart",
      "**Vorher:** Risiken, Guidelines, Krisenteam mit Meldekette, Schulung und Übung",
      "**Früherkennung:** Monitoring und Shitstorm-Skala mit Schwellwerten",
      "**Im Ernstfall:** Goldene Stunde nutzen, selbst und sofort kommunizieren, nicht zensieren",
      "**Danach:** Manöverkritik, Handbuch anpassen, Vertrauen neu aufbauen",
      "War es schwer? Wiederhole „Der Krisenmanagement-Prozess“ und „Krisen aus der Praxis und Krisen-Check“."
    ] }
  ]
}
];
