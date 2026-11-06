// Schaubilder für die Lektionen (SVG, Farben über CSS-Variablen: --m = Modulfarbe).
const T = (x, y, t, o = "") => `<text x="${x}" y="${y}" ${o}>${t}</text>`;
const svg = (vb, inner, label) => `<svg viewBox="${vb}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

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

 reichweite: svg("0 0 320 190", `
  <circle class="f1" cx="60" cy="62" r="20"/><path class="f1" d="M28 128c0-22 14-36 32-36s32 14 32 36z"/>
  ${T(60, 152, "1 Person", 'class="c b"')}
  ${[0, 1, 2].map(i => `<line class="l" x1="98" y1="88" x2="${168}" y2="${38 + i * 50}"/><rect class="f3" x="170" y="${18 + i * 50}" width="30" height="42" rx="6"/><rect class="scr" x="175" y="${24 + i * 50}" width="20" height="26" rx="2"/>${T(212, 44 + i * 50, (i + 1) + ". Anzeige", 'class="s"')}`).join("")}
  <rect class="pill" x="8" y="162" width="146" height="24" rx="12"/>${T(81, 178, "= 1 Reichweite", 'class="c w b s"')}
  <rect class="pill2" x="166" y="162" width="146" height="24" rx="12"/>${T(239, 178, "= 3 Impressionen", 'class="c b s"')}`,
  "Eine Person sieht einen Beitrag dreimal: 1 Reichweite, 3 Impressionen")
};
