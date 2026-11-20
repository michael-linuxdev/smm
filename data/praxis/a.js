// Praxisprojekte aus den Hausaufgaben (Teil A) für „SMM Coach“ – Stand November 2026.
// Aufbau je Projekt: Aufgabenstellung → Lösungsweg → Lösung.
// Fachliche Grundlage: data/lernen/einf.js (Chancen, Wirkung), platt1.js (viraler Content, Pinterest),
// platt2.js (Instagram & Reels), unt1.js (Ziele), unt2.js (Influencer), recht.js (Werbekennzeichnung).
// Quelle Ice Bucket Challenge: Nature 550, S113 (2017): „Ice bucket challenge“ –
// https://www.nature.com/nature/journal/v550/n7676_supp_out/full/550S113a.html
// Fiktive Firma im Projekt „influencer-messer“. Nike wird nur genannt, weil die Aufgabe es vorgibt.
export const PRAXIS_A = [
{
  id: "viral",
  titel: "Der virale Effekt",
  firma: "Hausaufgabe Social Media Management",
  rolle: "Du erklärst den viralen Effekt und belegst ihn mit einer echten Kampagne.",
  kurz: "Begriff erklären, Beispiel finden, begründen",
  module: ["einf", "plan"],
  min: 9,
  schritte: [
    { k: "szene", h: "Deine Aufgabe",
      b: "Erkläre, was man unter dem **viralen Effekt** in Social Media versteht. Recherchiere danach ein **reales Beispiel**. Es soll eine Social-Media-Kampagne sein, bei der der virale Effekt entscheidend für den Erfolg war. Wir gehen den Lösungsweg jetzt Schritt für Schritt durch." },
    { k: "wahl", h: "Was genau ist gefragt?",
      o: [
        { t: "Nur eine Definition des viralen Effekts", p: 0,
          fb: "Damit fehlt die Hälfte. Die Aufgabe will auch ein **reales Beispiel**. Und du sollst zeigen, warum der virale Effekt dort entscheidend war." },
        { t: "Begriff erklären, reales Beispiel nennen, Rolle des Effekts begründen", p: 2,
          fb: "Genau: drei Teile. Erst die **Erklärung**, dann ein **belegtes Beispiel**, dann die **Begründung**. So gliederst du später auch deine Antwort." },
        { t: "Eine Liste mit möglichst vielen viralen Videos", p: 1,
          fb: "Viele Beispiele zeigen Fleiß, aber keine Tiefe. Gefragt ist **ein** gut belegtes Beispiel. Dazu gehört eine klare Begründung." }
      ] },
    { k: "wahl", h: "Welche Erklärung passt zum Kurs?",
      b: "Die Vorlesung nennt den viralen Effekt bei den **Chancen** von Social Media.",
      o: [
        { t: "Ein Unternehmen kauft viel Werbung und erreicht so viele Menschen", p: 0,
          fb: "Das ist bezahlte Reichweite, kein viraler Effekt. Viral heißt: Die **Nutzer** tragen den Inhalt selbst weiter." },
        { t: "Ein Beitrag erscheint nur bei den eigenen Followern", p: 0,
          fb: "Dann bleibt die Reichweite klein. Beim viralen Effekt erreicht der Inhalt Menschen **außerhalb** der eigenen Community." },
        { t: "Inhalte verbreiten sich von Nutzer zu Nutzer, die Bekanntheit steigt", p: 2,
          fb: "So steht es im Kurs. Der **Empfänger wird zum Sender**: Nutzer teilen und verbreiten Inhalte. Jede Weitergabe erreicht neue Menschen." }
      ] },
    { k: "daten", h: "Kurswissen: Was viralen Content ausmacht", l: [
      "**Antrieb:** Emotion und Überraschung, oft mit Trends oder Influencern",
      "**Wirkung:** viele Interaktionen in kurzer Zeit, mehr Bekanntheit",
      "**Plattformen:** vor allem Reels, TikTok und Facebook",
      "**Grenze:** viraler Content lebt meist nur kurz",
      "**Risiko:** Kontrollverlust, auch Kritik verbreitet sich schnell (Shitstorm)"
    ] },
    { k: "wahl", h: "Welches Beispiel wählst du?",
      b: "Das Beispiel muss real sein und sich belegen lassen.",
      o: [
        { t: "Ein bekannter TV-Spot mit großem Werbebudget", p: 0,
          fb: "Hohe Reichweite durch gekaufte Sendezeit ist **nicht viral**. Der Erfolg kam hier nicht durch Teilen der Nutzer." },
        { t: "Die ALS Ice Bucket Challenge aus dem Jahr 2014", p: 2,
          fb: "Ein starkes Beispiel: real, gut belegt und klar vom **Mitmachen und Teilen** getragen. Eine seriöse Quelle mit Zahlen gibt es auch." },
        { t: "Ein Video, das du mal gesehen hast, ohne Name und Quelle", p: 1,
          fb: "Vielleicht war es viral. Ohne Name, Jahr und Quelle kann aber niemand das prüfen. Recherchiere **belegte Fakten**." }
      ] },
    { k: "daten", h: "Recherche: Ice Bucket Challenge 2014", l: [
      "**Idee:** Eiswasser über den Kopf schütten und ein Video posten",
      "**Mechanik:** Danach nominierst du drei weitere Personen.",
      "**Teilnahme:** über 17 Mio. Menschen luden Videos hoch",
      "**Spenden:** rund 115 Mio. US-$ für die ALS Association",
      "**Vergleich:** im Vorjahreszeitraum waren es 2,8 Mio. US-$",
      "**Quelle:** Fachzeitschrift Nature, 2017"
    ] },
    { k: "wahl", h: "Warum war der virale Effekt hier entscheidend?",
      o: [
        { t: "Jede Teilnahme löste durch die Nominierung neue Teilnahmen aus", p: 2,
          fb: "Das ist der Kern. Die **Nominierung** machte jeden Teilnehmer zum Sender. So wuchs die Reichweite von Netzwerk zu Netzwerk." },
        { t: "Die Videos waren besonders lang und aufwendig produziert", p: 0,
          fb: "Der Aufwand war nicht der Treiber. Mitmachen war einfach: Eiswasser, Video, Nominierung. Gerade das machte das **Teilen** so leicht." },
        { t: "Die Aktion war lustig, darum schauten viele zu", p: 1,
          fb: "Humor und **Emotion** halfen, das passt zum Kurs. Entscheidend war aber, dass Zuschauer selbst mitmachten und weitere Personen nominierten." }
      ] },
    { k: "frei", h: "Jetzt du: die Hausaufgabe",
      b: "Erkläre in Stichpunkten den **viralen Effekt**. Nenne ein **reales Beispiel** mit Name oder Jahr. Begründe, warum der virale Effekt dort entscheidend war.",
      muster: [
        ["Nutzer teilen und verbreiten Inhalte selbst weiter", "\\bteil(?!nehm|weise)|geteilt|weiterteil|\\bshares?\\b|weiterge|weiterleit|verbreit|person zu person|nutzer zu nutzer|empfänger"],
        ["Reichweite und Bekanntheit wachsen schnell", "schnell|rasant|sprunghaft|schneeball|lawine|lauffeuer|exponent|bekanntheit|reichweite"],
        ["Reales Beispiel mit Jahreszahl oder Kampagnenname", "\\b(19|20)\\d{2}\\b|ice.?bucket|challenge|#\\w|„[^“]+“|edeka|heimkommen|duolingo|old spice"],
        ["Mechanik als Begründung: Mitmachen, Nominieren, Emotion", "nominier|mitmach|mitgemacht|machten mit|emotion|überrasch|humor|nachahm"],
        ["Belegte Zahlen oder Quelle", "\\d+([.,]\\d+)?\\s*(mio|millio|mrd|milliard|%|tausend)|nature|quelle"]
      ],
      min: 3,
      bsp: "• Viraler Effekt: Inhalte verbreiten sich von Nutzer zu Nutzer.\n• Der Empfänger wird zum Sender: Nutzer teilen den Inhalt in ihrem Netzwerk.\n• Jede Weitergabe erreicht neue Menschen. Reichweite und Bekanntheit wachsen sehr schnell.\n• Treiber sind Emotion, Überraschung und eine einfache Idee zum Mitmachen.\n• Beispiel: ALS Ice Bucket Challenge 2014. Teilnehmer schütteten Eiswasser über den Kopf und posteten ein Video.\n• Danach nominierten sie drei weitere Personen.\n• Über 17 Mio. Menschen luden Videos hoch.\n• Die ALS Association erhielt rund 115 Mio. US-$ Spenden, im Vorjahreszeitraum 2,8 Mio. US-$ (Nature, 2017).\n• Entscheidend war die Nominierung: Jede Teilnahme löste neue Teilnahmen aus." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "**Viraler Effekt:** Nutzer verbreiten Inhalte selbst weiter, die Bekanntheit steigt.",
      "**Antrieb:** Emotion, Überraschung und eine einfache Mitmach-Idee",
      "**Beispiel:** Ice Bucket Challenge 2014, über 17 Mio. Teilnehmende",
      "**Begründung:** Die Nominierung machte jeden Teilnehmer zum Sender.",
      "**Grenze:** Viralität ist nicht planbar und verpufft oft schnell."
    ] }
  ]
},
{
  id: "nike-kanaele",
  titel: "Nike auf Pinterest & Instagram",
  firma: "Nike (Profilanalyse aus der Aufgabe)",
  rolle: "Du vergleichst zwei Kanäle einer Marke und leitest ihre Ziele ab.",
  kurz: "Zwei Profile analysieren und vergleichen",
  module: ["platt", "unt"],
  min: 10,
  schritte: [
    { k: "szene", h: "Deine Aufgabe",
      b: "Schau dir zwei Profile von Nike an: **pinterest.de/nike/_shop** und **instagram.com/nike**. Leite für jeden Kanal in **3–4 Stichpunkten** die Unterschiede ab. Schließe mit einem **Fazit**: Welche Ziele verfolgt das Unternehmen mit den Kanälen? Wir gehen den Lösungsweg jetzt gemeinsam durch." },
    { k: "wahl", h: "Was genau ist gefragt?",
      o: [
        { t: "Beschreiben, welche Produkte Nike verkauft", p: 0,
          fb: "Die Produkte sind nicht das Thema. Gefragt ist, wie Nike die **Kanäle** unterschiedlich nutzt und warum." },
        { t: "Entscheiden, welcher der beiden Kanäle besser ist", p: 1,
          fb: "Eine Bewertung ist nicht gefragt. Beide Kanäle haben eigene Aufgaben. Du sollst **Unterschiede** und **Ziele** herausarbeiten." },
        { t: "Je Kanal die Unterschiede ableiten und die Ziele im Fazit erklären", p: 2,
          fb: "Genau. Erst analysierst du **beide Profile** getrennt. Dann vergleichst du sie. Am Ende schließt du auf die **Ziele** des Unternehmens." }
      ] },
    { k: "daten", h: "Checkliste für die Profilanalyse", l: [
      "**Formate:** Bilder, Videos, Reels, Storys, Pins?",
      "**Inhalte:** Produkt, Lifestyle, Menschen, Sport, Ideen?",
      "**Ansprache:** sachlich, emotional, persönlich? Gibt es CTAs?",
      "**Verlinkung:** Führen Beiträge direkt in den Shop?",
      "**Nutzungsabsicht:** Warum ist die Zielgruppe auf dem Kanal?",
      "**Interaktion:** Wie viele Kommentare und Reaktionen gibt es?"
    ] },
    { k: "wahl", h: "Wie nutzen Menschen Pinterest laut Kurs?",
      b: "Die Adresse endet auf „_shop“. Achte darauf, wohin die Pins führen.",
      o: [
        { t: "Vor allem zum Chatten mit Freunden und Familie", p: 0,
          fb: "Das passt eher zu Messengern. Auf Pinterest heften Nutzer Bilder an **Pinnwände** und sammeln Ideen." },
        { t: "Als visuelle Suchmaschine für Ideen und geplante Käufe", p: 2,
          fb: "So beschreibt es der Kurs. Pins werden **lange gefunden**, ranken in der Google-Bildersuche und führen per Link in den **Shop**." },
        { t: "Vor allem für Nachrichten in Echtzeit", p: 1,
          fb: "Aktuelle Trends gibt es auch dort. Pinterest-Inhalte sind aber **langlebig**. Nutzer suchen eher Inspiration als Neuigkeiten." }
      ] },
    { k: "wahl", h: "Was zeichnet Instagram laut Kurs aus?",
      o: [
        { t: "Klickbare Links in jedem Beitrag, die direkt zum Kauf führen", p: 0,
          fb: "Laut Kurs sind Links in Beiträgen **nicht klickbar**. Instagram lebt eher von Bildern, Videos und Interaktion." },
        { t: "Lange Fachartikel und Whitepaper für Profis", p: 0,
          fb: "Das passt eher zu Blogs oder LinkedIn. Instagram ist eine **visuelle Plattform** für Momente und Emotionen." },
        { t: "Reels, Storys und Feel-good-Content für die Community", p: 2,
          fb: "Richtig. Instagram setzt auf **Feel-good-Content**. Reels bringen viele Interaktionen. Speichern zählt für den Algorithmus am meisten." }
      ] },
    { k: "wahl", h: "Welches Fazit ist fachlich am stärksten?",
      o: [
        { t: "Beide Kanäle verfolgen genau dasselbe Ziel", p: 0,
          fb: "Dann bräuchte Nike keine zwei Profile. Jeder Kanal hat eigene Stärken und damit **eigene Ziele**." },
        { t: "Pinterest bringt Traffic und Verkauf, Instagram Image und Bindung", p: 2,
          fb: "Stark: Die Kanäle **ergänzen sich**. Pinterest begleitet die Kaufplanung. Instagram stärkt Markenbild, Bekanntheit und **Kundenbindung**." },
        { t: "Beide Kanäle dienen nur dem Verkauf", p: 1,
          fb: "Verkauf ist ein Ziel. Auf Instagram stehen laut Kurs aber eher **Community** und Markenbild im Vordergrund." }
      ] },
    { k: "frei", h: "Jetzt du: die Hausaufgabe",
      b: "Schreibe je Kanal **3–4 Stichpunkte** zu den Unterschieden. Ergänze ein kurzes **Fazit** zu den Zielen. Stütze dich auf das, was du auf den Profilen siehst, und auf den Kurs.",
      muster: [
        ["Pinterest: Inspiration, Ideen, Suche", "\\bsuch|suchmaschine|inspir|ideen|pinnw|planen"],
        ["Pinterest: langlebige Pins und Verlinkung in den Shop", "shop|traffic|verlink|\\blinks?\\b|langlebig|lange gefunden|google"],
        ["Instagram: Reels, Storys und Videos", "reels?|stor(y|ys|ies)\\b|\\blive\\b|video"],
        ["Instagram: Community, Interaktion, Markenbild", "communit|interaktion|kommentar|markenbild|image|emotion|lifestyle|feel.?good"],
        ["Fazit: Ziele wie Verkauf, Bekanntheit, Kundenbindung", "\\bziel|bekanntheit|kundenbindung|umsatz|verkauf|traffic|reichweite|ergänz"]
      ],
      min: 4,
      bsp: "Pinterest:\n• Visuelle Suchmaschine: Nutzer suchen Ideen und planen Käufe.\n• Pins zeigen Produkte und Outfits als Inspiration.\n• Pins sind langlebig und ranken auch in der Google-Bildersuche.\n• Links führen direkt in den Shop.\nInstagram:\n• Reels, Storys und Bilder mit Sport und Lifestyle\n• Emotionale Ansprache und Feel-good-Content statt Produktliste\n• Ziel ist Interaktion: Likes, Kommentare, Speichern und Teilen.\n• Links in Beiträgen sind nicht klickbar, der Fokus liegt auf dem Markenbild.\nFazit:\n• Pinterest bringt Traffic und Verkauf.\n• Instagram stärkt Bekanntheit, Image und Kundenbindung.\n• Die Kanäle ergänzen sich entlang der Kaufentscheidung." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "**Analyse:** Formate, Inhalte, Ansprache, Verlinkung und Nutzungsabsicht prüfen",
      "**Pinterest:** Inspiration, Suche, langlebige Pins, Links in den Shop",
      "**Instagram:** Community, Reels und Storys, Markenbild, Interaktion",
      "**Fazit:** Pinterest zielt auf Traffic und Verkauf, Instagram auf Image und Bindung.",
      "Jeder Kanal bekommt eine eigene Aufgabe."
    ] }
  ]
},
{
  id: "influencer-messer",
  titel: "Influencer fürs Taschenmesser",
  firma: "Gipfelwerk Outdoor GmbH, Chemnitz",
  rolle: "Du planst als Social Media Manager eine Influencer-Kooperation für ein neues Produkt.",
  kurz: "Passende Form der Zusammenarbeit finden",
  module: ["unt", "recht"],
  min: 10,
  schritte: [
    { k: "szene", h: "Deine Aufgabe", wer: "Katrin Albers, Geschäftsführerin",
      b: "Du bist unser Social Media Manager. Unser neuestes Produkt ist ein **Outdoor-Multifunktions-Taschenmesser**. Mit Influencer Marketing wollen wir es bekannt machen. Wie soll der Influencer berichten? Unboxing, Product Placement oder ganz anders? Schlag mindestens **eine Form der Zusammenarbeit** mit einem passenden Influencer vor. Begründe sie kurz." },
    { k: "daten", h: "Ausgangslage", l: [
      "**Produkt:** Taschenmesser mit Klinge, Säge, Feuerstarter und Dosenöffner",
      "**Zielgruppe:** Wanderer und Camper zwischen 25 und 45 Jahren",
      "**Ziel:** das Produkt in der Zielgruppe bekannt machen",
      "**Budget:** 4.000 € für die erste Kooperation",
      "**Stärke:** robust, leicht und für viele Situationen draußen"
    ] },
    { k: "wahl", h: "Was genau ist gefragt?",
      o: [
        { t: "Eine Form der Zusammenarbeit, ein passender Influencer, eine Begründung", p: 2,
          fb: "Genau. Du brauchst eine **Form**, einen passenden **Influencer** und eine kurze **Begründung**. Alles muss zum Ziel Bekanntheit passen." },
        { t: "Eine Liste aller Influencer mit den meisten Followern", p: 0,
          fb: "Die Zahl der Follower allein beantwortet die Frage nicht. Gefragt ist, **wie** der Influencer berichten soll." },
        { t: "Ein fertiger Text, den der Influencer posten soll", p: 1,
          fb: "Ein Text ist zu früh und zu eng. Erst klärst du **Form und Partner**. Außerdem braucht der Influencer kreative Freiheit." }
      ] },
    { k: "wahl", h: "Welcher Influencer passt am besten?",
      o: [
        { t: "Ein Mega-Influencer aus der Musikszene mit 2 Mio. Followern", p: 1,
          fb: "Viel Reichweite, aber nur 1–5 % Interaktion. Außerdem fehlt der **Brandfit**: Musik hat wenig mit Outdoor zu tun." },
        { t: "Ein Micro-Influencer mit Fokus auf Wandern und Bushcraft", p: 2,
          fb: "Klares Thema, hohe **Social Authority** in der Nische, starke Nähe zur Community. Das passt zum Produkt und zum Budget." },
        { t: "Eine Beauty-Influencerin, weil sie gerade sehr gefragt ist", p: 0,
          fb: "Thema und Marke passen nicht zusammen. Ohne **Brandfit** wirkt die Empfehlung unglaubwürdig. Die Zielgruppe erreichst du so kaum." }
      ] },
    { k: "wahl", h: "Welche Form der Zusammenarbeit passt?",
      b: "Ein Taschenmesser überzeugt durch seine **Funktionen**.",
      o: [
        { t: "Nur ein Unboxing-Video zu Hause am Tisch", p: 1,
          fb: "Ein Unboxing zeigt Verpackung und ersten Eindruck. Die Funktionen im Einsatz sieht die Community aber nicht." },
        { t: "Ein Test auf einer echten Tour, in mehreren Teilen", p: 2,
          fb: "Ein **Test** im Einsatz macht das Produkt **erlebbar**. Die Community sieht Säge, Feuerstarter und Klinge in echten Situationen. Das schafft Vertrauen." },
        { t: "Das Messer liegt nur nebenbei im Bild", p: 0,
          fb: "Bei so einem **Product Placement** geht die Botschaft leicht unter. Der Kurs warnt davor: Der Rahmen muss vorher klar sein." }
      ] },
    { k: "wahl", h: "Was gehört ins Briefing?",
      o: [
        { t: "Ein fertiger Text, den der Influencer wörtlich übernimmt", p: 0,
          fb: "Dann wirkt der Beitrag wie plakative Werbung. Laut Kurs braucht der Influencer **kreative Freiheit**, damit er authentisch bleibt." },
        { t: "Gar nichts, er bekommt einfach ein Messer geschickt", p: 1,
          fb: "Das lässt Freiheit, aber ohne Rahmen kann die Botschaft untergehen. Ein **Briefing** klärt Ziel, Format und No-Gos." },
        { t: "Produktinfos, Ziel, Format, Zeitpunkt, Hashtags und No-Gos", p: 2,
          fb: "Ein gutes **Briefing** gibt Orientierung. Ein No-Go wäre zum Beispiel ein leichtsinniger Umgang mit der Klinge. Dazu kommen Vertrag und Freigaben." }
      ] },
    { k: "wahl", h: "Wie wird der Beitrag gekennzeichnet?",
      b: "Der Influencer bekommt Honorar und das Messer.",
      o: [
        { t: "Gar nicht, das Messer ist ja nur ein Geschenk", p: 0,
          fb: "Auch eine **Sachleistung** ist eine Gegenleistung. Ohne Kennzeichnung droht **Schleichwerbung**, die in der Regel unlauter ist." },
        { t: "Deutlich mit „Werbung“ oder „Anzeige“, gleich zu Beginn", p: 2,
          fb: "So ist die Werbung klar erkennbar. Der Kurs nennt genau diese Begriffe. Ein Link zum Hersteller ist außerdem immer Werbung." },
        { t: "Mit einem kleinen Hashtag ganz am Ende der Hashtags", p: 1,
          fb: "Versteckt ist die Kennzeichnung kaum erkennbar. Werbung muss **auf den ersten Blick** als Werbung zu sehen sein." }
      ] },
    { k: "frei", h: "Jetzt du: die Hausaufgabe",
      b: "Schlage mindestens **eine Form der Zusammenarbeit** vor. Beschreibe einen **passenden Influencer**. Begründe deine Wahl kurz. Denke auch an die Kennzeichnung.",
      muster: [
        ["Form der Zusammenarbeit genannt", "unboxing|product placement|produktplatzierung|\\btest|rezension|review|tutorial|takeover|gewinnspiel|rabatt"],
        ["Passender Influencer: Outdoor-Thema, Micro oder Nano", "micro|mikro|nano|outdoor|wander|camp|bushcraft|survival|brandfit|nische"],
        ["Begründung: erlebbar, glaubwürdig, Funktionen im Einsatz", "vertrau|glaubw|authent|erlebbar|praxis|einsatz|funktion"],
        ["Kennzeichnung als Werbung oder Anzeige", "werbung|anzeige|kennzeichn|#ad\\b"],
        ["Rahmen: Briefing, Vertrag, Freigabe oder Erfolgskontrolle", "briefing|vertrag|freigabe|rabattcode|kennzahl|engagement|kontroll|messen"]
      ],
      min: 3,
      bsp: "• Form: Produkttest auf einer echten Wandertour, als Reel-Serie in drei Teilen.\n• Kurzes Unboxing als Einstieg, danach Säge, Feuerstarter und Klinge im Einsatz.\n• Influencer: Micro-Influencer mit Fokus auf Wandern und Bushcraft.\n• Begründung: Klares Thema und guter Brandfit. Die Community vertraut seinem Urteil.\n• Der Test macht die Funktionen erlebbar und wirkt authentisch.\n• Micro-Influencer haben eine enge Bindung zur Community und passen zum Budget.\n• Rahmen: Briefing mit Ziel, Format und No-Gos, kreative Freiheit, Vertrag und Freigabe.\n• Kennzeichnung: deutlich mit „Werbung“ zu Beginn des Beitrags.\n• Optional: Rabattcode, um den Erfolg zu messen." },
    { k: "fazit", h: "Die Lösung kompakt", l: [
      "**Form:** Ein Test im Einsatz macht ein Funktionsprodukt erlebbar.",
      "**Partner:** Micro-Influencer mit Outdoor-Thema und gutem Brandfit",
      "**Rahmen:** Briefing, kreative Freiheit, Vertrag und Freigabe",
      "**Recht:** Bezahlte Beiträge klar mit „Werbung“ oder „Anzeige“ kennzeichnen."
    ] }
  ]
}
];
