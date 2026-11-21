// Lektionen „Plattformen & Tools“ (Teil 3) – Zusammenfassung von smm2.pdf, S. 237–327 (Vorlesungen „Social Network“ und „TikTok & Reels“) und smm1.pdf, S. 63–64 („Tools für Social Media Einsteiger“), einfache Sprache.
export const L_PLATT3 = [
 { id: "hashtags", titel: "Hashtags richtig einsetzen", min: 2, quelle: "smm2.pdf, S. 239–241", folien: [
  { k: "intro", h: "Wozu brauchst du 2026 noch Hashtags?", b: "Ein **Hashtag** ist ein Schlagwort mit Raute davor, zum Beispiel #Kaffee. Ziel: Du kannst für jede Plattform die passende Zahl an Hashtags wählen." },
  { k: "text", h: "Früher Reichweiten-Trick, heute Einordnung", b: "Früher waren Hashtags ein Reichweiten-Hack, also ein schneller Trick. Heute geben sie **Einordnung und Kontext** (Zusammenhang). So zeigt der Hashtag, worum es im Beitrag geht." },
  { k: "liste", h: "2 Aufgaben: einordnen und gefunden werden", l: [
   "**Einordnen:** Der Algorithmus (Auswahl-Regeln) erkennt passende Zuschauer.",
   "**Gefunden werden:** Auf TikTok und LinkedIn folgen Nutzer Themen-Hashtags.",
   "**Bei Bohnenwerk:** #kaffeerösten ordnet das Röst-Video auf TikTok ein."
  ] },
  { k: "liste", h: "Hashtags je Plattform: TikTok hoch, Facebook kaum", l: [
   "**TikTok (hoch):** 3–5 genaue, für Kategorie und Suche",
   "**LinkedIn (mittel):** 2–3, für Business-Themen",
   "**Instagram (gering):** höchstens 3–5, für Struktur, Nischen (kleine Themen)",
   "**Facebook, YouTube (kaum):** Titel und Beschreibung zählen mehr"
  ] },
  { k: "merke", h: "Hashtags ordnen ein, Reichweite bringen sie kaum", b: "Suchbegriffe gehören 2026 vor allem in Text, Untertitel und Bildbeschreibung.", esel: "Hashtag-Wert sinkt: TikTok, LinkedIn, Instagram, Facebook – „Tante Lisa isst Fisch.“" },
  { k: "check", q: "Auf welcher Plattform haben Hashtags 2026 laut Vorlesung die höchste Bedeutung?", a: ["Auf TikTok, für Kategorie und Suche", "Auf Facebook, für mehr Reichweite", "Auf YouTube, statt eines guten Titels", "Auf Instagram, mit bis zu 30 Hashtags"], c: 0, e: "TikTok hat die Relevanz „hoch“. Dort helfen 3–5 genaue Hashtags bei Kategorie und Suche. Auf Facebook und YouTube zählen Titel und Beschreibung mehr." }
 ]},
 { id: "automatisierung", titel: "KI-Tools & gute Prompts", min: 4, quelle: "smm2.pdf, S. 242–273", folien: [
  { k: "intro", h: "Welche KI hilft dir bei welcher Aufgabe?", b: "**KI** (Künstliche Intelligenz) erkennt Muster in großen Datenmengen. Gute Ergebnisse brauchen einen guten **Prompt** (Auftrag an die KI). Ziel: Du kannst einen Prompt aus 4 Bausteinen schreiben und KI-Inhalte kennzeichnen." },
  { k: "liste", h: "So lernt KI mit jeder Nutzung", l: [
   "**1 Daten:** Texte, Bilder und Nutzerverhalten",
   "**2 Muster:** Zusammenhänge und Regeln erkennen",
   "**3 Ergebnis:** schreiben, empfehlen, entscheiden",
   "**4 Feedback** (Rückmeldung) verbessert das nächste Ergebnis."
  ] },
  { k: "liste", h: "Für jede Aufgabe das passende KI-Werkzeug", l: [
   "**Text:** ChatGPT, Claude, Gemini, Microsoft Copilot",
   "**Bild:** Adobe Firefly, Canva Magic Studio, Midjourney",
   "**Video und Werbung:** Higgsfield, Runway, CapCut, AdCreative.ai",
   "**Recherche und Planung:** Perplexity, Deep Research, Hootsuite, Metricool"
  ] },
  { k: "text", h: "ChatGPT, Gemini, Claude: andere Stärken", b: "**ChatGPT** (OpenAI) ist vielseitig: Ideen, Captions (Bildtexte) und Bilder.\n**Gemini** (Google) nutzt die Google-Suche und macht Videos.\n**Claude** (Anthropic) kann lange Texte und Analysen, keine Fotos.\nTeste denselben Prompt überall." },
  { k: "liste", h: "Prompt: 4 Bausteine", l: [
   "**Rolle:** „Du bist Social Media Manager bei Bohnenwerk.“",
   "**Aufgabe:** „Schreibe 3 Instagram-Captions.“",
   "**Kontext:** „Kaffeerösterei, neue Herbst-Röstung, Zielgruppe Studierende.“",
   "**Format:** „Höchstens 150 Zeichen, lockerer Ton, mit Call-to-Action (Handlungsaufruf).“"
  ] },
  { k: "liste", h: "Seit 2. August 2026: KI-Inhalte kennzeichnen", l: [
   "**Gesetz:** Artikel 50, EU AI Act (KI-Gesetz)",
   "**Pflicht:** Chatbots, ungeprüfte KI-Texte zu öffentlichen Themen",
   "**Pflicht:** Deepfakes (echt wirkende Fälschungen)",
   "**Meist frei:** Werbetexte, Symbolbilder, von Menschen geprüfte Texte"
  ] },
  { k: "merke", h: "Klarer Prompt, klares Feedback, immer prüfen", b: "Prüfe KI-Ergebnisse immer und gib keine Kunden- oder Personendaten in kostenlose KI-Tools ein.", esel: "Rolle, Aufgabe, Kontext, Format: „Rote Autos kommen flott.“" },
  { k: "check", q: "Welche vier Bausteine machen laut Vorlesung einen guten Prompt aus?", a: ["Rolle, Aufgabe, Kontext und Format", "Daten, Muster, Ergebnis und Feedback", "Ziel, Budget, Kanal und Zeitpunkt", "Hook, Kontext, Inhalt und Call-to-Action"], c: 0, e: "Der Prompt nennt die Rolle der KI und die Aufgabe. Dazu kommen Kontext und Format des Ergebnisses. Daten bis Feedback beschreibt dagegen, wie KI lernt." }
 ]},
 { id: "goldene-regeln", titel: "Die 10 goldenen Regeln & nützliche Tools", min: 3, quelle: "smm2.pdf, S. 274–302; smm1.pdf, S. 63–64", folien: [
  { k: "intro", h: "Welche 10 Regeln machen gute Arbeit aus?", b: "Der Dozent fasst gute Arbeit im Social Network (soziales Netzwerk) in **10 goldenen Regeln** zusammen. Ziel: Du kannst die Regeln nennen und mit Praxis-Tipps umsetzen." },
  { k: "liste", h: "Regeln 1 bis 4: Ziel, Krise, Mehrwert, Werbung", l: [
   "**1 Ziele:** Zielgruppe kennen, SMART-Ziele (klar, messbar) setzen",
   "**2 Krisenplan:** Notfallplan, Freigabe, Musterantworten",
   "**3 Mehrwert:** informieren, unterhalten oder Probleme lösen",
   "**4 Keine plumpe Werbung:** höchstens jeder 5. Beitrag wirbt direkt"
  ] },
  { k: "liste", h: "Regeln 5 bis 7: Dialog, Tempo, Qualität", l: [
   "**5 Echt und nahbar:** Dialog statt Monolog (Gespräch statt Vortrag)",
   "**6 Wie eine Hotline:** Antworte innerhalb weniger Stunden.",
   "**7 Qualität vor Menge:** Schwache Beiträge senken die nächste Reichweite."
  ] },
  { k: "liste", h: "Regeln 8 bis 10: lokal, Mix, Anzeigen", l: [
   "**8 Lokalen Einfluss nutzen:** Partner, Creator (Inhalte-Macher) und Kunden",
   "**9 In den Marketing-Mix einbinden:** Website, Newsletter, Events, Werbung",
   "**10 Werbeanzeigen schalten:** Teste klein, bewirb die besten Beiträge."
  ] },
  { k: "liste", h: "Tools für Grafik, Musik, Schnitt und Analyse", l: [
   "**Gestaltung:** Canva. **Musik:** audiohub.de, artlist.io",
   "**Videoschnitt:** InShot, für Profis DaVinci Resolve Studio",
   "**Dateien teilen:** Dropbox oder Google Drive",
   "**Analyse:** NapoleonCat. **Handy:** Facebook Mobile Studio"
  ] },
  { k: "liste", h: "Weiterlernen: Blogs, Kurse und Hilfeseiten", l: [
   "**Blogs:** thomashutter.com, allfacebook.de, onlinemarketing.de, t3n.de",
   "**Facebook Blueprint:** kostenlose Kurse zu Facebook-Werbung",
   "**TikTok-Hilfe:** Konto erstellen, Profil einrichten",
   "**X (früher Twitter):** Werbe-Leitfaden für Unternehmen"
  ] },
  { k: "merke", h: "Erst Ziel, dann Mehrwert, dann Dialog", b: "Erst Ziel und Zielgruppe, dann Inhalte mit Mehrwert, Dialog statt Werbung und schnelle Antworten." },
  { k: "check", q: "Was ist laut den 10 goldenen Regeln eine gute Faustregel für Werbung im Feed?", a: ["Höchstens jeder 5. Beitrag ist direkte Werbung", "Jeder 2. Beitrag sollte direkt etwas verkaufen", "Werbung gehört nur in bezahlte Anzeigen", "Jeder Beitrag sollte ein Angebot enthalten"], c: 0, e: "Regel 4 sagt: keine plumpe Werbung. Social Media ist ein Dialog. Reine Verkaufsbeiträge bekommen wenig Reichweite. Darum ist höchstens jeder 5. Beitrag direkte Werbung." }
 ]},
 { id: "insta-tiktok", titel: "TikTok & Reels: Kurzvideos für die Gen Z", min: 4, quelle: "smm2.pdf, S. 304–325", folien: [
  { k: "intro", h: "Wie erreichst du die Gen Z mit Kurzvideos?", b: "Die **Gen Z** (Generation Z) ist 1996 bis 2010 geboren. Auf TikTok sind noch wenige lokale Firmen aktiv. Ziel: Du kannst ein 30-Sekunden-TikTok aufbauen und den Algorithmus (Auswahl-Regeln) erklären." },
  { k: "liste", h: "4 Vorteile von TikTok", l: [
   "**Organische Reichweite** (ohne Werbung): nach Interesse, nicht Followerzahl",
   "**Inhalt zählt:** Ein starkes Video schlägt großes Budget.",
   "**Mitmachen:** Trends, Sounds, Challenges (Mitmach-Aufgaben)",
   "**Echt:** echte Menschen, einfache Videos"
  ] },
  { k: "liste", h: "Der Algorithmus testet jedes Video", l: [
   "**1 Hochladen:** Video mit Beschreibung, Sound, Hashtags",
   "**2 Testgruppe:** zuerst wenige im „Für dich“-Feed",
   "**3 Signale:** Wiedergabedauer, Shares (Teilen, am stärksten), Kommentare, Speichern",
   "**4 Ausweitung:** Gute Werte bringen mehr Zuschauer."
  ] },
  { k: "liste", h: "Ein 30-Sekunden-TikTok in 4 Phasen", l: [
   "**Hook** (Aufhänger, 0–2 Sekunden): Bohnenwerk fragt: „Warum knackt Kaffee?“",
   "**Kontext (3–8 Sekunden):** Worum geht es?",
   "**Inhalt (8–25 Sekunden):** Zeig den Nutzen.",
   "**Call-to-Action** (Aufruf, 25–30 Sekunden): „Speichern für später“"
  ] },
  { k: "liste", h: "TikTok, Reels und Shorts verglichen", l: [
   "**TikTok:** optimal 15–60 Sekunden, schnellste organische Reichweite",
   "**Reels** (Instagram): unter 90 Sekunden, mit Shopping und DMs (Direktnachrichten)",
   "**Shorts** (YouTube-Kurzvideos): 15–60 Sekunden, Einstieg in den Kanal"
  ] },
  { k: "text", h: "TikTok für Firmen: Shop, Spark Ads, Creator", b: "**TikTok Shop:** Du verkaufst direkt im Video.\n**Spark Ads:** Gute Videos von dir oder Creatorn (Inhalte-Machern) werden Anzeigen.\n**TikTok One:** Dort findest du Creator.\nTeste 4 Wochen ohne Werbung." },
  { k: "merke", h: "Auf TikTok entscheiden Zuschauer, nicht Follower", b: "Wiedergabe und Shares entscheiden über die Reichweite, ein starker Hook hält die Zuschauer.", esel: "Hook, Kontext, Inhalt, Call-to-Action: „Heute kocht Ida Cappuccino.“" },
  { k: "check", q: "Wovon hängt die Reichweite eines TikTok-Videos laut Vorlesung vor allem ab?", a: ["Vom Verhalten der Zuschauer, vor allem Wiedergabe und Shares", "Vor allem von der Zahl der Follower des Accounts", "Vor allem von der Zahl der Hashtags unter dem Video", "Vor allem vom Werbebudget, das hinter dem Video steht"], c: 0, e: "TikTok zeigt jedes Video erst einer kleinen Testgruppe. Wird es bis zum Ende geschaut und geteilt, bekommt es mehr Reichweite. Die Followerzahl spielt eine kleinere Rolle." }
 ]}
];
