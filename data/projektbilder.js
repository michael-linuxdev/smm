// Illustrationen der Praxisprojekte (eigene, flache SVG-Zeichnungen, zurückhaltende Farben).
// viewBox 320×180; Farben bewusst gedämpft, funktionieren hell und dunkel.
const W = (bg, inner) => `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="320" height="180" fill="${bg}"/>${inner}</svg>`;

export const PROJEKTBILDER = {
 // Bäckerei: Ladenfront mit Markise, Brote, Handy mit Herz
 baeckerei: W("#f3e6d8", `
  <circle cx="270" cy="36" r="22" fill="#f7d9a8"/>
  <rect x="40" y="62" width="150" height="100" rx="6" fill="#fffaf3"/>
  <path d="M34 62h162l-10-22H44z" fill="#c8794a"/>
  <path d="M44 40h20l-6 22H34zM84 40h20l-2 22H74zM124 40h20l2 22h-24zM164 40h20l10 22h-22z" fill="#e9b48a"/>
  <rect x="56" y="82" width="56" height="44" rx="4" fill="#f3e6d8"/>
  <ellipse cx="74" cy="112" rx="14" ry="8" fill="#c8794a"/><ellipse cx="96" cy="114" rx="12" ry="7" fill="#d99a64"/>
  <path d="M66 110l4-4M74 110l4-4M82 110l4-4" stroke="#8f4f2a" stroke-width="2" stroke-linecap="round"/>
  <rect x="128" y="82" width="46" height="80" rx="3" fill="#d6b392"/><circle cx="166" cy="124" r="2.5" fill="#8f4f2a"/>
  <rect x="214" y="70" width="64" height="104" rx="12" fill="#3d3650"/><rect x="220" y="80" width="52" height="80" rx="6" fill="#fffaf3"/>
  <path d="M246 128c-10-8-16-13-16-20 0-5 4-8 8-8 3 0 6 2 8 5 2-3 5-5 8-5 4 0 8 3 8 8 0 7-6 12-16 20z" fill="#d6336c"/>`),
 // Maschinenbau: Halle, Zahnrad, Helm, Sprechblase „Azubi“
 maschinenbau: W("#e4e9ee", `
  <path d="M20 160V96l46-26v26l46-26v26l46-26v90z" fill="#c3cdd6"/>
  <rect x="34" y="118" width="22" height="22" fill="#e4e9ee"/><rect x="80" y="118" width="22" height="22" fill="#e4e9ee"/><rect x="126" y="118" width="22" height="22" fill="#e4e9ee"/>
  <rect x="150" y="40" width="12" height="40" fill="#9aa8b5"/>
  <g transform="translate(222 92)"><circle r="34" fill="#5c6b7a"/><circle r="12" fill="#e4e9ee"/>
   <g fill="#5c6b7a">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<rect x="-7" y="-44" width="14" height="14" rx="2" transform="rotate(${a})"/>`).join("")}</g></g>
  <path d="M250 150c0-16 12-26 26-26s26 10 26 26z" fill="#f2b84b"/><rect x="246" y="148" width="60" height="8" rx="4" fill="#d9982a"/>
  <rect x="176" y="22" width="96" height="34" rx="12" fill="#fff"/><path d="M196 56l-6 12 16-12z" fill="#fff"/>
  <text x="224" y="45" font-family="system-ui,sans-serif" font-size="15" font-weight="700" text-anchor="middle" fill="#3d4a57">Azubi 2027</text>`),
 // Mode: Kleiderstange, Bügel mit Shirt, Blatt, Kamera
 mode: W("#e8efe6", `
  <rect x="40" y="38" width="170" height="6" rx="3" fill="#7d8c78"/><rect x="44" y="44" width="5" height="120" fill="#7d8c78"/><rect x="201" y="44" width="5" height="120" fill="#7d8c78"/>
  ${[[70, "#c9d6c2"], [118, "#e7c9b8"], [166, "#b9c8d9"]].map(([x, c]) => `<path d="M${x} 44v8m-18 8l18-8 18 8" stroke="#5f6d5a" stroke-width="2" fill="none"/><path d="M${x - 22} 62l12-6h20l12 6 8 16-10 4-4-8v52h-32V76l-4 8-10-4z" fill="${c}"/>`).join("")}
  <path d="M250 150c-2-40 24-70 56-74-2 40-26 70-56 74z" fill="#7fa36f"/><path d="M252 148c12-22 26-40 44-56" stroke="#5a7d4c" stroke-width="2.5" fill="none"/>
  <rect x="236" y="26" width="58" height="40" rx="8" fill="#3d3650"/><circle cx="265" cy="46" r="12" fill="#e8efe6"/><circle cx="265" cy="46" r="6" fill="#3d3650"/><rect x="244" y="20" width="16" height="8" rx="2" fill="#3d3650"/>`),
 // Stadtwerke: Strommast, Blitz, aufgeregte Sprechblasen
 stadtwerke: W("#ece7f2", `
  <path d="M70 168l18-130h12l18 130" stroke="#6c6480" stroke-width="5" fill="none"/>
  <path d="M60 60h80M66 86h68" stroke="#6c6480" stroke-width="5"/><path d="M140 60c40 10 80 6 180-6" stroke="#9e96b3" stroke-width="2" fill="none"/>
  <path d="M104 96l-14 30h12l-8 26 22-34h-12l10-22z" fill="#f2b84b"/>
  ${[[196, 30, "!"], [250, 74, "?!"], [186, 108, "#"]].map(([x, y, t]) => `<rect x="${x}" y="${y}" width="${t.length * 16 + 34}" height="34" rx="12" fill="#fff"/><path d="M${x + 14} ${y + 34}l-4 10 14-10z" fill="#fff"/><text x="${x + (t.length * 16 + 34) / 2}" y="${y + 24}" font-family="system-ui,sans-serif" font-size="20" font-weight="800" text-anchor="middle" fill="#c2255c">${t}</text>`).join("")}
  <circle cx="300" cy="150" r="10" fill="#c2255c" opacity=".25"/><circle cx="280" cy="160" r="6" fill="#c2255c" opacity=".35"/>`),
 // Fitness: Hantel, Pokal, Konfetti
 fitness: W("#e6eef2", `
  <rect x="40" y="96" width="140" height="10" rx="5" fill="#6b7f8c"/>
  <rect x="48" y="72" width="16" height="58" rx="4" fill="#3f5563"/><rect x="66" y="80" width="12" height="42" rx="4" fill="#567080"/>
  <rect x="156" y="72" width="16" height="58" rx="4" fill="#3f5563"/><rect x="142" y="80" width="12" height="42" rx="4" fill="#567080"/>
  <path d="M226 40h56v18c0 20-12 34-28 34s-28-14-28-34z" fill="#e3b04b"/><path d="M226 48h-12c0 14 8 22 16 22M282 48h12c0 14-8 22-16 22" stroke="#c9952e" stroke-width="5" fill="none"/>
  <rect x="246" y="92" width="16" height="22" fill="#c9952e"/><rect x="230" y="114" width="48" height="12" rx="3" fill="#8a6a2a"/>
  ${[[210, 30, "#d6336c"], [296, 30, "#1c7ed6"], [200, 130, "#2f9e44"], [300, 120, "#7048e8"], [250, 150, "#e8590c"]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="8" height="8" rx="2" fill="${c}" opacity=".7" transform="rotate(20 ${x} ${y})"/>`).join("")}`),
 // Kanzlei: Aktentasche, Dokument mit Diagramm, Netzwerk-Punkte
 kanzlei: W("#e7ebf3", `
  <rect x="34" y="70" width="120" height="84" rx="10" fill="#3f4f6b"/><rect x="74" y="56" width="40" height="18" rx="5" fill="none" stroke="#3f4f6b" stroke-width="6"/>
  <rect x="34" y="102" width="120" height="6" fill="#2e3b52"/><rect x="88" y="98" width="12" height="14" rx="2" fill="#c9a24b"/>
  <rect x="180" y="28" width="96" height="124" rx="8" fill="#fff"/>
  <rect x="194" y="44" width="50" height="8" rx="4" fill="#3f4f6b"/><rect x="194" y="58" width="68" height="5" rx="2.5" fill="#c3cbe0"/><rect x="194" y="68" width="60" height="5" rx="2.5" fill="#c3cbe0"/>
  <rect x="196" y="118" width="12" height="20" fill="#9fb0d6"/><rect x="214" y="104" width="12" height="34" fill="#6f86bd"/><rect x="232" y="90" width="12" height="48" fill="#3f5aa0"/><rect x="250" y="80" width="12" height="58" fill="#2b4380"/>
  <g stroke="#9fb0d6" stroke-width="2"><path d="M290 40l20 22M290 40l-6 40M310 62l-26 18"/></g><g fill="#3f5aa0"><circle cx="290" cy="40" r="6"/><circle cx="310" cy="62" r="6"/><circle cx="284" cy="80" r="6"/></g>`),
 // Hotel: Elbsandstein-Felsen, Haus, Sterne
 hotel: W("#e9eee8", `
  <path d="M0 150c30-10 50-60 70-90 6 20 4 50 18 62 10-40 24-70 38-80 8 30 6 70 22 90H0z" fill="#b8a48a"/>
  <path d="M60 100v50M88 122v28M128 96v54" stroke="#9c876c" stroke-width="3"/>
  <rect x="170" y="96" width="96" height="62" rx="4" fill="#fffaf3"/><path d="M162 98l56-36 56 36z" fill="#8f4f2a"/>
  <rect x="184" y="112" width="18" height="16" fill="#d6e4f0"/><rect x="234" y="112" width="18" height="16" fill="#d6e4f0"/><rect x="208" y="128" width="20" height="30" fill="#b07a52"/>
  ${[0, 1, 2, 3, 4].map(k => `<path transform="translate(${180 + k * 26} 30) scale(.9)" d="M12 0l3.6 7.6 8.4 1-6.2 5.8 1.6 8.2L12 18.6 4.6 22.6l1.6-8.2L0 8.6l8.4-1z" fill="${k < 3 ? "#e3b04b" : "#cfd6cc"}"/>`).join("")}`),
 // Tourismus: Hügel, Weg, Pin, Kamera, Herz
 tourismus: W("#e6eef6", `
  <circle cx="60" cy="40" r="18" fill="#f7d9a8"/>
  <path d="M0 132c50-40 90-46 140-20s100 20 180-26v94H0z" fill="#9fc29a"/><path d="M0 150c60-24 120-26 180-6s100 4 140-16v52H0z" fill="#7fa36f"/>
  <path d="M120 180c10-30 40-44 70-50" stroke="#f3eadc" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M230 30c-16 0-28 12-28 28 0 22 28 50 28 50s28-28 28-50c0-16-12-28-28-28z" fill="#d6336c"/><circle cx="230" cy="58" r="10" fill="#fff"/>
  <rect x="96" y="58" width="52" height="36" rx="7" fill="#3d3650"/><circle cx="122" cy="76" r="11" fill="#e6eef6"/><circle cx="122" cy="76" r="5" fill="#3d3650"/>
  <path d="M286 118c-7-6-12-9-12-14 0-4 3-6 6-6 2 0 4 1 6 3 2-2 4-3 6-3 3 0 6 2 6 6 0 5-5 8-12 14z" fill="#d6336c" opacity=".8"/>`)
};
