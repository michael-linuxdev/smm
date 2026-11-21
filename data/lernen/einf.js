// Lektionen „Routenplaner Web 2.0“ – Zusammenfassung von smm3.pdf, S. 328–382 (Vorlesung „Social Media Management – Eine Einführung“), S. 231–251 (BVCM-Stellenprofil Social Media Manager) und S. 252–327 (BVCM-Studie 2023), einfache Sprache.
export const L_EINF = [
 { id: "web20", titel: "Was ist Social Media?", min: 3, quelle: "smm3.pdf, S. 331–337; smm1.pdf, S. 66, 68 und 73", folien: [
  { k: "intro", h: "Warum reden heute alle über Marken?", b: "Früher sendeten Medien, heute antworten alle. Ziel: Du kannst 3 Formen der Kommunikation unterscheiden und erklären, wie Vertrauen entsteht." },
  { k: "liste", h: "Einer an viele, einer an einen, viele an viele", l: [
   "**1:n Massen-Kommunikation:** Zeitung, Website, Radio, TV",
   "**1:1 persönlich:** E-Mail, Telemarketing (Werbe-Anrufe)",
   "**n:n Social Media:** Viele reden offen mit vielen.",
   "Diese Einteilung stammt von Hettler (2010)."
  ]},
  { k: "bild", svg: "kommunikation", h: "Nutzer hören nicht nur zu, sie gestalten mit", b: "Nutzer wählen aus, ignorieren, kommentieren, bewerten, verändern und teilen. Empfehlungen beeinflussen, was andere kaufen." },
  { k: "liste", h: "Die 3 A: Austausch, Anders, Alltag", l: [
   "**Austausch:** Alle reden öffentlich online miteinander, weltweit.",
   "**Anders:** Wir informieren uns heute grundlegend anders.",
   "**Alltag:** Man spricht über Firmen, ob sie wollen oder nicht."
  ]},
  { k: "liste", h: "Vertrauen entsteht durch Empfehlung und Offenheit", l: [
   "**Empfehlungen:** Freunde wirken stärker als Fremde.",
   "**Offenheit:** Die Firma ist ehrlich statt aufdringlich.",
   "**Persönlicher Kontakt:** Die Firma wirkt menschlich.",
   "**Gefühle:** Die Firma löst Gefühle aus und vermittelt sie."
  ]},
  { k: "text", h: "Das Social Media Prisma ist eine Grafik", b: "Das **Social Media Prisma** der Firma ethority zeigt die deutschen Social-Media-Plattformen auf einen Blick. Es ist eine Grafik, keine Rechenmethode." },
  { k: "merke", h: "Aus Monolog wird Dialog", b: "Das Erfolgsrezept von Social Media: Der **Empfänger wird gleichzeitig zum Sender**." },
  { k: "check", q: "Was macht laut Vorlesung das Erfolgsrezept von Social Media aus?", a: ["Der Empfänger wird gleichzeitig zum Sender.", "Unternehmen senden ihre Botschaft an viele Menschen.", "Nachrichten gehen nur direkt an eine Person.", "Nutzer lesen Inhalte, ohne zu antworten."], c: 0, e: "In sozialen Medien werden aus Monologen Dialoge. Jeder kann antworten, bewerten und teilen. Der Empfänger ist also zugleich Sender." }
 ]},

 { id: "nutzung-de", titel: "Wie Deutschland Social Media nutzt", min: 3, quelle: "smm3.pdf, S. 339–342", folien: [
  { k: "intro", h: "Wie viele Menschen erreichst du über Social Media?", b: "Mit Zahlen begründest du, warum sich ein Kanal lohnt. Ziel: Du kannst die wichtigsten Nutzungszahlen und die 3 häufigsten Gründe nennen." },
  { k: "liste", h: "Fast alle sind online, die meisten täglich mobil", l: [
   "**96 Prozent** sind online.",
   "**79 Prozent** nutzen das Internet täglich mobil (am Handy).",
   "**40 Prozent:** Instagram ist Nummer 1 vor Facebook.",
   "Quellen: ARD/ZDF-Medienstudie 2025, Meltwater Digital Report 2023"
  ]},
  { k: "liste", h: "30 Minuten täglich, 5 Konten, Video vorn", l: [
   "**30 Minuten** Social Media pro Tag",
   "**5 Konten** (Accounts) hat jeder im Durchschnitt.",
   "**98 Prozent:** Video liegt vor Audio und Text.",
   "Quellen: ARD/ZDF-Medienstudie 2025, Meltwater Digital Report 2023"
  ]},
  { k: "liste", h: "Grund Nummer 1: Kontakt mit Freunden", l: [
   "**71 Prozent:** mit Freunden austauschen, Kontakt halten",
   "**61 Prozent:** Unterhaltung",
   "**37 Prozent:** Nachrichten und Informationen",
   "Quelle: Social Media Report 2026"
  ]},
  { k: "liste", h: "Selten: Job, Beschwerde, Partner", l: [
   "**12 Prozent:** einen neuen Job finden",
   "**11 Prozent:** sich bei Unternehmen beschweren",
   "**6 Prozent:** einen Lebenspartner finden",
   "Quellen: ARD/ZDF-Medienstudie 2025, Digital 2024 (DataReportal)"
  ]},
  { k: "merke", h: "Kontakte und Unterhaltung stehen vorn", b: "Menschen nutzen Social Media vor allem für **Kontakte und Unterhaltung**. Video liegt klar vor Audio und Text." },
  { k: "check", q: "Welcher Nutzungsgrund liegt laut Social Media Report 2026 auf Platz 1?", a: ["Mit Freunden austauschen und Kontakt halten", "Nachrichten verfolgen und Informationen suchen", "Einen neuen Job oder Arbeitgeber finden", "Sich bei Unternehmen über etwas beschweren"], c: 0, e: "71 Prozent nutzen Social Media für Austausch und Kontakt mit Freunden. Danach folgen Unterhaltung (61 Prozent) und Nachrichten (37 Prozent)." }
 ]},

 { id: "chancen", titel: "Potenziale, Chancen & Risiken", min: 3, quelle: "smm3.pdf, S. 344–345 und 370–371", folien: [
  { k: "intro", h: "Lohnt sich Social Media trotz der Risiken?", b: "Fast alle Unternehmen sind dabei, besonders Dienstleister. Firmen nutzen Social Media immer professioneller, auch innerhalb der Firma. Ziel: Du kannst Chancen, Risiken und die Lösung nennen." },
  { k: "liste", h: "Chancen: Reichweite, Dialog, niedrige Kosten", l: [
   "**Reichweite:** viele Nutzer, **viraler Effekt** (Nutzer teilen weiter)",
   "**Kosten:** niedrige **Transaktions-Kosten** (Aufwand je Kontakt)",
   "**Dialog:** Kunden binden sich stärker, weltweit.",
   "**Sichtbarkeit:** mehr **Traffic** (Besucher) auf der Website"
  ]},
  { k: "liste", h: "Risiken: Shitstorm, Rechtsverstoß, Kontrollverlust", l: [
   "**IT-Sicherheit**, Rechtsverstöße und Datenschutz",
   "**Shitstorm** (Welle der Empörung): Fehltritte schaden dem Ruf.",
   "**Kontrollverlust:** Die Firma bestimmt nicht allein die Gespräche.",
   "**Aufwand:** Zeit, Geld; Wissen und Firmengeheimnisse dringen nach außen."
  ]},
  { k: "liste", h: "Große Firmen kämpfen mit langen Wegen", l: [
   "Sie haben Angst vor Shitstorms.",
   "Sie müssen Wildwuchs bremsen und Zuständigkeiten klären.",
   "Entscheidungen dauern lange, die Strukturen sind starr.",
   "**IT-Compliance** (Sicherheitsregeln) und Betriebsrat reden mit."
  ]},
  { k: "liste", h: "Kleinen Firmen fehlen Budget und Personal", l: [
   "Sie müssen überhaupt erst auffallen.",
   "Es fehlen Budget, Personal, Erfahrung und **Know-how** (Fachwissen).",
   "Meist macht eine Person alle Aufgaben.",
   "Die Technik fehlt. Viele fragen: „Brauch ich das?“"
  ]},
  { k: "merke", h: "Gegen Risiken hilft Social Media Governance", b: "**Social Media Governance** heißt: klare Regeln, Rollen und Abläufe für Social Media im Unternehmen." },
  { k: "check", q: "Welche Lösung nennt die Vorlesung für die Risiken von Social Media?", a: ["Social Media Governance mit klaren Regeln", "Komplett auf eigene Social-Media-Kanäle verzichten", "Nur noch bezahlte Anzeigen schalten", "Kommentare auf allen Kanälen abschalten"], c: 0, e: "Die Vorlesung nennt Social Media Governance als Lösung. Regeln, Rollen und Abläufe senken Risiken wie Shitstorms, Rechtsverstöße oder Kontrollverlust." }
 ]},

 { id: "viral", titel: "Der virale Effekt", min: 3, quelle: "smm3.pdf, S. 345 und Hausaufgabe „Social Media Management“; smm1.pdf, S. 72 und 75; Beispiele: Nature 2017, Wikipedia „Heimkommen“", folien: [
  { k: "intro", h: "Warum verbreiten sich Beiträge wie ein Virus?", b: "Viral heißt: Nutzer geben einen Inhalt selbst weiter, von Person zu Person. Ziel: Du kannst den Effekt erklären und mit einem Beispiel belegen." },
  { k: "bild", svg: "viral", h: "Jede Weitergabe öffnet ein neues Netzwerk", b: "So wächst die Reichweite sprunghaft. Aber auch Kritik verbreitet sich so schnell, bis zum **Shitstorm** (Welle der Empörung)." },
  { k: "text", h: "Geteilte Reichweite ist Earned Media", b: "Die Plattform zeigt Beiträge mit vielen Reaktionen öfter. So entsteht **Earned Media** (verdiente, nicht gekaufte Reichweite). **Word of Mouth Marketing** regt Mundpropaganda gezielt an, mit **Buzz** (Gesprächsstoff) und Viral Marketing." },
  { k: "liste", h: "Geteilt wird: Gefühl, einfache Idee, Mitmachen", l: [
   "**Starke Gefühle:** Humor, Rührung, Überraschung",
   "**Einfache Idee**, sofort verständlich",
   "**Mitmachen:** eine **Challenge** (Mitmach-Aufgabe), bei der man Freunde nominiert",
   "**Seeding** (gezielt streuen): erst an passende Personen geben"
  ]},
  { k: "beispiel", h: "Ice Bucket Challenge 2014: 115 Millionen Dollar", b: "Eiswasser über den Kopf, 3 Leute nominieren. Über 17 Millionen posteten Videos. Die ALS Association bekam rund 115 statt 2,8 Millionen US-Dollar (Nature, 2017)." },
  { k: "beispiel", h: "EDEKA #heimkommen: 43 Millionen Aufrufe", b: "Ein rührender Weihnachtsfilm auf YouTube (2015). Bis 18.12.2015 sah man ihn über 43 Millionen Mal. Quelle: Wikipedia „Heimkommen“." },
  { k: "merke", h: "Viral ist ein Ergebnis, kein Werkzeug", b: "Nutzer geben den Inhalt selbst weiter. Das lässt sich nicht planen oder kaufen und ist oft schnell vorbei." },
  { k: "check", q: "Woran erkennst du den viralen Effekt?", a: ["Nutzer teilen den Inhalt selbst weiter, die Reichweite wächst sprunghaft", "Ein hohes Werbebudget lässt die Reichweite gleichmäßig wachsen", "Der Beitrag erscheint nur bei den eigenen Followern", "Die Plattform zeigt lange Videos grundsätzlich öfter"], c: 0, e: "Viral heißt Weitergabe von Person zu Person. Jede Weitergabe öffnet ein neues Netzwerk. Darum wächst die Reichweite so schnell." }
 ]},
 { id: "einsatz", titel: "Anwendungsfelder & Involvement", min: 3, quelle: "smm3.pdf, S. 346–369; smm1.pdf, S. 70 und 74", folien: [
  { k: "intro", h: "Wofür setzt ein Unternehmen Social Media ein?", b: "Social Media ist mehr als Werbung. Wie stark sich eine Firma beteiligt, heißt **Involvement**. Ziel: Du kannst 6 Felder und 5 Formen der Beteiligung nennen." },
  { k: "liste", h: "6 Felder: von Werbung bis Wissenstransfer", l: [
   "Werbung, Vertrieb und Krisen-Kommunikation",
   "Kundenservice, Forschung, **Wissenstransfer** (Wissen weitergeben)",
   "**Social Intranet:** Netzwerk nur für eigene Mitarbeitende",
   "**Social Recruiting:** Personal über Social Media gewinnen"
  ]},
  { k: "liste", h: "Domino’s, Aldi, Telekom: Beispiele nach außen", l: [
   "**Werbung:** Jeder #letsdolunch-Post senkte den Pizzapreis (Domino’s, 2012).",
   "**Vertrieb:** Einkäufer über die LinkedIn-Personensuche finden",
   "**Krise:** Aldi Süd erklärt im Blog seinen Fleischpreis.",
   "**Service:** „Telekom hilft“ und S-Bahn Berlin auf X"
  ]},
  { k: "liste", h: "Mitarbeiter-App und Fans: Beispiele nach innen", l: [
   "**Social Intranet:** Mitarbeiter-App mit Nachrichten und Chat (Staffbase)",
   "**Wissenstransfer:** Bahn-Video „Mitarbeiter-Kompass“ erklärt Social Media",
   "**Forschung:** Follower stimmen über einen Produktnamen ab."
  ]},
  { k: "liste", h: "5 Wege der Beteiligung, auch kombiniert", l: [
   "**Eigener Kanal** (Blog, Forum) oder **eigenes Profil** (Instagram, LinkedIn)",
   "**Kanäle anderer:** Gastbeiträge, Kommentare, Influencer",
   "**Zuhören:** **Monitoring** (Beobachten) erkennt Meinungen und Krisen früh.",
   "**Anzeigen:** Social Media Advertising, also bezahlte Werbung"
  ]},
  { k: "text", h: "Reaktiv heißt: Du antwortest auf Nutzer", b: "**Reaktives Involvement:** Du reagierst auf etwas, das Nutzer tun. Du antwortest etwa auf eine negative Bewertung oder eine Anfrage." },
  { k: "merke", h: "Nie ignorieren – Monitoring ist Pflicht", b: "Nutzer reden online über Marken, ob du mitmachst oder nicht. Deshalb ist **Monitoring Pflicht**." },
  { k: "check", q: "Welche Form des Involvements passt zur Krisen-Früherkennung?", a: ["Zuhören mit Social Media Monitoring", "Eigene Anzeigen auf Instagram schalten", "Einen eigenen Unternehmensblog starten", "Gastbeiträge auf fremden Kanälen schreiben"], c: 0, e: "Beim „Ohr im Social Web“ beobachtet das Unternehmen, was über es gesagt wird. So erkennt es Krisen früh und gewinnt Daten für die Marktforschung." }
 ]},

 { id: "rolle", titel: "Die Rolle des Social Media Managers", min: 3, quelle: "smm3.pdf, S. 234–238, 259, 327 und 372–376", folien: [
  { k: "intro", h: "Was macht ein Social Media Manager?", b: "Laut BVCM (Bundesverband Community Management) ist er der **Dreh- und Angelpunkt**. Ziel: Du kannst seine Aufgaben einordnen und ihn vom Community Manager abgrenzen." },
  { k: "liste", h: "3 Ebenen: strategisch, operativ, analytisch", l: [
   "**Strategisch:** Er plant, leitet und überzeugt die Chefs.",
   "**Operativ** (Tagesgeschäft): Er koordiniert, erstellt Inhalte, betreut die **Community** (Fan-Gemeinschaft).",
   "**Analytisch:** Er misst den Erfolg mit **KPI** (Kennzahlen) und berichtet."
  ]},
  { k: "liste", h: "7 Aufgabenbereiche: von Strategie bis Teamführung", l: [
   "**1 Strategie**, **2 Change Management** (Wandel begleiten, schulen)",
   "**3 Monitoring** (Beobachten) **und Reporting** (Berichte erstellen)",
   "**4 Schnittstelle** (Ansprechpartner), **5 Koordination** (Redaktionsplan)",
   "**6 Qualitäts-Sicherung** vor dem Posten, **7 Führung** des Community-Teams"
  ]},
  { k: "text", h: "Später rückt die Koordination in den Mittelpunkt", b: "Anfangs koordiniert er wenig, später ist das seine Hauptaufgabe. Ideal ist ein erfahrener **Allrounder** (Alleskönner). Er verbindet die Firma auch mit Agenturen." },
  { k: "liste", h: "3 Berufsbilder: Wer plant, spricht, betreut?", l: [
   "**Social Media Manager:** plant, koordiniert, überprüft alle Maßnahmen",
   "**Community Manager:** Gesicht nach außen, Sprachrohr der Nutzer nach innen",
   "**Corporate Community Manager:** betreut Communitys der eigenen Mitarbeitenden"
  ]},
  { k: "liste", h: "So startest du in den Arbeitstag", l: [
   "Prüfe Rückmeldungen und Kommentare auf eigenen Kanälen.",
   "Beobachte Statistiken, Anzeigen, Marke und Mitbewerber.",
   "Lies Trends und Tages-Nachrichten.",
   "Prüfe den Redaktionsplan und schreib deine Aufgaben-Liste."
  ]},
  { k: "merke", h: "Social Media Manager plant und führt fachlich", b: "Der Social Media Manager plant und ist fachlich Vorgesetzter. Der Community Manager führt den direkten Dialog." },
  { k: "check", q: "Wer führt laut BVCM vor allem den direkten Dialog mit der Community?", a: ["Der Community Manager", "Der Social Media Manager", "Der Corporate Community Manager", "Die Geschäftsführung des Unternehmens"], c: 0, e: "Der Community Manager ist Gesicht und Sprachrohr nach außen. Der Social Media Manager plant und koordiniert dagegen alle Maßnahmen der Strategie." }
 ]},

 { id: "kompetenzprofil", titel: "Kompetenzen & Stellenprofil", min: 3, quelle: "smm3.pdf, S. 237–250 und 377–379", folien: [
  { k: "intro", h: "Was musst du als Social Media Manager können?", b: "Der Berufsverband BVCM nennt 5 Bereiche von **Kompetenzen** (Fähigkeiten): fachlich, methodisch, persönlich, sozial, Führung. Ziel: Du kannst Fähigkeiten zuordnen und 5 Stufen nennen." },
  { k: "liste", h: "Fachlich: Netzwerke, Marketing, PR, Recht, IT", l: [
   "Branchenwissen, große Netzwerke, eigener aktiver Account",
   "Zielgruppe, **ROI** (Rendite), **KPI** (Kennzahlen), B2B (Firmenkunden), B2C (Endkunden)",
   "Virales Marketing, **SEO** (Suchmaschinen-Optimierung), **PR** (Pressearbeit), Krisen-Kommunikation",
   "Strategie, **Change Management** (Wandel begleiten), Recht, IT, Webanalyse"
  ]},
  { k: "liste", h: "Methodisch und persönlich: organisiert, neugierig", l: [
   "**Methoden:** organisieren, präsentieren, moderieren, Konzepte entwickeln",
   "**Persönlich:** Webaffinität (Freude am Netz), Netzwerken, gute Umgangsformen",
   "**Persönlich:** Neugier, Lernbereitschaft, Kreativität, Herzblut",
   "**Persönlich:** belastbar, flexibel, **Frustrations-Toleranz** (Rückschläge aushalten)"
  ]},
  { k: "liste", h: "Sozial und führend: Empathie, Durchsetzung", l: [
   "**Sozial:** im Team arbeiten, gut kommunizieren",
   "**Sozial:** Empathie (Einfühlung), diplomatisches Geschick",
   "**Führung:** sich durchsetzen, auch beim Vorstand",
   "**Führung:** Entscheidungen treffen, Projekte leiten"
  ]},
  { k: "text", h: "Dreyfus: 5 Stufen vom Anfänger zum Experten", b: "**1 Anfänger** folgt strikt Regeln.\n**2 Fortgeschritten** sieht nur Teile.\n**3 Kompetent** plant und setzt Prioritäten.\n**4 Erfahren** sieht das Ganze.\n**5 Experte** handelt aus dem Bauch, bricht Regeln." },
  { k: "text", h: "Viel Praxis zählt so viel wie ein Zertifikat", b: "Ideal ist Erfahrung in digitaler Kommunikation, Service und Krisen. Ein Studium hilft, eine gleichwertige Ausbildung ersetzt es. Viel Praxis wiegt ein Zertifikat mit wenig Praxis auf." },
  { k: "merke", h: "5 Bereiche, bewertet in 5 Stufen", b: "5 Bereiche: fachlich, methodisch, persönlich, sozial, Führung. Du stufst Bewerber nach Dreyfus von 1 bis 5 ein." },
  { k: "check", q: "Wie viele Bereiche hat das Kompetenzmodell des BVCM für Social Media Manager?", a: ["5: fachlich, methodisch, persönlich, sozial, Führung", "3: strategisch, operativ und analytisch", "4: Strategie, Content, Community und Ads", "7: von Strategie bis Führung des Teams"], c: 0, e: "Das Kompetenzmodell hat 5 Bereiche. Strategisch, operativ und analytisch sind dagegen die 3 Ebenen der Aufgaben. 7 ist die Zahl der Aufgabenbereiche." }
 ]},

 { id: "berufsfeld", titel: "Das Berufsfeld laut BVCM-Studie 2023", min: 3, quelle: "smm3.pdf, S. 253–321", folien: [
  { k: "intro", h: "Was zeigt die BVCM-Studie 2023 über deinen Beruf?", b: "Der Berufsverband BVCM befragte 2023 online 302 Fachleute. Das zeigt Trends, gilt aber nicht für alle. Ziel: Du kannst die größte Lücke der Branche belegen." },
  { k: "liste", h: "Die Berufsbilder lassen sich kaum trennen", l: [
   "**56 Prozent** ordnen sich mehreren Feldern zu.",
   "**Schwerpunkt:** Community 50, Social Media 46 Prozent",
   "Nur **34 Prozent** der Firmen kennen den Unterschied.",
   "**72 Prozent** sind Frauen, sie verdienen deutlich weniger."
  ]},
  { k: "liste", h: "Inhalte zuerst, Personal fehlt", l: [
   "**Top-Aufgaben:** Inhalte erstellen 62, Redaktion planen 40 Prozent",
   "**Wichtiger:** LinkedIn, TikTok; **unwichtiger:** Facebook, X, XING",
   "**Hürden:** Personal, Geld (je 50), Verständnis (49 Prozent)",
   "**43 Prozent** haben kein eigenes Team."
  ]},
  { k: "liste", h: "Extra: 88 Prozent erleben Hasskommentare", l: [
   "**88 Prozent** sahen Hass, **67 Prozent** auf eigenen Kanälen.",
   "**47 Prozent** sehen mehr Hass.",
   "Die Hälfte hat ein Konzept dagegen.",
   "**Reaktion:** löschen oder ausblenden 74, melden 56, blockieren 55 Prozent"
  ]},
  { k: "text", h: "Extra: Resilienz schützt vor Hass", b: "**Resilienz** heißt psychische Widerstandskraft. 23 Prozent wünschen sich Hilfe gegen Belastung. Erst 8 Prozent nutzten Angebote, bei 69 Prozent gibt es keine." },
  { k: "liste", h: "Nur 8 Prozent belegen den wirtschaftlichen Erfolg", l: [
   "Rund ein Fünftel hat keine Strategie.",
   "**47 Prozent** haben kein Konzept zur Erfolgsmessung.",
   "Nur **8 Prozent** belegen den wirtschaftlichen Erfolg.",
   "**Reporting** (Berichte): Reichweite 91, Umsatz-Kennzahlen 14 Prozent"
  ]},
  { k: "merke", h: "Strategie und Erfolgsmessung: die größte Lücke", b: "Strategie und Erfolgsmessung sind die **größte Baustelle der Branche**. Oft fehlt der wirtschaftliche Nachweis." },
  { k: "check", q: "Was nennt die BVCM-Studie 2023 als größte Lücke der Branche?", a: ["Strategie und Erfolgsmessung", "Zu wenige Social-Media-Kanäle", "Zu hohe Budgets für Werbeanzeigen", "Zu viele Weiterbildungsangebote"], c: 0, e: "Ein Fünftel hat keine Strategie, 47 Prozent haben kein Messkonzept. Nur 8 Prozent können den wirtschaftlichen Erfolg nachweisen." }
 ]}
];
