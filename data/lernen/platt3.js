// Lektionen „Plattformen & Tools“ (Teil 3) – Zusammenfassung von smm2.pdf, S. 237–327 (Vorlesungen „Social Network“ und „TikTok & Reels“) und smm1.pdf, S. 63–64 („Tools für Social Media Einsteiger“), einfache Sprache.
export const L_PLATT3 = [
 { id: "hashtags", titel: "Hashtags richtig einsetzen", min: 3, quelle: "smm2.pdf, S. 239–241", folien: [
  { k: "intro", h: "Worum es geht", b: "Ein **Hashtag** ist ein Schlagwort mit Raute davor, zum Beispiel #Kuchen. Früher galten Hashtags als Trick für mehr Reichweite. Heute haben sie eine andere Aufgabe." },
  { k: "text", h: "Früher und heute", b: "Früher: Hashtags waren ein Reichweiten-Hack. Hack heißt hier: ein schneller Trick.\nHeute: Hashtags geben **Einordnung und Kontext**. Hashtags zeigen, worum es im Beitrag geht." },
  { k: "liste", h: "Wozu Hashtags heute dienen", l: [
   "**Inhalte einordnen:** Der Algorithmus erkennt, worum es geht. Er weiß dann, wem er den Beitrag zeigen soll.",
   "**Gefunden werden:** Nutzer suchen Themen-Hashtags und folgen ihnen. Das passiert vor allem auf TikTok und LinkedIn."
  ] },
  { k: "liste", h: "Wie wichtig Hashtags 2026 je Plattform sind", l: [
   "**TikTok – hoch:** wichtig für Kategorie und Suche. Nutze 3–5 genaue Hashtags.",
   "**LinkedIn – mittel:** wichtig für Business-Themen und Follow-Hashtags. Nutze 2–3 pro Beitrag.",
   "**Instagram – gering:** kaum Wirkung auf Reichweite. Hashtags helfen bei Struktur und Nischen. Höchstens 3–5.",
   "**Facebook und YouTube – kaum:** Beschreibung und Titel sind wichtiger als Hashtags."
  ] },
  { k: "merke", h: "Das Wichtigste", b: "Hashtags ordnen ein, sie bringen keine Reichweite mehr. Suchbegriffe gehören 2026 vor allem in Text, Untertitel und Bildbeschreibung." },
  { k: "check", q: "Auf welcher Plattform haben Hashtags 2026 laut Vorlesung die höchste Bedeutung?", a: ["Auf TikTok, für Kategorie und Suche", "Auf Facebook, für mehr Reichweite", "Auf YouTube, statt eines guten Titels", "Auf Instagram, mit bis zu 30 Hashtags"], c: 0, e: "TikTok hat die Relevanz „hoch“. Dort helfen 3–5 genaue Hashtags bei Kategorie und Suche. Auf Facebook und YouTube zählen Titel und Beschreibung mehr." }
 ]},
 { id: "automatisierung", titel: "KI-Tools & gute Prompts", min: 5, quelle: "smm2.pdf, S. 242–273", folien: [
  { k: "intro", h: "Was ist Künstliche Intelligenz?", b: "**KI** heißt Künstliche Intelligenz. Eine Maschine analysiert mit Algorithmen und Regeln große Datenmengen. Man nennt sie „Big Data“. Die KI erkennt darin Muster. Auf dieser Grundlage trifft sie Entscheidungen oder erzeugt neue Inhalte." },
  { k: "liste", h: "So lernt KI – mit jeder Nutzung", l: [
   "**1 Daten:** Texte, Bilder und Nutzerverhalten sind die Grundlage.",
   "**2 Muster:** Die KI erkennt Zusammenhänge und Regeln.",
   "**3 Ergebnis:** Die KI schreibt, empfiehlt oder entscheidet.",
   "**4 Feedback:** Deine Rückmeldung verbessert das nächste Ergebnis."
  ] },
  { k: "liste", h: "Für jede Aufgabe das passende Werkzeug", l: [
   "**Text und Ideen:** ChatGPT, Claude, Gemini, Microsoft Copilot",
   "**Bild und Grafik:** Adobe Firefly, Canva Magic Studio, Midjourney",
   "**Video:** Higgsfield, Runway, CapCut",
   "**Werbung:** AdCreative.ai, Meta Advantage+",
   "**Recherche:** Perplexity und die Deep-Research-Funktionen in ChatGPT und Gemini",
   "**Planung und Analyse:** KI-Assistenten in Hootsuite, Later oder Metricool"
  ] },
  { k: "liste", h: "Gute Prompts: Rolle, Aufgabe, Kontext, Format", l: [
   "Ein **Prompt** ist dein Auftrag an die KI. Er hat 4 Bausteine.",
   "**Rolle:** Wer soll die KI sein? „Du bist Social Media Manager eines Cafés.“",
   "**Aufgabe:** Was genau soll entstehen? „Schreibe 3 Instagram-Captions.“",
   "**Kontext:** Für wen und worum? „Neuer Herbstkuchen, Zielgruppe Studierende.“",
   "**Format:** Wie soll das Ergebnis aussehen? „Höchstens 150 Zeichen, lockerer Ton, mit Call-to-Action.“"
  ] },
  { k: "text", h: "ChatGPT, Gemini und Claude im Vergleich", b: "Ähnlicher Preis, andere Stärken:\n**ChatGPT** (OpenAI) ist vielseitig. Ideal für Ideen, Captions und Bilder.\n**Gemini** (Google) nutzt Google-Dienste und die aktuelle Suche. Es macht auch Videos mit Veo.\n**Claude** (Anthropic) ist stark bei langen Texten und Analysen. Es erzeugt keine Fotos.\nTipp: Teste denselben Prompt in allen 3 Tools." },
  { k: "liste", h: "KI-Inhalte kennzeichnen", l: [
   "Seit 2. August 2026 gilt die Kennzeichnungspflicht nach Art. 50 AI Act. Das ist das KI-Gesetz der EU.",
   "**Muss erkennbar sein:** Chatbots. Nutzer müssen wissen, dass sie mit einer KI sprechen.",
   "**Muss erkennbar sein:** Deepfakes, also echt wirkende Bilder, Videos und Stimmen.",
   "**Muss erkennbar sein:** KI-Texte zu Themen von öffentlichem Interesse ohne redaktionelle Prüfung.",
   "**Meist keine Pflicht:** reine Werbetexte, erkennbar künstliche Symbolbilder, Texte, die ein Mensch geprüft hat.",
   "Instagram, TikTok und YouTube bieten eigene KI-Labels (Quellen: DQS 2026, TÜV Akademie 2026)."
  ] },
  { k: "merke", h: "Das Wichtigste", b: "Je klarer dein Prompt und dein Feedback, desto besser das Ergebnis. Prüfe KI-Ergebnisse immer. Gib keine Kunden- oder Personendaten in kostenlose KI-Tools ein." },
  { k: "check", q: "Welche vier Bausteine machen laut Vorlesung einen guten Prompt aus?", a: ["Rolle, Aufgabe, Kontext und Format", "Daten, Muster, Ergebnis und Feedback", "Ziel, Budget, Kanal und Zeitpunkt", "Hook, Kontext, Inhalt und Call-to-Action"], c: 0, e: "Der Prompt nennt die Rolle der KI und die Aufgabe. Dazu kommen Kontext und Format des Ergebnisses. Daten bis Feedback beschreibt dagegen, wie KI lernt." }
 ]},
 { id: "goldene-regeln", titel: "Die 10 goldenen Regeln & nützliche Tools", min: 4, quelle: "smm2.pdf, S. 274–302; smm1.pdf, S. 63–64", folien: [
  { k: "intro", h: "Worum es geht", b: "Der Dozent fasst gute Arbeit im Social Network in **10 goldenen Regeln** zusammen. Zu jeder Regel gibt es einen Praxis-Tipp. Dazu kommen Tools und Links für deinen Alltag." },
  { k: "liste", h: "Regeln 1 bis 5", l: [
   "**1 Ziele definieren:** Herausforderungen erkennen, Zielgruppe analysieren. Ohne Ziel hast du keinen Maßstab.",
   "**2 Krisenprozess festlegen:** Wer reagiert, wer gibt frei, welche Antwort liegt bereit? Im Ernstfall zählt jede Stunde.",
   "**3 Mehrwert schaffen:** Jeder Beitrag informiert, unterhält oder löst ein Problem der Zielgruppe.",
   "**4 Keine plumpe Werbung:** Social Media ist ein Dialog. Reine Verkaufsbeiträge bekommen wenig Reichweite und Vertrauen.",
   "**5 Authentisch und nahbar bleiben:** Dialog statt Monolog. Sprich mit deiner Community auf Augenhöhe."
  ] },
  { k: "liste", h: "Regeln 6 bis 10", l: [
   "**6 Profile wie eine Hotline behandeln:** Antworte schnell. Offene Fragen wirken wie ein Anrufbeantworter.",
   "**7 Qualität vor Quantität:** Lieber wenige gute Beiträge. Schwache Beiträge senken die Reichweite der nächsten.",
   "**8 Lokalen Einfluss nutzen:** Kooperationen mit lokalen Partnern, Creatorn und Kunden schaffen Vertrauen und Reichweite.",
   "**9 Social Media in den Marketing-Mix einbinden:** Es wirkt am besten mit Website, Newsletter, Events und Werbung.",
   "**10 Werbeanzeigen schalten:** Organische Reichweite ist begrenzt. Anzeigen bringen gute Inhalte zur richtigen Zielgruppe."
  ] },
  { k: "beispiel", h: "Praxis-Tipps aus der Vorlesung", b: "Formuliere ein SMART-Ziel, zum Beispiel „500 neue Follower bis Quartalsende“. Lege einen Notfallplan mit Kontaktliste, Freigabeweg und Musterantworten an. Höchstens jeder 5. Beitrag ist direkte Werbung. Antworte innerhalb weniger Stunden. Teste Anzeigen mit kleinem Budget. Bewirb deine besten organischen Beiträge." },
  { k: "liste", h: "Nützliche Tools aus der Praxis", l: [
   "**Gestaltung:** Canva für Grafiken und Beiträge",
   "**Lizenzfreie Musik:** audiohub.de und artlist.io",
   "**Videoschnitt:** InShot für schnellen Content, DaVinci Resolve Studio für Profis",
   "**Dateien teilen:** Dropbox oder Google Drive statt privater Fotogalerie",
   "**Zielgruppenanalyse:** NapoleonCat. Für Facebook-Inhalte am Handy: Facebook Mobile Studio"
  ] },
  { k: "liste", h: "Weiterlernen und auf dem Laufenden bleiben", l: [
   "**Blogs:** thomashutter.com, allfacebook.de (AllSocial), onlinemarketing.de, Hootsuite-Blog und t3n.de",
   "**Facebook Blueprint:** kostenlose Online-Kurse zu Facebook-Werbung",
   "**TikTok-Hilfe:** Anleitungen zum Konto erstellen und Profil einrichten",
   "**X (früher Twitter):** Grundlagen und Werbe-Leitfaden für Unternehmen"
  ] },
  { k: "merke", h: "Das Wichtigste", b: "Erst Ziel und Zielgruppe, dann Inhalte mit Mehrwert. Führe Dialoge statt Werbung, antworte schnell und setze auf Qualität." },
  { k: "check", q: "Was ist laut den 10 goldenen Regeln eine gute Faustregel für Werbung im Feed?", a: ["Höchstens jeder 5. Beitrag ist direkte Werbung", "Jeder 2. Beitrag sollte direkt etwas verkaufen", "Werbung gehört nur in bezahlte Anzeigen", "Jeder Beitrag sollte ein Angebot enthalten"], c: 0, e: "Regel 4 sagt: keine plumpe Werbung. Social Media ist ein Dialog. Reine Verkaufsbeiträge bekommen wenig Reichweite. Darum ist höchstens jeder 5. Beitrag direkte Werbung." }
 ]},
 { id: "insta-tiktok", titel: "TikTok & Reels: Kurzvideos für die Gen Z", min: 5, quelle: "smm2.pdf, S. 304–325", folien: [
  { k: "intro", h: "Die Generation Z", b: "Die **Gen Z** ist zwischen 1996 und 2010 geboren. In Deutschland sind das rund 12 Mio. Menschen, also 14,6 % (Quelle: doofinder.com, 2026). Die Gen Z schätzt Authentizität, Ehrlichkeit und Individualität. Die Gen Z kauft oft mobil. Und sie vertraut Freunden, Familie und Influencern mehr als Werbung." },
  { k: "text", h: "TikTok in Zahlen", b: "TikTok wächst in Deutschland schneller als jedes andere Netzwerk. Es hat 28,9 Mio. monatlich aktive Nutzer (kontor4.de, erstes Halbjahr 2026). Ein Nutzer verbringt im Schnitt etwa 95 Minuten pro Tag in der App (DataReportal/Similarweb, Oktober 2025). Die meisten Videos sind kürzer als 1 Minute. Noch sind wenige lokale Unternehmen aktiv. Das ist deine Chance." },
  { k: "liste", h: "Vorteile von TikTok", l: [
   "**Hohe organische Reichweite:** Der Algorithmus zeigt Videos nach Interesse, nicht nach Followerzahl.",
   "**Fokus auf den Content:** Ein starkes Video zählt mehr als ein großes Budget.",
   "**Innovatives Marketing:** Trends, Sounds und Challenges laden zum Mitmachen ein.",
   "**Kreativität und Authentizität:** Echte Menschen und ungeschliffene Videos wirken glaubwürdig."
  ] },
  { k: "liste", h: "So funktioniert der Algorithmus", l: [
   "**1 Upload:** Du veröffentlichst das Video mit Beschreibung, Sound und Hashtags.",
   "**2 Testgruppe:** Zuerst sieht es eine kleine Gruppe im „Für dich“-Feed.",
   "**3 Signale:** TikTok misst, wie lange man schaut und ob man teilt, kommentiert oder speichert.",
   "**4 Ausweitung:** Bei guten Werten sieht es eine größere Gruppe. Das wiederholt sich.",
   "Shares sind das stärkste Signal. Die Followerzahl zählt weniger als bei Instagram."
  ] },
  { k: "liste", h: "Aufbau eines TikToks: 30 Sekunden in 4 Phasen", l: [
   "**Hook (0–2 Sek.):** Eine Frage oder Behauptung macht neugierig. „3 Fehler, die fast alle machen“",
   "**Kontext (3–8 Sek.):** Worum geht es und warum ist es wichtig? „Fehler 1 kostet dich jeden Tag Zeit.“",
   "**Inhalt (8–25 Sek.):** Der Mehrwert. Zeigen statt erzählen, Schritt für Schritt vorführen.",
   "**Call-to-Action (25–30 Sek.):** Was soll der Zuschauer tun? „Speichern für später“ oder „Folgen für Teil 2“"
  ] },
  { k: "liste", h: "Sechs Regeln für erfolgreiche TikToks", l: [
   "**Hook in 2 Sekunden:** Die ersten Sekunden entscheiden, ob jemand weiterschaut.",
   "**Inspirieren lassen:** Beobachte andere Accounts und das Creative Center.",
   "**Mehrwert liefern:** Löse Probleme, gib Tipps oder unterhalte.",
   "**Rhythmus halten:** Lieber 3–5 einfache Videos pro Woche als ein perfektes.",
   "**Untertitel nutzen:** Viele schauen ohne Ton.",
   "**Community fordern:** Challenges, Duette und Antworten per Video. Ein Duett ist ein Video neben einem anderen Video."
  ] },
  { k: "text", h: "TikTok für Unternehmen 2026", b: "**TikTok Shop:** Seit 2025 verkaufst du in Deutschland direkt im Video und Live-Stream.\n**Spark Ads:** Gut laufende eigene oder Creator-Videos werden zur Anzeige.\n**Creator:** Du findest sie über TikTok One. Kennzeichne Werbung immer.\n**Suche:** Viele Junge suchen hier nach Tipps.\nEinstieg: 4 Wochen organisch testen, dann die besten Videos bewerben." },
  { k: "liste", h: "TikTok, Reels und Shorts im Vergleich", l: [
   "**TikTok:** bis 60 Min., optimal 15–60 Sek. Stärke: schnellste organische Reichweite, Trends und Sounds.",
   "**Instagram Reels:** bis 3 Min., optimal unter 90 Sek. Stärke: Community pflegen, Shopping und DMs.",
   "**YouTube Shorts:** bis 3 Min., optimal 15–60 Sek. Stärke: Einstieg in den Kanal, Videos werden lange gefunden.",
   "Fazit: Ein gutes Video funktioniert auf allen 3 Plattformen. Passe Länge und Ton an.",
   "Quelle: skill-sprinters.de (2026); Instagram Creators (2025)"
  ] },
  { k: "check", q: "Wovon hängt die Reichweite eines TikTok-Videos laut Vorlesung vor allem ab?", a: ["Vom Verhalten der Zuschauer, vor allem Wiedergabe und Shares", "Vor allem von der Zahl der Follower des Accounts", "Vor allem von der Zahl der Hashtags unter dem Video", "Vor allem vom Werbebudget, das hinter dem Video steht"], c: 0, e: "TikTok zeigt jedes Video erst einer kleinen Testgruppe. Wird es bis zum Ende geschaut und geteilt, bekommt es mehr Reichweite. Die Followerzahl spielt eine kleinere Rolle." }
 ]}
];
