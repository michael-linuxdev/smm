// Lektionen „KI in der Redaktion“ (Zusatzwissen) – Zusammenfassung von smm1.pdf, S. 1–30 (Studienbrief „Zusatz: KI in der Onlineredaktion“) und S. 31–62 (Workshop „Von Recherche zu Ergebnis“), einfache Sprache.
export const L_KI = [
 { id: "ki-grundlagen", titel: "Was ist Künstliche Intelligenz?", min: 4, quelle: "smm1.pdf, S. 4–8", folien: [
  { k: "intro", h: "Was kann KI – und was kann sie nicht?", b: "KI verändert die Arbeit in Medien und Redaktionen. Wer KI nutzt, muss wissen, was sie kann und was nicht. Nach dieser Lektion kannst du KI definieren, schwache und starke KI unterscheiden und wichtige Meilensteine nennen." },
  { k: "text", h: "KI: Maschinen leisten, was sonst Intelligenz braucht", b: "**Künstliche Intelligenz (KI)** heißt: Maschinen erbringen Leistungen, die sonst menschliche Intelligenz brauchen. Dazu gehören Lernen aus Erfahrung und Verstehen von Sprache. Dazu gehören auch Erkennen von Bildern und Entscheiden auf Basis von Datenanalysen." },
  { k: "liste", h: "Schwache KI gibt es, starke KI noch nicht", l: [
   "**Schwache KI (Narrow AI):** ist auf bestimmte Aufgaben spezialisiert. Diese KI versteht nicht allgemein und hat kein Bewusstsein.",
   "Beispiele für schwache KI: ChatGPT, Gemini, Alexa oder Google Translate.",
   "**Starke KI (General AI):** soll viele geistige Aufgaben auf dem Niveau eines Menschen lösen.",
   "Starke KI mit menschlicher Anpassung oder Bewusstsein gibt es bis heute nicht."
  ]},
  { k: "liste", h: "Von Turing 1950 bis Deep Learning 2012", l: [
   "**1950:** Alan Turing fragt „Können Maschinen denken?“ und stellt den Turing-Test vor.",
   "**1956:** Die Dartmouth-Konferenz gilt als Geburtsstunde der KI. Dort entsteht der Begriff.",
   "**1966/1970:** ELIZA und SHRDLU simulieren Gespräche und lösen einfache Aufgaben.",
   "**1974–1980:** Im ersten „KI-Winter“ sinken Geld und Hoffnung, weil Durchbrüche ausbleiben.",
   "**1980er:** Expertensysteme wie MYCIN helfen bei medizinischen Diagnosen. 1986 kommen neuronale Netze zurück.",
   "**2000er bis 2012:** Big Data und mehr Rechenleistung bringen maschinelles Lernen. 2012 startet mit AlexNet das Deep Learning."
  ]},
  { k: "text", h: "Seit den 2020ern ist KI im Alltag angekommen", b: "Seit den 2020er-Jahren ist KI im Alltag angekommen. Beispiele sind Empfehlungen in Social Media, Transkription oder autonomes Fahren. Zugleich wachsen Fragen zu Datenschutz, Vorurteilen in Algorithmen und Arbeitsplätzen. Die EU hat dazu verbindliche Regeln mit Transparenzpflichten eingeführt." },
  { k: "text", h: "Die Zukunft: erklärbar, multimodal und agentisch", b: "Die Forschung arbeitet an vertrauenswürdiger und erklärbarer KI. Wichtig sind **multimodale Modelle**: Diese Modelle verbinden Text, Bild und Audio. Dazu kommen **agentische Systeme**, die Aufgaben über längere Zeit selbst steuern." },
  { k: "merke", h: "Alle heutigen KI-Werkzeuge sind schwache KI", b: "Heutige KI-Werkzeuge können einzelne Aufgaben sehr gut. Die Welt verstehen sie aber nicht wie ein Mensch." },
  { k: "check", q: "Zu welcher Art von KI gehört ein Textassistent wie ChatGPT laut Studienbrief?", a: ["Zur schwachen KI, denn er ist auf bestimmte Aufgaben spezialisiert", "Zur starken KI, denn er löst alle geistigen Aufgaben wie ein Mensch", "Zu den Expertensystemen, denn er arbeitet nur mit festen Regeln", "Zur starken KI, denn er besitzt ein eigenes Bewusstsein"], c: 0, e: "ChatGPT, Gemini oder Alexa sind schwache KI. Diese Systeme erledigen bestimmte Aufgaben gut. Ein allgemeines Verständnis oder Bewusstsein haben sie nicht." }
 ]},
 { id: "ki-redaktion", titel: "KI in der Onlineredaktion: Nutzen und Trends", min: 4, quelle: "smm1.pdf, S. 9–12", folien: [
  { k: "intro", h: "Wie hilft KI deiner Redaktion?", b: "Redaktionen müssen schnell gute Inhalte liefern. KI kann dabei helfen. Nach dieser Lektion kannst du 6 KI-Trends in Redaktionen nennen. Du kannst auch erklären, wie Beiträge für KI-Systeme auffindbar bleiben." },
  { k: "text", h: "KI übernimmt Routine, du gewinnst Zeit", b: "KI wertet große Datenmengen aus und erkennt Muster. KI hilft bei Recherche, Zusammenfassung, Verschlagwortung und Personalisierung. Außerdem übernimmt sie Routineaufgaben. So hast du mehr Zeit für kreative und strategische Arbeit." },
  { k: "liste", h: "6 Trends: von Textautomatik bis Chatbot", l: [
   "**Automatisierte Texterstellung:** NLG-Systeme (Natural Language Generation) machen aus Daten Texte, zum Beispiel Sportberichte.",
   "**Personalisierung:** Empfehlungssysteme schlagen passende Artikel vor, über Newsletter, Apps, Social Media und KI-Chats.",
   "**Content-Moderation:** KI filtert Fake News, Spam und unpassende Inhalte. Oft arbeiten KI und Menschen zusammen.",
   "**Sprach- und Bilderkennung:** KI verschriftlicht Audio fast in Echtzeit und ordnet Bilder zu.",
   "**Predictive Analytics:** KI sagt aus Daten Trends voraus. Das hilft im Datenjournalismus.",
   "**Chatbots:** beantworten Fragen von Lesern in natürlicher Sprache und entlasten die Redaktion."
  ]},
  { k: "beispiel", h: "NLG macht aus Zahlen fertige Kurztexte", b: "Wetterdaten, Börsenkurse oder Spielergebnisse liegen als Zahlen vor. Ein NLG-System macht daraus fertige Kurztexte. Die Redaktion prüft diese Texte trotzdem, bevor sie online gehen." },
  { k: "text", h: "Struktur und Metadaten machen Beiträge auffindbar", b: "KI verändert auch, wie Inhalte gefunden werden. Beiträge müssen für Suchmaschinen und KI-Systeme gut lesbar sein. Dafür brauchst du eine klare Struktur und saubere **Metadaten**. Metadaten sind Zusatzangaben wie Titel, Schlagworte oder Beschreibung." },
  { k: "text", h: "Vorhersagen prüfen, KI-Bilder kennzeichnen", b: "Vorhersagen aus Daten musst du sorgfältig prüfen und einordnen. Sonst drohen Fehlschlüsse. Bei Chatbots müssen Quellen sichtbar bleiben. KI-Bilder und Deepfakes brauchen eine Kennzeichnung, denn rechtliche Vorgaben verlangen Transparenz. **Deepfakes** sind täuschend echte, künstlich erzeugte oder veränderte Bilder und Videos." },
  { k: "merke", h: "Schneller mit KI, verantwortlich bleibt der Mensch", b: "KI macht Redaktionen schneller und persönlicher. Transparenz, Kennzeichnung und menschliche Verantwortung bleiben aber zentral." },
  { k: "check", q: "Was müssen Redaktionen laut Studienbrief tun, damit KI-Systeme ihre Beiträge gut verarbeiten können?", a: ["Beiträge klar strukturieren und mit sauberen Metadaten versehen", "Beiträge möglichst lang schreiben und viele Bilder einbauen", "Beiträge nur noch als Video veröffentlichen und Text weglassen", "Beiträge häufig löschen und unter neuer Adresse neu anlegen"], c: 0, e: "KI verändert die Sichtbarkeit von Inhalten. Suchmaschinen und KI-Systeme erkennen Beiträge besser, wenn sie klar aufgebaut sind und saubere Metadaten haben." }
 ]},
 { id: "ki-texte", titel: "ChatGPT und maschinelle Übersetzung", min: 5, quelle: "smm1.pdf, S. 13–18, 24", folien: [
  { k: "intro", h: "Wie schreiben und übersetzen KI-Werkzeuge?", b: "Zwei wichtige KI-Werkzeuge für Texte sind Sprachmodelle wie ChatGPT und Übersetzungs-KI. Beide nutzt du für Entwürfe und mehrsprachige Inhalte. Nach dieser Lektion kannst du erklären, wie beide arbeiten und wo ihre Vorteile und Grenzen liegen." },
  { k: "text", h: "ChatGPT lernt Sprache aus riesigen Textmengen", b: "**ChatGPT** ist ein Sprachmodell von OpenAI. Es nutzt neuronale Netze und lernt aus riesigen Textmengen. So versteht es natürliche Sprache und antwortet passend zum Zusammenhang. Ähnliche Systeme sind Gemini, Claude oder Copilot." },
  { k: "liste", h: "ChatGPT schreibt Entwürfe – du kontrollierst", l: [
   "**Content-Erstellung:** Entwürfe für Artikel, Blogposts und Berichte nach deinen Anweisungen.",
   "**Kundeninteraktion:** als virtueller Assistent Fragen beantworten, Support geben und Feedback sammeln.",
   "**Redaktionsplanung:** aus Trenddaten und Leserverhalten Themen vorschlagen.",
   "**Vorteile:** mehr Effizienz, gute Skalierbarkeit und persönlichere Inhalte.",
   "**Herausforderungen:** Qualitätskontrolle, Ethik und Transparenz, Schwächen bei Feinheiten von Sprache und Kultur."
  ]},
  { k: "text", h: "Encoder erfasst den Sinn, Decoder schreibt", b: "Neuronale Netze lernen aus großen Sammlungen zweisprachiger Texte. Der **Encoder** übersetzt den Ausgangstext in einen abstrakten Zusammenhang. Der **Decoder** macht daraus Text in der Zielsprache. Neuere Systeme nutzen Transformer-Modelle und erfassen längere Texte besser." },
  { k: "liste", h: "Übersetzungs-KI: schnell, aber nicht fehlerfrei", l: [
   "**Tools:** Google Translate (über 100 Sprachen), DeepL (sehr natürliche Texte), Microsoft Translator (über 60 Sprachen).",
   "**Einsatz:** mehrsprachige Inhalte, Echtzeit-Übersetzung bei Live-Berichten, Anfragen in Chatbots und im Support.",
   "**Vorteile:** schnell, oft günstiger als menschliche Übersetzung, leicht auf viele Sprachen erweiterbar.",
   "**Herausforderungen:** Fehler und fehlende Feinheiten, kulturelle Anpassung, Datenschutz bei sensiblen Texten."
  ]},
  { k: "beispiel", h: "The Pudding und New York Times nutzen KI", b: "Das Online-Magazin „The Pudding“ nutzt ChatGPT für Texte zu Datengrafiken. So werden Statistiken verständlich und unterhaltsam (The Pudding, 2024). Große Nachrichtenhäuser wie die New York Times nutzen maschinelle Übersetzung für mehrsprachige Angebote. Eine redaktionelle Nachbearbeitung bleibt dabei wichtig." },
  { k: "merke", h: "KI entwirft, du prüfst Inhalt und Stil", b: "KI liefert schnelle Entwürfe und Übersetzungen. Du prüfst Inhalt, Stil und kulturelle Passung immer selbst." },
  { k: "check", q: "Welche Aufgabe hat der Decoder in einem maschinellen Übersetzungssystem?", a: ["Er wandelt den abstrakten Zusammenhang in Text der Zielsprache um", "Er zerlegt den Ausgangstext in einen abstrakten Zusammenhang", "Er sammelt zweisprachige Texte im Internet für das Training", "Er prüft die fertige Übersetzung auf kulturelle Feinheiten"], c: 0, e: "Der Encoder bringt den Ausgangstext in einen abstrakten Zusammenhang. Der Decoder erzeugt daraus den Text in der Zielsprache." }
 ]},
 { id: "ki-bilder-ethik", titel: "Bilder-KI, Ethik, Recht und Zukunft", min: 5, quelle: "smm1.pdf, S. 19–28", folien: [
  { k: "intro", h: "Darfst du KI-Bilder einfach posten?", b: "KI erzeugt heute auch Bilder. Das spart Zeit, wirft aber Fragen zu Recht und Ethik auf. Nach dieser Lektion kannst du erklären, wie Bilder-KI arbeitet. Du kannst auch ihre Risiken und die Pflichten aus dem AI Act nennen." },
  { k: "text", h: "Bilder-KI erkennt erst Kanten, dann Objekte", b: "**Bilder-KI** heißt auch **Computer Vision**. Diese KI versteht, deutet und erzeugt Bilder. Dafür lernt sie aus vielen beschrifteten Bildern. Dabei helfen **Convolutional Neural Networks (CNNs)**. Diese Netze erkennen erst Kanten und Formen, dann ganze Objekte und Szenen." },
  { k: "liste", h: "DALL-E und Midjourney erzeugen Bilder aus Text", l: [
   "**DALL-E** von OpenAI erzeugt Bilder aus Textbeschreibungen, zum Beispiel „Avocado in therapy“.",
   "**Midjourney** erstellt detaillierte, realistische Bilder nach Stil, Thema und Ästhetik.",
   "**Content-Erstellung:** Illustrationen und Infografiken für Artikel.",
   "**Personalisierung:** Bilder passend zu den Vorlieben der Nutzer.",
   "**SEO:** Bilder mit passenden Schlüsselwörtern und Tags für bessere Auffindbarkeit."
  ]},
  { k: "liste", h: "Schnell und flexibel, aber rechtlich heikel", l: [
   "**Vorteile:** kreative Flexibilität, Zeitersparnis und große Mengen an Bildern.",
   "**Qualität:** Bilder entsprechen manchmal nicht den Erwartungen, gerade bei sehr genauen Vorgaben.",
   "**Urheberrecht:** Fragen entstehen, wenn Bilder auf bestehenden Werken beruhen.",
   "**Ethik:** KI-Bilder können täuschen oder problematische Inhalte verbreiten."
  ]},
  { k: "beispiel", h: "Shutterstock passt Bilder per KI an Kampagnen an", b: "Shutterstock nutzt KI, um personalisierte Bilder für seine Kunden zu erzeugen. Bilder, Illustrationen und Vorlagen lassen sich so schnell an Kampagnen anpassen (Adweek, 2024)." },
  { k: "text", h: "Der AI Act verlangt Transparenz und Dokumentation", b: "Wichtige Themen sind Datenschutz und Transparenz. Dazu kommen **algorithmischer Bias**, also Verzerrungen durch einseitige Daten, und die Verantwortung für automatische Inhalte. Der europäische **AI Act** regelt erstmals den KI-Einsatz. Er verlangt unter anderem Transparenz und Dokumentation. Redaktionen sollten eigene KI-Richtlinien haben." },
  { k: "text", h: "KI-Agenten arbeiten selbst, brauchen aber Kontrolle", b: "KI wird **multimodal**: Dann verarbeitet sie Text, Bild, Audio, Video und Daten. **KI-Agenten** erledigen mehrstufige Aufgaben selbst, zum Beispiel recherchieren und Entwürfe prüfen. Doch Agenten brauchen menschliche Kontrolle. Prüfung, Einordnung und Freigabe bleiben Aufgabe des Menschen." },
  { k: "merke", h: "KI unterstützt die Redaktion, ersetzt sie nicht", b: "KI unterstützt die Redaktion, ersetzt sie aber nicht. Kreativität, Urteilskraft und Verantwortung bleiben beim Menschen." },
  { k: "check", q: "Was empfiehlt der Studienbrief Redaktionen mit Blick auf den AI Act?", a: ["Eigene Richtlinien für generative KI entwickeln und regelmäßig prüfen", "Generative KI komplett verbieten und nur noch von Hand arbeiten", "KI-Inhalte ohne Prüfung veröffentlichen, weil das Gesetz sie erlaubt", "Die Verantwortung für KI-Inhalte ganz an die Anbieter abgeben"], c: 0, e: "Der AI Act bringt Pflichten zu Transparenz und Dokumentation. Deshalb sollen Redaktionen interne Richtlinien für generative KI aufstellen und regelmäßig überprüfen." }
 ]},
 { id: "ki-prompts", titel: "Gut prompten: von Recherche zu Ergebnis", min: 5, quelle: "smm1.pdf, S. 34–58", folien: [
  { k: "intro", h: "Wie bringst du die KI zu guten Ergebnissen?", b: "Ein **Prompt** ist deine Anweisung an die KI. Ein Workshop zeigt am Rucksack NORTH/24, wie du Schritt für Schritt zu guten Ergebnissen kommst. Du startest bewusst nicht mit „Schreib mir eine Landingpage“. Nach dieser Lektion kannst du in Schritten prompten und Aussagen mit Tests prüfen." },
  { k: "liste", h: "Kontext schlägt Zauberprompt: 5 Grundregeln", l: [
   "**LLM (Large Language Model):** erkennt Muster in Sprache. Es ist keine Datenbank und kann überzeugend falsch liegen.",
   "**Kreativität oder Verlässlichkeit:** Je faktischer die Aufgabe, desto wichtiger sind Quellen und Prüfung.",
   "**Kontext schlägt Zauberprompt:** Gib Produkt, Ziel, Zielgruppe, Wettbewerb und Tonalität mit.",
   "**Modell ist nicht Werkzeug:** Websuche, Deep Research, Dateien und Bild-KI sind Zusatzfunktionen.",
   "**Urteilsvermögen:** KI produziert. Du verantwortest das Ergebnis."
  ]},
  { k: "text", h: "Nicht ein Prompt, sondern viele Schritte", b: "Erwarte nicht von einem Prompt das fertige Ergebnis. Gehe in Schritten vor: analysieren, recherchieren, Erkenntnisse ableiten, Strategie entwickeln, kritisieren, erstellen, prüfen und verbessern. So wird KI Teil deines Workflows." },
  { k: "liste", h: "Gib der KI eine Rolle und klare Grenzen", l: [
   "**Rolle geben:** „Du bist Senior Marketing Strategist.“ Die KI arbeitet dann aus dieser Sicht.",
   "**Klare Grenzen:** „Schreibe noch keine Werbetexte.“ So bleibt jeder Schritt sauber getrennt.",
   "**Wissen trennen:** Was wissen wir sicher? Was nehmen wir nur an? Was müssen wir recherchieren?",
   "**Quellen trennen:** Beobachtung, Quelle und Interpretation getrennt ausgeben. Einzelmeinungen kennzeichnen.",
   "**Customer Tensions:** Zielkonflikte nach dem Muster „Menschen wollen X, aber gleichzeitig Y.“"
  ]},
  { k: "liste", h: "4 Tests decken schwache Aussagen auf", l: [
   "**Critic Loop:** Die KI wird zum kritischen Creative Director und sucht echte Schwächen.",
   "**So-What-Test:** 5-mal „Warum sollte das den Kunden interessieren?“ fragen, vom Merkmal bis zur Bedeutung.",
   "**Substitution Test:** Welche Aussage könnte ein Wettbewerber fast gleich übernehmen? Stufe sie ein: generisch oder spezifisch.",
   "**Claim Audit:** Jede Produktaussage einstufen als belegt, plausible Interpretation oder nicht belegt."
  ]},
  { k: "text", h: "1 Kernbotschaft, 3 stützende Botschaften", b: "Eine **Message Architecture** ordnet deine Botschaften. Dazu gehört eine **Core Message**, also eine Kernbotschaft. Dazu kommen 3 **Supporting Messages**, also stützende Botschaften. Jede hat einen Kundennutzen, einen Produktbeweis und mögliche Einwände. Jede Aussage kennzeichnest du als Briefing, Research oder Interpretation." },
  { k: "beispiel", h: "NORTH/24: Aus 24 Litern werden 30", b: "NORTH/24 ist ein Rucksack für 149 Euro mit 24 Litern. Die FlexBase bringt 6 Liter extra. Daraus entsteht die Idee „24 → 30“. Die Strategie bleibt auf allen Kanälen gleich, nur die Aufgabe wechselt. Bei Bildern legst du zuerst die Art Direction fest. Beim Bearbeiten nennst du genau, was gleich bleiben soll." },
  { k: "merke", h: "Rolle, Kontext, Grenzen – dann in Schritten", b: "Gib der KI Rolle, Kontext und klare Grenzen. Arbeite in Schritten und lass die KI ihre Ergebnisse kritisch prüfen." },
  { k: "check", q: "Was prüfst du beim Substitution Test?", a: ["Ob ein Wettbewerber eine Aussage fast unverändert für sich nutzen könnte", "Ob jede Produktaussage durch eine Quelle belegt werden kann", "Ob der zentrale Gedanke im Video auch ohne Text verständlich ist", "Ob die Message auf allen Kanälen genau gleich formuliert ist"], c: 0, e: "Der Substitution Test markiert austauschbare Aussagen. Du stufst jede Aussage ein: generisch und verzichtbar, nötige Produktinfo oder spezifisch für die eigene Strategie." }
 ]}
];
