// Zusatzmodul „Social Ads“ – nicht in den Kursunterlagen, nicht im Probetest. Unverändert aus der früheren Fassung übernommen.
// Folientyp „bild“: Schaubilder aus data/bilder.js.
export const L_ADS = [
 {
  "id": "ads-basis",
  "titel": "Social Ads verstehen",
  "min": 4,
  "folien": [
   {
    "k": "intro",
    "h": "Reichweite kaufen – gezielt",
    "b": "Organische Reichweite ist begrenzt. Mit **Anzeigen** erreichst du genau die Menschen, die du ansprechen willst."
   },
   {
    "k": "bild",
    "svg": "funnel",
    "h": "Der Funnel",
    "b": "Je Stufe passen andere Inhalte, Kampagnenziele und Kennzahlen."
   },
   {
    "k": "text",
    "h": "Kampagnenziel zuerst",
    "b": "Werbeplattformen fragen zuerst nach dem Ziel, z. B. bei Meta: **Bekanntheit, Traffic, Interaktionen, Leads, App-Werbung, Umsatz**. Das Ziel bestimmt, wem die Anzeige gezeigt wird."
   },
   {
    "k": "liste",
    "h": "Targeting-Möglichkeiten",
    "l": [
     "Demografie (Alter, Ort, Sprache)",
     "Interessen und Verhalten",
     "Custom Audiences (z. B. Website-Besucher)",
     "Lookalike Audiences („ähnliche Zielgruppen“)",
     "Auf LinkedIn: Jobtitel, Branche, Unternehmensgröße"
    ]
   },
   {
    "k": "text",
    "h": "Retargeting",
    "b": "Menschen erneut ansprechen, die schon Kontakt hatten – z. B. die Website besucht haben. Wichtig: Tracking (z. B. ein Pixel) braucht in der Regel eine **Einwilligung** im Cookie-Banner."
   },
   {
    "k": "merke",
    "h": "Grenzen beim Targeting",
    "b": "Plattformen dürfen Minderjährigen **keine Werbung auf Basis von Profiling** zeigen (Art. 28 DSA) und niemandem Anzeigen auf Basis **sensibler Daten** wie Gesundheit oder Religion (Art. 26 Abs. 3 DSA). Wer Schüler für Ausbildungsplätze erreichen will, setzt deshalb stärker auf **organische Inhalte** und Eltern, Lehrkräfte oder Erwachsene als Zielgruppe."
   },
   {
    "k": "check",
    "q": "Was ist eine Lookalike Audience?",
    "a": [
     "Eine Zielgruppe, die bestehenden Kunden ähnlich ist",
     "Eine Zielgruppe aus Personen, die die Website besucht haben",
     "Eine Zielgruppe aus allen Followern der Konkurrenz",
     "Eine Zielgruppe, die nur aus den bestehenden Kunden besteht"
    ],
    "c": 0,
    "e": "Die Plattform sucht Menschen mit ähnlichen Merkmalen wie eine Ausgangsgruppe, z. B. bestehende Kunden."
   }
  ]
 },
 {
  "id": "ads-kpi",
  "titel": "Kennzahlen bei Anzeigen & Tests",
  "min": 3,
  "folien": [
   {
    "k": "text",
    "h": "Was kostet es?",
    "b": "**CPM** = Kosten pro 1.000 Impressionen.\n**CPC** = Kosten pro Klick.\n**CPL** = Kosten pro Lead (z. B. Anfrage, Bewerbung).\n\nBeispiel: 200 € für 40 Bewerbungen = **5 € CPL**."
   },
   {
    "k": "text",
    "h": "Conversion-Rate",
    "b": "Wie viele der Besucher tun das Gewünschte?\n\n**Conversions ÷ Klicks × 100**\n\nBeispiel: 300 Klicks, 15 Anfragen = **5 %**."
   },
   {
    "k": "text",
    "h": "A/B-Test",
    "b": "Zwei Varianten einer Anzeige gegeneinander testen, die sich in **genau einem Merkmal** unterscheiden (Bild **oder** Text **oder** Zielgruppe). Sonst weißt du nicht, was den Unterschied gemacht hat."
   },
   {
    "k": "check",
    "q": "Du gibst 50 € aus und erhältst 10.000 Impressionen. Wie hoch ist der CPM?",
    "a": [
     "5 €",
     "0,50 €",
     "50 €",
     "500 €"
    ],
    "c": 0,
    "e": "50 € ÷ 10.000 × 1.000 = 5 €."
   }
  ]
 }
];
export const ADS_MODUL = {"name":"Social Ads","kurz":"Social Ads","farbe":"#c2410c","text":"Nicht Teil des Lehrplans und nicht im Probetest – aber in der Praxis gefragt: Anzeigen, Targeting, Funnel und Anzeigen-Kennzahlen."};
