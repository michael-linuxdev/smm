// Praxisprojekte aus den Hausaufgaben (Teil B) für „SMM Coach“ (Stand November 2026).
// Fiktive Firmen und Personen. Fachliche Grundlage: Lektionen unt1.js, unt2.js, platt2.js, platt3.js;
// smm2.pdf, S. 124–200 (Unternehmensintegration, Aufbau eines Social-Media-Konzepts), smm3.pdf, S. 190–222
// (Social Recruiting, Employer Branding), smm2.pdf, S. 304–325 (TikTok & Reels), smm1.pdf, S. 66 (Frage 4).
export const PRAXIS_B = [
{
  id: "azubis",
  titel: "Social Media findet Azubis",
  firma: "Elektro Wendt GmbH, Chemnitz",
  rolle: "Du sollst mit Social Media neue Auszubildende für einen Elektrobetrieb gewinnen.",
  kurz: "Drei Ideen: Medium und Aktion",
  module: ["unt", "platt"],
  min: 10,
  schritte: [
    { k: "szene", h: "Abgabe: drei Vorschläge mit Medium und Aktion", wer: "Thomas Wendt, Geschäftsführer",
      b: "Wir suchen dringend **Auszubildende**. Bisher kommt kaum eine Bewerbung. Mach mir **drei Vorschläge**, wie wir Social Media dafür nutzen. Nenne zu jedem Vorschlag das **Medium** und die **Aktion**. Also: Wo machen wir es, und was tun wir dort? Du darfst gern kreativ sein!" },
    { k: "daten", h: "Ausgangslage bei Elektro Wendt", l: [
      "Betrieb: 40 Mitarbeitende, vier Ausbildungsplätze ab August 2027",
      "Bisher: Stellenanzeige auf der Website und auf Facebook, eine Bewerbung",
      "Zielgruppe: Schülerinnen und Schüler, 15 bis 19 Jahre, aus der Region",
      "Studie: 71,3 % der Firmen werben auf Facebook, nur 25,4 % der jungen Menschen suchen dort",
      "TikTok: 30,4 % der jungen Menschen nutzen es, aber nur 3,6 % der Firmen"
    ] },
    { k: "wahl", h: "Was verlangt die Aufgabe genau?",
      o: [
        { t: "Eine komplette Social-Media-Strategie mit Budget und Analyse", p: 0,
          fb: "Das ist zu viel. Gefragt sind **drei Vorschläge**. Eine ganze Strategie kostet Zeit und trifft die Aufgabe nicht." },
        { t: "Drei Vorschläge, jeweils mit Medium und konkreter Aktion", p: 2,
          fb: "Genau. Jeder Vorschlag braucht **zwei Teile**: wo du es machst und was du dort tust. Fehlt ein Teil, ist der Vorschlag nur halb fertig." },
        { t: "Drei passende Plattformen nennen und kurz beschreiben", p: 1,
          fb: "Halb richtig. Das Medium hast du dann. Es fehlt aber die **Aktion**, also was genau dort passiert. Ergänze zu jeder Plattform eine konkrete Idee." }
      ] },
    { k: "wahl", h: "Welches Kurswissen hilft dir hier?",
      o: [
        { t: "Die SWOT-Analyse aus der Konzeption", p: 1,
          fb: "Die SWOT hilft beim ganzen Konzept. Für drei schnelle Ideen ist sie zu breit. Das Thema **Social Recruiting** passt genauer." },
        { t: "Die Regeln zur Werbekennzeichnung bei Influencern", p: 0,
          fb: "Recht ist wichtig, aber nicht die Kernfrage. Hier geht es darum, **Bewerber zu gewinnen**. Dafür ist Social Recruiting das passende Modell." },
        { t: "Social Recruiting: suchen, gefunden werden, Image aufbauen", p: 2,
          fb: "Richtig. Lektion „Social Recruiting“: kurz suchen (**Active Sourcing**), mittel gefunden werden (**Personalmarketing**), lang Image (**Employer Branding**). Erfolg bringt der **Mix der Wege**." }
      ] },
    { k: "wahl", h: "Welches Medium wählst du als Hauptkanal?",
      b: "Schau dir die Zahlen aus der Ausgangslage noch einmal an.",
      o: [
        { t: "TikTok und Instagram Reels mit kurzen Videos", p: 2,
          fb: "Richtig. Hier ist die **Gen Z** unterwegs. TikTok zeigt Videos nach Interesse, nicht nach Followerzahl. Noch sind wenige Firmen aktiv. Mehr dazu in der Lektion „TikTok & Reels: Kurzvideos für die Gen Z“." },
        { t: "Facebook, denn dort steht schon die Stellenanzeige", p: 0,
          fb: "Hier sucht nur ein Viertel der jungen Menschen. Firmen und Bewerber reden **aneinander vorbei**. Merke: Nicht jede Zielgruppe ist auf jedem Kanal." },
        { t: "LinkedIn, weil es das Netzwerk für Karriere ist", p: 1,
          fb: "LinkedIn passt gut für Fachkräfte. Schülerinnen und Schüler sind dort aber selten. Für Azubis ist es höchstens eine **Ergänzung**." }
      ] },
    { k: "wahl", h: "Welche Aktion wirkt auf junge Leute glaubwürdig?",
      o: [
        { t: "Ein teurer Imagefilm mit Sprecher und Drohnenbildern", p: 1,
          fb: "Sieht gut aus, wirkt aber wie Werbung. Die Gen Z schätzt **Authentizität**. Echte Menschen und ungeschliffene Videos wirken glaubwürdiger." },
        { t: "Eigene Azubis zeigen als Corporate Influencer ihren Alltag", p: 2,
          fb: "Stark. **Corporate Influencer** geben echte Einblicke hinter die Kulissen. Gleichaltrige glauben Gleichaltrigen. Lektion „Employer Branding & Corporate Influencer“: Stolz und Zufriedenheit sind die Treiber." },
        { t: "Die Stellenanzeige als Bild jede Woche neu posten", p: 0,
          fb: "Das ist plumpe Werbung ohne **Mehrwert**. Niemand teilt oder speichert so einen Beitrag. Besser: echte Einblicke, die junge Leute gern teilen." }
      ] },
    { k: "wahl", h: "Was macht deine Vorschläge rund?",
      o: [
        { t: "Auf möglichst vielen Kanälen gleichzeitig starten", p: 0,
          fb: "Das verteilt deine Kraft zu dünn. Nicht jeder Kanal erreicht die **passende Zielgruppe**. Konzentriere dich auf zwei starke Kanäle." },
        { t: "Nur bezahlte Anzeigen schalten, ohne eigene Inhalte", p: 1,
          fb: "**Ads** gehören in den Mix. Ohne echte Einblicke fehlt aber die Glaubwürdigkeit. Die Lektion sagt: Der Mix macht's." },
        { t: "Online mit Offline verbinden und die Bewerbung leicht machen", p: 2,
          fb: "Richtig. Aktionen vor Ort wirken doppelt, wenn du sie postest. Und Bewerbungsprozess, Website und Social Media müssen **zusammenpassen**." }
      ] },
    { k: "frei", h: "Deine drei Vorschläge",
      b: "Jetzt bist du dran. Schreibe **drei Vorschläge**, wie Elektro Wendt mit Social Media Azubis gewinnt. Nenne zu jedem das **Medium** und die **Aktion**.",
      muster: [
        ["Medium passt zur Zielgruppe (TikTok, Instagram, Reels)", "tik ?tok|instagram|\\breels?\\b|youtube|\\bshorts\\b|snapchat|kurzvideo"],
        ["Azubis oder Mitarbeitende als Corporate Influencer", "corporate influencer|\\bazubis? (zeig|dreh|berichte|erzähl|film)|botschafter|mitarbeitende (zeig|berichte)|ein tag als|hinter die kulissen|einblick|alltag"],
        ["Mitmach-Aktion (Challenge, Gewinnspiel, Fragerunde)", "challenge|gewinnspiel|mitmach|\\bq ?& ?a|fragerunde|fragen (beantwort|stell)|\\bduett|\\bumfrage|live"],
        ["Anzeigen gezielt für Region und Alter", "\\bads?\\b|werbeanzeige|anzeigen? (schalt|buch)|bezahlte|beworben|spark|targeting|zielgenau"],
        ["Verknüpfung mit Offline (Messe, Schule, Schnuppertag)", "\\bmesse|schnupper|\\bschule|praktikum|vor ort|offline|tag der offenen"],
        ["Bewerbung leicht machen", "kurzbewerbung|ohne anschreiben|bewerb\\w* (per|mit|über) (link|formular|whatsapp)|bewerbungs?link|einfach bewerben|schnell bewerben|formular"]
      ],
      min: 3,
      bsp: "• **Vorschlag 1 – Medium: TikTok.** Aktion: Unsere Azubis drehen als Corporate Influencer die Serie „Ein Tag als Azubi“.\nJedes Video hat einen starken Hook, Untertitel und den Aufruf „Bewirb dich über den Link“.\n• **Vorschlag 2 – Medium: Instagram.** Aktion: Reels und Stories zeigen Einblicke hinter die Kulissen.\nEinmal im Monat beantworten Azubis Fragen im Story-Q&A.\n• **Vorschlag 3 – Medium: TikTok-Anzeigen plus Messe.** Aktion: Spark Ads für 15- bis 19-Jährige aus der Region.\nAuf der Ausbildungsmesse läuft eine Challenge. Der Gewinn ist ein Schnuppertag.\n• Überall gilt: Kurzbewerbung per Formular, ohne Anschreiben." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Jeder Vorschlag nennt **Medium und Aktion**",
      "Medium nach Zielgruppe: Für Schüler passen **TikTok** und **Instagram Reels**",
      "Echte Azubis als **Corporate Influencer** wirken glaubwürdiger als Werbung",
      "Der Mix macht's: eigene Videos, Ads, Offline-Aktionen und eine leichte Bewerbung",
      "War es schwer? Wiederhole die Lektionen „Social Recruiting“ und „Employer Branding & Corporate Influencer“."
    ] }
  ]
},
{
  id: "strategie-phasen",
  titel: "Erst planen, dann posten",
  firma: "Café Bohne & Blatt, Görlitz",
  rolle: "Du erklärst die vier Phasen der Social-Media-Planung und warum die Kanalwahl warten muss.",
  kurz: "Vier Phasen und die Frage nach den Kanälen",
  module: ["unt", "plan"],
  min: 9,
  schritte: [
    { k: "szene", h: "Abgabe: vier Phasen und eine Begründung",
      b: "Die Aufgabe hat zwei Teile. Erstens: Nenne die **vier grundlegenden Phasen** des strategischen Social-Media-Planungsprozesses. Zweitens: Erkläre, warum die **Auswahl der Netzwerke und Kanäle** nicht ganz am Anfang stehen sollte. Gemeint sind Facebook, Instagram, X und andere. Abzugeben sind also eine Liste und eine kurze Begründung." },
    { k: "szene", h: "Die Inhaberin will sofort auf TikTok", wer: "Jana Seidel, Inhaberin",
      b: "Alle reden von TikTok. Lass uns morgen einen Account anlegen und einfach loslegen! Ein Konzept brauchen wir doch nicht, oder?" },
    { k: "wahl", h: "Was musst du in deiner Antwort liefern?",
      o: [
        { t: "Die vier Phasen nennen und die späte Kanalwahl begründen", p: 2,
          fb: "Genau. Die Aufgabe hat **zwei Teile**: eine Aufzählung und eine Begründung. Gib beiden einen eigenen Abschnitt, dann vergisst du keinen." },
        { t: "Eine Liste der besten Kanäle für das Café", p: 0,
          fb: "Damit machst du genau den Fehler, nach dem die Aufgabe fragt. Gefragt sind die **Phasen** und eine Begründung." },
        { t: "Alle Schritte der Analysephase ausführlich beschreiben", p: 1,
          fb: "Die Analyse ist wichtig, aber nur eine von vier Phasen. Die **Begründung** zur Kanalwahl fehlt dann ganz." }
      ] },
    { k: "wahl", h: "Welche vier Phasen nennt der Kurs?",
      o: [
        { t: "Analysephase, Findungsphase, Umsetzungsphase, Kontrollphase", p: 0,
          fb: "Vorsicht, Falle! Eine **Findungsphase** gibt es nicht. Richtig ist die **Planungsphase**. Lies die vier Phasen in der Lektion „Warum planen? Der Konzeptionsprozess & die Analyse“ nach." },
        { t: "Ziele, Zielgruppe, Content und Plattformen", p: 1,
          fb: "Das sind wichtige **Planungselemente** des Konzepts. Die vier Phasen des Prozesses sind es aber nicht." },
        { t: "Analysephase, Planungsphase, Umsetzungsphase, Kontrollphase", p: 2,
          fb: "Richtig. Die Lektion nennt sie auch **Discover, Plan, Act** und **Optimize**. Nach der Kontrolle beginnt alles von vorn." }
      ] },
    { k: "wahl", h: "In welcher Phase wählst du die Kanäle?",
      o: [
        { t: "In der Umsetzungsphase, direkt beim ersten Beitrag", p: 1,
          fb: "In der Umsetzung **nutzt** du die Kanäle. Ausgewählt werden sie aber vorher, in der Planung." },
        { t: "In der Planungsphase, nach Analyse, Zielen und Zielgruppe", p: 2,
          fb: "Richtig. Die Kanäle gehören zur **Planungsphase**. Vorher weißt du aus der Analyse, wen du erreichen willst und warum." },
        { t: "Ganz am Anfang der Analysephase", p: 0,
          fb: "Genau das soll nicht passieren. Der Kurs warnt: nicht „irgendwie was mit Insta“ machen. Merke: Starte bei der Analyse, nicht bei den Kanälen." }
      ] },
    { k: "daten", h: "Kurswissen: der idealtypische Prozess", l: [
      "**Analysephase (Discover):** Situationsanalyse, Ziele ableiten, Zielgruppe analysieren",
      "**Planungsphase (Plan):** Kanäle, Maßnahmen und Content-Strategie, Ressourcen",
      "**Umsetzungsphase (Act):** Content- und Community-Management",
      "**Kontrollphase (Optimize):** Monitoring und Wirkungsbeobachtung",
      "Auf der Folie steht bei der Analyse „Starte hier“, bei den Kanälen „Nicht hier“."
    ] },
    { k: "wahl", h: "Was ist das stärkste Argument für deine Begründung?",
      o: [
        { t: "Die Technik folgt immer der Zielgruppe und dem Ziel", p: 2,
          fb: "Genau. Das ist der Merksatz der Lektion „Content-Strategie & Plattformwahl im Konzept“. Erst Ziele und Zielgruppe, dann Kanäle nach Ressourcen, Funktionen und Recht." },
        { t: "Kanäle kosten Geld, deshalb wählt man sie spät", p: 1,
          fb: "Ressourcen sind ein Kriterium. Der Kern ist aber ein anderer: Erst wenn Ziel und **Zielgruppe** klar sind, weißt du, welcher Kanal passt." },
        { t: "Netzwerke ändern sich ständig, also ist die Wahl egal", p: 0,
          fb: "Die Wahl ist nicht egal. Ein falscher Kanal bringt **Streuverluste** und kostet Zeit. Deshalb braucht sie eine gute Grundlage." }
      ] },
    { k: "szene", h: "Hotel-Fallbeispiel: erst Persona, dann Facebook",
      b: "Im Fallbeispiel analysiert ein Ostsee-Hotel erst seine Lage. Dann legt es Ziele fest und beschreibt die Persona. Die Persona tauscht sich auf **Facebook** aus. Also baut das Hotel die alte Facebook-Seite aus. **Instagram** kommt erst später, weil Ressourcen fehlen. Ohne Analyse hätte das Hotel vielleicht den falschen Kanal gewählt." },
    { k: "frei", h: "Deine Antwort",
      b: "Beantworte jetzt die Hausaufgabe. Nenne die **vier Phasen** mit einem kurzen Inhalt. Erkläre dann, warum die **Kanalwahl** nicht am Anfang steht.",
      muster: [
        ["Analysephase (Situation, Ziele, Zielgruppe)", "analyse|discover"],
        ["Planungsphase (Kanäle, Content, Ressourcen)", "planungsphase|\\bplanung\\b|\\bplan\\b|konzeption"],
        ["Umsetzungsphase (Content, Community)", "umsetzung|\\bact\\b|durchführung"],
        ["Kontrollphase (Monitoring, Wirkung)", "kontroll|optimize|monitoring|erfolgskontrolle"],
        ["Technik folgt Zielgruppe und Ziel: erst Analyse, dann Kanal", "technik folgt|folgt (der|dem|den) (ziel|zielgruppe)|(erst|zuerst|vorher|nach)[^.\\n]{0,60}(analyse|zielgruppe|\\bziel)|(hängt|hängen|abhängig)[^.\\n]{0,40}(zielgruppe|\\bziel)|wo (die|meine|unsere) zielgruppe"],
        ["Weitere Kriterien oder Folgen: Ressourcen, Recht, Streuverluste", "streuverlust|ressourcen|funktionen|\\brecht|budget|falsche[nr]? kan|verschwend"]
      ],
      min: 5,
      bsp: "**Die vier Phasen:**\n• **Analysephase:** Situation analysieren, Ziele ableiten, Zielgruppe bestimmen.\n• **Planungsphase:** Kanäle, Maßnahmen, Content-Strategie und Ressourcen planen.\n• **Umsetzungsphase:** Content- und Community-Management.\n• **Kontrollphase:** Monitoring und Wirkung prüfen, dann optimieren.\n**Warum die Kanäle nicht am Anfang stehen:**\n• Die Technik folgt immer der Zielgruppe und dem Ziel.\n• Erst nach der Analyse weißt du, wo deine Zielgruppe ist.\n• Du wählst auch nach Ressourcen, Funktionen und Recht.\n• Sonst drohen Streuverluste und verschwendete Zeit." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "Vier Phasen: **Analyse, Planung, Umsetzung, Kontrolle**. Eine Findungsphase gibt es nicht.",
      "Die Kanalwahl gehört in die **Planungsphase**, nicht an den Anfang",
      "Grund: Die **Technik folgt Zielgruppe und Ziel**",
      "Weitere Kriterien: Ressourcen, Funktionen, Recht, Vor- und Nachteile",
      "War es schwer? Wiederhole die Lektionen „Warum planen? Der Konzeptionsprozess & die Analyse“ und „Content-Strategie & Plattformwahl im Konzept“."
    ] }
  ]
},
{
  id: "guidelines",
  titel: "Guidelines, die man lebt",
  firma: "Kunststofftechnik Lindner GmbH, Plauen",
  rolle: "Du machst die Social-Media-Guidelines im ganzen Unternehmen bekannt.",
  kurz: "Guidelines intern bekannt machen",
  module: ["unt", "recht"],
  min: 10,
  schritte: [
    { k: "szene", h: "Abgabe: mindestens drei Maßnahmen", wer: "Sabine Krüger, Personalleiterin",
      b: "Wir haben **Social-Media-Guidelines**. Aber kaum jemand kennt sie. Sorge dafür, dass alle davon wissen. Und dass sie die Regeln auch lesen und leben. Stelle mir **mindestens drei Maßnahmen** vor. Wie machst du die Guidelines bekannt und „vermarktest“ sie intern?" },
    { k: "daten", h: "Ausgangslage bei Lindner", l: [
      "180 Mitarbeitende, Produktion in drei Schichten",
      "Viele arbeiten an Maschinen, ohne eigenen Computer",
      "Guidelines: 14 Seiten als PDF im Intranet",
      "Kurze Umfrage: 7 von 10 kennen die Guidelines nicht",
      "Vorfall: Ein Mitarbeiter postet ein Foto aus der Halle mit einem Kundenprodukt"
    ] },
    { k: "wahl", h: "Was ist der Kern der Aufgabe?",
      o: [
        { t: "Die Guidelines komplett neu schreiben", p: 1,
          fb: "Eine bessere Fassung kann helfen. Gefragt ist aber, wie du die Guidelines **bekannt machst** und intern bewirbst." },
        { t: "Strafen für Verstöße festlegen und ankündigen", p: 0,
          fb: "Angst motiviert nicht. Guidelines sollen Unsicherheit nehmen und zur **aktiven Beteiligung** motivieren. Besser: Regeln erklären und Hilfe anbieten." },
        { t: "Maßnahmen, damit alle die Guidelines kennen und anwenden", p: 2,
          fb: "Genau. Es geht um **interne Kommunikation**. Die Guidelines gibt es schon. Jetzt müssen sie bei den Menschen ankommen." }
      ] },
    { k: "wahl", h: "Warum reicht das PDF im Intranet nicht?",
      o: [
        { t: "Weil Papier geduldig ist: Guidelines muss man aktiv bewerben", p: 2,
          fb: "Richtig. Merksatz der Lektion „Kultur, Mitarbeitende, Guidelines & Schulung“: **Papier ist geduldig**. Du musst Guidelines intern bekannt machen und „bewerben“. Sonst bleiben sie ungelesen." },
        { t: "Weil die Arbeitsverträge das Thema schon regeln", p: 0,
          fb: "Ein häufiger Einwand. Die Lektion sagt aber: Guidelines sind trotzdem nötig. Denn Guidelines **klären auf** und schaffen einen **Konsens zur Nutzung**." },
        { t: "Weil 14 Seiten einfach zu lang sind", p: 1,
          fb: "Die Länge ist ein Problem, aber nicht das einzige. Viele Mitarbeitende kommen gar nicht ins **Intranet**. Du musst die Guidelines aktiv zu ihnen bringen." }
      ] },
    { k: "wahl", h: "Wie startest du die Kampagne?",
      o: [
        { t: "Eine Rundmail an alle mit dem PDF im Anhang", p: 1,
          fb: "Schnell gemacht, aber leicht übersehen. Wer keinen Computer hat, bekommt die Mail nicht. Es fehlt der **Rückhalt** von oben." },
        { t: "Kick-off mit der Geschäftsführung, die die Guidelines vorlebt", p: 2,
          fb: "Stark. Social Media braucht das volle **Commitment des Managements**, also echten Rückhalt. Wenn die Chefs mitmachen, nehmen alle das Thema ernst." },
        { t: "Leise einführen, damit keine Diskussionen entstehen", p: 0,
          fb: "So bleibt alles beim Alten. Social Media braucht **offene Kommunikation** und Vertrauen, keine Heimlichkeit. Starte lieber sichtbar mit der Geschäftsführung." }
      ] },
    { k: "wahl", h: "Wie erreichst du die verschiedenen Gruppen?",
      o: [
        { t: "Eine gleiche Schulung für alle 180 Mitarbeitenden", p: 1,
          fb: "Gut gemeint, aber nicht passend. Die Lektion rät: Jede Gruppe braucht **passende Schulung**. Power User brauchen mehr, alle anderen eine Kurzfassung." },
        { t: "Nur das Social-Media-Team schulen", p: 0,
          fb: "Zu kurz gedacht. Alle Mitarbeitenden sind **Visitenkarte** des Unternehmens. Der Vorfall in der Halle zeigt das." },
        { t: "Je Gruppe passend: Power User schulen, alle anderen kurz informieren", p: 2,
          fb: "Richtig. **Power User** wie Vertrieb und Personal brauchen eine besondere Schulung. Alle anderen bekommen Kurzfassung und Tutorials. Die Produktion erreichst du offline, zum Beispiel im Pausenraum." }
      ] },
    { k: "wahl", h: "Wie bleiben die Guidelines lebendig?",
      o: [
        { t: "Eine Liste mit Verboten in jeder Abteilung aufhängen", p: 0,
          fb: "Reine Verbote schrecken ab. Guidelines sollen **motivieren** und Kompetenz geben, nicht nur Grenzen zeigen." },
        { t: "Beispiele zeigen, Ansprechpartner nennen, Botschafter ermutigen", p: 2,
          fb: "Genau. **Best Practices** und **Worst Cases** machen Regeln greifbar. Feste Ansprechpartner helfen bei Fragen. Mitarbeitende werden zu Online-Fürsprechern." },
        { t: "Einmal im Jahr eine Erinnerung per Mail schicken", p: 1,
          fb: "Besser als nichts. Für echtes **Leben** der Regeln brauchst du aber laufende Angebote und Beispiele aus dem Alltag." }
      ] },
    { k: "frei", h: "Deine Maßnahmen",
      b: "Stelle jetzt **mindestens drei Maßnahmen** vor. Wie machst du die Guidelines bei Lindner bekannt? Wie sorgst du dafür, dass alle sie lesen und leben?",
      muster: [
        ["Kick-off mit Geschäftsführung, die vorlebt", "kick.?off|geschäftsführ|\\bchef|management|führungskr|vorleb|auftakt|betriebsversammlung"],
        ["Schulung oder Workshop, gezielt für Power User", "schulung|schulen|workshop|training|power.?user|tutorial|e.?learning"],
        ["Kurzfassung auch offline, weil viele keinen Computer haben", "kurzfassung|plakat|aushang|pausenraum|checkliste|flyer|spickzettel|taschenkarte|schwarze[ns]? brett|infoscreen|bildschirm|zehn regeln|wichtigsten regeln"],
        ["Feste Ansprechpartner und Sprechstunde", "ansprechpart|sprechstunde|\\bkontakt|hotline|fragen (stellen|klären)"],
        ["Beispiele, Quiz oder Mitmach-Aktion", "best practice|worst case|beispiele? (zeig|aus)|praxisbeispiel|fallbeispiel|\\bquiz|gewinnspiel|mitmach|\\bvideos?\\b"],
        ["Mitarbeitende als Botschafter gewinnen", "botschafter|corporate influencer|fürsprecher|vorbild|multiplikator"]
      ],
      min: 3,
      bsp: "• **Kick-off:** Die Geschäftsführung stellt die Guidelines bei der Betriebsversammlung vor. Die Chefs leben die Regeln selbst vor.\n• **Kurzfassung:** Die zehn wichtigsten Regeln kommen auf ein Plakat im Pausenraum. Dazu gibt es eine Taschenkarte für die Schichten.\n• **Schulung:** Power User aus Vertrieb und Personal bekommen einen Workshop. Alle anderen sehen kurze Tutorials.\n• **Beispiele:** Ein Quiz mit Best Practices und Worst Cases. Der Fall aus der Halle wird anonym erklärt.\n• **Ansprechpartner:** Das Social-Media-Team bietet eine feste Sprechstunde an.\n• **Botschafter:** Freiwillige werden Corporate Influencer und Vorbilder." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "**Papier ist geduldig**: Guidelines muss man intern bewerben",
      "Rückhalt holen: Die **Geschäftsführung** startet und lebt vor",
      "Zielgruppengerecht: **Power User** schulen, alle anderen kurz und auch offline informieren",
      "Lebendig halten: Beispiele, **Ansprechpartner**, Quiz und Botschafter",
      "War es schwer? Wiederhole die Lektion „Kultur, Mitarbeitende, Guidelines & Schulung“."
    ] }
  ]
}
];
