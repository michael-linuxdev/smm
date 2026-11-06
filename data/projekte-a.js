// Praxisprojekte für „SMM Coach“ – Teil A (Bäckerei, Maschinenbau)
// Stand: November 2026, deutsches Recht. Fiktive Firmen und Personen.

export const PROJEKTE_A = [
{
  id: "baeckerei",
  titel: "Die Bäckerei geht online",
  firma: "Bäckerei Krume, Leipzig",
  rolle: "Du übernimmst Social Media für die Bäckerei Krume mit drei Filialen in Leipzig.",
  kurz: "Vom verwaisten Profil zur Vorbestellung",
  module: ["unt", "platt", "plan", "recht", "kpi"],
  min: 14,
  schritte: [
    { k: "szene", h: "Frische Brötchen, leere Kanäle", wer: "Jana Krume, Inhaberin",
      b: "Unsere Stammkundschaft wird älter, die Jüngeren gehen zur Kette am Bahnhof. Ich will, dass junge Leute uns kennen und **vorbestellen** – dann backen wir auch weniger für die Tonne. Du hast Zeit bis Ende Februar: 1.500 € Budget und vier Stunden pro Woche." },

    { k: "wahl", h: "Womit fängst du an?", b: "Jana würde am liebsten schon morgen den ersten Post sehen.",
      o: [
        { t: "Sofort Instagram, TikTok und Pinterest eröffnen und täglich posten", p: 0,
          fb: "Du produzierst ins Blaue: Ohne Ist-Analyse weißt du nicht, was schon da ist, wen du erreichen willst und was das Team leisten kann. Erst analysieren, dann handeln." },
        { t: "Erst Ist-Analyse: Kanäle, Zielgruppe, Mitbewerber, Ressourcen", p: 2,
          fb: "Richtig: Die Status-quo-Analyse ist der erste Schritt im Strategie-Prozess. Sie zeigt Stärken, Lücken und was mit vier Stunden pro Woche realistisch ist." },
        { t: "Die alte Facebook-Seite wiederbeleben und dort täglich Angebote posten", p: 1,
          fb: "Schnell, aber ungeprüft: Ob die junge Zielgruppe überhaupt auf Facebook ist, weißt du noch nicht. Erst die Analyse, dann die Kanalwahl." }
      ] },

    { k: "daten", h: "Ergebnis der Ist-Analyse",
      l: [
        "Facebook-Seite: 312 Fans, letzter Post im März 2022",
        "Impressum dort veraltet: alte Adresse, noch mit Faxnummer",
        "Google-Profil: 4,6 Sterne bei 280 Bewertungen",
        "Vorbestellungen: nur telefonisch, etwa 25 pro Woche",
        "Stärken: Sauerteig, alte Familienrezepte, herzliches Team",
        "Mitbewerber: Kette am Bahnhof mit App und Rabatten"
      ] },

    { k: "frei", h: "Formuliere ein SMART-Ziel", b: "Jana sagt: „Mehr junge Leute sollen vorbestellen.“ Mach daraus ein **SMART-Ziel** für Social Media bis Ende Februar 2027.",
  muster: [
    ["Spezifisch: Vorbestellungen als Ziel", "vorbestell|bestellung"],
    ["Messbar: Zahl der Vorbestellungen (oder Steigerung in %)", "\\b\\d[\\d.]*\\s?(%|prozent|(neue|zusätzliche|weitere|online-?)?\\s?(vor)?bestell)"],
    ["Terminiert: klares Enddatum", "\\bbis\\b|\\d{1,2}\\.\\s?\\d{1,2}\\.|\\bende\\b|\\b(dezember|januar|februar|märz)\\b|\\b20\\d\\d\\b"],
    ["Messweg: über Instagram-Link, WhatsApp oder Code", "\\blink|\\bcode\\b|rabattcode|\\butm|instagram|whatsapp"],
    ["Zielgruppe benannt (z. B. 20 bis 35 Jahre)", "\\bjung|\\b(18|20|25)\\s?(–|-|bis)\\s?(30|35|40)\\b|studi|neukund"]
  ],
  min: 4,
  bsp: "• Bis 28.02.2027 (terminiert)\n• gehen pro Monat 150 Vorbestellungen ein (messbar)\n• über den Instagram-Link und den Code „KRUME“ (spezifisch, messbar)\n• vor allem von Neukunden zwischen 20 und 35 (Zielgruppe)\n• mit 1.500 € und 4 Stunden pro Woche realistisch" },

    { k: "wahl", h: "Wie entsteht die Persona?", b: "Jana schlägt vor, einfach ihre 24-jährige Tochter zu fragen.",
      o: [
        { t: "Die Tochter befragen und die Persona nach ihr gestalten", p: 1,
          fb: "Ein Gespräch ist ein guter Anfang, aber kein Beleg. Eine Persona soll typisch sein – eine einzelne Person kann stark vom Durchschnitt abweichen." },
        { t: "Ohne Persona starten – „junge Leute“ ist genau genug", p: 0,
          fb: "Wer alle jungen Leute anspricht, erreicht niemanden. Ohne Persona fehlen dir Ton, Themen und die passenden Uhrzeiten." },
        { t: "Kurzumfrage in den Filialen, Bewertungen und Kassendaten auswerten", p: 2,
          fb: "Gut: Eine Persona ist fiktiv, aber belegt. Umfrage, Bewertungen und Kassenzeiten zeigen echte Wünsche – daraus wird eine typische Person statt eines Bauchgefühls." }
      ] },

    { k: "daten", h: "Persona: Paula, 27",
      l: [
        "Pflegekraft im Schichtdienst, wohnt in Leipzig-Connewitz",
        "Will gutes Brot, hat morgens aber kaum Zeit",
        "Pain Point: Abends ist ihr Lieblingsbrot ausverkauft",
        "Nutzt Instagram täglich, WhatsApp ständig, Facebook kaum",
        "Braucht: Tagesangebot, einfache Vorbestellung, feste Abholzeit"
      ] },

    { k: "wahl", h: "Welche Kanäle nimmst du?", b: "Du hast vier Stunden pro Woche und ein kleines Budget.",
      o: [
        { t: "Überall präsent: Instagram, TikTok, Facebook, Pinterest und X", p: 0,
          fb: "Fünf Kanäle mit vier Stunden pro Woche – jeder wird halbherzig bespielt. Die Kanalwahl richtet sich nach Ziel, Zielgruppe und Ressourcen, nicht nach „alles“." },
        { t: "Nur TikTok, weil dort die meisten jungen Leute sind", p: 1,
          fb: "TikTok erreicht Junge gut, aber Paula nutzt es kaum. Und ohne Kanal für das tägliche Angebot fehlt der direkte Weg zur Vorbestellung." },
        { t: "Instagram plus WhatsApp-Kanal; die Facebook-Seite aufräumen", p: 2,
          fb: "Passt zu Paula: Instagram für Bilder aus der Backstube, der WhatsApp-Kanal für das Tagesangebot als Einweg-Update. Die alte Seite bekommt ein aktuelles Impressum und einen Hinweis auf die neuen Kanäle." }
      ] },

    { k: "wahl", h: "Wohin kommt das Impressum?", b: "Das Instagram-Profil ist eingerichtet.",
      o: [
        { t: "Nirgends – auf unserer Website gibt es ja schon ein Impressum", p: 0,
          fb: "Geschäftlich genutzte Profile brauchen ein leicht erreichbares Impressum (§ 5 DDG). Fehlt der Weg dorthin, drohen Abmahnungen." },
        { t: "Link „Impressum“ in der Profil-Info, direkt zur Impressumsseite", p: 2,
          fb: "Richtig: leicht erkennbar, unmittelbar erreichbar, ständig verfügbar (§ 5 DDG). Sinnvoll: derselbe Link auch in der Beschreibung des WhatsApp-Kanals." },
        { t: "Einmal vollständig in den allerersten Beitrag schreiben", p: 0,
          fb: "Ein Beitrag rutscht im Profil nach unten und ist nicht ständig leicht erreichbar. Das Impressum gehört dauerhaft sichtbar in die Profil-Info." }
      ] },

    { k: "wahl", h: "Welche Content-Säulen?", b: "Für den Redaktionsplan brauchst du feste Themensäulen.",
      o: [
        { t: "Jeden Tag ein Angebot mit Preis und Rabatt, sonst nichts", p: 1,
          fb: "Nah am Ziel, aber eintönig: Reine Werbung bekommt wenig Interaktion und wird seltener ausgespielt. Es fehlen Einblicke und Menschen, die Bindung schaffen." },
        { t: "Backstube · Angebot & Vorbestellung · Team & Kundschaft · Leipzig", p: 2,
          fb: "Gut gemischt: Einblicke schaffen Vertrauen, das Angebot führt zur Vorbestellung, Menschen und Lokales sorgen für Nähe. Jede Säule zahlt auf das SMART-Ziel ein." },
        { t: "Memes und aktuelle Trends, egal ob sie zur Bäckerei passen", p: 0,
          fb: "Trends bringen vielleicht Reichweite, aber keine Vorbestellungen. Inhalte ohne Bezug zur Marke verwässern das Profil." }
      ] },

    { k: "daten", h: "Ausschnitt Redaktionsplan, KW 50",
      l: [
        "Mo 6:30 · WhatsApp · Tagesangebot · Säule Angebot · Tim",
        "Mi 18:00 · Reel · So entsteht der Stollen · Säule Backstube · du",
        "Do 6:30 · WhatsApp · Vorbestell-Link Stollen · Säule Angebot · Tim",
        "Sa 10:00 · Story · Weihnachtsmarkt · Säule Leipzig · du",
        "Status je Zeile: Idee → in Arbeit → Freigabe → veröffentlicht"
      ] },

    { k: "wahl", h: "Kooperation: Wie wird gekennzeichnet?",
      b: "Food-Bloggerin **Mia Hartung** (@leipzig.isst, 14.000 Follower) dreht ein Reel über euren Stollen – für 300 € und eine Gebäckbox. Sie fragt: „Muss ich das wirklich als Werbung markieren?“",
      o: [
        { t: "„#ad“ am Ende der Beschreibung genügt", p: 0,
          fb: "„#ad“ am Ende ist nicht auf den ersten Blick erkennbar. Mia bekommt Geld und Gebäck – das ist Werbung. Ohne klare Kennzeichnung droht eine Abmahnung, auch der Bäckerei als Auftraggeberin." },
        { t: "Nur das Plattform-Label „Bezahlte Partnerschaft“ setzen", p: 1,
          fb: "Besser als nichts, aber darauf allein sollte man nicht bauen: Das Label ist klein und leicht zu übersehen. Sicher ist „Werbung“ oder „Anzeige“ ganz vorn." },
        { t: "„Werbung“ gut sichtbar an den Anfang von Video und Text", p: 2,
          fb: "Richtig: Bei jeder Gegenleistung muss Werbung auf den ersten Blick erkennbar sein (§ 5a Abs. 4 UWG). Haltet das im Vertrag fest – samt Nutzungsrechten am Reel." }
      ] },

    { k: "wahl", h: "Ein schönes Foto mit Kundin",
      b: "Tim hat Stammkundin Frau Seidel fotografiert, wie sie lachend ihren Stollen abholt. Sie ist gut erkennbar. Jana will das Bild sofort posten.",
      o: [
        { t: "Frau Seidel fragen und die Einwilligung schriftlich festhalten", p: 2,
          fb: "Richtig: Wer erkennbar abgebildet ist, muss einwilligen (§ 22 KUG, DSGVO). Schriftlich ist sie beweisbar – mit Zweck, Kanälen und Hinweis auf das Widerrufsrecht." },
        { t: "Posten – sie war ja freiwillig im Laden", p: 0,
          fb: "Ein Besuch im Laden ist keine Einwilligung. Ohne Zustimmung drohen Unterlassung, Löschung und Ärger mit einer treuen Kundin." },
        { t: "Ihr Gesicht verpixeln und ohne Nachfrage posten", p: 1,
          fb: "Ist sie wirklich nicht erkennbar, greift das Recht am eigenen Bild meist nicht. Aber Kleidung oder Umfeld verraten oft die Person – und das Foto verliert seinen Reiz." }
      ] },

    { k: "daten", h: "Auswertung nach drei Monaten",
      l: [
        "Instagram: 1.140 Follower (Start: 0)",
        "Reichweite im Februar: 21.500 erreichte Personen",
        "Interaktionen im Februar: 1.032",
        "WhatsApp-Kanal: 410 Abonnenten",
        "Vorbestellungen im Februar: 96 über Link, 72 mit Code „KRUME“",
        "Ausgegeben: 1.380 € von 1.500 €"
      ] },

    { k: "wahl", h: "Wie hoch ist die Engagement-Rate?", b: "Rechne mit der Reichweite im Februar.",
      o: [
        { t: "20,8 %", p: 0,
          fb: "Die Formel ist umgedreht: 21.500 ÷ 1.032. Richtig ist Interaktionen ÷ Reichweite × 100." },
        { t: "4,8 %", p: 2,
          fb: "Richtig: 1.032 ÷ 21.500 × 100 = 4,8 %. Die Inhalte kommen bei den erreichten Personen gut an." },
        { t: "0,048 %", p: 0,
          fb: "Hier fehlt das × 100: 1.032 ÷ 21.500 = 0,048 – erst mal 100 ergibt den Prozentwert 4,8 %." },
        { t: "90,5 %", p: 0,
          fb: "Das ist Interaktionen ÷ Follower. Erreicht wurden aber viel mehr Personen als Follower. Gefragt war die Rate auf die Reichweite." }
      ] },

    { k: "wahl", h: "Erfolg oder nicht?",
      b: "Jana: „Nur 1.140 Follower – die Kette hat 20.000. Haben wir versagt?“ Zur Erinnerung: Ziel waren 150 Vorbestellungen über Social Media im Februar.",
      o: [
        { t: "Ja – unter 10.000 Followern ist das kein Erfolg", p: 0,
          fb: "Follower sind eine Vanity Metric. Euer Ziel waren Vorbestellungen – daran misst sich der Erfolg." },
        { t: "Unklar – erst drei Monate mit Anzeigen weitertesten", p: 1,
          fb: "Weitertesten ist sinnvoll, aber die Frage lässt sich schon beantworten: Das SMART-Ziel ist messbar, der Soll-Ist-Vergleich liegt vor." },
        { t: "Nein – 168 Vorbestellungen bei Ziel 150, also 112 %", p: 2,
          fb: "Richtig: 96 + 72 = 168; 168 ÷ 150 × 100 = 112 % Zielerreichung, Budget eingehalten. Der Soll-Ist-Vergleich zählt, nicht die Follower-Zahl." }
      ] },

    { k: "fazit", h: "Was du in diesem Projekt angewendet hast",
      l: [
        "Ist-Analyse vor dem ersten Post",
        "SMART-Ziel und belegte Persona statt „junge Leute halt“",
        "Kanalwahl nach Ziel, Zielgruppe und Ressourcen",
        "Impressum (§ 5 DDG), Werbung kennzeichnen, Einwilligung (§ 22 KUG)",
        "Engagement-Rate und Soll-Ist-Vergleich statt Vanity Metrics"
      ] }
  ]
},

{
  id: "maschinenbau",
  titel: "Azubis gesucht!",
  firma: "Lindwerk Maschinenbau GmbH, Chemnitz",
  rolle: "Du verantwortest Social Media und Social Recruiting bei einem Chemnitzer Maschinenbauer mit 180 Mitarbeitenden.",
  kurz: "12 Azubis für 2027 über Social Media",
  module: ["unt", "platt", "recht", "kpi"],
  min: 15,
  schritte: [
    { k: "szene", h: "Sieben leere Plätze", wer: "Thomas Brandt, Geschäftsführer",
      b: "Für 2026 hatten wir 12 Ausbildungsplätze und nur 5 besetzt. Für 2027 brauchen wir alle 12, sonst fehlen uns in vier Jahren die Leute. Ehrlich gesagt halte ich TikTok für Kinderkram. Überzeug mich. Budget bis Ende März: 9.000 €." },

    { k: "daten", h: "Ausgangslage Ausbildung 2026",
      l: [
        "Bewerbungen: 23 für 12 Plätze in drei Berufen",
        "Quellen: Jobbörse 9, Website 8, Ausbildungsmesse 6",
        "Social Media: LinkedIn-Seite, 640 Follower; kein TikTok, kein Instagram",
        "Stärken: 95 % Übernahme, eigene Lernwerkstatt, Export in 30 Länder",
        "Azubi-Umfrage: 70 % kannten die Firma vorher nicht"
      ] },

    { k: "wahl", h: "Welche EVP stellst du in den Mittelpunkt?",
      b: "Die Employer Value Proposition soll sagen, warum man gerade bei Lindwerk lernen sollte.",
      o: [
        { t: "„Ihr innovativer Partner für Qualität und Präzision“", p: 0,
          fb: "Das ist ein Slogan für Kunden – austauschbar und ohne Nutzen für Azubis. Eine EVP beschreibt das Nutzenversprechen als Arbeitgeber." },
        { t: "„Gute Vergütung nach Tarif und 30 Tage Urlaub“", p: 1,
          fb: "Wahr und wichtig, aber das bieten viele Betriebe. Die EVP sollte zeigen, was Lindwerk unterscheidet." },
        { t: "„Du baust echte Maschinen für 30 Länder – 95 % bleiben“", p: 2,
          fb: "Konkret, belegbar, auf die Zielgruppe zugeschnitten. Eine gute EVP ist wahr – die Azubis können sie in ihren Videos selbst bestätigen." }
      ] },

    { k: "frei", h: "Zwei Zielgruppen, zwei Botschaften",
      b: "Schülerinnen und Schüler entscheiden, Eltern reden kräftig mit. Nenne für **beide** je einen passenden Kanal oder Weg und das, was sie wissen wollen.",
      muster: [
        ["Schüler: TikTok oder Instagram", "tiktok|instagram|\\binsta\\b|\\breels?\\b"],
        ["Schüler: echter Alltag, Team, Azubis zeigen sich", "alltag|einblick|\\bspa(ß|ss)|\\bteam|\\bazubis? zeig|\\bechte?[nrs]?\\b|ehrlich|lernwerkstatt"],
        ["Eltern: Facebook, WhatsApp, Elternabend, Tag der offenen Tür", "facebook|whatsapp|elternabend|\\bmesse|zeitung|offenen tür|infoabend|\\bpresse|elternbrief"],
        ["Eltern: Sicherheit, Übernahme, Vergütung, Zukunft", "sicher|übernahm|übernommen|vergütung|gehalt|\\bgeld\\b|zukunft|perspektiv|karriere|tarif"]
      ],
      min: 3,
      bsp: "• Schüler: TikTok und Instagram\n• Botschaft: echter Azubi-Alltag, Team, was man in der Lernwerkstatt baut\n• Eltern: Facebook, Elternabend, Tag der offenen Tür\n• Botschaft: sichere Zukunft, 95 % Übernahme, Vergütung nach Tarif" },

    { k: "wahl", h: "Welcher Kanal-Mix?",
      b: "Neben den Azubis sucht Lindwerk auch vier erfahrene Fachkräfte für die Konstruktion.",
      o: [
        { t: "Alles auf LinkedIn – da sind wir ja schon", p: 0,
          fb: "LinkedIn erreicht Fachkräfte, aber kaum 15- bis 17-Jährige. Die Kanalwahl folgt der Zielgruppe, nicht der Gewohnheit." },
        { t: "TikTok und Instagram für Schüler, LinkedIn für Fachkräfte", p: 2,
          fb: "Passt: Kurzvideos dort, wo Jugendliche sind; LinkedIn für Berufserfahrene und Active Sourcing. Jeder Kanal bekommt ein eigenes Ziel und eigene KPIs." },
        { t: "Nur TikTok – für Azubis und Fachkräfte zugleich", p: 1,
          fb: "Für Schüler stark, für erfahrene Konstrukteure eher nicht. Und Instagram, das viele Jugendliche ebenfalls nutzen, fehlt." }
      ] },

    { k: "szene", h: "Azubis vor die Kamera",
      b: "**Lea** (19, Mechatronik) und **Can** (17, Zerspanung) wollen ihren Alltag in Kurzvideos zeigen. Brandt ist plötzlich begeistert: „Super! Dann machen das ab sofort **alle** Azubis – jeder einen Post pro Woche, Pflicht.“" },

    { k: "wahl", h: "Wie baust du das Programm auf?", b: "Es geht um ein Corporate-Influencer-Programm.",
      o: [
        { t: "Pflicht für alle Azubis, genau so wie Brandt es sich wünscht", p: 0,
          fb: "Pflicht-Posts wirken gestellt und demotivieren. Ein Corporate-Influencer-Programm lebt von Freiwilligkeit – sonst ist es nicht glaubwürdig." },
        { t: "Lea und Can drehen einfach los, ganz ohne Regeln", p: 1,
          fb: "Echt und motiviert, aber riskant: Ohne Leitlinien fehlen Antworten auf Geheimhaltung, Musikrechte oder Kritik in den Kommentaren." },
        { t: "Freiwillig, mit Schulung, Leitlinien und Drehzeit im Dienst", p: 2,
          fb: "Richtig: Freiwillige Corporate Influencer mit Schulung und klaren Leitlinien wirken echt. Wer in der Arbeitszeit dreht, macht es nicht nebenbei." }
      ] },

    { k: "wahl", h: "Einwilligung für Fotos und Videos",
      b: "Can ist 17. In den Videos sind auch Kollegen aus der Fertigung zu sehen.",
      o: [
        { t: "Ein mündliches Okay reicht, alle haben ja genickt und mitgemacht", p: 0,
          fb: "Bei Beschäftigten muss die Einwilligung schriftlich oder elektronisch erfolgen (§ 26 Abs. 2 BDSG). Ein Nicken lässt sich später nicht beweisen." },
        { t: "Schriftlich oder elektronisch und freiwillig, bei Can auch die Eltern", p: 2,
          fb: "Richtig: § 22 KUG und § 26 Abs. 2 BDSG verlangen eine freiwillige, dokumentierte Einwilligung. Bei Minderjährigen kommen die Sorgeberechtigten dazu. Wer nicht will, wird nicht gefilmt – ohne Nachteile." },
        { t: "Klausel in alle Arbeitsverträge: Aufnahmen sind immer erlaubt", p: 0,
          fb: "Eine pauschale Pflichtklausel ist nicht freiwillig. Die Einwilligung braucht einen klaren Zweck und muss widerrufbar sein (§ 26 Abs. 2 BDSG, § 22 KUG)." }
      ] },

    { k: "frei", h: "Social-Media-Guidelines",
      b: "Schreibe **vier Regeln** für die Social-Media-Guidelines, die Lea, Can und alle Mitarbeitenden bekommen.",
      muster: [
        ["Geheimhaltung: keine Kundendaten, Zeichnungen, Prototypen", "geheim|vertraulich|kundendaten|zeichnung|prototyp|interna|\\bintern(e|en|es)?\\b"],
        ["Kenntlich machen, dass man bei Lindwerk arbeitet", "kenntlich|transparen|offenleg|eigene meinung|arbeite bei|im namen|mitarbeiter(in)? (von|bei)"],
        ["Rechte: Einwilligung der Gezeigten, nur lizenzierte Musik", "einwillig|zustimm|erlaubnis|\\bmusik|bildrecht|urheber|lizen"],
        ["Kritik nicht selbst ausdiskutieren, ans Team weiterleiten", "kritik|negativ|beschwerd|\\bkrise|weiterleit|\\bmelden|ansprechp|social-media-team|eskal"],
        ["Respektvoller Ton, Arbeitsschutz im Bild", "respekt|höflich|\\bton\\b|freundlich|arbeitsschutz|schutzbrille|gehörschutz"]
      ],
      min: 3,
      bsp: "• Keine Kundendaten, Zeichnungen oder Prototypen zeigen\n• Kenntlich machen: „Ich arbeite bei Lindwerk“\n• Nur Kollegen zeigen, die eingewilligt haben; nur lizenzierte Musik\n• Kritik nicht selbst ausdiskutieren, ans Social-Media-Team weiterleiten\n• Arbeitsschutz im Bild beachten (Schutzbrille, Gehörschutz)" },

    { k: "szene", h: "Der Betriebsrat meldet sich", wer: "Silke Ullmann, Betriebsratsvorsitzende",
      b: "Ihr wollt ein Planungstool einführen, das zeigt, wer wann gepostet hat und wie schnell auf Kommentare geantwortet wurde. Damit kann man Leistung kontrollieren. Darüber reden wir, bevor es läuft." },

    { k: "wahl", h: "Wie reagierst du?",
      o: [
        { t: "Trotzdem starten – wir wollen ja niemanden überwachen", p: 0,
          fb: "Die Absicht zählt nicht: Ist ein Tool objektiv geeignet, Verhalten oder Leistung zu überwachen, bestimmt der Betriebsrat mit (§ 87 Abs. 1 Nr. 6 BetrVG)." },
        { t: "Den Betriebsrat schriftlich informieren und dann starten", p: 0,
          fb: "Informieren reicht nicht. Bei Mitbestimmung braucht es eine Einigung mit dem Betriebsrat, bevor das Tool genutzt wird." },
        { t: "Aufs Tool verzichten und alles in einer Tabelle planen", p: 1,
          fb: "Umgeht den Konflikt, kostet aber Übersicht und Zeit. Besser: das passende Tool mit klaren Regeln gemeinsam einführen." },
        { t: "Früh einbinden und eine Betriebsvereinbarung zum Tool schließen", p: 2,
          fb: "Richtig: Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG. Die Vereinbarung regelt, welche Daten erfasst werden und dass keine Leistungsbewertung Einzelner erfolgt." }
      ] },

    { k: "wahl", h: "Wer gibt Posts frei?",
      b: "Brandt will jedes Video persönlich freigeben. Er ist oft auf Kundenreise – Fragen in den Kommentaren warten dann tagelang.",
      o: [
        { t: "Keine Freigabe – die Azubis posten direkt auf dem Firmenkanal", p: 0,
          fb: "Schnell, aber ohne Kontrolle: Ein Prototyp im Hintergrund geht sofort online. Governance heißt Regeln und Rollen, nicht Freiflug." },
        { t: "Freigabe nach Risiko: Routine gibst du frei, Heikles Brandt", p: 2,
          fb: "Richtig: Freigaben nach Risiko, schriftlich in einer RACI-Matrix mit Vertretung. Brandt bleibt Accountable für Heikles und Krisen, der Alltag läuft schnell." },
        { t: "Alles geht über Brandt, egal wie lange es dauert", p: 1,
          fb: "Sicher, aber zu langsam: TikTok lebt von Tempo, Fragen bleiben liegen. Eine einzige Person als Engpass ist ein Governance-Risiko." }
      ] },

    { k: "daten", h: "Auswertung zum 31. März 2027",
      l: [
        "TikTok: 2.880 € · 48 Bewerbungen",
        "Instagram: 2.100 € · 30 Bewerbungen",
        "LinkedIn (Fachkräfte): 1.800 € · 9 Bewerbungen",
        "Jobbörse: 2.000 € · 10 Bewerbungen",
        "Zuordnung: UTM-Links und „Wie hast du uns gefunden?“",
        "Ausbildungsverträge 2027: 12 von 12 unterschrieben"
      ] },

    { k: "wahl", h: "Cost per Application: TikTok und Jobbörse",
      b: "Cost per Application = Kosten ÷ Bewerbungen. Die Kosten enthalten Anzeigen und Produktion.",
      o: [
        { t: "TikTok 6 € · Jobbörse 20 €", p: 0,
          fb: "Eine Null verrutscht: 2.880 ÷ 48 = 60. Gegenprobe hilft: 48 × 60 € = 2.880 €." },
        { t: "TikTok 0,02 € · Jobbörse 0,005 €", p: 0,
          fb: "Formel umgedreht: Das sind Bewerbungen pro Euro. Cost per Application heißt Kosten ÷ Bewerbungen." },
        { t: "TikTok 60 € · Jobbörse 200 €", p: 2,
          fb: "Richtig: 2.880 € ÷ 48 = 60 €, 2.000 € ÷ 10 = 200 €. Eine TikTok-Bewerbung kostet nur 30 % einer Jobbörsen-Bewerbung." }
      ] },

    { k: "wahl", h: "LinkedIn abschalten?",
      b: "Brandt, inzwischen überzeugt: „TikTok funktioniert! Aber LinkedIn kostet 200 € pro Bewerbung, mehr als dreimal so viel. Weg damit?“",
      o: [
        { t: "Ja – der Kanal mit der höchsten Cost per Application fliegt raus", p: 0,
          fb: "Äpfel mit Birnen: LinkedIn hatte ein anderes Ziel – Fachkräfte statt Azubis. Kennzahlen vergleicht man nur bei gleichem Ziel." },
        { t: "Egal – Hauptsache, es kamen insgesamt 97 Bewerbungen rein", p: 1,
          fb: "Die Summe zeigt den Erfolg, aber nicht, wo das Budget am besten wirkt. Für die Planung 2028 brauchst du Werte je Kanal und Ziel." },
        { t: "Nein – an Fachkräfte-Zielen messen, z. B. Kosten je Einstellung", p: 2,
          fb: "Richtig: Jede Kennzahl gehört zu einem Ziel. Werden aus 9 Bewerbungen 3 Konstrukteure, sind das 600 € je Einstellung – günstiger als eine Personalvermittlung." }
      ] },

    { k: "fazit", h: "Was du in diesem Projekt angewendet hast",
      l: [
        "EVP und Kanäle passend zu Schülern, Eltern und Fachkräften",
        "Corporate Influencer: freiwillig, geschult, mit Guidelines",
        "Einwilligung schriftlich oder elektronisch (§ 26 BDSG, § 22 KUG)",
        "Betriebsrat bei Tools (§ 87 BetrVG), Freigaben nach Risiko",
        "Cost per Application je Kanal – immer am Ziel messen"
      ] }
  ]
}
];
