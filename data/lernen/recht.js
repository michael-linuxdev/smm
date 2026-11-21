// Lektionen „Recht & Richtlinien“ – Zusammenfassung von smm2.pdf, S. 43–123 (Vorlesung „Social Media & Recht“ und Vorbereitung auf den Abschlusstest), einfache Sprache.
export const L_RECHT = [
 { id: "rechtsgebiete", titel: "Wichtige Gesetze, Fallstricke & Plattformregeln", min: 4, quelle: "smm2.pdf, S. 47–57", folien: [
  { k: "intro", h: "Welche Gesetze gelten für deine Posts?", b: "Es gelten viele Gesetze und die Regeln der Plattform. Ziel: Du weißt, welches Gesetz was regelt." },
  { k: "woerter", h: "Neue Wörter: UWG, KUG, DSGVO, BDSG", l: [
   "**UWG:** Gesetz gegen den unlauteren Wettbewerb",
   "**KUG:** Kunsturhebergesetz",
   "**DSGVO:** Datenschutz-Grundverordnung der EU",
   "**BDSG:** Bundesdatenschutzgesetz"
  ] },
  { k: "liste", h: "Werbung und Inhalte: UWG, UrhG, KUG, MarkenG", l: [
   "**UWG:** verbietet unfaire Werbung",
   "**UrhG** (Urheberrecht): fremde Bilder, Videos, Texte",
   "**KUG:** Recht am eigenen Bild",
   "**MarkenG** (Markengesetz): Kontonamen, fremde Logos, Titel"
  ] },
  { k: "liste", h: "Daten und Verträge: DSGVO, BDSG, DDG, BGB", l: [
   "**DSGVO:** gilt in der EU seit 25. Mai 2018",
   "**BDSG:** etwa für Daten von Beschäftigten",
   "**DDG** (Digitale-Dienste-Gesetz, früher TMG): Impressum, Haftung",
   "**BGB** (Bürgerliches Gesetzbuch): Verträge, Widerruf, Pflicht-Angaben"
  ] },
  { k: "text", h: "Grundgesetz und Medienstaatsvertrag gelten auch", b: "Das **Grundgesetz** schützt deine Person und dein Bild. Der **Medienstaatsvertrag** gilt auch für Live-Streams. Früher hieß er Rundfunkstaatsvertrag. Er verbietet **Schleichwerbung**, also versteckte Werbung." },
  { k: "text", h: "Die AGB der Plattform setzen eigene Grenzen", b: "Prüfe die **AGB** der Plattform. Darfst du das Konto für die Firma nutzen? Bohnenwerk nutzt dafür die Firmenseite bei LinkedIn. Die AGB begrenzen auch Gewinnspiele und Werbung." },
  { k: "liste", h: "Häufige Fallstricke im Online-Marketing", l: [
   "**Datenschutz:** Die Erklärung hat Lücken, die Einwilligung fehlt.",
   "**Fremde Inhalte:** Dir fehlen Rechte an Bild oder Marke.",
   "**Teilen:** Geteilte Posts beleidigen.",
   "**Impressum** fehlt, **Werbung** ist falsch oder geschönt."
  ] },
  { k: "merke", h: "Recht steckt in vielen Gesetzen und in den AGB", b: "Das **Online-Marketing-Recht** steckt in vielen Gesetzen und in den AGB der Plattform." },
  { k: "check", q: "Welches Gesetz schützt Verbraucher vor unfairen Werbemaßnahmen und sichert fairen Wettbewerb?", a: ["Das Gesetz gegen den unlauteren Wettbewerb (UWG)", "Das Kunsturhebergesetz (KUG) mit dem Recht am Bild", "Das Markengesetz (MarkenG) für Logos und Namen", "Das Bundesdatenschutzgesetz (BDSG) für Beschäftigte"], c: 0, e: "Das UWG enthält viele Verbote für unfaire Werbung. Verstöße führen oft zu teuren Abmahnungen." }
 ]},
 { id: "impressum", titel: "Transparenzgebot & Impressumspflicht", min: 3, quelle: "smm2.pdf, S. 58–67 und S. 118", folien: [
  { k: "intro", h: "Erkennt jeder die Firma hinter dem Profil?", b: "Ein Firmenprofil muss **kommerziell** erkennbar sein. Das ist das **Transparenzgebot**. Es steht in § 6 DDG und im UWG. Ziel: Du prüfst Profil und Impressum." },
  { k: "woerter", h: "Neue Wörter: kommerziell, Transparenzgebot, Impressum", l: [
   "**kommerziell:** geschäftlich, um Geld zu verdienen",
   "**Transparenzgebot:** Eine Firma muss sich offen zeigen.",
   "**Impressum:** sagt, wer hinter der Seite steht",
   "**Sprechender Link:** sagt, wohin er führt"
  ] },
  { k: "liste", h: "3 Prüffragen zum Transparenzgebot", l: [
   "Zeigt der Name die Firma, etwa „HSB Akademie“?",
   "Zeigen die Inhalte, dass es um Geschäfte geht?",
   "Enthält das Profil einen Hinweis auf das Impressum?"
  ] },
  { k: "text", h: "Das Impressum zeigt, wer verantwortlich ist", b: "Das **Impressum** ist eine gesetzliche Herkunftsangabe. Es nennt, wer für Inhalte geradesteht. Firmenprofile und Newsletter brauchen es immer. Nutzt dein Team private Profile für die Firma, ist das umstritten." },
  { k: "liste", h: "So muss ein Impressum nach § 5 DDG sein", l: [
   "**ständig verfügbar**, **leicht erkennbar**, **unmittelbar erreichbar**",
   "**2-Klick-Regel:** von jeder Seite in 2 Klicks da",
   "**Sprechender Link:** „Impressum“ oder „Kontakt“",
   "**Schlecht:** „AGB“, „Info“ oder „Details“"
  ] },
  { k: "beispiel", h: "Otto auf LinkedIn: klar benannt, aber versteckt", b: "LinkedIn und X haben kein Feld für das Impressum. Die Pflicht gilt trotzdem. Otto setzt den Link hinter „Mehr anzeigen“ unter „Über uns“. Dort ist er versteckt und nicht klickbar." },
  { k: "merke", h: "Verfügbar, erkennbar, erreichbar – in 2 Klicks", b: "Das Impressum ist ständig verfügbar, leicht erkennbar und unmittelbar erreichbar. Fehlt ein Feld, wähle die beste Notlösung.", esel: "Alles auf „-bar“: verfügbar, erkennbar, erreichbar – in 2 Klicks." },
  { k: "check", q: "Welche Linkbezeichnung erfüllt die Anforderung an einen sprechenden Link zum Impressum?", a: ["„Kontakt“", "„Details“", "„Info“", "„AGB“"], c: 0, e: "Ein sprechender Link ist aus sich heraus verständlich. „Impressum“ und „Kontakt“ sind gut, „AGB“, „Info“ und „Details“ nicht." }
 ]},
 { id: "bildrechte", titel: "Haftung, Lizenzen & Urheberrecht", min: 3, quelle: "smm2.pdf, S. 68–70 und S. 114; smm1.pdf, S. 67, 71, 73 und 74", folien: [
  { k: "intro", h: "Wann macht dich ein Like oder ein Bild haftbar?", b: "Für eigene Inhalte **haftest** du immer, für fremde manchmal. Ziel: Du kennst Haftung für Likes und nötige Bildrechte." },
  { k: "woerter", h: "Neue Wörter: haften, Lizenz, unterlizenzierbar", l: [
   "**haften:** für einen Schaden geradestehen",
   "**Lizenz:** Vertrag über die Nutzung eines Werks",
   "**unterlizenzierbar:** Du darfst die Rechte weitergeben."
  ] },
  { k: "text", h: "Urheberrecht schützt Werke, Markenrecht Marken", b: "Das **Urheberrecht** schützt Werke als geistiges Eigentum. **Ideell** schützt es die Ehre des Urhebers, **wirtschaftlich** sein Geld. Werke sind etwa Bilder, Filme und Software, Gesetzestexte nicht. Das **Markenrecht** schützt Marken." },
  { k: "text", h: "Gekaufte Bilder müssen unterlizenzierbar sein", b: "Plattformen nehmen sich gratis Rechte an deinen Posts, bis du das Konto löschst. Gekaufte Bilder, etwa von Getty Images, müssen daher **unterlizenzierbar** sein." },
  { k: "text", h: "Creative Commons regelt die Nutzung per Lizenz", b: "**Creative Commons** (CC) bietet fertige **Lizenzen** für Werke an. So regelt der Urheber die Nutzung." },
  { k: "text", h: "Wer liked, macht sich Inhalte „zu eigen“", b: "Für Fremdes haftest du, wenn du es dir **zu eigen machst**, also wie Eigenes behandelst. Teilen gilt wohl nur als technischer Vorgang. Ein Like oder Lob reicht aber." },
  { k: "beispiel", h: "Ein „Z“ zum Ukraine-Krieg kann strafbar sein", b: "Lob für den Angriff von Russland kann strafbar sein, auch das Zeichen „Z“. Bei Verdacht ermittelt der Staatsanwalt. Berichte sachlich." },
  { k: "merke", h: "Pass auf, was du likest und welche Bilder du kaufst", b: "Ein Like oder Lob macht dich haftbar. Gekaufte Bilder müssen unterlizenzierbar sein." },
  { k: "check", q: "Ab wann haftest du laut Rechtsprechung für einen fremden Beitrag in Social Media?", a: ["Wenn du ihn likest oder positiv kommentierst", "Erst wenn du ihn wortgleich selbst neu postest", "Nur wenn du den Urheber persönlich kennst", "Nie, für fremde Inhalte haftet nur der Autor"], c: 0, e: "Liken oder positives Kommentieren reicht für ein „zu eigen machen“. Reines Teilen gilt dagegen wohl als technischer Vorgang." }
 ]},
 { id: "dsgvo", titel: "Fanpages, Datentransfer in die USA & Cookies", min: 4, quelle: "smm2.pdf, S. 71–79", folien: [
  { k: "intro", h: "3 Urteile, die deine Fanpage betreffen", b: "Drei Urteile von **EuGH** und **BGH** betreffen deine **Fanpage** und deine Tools. Ziel: Du kennst ihre Folgen." },
  { k: "woerter", h: "Neue Wörter: EuGH, BGH, Fanpage, Tracking", l: [
   "**EuGH:** Europäischer Gerichtshof",
   "**BGH:** Bundesgerichtshof",
   "**Fanpage:** Firmenseite bei Facebook",
   "**Tracking:** Nutzer im Netz verfolgen"
  ] },
  { k: "text", h: "EuGH 2018: Fanpage-Betreiber haften mit Facebook", b: "Du haftest mit. Die **DSK** (Rat der Datenschutz-Ämter) hält Fanpages für rechtswidrig. Der Vertrag **Page Controller Addendum** reicht ihr nicht. Das **Tracking** bleibt an." },
  { k: "liste", h: "Fanpage abschalten oder das Risiko so senken", l: [
   "Hol per **Cookie-Banner** die Einwilligung ein.",
   "Nenne das Addendum in deinen Datenschutz-Hinweisen.",
   "Verlinke diese Hinweise auf der Fanpage.",
   "Leite Anfragen mit Bildschirmfoto an Facebook."
  ] },
  { k: "text", h: "EuGH 2020: Das Privacy Shield ist unwirksam", b: "Im Urteil „Schrems II“ kippte der EuGH am 16.07.2020 das **Privacy Shield** von EU und USA. Danach halfen **Standard-Vertrags-Klauseln**. Seit 2023 gilt das **EU-US Data Privacy Framework**." },
  { k: "text", h: "Daten in die USA brauchen eine sichere Grundlage", b: "Daten dürfen nur bei gleich gutem Schutz in die USA. Oder Verträge sichern sie. Prüfe das bei jedem Tool." },
  { k: "text", h: "BGH 2020: Ein vorausgefülltes Häkchen zählt nicht", b: "Fall „Cookie-Einwilligung II“: Ein Häkchen, das schon gesetzt ist, reicht nicht. Man muss selbst klicken. Heute gilt § 25 TDDDG, früher TTDSG." },
  { k: "merke", h: "Mithaften, Daten absichern, aktives Ja einholen", b: "Du haftest für die Fanpage mit. Daten in die USA brauchen eine sichere Grundlage. Tracking braucht ein aktives Ja." },
  { k: "check", q: "Was entschied der BGH 2020 im Fall „Cookie-Einwilligung II“?", a: ["Ein vorausgefülltes Häkchen ist keine wirksame Einwilligung", "Tracking-Cookies sind ohne jede Einwilligung erlaubt", "Ein Hinweis im Impressum ersetzt die Einwilligung", "Cookies dürfen nur auf Fanpages gesetzt werden"], c: 0, e: "Für Tracking-Cookies muss der Nutzer aktiv zustimmen. Ein vorab gesetztes Häkchen reicht nicht." }
 ]},
 { id: "rechtsfolgen", titel: "Abmahnung & Folgen von Rechtsverstößen", min: 4, quelle: "smm2.pdf, S. 82–93", folien: [
  { k: "intro", h: "Was tust du, wenn eine Abmahnung kommt?", b: "Du bekommst eine **Abmahnung**. Du sollst eine **Unterlassungs-Erklärung** unterschreiben. Ziel: Du reagierst richtig." },
  { k: "woerter", h: "Neue Wörter: Abmahnung, Vertragsstrafe", l: [
   "**Abmahnung:** Aufforderung, einen Verstoß zu stoppen",
   "**Unterlassungs-Erklärung:** Versprechen, es nie wieder zu tun",
   "**Vertragsstrafe:** Geld bei Rückfall"
  ] },
  { k: "liste", h: "4 Ansprüche, die Verletzte haben", l: [
   "**Unterlassung, Beseitigung:** Du hörst auf und löschst den Beitrag.",
   "**Auskunft:** Wann, wo, wie viele sahen es?",
   "**Schadenersatz:** meist eine **Lizenzgebühr**, sonst Schmerzensgeld",
   "**Anwaltskosten:** oft bis 3.000 Euro"
  ] },
  { k: "text", h: "Datenschutz-Verstöße kosten viel Geld", b: "Die Behörde kann warnen, Änderungen anordnen oder die Nutzung verbieten. Die **DSGVO** erlaubt Bußgelder bis 20 Millionen Euro. Oder 4 Prozent vom Jahresumsatz weltweit, wenn das mehr ist." },
  { k: "liste", h: "Abmahnung, Verfügung, Klage: die 3 Stufen", l: [
   "**1. Abmahnung:** Erklärung mit **Vertragsstrafe**, kurze Frist",
   "**2. Einstweilige Verfügung:** Das Gericht entscheidet schnell.",
   "**3. Klage:** klärt alles, auch Auskunft und Schadenersatz",
   "Jede Stufe kostet neue Gebühren."
  ] },
  { k: "liste", h: "3 Wege, auf eine Abmahnung zu reagieren", l: [
   "**Weg 1:** Beseitige den Verstoß, unterschreibe eine geänderte Erklärung.",
   "**Weg 2:** Nimm die Verfügung hin, versprich dann keine Vertragsstrafe.",
   "**Weg 3:** Kein Verstoß? Wehre dich, auch vor Gericht."
  ] },
  { k: "text", h: "Schulung und Freigaben senken das Risiko", b: "Schule dein Team, lass Posts juristisch freigeben. Ein **Disclaimer** wie „Keine Haftung für Links“ hilft selten. Er kann sogar Abmahnungen auslösen." },
  { k: "merke", h: "Erst Abmahnung, dann Verfügung, dann Klage", b: "Ohne Unterlassungs-Erklärung folgen Verfügung und Klage. Reagiere rechtzeitig und mit Anwalt. Vernichte nie Beweise.", esel: "Abmahnung, Verfügung, Klage: „Alle verlieren Kohle.“" },
  { k: "check", q: "Was folgt meist, wenn du nach einer Abmahnung die Frist für die Unterlassungserklärung verstreichen lässt?", a: ["Ein Antrag auf eine einstweilige Verfügung", "Eine sofortige Löschung deines gesamten Profils", "Ein Bußgeld der Datenschutzbehörde in Millionenhöhe", "Eine zweite Abmahnung mit einer längeren Frist"], c: 0, e: "Die einstweilige Verfügung ist Stufe 2. Das Gericht sichert damit den Unterlassungsanspruch vorläufig und verursacht weitere Kosten." }
 ]},
 { id: "werbekennzeichnung", titel: "Werbung kennzeichnen & Werbeaussagen", min: 4, quelle: "smm2.pdf, S. 80, 95–98 und S. 121", folien: [
  { k: "intro", h: "Muss dein Post als Werbung gekennzeichnet sein?", b: "Werbung muss erkennbar sein. Das verlangen **UWG** und **BGH**. Ziel: Du weißt, wann du kennzeichnest und was verboten ist." },
  { k: "woerter", h: "Neue Wörter: Influencer, Schleichwerbung, Advertorial", l: [
   "**Influencer:** Meinungsmacher im Netz",
   "**Schleichwerbung:** als Info getarnte Werbung",
   "**Advertorial:** Werbung im Stil eines Artikels",
   "**Tap Tag:** Markierung im Bild"
  ] },
  { k: "text", h: "BGH 2021: Übertrieben werblich heißt kennzeichnen", b: "**Influencer** haben Reichweite, Einfluss, Vernetzung und Relevanz. Lobt ein Post nur Vorzüge, ohne Abstand? Dann ist er Werbung. Das gilt auch, wenn Bohnenwerk eine Bloggerin bezahlt." },
  { k: "liste", h: "Das ist in der Regel unlauter", l: [
   "**Schleichwerbung**",
   "Gekaufte Influencer ohne Hinweis, gekaufte Bewertungen",
   "**Fake-Profile:** Erfundene Leute loben die Firma.",
   "Dein Team wirbt privat und nennt die Firma nicht."
  ] },
  { k: "text", h: "Tap Tags meist nicht, Advertorials immer kennzeichnen", b: "**Tap Tags** sind meist keine Werbung, auch mit Gegenleistung. **Advertorials** sind bestellte, lobende Berichte. Kennzeichne sie mit „Anzeige“, „Reklame“ oder „Werbung“." },
  { k: "liste", h: "Diese Werbung ist regelmäßig unzulässig", l: [
   "Mitbewerber oder ihre Waren schlechtmachen",
   "Werbung mit **Selbstverständlichkeiten**, etwa dem Widerrufsrecht",
   "Unwahre Aussagen, auch solche, die täuschen",
   "**Erlaubt:** klare Übertreibung, die jeder erkennt"
  ] },
  { k: "liste", h: "„Wir sind die Nr. 1“ nur nach strenger Prüfung", l: [
   "**Alleinstellung:** „Wir sind die Nummer 1.“",
   "**Spitzengruppe:** „Wir gehören zu den Größten.“",
   "Vergleiche mit Mitbewerbern, direkt oder indirekt",
   "**Satire** über Promis, nur in Grenzen"
  ] },
  { k: "merke", h: "Bezahlt heißt: als „Werbung“ kennzeichnen", b: "Kennzeichne bezahlte Posts als „Werbung“ oder „Anzeige“. Ein Link zum Hersteller ist immer Werbung." },
  { k: "check", q: "Welche Werbeform gilt nach dem UWG in der Regel als unlauter?", a: ["Ein Fake-Profil, das positiv über die eigene Firma berichtet", "Eine offensichtliche Übertreibung, die jeder sofort erkennt", "Ein bezahlter Beitrag mit dem deutlichen Hinweis „Anzeige“", "Ein Unternehmensprofil mit klar erkennbarem Firmennamen"], c: 0, e: "Fake-Profile tarnen Werbung als echte Meinung. Das ist Schleichwerbung und in der Regel unlauter." }
 ]},
 { id: "datenschutz", titel: "Übungsfälle: Werbung per Post und E-Mail", min: 3, quelle: "smm2.pdf, S. 100–104", folien: [
  { k: "intro", h: "Darfst du deinen Shop-Kunden Werbung schicken?", b: "Bei Bohnenwerk haben sich viele Kunden im Shop angemeldet. Ob du werben darfst, hängt vom Weg ab. Ziel: Du weißt, wann Werbung per Post oder Mail erlaubt ist." },
  { k: "woerter", h: "Neue Wörter: Double-Opt-in, Widerspruch", l: [
   "**Double-Opt-in:** doppelte Zustimmung, erst Häkchen, dann Link",
   "**Widerspruch:** Der Kunde sagt Nein zur Werbung."
  ] },
  { k: "liste", h: "Briefwerbung an Kunden: geht mit Hinweisen", l: [
   "Informiere bei der Anmeldung über Werbung und Widerspruch.",
   "Nenne im Brief den Werbenden als verantwortliche Stelle.",
   "Weise auf Widerspruchsrecht und Kontakt hin.",
   "Nenne wenn nötig die Herkunft der Daten."
  ] },
  { k: "liste", h: "E-Mail-Werbung braucht ein Double-Opt-in", l: [
   "Ohne **Double-Opt-in** ist Werbung per Mail verboten.",
   "**1.** Der Kunde setzt aktiv ein Häkchen.",
   "**2.** Er klickt den Link in der Bestätigungs-Mail.",
   "**3.** Du speicherst den Nachweis für die Aufsichtsbehörde."
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
