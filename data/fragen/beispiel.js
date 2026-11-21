// Offizielle Beispielfragen des Abschlusstests (smm1.pdf, S. 65–75) – in eigener, einfacher Formulierung, Lösungen unverändert, wo nötig aktualisiert (X, DDG).
export const F_BEISPIEL = [
 // ---------- Multiple Choice (smm1.pdf, S. 66–68, Lösungen S. 73) ----------
 { m: "einf", beispiel: true, lek: "web20", q: "Was ist das Social Media Prisma von ethority?", a: ["Eine Grafik, die die Landschaft der Social-Media-Angebote zeigt", "Ein Schema, das die Abläufe in einer Redaktion darstellt", "Eine Methode, die Stärken und Schwächen im Marketing findet", "Eine Formel, mit der du den Return on Social Media berechnest"], c: 0, e: "Das Prisma ordnet die vielen Plattformen und Dienste in einer Grafik. Es ist eine Visualisierung der Social-Media-Landschaft, keine Analyse- oder Rechenmethode.", quelle: "smm1.pdf, S. 66, 73" },
 { m: "platt", beispiel: true, lek: "social-sharing", q: "Zu welcher Art von Plattform gehört die Online-Pinnwand Pinterest?", a: ["Zu den Social Sharing Plattformen", "Zu den Microblogging-Diensten", "Zu den Enterprise Social Networks", "Zu den Weblogs von Unternehmen"], c: 0, e: "Auf Pinterest lädst du Bilder und Videos hoch und teilst sie. Darum zählt es zu den Social Sharing Plattformen, nicht zum Microblogging mit kurzen Textposts.", quelle: "smm1.pdf, S. 66, 73" },
 { m: "platt", beispiel: true, lek: "blogs-communitys", q: "Was ist KEINE Plattform, mit der du einen Blog betreiben kannst?", a: ["OpenOffice", "WordPress", "Textpattern", "Tumblr"], c: 0, e: "OpenOffice ist ein Büroprogramm für Texte und Tabellen. WordPress, Textpattern und Tumblr sind dagegen Blog-Plattformen.", quelle: "smm1.pdf, S. 66, 73" },
 { m: "unt", beispiel: true, lek: "strategie", q: "Was ist KEINE Phase bei der Planung von Social Media Marketing?", a: ["Die Findungsphase", "Die Analysephase", "Die Umsetzungsphase", "Die Kontrollphase"], c: 0, e: "Die Planung läuft über Analyse, Umsetzung und Kontrolle. Eine Findungsphase gibt es in diesem Ablauf nicht.", quelle: "smm1.pdf, S. 66, 73" },
 { m: "kpi", beispiel: true, lek: "kennzahlen", q: "Mit welcher Kennzahl prüfst du die Interaktion auf einem Konto bei X (früher Twitter)?", a: ["Mit der Anzahl der Reposts (früher Retweets)", "Mit dem Share of Voice des eigenen Kontos", "Mit dem Customer Lifetime Value der Follower", "Mit der Anzahl der Consumer Insights"], c: 0, e: "Reposts zeigen, wie oft Nutzer deine Beiträge weiterverbreiten. Das ist Interaktion. Share of Voice und Customer Lifetime Value messen etwas anderes.", quelle: "smm1.pdf, S. 66, 73" },
 { m: "kpi", beispiel: true, lek: "monitoring", q: "Wofür eignet sich Social Media Monitoring in der Regel NICHT?", a: ["Für das Workflow-Management im Team", "Für die Beobachtung der Wettbewerber", "Für die Überwachung des eigenen Rufs", "Für Produkt- und Innovationsmanagement"], c: 0, e: "Monitoring hört im Netz zu: Wettbewerb, Ruf und Produktideen. Interne Arbeitsabläufe steuerst du damit nicht.", quelle: "smm1.pdf, S. 67, 73" },
 { m: "recht", beispiel: true, lek: "bildrechte", q: "Welcher Inhalt ist KEIN geschütztes Werk nach dem Urheberrechtsgesetz?", a: ["Ein Gesetzestext", "Ein Foto", "Eine TV-Sendung", "Ein Computerprogramm"], c: 0, e: "Gesetze sind amtliche Werke und dürfen frei genutzt werden. Bilder, Sendungen und Software sind dagegen urheberrechtlich geschützt.", quelle: "smm1.pdf, S. 67, 73" },
 { m: "recht", beispiel: true, lek: "rechtsgebiete", q: "Welches Recht spielt beim Schutz von Inhalten KEINE Rolle?", a: ["Das Verbraucherrecht", "Das Urheberrecht", "Das Markenrecht", "Das Recht am eigenen Bild"], c: 0, e: "Urheberrecht, Markenrecht und Recht am eigenen Bild schützen Inhalte. Das Verbraucherrecht schützt Kunden beim Kauf, nicht Inhalte.", quelle: "smm1.pdf, S. 67, 73" },
 { m: "kpi", beispiel: true, lek: "erfolg", q: "Was zeigt die Kennzahl ROI?", a: ["Das Verhältnis von eingesetztem Kapital zum Gewinn", "Das Verhältnis von Klicks zu erreichten Conversions", "Die Stimmung der Nutzer gegenüber einer Marke im Social Web", "Die Zahl der Kontakte eines Unternehmens in sozialen Netzwerken"], c: 0, e: "ROI heißt Return on Investment. Er setzt den Gewinn ins Verhältnis zum investierten Geld. Klicks zu Conversions wäre die Conversion-Rate, die Stimmung zeigt die Tonalität.", quelle: "smm1.pdf, S. 67, 73" },
 { m: "plan", beispiel: true, lek: "umsetzung", q: "Was macht guten Content aus? (mehrere Antworten richtig)", a: ["Er hat keine Fehler in Rechtschreibung und Grammatik", "Er ist austauschbar und passt zu jeder Marke", "Er steht gleich auf mehreren Seiten (Duplicate Content)", "Er ist für die Zielgruppe relevant"], c: [0, 3], e: "Guter Content ist fehlerfrei und für die Zielgruppe wichtig. Austauschbare oder doppelte Inhalte bringen keinen Mehrwert.", quelle: "smm1.pdf, S. 67, 73" },
 { m: "kpi", beispiel: true, lek: "kennzahlenmodelle", q: "Was ist ein Key Performance Indicator (KPI)?", a: ["Eine Kennzahl, die mit einem Ziel verknüpft ist", "Ein Messwert, den ein Monitoring-Tool einfach abliest", "Ein künftiger Zustand, der besser ist als der heutige", "Zwei Messwerte, die du in ein Verhältnis setzt"], c: 0, e: "Ein KPI ist eine Kennzahl mit Zielbezug. Ein reiner Messwert ist noch kein KPI, ein künftiger Zustand ist ein Ziel.", quelle: "smm1.pdf, S. 68, 73" },
 { m: "platt", beispiel: true, lek: "community-aufbau", q: "Welche Aufgabe haben Gruppen in sozialen Netzwerken?", a: ["Sie sind wie ein Forum für Austausch zu gemeinsamen Interessen", "Sie dienen vor allem dazu, den Mitgliedern Produkte zu verkaufen", "Sie sind vor allem dazu da, dass Mitglieder Fotos austauschen", "Sie haben keine eigene Aufgabe, sie spiegeln nur das Profil"], c: 0, e: "In Gruppen diskutieren Menschen mit gleichen Interessen, ähnlich wie in einem Forum. Verkauf oder Fototausch kann vorkommen, ist aber nicht ihre Aufgabe.", quelle: "smm1.pdf, S. 68, 73" },
 { m: "kpi", beispiel: true, lek: "kennzahlenmodelle", q: "Was ist eine Primärerhebung?", a: ["Du erfasst neue Daten zu einer eigenen Fragestellung", "Du wertest Daten aus, die schon jemand erhoben hat", "Du verfolgst Äußerungen und Diskussionen zu einem Thema", "Du speicherst Interaktionen aus Blogs, Foren und Netzwerken"], c: 0, e: "Bei der Primärerhebung sammelst du selbst neue Daten. Die Auswertung vorhandener Daten heißt Sekundärerhebung.", quelle: "smm1.pdf, S. 68, 73" },
 { m: "einf", beispiel: true, lek: "web20", q: "Welche besondere Form der Kommunikation bietet Social Media?", a: ["Offene Kommunikation von vielen mit vielen (n:n)", "Kommunikation von einem mit einem (1:1)", "Kommunikation von vielen mit einem (n:1)", "Kommunikation von einem mit vielen (1:n)"], c: 0, e: "In Social Media kann jeder mit jedem sprechen. Das ist offene many-to-many-Kommunikation. Klassische Werbung ist dagegen one-to-many.", quelle: "smm1.pdf, S. 68, 73" },
 { m: "plan", beispiel: true, lek: "redaktion", q: "Was schadet deinem Auftritt in Social Media in der Regel?", a: ["Inhalte nur unregelmäßig und ohne Plan pflegen", "Mit Nutzern online offen über Themen diskutieren", "Hochwertige Inhalte für die Zielgruppe bereitstellen", "Selbst mitmachen und Meinungen mit anderen austauschen"], c: 0, e: "Wer Inhalte nur ab und zu und ohne Plan pflegt, verliert Aufmerksamkeit und Vertrauen. Dialog, Mitmachen und gute Inhalte wirken dagegen positiv.", quelle: "smm1.pdf, S. 68, 73" },

 // ---------- Freitext (smm1.pdf, S. 69–72, Lösungen S. 74–75) ----------
 { m: "einf", beispiel: true, lek: "linkedin", t: "frei", q: "Was ist ein Social Network? Erkläre den Begriff.", muster: [
   ["Plattform oder virtuelle Gemeinschaft im Internet", "plattform|gemeinschaft|community|\\bnetzwerk|\\bwebsite|\\bportal"],
   ["Bildet soziale Beziehungen ab, schafft und pflegt Kontakte", "beziehung|kontakt|freund|vernetz|soziale\\w* geflecht|\\bpfleg"],
   ["Austausch von Wissen und Inhalten", "austausch|tausch|teil(en|t)\\b|wissen|inhalte|beitr[aä]g|kommunizier"]
  ], min: 2, bsp: "Ein Social Network ist eine Plattform im Internet, also eine virtuelle Gemeinschaft. Es bildet soziale Beziehungen ab. Nutzer knüpfen und pflegen dort Kontakte und tauschen Wissen und Inhalte aus.", quelle: "smm1.pdf, S. 69, 74" },
 { m: "platt", beispiel: true, lek: "blogs-communitys", t: "frei", q: "Nenne drei Anbieter für Microblogging.", muster: [
   ["X (früher Twitter)", "(^|[^\\w-])x([^\\w-]|$)|twitter"],
   ["Threads", "\\bthreads"],
   ["Bluesky", "blue ?sky"],
   ["Tumblr", "tumb?l(e)?r"],
   ["Mastodon", "mastodon"],
   ["Instagram (laut offizieller Lösung)", "\\binsta(gram)?\\b"]
  ], min: 3, bsp: "• X (früher Twitter)\n• Threads\n• Bluesky\n• Mastodon\n• Tumblr\n• Instagram", quelle: "smm1.pdf, S. 69, 74" },
 { m: "platt", beispiel: true, lek: "social-sharing", t: "frei", q: "Nenne fünf Plattformen für Videos oder Bilder.", muster: [
   ["YouTube", "you ?tube"],
   ["Vimeo (oder TikTok zusätzlich zu Dailymotion)", "vimeo|daily ?motion[\\s\\S]*tik ?tok|tik ?tok[\\s\\S]*daily ?motion"],
   ["Dailymotion oder TikTok", "daily ?motion|tik ?tok"],
   ["Pinterest", "pinterest"],
   ["Flickr", "flick?e?r"],
   ["Instagram", "\\binsta(gram)?\\b"]
  ], min: 5, bsp: "• YouTube\n• Vimeo\n• Dailymotion\n• Pinterest\n• Flickr\n• Instagram\n• auch richtig: TikTok", quelle: "smm1.pdf, S. 69, 74" },
 { m: "plan", beispiel: true, lek: "orm", t: "frei", q: "Was ist ein Shitstorm?", muster: [
   ["Plötzlich, in kurzer Zeit", "plötzlich|kurze\\w* zeit|schnell|auf einmal|welle|lawine"],
   ["Massenhaft, sehr viele Beiträge", "massenhaft|masse|sehr viele|\\bviele|unmengen|flut|hunderte|tausende"],
   ["Kritisch oder negativ gegen Unternehmen, Organisation oder Person", "kriti|negativ|empör|beschwer|wut|ärger|angriff|beleidig|entrüst"]
  ], min: 2, bsp: "Ein Shitstorm ist eine plötzliche Welle von massenhaft kritischen Beiträgen. Die Welle richtet sich gegen ein Unternehmen, eine Organisation oder eine Person.", quelle: "smm1.pdf, S. 69, 74" },
 { m: "einf", beispiel: true, lek: "einsatz", t: "frei", q: "Nenne ein Beispiel für reaktives Involvement im Social Web.", muster: [
   ["Reaktion auf eine negative Bewertung", "(reagier|reaktion|antwort|beantwort|eingeh|eingehen|stellung)[\\s\\S]*(bewertung|rezension|kritik|beschwerde|review)|(bewertung|rezension|kritik|beschwerde|review)[\\s\\S]*(reagier|reaktion|antwort|beantwort|eingeh|stellung)"],
   ["Reaktion auf eine Äußerung oder Anfrage eines Nutzers", "(reagier|reaktion|antwort|beantwort|eingeh)[\\s\\S]*(anfrage|frage|äußerung|kommentar|nachricht|beitrag|post)|(anfrage|frage|äußerung|kommentar|nachricht|beitrag|post)[\\s\\S]*(reagier|reaktion|antwort|beantwort|eingeh)"]
  ], min: 1, bsp: "• Du antwortest auf eine negative Bewertung.\n• Du reagierst auf eine Anfrage oder einen Kommentar eines Nutzers.", quelle: "smm1.pdf, S. 70, 74" },
 { m: "kpi", beispiel: true, lek: "monitoring", t: "frei", q: "Wozu dient Social Media Monitoring? Nenne zwei typische Anwendungsfelder.", muster: [
   ["Zielgruppenanalyse und Kundenfeedback", "zielgruppe|feedback|kundenmeinung|meinungen der kunden"],
   ["Reputationsmanagement, Image, Brand Monitoring", "reputation|\\bruf\\b|\\bimage|brand|marke"],
   ["Kundenservice und Support", "service|support|kundendienst"],
   ["Risiko- und Krisenmanagement, Frühwarnsystem", "risik|kris|frühwarn|früherkenn"],
   ["Trends, Wettbewerb, Markt und Preise beobachten", "trend|wettbewerb|konkurren|markt|preis"],
   ["Produkte, Kampagnen, Influencer oder Themen erkennen", "produkt|innovation|kampagne|marketing|influencer|meinungsführer|themen"]
  ], min: 2, bsp: "Monitoring hört im Netz zu, was über ein Unternehmen gesagt wird. Typische Felder:\n• Reputationsmanagement und Brand Monitoring\n• Krisenmanagement als Frühwarnsystem\n• Zielgruppenanalyse und Kundenfeedback\n• Kundenservice und Support\n• Wettbewerbsbeobachtung und Trendforschung\n• Produkt- und Kampagnenmanagement", quelle: "smm1.pdf, S. 70, 74" },
 { m: "kpi", beispiel: true, lek: "monitoring", t: "frei", q: "Was ist Price-Monitoring?", muster: [
   ["Preise von Produkten oder Dienstleistungen beobachten", "preis"],
   ["Bei verschiedenen Anbietern oder Lieferanten", "anbieter|lieferant|händler|wettbewerb|konkurren|hersteller"],
   ["Über einen festgelegten Zeitraum", "zeitraum|regelmäßig|dauerhaft|laufend|über (die|eine) zeit|längere"],
   ["Künftige Preisänderungen schätzen oder planen", "zukunft|künftig|prognos|vorher|schätz|planen|entwicklung"]
  ], min: 2, bsp: "Beim Price-Monitoring beobachtest du die Preise von Produkten oder Dienstleistungen. Du vergleichst verschiedene Anbieter über einen festgelegten Zeitraum. So kannst du künftige Preisänderungen schätzen und planen.", quelle: "smm1.pdf, S. 70, 74" },
 { m: "recht", beispiel: true, lek: "impressum", t: "frei", q: "Erkläre in eigenen Worten, was ein Impressum ist.", muster: [
   ["Gesetzlich vorgeschrieben (§ 5 DDG)", "gesetz|pflicht|vorgeschrieben|\\bddg|digitale.?dienste|§"],
   ["Angabe der Herkunft, Anbieterkennzeichnung", "herkunft|anbieter|kennzeichn|angabe|name|anschrift|adresse|kontakt"],
   ["Macht den inhaltlich Verantwortlichen erkennbar", "verantwortlich|betreiber|wer hinter|herausgeber|urheber"]
  ], min: 2, bsp: "Das Impressum ist eine gesetzlich vorgeschriebene Herkunftsangabe nach § 5 DDG. Es macht erkennbar, wer für die Inhalte verantwortlich ist.", quelle: "smm1.pdf, S. 70, 74" },
 { m: "recht", beispiel: true, lek: "bildrechte", t: "frei", q: "Worin unterscheidet sich das Urheberrecht vom Markenrecht?", muster: [
   ["Urheberrecht schützt Werke und geistiges Eigentum", "\\bwerke?\\b|\\bwerken\\b|geistig|schöpfung|kreativ|\\btexte|\\bfotos|\\bbilder|musik"],
   ["Markenrecht schützt eine Marke oder ein Markenzeichen", "\\bmarken?\\b|marken?zeichen|\\blogo|kennzeichen|produktname|firmenname|slogan"]
  ], min: 2, bsp: "Das Urheberrecht schützt Werke, also geistiges Eigentum, ideell und wirtschaftlich. Das Markenrecht schützt eine Marke oder ein Markenzeichen.", quelle: "smm1.pdf, S. 71, 74" },
 { m: "unt", beispiel: true, lek: "strategie", t: "frei", q: "Wofür steht die Abkürzung SWOT?", muster: [
   ["Strengths: Stärken", "strength|stärke"],
   ["Weaknesses: Schwächen", "weakness|schwäche"],
   ["Opportunities: Chancen", "opportunit|chance|möglichkeit"],
   ["Threats: Risiken", "threat|risik|bedrohung|gefahr"]
  ], min: 4, bsp: "SWOT steht für Strengths (Stärken), Weaknesses (Schwächen), Opportunities (Chancen) und Threats (Risiken). Du nutzt sie in der Situationsanalyse.", quelle: "smm1.pdf, S. 71, 75" },
 { m: "unt", beispiel: true, lek: "ziele", t: "frei", q: "Was ist eine Zielgruppensegmentierung?", muster: [
   ["Aufteilung der Zielgruppe in Teilgruppen", "aufteil|unterteil|einteil|aufgeteilt|unterteilt|eingeteilt|\\bteil(t|en|st)\\b|teilgruppe|untergruppe|segment|gliedern|gruppier"],
   ["Nach bestimmten Kriterien wie Alter, Geschlecht, Kaufverhalten", "kriteri|merkmal|\\balter|geschlecht|kaufverhalten|einkommen|wohnort|interesse"],
   ["Segmente sind in sich möglichst einheitlich (homogen)", "homogen|einheitlich|ähnlich|gleichartig"]
  ], min: 2, bsp: "Bei der Zielgruppensegmentierung teilst du die Zielgruppe nach Kriterien auf. Beispiele sind Alter, Geschlecht oder Kaufverhalten. Jedes Segment soll in sich möglichst einheitlich, also homogen, sein.", quelle: "smm1.pdf, S. 71, 75" },
 { m: "platt", beispiel: true, lek: "facebook", t: "frei", q: "Was sind Facebook Ads?", muster: [
   ["Werbeanzeigen auf Facebook", "werb|anzeige|reklame|advertis|promot"],
   ["Bezahlt, von Unternehmen geschaltet", "bezahl|kosten|kostenpflichtig|gekauft|budget|\\bpaid|unternehmen|firmen"],
   ["Nachrichten, Fotos oder Videos mit sozialem Kontext zu Freunden", "freund|sozial|kontext|foto|bild|video|nachricht"]
  ], min: 2, bsp: "Facebook Ads sind Werbeanzeigen auf Facebook. Unternehmen bezahlen dafür. Es sind Nachrichten, Fotos oder Videos. Sie können einen sozialen Kontext enthalten, zum Beispiel welche Freunde die Seite mögen.", quelle: "smm1.pdf, S. 71, 75" },
 { m: "unt", beispiel: true, lek: "viral", t: "frei", q: "Was ist Word of Mouth Marketing (WOMM)?", muster: [
   ["Mundpropaganda, Weiterempfehlung", "mundpropaganda|empfehl|weitererz|weitersag|weitergeb|von mund"],
   ["Nutzer werden gezielt dazu angeregt", "gezielt|anreg|stimulier|motivier|förder|auslös|bewusst|anstoß|anreiz"],
   ["Mit Buzz Marketing und Viral Marketing", "buzz|viral"]
  ], min: 2, bsp: "Word of Mouth Marketing regt Nutzer gezielt zur Mundpropaganda an. Dafür nutzt es Buzz Marketing und Viral Marketing.", quelle: "smm1.pdf, S. 72, 75" },
 { m: "platt", beispiel: true, lek: "tools", t: "frei", q: "Du planst Beiträge mit einem Tool wie Hootsuite automatisch ein. Worauf achtest du dabei?", muster: [
   ["Das Persönliche und Direkte nicht verlieren", "persönlich|direkt|individuell|menschlich|authentisch"],
   ["Aktiver Ansprechpartner für die Kontakte bleiben", "ansprechpartner|aktiv|dialog|präsent|erreichbar|kontakt"],
   ["Schnell auf Anfragen reagieren", "schnell|zeitnah|zügig|sofort|reagier|antwort"]
  ], min: 2, bsp: "Trotz Automatisierung bleibst du persönlich und direkt. Du bist für deine Kontakte ein aktiver Ansprechpartner. Auf Anfragen reagierst du schnell.", quelle: "smm1.pdf, S. 72, 75" },
 { m: "platt", beispiel: true, lek: "hashtags", t: "frei", q: "Was ist ein Hashtag und wie sieht er aus?", muster: [
   ["Ein Schlagwort oder Begriff", "schlagwort|stichwort|\\bwort|\\bwörter|begriff|keyword|thema"],
   ["Mit # (Raute) davor", "#|raute|doppelkreuz|hash-?zeichen|hash-?symbol|gatter"],
   ["Anklickbar, sammelt alle Beiträge mit diesem Hashtag", "anklick|klick|samm|alle beitr|alle posts|suche|finden|filter|verlink"]
  ], min: 2, bsp: "Ein Hashtag ist ein Schlagwort mit einer Raute (#) davor, zum Beispiel #Kuchen. Du kannst ihn anklicken. Dann siehst du alle Beiträge, die diesen Hashtag nutzen.", quelle: "smm1.pdf, S. 72, 75" }
];
