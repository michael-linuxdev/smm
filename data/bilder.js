// Schaubilder für die Lektionen (SVG, Farben über CSS-Variablen: --m = Modulfarbe).
const T = (x, y, t, o = "") => `<text x="${x}" y="${y}" ${o}>${t}</text>`;
const svg = (vb, inner, label) => `<svg viewBox="${vb}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
// Kreislauf mit 5 Stationen: [Name, Stichwort] ab oben im Uhrzeigersinn, Pfeile auf dem Ring
const kreis = (S, mitte) => {
 const cx = 160, cy = 118, r = 78, P = S.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / S.length; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
 const pfeile = S.map((_, i) => { const a = -Math.PI / 2 + (i + .5) * 2 * Math.PI / S.length, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a), d = a + Math.PI / 2, f = (dx, dy) => `${(x + dx).toFixed(1)},${(y + dy).toFixed(1)}`;
  return `<polygon class="f2" points="${f(6 * Math.cos(d), 6 * Math.sin(d))} ${f(-5 * Math.cos(d) + 5 * Math.cos(a), -5 * Math.sin(d) + 5 * Math.sin(a))} ${f(-5 * Math.cos(d) - 5 * Math.cos(a), -5 * Math.sin(d) - 5 * Math.sin(a))}"/>`; }).join("");
 const lage = [[24, -6, "start"], [20, 4, "start"], [0, 32, "middle"], [0, 32, "middle"], [-20, 4, "end"]];
 return `<circle class="ring" cx="${cx}" cy="${cy}" r="${r}"/>${pfeile}` + P.map(([x, y], i) => { const [dx, dy, an] = lage[i], X = (x + dx).toFixed(1), Y = y + dy;
  return `<circle class="f1" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="15"/>${T(x.toFixed(1), (y + 5).toFixed(1), i + 1, 'class="c w b"')}${T(X, Y.toFixed(1), S[i][0], `class="b" text-anchor="${an}"`)}${T(X, (Y + 14).toFixed(1), S[i][1], `class="s" text-anchor="${an}"`)}`; }).join("") + T(cx, cy - 2, mitte[0], 'class="c s b"') + T(cx, cy + 13, mitte[1], 'class="c s"');
};

export const BILDER = {
 pyramide: svg("0 0 320 230", `
  <polygon class="f1" points="160,4 232,80 88,80"/>
  <polygon class="f2" points="96,82 224,82 268,148 52,148"/>
  <polygon class="f3" points="50,152 270,152 314,222 6,222"/>
  ${T(160, 60, "Unternehmens-", 'class="c w s b"')}${T(160, 73, "ziel", 'class="c w s b"')}
  ${T(160, 112, "Marketing- &amp;", 'class="c"')}${T(160, 128, "Kommunikationsziele", 'class="c"')}
  ${T(160, 184, "Social-Media-Ziele", 'class="c b"')}${T(160, 202, "z. B. Reichweite, Bewerbungen", 'class="c s"')}`,
  "Ziel-Pyramide: Unternehmensziel, darunter Marketing- und Kommunikationsziele, darunter Social-Media-Ziele"),

 orga: svg("0 0 330 210", `
  ${[0, 112, 224].map((x, i) => `<rect class="panel" x="${x + 2}" y="2" width="102" height="206" rx="12"/>${T(x + 53, 24, ["Zentral", "Dezentral", "Hub-and-Spoke"][i], 'class="c b"')}`).join("")}
  <line class="l" x1="53" y1="80" x2="23" y2="150"/><line class="l" x1="53" y1="80" x2="53" y2="150"/><line class="l" x1="53" y1="80" x2="83" y2="150"/>
  <circle class="f1" cx="53" cy="74" r="22"/>${T(53, 78, "Team", 'class="c w s"')}
  ${[23, 53, 83].map(x => `<rect class="f3" x="${x - 11}" y="146" width="22" height="22" rx="5"/>`).join("")}${T(53, 190, "alle Kanäle", 'class="c s"')}
  ${[135, 165, 195].map(x => `<circle class="f2" cx="${x}" cy="74" r="12"/><line class="l" x1="${x}" y1="86" x2="${x}" y2="146"/><rect class="f3" x="${x - 11}" y="146" width="22" height="22" rx="5"/>`).join("")}${T(165, 52, "Abteilungen", 'class="c s"')}${T(165, 190, "je eigene Kanäle", 'class="c s"')}
  ${[[277, 50], [305, 100], [277, 160], [249, 100]].map(([x, y]) => `<line class="l" x1="277" y1="104" x2="${x}" y2="${y}"/><circle class="f2" cx="${x}" cy="${y}" r="11"/>`).join("")}
  <circle class="f1" cx="277" cy="104" r="20"/>${T(277, 108, "Hub", 'class="c w s"')}${T(277, 196, "koordiniert", 'class="c s"')}`,
  "Drei Organisationsmodelle: zentral, dezentral und Hub-and-Spoke"),

 funnel: svg("0 0 320 220", `
  ${[["Bekanntheit", 196], ["Interesse", 160], ["Handlung", 124], ["Bindung", 88]].map(([a, w], i) => {
   const y = 6 + i * 53, w2 = w - 36, x1 = 100 - w / 2, x2 = 100 - w2 / 2;
   return `<polygon class="f${i < 2 ? 1 : i < 3 ? 2 : 3}" points="${x1},${y} ${x1 + w},${y} ${x2 + w2},${y + 48} ${x2},${y + 48}"/>${T(100, y + 29, a, `class="c ${i < 2 ? "w" : ""} b ${i > 1 ? "s" : ""}"`)}`;
  }).join("")}
  ${["Reichweite", "Interaktion, Klicks", "Leads, Käufe", "Wiederkauf, Treue"].map((k, i) => `<line class="l" x1="${[194, 176, 158, 140][i]}" y1="${30 + i * 53}" x2="206" y2="${30 + i * 53}"/>` + T(212, 34 + i * 53, k, 'class="s"')).join("")}`,
  "Funnel mit vier Stufen: Bekanntheit, Interesse, Handlung, Bindung, rechts die passenden Kennzahlen"),

 ope: svg("0 0 320 220", `
  <circle class="v1" cx="108" cy="82" r="70"/><circle class="v2" cx="212" cy="82" r="70"/><circle class="v3" cx="160" cy="152" r="66"/>
  ${T(84, 60, "Owned", 'class="c b"')}${T(84, 76, "Website,", 'class="c s"')}${T(84, 89, "Profile,", 'class="c s"')}${T(84, 102, "Newsletter", 'class="c s"')}
  ${T(236, 60, "Paid", 'class="c b"')}${T(236, 76, "Anzeigen,", 'class="c s"')}${T(236, 89, "Kooperationen", 'class="c s"')}
  ${T(160, 180, "Earned", 'class="c b"')}${T(160, 195, "Shares, Presse,", 'class="c s"')}${T(160, 207, "Erwähnungen", 'class="c s"')}`,
  "Owned, Paid und Earned Media als drei sich überschneidende Kreise"),

 prozess: svg("0 0 320 240", (() => {
  const L = ["Analyse", "Ziele", "Zielgruppe", "Kanäle", "Inhalte", "Budget", "Messung"], cx = 160, cy = 118, r = 88;
  const P = L.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / L.length; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
  return `<circle class="ring" cx="${cx}" cy="${cy}" r="${r}"/>` + P.map(([x, y], i) => `<circle class="f1" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="15"/>${T(x.toFixed(1), (y + 5).toFixed(1), i + 1, 'class="c w b"')}${T(x.toFixed(1), (y + (y > cy + 10 ? 32 : -21)).toFixed(1), L[i], 'class="c s b"')}`).join("") + T(cx, cy - 4, "Strategie-", 'class="c s"') + T(cx, cy + 12, "Kreislauf", 'class="c s"');
 })(), "Strategie-Prozess als Kreislauf: Analyse, Ziele, Zielgruppe, Kanäle, Inhalte, Budget, Messung – dann von vorn"),

 krisenprozess: svg("0 0 320 240", kreis([["Prävention", "Krisenplan, Schulung"], ["Analyse", "Monitoring"], ["Bewältigung", "Kommunikation"], ["Auswertung", "Manöverkritik"], ["Neustart", "Reputation"]], ["Krisen-", "Kreislauf"]),
  "Krisenmanagement als Kreislauf aus 5 Phasen: Prävention, Analyse, Bewältigung, Auswertung, Neustart – dann wieder Prävention"),

 analysekreis: svg("-16 0 352 240", kreis([["Planen", "Ziele, KPIs"], ["Identifizieren", "Monitoring"], ["Extrahieren", "Reporting"], ["Verstehen", "Analyse"], ["Optimieren", "Verbessern"]], ["Erfolgs-", "messung"]),
  "Kreislauf der Erfolgsmessung: Planen, Identifizieren, Extrahieren, Verstehen, Optimieren – dann von vorn"),

 shitstorm: svg("0 0 320 222", `
  ${[["0–1", "Kaum Kritik", 150], ["2", "Wiederholte Kritik", 176], ["3", "Weitere Kanäle, Blogs", 202], ["4", "Protestgruppe, Print", 228], ["5", "Kampagne, Radio &amp; TV", 256], ["6", "Orkan in allen Medien", 284]].map(([n, t, w], i) => {
   const y = 4 + i * 36, f = i < 2 ? 3 : i < 4 ? 2 : 1;
   return `<rect class="f${f}" x="34" y="${y}" width="${w}" height="30" rx="8"/><circle class="pill2" cx="16" cy="${y + 15}" r="14"/>${T(16, y + 19, n, `class="c b ${n.length > 1 ? "s" : ""}"`)}${T(46, y + 20, t, `class="${f === 1 ? "w " : ""}${i > 3 ? "b" : ""}"`)}`;
  }).join("")}`,
  "Shitstorm-Skala in Stufen von 0 bis 6: von kaum Kritik bis zum Orkan in allen Medien"),

 kommunikation: svg("0 0 330 210", `
  ${[0, 112, 224].map((x, i) => `<rect class="panel" x="${x + 2}" y="2" width="102" height="206" rx="12"/>${T(x + 53, 22, ["Massen-", "Persönliche", "Social Media"][i], 'class="c b"')}${T(x + 53, 37, ["kommunikation", "Kommunikation", "Kommunikation"][i], 'class="c b s"')}${T(x + 53, 194, ["einer an viele", "einer an einen", "jeder mit jedem"][i], 'class="c s"')}`).join("")}
  ${[[20, 150], [42, 166], [64, 166], [86, 150]].map(([x, y]) => `<line class="l" x1="53" y1="88" x2="${x}" y2="${y}"/><circle class="f3" cx="${x}" cy="${y}" r="10"/>`).join("")}<circle class="f1" cx="53" cy="82" r="17"/>
  <line class="l" x1="165" y1="82" x2="165" y2="150"/><circle class="f1" cx="165" cy="82" r="17"/><circle class="f3" cx="165" cy="156" r="10"/>
  ${(() => { const P = [[277, 66], [310, 96], [298, 152], [256, 152], [244, 96]]; let o = ""; P.forEach((a, i) => P.slice(i + 1).forEach(b => o += `<line class="l" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}"/>`)); return o + P.map(([x, y]) => `<circle class="f2" cx="${x}" cy="${y}" r="12"/>`).join(""); })()}`,
  "Drei Formen der Kommunikation: Massenkommunikation einer an viele, persönliche Kommunikation einer an einen, Social-Media-Kommunikation jeder mit jedem"),

 influencer: svg("0 0 320 210", `
  ${[["Mega", "ab 1 Million", "1–5 %", 34], ["Macro", "ab 100.000", "5–25 %", 26], ["Micro", "unter 100.000", "25–50 %", 18], ["Nano", "unter 1.000", "", 10]].map(([n, f, e, r], i) => {
   const x = 40 + i * 80;
   return `<circle class="f${i < 2 ? 1 : i < 3 ? 2 : 3}" cx="${x}" cy="${44}" r="${r}"/>${T(x, 102, n, 'class="c b"')}${T(x, 118, f, 'class="c s"')}` + (e ? `<rect class="pill2" x="${x - 34}" y="128" width="68" height="22" rx="11"/>${T(x, 143, e, 'class="c s b"')}` : T(x, 137, "hohe", 'class="c s b"') + T(x, 150, "Autorität", 'class="c s b"'));
  }).join("")}
  ${T(120, 168, "Engagement-Rate", 'class="c s"')}
  <line class="l" x1="10" y1="186" x2="310" y2="186"/><polygon class="f1" points="4,186 14,180 14,192"/><polygon class="f1" points="316,186 306,180 306,192"/>
  ${T(20, 204, "mehr Reichweite", 'class="s b"')}${T(300, 204, "mehr Nähe zur Community", 'class="s b" text-anchor="end"')}`,
  "Vier Arten von Influencern: Mega, Macro, Micro und Nano – je kleiner, desto höher meist die Engagement-Rate und die Nähe zur Community"),

 recruiting: svg("0 0 320 220", `
  ${[["Active", "Sourcing", "aktiv suchen", 72], ["Personal-", "marketing", "gefunden werden", 108], ["Employer", "Branding", "Image aufbauen", 144]].map(([a, b, t, h], i) => {
   const x = 4 + i * 106, y = 170 - h, f = 3 - i;
   return `<rect class="f${f}" x="${x}" y="${y}" width="100" height="${h}" rx="10"/>${T(x + 50, y + 22, a, `class="c b ${f === 1 ? "w" : ""}"`)}${T(x + 50, y + 37, b, `class="c b ${f === 1 ? "w" : ""}"`)}${T(x + 50, y + 56, t, `class="c s ${f === 1 ? "w" : ""}"`)}`;
  }).join("")}
  <line class="l" x1="4" y1="186" x2="308" y2="186"/><polygon class="f1" points="316,186 304,179 304,193"/>
  ${["kurzfristig", "mittelfristig", "langfristig"].map((k, i) => T(54 + i * 106, 207, k, 'class="c s"')).join("")}`,
  "Social Recruiting in drei Perspektiven: kurzfristig Active Sourcing, mittelfristig Personalmarketing, langfristig Employer Branding"),

 verortung: svg("0 0 320 214", `
  ${T(82, 16, "Hauptziel", 'class="c s b"')}${T(252, 16, "Platz im Unternehmen", 'class="c s b"')}
  ${[["Reputation", "PR, Kommunikation"], ["Kundenzufriedenheit", "Kundendienst"], ["Dialog, Branding, Leads", "Digitalmarketing"], ["Recruiting", "HR (Personal)"]].map(([z, p], i) => {
   const y = 26 + i * 47;
   return `<rect class="f3" x="2" y="${y}" width="160" height="38" rx="10"/>${T(82, y + 24, z, 'class="c"')}<line class="l" x1="164" y1="${y + 19}" x2="180" y2="${y + 19}"/><polygon class="f2" points="188,${y + 19} 178,${y + 13} 178,${y + 25}"/><rect class="f1" x="190" y="${y}" width="128" height="38" rx="10"/>${T(254, y + 24, p, 'class="c w b s"')}`;
  }).join("")}`,
  "Das Hauptziel bestimmt den Platz: Reputation in PR und Kommunikation, Kundenzufriedenheit im Kundendienst, Dialog, Branding und Leads im Digitalmarketing, Recruiting in HR"),

 team: svg("0 0 320 220", `
  ${[["Planung", ["Manager/-in", "Stratege/-in", "Projektmanagement"]], ["Produktion", ["Grafiker/-in", "Koordinator/-in"]], ["Interaktion", ["Community Manager/-in", "Advertiser/-in"]], ["Analyse", ["Social Analyst/-in"]]].map(([g, R], i) => {
   const x = 2 + (i % 2) * 160, y = 2 + Math.floor(i / 2) * 110;
   return `<rect class="panel" x="${x}" y="${y}" width="156" height="104" rx="12"/><rect class="f1" x="${x + 8}" y="${y + 8}" width="140" height="26" rx="13"/>${T(x + 78, y + 26, g, 'class="c w b"')}${R.map((r, j) => T(x + 78, y + 54 + j * 17, r, 'class="c s"')).join("")}`;
  }).join("")}`,
  "Rollen im Social-Media-Team in vier Bereichen: Planung, Produktion, Interaktion und Analyse"),

 schnittstellen: svg("0 0 320 214", `
  ${[[62, 26], [258, 26], [60, 107], [260, 107], [62, 188], [258, 188]].map(([x, y]) => `<line class="l" x1="160" y1="107" x2="${x}" y2="${y}"/>`).join("")}
  ${[[62, 26, ["Kundenservice"]], [258, 26, ["Sales (Verkauf)"]], [60, 107, ["Personal-", "abteilung"]], [260, 107, ["Sonstige", "Fachbereiche"]], [62, 188, ["Brand- &amp;", "Produktmanagement"]], [258, 188, ["Recht, Datenschutz", "&amp; IT"]]].map(([x, y, t]) => `<rect class="f3" x="${x - 58}" y="${y - 22}" width="116" height="44" rx="10"/>` + (t.length === 1 ? T(x, y + 5, t[0], 'class="c s b"') : T(x, y - 3, t[0], 'class="c s b"') + T(x, y + 11, t[1], 'class="c s b"'))).join("")}
  <circle class="f1" cx="160" cy="107" r="38"/>${T(160, 104, "Social", 'class="c w b"')}${T(160, 119, "Media", 'class="c w b"')}`,
  "Social Media in der Mitte mit Schnittstellen zu Kundenservice, Sales, Personalabteilung, Fachbereichen, Brand- und Produktmanagement sowie Recht, Datenschutz und IT"),

 stimmung: svg("0 0 320 226", `
  <line class="l" x1="160" y1="38" x2="160" y2="52"/><line class="l" x1="54" y1="52" x2="266" y2="52"/>${[54, 160, 266].map(x => `<line class="l" x1="${x}" y1="52" x2="${x}" y2="64"/>`).join("")}
  <rect class="f1" x="50" y="4" width="220" height="34" rx="17"/>${T(160, 26, "Wie ist die Stimmung?", 'class="c w b"')}
  ${[["Positiv/neutral", ["danken, Fragen", "beantworten oder", "Mehrwert bieten"]], ["Unklar/komplex", ["intern weiterleiten:", "Fachabteilung,", "Presse, Krisenteam"]], ["Negativ", ["Art erkennen", "und passend", "reagieren"]]].map(([k, R], i) => {
   const x = 2 + i * 106;
   return `<rect class="f2" x="${x}" y="64" width="104" height="28" rx="14"/>${T(x + 52, 82, k, 'class="c b s"')}<rect class="panel" x="${x}" y="98" width="104" height="80" rx="10"/>${R.map((r, j) => T(x + 52, 122 + j * 17, r, 'class="c s"')).join("")}`;
  }).join("")}
  <rect class="pill2" x="2" y="190" width="316" height="30" rx="15"/>${T(160, 210, "Danach: Verlauf weiter beobachten", 'class="c b s"')}`,
  "Entscheidungsbaum im Community Management: Stimmung prüfen, dann je nach positiv, unklar oder negativ reagieren und den Verlauf beobachten"),

 kosten: svg("0 0 320 226", `
  ${[["750 €", "Kosten der Anzeige", 150], ["500", "Klicks", 122], ["10", "Conversions", 94]].map(([z, t, w], i) => {
   const y = 4 + i * 58, f = i + 1;
   return `<rect class="f${f}" x="${78 - w / 2}" y="${y}" width="${w}" height="48" rx="10"/>${T(78, y + 22, z, `class="c b ${f === 1 ? "w" : ""}"`)}${T(78, y + 38, t, `class="c s ${f === 1 ? "w" : ""}"`)}`;
  }).join("")}
  ${[["CPC = 750 € / 500", "= 1,50 € pro Klick", 62], ["CVR = 10 / 500", "= 2 %", 120]].map(([a, b, y]) => `<line class="l" x1="${y < 100 ? 142 : 128}" y1="${y + 20}" x2="160" y2="${y + 20}"/>${T(166, y + 16, a, 'class="b s"')}${T(166, y + 31, b, 'class="s"')}`).join("")}
  <rect class="pill" x="2" y="184" width="316" height="36" rx="18"/>${T(160, 207, "CPA = 750 € / 10 = 75 € pro Conversion", 'class="c w b s"')}`,
  "Rechenbeispiel: 750 Euro Kosten, 500 Klicks und 10 Conversions ergeben CPC 1,50 Euro, CVR 2 Prozent und CPA 75 Euro"),

 viral: svg("0 0 320 210", (() => {
  const A = [160], B = [70, 160, 250], C = [40, 70, 100, 130, 160, 190, 220, 250, 280];
  let o = B.map(x => `<line class="l" x1="160" y1="26" x2="${x}" y2="90"/>`).join("") + C.map((x, i) => `<line class="l" x1="${B[Math.floor(i / 3)]}" y1="90" x2="${x}" y2="150"/>`).join("");
  o += C.map(x => `<line class="ring" x1="${x}" y1="160" x2="${x}" y2="176"/>`).join("");
  o += `<circle class="f1" cx="160" cy="26" r="16"/>` + B.map(x => `<circle class="f2" cx="${x}" cy="90" r="13"/>`).join("") + C.map(x => `<circle class="f3" cx="${x}" cy="150" r="10"/>`).join("");
  return o + T(186, 22, "teilt", 'class="s b"') + T(186, 35, "einen Inhalt", 'class="s"') + T(160, 200, "Von Person zu Person: Reichweite wächst", 'class="c s b"');
 })(), "Viraler Effekt: Eine Person teilt, andere teilen weiter, die Reichweite wächst von Person zu Person sprunghaft"),

 phasen4: svg("0 0 320 230", `
  <polyline class="l" fill="none" points="34,201 14,201 14,27 26,27"/><polygon class="f2" points="34,27 24,21 24,33"/>
  ${[["Analysephase (Discover)", "Situation, Ziele, Zielgruppe", "Starte hier"], ["Planungsphase (Plan)", "Kanäle, Content, Ressourcen", "Kanäle erst hier"], ["Umsetzungsphase (Act)", "Content- und Community-Management", ""], ["Kontrollphase (Optimize)", "Monitoring", ""]].map(([n, t, tag], i) => {
   const y = 4 + i * 58, f = i ? 3 : 1, w = f === 1 ? " w" : "";
   return (i ? `<polygon class="f2" points="169,${y - 10} 181,${y - 10} 175,${y - 2}"/>` : "") + `<rect class="f${f}" x="34" y="${y}" width="282" height="46" rx="10"/>${T(46, y + 20, n, `class="b${w}"`)}${T(46, y + 37, t, `class="s${w}"`)}` +
    (tag ? `<rect class="pill2" x="${308 - tag.length * 6.2 - 8}" y="${y + 7}" width="${tag.length * 6.2 + 8}" height="20" rx="10"/>${T(308 - (tag.length * 6.2 + 8) / 2, y + 21, tag, 'class="c s b"')}` : "");
  }).join("")}`,
  "Idealtypischer Prozess in 4 Phasen: Analyse, Planung, Umsetzung, Kontrolle – danach wieder zur Analyse"),

 reichweite: svg("0 0 320 190", `
  <circle class="f1" cx="60" cy="62" r="20"/><path class="f1" d="M28 128c0-22 14-36 32-36s32 14 32 36z"/>
  ${T(60, 152, "1 Person", 'class="c b"')}
  ${[0, 1, 2].map(i => `<line class="l" x1="98" y1="88" x2="${168}" y2="${38 + i * 50}"/><rect class="f3" x="170" y="${18 + i * 50}" width="30" height="42" rx="6"/><rect class="scr" x="175" y="${24 + i * 50}" width="20" height="26" rx="2"/>${T(212, 44 + i * 50, (i + 1) + ". Anzeige", 'class="s"')}`).join("")}
  <rect class="pill" x="8" y="162" width="146" height="24" rx="12"/>${T(81, 178, "= 1 Reichweite", 'class="c w b s"')}
  <rect class="pill2" x="166" y="162" width="146" height="24" rx="12"/>${T(239, 178, "= 3 Impressionen", 'class="c b s"')}`,
  "Eine Person sieht einen Beitrag dreimal: 1 Reichweite, 3 Impressionen"),
 bvdw: svg("0 0 320 228", `
  <line class="l" x1="20" y1="24" x2="20" y2="160"/>
  ${[["Organisation", "Umsatz steigern, Kosten senken"], ["Strategie &amp; Maßnahme", "Bekanntheit steigern, Leads"], ["Messung", "Wirkung: Aufmerksamkeit, Treue"], ["Kennzahl &amp; Methode", "Netto-Reichweite per Analytics"]].map(([n, t], i) => {
   const y = 4 + i * 46;
   return `<rect class="f3" x="42" y="${y}" width="276" height="40" rx="10"/><circle class="f1" cx="20" cy="${y + 20}" r="15"/>${T(20, y + 25, i + 1, 'class="c w b"')}${T(54, y + 17, n, 'class="b"')}${T(54, y + 32, t, 'class="s"')}`;
  }).join("")}
  <rect class="pill" x="2" y="192" width="316" height="32" rx="16"/>${T(160, 213, "Erst das Ziel, dann die Kennzahl", 'class="c w b"')}`,
  "BVDW-Modell in 4 Ebenen: Organisation, Strategie und Maßnahme, Messung, Kennzahl und Methode – erst das Ziel, dann die Kennzahl"),

 fuenfps: svg("-16 0 352 240", kreis([["Planen", "Strategie, Orga"], ["Produzieren", "erstellen"], ["Publizieren", "veröffentlichen"], ["Promoten", "bewerben"], ["Prüfen", "kontrollieren"]], ["Community", "braucht Content"]),
  "Die 5 Ps des Content-Managements im Kreis: Planen, Produzieren, Publizieren, Promoten, Prüfen – in der Mitte die Community"),

 mix702010: svg("0 0 320 222", `
  <line class="l" x1="2" y1="164" x2="318" y2="164"/>
  ${[["70 %", "Mehrwert", "für die Zielgruppe", 140], ["20 %", "Kuratiert", "Inhalte von anderen", 40], ["10 %", "Werbung", "für Eigenes", 20]].map(([p, n, t, h], i) => {
   const x = 6 + i * 106, f = i + 1;
   return `<rect class="f${f}" x="${x}" y="${163 - h}" width="96" height="${h}" rx="8"/>` + (i ? T(x + 48, 155 - h, p, 'class="c b"') : T(x + 48, 50, p, 'class="c w b"')) + T(x + 48, 184, n, 'class="c b"') + T(x + 48, 200, t, 'class="c s"');
  }).join("")}`,
  "Faustregel 70-20-10: 70 Prozent Mehrwert-Themen, 20 Prozent kuratierte Inhalte von anderen, 10 Prozent reine Werbung"),

 kompetenz: svg("0 0 320 214", `
  ${[["Anfänger", "folgt strikt Regeln"], ["Fortgeschritten", "sieht nur Teile"], ["Kompetent", "plant, setzt Prioritäten"], ["Erfahren", "sieht das Ganze"], ["Experte", "handelt aus dem Bauch"]].map(([n, t], i) => {
   const x = 2 + i * 36, y = 172 - i * 42, f = i < 2 ? 3 : i < 4 ? 2 : 1, w = f === 1 ? " w" : "";
   return `<rect class="f${f}" x="${x}" y="${y}" width="${i < 4 ? 170 : 172}" height="38" rx="9"/><circle class="pill2" cx="${x + 19}" cy="${y + 19}" r="12"/>${T(x + 19, y + 23, i + 1, 'class="c b"')}${T(x + 38, y + 16, n, `class="b${w}"`)}${T(x + 38, y + 31, t, `class="s${w}"`)}`;
  }).join("")}`,
  "Die 5 Kompetenzstufen nach Dreyfus als Treppe: Anfänger, Fortgeschritten, Kompetent, Erfahren, Experte"),

 claimaudit: svg("0 0 320 226", `
  ${[["Critic Loop", "KI sucht Schwächen"], ["So-What-Test", "5-mal: Warum wichtig?"], ["Substitution Test", "Könnte das jeder sagen?"], ["Claim Audit", "Jede Aussage einstufen"]].map(([n, t], i) => {
   const y = 4 + i * 40, f = i < 3 ? 3 : 1, w = f === 1 ? " w" : "";
   return `<rect class="f${f}" x="2" y="${y}" width="316" height="34" rx="10"/>${T(14, y + 22, n, `class="b${w}"`)}${T(306, y + 22, t, `class="s${w}" text-anchor="end"`)}`;
  }).join("")}
  ${[54, 160, 266].map(x => `<line class="l" x1="${x}" y1="158" x2="${x}" y2="186"/>`).join("")}
  ${["belegt", "Deutung", "unbelegt"].map((k, i) => `<rect class="pill2" x="${4 + i * 106}" y="186" width="100" height="32" rx="16"/>${T(54 + i * 106, 207, k, 'class="c b"')}`).join("")}`,
  "Vier Tests für starke Aussagen: Critic Loop, So-What-Test, Substitution Test und Claim Audit – jede Aussage ist belegt, Deutung oder unbelegt")
};
