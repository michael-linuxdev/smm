// Lektionen „Recht & Richtlinien“ – Zusammenfassung von smm2.pdf, S. 43–123 (Vorlesung „Social Media & Recht“ und Vorbereitung auf den Abschlusstest), einfache Sprache.
export const L_RECHT = [
 { id: "rechtsgebiete", titel: "Wichtige Gesetze, Fallstricke & Plattformregeln", min: 5, quelle: "smm2.pdf, S. 47–57", folien: [
  { k: "intro", h: "Worum es geht", b: "Ein einheitliches **Online-Marketing-Recht** gibt es nicht. Du musst Regeln aus vielen verschiedenen Gesetzen beachten. Diese Lektion zeigt dir die wichtigsten Gesetze und die häufigsten Fehler." },
  { k: "liste", h: "Gesetze für Werbung und Inhalte", l: [
   "**UWG** (Gesetz gegen den unlauteren Wettbewerb): sichert fairen Wettbewerb und schützt Verbraucher vor unfairer Werbung.",
   "**UrhG** (Urheberrechtsgesetz): wichtig, wenn du fremde Bilder, Videos oder Texte nutzt.",
   "**KUG** (Kunsturhebergesetz): regelt das Recht am eigenen Bild von Personen auf Fotos.",
   "**MarkenG** (Markengesetz): betrifft Kontonamen und fremde Logos, Titel oder Marken."
  ] },
  { k: "liste", h: "Gesetze für Daten, Verträge und Medien", l: [
   "**DSGVO** (Datenschutz-Grundverordnung): gilt seit dem 25. Mai 2018 in allen EU-Staaten.",
   "**BDSG** (Bundesdatenschutzgesetz): ergänzt die DSGVO, zum Beispiel beim Datenschutz von Beschäftigten.",
   "**DDG** (Digitale-Dienste-Gesetz, früher TMG): Regeln für Websites und soziale Netzwerke, vor allem Impressum und Haftung.",
   "**BGB** und **EGBGB**: regeln Verträge, Widerrufsrecht und Informationspflichten gegenüber Verbrauchern.",
   "**Grundgesetz**: Daraus folgen das Persönlichkeitsrecht und das Recht am eigenen Bild.",
   "**Medienstaatsvertrag** (früher Rundfunkstaatsvertrag): gilt auch für Live-Streams, zum Beispiel beim Verbot von Schleichwerbung."
  ] },
  { k: "liste", h: "Häufige Fallstricke im Online-Marketing", l: [
   "Die Datenschutzerklärung ist unvollständig.",
   "Die Einwilligung für Werbung per E-Mail, Telefon oder Post fehlt.",
   "Du nutzt fremde Bilder, Videos oder Texte ohne Nutzungsrechte.",
   "Du teilst Inhalte, die andere verletzen, zum Beispiel Beleidigungen. Oder du nutzt geschützte Marken.",
   "Das Impressum fehlt oder ist schlecht eingebunden. Beachte die 2-Klick-Regel.",
   "Werbeaussagen sind falsch oder übertrieben schöngefärbt."
  ] },
  { k: "text", h: "Die Plattform-AGB beachten", b: "Prüfe vor dem Start die **AGB** (Allgemeine Geschäftsbedingungen) der Plattform. Erlaubt sie Profile für kommerzielle Nutzung? Bei LinkedIn und Xing ist das kein Problem. Nutze die speziellen Firmenkonten, zum Beispiel die LinkedIn-Unternehmensseite oder die Facebook-Unternehmensseite. Achte auf Grenzen bei Gewinnspielen, Werbung und bezahlten Leistungen." },
  { k: "merke", h: "Das Wichtigste", b: "Online-Marketing-Recht steckt in vielen Gesetzen: UWG, UrhG, KUG, MarkenG, DSGVO, DDG und weitere. Auch die AGB der Plattform gelten." },
  { k: "check", q: "Welches Gesetz schützt Verbraucher vor unfairen Werbemaßnahmen und sichert fairen Wettbewerb?", a: ["Das Gesetz gegen den unlauteren Wettbewerb (UWG)", "Das Kunsturhebergesetz (KUG) mit dem Recht am Bild", "Das Markengesetz (MarkenG) für Logos und Namen", "Das Bundesdatenschutzgesetz (BDSG) für Beschäftigte"], c: 0, e: "Das UWG enthält viele Verbote für unfaire Werbung. Verstöße führen oft zu teuren Abmahnungen." }
 ]},
 { id: "impressum", titel: "Transparenzgebot & Impressumspflicht", min: 5, quelle: "smm2.pdf, S. 58–67 und S. 118", folien: [
  { k: "intro", h: "Worum es geht", b: "Firmenprofile in Social Media müssen als kommerziell erkennbar sein. Das nennt man **Transparenzgebot**. Es steht in § 6 DDG (früher TMG) und im UWG. Dazu gehört auch ein gut erreichbares Impressum." },
  { k: "liste", h: "Prüffragen zum Transparenzgebot", l: [
   "Zeigt der Kontoname die kommerzielle Nutzung? Zum Beispiel „HSB Akademie“.",
   "Weisen die Inhalte auf die kommerzielle Nutzung hin?",
   "Enthält das Unternehmensprofil einen Hinweis auf das Impressum?"
  ] },
  { k: "text", h: "Was ist ein Impressum?", b: "Das **Impressum** ist eine gesetzliche Herkunftsangabe. Es zeigt, wer für die Inhalte verantwortlich ist. Das gilt auch für Social-Media-Seiten und Newsletter. Kommerzielle Profile brauchen immer ein Impressum. Nutzen Mitarbeitende ihr Profil dienstlich, kann auch für sie eine Pflicht bestehen. Das ist umstritten." },
  { k: "liste", h: "Ein Impressum muss … (§ 5 DDG, früher TMG)", l: [
   "**ständig verfügbar** sein,",
   "**leicht erkennbar** sein und",
   "**unmittelbar erreichbar** sein.",
   "**2-Klick-Regel:** Von jeder Stelle des Profils ist das Impressum höchstens 2 Klicks entfernt.",
   "**Sprechender Link:** Gut sind „Impressum“ oder „Kontakt“. Schlecht sind „AGB“, „Info“ oder „Details“."
  ] },
  { k: "beispiel", h: "Beispiel: LinkedIn-Profil von Otto", b: "Manche Plattformen haben kein Impressum-Feld, zum Beispiel LinkedIn oder X (früher Twitter). Du haftest trotzdem. Otto zeigt den Link erst nach Klick auf „Mehr anzeigen“ unter „Über uns“. Der Link ist klar benannt und in 2 Schritten erreichbar. Er ist aber versteckt und nicht anklickbar. Ein Risiko bleibt." },
  { k: "merke", h: "Das Wichtigste", b: "Ständig verfügbar, leicht erkennbar, unmittelbar erreichbar. Fehlt die Funktion, wähle die beste Notlösung. Kommt eine Impressum-Funktion, nutze sie sofort." },
  { k: "check", q: "Welche Linkbezeichnung erfüllt die Anforderung an einen sprechenden Link zum Impressum?", a: ["„Kontakt“", "„Details“", "„Info“", "„AGB“"], c: 0, e: "Ein sprechender Link ist aus sich heraus verständlich. „Impressum“ und „Kontakt“ sind gut, „AGB“, „Info“ und „Details“ nicht." }
 ]},
 { id: "bildrechte", titel: "Haftung, Lizenzen & Urheberrecht", min: 4, quelle: "smm2.pdf, S. 68–70 und S. 114; smm1.pdf, S. 67, 71, 73 und 74", folien: [
  { k: "intro", h: "Worum es geht", b: "In Social Media haftest du immer für deine eigenen Inhalte. Manchmal haftest du auch für fremde Inhalte. Außerdem lassen sich die Plattformen Rechte an allem einräumen, was du postest." },
  { k: "text", h: "Fremde Inhalte „zu eigen machen“", b: "Du haftest für fremde Inhalte, wenn du sie dir **zu eigen machst**. Reines Teilen reicht dafür wohl nicht. Teilen ist ein technischer Vorgang ohne eigene Aussage. Liken oder positiv kommentieren reicht den Gerichten aber schon. Also: Pass auf, was du likest!" },
  { k: "beispiel", h: "Beispiel: Russisch-Ukrainischer Krieg", b: "Eine positive Bewertung des russischen Vorgehens kann in Deutschland eine Straftat sein. Das ist die Billigung eines Angriffskrieges. Auch das Zeichen „Z“ kann darunter fallen. Es kommt auf den Zusammenhang an. Bei Verdacht muss die Staatsanwaltschaft ermitteln. Berichte über Krisen deshalb immer sachlich." },
  { k: "text", h: "Lizenzierung in Social Media", b: "Alle Plattformen lassen sich Rechte an deinen Posts einräumen. Du bekommst dafür kein Geld. Bei Facebook steht das in Ziffer 2 der Nutzungsbedingungen. Die Lizenz endet erst, wenn du das Konto löschst. Gekaufte Inhalte müssen deshalb **unterlizenzierbar** sein. Das heißt: Du darfst die Rechte weitergeben. Ein Beispiel für einen Bildanbieter ist Getty Images." },
  { k: "text", h: "Creative Commons (CC)", b: "**Creative Commons** verwaltet Urheberrechte in Form von Lizenzverträgen. Urheber legen damit fest, wie andere ihre Werke nutzen dürfen." },
  { k: "text", h: "Urheberrecht und Markenrecht", b: "Das **Urheberrecht** schützt Werke, also geistiges Eigentum. Es schützt sie ideell und wirtschaftlich. Geschützt sind zum Beispiel Bilder, TV-Sendungen und Computerprogramme. Ein Gesetzestext ist dagegen kein geschütztes Werk. Das **Markenrecht** schützt eine Marke oder ein Markenzeichen." },
  { k: "merke", h: "Das Wichtigste", b: "Liken und positiv kommentieren kann dich haftbar machen. Gekaufte Bilder und Videos müssen unterlizenzierbar sein." },
  { k: "check", q: "Ab wann haftest du laut Rechtsprechung für einen fremden Beitrag in Social Media?", a: ["Wenn du ihn likest oder positiv kommentierst", "Erst wenn du ihn wortgleich selbst neu postest", "Nur wenn du den Urheber persönlich kennst", "Nie, für fremde Inhalte haftet nur der Autor"], c: 0, e: "Liken oder positives Kommentieren reicht für ein „zu eigen machen“. Reines Teilen gilt dagegen wohl als technischer Vorgang." }
 ]},
 { id: "dsgvo", titel: "Fanpages, Datentransfer in die USA & Cookies", min: 5, quelle: "smm2.pdf, S. 71–79", folien: [
  { k: "intro", h: "Worum es geht", b: "Drei Gerichtsentscheidungen prägen den Datenschutz in Social Media. Es geht um Facebook-Fanpages, um Daten in den USA und um Cookies. **DSGVO** heißt Datenschutz-Grundverordnung." },
  { k: "text", h: "Die Facebook-Entscheidung (EuGH, Juni 2018)", b: "Betreiber einer **Fanpage** haften mit Facebook für Datenschutzverstöße. Die **DSK** (Datenschutzkonferenz der Aufsichtsbehörden) hielt Fanpages dann sogar ganz für rechtswidrig. Facebook ergänzte eine Zusatzvereinbarung, das „Page Controller Addendum“. Laut DSK löst das die Probleme nicht. Das Tracking auf Facebook selbst lässt sich nicht abschalten." },
  { k: "liste", h: "Was tun mit der Fanpage?", l: [
   "**Möglichkeit 1:** Die Fanpage abschalten.",
   "**Möglichkeit 2:** Das Risiko verringern.",
   "Im Cookie-Banner der Website die Einwilligung für das Tracking der Fanpage einholen.",
   "Die Datenschutzhinweise ergänzen, zum Beispiel um das Page Controller Addendum.",
   "Auf der Fanpage einen Link zu den Datenschutzhinweisen setzen.",
   "Anfragen von Betroffenen über das Formular an Facebook senden und mit Screenshot belegen."
  ] },
  { k: "text", h: "Privacy Shield gekippt (EuGH, 16.07.2020)", b: "Im Urteil „Schrems II“ erklärte der EuGH das **Privacy Shield** für unwirksam. Das war ein Abkommen für Daten zwischen EU und USA. In den USA fehlt wirksamer Rechtsschutz, Stichwort FISA. Die Lösung damals: **Standardvertragsklauseln** der EU-Kommission. Seit Juli 2023 gilt zusätzlich das EU-US Data Privacy Framework." },
  { k: "text", h: "Prüfe jedes Tool", b: "Daten dürfen nur unter Bedingungen in Länder außerhalb der EU. Entweder das Land hat ein vergleichbares Datenschutzniveau. Das stellt die EU-Kommission fest. Oder Verträge sichern den Schutz. Prüfe deshalb bei jedem Tool: Gehen Daten in die USA? Und gibt es eine passende Grundlage?" },
  { k: "text", h: "Cookie-Einwilligung II (BGH, 28.05.2020)", b: "Ein vorausgefülltes Häkchen ist keine Einwilligung in Tracking-Cookies. Der Nutzer muss selbst aktiv klicken. Sonst liegt ein Datenschutzverstoß vor. Heute regelt § 25 TDDDG (früher TTDSG) die Einwilligung in Cookies." },
  { k: "merke", h: "Das Wichtigste", b: "Fanpage-Betreiber haften mit. Daten in die USA brauchen eine sichere Grundlage. Tracking-Cookies brauchen ein aktives Ja des Nutzers." },
  { k: "check", q: "Was entschied der BGH 2020 im Fall „Cookie-Einwilligung II“?", a: ["Ein vorausgefülltes Häkchen ist keine wirksame Einwilligung", "Tracking-Cookies sind ohne jede Einwilligung erlaubt", "Ein Hinweis im Impressum ersetzt die Einwilligung", "Cookies dürfen nur auf Fanpages gesetzt werden"], c: 0, e: "Für Tracking-Cookies muss der Nutzer aktiv zustimmen. Ein vorab gesetztes Häkchen reicht nicht." }
 ]},
 { id: "rechtsfolgen", titel: "Abmahnung & Folgen von Rechtsverstößen", min: 5, quelle: "smm2.pdf, S. 82–93", folien: [
  { k: "intro", h: "Worum es geht", b: "Rechtsverstöße in Social Media können teuer werden. Du lernst hier die Ansprüche von Verletzten kennen. Außerdem siehst du, was bei einer Abmahnung passiert und wie du reagierst." },
  { k: "liste", h: "Ansprüche von Verletzten", l: [
   "**Unterlassung oder Beseitigung:** Unterlassungserklärung abgeben, Beitrag oder Bild entfernen.",
   "**Auskunft:** Wann, wo und mit welcher Reichweite geschah der Verstoß?",
   "**Schadenersatz:** bei Urheberrechtsverstößen meist eine Lizenzgebühr, bei Persönlichkeitsverletzung Schmerzensgeld.",
   "**Erstattung der Anwaltskosten:** meist die Kosten der Abmahnung, oft bis 3.000 Euro."
  ] },
  { k: "text", h: "Worst Case 1: Datenschutzbehörde", b: "Die Aufsichtsbehörden können Verstöße gegen den Datenschutz ahnden. Möglich sind eine Verwarnung oder eine Anweisung zur Änderung. Auch ein Verbot der Datenverarbeitung ist möglich. Nach der DSGVO drohen Bußgelder bis 20 Millionen Euro. Oder 4 Prozent des weltweiten Jahresumsatzes, wenn das höher ist." },
  { k: "liste", h: "Worst Case 2: Die 3 Eskalationsstufen", l: [
   "**Stufe 1 – Abmahnung:** Aufforderung zur Unterlassungserklärung mit Vertragsstrafe. Oft mit kurzer Frist.",
   "**Stufe 2 – Einstweilige Verfügung:** folgt, wenn die Frist ohne Erklärung abläuft. Das Gericht entscheidet in wenigen Tagen.",
   "**Stufe 3 – Klage:** soll die Sache endgültig klären. Es geht um Unterlassung, Auskunft, Schadenersatz und Kosten.",
   "Jede Stufe verursacht weitere Verfahrens- und Gerichtskosten."
  ] },
  { k: "liste", h: "Was tun, wenn eine Abmahnung kommt?", l: [
   "Sofort dem Vorwurf nachgehen und die Frist im Blick behalten.",
   "Nicht ohne Rechtsabteilung oder Anwalt antworten.",
   "Sachverhalt und behauptete Rechtsverletzung prüfen.",
   "Keine Beweise vernichten! Das geht immer schief.",
   "Berechtigte Vorwürfe dem Anwalt ehrlich sagen. Beim Geld gibt es oft Spielraum."
  ] },
  { k: "liste", h: "Typische Verteidigung", l: [
   "**Variante 1:** Verstoß beseitigen und eine geänderte Unterlassungserklärung abgeben. Kosten in gewisser Höhe zahlen.",
   "**Variante 2:** Eine einstweilige Verfügung bewusst hinnehmen. So musst du keine Vertragsstrafe versprechen.",
   "**Variante 3:** Besteht kein Verstoß, wehrst du dich vor Gericht und außergerichtlich."
  ] },
  { k: "text", h: "Vorbeugen statt reagieren", b: "Vollen Schutz gibt es nicht. Du senkst das Risiko aber stark. Schule dein Team in den Regeln. Richte Prüf- und Freigabeprozesse mit der Rechtsabteilung ein. **Disclaimer** (Haftungsausschluss) wie „Keine Haftung für Links“ oder „Keine Abmahnung ohne vorherigen Kontakt“ sind oft sinnlos. Manchmal lösen solche Texte sogar selbst eine Abmahnung aus." },
  { k: "check", q: "Was folgt meist, wenn du nach einer Abmahnung die Frist für die Unterlassungserklärung verstreichen lässt?", a: ["Ein Antrag auf eine einstweilige Verfügung", "Eine sofortige Löschung deines gesamten Profils", "Ein Bußgeld der Datenschutzbehörde in Millionenhöhe", "Eine zweite Abmahnung mit einer längeren Frist"], c: 0, e: "Die einstweilige Verfügung ist Stufe 2. Das Gericht sichert damit den Unterlassungsanspruch vorläufig und verursacht weitere Kosten." }
 ]},
 { id: "werbekennzeichnung", titel: "Werbung kennzeichnen & Werbeaussagen", min: 5, quelle: "smm2.pdf, S. 80, 95–98 und S. 121", folien: [
  { k: "intro", h: "Worum es geht", b: "Werbung muss als Werbung erkennbar sein. Das gilt besonders für **Influencer**. Influencer sind Personen mit starker Präsenz, großem Netzwerk und viel Einfluss auf ihre Zielgruppe. Typische Merkmale: Reichweite und Einfluss, Vernetzung und Relevanz für ein Thema." },
  { k: "text", h: "Influencer-Marketing und der BGH (09.09.2021)", b: "Kennzeichnen musst du, wenn der Beitrag übertrieben werblich ist. Das heißt: Er lobt ohne Distanz nur die Vorzüge des Produkts. **Tap Tags** sind Markierungen im Bild. Tap Tags sind meist keine Werbung. Ein Link zum Hersteller ist dagegen immer Werbung. Eine Gegenleistung war für den BGH ein Merkmal, aber nicht allein entscheidend." },
  { k: "liste", h: "Schleichwerbung: In der Regel unlauter", l: [
   "**Schleichwerbung**, also als Information getarnte Werbung.",
   "Gekaufte Influencer, die ihre Inhalte nicht als Werbung kennzeichnen.",
   "**Fake-Profile**, also erfundene Personen, die positiv über die Firma berichten.",
   "Werbung von Mitarbeitenden auf privaten Profilen, wenn das Arbeitsverhältnis nicht erkennbar ist.",
   "Gekaufte Bewertungen auf Bewertungsportalen."
  ] },
  { k: "text", h: "Tarnung als redaktioneller Inhalt", b: "Bezahlte Beiträge dürfen nicht unabhängig und objektiv wirken. Das gilt auch für **Advertorials**. Dabei berichtet ein Blogger nach Absprache möglichst positiv über ein Unternehmen. Kennzeichne solche Inhalte deutlich mit Begriffen wie „Anzeige“, „Reklame“ oder „Werbung“." },
  { k: "liste", h: "Regelmäßig unzulässige Werbung", l: [
   "Mitbewerber oder ihre Produkte schlechtmachen.",
   "**Werbung mit Selbstverständlichkeiten**, zum Beispiel das gesetzliche 14-tägige Widerrufsrecht hervorheben.",
   "Unwahre Aussagen. Schon missverständliche Aussagen gelten als unwahr.",
   "Erlaubt sind offensichtliche Übertreibungen, die jeder sofort erkennt."
  ] },
  { k: "liste", h: "Risikobehaftete Werbeaussagen", l: [
   "**Alleinstellung** („Wir sind die Nr. 1“) oder Spitzengruppe („Wir gehören zu den Größten“).",
   "Direkte oder indirekte Vergleiche mit Mitbewerbern und ihren Produkten.",
   "Satirische Werbung über Prominente. Diese ist nur in Grenzen erlaubt.",
   "Solche Werbung kann zulässig sein. Prüfe aber streng die Regeln des UWG."
  ] },
  { k: "merke", h: "Das Wichtigste", b: "Bezahlte Inhalte klar als „Werbung“ oder „Anzeige“ kennzeichnen. Ein Link zum Hersteller ist immer Werbung. Keine falschen oder missverständlichen Aussagen." },
  { k: "check", q: "Welche Werbeform gilt nach dem UWG in der Regel als unlauter?", a: ["Ein Fake-Profil, das positiv über die eigene Firma berichtet", "Eine offensichtliche Übertreibung, die jeder sofort erkennt", "Ein bezahlter Beitrag mit dem deutlichen Hinweis „Anzeige“", "Ein Unternehmensprofil mit klar erkennbarem Firmennamen"], c: 0, e: "Fake-Profile tarnen Werbung als echte Meinung. Das ist Schleichwerbung und in der Regel unlauter." }
 ]},
 { id: "datenschutz", titel: "Übungsfälle: Werbung per Post und E-Mail", min: 4, quelle: "smm2.pdf, S. 100–104", folien: [
  { k: "intro", h: "Worum es geht", b: "Dein Unternehmen hat einen Onlineshop. Viele Kunden haben sich dort registriert und bestellt. Darfst du ihnen Werbung schicken? Die Antwort hängt vom Weg ab: Post oder E-Mail." },
  { k: "text", h: "Werbung per Post", b: "Briefwerbung an eigene registrierte Kunden ist grundsätzlich möglich. Informiere den Kunden schon bei der Registrierung darüber und über sein Widerspruchsrecht. Nenne in jedem Werbebrief den Werbenden als verantwortliche Stelle. Weise auf das Widerspruchsrecht und die Kontaktmöglichkeit hin. Manchmal musst du auch die Herkunft der Daten nennen." },
  { k: "liste", h: "E-Mail-Werbung: Double-Opt-in", l: [
   "**Double-Opt-in** heißt doppelte Bestätigung. Ohne diese Einwilligung ist E-Mail-Werbung grundsätzlich verboten.",
   "Schritt 1: Der Kunde bestätigt im Formular aktiv, zum Beispiel per Checkbox. Der Hinweistext ist klar.",
   "Schritt 2: Der Kunde bekommt eine E-Mail und klickt auf den Bestätigungslink.",
   "Schritt 3: Das System speichert den ganzen Vorgang als Nachweis für die Aufsichtsbehörde."
  ] },
  { k: "liste", h: "Ausnahme nach § 7 Abs. 3 UWG", l: [
   "Du hast die E-Mail-Adresse beim Verkauf einer Ware oder Dienstleistung vom Kunden bekommen.",
   "Du nutzt sie nur für eigene Werbung.",
   "Du bewirbst nur ähnliche eigene Waren oder Dienstleistungen.",
   "Der Kunde hat nicht widersprochen.",
   "Du weist bei der Registrierung und in jeder Mail auf sein kostenloses Widerspruchsrecht hin.",
   "Alle Bedingungen müssen zusammen erfüllt sein."
  ] },
  { k: "beispiel", h: "Fall: Abgebrochene Bestellung", b: "Ein Kunde registriert sich mit seiner E-Mail-Adresse. Dann bricht er die Bestellung ab. Du willst ihn per E-Mail an den Kauf erinnern. Das ist ohne Double-Opt-in unzulässig. Die Ausnahme greift nicht. Es gab keinen Verkauf und keinen Hinweis auf das Widerspruchsrecht." },
  { k: "merke", h: "Das Wichtigste", b: "Post-Werbung an Kunden geht mit Hinweis auf das Widerspruchsrecht. E-Mail-Werbung braucht Double-Opt-in oder alle Bedingungen von § 7 Abs. 3 UWG." },
  { k: "check", q: "Ein Kunde bricht die Bestellung ab. Wann darfst du ihn per E-Mail an den Kauf erinnern?", a: ["Nur wenn er vorher per Double-Opt-in eingewilligt hat", "Immer, weil er seine E-Mail-Adresse freiwillig angab", "Immer, wenn die Erinnerung innerhalb von 24 Stunden kommt", "Nur wenn im Shop ein vollständiges Impressum steht"], c: 0, e: "Ohne Verkauf greift die Ausnahme nach § 7 Abs. 3 UWG nicht. Dann brauchst du eine Einwilligung per Double-Opt-in." }
 ]}
];
