// Lektionen „Recht & Richtlinien“ – Zusammenfassung von smm2.pdf, S. 43–123 (Vorlesung „Social Media & Recht“ und Vorbereitung auf den Abschlusstest), einfache Sprache.
export const L_RECHT = [
 { id: "rechtsgebiete", titel: "Wichtige Gesetze, Fallstricke & Plattformregeln", min: 4, quelle: "smm2.pdf, S. 47–57", folien: [
  { k: "intro", h: "Welche Gesetze gelten für deine Posts?", b: "Ein einzelnes **Online-Marketing-Recht** gibt es nicht. Es gelten viele Gesetze und Plattform-Regeln. Ziel: Du ordnest Gesetzen ihr Thema zu." },
  { k: "liste", h: "Werbung und Inhalte: UWG, UrhG, KUG, MarkenG", l: [
   "**UWG** (Gesetz gegen unlauteren Wettbewerb): verbietet unfaire Werbung",
   "**UrhG** (Urheberrecht): fremde Bilder, Videos und Texte nutzen",
   "**KUG** (Kunsturhebergesetz): Recht am eigenen Bild",
   "**MarkenG** (Markengesetz): Kontonamen, fremde Logos, Titel, Marken"
  ] },
  { k: "liste", h: "Daten und Verträge: DSGVO, BDSG, DDG, BGB", l: [
   "**DSGVO** (Datenschutz-Grundverordnung): gilt EU-weit seit 25. Mai 2018",
   "**BDSG** (Bundesdatenschutzgesetz): ergänzt die DSGVO, etwa für Beschäftigte",
   "**DDG** (Digitale-Dienste-Gesetz, früher TMG): Impressum, Haftung im Netz",
   "**BGB** (Bürgerliches Gesetzbuch): Verträge, Widerruf, Pflicht-Angaben"
  ] },
  { k: "text", h: "Grundgesetz und Medienstaatsvertrag gelten auch", b: "Aus dem **Grundgesetz** folgen das Persönlichkeits-Recht und das Recht am eigenen Bild. Der **Medienstaatsvertrag** (früher Rundfunkstaatsvertrag) gilt auch für Live-Übertragungen. Er verbietet zum Beispiel **Schleichwerbung** (versteckte Werbung)." },
  { k: "text", h: "Die AGB der Plattform setzen eigene Grenzen", b: "Prüfe die **AGB** (Nutzungs-Regeln der Plattform): Darfst du das Konto geschäftlich nutzen? Bohnenwerk nutzt für Firmenkunden die LinkedIn-Unternehmensseite, kein privates Profil. Beachte Regeln für Gewinnspiele, Werbung und bezahlte Leistungen." },
  { k: "liste", h: "Häufige Fallstricke im Online-Marketing", l: [
   "**Datenschutz:** Die Erklärung ist lückenhaft, die Einwilligung fehlt.",
   "**Fremde Inhalte:** Dir fehlen Nutzungsrechte an Bildern oder Marken.",
   "**Teilen:** Geteilte Beiträge beleidigen andere.",
   "**Impressum** fehlt, **Werbeaussagen** sind falsch oder geschönt."
  ] },
  { k: "merke", h: "Recht steckt in vielen Gesetzen und in den AGB", b: "Online-Marketing-Recht steckt in vielen Gesetzen und in den AGB der Plattform." },
  { k: "check", q: "Welches Gesetz schützt Verbraucher vor unfairen Werbemaßnahmen und sichert fairen Wettbewerb?", a: ["Das Gesetz gegen den unlauteren Wettbewerb (UWG)", "Das Kunsturhebergesetz (KUG) mit dem Recht am Bild", "Das Markengesetz (MarkenG) für Logos und Namen", "Das Bundesdatenschutzgesetz (BDSG) für Beschäftigte"], c: 0, e: "Das UWG enthält viele Verbote für unfaire Werbung. Verstöße führen oft zu teuren Abmahnungen." }
 ]},
 { id: "impressum", titel: "Transparenzgebot & Impressumspflicht", min: 3, quelle: "smm2.pdf, S. 58–67 und S. 118", folien: [
  { k: "intro", h: "Erkennt jeder die Firma hinter dem Profil?", b: "Firmenprofile müssen als **kommerziell** (geschäftlich) erkennbar sein. Das heißt **Transparenzgebot** (Gebot der Offenheit). Es steht in § 6 DDG (Digitale-Dienste-Gesetz) und im UWG. Ziel: Du prüfst Profil und Impressum." },
  { k: "liste", h: "3 Prüffragen zum Transparenzgebot", l: [
   "Zeigt der Kontoname kommerzielle Nutzung, etwa „HSB Akademie“?",
   "Weisen die Inhalte auf kommerzielle Nutzung hin?",
   "Enthält das Profil einen Hinweis auf das Impressum?"
  ] },
  { k: "text", h: "Das Impressum zeigt, wer verantwortlich ist", b: "Das **Impressum** ist eine gesetzliche Herkunftsangabe: Es nennt den Verantwortlichen für die Inhalte. Kommerzielle Profile und Newsletter (Rundmails) brauchen es immer. Nutzen Mitarbeitende ihr Profil dienstlich, ist die Pflicht umstritten." },
  { k: "liste", h: "So muss ein Impressum nach § 5 DDG sein", l: [
   "**ständig verfügbar**, **leicht erkennbar**, **unmittelbar erreichbar**",
   "**2-Klick-Regel:** von jeder Stelle mit höchstens 2 Klicks erreichbar",
   "**Sprechender Link** (sagt, wohin er führt): „Impressum“ oder „Kontakt“",
   "**Schlecht:** „AGB“, „Info“ oder „Details“"
  ] },
  { k: "beispiel", h: "Otto auf LinkedIn: klar benannt, aber versteckt", b: "LinkedIn und X (früher Twitter) haben kein Impressum-Feld. Die Pflicht gilt trotzdem. Otto setzt den Link hinter „Mehr anzeigen“ unter „Über uns“. Dort ist er versteckt und nicht anklickbar." },
  { k: "merke", h: "Verfügbar, erkennbar, erreichbar – in 2 Klicks", b: "Das Impressum ist ständig verfügbar, leicht erkennbar und unmittelbar erreichbar. Fehlt ein Feld, wähle die beste Notlösung.", esel: "Alles auf „-bar“: verfügbar, erkennbar, erreichbar – in 2 Klicks." },
  { k: "check", q: "Welche Linkbezeichnung erfüllt die Anforderung an einen sprechenden Link zum Impressum?", a: ["„Kontakt“", "„Details“", "„Info“", "„AGB“"], c: 0, e: "Ein sprechender Link ist aus sich heraus verständlich. „Impressum“ und „Kontakt“ sind gut, „AGB“, „Info“ und „Details“ nicht." }
 ]},
 { id: "bildrechte", titel: "Haftung, Lizenzen & Urheberrecht", min: 3, quelle: "smm2.pdf, S. 68–70 und S. 114; smm1.pdf, S. 67, 71, 73 und 74", folien: [
  { k: "intro", h: "Wann macht dich ein Like oder ein Bild haftbar?", b: "**Haften** heißt: Du musst rechtlich für einen Schaden einstehen. Für eigene Inhalte haftest du immer, für fremde manchmal. Ziel: Du erklärst Haftung für Likes und nötige Bildrechte." },
  { k: "text", h: "Urheberrecht schützt Werke, Markenrecht Marken", b: "Das **Urheberrecht** schützt Werke als geistiges Eigentum: **ideell** (Ehre des Urhebers) und **wirtschaftlich** (Einnahmen). Werke sind etwa Bilder, Sendungen und Software, Gesetzestexte nicht. Das **Markenrecht** schützt Marken." },
  { k: "text", h: "Gekaufte Bilder müssen unterlizenzierbar sein", b: "Plattformen nehmen sich kostenlos Rechte an deinen Posts, bis du das Konto löschst. Gekaufte Bilder, etwa von Getty Images, müssen deshalb **unterlizenzierbar** sein. Du darfst die Rechte also weitergeben." },
  { k: "text", h: "Creative Commons regelt die Nutzung per Lizenz", b: "**Creative Commons** (CC) bietet fertige **Lizenzen** (Nutzungs-Verträge) für Werke an. Damit legen Urheber fest, wie andere ihre Werke nutzen dürfen." },
  { k: "text", h: "Wer liked, macht sich Inhalte „zu eigen“", b: "Für fremde Inhalte haftest du, wenn du sie dir **zu eigen machst** (wie eigene behandelst). Reines Teilen gilt wohl nur als technischer Vorgang. Liken oder positiv kommentieren reicht aber schon." },
  { k: "beispiel", h: "Ein „Z“ zum Ukraine-Krieg kann strafbar sein", b: "Lob für den russischen Angriff kann strafbar sein, auch das Zeichen „Z“. Es kann einen Angriffskrieg gutheißen. Bei Verdacht ermittelt der Staatsanwalt. Berichte sachlich." },
  { k: "merke", h: "Pass auf, was du likest und welche Bilder du kaufst", b: "Liken und positiv kommentieren macht dich haftbar. Gekaufte Bilder müssen unterlizenzierbar sein." },
  { k: "check", q: "Ab wann haftest du laut Rechtsprechung für einen fremden Beitrag in Social Media?", a: ["Wenn du ihn likest oder positiv kommentierst", "Erst wenn du ihn wortgleich selbst neu postest", "Nur wenn du den Urheber persönlich kennst", "Nie, für fremde Inhalte haftet nur der Autor"], c: 0, e: "Liken oder positives Kommentieren reicht für ein „zu eigen machen“. Reines Teilen gilt dagegen wohl als technischer Vorgang." }
 ]},
 { id: "dsgvo", titel: "Fanpages, Datentransfer in die USA & Cookies", min: 4, quelle: "smm2.pdf, S. 71–79", folien: [
  { k: "intro", h: "3 Urteile, die deine Fanpage betreffen", b: "Urteile von **EuGH** (Europäischer Gerichtshof) und **BGH** (Bundesgerichtshof) betreffen deine **Fanpage** (Facebook-Firmenseite) und deine **Tools** (Online-Programme). Ziel: Du nennst die Urteile und ihre Folgen." },
  { k: "text", h: "EuGH 2018: Fanpage-Betreiber haften mit Facebook", b: "Die **DSK** (Konferenz der Datenschutz-Behörden) hält Fanpages für rechtswidrig. Der Zusatz-Vertrag **Page Controller Addendum** von Facebook reicht laut DSK nicht. Das **Tracking** (Nutzer verfolgen) lässt sich nicht abschalten." },
  { k: "liste", h: "Fanpage abschalten oder das Risiko so senken", l: [
   "Hol per **Cookie-Banner** (Zustimmungs-Fenster) die Tracking-Einwilligung ein.",
   "Ergänze die Datenschutz-Hinweise um das Page Controller Addendum.",
   "Verlinke auf der Fanpage zu den Datenschutz-Hinweisen.",
   "Leite Anfragen Betroffener mit Bildschirmfoto an Facebook."
  ] },
  { k: "text", h: "EuGH 2020: Das Privacy Shield ist unwirksam", b: "Im Urteil „Schrems II“ kippte der EuGH am 16.07.2020 das **Privacy Shield** (Datenschutz-Abkommen EU–USA). Danach halfen **Standard-Vertrags-Klauseln** (Muster-Verträge). Seit 2023 gilt das **EU-US Data Privacy Framework** (neues Abkommen)." },
  { k: "text", h: "Daten in die USA brauchen eine sichere Grundlage", b: "Daten dürfen nur bei gleich gutem Schutz oder sicheren Verträgen in die USA. Prüfe jedes Tool: Schickt es Daten dorthin?" },
  { k: "text", h: "BGH 2020: Ein vorausgefülltes Häkchen zählt nicht", b: "Der BGH entschied 2020 im Fall „Cookie-Einwilligung II“: Ein vorausgefülltes Häkchen reicht nicht für Tracking-Cookies. Der Nutzer muss aktiv klicken. Heute gilt § 25 TDDDG (Cookie-Gesetz, früher TTDSG)." },
  { k: "merke", h: "Mithaften, Daten absichern, aktives Ja einholen", b: "Fanpage-Betreiber haften mit. Daten in die USA brauchen eine sichere Grundlage. Tracking-Cookies brauchen ein aktives Ja." },
  { k: "check", q: "Was entschied der BGH 2020 im Fall „Cookie-Einwilligung II“?", a: ["Ein vorausgefülltes Häkchen ist keine wirksame Einwilligung", "Tracking-Cookies sind ohne jede Einwilligung erlaubt", "Ein Hinweis im Impressum ersetzt die Einwilligung", "Cookies dürfen nur auf Fanpages gesetzt werden"], c: 0, e: "Für Tracking-Cookies muss der Nutzer aktiv zustimmen. Ein vorab gesetztes Häkchen reicht nicht." }
 ]},
 { id: "rechtsfolgen", titel: "Abmahnung & Folgen von Rechtsverstößen", min: 4, quelle: "smm2.pdf, S. 82–93", folien: [
  { k: "intro", h: "Was tust du, wenn eine Abmahnung kommt?", b: "Eine **Abmahnung** fordert dich auf, einen Verstoß zu stoppen. Du sollst eine **Unterlassungs-Erklärung** unterschreiben: Du versprichst, es nie wieder zu tun. Ziel: Du reagierst richtig." },
  { k: "liste", h: "4 Ansprüche, die Verletzte haben", l: [
   "**Unterlassung, Beseitigung:** Du hörst auf, entfernst den Beitrag.",
   "**Auskunft:** Wann, wo, wie viele Betrachter?",
   "**Schadenersatz:** meist **Lizenzgebühr** (Nutzungs-Preis), sonst Schmerzensgeld",
   "**Anwaltskosten:** oft bis 3.000 Euro"
  ] },
  { k: "text", h: "Datenschutz-Verstöße kosten viel Geld", b: "Die Datenschutz-Behörde kann verwarnen, Änderungen anweisen oder die Datennutzung verbieten. Die **DSGVO** (Datenschutz-Grundverordnung) erlaubt Bußgelder bis 20 Millionen Euro. Oder 4 Prozent des weltweiten Jahresumsatzes, wenn das mehr ist." },
  { k: "liste", h: "Abmahnung, Verfügung, Klage: die 3 Stufen", l: [
   "**1. Abmahnung:** Erklärung mit **Vertragsstrafe** (Geld bei Rückfall), kurze Frist",
   "**2. Einstweilige Verfügung:** Das Gericht entscheidet schnell.",
   "**3. Klage:** klärt endgültig, auch Auskunft und Schadenersatz",
   "Jede Stufe bringt neue Gerichtskosten."
  ] },
  { k: "liste", h: "3 Wege, auf eine Abmahnung zu reagieren", l: [
   "**Weg 1:** Beseitige den Verstoß, unterschreibe eine geänderte Erklärung.",
   "**Weg 2:** Nimm die Verfügung hin, versprich dann keine Vertragsstrafe.",
   "**Weg 3:** Kein Verstoß? Wehre dich, auch vor Gericht."
  ] },
  { k: "text", h: "Schulung und Freigaben senken das Risiko", b: "Schule dein Team und lass Beiträge von der Rechtsabteilung freigeben. Ein **Disclaimer** (Ausschluss der Haftung) wie „Keine Haftung für Links“ hilft selten. Er kann sogar Abmahnungen auslösen." },
  { k: "merke", h: "Erst Abmahnung, dann Verfügung, dann Klage", b: "Ohne Unterlassungs-Erklärung folgen Verfügung und Klage. Reagiere rechtzeitig und mit Anwalt. Vernichte nie Beweise.", esel: "Abmahnung, Verfügung, Klage: „Alle verlieren Kohle.“" },
  { k: "check", q: "Was folgt meist, wenn du nach einer Abmahnung die Frist für die Unterlassungserklärung verstreichen lässt?", a: ["Ein Antrag auf eine einstweilige Verfügung", "Eine sofortige Löschung deines gesamten Profils", "Ein Bußgeld der Datenschutzbehörde in Millionenhöhe", "Eine zweite Abmahnung mit einer längeren Frist"], c: 0, e: "Die einstweilige Verfügung ist Stufe 2. Das Gericht sichert damit den Unterlassungsanspruch vorläufig und verursacht weitere Kosten." }
 ]},
 { id: "werbekennzeichnung", titel: "Werbung kennzeichnen & Werbeaussagen", min: 4, quelle: "smm2.pdf, S. 80, 95–98 und S. 121", folien: [
  { k: "intro", h: "Muss dein Post als Werbung gekennzeichnet sein?", b: "Werbung muss erkennbar sein. Das verlangen **UWG** (Gesetz gegen unlauteren, also unfairen Wettbewerb) und **BGH** (Bundesgerichtshof). Ziel: Du erkennst Kennzeichnungs-Pflicht und verbotene Werbeaussagen." },
  { k: "text", h: "BGH 2021: Übertrieben werblich heißt kennzeichnen", b: "**Influencer** (Meinungsmacher im Netz) haben Reichweite, Einfluss, Vernetzung und Relevanz. Lobt ihr Beitrag nur Vorzüge, ohne Abstand, kennzeichnen sie ihn als Werbung. Bezahlt Bohnenwerk eine Bloggerin, gilt das auch." },
  { k: "liste", h: "Das ist in der Regel unlauter", l: [
   "**Schleichwerbung:** Werbung, die als Information getarnt ist",
   "Gekaufte Influencer ohne Kennzeichnung, gekaufte Bewertungen",
   "**Fake-Profile:** Erfundene Personen loben die Firma.",
   "Mitarbeitende werben privat, ohne ihren Arbeitgeber zu nennen."
  ] },
  { k: "text", h: "Tap Tags meist nicht, Advertorials immer kennzeichnen", b: "**Tap Tags** (Markierungen im Bild) sind meist keine Werbung, auch mit Gegenleistung. **Advertorials** sind abgesprochene, positive Berichte im Stil von Artikeln. Kennzeichne sie mit „Anzeige“, „Reklame“ oder „Werbung“." },
  { k: "liste", h: "Diese Werbung ist regelmäßig unzulässig", l: [
   "Mitbewerber oder ihre Produkte schlechtmachen",
   "Werbung mit **Selbstverständlichkeiten** (was ohnehin gilt), etwa Widerrufsrecht",
   "Unwahre Aussagen; auch missverständliche zählen als unwahr",
   "**Erlaubt:** offensichtliche Übertreibungen, die jeder erkennt"
  ] },
  { k: "liste", h: "„Wir sind die Nr. 1“ nur nach strenger Prüfung", l: [
   "**Alleinstellung** („Nr. 1“) oder **Spitzengruppe** („zu den Größten“)",
   "Direkte oder indirekte Vergleiche mit Mitbewerbern",
   "**Satire** (Spott) über Prominente, nur in Grenzen",
   "Kann erlaubt sein, prüfe streng nach UWG"
  ] },
  { k: "merke", h: "Bezahlt heißt: als „Werbung“ kennzeichnen", b: "Kennzeichne bezahlte Inhalte als „Werbung“ oder „Anzeige“. Ein Link zum Hersteller ist immer Werbung." },
  { k: "check", q: "Welche Werbeform gilt nach dem UWG in der Regel als unlauter?", a: ["Ein Fake-Profil, das positiv über die eigene Firma berichtet", "Eine offensichtliche Übertreibung, die jeder sofort erkennt", "Ein bezahlter Beitrag mit dem deutlichen Hinweis „Anzeige“", "Ein Unternehmensprofil mit klar erkennbarem Firmennamen"], c: 0, e: "Fake-Profile tarnen Werbung als echte Meinung. Das ist Schleichwerbung und in der Regel unlauter." }
 ]},
 { id: "datenschutz", titel: "Übungsfälle: Werbung per Post und E-Mail", min: 3, quelle: "smm2.pdf, S. 100–104", folien: [
  { k: "intro", h: "Darfst du deinen Shop-Kunden Werbung schicken?", b: "Bei Bohnenwerk haben sich viele Kunden im Onlineshop angemeldet. Ob du werben darfst, hängt vom Weg ab. Ziel: Du entscheidest, wann Werbung per Post oder E-Mail erlaubt ist." },
  { k: "liste", h: "Briefwerbung an Kunden: geht mit Hinweisen", l: [
   "Informiere bei der Anmeldung über Werbung und Widerspruch.",
   "Nenne im Brief den Werbenden als verantwortliche Stelle.",
   "Weise auf Widerspruchsrecht und Kontakt hin.",
   "Nenne wenn nötig die Herkunft der Daten."
  ] },
  { k: "liste", h: "E-Mail-Werbung braucht ein Double-Opt-in", l: [
   "**Double-Opt-in** (doppelte Zustimmung): sonst E-Mail-Werbung verboten",
   "**1.** Der Kunde setzt aktiv ein Häkchen.",
   "**2.** Er klickt den Link in der Bestätigungs-Mail.",
   "**3.** Dein System speichert den Nachweis für die Aufsichtsbehörde."
  ] },
  { k: "liste", h: "§ 7 Absatz 3 UWG: ohne Einwilligung nur so", l: [
   "Du bekamst die Adresse beim Verkauf einer Ware oder Dienstleistung.",
   "Du wirbst nur für eigene, ähnliche Angebote.",
   "Der Kunde hat nicht widersprochen.",
   "Du weist stets auf kostenlosen Widerspruch hin."
  ] },
  { k: "beispiel", h: "Abgebrochene Bestellung: keine Erinnerungs-Mail", b: "Eine Kundin legt im Bohnenwerk-Shop Espresso in den Warenkorb und bricht ab. Ohne Double-Opt-in darfst du sie nicht per Mail erinnern. Es gab keinen Verkauf, die Ausnahme greift nicht." },
  { k: "merke", h: "E-Mail-Werbung nur mit Double-Opt-in oder Ausnahme", b: "E-Mail-Werbung braucht ein Double-Opt-in. Oder alle Bedingungen von § 7 Absatz 3 UWG treffen zusammen zu." },
  { k: "check", q: "Ein Kunde bricht die Bestellung ab. Wann darfst du ihn per E-Mail an den Kauf erinnern?", a: ["Nur wenn er vorher per Double-Opt-in eingewilligt hat", "Immer, weil er seine E-Mail-Adresse freiwillig angab", "Immer, wenn die Erinnerung innerhalb von 24 Stunden kommt", "Nur wenn im Shop ein vollständiges Impressum steht"], c: 0, e: "Ohne Verkauf greift die Ausnahme nach § 7 Abs. 3 UWG nicht. Dann brauchst du eine Einwilligung per Double-Opt-in." }
 ]}
];
