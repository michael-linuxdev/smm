# Redaktionsplan und alle Texte von smm.mit.ki. Dieses Skript ist die eine Quelle:
#   python3 werkzeug/inhalt.py   schreibt plan.json, legt je Reel reels/<nr>-<name>/ an (reel.html, beschreibung.txt, kommentar.txt)
#                                und je Karussell karussells/<nr>-<name>/ (seiten.html, beschreibung.txt).
# Vorhandene reel.mp4 bleiben liegen. Reel 01 ist von Hand gebaut und wird nicht überschrieben.
import json, os, datetime
K = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TAGS = "#socialmediamanager #socialmediamarketing #ki #prompt"
D = lambda t, m, j=2026: datetime.date(j, m, t)

# ---------- Montag: Prompt der Woche ----------
# datum, name, titel, absender, nachricht, kurzfassung (wird im Reel getippt), ergebnis (titel, kopf, text), schluss, voller prompt, 3 bausteine (name, auszug, warum)
MONTAG = [
 (D(24,11), "zwoelf-beitraege", "12 Beiträge. Bis Montag.", "Kundin, Freitag 17:42", "Können wir bis Montag noch 12 Beiträge für Dezember haben?",
  "Erstelle einen Redaktionsplan mit 12 Instagram-Beiträgen für [eine Kaffeerösterei in Leipzig] im [Dezember]. Als Tabelle mit Datum, Format, Thema und Aufhänger.",
  None, "Speichern. Montag brauchst du’s.", None,
  [("Markenton mit Beispiel", "Markenton: [locker, per Du]. So klingen wir: [1 bis 2 eigene Beiträge einfügen]", "Ein Beispiel sagt mehr als fünf Adjektive. Die KI ahmt nach, was sie sieht."),
   ("Erst fragen, dann planen", "Stell mir zuerst bis zu 5 Rückfragen, wenn dir etwas fehlt.", "So füllt die KI Lücken nicht mit Erfundenem."),
   ("Tabelle mit festen Spalten", "Datum, Format, Themensäule, Thema, Aufhänger, Ziel, Handlungsaufforderung", "Feste Spalten machen den Plan vergleichbar und sofort nutzbar.")]),
 (D(30,11), "zehn-aufhaenger", "200 Aufrufe. Mach es viral.", "Kundin, Montag 7:03", "Das Reel hat nur 200 Aufrufe. Mach, dass es viral geht.",
  "Schreib 10 Aufhänger für ein Reel über [unsere neue Röstung]. Höchstens 8 Wörter. Jeder mit einem anderen Dreh.",
  ("Drei von zehn", "Ergebnis", "Dein Kaffee schmeckt bitter? Daran liegt’s. (Fehler) · Diese Bohne gibt es nur 4 Wochen. (Verknappung) · 3 Sekunden, die alles ändern. (Zahl)"),
  "Speichern. Der nächste Aufhänger kommt bestimmt.",
  "Du bist Social Media Manager für [Unternehmen, Branche].\n\nAufgabe: Schreib 10 Aufhänger für ein Reel über [Thema].\n\nDas musst du wissen:\n- Zielgruppe: [wer, was sie beschäftigt]\n- Was im Reel passiert: [2 Sätze]\n- Markenton: [z. B. locker, per Du]\n\nRegeln:\n- Höchstens 8 Wörter je Aufhänger.\n- Jeder nutzt einen anderen Dreh: Frage, Fehler, Zahl, Geheimnis, Widerspruch, Vorher/Nachher.\n- Nichts versprechen, was das Reel nicht hält.\n- Schreib den Dreh in Klammern dahinter.\n\nMarkiere am Ende deine 3 Favoriten und sag in einem Satz, warum.",
  [("Was im Reel passiert", "Was im Reel passiert: [2 Sätze]", "Ohne das rät die KI. Dann passt der Aufhänger nicht zum Video."),
   ("Ein Dreh je Aufhänger", "Jeder nutzt einen anderen Dreh: Frage, Fehler, Zahl, Geheimnis …", "So bekommst du zehn verschiedene Ideen statt zehnmal dieselbe."),
   ("Nichts versprechen", "Nichts versprechen, was das Reel nicht hält.", "Ein Aufhänger, der übertreibt, kostet Zuschauer nach drei Sekunden.")]),
 (D(7,12), "kommentar-antwort", "Jemand meckert. Und jetzt?", "Kundin, Sonntag 22:10", "Unter dem Post hat einer gemeckert. Antworte nett, aber bestimmt!",
  "Schreib 3 Antworten auf diesen Kommentar: [Kommentar einfügen]. Freundlich, sachlich, höchstens 2 Sätze.",
  ("Eine der drei", "Antwort", "Danke für deine offene Rückmeldung. Schreib uns kurz per Nachricht, was schiefging, dann klären wir das."),
  "Speichern. Meckern kommt nie nach Plan.",
  "Du betreust die Kommentare für [Unternehmen, Branche].\n\nAufgabe: Schreib 3 Antworten auf diesen Kommentar:\n[Kommentar einfügen]\n\nDas musst du wissen:\n- Was wirklich passiert ist: [Fakten, soweit bekannt]\n- Markenton: [z. B. freundlich, per Du]\n- Was wir anbieten können: [z. B. Ersatz, Rückruf, nichts]\n\nRegeln:\n- Höchstens 2 Sätze je Antwort.\n- Erst Verständnis zeigen, dann den nächsten Schritt nennen.\n- Nichts zugeben oder versprechen, was oben nicht steht.\n- Keine Floskeln wie „Wir bedauern die Unannehmlichkeiten“.\n\nGib drei Varianten: sachlich, herzlich, kurz. Sag dazu, wann ich besser gar nicht öffentlich antworte.",
  [("Die Fakten", "Was wirklich passiert ist: [Fakten, soweit bekannt]", "Sonst entschuldigt sich die KI für Dinge, die nie passiert sind."),
   ("Was wir anbieten können", "Was wir anbieten können: [Ersatz, Rückruf, nichts]", "Eine Antwort ohne nächsten Schritt beruhigt niemanden."),
   ("Drei Varianten", "Gib drei Varianten: sachlich, herzlich, kurz.", "Du wählst aus, statt den ersten Entwurf zu flicken.")]),
 (D(14,12), "ein-thema-fuenf-formate", "Ein Artikel. Ein Monat Content.", "Kundin, Dienstag 8:15", "Wir haben einen Blogartikel. Mach daraus bitte Content für den ganzen Monat.",
  "Mach aus diesem Artikel 5 Instagram-Beiträge in 5 Formaten: [Artikel einfügen]. Jeder mit eigenem Schwerpunkt.",
  None, "Speichern. Dein nächster Artikel wartet schon.",
  "Du bist Social Media Manager für [Unternehmen, Branche].\n\nAufgabe: Mach aus diesem Text 5 Instagram-Beiträge:\n[Artikel einfügen]\n\nDas musst du wissen:\n- Zielgruppe: [wer]\n- Markenton: [z. B. locker, per Du]\n\nSo gehst du vor:\n1. Nenn die 5 stärksten Aussagen des Textes.\n2. Mach aus jeder Aussage einen Beitrag in einem anderen Format: Reel, Karussell, Zitatbild, Story mit Umfrage, Beitrag mit Frage.\n3. Gib je Beitrag an: Aufhänger, Inhalt in Stichpunkten, Handlungsaufforderung.\n\nRegeln:\n- Nichts dazuerfinden, was nicht im Text steht.\n- Kein Beitrag wiederholt einen anderen.",
  [("Erst die Aussagen", "Nenn die 5 stärksten Aussagen des Textes.", "Die KI sortiert erst und schreibt dann. Das Ergebnis wird klarer."),
   ("Fünf Formate", "Reel, Karussell, Zitatbild, Story mit Umfrage, Beitrag mit Frage", "Gleicher Inhalt, andere Form: So wirkt nichts doppelt."),
   ("Nichts dazuerfinden", "Nichts dazuerfinden, was nicht im Text steht.", "Der Artikel ist geprüft. Was die KI ergänzt, ist es nicht.")]),
 (D(21,12), "weihnachtsgruss", "Weihnachtspost. Heute noch.", "Kundin, Montag 16:55", "Wir brauchen noch einen Weihnachtspost. Heute. Aber bitte nicht kitschig!",
  "Schreib einen Weihnachtsgruß für [eine Kaffeerösterei]. Ohne Floskeln, mit einem echten Moment aus diesem Jahr: [Moment].",
  ("Ohne Kitsch", "Ergebnis", "Im März stand unsere Röstmaschine still. Ihr habt trotzdem bestellt und gewartet. Danke dafür. Frohe Weihnachten aus Leipzig."),
  "Speichern. Ostern kommt auch.",
  "Du schreibst für [Unternehmen, Branche] auf Instagram.\n\nAufgabe: Schreib einen Gruß zu [Anlass, z. B. Weihnachten].\n\nDas musst du wissen:\n- Ein echter Moment aus diesem Jahr: [was passiert ist]\n- Wem wir danken wollen: [Kundschaft, Team, beide]\n- Markenton: [z. B. warm, per Du]\n\nRegeln:\n- Höchstens 60 Wörter.\n- Verboten: besinnlich, Zauber, Lichterglanz, „das Jahr neigt sich dem Ende“.\n- Kein Verkaufen, kein Rabatt.\n- Der erste Satz beginnt mit dem Moment, nicht mit dem Anlass.\n\nGib mir 2 Fassungen und eine Idee fürs Bild.",
  [("Ein echter Moment", "Ein echter Moment aus diesem Jahr: [was passiert ist]", "Das Einzige, was kein anderes Unternehmen schreiben kann."),
   ("Verbotene Wörter", "Verboten: besinnlich, Zauber, Lichterglanz …", "Die KI greift sonst zu den Wörtern, die alle nehmen."),
   ("Mit dem Moment beginnen", "Der erste Satz beginnt mit dem Moment, nicht mit dem Anlass.", "Dass Weihnachten ist, weiß jeder. Der Moment ist neu.")]),
 (D(28,12), "jahresrueckblick", "Der Jahresbericht. Bis morgen.", "Kundin, Montag 11:30", "Schick mir bis morgen den Jahresbericht für Instagram. Mit Erkenntnissen!",
  "Hier sind die Zahlen von Instagram für [2026]: [Zahlen einfügen]. Nenn die 3 wichtigsten Erkenntnisse in einfachen Sätzen.",
  None, "Speichern. Der Januar-Bericht kommt.",
  "Du wertest den Instagram-Kanal von [Unternehmen] aus.\n\nHier sind die Zahlen für [Zeitraum]:\n[Zahlen oder Tabelle einfügen]\n\nAufgabe: Schreib einen Bericht für [wer liest ihn, z. B. die Inhaberin].\n\nSo gehst du vor:\n1. Nenn die 3 wichtigsten Erkenntnisse in je einem Satz.\n2. Zeig zu jeder die Zahl, auf der sie beruht.\n3. Nenn 2 Dinge, die wir nächstes Jahr anders machen sollten.\n\nRegeln:\n- Keine Fachwörter ohne Erklärung.\n- Rechne nichts hoch, was nicht in den Zahlen steht.\n- Wenn eine Zahl fehlt oder seltsam aussieht, sag das.",
  [("Wer liest den Bericht", "Schreib einen Bericht für [wer liest ihn]", "Für die Inhaberin schreibst du anders als fürs Marketing-Team."),
   ("Zahl zur Aussage", "Zeig zu jeder Erkenntnis die Zahl, auf der sie beruht.", "So kannst du jede Aussage in einer Minute nachprüfen."),
   ("Nichts hochrechnen", "Rechne nichts hoch, was nicht in den Zahlen steht.", "KI erfindet gern Trends. Diese Regel hält sie bei den Daten.")]),
 (D(4,1,2027), "zielgruppe", "„Unsere Zielgruppe? Alle!“", "Kunde, Montag 9:12", "Unsere Zielgruppe? Na, alle! Jeder trinkt doch Kaffee.",
  "Beschreib 3 Kundentypen für [eine Kaffeerösterei mit Online-Shop]. Je Typ: Alltag, Problem, was sie überzeugt.",
  ("Typ 1 von 3", "Ergebnis", "Die Home-Office-Trinkerin: arbeitet zu Hause, trinkt vier Tassen am Tag, ärgert sich über faden Kapselkaffee. Überzeugt von: Probierpaket."),
  "Speichern. Für den nächsten „alle“-Kunden.",
  "Du berätst [Unternehmen, Branche] zu seiner Zielgruppe auf Instagram.\n\nDas weiß ich schon:\n- Was wir verkaufen: [Angebot, Preislage]\n- Wer bisher kauft: [was du weißt, auch Vermutungen]\n\nAufgabe: Beschreib 3 Kundentypen.\n\nJe Typ:\n- ein sprechender Name\n- Alltag in 2 Sätzen\n- das Problem, das wir lösen\n- was diesen Typ überzeugt\n- welches Format auf Instagram zu ihm passt\n\nRegeln:\n- Kennzeichne alles, was du vermutest, mit „Annahme:“.\n- Nenn je Typ eine Frage, mit der ich die Annahme bei echten Kunden prüfen kann.",
  [("Was du schon weißt", "Wer bisher kauft: [was du weißt, auch Vermutungen]", "Die KI kennt deine Kundschaft nicht. Du schon ein bisschen."),
   ("Format je Typ", "welches Format auf Instagram zu ihm passt", "So wird aus der Beschreibung gleich ein Plan."),
   ("Annahmen prüfen", "Nenn je Typ eine Frage, mit der ich die Annahme prüfen kann.", "Ein Kundentyp aus der KI ist eine Vermutung, bis du nachfragst.")]),
 (D(11,1,2027), "drei-tonlagen", "„Lockerer. Aber seriös.“", "Kundin, Montag 14:40", "Der Text klingt zu steif. Mach’s lockerer. Aber seriös. Du weißt schon.",
  "Schreib diesen Text in 3 Tonlagen um: [Text einfügen]. Sachlich, locker, frech. Inhalt bleibt gleich.",
  ("Dreimal derselbe Satz", "Ergebnis", "Sachlich: Ab Montag neue Öffnungszeiten. · Locker: Ab Montag sind wir länger für euch da. · Frech: Ausschlafen? Ab Montag öffnen wir trotzdem pünktlich."),
  "Speichern. „Du weißt schon“ kommt wieder.",
  "Du schreibst für [Unternehmen, Branche] auf Instagram.\n\nHier ist ein Text:\n[Text einfügen]\n\nAufgabe: Schreib ihn in 3 Tonlagen um: sachlich, locker, frech.\n\nRegeln:\n- Der Inhalt bleibt in allen Fassungen gleich. Nichts weglassen, nichts dazuerfinden.\n- Gleiche Länge wie das Original, höchstens 10 Wörter mehr.\n- Per [Du oder Sie].\n- Keine Ausrufezeichen-Ketten, höchstens ein Emoji.\n\nSchreib unter jede Fassung in einem Satz, für welchen Anlass sie passt. Frag mich danach, welche Richtung stimmt, und verfeinere nur diese.",
  [("Inhalt bleibt gleich", "Der Inhalt bleibt in allen Fassungen gleich.", "Sonst vergleichst du Äpfel mit Birnen statt Töne."),
   ("Drei Fassungen", "sachlich, locker, frech", "Der Kunde zeigt auf eine. Das ist schneller als jede Beschreibung."),
   ("Dann verfeinern", "Frag mich, welche Richtung stimmt, und verfeinere nur diese.", "Zwei Schritte bringen mehr als ein perfekter Prompt.")]),
 (D(18,1,2027), "reel-skript", "„So ein lustiges Reel.“", "Kunde, Montag 10:05", "Wir wollen auch mal so ein Reel. So ein lustiges. Wie die anderen.",
  "Schreib ein Reel-Skript für [eine Kaffeerösterei]: 15 Sekunden, 4 Szenen, ohne Sprechen. Thema: [Montagmorgen].",
  None, "Speichern. Der nächste Dreh kommt.",
  "Du planst Reels für [Unternehmen, Branche].\n\nAufgabe: Schreib ein Skript für ein Reel zum Thema [Thema].\n\nDas musst du wissen:\n- Länge: [z. B. 15 Sekunden]\n- Wer dreht und womit: [z. B. eine Person, Handy, im Laden]\n- Was nicht geht: [z. B. keine Gesichter, kein Sprechen]\n\nGib mir eine Tabelle mit den Spalten: Szene, Sekunden, was man sieht, Text im Bild.\n\nRegeln:\n- Die erste Szene dauert höchstens 2 Sekunden und macht neugierig.\n- Jede Szene muss mit einem Handy an einem Ort drehbar sein.\n- Am Ende steht eine Handlungsaufforderung.\n\nSchreib darunter eine Liste: Was ich zum Dreh mitbringen muss.",
  [("Wer dreht und womit", "Wer dreht und womit: [eine Person, Handy, im Laden]", "Sonst plant die KI einen Dreh mit Kran und Filmteam."),
   ("Tabelle mit Sekunden", "Szene, Sekunden, was man sieht, Text im Bild", "Du siehst sofort, ob es in 15 Sekunden passt."),
   ("Die Dreh-Liste", "Was ich zum Dreh mitbringen muss.", "Nichts ist ärgerlicher als ein fehlendes Requisit vor Ort.")]),
 (D(25,1,2027), "zahlen-erklaeren", "„Was heißen diese Zahlen?“", "Kundin, Montag 8:50", "Was bedeuten diese Zahlen? Kurz bitte. Ich hab gleich einen Termin.",
  "Erklär diese Instagram-Zahlen in 3 Sätzen für jemanden ohne Fachwissen: [Zahlen einfügen]. Was lief gut, was nicht?",
  ("In drei Sätzen", "Ergebnis", "Mehr Leute haben eure Beiträge gesehen als im Vormonat. Gespeichert wurde aber weniger. Das heißt: Aufmerksamkeit ja, Nutzen noch nicht genug."),
  "Speichern. Die Zahlen kommen jeden Monat.",
  "Du erklärst Instagram-Zahlen für [wer, z. B. die Inhaberin eines Cafés].\n\nHier sind die Zahlen für [Monat] und den Vormonat:\n[Zahlen einfügen]\n\nAufgabe:\n1. Erklär in 3 Sätzen, was gut lief und was nicht.\n2. Erklär jedes Fachwort beim ersten Mal in einem Halbsatz.\n3. Nenn eine Sache, die wir nächsten Monat ausprobieren.\n\nRegeln:\n- Keine Prozentzahlen ohne die echten Zahlen dahinter.\n- Kein „signifikant“, kein „Performance“.\n- Wenn zwei Zahlen sich widersprechen, sag das offen.\n\nSchreib so, dass man es in 30 Sekunden vorlesen kann.",
  [("Mit Vormonat", "die Zahlen für [Monat] und den Vormonat", "Eine Zahl allein sagt nichts. Erst der Vergleich macht sie lesbar."),
   ("Fachwörter erklären", "Erklär jedes Fachwort beim ersten Mal in einem Halbsatz.", "Dein Kunde fragt selten nach. Er nickt und versteht nichts."),
   ("In 30 Sekunden vorlesbar", "Schreib so, dass man es in 30 Sekunden vorlesen kann.", "Eine Längenvorgabe, die jeder versteht, auch die KI.")]),
 (D(1,2,2027), "kritik-welle", "Unter dem Post brennt es.", "Kundin, Samstag 23:48", "Unter dem Post brennt es!!! Was schreiben wir???",
  "Hier sind 20 kritische Kommentare: [einfügen]. Fass die 3 Hauptvorwürfe zusammen und schlag eine Stellungnahme vor.",
  None, "Speichern. Für die Nacht, in der es brennt.",
  "Du hilfst [Unternehmen] bei einer Welle kritischer Kommentare.\n\nDas ist passiert: [Fakten, nur Gesichertes]\nHier sind die Kommentare:\n[Kommentare einfügen]\n\nSo gehst du vor:\n1. Fass die 3 Hauptvorwürfe zusammen. Trenn berechtigte Kritik von Beleidigungen.\n2. Sag, was wir wissen und was noch nicht.\n3. Schlag eine Stellungnahme mit höchstens 80 Wörtern vor.\n\nRegeln für die Stellungnahme:\n- Kein „Wir bedauern, falls sich jemand …“.\n- Nichts versprechen, was oben nicht steht.\n- Ein klarer nächster Schritt mit Zeitpunkt.\n\nMarkiere jede Stelle, die ein Mensch mit Entscheidungsbefugnis prüfen muss. Das hier ist ein Entwurf, keine Freigabe.",
  [("Nur Gesichertes", "Das ist passiert: [Fakten, nur Gesichertes]", "In der Krise ist ein erfundenes Detail der zweite Skandal."),
   ("Kritik von Beleidigung trennen", "Trenn berechtigte Kritik von Beleidigungen.", "Du antwortest auf das eine und moderierst das andere."),
   ("Entwurf, keine Freigabe", "Markiere jede Stelle, die ein Mensch prüfen muss.", "Die KI ordnet und entwirft. Entscheiden muss jemand mit Verantwortung.")]),
 (D(8,2,2027), "aktionsideen", "Valentinstag. Keine Idee.", "Kunde, Montag 12:20", "Valentinstag ist in sechs Tagen! Uns fällt nichts ein. Dir?",
  "Gib mir 8 Ideen für eine Valentinstag-Aktion auf Instagram für [eine Kaffeerösterei]. Ohne Rabatt, umsetzbar in 3 Tagen.",
  ("Idee 3 von 8", "Ergebnis", "„Kaffee für zwei“: Follower markieren den Menschen, mit dem sie am liebsten Kaffee trinken. Drei Paare bekommen ein Probierpaket."),
  "Speichern. Muttertag kommt auch.",
  "Du planst Aktionen für [Unternehmen, Branche] auf Instagram.\n\nAnlass: [z. B. Valentinstag am 14.2.]\n\nDas musst du wissen:\n- Was wir dafür haben: [Zeit, Geld, Leute]\n- Ziel: [z. B. mehr Kommentare, mehr Bestellungen]\n- Was nicht geht: [z. B. kein Rabatt, kein Gewinnspiel mit Kauf]\n\nAufgabe: Gib mir 8 Ideen. Je Idee: Name, Ablauf in 2 Sätzen, Aufwand (gering, mittel, hoch).\n\nRegeln:\n- Mindestens 3 Ideen passen auch zu Leuten ohne Partner.\n- Jede Idee ist in [3 Tagen] umsetzbar.\n\nSortiere nach Aufwand und sag, welche du nehmen würdest und warum. Weise mich darauf hin, wenn eine Idee ein Gewinnspiel ist und Teilnahmebedingungen braucht.",
  [("Was wir dafür haben", "Was wir dafür haben: [Zeit, Geld, Leute]", "Sonst kommen Ideen, die ein Konzern umsetzt, aber kein Café."),
   ("Aufwand je Idee", "Je Idee: Name, Ablauf, Aufwand (gering, mittel, hoch)", "Du entscheidest nach Machbarkeit, nicht nach Begeisterung."),
   ("Gewinnspiel-Hinweis", "Weise mich darauf hin, wenn eine Idee Teilnahmebedingungen braucht.", "Gewinnspiele haben Regeln. Die KI soll dich daran erinnern.")]),
 (D(15,2,2027), "feedback-uebersetzen", "„Gefällt mir nicht.“", "Kundin, Montag 15:33", "Gefällt mir nicht. Weiß aber nicht, warum. Mach nochmal neu.",
  "Der Kunde sagt zu diesem Entwurf nur „gefällt mir nicht“: [Entwurf]. Stell 5 Fragen, mit denen ich herausfinde, was stört.",
  ("Frage 2 von 5", "Ergebnis", "Stört dich eher, was wir sagen, oder wie wir es sagen? Zeig mir einen Satz, der dir am wenigsten gefällt."),
  "Speichern. „Gefällt mir nicht“ kommt wieder.",
  "Du hilfst mir, unklares Feedback zu verstehen.\n\nDas ist der Entwurf:\n[Entwurf einfügen]\nDas hat der Kunde gesagt:\n[Feedback wörtlich einfügen]\n\nSo gehst du vor:\n1. Nenn 3 mögliche Gründe für das Feedback, vom wahrscheinlichsten zum unwahrscheinlichsten.\n2. Schreib 5 Fragen, die ich dem Kunden stellen kann. Jede lässt sich in einem Satz beantworten.\n3. Schreib eine kurze, freundliche Nachricht, mit der ich die Fragen stelle.\n\nRegeln:\n- Keine Frage, die nach Rechtfertigung klingt.\n- Mindestens eine Frage bietet zwei Möglichkeiten zur Auswahl.\n- Überarbeite den Entwurf noch nicht.",
  [("Feedback wörtlich", "Das hat der Kunde gesagt: [wörtlich einfügen]", "In deiner Zusammenfassung fehlt oft genau das Wort, das zählt."),
   ("Fragen mit Auswahl", "Mindestens eine Frage bietet zwei Möglichkeiten zur Auswahl.", "„Dies oder das?“ beantwortet jeder. „Was stört dich?“ fast keiner."),
   ("Noch nicht überarbeiten", "Überarbeite den Entwurf noch nicht.", "Erst verstehen, dann ändern. Sonst rätst du ein zweites Mal.")]),
 (D(22,2,2027), "suchbegriffe", "„Wir brauchen 30 Hashtags!“", "Kunde, Montag 9:41", "Wir brauchen mehr Hashtags. 30 Stück! Dann finden uns die Leute.",
  "Mit welchen Wörtern sucht [meine Zielgruppe] auf Instagram nach [Kaffee aus Leipzig]? Gib mir 15 Suchbegriffe und 5 Hashtags.",
  None, "Speichern. Gefunden werden ist kein Zufall.",
  "Du hilfst [Unternehmen, Branche, Ort], auf Instagram gefunden zu werden.\n\nDas musst du wissen:\n- Zielgruppe: [wer]\n- Was wir anbieten: [Angebot]\n\nAufgabe:\n1. Nenn 15 Wörter und Wortgruppen, mit denen diese Leute suchen. Sortiere nach: Problem, Produkt, Ort.\n2. Zeig an 2 Beispielen, wie ich solche Wörter natürlich in eine Bildunterschrift schreibe.\n3. Schlag 5 Hashtags vor: 2 breite, 3 genaue.\n\nRegeln:\n- Keine Hashtag-Listen mit 30 Stück.\n- Erfinde keine Suchzahlen. Wenn du schätzt, sag das.\n\nSag mir zum Schluss, wie ich in der Instagram-Suche selbst prüfe, ob ein Begriff genutzt wird.",
  [("Problem, Produkt, Ort", "Sortiere nach: Problem, Produkt, Ort.", "Menschen suchen nach ihrem Problem, selten nach deinem Markennamen."),
   ("Wörter im Text", "wie ich solche Wörter natürlich in eine Bildunterschrift schreibe", "Die Suche liest deinen Text mit. Eine Hashtag-Wand hilft wenig."),
   ("Keine erfundenen Zahlen", "Erfinde keine Suchzahlen. Wenn du schätzt, sag das.", "Die KI kennt keine aktuellen Suchzahlen. Prüf selbst in der App.")]),
]
LISTEN = {  # Ergebnis als Tabelle statt Textkasten: titel, zeilen, mehr
 "zwoelf-beitraege": ("Fertig ist der Plan.", [["01.12.", "Reel", "Adventsröstung"], ["03.12.", "Karussell", "Geschenk-Ideen"], ["05.12.", "Story", "Blick in die Rösterei"], ["08.12.", "Reel", "Kaffee-Irrtümer"]], "und 8 weitere!"),
 "ein-thema-fuenf-formate": ("Fünf Beiträge aus einem Text", [["1", "Reel", "Der größte Irrtum"], ["2", "Karussell", "5 Schritte erklärt"], ["3", "Zitatbild", "Der stärkste Satz"], ["4", "Story", "Umfrage dazu"]], "und eine Frage an alle!"),
 "jahresrueckblick": ("Drei Erkenntnisse", ["Reels brachten die meisten neuen Follower", "Karussells wurden am häufigsten gespeichert", "Sonntags lief fast nichts"], None),
 "reel-skript": ("Das Skript", [["0–2 s", "Wecker", "6:40 Uhr."], ["2–6 s", "Leere Tasse", "Noch nichts drin."], ["6–11 s", "Aufguss", "Jetzt."], ["11–15 s", "Erster Schluck", "Montag kann kommen."]], None),
 "kritik-welle": ("Erst ordnen", ["Vorwurf 1: lange Lieferzeit", "Vorwurf 2: keine Antwort per Mail", "Vorwurf 3: Ton im Kommentar"], "Dann antworten."),
 "suchbegriffe": ("So suchen die Leute", ["Problem: Kaffee schmeckt bitter", "Produkt: Espresso-Bohnen frisch", "Ort: Rösterei Leipzig"], "5 Hashtags reichen."),
}

# ---------- Mittwoch: Claude am Rechner ----------
# datum, name, titel, schritte, merksatz-titel, merksatz
MITTWOCH = [
 (D(2,12), "claude-installieren", "Claude am Rechner: in 3 Minuten startklar", ["1. claude.com/download öffnen", "2. App für Mac oder Windows laden", "3. Anmelden und erste Frage stellen"], "Warum nicht im Browser?", "Die App kann mit Dateien und Ordnern auf deinem Rechner arbeiten."),
 (D(9,12), "projekt-pro-kunde", "Ein Projekt pro Kunde", ["1. Neues Projekt anlegen", "2. Markenleitfaden hochladen", "3. Anweisungen fürs Projekt schreiben", "4. Jeder Chat dort kennt den Kunden"], "Nie wieder von vorn erklären", "Was im Projekt liegt, weiß Claude in jedem neuen Chat dort."),
 (D(16,12), "markenton-skill", "Dein Markenton als Skill", ["1. Sag Claude: Erstell mir einen Skill", "2. Beschreib den Ton mit 3 Beispielen", "3. Skill prüfen und speichern", "4. Ab jetzt schreibt Claude so"], "Was ist ein Skill?", "Ein Ordner mit einer Anleitung. Claude liest sie, wenn die Aufgabe passt."),
 (D(23,12), "skill-greift-nicht", "Dein Skill greift nicht? Daran liegt’s", ["1. Beschreibung des Skills öffnen", "2. Reinschreiben, wann er gelten soll", "3. Wörter nutzen, die du selbst tippst", "4. Mit einer echten Aufgabe testen"], "Die Beschreibung entscheidet", "Claude liest zuerst nur Name und Beschreibung. Passt die nicht, bleibt der Skill zu."),
 (D(30,12), "zahlen-auswerten", "Deine Insights als Datei? Claude liest sie", ["1. Zahlen in der Meta Business Suite exportieren", "2. Datei in den Chat ziehen", "3. Fragen: Was lief gut, was nicht?", "4. Um ein Diagramm bitten"], "Erst prüfen, dann glauben", "Lass dir zeigen, aus welchen Zeilen eine Aussage stammt."),
 (D(6,1,2027), "code-ohne-terminal", "Claude Code, ganz ohne Terminal", ["1. Claude-App öffnen", "2. Auf den Reiter „Code“ gehen", "3. Einen Ordner auswählen", "4. Aufgabe in normalen Worten stellen"], "Was ist anders als im Chat?", "Im Chat bekommst du Text. Hier arbeitet Claude in deinen Dateien. Dafür brauchst du ein Bezahl-Abo."),
 (D(13,1,2027), "bilder-umbenennen", "300 Bilder umbenennen? Macht Claude", ["1. Kopie des Ordners im Reiter „Code“ öffnen", "2. Sag: Benenne alle Bilder nach Datum und Kunde", "3. Vorschlag ansehen", "4. Erst dann bestätigen"], "Immer auf einer Kopie", "Arbeite nie auf dem einzigen Original. Dann kann nichts verloren gehen."),
 (D(20,1,2027), "claude-md", "CLAUDE.md: der Spickzettel im Ordner", ["1. Datei CLAUDE.md im Kundenordner anlegen", "2. Fakten rein: Marke, Ton, Tabus", "3. Claude Code liest sie bei jedem Start", "4. Aktuell halten"], "Fakten ja, Abläufe nein", "Feste Abläufe gehören in einen Skill. Fakten gehören in die CLAUDE.md."),
 (D(27,1,2027), "skill-mit-vorlage", "Skill mit Vorlage: dein Redaktionsplan", ["1. Deinen besten Plan als Datei nehmen", "2. In den Ordner des Skills legen", "3. In der Anleitung darauf verweisen", "4. Neue Pläne haben denselben Aufbau"], "Beispiele schlagen Regeln", "Eine gute Vorlage erklärt mehr als zehn Sätze Anleitung."),
 (D(3,2,2027), "skill-per-befehl", "Ein Befehl, fünf Beiträge", ["1. Skill „artikel-zu-posts“ anlegen", "2. Schritte festlegen: lesen, kürzen, 5 Formate", "3. In Claude Code /artikel-zu-posts tippen", "4. Artikel anhängen, fertig"], "Skills von Hand starten", "Mit Schrägstrich und Namen rufst du einen Skill direkt auf."),
 (D(10,2,2027), "plan-als-excel", "Dein Redaktionsplan als Excel-Datei", ["1. Plan im Chat erstellen lassen", "2. Sag: Gib mir das als Excel-Datei", "3. Datei herunterladen und prüfen", "4. Mit dem Kunden teilen"], "Nenn das Format beim Namen", "Excel, Word oder PDF: Sag dazu, was du brauchst."),
 (D(17,2,2027), "recherche-mit-quellen", "Recherche mit Quellen", ["1. Websuche einschalten", "2. Frage stellen und Quellen verlangen", "3. Zwei Quellen selbst öffnen", "4. Erst dann posten"], "Vertrauen ist gut", "Eine Zahl ohne Quelle kommt nicht in den Beitrag."),
 (D(24,2,2027), "skills-teilen", "Deine Skills fürs ganze Team", ["1. Ordner des Skills als ZIP packen", "2. Kollegin lädt ihn in den Einstellungen hoch", "3. Alle schreiben im selben Ton", "4. Änderungen an einer Stelle pflegen"], "Ein Skill, viele Hände", "So klingt der Kanal gleich, egal wer gerade schreibt."),
]

# ---------- Freitag: Werkzeug-Check ----------
# datum, name, werkzeug, titel, wofür, stark bei, grenze, urteil
FREITAG = [
 (D(27,11), "canva", "Canva", "Canva: reicht das für alles?", "Vorlagen für Beiträge und Storys", "Tempo, auch ohne Designwissen", "sieht schnell nach Vorlage aus", "Für den Start genau richtig. Leg früh eigene Farben und Schriften an."),
 (D(4,12), "capcut", "CapCut", "CapCut: Untertitel in Minuten?", "Reels am Handy schneiden", "automatische Untertitel", "Musik und Vorlagen: Rechte prüfen", "Stark für Tempo. Klär für Kundenkonten vorher die Nutzungsrechte."),
 (D(11,12), "meta-business-suite", "Meta Business Suite", "Planen ohne Extra-Kosten?", "Beiträge für Instagram und Facebook planen", "kostenlos, direkt von Meta", "nur für Kanäle von Meta", "Reicht, solange du nur Instagram und Facebook betreust."),
 (D(18,12), "metricool", "Metricool", "Zahlen, die jeder versteht?", "Auswerten und Planen für mehrere Netzwerke", "Berichte auf einen Blick", "Gratis-Fassung ist begrenzt", "Lohnt sich ab dem zweiten Netzwerk oder dem ersten Kundenbericht."),
 (D(25,12), "edits", "Edits", "Edits: Instagrams eigene Schnitt-App", "Reels drehen und schneiden", "passt genau zu Instagram", "noch jung, weniger Vorlagen", "Ausprobieren. Wer nur für Instagram schneidet, braucht oft nichts anderes."),
 (D(1,1,2027), "notebooklm", "NotebookLM", "Lange PDFs? Lass sie dir erklären", "Fragen an deine eigenen Unterlagen", "antwortet aus deinen Quellen", "nur so gut wie das, was du hochlädst", "Ideal für Markenleitfäden und Studien, die keiner lesen will."),
 (D(8,1,2027), "perplexity", "Perplexity", "Recherche mit Quellenangabe?", "schneller Einstieg in ein Thema", "zeigt, woher die Antwort kommt", "Quellen trotzdem selbst öffnen", "Gut für den Anfang einer Recherche. Die Prüfung bleibt bei dir."),
 (D(15,1,2027), "elevenlabs", "ElevenLabs", "Eine Stimme aus der Maschine?", "Sprechertext für Reels", "klingt natürlich, viele Sprachen", "KI-Stimme kennzeichnen, Rechte klären", "Praktisch, wenn niemand sprechen will. Sag offen, dass es KI ist."),
 (D(22,1,2027), "descript", "Descript", "Video schneiden wie einen Text?", "Interviews und Podcasts kürzen", "Wort löschen, Stelle ist raus", "braucht Einarbeitung am Rechner", "Lohnt sich für lange Aufnahmen. Für kurze Reels ist es zu viel."),
 (D(29,1,2027), "notion", "Notion", "Ein Ort für den ganzen Plan?", "Redaktionsplan und Ideen sammeln", "passt sich deinem Ablauf an", "der Aufbau kostet anfangs Zeit", "Gut fürs Team. Allein reicht oft eine Tabelle."),
 (D(5,2,2027), "buffer", "Buffer", "Einmal planen, überall posten?", "Beiträge für mehrere Netzwerke planen", "einfach und schnell gelernt", "Gratis-Fassung: wenige Kanäle", "Die einfachste Planung für den Anfang."),
 (D(12,2,2027), "google-trends", "Google Trends", "Worüber reden gerade alle?", "Themen und Zeitpunkte finden", "kostenlos, zeigt den Verlauf", "zeigt Verhältnisse, keine echten Zahlen", "Zwei Minuten vor jedem Redaktionsplan. Kostet nichts."),
 (D(19,2,2027), "adobe-firefly", "Adobe Firefly", "KI-Bilder für Kunden?", "Bilder und Hintergründe erzeugen", "für gewerbliche Nutzung gedacht", "Guthaben ist schnell verbraucht", "Erste Wahl, wenn ein Kunde nach Bildrechten fragt."),
 (D(26,2,2027), "starter-set", "Starter-Set", "Drei Werkzeuge reichen für den Start", "Texte und Pläne: Claude", "Bilder und Layout: Canva", "Planen und Zahlen: Meta Business Suite", "Erst beherrschen, dann erweitern. Jedes neue Werkzeug kostet Zeit."),
]

WT = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
def tag(d): return f"{WT[d.weekday()]}, {d.day}.{d.month}."
def schreib(pfad, text):
    os.makedirs(os.path.dirname(pfad), exist_ok=True); open(pfad, "w").write(text)
def reel_html(titel, daten):
    return ('<!doctype html><html lang="de"><meta charset="utf-8"><title>smm.mit.ki – ' + titel + '</title>\n<link rel="stylesheet" href="../../vorlage/vorlage.css">\n<body>\n'
            '<script src="../../vorlage/glimm.js"></script><script src="../../vorlage/reel.js"></script>\n<script>baueReel(' + json.dumps(daten, ensure_ascii=False, indent=1) + ');</script>\n')

plan = []
alle = [("Prompt der Woche", m) for m in MONTAG] + [("Claude am Rechner", m) for m in MITTWOCH] + [("Werkzeug-Check", m) for m in FREITAG]
alle.sort(key=lambda x: x[1][0])
for nr, (rubrik, m) in enumerate(alle, 1):
    datum, name = m[0], m[1]; ordner = f"reels/{nr:02d}-{name}"; pfad = f"{K}/{ordner}"
    kommentar = None
    if rubrik == "Prompt der Woche":
        _, _, titel, von, nachricht, kurz, erg, schluss, voll, bau = m
        sz = [{"typ": "nachricht", "titel": titel, "von": von, "text": nachricht}, {"typ": "tippen", "text": kurz}]
        if name in LISTEN: lt, lz, lm = LISTEN[name]; sz.append({"typ": "liste", "titel": lt, "zeilen": lz, "mehr": lm, "takt": .3 if isinstance(lz[0], list) else .7})
        else: sz.append({"typ": "karte", "titel": erg[0], "kopf": erg[1], "text": erg[2], "laune": "stolz"})
        sz.append({"typ": "schluss", "titel": schluss, "zeile": "Der ganze Prompt steht im ersten Kommentar."})
        beschr = f"{von}: „{nachricht}“ 😅\nGeht. Mit einem Prompt. Die Kurzfassung:\n\n{kurz}\n\nDer ganze Prompt steht im ersten Kommentar 👇 Alles in eckigen Klammern ersetzt du.\nSpeichern nicht vergessen 💡\n\n{TAGS} #promptderwoche"
        if voll: kommentar = "Der ganze Prompt zum Kopieren 👇 Alles in eckigen Klammern ersetzt du.\n\n" + voll
    elif rubrik == "Claude am Rechner":
        _, _, titel, schritte, mt, ms = m
        sz = [{"typ": "karte", "titel": titel, "laune": "skeptisch", "licht": "abend", "dauer": 2.6}, {"typ": "liste", "titel": "So geht’s", "zeilen": schritte, "takt": .9},
              {"typ": "karte", "titel": mt, "text": ms, "laune": "froh"}, {"typ": "schluss", "titel": "Speichern. Und heute ausprobieren.", "zeile": "Mittwoch ist Claude am Rechner."}]
        beschr = f"{titel} 💻\n\nSo geht’s:\n" + "\n".join(schritte) + f"\n\n{mt}: {ms}\n\nWas soll Glimm als Nächstes am Rechner zeigen? Schreib es in die Kommentare.\n\n{TAGS} #claude #claudeamrechner"
    else:
        _, _, werkzeug, titel, wofuer, stark, grenze, urteil = m
        if name == "starter-set": zeilen, lt = [wofuer, stark, grenze], "Glimms Starter-Set"
        else: zeilen, lt = [f"Wofür: {wofuer}", f"Stark bei: {stark}", f"Grenze: {grenze}"], f"{werkzeug}, kurz geprüft"
        sz = [{"typ": "karte", "titel": titel, "laune": "skeptisch", "licht": "abend", "dauer": 2.6}, {"typ": "liste", "titel": lt, "zeilen": zeilen, "takt": 1.0},
              {"typ": "karte", "titel": "Glimms Urteil", "text": urteil, "laune": "stolz"}, {"typ": "schluss", "titel": "Folgen. Freitag ist Werkzeug-Check.", "zeile": "Welches Werkzeug soll ich prüfen?"}]
        beschr = f"Werkzeug-Check: {werkzeug} 🔍\n{titel}\n\n" + "\n".join(zeilen) + f"\n\nGlimms Urteil: {urteil}\n\nPreise und Funktionen ändern sich, schau vor dem Start beim Anbieter nach.\nWelches Werkzeug soll Glimm als Nächstes prüfen?\n\n{TAGS} #werkzeugcheck #socialmediatools"
    if nr > 1:
        schreib(f"{pfad}/reel.html", reel_html(titel, {"rubrik": rubrik, "szenen": sz}))
        schreib(f"{pfad}/beschreibung.txt", beschr + "\n")
        if kommentar: schreib(f"{pfad}/kommentar.txt", kommentar + "\n")
    else:
        beschr = open(f"{pfad}/beschreibung.txt").read().strip(); kommentar = open(f"{pfad}/kommentar.txt").read().strip(); voll = kommentar.split("\n\n", 1)[1]
    plan.append({"nr": nr, "art": "Reel", "rubrik": rubrik, "datum": datum.isoformat(), "tag": tag(datum), "titel": titel, "ordner": ordner,
                 "beschreibung": beschr, "kommentar": kommentar, "fertig": os.path.exists(f"{pfad}/reel.mp4")})

# ---------- Sonntag: Karussell zum Prompt der Woche ----------
FARBEN = ["g-koralle", "g-minze", "g-veilchen", "g-blau", "g-tinte"]
for i, m in enumerate(MONTAG, 1):
    _, name, titel, von, nachricht, kurz, erg, schluss, voll, bau = m
    if voll is None: voll = open(f"{K}/reels/01-{name}/kommentar.txt").read().split("\n\n", 1)[1].strip()
    datum = m[0] + datetime.timedelta(days=6 - m[0].weekday()); ordner = f"karussells/{i:02d}-{name}"
    marke = lambda s: s.replace("&", "&amp;").replace("<", "&lt;").replace("[", "<mark>").replace("]", "</mark>")
    n = len(bau) + 3
    punkte = lambda a: '<span class="punkte">' + "".join(f'<b{" class=an" if j == a else ""}></b>' for j in range(n)) + "</span>"
    kopf = '<span class="reiter">Prompt der Woche</span>'
    s = [f'<div class="blatt karussell g-koralle" id="1">{kopf}<div class="chat"><small>{von}</small>{nachricht}</div><h1 style="margin-top:70px;max-width:560px;font-size:92px">Geht. Mit einem Prompt.</h1>'
         f'<img class="g" src="../../vorlage/glimm/handy.png" style="width:660px;right:-110px;bottom:120px"><div class="fuss"><span>smm.mit.ki</span><span class="wisch">Wisch weiter<svg viewBox="0 0 64 40"><path d="M6 6 l16 14 l-16 14M32 6 l16 14 l-16 14"/></svg></span></div></div>',
         f'<div class="blatt karussell g-grau" id="2">{kopf}<h2 style="margin-bottom:60px">Die Kurzfassung</h2><div class="feld">{marke(kurz)}</div>'
         f'<span class="sprech rechts" style="right:470px;bottom:330px">Geht. Aber es geht besser.</span><img class="g" src="../../vorlage/glimm/skeptisch.png" style="width:600px;right:-80px;bottom:-30px"><div class="fuss">{punkte(1)}<span></span></div></div>']
    for j, (bn, ba, bw) in enumerate(bau):
        s.append(f'<div class="blatt karussell {FARBEN[(j + 1) % 5]}" id="{j + 3}">{kopf}<h2 style="margin-bottom:56px">Baustein {j + 1}: {bn}</h2><div class="feld">{marke(ba)}</div>'
                 f'<p class="warum">{bw}</p><img class="g" src="../../vorlage/glimm/{["zeigt", "froh", "stolz"][j % 3]}.png" style="width:520px;right:-70px;bottom:-20px"><div class="fuss">{punkte(j + 2)}<span></span></div></div>')
    s.append(f'<div class="blatt karussell g-koralle" id="{n}">{kopf}<span class="sprech" style="left:84px;right:84px;top:150px;font-family:\'Archivo Black\';font-weight:400;font-size:84px;line-height:1.06;padding:44px 50px 52px;border-radius:44px">Der ganze Prompt steht in der Beschreibung.</span>'
             f'<img class="g" src="../../vorlage/glimm/froh.png" style="width:820px;left:300px;bottom:-170px"><p style="position:absolute;left:84px;bottom:130px;font-size:44px;font-weight:700;line-height:1.25;max-width:280px">Speichern und Montag nutzen.</p><div class="fuss"><span>smm.mit.ki</span><span></span></div></div>')
    schreib(f"{K}/{ordner}/seiten.html", f'<!doctype html><html lang="de"><meta charset="utf-8"><title>smm.mit.ki – Karussell: {titel}</title>\n<link rel="stylesheet" href="../../vorlage/vorlage.css">\n' + "\n".join(s) + "\n")
    beschr = f"Der Prompt der Woche, Baustein für Baustein 🧩\n„{nachricht}“ So wird aus der Kurzfassung ein Prompt, der trägt:\n\n{voll}\n\nAlles in eckigen Klammern ersetzt du. Speichern 💡\n\n{TAGS} #promptderwoche"
    schreib(f"{K}/{ordner}/beschreibung.txt", beschr + "\n")
    plan.append({"nr": i, "art": "Karussell", "rubrik": "Spickzettel", "datum": datum.isoformat(), "tag": tag(datum), "titel": "Baustein für Baustein: " + titel, "ordner": ordner, "seiten": n,
                 "beschreibung": beschr, "kommentar": None, "fertig": os.path.exists(f"{K}/{ordner}/1.png")})
plan.sort(key=lambda p: (p["datum"], p["art"]))
schreib(f"{K}/plan.json", json.dumps(plan, ensure_ascii=False, indent=1))
print(len([p for p in plan if p["art"] == "Reel"]), "Reels,", len([p for p in plan if p["art"] == "Karussell"]), "Karussells;", sum(p["fertig"] for p in plan), "fertig;", max(len(p["beschreibung"]) for p in plan), "Zeichen längste Beschreibung")
