// Bewusst gestrichene Fragen (Limit: höchstens 400 Fragen inkl. Lektions-Checks, Vorgabe des Nutzers).
// Gründe: Dubletten, im Glossar abgedeckte Begriffsfragen, Randwissen. Begründung je Frage siehe Kommentar.
export const GESTRICHEN = [
 "Wofür steht das „T“ in SMART?", // unt: Fast-Dublette zum Check „Welches Ziel ist SMART formuliert?“, Mehrfachfrage SMART und Freitext SMART-Ziel
 "Was ist der erste Schritt einer Social-Media-Strategie?", // unt: Fast-Dublette zu Freitext „Schritte zur Planung einer Social-Media-Strategie“ und Check Status-quo-Analyse
 "Was hilft am meisten bei einem Shitstorm?", // plan: Fast-Dublette zum Check krise („Krisenplan … erstellen“) und Mehrfachfrage Krisenvorbereitung
 "Was gehört in ein gutes Reporting?", // kpi: Dublette zum Check „Was macht ein Reporting wertvoll?“ (identische Lösung)
 "Was beobachtet Social Listening?", // kpi: Fast-Dublette zu Check monitoring und Mehrfachfrage „Was trifft auf Social Listening zu?“
 "Ein Video hat 10.000 Reichweite und 300 Interaktionen. Engagement-Rate?", // kpi: Dublette zum Check „…4.000 Personen … 200 Interaktionen. Engagement-Rate“ (gleiche Rechnung)
 "Was ist ein korrekter A/B-Test?", // kpi: Fast-Dublette zu „Was ist für einen aussagekräftigen A/B-Test wichtig?“ und „…ursächlich nachzuweisen“ (A/B-Test, ein Merkmal)
 "Was gehört in eine vollständige Budgetplanung?", // unt: Fast-Dublette zum Check „…bei der Budgetplanung am häufigsten vergessen?“ und Freitext Kostenblöcke
 "Ein Influencer bekommt Geld für einen Post. Was ist Pflicht?", // recht: Fast-Dublette zur Mehrfachfrage Kennzeichnung Reel, Freitext Influencerin und Kamera-Geschenk-Frage
 "Du willst ein Teamfoto posten. Was brauchst du?", // recht: Fast-Dublette zu Freitext Firmenfeier-Foto und Mehrfachfrage Fotos von Mitarbeitenden
 "Wo sollte das Impressum auf einem Social-Media-Profil stehen?", // recht: Fast-Dublette zu Freitext Impressum-Anforderungen und Check impressum
 "Was ist eine Chance von Social Media für Unternehmen?", // einf: Fast-Dublette zu Mehrfachfrage „Welche Chancen bietet Social Media…“ und Freitext „Nennen Sie drei Chancen…“
 "Was ist Employer Branding?", // unt: Fast-Dublette zum Freitext „Was versteht man unter Employer Branding?…“
 "Was bedeutet CPC?", // kpi: Abkürzungsfrage CPC, abgedeckt durch CPC-Rechenfrage, Freitext-Rechnung und Glossar
 "Wer hat den Begriff „Web 2.0“ Mitte der 2000er-Jahre maßgeblich bekannt gemacht?", // einf: Personen-Trivia (Tim O’Reilly) ohne Lernwert; Web 2.0 durch Check web20, Freitext und Mehrfachfrage abgedeckt
 "Was bedeutet „Viralität“ in Social Media?", // einf: Dublette zum Check „Was kennzeichnet den viralen Effekt?“ (Lektion viral); Viralität auch im Glossar
 "Ein Getränkehersteller lässt seine Community über die nächste Sorte abstimmen und Vorschläge einreichen. Wie nennt man das?", // einf: Dublette zum Check „…Produktideen einreichen und darüber abstimmen“ (Crowdsourcing, Lektion einsatz)
 "Was ist der Vorteil von Lead-Gen-Formularen in LinkedIn-Anzeigen?", // ads: Zusatzmodul ads (nicht prüfungsrelevant), LinkedIn-Plattformdetail
 "Was sind TikTok Spark Ads?", // ads: Zusatzmodul ads, schnell veraltendes TikTok-Werbeformat-Detail
 "Was ist ein „Stitch“ auf TikTok?", // platt: Plattform-Funktionsdetail (TikTok Stitch), für IHK-Test unwahrscheinlich
 "Wie legt man auf YouTube Kapitel in einem Video an?", // platt: Plattform-Bediendetail (YouTube-Kapitel per Zeitstempel)
 "Was bietet ein gemeinsamer Posteingang (Social Inbox) in einem Social-Media-Tool?", // platt: Fast-Dublette zu „Welche Zusatzfunktion bieten viele Publishing-Tools…“ (gemeinsamer Posteingang)
 "Wer prägte 2006 den Begriff „Enterprise 2.0“?", // unt: Personen-/Jahreszahl-Trivia (McAfee 2006)
 "Welcher Nutzen wird Enterprise 2.0 typischerweise zugeschrieben?", // unt: Fast-Dublette zu „Was beschreibt Enterprise 2.0?“ (gleiches Lernziel)
 "Welche Angabe gehört bei einer GmbH ins Impressum nach § 5 DDG?", // recht: Fast-Dublette zur Mehrfachfrage „GmbH … Impressum nach § 5 DDG“
 "Welche Vorschrift verlangt in Deutschland eine Einwilligung, bevor nicht notwendige Cookies oder Tracking-Pixel auf dem Endgerät gespeichert oder ausgelesen werden?", // recht: Dublette zum Check dsgvo (Meta-Pixel/Einwilligung) und Freitext Tracking-Pixel
 "Seit wann müssen Unternehmen als Betreiber nach Art. 50 Abs. 4 KI-Verordnung von ihnen erzeugte Deepfakes offenlegen?", // recht: Datums-Trivia (KI-VO Art. 50 ab 2.8.2026); Kennzeichnung über Frage „KI-Video … täuschend echt“ und Freitext KI abgedeckt
 "Was verlangt Art. 4 KI-Verordnung (in der Fassung des Digital-Omnibus) von Unternehmen, die KI-Tools einsetzen?", // recht: Sehr schnell veraltendes Gesetzgebungsdetail (Digital-Omnibus, Art. 4 KI-VO)
 "Welche Behörde ist in Deutschland zentraler Koordinator für digitale Dienste nach dem Digital Services Act (DSA)?", // recht: Behörden-Trivia (Bundesnetzagentur als DSC)
 "Mit 2.000 € Werbebudget werden 8.000 € Umsatz erzielt. Wie hoch ist der ROAS?", // kpi: Dublette zum Check „500 € … 2.000 € Umsatz. ROAS?“ (gleiche Rechnung, gleiches Ergebnis 4)
 "Von 1.000 Erwähnungen einer Marke sind 280 positiv, 120 negativ und 600 neutral. Wie hoch ist der Anteil negativer Erwähnungen?", // kpi: Fast-Dublette zu Sentiment-Ratio-Frage und Mehrfachfrage Sentiment-Rechnung
 "Ein Handwerksbetrieb hat ein kameraaffines, sehr engagiertes Azubi-Team. Wohin gehört das in der SWOT-Analyse?", // unt: Fast-Dublette zur SWOT-Frage Fahrradladen, Check analyse und Mehrfachfrage interne Faktoren
 "Eine Neukunden-Kampagne soll keine bestehenden Kunden erreichen. Was tun Sie im Targeting?", // ads: Zusatzmodul ads, Targeting-Detail (Exclusion); Targeting bleibt über Begriffsfrage abgedeckt
 "Was gilt seit Januar 2023 für XING-Gruppen?", // platt: Jahreszahl-Trivia (XING-Gruppen 2023); XING durch Check und Freitext zu XING/X abgedeckt
 "Wofür verhängte die EU-Kommission im Dezember 2025 eine DSA-Geldbuße gegen X?", // platt: Jahres-/Ereignis-Trivia (DSA-Geldbuße gegen X 12/2025), schnell veraltend
 "Kommt es nach dem BAG für die Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG darauf an, ob der Arbeitgeber die Daten auswerten will?", // unt: Dublette zum Check governance-zugaenge (Betriebsrat/Mitbestimmung bei Überwachungseignung); BAG-Detail
 "Ihr vergleicht die Impressionen eines Instagram-Beitrags von 2023 mit den Aufrufen eines Beitrags von 2025. Worauf müsst ihr achten?", // kpi: Schnell veraltendes Meta-Kennzahlen-Detail (Impressionen→Aufrufe); Vergleichbarkeit über „feste Quelle und Definition“ und Benchmarking abgedeckt
 "Wie viele Hashtags erlaubt Instagram seit der Umstellung Ende 2025 höchstens pro Beitrag oder Reel?", // plan: Schnell veraltendes Plattformdetail (Instagram-Hashtag-Limit seit Ende 2025)
 "Ein Hersteller von Backöfen verkauft an Bäckereien. Was beschreibt diese Art von Geschäft?", // einf: Begriffsfrage B2B: Glossar + Check „Krume liefert … an ein Hotel“ (grundwortschatz)
 "Was beschreibt „Earned Media“?", // unt: Begriffsfrage Earned Media: Glossar + Check „Ein begeisterter Kunde teilt euren Beitrag…“
 "Was ist eine „Persona“?", // unt: Begriffsfrage Persona: Glossar + Check persona + Mehrfachfrage/Freitext Persona
 "Was beschreibt „Outsourcing“ im Social Media Management?", // unt: Begriffsfrage Outsourcing: Glossar + Agentur-Frage und Freitext Auslagerung
 "Was ist im Datenschutz eine wirksame „Einwilligung“?", // recht: Begriffsfrage Einwilligung: Glossar + Mehrfachfrage „Anforderungen … wirksame Einwilligung nach DSGVO“
 "Was bedeutet „Conversion“?", // kpi: Begriffsfrage Conversion: Glossar + Check „Dinkelbrot-Kampagne … Conversion“
 "Wofür steht „KPI“?", // kpi: Begriffsfrage KPI: Glossar + „Wann wird aus einer Kennzahl ein KPI?“
 "Was misst die CTR (Click-Through-Rate)?", // kpi: Begriffsfrage CTR: Glossar + „Wie berechnet man die CTR?“ + Freitext-Rechnung
 "Was beschreibt der ROI (Return on Investment)?", // kpi: Begriffsfrage ROI: Glossar + ROI-Rechnung und ROI/ROAS-Abgrenzung
 "Was beschreibt der ROAS (Return on Ad Spend)?", // kpi: Begriffsfrage ROAS: Glossar + Check ROAS-Rechnung + „Worin unterscheidet sich der ROI vom ROAS?“
 "Was bedeutet „CPA“ bei Anzeigen?", // kpi: Begriffsfrage CPA: Glossar + CPA-Rechenfrage + Freitext CPM/CPC/CPA/ROAS
 "Was zeigt die Engagement-Rate?", // kpi: Begriffsfrage Engagement-Rate: Glossar + Check und mehrere Rechenfragen
 "Was beschreibt der „Share of Voice“?", // kpi: Begriffsfrage Share of Voice: Glossar + Check SoV-Rechnung (benchmarking)
 "Was beschreibt ein „Funnel“ im Marketing?", // plan: Begriffsfrage Funnel: Glossar + Awareness-Frage + Freitext Funnel/Customer Journey
 "Was beschreibt die „Customer Journey“?", // plan: Begriffsfrage Customer Journey: Glossar + Touchpoint-Frage + Freitext Funnel/Customer Journey
 "Was ist ein „Shitstorm“?", // plan: Begriffsfrage Shitstorm: Glossar + Freitext Shitstorm-Begriff + Shitstorm-Skala-Frage
 "Was bedeutet „Geotargeting“?", // ads: Zusatzmodul ads, Begriffsfrage (Geotargeting im Glossar), Targeting-Frage bleibt
 "Was beschreibt der Begriff „Streuverlust“?", // ads: Zusatzmodul ads, Begriffsfrage (Streuverlust im Glossar)
 "Was sind „Creatives“ bei einer Anzeige?", // ads: Zusatzmodul ads, Begriffsfrage (Creatives im Glossar)
 "Was machte die ALS Ice Bucket Challenge 2014 vor allem viral?", // einf: Dublette zum Check „Was war der entscheidende virale Mechanismus der Ice Bucket Challenge?“
 "Welches dieser Netzwerke nutzten laut Bericht zur ARD/ZDF-Medienstudie 2026 die meisten Menschen ab 14 mindestens wöchentlich?", // einf: Schnell veraltende Studienzahl (ARD/ZDF 2026); Lektion nutzung-de hat eigenen Check
 "Fans reichen auf LEGO Ideas eigene Set-Ideen ein. Was erhält ein Fan, wenn daraus ein Set wird?", // einf: Detail-Trivia (LEGO-Ideas-Umsatzbeteiligung 1 %)
 "Warum eignet sich Pinterest gut, um Besucher auf eine Website zu bringen?", // platt: Dublette zum Check „Was unterscheidet Pinterest von den meisten anderen Netzwerken?“
 "Was ist das Fediverse?", // platt: Fast-Dublette zu „Was ist das Besondere an Mastodon?“ und Mehrfachfrage Mastodon/Fediverse; Begriff im Glossar
 "Was sind YouTube Shorts?", // platt: Schnell veraltendes Plattformdetail (Shorts-Länge); YouTube durch Check und Mehrfachfrage abgedeckt
 "Was versteht man unter Social Media Relations?", // unt: Dublette zum Check smr und Freitext „Erklären Sie den Begriff Social Media Relations…“; Begriff im Glossar
 "Welche Kennzahl passt zum Ziel „Verkäufe“ bei einer Influencer-Kampagne?", // unt: Dublette zum Check „Wie lässt sich der Verkaufserfolg eines Influencer-Posts am besten messen?“
 "Warum sollte ein Unternehmen auf negative Bewertungen öffentlich antworten?", // plan: Fast-Dublette zum Check bewertungen und Freitext Ein-Stern-Bewertung
];
