// Praxisprojekte 5 und 6 für „SMM Coach“ (Stand November 2026, deutsches Recht)
// Fiktive Firmen und Personen.
export const PROJEKTE_C = [
{
  id: "fitness",
  titel: "Das große Gewinnspiel",
  firma: "Auwald Fitness, Leipzig (Plagwitz und Connewitz)",
  rolle: "Du übernimmst Social Media für ein Fitnessstudio mit zwei Standorten in Leipzig.",
  kurz: "Gewinnspiel rechtssicher planen und auswerten",
  module: ["unt", "recht", "plan", "kpi"],
  min: 15,
  schritte: [
    { k: "szene", h: "Der Chef hat eine Idee", wer: "Ronny Hentschel, Inhaber",
      b: "Im Januar wollen alle abnehmen. Wir verlosen **ein Jahr Mitgliedschaft**! Mitmachen heißt: liken, kommentieren, teilen und **drei Freunde markieren** – auf Instagram und Facebook. Und wer mitmacht, muss unseren **Newsletter** abonnieren. Bis Februar haben wir 5.000 Follower!" },
    { k: "daten", h: "Ausgangslage im Dezember", l: [
      "Instagram: 2.150 Follower, Facebook: 1.300 Fans",
      "Probetrainings über Social Media: ca. 6 pro Monat",
      "Newsletter: 380 Abonnenten",
      "Mitgliedsbeitrag: 59 € pro Monat",
      "Budget Januar: 300 € Anzeigen plus Gewinn" ] },
    { k: "wahl", h: "Welches Ziel bekommt das Gewinnspiel?",
      b: "Ronny denkt in Followern. Das Studio braucht aber Neumitglieder.",
      o: [
        { t: "Follower auf Instagram bis Ende Februar von 2.150 auf 5.000 steigern", p: 1,
          fb: "Das Ziel ist SMART formuliert, misst aber eine **Vanity Metric**. Gewinnspiel-Follower entfolgen oft wieder und trainieren nie bei euch." },
        { t: "Bis 31. Januar 40 gebuchte Probetrainings über die Gewinnspiel-Seite", p: 2,
          fb: "Richtig: ein **SMART-Ziel**, das direkt am Geschäftserfolg hängt. Probetrainings lassen sich zählen und sind der Schritt vor der Mitgliedschaft." },
        { t: "Im Januar möglichst viel Reichweite und viele Likes für das Studio", p: 0,
          fb: "„Möglichst viel“ ist weder messbar noch terminiert. Am Ende kann niemand sagen, ob das Gewinnspiel erfolgreich war." }
      ] },
    { k: "wahl", h: "Wie läuft die Teilnahme?",
      b: "Ronny will „Teilen“ und „drei Freunde markieren“ als Bedingung – auf beiden Plattformen.",
      o: [
        { t: "Teilnahme per Kommentar; Teilen und Markieren sind keine Bedingung", p: 2,
          fb: "Sicher auf beiden Plattformen. Instagram duldet Markieren in Kommentaren, verbietet aber falsches Markieren. Facebook verbietet Markieren und Teilen als Bedingung (**Promotion-Richtlinien**)." },
        { t: "So übernehmen – das machen doch alle Studios in Leipzig", p: 0,
          fb: "Meta verbietet auf Facebook, die **Chronik** oder **Freunde-Markierungen** für Gewinnspiele zu nutzen. Folge: Beitrag gelöscht, im schlimmsten Fall Reichweitenverlust oder Seitensperre." },
        { t: "Teilnahme nur per E-Mail an das Studio, ohne Social Media", p: 1,
          fb: "Rechtlich unproblematisch, aber ihr verschenkt die Stärke von Social Media: sichtbare Kommentare, Dialog und Reichweite für das Studio." }
      ] },
    { k: "wahl", h: "Und der Newsletter?",
      b: "Ronny: „Ohne Newsletter-Abo keine Teilnahme. Wir brauchen die Adressen!“",
      o: [
        { t: "Newsletter-Haken vorausgewählt, man kann ihn abwählen", p: 0,
          fb: "Ein **vorangekreuztes Kästchen** ist keine wirksame Einwilligung (EuGH, Planet49). Werbe-E-Mails an diese Adressen wären unzulässig (§ 7 UWG)." },
        { t: "Getrenntes, freiwilliges Kästchen auf der Seite, mit Double-Opt-in", p: 2,
          fb: "Richtig: Die Teilnahme hängt nicht an der Werbe-Einwilligung (**Kopplungsverbot**, Art. 7 Abs. 4 DSGVO). Das **Double-Opt-in** belegt die Einwilligung." },
        { t: "Newsletter nur im Beitrag erwähnen und gar keine Adressen sammeln", p: 1,
          fb: "Rechtlich sauber, aber eine Chance vertan. Ein freiwilliges, getrenntes Angebot bringt Adressen, ohne die Einwilligung zu erzwingen." }
      ] },
    { k: "frei", h: "Teilnahmebedingungen",
      b: "Ronny fragt: „Was muss denn da alles rein?“ Nenne in Stichpunkten die wichtigsten Inhalte der **Teilnahmebedingungen** für euer Gewinnspiel.",
      muster: [
        ["Veranstalter mit Anschrift", "\\bveranstalt|\\banschrift|\\badresse|\\bimpressum|\\bgmbh"],
        ["Zeitraum und Teilnahmeschluss", "\\bzeitraum|\\bteilnahmeschluss|\\beinsendeschluss|\\blaufzeit|\\bfrist|\\bdauer|\\bbis\\s+(zum\\s+)?\\d"],
        ["Gewinn, Auslosung und Benachrichtigung", "\\bgewinner|\\bgewinn\\b|\\baus(ge)?los|\\bverlos|\\bziehung|\\bzufall|\\bbenachrichtig|\\bpreis\\b"],
        ["Freistellung der Plattform (Meta/Instagram)", "\\bfreistell|\\bhaftung|\\bsponsert|\\bin\\s+keiner\\s+verbindung|\\bnicht\\s+(mit|von)\\s+(meta|instagram|facebook)"],
        ["Datenschutz und Mindestalter", "\\bdatenschutz|\\bdsgvo|\\bdaten\\b|\\bvolljährig|\\bmindestalter|\\bab\\s+18|\\balter\\b"]
      ],
      min: 3,
      bsp: "• Veranstalter: Auwald Fitness GmbH mit Anschrift\n• Zeitraum: 5. bis 25. Januar, Teilnahme per Kommentar\n• Gewinn: 12 Monate Mitgliedschaft, Auslosung per Zufall\n• Benachrichtigung per Direktnachricht, Frist 7 Tage\n• Teilnahme ab 18 Jahren, keine Barauszahlung\n• Freistellung: Meta/Instagram sponsern und organisieren nicht\n• Datenschutzhinweise mit Link" },
    { k: "wahl", h: "Noch eine Idee vom Chef",
      b: "Ronny: „Lass uns pro Teilnahme 5 € für einen Probetag nehmen. Das deckt den Gewinn!“",
      o: [
        { t: "Gute Idee – 5 € sind so wenig, das stört niemanden", p: 0,
          fb: "Entgelt für eine Gewinnchance plus Zufall ist **Glücksspiel** (§ 3 GlüStV). Ohne Erlaubnis ist das verboten und sogar strafbar – egal wie klein der Einsatz ist." },
        { t: "Kostenlos, aber nur bestehende Mitglieder dürfen teilnehmen", p: 1,
          fb: "Rechtlich in Ordnung, verfehlt aber euer Ziel: Neue Probetrainings entstehen so kaum, ihr belohnt nur die, die schon zahlen." },
        { t: "Teilnahme bleibt kostenlos; der Probetag wird getrennt beworben", p: 2,
          fb: "Richtig: Ohne Einsatz bleibt es ein erlaubtes **Gewinnspiel**. Der Probetag kann trotzdem als eigenes Angebot laufen – nur nicht als Bedingung für die Gewinnchance." }
      ] },
    { k: "daten", h: "Tag 4: Die Kommentare rollen", l: [
      "640 Kommentare, viele Fragen: „Gilt das für beide Studios?“",
      "„Kann ich ohne Instagram mitmachen?“",
      "@kraftwerk_kalle: „Fake! Der Gewinner steht eh schon fest!!“",
      "@kraftwerk_kalle an @lisa.lpz: Beleidigung wegen ihres Gewichts",
      "Dein Postfach: 35 ungelesene Direktnachrichten" ] },
    { k: "wahl", h: "Wie gehst du mit @kraftwerk_kalle um?",
      o: [
        { t: "Ignorieren – Trolle hören von selbst auf, wenn niemand reagiert", p: 0,
          fb: "Die Beleidigung bleibt stehen und Lisa fühlt sich allein gelassen. Ab Kenntnis müsst ihr Rechtsverletzungen **unverzüglich** entfernen." },
        { t: "Beide Kommentare sofort löschen und das Profil blockieren", p: 1,
          fb: "Die Beleidigung muss weg – aber ohne **Screenshot** fehlt der Beleg. Und der Fake-Vorwurf bleibt in den Köpfen, weil niemand sachlich antwortet." },
        { t: "Sichern, Beleidigung laut Netiquette löschen, Fake-Vorwurf beantworten", p: 2,
          fb: "Richtig: Beleidigung sichern und laut **Netiquette** löschen, Kalle nach den Teilnahmebedingungen ausschließen. Auf den Fake-Vorwurf antwortest du offen: Auslosung per Zufall am 26. Januar." }
      ] },
    { k: "wahl", h: "Die Gewinnerin steht fest",
      b: "Die Auslosung ergibt @sophie_runs. Wie benachrichtigst du sie?",
      o: [
        { t: "Per DM vom offiziellen Profil, mit Frist; Name nur mit Zustimmung", p: 2,
          fb: "Richtig: So steht es in euren Teilnahmebedingungen. Weise darauf hin, dass ihr **nie Bank- oder Kartendaten** abfragt – Fake-Profile verschicken oft falsche Gewinnnachrichten." },
        { t: "Im Beitrag ihren vollen Namen und Stadtteil nennen, damit alle es sehen", p: 0,
          fb: "Ohne Einwilligung darfst du den Namen nicht veröffentlichen (Datenschutz). Und volle Namen plus Wohnort locken Betrüger an." },
        { t: "Im Kommentar schreiben: „Melde dich innerhalb von 24 Stunden per DM!“", p: 1,
          fb: "Schnell, aber die Frist ist sehr kurz und unfair, wenn sie nicht in den Bedingungen steht. Besser: aktiv anschreiben und eine angemessene Frist setzen." }
      ] },
    { k: "szene", h: "Mitglieder posten selbst", wer: "Ronny Hentschel, Inhaber",
      b: "Guck mal, unter **#AuwaldChallenge** posten Mitglieder Trainingsfotos und markieren uns. Lade die zehn besten auf unser Profil hoch und nimm sie in die **Januar-Anzeige**. Auf einem Foto sieht man im Hintergrund noch zwei andere Leute an der Hantelbank." },
    { k: "wahl", h: "Wie nutzt du die Mitglieder-Fotos?",
      o: [
        { t: "Herunterladen und hochladen – sie haben uns ja selbst markiert", p: 0,
          fb: "Markieren ist keine Erlaubnis. Wer fremde Fotos **neu hochlädt**, veröffentlicht sie selbst und braucht die Rechte – erst recht für Werbung." },
        { t: "Per DM fragen; ein Daumen-hoch-Emoji reicht auch für die Anzeige", p: 1,
          fb: "Fragen ist gut, aber der Umfang ist unklar: Kanal, Dauer, Werbung? Und die zwei Personen im Hintergrund wurden gar nicht gefragt." },
        { t: "Repost-Funktion nutzen; für die Anzeige schriftliche Erlaubnis aller", p: 2,
          fb: "Richtig: Die **Repost-Funktion** verweist auf das Original. Für Werbung brauchst du **Nutzungsrechte** und die Einwilligung erkennbarer Personen – sonst Hintergrund unkenntlich machen oder zuschneiden." }
      ] },
    { k: "daten", h: "Ergebnis nach vier Wochen", l: [
      "Instagram: 2.150 → 4.050 Follower, 1.480 Teilnahmen",
      "Klicks auf die Gewinnspiel-Seite: 960",
      "Gebuchte Probetrainings: 48",
      "Neue Mitgliedschaften: 12",
      "Kosten: 708 € Gewinn, 300 € Anzeigen, 192 € Grafik = 1.200 €",
      "Zwei Wochen später: 420 Follower wieder weg" ] },
    { k: "wahl", h: "Wie hoch ist die Conversion-Rate von Klick zu Probetraining?",
      b: "Conversion-Rate = Conversions ÷ Klicks × 100",
      o: [
        { t: "20 %", p: 0, fb: "Das wäre 960 ÷ 48 = 20 – Zähler und Nenner vertauscht. Richtig ist 48 ÷ 960 × 100 = 5 %." },
        { t: "5 %", p: 2, fb: "Richtig: 48 ÷ 960 × 100 = **5 %**. Jeder 20. Klick wurde zum Probetraining." },
        { t: "1,2 %", p: 0, fb: "Hier wurden die 12 Mitgliedschaften statt der 48 Probetrainings genommen. Gefragt war Klick zu Probetraining: 48 ÷ 960 × 100 = 5 %." },
        { t: "3,2 %", p: 0, fb: "Das sind Probetrainings im Verhältnis zu den 1.480 Teilnahmen. Gefragt war die Rate bezogen auf die Klicks: 5 %." }
      ] },
    { k: "wahl", h: "Was steht oben in deinem Bericht an Ronny?",
  o: [
    { t: "„1.900 neue Follower – das beste Ergebnis seit Jahren!“", p: 0, fb: "Follower sind hier eine **Vanity Metric**: 420 sind schon wieder weg. Über den Geschäftserfolg sagt die Zahl wenig." },
    { t: "„48 Probetrainings statt 40, 12 Neumitglieder zu 100 € je Mitglied“", p: 2, fb: "Richtig: **Soll-Ist-Vergleich** am Ziel (48 statt 40) und Kosten je Neumitglied (**CPA** = 1.200 € ÷ 12 = 100 €). Weniger als zwei Monatsbeiträge (2 × 59 € = 118 €) – das versteht jeder Inhaber." },
    { t: "„1.480 Teilnahmen und 640 Kommentare schon an Tag 4“", p: 1, fb: "Zeigt Engagement, aber nicht den Erfolg. Kennzahlen gehören in den Anhang, oben steht die Zahl, die am Ziel hängt." }
  ] },
    { k: "fazit", h: "Was du in diesem Projekt angewendet hast", l: [
      "**SMART-Ziel** am Geschäftserfolg statt Follower-Jagd",
      "**Meta-Regeln**: kein Teilen oder Markieren als Bedingung",
      "**Kopplungsverbot** und Double-Opt-in beim Newsletter",
      "Gewinnspiel ohne Einsatz – sonst **Glücksspiel**",
      "Netiquette, UGC-Rechte und **Conversion-Rate** im Bericht" ] }
  ]
},
{
  id: "kanzlei",
  titel: "Expertise auf LinkedIn",
  firma: "Seidel & Hoffmann Steuerberater PartG mbB, Dresden",
  rolle: "Du übernimmst Social Media für eine Steuerberatungskanzlei mit 25 Mitarbeitenden.",
  kurz: "Seriöse B2B-Sichtbarkeit nach Berufsrecht",
  module: ["platt", "unt", "recht", "kpi"],
  min: 15,
  schritte: [
    { k: "szene", h: "Der Auftrag", wer: "Dr. Frank Seidel, Partner",
      b: "Wir brauchen kein **TikTok-Zeug**. Aber uns fehlen zwei Steuerfachangestellte, und wir wollen mehr Mandate aus dem **Mittelstand**. Machen Sie auf LinkedIn etwas Seriöses. Und bitte: Nichts, was uns Ärger mit der Kammer einbringt." },
    { k: "daten", h: "Status quo", l: [
      "Unternehmensseite: 310 Follower, letzter Beitrag vor 8 Monaten",
      "Dr. Seidel: 420 Kontakte, kein Profilfoto",
      "Partnerin Katrin Hoffmann: 1.150 Kontakte, postet ab und zu",
      "Anfragen über die Website: ca. 3 pro Monat",
      "Budget: 6.000 € pro Jahr, du hast 6 Stunden pro Woche" ] },
    { k: "wahl", h: "Wen willst du für neue Mandate erreichen?",
      o: [
        { t: "Alle LinkedIn-Mitglieder in Deutschland, damit die Reichweite stimmt", p: 0,
          fb: "Viel Streuverlust: Die Kanzlei berät vor Ort in Sachsen. Ohne klare **Zielgruppe** passen weder Inhalte noch Anzeigen." },
        { t: "Geschäftsführung und kaufmännische Leitung im sächsischen Mittelstand", p: 2,
          fb: "Richtig: Das sind die **Entscheider** über ein Steuermandat. LinkedIn lässt sich nach Position, Branche, Firmengröße und Region filtern." },
        { t: "BWL-Studierende in Dresden, weil sie später Mandanten werden", p: 1,
          fb: "Passt zum Ziel **Fachkräfte**, aber nicht zu den Mandaten. Für zwei Ziele brauchst du zwei Zielgruppen – und getrennte Kennzahlen." }
      ] },
    { k: "frei", h: "SMART-Ziel formulieren", b: "Die Partner wollen wissen, woran sie den Erfolg erkennen. Formuliere ein **SMART-Ziel** für Mandatsanfragen über LinkedIn.",
  muster: [
    ["Konkrete Zahl an Anfragen, Leads oder Erstgesprächen", "\\b\\d+\\s?(%|prozent|(qualifizierte|neue|zusätzliche|weitere)?\\s?(mandats)?(anfrage|leads?\\b|erstgespr|mandat|kontaktanfrage|gespräch))"],
    ["Klarer Zeitraum oder Termin", "\\bbis\\b|\\bmonat|\\bquartal|\\bhalbjahr|\\bwoche|\\bjahr|\\b20\\d\\d\\b"],
    ["Messgröße: Anfragen, Leads oder Erstgespräche", "\\banfrage|\\bleads?\\b|\\bmandat|\\berstgespr|\\bkontaktanfrage|\\bgespräch"],
    ["Zielgruppe oder Kanal", "\\blinkedin|\\bmittelst|\\bunternehm|\\bgeschäftsführ|\\bentscheider|\\bfirmen"]
  ],
  min: 3,
  bsp: "• Bis 30. Juni 2027 kommen über LinkedIn 12 qualifizierte Mandatsanfragen\n• Zielgruppe: Geschäftsführung mittelständischer Firmen in Sachsen\n• Gemessen über Formular mit UTM-Link und Nachfrage im Erstgespräch\n• Ausgangswert: bisher 0 Anfragen über LinkedIn" },
    { k: "wahl", h: "Unternehmensseite oder persönliche Profile?",
      o: [
        { t: "Nur die Unternehmensseite pflegen – die Partner bleiben außen vor", p: 1,
          fb: "Die Seite ist wichtig, erreicht aber meist weniger Menschen als **Personenprofile**. Vertrauen entsteht bei Steuerberatung über Köpfe." },
        { t: "Unternehmensseite löschen, nur noch die Partner posten lassen", p: 0,
          fb: "Ohne Seite fehlen Stellenanzeigen, Newsletter und ein Ort für die Marke. Und verlässt eine Partnerin die Kanzlei, ist die Reichweite weg." },
        { t: "Beides: Seite als Basis, die Partner als Gesichter der Kanzlei", p: 2,
          fb: "Richtig: Die **Unternehmensseite** trägt Marke, Stellen und Newsletter, die **Personenprofile** bringen Reichweite und Vertrauen. Die Beiträge verweisen aufeinander." }
      ] },
    { k: "szene", h: "Eine Partnerin will loslegen", wer: "Katrin Hoffmann, Partnerin",
      b: "Ich würde gern regelmäßig posten, zum Beispiel zur **E-Rechnung ab 2027**. Aber Frank findet Selfies unprofessionell. Und ehrlich: Ich habe Angst, etwas Falsches zu schreiben. Einige aus dem Team würden auch mitmachen." },
    { k: "wahl", h: "Wie baust du die Corporate Influencer auf?",
      o: [
        { t: "Alle 25 Mitarbeitenden müssen jede Woche einen Kanzlei-Beitrag teilen", p: 0,
          fb: "Pflicht-Posts wirken unecht und sorgen für Unmut. **Corporate Influencer** und **Employee Advocacy** funktionieren nur freiwillig." },
        { t: "Freiwillige Gruppe mit Schulung, Leitlinien und gemeinsamem Themenpool", p: 2,
          fb: "Richtig: ein **Corporate-Influencer-Programm** – freiwillig, mit Schulung und klaren Leitlinien. Das nimmt Katrin die Angst und schützt die Kanzlei." },
        { t: "Nur die Partner posten, das Team schreibt nichts über die Kanzlei", p: 1,
          fb: "Sicher, aber du verschenkst **Employer Branding**: Gerade Steuerfachangestellte überzeugen Bewerbende mit echten Einblicken." }
      ] },
    { k: "wahl", h: "Ein Geschäftsführer meldet sich",
      b: "Der Chef eines Maschinenbauers aus Radebeul kommentiert Katrins Beitrag zur E-Rechnung und schickt ihr eine **Kontaktanfrage**.",
      o: [
        { t: "Annehmen, auf den Kommentar eingehen, eine Checkliste anbieten", p: 2,
          fb: "Richtig: **Social Selling** heißt Beziehung vor Verkauf. Ein Gespräch entsteht, wenn er fragt – das passt auch zum Verbot der Werbung um einen Auftrag im Einzelfall (§ 57a StBerG)." },
        { t: "Sofort per Direktnachricht ein Angebot mit Preisliste schicken", p: 0,
          fb: "Wirkt aufdringlich und kann gezielte **Einzelfallwerbung** sein, die § 57a StBerG Steuerberatern verbietet. Er wollte ins Gespräch kommen, nicht kaufen." },
        { t: "Ignorieren – LinkedIn ist für uns kein Kanal für Mandate", p: 1,
          fb: "Keine Gefahr, aber ein verpasster **Lead**. Genau für solche Kontakte habt ihr LinkedIn gewählt." }
      ] },
    { k: "wahl", h: "Welcher Content-Plan passt?",
      o: [
        { t: "„Wir sind die besten Steuerberater Dresdens!“ als Anzeigenserie", p: 0,
          fb: "Eine **Spitzenstellung** ohne Beleg ist irreführend (§ 5 UWG) und nicht sachlich im Sinne des Berufsrechts (§ 57a StBerG). Ärger mit der Kammer droht." },
        { t: "Jeden Tag ein Link zu einer neuen Gesetzesänderung, ohne Erklärung", p: 1,
          fb: "Fachlich korrekt, aber ohne Nutzen für Entscheider. Es fehlen **Help**-Inhalte, die erklären, und ein **Hub**, der Stammleser bindet." },
        { t: "Hero: Mittelstandstag; Hub: Newsletter; Help: Checklisten-Karussells", p: 2,
          fb: "Richtig: **Hero-Hub-Help**. Ein jährliches Highlight, der **LinkedIn-Newsletter** als Serie und **Karussells** mit Tipps, die gespeichert und geteilt werden." }
      ] },
    { k: "daten", h: "Entwurf der Werkstudentin", l: [
      "„Glückwunsch an unseren Mandanten Bäckerei Hartmann, Pirna!“",
      "„Dank uns 40.000 € Steuern gespart 💪“",
      "Foto: Inhaber mit Katrin Hoffmann vor dem Laden",
      "Geplant: morgen 8 Uhr auf der Unternehmensseite" ] },
    { k: "wahl", h: "Darf der Beitrag so raus?",
  o: [
    { t: "Nur mit schriftlicher Einwilligung und sachlich, sonst anonymer Praxisfall", p: 2, fb: "Richtig: Mandantendaten nur mit **ausdrücklicher Einwilligung**, und auch dann sachlich statt „Dank uns gespart 💪“ (§ 57a StBerG). Ohne Einwilligung wird ein neutraler Fall daraus („Ein Handwerksbetrieb fragte uns …“), ohne Ort, Foto und Betrag." },
    { t: "Ja – der Bäcker freut sich bestimmt über die Werbung", p: 0, fb: "Schon dass jemand Mandant ist, fällt unter die **Verschwiegenheit** (§ 57 StBerG, § 203 StGB). Ohne seine Einwilligung – zum Beweis schriftlich – ist der Beitrag ein Berufsrechtsverstoß." },
    { t: "Name weglassen, aber „Bäcker aus Pirna“ und Betrag behalten", p: 1, fb: "Besser, aber mit Foto und Ort bleibt der Mandant **erkennbar**. Und „dank uns gespart“ ist reißerisch statt sachlich." }
  ] },
    { k: "wahl", h: "Wer verwaltet eigentlich die Seite?",
      b: "Einziger Super-Admin der Unternehmensseite ist ein Ex-Azubi, der im Sommer gekündigt hat.",
      o: [
        { t: "Ein Profil „Kanzlei Admin“ anlegen und das Passwort im Team teilen", p: 0,
          fb: "LinkedIn erlaubt keine Fantasie-Profile – es droht die Sperre. Geteilte Passwörter machen nachvollziehbare Freigaben unmöglich." },
        { t: "Dich als Super-Admin eintragen lassen und den Ex-Azubi entfernen", p: 1,
          fb: "Richtig gedacht, aber wieder hängt alles an einer Person. Wirst du krank oder gehst, steht die Seite erneut ohne Zugang da." },
        { t: "Zwei interne Super-Admins, 2FA und Offboarding-Checkliste", p: 2,
          fb: "Richtig: **mindestens zwei Admins** aus der Kanzlei, **Zwei-Faktor-Anmeldung** und ein **Offboarding**, das Rollen beim Austritt sofort entzieht." }
      ] },
    { k: "frei", h: "Freigabeprozess festlegen",
      b: "Damit so ein Entwurf nicht wieder fast online geht: Beschreibe in Stichpunkten den **Freigabeprozess** für Fachbeiträge – wer macht was (gern als **RACI**)?",
      muster: [
        ["Erstellung durch Social Media/Marketing (R)", "\\berstell|\\bentw(urf|irft|erfen)|\\bschreibt|\\bresponsible|\\(r\\)|\\bmarketing|\\bsocial[- ]media"],
        ["Fachliche Prüfung durch Berufsträger/in", "\\bfachlich|\\bsteuerberater|\\bberufsträger|\\bprüf"],
        ["Endfreigabe durch eine verantwortliche Person (A)", "\\bfreigab|\\bfreigeb|\\baccountable|\\(a\\)|\\bpartner"],
        ["Check auf Verschwiegenheit und Mandantendaten", "\\bmandant|\\bverschwieg|\\bschweige|\\banonym|\\bberufsrecht"],
        ["Vertretung, Frist oder Eskalation", "\\bvertret|\\bfrist|\\bstunden\\b|\\b\\d+\\s*tage?n?\\b|\\beskal|\\bkrise"]
      ],
      min: 3,
      bsp: "• R: Social Media Manager erstellt den Entwurf\n• C: Steuerberaterin prüft fachlich\n• Check: keine Mandantendaten, sachlich (§ 57a StBerG)\n• A: Katrin Hoffmann gibt frei, Vertretung Dr. Seidel\n• Frist: 2 Arbeitstage, Krisen sofort an die Partner\n• I: Kanzleimanagement wird informiert" },
    { k: "daten", h: "Ergebnis nach sechs Monaten", l: [
      "Seite: 310 → 1.240 Follower, davon 41 % Entscheider (Seniorität)",
      "Newsletter: 620 Abonnenten, Karussells mit 6,2 % Engagement-Rate",
      "Mandatsanfragen über LinkedIn: 14, daraus 5 neue Mandate",
      "Bewerbungen: 6, davon 2 Einstellungen",
      "Kosten inkl. Arbeitszeit: 9.000 €",
      "Deckungsbeitrag der 5 Mandate im ersten Jahr: 18.000 €" ] },
    { k: "wahl", h: "Wie hoch ist der ROI bei den Mandaten?",
      b: "ROI = (Ertrag − Kosten) ÷ Kosten × 100",
      o: [
        { t: "200 %", p: 0, fb: "Das wäre Ertrag ÷ Kosten × 100. Beim ROI werden erst die Kosten abgezogen: (18.000 − 9.000) ÷ 9.000 × 100 = 100 %." },
        { t: "50 %", p: 0, fb: "Hier wurde durch den Ertrag statt durch die Kosten geteilt. Richtig: 9.000 ÷ 9.000 × 100 = 100 %." },
        { t: "100 %", p: 2, fb: "Richtig: (18.000 − 9.000) ÷ 9.000 × 100 = **100 %**. Jeder investierte Euro kam doppelt zurück – die Einstellungen sind noch nicht mitgerechnet." },
        { t: "2", p: 0, fb: "Das ist das Verhältnis Ertrag zu Kosten, wie beim **ROAS**. Der ROI zieht die Kosten ab und wird in Prozent angegeben: 100 %." }
      ] },
    { k: "fazit", h: "Was du in diesem Projekt angewendet hast", l: [
      "**Entscheider** als Zielgruppe und ein SMART-Ziel für Anfragen",
      "Unternehmensseite plus **Corporate Influencer**, freiwillig und geschult",
      "**Social Selling** und Hero-Hub-Help statt Werbesprüche",
      "Verschwiegenheit und sachliche Werbung nach **§ 57a StBerG**",
      "Governance: RACI, zwei Admins, 2FA – und **ROI** messen" ] }
  ]
}
];
