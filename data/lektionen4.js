// Review 4 (06.11.2026): Lektionen und Fragen für die Lücken laut Vorlesungsplan und Hausaufgabe
// (viraler Effekt, Nutzung in Deutschland, Plattformbreite, Social Media Relations, Influencer-Kampagnen,
// Online Reputation Management). Format wie data/kurs.js. c = 0, die App mischt die Antworten.
// Einbindung: data/kurs.js (Map „alle“ + nimm-Listen, Fragen mit neu3: true).
// Quellen stehen auf den Folien bzw. im Feld „quelle“. Zahlen jährlich prüfen.

const Q_NATURE = "Nature 550, S113 (2017): „Ice bucket challenge“ – https://www.nature.com/nature/journal/v550/n7676_supp_out/full/550S113a.html";
// Plattform- und Alterszahlen der ARD/ZDF-Medienstudie 2026 nur über Sekundärquelle belegt (Originalstudie nicht abrufbar):
const Q_STUDIE = "ARD/ZDF-Medienstudie 2026 (Befragung 27.01.–19.04.2026, n = 2.462 ab 14 J.), berichtet von onlinemarketing.de (24.09.2026) – https://onlinemarketing.de/cases/ard-zdf-medienstudie-2026-mediennutzung-deutschland";
// Podcasts 34 % wöchentlich: ZDF-Übersicht zur Studie (Primärquelle des Herausgebers)
const Q_ZDF = "ZDF-Medienforschung, Übersicht ARD/ZDF-Medienstudie 2026 – https://www.zdf.de/unternehmen/dein-zdf/medienforschung/uebersicht-medienforschung-100.html";

export const LEKTIONEN_R4 = [
 // ---------- einf ----------
 { id: "nutzung-de", titel: "Wie Deutschland Social Media nutzt", min: 3, folien: [
  { k: "intro", h: "Zahlen statt Bauchgefühl", b: "Wer Kanäle auswählt, braucht verlässliche Daten. Eine wichtige Quelle ist die jährliche **ARD/ZDF-Medienstudie** – 2026 mit 2.462 Befragten ab 14 Jahren. Laut ZDF nutzt ein Drittel (33 %) täglich Social Media, im Schnitt 32 Minuten." },
  { k: "liste", h: "Mindestens wöchentlich genutzt", l: ["Instagram: 40 % (Videoplattform YouTube: 47 %)", "Facebook: 28 % (minus 3 Punkte)", "TikTok: 18 %, Snapchat: 13 %", "Pinterest: 11 %, LinkedIn: 8 %", "Laut ARD/ZDF-Medienstudie 2026, berichtet von onlinemarketing.de und ZDF"] },
  { k: "text", h: "Das Alter entscheidet", b: "Laut demselben Bericht nutzen Social Media mindestens wöchentlich **91 %** der 14- bis 29-Jährigen, 74 % der 30- bis 49-Jährigen, 53 % der 50- bis 69-Jährigen und **22 %** der über 70-Jährigen." },
  { k: "merke", h: "Quelle und Jahr nennen", b: "Studien zeigen Trends, nicht **deine** Zielgruppe. Prüfe zusätzlich eigene Statistiken und nenne immer **Quelle und Jahr** – Studien messen unterschiedlich (täglich, wöchentlich, Altersgrenze)." },
  { k: "check", q: "Welche Altersgruppe nutzt Social Media laut Bericht zur ARD/ZDF-Medienstudie 2026 am häufigsten?", a: ["14 bis 29 Jahre", "30 bis 49 Jahre", "50 bis 69 Jahre", "Über 70 Jahre"], c: 0, e: "91 % der 14- bis 29-Jährigen nutzen Social Media mindestens wöchentlich, bei den über 70-Jährigen sind es 22 %." }
 ]},
 { id: "viral", titel: "Der virale Effekt", min: 3, folien: [
  { k: "intro", h: "Wie ein Virus – nur gewollt", b: "**Viral** heißt: Ein Inhalt verbreitet sich, weil **Nutzer ihn selbst weitergeben** – von Person zu Person. Das Unternehmen gibt nur den **Anstoß**; Teilen, Kommentieren und Nachmachen übernimmt die Community." },
  { k: "text", h: "Warum es so schnell geht", b: "Wer teilt, erreicht sein eigenes Netzwerk. Teilen dort wieder einige, wächst die Reichweite **sprunghaft** statt Schritt für Schritt. Algorithmen verstärken das: viel Interaktion, mehr Ausspielung. Ergebnis ist **Earned Media** – verdiente statt gekaufte Reichweite." },
  { k: "liste", h: "Erfolgsfaktoren", l: ["Starke Emotion: Humor, Rührung, Überraschung", "Einfache Idee, sofort verständlich", "Mitmach-Mechanik, z. B. Challenge oder Nominierung", "Leicht teilbar, plattformgerecht, gutes Timing", "Gezieltes **Seeding**: erste Verbreitung über passende Personen"] },
  { k: "liste", h: "Grenzen und Risiken", l: ["Nicht planbar – Viralität lässt sich nicht garantieren", "Kontrollverlust: Nutzer deuten Inhalte um", "Kurze Lebensdauer, Aufmerksamkeit verpufft schnell", "Reichweite ohne Markenbezug bringt wenig", "Kritik und Fehler verbreiten sich genauso viral (**Shitstorm**)"] },
  { k: "merke", h: "Ein Ergebnis, kein Werkzeug", b: "**Viraler Effekt** = schnelle, sich selbst verstärkende Verbreitung durch Teilen der Nutzer. Man schafft gute Voraussetzungen – kaufen kann man Viralität nicht." },
  { k: "check", q: "Was kennzeichnet den viralen Effekt?", a: ["Nutzer verbreiten den Inhalt selbst weiter, die Reichweite wächst sprunghaft", "Ein hohes Werbebudget sorgt für gleichmäßig wachsende Reichweite", "Der Beitrag wird nur den eigenen Followern chronologisch angezeigt", "Die Plattform garantiert besonders langen Videos mehr Reichweite"], c: 0, e: "Viral = Weitergabe von Person zu Person. Jede Weitergabe öffnet ein neues Netzwerk – deshalb wächst die Reichweite so schnell." }
 ]},
 { id: "viral-beispiele", titel: "Virale Kampagnen: echte Beispiele", min: 4, folien: [
  { k: "beispiel", h: "ALS Ice Bucket Challenge (2014)", b: "Eiswasser über den Kopf, Video posten, drei Personen nominieren. Über **17 Mio.** Menschen luden Videos hoch. Die ALS Association erhielt etwa **115 Mio. US-$** Spenden (Vorjahreszeitraum: 2,8 Mio.). Quelle: Nature, 2017." },
  { k: "beispiel", h: "EDEKA #heimkommen (2015)", b: "Weihnachtsspot von Jung von Matt, ab 28.11.2015 auf YouTube: Ein Großvater täuscht seinen Tod vor, damit die Familie heimkommt. Nach vier Tagen über **20 Mio.** Aufrufe, bis 18.12. über **43 Mio.** Treiber: starke Emotion, Gesprächsstoff, Parodien. Quelle: Wikipedia „Heimkommen“." },
  { k: "beispiel", h: "Duolingo: „Duo ist tot“ (2025)", b: "Am 11.02.2025 verkündete Duolingo den „Tod“ seines Eulen-Maskottchens, vor allem auf TikTok. Fans spekulierten und erstellten rund **160.000** eigene Beiträge. Laut Unternehmen etwa **1,7 Mrd.** Impressionen in zwei Wochen – geplant waren 70 Mio. Quelle: Fast Company." },
  { k: "check", q: "Was haben Ice Bucket Challenge, #heimkommen und „Duo ist tot“ gemeinsam?", a: ["Die Reichweite entstand vor allem, weil Menschen die Inhalte selbst teilten und weitertrugen", "Alle drei liefen ausschließlich als bezahlte TV-Werbung", "Alle drei waren Gewinnspiele mit wertvollen Sachpreisen", "Alle drei wurden nur den eigenen Followern angezeigt"], c: 0, e: "Ob Nominierung, Rührung oder Rätselraten: In allen drei Fällen trugen die Nutzer den Inhalt weiter – das ist der virale Effekt." },
  { k: "liste", h: "So löst du die Hausaufgabe", l: ["**Begriff** in ein bis zwei Sätzen erklären", "**Wirkung:** Teilen, Netzwerk, Algorithmus", "**Reales Beispiel:** wer, was, wann, welche Plattform", "**Belegte Zahlen** mit Quelle – Zahlen selbst nachprüfen", "**Fazit:** Warum war der Effekt entscheidend? Stichpunkte, max. 1 Seite"] },
  { k: "check", q: "Du sollst in der Hausaufgabe ein reales Beispiel nennen. Was gehört unbedingt dazu?", a: ["Wer, wann, welche Plattform – mit belegten Zahlen und Quelle", "Ein selbst ausgedachtes Beispiel, das gut klingt", "Möglichst viele Kampagnen ohne Details aufzählen", "Nur der Name der Marke, Zahlen sind unwichtig"], c: 0, e: "„Reales Beispiel“ heißt: nachprüfbar. Name, Zeitpunkt, Plattform, Ergebnis und Quelle machen die Antwort stark." }
 ]},
 // ---------- platt ----------
 { id: "youtube-podcast", titel: "YouTube & Podcasts im Detail", min: 4, folien: [
  { k: "intro", h: "Lange Formate, langer Atem", b: "YouTube und Podcasts eignen sich für **ausführliche Inhalte**: Erklärungen, Interviews, Hintergründe. Sie schaffen Vertrauen, weil Menschen einer Marke viele Minuten zusehen oder zuhören." },
  { k: "liste", h: "YouTube-Formate", l: ["Lange Videos: Tutorials, Produkttests, Erklärvideos", "**Shorts:** Hochkant-Videos bis drei Minuten", "Livestreams, z. B. Produktvorstellung oder Fragerunde", "Playlists bündeln Videos zu einem Thema", "Community-Beiträge für Umfragen und Hinweise"] },
  { k: "text", h: "YouTube als Suchmaschine", b: "Videos werden über **Titel, Beschreibung und Untertitel** gefunden – oft noch Jahre später. Ein klares **Thumbnail** (Vorschaubild) entscheidet über den Klick. **Kapitel** legt man per Zeitstempel in der Beschreibung an, der erste bei 0:00. Wichtig: **Wiedergabezeit** und Zuschauerbindung." },
  { k: "text", h: "Corporate Podcast", b: "Fachwissen, Interviews oder Einblicke als Audio – hörbar beim Pendeln oder Sport. Laut ZDF hörte 2026 rund ein **Drittel** (34 %) der Menschen ab 14 mindestens wöchentlich Podcasts (ARD/ZDF-Medienstudie). Erfolg braucht einen festen Rhythmus und Bewerbung über Social Media." },
  { k: "check", q: "Welche Kennzahl ist für YouTube-Videos besonders aussagekräftig?", a: ["Wiedergabezeit und Zuschauerbindung", "Abonnentenzahl der Konkurrenz", "Anzahl der verwendeten Hashtags", "Länge der Videobeschreibung"], c: 0, e: "Wie lange Menschen dranbleiben, zeigt, ob das Video wirklich interessiert – und beeinflusst die Ausspielung." }
 ]},
 { id: "pinterest-snapchat", titel: "Pinterest & Snapchat", min: 3, folien: [
  { k: "intro", h: "Oft vergessen – zu Unrecht", b: "Beide Netzwerke haben in Deutschland eine feste Nutzerschaft: Mindestens wöchentlich nutzen **Snapchat 13 %** und **Pinterest 11 %** der Menschen ab 14 (laut Bericht zur ARD/ZDF-Medienstudie 2026)." },
  { k: "text", h: "Pinterest: visuelle Suchmaschine", b: "Nutzer suchen Ideen und speichern sie auf **Pinnwänden**: Rezepte, Einrichtung, Mode, Hochzeit. **Pins** verlinken auf Websites und bleiben **lange auffindbar** – anders als kurzlebige Feeds. Weltweit 640 Mio. monatlich aktive Nutzer (Pinterest, Q2 2026)." },
  { k: "text", h: "Snapchat: Messenger der Jüngeren", b: "Snapchat ist vor allem ein **Messenger mit Fotos und Kurzvideos** unter Freunden, beliebt bei Jugendlichen und jungen Erwachsenen. Typisch: Stories, verschwindende Nachrichten und **AR-Linsen** (Kamerafilter). Marken nutzen Anzeigen und gesponserte Linsen." },
  { k: "liste", h: "Passt für …", l: ["Pinterest: Handel, Einrichtung, Food, Mode, Hochzeit, Reisen", "Pinterest: dauerhafter Traffic zur Website", "Snapchat: junge Zielgruppen, z. B. Ausbildungsmarketing", "Snapchat: spielerische AR-Erlebnisse und Werbung", "Beide: für B2B selten erste Wahl"] },
  { k: "check", q: "Was unterscheidet Pinterest von den meisten anderen Netzwerken?", a: ["Pins werden wie in einer Suchmaschine lange gefunden und führen auf Websites", "Beiträge verschwinden automatisch nach 24 Stunden", "Es ist vor allem ein Business-Netzwerk für Fachkräfte", "Inhalte sind nur für Freunde in privaten Chats sichtbar"], c: 0, e: "Pinterest wird zur Ideensuche genutzt. Gute Pins bringen oft noch Monate später Besucher auf die Website." }
 ]},
 { id: "threads-bluesky", titel: "Threads, Bluesky & Mastodon", min: 3, folien: [
  { k: "intro", h: "Alternativen zu X", b: "Seit dem Umbau von Twitter zu X nutzen viele Medien, Fachleute und Organisationen **zusätzliche Kanäle** für schnelle Textbeiträge. Drei Namen solltest du kennen." },
  { k: "text", h: "Threads", b: "Text-App von **Meta**, 2023 gestartet und eng mit Instagram verbunden. In der EU lässt sich Threads seit Ende 2023 ohne Instagram-Konto **lesen**; eigene Profile ohne Instagram testet Meta seit 2025. Laut Meta im Juni 2026 rund **500 Mio.** monatlich aktive Nutzer. Vorteil: Start mit der Instagram-Community." },
  { k: "text", h: "Bluesky und Mastodon", b: "**Bluesky** ähnelt X und setzt auf ein offenes Protokoll mit wählbaren Feeds. **Mastodon** ist **dezentral**: viele unabhängige Server (Instanzen) im **Fediverse**, ohne zentrale Betreiberfirma. Beliebt bei Wissenschaft, Behörden, Journalismus und Tech." },
  { k: "liste", h: "Für Unternehmen prüfen", l: ["Ist meine Zielgruppe dort wirklich aktiv?", "Habe ich Zeit für schnellen, dauerhaften Dialog?", "Passt das Umfeld zur Marke (Markensicherheit)?", "Gibt es Statistiken und Werbemöglichkeiten?", "Lieber einen Kanal gut als viele halb"] },
  { k: "check", q: "Ein Handwerksbetrieb überlegt, auf Bluesky aktiv zu werden. Was sollte er zuerst klären?", a: ["Ob seine Zielgruppe dort wirklich aktiv ist", "Ob er dort möglichst viele Hashtags nutzen darf", "Ob er seine Instagram-Beiträge automatisch spiegeln kann", "Ob der Kanal neu und deshalb im Trend ist"], c: 0, e: "Wie bei jedem Kanal gilt: erst Zielgruppe, Ziel und Ressourcen prüfen – dann entscheiden." }
 ]},
 // ---------- unt ----------
 { id: "influencer-kampagne", titel: "Influencer-Kampagnen steuern", min: 4, folien: [
  { k: "intro", h: "Mehr als ein bezahlter Post", b: "Erfolgreiche Influencer-Kampagnen folgen einem **Prozess** – vom Ziel über Auswahl und Vertrag bis zur Auswertung." },
  { k: "liste", h: "Ablauf", l: ["Ziel, Zielgruppe und Budget festlegen", "Passende Influencer suchen und prüfen", "Briefing und Vertrag: Inhalte, Rechte, Kennzeichnung", "Freigabe, Veröffentlichung, Community begleiten", "Auswerten und Zusammenarbeit bewerten"] },
  { k: "liste", h: "Vergütungsmodelle", l: ["Festpreis pro Beitrag oder Paket", "Produkt oder Leistung als Gegenleistung", "Provision je Verkauf (**Affiliate**, Rabattcode)", "Langfristiger Vertrag als Markenbotschafter", "Mischform: Fixum plus Erfolgsbonus"] },
  { k: "text", h: "Erfolg messen", b: "KPIs passend zum Ziel: **Reichweite und Aufrufe** für Bekanntheit, **Engagement-Rate** für Interesse, **Klicks über Tracking-Links** und **eingelöste Rabattcodes** für Verkäufe. Vorher festlegen, was als Erfolg gilt." },
  { k: "check", q: "Wie lässt sich der Verkaufserfolg eines Influencer-Posts am besten messen?", a: ["Über individuelle Rabattcodes oder Tracking-Links", "Über die Gesamtzahl der Follower der Influencerin", "Über die Zahl der verwendeten Hashtags", "Über die Länge des Beitragstextes"], c: 0, e: "Eigene Codes und Links ordnen Käufe eindeutig der Kooperation zu. Follower-Zahlen sagen nichts über Verkäufe." }
 ]},
 { id: "smr", titel: "Social Media Relations", min: 3, folien: [
  { k: "intro", h: "Beziehungen statt Anzeigen", b: "**Social Media Relations** sind Beziehungspflege mit Menschen, die im Social Web Meinung machen: Blogger, Creator, Journalisten, Fach-Communitys. Ziel ist **Earned Media** – Berichte und Empfehlungen, die man nicht kauft." },
  { k: "text", h: "Abgrenzung", b: "**Media Relations** richten sich an Redaktionen mit journalistischen Regeln. **Social Media Relations** richten sich auch an unabhängige Creator. **Influencer Marketing** ist dagegen meist **bezahlt** – jede Gegenleistung, auch ein Gratisprodukt, bedeutet Kennzeichnungspflicht." },
  { k: "liste", h: "Grundsätze", l: ["Erst recherchieren: Wer passt thematisch, wer hat Einfluss?", "Beziehung vor Pitch – keine Massenmails", "Offen und ehrlich, keine Meinung vorschreiben", "Mehrwert bieten: Exklusives, Einblicke, Daten", "Langfristig denken und Kontakte pflegen"] },
  { k: "liste", h: "Werkzeuge", l: ["**Social Media Newsroom:** Meldungen, Bilder, Ansprechpartner", "Journalisten und Fachleuten auf Social Media folgen", "Creator-Events und Hintergrundgespräche", "Monitoring: Wer spricht worüber?", "Eigene Expertinnen als Ansprechpartner sichtbar machen"] },
  { k: "merke", h: "Erst Beziehung, dann Bitte", b: "Wer nur dann schreibt, wenn er etwas will, wird ignoriert. **Zuerst zuhören und Mehrwert bieten.**" },
  { k: "check", q: "Was unterscheidet Social Media Relations von klassischem Influencer Marketing?", a: ["Es geht um Beziehungspflege für unbezahlte Berichterstattung", "Es werden ausschließlich bezahlte Werbeposts gebucht", "Es richtet sich nur an Fernsehredaktionen", "Es ersetzt jede Form der Pressearbeit"], c: 0, e: "Social Media Relations zielen auf Earned Media. Sobald bezahlt oder mit Produkten vergütet wird, ist es Werbung – und muss gekennzeichnet werden." }
 ]},
 // ---------- plan ----------
 { id: "orm", titel: "Online Reputation Management", min: 3, folien: [
  { k: "intro", h: "Der Ruf im Netz", b: "Die **Online-Reputation** ist das Bild, das sich Menschen im Netz von einem Unternehmen machen. **Online Reputation Management (ORM)** heißt: dieses Bild beobachten, pflegen und schützen." },
  { k: "liste", h: "Woraus sich der Ruf speist", l: ["Bewertungen: Google, Kununu, Trustpilot, Branchenportale", "Kommentare und Erwähnungen in Social Media", "Suchergebnisse zum Firmennamen", "Presse- und Blogberichte", "Auftreten von Führung und Mitarbeitenden"] },
  { k: "liste", h: "Bausteine des ORM", l: ["Monitoring: Erwähnungen und Bewertungen laufend beobachten", "Reagieren: zeitnah, sachlich, lösungsorientiert", "Aufbauen: zufriedene Kunden um ehrliche Bewertungen bitten", "Eigene Inhalte stärken: Website, Profile, Fachbeiträge", "Vorsorgen: Krisenplan für Kritikwellen"] },
  { k: "merke", h: "Taten statt Löschen", b: "Reputation entsteht durch **Taten, nicht durch Löschen**. Kritik verschwindet selten – aber eine gute Antwort zeigt allen Mitlesenden, wie das Unternehmen mit Kritik umgeht." },
  { k: "check", q: "Welche Maßnahme gehört zum aktiven Aufbau einer guten Online-Reputation?", a: ["Zufriedene Kunden gezielt um eine ehrliche Bewertung bitten", "Freunde ohne Kundenkontakt positive Bewertungen schreiben lassen", "Kritische Bewertungen grundsätzlich löschen lassen", "Bewertungsportale vollständig ignorieren"], c: 0, e: "Echte Bewertungen zufriedener Kunden stärken den Ruf. Gefälschte Bewertungen sind unlauter (UWG, Anhang Nr. 23c)." }
 ]},
 { id: "bewertungen", titel: "Auf Bewertungen richtig reagieren", min: 3, folien: [
  { k: "intro", h: "Alle lesen mit", b: "Eine Ein-Stern-Bewertung tut weh. Doch andere Kunden achten vor allem darauf, **wie** das Unternehmen antwortet. Eine gute Antwort kann Vertrauen sogar stärken." },
  { k: "liste", h: "Antworten in fünf Schritten", l: ["Danken und die Person ernst nehmen", "Konkret auf die Kritik eingehen, keine Floskeln", "Fehler zugeben, wenn die Kritik berechtigt ist", "Lösung anbieten, Details im privaten Kontakt klären", "Freundlich bleiben – auch bei unfairer Kritik"] },
  { k: "text", h: "Was rechtlich gilt", b: "**Meinungen** sind meist erlaubt, auch harte Kritik. Gegen **Schmähkritik, Beleidigungen und unwahre Tatsachenbehauptungen** kann man sich wehren: begründete Meldung an das Portal. Gefälschte Bewertungen zu beauftragen ist unlauter (UWG, Anhang Nr. 23c)." },
  { k: "beispiel", h: "Antwort-Beispiel", b: "Bewertung: „Zwei Stunden auf die Pizza gewartet!“\n\nAntwort: „Danke für Ihr offenes Feedback, Herr K. Am Samstag fiel unser Ofen aus – das hätten wir Ihnen sagen müssen. Melden Sie sich gern bei uns, wir laden Sie ein.“" },
  { k: "check", q: "Wie reagierst du auf eine berechtigte, sachliche negative Google-Bewertung?", a: ["Öffentlich danken, Fehler einräumen und eine Lösung anbieten", "Die Bewertung beim Portal als Fälschung melden", "Gar nicht reagieren, damit sie schnell untergeht", "Dem Verfasser mit einer Abmahnung drohen"], c: 0, e: "Sachliche Kritik ist zulässig. Eine offene Antwort mit Lösung wirkt auf alle Mitlesenden professionell." }
 ]}
];

export const FRAGEN_R4 = [
 // ---------- einf: viraler Effekt, Nutzung, Anwendungsfelder ----------
 { m: "einf", q: "Welcher Faktor fördert die virale Verbreitung eines Inhalts besonders?", a: ["Starke Emotionen wie Humor, Rührung oder Überraschung", "Möglichst viel Fachtext mit allen Produktdetails", "Ein langer Beitrag ohne Bild und ohne Video", "Häufige Wiederholung desselben Werbeposts"], c: 0, e: "Emotionale, einfache und leicht teilbare Inhalte werden am ehesten weitergegeben.", quelle: "https://onlinemarketing.de/lexikon/definition-virales-marketing" },
 { m: "einf", q: "Welche Art von Reichweite entsteht durch einen viralen Effekt?", a: ["Earned Media", "Paid Media", "Owned Media", "Print Media"], c: 0, e: "Die Reichweite wird durch Teilen der Nutzer „verdient“, nicht gekauft und nicht über eigene Kanäle erzeugt." },
 { m: "einf", q: "Was ist ein typisches Risiko viraler Kampagnen?", a: ["Verlauf und Deutung lassen sich kaum planen oder kontrollieren", "Sie sind grundsätzlich teurer als klassische TV-Werbung", "Sie sind in Deutschland gesetzlich verboten", "Sie erreichen nur die eigenen Follower"], c: 0, e: "Nutzer bestimmen, wie und mit welchem Kommentar ein Inhalt weiterläuft – auch Kritik kann viral gehen." },
 { m: "einf", q: "Was machte die ALS Ice Bucket Challenge 2014 vor allem viral?", a: ["Teilnehmende nominierten weitere Personen zum Mitmachen", "Ein großes TV-Werbebudget der ALS Association", "Ein Gewinnspiel mit wertvollen Sachpreisen", "Bezahlte Anzeigen auf allen großen Plattformen"], c: 0, e: "Über 17 Mio. Menschen luden Videos hoch; die ALS Association erhielt rund 115 Mio. US-$ (Vorjahreszeitraum 2,8 Mio.).", quelle: Q_NATURE },
 { m: "einf", q: "Der EDEKA-Spot #heimkommen erreichte 2015 binnen Tagen über 20 Mio. YouTube-Aufrufe. Was trieb die Verbreitung vor allem an?", a: ["Eine stark emotionale Geschichte, die Menschen teilen wollten", "Ein besonders hoher Rabatt, der im Video genannt wurde", "Eine Teilnahmepflicht an einem Gewinnspiel", "Eine Ausstrahlung ausschließlich im Fernsehen"], c: 0, e: "Der Spot (Jung von Matt) wurde online veröffentlicht und lebte von Rührung und Gesprächswert.", quelle: "https://en.wikipedia.org/wiki/Heimkommen" },
 { m: "einf", alt: ["Welches soziale Netzwerk nutzten laut Bericht zur ARD/ZDF-Medienstudie 2026 die meisten Menschen ab 14 mindestens wöchentlich?"], q: "Welches dieser Netzwerke nutzten laut Bericht zur ARD/ZDF-Medienstudie 2026 die meisten Menschen ab 14 mindestens wöchentlich?", a: ["Instagram", "Facebook", "TikTok", "LinkedIn"], c: 0, e: "Instagram 40 %, Facebook 28 %, TikTok 18 %, LinkedIn 8 % (berichtet von onlinemarketing.de). Die Videoplattform YouTube liegt mit 47 % noch darüber (ZDF).", quelle: Q_STUDIE },
 { m: "einf", q: "Was ist Social Customer Care?", a: ["Kundenservice über Social-Media-Kanäle, z. B. in Kommentaren und Direktnachrichten", "Die Pflege der privaten Social-Media-Profile von Kunden", "Eine Versicherung für Social-Media-Konten", "Werbung mit Fotos zufriedener Kunden"], c: 0, e: "Kunden erwarten schnelle Antworten dort, wo sie ohnehin sind – öffentlich sichtbar und damit auch Imagearbeit." },
 { m: "einf", q: "Fans reichen auf LEGO Ideas eigene Set-Ideen ein. Was erhält ein Fan, wenn daraus ein Set wird?", a: ["1 % des Nettoumsatzes des Sets", "Einen einmaligen Gutschein über 100 €", "Nichts, die Rechte gehen ohne Gegenleistung an LEGO", "Eine Festanstellung als Designer bei LEGO"], c: 0, e: "Ab 10.000 Unterstützern prüft LEGO die Idee. Crowdsourcing liefert Produktideen, Marktforschung und Fanbindung zugleich.", quelle: "https://ideas.lego.com/howitworks" },
 // ---------- platt ----------
 { m: "platt", q: "Warum eignet sich Pinterest gut, um Besucher auf eine Website zu bringen?", a: ["Pins verlinken auf Websites und werden über die Suche lange gefunden", "Beiträge erscheinen nur 24 Stunden und erzeugen so Druck", "Pinterest zeigt Inhalte ausschließlich Freunden", "Pinterest erlaubt keine Links, steigert aber die Bekanntheit"], c: 0, e: "Pinterest funktioniert wie eine visuelle Suchmaschine für Ideen – Inhalte wirken oft monatelang." },
 { m: "platt", q: "Für welche Zielgruppe ist Snapchat besonders relevant?", a: ["Jugendliche und junge Erwachsene", "Fach- und Führungskräfte im B2B", "Vor allem Menschen über 65", "Journalisten und Politiker"], c: 0, e: "Snapchat wird vor allem von Jüngeren als Messenger mit Fotos und Kurzvideos genutzt – interessant z. B. fürs Ausbildungsmarketing." },
 { m: "platt", q: "Was sind AR-Linsen (Lenses) bei Snapchat?", a: ["Filter, die Gesicht oder Umgebung im Kamerabild digital verändern", "Bezahlte Statistiken für Unternehmenskonten", "Verschlüsselte Gruppenchats für Firmen", "Werbeanzeigen in der Suchleiste"], c: 0, e: "AR = Augmented Reality (erweiterte Realität). Marken können gesponserte Linsen anbieten." },
 { m: "platt", q: "Was ist das Fediverse?", a: ["Ein Verbund unabhängiger, miteinander vernetzter Server, z. B. Mastodon", "Ein Werbenetzwerk von Meta für Facebook und Instagram", "Eine Videoplattform von Google", "Ein EU-Gesetz zur Regulierung großer Plattformen"], c: 0, e: "Im Fediverse kann jeder einen Server betreiben; Nutzer verschiedener Server können einander folgen." },
 { m: "platt", q: "Warum gilt YouTube auch als Suchmaschine?", a: ["Viele Menschen suchen dort gezielt nach Anleitungen und Erklärungen", "YouTube zeigt ausschließlich Textbeiträge an", "Videos verschwinden nach 24 Stunden", "YouTube erlaubt keine Kommentare"], c: 0, e: "Titel, Beschreibung, Kapitel und Untertitel entscheiden, ob ein Video gefunden wird – oft noch Jahre später." },
 { m: "platt", q: "Was sind YouTube Shorts?", a: ["Hochkant-Videos von bis zu drei Minuten", "Kurze Textbeiträge ohne Bild", "Gekürzte Werbeanzeigen vor Videos", "Zusammenfassungen von Livestreams per E-Mail"], c: 0, e: "Shorts sind YouTubes Antwort auf TikTok und Reels; seit Oktober 2024 dürfen sie bis zu drei Minuten lang sein." },
 { m: "platt", q: "Welcher Vorteil spricht für einen Corporate Podcast?", a: ["Ausführliche Inhalte, die nebenbei gehört werden und Vertrauen aufbauen", "Garantierte virale Reichweite innerhalb weniger Tage", "Keine Planung und kein fester Rhythmus nötig", "Er ersetzt alle anderen Social-Media-Kanäle"], c: 0, e: "Laut ZDF hörte 2026 rund ein Drittel (34 %) der Menschen ab 14 mindestens wöchentlich Podcasts (ARD/ZDF-Medienstudie).", quelle: Q_ZDF },
 // ---------- unt: Social Media Relations & Influencer ----------
 { m: "unt", q: "Was versteht man unter Social Media Relations?", a: ["Beziehungspflege mit Bloggern, Creatorn und Journalisten im Social Web", "Das Schalten bezahlter Anzeigen in sozialen Netzwerken", "Interne Chats und Wikis zwischen Mitarbeitenden", "Verträge des Unternehmens mit Plattformbetreibern"], c: 0, e: "Ziel ist unbezahlte Berichterstattung und Empfehlung (Earned Media)." },
 { m: "unt", q: "Was gehört in einen Social Media Newsroom?", a: ["Pressemitteilungen, Bilder, Ansprechpartner und Social-Feeds gebündelt", "Private Urlaubsfotos und Hobbys der Geschäftsführung", "Interne Gehaltsübersichten aller Mitarbeitenden", "Zugangsdaten aller Social-Media-Konten fürs Team"], c: 0, e: "Der Newsroom ist die zentrale Anlaufstelle für Medien und Creator." },
 { m: "unt", q: "Wie sprichst du Creator im Rahmen von Social Media Relations am besten an?", a: ["Persönlich, nach Recherche und mit echtem Mehrwert für ihre Community", "Mit einer Massenmail an alle gesammelten Kontakte", "Mit fertigem Text, den sie unverändert posten sollen", "Mit der Bitte, ausschließlich positiv zu berichten"], c: 0, e: "Beziehung vor Pitch: Wer sich nicht informiert und Meinungen vorschreibt, verspielt Vertrauen." },
 { m: "unt", q: "Welche Kennzahl passt zum Ziel „Verkäufe“ bei einer Influencer-Kampagne?", a: ["Eingelöste Rabattcodes und Käufe über Tracking-Links", "Follower-Zahl der Influencerin", "Anzahl der verwendeten Story-Sticker", "Länge des Videos in Sekunden"], c: 0, e: "Eindeutige Codes und Links ordnen Käufe der Kooperation zu." },
 { m: "unt", q: "Was bedeutet Affiliate-Vergütung bei Influencern?", a: ["Provision für jeden vermittelten Verkauf", "Fester Monatslohn unabhängig vom Ergebnis", "Ein Gratisprodukt ohne jede Bedingung", "Vergütung pro Follower des Influencers"], c: 0, e: "Erfolgsabhängig: Bezahlt wird nur, was über Link oder Code verkauft wurde." },
 // ---------- plan: Online Reputation Management ----------
 { m: "plan", q: "Was ist Online Reputation Management?", a: ["Beobachten, Pflegen und Schützen des Rufs eines Unternehmens im Netz", "Verwaltung der Passwörter aller Online-Konten", "Programmierung und Hosting der Website", "Planung von Anzeigen in Printmedien"], c: 0, e: "Dazu gehören Monitoring, Bewertungsmanagement, eigene Inhalte und Krisenvorsorge." },
 { m: "plan", q: "Welche Bewertung kann ein Unternehmen mit guten Chancen beim Portal zur Löschung melden?", a: ["Eine Bewertung mit nachweislich unwahren Tatsachenbehauptungen", "Eine kritische, aber sachliche Meinung", "Eine schlechte Sternebewertung mit nachvollziehbarer Begründung", "Eine Bewertung, die nur zwei von fünf Sternen vergibt"], c: 0, e: "Meinungen sind geschützt. Unwahre Tatsachen, Beleidigungen und Schmähkritik muss man nicht hinnehmen.", quelle: "https://www.e-recht24.de/ecommerce/13127-reputationsmanagement-fuer-unternehmen.html" },
 { m: "plan", q: "Ein Hotel wirbt mit „nur echten Gästebewertungen“, prüft aber nicht, ob die Verfasser Gäste waren. Wie ist das einzuordnen?", a: ["Unlauter – ohne angemessene Prüfung ist diese Behauptung irreführend", "Zulässig, solange die Bewertungen positiv sind", "Zulässig, weil Bewertungsportale selbst prüfen müssen", "Nur unzulässig bei mehr als 100 Bewertungen"], c: 0, e: "UWG, Anhang Nr. 23b: Wer behauptet, Bewertungen stammen von echten Kunden, muss angemessene Prüfmaßnahmen ergreifen.", quelle: "UWG, Anhang (zu § 3 Abs. 3) Nr. 23b – https://www.buzer.de/Anhang_UWG.htm" },
 { m: "plan", q: "Warum sollte ein Unternehmen auf negative Bewertungen öffentlich antworten?", a: ["Weil Mitlesende sehen, wie das Unternehmen mit Kritik umgeht", "Weil die Bewertung dadurch automatisch gelöscht wird", "Weil das Gesetz eine Antwort binnen 24 Stunden vorschreibt", "Weil sich dadurch die Sternebewertung automatisch verbessert"], c: 0, e: "Die Antwort richtet sich an alle künftigen Kunden – sie ist ein Aushängeschild." },
 { m: "plan", q: "Mit welchem Werkzeug beobachtest du die Online-Reputation laufend?", a: ["Social-Media-Monitoring mit Alerts für Marken- und Produktnamen", "Einem Redaktionsplan für die nächsten sechs Monate", "Einem Publishing-Tool für zeitgesteuerte Posts", "Einer Persona für die Hauptzielgruppe"], c: 0, e: "Monitoring und Alerts melden neue Erwähnungen und Bewertungen, bevor sich etwas aufschaukelt." },

 // ---------- Freitext: Hausaufgaben- und Prüfungsstil („Erläutern + reales Beispiel“) ----------
 { m: "einf", t: "frei", q: "Erläutern Sie kurz, was unter dem viralen Effekt im Rahmen von Social Media zu verstehen ist. Nennen Sie ein reales Beispiel für eine Kampagne, bei der der virale Effekt entscheidend für den Erfolg war.", muster: [
   ["Nutzer teilen und verbreiten Inhalte selbst weiter (von Person zu Person)", "\\bteil(?!nehm|weise)|geteilt|weiterteil|\\bshares?\\b|weiterge|weiterleit|verbreit|person zu person|nutzer zu nutzer"],
   ["Schnelle, sich selbst verstärkende (sprunghafte) Reichweite", "schnell|exponent|schneeball|rasant|lawine|lauffeuer|sprunghaft|selbst verstärk"],
   ["Earned Media: kaum bezahlte Reichweite, Unternehmen gibt nur den Anstoß", "earned|kostenlos|kostengünstig|geringe kosten|unbezahlt|organisch|ohne (bezahl|budget|werbung)|anstoß|impuls"],
   ["Reales Beispiel mit Name und Jahr, z. B. Ice Bucket Challenge 2014, EDEKA #heimkommen 2015, Duolingo 2025", "ice.?bucket|als association|edeka|heimkommen|duolingo|old spice"],
   ["Begründung mit Fakten: Mechanik (Nominierung, Emotion) und belegte Zahlen", "\\d|nominier|emotion|mitmach|rühr|humor"]
  ], min: 4, quelle: Q_NATURE, bsp: "• Viraler Effekt: Ein Inhalt verbreitet sich, weil Nutzer ihn selbst weiterteilen – von Person zu Person.\n• Jede Weitergabe erreicht ein neues Netzwerk, Algorithmen verstärken das: Reichweite wächst sprunghaft, ohne gekauft zu sein (Earned Media).\n• Beispiel: ALS Ice Bucket Challenge 2014 – Eiswasser-Video posten und drei Personen nominieren.\n• Über 17 Mio. Videos, rund 115 Mio. US-$ Spenden für die ALS Association (Nature, 2017).\n• Entscheidend war die Nominierung: Jede Teilnahme löste neue Teilnahmen aus." },
 { m: "einf", t: "frei", q: "Nennen Sie drei Erfolgsfaktoren und zwei Risiken viraler Kampagnen.", muster: [
   ["Starke Emotionen (Humor, Rührung, Überraschung)", "emotion|humor|lustig|rühr|überrasch"],
   ["Einfache, verständliche Idee", "einfach|verständlich|simpel"],
   ["Mitmach-Mechanik / Interaktion (Challenge, Nominierung)", "mitmach|challenge|nominier|interakt|beteilig"],
   ["Leicht teilbar, plattformgerecht, gutes Timing, Seeding", "teilbar|plattformgerecht|timing|zeitpunkt|aktuell|seeding"],
   ["Risiko: nicht planbar, Kontrollverlust", "planbar|kontroll|unvorherseh"],
   ["Risiko: negative Wirkung / kurze Lebensdauer / fehlender Markenbezug", "negativ|shitstorm|kritik|kurzlebig|kurze lebens|verpufft|markenbezug"]
  ], min: 4 },
 { m: "einf", t: "frei", q: "Nennen Sie vier Anwendungsfelder des Social Media Managements im Unternehmen und je ein typisches Ziel.", muster: [
   ["Marketing: Bekanntheit, Image, Kampagnen", "marketing|werbung|bekanntheit|image"],
   ["PR / Social Media Relations: Medien- und Influencerkontakte, Krisenkommunikation", "\\bpr\\b|presse|relations|öffentlichkeit|krise"],
   ["Vertrieb: Social Selling, Social Commerce, Leads", "vertrieb|verkauf|selling|commerce|lead"],
   ["Kundenservice: Fragen und Beschwerden beantworten", "service|beschwerde|support|customer care"],
   ["Personal: Recruiting, Employer Branding", "personal|recruit|bewerb|employer|arbeitgeber"],
   ["Marktforschung / Innovation: Social Listening, Crowdsourcing; interne Kommunikation", "marktforsch|listening|innovation|crowdsourc|produktidee|intern|wissensmanag"]
  ], min: 4 },
 { m: "platt", t: "frei", q: "Vergleichen Sie Pinterest und Snapchat hinsichtlich Zielgruppe, typischer Inhalte und Eignung für Unternehmen.", muster: [
   ["Pinterest: visuelle Suchmaschine, Ideen auf Pinnwänden", "pinterest(?:(?!snapchat)[\\s\\S]){0,150}(such|pinnwand|idee|inspiration)|(such|pinnwand|idee|inspiration)(?:(?!snapchat)[\\s\\S]){0,40}pinterest"],
   ["Pinterest: lange auffindbar, Traffic zur Website; Handel, Food, Einrichtung, Mode", "pinterest(?:(?!snapchat)[\\s\\S]){0,200}(langfrist|lange|monate|traffic|website|link|handel|rezept|einricht|mode|deko)"],
   ["Snapchat: Messenger für Jüngere, Fotos/Kurzvideos unter Freunden", "snapchat(?:(?!pinterest)[\\s\\S]){0,150}(jung|jugend|messenger|freund|chat)|(jung|jugend|messenger)(?:(?!pinterest)[\\s\\S]){0,40}snapchat"],
   ["Snapchat: Stories, AR-Linsen, Werbung; z. B. Ausbildungsmarketing", "snapchat(?:(?!pinterest)[\\s\\S]){0,200}(story|stories|\\bar\\b|ar-|augmented|linse|lens|filter|ausbildung|azubi)"],
   ["Beide für B2B selten erste Wahl / Wahl nach Zielgruppe begründen", "b2b|zielgrupp"]
  ], min: 3 },
 { m: "unt", t: "frei", q: "Erklären Sie den Begriff Social Media Relations und grenzen Sie ihn vom Influencer Marketing ab.", muster: [
   ["Beziehungspflege mit Meinungsmachern im Social Web (Blogger, Creator, Journalisten)", "beziehung|kontakt|pflege|dialog|vernetz"],
   ["Ziel: unbezahlte Berichterstattung / Earned Media / Glaubwürdigkeit", "earned|unbezahlt|nicht bezahlt|ohne bezahlung|freiwillig|bericht|empfehl|glaubwürd|vertrauen"],
   ["Grundsätze: Recherche, persönliche Ansprache, Mehrwert, Ehrlichkeit", "recherch|persönlich|mehrwert|ehrlich|transparen|exklusiv"],
   ["Influencer Marketing: bezahlte Kooperation / Gegenleistung", "(?<!un)bezahl|gegenleist|honorar|vergüt|vertrag|gekauft|sponsor"],
   ["Bei Gegenleistung Kennzeichnungspflicht als Werbung", "kennzeichn|werbekennz|als werbung|\\banzeige\\b"]
  ], min: 3 },
 { m: "unt", t: "frei", q: "Wie messen Sie den Erfolg einer Influencer-Kampagne? Ordnen Sie passende Kennzahlen den Zielen Bekanntheit, Interaktion und Verkauf zu.", muster: [
   ["Bekanntheit: Reichweite, Aufrufe/Views, Impressionen", "(bekannt|awareness)(?:(?!interakt|verkauf|engagement)[\\s\\S]){0,60}(reichweit|aufruf|view|impression)|(reichweit|aufruf|view|impression)(?:(?!interakt|verkauf|engagement)[\\s\\S]){0,40}(bekannt|awareness)"],
   ["Interaktion: Engagement-Rate, Kommentare, Shares, Saves", "(interakt|engagement)(?:(?!bekannt|verkauf)[\\s\\S]){0,60}(engagement|kommentar|share|geteilt|speicher|save|like)|(kommentar|share|geteilt|speicher|save|like)(?:(?!bekannt|verkauf)[\\s\\S]){0,40}(interakt|engagement)"],
   ["Verkauf: Rabattcodes, Tracking-Links/UTM, Conversions, Umsatz", "(verkauf|abverkauf|sales|kauf)(?:(?!bekannt|interakt)[\\s\\S]){0,60}(code|tracking|utm|link|conversion|umsatz|käufe|bestellung)|(code|tracking|utm|link|conversion|umsatz)(?:(?!bekannt|interakt)[\\s\\S]){0,40}(verkauf|sales)"],
   ["Ziele und Zielwerte vorab festlegen / Kosten in Relation (z. B. CPA, ROI)", "vorab|vorher|zielwert|\\bcpa\\b|\\broi\\b|kosten pro|budget"]
  ], min: 3 },
 { m: "unt", t: "frei", q: "Erläutern Sie, was Influencer-Marketing ist, und nennen Sie ein reales Beispiel einer Kooperation. Woran messen Sie den Erfolg?", muster: [
   ["Definition: Zusammenarbeit mit Personen, die in ihrer Community Vertrauen und Reichweite haben", "vertrauen|reichweit|community|meinungsführ|einfluss"],
   ["Arten: Nano/Mikro bis Makro/Mega – Passung wichtiger als Größe", "nano|mikro|makro|mega|passung|passt"],
   ["Reales Beispiel mit Marke, Person und Jahr", "\\b20[12]\\d\\b|kooperation mit|@"],
   ["Werbekennzeichnung als Pflicht", "kennzeichn|anzeige|werbung"],
   ["Erfolgsmessung: Engagement-Rate, Klicks/Rabattcode, Conversions – nicht nur Follower", "engagement|rabattcode|code|klick|conversion|utm"]
  ], min: 4 },
 { m: "plan", t: "frei", q: "Was versteht man unter Online Reputation Management? Nennen Sie vier konkrete Maßnahmen.", muster: [
   ["Ruf/Image eines Unternehmens im Netz beobachten, pflegen, schützen", "\\bruf\\b|image|ansehen|reputation(?:(?!lösch)[\\s\\S]){0,40}(beobacht|pfleg|schütz|steuer|aufbau|verbesser)|(beobacht|pfleg|schütz|steuer)[\\s\\S]{0,40}reputation"],
   ["Monitoring von Erwähnungen und Bewertungen (Alerts, Tools)", "monitor|beobacht|alert|listening"],
   ["Auf Bewertungen und Kritik zeitnah und sachlich antworten", "(?<!ver)antwort|reagier|stellung"],
   ["Zufriedene Kunden um echte Bewertungen bitten", "bitten|aufforder|zufriedene"],
   ["Eigene Inhalte stärken (Website, Profile, Fachbeiträge)", "eigene[nr]? (inhalt|website|profil|kanäl|beitr)|content|fachbeitr|\\bseo\\b|(website|profil)[\\s\\S]{0,30}(pfleg|stärk|aktuell|ausbau|optimier)"],
   ["Krisenvorsorge, rechtswidrige Inhalte melden", "krise|rechtswidrig|unwahr|(portal|plattform|google)[\\s\\S]{0,30}meld|meld(en|ung)[\\s\\S]{0,30}(portal|plattform|google)"]
  ], min: 4 },
 { m: "plan", t: "frei", q: "Ein Restaurant erhält auf Google eine Ein-Stern-Bewertung: „Unfreundliches Personal, kalte Pizza.“ Formulieren Sie eine Antwort und begründen Sie Ihr Vorgehen.", muster: [
   ["Dank für das Feedback, Person ernst nehmen", "\\bdank|bedank"],
   ["Bedauern / Entschuldigung, Fehler einräumen", "entschuldig|bedauer|leid|fehler"],
   ["Konkret auf Personal und Pizza eingehen", "personal|pizza|kalt|unfreundlich"],
   ["Lösung oder Einladung anbieten, Kontakt ins Private verlagern", "lösung|einlad|gutschein|kontakt|melden sie sich (gern|bei|direkt|unter|per)|meldet euch|telefon|mail|persönlich|privat"],
   ["Begründung: Mitlesende sehen den Umgang mit Kritik; nicht löschen", "mitles|öffentlich|andere[nr]? (gäste|kunden|leser|nutzer)[\\s\\S]{0,30}(sehen|lesen|zeig|wirk)|potenziell|künftig|vertrauen|image|nicht lösch|professionell"]
  ], min: 3 },
 { m: "plan", t: "frei", q: "Erläutern Sie den Begriff Shitstorm und nennen Sie ein reales Beispiel. Was hat das Unternehmen richtig oder falsch gemacht?", muster: [
   ["Definition: Welle massenhafter, oft emotionaler Kritik in kurzer Zeit", "welle|massenhaft|empör|viele (kritische|negative)|kritik"],
   ["Abgrenzung zur sachlichen Einzelkritik", "sachlich|einzel|berechtigt"],
   ["Reales Beispiel mit Unternehmen und Jahr", "\\b(19|20)\\d\\d\\b"],
   ["Bewertung der Reaktion (schnell, ehrlich, Lösung – oder löschen/ignorieren)", "schnell|entschuldig|lösung|gelöscht|ignorier|streisand"],
   ["Lehre für die eigene Praxis (Krisenplan, Monitoring)", "krisenplan|monitoring|vorbereit|lernen"]
  ], min: 4 }
];
