// Lerninhalte SMM Coach. Aufbau je Modul: Lektionen (Story-Folien) → Quiz.
// Folientypen: intro, text, liste, beispiel, merke, check (Verständnisfrage, Index c = richtige Antwort).
// **fett** ist erlaubt. Rechtliche Inhalte: Stand 11/2026, vor Veröffentlichung fachlich prüfen lassen.

export const MODULE = [
{
 id: "grund", name: "Grundlagen & Strategie", kurz: "Strategie", farbe: "#ff5a5f",
 text: "Was Social Media Manager tun, wie man Ziele setzt und eine Strategie aufbaut.",
 lektionen: [
  { id: "rolle", titel: "Die Rolle des Social Media Managers", min: 3, folien: [
   { k: "intro", h: "Mehr als nur Posten", b: "Social Media Management heißt: Kanäle **strategisch** für Unternehmensziele einsetzen – planen, umsetzen, messen, verbessern." },
   { k: "liste", h: "Typische Aufgaben", l: ["Strategie und Ziele entwickeln", "Inhalte planen, erstellen und veröffentlichen", "Community betreuen und auf Kommentare reagieren", "Kennzahlen auswerten und berichten", "Kampagnen und Werbebudget steuern", "Rechtliche Vorgaben einhalten"] },
   { k: "text", h: "Schnittstelle im Unternehmen", b: "Social Media berührt fast alle Abteilungen: **Marketing** (Reichweite, Leads), **Vertrieb** (Anfragen), **HR** (Recruiting, Employer Branding), **Kundenservice** (Fragen, Beschwerden) und die **Geschäftsführung** (Ziele, Freigaben)." },
   { k: "merke", h: "Merke", b: "Social Media ist kein Selbstzweck. Jede Maßnahme muss auf ein **Unternehmensziel** einzahlen." },
   { k: "check", q: "Was ist die wichtigste Grundlage für Social-Media-Aktivitäten eines Unternehmens?", a: ["Die Ziele des Unternehmens", "Die neuesten Trends auf TikTok", "Die Anzahl der Follower der Konkurrenz", "Möglichst viele Kanäle gleichzeitig"], c: 0, e: "Erst die Ziele, dann die Maßnahmen. Trends und Konkurrenz sind Inspiration, aber keine Grundlage." }
  ]},
  { id: "ziele", titel: "Ziele setzen mit SMART", min: 4, folien: [
   { k: "intro", h: "Ohne Ziel kein Erfolg", b: "Nur wer weiß, wohin er will, kann messen, ob er angekommen ist. Deshalb formulieren Profis Ziele nach der **SMART-Regel**." },
   { k: "liste", h: "SMART heißt …", l: ["**S**pezifisch – klar und eindeutig", "**M**essbar – mit Zahl", "**A**ttraktiv / akzeptiert – lohnt sich für das Team", "**R**ealistisch – mit den Ressourcen erreichbar", "**T**erminiert – mit Enddatum"] },
   { k: "beispiel", h: "Unscharf vs. SMART", b: "❌ „Wir wollen auf LinkedIn bekannter werden.“\n\n✅ „Bis 30. Juni steigern wir die Reichweite unserer LinkedIn-Unternehmensseite von 5.000 auf 8.000 erreichte Personen pro Monat.“" },
   { k: "text", h: "Typische Ziele", b: "**Bekanntheit** (Reichweite), **Image** (Stimmung, Interaktion), **Traffic** (Klicks zur Website), **Leads und Verkäufe**, **Mitarbeitergewinnung** (Bewerbungen), **Kundenbindung** und **Service**." },
   { k: "check", q: "Welches Ziel ist SMART formuliert?", a: ["Bis 31.03. erhalten wir über Instagram 15 Bewerbungen für Ausbildungsplätze.", "Wir wollen mehr Bewerbungen bekommen.", "Instagram soll cooler werden.", "Wir posten so oft wie möglich."], c: 0, e: "Es ist spezifisch (Bewerbungen, Ausbildung), messbar (15), terminiert (31.03.) und mit einem Kanal verknüpft." }
  ]},
  { id: "persona", titel: "Zielgruppe & Persona", min: 3, folien: [
   { k: "intro", h: "Für wen machen wir das?", b: "Wer alle ansprechen will, erreicht niemanden. Eine **Persona** macht die Zielgruppe greifbar – als fiktive, aber typische Person." },
   { k: "liste", h: "Was in eine Persona gehört", l: ["Name, Alter, Wohnort, Beruf", "Ziele und Wünsche", "Probleme und Fragen („Pain Points“)", "Welche Plattformen sie wann nutzt", "Was sie von uns braucht"] },
   { k: "beispiel", h: "Beispiel-Persona", b: "**Lena, 17, Schülerin in Leipzig.** Sucht einen Ausbildungsplatz, ist unsicher, welcher Beruf passt. Nutzt TikTok und Instagram täglich, vor allem abends. Wünscht sich ehrliche Einblicke von Azubis statt Werbesprech." },
   { k: "text", h: "Woher kommen die Infos?", b: "Nicht raten, sondern belegen: **Kundendaten**, **Plattform-Statistiken** (Insights), **Befragungen**, Gespräche mit Vertrieb und Kundenservice, **Studien** zur Mediennutzung." },
   { k: "check", q: "Wofür nutzt man eine Persona vor allem?", a: ["Um Inhalte, Ton und Kanäle auf die Zielgruppe auszurichten", "Als Pseudonym für das Unternehmensprofil", "Um Marktforschung komplett zu ersetzen", "Als Pflichtangabe im Impressum"], c: 0, e: "Die Persona hilft bei jeder Entscheidung: Würde Lena das lesen? Auf welchem Kanal? In welchem Ton?" }
  ]},
  { id: "strategie", titel: "Der Strategie-Prozess", min: 4, folien: [
   { k: "intro", h: "Von der Analyse zum Plan", b: "Eine Social-Media-Strategie folgt einem klaren Ablauf. Genau diesen Ablauf zeigst du auch in deiner **Abschlusspräsentation**." },
   { k: "liste", h: "Die 7 Schritte", l: ["1. Analyse der Ausgangslage (Ist-Zustand, Wettbewerb)", "2. Ziele (SMART)", "3. Zielgruppe / Persona", "4. Kanäle auswählen und begründen", "5. Inhalte & Redaktionsplan", "6. Budget & Ressourcen", "7. Kennzahlen & Erfolgsmessung"] },
   { k: "text", h: "Owned, Paid, Earned", b: "**Owned Media**: eigene Kanäle (Profile, Website, Newsletter). **Paid Media**: bezahlte Reichweite (Anzeigen, Influencer). **Earned Media**: Reichweite, die andere freiwillig erzeugen (Shares, Erwähnungen, Presse, Bewertungen)." },
   { k: "text", h: "Social-Media-Guidelines", b: "Regeln für Mitarbeitende: Was ist vertraulich? Wie mache ich kenntlich, dass ich für das Unternehmen spreche? Wer antwortet auf Kritik? Guidelines geben **Sicherheit statt Verbote**." },
   { k: "merke", h: "Merke", b: "Erst analysieren und Ziele setzen – dann erst über Kanäle und Inhalte entscheiden." },
   { k: "check", q: "Ein begeisterter Kunde teilt euren Beitrag und lobt euch. Was ist das?", a: ["Earned Media", "Paid Media", "Owned Media", "Social Advertising"], c: 0, e: "Die Reichweite wurde nicht bezahlt und entsteht nicht auf eurem Kanal – sie wurde „verdient“." }
  ]}
 ]
},
{
 id: "platt", name: "Plattformen", kurz: "Plattformen", farbe: "#ff9f1c",
 text: "LinkedIn, Instagram, TikTok, YouTube & Co. – was passt zu welchem Ziel?",
 lektionen: [
  { id: "linkedin", titel: "LinkedIn & B2B", min: 3, folien: [
   { k: "intro", h: "Das Business-Netzwerk", b: "LinkedIn ist die wichtigste Plattform für **B2B-Kommunikation**, Fachthemen und **Recruiting** von Fach- und Führungskräften." },
   { k: "text", h: "Personen- vs. Unternehmensprofil", b: "**Unternehmensseiten** stehen für die Marke. **Personenprofile** (z. B. Geschäftsführung, Mitarbeitende) erzielen oft deutlich mehr Reichweite und Vertrauen – Stichwort **Corporate Influencer**." },
   { k: "liste", h: "Was auf LinkedIn funktioniert", l: ["Fachwissen und Praxis-Einblicke", "Erfolgsgeschichten mit Kunden", "Persönliche Beiträge von Mitarbeitenden", "Dokumente/Karussells mit Tipps", "Stellenangebote mit Gesicht"] },
   { k: "text", h: "Profil optimieren", b: "Vollständiges Profil, klares Titelbild, aussagekräftige Kurzbeschreibung mit **Suchbegriffen**, Link zur Website. So wird man gefunden." },
   { k: "check", q: "Ein Maschinenbauer sucht Ingenieurinnen. Welcher Kanal ist meist die erste Wahl?", a: ["LinkedIn", "Pinterest", "Snapchat", "Twitch"], c: 0, e: "Auf LinkedIn sind Fachkräfte mit ihrem beruflichen Profil unterwegs – ideal für Recruiting und B2B." }
  ]},
  { id: "insta-tiktok", titel: "Instagram, TikTok & B2C", min: 4, folien: [
   { k: "intro", h: "Visuell, schnell, emotional", b: "Instagram und TikTok leben von **Bildern und kurzen Videos**. Ideal für Marken, Produkte, Einblicke hinter die Kulissen und junge Zielgruppen." },
   { k: "text", h: "Instagram", b: "Formate: **Beiträge** und **Karussells**, **Reels** (Kurzvideos), **Stories** (24 Stunden sichtbar), Live. Ein **Business- oder Creator-Konto** liefert Statistiken und Werbefunktionen." },
   { k: "text", h: "TikTok", b: "Der „Für dich“-Feed verteilt Videos nach **Interesse**, nicht nach Follower-Zahl. Auch neue Accounts können so schnell Reichweite bekommen. Authentisch schlägt hochglanzpoliert." },
   { k: "beispiel", h: "Beispiel Bäckerei", b: "Reel: „Um 3 Uhr morgens in der Backstube“ – 20 Sekunden, Musik, Text-Overlay. Zeigt Handwerk, macht Lust auf Brötchen und spricht nebenbei mögliche Azubis an." },
   { k: "merke", h: "Merke", b: "Die ersten **1–2 Sekunden** eines Videos entscheiden, ob jemand weiterschaut. Starte mit dem spannendsten Moment." },
   { k: "check", q: "Was ist an TikTok besonders?", a: ["Videos werden stark nach Interesse ausgespielt, auch ohne viele Follower", "Es sind nur Textbeiträge möglich", "Beiträge sehen nur Follower", "Werbung ist dort verboten"], c: 0, e: "Der Algorithmus zeigt Inhalte allen, die sich dafür interessieren könnten – eine Chance für kleine Accounts." }
  ]},
  { id: "kanalwahl", titel: "YouTube, Facebook & die Kanalwahl", min: 3, folien: [
   { k: "text", h: "YouTube", b: "YouTube ist auch eine **Suchmaschine**. Tutorials, Erklärvideos und Produkt-Demos werden oft noch Jahre später gefunden. Zusätzlich: **Shorts** als Kurzvideo-Format." },
   { k: "text", h: "Facebook", b: "Stark bei älteren Zielgruppen, in **Gruppen** und bei **lokalen** Themen (Vereine, Veranstaltungen, regionale Händler). Wichtig auch als Werbenetzwerk zusammen mit Instagram." },
   { k: "liste", h: "So wählst du Kanäle aus", l: ["Wo ist meine Zielgruppe aktiv?", "Welches Ziel erfülle ich dort?", "Passt das Format zu meinen Inhalten?", "Habe ich genug Zeit und Personal?", "Was macht die Konkurrenz – und was nicht?"] },
   { k: "merke", h: "Merke", b: "Lieber **zwei Kanäle gut** als fünf halbherzig. Im Fachgespräch musst du jede Kanalwahl begründen – auch, warum du andere weglässt." },
   { k: "check", q: "Ein Möbelhaus will Kunden mit Aufbau-Anleitungen helfen, die lange auffindbar bleiben. Bester Kanal?", a: ["YouTube", "Instagram Stories", "X (Twitter)", "WhatsApp-Status"], c: 0, e: "Anleitungen werden gesucht – auf YouTube bleiben sie dauerhaft auffindbar. Stories verschwinden nach 24 Stunden." }
  ]}
 ]
},
{
 id: "content", name: "Content & Community", kurz: "Content", farbe: "#e83e8c",
 text: "Gute Inhalte planen, Geschichten erzählen und Communitys sicher führen.",
 lektionen: [
  { id: "content-strategie", titel: "Inhalte, die wirken", min: 4, folien: [
   { k: "intro", h: "Content ist König …", b: "… aber nur, wenn er zur Zielgruppe passt. Gute Inhalte **informieren, unterhalten oder helfen** – idealerweise mehreres davon." },
   { k: "text", h: "Themensäulen", b: "Lege 3–5 feste **Themensäulen** fest, z. B. für einen Handwerksbetrieb: **Projekte** (vorher/nachher), **Team** (Menschen hinter dem Betrieb), **Tipps** (Pflege, Wartung), **Ausbildung**. So bleibt der Kanal erkennbar." },
   { k: "text", h: "Storytelling", b: "Menschen erinnern sich an Geschichten, nicht an Datenblätter. Bewährter Aufbau: **Person – Problem – Lösung – Ergebnis**." },
   { k: "beispiel", h: "Beispiel Storytelling", b: "Statt „Wir bieten Heizungswartung an“: „Familie Krause saß im Januar ohne Warmwasser. Unser Azubi Tom fand den Fehler in 20 Minuten. Jetzt ist es wieder warm – und Tom stolz.“" },
   { k: "text", h: "User Generated Content", b: "Inhalte von Kundinnen und Kunden (Fotos, Videos, Bewertungen) wirken besonders glaubwürdig. **Aber:** Vor dem Teilen immer um Erlaubnis fragen." },
   { k: "check", q: "Was beschreibt eine Themensäule?", a: ["Ein festes, wiederkehrendes Themenfeld des Kanals", "Eine bezahlte Anzeige", "Das Logo im Profilbild", "Ein Hashtag mit vielen Followern"], c: 0, e: "Themensäulen geben dem Kanal ein Profil und erleichtern die Planung." }
  ]},
  { id: "redaktion", titel: "Redaktionsplan & Workflow", min: 3, folien: [
   { k: "intro", h: "Planen statt hetzen", b: "Ein **Redaktionsplan** legt fest, welche Inhalte wann auf welchem Kanal erscheinen – und wer dafür zuständig ist." },
   { k: "liste", h: "Spalten im Redaktionsplan", l: ["Datum und Uhrzeit", "Kanal und Format", "Thema / Themensäule", "Text, Hashtags, Link", "Verantwortliche Person", "Status (Idee, in Arbeit, Freigabe, veröffentlicht)"] },
   { k: "text", h: "Freigabeprozess", b: "Wer darf was veröffentlichen? Ein klarer **Freigabeweg** (z. B. Social Media Manager → Fachabteilung → Geschäftsführung bei heiklen Themen) verhindert Fehler und Verzögerungen." },
   { k: "merke", h: "Profi-Tipp", b: "**Content recyceln**: Aus einem Video werden ein Reel, ein LinkedIn-Post, eine Story und ein Zitat-Bild. Das spart viel Zeit." },
   { k: "check", q: "Was gehört NICHT zwingend in einen Redaktionsplan?", a: ["Die Gehälter des Teams", "Kanal und Format", "Veröffentlichungstermin", "Verantwortliche Person"], c: 0, e: "Der Redaktionsplan organisiert Inhalte, Termine und Zuständigkeiten – nicht das Personalbudget." }
  ]},
  { id: "community", titel: "Community Management & Krisen", min: 4, folien: [
   { k: "intro", h: "Social heißt: Dialog", b: "Wer postet, bekommt Reaktionen. **Community Management** heißt: zuhören, antworten, moderieren – freundlich, schnell und im Ton der Marke." },
   { k: "text", h: "Umgang mit Kritik", b: "Berechtigte Kritik **nicht löschen** – das wirkt wie Zensur und kann eskalieren. Besser: zügig und sachlich antworten, Fehler eingestehen, Lösung anbieten, bei Bedarf in die Direktnachricht wechseln." },
   { k: "text", h: "Wann löschen erlaubt ist", b: "Beleidigungen, Hetze, Spam oder rechtswidrige Inhalte darfst und solltest du entfernen. Dafür hilft eine öffentliche **Netiquette** (Diskussionsregeln) auf dem Kanal." },
   { k: "liste", h: "Shitstorm – was tun?", l: ["Ruhe bewahren, Lage einschätzen", "Krisenplan aktivieren, intern abstimmen", "Schnell eine erste Reaktion zeigen", "Sachlich bleiben, Fehler zugeben", "Nicht diskutieren, wer „angefangen“ hat", "Hinterher auswerten und lernen"] },
   { k: "merke", h: "Merke", b: "Den **Krisenplan** schreibt man, bevor die Krise kommt: Wer entscheidet? Wer gibt frei? Welche Kernbotschaften gelten?" },
   { k: "check", q: "Eine Kundin kritisiert öffentlich und zu Recht eine lange Lieferzeit. Beste Reaktion?", a: ["Schnell, freundlich antworten und eine Lösung anbieten", "Kommentar löschen", "Nicht reagieren", "Öffentlich widersprechen"], c: 0, e: "Eine gute Antwort auf Kritik kann sogar Vertrauen schaffen – andere sehen, wie ihr mit Problemen umgeht." }
  ]}
 ]
},
{
 id: "kpi", name: "Monitoring & KPIs", kurz: "KPIs", farbe: "#7048e8",
 text: "Kennzahlen verstehen, Erfolg messen und Berichte mit Empfehlungen schreiben.",
 lektionen: [
  { id: "kennzahlen", titel: "Die wichtigsten Kennzahlen", min: 4, folien: [
   { k: "intro", h: "Was man misst, kann man verbessern", b: "**KPIs** (Key Performance Indicators) zeigen, ob du deine Ziele erreichst. Wichtig ist, die richtigen auszuwählen." },
   { k: "text", h: "Reichweite vs. Impressionen", b: "**Reichweite** = Anzahl der Personen, die einen Inhalt gesehen haben. **Impressionen** = wie oft er insgesamt angezeigt wurde. Sieht Lena den Beitrag dreimal: 1 Reichweite, 3 Impressionen." },
   { k: "text", h: "Engagement-Rate", b: "Interaktionen (Likes, Kommentare, Shares, Saves) im Verhältnis zur Reichweite oder zur Follower-Zahl:\n\n**Interaktionen ÷ Reichweite × 100**\n\nBeispiel: 60 Interaktionen bei 2.000 Reichweite = **3 %**." },
   { k: "text", h: "Click-Through-Rate (CTR)", b: "Wie viele klicken auf den Link?\n\n**Klicks ÷ Impressionen × 100**\n\nBeispiel: 50 Klicks bei 5.000 Impressionen = **1 %**." },
   { k: "merke", h: "Vorsicht, Vanity Metrics", b: "Follower und Likes sehen gut aus, sagen aber wenig über den Geschäftserfolg. Wähle KPIs, die **direkt am Ziel** hängen: Bewerbungen, Anfragen, Verkäufe." },
   { k: "check", q: "Ein Beitrag erreicht 4.000 Personen und bekommt 200 Interaktionen. Engagement-Rate (auf Reichweite)?", a: ["5 %", "2 %", "20 %", "0,5 %"], c: 0, e: "200 ÷ 4.000 × 100 = 5 %." }
  ]},
  { id: "monitoring", titel: "Monitoring vs. Reporting", min: 3, folien: [
   { k: "text", h: "Monitoring (Social Listening)", b: "Laufend beobachten, **was über uns gesagt wird**: Erwähnungen, Stimmung, Fragen, Kritik – auch außerhalb der eigenen Kanäle, z. B. über Marke, Produkte, Wettbewerber und Branche." },
   { k: "text", h: "Reporting", b: "Regelmäßig auswerten, **ob wir unsere Ziele erreichen**: eigene Kennzahlen sammeln, vergleichen, interpretieren und daraus Maßnahmen ableiten – z. B. monatlich." },
   { k: "liste", h: "Woher kommen die Daten?", l: ["Plattform-Statistiken (Insights, Analytics)", "Monitoring-Tools für Erwähnungen", "Web-Analyse (z. B. Klicks, Anfragen)", "Daten aus Vertrieb und HR (Leads, Bewerbungen)"] },
   { k: "check", q: "Du prüfst täglich, wie in Foren und Netzwerken über eure Marke gesprochen wird. Das ist …", a: ["Monitoring", "Reporting", "Retargeting", "Storytelling"], c: 0, e: "Monitoring beobachtet Gespräche und Stimmung. Reporting wertet die eigenen Ziel-Kennzahlen aus." }
  ]},
  { id: "report", titel: "Ein Reporting, das überzeugt", min: 3, folien: [
   { k: "intro", h: "Zahlen allein reichen nicht", b: "Die Geschäftsführung will wissen: **Was bedeutet das – und was tun wir jetzt?**" },
   { k: "liste", h: "Aufbau eines guten Reports", l: ["Ziele und Zeitraum", "Kennzahlen im Vergleich (Vormonat, Ziel)", "Top- und Flop-Beiträge", "Interpretation: Warum ist das so?", "Handlungsempfehlungen"] },
   { k: "beispiel", h: "Zahl → Bedeutung → Maßnahme", b: "„Reels erzielen doppelt so viel Reichweite wie Bildbeiträge. → Kurzvideo passt zu unserer Zielgruppe. → Nächsten Monat zwei statt ein Reel pro Woche, dafür ein Bildbeitrag weniger.“" },
   { k: "check", q: "Was macht ein Reporting wertvoll?", a: ["Interpretation und konkrete Empfehlungen", "Möglichst viele Screenshots", "Nur die besten Zahlen", "Eine lange Liste aller Beiträge"], c: 0, e: "Ein Report soll Entscheidungen ermöglichen – dafür braucht es Einordnung und Empfehlungen." }
  ]}
 ]
},
{
 id: "ads", name: "Kampagnen & Budget", kurz: "Kampagnen", farbe: "#1c7ed6",
 text: "Social Ads, Zielgruppen-Targeting, Tests und eine realistische Budgetplanung.",
 lektionen: [
  { id: "ads-basis", titel: "Social Ads verstehen", min: 4, folien: [
   { k: "intro", h: "Reichweite kaufen – gezielt", b: "Organische Reichweite ist begrenzt. Mit **Anzeigen** erreichst du genau die Menschen, die du ansprechen willst." },
   { k: "text", h: "Kampagnenziel zuerst", b: "Werbeplattformen fragen zuerst nach dem Ziel, z. B. bei Meta: **Bekanntheit, Traffic, Interaktionen, Leads, App-Werbung, Umsatz**. Das Ziel bestimmt, wem die Anzeige gezeigt wird." },
   { k: "liste", h: "Targeting-Möglichkeiten", l: ["Demografie (Alter, Ort, Sprache)", "Interessen und Verhalten", "Custom Audiences (z. B. Website-Besucher)", "Lookalike Audiences („ähnliche Zielgruppen“)", "Auf LinkedIn: Jobtitel, Branche, Unternehmensgröße"] },
   { k: "text", h: "Retargeting", b: "Menschen erneut ansprechen, die schon Kontakt hatten – z. B. die Website besucht haben. Wichtig: Tracking (z. B. ein Pixel) braucht in der Regel eine **Einwilligung** im Cookie-Banner." },
   { k: "check", q: "Was ist eine Lookalike Audience?", a: ["Eine Zielgruppe, die bestehenden Kunden ähnlich ist", "Eine Gruppe gefälschter Profile", "Alle Follower der Konkurrenz", "Eine Zielgruppe nur aus Mitarbeitenden"], c: 0, e: "Die Plattform sucht Menschen mit ähnlichen Merkmalen wie eine Ausgangsgruppe, z. B. bestehende Kunden." }
  ]},
  { id: "ads-kpi", titel: "Werbe-Kennzahlen & Tests", min: 3, folien: [
   { k: "text", h: "Was kostet es?", b: "**CPM** = Kosten pro 1.000 Impressionen.\n**CPC** = Kosten pro Klick.\n**CPL** = Kosten pro Lead (z. B. Anfrage, Bewerbung).\n\nBeispiel: 200 € für 40 Bewerbungen = **5 € CPL**." },
   { k: "text", h: "Conversion-Rate", b: "Wie viele der Besucher tun das Gewünschte?\n\n**Conversions ÷ Klicks × 100**\n\nBeispiel: 300 Klicks, 15 Anfragen = **5 %**." },
   { k: "text", h: "A/B-Test", b: "Zwei Varianten einer Anzeige gegeneinander testen, die sich in **genau einem Merkmal** unterscheiden (Bild **oder** Text **oder** Zielgruppe). Sonst weißt du nicht, was den Unterschied gemacht hat." },
   { k: "check", q: "Du gibst 50 € aus und erhältst 10.000 Impressionen. Wie hoch ist der CPM?", a: ["5 €", "0,50 €", "50 €", "500 €"], c: 0, e: "50 € ÷ 10.000 × 1.000 = 5 €." }
  ]},
  { id: "budget", titel: "Kampagnen & Budget planen", min: 3, folien: [
   { k: "intro", h: "Was kostet Social Media wirklich?", b: "Viele denken nur an das Werbebudget. Im Fachgespräch wird gern nach der **vollständigen Kostenstruktur** gefragt." },
   { k: "liste", h: "Kostenblöcke", l: ["Werbebudget (Ads)", "Produktion (Fotos, Videos, Grafik)", "Personal / Arbeitszeit intern", "Tools (Planung, Design, Monitoring)", "Externe Dienstleister (Agentur, Freelancer)"] },
   { k: "liste", h: "Kampagne planen", l: ["Ziel und KPI festlegen", "Zielgruppe und Kanäle wählen", "Botschaft und Motive entwickeln", "Zeitraum und Budget festlegen", "Testen, auswerten, optimieren"] },
   { k: "merke", h: "Merke", b: "Mit einem **Testbudget** starten, Ergebnisse messen – und erst dann das Budget für die besten Anzeigen erhöhen." },
   { k: "check", q: "Was wird bei der Budgetplanung am häufigsten vergessen?", a: ["Interne Arbeitszeit und Produktion", "Das Werbebudget", "Die Kampagnenlaufzeit", "Die Zielgruppe"], c: 0, e: "Fotos, Videos und die eigene Arbeitszeit kosten oft mehr als die Anzeigen selbst." }
  ]}
 ]
},
{
 id: "recht", name: "Recht", kurz: "Recht", farbe: "#2f9e44",
 text: "Impressum, Werbekennzeichnung, Bildrechte, Datenschutz, Gewinnspiele und KI.",
 lektionen: [
  { id: "impressum", titel: "Impressum & Werbekennzeichnung", min: 4, folien: [
   { k: "intro", h: "Rechtssicher auftreten", b: "Auch auf Social Media gelten Gesetze. Wer gegen Pflichten verstößt, riskiert **Abmahnungen** – teuer und ärgerlich." },
   { k: "text", h: "Impressumspflicht", b: "Geschäftlich genutzte Profile brauchen ein Impressum. Rechtsgrundlage ist seit Mai 2024 **§ 5 Digitale-Dienste-Gesetz (DDG)**, das die Regel aus dem Telemediengesetz abgelöst hat." },
   { k: "liste", h: "Das Impressum muss …", l: ["leicht erkennbar sein", "unmittelbar erreichbar sein (in wenigen Klicks)", "ständig verfügbar sein", "Praxis: Link in der Profil-Info, z. B. „Impressum: firma.de/impressum“"] },
   { k: "text", h: "Werbung kennzeichnen", b: "Bezahlte oder gesponserte Inhalte müssen **klar als Werbung erkennbar** sein (Gesetz gegen unlauteren Wettbewerb, Medienstaatsvertrag). Am besten deutlich „Werbung“ oder „Anzeige“ am Anfang – oder die Kennzeichnungsfunktion der Plattform." },
   { k: "check", q: "Welches Gesetz regelt heute die Impressumspflicht für Online-Angebote?", a: ["Digitale-Dienste-Gesetz (DDG)", "Telemediengesetz (TMG)", "Handelsgesetzbuch (HGB)", "Bundesdatenschutzgesetz (BDSG)"], c: 0, e: "Das TMG wurde 2024 durch das DDG abgelöst. Die Impressumspflicht steht jetzt in § 5 DDG." }
  ]},
  { id: "bildrechte", titel: "Urheber- & Bildrechte", min: 3, folien: [
   { k: "intro", h: "Nicht alles ist frei", b: "Fotos, Videos, Musik und Texte sind fast immer **urheberrechtlich geschützt**. „Im Internet gefunden“ heißt nicht „frei nutzbar“." },
   { k: "text", h: "Nutzungsrechte", b: "Du brauchst eine **Lizenz** oder Erlaubnis. Eine Quellenangabe allein reicht nicht. Sicher sind: eigene Inhalte, lizenzierte Stockfotos, Musik aus der Bibliothek der Plattform (für den vorgesehenen Zweck)." },
   { k: "text", h: "Recht am eigenen Bild", b: "Wer erkennbar abgebildet ist, muss in der Regel **einwilligen** – auch Mitarbeitende. Am besten schriftlich, mit Hinweis auf das Widerrufsrecht. Das gehört auch zum Datenschutz (DSGVO)." },
   { k: "merke", h: "Merke", b: "Vor dem Posten fragen: **Wem gehört der Inhalt?** Und: **Ist jemand erkennbar zu sehen?**" },
   { k: "check", q: "Darfst du ein Foto aus der Google-Bildersuche posten, wenn du die Quelle nennst?", a: ["Nein, ohne Nutzungsrecht ist das meist verboten", "Ja, mit Quellenangabe immer", "Ja, wenn man es verkleinert", "Ja, wenn es älter als ein Jahr ist"], c: 0, e: "Die Quellenangabe ersetzt keine Lizenz. Ohne Erlaubnis droht eine Abmahnung." }
  ]},
  { id: "datenschutz", titel: "Datenschutz, Gewinnspiele & KI", min: 4, folien: [
   { k: "text", h: "Gemeinsame Verantwortung", b: "Der EuGH hat 2018 entschieden: Betreiber einer Facebook-Fanpage sind **gemeinsam mit Facebook** (heute Meta) für den Datenschutz verantwortlich. Deshalb brauchen Unternehmensprofile passende **Datenschutzhinweise**." },
   { k: "liste", h: "Rechtssicheres Gewinnspiel", l: ["Teilnahmebedingungen: Veranstalter, Zeitraum, Teilnahme, Gewinn, Auswahl der Gewinner", "Datenschutzhinweise", "Regeln der Plattform beachten (z. B. Hinweis, dass die Plattform nicht beteiligt ist)", "Keine versteckte Kaufpflicht"] },
   { k: "text", h: "KI-Inhalte", b: "Die **EU-KI-Verordnung** verlangt Transparenz: Realistische KI-Bilder oder -Videos, die echte Personen, Orte oder Ereignisse täuschend echt zeigen („Deepfakes“), müssen **als KI-generiert offengelegt** werden. Dazu kommen Persönlichkeits- und Urheberrechte." },
   { k: "merke", h: "Merke", b: "Recht ist im Abschlussprojekt ein eigener Baustein: Impressum, Datenschutz, Bildrechte, Werbekennzeichnung, Gewinnspiele, KI." },
   { k: "check", q: "Wer ist laut EuGH für den Datenschutz einer Facebook-Fanpage verantwortlich?", a: ["Der Seitenbetreiber gemeinsam mit Meta", "Nur Meta", "Nur die Fans", "Niemand"], c: 0, e: "Gemeinsame Verantwortlichkeit (EuGH, 2018) – deshalb braucht ihr Datenschutzhinweise für euer Profil." }
  ]}
 ]
}
];

// Quizfragen je Modul (zusätzlich zu den Verständnisfragen in den Lektionen). c = Index der richtigen Antwort.
export const FRAGEN = [
{m:"grund",q:"Wofür steht das „T“ in SMART?",a:["Terminiert","Teamfähig","Transparent","Technisch"],c:0,e:"Ein SMART-Ziel hat ein klares Enddatum."},
{m:"grund",q:"Was ist „Owned Media“?",a:["Eigene Kanäle wie Unternehmensprofil, Website, Newsletter","Bezahlte Anzeigen","Erwähnungen durch Kunden","Presseartikel über das Unternehmen"],c:0,e:"Owned = gehört dir. Paid = bezahlt. Earned = verdient."},
{m:"grund",q:"Was ist der erste Schritt einer Social-Media-Strategie?",a:["Analyse der Ausgangslage","Hashtags auswählen","Anzeigen schalten","Logo neu gestalten"],c:0,e:"Erst Ist-Zustand und Wettbewerb analysieren, dann Ziele setzen."},
{m:"grund",q:"Was regeln Social-Media-Guidelines?",a:["Wie sich Mitarbeitende online zum Unternehmen äußern","Die Gehälter im Marketing","Die Öffnungszeiten","Den Firmenwagen-Pool"],c:0,e:"Guidelines geben Orientierung und Sicherheit im Umgang mit Social Media."},
{m:"grund",q:"Was sind „Pain Points“ in einer Persona?",a:["Probleme und Sorgen der Zielgruppe","Schmerzhafte Werbekosten","Negative Kommentare","Technische Fehler der App"],c:0,e:"Wer die Probleme der Zielgruppe kennt, kann passende Lösungen und Inhalte anbieten."},
{m:"platt",q:"Was sind Corporate Influencer?",a:["Mitarbeitende, die auf ihren Profilen für das Unternehmen sprechen","Bezahlte Prominente","Gefälschte Accounts","Werbeagenturen"],c:0,e:"Persönliche Profile erzielen oft mehr Reichweite und Vertrauen als Unternehmensseiten."},
{m:"platt",q:"Wie lange sind Instagram-Stories standardmäßig sichtbar?",a:["24 Stunden","1 Stunde","7 Tage","Dauerhaft"],c:0,e:"Stories verschwinden nach 24 Stunden – außer man speichert sie als Highlight."},
{m:"platt",q:"Welcher Vorteil hat ein Business-Konto auf Instagram?",a:["Statistiken und Werbefunktionen","Keine Impressumspflicht","Unbegrenzte Gratis-Reichweite","Automatische Verifizierung"],c:0,e:"Business- und Creator-Konten bieten Insights und Werbung. Das Impressum braucht es trotzdem."},
{m:"platt",q:"Wofür ist Facebook heute besonders stark?",a:["Gruppen, lokale Themen und ältere Zielgruppen","Nur für Teenager","Nur für Live-Gaming","Ausschließlich B2B-Recruiting"],c:0,e:"Facebook punktet mit Gruppen, regionalen Themen und als Werbenetzwerk."},
{m:"platt",q:"Was ist bei Kurzvideos am wichtigsten?",a:["Ein starker Einstieg in den ersten Sekunden","Ein langes Intro mit Logo","Möglichst viel Text","Eine Länge von über 10 Minuten"],c:0,e:"Die ersten Sekunden entscheiden, ob jemand weiterschaut."},
{m:"content",q:"Was ist ein Redaktionsplan?",a:["Planung, welche Inhalte wann auf welchem Kanal erscheinen","Die Follower-Liste","Ein Agenturvertrag","Die Datenschutzerklärung"],c:0,e:"Themen, Formate, Termine, Kanäle, Zuständigkeiten."},
{m:"content",q:"Was ist User Generated Content?",a:["Inhalte, die Nutzer selbst erstellen","KI-generierte Bilder","Stockfotos","Pressemitteilungen"],c:0,e:"Glaubwürdig – aber nur mit Erlaubnis teilen."},
{m:"content",q:"Was hilft am meisten bei einem Shitstorm?",a:["Ein vorher erstellter Krisenplan","Viele neue Beiträge","Account löschen","Kommentare dauerhaft sperren"],c:0,e:"Klare Zuständigkeiten und Kernbotschaften ermöglichen schnelle, abgestimmte Reaktionen."},
{m:"content",q:"Welchen Kommentar darfst du löschen?",a:["Eine Beleidigung gegen andere Nutzer","Berechtigte Kritik an der Lieferzeit","Eine kritische Frage zum Preis","Eine negative, aber sachliche Bewertung"],c:0,e:"Beleidigungen, Hetze und Spam dürfen entfernt werden – sachliche Kritik nicht."},
{m:"content",q:"Was ist eine Netiquette?",a:["Öffentliche Diskussionsregeln für den Kanal","Ein Netzwerk-Tool","Ein Werbeformat","Eine Hashtag-Strategie"],c:0,e:"Die Netiquette macht transparent, welche Kommentare nicht toleriert werden."},
{m:"content",q:"Welcher Aufbau eignet sich für Storytelling?",a:["Person – Problem – Lösung – Ergebnis","Preis – Preis – Preis","Logo – Slogan – Ende","Hashtags – Emojis – Link"],c:0,e:"Geschichten mit Menschen und einem Konflikt bleiben im Gedächtnis."},
{m:"kpi",q:"Was ist der Unterschied zwischen Reichweite und Impressionen?",a:["Reichweite = Personen, Impressionen = Anzeigen insgesamt","Beides ist gleich","Reichweite zählt Klicks","Impressionen zählen nur Follower"],c:0,e:"Eine Person, drei Mal gesehen: 1 Reichweite, 3 Impressionen."},
{m:"kpi",q:"Wie berechnet man die CTR?",a:["Klicks ÷ Impressionen × 100","Follower ÷ Beiträge","Kosten ÷ Klicks","Likes ÷ Kommentare"],c:0,e:"50 Klicks bei 5.000 Impressionen = 1 %."},
{m:"kpi",q:"Warum gelten Follower allein als „Vanity Metric“?",a:["Sie sagen wenig über den Geschäftserfolg aus","Sie sind verboten","Man kann sie nicht ablesen","Sie zählen nur bezahlte Follower"],c:0,e:"Besser: KPIs, die direkt am Ziel hängen."},
{m:"kpi",q:"Was gehört in ein gutes Reporting?",a:["Interpretation und Handlungsempfehlungen","Nur Screenshots","Nur die besten Werte","Die Passwörter der Accounts"],c:0,e:"Zahl → Bedeutung → Maßnahme."},
{m:"kpi",q:"Was beobachtet Social Listening?",a:["Gespräche und Stimmung über Marke, Produkte und Branche","Nur die eigenen Likes","Die Arbeitszeiten des Teams","Die Ladezeit der Website"],c:0,e:"Social Listening ist Teil des Monitorings."},
{m:"kpi",q:"Ein Video hat 10.000 Reichweite und 300 Interaktionen. Engagement-Rate?",a:["3 %","30 %","0,3 %","10 %"],c:0,e:"300 ÷ 10.000 × 100 = 3 %."},
{m:"ads",q:"Was bedeutet CPM?",a:["Kosten pro 1.000 Impressionen","Kosten pro Monat","Klicks pro Minute","Conversions pro Medium"],c:0,e:"Cost per Mille."},
{m:"ads",q:"Was bedeutet CPL?",a:["Kosten pro Lead","Kosten pro Like","Klicks pro Link","Kampagnen pro Laufzeit"],c:0,e:"Z. B. 200 € für 40 Bewerbungen = 5 € pro Lead."},
{m:"ads",q:"Was ist Retargeting?",a:["Personen erneut ansprechen, die schon Kontakt hatten","Eine Anzeige zweimal posten","Die Zielgruppe wechseln","Follower kaufen"],c:0,e:"Braucht in der Regel eine Tracking-Einwilligung."},
{m:"ads",q:"Was ist ein korrekter A/B-Test?",a:["Zwei Anzeigen, die sich nur im Bild unterscheiden","Zwei völlig verschiedene Anzeigen","Eine Anzeige auf zwei Plattformen","Eine Anzeige morgens und abends"],c:0,e:"Nur ein Merkmal ändern – sonst weißt du nicht, was gewirkt hat."},
{m:"ads",q:"300 Klicks führen zu 15 Anfragen. Conversion-Rate?",a:["5 %","15 %","2 %","20 %"],c:0,e:"15 ÷ 300 × 100 = 5 %."},
{m:"ads",q:"Was gehört in eine vollständige Budgetplanung?",a:["Werbebudget, Produktion, Arbeitszeit, Tools","Nur das Werbebudget","Nur die Agenturkosten","Nur kostenlose Maßnahmen"],c:0,e:"Interne Zeit und Produktion werden oft vergessen."},
{m:"recht",q:"Ein Influencer bekommt Geld für einen Post. Was ist Pflicht?",a:["Den Post klar als Werbung kennzeichnen","Nichts, wenn das Produkt gut ist","#ad versteckt zwischen 30 Hashtags","Nur in der Story posten"],c:0,e:"Kommerzielle Inhalte müssen klar erkennbar sein."},
{m:"recht",q:"Du willst ein Teamfoto posten. Was brauchst du?",a:["Die Einwilligung der Abgebildeten","Nichts, sie arbeiten ja hier","Nur die Zustimmung der Chefin","Ein Wasserzeichen"],c:0,e:"Recht am eigenen Bild und DSGVO – am besten schriftlich."},
{m:"recht",q:"Wo sollte das Impressum auf einem Social-Media-Profil stehen?",a:["Leicht erreichbar, z. B. als Link in der Profil-Info","Nur auf Nachfrage per Nachricht","Im zehnten Beitrag","Gar nicht, Profile sind ausgenommen"],c:0,e:"Leicht erkennbar, unmittelbar erreichbar, ständig verfügbar."},
{m:"recht",q:"Was gehört zu einem rechtssicheren Gewinnspiel?",a:["Teilnahmebedingungen und Datenschutzhinweise","Teilnahme nur nach Kauf, ohne Hinweis","Geheime Gewinner","Kein Enddatum"],c:0,e:"Plus die Regeln der jeweiligen Plattform."},
{m:"recht",q:"Ein KI-Video zeigt eine echte Person täuschend echt. Was ist nötig?",a:["Offenlegen, dass es KI-generiert ist","Nichts, KI ist immer frei","Nur nachts posten","Nur den Prompt speichern"],c:0,e:"Transparenzpflicht nach EU-KI-Verordnung – plus Persönlichkeitsrechte."},
{m:"recht",q:"Was riskiert man bei Rechtsverstößen auf Social Media häufig?",a:["Eine kostenpflichtige Abmahnung","Einen Orden","Mehr Reichweite","Nichts"],c:0,e:"Abmahnungen von Mitbewerbern oder Rechteinhabern sind teuer."}
];

export const GESPRAECH = [
{q:"Warum haben Sie genau diese Kanäle gewählt?",a:["Mit der Zielgruppe begründen: Wo ist sie aktiv?","Welches Ziel erfüllt jeder Kanal?","Warum lassen Sie andere Kanäle weg?","Ressourcen ehrlich nennen: lieber 2 Kanäle gut als 5 halb"]},
{q:"Wie messen Sie den Erfolg Ihrer Strategie?",a:["Pro Ziel eine KPI mit Ausgangs- und Zielwert","Zeitraum und Reporting-Rhythmus","Tools bzw. Datenquellen nennen","Was passiert bei Abweichung?"]},
{q:"Was machen Sie bei einem Shitstorm?",a:["Lage einschätzen, Krisenplan aktivieren","Intern abstimmen, schnell erste Reaktion","Sachlich bleiben, Fehler eingestehen","Berechtigte Kritik nicht löschen, hinterher auswerten"]},
{q:"Wie begründen Sie Ihr Budget?",a:["Aufschlüsseln: Ads, Produktion, Arbeitszeit, Tools","Bezug zum Ziel, z. B. Kosten pro Bewerbung","Mit Testbudget starten","Erfolgreiche Anzeigen skalieren"]},
{q:"Welche rechtlichen Punkte haben Sie beachtet?",a:["Impressum nach § 5 DDG","Datenschutz, gemeinsame Verantwortlichkeit","Bildrechte und Einwilligungen","Werbekennzeichnung, Gewinnspiele, KI-Kennzeichnung"]},
{q:"Wer ist Ihre Zielgruppe – und woher wissen Sie das?",a:["Persona vorstellen","Datenquellen nennen: Insights, Kundendaten, Befragungen","Mediennutzung der Persona","Nicht nur Bauchgefühl"]},
{q:"Wie sorgen Sie für regelmäßige Inhalte?",a:["Redaktionsplan mit Themensäulen","Zuständigkeiten und Freigabeprozess","Content-Vorrat anlegen","Inhalte recyceln"]},
{q:"Was würden Sie nach drei Monaten anders machen?",a:["Ergebnisse auswerten","Schwache Formate reduzieren, starke ausbauen","A/B-Tests nutzen","Ziele bei Bedarf anpassen"]},
{q:"Wie binden Sie Mitarbeitende ein?",a:["Social-Media-Guidelines","Corporate Influencer","Schulungen und einfache Freigaben","Einblicke aus dem Arbeitsalltag"]},
{q:"Wie passt Social Media zur Gesamtkommunikation?",a:["Abgeleitet aus Unternehmens- und Marketingzielen","Einheitliches Design und Tonalität","Verzahnung mit Website, Newsletter, Vertrieb, HR","Gemeinsame Kennzahlen"]}
];
