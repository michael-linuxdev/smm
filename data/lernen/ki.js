// Lektionen „KI in der Redaktion“ (Zusatzwissen) – Zusammenfassung von smm1.pdf, S. 1–30 (Studienbrief „Zusatz: KI in der Onlineredaktion“) und S. 31–62 (Workshop „Von Recherche zu Ergebnis“), einfache Sprache.
export const L_KI = [
 { id: "ki-grundlagen", titel: "Was ist Künstliche Intelligenz?", min: 3, quelle: "smm1.pdf, S. 4–8", folien: [
  { k: "intro", h: "Was kann KI – und was kann sie nicht?", b: "Wer KI nutzt, muss ihre Grenzen kennen. Ziel: Du kannst KI definieren, schwache und starke KI unterscheiden und Meilensteine nennen." },
  { k: "text", h: "KI leistet, was sonst Intelligenz braucht", b: "**Künstliche Intelligenz (KI):** Maschinen erbringen Leistungen, die sonst menschliche Intelligenz brauchen. Dazu gehören Lernen, Sprachverständnis, Bilderkennung und Entscheiden aus Daten." },
  { k: "liste", h: "Schwache KI gibt es, starke KI noch nicht", l: [
   "**Schwache KI (Narrow AI):** spezialisiert, ohne Bewusstsein",
   "Beispiele: ChatGPT, Gemini, Alexa, Google Translate",
   "**Starke KI (General AI):** viele Aufgaben auf Menschenniveau",
   "Starke KI gibt es bis heute nicht."
  ]},
  { k: "liste", h: "Von Turing 1950 bis Deep Learning 2012", l: [
   "**1950:** Turing-Test; **1956:** Dartmouth-Konferenz, Geburtsstunde der KI",
   "**1966/1970:** ELIZA, SHRDLU; **1974–1980:** erster KI-Winter",
   "**1980er:** Expertensysteme wie MYCIN; 1986 kehren neuronale Netze zurück",
   "**2012:** Big Data und AlexNet starten Deep Learning"
  ]},
  { k: "text", h: "Seit den 2020ern ist KI im Alltag", b: "Beispiele sind Empfehlungen in Social Media, Transkription und autonomes Fahren. Offen sind Datenschutz, Vorurteile in Algorithmen und Jobs. Die EU verlangt Transparenz." },
  { k: "text", h: "Zukunft: erklärbar, multimodal, agentisch", b: "Die Forschung will erklärbare KI. **Multimodale Modelle** verbinden Text, Bild und Audio. **Agentische Systeme** steuern Aufgaben über längere Zeit selbst." },
  { k: "merke", h: "Alle heutigen KI-Werkzeuge sind schwache KI", b: "Heutige KI kann einzelne Aufgaben sehr gut. Die Welt versteht sie aber nicht wie ein Mensch." },
  { k: "check", q: "Zu welcher Art von KI gehört ein Textassistent wie ChatGPT laut Studienbrief?", a: ["Zur schwachen KI, denn er ist auf bestimmte Aufgaben spezialisiert", "Zur starken KI, denn er löst alle geistigen Aufgaben wie ein Mensch", "Zu den Expertensystemen, denn er arbeitet nur mit festen Regeln", "Zur starken KI, denn er besitzt ein eigenes Bewusstsein"], c: 0, e: "ChatGPT, Gemini oder Alexa sind schwache KI. Diese Systeme erledigen bestimmte Aufgaben gut. Ein allgemeines Verständnis oder Bewusstsein haben sie nicht." }
 ]},
 { id: "ki-redaktion", titel: "KI in der Onlineredaktion: Nutzen und Trends", min: 3, quelle: "smm1.pdf, S. 9–12", folien: [
  { k: "intro", h: "Wie hilft KI deiner Redaktion?", b: "KI übernimmt Routine wie Recherche, Zusammenfassung oder Verschlagwortung. Du gewinnst Zeit. Ziel: Du kannst 6 KI-Trends nennen und Beiträge auffindbar machen." },
  { k: "liste", h: "Trends 1–3: Texte, Empfehlungen, Moderation", l: [
   "**NLG** (Natural Language Generation): Texte aus Daten",
   "**Personalisierung:** Empfehlungssysteme schlagen passende Artikel vor.",
   "**Content-Moderation:** KI und Menschen filtern Fake News und Spam."
  ]},
  { k: "liste", h: "Trends 4–6: Erkennung, Prognose, Chatbots", l: [
   "**Sprach- und Bilderkennung:** Audio fast in Echtzeit verschriftlichen",
   "**Predictive Analytics:** Trends aus Daten vorhersagen",
   "**Chatbots:** beantworten Leserfragen, entlasten die Redaktion"
  ]},
  { k: "beispiel", h: "NLG macht aus Spielergebnissen Kurztexte", b: "Aus Wetterdaten, Börsenkursen oder Spielergebnissen entstehen fertige Kurztexte, etwa Sportberichte. Die Redaktion prüft sie, bevor sie online gehen." },
  { k: "text", h: "Struktur und Metadaten machen Beiträge auffindbar", b: "Suchmaschinen und KI-Systeme brauchen eine klare Struktur und saubere **Metadaten**. Das sind Zusatzangaben wie Titel, Schlagworte oder Beschreibung." },
  { k: "text", h: "Vorhersagen prüfen, KI-Bilder kennzeichnen", b: "Prüfe Vorhersagen, sonst drohen Fehlschlüsse. Bei Chatbots bleiben Quellen sichtbar. KI-Bilder und **Deepfakes**, also täuschend echte Fälschungen, musst du kennzeichnen." },
  { k: "merke", h: "Schneller mit KI, verantwortlich bleibt der Mensch", b: "KI macht Redaktionen schneller und persönlicher. Transparenz, Kennzeichnung und menschliche Verantwortung bleiben zentral." },
  { k: "check", q: "Was müssen Redaktionen laut Studienbrief tun, damit KI-Systeme ihre Beiträge gut verarbeiten können?", a: ["Beiträge klar strukturieren und mit sauberen Metadaten versehen", "Beiträge möglichst lang schreiben und viele Bilder einbauen", "Beiträge nur noch als Video veröffentlichen und Text weglassen", "Beiträge häufig löschen und unter neuer Adresse neu anlegen"], c: 0, e: "KI verändert die Sichtbarkeit von Inhalten. Suchmaschinen und KI-Systeme erkennen Beiträge besser, wenn sie klar aufgebaut sind und saubere Metadaten haben." }
 ]},
 { id: "ki-texte", titel: "ChatGPT und maschinelle Übersetzung", min: 3, quelle: "smm1.pdf, S. 13–18, 24", folien: [
  { k: "intro", h: "Wie schreiben und übersetzen KI-Werkzeuge?", b: "Sprachmodelle und Übersetzungs-KI liefern Entwürfe und mehrsprachige Inhalte. Ziel: Du kannst erklären, wie beide arbeiten und wo ihre Grenzen liegen." },
  { k: "text", h: "ChatGPT lernt Sprache aus riesigen Textmengen", b: "**ChatGPT** ist ein Sprachmodell von OpenAI. Es lernt mit neuronalen Netzen und antwortet passend zum Zusammenhang. Ähnlich sind Gemini, Claude und Copilot." },
  { k: "liste", h: "ChatGPT schreibt Entwürfe – du kontrollierst", l: [
   "**Einsatz:** Entwürfe, virtueller Assistent im Support, Themenvorschläge",
   "**Vorteile:** Effizienz, Skalierbarkeit, persönlichere Inhalte",
   "**Grenzen:** Qualitätskontrolle, Ethik, Transparenz",
   "Schwach bei Feinheiten von Sprache und Kultur"
  ]},
  { k: "text", h: "Encoder erfasst den Sinn, Decoder schreibt", b: "Netze lernen aus zweisprachigen Texten. Der **Encoder** bringt den Ausgangstext in einen abstrakten Zusammenhang. Der **Decoder** macht daraus Text in der Zielsprache." },
  { k: "liste", h: "Übersetzungs-KI: schnell, aber nicht fehlerfrei", l: [
   "**Tools:** Google Translate, DeepL, Microsoft Translator",
   "**Einsatz:** mehrsprachige Inhalte, Live-Berichte, Chatbots, Support",
   "**Vorteile:** schnell, oft günstiger, leicht erweiterbar",
   "**Grenzen:** Fehler, kulturelle Anpassung, Datenschutz bei sensiblen Texten"
  ]},
  { k: "beispiel", h: "The Pudding und New York Times nutzen KI", b: "„The Pudding“ erklärt Datengrafiken mit ChatGPT-Texten (2024). Die New York Times übersetzt maschinell für mehrsprachige Angebote und bearbeitet nach." },
  { k: "merke", h: "KI entwirft, du prüfst Inhalt und Stil", b: "KI liefert schnelle Entwürfe und Übersetzungen. Inhalt, Stil und kulturelle Passung prüfst du immer selbst." },
  { k: "check", q: "Welche Aufgabe hat der Decoder in einem maschinellen Übersetzungssystem?", a: ["Er wandelt den abstrakten Zusammenhang in Text der Zielsprache um", "Er zerlegt den Ausgangstext in einen abstrakten Zusammenhang", "Er sammelt zweisprachige Texte im Internet für das Training", "Er prüft die fertige Übersetzung auf kulturelle Feinheiten"], c: 0, e: "Der Encoder bringt den Ausgangstext in einen abstrakten Zusammenhang. Der Decoder erzeugt daraus den Text in der Zielsprache." }
 ]},
 { id: "ki-bilder-ethik", titel: "Bilder-KI, Ethik, Recht und Zukunft", min: 3, quelle: "smm1.pdf, S. 19–28", folien: [
  { k: "intro", h: "Darfst du KI-Bilder einfach posten?", b: "Bilder-KI spart Zeit, wirft aber Fragen zu Recht und Ethik auf. Ziel: Du kannst erklären, wie sie arbeitet, und Pflichten aus dem AI Act nennen." },
  { k: "text", h: "Bilder-KI erkennt erst Kanten, dann Objekte", b: "**Computer Vision** versteht, deutet und erzeugt Bilder. Grundlage sind viele beschriftete Bilder. **Convolutional Neural Networks (CNNs)** erkennen erst Kanten und Formen, dann Objekte und Szenen." },
  { k: "liste", h: "DALL-E und Midjourney erzeugen Bilder aus Text", l: [
   "**DALL-E** (OpenAI): Bild aus Text, etwa „Avocado in therapy“",
   "**Midjourney:** detaillierte Bilder nach Stil und Ästhetik",
   "**Einsatz:** Illustrationen, Infografiken, personalisierte Bilder",
   "**SEO:** Bilder mit Schlüsselwörtern und Tags auffindbar machen"
  ]},
  { k: "liste", h: "Schnell und flexibel, aber rechtlich heikel", l: [
   "**Vorteile:** Flexibilität, Zeitersparnis, große Mengen",
   "**Qualität:** oft daneben bei sehr genauen Vorgaben",
   "**Urheberrecht:** heikel, wenn Bilder auf Werken beruhen",
   "**Ethik:** KI-Bilder können täuschen."
  ]},
  { k: "beispiel", h: "Shutterstock passt Bilder per KI an Kampagnen an", b: "Shutterstock erzeugt mit KI personalisierte Bilder und Vorlagen. Kunden passen sie schnell an Kampagnen an (Adweek, 2024)." },
  { k: "text", h: "Der AI Act verlangt Transparenz und Dokumentation", b: "Wichtig sind Datenschutz, Transparenz und Verantwortung. **Algorithmischer Bias** heißt Verzerrung durch einseitige Daten. Der europäische **AI Act** regelt KI erstmals. Redaktionen brauchen eigene KI-Richtlinien." },
  { k: "merke", h: "KI unterstützt die Redaktion, ersetzt sie nicht", b: "Auch **KI-Agenten** erledigen Aufgaben selbst. Prüfung, Einordnung und Freigabe bleiben aber beim Menschen." },
  { k: "check", q: "Was empfiehlt der Studienbrief Redaktionen mit Blick auf den AI Act?", a: ["Eigene Richtlinien für generative KI entwickeln und regelmäßig prüfen", "Generative KI komplett verbieten und nur noch von Hand arbeiten", "KI-Inhalte ohne Prüfung veröffentlichen, weil das Gesetz sie erlaubt", "Die Verantwortung für KI-Inhalte ganz an die Anbieter abgeben"], c: 0, e: "Der AI Act bringt Pflichten zu Transparenz und Dokumentation. Deshalb sollen Redaktionen interne Richtlinien für generative KI aufstellen und regelmäßig überprüfen." }
 ]},
 { id: "ki-prompts", titel: "Gut prompten: von Recherche zu Ergebnis", min: 3, quelle: "smm1.pdf, S. 34–58", folien: [
  { k: "intro", h: "Wie bringst du die KI zu guten Ergebnissen?", b: "Ein **Prompt** ist deine Anweisung an die KI. Die KI produziert, du verantwortest das Ergebnis. Ziel: Du kannst in Schritten prompten und Aussagen prüfen." },
  { k: "liste", h: "Kontext schlägt Zauberprompt", l: [
   "**LLM (Large Language Model):** erkennt Muster, kann überzeugend irren",
   "**Faktische Aufgabe:** Dann brauchst du Quellen und Prüfung.",
   "**Kontext:** Produkt, Ziel, Zielgruppe, Wettbewerb, Tonalität",
   "**Zusatzfunktionen:** Websuche, Deep Research, Dateien, Bild-KI"
  ]},
  { k: "liste", h: "Gib der KI eine Rolle und klare Grenzen", l: [
   "**Rolle:** „Du bist Senior Marketing Strategist.“",
   "**Grenzen:** „Schreibe noch keine Werbetexte.“",
   "**Wissen trennen:** sicher, angenommen oder noch zu recherchieren",
   "**Quellen trennen:** Beobachtung, Quelle, Interpretation"
  ]},
  { k: "liste", h: "4 Tests decken schwache Aussagen auf", l: [
   "**Critic Loop:** KI sucht kritisch nach echten Schwächen.",
   "**So-What-Test:** 5-mal „Warum interessiert das Kunden?“ fragen",
   "**Substitution Test:** Könnte ein Wettbewerber das übernehmen?",
   "**Claim Audit:** belegt, plausible Interpretation oder nicht belegt"
  ]},
  { k: "text", h: "1 Kernbotschaft, 3 stützende Botschaften", b: "Eine **Message Architecture** hat 1 **Core Message** (Kernbotschaft) und 3 **Supporting Messages**. Jede hat Kundennutzen, Produktbeweis und mögliche Einwände." },
  { k: "beispiel", h: "NORTH/24: Aus 24 Litern werden 30", b: "Der Rucksack kostet 149 Euro und hat 24 Liter. Die FlexBase bringt 6 Liter extra. Idee: „24 → 30“, auf allen Kanälen gleich." },
  { k: "merke", h: "Rolle, Kontext, Grenzen – dann in Schritten", b: "Arbeite in Schritten: analysieren, recherchieren, Strategie entwickeln, kritisieren, erstellen, prüfen und verbessern." },
  { k: "check", q: "Was prüfst du beim Substitution Test?", a: ["Ob ein Wettbewerber eine Aussage fast unverändert für sich nutzen könnte", "Ob jede Produktaussage durch eine Quelle belegt werden kann", "Ob der zentrale Gedanke im Video auch ohne Text verständlich ist", "Ob die Message auf allen Kanälen genau gleich formuliert ist"], c: 0, e: "Der Substitution Test markiert austauschbare Aussagen. Du stufst jede Aussage ein: generisch und verzichtbar, nötige Produktinfo oder spezifisch für die eigene Strategie." }
 ]}
];
