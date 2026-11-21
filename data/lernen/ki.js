// Lektionen „KI in der Redaktion“ (Zusatzwissen) – Zusammenfassung von smm1.pdf, S. 1–30 (Studienbrief „Zusatz: KI in der Onlineredaktion“) und S. 31–62 (Workshop „Von Recherche zu Ergebnis“), einfache Sprache.
export const L_KI = [
 { id: "ki-grundlagen", titel: "Was ist Künstliche Intelligenz?", min: 3, quelle: "smm1.pdf, S. 4–8", folien: [
  { k: "intro", h: "Was kann KI – und was kann sie nicht?", b: "Wer KI nutzt, muss ihre Grenzen kennen. Ziel: Du erklärst KI und ihre Arten. Du nennst Meilensteine." },
  { k: "woerter", h: "Neue Wörter: Turing-Test, KI-Winter, Deep Learning", l: [
   "**Turing-Test:** prüft, ob Maschinen wie Menschen denken",
   "**KI-Winter:** Zeit mit kaum Fortschritt",
   "**Deep Learning:** KI lernt aus riesigen Datenmengen"
  ]},
  { k: "text", h: "KI leistet, was sonst Intelligenz braucht", b: "**Künstliche Intelligenz (KI):** Maschinen erbringen Leistungen, für die sonst menschliche Intelligenz nötig ist. KI lernt, versteht Sprache, erkennt Bilder und entscheidet aus Daten." },
  { k: "liste", h: "Schwache KI gibt es, starke KI noch nicht", l: [
   "**Schwache KI:** auf Aufgaben spezialisiert, ohne Bewusstsein",
   "Beispiele: ChatGPT, Gemini, Alexa, Google Translate",
   "**Starke KI:** so klug wie ein Mensch",
   "Starke KI gibt es bis heute nicht."
  ]},
  { k: "liste", h: "Von Turing 1950 bis Deep Learning 2012", l: [
   "**1950:** der **Turing-Test**",
   "**1956:** Dartmouth-Konferenz, die Geburtsstunde der KI",
   "**1974–1980:** erster **KI-Winter**; 1980er: **Expertensysteme** (feste Regeln)",
   "**2012:** AlexNet startet **Deep Learning**."
  ]},
  { k: "text", h: "Seit den 2020ern ist KI im Alltag", b: "KI empfiehlt dir Beiträge, schreibt Gesprochenes mit und lenkt Autos. Offen sind Datenschutz, Vorurteile der KI und Jobs. Die EU verlangt Offenheit." },
  { k: "text", h: "Zukunft: erklärbar, multimodal, agentisch", b: "Die Forschung will KI, die ihre Entscheidungen erklärt. **Multimodale** KI verbindet Text, Bild und Ton. **Agentische** KI erledigt Aufgaben lange selbst." },
  { k: "merke", h: "Alle heutigen KI-Werkzeuge sind schwache KI", b: "Heutige KI kann einzelne Aufgaben sehr gut. Die Welt versteht sie aber nicht wie ein Mensch.", esel: "Test 1950, Taufe 1956, Winter 1974, Regeln 1980er, Turbo 2012." },
  { k: "check", q: "Zu welcher Art von KI gehört ein Textassistent wie ChatGPT laut Studienbrief?", a: ["Zur schwachen KI, denn er ist auf bestimmte Aufgaben spezialisiert", "Zur starken KI, denn er löst alle geistigen Aufgaben wie ein Mensch", "Zu den Expertensystemen, denn er arbeitet nur mit festen Regeln", "Zur starken KI, denn er besitzt ein eigenes Bewusstsein"], c: 0, e: "ChatGPT, Gemini oder Alexa sind schwache KI. Diese Systeme erledigen bestimmte Aufgaben gut. Ein allgemeines Verständnis oder Bewusstsein haben sie nicht." }
 ]},

 { id: "ki-redaktion", titel: "KI in der Onlineredaktion: Nutzen und Trends", min: 3, quelle: "smm1.pdf, S. 9–12", folien: [
  { k: "intro", h: "Wie hilft KI deiner Redaktion?", b: "KI übernimmt Routine: Infos suchen, zusammenfassen, Schlagworte vergeben. So hast du mehr Zeit. Ziel: Du nennst 6 KI-Trends. Du machst Beiträge leicht auffindbar." },
  { k: "woerter", h: "Neue Wörter: NLG, Predictive Analytics, Metadaten, Deepfake", l: [
   "**NLG:** KI schreibt Texte aus Daten",
   "**Predictive Analytics:** Vorhersage aus Daten",
   "**Metadaten:** Titel, Schlagworte und Beschreibung eines Beitrags",
   "**Deepfake:** täuschend echte Fälschung"
  ]},
  { k: "liste", h: "Trends 1–3: Texte, Empfehlungen, Moderation", l: [
   "**NLG** (Natural Language Generation): Die KI schreibt Texte.",
   "**Empfehlungen:** Jeder Leser bekommt passende Artikel.",
   "**Content-Moderation** (Inhalte prüfen): KI und Menschen filtern Falschmeldungen."
  ]},
  { k: "liste", h: "Trends 4–6: Erkennung, Prognose, Chatbots", l: [
   "**Sprach- und Bilderkennung:** Die KI schreibt mit, was du sagst.",
   "**Predictive Analytics:** Die KI sagt Trends voraus.",
   "**Chatbots** beantworten Fragen von Lesern. Das entlastet die Redaktion."
  ]},
  { k: "beispiel", h: "NLG macht aus Spielergebnissen Kurztexte", b: "Aus Daten zu Wetter, Börse oder Sport werden kurze Texte. Die Redaktion prüft sie, bevor sie online gehen." },
  { k: "text", h: "Struktur und Metadaten machen Beiträge auffindbar", b: "Suchmaschinen und KI-Systeme brauchen klare Struktur und saubere **Metadaten**. Bei Bohnenwerk hat jeder Blog-Text diese Angaben." },
  { k: "text", h: "Vorhersagen prüfen, KI-Bilder kennzeichnen", b: "Prüfe Vorhersagen, sonst ziehst du falsche Schlüsse. Chatbots sollen ihre Quellen zeigen. KI-Bilder und **Deepfakes** musst du kennzeichnen." },
  { k: "merke", h: "Schneller mit KI, verantwortlich bleibt der Mensch", b: "KI macht Redaktionen schneller und persönlicher. Der Mensch bleibt verantwortlich. Er sorgt für **Transparenz** (Offenheit) und Kennzeichnung." },
  { k: "check", q: "Was müssen Redaktionen laut Studienbrief tun, damit KI-Systeme ihre Beiträge gut verarbeiten können?", a: ["Beiträge klar strukturieren und mit sauberen Metadaten versehen", "Beiträge möglichst lang schreiben und viele Bilder einbauen", "Beiträge nur noch als Video veröffentlichen und Text weglassen", "Beiträge häufig löschen und unter neuer Adresse neu anlegen"], c: 0, e: "KI verändert die Sichtbarkeit von Inhalten. Suchmaschinen und KI-Systeme erkennen Beiträge besser, wenn sie klar aufgebaut sind und saubere Metadaten haben." }
 ]},

 { id: "ki-texte", titel: "ChatGPT und maschinelle Übersetzung", min: 3, quelle: "smm1.pdf, S. 13–18, 24", folien: [
  { k: "intro", h: "Wie schreiben und übersetzen KI-Werkzeuge?", b: "**Sprachmodelle** und Übersetzungs-KI liefern Entwürfe in vielen Sprachen. Ziel: Du erklärst, wie beide arbeiten. Du kennst ihre Grenzen." },
  { k: "woerter", h: "Neue Wörter: Sprachmodell, neuronales Netz, Encoder, Decoder", l: [
   "**Sprachmodell:** Text-KI wie ChatGPT",
   "**neuronales Netz:** Rechenmodell nach Art des Gehirns",
   "**Encoder:** liest den Text ein",
   "**Decoder:** schreibt den neuen Text"
  ]},
  { k: "text", h: "ChatGPT lernt Sprache aus riesigen Textmengen", b: "**ChatGPT** ist ein Sprachmodell von OpenAI. Es lernt mit **neuronalen Netzen**. Es antwortet passend zum Zusammenhang. Ähnlich sind Gemini, Claude und Copilot." },
  { k: "liste", h: "ChatGPT schreibt Entwürfe – du kontrollierst", l: [
   "**Einsatz:** Entwürfe, Themenideen, Kundenservice",
   "**Vorteile:** spart Zeit, große Mengen, persönlichere Inhalte",
   "**Grenzen:** Qualität, Ethik und Offenheit prüfst du selbst.",
   "Feinheiten in Sprache und Kultur erkennt es schlecht."
  ]},
  { k: "text", h: "Encoder erfasst den Sinn, Decoder schreibt", b: "Übersetzungs-KI lernt aus Texten in zwei Sprachen. Der **Encoder** macht daraus einen abstrakten Zusammenhang. Der **Decoder** macht daraus Text in der Zielsprache." },
  { k: "liste", h: "Übersetzungs-KI: schnell, aber nicht fehlerfrei", l: [
   "**Werkzeuge:** Google Translate, DeepL, Microsoft Translator",
   "**Einsatz:** Inhalte in vielen Sprachen, Live-Berichte, Service",
   "**Vorteile:** schnell, oft günstiger, neue Sprachen leicht möglich",
   "**Grenzen:** Fehler, Kultur, Datenschutz bei geheimen Texten"
  ]},
  { k: "beispiel", h: "The Pudding und New York Times nutzen KI", b: "„The Pudding“ erklärt Grafiken mit ChatGPT-Texten (2024). Die New York Times übersetzt per KI und bearbeitet nach." },
  { k: "merke", h: "KI entwirft, du prüfst Inhalt und Stil", b: "KI liefert schnelle Entwürfe und Übersetzungen. Inhalt, Stil und kulturelle Passung prüfst du immer selbst." },
  { k: "check", q: "Welche Aufgabe hat der Decoder in einem maschinellen Übersetzungssystem?", a: ["Er wandelt den abstrakten Zusammenhang in Text der Zielsprache um", "Er zerlegt den Ausgangstext in einen abstrakten Zusammenhang", "Er sammelt zweisprachige Texte im Internet für das Training", "Er prüft die fertige Übersetzung auf kulturelle Feinheiten"], c: 0, e: "Der Encoder bringt den Ausgangstext in einen abstrakten Zusammenhang. Der Decoder erzeugt daraus den Text in der Zielsprache." }
 ]},

 { id: "ki-bilder-ethik", titel: "Bilder-KI, Ethik, Recht und Zukunft", min: 3, quelle: "smm1.pdf, S. 19–28", folien: [
  { k: "intro", h: "Darfst du KI-Bilder einfach posten?", b: "Bohnenwerk will ein KI-Bild vom Café posten. Ist das erlaubt? Ziel: Du erklärst Bilder-KI und Pflichten aus dem **AI Act**." },
  { k: "woerter", h: "Neue Wörter: AI Act, Computer Vision, Bias, generative KI", l: [
   "**AI Act:** EU-Gesetz für KI",
   "**Computer Vision:** KI, die Bilder versteht und erzeugt",
   "**Bias:** Verzerrung durch einseitige Daten",
   "**generative KI:** erzeugt neue Inhalte"
  ]},
  { k: "text", h: "Bilder-KI erkennt erst Kanten, dann Objekte", b: "**Computer Vision** lernt aus vielen beschrifteten Bildern. **CNNs** (Convolutional Neural Networks) erkennen erst Kanten und Formen. Dann Dinge und Szenen." },
  { k: "liste", h: "DALL-E und Midjourney erzeugen Bilder aus Text", l: [
   "**DALL-E** von OpenAI: Bild aus Text, etwa „Avocado beim Therapeuten“",
   "**Midjourney:** genaue Bilder im Wunsch-Stil",
   "**Einsatz:** Grafiken und Bilder für einzelne Zielgruppen",
   "**SEO:** Mit Schlagworten findet Google deine Bilder."
  ]},
  { k: "liste", h: "Schnell und flexibel, aber rechtlich heikel", l: [
   "**Vorteile:** flexibel, spart Zeit, große Mengen",
   "**Qualität:** Bei genauen Vorgaben liegt sie oft daneben.",
   "**Urheberrecht:** heikel, wenn Bilder auf fremden Werken beruhen",
   "**Ethik:** KI-Bilder können täuschen."
  ]},
  { k: "beispiel", h: "Shutterstock passt Bilder per KI an Kampagnen an", b: "Shutterstock macht per KI Bilder und Vorlagen. Kunden passen sie schnell an ihre Werbung an (Adweek, 2024)." },
  { k: "text", h: "Der AI Act verlangt Transparenz und Dokumentation", b: "Wichtig sind Datenschutz, **Transparenz** (Offenheit) und Verantwortung. Achte auf **algorithmischen Bias**. Redaktionen brauchen Regeln für **generative KI**." },
  { k: "merke", h: "KI unterstützt die Redaktion, ersetzt sie nicht", b: "Auch **KI-Agenten** erledigen Aufgaben selbst. Prüfung, Einordnung und Freigabe bleiben aber beim Menschen." },
  { k: "check", q: "Was empfiehlt der Studienbrief Redaktionen mit Blick auf den AI Act?", a: ["Eigene Richtlinien für generative KI entwickeln und regelmäßig prüfen", "Generative KI komplett verbieten und nur noch von Hand arbeiten", "KI-Inhalte ohne Prüfung veröffentlichen, weil das Gesetz sie erlaubt", "Die Verantwortung für KI-Inhalte ganz an die Anbieter abgeben"], c: 0, e: "Der AI Act bringt Pflichten zu Transparenz und Dokumentation. Deshalb sollen Redaktionen interne Richtlinien für generative KI aufstellen und regelmäßig überprüfen." }
 ]},

 { id: "ki-prompts", titel: "Gut prompten: von Recherche zu Ergebnis", min: 3, quelle: "smm1.pdf, S. 34–58", folien: [
  { k: "intro", h: "Wie bringst du die KI zu guten Ergebnissen?", b: "Die KI produziert, du verantwortest das Ergebnis. Ziel: Du promptest in Schritten. Du prüfst Aussagen." },
  { k: "woerter", h: "Neue Wörter: Prompt, LLM, Tonalität, generisch", l: [
   "**Prompt:** deine Anweisung an die KI",
   "**LLM:** großes Sprachmodell wie ChatGPT",
   "**Tonalität:** der Tonfall eines Textes",
   "**generisch:** austauschbar"
  ]},
  { k: "liste", h: "Kontext schlägt Zauberprompt", l: [
   "**LLM:** erkennt Muster, kann sich aber überzeugend irren",
   "**Fakten gefragt?** Dann prüfe mit Quellen.",
   "**Kontext:** Produkt, Ziel, Zielgruppe, Wettbewerb, **Tonalität**",
   "**Extras:** Websuche, Deep Research, Dateien"
  ]},
  { k: "liste", h: "Gib der KI eine Rolle und klare Grenzen", l: [
   "**Rolle:** „Du bist ein erfahrener Werbe-Profi.“",
   "**Grenzen:** „Schreib noch keine Werbung.“",
   "**Wissen trennen:** sicher, angenommen oder noch offen",
   "**Quellen trennen:** Beobachtung, Quelle, Deutung"
  ]},
  { k: "liste", h: "4 Tests decken schwache Aussagen auf", l: [
   "**Critic Loop** (Kritik-Runde): KI sucht Schwächen.",
   "**So-What-Test:** 5-mal fragen: „Warum interessiert das Kunden?“",
   "**Substitution Test:** findet **generische** Aussagen, die andere auch nutzen könnten",
   "**Claim Audit** (Aussagen-Check): belegt, Deutung oder unbelegt?"
  ]},
  { k: "text", h: "1 Kernbotschaft, 3 stützende Botschaften", b: "Ein **Botschafts-Gerüst** hat 1 **Kernbotschaft**. Dazu kommen 3 stützende Botschaften. Jede nennt Kundennutzen, Beweis und mögliche Einwände." },
  { k: "beispiel", h: "NORTH/24: Aus 24 Litern werden 30", b: "Der Rucksack kostet 149 Euro und hat 24 Liter. Die Erweiterung „FlexBase“ bringt 6 Liter extra. Die Kernbotschaft „24 → 30“ steht auf allen Kanälen gleich." },
  { k: "merke", h: "Rolle, Kontext, Grenzen – dann in Schritten", b: "Arbeite in Schritten: analysieren, recherchieren, Strategie entwickeln, kritisieren, erstellen, prüfen und verbessern.", esel: "Tests Critic, So-What, Substitution, Claim: „Charlie sucht seine Cola.“" },
  { k: "check", q: "Was prüfst du beim Substitution Test?", a: ["Ob ein Wettbewerber eine Aussage fast unverändert für sich nutzen könnte", "Ob jede Produktaussage durch eine Quelle belegt werden kann", "Ob der zentrale Gedanke im Video auch ohne Text verständlich ist", "Ob die Message auf allen Kanälen genau gleich formuliert ist"], c: 0, e: "Der Substitution Test markiert austauschbare Aussagen. Du stufst jede Aussage ein: generisch und verzichtbar, nötige Produktinfo oder spezifisch für die eigene Strategie." }
 ]}
];
