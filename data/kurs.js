import { NEUE } from "./fragen2.js";
// Lerninhalte SMM Coach. Aufbau je Modul: Lektionen (Story-Folien) → Quiz.
// Folientypen: intro, text, liste, beispiel, merke, check (Verständnisfrage, Index c = richtige Antwort).
// **fett** ist erlaubt. Rechtliche Inhalte: Stand 11/2026, vor Veröffentlichung fachlich prüfen lassen.

const ALT = [
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
   { k: "check", q: "Welches Ziel ist SMART formuliert?", a: ["Bis 31.03. erhalten wir über Instagram 15 Bewerbungen für Ausbildungsplätze.", "Wir wollen über Instagram deutlich mehr Bewerbungen für Ausbildungsplätze.", "Bis Jahresende soll unser Instagram-Kanal viel bekannter und cooler werden.", "Wir erhalten über Instagram 15 Bewerbungen, sobald der Kanal genug Follower hat."], c: 0, e: "Es ist spezifisch (Bewerbungen, Ausbildung), messbar (15), terminiert (31.03.) und mit einem Kanal verknüpft." }
  ]},
  { id: "persona", titel: "Zielgruppe & Persona", min: 3, folien: [
   { k: "intro", h: "Für wen machen wir das?", b: "Wer alle ansprechen will, erreicht niemanden. Eine **Persona** macht die Zielgruppe greifbar – als fiktive, aber typische Person." },
   { k: "liste", h: "Was in eine Persona gehört", l: ["Name, Alter, Wohnort, Beruf", "Ziele und Wünsche", "Probleme und Fragen („Pain Points“)", "Welche Plattformen sie wann nutzt", "Was sie von uns braucht"] },
   { k: "beispiel", h: "Beispiel-Persona", b: "**Lena, 17, Schülerin in Leipzig.** Sucht einen Ausbildungsplatz, ist unsicher, welcher Beruf passt. Nutzt TikTok und Instagram täglich, vor allem abends. Wünscht sich ehrliche Einblicke von Azubis statt Werbesprech." },
   { k: "text", h: "Woher kommen die Infos?", b: "Nicht raten, sondern belegen: **Kundendaten**, **Plattform-Statistiken** (Insights), **Befragungen**, Gespräche mit Vertrieb und Kundenservice, **Studien** zur Mediennutzung." },
   { k: "check", q: "Wofür nutzt man eine Persona vor allem?", a: ["Um Inhalte, Ton und Kanäle auf die Zielgruppe auszurichten", "Als Pseudonym bzw. Kunstfigur für das Unternehmensprofil", "Um Marktforschung und echte Kundendaten komplett zu ersetzen", "Um einzelne reale Kunden gezielt mit Werbung anzusprechen"], c: 0, e: "Die Persona hilft bei jeder Entscheidung: Würde Lena das lesen? Auf welchem Kanal? In welchem Ton?" }
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
   { k: "check", q: "Was ist an TikTok besonders?", a: ["Videos werden nach Interesse ausgespielt, auch ohne viele Follower", "Beiträge werden fast nur den eigenen Followern chronologisch angezeigt", "Reichweite entsteht vor allem über Verlinkungen auf externe Websites", "Werbeanzeigen sind dort für Unternehmen grundsätzlich nicht erlaubt"], c: 0, e: "Der Algorithmus zeigt Inhalte allen, die sich dafür interessieren könnten – eine Chance für kleine Accounts." }
  ]},
  { id: "kanalwahl", titel: "YouTube, Facebook & die Kanalwahl", min: 3, folien: [
   { k: "text", h: "YouTube", b: "YouTube ist auch eine **Suchmaschine**. Tutorials, Erklärvideos und Produkt-Demos werden oft noch Jahre später gefunden. Zusätzlich: **Shorts** als Kurzvideo-Format." },
   { k: "text", h: "Facebook", b: "Stark bei älteren Zielgruppen, in **Gruppen** und bei **lokalen** Themen (Vereine, Veranstaltungen, regionale Händler). Wichtig auch als Werbenetzwerk zusammen mit Instagram." },
   { k: "liste", h: "So wählst du Kanäle aus", l: ["Wo ist meine Zielgruppe aktiv?", "Welches Ziel erfülle ich dort?", "Passt das Format zu meinen Inhalten?", "Habe ich genug Zeit und Personal?", "Was macht die Konkurrenz – und was nicht?"] },
   { k: "merke", h: "Merke", b: "Lieber **zwei Kanäle gut** als fünf halbherzig. In Freitext-Fragen musst du jede Kanalwahl begründen – auch, warum du andere weglässt." },
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
   { k: "check", q: "Was beschreibt eine Themensäule?", a: ["Ein festes, wiederkehrendes Themenfeld des Kanals", "Eine einmalige, bezahlte Anzeige zu einem Thema", "Ein reichweitenstarker Hashtag mit vielen Followern", "Die Gestaltungsvorgabe für Logo und Profilbild"], c: 0, e: "Themensäulen geben dem Kanal ein Profil und erleichtern die Planung." }
  ]},
  { id: "redaktion", titel: "Redaktionsplan & Workflow", min: 3, folien: [
   { k: "intro", h: "Planen statt hetzen", b: "Ein **Redaktionsplan** legt fest, welche Inhalte wann auf welchem Kanal erscheinen – und wer dafür zuständig ist." },
   { k: "liste", h: "Spalten im Redaktionsplan", l: ["Datum und Uhrzeit", "Kanal und Format", "Thema / Themensäule", "Text, Hashtags, Link", "Verantwortliche Person", "Status (Idee, in Arbeit, Freigabe, veröffentlicht)"] },
   { k: "text", h: "Freigabeprozess", b: "Wer darf was veröffentlichen? Ein klarer **Freigabeweg** (z. B. Social Media Manager → Fachabteilung → Geschäftsführung bei heiklen Themen) verhindert Fehler und Verzögerungen." },
   { k: "merke", h: "Profi-Tipp", b: "**Content recyceln**: Aus einem Video werden ein Reel, ein LinkedIn-Post, eine Story und ein Zitat-Bild. Das spart viel Zeit." },
   { k: "check", q: "Was gehört üblicherweise NICHT in einen Redaktionsplan?", a: ["Die Gehälter des Teams", "Kanal und Format", "Veröffentlichungstermin", "Verantwortliche Person"], c: 0, e: "Der Redaktionsplan organisiert Inhalte, Termine und Zuständigkeiten – nicht das Personalbudget." }
  ]},
  { id: "community", titel: "Community Management & Krisen", min: 4, folien: [
   { k: "intro", h: "Social heißt: Dialog", b: "Wer postet, bekommt Reaktionen. **Community Management** heißt: zuhören, antworten, moderieren – freundlich, schnell und im Ton der Marke." },
   { k: "text", h: "Umgang mit Kritik", b: "Berechtigte Kritik **nicht löschen** – das wirkt wie Zensur und kann eskalieren. Besser: zügig und sachlich antworten, Fehler eingestehen, Lösung anbieten, bei Bedarf in die Direktnachricht wechseln." },
   { k: "text", h: "Wann du löschen solltest", b: "Beleidigungen, Hetze, Spam und rechtswidrige Inhalte solltest du entfernen – rechtswidrige spätestens, sobald du davon weißt. Grundlage ist eine öffentliche **Netiquette** (Diskussionsregeln) auf dem Kanal. Sachliche Kritik zu löschen wirkt dagegen wie Zensur." },
   { k: "liste", h: "Shitstorm – was tun?", l: ["Ruhe bewahren, Lage einschätzen", "Krisenplan aktivieren, intern abstimmen", "Schnell eine erste Reaktion zeigen", "Sachlich bleiben, Fehler zugeben", "Nicht diskutieren, wer „angefangen“ hat", "Hinterher auswerten und lernen"] },
   { k: "merke", h: "Merke", b: "Den **Krisenplan** schreibt man, bevor die Krise kommt: Wer entscheidet? Wer gibt frei? Welche Kernbotschaften gelten?" },
   { k: "check", q: "Eine Kundin kritisiert öffentlich und zu Recht eine lange Lieferzeit. Beste Reaktion?", a: ["Schnell, freundlich antworten und eine Lösung anbieten", "Kommentar löschen, damit andere ihn nicht sehen", "Nicht reagieren, damit sich die Lage beruhigt", "Öffentlich widersprechen und auf den Paketdienst verweisen"], c: 0, e: "Eine gute Antwort auf Kritik kann sogar Vertrauen schaffen – andere sehen, wie ihr mit Problemen umgeht." }
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
   { k: "text", h: "Monitoring & Social Listening", b: "**Social Monitoring:** laufend erfassen, **was über uns gesagt wird** – Erwähnungen, Fragen, Kritik, auch außerhalb der eigenen Kanäle – oft mit schneller Reaktion.\n**Social Listening:** diese Gespräche **auswerten** – Stimmung, Themen, Trends, Wettbewerb – für strategische Erkenntnisse." },
   { k: "text", h: "Reporting", b: "Regelmäßig auswerten, **ob wir unsere Ziele erreichen**: eigene Kennzahlen sammeln, vergleichen, interpretieren und daraus Maßnahmen ableiten – z. B. monatlich." },
   { k: "liste", h: "Woher kommen die Daten?", l: ["Plattform-Statistiken (Insights, Analytics)", "Monitoring-Tools für Erwähnungen", "Web-Analyse (z. B. Klicks, Anfragen)", "Daten aus Vertrieb und HR (Leads, Bewerbungen)"] },
   { k: "check", q: "Du prüfst täglich, wie in Foren und Netzwerken über eure Marke gesprochen wird. Das ist …", a: ["Monitoring", "Reporting", "Retargeting", "Storytelling"], c: 0, e: "Monitoring beobachtet Gespräche und Stimmung. Reporting wertet die eigenen Ziel-Kennzahlen aus." }
  ]},
  { id: "report", titel: "Ein Reporting, das überzeugt", min: 3, folien: [
   { k: "intro", h: "Zahlen allein reichen nicht", b: "Die Geschäftsführung will wissen: **Was bedeutet das – und was tun wir jetzt?**" },
   { k: "liste", h: "Aufbau eines guten Reports", l: ["Ziele und Zeitraum", "Kennzahlen im Vergleich (Vormonat, Ziel)", "Top- und Flop-Beiträge", "Interpretation: Warum ist das so?", "Handlungsempfehlungen"] },
   { k: "beispiel", h: "Zahl → Bedeutung → Maßnahme", b: "„Reels erzielen doppelt so viel Reichweite wie Bildbeiträge. → Kurzvideo passt zu unserer Zielgruppe. → Nächsten Monat zwei statt ein Reel pro Woche, dafür ein Bildbeitrag weniger.“" },
   { k: "check", q: "Was macht ein Reporting wertvoll?", a: ["Interpretation und konkrete Empfehlungen", "Möglichst viele Screenshots der Beiträge", "Eine Auswahl nur der besten Kennzahlen", "Eine lange Liste aller Beiträge ohne Bewertung"], c: 0, e: "Ein Report soll Entscheidungen ermöglichen – dafür braucht es Einordnung und Empfehlungen." }
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
   { k: "check", q: "Was ist eine Lookalike Audience?", a: ["Eine Zielgruppe, die bestehenden Kunden ähnlich ist", "Eine Zielgruppe aus Personen, die die Website besucht haben", "Eine Zielgruppe aus allen Followern der Konkurrenz", "Eine Zielgruppe, die nur aus den bestehenden Kunden besteht"], c: 0, e: "Die Plattform sucht Menschen mit ähnlichen Merkmalen wie eine Ausgangsgruppe, z. B. bestehende Kunden." }
  ]},
  { id: "ads-kpi", titel: "Werbe-Kennzahlen & Tests", min: 3, folien: [
   { k: "text", h: "Was kostet es?", b: "**CPM** = Kosten pro 1.000 Impressionen.\n**CPC** = Kosten pro Klick.\n**CPL** = Kosten pro Lead (z. B. Anfrage, Bewerbung).\n\nBeispiel: 200 € für 40 Bewerbungen = **5 € CPL**." },
   { k: "text", h: "Conversion-Rate", b: "Wie viele der Besucher tun das Gewünschte?\n\n**Conversions ÷ Klicks × 100**\n\nBeispiel: 300 Klicks, 15 Anfragen = **5 %**." },
   { k: "text", h: "A/B-Test", b: "Zwei Varianten einer Anzeige gegeneinander testen, die sich in **genau einem Merkmal** unterscheiden (Bild **oder** Text **oder** Zielgruppe). Sonst weißt du nicht, was den Unterschied gemacht hat." },
   { k: "check", q: "Du gibst 50 € aus und erhältst 10.000 Impressionen. Wie hoch ist der CPM?", a: ["5 €", "0,50 €", "50 €", "500 €"], c: 0, e: "50 € ÷ 10.000 × 1.000 = 5 €." }
  ]},
  { id: "budget", titel: "Kampagnen & Budget planen", min: 3, folien: [
   { k: "intro", h: "Was kostet Social Media wirklich?", b: "Viele denken nur an das Werbebudget. In Prüfungsfragen geht es oft um die **vollständige Kostenstruktur**." },
   { k: "liste", h: "Kostenblöcke", l: ["Werbebudget (Ads)", "Produktion (Fotos, Videos, Grafik)", "Personal / Arbeitszeit intern", "Tools (Planung, Design, Monitoring)", "Externe Dienstleister (Agentur, Freelancer)"] },
   { k: "liste", h: "Kampagne planen", l: ["Ziel und KPI festlegen", "Zielgruppe und Kanäle wählen", "Botschaft und Motive entwickeln", "Zeitraum und Budget festlegen", "Testen, auswerten, optimieren"] },
   { k: "merke", h: "Merke", b: "Mit einem **Testbudget** starten, Ergebnisse messen – und erst dann das Budget für die besten Anzeigen erhöhen." },
   { k: "check", q: "Was wird bei der Budgetplanung am häufigsten vergessen?", a: ["Interne Arbeitszeit und Produktion", "Das Werbebudget für bezahlte Anzeigen", "Die geplante Laufzeit der Kampagnen", "Die Auswahl der Zielgruppe"], c: 0, e: "Fotos, Videos und die eigene Arbeitszeit kosten oft mehr als die Anzeigen selbst." }
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
   { k: "text", h: "Werbung kennzeichnen", b: "Werbliche Inhalte müssen **auf den ersten Blick als Werbung erkennbar** sein (§ 5a UWG, § 22 MStV, § 6 DDG) – auch bei Gegenleistungen wie Gratisprodukten oder Provisionen. Deutlich „Werbung“ oder „Anzeige“ an den Anfang, bei Stories auf jede Kachel. Die Plattformfunktion „Bezahlte Partnerschaft“ allein genügt nicht, „#ad“ oder „sponsored“ ebenfalls nicht." },
   { k: "check", q: "Welches Gesetz regelt heute die Impressumspflicht für Online-Angebote?", a: ["Digitale-Dienste-Gesetz (DDG)", "Telemediengesetz (TMG)", "Handelsgesetzbuch (HGB)", "Bundesdatenschutzgesetz (BDSG)"], c: 0, e: "Das TMG wurde 2024 durch das DDG abgelöst. Die Impressumspflicht steht jetzt in § 5 DDG." }
  ]},
  { id: "bildrechte", titel: "Urheber- & Bildrechte", min: 3, folien: [
   { k: "intro", h: "Nicht alles ist frei", b: "Fotos, Videos, Musik und Texte sind fast immer **urheberrechtlich geschützt**. „Im Internet gefunden“ heißt nicht „frei nutzbar“." },
   { k: "text", h: "Nutzungsrechte", b: "Du brauchst eine **Lizenz** oder Erlaubnis. Eine Quellenangabe allein reicht nicht. Sicher sind: eigene Inhalte und lizenzierte Stockfotos oder -musik. **Achtung Musik:** Die normale Musikbibliothek von Instagram und Facebook ist nur für private Nutzung lizenziert. Unternehmen brauchen kommerziell freigegebene Musik (z. B. TikTok Commercial Music Library, Meta Sound Collection) oder eigene Rechte." },
   { k: "text", h: "Recht am eigenen Bild", b: "Wer erkennbar abgebildet ist, muss grundsätzlich **einwilligen** (§ 22 KUG, DSGVO). Bei Mitarbeitenden verlangt das Bundesarbeitsgericht die **Schriftform**. Auf das Widerrufsrecht hinweisen. Ausnahmen (§ 23 KUG) gibt es eng begrenzt, z. B. wenn Personen nur Beiwerk sind oder bei Versammlungen." },
   { k: "merke", h: "Merke", b: "Vor dem Posten fragen: **Wem gehört der Inhalt?** Und: **Ist jemand erkennbar zu sehen?**" },
   { k: "check", q: "Darfst du ein Foto aus der Google-Bildersuche posten, wenn du die Quelle nennst?", a: ["Nein – die Quellenangabe ersetzt kein Nutzungsrecht", "Ja, mit Quellenangabe ist die Nutzung immer erlaubt", "Ja, wenn das Bild verkleinert oder bearbeitet wird", "Ja, wenn der Beitrag keinen Werbezweck verfolgt"], c: 0, e: "Die Quellenangabe ersetzt keine Lizenz. Ohne Erlaubnis droht eine Abmahnung." }
  ]},
  { id: "datenschutz", titel: "Datenschutz, Gewinnspiele & KI", min: 4, folien: [
   { k: "text", h: "Gemeinsame Verantwortung", b: "Der EuGH hat 2018 entschieden: Betreiber einer Facebook-Fanpage sind **gemeinsam mit Facebook** (heute Meta) für den Datenschutz verantwortlich. Deshalb brauchen Unternehmensprofile eigene **Datenschutzhinweise** und eine Vereinbarung nach **Art. 26 DSGVO** (bei Meta: Page-Insights-Zusatz). Wie weit die Mitverantwortung z. B. für Cookies reicht, ist weiter umstritten." },
   { k: "liste", h: "Rechtssicheres Gewinnspiel", l: ["Teilnahmebedingungen: Veranstalter, Zeitraum, Teilnahme, Gewinn, Auswahl der Gewinner", "Datenschutzhinweise", "Plattform von jeder Haftung freistellen und klarstellen, dass sie das Gewinnspiel nicht sponsert oder organisiert", "Auf Facebook verboten: „Teile den Beitrag“ oder „Markiere Freunde“ als Teilnahmebedingung", "Bedingungen leicht zugänglich, klar und eindeutig (§ 6 DDG), keine versteckte Kaufpflicht"] },
   { k: "text", h: "KI-Inhalte", b: "Seit **2. August 2026** gilt Art. 50 der EU-KI-Verordnung: KI-Bilder, -Videos oder -Audios, die echten Personen, Orten, Gegenständen oder Ereignissen ähneln und fälschlich echt wirken („**Deepfakes**“), müssen klar **als KI-erzeugt offengelegt** werden. Bei erkennbarer Kunst oder Satire genügt ein dezenter Hinweis. Auch KI-Texte zu Themen von öffentlichem Interesse sind zu kennzeichnen – außer ein Mensch hat sie redaktionell geprüft und verantwortet." },
   { k: "merke", h: "Merke", b: "Recht ist im Abschlussprojekt ein eigener Baustein: Impressum, Datenschutz, Bildrechte, Werbekennzeichnung, Gewinnspiele, KI." },
   { k: "check", q: "Wer ist laut EuGH für den Datenschutz einer Facebook-Fanpage verantwortlich?", a: ["Der Seitenbetreiber gemeinsam mit Meta", "Allein Meta als Betreiber der Plattform", "Allein der Seitenbetreiber, Meta haftet nie", "Die Datenschutzbehörde des Bundeslandes"], c: 0, e: "Gemeinsame Verantwortlichkeit (EuGH, 2018) – deshalb braucht ihr Datenschutzhinweise für euer Profil." }
  ]}
 ]
}
];

// Quizfragen je Modul (zusätzlich zu den Verständnisfragen in den Lektionen). c = Index der richtigen Antwort.
const FRAGEN_ALT = [
{m:"grund",q:"Wofür steht das „T“ in SMART?",a:["Terminiert","Teamfähig","Transparent","Technisch"],c:0,e:"Ein SMART-Ziel hat ein klares Enddatum."},
{m:"grund",q:"Was ist „Owned Media“?",a:["Eigene Kanäle wie Unternehmensprofil, Website, Newsletter", "Bezahlte Anzeigen wie Social Ads oder Suchmaschinenwerbung", "Erwähnungen und Empfehlungen durch Kunden und Fans", "Presseartikel und Berichte von Journalisten über die Firma"],c:0,e:"Owned = gehört dir. Paid = bezahlt. Earned = verdient."},
{m:"grund",q:"Was ist der erste Schritt einer Social-Media-Strategie?",a:["Analyse der Ausgangslage", "Auswahl passender Hashtags", "Schalten erster Anzeigen", "Gestaltung eines neuen Logos"],c:0,e:"Erst Ist-Zustand und Wettbewerb analysieren, dann Ziele setzen."},
{m:"grund",q:"Was regeln Social-Media-Guidelines?",a:["Wie sich Mitarbeitende online zum Unternehmen äußern", "Wie sich externe Nutzer in den Kommentaren verhalten müssen", "Wie die Werbebudgets auf die einzelnen Kanäle verteilt werden", "Welche Pflichtangaben im Impressum des Profils stehen"],c:0,e:"Guidelines geben Orientierung und Sicherheit im Umgang mit Social Media."},
{m:"grund",q:"Was sind „Pain Points“ in einer Persona?",a:["Probleme und Sorgen der Zielgruppe", "Besonders hohe Kosten einer Kampagne", "Negative Kommentare unter Beiträgen", "Technische Fehler in der eigenen App"],c:0,e:"Wer die Probleme der Zielgruppe kennt, kann passende Lösungen und Inhalte anbieten."},
{m:"platt",q:"Was sind Corporate Influencer?",a:["Mitarbeitende, die auf ihren Profilen für das Unternehmen sprechen", "Bezahlte externe Influencer, die langfristig für eine Marke werben", "Agenturen, die im Auftrag des Unternehmens dessen Profile betreuen", "Prominente, die als Markenbotschafter in Werbespots auftreten"],c:0,e:"Persönliche Profile erzielen oft mehr Reichweite und Vertrauen als Unternehmensseiten."},
{m:"platt",q:"Wie lange sind Instagram-Stories standardmäßig sichtbar?",a:["24 Stunden", "1 Stunde", "7 Tage", "Bis zum Löschen"],c:0,e:"Stories verschwinden nach 24 Stunden – außer man speichert sie als Highlight."},
{m:"platt",q:"Welchen Vorteil hat ein Business-Konto auf Instagram?",a:["Statistiken und Werbefunktionen", "Befreiung von der Impressumspflicht", "Mehr organische Reichweite ohne Kosten", "Automatische Verifizierung mit Haken"],c:0,e:"Business- und Creator-Konten bieten Insights und Werbung. Das Impressum braucht es trotzdem."},
{m:"platt",q:"Wofür ist Facebook heute besonders stark?",a:["Gruppen, lokale Themen und ältere Zielgruppen", "Kurzvideos für sehr junge Zielgruppen unter 16", "Live-Gaming-Streams und E-Sport-Communities", "Fachliches B2B-Netzwerken und Stellenanzeigen"],c:0,e:"Facebook punktet mit Gruppen, regionalen Themen und als Werbenetzwerk."},
{m:"platt",q:"Was ist bei Kurzvideos am wichtigsten?",a:["Ein starker Einstieg in den ersten Sekunden", "Ein ausführliches Intro mit dem Firmenlogo", "Möglichst viel erklärender Text im Bild", "Eine Länge von deutlich über zehn Minuten"],c:0,e:"Die ersten Sekunden entscheiden, ob jemand weiterschaut."},
{m:"content",q:"Was ist ein Redaktionsplan?",a:["Planung, welche Inhalte wann auf welchem Kanal erscheinen", "Ein Bericht, wie gut die Beiträge des Vormonats liefen", "Ein Vertrag mit einer Agentur über die Content-Erstellung", "Ein Dokument mit allen Pflichtangaben zum Datenschutz"],c:0,e:"Themen, Formate, Termine, Kanäle, Zuständigkeiten."},
{m:"content",q:"Was ist User Generated Content?",a:["Inhalte, die Nutzer selbst erstellen", "Inhalte, die eine KI automatisch erzeugt", "Lizenzierte Stockfotos aus Bilddatenbanken", "Pressemitteilungen des eigenen Unternehmens"],c:0,e:"Glaubwürdig – aber nur mit Erlaubnis teilen."},
{m:"content",q:"Was hilft am meisten bei einem Shitstorm?",a:["Ein vorher erstellter Krisenplan", "Viele neue Beiträge zur Ablenkung", "Das sofortige Löschen des Accounts", "Alle Kommentare dauerhaft sperren"],c:0,e:"Klare Zuständigkeiten und Kernbotschaften ermöglichen schnelle, abgestimmte Reaktionen."},
{m:"content",q:"Welchen Kommentar solltest du löschen?",a:["Eine Beleidigung gegen andere Nutzer","Berechtigte Kritik an der Lieferzeit","Eine kritische Frage zum Preis","Eine negative, aber sachliche Bewertung"],c:0,e:"Beleidigungen, Hetze, Spam und rechtswidrige Inhalte sollten entfernt werden. Sachliche Kritik zu löschen wirkt wie Zensur und kann einen Shitstorm auslösen."},
{m:"content",q:"Was ist eine Netiquette?",a:["Öffentliche Diskussionsregeln für den Kanal", "Interne Verhaltensregeln für Mitarbeitende", "Ein Werbeformat für Netzwerk-Plattformen", "Eine Strategie für den Einsatz von Hashtags"],c:0,e:"Die Netiquette macht transparent, welche Kommentare nicht toleriert werden."},
{m:"content",q:"Welcher Aufbau eignet sich für Storytelling?",a:["Person – Problem – Lösung – Ergebnis", "Produkt – Preis – Rabatt – Bestellung", "Logo – Slogan – Hashtags – Abspann", "Fakten – Tabelle – Fazit – Quellen"],c:0,e:"Geschichten mit Menschen und einem Konflikt bleiben im Gedächtnis."},
{m:"kpi",q:"Was ist der Unterschied zwischen Reichweite und Impressionen?",a:["Reichweite = Personen, Impressionen = Anzeigen insgesamt", "Reichweite = Anzeigen insgesamt, Impressionen = Personen", "Reichweite = Klicks, Impressionen = alle Interaktionen", "Reichweite = Follower, Impressionen = nur Nicht-Follower"],c:0,e:"Eine Person, drei Mal gesehen: 1 Reichweite, 3 Impressionen."},
{m:"kpi",q:"Wie berechnet man die CTR?",a:["Klicks ÷ Impressionen × 100", "Impressionen ÷ Klicks × 100", "Interaktionen ÷ Reichweite × 100", "Kosten ÷ Klicks × 1.000"],c:0,e:"50 Klicks bei 5.000 Impressionen = 1 %."},
{m:"kpi",q:"Warum gelten Follower allein als „Vanity Metric“?",a:["Sie sagen wenig über den Geschäftserfolg aus", "Sie sind in den Statistiken nicht abrufbar", "Sie zählen ausschließlich gekaufte Follower", "Sie dürfen im Reporting nicht genannt werden"],c:0,e:"Besser: KPIs, die direkt am Ziel hängen."},
{m:"kpi",q:"Was gehört in ein gutes Reporting?",a:["Interpretation und Handlungsempfehlungen", "Nur Screenshots der erfolgreichsten Posts", "Ausschließlich die besten Werte des Monats", "Rohdaten aller Beiträge ohne Einordnung"],c:0,e:"Zahl → Bedeutung → Maßnahme."},
{m:"kpi",q:"Was beobachtet Social Listening?",a:["Gespräche und Stimmung über Marke, Produkte und Branche", "Nur die Likes und Kommentare auf dem eigenen Profil", "Die Ladezeit und Verfügbarkeit der eigenen Website", "Die Zahl der Abonnenten des eigenen Newsletters"],c:0,e:"Social Listening ist Teil des Monitorings."},
{m:"kpi",q:"Ein Video hat 10.000 Reichweite und 300 Interaktionen. Engagement-Rate?",a:["3 %","30 %","0,3 %","10 %"],c:0,e:"300 ÷ 10.000 × 100 = 3 %."},
{m:"ads",q:"Was bedeutet CPM?",a:["Kosten pro 1.000 Impressionen", "Kosten pro Million Impressionen", "Klicks pro 1.000 Impressionen", "Kosten pro Monat der Kampagne"],c:0,e:"Cost per Mille."},
{m:"ads",q:"Was bedeutet CPL?",a:["Kosten pro Lead","Kosten pro Like","Klicks pro Link","Kampagnen pro Laufzeit"],c:0,e:"Z. B. 200 € für 40 Bewerbungen = 5 € pro Lead."},
{m:"ads",q:"Was ist Retargeting?",a:["Personen erneut ansprechen, die schon Kontakt hatten", "Personen ansprechen, die bestehenden Kunden ähneln", "Eine Anzeige mit neuem Ziel ein zweites Mal posten", "Nutzer nach ihrem aktuellen Standort ansprechen"],c:0,e:"Braucht in der Regel eine Tracking-Einwilligung."},
{m:"ads",q:"Was ist ein korrekter A/B-Test?",a:["Zwei Anzeigen, die sich nur im Bild unterscheiden","Zwei Anzeigen, die sich in Bild, Text und Zielgruppe unterscheiden","Eine Anzeige auf zwei Plattformen","Eine einzige Anzeige ohne Vergleich"],c:0,e:"Nur ein Merkmal ändern – sonst weißt du nicht, was gewirkt hat."},
{m:"ads",q:"300 Klicks führen zu 15 Anfragen. Conversion-Rate?",a:["5 %","15 %","2 %","20 %"],c:0,e:"15 ÷ 300 × 100 = 5 %."},
{m:"ads",q:"Was gehört in eine vollständige Budgetplanung?",a:["Werbebudget, Produktion, Arbeitszeit, Tools", "Nur das Werbebudget für bezahlte Anzeigen", "Werbebudget und Agenturkosten, ohne Arbeitszeit", "Nur Produktionskosten für Fotos und Videos"],c:0,e:"Interne Zeit und Produktion werden oft vergessen."},
{m:"recht",q:"Ein Influencer bekommt Geld für einen Post. Was ist Pflicht?",a:["Den Post klar als Werbung kennzeichnen", "#ad am Ende zwischen vielen Hashtags", "Nichts, solange die Meinung ehrlich ist", "Die Marke im Beitrag markieren genügt"],c:0,e:"Kommerzielle Inhalte müssen klar erkennbar sein."},
{m:"recht",q:"Du willst ein Teamfoto posten. Was brauchst du?",a:["Die Einwilligung der Abgebildeten", "Nichts, sie sind ja Mitarbeitende", "Nur die Zustimmung der Geschäftsführung", "Einen Hinweis auf das Foto im Impressum"],c:0,e:"Recht am eigenen Bild und DSGVO – bei Mitarbeitenden schriftlich (BAG)."},
{m:"recht",q:"Wo sollte das Impressum auf einem Social-Media-Profil stehen?",a:["Leicht erreichbar, z. B. als Link in der Profil-Info", "Nur auf Nachfrage per Direktnachricht an den Nutzer", "Irgendwo im Feed, z. B. in einem älteren Beitrag", "Gar nicht, Social-Media-Profile sind davon ausgenommen"],c:0,e:"Leicht erkennbar, unmittelbar erreichbar, ständig verfügbar."},
{m:"recht",q:"Was gehört zu einem rechtssicheren Gewinnspiel?",a:["Teilnahmebedingungen und Datenschutzhinweise", "Teilnahme nur nach einem Kauf, ohne Hinweis darauf", "Ein offenes Ende ohne festen Teilnahmeschluss", "Eine Bestätigung der Aktion durch die IHK"],c:0,e:"Plus die Regeln der jeweiligen Plattform."},
{m:"recht",q:"Ein KI-Video zeigt eine echte Person täuschend echt. Was ist nötig?",a:["Offenlegen, dass es KI-generiert ist", "Nichts, KI-Inhalte sind immer frei nutzbar", "Nur den verwendeten Prompt intern speichern", "Ein Wasserzeichen mit dem Firmenlogo einfügen"],c:0,e:"Transparenzpflicht nach Art. 50 EU-KI-Verordnung (seit 2. August 2026) – plus Persönlichkeitsrechte der gezeigten Person."},
{m:"recht",q:"Was riskiert man bei Rechtsverstößen auf Social Media häufig?",a:["Eine kostenpflichtige Abmahnung", "Eine sofortige Freiheitsstrafe", "Eine öffentliche Rüge der IHK", "Eine Löschung des Handelsregistereintrags"],c:0,e:"Abmahnungen von Mitbewerbern oder Rechteinhabern sind teuer."}
];



/* =====================================================================
   Neue Lektionen (Stand 11/2026) – ergänzen die Themen des Lehrgangs
   „Social Media Manager/-in (IHK)“, wie er für den Abschlusstest beim
   IHK-Bildungszentrum Dresden beschrieben ist.
   ===================================================================== */
const NEU = {
 web20: { id: "web20", titel: "Was ist Social Media?", min: 3, folien: [
  { k: "intro", h: "Vom Lesen zum Mitmachen", b: "Im frühen Internet (**Web 1.0**) haben Unternehmen Inhalte veröffentlicht, Nutzer haben nur gelesen. Mit dem **Web 2.0** – der Begriff wurde Mitte der 2000er populär – können alle selbst Inhalte erstellen, teilen und kommentieren." },
  { k: "text", h: "Was Social Media ausmacht", b: "Social Media sind Plattformen, auf denen Menschen **Inhalte erstellen, teilen und miteinander kommunizieren**. Statt einer Botschaft an viele (One-to-many) reden **viele mit vielen** (Many-to-many)." },
  { k: "liste", h: "Arten von Social Media", l: ["Soziale Netzwerke (z. B. Facebook)", "Business-Netzwerke (z. B. LinkedIn; XING heute vor allem Job-Plattform)", "Foto- und Video-Plattformen (z. B. Instagram, YouTube, TikTok)", "Microblogging (z. B. X, Threads)", "Blogs und Foren", "Messenger-Kanäle und Bewertungsportale"] },
  { k: "merke", h: "Merke", b: "Kern von Social Media ist der **Dialog**. Wer nur sendet und nicht zuhört, nutzt Social Media wie eine Plakatwand." },
  { k: "check", q: "Was unterscheidet das Web 2.0 vom Web 1.0?", a: ["Nutzer erstellen und teilen selbst Inhalte", "Inhalte werden nur zentral von Redaktionen erstellt", "Webseiten sind erstmals über Suchmaschinen auffindbar", "Es ist nur noch auf mobilen Geräten nutzbar"], c: 0, e: "Das „Mitmach-Web“: Nutzer sind nicht mehr nur Leser, sondern auch Autoren." }
 ]},
 chancen: { id: "chancen", titel: "Potenziale, Chancen & Risiken", min: 4, folien: [
  { k: "intro", h: "Warum Unternehmen Social Media nutzen", b: "Social Media bietet Chancen, die klassische Kommunikation nicht hat – bringt aber auch eigene **Risiken** mit." },
  { k: "liste", h: "Chancen", l: ["Hohe Reichweite bei geringen Einstiegskosten", "Direkter Dialog mit Kunden", "Markenaufbau und Vertrauen", "Kundenservice in Echtzeit", "Mitarbeitergewinnung", "Feedback und Marktforschung", "Gute Messbarkeit"] },
  { k: "liste", h: "Risiken", l: ["Kontrollverlust: Andere reden mit", "Shitstorms und Kritik in Echtzeit", "Hoher Zeit- und Personalaufwand", "Rechtliche Fallstricke", "Abhängigkeit von Plattformen und Algorithmen"] },
  { k: "beispiel", h: "Beispiel Abhängigkeit", b: "Eine Plattform ändert ihren Algorithmus – plötzlich sinkt die organische Reichweite deutlich. Wer **nur** auf einen Kanal setzt, steht dann schlecht da. Deshalb gehören eigene Kanäle wie Website und Newsletter immer dazu." },
  { k: "check", q: "Was ist ein typisches Risiko von Social Media?", a: ["Abhängigkeit von Regeln und Algorithmen der Plattform", "Fehlende Möglichkeit zum direkten Dialog mit Kunden", "Keine Möglichkeit, Erfolge mit Kennzahlen zu messen", "Gesetzliche Gebühren für jedes Unternehmensprofil auf Plattformen"], c: 0, e: "Die Plattform bestimmt, wer Inhalte sieht. Ändert sie ihre Regeln, ändert sich die Reichweite." }
 ]},
 fehler: { id: "fehler", titel: "Typische Fehlerquellen", min: 3, folien: [
  { k: "intro", h: "Aus Fehlern anderer lernen", b: "Viele Social-Media-Auftritte scheitern an denselben Fehlern. Wer sie kennt, kann sie vermeiden – und in der Prüfung benennen." },
  { k: "liste", h: "Die häufigsten Fehler", l: ["Ohne Ziele und Strategie starten", "Zu viele Kanäle gleichzeitig", "Unregelmäßig posten, verwaiste Profile", "Nur Werbung senden, kein Dialog", "Kritik löschen oder ignorieren", "Überall denselben Beitrag posten", "Erfolg nicht messen", "Recht missachten (Bilder, Impressum)"] },
  { k: "text", h: "Plattformgerecht statt Copy-Paste", b: "Jede Plattform hat eigene Formate und Gewohnheiten. Ein LinkedIn-Fachbeitrag funktioniert auf TikTok nicht – und umgekehrt. **Inhalte anpassen**, nicht nur kopieren." },
  { k: "merke", h: "Merke", b: "Ein verwaistes Profil schadet mehr als gar keines. Lieber **weniger Kanäle, die gepflegt werden**." },
  { k: "check", q: "Welcher Punkt ist eine typische Fehlerquelle?", a: ["Denselben Beitrag unverändert auf allen Plattformen posten", "Regelmäßig und zeitnah auf Kommentare der Community antworten", "Ziele und Zielgruppen vor dem Start schriftlich festlegen", "Kennzahlen monatlich auswerten und Inhalte daran anpassen"], c: 0, e: "Plattformen haben unterschiedliche Formate und Zielgruppen – Inhalte sollten angepasst werden." }
 ]},
 einsatz: { id: "einsatz", titel: "Ziele & Einsatzgebiete im Unternehmen", min: 3, folien: [
  { k: "intro", h: "Wo Social Media hilft", b: "Social Media ist nicht nur Marketing. Fast jede Abteilung kann davon profitieren." },
  { k: "liste", h: "Einsatzgebiete", l: ["**Marketing:** Bekanntheit, Image, Leads", "**Vertrieb:** Kontakte, Anfragen, Social Selling", "**PR:** Pressearbeit, Krisenkommunikation", "**Kundenservice:** Fragen und Beschwerden", "**Personal:** Recruiting, Employer Branding", "**Produktentwicklung:** Feedback, Ideen", "**Interne Kommunikation**"] },
  { k: "text", h: "Typische Ziele", b: "**Bekanntheit** steigern, **Image** verbessern, **Kunden binden**, **Traffic** auf die Website lenken, **Leads und Umsatz** gewinnen, **Bewerbungen** erhalten, **Servicekosten** senken." },
  { k: "check", q: "Ein Unternehmen beantwortet Kundenfragen über Instagram-Nachrichten. Welches Einsatzgebiet ist das?", a: ["Kundenservice", "Recruiting", "Produktentwicklung", "Pressearbeit"], c: 0, e: "Social Media als Service-Kanal: schnell, direkt, öffentlich sichtbar." }
 ]},
 toolspub: { id: "tools", titel: "Tools für Planung & Zusammenarbeit", min: 4, folien: [
  { k: "intro", h: "Werkzeuge sparen Zeit", b: "Profis arbeiten nicht direkt in jeder App, sondern mit **Tools** für Planung, Gestaltung und Zusammenarbeit." },
  { k: "text", h: "Publishing-Tools", b: "Mit Planungs-Tools (z. B. Meta Business Suite, Hootsuite, Buffer) bereitest du Beiträge vor, planst sie für mehrere Kanäle und veröffentlichst sie **zeitgesteuert**. Viele bieten auch Statistiken und einen gemeinsamen Posteingang." },
  { k: "text", h: "Gestaltung", b: "Design- und Video-Tools (z. B. Canva, CapCut) helfen, Grafiken und Kurzvideos im passenden Format zu erstellen – mit **Vorlagen im Corporate Design**." },
  { k: "liste", h: "Kollaboration im Team", l: ["Gemeinsamer Redaktionsplan (z. B. Tabelle, Trello, Asana)", "Freigabe-Workflows: wer prüft, wer gibt frei", "Gemeinsame Ablage für Bilder und Logos", "Klare Rollen und Zugriffsrechte"] },
  { k: "merke", h: "Sicherheit", b: "Zugänge nicht per Passwort weitergeben, sondern **Rollen in den Business-Tools** vergeben – und Zwei-Faktor-Anmeldung aktivieren. Verlässt jemand das Team, Zugriff sofort entziehen." },
  { k: "check", q: "Wofür nutzt man ein Publishing-Tool vor allem?", a: ["Beiträge für mehrere Kanäle planen und zeitgesteuert veröffentlichen", "Bildrechte für Fotos lizenzieren und Lizenznachweise verwalten", "Impressum und Datenschutzerklärung automatisch rechtssicher erstellen", "Follower-Zahlen durch automatische Interaktionen gezielt steigern"], c: 0, e: "Planen, veröffentlichen, oft auch auswerten – alles an einem Ort." }
 ]},
 toolsauto: { id: "automatisierung", titel: "Automatisierung & KI-Tools", min: 3, folien: [
  { k: "text", h: "Was sich automatisieren lässt", b: "Zeitgesteuertes Posten, **Benachrichtigungen** bei Erwähnungen, automatische **Antworten** auf häufige Fragen (Chatbots), Berichte, die sich selbst erstellen, oder Verknüpfungen zwischen Tools (z. B. mit Zapier oder Make)." },
  { k: "text", h: "KI im Social Media Management", b: "KI-Tools helfen bei **Ideen, Texten, Bildern, Untertiteln** und Auswertungen. Sie ersetzen aber nicht das Prüfen: Fakten, Ton und Rechte bleiben in deiner Verantwortung." },
  { k: "liste", h: "Regeln für KI und Automatisierung", l: ["Ergebnisse immer prüfen, bevor sie veröffentlicht werden", "Keine personenbezogenen oder vertraulichen Daten in KI-Tools eingeben", "Täuschend echte KI-Inhalte kennzeichnen", "Community-Dialog nicht komplett automatisieren"] },
  { k: "merke", h: "Merke", b: "Automatisiere **Routine**, nicht **Beziehung**. Persönliche Antworten bleiben menschlich." },
  { k: "check", q: "Was solltest du NICHT in ein öffentliches KI-Tool eingeben?", a: ["Personenbezogene Kundendaten", "Eine Idee für einen Beitrag", "Eine Bitte um Hashtag-Vorschläge", "Einen Entwurf für eine Bildunterschrift"], c: 0, e: "Personenbezogene und vertrauliche Daten gehören aus Datenschutzgründen nicht in externe KI-Tools." }
 ]},
 einbettung: { id: "einbettung", titel: "Social Media in der Unternehmensstrategie", min: 4, folien: [
  { k: "intro", h: "Kein Inseldasein", b: "Social Media wirkt nur, wenn es Teil der **Gesamtstrategie** ist – abgeleitet aus den Zielen des Unternehmens." },
  { k: "liste", h: "Die Ziel-Pyramide", l: ["Unternehmensziel: z. B. Umsatz im Raum Dresden um 10 % steigern", "Marketingziel: Bekanntheit in der Region erhöhen", "Social-Media-Ziel: Reichweite der Instagram-Beiträge in der Region verdoppeln"] },
  { k: "text", h: "Was es dafür braucht", b: "**Rückhalt der Geschäftsführung**, klare **Zuständigkeiten**, ausreichend **Zeit und Budget**, abgestimmte **Botschaften** mit Marketing, PR und Vertrieb sowie ein einheitliches **Corporate Design**." },
  { k: "text", h: "Integrierte Kommunikation", b: "Social Media, Website, Newsletter, Pressearbeit und Werbung sollen **dieselbe Geschichte** erzählen. Kampagnen werden kanalübergreifend geplant." },
  { k: "check", q: "Woraus sollten Social-Media-Ziele abgeleitet werden?", a: ["Aus den Unternehmens- und Marketingzielen", "Aus den Social-Media-Zielen der Konkurrenz", "Aus den aktuellen Trends der Plattformen", "Aus der Zahl der verfügbaren Mitarbeitenden"], c: 0, e: "Social-Media-Ziele sind der unterste Teil der Ziel-Pyramide – sie zahlen auf die Unternehmensziele ein." }
 ]},
 organisation: { id: "organisation", titel: "Organisation, Guidelines & Enterprise 2.0", min: 4, folien: [
  { k: "text", h: "Wer macht Social Media?", b: "**Zentral:** ein Team steuert alles – einheitlich, aber weit weg von den Fachabteilungen.\n**Dezentral:** jede Abteilung macht selbst – nah dran, aber uneinheitlich.\n**Hub-and-Spoke:** ein zentrales Team koordiniert, Fachabteilungen liefern Inhalte – der häufigste Kompromiss." },
  { k: "text", h: "Social-Media-Guidelines", b: "Regeln für Mitarbeitende: Was ist vertraulich? Wie mache ich kenntlich, dass ich für das Unternehmen spreche? Wer antwortet auf Kritik? Guidelines geben **Sicherheit statt Verbote**." },
  { k: "text", h: "Enterprise 2.0", b: "Social-Media-Prinzipien **im Unternehmen**: interne Netzwerke, Wikis, Chats und gemeinsame Dokumente erleichtern Wissensaustausch und Zusammenarbeit." },
  { k: "merke", h: "Merke", b: "Klare **Rollen, Freigaben und Vertretungen** – Social Media macht keinen Urlaub." },
  { k: "check", q: "Ein zentrales Team koordiniert, die Fachabteilungen liefern Inhalte zu. Welches Modell ist das?", a: ["Hub-and-Spoke", "Dezentral", "Outsourcing", "Enterprise 2.0"], c: 0, e: "Das Zentrum (Hub) steuert, die Speichen (Spokes) liefern zu." }
 ]},
 recruiting: { id: "recruiting", titel: "Social Recruiting & Employer Branding", min: 3, folien: [
  { k: "text", h: "Employer Branding", b: "Die **Arbeitgebermarke**: Wofür steht das Unternehmen als Arbeitgeber? Social Media zeigt echte Einblicke – Team, Arbeitsalltag, Werte." },
  { k: "text", h: "Social Recruiting", b: "Personalgewinnung über Social Media: Stellen teilen, gezielte Anzeigen, Mitarbeitende als Botschafter und **Active Sourcing** – passende Kandidaten direkt ansprechen, z. B. auf LinkedIn oder XING." },
  { k: "beispiel", h: "Beispiel", b: "Ein Handwerksbetrieb zeigt auf Instagram und TikTok kurze Videos seiner Azubis. Ergebnis: mehr Bewerbungen von Schülern – weil sie sehen, wie der Alltag wirklich aussieht." },
  { k: "check", q: "Was ist Active Sourcing?", a: ["Passende Kandidaten direkt aktiv ansprechen", "Stellenanzeigen nur in der Zeitung schalten", "Bewerbungen automatisch vorsortieren lassen", "Auf eingehende Initiativbewerbungen warten"], c: 0, e: "Beim Active Sourcing sucht das Unternehmen selbst aktiv nach Talenten." }
 ]},
 benchmarking: { id: "benchmarking", titel: "Benchmarking & Wettbewerbsanalyse", min: 3, folien: [
  { k: "intro", h: "Wo stehen wir im Vergleich?", b: "**Benchmarking** heißt: eigene Kennzahlen mit Vergleichswerten messen – mit Wettbewerbern, der Branche oder der eigenen Vergangenheit." },
  { k: "liste", h: "Was man vergleicht", l: ["Follower-Entwicklung", "Beitragsfrequenz und Formate", "Engagement-Rate", "Reaktionszeit auf Anfragen", "Stimmung (Sentiment) und Share of Voice"] },
  { k: "text", h: "Share of Voice & Sentiment", b: "**Share of Voice** = Anteil der Erwähnungen deiner Marke an allen Erwähnungen im Markt.\n**Sentiment** = Tonalität der Erwähnungen: positiv, neutral oder negativ." },
  { k: "merke", h: "Merke", b: "Nur **vergleichbare** Werte vergleichen: gleicher Zeitraum, gleiche Plattform, gleiche Berechnung." },
  { k: "check", q: "Von 1.000 Erwähnungen im Markt betreffen 150 deine Marke. Wie hoch ist der Share of Voice?", a: ["15 %", "1,5 %", "150 %", "85 %"], c: 0, e: "150 ÷ 1.000 × 100 = 15 %." }
 ]}
};

// Aufbau nach den 6 Themenschwerpunkten des Lehrgangs
const L = (mod, id) => ALT.find(m => m.id === mod).lektionen.find(l => l.id === id);
export const MODULE = [
 { id: "einf", name: "Einführung in Social Media", kurz: "Einführung", farbe: "#ff5a5f",
   text: "Was Social Media ist, was Social Media Manager tun, Chancen, Risiken und typische Fehler.",
   lektionen: [NEU.web20, L("grund", "rolle"), NEU.chancen, NEU.fehler, NEU.einsatz] },
 { id: "platt", name: "Plattformen & Tools", kurz: "Plattformen", farbe: "#ff9f1c",
   text: "Instagram, LinkedIn, TikTok, Facebook & Co. – und die Tools für Planung, Zusammenarbeit und Automatisierung.",
   lektionen: [L("platt", "linkedin"), L("platt", "insta-tiktok"), L("platt", "kanalwahl"), NEU.toolspub, NEU.toolsauto] },
 { id: "unt", name: "Social Media im Unternehmen", kurz: "Unternehmen", farbe: "#e83e8c",
   text: "Einbettung in die Unternehmensstrategie, Organisation, Guidelines, Recruiting und Community Management.",
   lektionen: [NEU.einbettung, NEU.organisation, NEU.recruiting, L("content", "community")] },
 { id: "recht", name: "Handlungs- & Rechtssicherheit", kurz: "Recht", farbe: "#2f9e44",
   text: "Impressum, Werbekennzeichnung, Bild- und Urheberrecht, Datenschutz, Gewinnspiele und KI.",
   lektionen: ALT.find(m => m.id === "recht").lektionen },
 { id: "kpi", name: "Monitoring & Controlling", kurz: "Controlling", farbe: "#7048e8",
   text: "Kennzahlen, Social Listening, Benchmarking und Reporting.",
   lektionen: [L("kpi", "kennzahlen"), L("ads", "ads-kpi"), L("kpi", "monitoring"), NEU.benchmarking, L("kpi", "report")] },
 { id: "plan", name: "Social-Media-Strategie planen", kurz: "Strategie", farbe: "#1c7ed6",
   text: "Von der Analyse über Ziele und Zielgruppe bis zu Content, Redaktionsplan, Kampagnen und Budget.",
   lektionen: [L("grund", "strategie"), L("grund", "ziele"), L("grund", "persona"), L("content", "content-strategie"), L("content", "redaktion"), L("ads", "ads-basis"), L("ads", "budget")] }
];
L("ads", "ads-kpi").titel = "Kennzahlen bei Anzeigen & Tests";
// Schaubilder einfügen (Folientyp „bild“, Grafiken in data/bilder.js)
const LX = id => MODULE.flatMap(m => m.lektionen).find(l => l.id === id);
const bild = (id, nach, svg, h, b) => LX(id).folien.splice(nach, 0, { k: "bild", svg, h, b });
LX("strategie").folien = LX("strategie").folien.filter(f => f.h !== "Social-Media-Guidelines"); // steht jetzt in „Organisation“
bild("strategie", 2, "prozess", "Ein Kreislauf, kein Einmal-Projekt", "Nach der Messung beginnt die Analyse von vorn – die Strategie wird laufend verbessert.");
bild("strategie", 4, "ope", "Owned, Paid, Earned", "Die drei Medienarten greifen ineinander: Bezahlte Reichweite bringt Menschen auf eigene Kanäle, gute Inhalte erzeugen Earned Media.");
bild("einbettung", 1, "pyramide", "Die Ziel-Pyramide", "Von oben nach unten wird abgeleitet: Jedes Social-Media-Ziel zahlt auf ein Unternehmensziel ein.");
bild("organisation", 1, "orga", "Drei Modelle im Vergleich", "Zentral = einheitlich, dezentral = nah an den Fachabteilungen, Hub-and-Spoke = Kompromiss aus beidem.");
bild("ads-basis", 1, "funnel", "Der Funnel", "Je Stufe passen andere Inhalte, Kampagnenziele und Kennzahlen.");
bild("kennzahlen", 2, "reichweite", "Reichweite vs. Impressionen", "Reichweite zählt Personen, Impressionen zählen Anzeigen.");


// Alte Quizfragen den neuen Modulen zuordnen
const UMZUG = { grund: "plan", content: "plan", ads: "plan", platt: "platt", kpi: "kpi", recht: "recht" };
const SONDER = [["Guidelines", "unt"], ["Shitstorm", "unt"], ["löschen", "unt"], ["Netiquette", "unt"], ["CPM", "kpi"], ["CPL", "kpi"], ["Conversion-Rate", "kpi"]];
const ALT_Q = FRAGEN_ALT.map(f => ({ ...f, m: (SONDER.find(([s]) => f.q.includes(s)) || [0, UMZUG[f.m]])[1] }));

const NEU_Q = [
{m:"einf",q:"Was bedeutet „Many-to-many“-Kommunikation?",a:["Viele Menschen kommunizieren miteinander","Ein Absender erreicht viele Empfänger","Nur zwei Personen schreiben sich","Ein Unternehmen spricht mit einem Kunden"],c:0,e:"Social Media ermöglicht den Austausch aller mit allen – anders als klassische Massenmedien (One-to-many)."},
{m:"einf",q:"Welche Plattform ist ein Business-Netzwerk?",a:["LinkedIn","TikTok","Pinterest","Snapchat"],c:0,e:"LinkedIn und XING sind berufliche Netzwerke."},
{m:"einf",q:"Was ist eine Chance von Social Media für Unternehmen?",a:["Direkter Dialog mit Kunden","Volle Kontrolle über alle Kommentare","Keine Arbeit nach dem Einrichten","Garantierte Reichweite ohne Inhalte"],c:0,e:"Der direkte Austausch mit Kunden ist einer der größten Vorteile."},
{m:"einf",q:"Warum schadet ein verwaistes Profil?",a:["Es wirkt unprofessionell und unzuverlässig", "Es verursacht monatliche Plattformgebühren", "Es ist nach dem DDG ausdrücklich verboten", "Es wird nach 30 Tagen automatisch gelöscht"],c:0,e:"Wer ein Profil sieht, auf dem seit Monaten nichts passiert, zweifelt an der Zuverlässigkeit des Unternehmens."},
{m:"einf",q:"Welches Ziel passt zum Einsatzgebiet Personal?",a:["Mehr Bewerbungen für Ausbildungsplätze", "Mehr Klicks und Käufe im eigenen Onlineshop", "Bessere Kontakte zu Pressevertretern", "Weniger Reklamationen im Kundenservice"],c:0,e:"Recruiting und Employer Branding sind typische Personal-Ziele."},
{m:"einf",q:"Was ist KEIN typischer Fehler im Social Media Management?",a:["Erfolg regelmäßig messen", "Ohne klare Strategie starten", "Kritik einfach löschen", "Ausschließlich Werbung posten"],c:0,e:"Messen ist richtig – die anderen drei sind klassische Fehlerquellen."},
{m:"platt",q:"Was ist ein Vorteil von Publishing-Tools?",a:["Mehrere Kanäle zentral planen und zeitgesteuert posten", "Automatisch mehr Follower durch bessere Platzierung", "Die Impressumspflicht entfällt für verbundene Kanäle", "Werbeanzeigen lassen sich darüber kostenlos schalten"],c:0,e:"Planung und Veröffentlichung aus einem Tool sparen Zeit."},
{m:"platt",q:"Wie gibst du einer Agentur sicher Zugriff auf eure Unternehmensseite?",a:["Über Rollen im Business-Tool der Plattform", "Passwort und 2FA-Code per E-Mail schicken", "Gemeinsames Passwort im Team-Chat teilen", "Gar nicht, Agenturen dürfen das rechtlich nicht"],c:0,e:"Rollen lassen sich gezielt vergeben und wieder entziehen – ohne das Passwort weiterzugeben."},
{m:"platt",q:"Was sollte man NICHT vollständig automatisieren?",a:["Den persönlichen Dialog mit der Community", "Das zeitgesteuerte Veröffentlichen von Beiträgen", "Benachrichtigungen bei Erwähnungen der Marke", "Monatliche Standardberichte"],c:0,e:"Automatisiere Routine, nicht Beziehung."},
{m:"platt",q:"Wofür eignet sich ein gemeinsamer Freigabe-Workflow?",a:["Damit Beiträge vor Veröffentlichung geprüft werden", "Damit Follower und Reichweite automatisch gezählt werden", "Damit Werbeanzeigen von Dritten blockiert werden", "Damit das Impressum automatisch erstellt wird"],c:0,e:"Freigaben verhindern Fehler und sorgen für Abstimmung."},
{m:"unt",q:"Was ist Employer Branding?",a:["Aufbau einer attraktiven Arbeitgebermarke", "Gestaltung eines Logos für Arbeitskleidung", "Werbung für Produkte durch Mitarbeitende", "Digitale Abwicklung der Gehaltsabrechnung"],c:0,e:"Die Arbeitgebermarke zeigt, wofür das Unternehmen als Arbeitgeber steht."},
{m:"unt",q:"Was beschreibt Enterprise 2.0?",a:["Den Einsatz von Social-Media-Werkzeugen für interne Zusammenarbeit", "Eine neue Unternehmensversion von Facebook mit eigener App", "Den Einsatz von Social Media ausschließlich für externe Kundenwerbung", "Eine EU-Verordnung zum Datenschutz in großen Unternehmen"],c:0,e:"Interne Netzwerke, Wikis und Chats fördern Wissensaustausch."},
{m:"unt",q:"Welchen Nachteil hat ein rein dezentrales Social-Media-Modell?",a:["Der Auftritt wird schnell uneinheitlich", "Die Nähe zu den Fachabteilungen geht verloren", "Es ist grundsätzlich teurer als zentral", "Fachabteilungen dürfen keine Inhalte posten"],c:0,e:"Wenn jede Abteilung selbst postet, leiden Einheitlichkeit und Qualität."},
{m:"unt",q:"Was braucht Social Media im Unternehmen unbedingt?",a:["Rückhalt der Geschäftsführung und klare Zuständigkeiten", "Ein Profil auf möglichst vielen verschiedenen Plattformen", "Ein tägliches Gewinnspiel zur Steigerung der Reichweite", "Ein externes Agenturbudget für alle Inhalte und Antworten"],c:0,e:"Ohne Rückendeckung und Ressourcen bleibt Social Media ein Nebenbei-Projekt."},
{m:"unt",q:"Was bedeutet integrierte Kommunikation?",a:["Alle Kanäle erzählen abgestimmt dieselbe Geschichte", "Jeder Kanal hat eigene, unabhängige Botschaften", "Nur Social Media wird noch für Kommunikation genutzt", "Alle Kanäle posten exakt denselben Beitrag gleichzeitig"],c:0,e:"Abgestimmte Botschaften über alle Kanäle verstärken sich gegenseitig."},
{m:"kpi",q:"Was ist Benchmarking?",a:["Vergleich eigener Kennzahlen mit Vergleichswerten", "Einkauf von Werbeplätzen zu festen Bestpreisen", "Ein Tool zum zeitgesteuerten Posten von Beiträgen", "Das Aussortieren schwacher Beiträge aus dem Feed"],c:0,e:"Verglichen wird mit Wettbewerbern, der Branche oder der eigenen Vergangenheit."},
{m:"kpi",q:"Was misst das Sentiment?",a:["Die Tonalität von Erwähnungen (positiv, neutral, negativ)", "Die Anzahl der Erwähnungen im Vergleich zum Wettbewerb", "Den Anteil der Nutzer, die auf einen Beitrag reagieren", "Die Häufigkeit, mit der eine Person eine Anzeige sieht"],c:0,e:"Sentiment-Analysen zeigen die Stimmung rund um eine Marke."},
{m:"kpi",q:"Was ist beim Benchmarking wichtig?",a:["Nur vergleichbare Werte vergleichen", "Möglichst viele verschiedene Zeiträume mischen", "Nur die besten eigenen Werte zeigen", "Immer mit den größten Marken der Welt vergleichen"],c:0,e:"Gleicher Zeitraum, gleiche Plattform, gleiche Berechnung."},
{m:"kpi",q:"Was bedeutet CPC?",a:["Kosten pro Klick","Klicks pro Kampagne","Conversions pro Kanal","Kosten pro Community"],c:0,e:"Cost per Click."},
{m:"kpi",q:"Welche KPI passt zum Ziel „mehr Bewerbungen“?",a:["Anzahl der Bewerbungen über Social Media", "Anzahl der Likes auf Karriere-Beiträgen", "Anzahl der veröffentlichten Stellenposts", "Anzahl der Follower auf dem Karriere-Kanal"],c:0,e:"Die KPI muss direkt am Ziel hängen."}
];

// Freitext-Fragen wie im Abschlusstest. muster: [Musterpunkt, Stichworte für den Abgleich (RegExp, ohne Groß/Klein)]
const FREI = [
{m:"einf",t:"frei",q:"Nennen Sie drei Chancen, die Social Media einem Unternehmen bietet.",muster:[["Hohe Reichweite / Bekanntheit bei geringen Kosten","reichweit|bekannt|kosten"],["Direkter Dialog mit Kunden","dialog|kommunikat|austausch|direkt"],["Kundenservice, Kundenbindung","service|bindung|loyal"],["Recruiting / Employer Branding","recruit|bewerb|personal|mitarbeit|arbeitgeber"],["Feedback, Marktforschung, Messbarkeit","feedback|meinung|markt|mess"]],min:3},
{m:"einf",t:"frei",q:"Nennen Sie vier typische Fehler im Social Media Management.",muster:[["Ohne Ziele / Strategie starten","ziel|strateg|plan"],["Zu viele Kanäle / zu wenig Ressourcen","kanäle|kanal|ressourc|zeit"],["Unregelmäßig posten, verwaiste Profile","unregelm|verwaist|regelmäßig|selten"],["Nur Werbung, kein Dialog","werbung|dialog|senden"],["Kritik löschen oder ignorieren","kritik|lösch|ignor"],["Erfolg nicht messen","mess|kpi|kennzahl|auswert"],["Rechtliche Fehler","recht|impressum|bild|urheber"]],min:4},
{m:"einf",t:"frei",q:"Erklären Sie den Unterschied zwischen Web 1.0 und Web 2.0.",muster:[["Web 1.0: Anbieter veröffentlichen, Nutzer lesen nur","lesen|passiv|statisch|anbieter|einbahn"],["Web 2.0: Nutzer erstellen und teilen selbst Inhalte","erstell|teil|mitmach|user|nutzer|inhalte"],["Interaktion / Dialog, viele mit vielen","interakt|dialog|many|viele|kommentar"]],min:2},
{m:"platt",t:"frei",q:"Wie würden Sie entscheiden, welche Plattformen ein Unternehmen nutzt? Nennen Sie mindestens drei Kriterien.",muster:[["Wo ist die Zielgruppe aktiv?","zielgrupp"],["Passt die Plattform zum Ziel?","ziel"],["Passen Format und Inhalte (Video, Bild, Text)?","format|inhalt|video|bild"],["Reichen Zeit, Personal und Budget?","ressourc|zeit|personal|budget"],["Was macht der Wettbewerb?","wettbewerb|konkurrenz"]],min:3},
{m:"platt",t:"frei",q:"Nennen Sie je ein Beispiel für ein Tool zur Planung, zur Gestaltung und zur Zusammenarbeit und beschreiben Sie den Nutzen.",muster:[["Planung/Publishing (z. B. Meta Business Suite, Hootsuite, Buffer): Beiträge zeitgesteuert für mehrere Kanäle","plan|hootsuite|buffer|business suite|meta|zeitgesteuert|later"],["Gestaltung (z. B. Canva, CapCut, Adobe): Grafiken/Videos im Corporate Design","canva|capcut|adobe|gestalt|design|grafik"],["Zusammenarbeit (z. B. Trello, Asana, Teams, geteilte Tabellen): Redaktionsplan, Freigaben","trello|asana|teams|slack|notion|tabelle|freigab|zusammen"]],min:3},
{m:"platt",t:"frei",q:"Welche Regeln sollten beim Einsatz von KI-Tools im Social Media Management gelten?",muster:[["Ergebnisse vor Veröffentlichung prüfen","prüf|kontroll|check"],["Keine personenbezogenen/vertraulichen Daten eingeben","daten|personenbez|vertraul|datenschutz"],["Täuschend echte KI-Inhalte kennzeichnen","kennzeich|offenleg|transparen"],["Urheber- und Persönlichkeitsrechte beachten","urheber|recht|persönlich"]],min:3},
{m:"unt",t:"frei",q:"Beschreiben Sie die Organisationsmodelle zentral, dezentral und Hub-and-Spoke mit je einem Vor- oder Nachteil.",muster:[["Zentral: ein Team steuert alles – einheitlich, aber fern der Fachabteilungen","zentral"],["Dezentral: Abteilungen posten selbst – nah dran, aber uneinheitlich","dezentral"],["Hub-and-Spoke: Zentrum koordiniert, Abteilungen liefern zu – Kompromiss","hub|spoke|koordin"]],min:3},
{m:"unt",t:"frei",q:"Was sollte in Social-Media-Guidelines für Mitarbeitende stehen?",muster:[["Was vertraulich ist und nicht gepostet wird","vertraul|geheim|intern"],["Kennzeichnung, dass man für/über das Unternehmen spricht","kennzeich|zugehörig|privat|meinung"],["Umgang mit Kritik, wer antwortet","kritik|antwort|zuständ|ansprech"],["Ton und Verhalten (respektvoll)","ton|respekt|verhalten|höflich"],["Rechtliches (Bilder, Datenschutz)","recht|bild|daten"]],min:3},
{m:"unt",t:"frei",q:"Wie reagieren Sie als Social Media Manager auf einen Shitstorm? Beschreiben Sie das Vorgehen.",muster:[["Lage einschätzen (berechtigt? Ausmaß?)","einschätz|analys|lage|prüf"],["Krisenplan aktivieren, intern abstimmen","krisenplan|intern|abstimm|geschäftsführ"],["Schnell erste Reaktion zeigen","schnell|zeitnah|reagier"],["Sachlich bleiben, Fehler eingestehen, Lösung anbieten","sachlich|fehler|entschuld|lösung"],["Berechtigte Kritik nicht löschen","lösch"],["Nachbereitung, daraus lernen","nachbereit|auswert|lernen"]],min:4},
{m:"recht",t:"frei",q:"Welche Anforderungen gelten für das Impressum auf einem geschäftlich genutzten Social-Media-Profil?",muster:[["Pflicht nach § 5 Digitale-Dienste-Gesetz (DDG)","ddg|digitale.dienste"],["Leicht erkennbar","erkennbar"],["Unmittelbar erreichbar (wenige Klicks)","erreichbar|klick"],["Ständig verfügbar","verfügbar|ständig"],["Praxis: Link in der Profil-Info","link|profil|bio"]],min:3},
{m:"recht",t:"frei",q:"Sie möchten ein Foto von einer Firmenfeier mit Mitarbeitenden posten. Was müssen Sie rechtlich beachten?",muster:[["Einwilligung der erkennbar abgebildeten Personen","einwillig|zustimm|erlaubnis"],["Bei Mitarbeitenden schriftlich (BAG)","schriftlich|dokument|bag"],["Hinweis auf Widerrufsrecht","widerruf"],["Recht am eigenen Bild / DSGVO","eigenen bild|kug|dsgvo|datenschutz"],["Urheberrecht des Fotografen klären","urheber|fotograf|nutzungsrecht"]],min:3},
{m:"recht",t:"frei",q:"Nennen Sie wichtige Bestandteile rechtssicherer Teilnahmebedingungen für ein Gewinnspiel.",muster:[["Veranstalter","veranstalt"],["Zeitraum / Teilnahmeschluss","zeitraum|ende|schluss|frist|datum"],["Teilnahmevoraussetzungen (z. B. Alter, Wohnsitz)","voraussetz|alter|wohnsitz|teilnahmeberecht"],["Gewinn und Auswahl/Benachrichtigung der Gewinner","gewinn|auslos|benachricht"],["Datenschutzhinweise","daten"],["Hinweis zur Plattform (nicht beteiligt) und Freistellung","plattform|instagram|facebook|meta|freistell|haftung"]],min:4},
{m:"kpi",t:"frei",q:"Erklären Sie den Unterschied zwischen Monitoring und Reporting.",muster:[["Monitoring: laufendes Beobachten von Erwähnungen, Stimmung, Themen (Social Listening)","beobacht|erwähn|stimmung|listening|laufend"],["Reporting: regelmäßige Auswertung der eigenen Kennzahlen gegen die Ziele","auswert|kennzahl|kpi|ziel|bericht"],["Reporting enthält Interpretation und Handlungsempfehlungen","empfehl|maßnahm|interpret"]],min:2},
{m:"kpi",t:"frei",q:"Ein Beitrag hat 8.000 Reichweite, 12.000 Impressionen, 400 Interaktionen und 96 Klicks. Berechnen Sie Engagement-Rate (auf Reichweite) und CTR.",muster:[["Engagement-Rate = 400 ÷ 8.000 × 100 = 5 %","(^|[^\\d,.])5\\s?(%|prozent)|5,0\\s?%"],["CTR = 96 ÷ 12.000 × 100 = 0,8 %","0[,.]8"]],min:2},
{m:"kpi",t:"frei",q:"Was gehört in ein monatliches Social-Media-Reporting für die Geschäftsführung?",muster:[["Ziele und Zeitraum","ziel|zeitraum"],["KPIs im Vergleich (Vormonat, Zielwert)","vergleich|vormonat|kpi|kennzahl"],["Top- und Flop-Beiträge","top|flop|beste|schlecht"],["Interpretation","interpret|warum|bewert"],["Handlungsempfehlungen","empfehl|maßnahm|nächste"]],min:3},
{m:"plan",t:"frei",q:"Nennen Sie die Schritte zur Planung einer Social-Media-Strategie in sinnvoller Reihenfolge.",muster:[["Analyse der Ausgangslage","analys|ist-|ausgangs"],["Ziele (SMART)","ziel"],["Zielgruppe / Persona","zielgrupp|persona"],["Kanäle auswählen","kanal|kanäle|plattform"],["Inhalte & Redaktionsplan","inhalt|content|redaktion"],["Budget & Ressourcen","budget|ressourc"],["Erfolgsmessung / KPIs","kpi|mess|kennzahl|erfolg"]],min:5},
{m:"plan",t:"frei",q:"Formulieren Sie ein SMART-Ziel für den Instagram-Auftritt einer Bäckerei und erklären Sie kurz, warum es SMART ist.",muster:[["Konkreter Inhalt (spezifisch)","spezif|konkret"],["Zahl (messbar)","\\d"],["Termin / Zeitraum (terminiert)","bis|202\\d|monat|woche|quartal|ende"],["Realistisch / erreichbar begründet","realist|erreich"]],min:3},
{m:"plan",t:"frei",q:"Beschreiben Sie eine Persona für ein Unternehmen Ihrer Wahl. Welche Angaben gehören hinein?",muster:[["Name, Alter, Wohnort, Beruf","alter|jahre|beruf|wohn"],["Ziele und Wünsche","ziel|wunsch|wünsch"],["Probleme / Pain Points","problem|pain|sorge"],["Mediennutzung: welche Plattformen, wann","instagram|linkedin|tiktok|facebook|youtube|nutzt|plattform"]],min:3},
{m:"plan",t:"frei",q:"Welche Kostenblöcke gehören in ein Social-Media-Budget?",muster:[["Werbebudget (Ads)","werb|ads|anzeig"],["Produktion (Foto, Video, Grafik)","produkt|foto|video|grafik"],["Personal / interne Arbeitszeit","personal|zeit|stunden|mitarbeit"],["Tools / Software","tool|software|lizenz"],["Externe Dienstleister","agentur|extern|dienstleist|freelanc"]],min:3}
];

export const FRAGEN = [...ALT_Q, ...NEU_Q, ...FREI, ...NEUE.mc, ...NEUE.frei];

/* =====================================================================
   Ergänzungen nach der Fachprüfung (06.11.2026): Lücken schließen
   ===================================================================== */
const NEU2 = {
 dsgvo: { id: "dsgvo", titel: "DSGVO-Grundlagen & Tracking", min: 4, folien: [
  { k: "intro", h: "Datenschutz im Social Web", b: "Social Media Manager verarbeiten ständig **personenbezogene Daten**: Namen, Kommentare, Nachrichten, Fotos, Tracking-Daten. Dafür gilt die **DSGVO**." },
  { k: "liste", h: "Grundsätze (Art. 5 DSGVO)", l: ["Rechtmäßigkeit und Transparenz", "Zweckbindung", "Datenminimierung – nur so viel wie nötig", "Richtigkeit", "Speicherbegrenzung", "Sicherheit und Vertraulichkeit"] },
  { k: "text", h: "Rechtsgrundlage nötig (Art. 6)", b: "Jede Verarbeitung braucht eine Rechtsgrundlage, z. B. **Einwilligung**, **Vertrag** oder **berechtigtes Interesse**. Betroffene müssen informiert werden (Art. 13) und haben Rechte, z. B. auf **Auskunft** und **Löschung**. Verstöße können Bußgelder bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes kosten (Art. 83)." },
  { k: "text", h: "Cookies & Pixel (§ 25 TDDDG)", b: "Wer Informationen auf dem Gerät speichert oder ausliest – z. B. Tracking-Pixel für Retargeting –, braucht grundsätzlich eine **Einwilligung**. Ausgenommen sind nur technisch unbedingt erforderliche Cookies. Das Gesetz hieß früher TTDSG." },
  { k: "check", q: "Du willst den Meta-Pixel für Retargeting auf der Website einsetzen. Was brauchst du in der Regel?", a: ["Eine Einwilligung der Besucher, z. B. über das Cookie-Banner", "Nichts, Pixel gelten als technisch notwendige Cookies", "Nur einen Hinweis im Impressum, eine Einwilligung entfällt", "Einen Auftragsverarbeitungsvertrag, der die Einwilligung ersetzt"], c: 0, e: "Tracking-Pixel sind nicht technisch notwendig – nach § 25 TDDDG ist eine Einwilligung nötig." }
 ]},
 analyse: { id: "analyse", titel: "Analyse: SWOT & Customer Journey", min: 4, folien: [
  { k: "intro", h: "Erst verstehen, dann planen", b: "Am Anfang jeder Strategie steht die **Analyse**: Wo stehen wir, was macht der Wettbewerb, wie entscheiden sich Kunden?" },
  { k: "text", h: "SWOT-Analyse", b: "**Intern:** Stärken (Strengths) und Schwächen (Weaknesses) des Unternehmens.\n**Extern:** Chancen (Opportunities) und Risiken (Threats) im Markt.\nBeispiel Bäckerei: Stärke = handwerkliche Qualität, Schwäche = wenig Personal, Chance = regionale Produkte im Trend, Risiko = Discounter-Backshops." },
  { k: "liste", h: "Was zur Analyse gehört", l: ["Ist-Zustand der eigenen Kanäle (Content-Audit)", "Wettbewerbsanalyse", "Zielgruppe und Mediennutzung", "Positionierung und Tonalität (Brand Voice)", "Ressourcen: Zeit, Personal, Budget"] },
  { k: "text", h: "Customer Journey", b: "Die Reise des Kunden vom ersten Kontakt bis zur Bindung. Bekannte Modelle: **AIDA** (Attention, Interest, Desire, Action) und **See – Think – Do – Care**. Für jede Phase planst du passende Inhalte und Kennzahlen." },
  { k: "check", q: "In welchen Teil der SWOT-Analyse gehört „wenig Personal für Social Media“?", a: ["Schwächen (Weaknesses)", "Stärken (Strengths)", "Chancen (Opportunities)", "Risiken (Threats)"], c: 0, e: "Das ist ein interner Faktor mit negativer Wirkung – also eine Schwäche." }
 ]},
 influencer: { id: "influencer", titel: "Influencer-Marketing", min: 3, folien: [
  { k: "text", h: "Was ist Influencer-Marketing?", b: "Unternehmen arbeiten mit Menschen zusammen, die in ihrer Community **Vertrauen und Reichweite** haben. Grob unterscheidet man **Nano- und Mikro-Influencer** (kleinere, oft sehr engagierte Communitys) sowie **Makro- und Mega-Influencer** (sehr große Reichweite)." },
  { k: "liste", h: "Auswahlkriterien", l: ["Passt die Person zur Marke und Zielgruppe?", "Engagement-Rate statt nur Follower-Zahl", "Echtheit der Follower (keine gekauften)", "Bisherige Kooperationen und Werte", "Kosten im Verhältnis zum Ziel"] },
  { k: "text", h: "Zusammenarbeit", b: "Klare **Briefings** und **Verträge**: Inhalte, Zeitraum, Nutzungsrechte, Freigabe, Vergütung – und die Pflicht zur **Werbekennzeichnung**. Auch Gratisprodukte gelten als Gegenleistung." },
  { k: "check", q: "Welches Kriterium ist bei der Influencer-Auswahl am aussagekräftigsten?", a: ["Passung zur Zielgruppe und echtes Engagement", "Möglichst viele Follower", "Möglichst günstiger Preis", "Möglichst viele Kooperationen mit anderen Marken"], c: 0, e: "Reichweite allein nützt nichts, wenn die Community nicht zur Zielgruppe passt oder kaum interagiert." }
 ]},
 erfolg: { id: "erfolg", titel: "Erfolg bewerten: ROI, ROAS & Soll-Ist", min: 4, folien: [
  { k: "intro", h: "Lohnt sich das?", b: "Controlling heißt: Ziele planen (**Soll**), Ergebnisse messen (**Ist**), Abweichungen erklären und **gegensteuern**." },
  { k: "text", h: "Soll-Ist-Vergleich", b: "Soll: 40 Bewerbungen im Quartal. Ist: 28. Abweichung: −30 %. Nächster Schritt: Ursache finden (z. B. zu wenig Reichweite bei Schülern) und Maßnahmen anpassen." },
  { k: "text", h: "ROI", b: "**Return on Investment** = (Ertrag − Kosten) ÷ Kosten × 100.\nBeispiel: 1.500 € Ertrag bei 1.000 € Kosten → **50 %**." },
  { k: "text", h: "ROAS & CPA", b: "**ROAS** = Umsatz aus Anzeigen ÷ Werbekosten. 2.000 € Umsatz bei 500 € Kosten → ROAS **4**.\n**CPA** (Cost per Action) = Kosten ÷ Conversions." },
  { k: "liste", h: "KPI oder nur Metrik?", l: ["**Metrik:** jede messbare Zahl (Likes, Views …)", "**KPI:** die wenigen Kennzahlen, die direkt am Ziel hängen", "Weitere: Follower-Wachstumsrate, Wiedergabedauer, Reaktionszeit", "Klicks zuordnen mit UTM-Parametern in der Web-Analyse"] },
  { k: "check", q: "Eine Kampagne kostet 500 € und bringt 2.000 € Umsatz. Wie hoch ist der ROAS?", a: ["4", "0,25", "1.500", "400 %"], c: 0, e: "ROAS = 2.000 ÷ 500 = 4 – also 4 € Umsatz je 1 € Werbung." }
 ]}
};
const modX = id => MODULE.find(m => m.id === id);
modX("recht").lektionen.push(NEU2.dsgvo);
modX("plan").lektionen.splice(1, 0, NEU2.analyse);
modX("plan").lektionen.splice(modX("plan").lektionen.findIndex(l => l.id === "ads-basis"), 0, NEU2.influencer);
modX("kpi").lektionen.push(NEU2.erfolg);

// Zusätzliche Folien in bestehenden Lektionen
LX("impressum").folien.splice(3, 0, { k: "liste", h: "Was ins Impressum gehört (§ 5 DDG)", l: ["Name und Anschrift, bei Firmen Rechtsform und Vertretungsberechtigte", "E-Mail und ein weiterer schneller Kontaktweg", "Handelsregister und Registernummer", "Umsatzsteuer-ID, falls vorhanden", "Bei redaktionellen Inhalten: verantwortliche Person (§ 18 MStV)"] });
LX("bildrechte").folien.splice(3, 0, { k: "liste", h: "Urheberrecht kompakt", l: ["Schutz bis 70 Jahre nach dem Tod des Urhebers, einfache Lichtbilder 50 Jahre", "Zitat (§ 51 UrhG) nur mit Belegzweck und Quellenangabe", "Parodie, Karikatur, Pastiche (§ 51a) – z. B. manche Memes – mit Grenzen", "Creative-Commons-Lizenzen: Bedingungen wie Namensnennung einhalten", "Fremde Logos und Marken nicht als eigene Werbung nutzen"] });
LX("ads-basis").folien.splice(LX("ads-basis").folien.length - 1, 0, { k: "merke", h: "Jugendschutz bei Anzeigen", b: "Plattformen dürfen Minderjährigen **keine Werbung auf Basis von Profiling** zeigen (Art. 28 Digital Services Act). Wer Schüler für Ausbildungsplätze erreichen will, setzt deshalb stärker auf **organische Inhalte** und Eltern, Lehrkräfte oder Erwachsene als Zielgruppe." });
LX("automatisierung").folien.splice(LX("automatisierung").folien.length - 1, 0, { k: "text", h: "KI-Kompetenz im Team", b: "Unternehmen, die KI-Tools einsetzen, sollen die **KI-Kompetenz** ihrer Mitarbeitenden fördern (Art. 4 EU-KI-Verordnung; durch den Digital Omnibus 2026 abgeschwächt) – damit alle wissen, was die Tools können, wo Risiken liegen und was zu prüfen ist." });
LX("content-strategie").folien.splice(LX("content-strategie").folien.length - 1, 0, { k: "liste", h: "Barrierefrei posten", l: ["Alt-Texte (Bildbeschreibungen) für Bilder", "Untertitel für Videos – viele schauen ohne Ton", "Gute Kontraste und gut lesbare Schrift", "Hashtags in CamelCase: #SocialMediaManager", "Emojis sparsam – Screenreader lesen sie vor"] });

/* =====================================================================
   Gliederung nach der HSB-Kursinformation (Stand 11/2026)
   1 Routenplaner Web 2.0 · 2 Plattformen & Tools · 3 Einbettung ins Unternehmen
   4 Recht · 5 Monitoring & Controlling · 6 Planung & Umsetzung
   Social Ads stehen nicht im Lehrplan → eigenes Modul „Zusatzwissen“, nicht im Probetest.
   ===================================================================== */
{
 const alle = Object.fromEntries(MODULE.flatMap(m => m.lektionen).map(l => [l.id, l]));
 const nimm = ids => ids.filter(id => alle[id]).map(id => alle[id]);
 const M = Object.fromEntries(MODULE.map(m => [m.id, m]));
 Object.assign(M.einf, { name: "Routenplaner Web 2.0", kurz: "Web 2.0",
  text: "Was Social Media ausmacht, was Social Media Manager tun, Chancen, Risiken, Einsatzgebiete und typische Fehler." });
 Object.assign(M.platt, { name: "Plattformen & Tools", kurz: "Plattformen",
  text: "Blogs, Communitys und Microblogging, die großen Netzwerke von LinkedIn bis TikTok – und Tools inklusive KI." });
 Object.assign(M.unt, { name: "Einbettung ins Unternehmen", kurz: "Einbettung",
  text: "Konzeption, Status-quo-Analyse, Ziele, Personas, Kanalauswahl, Ressourcen, Organisation, Content-Strategie, Influencer und Governance." });
 Object.assign(M.recht, { name: "Recht & Richtlinien", kurz: "Recht",
  text: "Impressum, Werbekennzeichnung, Urheber- und Bildrechte, Datenschutz, Plattformregeln, nutzergenerierte Inhalte und Social-Media-Richtlinien." });
 Object.assign(M.kpi, { name: "Monitoring & Controlling", kurz: "Controlling",
  text: "Erfolgsmessung, KPIs, Datenerhebung, Reporting, Interpretation und Monitoring-Tools." });
 Object.assign(M.plan, { name: "Planung & Umsetzung", kurz: "Umsetzung",
  text: "Themen- und Redaktionsplanung, Customer Journey, Content- und Community-Management, Produktion, Streuung sowie Kritik- und Krisenmanagement." });
 M.einf.lektionen = nimm(["web20", "rolle", "chancen", "einsatz", "fehler"]);
 M.platt.lektionen = nimm(["blogs-communitys", "linkedin", "insta-tiktok", "kanalwahl", "tools", "automatisierung"]);
 M.unt.lektionen = nimm(["strategie", "analyse", "einbettung", "ziele", "persona", "kanalauswahl", "budget", "organisation", "content-strategie", "influencer", "recruiting", "governance"]);
 M.recht.lektionen = nimm(["impressum", "bildrechte", "datenschutz", "dsgvo", "plattformregeln", "ugc", "richtlinien"]);
 M.kpi.lektionen = nimm(["kennzahlen", "datenerhebung", "monitoring", "benchmarking", "report", "erfolg", "monitoring-tools"]);
 M.plan.lektionen = nimm(["umsetzung", "redaktion", "customer-journey", "produktion", "community", "krise"]);
 alle["kanalwahl"].titel = "YouTube & Facebook";
 alle["strategie"].titel = "Konzeption: Die Strategie im Überblick";
 alle["budget"].titel = "Ressourcen & Budget planen";
 MODULE.push({ id: "ads", name: "Social Ads", kurz: "Social Ads", farbe: "#c2410c", zusatz: true,
  text: "Nicht Teil des Lehrplans und nicht im Probetest – aber in der Praxis gefragt: Anzeigen, Targeting, Funnel und Anzeigen-Kennzahlen.",
  lektionen: nimm(["ads-basis", "ads-kpi"]) });
 // Sicherheitsnetz: keine Lektion darf verloren gehen
 const platziert = new Set(MODULE.flatMap(m => m.lektionen));
 Object.values(alle).forEach(l => { if (!platziert.has(l)) { console.warn("Lektion ohne Modul:", l.id); M.unt.lektionen.push(l); } });
 // Fragen den neuen Modulen zuordnen (erste passende Regel gewinnt)
 const REGELN = [
  [/Retargeting|Targeting|Anzeige läuft seit|CPL bei 30|Ziel: 20 Verkäufe|mit Social Ads/, "ads"],
  [/Guidelines|Social-Media-Richtlinie|privaten Profil ein Produkt/, "recht"],
  [/A\/B-Test/, "kpi"],
  [/Redaktionsplan|User Generated|Shitstorm|Kommentar|Netiquette|Storytelling|Heldenreise|Eskalationsmatrix|Troll|Krise|peinliches Video|Dark Site|Holding Statement|Bestellnummer|AIDA|See – Think|Funnel|Touchpoint|Customer Journey|Evergreen|Community Management/, "plan"]
 ];
 FRAGEN.forEach(q => { if (q.m !== "plan" && q.m !== "unt") return; const r = REGELN.find(([re]) => re.test(q.q)); q.m = r ? r[1] : "unt"; });
}
