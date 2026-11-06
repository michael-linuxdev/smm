// Begriffsfragen für Quereinsteiger: „Was bedeutet …?“ / „Was beschreibt …?“. Format wie data/kurs.js (FRAGEN).
// c = 0, die App mischt die Antworten. Distraktoren = typische Verwechslungen.
export const BEGRIFFSFRAGEN = [
 // ---------- einf ----------
 { m: "einf", q: "Was bedeutet „Marketing“?", a: [
  "Alles, was dafür sorgt, dass Kunden ein Angebot kennen, wollen und kaufen",
  "Nur das Schalten von bezahlten Anzeigen in Zeitung, Radio, Fernsehen und im Internet",
  "Die Pflege von Kontakten zu Journalisten und Redaktionen",
  "Der persönliche Verkauf im Laden oder beim Kunden vor Ort"
 ], c: 0, e: "Marketing ist der Oberbegriff: Angebot, Preis, Werbung, Auftritt. Anzeigen sind nur ein Teil davon, Pressekontakte gehören zur PR, der Verkauf zum Vertrieb." },
 { m: "einf", q: "Wofür steht die Abkürzung „PR“?", a: [
  "Public Relations – Öffentlichkeitsarbeit",
  "Paid Reach – bezahlte Reichweite",
  "Product Review – Produktbewertung",
  "Performance Rate – Erfolgsquote"
 ], c: 0, e: "PR pflegt das Ansehen eines Unternehmens in der Öffentlichkeit, z. B. über Pressemitteilungen – im Unterschied zu bezahlter Werbung." },
 { m: "einf", q: "Ein Hersteller von Backöfen verkauft an Bäckereien. Was beschreibt diese Art von Geschäft?", a: [
  "B2B – Unternehmen verkauft an Unternehmen",
  "B2C – Unternehmen verkauft an Privatkunden",
  "C2C – Privatleute verkaufen an Privatleute",
  "B2G – Unternehmen verkauft an Behörden"
 ], c: 0, e: "Bäckereien sind selbst Unternehmen, also Business-to-Business (B2B). Verkauft die Bäckerei ihr Brot an Familien, ist das B2C." },
 { m: "einf", q: "Was bedeutet „B2C“?", a: [
  "Ein Unternehmen verkauft an Privatpersonen",
  "Ein Unternehmen verkauft an andere Unternehmen",
  "Zwei Unternehmen arbeiten bei einer Kampagne zusammen",
  "Kunden verkaufen gebrauchte Ware über eine Plattform weiter"
 ], c: 0, e: "B2C = Business-to-Consumer, z. B. ein Friseur und seine Kundschaft. B2B wäre der Verkauf an Firmen, C2C der Verkauf unter Privatleuten." },
 { m: "einf", q: "Was beschreibt die „Zielgruppe“?", a: [
  "Die Menschen, die man mit einem Angebot oder Beitrag erreichen will",
  "Das Team im Unternehmen, das für das Erreichen der Marketingziele verantwortlich ist",
  "Alle Personen, die einem Kanal bereits folgen",
  "Die Wettbewerber, mit denen man sich vergleicht"
 ], c: 0, e: "Die Zielgruppe legt man vorab fest. Die Follower können davon abweichen – z. B. folgen einer Bäckerei viele Auswärtige, die gar nicht vorbeikommen." },
 { m: "einf", q: "Was bedeutet „Recruiting“?", a: [
  "Gewinnung neuer Mitarbeitender",
  "Rückgewinnung verlorener Kunden",
  "Wiederverwertung alter Beiträge",
  "Prüfung von Verträgen mit Agenturen"
 ], c: 0, e: "Recruiting ist die Personalgewinnung – über Social Media heißt das Social Recruiting. Beiträge wiederverwerten heißt Repurposing." },
 { m: "einf", q: "Was beschreibt eine „Kampagne“?", a: [
  "Eine zeitlich begrenzte Aktion mit klarem Ziel und abgestimmten Maßnahmen",
  "Ein einzelner Beitrag, der besonders viele Likes bekommen hat",
  "Die dauerhafte Betreuung von Kommentaren und Nachrichten auf allen Kanälen",
  "Das jährliche Budget für alle Marketingausgaben eines Unternehmens"
 ], c: 0, e: "Beispiel: vier Wochen Beiträge und Anzeigen zur Eröffnung einer neuen Filiale. Die laufende Betreuung von Kommentaren ist Community Management." },
 { m: "einf", q: "Was ist mit dem „Feed“ in einer Social-Media-App gemeint?", a: [
  "Die laufende Liste von Beiträgen, die man durchscrollt",
  "Die Rückmeldung von Kunden zu einem Produkt",
  "Das bezahlte Hervorheben eines Beitrags",
  "Die Liste aller Personen, denen man folgt"
 ], c: 0, e: "Im Feed erscheinen Beiträge, meist vom Algorithmus sortiert. Rückmeldung heißt Feedback – leicht zu verwechseln." },

 // ---------- platt ----------
 { m: "platt", q: "Was beschreibt „organische Reichweite“?", a: [
  "Reichweite, die ohne bezahlte Anzeigen entsteht",
  "Reichweite bei Menschen, die sich für Bio-Produkte interessieren",
  "Reichweite, die nur innerhalb der eigenen Stadt entsteht",
  "Reichweite, die ausschließlich über Anzeigen eingekauft wird"
 ], c: 0, e: "„Organisch“ heißt hier: natürlich gewachsen, unbezahlt. Bezahlte Reichweite entsteht über Anzeigen (Paid)." },
 { m: "platt", q: "Was ist ein „Prompt“ bei der Arbeit mit KI-Tools?", a: [
  "Die Anweisung, die man der KI gibt",
  "Eine Fehlermeldung des KI-Tools",
  "Ein von der KI erfundenes Zitat",
  "Die monatliche Gebühr für das Tool"
 ], c: 0, e: "Je klarer der Prompt (Ziel, Zielgruppe, Ton, Länge), desto brauchbarer das Ergebnis. Erfundene Angaben der KI heißen Halluzinationen." },
 { m: "platt", q: "Wofür steht „CRM“?", a: [
  "Customer Relationship Management – Verwaltung von Kundenbeziehungen",
  "Content Release Manager – Tool zur Freigabe und Planung von Beiträgen",
  "Cost per Reach Metric – Kosten pro erreichter Person",
  "Community Rules Management – Verwaltung der Netiquette"
 ], c: 0, e: "In einem CRM-System sind Kundenkontakte, Anfragen und Angebote gespeichert. Leads aus Social Media werden oft direkt dorthin übertragen." },
 { m: "platt", q: "Was ist ein „Dashboard“?", a: [
  "Eine Übersicht, die wichtige Kennzahlen auf einen Blick zeigt",
  "Ein Bereich, in dem Beiträge vor der Freigabe gesammelt werden",
  "Eine Pinnwand, auf der Mitarbeitende Ideen sammeln",
  "Die Startseite eines Profils mit Bio und Profilbild"
 ], c: 0, e: "Ein gutes Dashboard zeigt wenige, zielbezogene Kennzahlen – jeweils mit Zielwert, Vergleichszeitraum und Trend." },

 // ---------- unt ----------
 { m: "unt", q: "Was beschreibt „Paid Media“?", a: [
  "Reichweite, für die man bezahlt, z. B. Anzeigen",
  "Eigene Kanäle wie Website und Profile",
  "Erwähnungen und Shares durch andere",
  "Kostenlose Pressemitteilungen an Redaktionen und Journalisten"
 ], c: 0, e: "Paid = bezahlt (Anzeigen, Sponsoring), Owned = eigene Kanäle, Earned = von anderen „verdient“, z. B. Presseberichte und Bewertungen." },
 { m: "unt", q: "Was beschreibt „Earned Media“?", a: [
  "Aufmerksamkeit, die andere freiwillig erzeugen, z. B. Bewertungen",
  "Umsatz, der direkt über bezahlte Social-Media-Anzeigen verdient wurde",
  "Eigene Kanäle, die das Unternehmen selbst kontrolliert",
  "Inhalte, die eine Agentur gegen Honorar produziert"
 ], c: 0, e: "„Earned“ heißt verdient – nicht im Sinne von Geld, sondern von Aufmerksamkeit: Shares, Erwähnungen, Presseberichte, Bewertungen." },
 { m: "unt", q: "Was ist eine „Persona“?", a: [
  "Eine erfundene, aber typische Person aus der Zielgruppe",
  "Eine echte Kundin, die regelmäßig über die Marke postet",
  "Das persönliche Profil der Geschäftsführung auf LinkedIn",
  "Ein Fake-Account, mit dem man Kommentare schreibt"
 ], c: 0, e: "Personas fassen Daten über die Zielgruppe in einer greifbaren Figur zusammen – mit Alter, Zielen, Problemen und Mediennutzung." },
 { m: "unt", q: "Was ist ein „Briefing“?", a: [
  "Eine Auftragsbeschreibung mit Ziel, Inhalt, Terminen und Budget",
  "Ein kurzer Beitrag mit weniger als 100 Zeichen",
  "Die Abschlussbesprechung mit dem Team nach dem Ende einer Kampagne",
  "Ein Brief an Kunden mit Neuigkeiten des Monats"
 ], c: 0, e: "Ein gutes Briefing sagt Agentur, Fotografin oder Influencer genau, was gebraucht wird. Die Auswertung danach nennt man Debriefing." },
 { m: "unt", q: "Was beschreibt die „Tonalität“ eines Unternehmens auf Social Media?", a: [
  "Wie es spricht: z. B. locker oder förmlich, Du oder Sie",
  "Welche Musik es in seinen Videos verwenden darf",
  "Wie laut Videos abgespielt werden sollen",
  "Ob Kommentare positiv oder negativ ausfallen"
 ], c: 0, e: "Tonalität (Tone of Voice) ist die Art zu sprechen. Ob Erwähnungen positiv oder negativ sind, misst dagegen das Sentiment." },
 { m: "unt", q: "Was beschreibt „Outsourcing“ im Social Media Management?", a: [
  "Aufgaben an Agenturen oder Freelancer abgeben",
  "Inhalte von Mitarbeitenden auf ihren Profilen teilen lassen",
  "Einen Kanal schließen, der nicht mehr gebraucht wird",
  "Kundendaten in ein anderes Tool übertragen"
 ], c: 0, e: "Häufig ist eine Mischform: Videos macht eine Agentur, Kommentare beantwortet das eigene Team. Mitarbeitende als Fürsprecher = Employee Advocacy." },

 // ---------- recht ----------
 { m: "recht", q: "Wofür steht die Abkürzung „DSGVO“?", a: [
  "Datenschutz-Grundverordnung",
  "Digitale-Dienste-Gesetzesverordnung",
  "Deutsche Social-Media-Grundordnung",
  "Datensicherheits-Gesetz für Onlinedienste"
 ], c: 0, e: "Die DSGVO ist ein EU-Gesetz und gilt seit 2018. Sie regelt, wann personenbezogene Daten wie Namen oder Fotos verarbeitet werden dürfen." },
 { m: "recht", q: "Was regelt das KUG (Kunsturhebergesetz) im Social Media Management vor allem?", a: [
  "Das Recht am eigenen Bild abgebildeter Personen",
  "Die Kennzeichnung von KI-generierten Bildern und Videos",
  "Den Schutz von Musik in Videos",
  "Die Pflichtangaben im Impressum"
 ], c: 0, e: "§ 22 KUG: Erkennbar abgebildete Personen müssen grundsätzlich einwilligen. Musik schützt das Urheberrechtsgesetz, das Impressum regelt § 5 DDG." },
 { m: "recht", q: "Was regelt das UWG (Gesetz gegen den unlauteren Wettbewerb) vor allem?", a: [
  "Faire Werbung: keine Irreführung und erkennbare Werbung",
  "Den Schutz personenbezogener Daten von Kunden",
  "Die Rechte des Betriebsrats bei neuen Tools",
  "Die Pflichten großer Plattformen beim Löschen von Inhalten"
 ], c: 0, e: "Verstöße gegen das UWG – z. B. Schleichwerbung – werden oft von Wettbewerbern oder Verbänden abgemahnt. Datenschutz regelt die DSGVO, Plattformpflichten der DSA." },
 { m: "recht", q: "Was bedeutet „Schleichwerbung“?", a: [
  "Werbung, die nicht als Werbung erkennbar ist",
  "Werbung, die sehr langsam an Reichweite gewinnt",
  "Werbung, die nur nachts ausgespielt wird",
  "Werbung, die sich an eine sehr kleine Zielgruppe richtet"
 ], c: 0, e: "Bezahlte oder mit Gratisprodukten belohnte Beiträge müssen klar als Werbung gekennzeichnet werden, z. B. mit „Werbung“ oder „Anzeige“." },
 { m: "recht", q: "Was ist im Datenschutz eine wirksame „Einwilligung“?", a: [
  "Eine freiwillige, informierte und eindeutige Zustimmung, die widerrufbar ist",
  "Eine Zustimmung, die man nach einmaliger Abgabe nicht mehr zurücknehmen kann",
  "Ein Hinweis in der Datenschutzerklärung, dass Daten verarbeitet werden",
  "Das Schweigen einer Person, wenn sie einem Foto nicht widerspricht"
 ], c: 0, e: "Schweigen oder ein vorangekreuztes Kästchen reichen nicht. Eine Einwilligung kann jederzeit für die Zukunft widerrufen werden (Art. 7 DSGVO)." },
 { m: "recht", q: "Was ist ein „Nutzungsrecht“ an einem Foto?", a: [
  "Die Erlaubnis des Urhebers oder Rechteinhabers, das Foto auf eine bestimmte Weise zu nutzen",
  "Das Recht, jedes öffentlich auffindbare Foto mit Quellenangabe zu posten",
  "Das Eigentum an der Kamera, mit der das Foto gemacht wurde",
  "Die Pflicht, abgebildete Personen im Beitrag zu markieren"
 ], c: 0, e: "Wer ein fremdes Foto nutzen will, braucht eine Lizenz – vom Urheber selbst oder z. B. von einer Bildagentur. Eine Quellenangabe allein ersetzt die Erlaubnis nicht." },
 { m: "recht", q: "Was ist ein „Tracking-Pixel“?", a: [
  "Unsichtbarer Code, der Website-Besuche an eine Plattform meldet",
  "Der kleinste Bildpunkt eines Fotos in einem Beitrag",
  "Ein Symbol, mit dem die App bezahlte Werbebeiträge sichtbar markiert",
  "Ein Filter, der Gesichter auf Fotos unkenntlich macht"
 ], c: 0, e: "Pixel wie das Meta-Pixel ermöglichen z. B. Retargeting. Weil sie Daten vom Gerät auslesen, braucht man in der Regel vorher eine Einwilligung (§ 25 TDDDG)." },
 { m: "recht", q: "Was sind „AGB“?", a: [
  "Allgemeine Geschäftsbedingungen – vorformulierte Vertragsregeln",
  "Amtliche Genehmigungsbescheide für Werbung im Internet",
  "Anforderungen an geschäftlich genutzte Bilder auf Social-Media-Profilen",
  "Abmahnungsgebühren bei Verstößen gegen das Wettbewerbsrecht"
 ], c: 0, e: "Auch die Nutzungsbedingungen von Instagram oder TikTok sind AGB – rechtlich ein Vertrag zwischen Nutzer und Plattform." },

 // ---------- kpi ----------
 { m: "kpi", q: "Was beschreibt ein „Lead“?", a: [
  "Ein Kontakt, der Interesse gezeigt hat, z. B. eine Anfrage",
  "Ein Kunde, der bereits mehrfach gekauft hat",
  "Der Beitrag mit der höchsten Reichweite im Monat",
  "Die Person im Team, die eine Kampagne leitet"
 ], c: 0, e: "Ein Lead ist ein möglicher Kunde (oder Bewerber), von dem man Kontaktdaten oder eine Anfrage hat – gekauft hat er noch nicht." },
 { m: "kpi", q: "Was bedeutet „Conversion“?", a: [
  "Eine gewünschte Handlung, z. B. Kauf oder Anfrage",
  "Das Umrechnen von Kennzahlen in Prozent",
  "Das Umwandeln eines Videos in ein anderes Format",
  "Ein Gespräch in den Kommentaren unter einem Beitrag"
 ], c: 0, e: "Welche Handlung als Conversion zählt, legt man vorab fest: Kauf, Anfrage, Bewerbung oder Newsletter-Anmeldung. Gespräche misst die Conversation Rate." },
 { m: "kpi", q: "Wofür steht „KPI“?", a: [
  "Key Performance Indicator – Kennzahl, die den Zielerfolg zeigt",
  "Key Promotion Index – Rangliste der erfolgreichsten Anzeigen im Monat",
  "Kunden-Profil-Information – Daten zu einer Persona",
  "Kanal-Planungs-Instrument – Vorlage für den Redaktionsplan"
 ], c: 0, e: "Ein KPI muss direkt am Ziel hängen: Bei „mehr Bewerbungen“ ist das z. B. die Zahl der Bewerbungen, nicht die Zahl der Likes." },
 { m: "kpi", q: "Was misst die CTR (Click-Through-Rate)?", a: [
  "Den Anteil der Impressionen, die zu einem Klick führen",
  "Die Kosten, die ein einzelner Klick verursacht",
  "Den Anteil der Klickenden, die etwas kaufen",
  "Die Zahl der Klicks pro Follower und Monat"
 ], c: 0, e: "CTR = Klicks ÷ Impressionen × 100. Die Kosten pro Klick sind der CPC, der Anteil der Käufer unter den Klickenden die Conversion-Rate." },
 { m: "kpi", q: "Was beschreibt der ROI (Return on Investment)?", a: [
  "Wie viel Gewinn eine Ausgabe im Verhältnis zu ihren Kosten bringt",
  "Wie viel Umsatz jeder einzelne Werbe-Euro erzielt",
  "Wie viele Personen eine Anzeige mindestens einmal auf dem Bildschirm gesehen haben",
  "Wie schnell ein Unternehmen auf Kundenanfragen reagiert"
 ], c: 0, e: "ROI = (Ertrag − Kosten) ÷ Kosten × 100. Umsatz pro Werbe-Euro ist der ROAS – er sagt noch nichts über den Gewinn." },
 { m: "kpi", q: "Was beschreibt der ROAS (Return on Ad Spend)?", a: [
  "Umsatz aus Anzeigen geteilt durch die Werbekosten",
  "Gewinn aus Anzeigen abzüglich aller Personalkosten",
  "Werbekosten geteilt durch die Zahl der Klicks",
  "Anteil der Anzeigen, die vollständig angesehen wurden"
 ], c: 0, e: "Beispiel: 500 € Werbung, 2.000 € Umsatz = ROAS 4. Werbekosten ÷ Klicks ergibt den CPC." },
 { m: "kpi", q: "Was bedeutet „CPA“ bei Anzeigen?", a: [
  "Kosten pro Abschluss, z. B. pro Kauf",
  "Kosten pro 1.000 Impressionen einer Anzeige",
  "Kosten pro Klick auf die Anzeige",
  "Klicks pro Anzeige und Tag"
 ], c: 0, e: "CPA = Cost per Action/Acquisition: Kosten ÷ Conversions. Kosten pro 1.000 Impressionen ist der CPM, Kosten pro Klick der CPC." },
 { m: "kpi", q: "Was zeigt die Engagement-Rate?", a: [
  "Wie stark die Erreichten mit einem Beitrag interagieren – Interaktionen im Verhältnis zur Reichweite",
  "Wie viele Mitarbeitende Beiträge des Unternehmens teilen",
  "Wie viele neue Follower ein Profil pro Monat gewinnt",
  "Wie lange ein Video im Durchschnitt angesehen wird"
 ], c: 0, e: "Engagement-Rate = Interaktionen ÷ Reichweite × 100. Im Bericht immer angeben, worauf sie bezogen ist (Reichweite, Follower oder Impressionen)." },
 { m: "kpi", q: "Was beschreibt die „Bounce Rate“ (Absprungrate) einer Website?", a: [
  "Den Anteil der Besucher, die ohne weitere Aktion wieder gehen",
  "Den Anteil der Besucher, die über eine Anzeige auf die Seite kommen",
  "Den Anteil der Follower, die ein Profil wieder entfolgen",
  "Den Anteil der Anzeigen, die von der Plattform abgelehnt werden"
 ], c: 0, e: "Eine hohe Absprungrate nach einem Anzeigenklick deutet oft darauf hin, dass Anzeige und Zielseite nicht zusammenpassen. Im E-Mail-Marketing heißt „Bounce“ übrigens etwas anderes: eine unzustellbare Mail." },
 { m: "kpi", q: "Was beschreibt der „Share of Voice“?", a: [
  "Den Anteil der eigenen Marke an allen Erwähnungen im Markt",
  "Den Anteil der Beiträge, die als Sprachnachricht erscheinen",
  "Den Anteil der Follower, die einen Beitrag teilen",
  "Den Anteil positiver Kommentare an allen Kommentaren"
 ], c: 0, e: "Beispiel: 150 von 1.000 Erwähnungen im Markt betreffen die eigene Marke = 15 %. Der Anteil positiver Stimmen gehört zum Sentiment." },

 // ---------- plan ----------
 { m: "plan", q: "Was beschreibt ein „Funnel“ im Marketing?", a: [
  "Ein Trichtermodell: Von vielen Erreichten kaufen am Ende wenige",
  "Einen Plan, welcher Beitrag an welchem Tag erscheint",
  "Eine Kanalstrategie, bei der alle Plattformen gleich bespielt werden",
  "Einen Filter, der negative Kommentare automatisch ausblendet"
 ], c: 0, e: "Der Funnel (Trichter) zeigt, wie aus vielen Erreichten wenige Kunden werden. Der Tagesplan für Beiträge ist der Redaktionsplan." },
 { m: "plan", q: "Was beschreibt die „Customer Journey“?", a: [
  "Den Weg einer Person vom ersten Kontakt mit der Marke bis nach dem Kauf",
  "Die Route, die eine Kundin auf dem Weg zum Laden zurücklegt",
  "Eine Kundenumfrage, die nach jedem Kauf automatisch verschickt wird",
  "Die Reiseplanung einer Influencerin für Kooperationen mit Hotels und Marken"
 ], c: 0, e: "Auf dieser „Kundenreise“ gibt es viele Touchpoints – online wie offline: Post, Anzeige, Bewertung, Gespräch im Laden." },
 { m: "plan", q: "Was ist ein „Shitstorm“?", a: [
  "Eine Welle öffentlicher, oft emotionaler Kritik in kurzer Zeit",
  "Eine einzelne negative Bewertung auf Google",
  "Ein Fehler im Algorithmus, der Beiträge für alle Follower versteckt",
  "Eine Phase, in der ein Kanal kaum Reichweite hat"
 ], c: 0, e: "Einzelne Kritik ist noch kein Shitstorm. Wie stark eine Welle ist, kann man mit der Shitstorm-Skala (Stufen 0–6) einordnen." },

 // ---------- ads ----------
 { m: "ads", q: "Was bedeutet „Targeting“ bei Social Ads?", a: [
  "Die Auswahl, welchen Personen eine Anzeige gezeigt wird",
  "Das Festlegen eines Umsatzziels für das Quartal",
  "Die Gestaltung von Bild und Text einer Anzeige",
  "Das Messen, wie oft eine Anzeige angeklickt wird"
 ], c: 0, e: "Targeting = Zielgruppenauswahl, z. B. nach Ort, Alter, Interessen oder eigenen Listen. Bild und Text einer Anzeige heißen Creatives." },
 { m: "ads", q: "Was bedeutet „Geotargeting“?", a: [
  "Anzeigen nur Menschen in einer bestimmten Region zeigen",
  "Fotos mit dem Aufnahmeort markieren",
  "Den Standort des Unternehmens im Impressum und im Profil angeben",
  "Anzeigen nur zu bestimmten Uhrzeiten ausspielen"
 ], c: 0, e: "Beispiel: Die Bäckerei wirbt nur im Umkreis von 5 km um ihre Filialen – so wird kein Geld für Menschen ausgegeben, die nie vorbeikommen." },
 { m: "ads", q: "Was beschreibt der Begriff „Streuverlust“?", a: [
  "Werbung erreicht Menschen, die nicht zur Zielgruppe gehören",
  "Ein Beitrag verliert nach einigen Tagen an Reichweite",
  "Follower entfolgen nach einer Kampagne wieder",
  "Daten gehen beim Export aus einem Tool verloren"
 ], c: 0, e: "Streuverluste kosten Budget ohne Nutzen. Gutes Targeting, Geotargeting und Ausschluss-Zielgruppen verringern sie." },
 { m: "ads", q: "Was sind „Creatives“ bei einer Anzeige?", a: [
  "Die sichtbaren Werbemittel: Bild oder Video, Text und Button",
  "Die Personen in der Agentur, die eine Kampagne planen und umsetzen",
  "Frei nutzbare Bilder mit Creative-Commons-Lizenz",
  "Nutzer, die besonders viele eigene Inhalte erstellen"
 ], c: 0, e: "Creatives sind die Gestaltungselemente der Anzeige. Wer dieselben Creatives zu lange zeigt, riskiert Werbemüdigkeit." }
];
