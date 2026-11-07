// Bewerbungstraining für Quereinsteiger – „SMM Coach“ (Format wie Praxisprojekte, siehe review6/FORMAT.md)
// Stand: November 2026, deutsches Arbeitsrecht/AGG. Fiktive Personen und Firmen.
// Roter Faden: Nadine Seifert (35), Ex-Einzelhandelskauffrau aus Zwickau, IHK-Zertifikat Social Media Manager/-in.
// Gehaltszahlen (b-gehalt #2): Stepstone Gehaltsseiten „Social Media Manager/in“ (Deutschland, Dresden, abgerufen 07.11.2026),
// Gehalt.de „Social-Media-Manager/-in“ (abgerufen 07.11.2026), BA-Entgeltstatistik Stichtag 31.12.2025 laut DGB Sachsen
// (04.08.2026), Mindestlohn 14,60 € ab 01.01.2027 (Fünfte Mindestlohnanpassungsverordnung).

export const BEWERBUNG = [
{
  id: "b-faden",
  kachel: "Dein roter Faden",
  titel: "Dein roter Faden",
  firma: "Nadine Seifert, Zwickau",
  rolle: "Du begleitest Nadine Seifert (35, Ex-Einzelhandelskauffrau) und triffst ihre Entscheidungen.",
  kurz: "Vom Einzelhandel ins Social Media Management",
  module: ["einf", "unt", "plan"],
  min: 10,
  schritte: [
    { k: "szene", h: "Zwölf Jahre Handel – und jetzt?",
      b: "Nadine Seifert, 35, war zwölf Jahre im Einzelhandel in Zwickau, zuletzt **stellvertretende Filialleiterin** in einem Modehaus. Berufsbegleitend hat sie das **IHK-Zertifikat Social Media Manager/-in** gemacht. Jetzt will sie wechseln. Ihre Sorge: „Wer nimmt mich ohne Marketing-Studium?“ Du hilfst ihr, ihren **roten Faden** zu finden." },

    { k: "szene", h: "Was Arbeitgeber wissen wollen", wer: "Doreen Pfeil, Mentorin aus dem Lehrgang",
      b: "Bei Quereinsteigern fragen sich Arbeitgeber drei Dinge: Warum wechselst du? Was bringst du schon mit? Bleibst du dabei? Deine Geschichte beantwortet alle drei – in zwei Minuten. Fang nicht mit dem an, was dir fehlt, sondern mit dem, was du schon kannst." },

    { k: "daten", h: "Was Nadine mitbringt",
      l: [
        "12 Jahre Einzelhandel, davon 4 als stellv. Filialleitung",
        "Täglich viele Kundengespräche, auch Reklamationen",
        "Dienstpläne für 9 Kolleginnen und Kollegen",
        "Aktionen und Schaufenster nach Saisonkalender",
        "Instagram der Filiale betreut: 380 auf 1.100 Follower",
        "IHK-Zertifikat Social Media Manager/-in, 2026"
      ] },

    { k: "wahl", h: "„Warum wollen Sie weg aus dem Handel?“", b: "Diese Frage kommt in fast jedem Gespräch.",
      o: [
        { t: "„Der Handel ist mir zu stressig, ich will da einfach raus.“", p: 0,
          fb: "Das klingt nach Flucht: Der Arbeitgeber hört, wovor Nadine wegläuft, nicht wohin sie will. Und er fragt sich, ob Stress sie auch im neuen Job vertreibt. Besser: erzählen, wohin es gehen soll." },
        { t: "„Social Media ist die Zukunft, da gibt es sichere Jobs.“", p: 1,
          fb: "Nicht falsch, aber austauschbar – das könnte jeder sagen. Es fehlt der persönliche Bezug: Warum gerade Nadine, warum gerade jetzt?" },
        { t: "„Beim Filial-Instagram habe ich gemerkt: Das will ich hauptberuflich.“", p: 2,
          fb: "Stark: ein echtes Erlebnis als Auslöser, danach die bewusste Weiterbildung. Das zeigt **Motivation** und einen Plan – genau das ist ein roter Faden." }
      ] },

    { k: "wahl", h: "Übertragbare Fähigkeiten finden", b: "Nadine übersetzt ihre Erfahrung in Social-Media-Sprache. Welche Brücke trägt am besten?",
      o: [
        { t: "Kassieren → Budgetverwaltung für Social Ads", p: 0,
          fb: "Zu weit hergeholt: Geld zählen ist keine Budgetplanung. Solche Brücken brechen bei der ersten Nachfrage zusammen. Wähle nur, was du mit Beispielen belegen kannst." },
        { t: "Reklamationen lösen → Community Management", p: 2,
          fb: "Genau: Wer an der Kasse ruhig mit verärgerten Kunden spricht, kann auch kritische Kommentare **deeskalieren**. Das ist eine echte **übertragbare Fähigkeit** (Transferable Skill)." },
        { t: "Viele Stammkunden → Netzwerk für Influencer", p: 1,
          fb: "Ein Ansatz, aber unscharf: Stammkunden sind keine Influencer. Stärker sind Fähigkeiten, die Nadine im Alltag nachweislich gezeigt hat." }
      ] },

    { k: "wahl", h: "Und die Dienstpläne?", b: "Welche Social-Media-Aufgabe passt am besten zu Nadines Planungserfahrung?",
      o: [
        { t: "Reporting: Kennzahlen monatlich an die Chefin melden", p: 1,
          fb: "Teilweise: Als stellvertretende Filialleiterin hat Nadine auch Zahlen gemeldet, das ist nah am **Reporting**. Ihre eigentliche Stärke ist aber das Planen – nenne die engste Brücke zuerst." },
        { t: "Monitoring: Markenerwähnungen im Netz beobachten", p: 0,
          fb: "**Monitoring** heißt beobachten und auswerten, nicht planen. Diese Brücke passt nicht zu Dienstplänen." },
        { t: "Redaktionsplan: Themen, Termine, Zuständigkeiten", p: 2,
          fb: "Ja: Dienstplan und **Redaktionsplan** brauchen dasselbe – Überblick, Fristen, Abstimmung im Team. Ihr Saisonkalender für Aktionen passt sogar direkt zum Themenplan." }
      ] },

    { k: "frei", h: "Formuliere Nadines Kurz-Story",
      b: "Schreib Nadines roten Faden in 3–4 Sätzen oder Stichpunkten: **Herkunft**, **Auslöser** für den Wechsel, **Weiterbildung**, **was sie mitbringt** und **was sie jetzt will**.",
      muster: [
        ["Herkunft: Einzelhandel, Filiale, Verkauf", "einzelhandel|\\bhandel\\b|\\bfilial|\\bverkäuf|\\bverkauf|modehaus"],
        ["Auslöser: Instagram der Filiale", "instagram|\\bkan(al|als|äle|älen)\\b|\\baccount|\\bposts?\\b|\\bbeiträg"],
        ["Weiterbildung: IHK-Zertifikat", "\\bihk\\b|zertifikat|lehrgang|weiterbildung"],
        ["Übertragbare Fähigkeit (Kundenkontakt, Planung)", "\\bkund|reklamation|community|redaktionsplan|\\bplan(ung|en|e)?\\b|\\borganis|dienstpl"],
        ["Ziel: was sie jetzt will", "\\bwill\\b|\\bmöchte|\\bziel|\\bsuche|\\bverantworten|\\bwechseln"]
      ],
      min: 4,
      bsp: "• 12 Jahre Einzelhandel, zuletzt stellvertretende Filialleitung\n• Auslöser: Ich habe den Instagram-Kanal der Filiale betreut – das hat mich gepackt\n• Deshalb berufsbegleitend das IHK-Zertifikat Social Media Manager/-in\n• Ich bringe mit: Kundengespräche, auch schwierige → Community Management; Dienstpläne → Redaktionsplan\n• Jetzt möchte ich Social Media für ein Unternehmen aus der Region verantworten" },

    { k: "wahl", h: "Welcher erste Satz ist am stärksten?", b: "Nadine probiert Einstiege für Anschreiben und Gespräch.",
      o: [
        { t: "„Ich bin kommunikativ, kreativ, teamfähig und belastbar.“", p: 1,
          fb: "Freundlich, aber **Floskeln**: Das schreiben fast alle. Ohne Beleg bleibt nichts hängen – eine Zahl oder ein Erlebnis wirkt stärker." },
        { t: "„Ich verbinde 12 Jahre Kundennähe mit frischem IHK-Fachwissen.“", p: 2,
          fb: "Stark: Der Satz macht aus dem Quereinstieg ein **Alleinstellungsmerkmal** – Praxis plus aktuelles Wissen. Kurz, konkret, selbstbewusst." },
        { t: "„Ich bin zwar nur Quereinsteigerin, aber sehr motiviert.“", p: 0,
          fb: "„Zwar“ und „nur“ machen Nadine klein, bevor sie etwas gezeigt hat – und wer liest, übernimmt diesen Blick. Den Quereinstieg selbstbewusst als Stärke benennen." }
      ] },

    { k: "wahl", h: "Die Wissenslücke", b: "Doreen warnt: Im Gespräch kommt sicher eine Frage zu Social Ads – und Nadine hat noch nie ein Werbebudget verwaltet.",
      o: [
        { t: "Ehrlich sagen, Grundlagen aus dem Kurs nennen, Lernplan zeigen", p: 2,
          fb: "Ehrlich und aktiv: Nadine zeigt, was sie weiß (z. B. **CPC**, **CPM**), und wie sie die Lücke schließt. Von Einsteigern erwartet man Lernbereitschaft, nicht Perfektion." },
        { t: "Ausweichen und schnell über Instagram-Reels reden", p: 1,
          fb: "Verständlich, aber Ausweichen merkt man im Gespräch sofort. Besser: die Lücke offen benennen und gleich zeigen, wie sie sie schließt." },
        { t: "Behaupten, sie habe schon Kampagnen mit Budget betreut", p: 0,
          fb: "Erfundene Erfahrung fliegt bei der ersten Nachfrage auf. Falsche Angaben zu zulässigen Fragen können sogar zur **Anfechtung** des Arbeitsvertrags führen (§ 123 BGB)." }
      ] },

    { k: "szene", h: "Nadines Zwei-Minuten-Story steht",
      b: "Nadine übt ihre Story laut, mit Handy-Timer. Nach drei Durchgängen sitzt sie: Handel, Filial-Instagram, IHK-Zertifikat, zwei klare Brücken, ein Ziel. Doreen nickt: „So klingt jemand, der weiß, wohin er will.“" },

    { k: "fazit", h: "Was du in diesem Training geübt hast",
      l: [
        "Wechsel als Hinwendung erzählen, nicht als Flucht",
        "Übertragbare Fähigkeiten mit echten Beispielen belegen",
        "Story: Herkunft, Auslöser, Weiterbildung, Stärken, Ziel",
        "Floskeln und Kleinmachen vermeiden",
        "Wissenslücken ehrlich benennen und Lernweg zeigen"
      ] }
  ]
},
{
  id: "b-anzeige",
  kachel: "Anzeigen lesen",
  titel: "Stellenanzeigen lesen",
  firma: "Jobsuche in Sachsen",
  rolle: "Du hilfst Nadine, aus 40 gespeicherten Anzeigen die passenden zu finden.",
  kurz: "Muss, Kann und Warnsignale erkennen",
  module: ["einf", "unt", "recht"],
  min: 10,
  schritte: [
    { k: "szene", h: "40 Anzeigen, viele Titel",
      b: "Nadine hat drei Wochen lang Jobbörsen durchsucht und 40 Anzeigen gespeichert. Die Titel: Social Media Manager, Content Manager, Community Manager, Online-Marketing-Manager. Sie fragt dich: „Für welche davon bin ich überhaupt geeignet?“" },

    { k: "wahl", h: "Wie sortiert sie das Titel-Wirrwarr?",
      o: [
        { t: "Nur Anzeigen mit dem Titel „Social Media Manager“ behalten", p: 0,
          fb: "So verpasst sie viele passende Stellen. Die Titel sind nicht geschützt – dieselbe Arbeit heißt mal Content Manager, mal Online-Marketing. Entscheidend sind die **Aufgaben**." },
        { t: "Auf alle Anzeigen im Umkreis von 50 km bewerben, egal welcher Titel", p: 1,
          fb: "Der Ort ist wichtig, aber Masse statt Passung kostet Kraft und bringt Absagen. Erst die Aufgaben prüfen, dann bewerben." },
        { t: "Die Aufgaben-Liste lesen und mit dem eigenen Profil abgleichen", p: 2,
          fb: "Richtig: Berufsbezeichnungen sind nicht einheitlich. Was zählt, steht unter „Deine Aufgaben“ – etwa Content erstellen, Community betreuen, Kennzahlen auswerten." }
      ] },

    { k: "daten", h: "Was oft hinter den Titeln steckt",
      l: [
        "Social Media Manager: Strategie, Planung, Content, Auswertung",
        "Content Manager: Texte, Bilder, Videos – oft auch Website",
        "Community Manager: Kommentare, Nachrichten, Moderation, Krisen",
        "Online-Marketing: oft SEO, Ads, Newsletter, Social nur teilweise",
        "„Junior“ oder „Specialist“: meist Einstieg mit Anleitung"
      ] },

    { k: "daten", h: "Anzeige 1: Muldenrad GmbH, Zwickau",
      l: [
        "Social Media Manager (m/w/d), Vollzeit, unbefristet",
        "E-Bike-Hersteller, 60 Beschäftigte, Instagram und LinkedIn",
        "Muss: Erfahrung mit Content-Erstellung, sicheres Deutsch",
        "Muss: Ausbildung oder Weiterbildung im Bereich Marketing",
        "Wünschenswert: Studium, Erfahrung mit Meta Business Suite",
        "Plus: Begeisterung fürs Radfahren"
      ] },

    { k: "frei", h: "Muss oder Kann?",
      b: "Lies Anzeige 1 noch einmal. Schreib auf: Welche **Muss-Anforderungen** erfüllt Nadine und womit belegt sie das? Welche **Kann-Anforderung** fehlt ihr noch – und wie geht sie damit um?",
      muster: [
        ["Content-Erfahrung: Instagram der Filiale", "instagram|\\bfilial|\\bposts?\\b|\\bbeiträg|\\breels?\\b"],
        ["Weiterbildung: IHK-Zertifikat", "\\bihk\\b|zertifikat|weiterbildung|lehrgang"],
        ["Sicheres Deutsch: Texte, Anschreiben", "\\bdeutsch|\\btexte?\\b|anschreiben|rechtschreib"],
        ["Fehlender Kann-Punkt benannt (Meta Business Suite, Studium)", "\\bmeta\\b|business suite|studium"],
        ["Umgang damit: lernen, Tutorial, einarbeiten", "\\blern|tutorial|einarbeit|nachhol|\\bkurs(e|es|en)?\\b|\\bschulung|aneign"]
      ],
      min: 3,
      bsp: "• Muss – Content: Instagram der Filiale betreut, 380 auf 1.100 Follower\n• Muss – Weiterbildung: IHK-Zertifikat Social Media Manager/-in\n• Muss – Deutsch: sichere Texte, belegt durch das Anschreiben\n• Kann – fehlt: Meta Business Suite und Studium\n• Umgang: Meta-Grundlagen per Online-Kurs lernen, im Anschreiben kurz erwähnen" },

    { k: "wahl", h: "Soll Nadine sich bewerben?", b: "Sie hat kein Studium und noch nie mit der Meta Business Suite gearbeitet.",
      o: [
        { t: "Ja – die Muss-Punkte erfüllt sie, den Rest kann sie lernen", p: 2,
          fb: "Genau: **Muss-Kriterien** sind Pflicht, **Kann-Kriterien** sind Bonus. Viele Anzeigen beschreiben ein Wunschprofil. Wer die Muss-Punkte erfüllt, sollte sich bewerben." },
        { t: "Nein – ohne Studium hat sie dort keine echte Chance", p: 0,
          fb: "Das Studium steht unter „wünschenswert“, also ist es eine Kann-Anforderung. Wer sich nur auf perfekt passende Anzeigen bewirbt, bewirbt sich fast nie." },
        { t: "Ja, aber erst nach einem Kurs zur Meta Business Suite", p: 1,
          fb: "Der Kurs ist sinnvoll, aber Warten kostet Zeit – die Stelle ist vielleicht weg. Besser: jetzt bewerben und parallel lernen." }
      ] },

    { k: "daten", h: "Anzeige 2: Agentur in Leipzig",
      l: [
        "Junior Content Creator (m/w/d)",
        "„Wir starten mit 2 Wochen unbezahlter Probearbeit.“",
        "„Dabei betreust du schon eigene Kundenprojekte.“",
        "Danach: 6 Monate „Praktikum“, 800 € im Monat, Vollzeit",
        "„Ideal für Quereinsteiger nach der Weiterbildung“"
      ] },

    { k: "wahl", h: "Was fällt dir auf?", b: "Nadine findet: „Klingt nach einer Chance – Hauptsache, ich komme rein.“",
      o: [
        { t: "Bewerben und im Gespräch die Bezahlung von beidem klären", p: 1,
          fb: "Möglich, aber mühsam: Eine Anzeige, die offen auf unbezahlte Arbeit setzt, zeigt die Haltung der Firma. Nachverhandeln klappt selten." },
        { t: "Normal in der Branche – Hauptsache ein Fuß in der Tür", p: 0,
          fb: "Leider verbreitet, aber nicht in Ordnung. Mit dem IHK-Zertifikat bewirbt sich Nadine als Fachkraft, nicht als Praktikantin." },
        { t: "Zwei Warnsignale – sie konzentriert sich auf andere Stellen", p: 2,
          fb: "Richtig: Ein kurzes **Kennenlernen** ohne Arbeitspflicht darf unbezahlt sein, echte Kundenarbeit nicht. Ein freiwilliges Praktikum nach dem Abschluss muss in der Regel mit **Mindestlohn** bezahlt werden (§ 22 MiLoG)." }
      ] },

    { k: "daten", h: "Anzeige 3: Start-up in Dresden",
      l: [
        "Social Media Freelancer (m/w/d), 40 Stunden pro Woche",
        "Feste Zeiten 9–17 Uhr, Arbeit im Büro, Chef teilt Aufgaben zu",
        "Nur für uns, mit Firmen-Laptop und Firmen-E-Mail",
        "Bezahlung: 18 € pro Stunde auf Rechnung",
        "Urlaub und Krankheit: unbezahlt"
      ] },

    { k: "wahl", h: "Freelancer – ja oder nein?", b: "Nadine rechnet: 18 € pro Stunde klingt besser als manches Angestelltengehalt.",
      o: [
        { t: "Klingt gut: Als Freelancerin verdient sie unterm Strich mehr", p: 0,
          fb: "Von 18 € gehen Kranken- und Rentenversicherung, Steuern, Urlaub und Krankheitstage ab. Unterm Strich bleibt oft weniger als angestellt – und echtes Freelancing ist das nicht." },
        { t: "Vorsicht: Sie wäre eingebunden wie eine Angestellte", p: 2,
          fb: "Richtig: Feste Zeiten, Weisungen, ein Auftraggeber, Eingliederung ins Team sprechen für **Scheinselbstständigkeit**. Klarheit bringt das **Statusfeststellungsverfahren** der Deutschen Rentenversicherung." },
        { t: "Nachfragen, ob statt Freelancing eine Anstellung geht", p: 1,
          fb: "Guter Gedanke, eine Anstellung wäre hier ehrlicher. Nadine sollte aber erst verstehen, warum das Modell problematisch ist – dann verhandelt sie sicherer." }
      ] },

    { k: "wahl", h: "Wie geht Nadine weiter vor?",
      o: [
        { t: "Nur bei Muldenrad bewerben und auf die Antwort warten", p: 1,
          fb: "Muldenrad passt gut, aber alles auf eine Karte ist riskant. Einige parallele, passende Bewerbungen nehmen Druck raus." },
        { t: "Auf 3–5 passende Stellen konzentrieren, jede Bewerbung anpassen", p: 2,
          fb: "Gut: Qualität vor Masse. Eine angepasste Bewerbung zeigt, dass Nadine die Firma verstanden hat – das gleicht fehlende Berufsjahre teilweise aus." },
        { t: "Eine Standardbewerbung an alle 40 Anzeigen schicken", p: 0,
          fb: "Massenbewerbungen erkennt man sofort: falscher Firmenname, unpassende Aufgaben. Das bringt viele Absagen und frisst Motivation." }
      ] },

    { k: "fazit", h: "Was du in diesem Training geübt hast",
      l: [
        "Titel sind nicht geschützt – Aufgaben zählen",
        "Muss-Anforderungen erfüllen, Kann-Anforderungen sind Bonus",
        "Unbezahlte Probearbeit mit echter Arbeit ist ein Warnsignal",
        "Praktikum nach Abschluss: in der Regel Mindestlohn",
        "Scheinselbstständigkeit an Weisung und Eingliederung erkennen"
      ] }
  ]
},
{
  id: "b-unterlagen",
  kachel: "Lebenslauf & Anschreiben",
  titel: "Lebenslauf & Anschreiben",
  firma: "Bewerbung bei der Muldenrad GmbH",
  rolle: "Du baust mit Nadine ihre Unterlagen für die Stelle bei Muldenrad um.",
  kurz: "Unterlagen, die den Quereinstieg zeigen",
  module: ["unt", "kpi", "recht", "platt"],
  min: 10,
  schritte: [
    { k: "szene", h: "Ein Lebenslauf von 2014",
      b: "Nadine bewirbt sich bei der **Muldenrad GmbH**. Ihr Lebenslauf ist im Kern von 2014 und wurde nur ergänzt: zwei Seiten, Hobbys „Lesen, Reisen“. Das IHK-Zertifikat steht ganz unten unter „Sonstiges“. Wie wird daraus eine Bewerbung für Social Media?" },

    { k: "wahl", h: "Wohin mit dem IHK-Zertifikat?",
      o: [
        { t: "Unter „Sonstiges“ lassen – es ist ja kein Berufsabschluss", p: 0,
          fb: "So versteckt Nadine ihre wichtigste Qualifikation für diese Stelle. Das Zertifikat belegt einen Lehrgang mit Abschlusstest – es gehört sichtbar nach oben." },
        { t: "Nur im Anschreiben nennen, der Lebenslauf bleibt wie er ist", p: 1,
          fb: "Das Anschreiben wird nicht immer gelesen. Der Lebenslauf muss allein funktionieren – das Zertifikat gehört auch dorthin." },
        { t: "Ins Kurzprofil oben und als Punkt „Weiterbildung“ mit Inhalten", p: 2,
          fb: "Richtig: Lebensläufe werden oft nur kurz überflogen. Was für die Stelle zählt, steht oben – mit Stichworten wie Strategie, Redaktionsplan, Recht, Kennzahlen." }
      ] },

    { k: "daten", h: "Aus Nadines altem Lebenslauf",
      l: [
        "„Verantwortlich für diverse Aufgaben im Verkauf“",
        "„Betreuung des Instagram-Accounts der Filiale“",
        "„Teamfähig, flexibel, belastbar“",
        "Lücke: 05/2019 – 04/2020 (Elternzeit)",
        "Geburtsdatum, Familienstand, Religion, Foto"
      ] },

    { k: "wahl", h: "Wie wird die Instagram-Zeile stärker?",
      o: [
        { t: "„Eigenverantwortliche Betreuung sämtlicher Social-Media-Aktivitäten“", p: 1,
          fb: "Klingt größer, sagt aber nichts Konkretes – und „sämtliche“ übertreibt. Besser: Was hat Nadine gemacht, und was kam dabei heraus?" },
        { t: "„Filial-Instagram aufgebaut: 380 auf 1.100 Follower in 18 Monaten“", p: 2,
          fb: "Stark: Eine **Kennzahl** mit Zeitraum macht Leistung prüfbar. Nur echte Zahlen nennen, die man belegen kann – etwa mit Screenshots aus den Insights." },
        { t: "„Social-Media-Expertin mit nachgewiesener Reichweitenexplosion“", p: 0,
          fb: "Superlative ohne Zahl wecken Misstrauen – gerade bei Quereinsteigern. Ehrliche, konkrete Kennzahlen überzeugen mehr." }
      ] },

    { k: "wahl", h: "Und die Lücke 2019/2020?",
      o: [
        { t: "Ausführlich erklären, wie die Kinderbetreuung jetzt geregelt ist", p: 1,
          fb: "Gut gemeint, aber unnötig: Wie Nadine die Familie organisiert, gehört nicht in den Lebenslauf. Lange Erklärungen lenken nur ab." },
        { t: "Kurz und neutral: „05/2019 – 04/2020 Elternzeit“", p: 2,
          fb: "Genau: ehrlich, kurz, ohne Rechtfertigung. Elternzeit ist eine normale Station. Fragen zur Familienplanung sind im Gespräch nach dem **AGG** ohnehin unzulässig." },
        { t: "Weglassen und die Daten davor und danach strecken", p: 0,
          fb: "Geschönte Daten sind eine Täuschung und fallen spätestens bei den Arbeitszeugnissen auf. Elternzeit muss niemand verstecken." }
      ] },

    { k: "wahl", h: "Foto, Alter, Religion – muss das rein?",
      o: [
        { t: "Foto und Geburtsdatum freiwillig, Religion und Familienstand raus", p: 2,
          fb: "Richtig: Foto und Alter sind in Deutschland **freiwillig**, nicht Pflicht. Das **AGG** schützt vor Benachteiligung, etwa wegen Alter oder Religion. Angaben ohne Bezug zur Stelle lässt Nadine weg." },
        { t: "Alles muss rein, sonst gilt die Bewerbung als unvollständig", p: 0,
          fb: "Nein: Das **AGG** verbietet Benachteiligung, z. B. wegen Alter, Religion oder Geschlecht. Seriöse Arbeitgeber verlangen solche Angaben deshalb nicht – ohne sie ist die Bewerbung vollständig." },
        { t: "Nur das Foto weglassen, Geburtsdatum und Religion bleiben drin", p: 1,
          fb: "Ein Schritt in die richtige Richtung. Religion und Familienstand sagen aber nichts über die Eignung – die können auch raus." }
      ] },

    { k: "frei", h: "Schreib den Einstieg ins Anschreiben",
      b: "Schreib die ersten 2–3 Sätze von Nadines Anschreiben an Muldenrad – ohne „hiermit bewerbe ich mich“. Verbinde **Bezug zur Firma**, **ihre Erfahrung** und **das IHK-Zertifikat**, gern mit einer **Zahl**.",
      muster: [
        ["Bezug zu Muldenrad, E-Bikes oder Radfahren", "muldenrad|e-?bikes?|fahrrad|\\brad(fahr|el|tour|weg|\\b)"],
        ["Erfahrung aus dem Handel, Kundenkontakt", "einzelhandel|\\bhandel|\\bkund|\\bfilial|\\bverkauf"],
        ["IHK-Zertifikat", "\\bihk\\b|zertifikat|lehrgang|weiterbildung"],
        ["Konkreter Beleg mit Zahl", "\\d[\\d.,]*\\s?(%|follower|jahre|\\bkund|monat|\\bauf\\b)"]
      ],
      min: 3,
      bsp: "Seit ich das Instagram unserer Filiale von 380 auf 1.100 Follower gebracht habe, weiß ich: Ich will Menschen online so begeistern wie im Laden. Bei Muldenrad reizt mich, dass Sie E-Bikes in Zwickau bauen – ich fahre selbst jeden Tag Rad. Mit dabei: 12 Jahre Kundenkontakt im Einzelhandel und mein IHK-Zertifikat Social Media Manager/-in." },

    { k: "wahl", h: "KI-Hilfe für das Anschreiben", b: "Nadine will einen KI-Chatbot nutzen.",
      o: [
        { t: "Gar keine KI nutzen – das gilt als Schummeln", p: 1,
          fb: "Kein Muss: KI ist ein normales Werkzeug, auch im Social-Media-Job. Wer sie kritisch nutzt, spart Zeit. Verantwortlich für den Inhalt bleibt Nadine." },
        { t: "Die KI ein komplettes Anschreiben schreiben lassen, sofort senden", p: 0,
          fb: "KI-Texte klingen oft austauschbar, und KI erfindet manchmal Fakten (**Halluzination**). Spätestens im Gespräch fällt auf, wenn der Text nicht zu Nadine passt." },
        { t: "Stichpunkte geben, Entwurf prüfen, in eigene Worte bringen", p: 2,
          fb: "Gut: KI hilft bei Struktur und Formulierung. Nadine prüft jede Aussage, schreibt in ihrem Ton und gibt keine unnötigen persönlichen Daten ein (**Datensparsamkeit**)." }
      ] },

    { k: "wahl", h: "Datei und Upload", b: "Muldenrad nutzt ein Bewerbungsportal mit einem Upload-Feld.",
      o: [
        { t: "Einzelne Handyfotos der Unterlagen hochladen", p: 0,
          fb: "Schief, unscharf, viele Einzeldateien – das wirkt unprofessionell, gerade bei einem Job, in dem gute Darstellung zählt." },
        { t: "Eine PDF mit Anschreiben, Lebenslauf und Zertifikat", p: 2,
          fb: "Richtig: **PDF** sieht überall gleich aus. Ein Name wie „Seifert_Nadine_Bewerbung.pdf“ hilft der Personalabteilung. Auf die Größenvorgabe im Portal achten, meist wenige MB." },
        { t: "Word-Dateien, damit man noch etwas ändern kann", p: 1,
          fb: "Geht zur Not, aber das Layout verrutscht auf anderen Geräten leicht, und die Datei lässt sich verändern. Für Bewerbungen ist PDF Standard." }
      ] },

    { k: "daten", h: "Nadines neuer Lebenslauf",
      l: [
        "Eine Seite: Kurzprofil, Weiterbildung, Beruf, Kenntnisse",
        "Social Media Managerin (IHK-Zertifikat, 2026)",
        "12 Jahre Kundenkontakt, 4 Jahre stellv. Filialleitung",
        "Filial-Instagram: 380 → 1.100 Follower in 18 Monaten",
        "Tools: Canva, CapCut, Instagram-Insights, Trello"
      ] },

    { k: "fazit", h: "Was du in diesem Training geübt hast",
      l: [
        "Wichtigstes nach oben: Kurzprofil und IHK-Zertifikat",
        "Kennzahlen mit Zeitraum statt Floskeln",
        "Lücken kurz und ehrlich benennen",
        "AGG: Foto und Alter freiwillig, Unnötiges weglassen",
        "KI als Hilfe nutzen, Inhalt selbst prüfen; eine PDF"
      ] }
  ]
},
{
  id: "b-portfolio",
  kachel: "Portfolio & LinkedIn",
  titel: "Portfolio & LinkedIn-Profil",
  firma: "Bewerbung bei der Muldenrad GmbH",
  rolle: "Du stellst mit Nadine Arbeitsproben zusammen und baust ihr LinkedIn-Profil um.",
  kurz: "Zeigen, was du kannst – auch ohne Berufsjahre",
  module: ["platt", "recht", "kpi"],
  min: 11,
  schritte: [
    { k: "szene", h: "Eine Mail von Muldenrad", wer: "Katja Riedel, Marketingleiterin Muldenrad",
      b: "Danke für Ihre Bewerbung, Frau Seifert! Bevor wir einladen: Können Sie uns zwei oder drei **Arbeitsproben** zeigen? Gern als Link zu einem Portfolio." },

    { k: "daten", h: "Was Nadine hat",
      l: [
        "Filial-Instagram – die Inhalte gehören dem Ex-Arbeitgeber",
        "Instagram des Handballvereins ihrer Tochter, ehrenamtlich",
        "Praxisprojekte aus dem Lehrgang und der Lern-App",
        "Viele Ideen, aber keine fertigen Konzepte"
      ] },

    { k: "wahl", h: "Was kommt ins Portfolio?",
      o: [
        { t: "Nur die besten Posts der Filiale als Screenshots zeigen", p: 1,
          fb: "Starke Beispiele, aber nur eine Quelle – und die Rechte liegen beim Ex-Arbeitgeber. Mehr Vielfalt und geklärte Rechte machen das Portfolio stärker." },
        { t: "Nichts – ohne Berufserfahrung gibt es nichts Echtes zu zeigen", p: 0,
          fb: "Doch: Ehrenamt, Kursprojekte und eigene Konzepte zählen. Gerade Quereinsteiger zeigen so, dass sie es können – nicht nur, dass sie es gelernt haben." },
        { t: "Vereinskanal, Kursprojekt und Mock-up für eine fiktive Marke", p: 2,
          fb: "Gut gemischt: echte Arbeit (Verein), Fachwissen (Kurs) und Kreativität (**Mock-up**). Fiktive Beispiele als „Konzept“ kennzeichnen. Auch beim Verein: Freigabe holen, Kinder nur mit Einwilligung der Eltern zeigen (**DSGVO**)." }
      ] },

    { k: "wahl", h: "Darf sie die Filial-Posts zeigen?", b: "Auf den Fotos sind Kolleginnen zu sehen, die Bilder hat eine Agentur gemacht.",
      o: [
        { t: "Ja, denn sie hat die Posts damals ja selbst veröffentlicht", p: 0,
          fb: "Veröffentlichen heißt nicht besitzen: Die **Nutzungsrechte** an den Agenturfotos liegen nicht bei Nadine. Und die Kolleginnen haben nicht fürs Portfolio eingewilligt (**Recht am eigenen Bild**, § 22 KUG)." },
        { t: "Um Erlaubnis bitten, sonst Rolle und Zahlen nur beschreiben", p: 2,
          fb: "Richtig: Mit Zustimmung von Ex-Arbeitgeber und abgebildeten Personen ist es sauber. Ohne Erlaubnis beschreibt Nadine ihre Aufgabe und ihre Zahlen – ohne fremde Fotos." },
        { t: "Ja, wenn sie die Gesichter der Kolleginnen verpixelt", p: 1,
          fb: "Verpixeln schützt die Kolleginnen, aber die Rechte an den Agenturfotos bleiben ungeklärt. Besser: kurz nachfragen." }
      ] },

    { k: "daten", h: "Vereinskanal: Reel zum Saisonstart",
      l: [
        "Reichweite: 2.400 Konten",
        "Likes: 168, Kommentare: 24",
        "Geteilt: 18, Gespeichert: 30",
        "Follower vorher: 410, nach 3 Monaten: 690"
      ] },

    { k: "wahl", h: "Wie hoch ist die Engagement-Rate?", b: "Engagement-Rate = Interaktionen ÷ Reichweite × 100. Interaktionen sind Likes, Kommentare, geteilte und gespeicherte Beiträge.",
      o: [
        { t: "8 %", p: 1,
          fb: "Fast: Das sind nur Likes und Kommentare (192 ÷ 2.400 × 100 = 8 %). Geteilte und gespeicherte Beiträge zählen auch als Interaktionen." },
        { t: "10 %", p: 2,
          fb: "Richtig: 168 + 24 + 18 + 30 = 240 Interaktionen. 240 ÷ 2.400 × 100 = **10 %**. Ein starker, belegbarer Wert für Nadines Portfolio." },
        { t: "68 %", p: 0,
          fb: "Das ist das **Follower-Wachstum**: (690 − 410) ÷ 410 × 100 ≈ 68 %. Beide Zahlen passen ins Portfolio – aber richtig benannt." }
      ] },

    { k: "wahl", h: "Wie zeigt sie die Zahlen?",
      o: [
        { t: "Alle 80 Vereinsposts in einer großen Galerie", p: 0,
          fb: "Zu viel: Niemand klickt sich durch 80 Posts. Ein Portfolio ist eine Auswahl – drei starke Beispiele schlagen eine volle Galerie." },
        { t: "Nur „10 % Engagement“, ohne weitere Erklärung", p: 1,
          fb: "Ohne Zusammenhang wirkt die Zahl beliebig. Besser: Ziel, Idee, Ergebnis – und kurz sagen, wie gemessen wurde." },
        { t: "Kurze Fallstudie: Ausgangslage, Idee, Ergebnis, Lernpunkt", p: 2,
          fb: "Genau: Eine **Case Study** zeigt Denkweise und Ergebnis. Katja sieht, wie Nadine arbeitet – das ist mehr wert als ein hübscher Screenshot." }
      ] },

    { k: "szene", h: "Jetzt LinkedIn", wer: "Doreen Pfeil, Mentorin",
      b: "Katja Riedel schaut sich vor dem Gespräch sicher dein **LinkedIn-Profil** an. Im Moment steht da „Verkäuferin“, dazu ein Urlaubsfoto und kein einziger Beitrag. Das bauen wir heute um – eine Stunde reicht für den Anfang." },

    { k: "wahl", h: "Welche Headline nimmt Nadine?",
      o: [
        { t: "Social Media Managerin (IHK) | Community & Content | 12 Jahre Kundenerfahrung", p: 2,
          fb: "Stark: Zielrolle, Schwerpunkte und ihr Plus in einer Zeile. Über diese **Suchbegriffe** finden Recruiter sie." },
        { t: "Verkäuferin auf der Suche nach neuen beruflichen Herausforderungen", p: 0,
          fb: "Die **Headline** steht überall neben dem Namen. „Verkäuferin“ ordnet Nadine falsch ein, und „neue Herausforderungen“ sucht jeder." },
        { t: "Social-Media-Enthusiastin, kreativer Kopf und Kaffeeliebhaberin aus Zwickau", p: 1,
          fb: "Sympathisch, aber ohne Rollenbezeichnung wie „Social Media Managerin“ wird sie in der Suche schlechter gefunden." }
      ] },

    { k: "frei", h: "Schreib Nadines LinkedIn-Info",
      b: "Schreib den Anfang von Nadines **Info-Bereich** (3–4 Sätze, Ich-Form): Wer sie ist, was sie kann, ein Ergebnis mit Zahl und was sie sucht.",
      muster: [
        ["Rolle: Social Media Managerin mit IHK-Zertifikat", "social media|\\bihk\\b|zertifikat"],
        ["Erfahrung: Handel, Kundenkontakt", "einzelhandel|\\bhandel|\\bkund|\\bfilial|\\bverkauf"],
        ["Ergebnis mit Zahl", "\\d[\\d.,]*\\s?(%|prozent|follower|\\bkonten|reichweite|interaktion|\\bauf\\b)"],
        ["Schwerpunkt: Community, Content, Planung", "community|content|redaktion|\\breels?\\b|kommentar"],
        ["Was sie sucht", "\\bsuche|\\boffen für|\\bfreue mich|neue (stelle|aufgabe|rolle)|\\bjob\\b"]
      ],
      min: 3,
      bsp: "Ich bin Social Media Managerin mit IHK-Zertifikat und komme aus dem Einzelhandel. Zwölf Jahre Kundenkontakt haben mir gezeigt, wie man Menschen zuhört – heute mache ich daraus Community Management und Content. Den Instagram-Kanal meiner Filiale habe ich von 380 auf 1.100 Follower gebracht. Ich suche eine Stelle in Sachsen, in der ich Social Media für eine Marke verantworte." },

    { k: "wahl", h: "„Open to work“ – wie sichtbar?",
      o: [
        { t: "Grünen Rahmen öffentlich setzen und sonst nichts tun", p: 1,
          fb: "Die Suche ist sichtbar, aber das Profil bleibt still. Beiträge und Kommentare zeigen, dass Nadine Social Media wirklich lebt." },
        { t: "„Open to work“ setzen und regelmäßig eigene Beiträge posten", p: 2,
          fb: "Gut: Die Funktion lässt sich nur für Recruiter oder öffentlich zeigen. Dazu ein, zwei Beiträge pro Woche oder kluge Kommentare – so sieht man ihr Fachwissen in Aktion." },
        { t: "Täglich zehn Personaler anschreiben: „Haben Sie einen Job?“", p: 0,
          fb: "Massennachrichten ohne Bezug wirken aufdringlich. Besser: gezielt vernetzen, mit einer kurzen persönlichen Notiz." }
      ] },

    { k: "daten", h: "Zwei Wochen später",
      l: [
        "Portfolio: 3 Fallstudien als PDF und als Link",
        "LinkedIn: 3 eigene Beiträge, 41 neue Kontakte",
        "Profilaufrufe: von 6 auf 58 pro Woche",
        "Katja Riedel: „Spannend – wir laden Sie ein!“"
      ] },

    { k: "fazit", h: "Was du in diesem Training geübt hast",
      l: [
        "Portfolio ohne Berufsjahre: Ehrenamt, Kursprojekte, Mock-ups",
        "Rechte klären: Nutzungsrechte und Recht am eigenen Bild",
        "Engagement-Rate richtig rechnen und benennen",
        "Fallstudie statt Galerie",
        "LinkedIn: Headline, Info, „Open to work“, Aktivität"
      ] }
  ]
},
{
  id: "b-gespraech",
  kachel: "Vorstellungs­gespräch",
  titel: "Das Vorstellungsgespräch",
  firma: "Muldenrad GmbH, Zwickau",
  rolle: "Du bereitest Nadine auf zwei Gesprächsrunden bei Muldenrad vor.",
  kurz: "Typische Fragen sicher beantworten",
  module: ["kpi", "plan", "unt", "recht"],
  min: 12,
  schritte: [
    { k: "szene", h: "Die Einladung",
      b: "Nadine ist eingeladen! Erste Runde: 30 Minuten **Video-Interview** mit Marketingleiterin **Katja Riedel**. Wenn es passt, folgt ein Gespräch vor Ort mit Geschäftsführer **Uwe Lorenz**. Nadine ist aufgeregt. Ihr bereitet die typischen Fragen gemeinsam vor." },

    { k: "wahl", h: "Womit fängt die Vorbereitung an?", b: "Drei Tage bis zum Video-Interview.",
      o: [
        { t: "Antworten auf 50 Standardfragen auswendig lernen", p: 1,
          fb: "Vorbereitung ist gut, aber Auswendiggelerntes klingt hölzern. Besser: Stichpunkte und echte Beispiele parat haben." },
        { t: "Muldenrads Kanäle analysieren und zwei, drei Ideen notieren", p: 2,
          fb: "Richtig: Wer Themen, Ton und Zahlen der Kanäle kennt, kann konkret mitreden. Das ist eine kleine **Ist-Analyse** – und beeindruckt mehr als jede Floskel." },
        { t: "Nichts vorbereiten, um möglichst natürlich zu wirken", p: 0,
          fb: "Natürlich wirkt, wer sicher ist – und Sicherheit kommt aus Vorbereitung. Ohne sie fehlen Nadine im Gespräch die Beispiele." }
      ] },

    { k: "wahl", h: "Technik fürs Video-Interview",
      o: [
        { t: "Vom Handy aus, im Café um die Ecke mit gutem WLAN", p: 0,
          fb: "Lärm, wackelnde Kamera und Leute im Hintergrund lenken ab. Außerdem hören Fremde vertrauliche Gesprächsinhalte mit." },
        { t: "Virtueller Hintergrund mit dem Logo von Muldenrad", p: 1,
          fb: "Kreativ, aber riskant: Virtuelle Hintergründe flackern oft an den Rändern, und das fremde Logo wirkt schnell anbiedernd. Ein ruhiger echter Raum ist sicherer." },
        { t: "Laptop auf Augenhöhe, ruhiger Raum, Technik vorher testen", p: 2,
          fb: "Richtig: Kamera auf Augenhöhe wirkt wie Blickkontakt, ein ruhiger Raum lenkt nicht ab, und der Test verhindert Ton-Pannen. In die Kamera schauen, nicht aufs eigene Bild." }
      ] },

    { k: "wahl", h: "„Was ist Ihre größte Schwäche?“",
      o: [
        { t: "„Ich bin zu perfektionistisch und zu ungeduldig mit mir.“", p: 1,
          fb: "Der Klassiker – Den hört man in Gesprächen ständig. Ohne echtes Beispiel wirkt er wie ein Ausweichen." },
        { t: "„Social Ads kenne ich nur aus dem Kurs – ich übe gerade im Verein.“", p: 2,
          fb: "Stark: eine echte, für den Job wichtige Schwäche plus ein konkreter Schritt dagegen. Das zeigt **Selbstreflexion** und Lernbereitschaft." },
        { t: "„Ehrlich gesagt habe ich eigentlich keine Schwächen.“", p: 0,
          fb: "Wirkt unehrlich oder unreflektiert. Die Frage prüft, ob Nadine sich selbst realistisch einschätzt." }
      ] },

    { k: "wahl", h: "„Was ist Ihre Lieblingskampagne?“",
      o: [
        { t: "„Die Werbung der großen Marken finde ich eigentlich alle gut.“", p: 0,
          fb: "Zu allgemein: Das zeigt weder Wissen noch Meinung. Die Frage will hören, ob Nadine Kampagnen analysieren kann." },
        { t: "Das eigene Vereins-Reel als Lieblingskampagne nennen", p: 1,
          fb: "Eigene Arbeit ist gut, beantwortet aber nicht ganz die Frage. Besser: erst eine bekannte Kampagne analysieren, dann den Bogen zur eigenen Arbeit schlagen." },
        { t: "Eine reale Kampagne nennen und erklären, warum sie wirkte", p: 2,
          fb: "Genau: Es zählt die Begründung – Zielgruppe, Idee, Kanal, Ergebnis. Das zeigt Fachblick. Die Fakten zur Kampagne vorher prüfen." }
      ] },

    { k: "szene", h: "Die STAR-Methode", wer: "Doreen Pfeil, Mentorin",
      b: "Für Fragen nach Erfahrungen nimmst du **STAR**: **S**ituation – was war los? **T**ask – deine Aufgabe. **A**ction – was du getan hast. **R**esult – das Ergebnis, am besten mit Zahl. So wird aus „Ich kann mit Kritik umgehen“ eine Geschichte, die man dir glaubt." },

    { k: "frei", h: "Antworte mit STAR",
      b: "Katja fragt: „Wie gehen Sie mit einem **Shitstorm** oder sehr kritischen Kommentaren um?“ Online hat Nadine das noch nicht erlebt – im Laden schon. Antworte für sie mit **STAR** und schlag die Brücke zu Social Media.",
      muster: [
        ["Situation: konkreter Anlass", "situation|\\bkund|reklamation|beschwer|\\bkritik|ärger|wütend"],
        ["Aufgabe: ihre Rolle", "\\baufgabe|\\bverantwort|\\bmeine rolle|\\bstellv|\\bfilialleit|\\bmusste|\\bsollte|\\bzuständig"],
        ["Handlung: ruhig zuhören, Lösung anbieten", "zugehört|\\bzuhör|\\bhörte\\b|\\bruhig|\\blösung|entschuldig|angeboten|\\bbot\\b|\\bsachlich|\\btauschte|umgetauscht|gutschein|\\bkulanz"],
        ["Ergebnis", "ergebnis|zufrieden|wiedergekommen|kam (später |danach )?wieder|\\bbewertung|\\bam ende|bedankt|beruhigt|stammkund|gelöst|geklärt"],
        ["Brücke zu Social Media", "social media|kommentar|\\bonline|leitfaden|guideline|eskal|\\bdms?\\b|direktnachricht|monitoring"]
      ],
      min: 4,
      bsp: "• S: Im Weihnachtsgeschäft beschwerte sich ein Kunde laut an der Kasse über eine abgelehnte Reklamation.\n• T: Als stellvertretende Filialleiterin musste ich die Lage klären.\n• A: Ich habe ruhig zugehört, mich für den Ärger entschuldigt und eine Lösung angeboten: Gutschein statt Umtausch.\n• R: Der Kunde war zufrieden und schrieb später eine gute Bewertung.\n• Online: schnell und sachlich antworten, per DM klären, bei einem Shitstorm nach Krisenleitfaden eskalieren." },

    { k: "wahl", h: "„Welche KPIs würden Sie messen?“", b: "Muldenrad will mit Instagram vor allem **Probefahrten** im Werksladen gewinnen.",
      o: [
        { t: "Klicks auf den Buchungslink und gebuchte Probefahrten", p: 2,
          fb: "Richtig: Die KPI muss zum Ziel passen. **CTR** und **Conversion-Rate** zeigen, ob Instagram wirklich Probefahrten bringt – messbar z. B. mit UTM-Links." },
        { t: "Follower und Likes – je mehr, desto besser", p: 1,
          fb: "Follower und Likes sind **Vanity Metrics**: leicht zu zählen, aber sie sagen wenig über Probefahrten. Als Nebenwert okay, nicht als Hauptziel." },
        { t: "Das kann man erst nach einem Jahr sagen", p: 0,
          fb: "Ausweichend: KPIs legt man vorher fest, sonst kann man nichts steuern. Genau das will Katja als Grundwissen hören." }
      ] },

    { k: "wahl", h: "„Mit welchen Tools arbeiten Sie?“", b: "Nadine kennt Canva, CapCut und Instagram-Insights. Muldenrad plant mit einem Tool, das sie nicht kennt.",
      o: [
        { t: "Behaupten, sie kenne das Planungstool schon gut", p: 0,
          fb: "Das fliegt am ersten Arbeitstag auf. Unbekannte Tools sind bei Einsteigern normal – Ehrlichkeit schafft Vertrauen." },
        { t: "Tools nennen und zeigen, wie schnell sie Neues lernt", p: 2,
          fb: "Stark: ehrlich plus Beleg – z. B. „CapCut habe ich mir an zwei Wochenenden beigebracht“. Tools wechseln ständig, **Lernfähigkeit** bleibt." },
        { t: "Einfach nur ihre drei bekannten Tools aufzählen", p: 1,
          fb: "Korrekt, aber eine Chance verschenkt: Sie könnte zeigen, wie sie sich neue Tools aneignet." }
      ] },

    { k: "szene", h: "Zweite Runde vor Ort",
      b: "Das Video-Interview lief gut. Eine Woche später sitzt Nadine in Zwickau bei Katja Riedel und Uwe Lorenz. Es geht um Ideen für den Saisonstart – Nadine bringt ihre Notizen aus der Kanal-Analyse mit. Dann wird Uwe Lorenz persönlich." },

    { k: "wahl", h: "„Planen Sie noch weitere Kinder?“",
      o: [
        { t: "Ehrlich und ausführlich über die Familienplanung sprechen", p: 1,
          fb: "Darf sie, muss sie aber nicht. Sie gibt damit Privates preis, das mit ihrer Eignung nichts zu tun hat." },
        { t: "Freundlich abgrenzen: „Das ist privat – der Stelle steht nichts im Weg.“", p: 2,
          fb: "Richtig: Die Frage ist nach dem **AGG** unzulässig, weil sie wegen des Geschlechts benachteiligen kann. Nadine muss nicht antworten; selbst eine unwahre Antwort hätte keine Folgen (**Recht zur Lüge**)." },
        { t: "Sie muss wahrheitsgemäß antworten, sonst droht die Kündigung", p: 0,
          fb: "Nein: Bei unzulässigen Fragen gibt es keine Pflicht zur Wahrheit – etwa zu Schwangerschaft oder Kinderwunsch." }
      ] },

    { k: "wahl", h: "„Haben Sie noch Fragen an uns?“",
      o: [
        { t: "„Wie viele Urlaubstage gibt es, und wann kann ich früher gehen?“", p: 1,
          fb: "Berechtigte Fragen, aber als erste wirken sie, als ginge es nur um Freizeit. Besser nach den Fachfragen oder beim Vertrag." },
        { t: "„Nein, danke – Sie haben eigentlich schon alles gut erklärt.“", p: 0,
          fb: "Wirkt desinteressiert. Eigene Fragen zeigen, dass Nadine mitdenkt – und sie erfährt, ob die Stelle zu ihr passt." },
        { t: "„Was soll die Stelle im ersten Jahr erreichen? Wer gibt frei?“", p: 2,
          fb: "Stark: Fragen nach Zielen und **Freigabeprozess** zeigen Fachwissen und helfen Nadine, ihre künftige Rolle zu verstehen." }
      ] },

    { k: "fazit", h: "Was du in diesem Training geübt hast",
      l: [
        "Vorbereitung: Kanäle der Firma analysieren",
        "Schwäche ehrlich nennen, Lernschritt zeigen",
        "STAR-Methode für Erfahrungsfragen",
        "KPIs passend zum Ziel statt Vanity Metrics",
        "Unzulässige Fragen (AGG) erkennen, eigene Fragen stellen"
      ] }
  ]
},
{
  id: "b-probeaufgabe",
  kachel: "Die Probeaufgabe",
  titel: "Die Probeaufgabe",
  firma: "Muldenrad GmbH, Zwickau",
  rolle: "Du hilfst Nadine, die Probeaufgabe von Muldenrad gut und fair zu lösen.",
  kurz: "Einen Case lösen, ohne sich zu verausgaben",
  module: ["plan", "kpi", "unt", "recht"],
  min: 11,
  schritte: [
    { k: "szene", h: "Die letzte Runde", wer: "Katja Riedel, Marketingleiterin",
      b: "Sie sind in der letzten Runde! Als **Probeaufgabe** hätten wir gern einen **Redaktionsplan für zwei Wochen** für unseren Instagram-Kanal – zum Start des neuen E-Bikes. Präsentation in einer Woche, 15 Minuten." },

    { k: "daten", h: "Briefing und Ausgangslage",
      l: [
        "Instagram: 2.900 Follower, 3 Posts pro Woche",
        "Letzte 30 Tage: Reichweite 18.000, Interaktionen 540",
        "Ziel: mehr gebuchte Probefahrten im Werksladen",
        "Neues Modell „Pleiße“ ab 1. März",
        "Keine Angaben zu Werbebudget und Bildmaterial"
      ] },

    { k: "wahl", h: "Wie hoch ist die Engagement-Rate?", b: "Engagement-Rate = Interaktionen ÷ Reichweite × 100",
      o: [
        { t: "0,3 %", p: 0,
          fb: "Kommafehler: 540 ÷ 18.000 = 0,03. Mal 100 ergibt 3 %, nicht 0,3 %." },
        { t: "18,6 %", p: 0,
          fb: "Das ist Interaktionen ÷ Follower (540 ÷ 2.900). Die Formel aus dem Lehrgang teilt durch die **Reichweite**, sonst sind die Werte nicht vergleichbar." },
        { t: "3 %", p: 2,
          fb: "Richtig: 540 ÷ 18.000 × 100 = **3 %**. Diesen **Ist-Wert** nutzt Nadine als Ausgangspunkt, um ihren Plan später zu messen." }
      ] },

    { k: "wahl", h: "Wie viel Zeit steckt sie hinein?", b: "Nadine hat eine Woche – und könnte Tag und Nacht daran arbeiten.",
      o: [
        { t: "Fotos shooten, 14 Posts fertig gestalten, Reels schneiden", p: 0,
          fb: "Das ist echte Produktionsarbeit, kein Test mehr. Eine Probeaufgabe soll zeigen, **wie** Nadine denkt – nicht kostenlos Content liefern." },
        { t: "Nur eine schnelle Liste mit 14 Themen, ganz ohne Begründung", p: 1,
          fb: "Zu knapp: Ohne Ziel, Begründung und Kennzahlen sieht Katja nicht, wie Nadine denkt. Ein paar Sätze Strategie gehören dazu." },
        { t: "Rahmen von 4–6 Stunden: Plan, 2 Beispielposts, Begründung", p: 2,
          fb: "Richtig: **Umfang begrenzen** schützt Nadines Zeit und wirkt professionell. Ein klarer Plan mit wenigen ausgearbeiteten Beispielen reicht völlig." }
      ] },

    { k: "wahl", h: "Budget und Bilder sind unklar", b: "Was macht Nadine mit den Lücken im Briefing?",
      o: [
        { t: "Kurz nachfragen und Offenes als Annahme in den Plan schreiben", p: 2,
          fb: "Genau: Rückfragen sind Alltag im Job. Was offen bleibt, steht als **Annahme** im Plan, z. B. „ohne Werbebudget, eigene Fotos“. So kann Katja jede Entscheidung nachvollziehen." },
        { t: "Still 2.000 € für Ads einplanen, das wird schon passen", p: 0,
          fb: "Eine versteckte Annahme kann den ganzen Plan entwerten, wenn es das Budget gar nicht gibt. Annahmen immer sichtbar machen." },
        { t: "Nicht nachfragen, um nicht zu nerven, und vorsichtig planen", p: 1,
          fb: "Vorsichtig planen ist besser als raten, aber eine kurze Rückfrage hätte Klarheit gebracht. Annahmen gehören trotzdem sichtbar in den Plan." }
      ] },

    { k: "frei", h: "Ziel und Annahmen für Folie 1",
      b: "Schreib für Nadines erste Folie: ein **SMART-Ziel** für die zwei Wochen (Zahl, Messgröße, Zeitraum) und **zwei Annahmen**, die sie treffen musste.",
      muster: [
        ["Zahl mit Messgröße (Probefahrten, Klicks, Buchungen – nicht Follower)", "\\d[\\d.,]*\\s?%?\\s([a-zäöüß-]+\\s){0,6}(probefahrt|buchung|klick|anfrag|termin)"],
        ["Zeitraum oder Termin", "\\bbis\\b|zwei wochen|\\b2 wochen|\\b14 tage|\\bzeitraum|\\binnerhalb|\\b\\d{1,2}\\.\\s?(\\d{1,2}\\.|märz)"],
        ["Messweg: Link, UTM, Buchungstool", "\\blink|\\butm|buchungs|\\bformular|\\bcode\\b|insights"],
        ["Annahme zum Budget", "budget|werbe|\\bads?\\b|organisch|bezahlt"],
        ["Annahme zu Bildern oder Material", "\\bbild(er|ern|es|material)?\\b|\\bfoto|material|\\bstock|\\bvideo"]
      ],
      min: 4,
      bsp: "• Ziel: Vom 1. bis 14. März buchen 25 Personen über den Instagram-Link eine Probefahrt (Messung per UTM-Link im Buchungstool).\n• Ist-Wert: Engagement-Rate 3 %, Ziel 4 %.\n• Annahme 1: kein Werbebudget – nur organische Reichweite.\n• Annahme 2: Fotos vom Werk und vom neuen Modell stellt Muldenrad bereit." },

    { k: "wahl", h: "Bilder für die Beispielposts",
      o: [
        { t: "Bilder aus der Google-Bildersuche, mit Quellenangabe darunter", p: 0,
          fb: "Eine Quellenangabe ersetzt keine **Lizenz**. Auch in Präsentationen gilt das Urheberrecht – ein schlechter Eindruck bei einer Social-Media-Stelle." },
        { t: "Eigene Fotos oder lizenzierte Stockfotos als Platzhalter", p: 2,
          fb: "Sauber: eigene Bilder oder Stockfotos mit passender **Lizenz**, klar als Platzhalter gekennzeichnet. So zeigt Nadine Rechtsbewusstsein – im Job täglich wichtig." },
        { t: "Fotos von der Muldenrad-Website, die Firma sieht sie ja selbst", p: 1,
          fb: "Für die Präsentation vor der Firma selbst kaum ein Problem, aber eine kurze Frage ist sicherer. Öffentlich posten dürfte Nadine die Bilder ohne Erlaubnis nicht." }
      ] },

    { k: "daten", h: "Nadines Plan (Ausschnitt Woche 1)",
      l: [
        "Mo: Reel „Die Pleiße ist da“ – erster Blick",
        "Mi: Karussell „5 Fragen vor dem E-Bike-Kauf“",
        "Fr: Story mit Umfrage und Link zur Probefahrt",
        "So: Kundenfotos (UGC) – nur mit Einwilligung",
        "Je Post: Ziel, Format, KPI, verantwortlich, Freigabe"
      ] },

    { k: "wahl", h: "Wie baut sie die 15 Minuten auf?",
      o: [
        { t: "Erst 10 Minuten über sich, dann kurz der Plan", p: 0,
          fb: "Die Aufgabe ist der Plan, nicht der Lebenslauf – den kennen Katja und Uwe schon." },
        { t: "Analyse → Ziel → Plan → Messung → offene Annahmen", p: 2,
          fb: "Klare Struktur: vom Ist-Wert zum Ziel, dann Plan und Erfolgsmessung. Offene Annahmen am Ende laden zum Gespräch ein – genau das will Katja sehen." },
        { t: "Alle 14 Posts einzeln durchklicken, je eine Minute", p: 1,
          fb: "Zu detailliert: Die Strategie geht unter. Zwei Beispiele reichen, der Rest steht im Plan zum Nachlesen." }
      ] },

    { k: "wahl", h: "„Dürfen wir den Plan so umsetzen?“", b: "Nach der Präsentation ist Uwe Lorenz begeistert. Eine Zusage hat Nadine aber noch nicht.",
      o: [
        { t: "„Klar, nehmen Sie ihn einfach!“", p: 1,
          fb: "Großzügig, vielleicht ein Pluspunkt – aber Nadine verschenkt Arbeit. Wird ein Plan wirklich umgesetzt, ist das eine Leistung, die bezahlt werden sollte." },
        { t: "„Gern – wenn ich hier anfange oder gegen ein Honorar.“", p: 2,
          fb: "Fair und freundlich: Wer die Arbeit nutzt, sollte sie vergüten. Reine Ideen sind rechtlich oft nicht geschützt – deshalb hilft eine klare Absprache." },
        { t: "„Nein, das ist mein Eigentum, Sie dürfen nichts davon nutzen.“", p: 1,
          fb: "Verständlich, aber schroff – und rechtlich nicht so eindeutig: Reine Ideen schützt das Urheberrecht oft nicht. Besser freundlich eine faire Lösung anbieten." }
      ] },

    { k: "szene", h: "Die Rückmeldung", wer: "Katja Riedel, Marketingleiterin",
      b: "Ihr Plan war klar, ehrlich bei den Annahmen und gut messbar. Genau so arbeiten wir. Wir möchten Ihnen ein Angebot machen – Herr Lorenz meldet sich wegen der Details." },

    { k: "fazit", h: "Was du in diesem Training geübt hast",
      l: [
        "Engagement-Rate als Ist-Wert berechnen",
        "Umfang begrenzen: zeigen, wie du denkst",
        "Rückfragen stellen, Annahmen offenlegen",
        "Bildrechte auch in der Präsentation beachten",
        "Nutzung der Arbeit fair absprechen"
      ] }
  ]
},
{
  id: "b-gehalt",
  kachel: "Gehalt & Vertrag",
  titel: "Gehalt, Vertrag & erste 100 Tage",
  firma: "Muldenrad GmbH, Zwickau",
  rolle: "Du begleitest Nadine durch Gehaltsfrage, Vertrag und Start bei Muldenrad.",
  kurz: "Fair verhandeln, sicher starten",
  module: ["unt", "plan", "kpi"],
  min: 12,
  schritte: [
    { k: "szene", h: "Die Gehaltsfrage", wer: "Uwe Lorenz, Geschäftsführer",
      b: "Wir möchten Sie gern einstellen, Frau Seifert. Bevor wir den Vertrag aufsetzen: Was sind Ihre Gehaltsvorstellungen? Melden Sie sich gern morgen bei mir." },

    { k: "wahl", h: "Wie findet Nadine ihre Zahl?",
      o: [
        { t: "Einfach ihr altes Gehalt aus dem Einzelhandel als Maßstab nennen", p: 0,
          fb: "Das alte Gehalt sagt nichts über den Wert der neuen Stelle – und kann Nadine unnötig nach unten ziehen. Nach der EU-Entgelttransparenzrichtlinie sollen Arbeitgeber künftig gar nicht mehr danach fragen." },
        { t: "Die Kollegin aus dem Lehrgang fragen, was sie in München bekommt", p: 1,
          fb: "Ein Anhaltspunkt, aber nicht übertragbar: In München liegen Gehälter und Mieten deutlich höher als in Zwickau." },
        { t: "Mehrere Quellen vergleichen, z. B. Entgeltatlas und Gehaltsportale", p: 2,
          fb: "Richtig: Mehrere Quellen ergeben eine realistische **Spanne**. Region, Firmengröße und Erfahrung verändern das Gehalt stark – ein Deutschland-Durchschnitt passt nicht automatisch." }
      ] },

    { k: "daten", h: "Nadines Recherche (brutto, Vollzeit)",
      l: [
        "Stepstone 2026, Deutschland: Einstieg ca. 33.700 € im Jahr",
        "Stepstone 2026, Dresden: Median 37.200 € im Jahr",
        "Gehalt.de, alle Erfahrungsstufen: Sachsen Ø 43.841 €, Baden-Württemberg Ø 52.038 €",
        "Alle Berufe (BA, Ende 2025): Median Sachsen 3.588 €, West 4.315 €/Monat",
        "Mindestlohn ab 1. Januar 2027: 14,60 € pro Stunde"
      ] },

    { k: "wahl", h: "Welche Spanne passt für Nadine?", b: "Einsteigerin, kleine Firma in Zwickau, viel Praxis im Kundenkontakt.",
      o: [
        { t: "28.000–30.000 € im Jahr", p: 0,
          fb: "Zu tief: Schon der Mindestlohn ab 2027 ergibt bei 40 Stunden rund 30.400 € im Jahr (14,60 € × 40 × 52). Für eine Fachkraftstelle mit Zertifikat ist das zu wenig." },
        { t: "34.000–38.000 € im Jahr", p: 2,
          fb: "Realistisch: zwischen dem Einstiegswert (33.700 €) und dem Dresdner Median (37.200 €), knapp darüber. Für Zwickau ehrgeizig, aber gut begründbar. Alle Portale sind nur **Orientierung** – die Werte schwanken stark." },
        { t: "40.000–42.000 € im Jahr", p: 1,
          fb: "Möglich, aber eher mit ersten Berufsjahren oder in größeren Firmen. Als Einsteigerin in einer kleinen Firma schwer zu begründen." },
        { t: "48.000–52.000 € im Jahr", p: 0,
          fb: "Das passt eher zu erfahrenen Fachkräften im Westen. Als Einstieg in Sachsen wirkt die Zahl unrealistisch und kann das Gespräch beenden." }
      ] },

    { k: "wahl", h: "Wie nennt sie die Zahl?", b: "Am nächsten Tag ruft Nadine Uwe Lorenz an.",
      o: [
        { t: "„Ich stelle mir 37.000 € brutto im Jahr vor.“", p: 2,
          fb: "Gut: eine konkrete **Jahresbrutto**-Zahl im oberen Teil ihrer Spanne. Eine Zahl wirkt klarer als eine breite Spanne, bei der man vor allem die Untergrenze hört." },
        { t: "„Mir ist das Geld nicht so wichtig, Hauptsache der Job.“", p: 0,
          fb: "Bescheidenheit kostet hier Jahre: Spätere Erhöhungen bauen auf dem Einstieg auf. Eine begründete Zahl zu nennen ist professionell." },
        { t: "„Was zahlen Sie denn üblicherweise für diese Stelle?“", p: 1,
          fb: "Die Gegenfrage ist erlaubt, kommt aber oft zurück. Die EU-Entgelttransparenzrichtlinie sieht vor, dass Bewerbende die Spanne vorab erfahren – das deutsche Gesetz dazu fehlt noch (Stand Nov. 2026)." }
      ] },

    { k: "daten", h: "Das Angebot von Muldenrad",
      l: [
        "Social Media Managerin, 40 Stunden, Start 1. Februar 2027",
        "2.850 € brutto im Monat, 13 Gehälter",
        "Befristet auf 2 Jahre, Probezeit 6 Monate",
        "Homeoffice: 1 Tag pro Woche „nach Absprache“",
        "30 Tage Urlaub"
      ] },

    { k: "wahl", h: "Wie viel ist das im Jahr?", b: "Nadine wollte 37.000 €. Rechne: Monatsgehalt × Anzahl der Gehälter.",
      o: [
        { t: "34.200 €", p: 0,
          fb: "Das wären 12 Gehälter. Das 13. Gehalt gehört zum Angebot: 2.850 € × 13." },
        { t: "39.900 €", p: 0,
          fb: "Das wären 14 Gehälter. Im Angebot stehen 13: 2.850 € × 13 = 37.050 €." },
        { t: "37.050 €", p: 2,
          fb: "Richtig: 2.850 € × 13 = **37.050 €** brutto im Jahr. Das trifft Nadines Wunsch. Angebote immer als **Jahresbrutto** vergleichen." }
      ] },

    { k: "wahl", h: "Befristung und Probezeit – was stimmt?",
      o: [
        { t: "Die Probezeit darf man beliebig lang vereinbaren", p: 0,
          fb: "Nein: Die verkürzte Kündigungsfrist von 2 Wochen gilt höchstens 6 Monate. Nach 6 Monaten im Betrieb greift außerdem – unabhängig von der Probezeit – der **Kündigungsschutz**, wenn der Betrieb mehr als zehn Beschäftigte hat." },
        { t: "Probezeit bis 6 Monate; ohne Sachgrund bis 2 Jahre befristen", p: 2,
          fb: "Richtig: In der **Probezeit** (max. 6 Monate) gilt eine Kündigungsfrist von 2 Wochen (§ 622 Abs. 3 BGB). **Sachgrundlos befristen** geht bis 2 Jahre, bis zu dreimal verlängert (§ 14 Abs. 2 TzBfG)." },
        { t: "Befristungen sind bei neuen Mitarbeitenden verboten", p: 0,
          fb: "Nein, unter Voraussetzungen sind sie erlaubt. Nadine kann aber fragen, wie oft Muldenrad befristete Verträge entfristet." }
      ] },

    { k: "wahl", h: "Was verhandelt sie noch?", b: "Das Gehalt passt. Was ist für Nadine als Einsteigerin am wertvollsten?",
      o: [
        { t: "Gar nichts mehr fragen – sonst wirkt sie gierig", p: 1,
          fb: "Verständlich, aber freundliches Nachfragen ist normal und professionell. Wer nicht fragt, bekommt oft weniger als möglich." },
        { t: "Einen Dienstwagen, wie ihn die Leute im Vertrieb haben", p: 0,
          fb: "Für eine Social-Media-Stelle unüblich und schwer zu begründen. Verhandle, was beim Lernen und Arbeiten wirklich hilft." },
        { t: "Social-Ads-Kurs und fester Homeoffice-Tag im Vertrag", p: 2,
          fb: "Klug: Die Weiterbildung schließt ihre Lücke, ein fester Homeoffice-Tag ist sicherer als „nach Absprache“. Einen gesetzlichen Anspruch auf Homeoffice gibt es nicht – also vereinbaren." }
      ] },

    { k: "szene", h: "Der Vertrag ist da",
      b: "Bevor Nadine unterschreibt, liest sie in Ruhe: Gehalt, Arbeitszeit, Urlaub, Befristung, Homeoffice, Weiterbildung. Steht dort eine **Rückzahlungsklausel** für den Kurs, prüft sie Betrag und Bindungsdauer. Die wesentlichen Bedingungen hält Muldenrad laut **Nachweisgesetz** fest. Die **Befristung** gilt nur, wenn sie vor Arbeitsbeginn schriftlich unterschrieben ist." },

    { k: "frei", h: "Plan für die ersten 100 Tage",
      b: "Nadine will Katja am ersten Tag einen groben **Onboarding-Plan** zeigen. Schreib 3–4 Stichpunkte für die ersten 100 Tage: Was macht sie zuerst, was danach, woran misst sie sich?",
      muster: [
        ["Zuerst: Team, Produkte und Abläufe kennenlernen", "kennenlern|\\bzuhör|\\bgespräche?\\b|\\bteams?\\b|einarbeit|\\bprozess|\\babläuf|freigabe"],
        ["Ist-Analyse der Kanäle", "\\banalys|\\bist-|\\baudit|\\bbestandsaufnahme|kanäle|insights"],
        ["Ziele und KPIs vereinbaren", "\\bziele?\\b|\\bkpis?\\b|\\bsmart|\\bmessen|messbar|kennzahl"],
        ["Redaktionsplan und erste Inhalte", "redaktionsplan|\\bcontent|\\bposts?\\b|\\bbeiträg|\\breels?\\b"],
        ["Weiterbildung und Feedback vor Ende der Probezeit", "weiterbild|\\bkurs(e|es|en)?\\b|\\bads\\b|feedback|probezeit|zwischengespräch"]
      ],
      min: 3,
      bsp: "• Tag 1–30: Team, Produkte und Freigabeprozess kennenlernen, viel zuhören\n• Ist-Analyse: Instagram und LinkedIn auswerten, Ist-Werte festhalten\n• Tag 31–60: SMART-Ziele und KPIs mit Katja vereinbaren, Redaktionsplan starten\n• Tag 61–100: erste Ergebnisse messen, Social-Ads-Kurs, Feedbackgespräch vor Ende der Probezeit" },

    { k: "szene", h: "Erster Arbeitstag", wer: "Katja Riedel, Marketingleiterin",
      b: "Willkommen bei Muldenrad! Ein 100-Tage-Plan am ersten Tag – das hatten wir noch nie. Lassen Sie uns den gleich gemeinsam durchgehen." },

    { k: "fazit", h: "Was du in diesem Training geübt hast",
      l: [
        "Gehaltsspanne aus mehreren Quellen, regional bewertet",
        "Eine begründete Jahresbrutto-Zahl nennen",
        "Angebote als Jahresbrutto vergleichen (× Anzahl Gehälter)",
        "Probezeit, Befristung, Homeoffice, Weiterbildung prüfen",
        "100-Tage-Plan: kennenlernen, analysieren, Ziele, umsetzen"
      ] }
  ]
}
];
