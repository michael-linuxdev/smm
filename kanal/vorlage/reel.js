// Baukasten für die Reels von smm.mit.ki. Ein Reel ist eine Liste von Szenen; baueReel(daten) erzeugt Schrift und Ablauf.
// Danach gibt es zeige(t) (setzt das Bild für Sekunde t) und DAUER – das braucht werkzeug/reel.py zum Rechnen.
//
// Szenen:
//   { typ: 'nachricht', titel, von, text }            Glimm liest am Telefon, erschrickt, Kamera fährt heran. Abendlicht.
//   { typ: 'tippen', text }                           Glimm tippt den Prompt am Schreibtisch ([eckig] = gelb markiert). Nacht, am Ende geht die Lampe an.
//   { typ: 'liste', titel, zeilen, mehr }             Zeilen springen nacheinander rein (Text oder [a, b, c] als Tabelle). Morgenlicht.
//   { typ: 'karte', titel, kopf, text, laune, licht } Ein Textkasten, Glimm reagiert (laune: froh, stolz, skeptisch, genervt). licht: abend, nacht, morgen.
//   { typ: 'schluss', titel, zeile }                  Glimm drückt den Speichern-Knopf.
let DAUER = 0, zeige = () => {};
function baueReel(D) {
  const B = 720, H = 1280;                    // 3D-Bild wird in 720×1280 gerechnet und auf 1080×1920 gezogen; Schrift bleibt scharf
  const LICHT = {
    abend:  { uHimmel: 0, uLicht: [1.05, .68, .42], uUmg: [.78, .62, .72], uStehlampe: .5, uBildschirm: .3 },
    nacht:  { uHimmel: 1, uLicht: [.05, .06, .16], uUmg: [.15, .17, .42], uStehlampe: 1, uBildschirm: 1 },
    morgen: { uHimmel: 2, uLicht: [.9, .87, .82], uUmg: [.82, .82, .88], uStehlampe: 0, uBildschirm: .2 } };
  const kl = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const weich = x => { x = kl(x); return x * x * (3 - 2 * x); };
  const mix = (a, b, k) => a + (b - a) * k;
  const pop = (t, s, d = .35) => { const x = kl((t - s) / d), c = 1.70158; return x === 0 ? 0 : 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const marke = s => esc(s).replace(/\[([^\]]*)\]?/g, '<mark>$1</mark>');
  const FERN = [2.75, -.62, -.9], NAH = [0, -.62, .75];   // Schreibtisch: an der Seite oder vor Glimm

  document.head.insertAdjacentHTML('beforeend', `<style>
    body{background:#000;margin:0}
    #c{position:absolute;left:0;top:0;width:1080px;height:1920px}
    .szene{position:absolute;left:0;top:0;margin:0;background:none;display:none}
    .szene::before{content:"";position:absolute;left:0;right:0;top:0;height:1000px;background:linear-gradient(var(--grund) 0,var(--grund) 62%,transparent);opacity:.94}
    .szene>*{position:relative} .szene>.sprech,.szene>.reiter{position:absolute}
    .szene.tippen::before{height:620px}
    .reel .reiter{top:176px;border-radius:20px}
    .reel h1{font-size:84px;transform-origin:0 50%} .reel h1.klein{font-size:66px} .reel h1.riesig{font-size:112px}
    .reel .feld{font-size:52px;line-height:1.36;min-height:480px} .reel .chat{font-size:58px;margin-top:44px;transform-origin:0 100%}
    .reel .zeile{font-size:44px} .reel .punkt{display:block;font-size:48px;line-height:1.25;font-weight:700}
    .reel .beitrag{font-size:50px;line-height:1.34;margin-top:36px;transform:none;border-radius:28px;transform-origin:0 0}
    .reel .beitrag small{display:block;font-size:40px;font-weight:700;opacity:.6;margin-bottom:8px}
    .reel p.unter{font-size:46px;font-weight:700;margin-top:28px;line-height:1.25;transform-origin:0 50%}
    .cursor{display:inline-block;width:6px;height:1em;background:var(--tinte);vertical-align:-.14em;margin-left:3px}
  </style>`);
  document.body.insertAdjacentHTML('beforeend', '<canvas id="c"></canvas>');
  const g = new Glimm(document.getElementById('c'));
  let start = 0;
  const S = D.szenen.map((z, i) => {
    const e = document.createElement('div'), licht = z.licht || { nachricht: 'abend', tippen: 'nacht', liste: 'morgen', schluss: 'morgen', karte: 'morgen' }[z.typ];
    e.className = `szene blatt reel ${z.typ} ${licht === 'nacht' ? 'g-tinte' : 'g-minze'}`;
    let h = `<span class="reiter">${esc(D.rubrik)}</span>`, dauer = 3;
    if (z.typ === 'nachricht') { h += `<h1 class="klein">${esc(z.titel)}</h1><div class="chat"><small>${esc(z.von)}</small>${esc(z.text)}</div>`; dauer = 3.0; }
    if (z.typ === 'tippen') { z.tipp = kl(z.text.length / 48, 2.2, 4); h += `<div class="feld"></div>`; dauer = .4 + z.tipp + 2.1; }
    if (z.typ === 'liste') {
      h += `<h1 style="margin-bottom:30px">${esc(z.titel)}</h1>` + z.zeilen.map(r => Array.isArray(r)
        ? `<div class="zeile"><b>${esc(r[0])}</b><span>${esc(r[1])}</span><span>${esc(r[2])}</span></div>` : `<div class="zeile punkt">${esc(r)}</div>`).join('');
      if (z.mehr) h += `<span class="sprech rechts" style="left:84px;top:1130px">${esc(z.mehr)}</span>`;
      dauer = .3 + z.zeilen.length * (z.takt || .45) + 2.2;
    }
    if (z.typ === 'karte') { h += `<h1>${esc(z.titel)}</h1>` + (z.text ? `<div class="beitrag">${z.kopf ? `<small>${esc(z.kopf)}</small>` : ''}${marke(z.text)}</div>` : ''); dauer = z.dauer || (2.2 + (z.text || '').length / 40); }
    if (z.typ === 'schluss') { h += `<h1 class="riesig">${esc(z.titel)}</h1>` + (z.zeile ? `<p class="unter">${esc(z.zeile)}</p>` : ''); dauer = 2.6; }
    e.innerHTML = h; document.body.appendChild(e);
    const s = { ...z, e, licht, start, dauer }; start += dauer; return s;
  });
  DAUER = Math.round(start * 30) / 30;

  zeige = t => {
    const z = S.find(s => t < s.start + s.dauer) || S[S.length - 1], u = t - z.start, e = z.e;
    S.forEach(s => s.e.style.display = s === z ? 'block' : 'none');
    const q = sel => e.querySelector(sel);
    let p;
    if (z.typ === 'nachricht') {        // Glimm liest die Nachricht, erschrickt, Kamera fährt aufs Gesicht
      q('.chat').style.transform = `scale(${pop(u, .25)})`;
      const zoom = weich((u - .75) / .5);
      p = { ...Glimm.misch('handy', 'schreck', weich((u - .7) / .2)), uTisch: FERN, uKamDist: mix(12, 8.6, zoom), uKamZiel: [0, mix(1.95, 1.62, zoom), 0], uKamHoch: .03,
        uStauch: u > .7 && u < 1.1 ? -Math.sin((u - .7) / .4 * Math.PI) * .12 : 0,
        uOhr: u > .7 && u < 1.3 ? Math.sin((u - .7) * 40) * .5 * (1.3 - u) : Math.sin(t * 3) * .05 };
    } else if (z.typ === 'tippen') {    // Glimm tippt; ist der Prompt fertig, geht die Lampe an
      const a = .4, b = a + z.tipp, n = Math.floor(kl((u - a) / z.tipp) * z.text.length);
      q('.feld').innerHTML = marke(z.text.slice(0, n)) + (Math.floor(t * 3) % 2 ? '' : '<span class="cursor"></span>');
      q('.feld').style.transform = `scale(${pop(u, .05, .3)})`;
      const fertig = weich((u - b - .1) / .3), tippt = u > a && u < b ? 1 : 0, lauf = weich(u / z.dauer);
      p = { ...GLIMM_LAUNEN.froh, uMund: mix(-.1, 1, fertig), uLid: mix(.22, .05, fertig), uBrL: mix(.35, -.2, fertig), uBrR: mix(.35, -.2, fertig), uBrH: mix(-.02, .06, fertig), uDreh: 0,
        uVor: 1 - fertig, uArmL: mix(-.28 + .13 * tippt * Math.sin(t * 24), .95, fertig), uArmR: mix(-.28 + .13 * tippt * Math.sin(t * 24 + 3.14), .95, fertig),
        uLampe: fertig > 0 ? fertig : .15 + .5 * tippt * (Math.sin(t * 31) > .2 ? 1 : 0) * (Math.sin(t * 7) > -.3 ? 1 : .2),
        uHops: u > b + .1 ? Math.abs(Math.sin((u - b - .1) * 5.5)) * .22 * Math.exp(-(u - b - .1) * 1.2) : 0,
        uPos: [0, 0, -.95], uTisch: NAH, uKamDreh: mix(.55, .38, lauf), uKamHoch: .2, uKamDist: mix(8.2, 7.2, lauf), uKamZiel: [0, mix(1.75, 1.9, fertig), .1], uOhr: Math.sin(t * 3) * .05 };
    } else if (z.typ === 'liste') {     // Zeilen springen rein, Glimm wirft sie hoch
      const takt = z.takt || .45, zl = e.querySelectorAll('.zeile'); let wurf = 0;
      zl.forEach((r, i) => { r.style.transform = `scale(${pop(u, .3 + i * takt)})`; wurf = Math.max(wurf, Math.exp(-Math.pow((u - .3 - i * takt) / .12, 2))); });
      const ende = .3 + zl.length * takt;
      if (z.mehr) q('.sprech').style.transform = `scale(${pop(u, ende + .2)})`;
      p = { ...GLIMM_LAUNEN.froh, uArmR: mix(.2, 1, wurf), uArmL: mix(.2, 1, wurf), uTisch: FERN, uPos: [.55, 0, 0], uKamDist: 12, uKamZiel: [0, 2.3, 0], uKamHoch: .03,
        uHops: u > ende ? Math.abs(Math.sin((u - ende) * 5.5)) * .26 * Math.exp(-(u - ende) * .9) : 0, uOhr: Math.sin(t * 3) * .05 };
    } else if (z.typ === 'karte') {     // Textkasten; Glimm schaut erst fragend und reagiert dann
      q('h1').style.transform = `scale(${pop(u, 0, .3)})`;
      if (q('.beitrag')) q('.beitrag').style.transform = `scale(${pop(u, .35)})`;
      const k = weich((u - .9) / .3), ziel = z.laune || 'froh', lauf = weich(u / z.dauer);
      p = { ...Glimm.misch('skeptisch', ziel, k), uTisch: FERN, uPos: [.3, 0, 0], uKamDist: mix(12.4, 11, lauf), uKamZiel: [0, mix(2.5, 2.3, lauf), 0], uKamHoch: .03, uKamDreh: mix(-.08, .08, lauf),
        uHops: (ziel === 'froh' || ziel === 'stolz') && u > .9 ? Math.abs(Math.sin((u - .9) * 5.5)) * .2 * Math.exp(-(u - .9) * 1.3) : 0,
        uStauch: ziel === 'genervt' ? -.04 * k : 0, uOhr: Math.sin(t * 3) * .05 + (ziel === 'genervt' ? -.12 * k : 0) };
    } else {                            // Glimm drückt den Speichern-Knopf, Kamera ruckt heran
      q('h1').style.transform = `scale(${pop(u, .75, .3)})`;
      if (q('.unter')) q('.unter').style.transform = `scale(${pop(u, 1.4)})`;
      const druck = weich((u - .55) / .14), los = weich((u - .95) / .3);
      p = { ...GLIMM_LAUNEN.froh, uDreh: 0, uVor: 1, uArmL: -.9, uArmR: mix(.35, -.28, druck), uLid: .1, uPos: [0, 0, -.95], uTisch: NAH, uSet: 2, uKnopf: druck * (1 - .5 * los),
        uKamDreh: .48, uKamHoch: .22, uKamDist: mix(9.2, 8.2, druck), uKamZiel: [0, 1.72, .1], uOhr: Math.sin(t * 3) * .05, uStauch: -.05 * druck * (1 - los) };
    }
    p = { uSet: 1, uAA: 1, ...LICHT[z.licht], ...p };
    if (Math.abs(((t + 1.3) % 2.9) - 1.45) < .07) p.uLid = 1;            // Blinzeln
    p.uStauch = (p.uStauch || 0) + Math.sin(t * 2.2) * .012;
    g.zeichne(p, B, {}, H);
    const px = new Uint8Array(4); g.gl.readPixels(Math.round(B * .08), Math.round(H * .93), 1, 1, g.gl.RGBA, g.gl.UNSIGNED_BYTE, px);
    e.style.setProperty('--grund', `rgb(${px[0]},${px[1]},${px[2]})`);   // Farbverlauf hinter der Schrift nimmt die Wandfarbe
  };
  zeige(0);
}
