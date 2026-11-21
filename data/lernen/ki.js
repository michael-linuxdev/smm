// Lektionen „KI in der Redaktion“ (Zusatzwissen) – Zusammenfassung von smm1.pdf, S. 1–30 (Studienbrief „Zusatz: KI in der Onlineredaktion“) und S. 31–62 (Workshop „Von Recherche zu Ergebnis“), einfache Sprache.
export const L_KI = [
 { id: "ki-grundlagen", titel: "Was ist Künstliche Intelligenz?", min: 3, quelle: "smm1.pdf, S. 4–8", folien: [
  { k: "intro", h: "Was kann KI – und was kann sie nicht?", b: "Wer KI nutzt, muss ihre Grenzen kennen. Ziel: Du kannst KI definieren, schwache und starke KI unterscheiden und Meilensteine nennen." },
  { k: "text", h: "KI leistet, was sonst Intelligenz braucht", b: "**Künstliche Intelligenz (KI):** Maschinen erbringen Leistungen, die sonst menschliche Intelligenz brauchen. Dazu gehören Lernen, Sprachverständnis, Bilderkennung und Entscheiden aus Daten." },
  { k: "liste", h: "Schwache KI gibt es, starke KI noch nicht", l: [
   "**Schwache KI:** auf Aufgaben spezialisiert, ohne Bewusstsein",
   "Beispiele: ChatGPT, Gemini, Alexa, Google Translate",
   "**Starke KI:** so klug wie ein Mensch",
   "Starke KI gibt es bis heute nicht."
  ]},
  { k: "liste", h: "Von Turing 1950 bis Deep Learning 2012", l: [
   "**1950:** Turing-Test (Denkt die Maschine wie ein Mensch?)",
   "**1956:** Dartmouth-Konferenz: Geburtsstunde der KI",
   "**1974–1980:** erster **KI-Winter** (kaum Fortschritt); 1980er: **Expertensysteme** (feste Regeln)",
   "**2012:** AlexNet startet **Deep Learning** (Lernen aus Massendaten)."
  ]},
  { k: "text", h: "Seit den 2020ern ist KI im Alltag", b: "KI empfiehlt Beiträge in Social Media, schreibt Gesprochenes mit und lenkt selbstfahrende Autos. Offen sind Datenschutz, Vorurteile der KI und Jobs. Die EU verlangt Offenheit." },
  { k: "text", h: "Zukunft: erklärbar, multimodal, agentisch", b: "Die Forschung will KI, deren Entscheidungen du nachvollziehen kannst. **Multimodale Modelle** verbinden Text, Bild und Audio. **Agentische Systeme** steuern Aufgaben über längere Zeit selbst." },
  { k: "merke", h: "Alle heutigen KI-Werkzeuge sind schwache KI", b: "Heutige KI kann einzelne Aufgaben sehr gut. Die Welt versteht sie aber nicht wie ein Mensch." },
  { k: "check", q: "Zu welcher Art von KI gehört ein Textassistent wie ChatGPT laut Studienbrief?", a: ["Zur schwachen KI, denn er ist auf bestimmte Aufgaben spezialisiert", "Zur starken KI, denn er löst alle geistigen Aufgaben wie ein Mensch", "Zu den Expertensystemen, denn er arbeitet nur mit festen Regeln", "Zur starken KI, denn er besitzt ein eigenes Bewusstsein"], c: 0, e: "ChatGPT, Gemini oder Alexa sind schwache KI. Diese Systeme erledigen bestimmte Aufgaben gut. Ein allgemeines Verständnis oder Bewusstsein haben sie nicht." }
 ]},
 { id: "ki-redaktion", titel: "KI in der Onlineredaktion: Nutzen und Trends", min: 3, quelle: "smm1.pdf, S. 9–12", folien: [
  { k: "intro", h: "Wie hilft KI deiner Redaktion?", b: "KI übernimmt Routine: recherchieren, zusammenfassen, Schlagworte vergeben. Du gewinnst Zeit. Ziel: Du kannst 6 KI-Trends nennen und Beiträge auffindbar machen." },
  { k: "liste", h: "Trends 1–3: Texte, Empfehlungen, Moderation", l: [
   "**NLG** (Natural Language Generation): Die KI schreibt Texte aus Daten.",
   "**Personalisierung:** Die KI schlägt jedem Leser passende Artikel vor.",
   "**Content-Moderation** (Inhalte prüfen): KI und Menschen filtern Falschmeldungen."
  ]},
  { k: "liste", h: "Trends 4–6: Erkennung, Prognose, Chatbots", l: [
   "**Sprach- und Bilderkennung:** Die KI schreibt Gesprochenes fast sofort mit.",
   "**Predictive Analytics** (Vorhersage): Die KI sagt Trends aus Daten voraus.",
   "**Chatbots** (Antwort-Programme) beantworten Leserfragen und entlasten die Redaktion."
  ]},
  { k: "beispiel", h: "NLG macht aus Spielergebnissen Kurztexte", b: "Aus Wetterdaten, Börsenkursen oder Spielergebnissen entstehen fertige Kurztexte, etwa Sportberichte. Die Redaktion prüft sie, bevor sie online gehen." },
  { k: "text", h: "Struktur und Metadaten machen Beiträge auffindbar", b: "Suchmaschinen und KI-Systeme brauchen eine klare Struktur und saubere **Metadaten**. Das sind Zusatzangaben wie Titel, Schlagworte oder Beschreibung." },
  { k: "text", h: "Vorhersagen prüfen, KI-Bilder kennzeichnen", b: "Prüfe Vorhersagen, sonst ziehst du falsche Schlüsse. Chatbots sollen ihre Quellen zeigen. KI-Bilder und **Deepfakes**, also täuschend echte Fälschungen, musst du kennzeichnen." },
  { k: "merke", h: "Schneller mit KI, verantwortlich bleibt der Mensch", b: "KI macht Redaktionen schneller und persönlicher. **Transparenz** (Offenheit), Kennzeichnung und menschliche Verantwortung bleiben zentral." },
  { k: "check", q: "Was müssen Redaktionen laut Studienbrief tun, damit KI-Systeme ihre Beiträge gut verarbeiten können?", a: ["Beiträge klar strukturieren und mit sauberen Metadaten versehen", "Beiträge möglichst lang schreiben und viele Bilder einbauen", "Beiträge nur noch als Video veröffentlichen und Text weglassen", "Beiträge häufig löschen und unter neuer Adresse neu anlegen"], c: 0, e: "KI verändert die Sichtbarkeit von Inhalten. Suchmaschinen und KI-Systeme erkennen Beiträge besser, wenn sie klar aufgebaut sind und saubere Metadaten haben." }
 ]},
 { id: "ki-texte", titel: "ChatGPT und maschinelle Übersetzung", min: 3, quelle: "smm1.pdf, S. 13–18, 24", folien: [
  { k: "intro", h: "Wie schreiben und übersetzen KI-Werkzeuge?", b: "**Sprachmodelle** (Text-KI) und Übersetzungs-KI liefern Entwürfe und Inhalte in mehreren Sprachen. Ziel: Du kannst erklären, wie beide arbeiten und wo ihre Grenzen liegen." },
  { k: "text", h: "ChatGPT lernt Sprache aus riesigen Textmengen", b: "**ChatGPT** ist ein Sprachmodell von OpenAI. Es lernt mit **neuronalen Netzen** (Rechenmodell nach Art des Gehirns). Es antwortet passend zum Zusammenhang. Ähnlich sind Gemini, Claude und Copilot." },
  { k: "liste", h: "ChatGPT schreibt Entwürfe – du kontrollierst", l: [
   "**Einsatz:** Entwürfe, Themenideen, Helfer im Kundenservice",
   "**Vorteile:** spart Zeit, große Mengen, persönlichere Inhalte",
   "**Grenzen:** Du prüfst Qualität, Ethik (Moral) und Offenheit selbst.",
   "Sprachliche und kulturelle Feinheiten erkennt es schlecht."
  ]},
  { k: "text", h: "Encoder erfasst den Sinn, Decoder schreibt", b: "Übersetzungs-KI lernt aus zweisprachigen Texten. Der **Encoder** (Eingangs-Teil) bringt den Ausgangstext in einen abstrakten Zusammenhang aus Zahlen. Der **Decoder** (Ausgangs-Teil) macht daraus Text in der Zielsprache." },
  { k: "liste", h: "Übersetzungs-KI: schnell, aber nicht fehlerfrei", l: [
   "**Werkzeuge:** Google Translate, DeepL, Microsoft Translator",
   "**Einsatz:** Inhalte in mehreren Sprachen, Live-Berichte, Kundenservice",
   "**Vorteile:** schnell, oft günstiger, leicht um Sprachen erweiterbar",
   "**Grenzen:** Fehler, Kultur, Datenschutz bei vertraulichen Texten"
  ]},
  { k: "beispiel", h: "The Pudding und New York Times nutzen KI", b: "„The Pudding“ erklärt Datengrafiken mit ChatGPT-Texten (2024). Die New York Times übersetzt maschinell für Angebote in mehreren Sprachen und bearbeitet nach." },
  { k: "merke", h: "KI entwirft, du prüfst Inhalt und Stil", b: "KI liefert schnelle Entwürfe und Übersetzungen. Inhalt, Stil und kulturelle Passung prüfst du immer selbst." },
  { k: "check", q: "Welche Aufgabe hat der Decoder in einem maschinellen Übersetzungssystem?", a: ["Er wandelt den abstrakten Zusammenhang in Text der Zielsprache um", "Er zerlegt den Ausgangstext in einen abstrakten Zusammenhang", "Er sammelt zweisprachige Texte im Internet für das Training", "Er prüft die fertige Übersetzung auf kulturelle Feinheiten"], c: 0, e: "Der Encoder bringt den Ausgangstext in einen abstrakten Zusammenhang. Der Decoder erzeugt daraus den Text in der Zielsprache." }
 ]},
 { id: "ki-bilder-ethik", titel: "Bilder-KI, Ethik, Recht und Zukunft", min: 3, quelle: "smm1.pdf, S. 19–28", folien: [
  { k: "intro", h: "Darfst du KI-Bilder einfach posten?", b: "Bilder-KI spart Zeit, wirft aber Fragen zu Recht und Ethik (Moral) auf. Ziel: Du kannst erklären, wie sie arbeitet, und Pflichten aus dem **AI Act** (EU-Gesetz) nennen." },
  { k: "text", h: "Bilder-KI erkennt erst Kanten, dann Objekte", b: "**Computer Vision** (Bilder-KI) versteht, deutet und erzeugt Bilder. Die KI lernt aus vielen beschrifteten Bildern. **CNNs** (Convolutional Neural Networks) erkennen erst Kanten und Formen, dann Objekte und Szenen." },
  { k: "liste", h: "DALL-E und Midjourney erzeugen Bilder aus Text", l: [
   "**DALL-E** (OpenAI): Bild aus Text, etwa „Avocado beim Therapeuten“",
   "**Midjourney:** detaillierte Bilder im gewünschten Stil",
   "**Einsatz:** Illustrationen, Infografiken, Bilder für einzelne Zielgruppen",
   "**SEO** (Suchmaschinen-Optimierung): Schlagworte machen Bilder auffindbar."
  ]},
  { k: "liste", h: "Schnell und flexibel, aber rechtlich heikel", l: [
   "**Vorteile:** flexibel, spart Zeit, liefert große Mengen",
   "**Qualität:** Bei sehr genauen Vorgaben liegt sie oft daneben.",
   "**Urheberrecht:** heikel, wenn Bilder auf fremden Werken beruhen",
   "**Ethik:** KI-Bilder können täuschen."
  ]},
  { k: "beispiel", h: "Shutterstock passt Bilder per KI an Kampagnen an", b: "Shutterstock erzeugt mit KI passende Bilder und Vorlagen. Kunden passen sie schnell an ihre Werbe-Kampagnen an (Adweek, 2024)." },
  { k: "text", h: "Der AI Act verlangt Transparenz und Dokumentation", b: "Wichtig sind Datenschutz, **Transparenz** (Offenheit) und Verantwortung. **Algorithmischer Bias** heißt Verzerrung durch einseitige Daten. Der AI Act regelt KI erstmals. Redaktionen brauchen Richtlinien für **generative KI** (erzeugt Inhalte)." },
  { k: "merke", h: "KI unterstützt die Redaktion, ersetzt sie nicht", b: "Auch **KI-Agenten** erledigen Aufgaben selbst. Prüfung, Einordnung und Freigabe bleiben aber beim Menschen." },
  { k: "check", q: "Was empfiehlt der Studienbrief Redaktionen mit Blick auf den AI Act?", a: ["Eigene Richtlinien für generative KI entwickeln und regelmäßig prüfen", "Generative KI komplett verbieten und nur noch von Hand arbeiten", "KI-Inhalte ohne Prüfung veröffentlichen, weil das Gesetz sie erlaubt", "Die Verantwortung für KI-Inhalte ganz an die Anbieter abgeben"], c: 0, e: "Der AI Act bringt Pflichten zu Transparenz und Dokumentation. Deshalb sollen Redaktionen interne Richtlinien für generative KI aufstellen und regelmäßig überprüfen." }
 ]},
 { id: "ki-prompts", titel: "Gut prompten: von Recherche zu Ergebnis", min: 3, quelle: "smm1.pdf, S. 34–58", folien: [
  { k: "intro", h: "Wie bringst du die KI zu guten Ergebnissen?", b: "Ein **Prompt** ist deine Anweisung an die KI. Die KI produziert, du verantwortest das Ergebnis. Ziel: Du kannst in Schritten prompten und Aussagen prüfen." },
  { k: "liste", h: "Kontext schlägt Zauberprompt", l: [
   "**LLM** (großes Sprachmodell): erkennt Muster, kann sich überzeugend irren",
   "**Fakten gefragt?** Dann prüfe mit Quellen.",
   "**Kontext** (Hintergrund): Produkt, Ziel, Zielgruppe, Wettbewerb, **Tonalität** (Tonfall)",
   "**Extras:** Websuche, Deep Research (gründliche Recherche), Dateien"
  ]},
  { k: "liste", h: "Gib der KI eine Rolle und klare Grenzen", l: [
   "**Rolle:** „Du bist eine erfahrene Marketing-Strategin.“",
   "**Grenzen:** „Schreibe noch keine Werbetexte.“",
   "**Wissen trennen:** sicher, angenommen oder noch zu recherchieren",
   "**Quellen trennen:** Beobachtung, Quelle, Deutung"
  ]},
  { k: "liste", h: "4 Tests decken schwache Aussagen auf", l: [
   "**Critic Loop** (Kritik-Runde): KI sucht Schwächen.",
   "**So-What-Test:** 5-mal fragen: „Warum interessiert das Kunden?“",
   "**Substitution Test:** findet **generische** (austauschbare) Aussagen, die Wettbewerber übernehmen könnten",
   "**Claim Audit** (Aussagen-Check): belegt, Deutung oder unbelegt?"
  ]},
  { k: "text", h: "1 Kernbotschaft, 3 stützende Botschaften", b: "Ein **Botschafts-Gerüst** (Message Architecture) hat 1 **Kernbotschaft** und 3 stützende Botschaften. Jede nennt Kundennutzen, Produktbeweis und mögliche Einwände." },
  { k: "beispiel", h: "NORTH/24: Aus 24 Litern werden 30", b: "Der Rucksack kostet 149 Euro und hat 24 Liter. Die Erweiterung „FlexBase“ bringt 6 Liter extra. Die Kernbotschaft „24 → 30“ steht auf allen Kanälen gleich." },
  { k: "merke", h: "Rolle, Kontext, Grenzen – dann in Schritten", b: "Arbeite in Schritten: analysieren, recherchieren, Strategie entwickeln, kritisieren, erstellen, prüfen und verbessern." },
  { k: "check", q: "Was prüfst du beim Substitution Test?", a: ["Ob ein Wettbewerber eine Aussage fast unverändert für sich nutzen könnte", "Ob jede Produktaussage durch eine Quelle belegt werden kann", "Ob der zentrale Gedanke im Video auch ohne Text verständlich ist", "Ob die Message auf allen Kanälen genau gleich formuliert ist"], c: 0, e: "Der Substitution Test markiert austauschbare Aussagen. Du stufst jede Aussage ein: generisch und verzichtbar, nötige Produktinfo oder spezifisch für die eigene Strategie." }
 ]}
];
