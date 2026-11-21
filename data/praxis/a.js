// Praxisprojekte aus den Hausaufgaben (Teil A) für „SMM Coach“ – Stand November 2026.
// Aufbau je Projekt: Aufgabenstellung → Lösungsweg → eigene Antwort mit Musterlösung → Lösung kompakt.
// Fachliche Grundlage (Lektionen): einf.js „Der virale Effekt“, „Potenziale, Chancen & Risiken“;
// platt1.js „YouTube & Audio-Sharing“ (viral vs. vital), „Pinterest & Sharing-Strategie“; platt2.js „Instagram & Reels“;
// unt2.js „Influencer & Influencer-Marketing“, „Influencer-Kampagnen planen & steuern“;
// recht.js „Werbung kennzeichnen & Werbeaussagen“.
// Quelle Ice Bucket Challenge: Nature 550, S113 (2017): „Ice bucket challenge“ –
// https://www.nature.com/nature/journal/v550/n7676_supp_out/full/550S113a.html
// Fiktive Firma im Projekt „influencer-messer“. Nike wird nur genannt, weil die Aufgabe es vorgibt.
export const PRAXIS_A = [
{
  id: "viral",
  titel: "Der virale Effekt",
  firma: "Hausaufgabe Social Media Management",
  rolle: "Du erklärst den viralen Effekt und belegst ihn mit einer echten Kampagne.",
  kurz: "Begriff erklären, Beispiel finden, begründen",
  module: ["einf", "plan"],
  min: 10,
  schritte: [
    { k: "szene", h: "Abgabe: Erklärung, Beispiel und Begründung",
      b: "Deine Hausaufgabe hat drei Teile. **1.** Erkläre den **viralen Effekt** in Social Media. **2.** Nenne ein **reales Beispiel**: eine Kampagne, deren Erfolg am viralen Effekt hing. **3.** Begründe, warum der Effekt dort entscheidend war. Am Ende schreibst du alles in Stichpunkten auf." },
    { k: "wahl", h: "Was genau ist gefragt?",
      o: [
        { t: "Nur eine saubere Definition des viralen Effekts", p: 0,
          fb: "Damit fehlen zwei von drei Teilen. Die Aufgabe will auch ein **reales Beispiel** und eine **Begründung**. Lies Aufgaben immer auf alle Arbeitsaufträge hin." },
        { t: "Erklärung, belegtes Beispiel, Begründung", p: 2,
          fb: "Genau: drei Teile. Erst die **Erklärung**, dann ein **belegtes Beispiel**, dann die **Begründung**. Nach diesen drei Teilen gliederst du später deine Antwort." },
        { t: "Eine Liste mit möglichst vielen viralen Videos aus dem Netz", p: 1,
          fb: "Viele Beispiele zeigen Fleiß, aber keine Tiefe. Gefragt ist **ein** gut belegtes Beispiel. Besser: eines wählen und genau begründen." }
      ] },
    { k: "wahl", h: "Welche Erklärung passt zum Kurs?",
      b: "Lektion „Der virale Effekt“: Die Unterlagen nennen ihn bei den **Chancen** von Social Media.",
      o: [
        { t: "Ein Unternehmen kauft viel Werbung und erreicht so viele Menschen", p: 0,
          fb: "Das ist gekaufte Reichweite, kein viraler Effekt. Viral heißt: Die **Nutzer** geben den Inhalt selbst weiter. So entsteht **Earned Media**, also verdiente Reichweite." },
        { t: "Nutzer geben den Inhalt selbst weiter, die Reichweite wächst sprunghaft", p: 2,
          fb: "So lautet der Merksatz der Lektion. Jede Weitergabe öffnet ein **neues Netzwerk**. Darum steigt die Bekanntheit so schnell." },
        { t: "Ein Beitrag bekommt sehr viele Likes von den eigenen Followern", p: 1,
          fb: "Viel Interaktion hilft dem Algorithmus. Viral wird es aber erst, wenn Nutzer den Inhalt **weitergeben**. Dann erreicht er Menschen außerhalb der eigenen Community." }
      ] },
    { k: "daten", h: "Kurswissen: Was Menschen gern teilen", l: [
      "**Starke Gefühle:** Humor, Rührung oder Überraschung",
      "**Einfache Idee**, die man sofort versteht",
      "**Mitmachen:** zum Beispiel eine Challenge mit Nominierung",
      "**Leicht teilbar** und passend zur Plattform, oft Reels und TikTok",
      "**Seeding:** Du gibst den Inhalt zuerst an passende Personen.",
      "Quelle: Lektionen „Der virale Effekt“ und „YouTube & Audio-Sharing“"
    ] },
    { k: "wahl", h: "Welches Beispiel wählst du?",
      b: "Prüfe jeden Kandidaten: Ist er real, belegt und vom Teilen der Nutzer getragen?",
      o: [
        { t: "Ein bekannter TV-Spot mit sehr großem Werbebudget", p: 0,
          fb: "Reichweite durch gekaufte Sendezeit ist **nicht viral**. Der Erfolg kam nicht durch das Teilen der Nutzer. Wähle eine Kampagne, die Nutzer weitergetragen haben." },
        { t: "Ein Video, das du mal gesehen hast, ohne Name und Quelle", p: 1,
          fb: "Vielleicht war es viral. Ohne Name, Jahr und Quelle kann das aber niemand prüfen. Recherchiere **belegte Fakten**." },
        { t: "Die ALS Ice Bucket Challenge 2014", p: 2,
          fb: "Ein starkes Beispiel: real, gut belegt und klar vom **Mitmachen und Teilen** getragen. Auch EDEKA #heimkommen aus der Lektion würde passen." }
      ] },
    { k: "daten", h: "Recherche: Ice Bucket Challenge 2014", l: [
      "**Idee:** Eiswasser über den Kopf schütten und ein Video posten",
      "**Mechanik:** Danach nominierst du drei weitere Personen.",
      "**Teilnahme:** über 17 Mio. Menschen luden Videos hoch",
      "**Spenden:** rund 115 Mio. US-$ für die ALS Association",
      "**Vergleich:** im Vorjahreszeitraum waren es 2,8 Mio. US-$",
      "**Quelle:** Fachzeitschrift Nature, 2017"
    ] },
    { k: "wahl", h: "Warum war der virale Effekt hier entscheidend?",
      b: "Suche den Mechanismus, der aus Zuschauern neue Sender gemacht hat.",
      o: [
        { t: "Die Videos waren lang und aufwendig produziert", p: 0,
          fb: "Der Aufwand war nicht der Treiber. Mitmachen war einfach: Eiswasser, Video, Nominierung. Gerade die **einfache Idee** machte das Teilen so leicht." },
        { t: "Die Aktion war lustig, darum schauten sehr viele Menschen zu", p: 1,
          fb: "**Gefühle** wie Humor halfen, das passt zum Kurs. Zuschauen allein verbreitet aber nichts. Entscheidend war, dass Zuschauer selbst mitmachten und andere nominierten." },
        { t: "Jede Teilnahme löste durch die Nominierung neue Teilnahmen aus", p: 2,
          fb: "Das ist der Kern. Die **Nominierung** machte jeden Teilnehmer zum Sender. So wuchs die Reichweite von Netzwerk zu Netzwerk, ohne gekaufte Werbung." }
      ] },
    { k: "wahl", h: "Welche Grenze gehört in eine gute Antwort?",
      b: "Eine starke Begründung nennt auch, was der virale Effekt nicht leisten kann.",
      o: [
        { t: "Mit einer Challenge wird jede Kampagne sicher viral", p: 0,
          fb: "Das stimmt nicht. Laut Lektion lässt sich Viralität **nicht planen oder kaufen**. Viele Challenges gehen unter." },
        { t: "Gute Bedingungen schaffen ja, garantieren nein", p: 2,
          fb: "So sagt es der Merksatz: Viral ist ein **Ergebnis, kein Werkzeug**. Dazu kommt die kurze Lebensdauer. Auch Kritik verbreitet sich so schnell, bis zum Shitstorm." },
        { t: "Viralität ist reiner Zufall, Planung bringt gar nichts", p: 1,
          fb: "Zum Teil richtig: Garantieren kannst du sie nicht. Gefühl, einfache Idee, Mitmachen und Seeding verbessern aber die Chancen deutlich." }
      ] },
    { k: "frei", h: "Jetzt du: Erklärung, Beispiel, Begründung",
      b: "Schreibe deine Abgabe in Stichpunkten. **1.** Erkläre den viralen Effekt. **2.** Nenne ein reales Beispiel mit Name, Jahr und belegten Zahlen. **3.** Begründe, warum der Effekt entscheidend war. Nenne auch eine Grenze. Ein anderes belegtes Beispiel ist erlaubt.",
      muster: [
        ["Erklärung: Nutzer geben den Inhalt selbst weiter", "\\bteil(en|t|ten|te)\\b|geteilt|weiterteil|\\bshares?\\b|weiterge|weiterleit|weitertrag|verbreit|person zu person|nutzer zu nutzer|zum sender|mundpropaganda|word of mouth"],
        ["Wirkung: Reichweite und Bekanntheit wachsen sprunghaft", "schnell|rasant|sprunghaft|schneeball|lawine|lauffeuer|exponent|bekanntheit|reichweite|earned media|neue[sn]? (menschen|netzwerk)"],
        ["Reales Beispiel mit Name oder Jahreszahl", "\\b(19|20)\\d{2}\\b|ice.?bucket|heimkommen|edeka|duolingo|#\\w{3,}"],
        ["Begründung über den Mechanismus: Mitmachen, Nominieren, Gefühl", "nominier|mitmach|mitgemacht|machten mit|emotion|gefühl|rühr|überrasch|humor|nachahm|einfache idee|seeding"],
        ["Beleg: Zahlen oder Quelle", "\\d+([.,]\\d+)?\\s*(mio|millio|mrd|milliard|%|tausend)|\\d{1,3}\\.000|nature|quelle"],
        ["Grenze: nicht planbar, kurzlebig, Risiko Shitstorm", "nicht (planbar|garantier|kaufbar|plan|kauf)|kurz(e|lebig| lebt)|kurze lebensdauer|verpufft|shitstorm|kontrollverlust|kritik"]
      ],
      min: 4,
      bsp: "Erklärung:\n• Nutzer geben einen Inhalt selbst weiter, von Person zu Person.\n• Jede Weitergabe öffnet ein neues Netzwerk. Die Reichweite wächst sprunghaft (Earned Media).\nBeispiel:\n• ALS Ice Bucket Challenge 2014: Eiswasser über den Kopf, Video posten, drei Personen nominieren.\n• Über 17 Mio. Menschen luden Videos hoch.\n• Rund 115 Mio. US-$ Spenden, im Vorjahreszeitraum 2,8 Mio. US-$ (Quelle: Nature, 2017).\nBegründung:\n• Die Nominierung machte jeden Teilnehmer zum Sender.\n• Die Idee war einfach und emotional, Mitmachen ging sofort.\n• Ohne das Teilen der Nutzer wäre die Aktion klein geblieben.\nGrenze:\n• Viralität ist nicht planbar und lebt meist nur kurz." },
    { k: "fazit", h: "Lösung kompakt: teilen, belegen, begründen", l: [
      "**Erklärung:** Nutzer geben Inhalte selbst weiter, die Reichweite wächst sprunghaft.",
      "**Beispiel:** Ice Bucket Challenge 2014, über 17 Mio. Teilnehmende, Quelle Nature",
      "**Begründung:** Die Nominierung machte jeden Teilnehmer zum Sender.",
      "**Grenze:** Viral ist ein Ergebnis, kein Werkzeug. Es lässt sich nicht kaufen.",
      "War es schwer? Wiederhole die Lektion „Der virale Effekt“."
    ] }
  ]
},
{
  id: "nike-kanaele",
  titel: "Nike auf Pinterest & Instagram",
  firma: "Nike (Profilanalyse aus der Aufgabe)",
  rolle: "Du vergleichst zwei Kanäle einer Marke und leitest ihre Ziele ab.",
  kurz: "Zwei Profile analysieren und vergleichen",
  module: ["platt", "unt"],
  min: 11,
  schritte: [
    { k: "szene", h: "Abgabe: je Kanal 3–4 Stichpunkte plus Fazit",
      b: "Öffne zwei Profile von Nike: **pinterest.de/nike/_shop** und **instagram.com/nike**. Abzugeben sind: je Kanal **3–4 Stichpunkte**, wie Nike den Kanal anders nutzt. Dazu kommt ein **Fazit**: Welche Ziele verfolgt Nike mit jedem Kanal? Mach dir beim Ansehen Notizen." },
    { k: "wahl", h: "Was genau ist gefragt?",
      o: [
        { t: "Beschreiben, welche Produkte Nike verkauft", p: 0,
          fb: "Die Produkte sind nicht das Thema. Gefragt ist, wie Nike die **Kanäle** unterschiedlich nutzt und warum." },
        { t: "Je Kanal Unterschiede ableiten, im Fazit die Ziele erklären", p: 2,
          fb: "Genau. Erst analysierst du **beide Profile** getrennt. Dann vergleichst du sie. Am Ende schließt du auf die **Ziele** des Unternehmens." },
        { t: "Entscheiden, welcher der beiden Kanäle für Nike besser funktioniert", p: 1,
          fb: "Eine Rangliste ist nicht gefragt. Beide Kanäle haben eigene Aufgaben. Besser: **Unterschiede** herausarbeiten und daraus die **Ziele** ableiten." }
      ] },
    { k: "daten", h: "Werkzeug: Checkliste für die Profilanalyse", l: [
      "**Formate:** Bilder, Videos, Reels, Storys, Pins?",
      "**Inhalte:** Produkt, Lifestyle, Menschen, Sport, Ideen?",
      "**Ansprache:** sachlich, emotional, persönlich? Gibt es CTAs?",
      "**Verlinkung:** Führen Beiträge direkt in den Shop?",
      "**Nutzungsabsicht:** Warum ist die Zielgruppe auf dem Kanal?",
      "**Interaktion:** Wie viele Kommentare und Reaktionen gibt es?"
    ] },
    { k: "wahl", h: "Wie nutzen Menschen Pinterest laut Kurs?",
      b: "Lektion „Pinterest & Sharing-Strategie“. Achte auch darauf, wohin die Pins führen.",
      o: [
        { t: "Vor allem zum privaten Chatten mit Freunden und Familie", p: 0,
          fb: "Das passt eher zu Messengern. Auf Pinterest heften Nutzer Bilder an **Pinnwände** und sammeln Ideen." },
        { t: "Vor allem für aktuelle Nachrichten in Echtzeit", p: 1,
          fb: "Trends gibt es auch dort. Pins sind aber **langlebig** und werden lange gefunden. Nutzer suchen eher Inspiration als Neuigkeiten." },
        { t: "Als visuelle Suchmaschine für Ideen und Käufe", p: 2,
          fb: "So sagt es die Lektion. Pins werden **lange gefunden**, ranken in der Google-Bildersuche und führen per Link direkt in den **Shop**." }
      ] },
    { k: "wahl", h: "Was zeichnet Instagram laut Kurs aus?",
      b: "Lektion „Instagram & Reels“.",
      o: [
        { t: "Reels, Storys und Feel-good-Content", p: 2,
          fb: "Richtig. Instagram ist eine **visuelle Plattform** mit Feel-good-Content. Reels bringen viele Interaktionen. Für den Algorithmus zählt **Speichern** am meisten." },
        { t: "Klickbare Shop-Links in jedem einzelnen Beitrag", p: 0,
          fb: "Laut Lektion sind Links in Beiträgen **nicht klickbar**. Der Weg in den Shop ist dort also nicht der Kern. Instagram lebt von Bildern, Videos und Interaktion." },
        { t: "Lange Fachartikel und Whitepaper für Profis", p: 0,
          fb: "Das passt eher zu Blogs oder LinkedIn. Instagram zeigt Momente und Emotionen in **Bildern und Videos**." }
      ] },
    { k: "wahl", h: "Welcher Befund belegt das Ziel Traffic?",
      b: "Im Fazit brauchst du für jedes Ziel einen Beleg vom Profil.",
      o: [
        { t: "Viele Likes und Kommentare unter einem Reel", p: 1,
          fb: "Das ist ein guter Beleg, aber für **Interaktion und Bindung**. Traffic heißt Besucherstrom zur Website. Dafür brauchst du Links, die dorthin führen." },
        { t: "Pins mit Link auf eine Produktseite", p: 2,
          fb: "Genau. Ein Link vom Pin zur Produktseite bringt **Traffic** in den Shop. So verbindest du eine Beobachtung mit einem Ziel." },
        { t: "Die hohe Zahl der Follower oben auf dem Profil", p: 0,
          fb: "Follower zeigen mögliche Reichweite. Ob jemand in den Shop klickt, zeigen sie nicht. Suche einen Beleg, der zum Ziel passt." }
      ] },
    { k: "daten", h: "Raster für deine Stichpunkte je Kanal", l: [
      "**Punkt 1:** Warum ist die Zielgruppe auf dem Kanal?",
      "**Punkt 2:** Welche Formate und Inhalte siehst du?",
      "**Punkt 3:** Wie spricht Nike die Nutzer an, wie viel Interaktion gibt es?",
      "**Punkt 4:** Wohin führen Links, wie nah ist der Kauf?",
      "**Fazit:** je Kanal ein Ziel, mit Beleg vom Profil"
    ] },
    { k: "wahl", h: "Welches Fazit ist fachlich am stärksten?",
      o: [
        { t: "Beide Kanäle dienen am Ende nur dem Verkauf", p: 1,
          fb: "Verkauf ist ein Ziel. Auf Instagram stehen laut Kurs aber eher **Community** und Markenbild im Vordergrund. Besser: jedem Kanal ein eigenes Ziel geben." },
        { t: "Beide Kanäle verfolgen am Ende genau dasselbe Ziel", p: 0,
          fb: "Dann bräuchte Nike keine zwei Profile. Jeder Kanal hat eigene Stärken und damit **eigene Ziele**." },
        { t: "Pinterest: Traffic, Instagram: Image und Bindung", p: 2,
          fb: "Stark: Die Kanäle **ergänzen sich**. Pinterest begleitet die Kaufplanung. Instagram stärkt Markenbild, Bekanntheit und **Kundenbindung**, eine Chance aus der Einführung." }
      ] },
    { k: "frei", h: "Jetzt du: Profilvergleich mit Fazit",
      b: "Schreibe je Kanal **3–4 Stichpunkte** nach dem Raster. Schließe mit einem **Fazit**: ein Ziel je Kanal, mit Beleg vom Profil. Stütze dich auf deine Notizen und auf den Kurs.",
      muster: [
        ["Pinterest: Inspiration und Suche, Käufe planen", "suchmaschine|\\bsuch(en|e|t)\\b|inspir|ideen|pinnw|planen|geplant|merkliste"],
        ["Pinterest: langlebige Pins, Links in den Shop", "(in den|zum|im|ins) (online-?)?shop|shop-?link|produktseite|verlink|klickbar|\\blinks?\\b|langlebig|lange (gefunden|sichtbar)|google"],
        ["Instagram: Reels, Storys und Videos", "\\breels?\\b|stor(y|ys|ies)\\b|\\blive\\b|video|karussell"],
        ["Instagram: Community, Interaktion, Emotion", "communit|interaktion|kommentar|speicher|markenbild|image|emotion|lifestyle|feel.?good|persönlich"],
        ["Fazit: eigenes Ziel je Kanal wie Verkauf, Bekanntheit, Bindung", "bekanntheit|kundenbindung|bindung|umsatz|verkauf|traffic|ergänz|kaufentscheidung"]
      ],
      min: 4,
      bsp: "Pinterest:\n• Visuelle Suchmaschine: Nutzer suchen Ideen und planen Käufe.\n• Pins zeigen Produkte als Inspiration, oft mit Bild und kurzer Beschreibung.\n• Pins sind langlebig und ranken in der Google-Bildersuche.\n• Links führen direkt auf Produktseiten im Shop.\nInstagram:\n• Reels, Storys und Bilder mit Sport und Lifestyle\n• Emotionale Ansprache und Feel-good-Content statt Produktliste\n• Ziel sind Interaktionen: Speichern, Teilen, Kommentieren.\n• Links in Beiträgen sind nicht klickbar, das Markenbild steht vorn.\nFazit:\n• Pinterest bringt Traffic und Verkauf, belegt durch Shop-Links.\n• Instagram stärkt Bekanntheit, Image und Kundenbindung.\n• Die Kanäle ergänzen sich entlang der Kaufentscheidung." },
    { k: "fazit", h: "Lösung kompakt: zwei Kanäle, zwei Aufgaben", l: [
      "**Analyse:** Formate, Inhalte, Ansprache, Verlinkung und Nutzungsabsicht prüfen",
      "**Pinterest:** visuelle Suchmaschine, langlebige Pins, Links in den Shop",
      "**Instagram:** Reels und Storys, Feel-good-Content, Community und Interaktion",
      "**Fazit:** Pinterest zielt auf Traffic und Verkauf, Instagram auf Image und Bindung.",
      "War es schwer? Wiederhole „Pinterest & Sharing-Strategie“ und „Instagram & Reels“."
    ] }
  ]
},
{
  id: "influencer-messer",
  titel: "Influencer fürs Taschenmesser",
  firma: "Gipfelwerk Outdoor GmbH, Chemnitz",
  rolle: "Du planst als Social Media Manager eine Influencer-Kooperation für ein neues Produkt.",
  kurz: "Passende Form der Zusammenarbeit finden",
  module: ["unt", "recht"],
  min: 12,
  schritte: [
    { k: "szene", h: "Abgabe: Kooperationsform mit Begründung", wer: "Katrin Albers, Geschäftsführerin",
      b: "Unser neues Produkt ist ein **Outdoor-Multifunktions-Taschenmesser**. Mit Influencer Marketing wollen wir es bekannt machen. Schlag mir mindestens **eine Form der Zusammenarbeit** vor, zum Beispiel Unboxing oder Product Placement. Nenne dazu einen **passenden Influencer** und **begründe** deine Wahl kurz." },
    { k: "daten", h: "Ausgangslage", l: [
      "**Produkt:** Taschenmesser mit Klinge, Säge, Feuerstarter und Dosenöffner",
      "**Zielgruppe:** Wanderer und Camper zwischen 25 und 45 Jahren",
      "**Ziel:** das Produkt in der Zielgruppe bekannt machen",
      "**Budget:** 4.000 € für die erste Kooperation",
      "**Stärke:** robust, leicht und für viele Situationen draußen"
    ] },
    { k: "wahl", h: "Was genau ist gefragt?",
      o: [
        { t: "Eine Liste aller Influencer mit den meisten Followern", p: 0,
          fb: "Die Zahl der Follower allein beantwortet die Frage nicht. Gefragt ist, **wie** der Influencer berichten soll und warum er passt." },
        { t: "Form, passender Influencer, Begründung", p: 2,
          fb: "Genau. Du brauchst eine **Form**, einen passenden **Influencer** und eine kurze **Begründung**. Alles muss zum Ziel Bekanntheit passen." },
        { t: "Ein fertiger Text, den der Influencer so posten soll", p: 1,
          fb: "Ein Text kommt zu früh. Erst klärst du **Form und Partner**. Außerdem braucht der Influencer kreative Freiheit, damit er authentisch bleibt." }
      ] },
    { k: "wahl", h: "Welcher Influencer passt am besten?",
      b: "Lektion „Influencer & Influencer-Marketing“: Achte auf Thema, **Brandfit** und **Social Authority**.",
      o: [
        { t: "Ein Mega-Influencer aus der Musikszene mit 2 Mio. Followern", p: 1,
          fb: "Viel Reichweite, aber laut Lektion nur 1–5 % Interaktion. Außerdem fehlt der **Brandfit**: Musik hat wenig mit Outdoor zu tun." },
        { t: "Eine Beauty-Influencerin, die gerade sehr gefragt ist", p: 0,
          fb: "Thema und Marke passen nicht zusammen. Ohne **Brandfit** wirkt die Empfehlung unglaubwürdig. Die Wanderer erreichst du so kaum." },
        { t: "Ein Micro-Influencer zum Thema Wandern und Bushcraft", p: 2,
          fb: "Klares Thema, hohe **Social Authority** in der Nische und viel Nähe zur Community. Micro-Influencer erreichen laut Lektion 25–50 % Engagement." }
      ] },
    { k: "wahl", h: "Passt er ins Budget?",
      b: "Der Micro-Influencer hat 40.000 Follower. Faustwert aus „Influencer-Kampagnen planen & steuern“: pro 10.000 Follower etwa 100 € pro Post.",
      o: [
        { t: "Etwa 400 € pro Post, drei Teile also rund 1.200 €", p: 2,
          fb: "Richtig: 40.000 ÷ 10.000 × 100 € = 400 €. Drei Teile passen gut ins Budget. Der echte Preis bleibt **Verhandlungssache**, etwa nach Aufwand und Nutzungsrechten." },
        { t: "Etwa 4.000 € pro Post, mehr als ein Post geht nicht", p: 0,
          fb: "Hier ist eine Null zu viel. 40.000 Follower sind vier Mal 10.000. Das ergibt etwa 400 € pro Post." },
        { t: "Das lässt sich vorher gar nicht abschätzen", p: 1,
          fb: "Der Preis ist zwar Verhandlungssache. Der **Faustwert** gibt dir aber eine erste Orientierung für die Planung." }
      ] },
    { k: "wahl", h: "Welche Form der Zusammenarbeit passt?",
      b: "Ein Taschenmesser überzeugt durch seine **Funktionen**. Die Formen findest du in der Lektion „Influencer & Influencer-Marketing“.",
      o: [
        { t: "Ein Unboxing-Video zu Hause am Tisch", p: 1,
          fb: "Ein **Unboxing** zeigt Verpackung und ersten Eindruck. Die Funktionen im Einsatz sieht die Community aber nicht. Als Einstieg in eine Serie passt es gut." },
        { t: "Das Messer liegt nur nebenbei im Bild, ohne Erwähnung", p: 0,
          fb: "So geht die Botschaft unter, wie im Salat-Beispiel der Lektion. Auch ein **Product Placement** braucht einen klaren Rahmen. Für ein Funktionsprodukt passt ein Test besser." },
        { t: "Ein Test auf einer echten Tour, in mehreren Teilen", p: 2,
          fb: "Ein **Test** im Einsatz macht das Produkt **erlebbar**. Die Community sieht Säge, Feuerstarter und Klinge in echten Situationen. Das schafft Vertrauen." }
      ] },
    { k: "wahl", h: "Was gehört ins Briefing?",
      b: "Lektion „Influencer-Kampagnen planen & steuern“: Rahmen setzen, Freiheit lassen.",
      o: [
        { t: "Ein fertiger Text, den der Influencer wörtlich übernimmt", p: 0,
          fb: "Dann wirkt der Beitrag wie plakative Werbung. Laut Lektion braucht der Influencer **kreative Freiheit**, damit er authentisch bleibt." },
        { t: "Produktinfos, Ziel, Format, Zeitpunkt, Hashtags, No-Gos", p: 2,
          fb: "Ein gutes **Briefing** gibt Orientierung. Ein No-Go wäre ein leichtsinniger Umgang mit der Klinge. Dazu kommen **Vertrag** und Freigaben vor der Veröffentlichung." },
        { t: "Gar nichts, er bekommt einfach ein Messer geschickt", p: 1,
          fb: "Das lässt Freiheit, aber ohne Rahmen kann die Botschaft untergehen. Ein **Briefing** klärt Ziel, Format und No-Gos." }
      ] },
    { k: "wahl", h: "Wie wird der Beitrag gekennzeichnet?",
      b: "Der Influencer bekommt Honorar und das Messer. Lektion „Werbung kennzeichnen & Werbeaussagen“.",
      o: [
        { t: "Gar nicht, das Messer ist ja nur ein Geschenk", p: 0,
          fb: "Auch eine **Sachleistung** ist eine Gegenleistung. Ohne Kennzeichnung droht **Schleichwerbung**, die in der Regel unlauter ist." },
        { t: "Mit einem kleinen Hashtag ganz am Ende der Hashtags", p: 1,
          fb: "Versteckt ist die Kennzeichnung kaum erkennbar. Werbung muss **auf den ersten Blick** als Werbung zu sehen sein." },
        { t: "Deutlich mit „Werbung“ oder „Anzeige“, gleich zu Beginn", p: 2,
          fb: "So ist die Werbung klar erkennbar. Die Lektion nennt genau diese Begriffe. Ein Link zum Hersteller ist außerdem immer Werbung." }
      ] },
    { k: "wahl", h: "Woran misst du das Ziel Bekanntheit?",
      b: "Zum letzten Schritt der Kampagne gehört die Kontrolle der Ergebnisse.",
      o: [
        { t: "Nur an der Zahl der verkauften Messer im Shop", p: 1,
          fb: "Verkauf ist wichtig, aber hier nicht das Ziel. Ein **Rabattcode** misst Verkäufe. Für Bekanntheit zählen Reichweite und Interaktion." },
        { t: "An Reichweite und Engagement-Rate der Beiträge", p: 2,
          fb: "Passt zum Ziel. Die **Reichweite** zeigt, wie viele erreicht wurden. Die **Engagement-Rate** zeigt, wie stark die Community reagiert hat." },
        { t: "An der Zahl der Follower des Influencers", p: 0,
          fb: "Die Follower zählst du vor der Auswahl. Die Zahl sagt nichts darüber, was die Kampagne bewirkt hat." }
      ] },
    { k: "frei", h: "Jetzt du: dein Vorschlag an die Chefin",
      b: "Schreibe deinen Vorschlag in Stichpunkten. **1.** Mindestens eine Form der Zusammenarbeit. **2.** Ein passender Influencer-Typ mit Thema. **3.** Eine kurze Begründung. Ergänze Briefing, Kosten, Kennzeichnung und Erfolgskontrolle.",
      muster: [
        ["Form der Zusammenarbeit konkret beschrieben", "unboxing|product placement|produktplatzierung|\\btest|test(en|et|s)?\\b|rezension|review|tutorial|takeover|gewinnspiel|rabattcode"],
        ["Influencer-Typ mit passendem Thema", "micro|mikro|nano|wander|camp|bushcraft|survival|outdoor-?(influencer|creator|blogger|youtuber)|nische"],
        ["Begründung: Brandfit, Vertrauen, Funktionen erlebbar", "brandfit|vertrau|glaubw|authent|erlebbar|im einsatz|social authority|engagement|nähe|überzeug"],
        ["Rahmen: Briefing, kreative Freiheit, Vertrag, Freigabe", "briefing|vertrag|freigabe|no.?gos?|kreative freiheit"],
        ["Kennzeichnung mit „Werbung“ oder „Anzeige“", "\\bwerbung\\b|\\banzeige\\b|#ad\\b|#werbung"],
        ["Kosten oder Erfolgskontrolle mit Kennzahl", "\\d+\\s*€|\\beuro\\b|budget|reichweite|impression|engagement-?rate|kennzahl|messen|kontroll"]
      ],
      min: 4,
      bsp: "• Form: Produkttest auf einer echten Wandertour, als Reel-Serie in drei Teilen.\n• Kurzes Unboxing als Einstieg, danach Säge, Feuerstarter und Klinge im Einsatz.\n• Influencer: Micro-Influencer zum Thema Wandern und Bushcraft.\n• Begründung: klares Thema und guter Brandfit. Die Community vertraut seinem Urteil.\n• Der Test macht die Funktionen erlebbar und wirkt authentisch.\n• Kosten: bei 40.000 Followern etwa 400 € pro Post, drei Teile rund 1.200 €.\n• Rahmen: Briefing mit Ziel, Format und No-Gos, kreative Freiheit, Vertrag und Freigabe.\n• Kennzeichnung: deutlich mit „Werbung“ zu Beginn des Beitrags.\n• Erfolgskontrolle: Reichweite, Impressionen und Engagement-Rate der Beiträge." },
    { k: "fazit", h: "Lösung kompakt: Test mit Micro-Influencer", l: [
      "**Form:** Ein Test im Einsatz macht ein Funktionsprodukt erlebbar.",
      "**Partner:** Micro-Influencer mit Outdoor-Thema, gutem Brandfit und passendem Preis",
      "**Rahmen:** Briefing, kreative Freiheit, Vertrag, Freigabe und Erfolgskontrolle",
      "**Recht:** Bezahlte Beiträge klar mit „Werbung“ oder „Anzeige“ kennzeichnen.",
      "War es schwer? Wiederhole „Influencer & Influencer-Marketing“ und „Influencer-Kampagnen planen & steuern“."
    ] }
  ]
}
];
