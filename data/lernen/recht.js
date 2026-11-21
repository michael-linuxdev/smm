// Lektionen „Recht & Richtlinien“ – Zusammenfassung von smm2.pdf, S. 43–123 (Vorlesung „Social Media & Recht“ und Vorbereitung auf den Abschlusstest), einfache Sprache.
export const L_RECHT = [
 { id: "rechtsgebiete", titel: "Wichtige Gesetze, Fallstricke & Plattformregeln", min: 4, quelle: "smm2.pdf, S. 47–57", folien: [
  { k: "intro", h: "Welche Gesetze gelten für deine Posts?", b: "Ein einheitliches **Online-Marketing-Recht** gibt es nicht, sondern viele Gesetze und Plattformregeln. Ziel: Du ordnest Gesetze ihren Themen zu." },
  { k: "liste", h: "Werbung und Inhalte: UWG, UrhG, KUG, MarkenG", l: [
   "**UWG** (unlauterer Wettbewerb): fairer Wettbewerb, Schutz vor unfairer Werbung",
   "**UrhG** (Urheberrecht): fremde Bilder, Videos oder Texte nutzen",
   "**KUG** (Kunsturhebergesetz): Recht am eigenen Bild",
   "**MarkenG** (Markengesetz): Kontonamen, fremde Logos, Titel, Marken"
  ] },
  { k: "liste", h: "Daten und Verträge: DSGVO, BDSG, DDG, BGB", l: [
   "**DSGVO** (Datenschutz-Grundverordnung): gilt EU-weit seit 25. Mai 2018",
   "**BDSG** (Bundesdatenschutzgesetz): ergänzt die DSGVO, etwa für Beschäftigte",
   "**DDG** (früher TMG): Impressum und Haftung im Netz",
   "**BGB** und **EGBGB:** Verträge, Widerruf, Informationspflichten"
  ] },
  { k: "text", h: "Grundgesetz und Medienstaatsvertrag gelten auch", b: "Aus dem **Grundgesetz** folgen das Persönlichkeitsrecht und das Recht am eigenen Bild. Der **Medienstaatsvertrag** (früher Rundfunkstaatsvertrag) gilt auch für Live-Streams. Er verbietet zum Beispiel Schleichwerbung." },
  { k: "text", h: "Die AGB der Plattform setzen eigene Grenzen", b: "Prüfe die **AGB** (Allgemeine Geschäftsbedingungen): Ist kommerzielle Nutzung erlaubt? Nutze Firmenkonten wie die LinkedIn-Unternehmensseite. Achte auf Grenzen bei Gewinnspielen, Werbung und bezahlten Leistungen." },
  { k: "liste", h: "Häufige Fallstricke im Online-Marketing", l: [
   "**Datenschutz:** Erklärung unvollständig, Einwilligung für Werbung fehlt",
   "**Fremde Inhalte:** ohne Nutzungsrechte oder mit geschützten Marken",
   "**Geteilte Inhalte:** verletzen andere, etwa durch Beleidigungen",
   "**Impressum** fehlt, **Werbeaussagen** falsch oder schöngefärbt"
  ] },
  { k: "merke", h: "Recht steckt in vielen Gesetzen und in den AGB", b: "Online-Marketing-Recht steckt in vielen Gesetzen wie UWG, UrhG, KUG und DSGVO. Auch die Plattform-AGB gelten." },
  { k: "check", q: "Welches Gesetz schützt Verbraucher vor unfairen Werbemaßnahmen und sichert fairen Wettbewerb?", a: ["Das Gesetz gegen den unlauteren Wettbewerb (UWG)", "Das Kunsturhebergesetz (KUG) mit dem Recht am Bild", "Das Markengesetz (MarkenG) für Logos und Namen", "Das Bundesdatenschutzgesetz (BDSG) für Beschäftigte"], c: 0, e: "Das UWG enthält viele Verbote für unfaire Werbung. Verstöße führen oft zu teuren Abmahnungen." }
 ]},
 { id: "impressum", titel: "Transparenzgebot & Impressumspflicht", min: 3, quelle: "smm2.pdf, S. 58–67 und S. 118", folien: [
  { k: "intro", h: "Erkennt jeder die Firma hinter dem Profil?", b: "Firmenprofile müssen als kommerziell erkennbar sein. Das heißt **Transparenzgebot** und steht in § 6 DDG (früher TMG) und im UWG. Ziel: Du prüfst Profil und Impressum." },
  { k: "liste", h: "3 Prüffragen zum Transparenzgebot", l: [
   "Zeigt der Kontoname kommerzielle Nutzung, etwa „HSB Akademie“?",
   "Weisen die Inhalte auf kommerzielle Nutzung hin?",
   "Enthält das Profil einen Hinweis auf das Impressum?"
  ] },
  { k: "text", h: "Das Impressum zeigt, wer verantwortlich ist", b: "Das **Impressum** ist eine gesetzliche Herkunftsangabe zum Verantwortlichen für die Inhalte. Kommerzielle Profile und Newsletter brauchen es immer. Bei dienstlich genutzten Profilen von Mitarbeitenden ist die Pflicht umstritten." },
  { k: "liste", h: "So muss ein Impressum nach § 5 DDG sein", l: [
   "**ständig verfügbar**, **leicht erkennbar**, **unmittelbar erreichbar**",
   "**2-Klick-Regel:** höchstens 2 Klicks von jeder Stelle",
   "**Sprechender Link:** „Impressum“ oder „Kontakt“",
   "**Schlecht:** „AGB“, „Info“ oder „Details“"
  ] },
  { k: "beispiel", h: "Otto auf LinkedIn: klar benannt, aber versteckt", b: "LinkedIn und X (früher Twitter) haben kein Impressum-Feld. Du haftest trotzdem. Otto verlinkt es hinter „Mehr anzeigen“ unter „Über uns“: versteckt und nicht anklickbar." },
  { k: "merke", h: "Verfügbar, erkennbar, erreichbar – in 2 Klicks", b: "Das Impressum ist ständig verfügbar, leicht erkennbar und unmittelbar erreichbar. Fehlt ein Feld, wähle die beste Notlösung." },
  { k: "check", q: "Welche Linkbezeichnung erfüllt die Anforderung an einen sprechenden Link zum Impressum?", a: ["„Kontakt“", "„Details“", "„Info“", "„AGB“"], c: 0, e: "Ein sprechender Link ist aus sich heraus verständlich. „Impressum“ und „Kontakt“ sind gut, „AGB“, „Info“ und „Details“ nicht." }
 ]},
 { id: "bildrechte", titel: "Haftung, Lizenzen & Urheberrecht", min: 3, quelle: "smm2.pdf, S. 68–70 und S. 114; smm1.pdf, S. 67, 71, 73 und 74", folien: [
  { k: "intro", h: "Wann macht dich ein Like oder ein Bild haftbar?", b: "Für eigene Inhalte haftest du immer, für fremde manchmal. Ziel: Du erklärst Haftung für Likes und nötige Bildrechte." },
  { k: "text", h: "Urheberrecht schützt Werke, Markenrecht Marken", b: "Das **Urheberrecht** schützt Werke als geistiges Eigentum, ideell und wirtschaftlich. Beispiele sind Bilder, TV-Sendungen und Computerprogramme. Ein Gesetzestext ist kein geschütztes Werk. Das **Markenrecht** schützt Marken und Markenzeichen." },
  { k: "text", h: "Gekaufte Bilder müssen unterlizenzierbar sein", b: "Plattformen lassen sich kostenlos Rechte an deinen Posts einräumen, bis du das Konto löschst. Gekaufte Inhalte, etwa von Getty Images, müssen deshalb **unterlizenzierbar** sein. Du darfst die Rechte also weitergeben." },
  { k: "text", h: "Creative Commons regelt die Nutzung per Lizenz", b: "**Creative Commons** (CC) verwaltet Urheberrechte in Form von Lizenzverträgen. Urheber legen damit fest, wie andere ihre Werke nutzen dürfen." },
  { k: "text", h: "Wer liked, macht sich Inhalte „zu eigen“", b: "Für fremde Inhalte haftest du, wenn du sie dir **zu eigen machst**. Reines Teilen ist wohl nur ein technischer Vorgang. Liken oder positiv kommentieren reicht den Gerichten aber schon." },
  { k: "beispiel", h: "Ein „Z“ zum Ukraine-Krieg kann strafbar sein", b: "Lob für das russische Vorgehen kann als Billigung eines Angriffskrieges strafbar sein, auch das Zeichen „Z“. Bei Verdacht ermittelt die Staatsanwaltschaft. Berichte deshalb sachlich." },
  { k: "merke", h: "Pass auf, was du likest und welche Bilder du kaufst", b: "Liken und positiv kommentieren kann dich haftbar machen. Gekaufte Bilder und Videos müssen unterlizenzierbar sein." },
  { k: "check", q: "Ab wann haftest du laut Rechtsprechung für einen fremden Beitrag in Social Media?", a: ["Wenn du ihn likest oder positiv kommentierst", "Erst wenn du ihn wortgleich selbst neu postest", "Nur wenn du den Urheber persönlich kennst", "Nie, für fremde Inhalte haftet nur der Autor"], c: 0, e: "Liken oder positives Kommentieren reicht für ein „zu eigen machen“. Reines Teilen gilt dagegen wohl als technischer Vorgang." }
 ]},
 { id: "dsgvo", titel: "Fanpages, Datentransfer in die USA & Cookies", min: 4, quelle: "smm2.pdf, S. 71–79", folien: [
  { k: "intro", h: "3 Urteile, die deine Fanpage und deine Tools betreffen", b: "Drei Urteile prägen den Datenschutz nach **DSGVO** (Datenschutz-Grundverordnung). Ziel: Du nennst die Urteile und ihre Folgen." },
  { k: "text", h: "EuGH 2018: Fanpage-Betreiber haften mit Facebook", b: "Betreiber einer **Fanpage** (Unternehmensseite) haften mit Facebook. Die **DSK** (Datenschutzkonferenz) hält Fanpages für rechtswidrig. Facebooks „Page Controller Addendum“ hilft laut DSK nicht. Das Tracking lässt sich nicht abschalten." },
  { k: "liste", h: "Fanpage abschalten oder das Risiko so senken", l: [
   "Cookie-Banner: Einwilligung ins Fanpage-Tracking einholen",
   "Datenschutzhinweise um Page Controller Addendum ergänzen",
   "Auf der Fanpage zu den Datenschutzhinweisen verlinken",
   "Anfragen Betroffener per Formular an Facebook, mit Screenshot"
  ] },
  { k: "text", h: "EuGH 2020: Das Privacy Shield ist unwirksam", b: "Im Urteil „Schrems II“ kippte der EuGH am 16.07.2020 das **Privacy Shield** für Daten in die USA. Lösung: **Standardvertragsklauseln**. Seit Juli 2023 gilt das EU-US Data Privacy Framework." },
  { k: "text", h: "Daten in die USA brauchen eine sichere Grundlage", b: "Daten verlassen die EU nur bei vergleichbarem Schutzniveau oder sicheren Verträgen. Prüfe bei jedem Tool: Gehen Daten in die USA?" },
  { k: "text", h: "BGH 2020: Ein vorausgefülltes Häkchen zählt nicht", b: "Im Fall „Cookie-Einwilligung II“ entschied der BGH 2020: Ein vorausgefülltes Häkchen ist keine Einwilligung in Tracking-Cookies. Der Nutzer muss aktiv klicken. Heute gilt § 25 TDDDG (früher TTDSG)." },
  { k: "merke", h: "Mithaften, Daten absichern, aktives Ja einholen", b: "Fanpage-Betreiber haften mit. Daten in die USA brauchen eine sichere Grundlage. Tracking-Cookies brauchen ein aktives Ja." },
  { k: "check", q: "Was entschied der BGH 2020 im Fall „Cookie-Einwilligung II“?", a: ["Ein vorausgefülltes Häkchen ist keine wirksame Einwilligung", "Tracking-Cookies sind ohne jede Einwilligung erlaubt", "Ein Hinweis im Impressum ersetzt die Einwilligung", "Cookies dürfen nur auf Fanpages gesetzt werden"], c: 0, e: "Für Tracking-Cookies muss der Nutzer aktiv zustimmen. Ein vorab gesetztes Häkchen reicht nicht." }
 ]},
 { id: "rechtsfolgen", titel: "Abmahnung & Folgen von Rechtsverstößen", min: 4, quelle: "smm2.pdf, S. 82–93", folien: [
  { k: "intro", h: "Was tust du, wenn eine Abmahnung kommt?", b: "Eine **Abmahnung** fordert dich auf, einen Verstoß künftig zu unterlassen. Falsche Reaktionen machen es teurer. Ziel: Du kennst die 3 Stufen und reagierst richtig." },
  { k: "liste", h: "4 Ansprüche, die Verletzte haben", l: [
   "**Unterlassung oder Beseitigung:** Erklärung abgeben, Beitrag entfernen",
   "**Auskunft:** wann, wo, mit welcher Reichweite",
   "**Schadenersatz:** meist Lizenzgebühr, bei Persönlichkeitsverletzung Schmerzensgeld",
   "**Anwaltskosten:** Kosten der Abmahnung, oft bis 3.000 Euro"
  ] },
  { k: "text", h: "DSGVO-Bußgeld: bis 20 Millionen Euro oder 4 Prozent", b: "Die Datenschutzbehörde kann verwarnen, Änderungen anweisen oder die Verarbeitung verbieten. Die DSGVO erlaubt Bußgelder bis 20 Millionen Euro. Oder 4 Prozent des weltweiten Jahresumsatzes, wenn das höher ist." },
  { k: "liste", h: "Abmahnung, Verfügung, Klage: die 3 Stufen", l: [
   "**1. Abmahnung:** Unterlassungserklärung mit Vertragsstrafe, kurze Frist",
   "**2. Einstweilige Verfügung:** nach Fristablauf, in wenigen Tagen",
   "**3. Klage:** klärt endgültig, auch Auskunft und Schadenersatz",
   "Jede Stufe bringt neue Gerichtskosten."
  ] },
  { k: "liste", h: "3 Wege, auf eine Abmahnung zu reagieren", l: [
   "**1:** Verstoß beseitigen, geänderte Unterlassungserklärung abgeben",
   "**2:** Einstweilige Verfügung hinnehmen, dann keine Vertragsstrafe versprechen",
   "**3:** Kein Verstoß? Wehre dich, auch vor Gericht."
  ] },
  { k: "text", h: "Schulung und Freigaben senken das Risiko", b: "Schule dein Team und richte Freigaben mit der Rechtsabteilung ein. **Disclaimer** (Haftungsausschluss) wie „Keine Haftung für Links“ sind oft sinnlos. Manchmal lösen sie sogar Abmahnungen aus." },
  { k: "merke", h: "Erst Abmahnung, dann Verfügung, dann Klage", b: "Ohne Unterlassungserklärung folgen Verfügung und Klage. Reagiere fristgerecht mit Anwalt. Vernichte nie Beweise." },
  { k: "check", q: "Was folgt meist, wenn du nach einer Abmahnung die Frist für die Unterlassungserklärung verstreichen lässt?", a: ["Ein Antrag auf eine einstweilige Verfügung", "Eine sofortige Löschung deines gesamten Profils", "Ein Bußgeld der Datenschutzbehörde in Millionenhöhe", "Eine zweite Abmahnung mit einer längeren Frist"], c: 0, e: "Die einstweilige Verfügung ist Stufe 2. Das Gericht sichert damit den Unterlassungsanspruch vorläufig und verursacht weitere Kosten." }
 ]},
 { id: "werbekennzeichnung", titel: "Werbung kennzeichnen & Werbeaussagen", min: 4, quelle: "smm2.pdf, S. 80, 95–98 und S. 121", folien: [
  { k: "intro", h: "Muss dein Post als Werbung gekennzeichnet sein?", b: "Werbung muss erkennbar sein, besonders bei Influencern. Falsche Werbeaussagen verstoßen schnell gegen das UWG. Ziel: Du erkennst Kennzeichnungspflicht und unzulässige Aussagen." },
  { k: "text", h: "BGH 2021: Übertrieben werblich heißt kennzeichnen", b: "**Influencer** haben Reichweite, Einfluss, Vernetzung und Relevanz für ein Thema. Laut BGH 2021 kennzeichnen sie, wenn ein Beitrag ohne Distanz nur Vorzüge lobt. Ein Link zum Hersteller ist immer Werbung." },
  { k: "liste", h: "Das ist in der Regel unlauter", l: [
   "**Schleichwerbung:** als Information getarnte Werbung",
   "Gekaufte Influencer ohne Kennzeichnung, gekaufte Bewertungen",
   "**Fake-Profile:** erfundene Personen loben die Firma",
   "Mitarbeitende werben privat, Arbeitsverhältnis nicht erkennbar"
  ] },
  { k: "text", h: "Tap Tags meist nicht, Advertorials immer kennzeichnen", b: "**Tap Tags** (Markierungen im Bild) sind meist keine Werbung. Eine Gegenleistung entscheidet nicht allein. **Advertorials** sind abgesprochene, positive Blogberichte. Kennzeichne sie mit „Anzeige“, „Reklame“ oder „Werbung“." },
  { k: "liste", h: "Diese Werbung ist regelmäßig unzulässig", l: [
   "Mitbewerber oder ihre Produkte schlechtmachen",
   "**Selbstverständlichkeiten**, etwa das gesetzliche 14-tägige Widerrufsrecht",
   "Unwahre Aussagen, schon missverständliche gelten als unwahr",
   "**Erlaubt:** offensichtliche Übertreibungen, die jeder erkennt"
  ] },
  { k: "liste", h: "„Wir sind die Nr. 1“ nur nach strenger Prüfung", l: [
   "**Alleinstellung** („Nr. 1“) oder **Spitzengruppe** („zu den Größten“)",
   "Direkte oder indirekte Vergleiche mit Mitbewerbern",
   "Satirische Werbung über Prominente, nur in Grenzen",
   "Kann zulässig sein, prüfe streng nach UWG"
  ] },
  { k: "merke", h: "Bezahlt heißt: als „Werbung“ kennzeichnen", b: "Bezahlte Inhalte klar als „Werbung“ oder „Anzeige“ kennzeichnen. Ein Link zum Hersteller ist immer Werbung." },
  { k: "check", q: "Welche Werbeform gilt nach dem UWG in der Regel als unlauter?", a: ["Ein Fake-Profil, das positiv über die eigene Firma berichtet", "Eine offensichtliche Übertreibung, die jeder sofort erkennt", "Ein bezahlter Beitrag mit dem deutlichen Hinweis „Anzeige“", "Ein Unternehmensprofil mit klar erkennbarem Firmennamen"], c: 0, e: "Fake-Profile tarnen Werbung als echte Meinung. Das ist Schleichwerbung und in der Regel unlauter." }
 ]},
 { id: "datenschutz", titel: "Übungsfälle: Werbung per Post und E-Mail", min: 3, quelle: "smm2.pdf, S. 100–104", folien: [
  { k: "intro", h: "Darfst du deinen Shop-Kunden Werbung schicken?", b: "Viele Kunden haben sich in deinem Onlineshop registriert. Ob du werben darfst, hängt vom Weg ab. Ziel: Du entscheidest, wann Werbung per Post oder E-Mail erlaubt ist." },
  { k: "liste", h: "Briefwerbung an Kunden: geht mit Hinweisen", l: [
   "Schon bei der Registrierung über Werbung und Widerspruchsrecht informieren",
   "In jedem Brief den Werbenden als verantwortliche Stelle nennen",
   "Auf Widerspruchsrecht und Kontaktmöglichkeit hinweisen",
   "Wenn nötig die Herkunft der Daten nennen"
  ] },
  { k: "liste", h: "E-Mail-Werbung braucht ein Double-Opt-in", l: [
   "**Double-Opt-in:** doppelte Bestätigung, sonst grundsätzlich verboten",
   "**1.** Kunde setzt aktiv ein Häkchen im Formular",
   "**2.** Kunde klickt den Bestätigungslink per E-Mail",
   "**3.** System speichert den Nachweis für die Aufsichtsbehörde"
  ] },
  { k: "liste", h: "§ 7 Abs. 3 UWG: ohne Einwilligung nur so", l: [
   "Adresse beim Verkauf einer Ware oder Dienstleistung erhalten",
   "Nur eigene Werbung für ähnliche eigene Angebote",
   "Kunde hat nicht widersprochen",
   "Hinweis auf kostenlosen Widerspruch bei Registrierung und jeder Mail"
  ] },
  { k: "beispiel", h: "Abgebrochene Bestellung: keine Erinnerungs-Mail", b: "Ein Kunde registriert sich und bricht die Bestellung ab. Eine Erinnerungs-Mail ist ohne Double-Opt-in unzulässig. Es gab keinen Verkauf, die Ausnahme greift nicht." },
  { k: "merke", h: "E-Mail-Werbung nur mit Double-Opt-in oder Ausnahme", b: "E-Mail-Werbung braucht Double-Opt-in oder alle Bedingungen von § 7 Abs. 3 UWG zusammen." },
  { k: "check", q: "Ein Kunde bricht die Bestellung ab. Wann darfst du ihn per E-Mail an den Kauf erinnern?", a: ["Nur wenn er vorher per Double-Opt-in eingewilligt hat", "Immer, weil er seine E-Mail-Adresse freiwillig angab", "Immer, wenn die Erinnerung innerhalb von 24 Stunden kommt", "Nur wenn im Shop ein vollständiges Impressum steht"], c: 0, e: "Ohne Verkauf greift die Ausnahme nach § 7 Abs. 3 UWG nicht. Dann brauchst du eine Einwilligung per Double-Opt-in." }
 ]}
];
