# Review 04 – Technik, Bedienung, Barrierefreiheit (SMM Coach 0.13.2)

Prüfer: unabhängiger Technik-/UX-/A11y-Review · Stand 06.11.2026 · keine Projektdatei geändert.

**Methode**
- Playwright 1.63 mit Chromium. **WebKit ist nicht installiert** (`/opt/pw-browsers` enthält nur Chromium), deshalb iPhone-Emulation in Chromium: iOS-Safari-User-Agent, Touch, DPR 2, Viewports 390×844 (iPhone 12–16) und 375×667 (iPhone SE), Schriftstufen „m“ und „xl“, hell/dunkel, Fokusmodus, ruhige Darstellung. Die installierte App wurde über `navigator.standalone = true` nachgestellt.
- Was nur echtes iOS-Verhalten betrifft (Tastatur, Statusleiste, Teilen-Menü), ist als **Hypothese** markiert oder mit Quelle belegt.
- Lernstände für die Tests wurden per Skript in `localStorage` geschrieben (Fortschritt, fällige Wiederholungen, laufender Test, Pause ≥ 3 Tage, keine Sicherung seit 20 Tagen).
- Alle 50 Lektionen (330 Karten) wurden automatisch durchgeklickt und je Karte Schriftgröße und Überlauf gemessen. Kontraste wurden per DOM-Scan aller sichtbaren Texte (hell/dunkel × normal/ruhig) und für Design-Tokens nachgerechnet.
- Screenshots liegen unter `/home/claude/review4/shots/` (Nummern stehen bei den Befunden). Die Testskripte liegen unter `/tmp/rv4/` (t1–t16) und gehen beim Neustart verloren.
- Konsole: In allen Durchläufen gab es **keine Fehler und keine Warnungen der App**.

**Bereits behoben (gegenüber `docs/REVIEW-2026-11-06.md`), geprüft und in Ordnung:** Kein Doppeltipp-Überspringen im Probetest mehr. Der Test wird laufend gespeichert und lässt sich nach einem Neuladen fortsetzen, in Frage und in Übersicht. Beim Verlassen kommt eine Rückfrage, und die Tab-Leiste ist dabei abgesichert. `lastBackup` wird erst nach erfolgreichem Teilen gesetzt. Vor dem Import kommt eine Rückfrage mit Vergleich, und ungültige Dateien werden abgelehnt. Die Glossar-Suche baut nur noch die Liste neu. Im Service Worker gibt es jetzt Timeout, `r.ok`-Prüfung und `cache:'reload'`. „Musterlösung anzeigen“ ersetzt den Knopf nicht mehr. `document.title` und der Fokus auf h1 werden gesetzt, Story-Dialog mit `aria-modal` und Fokusfalle, `aria-live` beim Feedback, `--ink-3` hat jetzt 4,8–5,6 : 1. Die Zeitablauf-Abgabe funktioniert (S.run.end manipuliert → automatische Abgabe, Toast, Auswertung).

---

## P1 – falsch / kaputt / Anforderung verletzt

### T1 · P1 · Start-Seite scrollt bei echtem Lernstand, Karten liegen unter der Tab-Leiste
- **Fundstelle:** `app.js:279–285` (`viewStart`, bis zu 6 Zusatzkarten), `app.css:436–465`
- **Problem:** Die Anforderung „alle drei Hauptseiten ohne Scrollen“ ist nur beim **leeren** Lernstand erfüllt. Sobald Willkommen, Üben, Sicherungs-Erinnerung, „Probetest läuft“ und „Prüfungstermin eintragen“ zusammenkommen, wird die Seite deutlich länger als der Bildschirm. „Probetest läuft“ (der wichtigste Hinweis) liegt dann **hinter** der Tab-Leiste.
- **Beleg (scrollHeight / Bildschirmhöhe):**
  - 390×844: m 1017/844, xl 1140/844
  - 375×667: m 889/667, xl 975/667
  - Shot `04-voll-start-390x844-m.png`
  - Prüfung bei xl 390×844: 900/844 (`04-voll-pruefung-390x844-xl.png`); Lehrgang bei xl 375×667: 684/667, der Fußtext liegt unter der Tab-Leiste (`03-lehrgang-375x667-xl-light.png`)
- **Reproduktion:** Lernstand mit Fortschritt anlegen, `S.seen` 5 Tage zurück, `S.lastBackup = 0`, `S.created` 20 Tage zurück, Probetest starten und zurück zu `#start`.
- **Korrektur:** Nur **einen** Hinweis-Platz nach Priorität vergeben. Die Begrüßung wandert in die Kicker-Zeile der Hero-Box. Ein Fit-Schutz blendet notfalls die unwichtigsten Karten aus.
```js
// app.js, viewStart(): Karten 279–285 ersetzen
const card = (href, icon, bg, title, sub) => `<a class="cont" href="${href}"><div class="thumb" style="background:${bg}">${ic(icon)}</div><div><b style="font-size:1rem">${title}</b><div class="small muted">${sub}</div></div><span class="chev" style="margin-left:auto">${ic("right")}</span></a>`;
const backupDue = hasProgress(S) && Date.now() - (S.lastBackup || S.created || 0) > (S.lastBackup ? 14 : 7) * 86400000;
const hinweis = [
  S.run && card("#test", "clock", "var(--grad-strong)", "Probetest läuft", "Weitermachen, wo du aufgehört hast"),
  uebenN() && card("#quiz-ueben", "repeat", "linear-gradient(135deg,#1864ab,#6741d9)", `Üben: ${Math.min(uebenN(), 10)} Fragen`, "Fehler und fällige Wiederholungen"),
  backupDue && card("#einstellungen", "download", "linear-gradient(135deg,#495057,#212529)", "Lernstand sichern", "Sicherungsdatei erstellen"),
  platform().standalone && !hasProgress(S) && card("#einstellungen", "upload", "linear-gradient(135deg,#495057,#212529)", "Kommst du aus dem Browser?", "Lernstand wiederherstellen"),
  !S.pruefung && card("#lehrgang", "cal", "var(--grad-strong)", "Prüfungstermin eintragen", "Für deinen Wochenplan"),
].filter(Boolean);
// … im Template: Kicker = PAUSE_TAGE >= 3 && hasProgress(S) ? "Schön, dass du wieder da bist" : …
// … statt der Einzelkarten: ${hinweis.slice(0, 2).join("")}${card("#glossar", "abc", "linear-gradient(135deg,#2b8a3e,#1864ab)", "Glossar & Formeln", `${GLOSSAR.length} Begriffe`)}
// nach page(...):
fitMain();
```
```js
// app.js, neue Hilfsfunktion – auch nach viewPruefung()/viewLehrgang() aufrufen
function fitMain() {
  const tb = $(".tabbar"); if (!tb || document.documentElement.hasAttribute("data-focus")) return;
  const limit = () => tb.getBoundingClientRect().top - 6;
  const opt = $$(".wrap > .cont:not([href='#glossar']):not([href='#test'])").reverse();
  const last = () => { const k = [...$(".wrap").children].filter(e => e.offsetParent); return k[k.length - 1]?.getBoundingClientRect().bottom || 0; };
  for (const el of opt) { if (last() <= limit()) break; el.hidden = true; }
}
```

### T2 · P1 · Lektionen ignorieren die Schriftgröße – „Sehr groß“ macht den Lektionstext sogar kleiner
- **Fundstelle:** `app.css:168` (`.story .slide{font-size:calc(var(--k,1) * clamp(17px,3.3vw,20px))}`), `app.js:384–393` (`fitSlide`, Untergrenze `lo = .5`)
- **Problem:** Die Schriftstufen arbeiten über die Wurzel-Schriftgröße (rem), `app.css:286`. Der Lektionstext ist aber in **px** festgelegt und wächst deshalb nicht mit. Gleichzeitig werden Kopf und Knöpfe (rem) größer und nehmen der Karte Platz weg. `fitSlide` verkleinert die Karte daraufhin. Ergebnis: Bei „Sehr groß“ ist der eigentliche Lerninhalt **kleiner** als bei „Normal“. Das verstößt gegen WCAG 1.4.4 und gegen die Lernhilfen-Zusage für ADHS/Lesbarkeit.
- **Beleg (alle 330 Karten gemessen):**
  - 375×667 xl: 88 Karten verkleinert, 17 Karten unter 14 px, kleinste Schrift 12,4 px („unt/governance-zugaenge“, Karte 6, Kurz-Check)
  - 390×844 m: nur 6 Karten verkleinert, kleinste Schrift 16,2 px
  - Karte 2 von „Grundwortschatz Marketing“ bei 375×667: m 14,2 px, xl 13,9 px (`05-lektion-karte2-375x667-m.png` / `-xl.png`)
- **Korrektur (simuliert: von 40 auf 8 Karten unter 15 px bei 375×667 xl):**
```css
/* app.css:168 – Schrift folgt der Schriftstufe */
.story .slide{font-size:calc(var(--k,1) * clamp(1.0625rem, 3.3vw, 1.25rem))}
/* Nach dem Beantworten nicht gewählte Optionen ausblenden – schafft Platz für die Erklärung */
.story .opt.dim{display:none}
/* Bei großer Schrift Kopf kompakter */
:root[data-size=xl] .story .shead .n small{display:none}
:root[data-size=xl] .story .segs{padding-top:calc(6px + env(safe-area-inset-top,0px))}
```
```js
// app.js:389 – Untergrenze anheben, damit nie unter ~14 px gerendert wird
let lo = Math.max(.5, 14 / parseFloat(getComputedStyle(slide).fontSize)), hi = 1;
```
  Diese 8 Karten liegen auch danach noch unter 15 px und sollten **inhaltlich geteilt** werden (je eine Liste in zwei Karten): recht/rechtsgebiete K2, recht/ugc-recht K2 und K6, recht/datenschutz K2 („Rechtssicheres Gewinnspiel“), einf/einsatz K2, unt/konzeption K3, platt/blogs-communitys K5, plan/content-journey K2.

---

## P2 – deutlich verbesserungswürdig

### T3 · P2 · Quiz: Erklärung und „Weiter“ liegen nach dem Antworten unter dem sichtbaren Bereich
- **Fundstelle:** `app.js:507` (`$("#nx").focus({ preventScroll: true })`), `app.js:527/537`
- **Problem:** Nach dem Antworten wird nicht gescrollt. Die Erklärung (der eigentliche Lerneffekt) und der „Weiter“-Knopf liegen unter der Tab-Leiste. Man muss erst selbst scrollen. Bei ADHS ist das ein klassischer Abbruchpunkt.
- **Beleg (je 10 Fragen im Schnell-Quiz):**

  | Viewport | „Weiter“ sichtbar | Anfang der Erklärung sichtbar |
  |---|---|---|
  | 390×844 m | 1/10 | 9/10 |
  | 375×667 m | **0/10** | 2/10 |
  | 375×667 xl | **0/10** | 1/10 |

  Shot `25-quiz-feedback-dunkel-390.png`.
- **Korrektur:**
```js
// app.js:507
const weiter = () => {
  $(".fbx").insertAdjacentHTML("afterend", `<button type="button" class="btn block" style="margin-top:14px" id="nx">Weiter ${ic("right")}</button>`);
  const nx = $("#nx"); nx.onclick = next;
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches || S.set?.calm;
  $(".fbx").scrollIntoView({ block: "start", behavior: calm ? "auto" : "smooth" });
  nx.focus({ preventScroll: true });
};
```
```css
/* Quiz/Test: Tab-Leiste nicht über Inhalten – dort gibt es „Beenden“ */
body:has(.qcard:not(.result)) .tabbar{display:none}
body:has(.qcard:not(.result)) .wrap{padding-bottom:calc(32px + var(--safe-b))}
```

### T4 · P2 · System-Zurück (Android-Taste, Browser, Wischgeste) springt in einen anderen Reiter
- **Fundstelle:** `app.js:173–175` (Tab-Links sind normale `<a href>` und legen Verlaufseinträge an), `app.js:193–205`
- **Problem:** Die App-eigenen Zurück-Knöpfe funktionieren richtig. Der Verlauf des Systems enthält aber jeden Reiterwechsel.
- **Reproduktion:** Start → Modul „Einbettung“ → Reiter Prüfung → Freitext üben → Beenden (landet richtig auf `#pruefung`) → **System-Zurück** → `#modul-unt` (Reiter Start) → nochmal Zurück → `#start`. Gemessen mit `t10.py`.
- **Korrektur:** Reiterwechsel ersetzt den Verlauf bis zur letzten Reiter-Wurzel.
```js
// app.js:174 – Tab-Links markieren
`<a href="#${h}" data-tab …>`
// app.js:206 – im Klick-Handler vor allen anderen Prüfungen
const tabA = e.target.closest("a[data-tab]");
if (tabA) {
  e.preventDefault(); const href = tabA.getAttribute("href");
  if (S.run && location.hash === "#test") return; // Test-Rückfrage (app.js:681) greift vorher
  const n = NAV.st.length - 1;
  if (n > 0) { addEventListener("popstate", () => replaceHash(href), { once: true }); history.go(-n); }
  else replaceHash(href);
  return;
}
```
  Hinweis: Der Test-Rückfrage-Listener (`app.js:681`) läuft in der Capture-Phase vorher und bleibt gültig.

### T5 · P2 · Im Fokusmodus sind Prüfung und Probetest nicht erreichbar
- **Fundstelle:** `app.css:388` (`:root[data-focus] .tabbar{display:none!important}`)
- **Problem:** Der Fokusmodus blendet die Tab-Leiste aus, und es gibt keinen anderen Weg zu `#pruefung`. Lehrgang ist nur erreichbar, solange kein Prüfungstermin eingetragen ist.
- **Beleg:** `21-start-fokus-ruhig-390.png`. Sichtbare Links auf Start: `#einstellungen, #mini, #glossar, #einstellungen, #lehrgang`.
- **Korrektur:** Tab-Leiste im Fokusmodus behalten (sie besteht nur aus drei Symbolen) und nur Statistiken/Extras ausblenden.
```css
/* app.css:388 */
:root[data-focus] .fx, :root[data-focus] .nag, :root[data-focus] .hero-stat{display:none!important}
```
  Den Beschreibungstext in den Einstellungen (`app.js:949`) anpassen: „Blendet Statistiken und Extras aus.“

### T6 · P2 · Installationsanleitung für iPhone passt nicht mehr zu Safari in iOS 26
- **Fundstelle:** `app.js:825` (`"ios-safari"`)
- **Problem:** Die Anleitung sagt „Unten (iPhone) … auf das Teilen-Symbol tippen“. In iOS 26 liegt „Teilen“ hinter den drei Punkten neben der Adressleiste. Außerdem gibt es den Schalter „Als Web-App öffnen“, der an bleiben muss. Ist er aus, entsteht nur ein Lesezeichen ohne eigenen Speicher, und Offline-/Speichervorteile entfallen.
- **Beleg:** [iThinkDiff – Add web app to iPhone home screen in iOS 26](https://www.ithinkdiff.com/add-web-app-bookmark-iphone-home-screen-ios-26/): Tap the three dots to the right of the address bar, then tap Share; „Open as Web App“ toggle … Off creates a bookmark that launches in Safari. Shot `01-erststart-gate-390.png`.
- **Korrektur:**
```js
"ios-safari": ["Auf ⋯ neben der Adressleiste tippen, dann auf „Teilen“ {S} (bei älteren iOS-Versionen: Teilen-Symbol {S} unten).", "Nach unten scrollen und „Zum Home-Bildschirm“ wählen.", "„Als Web-App öffnen“ eingeschaltet lassen und oben rechts auf „Hinzufügen“ tippen."],
```

### T7 · P2 · Service Worker kann Dateiversionen mischen → App hängt dauerhaft bei „Lädt …“
- **Fundstelle:** `sw.js:20–37` (jede Datei einzeln Netz-zuerst mit 3-s-Timeout), `index.html` (kein Fehler-Fallback)
- **Problem:** Bei schwachem Netz kann z. B. `app.js` neu aus dem Netz kommen, während `data/kurs.js` nach dem Timeout aus dem alten Cache kommt, oder umgekehrt. Fehlt dann ein Export, bricht der Modulgraph ab. Die App zeigt **endlos „Lädt …“**, ohne Hinweis und ohne Knopf.
- **Beleg:** Simuliert mit einer `data/mehrfach.js` ohne den Export `MEHRFACH`. Ergebnis: Seitenfehler „does not provide an export named 'MEHRFACH'“, Bildschirm bleibt bei „Lädt …“ (`28-modulfehler-laedt-endlos-390.png`).
- **Korrektur 1 (Fallback in `index.html`, vor dem Modul-Script):**
```html
<script>
addEventListener("error", e => { if (/export named|Failed to fetch dynamically|Importing a module/.test(e.message || "")) showBoot(); }, true);
function showBoot(){ const a=document.getElementById("app"); if(!a||!/Lädt/.test(a.textContent)) return;
  a.innerHTML='<div class="loading"><p>Die App wurde gerade aktualisiert.</p><button class="btn" onclick="caches.keys().then(k=>Promise.all(k.map(x=>caches.delete(x)))).finally(()=>location.reload())">Neu laden</button></div>'; }
setTimeout(showBoot, 8000);
</script>
```
- **Korrektur 2 (`sw.js`, eine Version für alle App-Dateien):** App-Dateien kommen aus dem eigenen Cache-Stand. Neue Versionen gibt es ausschließlich über den neuen SW und „Jetzt aktualisieren“, damit der Knopf auch wirklich etwas bewirkt. Nur Navigation bleibt Netz-zuerst.
```js
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  const isAsset = ASSETS.some(a => a !== './' && url.pathname.endsWith('/' + a));
  if (isAsset) { e.respondWith(caches.open(CACHE).then(c => c.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)))); return; }
  // Navigation / Rest: wie bisher (Netz mit Timeout, sonst index.html aus CACHE)
  …
});
```

### T8 · P2 · Sicherungsdatei kann Code in die Seite einschleusen (XSS)
- **Fundstelle:** `app.js:935` (Prüfung nur `Array.isArray(d.tests)`), Ausgabe ohne `esc()` in `app.js:266/276` (`best`), `571` (`last`, `best`), `576` (`S.tests…join`, `height:${t}px`)
- **Problem:** Eine präparierte Sicherung, etwa „meine Sicherung“ von Mitlernenden, mit `tests: ["<img src=x onerror=…>"]` führt beim Öffnen von „Prüfung“ Script aus.
- **Beleg:** `t11.py` → `window.__xss === 1`.
- **Korrektur:** Beim Normalisieren säubern, damit es auch für alte Stände gilt.
```js
// app.js, normalizeState() – am Ende ergänzen
S.tests = (Array.isArray(S.tests) ? S.tests : []).map(Number).filter(n => Number.isFinite(n) && n >= 0 && n <= 100).map(Math.round);
S.pruefung = /^\d{4}-\d{2}-\d{2}$/.test(S.pruefung || "") ? S.pruefung : "";
const ok = { size: ["s","m","l","xl"], theme: ["auto","light","dark"], goal: ["10","15","25"], pomo: ["","10","25"], clock: ["","genau"] };
for (const [k, v] of Object.entries(ok)) if (!v.includes(String(S.set[k] ?? v[0]))) S.set[k] = k === "goal" ? "15" : v[0];
if (S.run && !(Array.isArray(S.run.ids) && typeof S.run.ans === "object")) S.run = null;
```

### T9 · P2 · Einstellungen: Jeder Umschalter wirft den Fokus aus der Seite (Tastatur/VoiceOver)
- **Fundstelle:** `app.js:962–964` (`viewEinstellungen({ keep: true })` baut alles neu, `page()` bricht bei `keep` vor dem Fokussieren ab: `app.js:181`)
- **Problem:** Nach einem Tipp auf „Groß“, „Dunkel“, „25 Fragen“ usw. steht der Fokus auf `<body>`. VoiceOver springt an den Seitenanfang (WCAG 2.4.3).
- **Beleg:** `t7.py`: `focus: BODY` nach jedem Segment-Tipp.
- **Korrektur:**
```js
// app.js:962–964 – Fokus nach dem Neuzeichnen wiederherstellen
const refocus = sel => { viewEinstellungen({ keep: true }); $(sel)?.focus({ preventScroll: true }); };
$$("button[data-size]").forEach(b => b.onclick = () => { S.set.size = b.dataset.size; save(); applySettings(); refocus(`button[data-size="${b.dataset.size}"]`); });
$$("button[data-theme]").forEach(b => b.onclick = () => { S.set.theme = b.dataset.theme; save(); applySettings(); refocus(`button[data-theme="${b.dataset.theme}"]`); });
["goal","pomo","clock"].forEach(k => $$(`button[data-${k}]`).forEach(b => b.onclick = () => { S.set[k] = b.dataset[k]; if (k === "pomo") pomo0 = 0; save(); refocus(`button[data-${k}="${b.dataset[k]}"]`); }));
```

### T10 · P2 · Dunkelmodus: Buchstaben A–D auf grün/rot markierten Antworten kaum lesbar
- **Fundstelle:** `app.css:137–138` (`.opt.ok .l{background:var(--ok);color:#fff}`, `.opt.bad .l{…var(--bad)…}`), dunkle Token `app.css:23/29`
- **Beleg:** Weiß auf `#4fd18f` = **1,94 : 1**, weiß auf `#ff7aa2` = **2,45 : 1** (Soll 4,5). Gefunden im DOM-Scan, `25-quiz-feedback-dunkel-390.png`. Hell ist alles in Ordnung (keine Textverstöße).
- **Korrektur:**
```css
:root[data-theme=dark] .opt.ok .l, :root[data-theme=dark] .opt.bad .l{color:#110e16}
@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .opt.ok .l, :root:not([data-theme=light]) .opt.bad .l{color:#110e16}}
```

### T11 · P2 · Rahmen von Textfeld, Suchfeld und Antwortoptionen zu schwach (WCAG 1.4.11)
- **Fundstelle:** `app.css:134` (`.opt` Rahmen `--line-strong`), `192` (textarea), `295` (`.searchbox` Rahmen `--line`), `262` (Datum)
- **Beleg:**
  - `--line-strong` #b9b0a6 auf weiß: 2,14 : 1; dunkel #5a5368 auf #1b1722: 2,41 : 1
  - `--line` am Suchfeld: 1,3 : 1 hell, 1,25 : 1 dunkel
  - Soll 3 : 1 für die Grenze von Eingabefeldern
- **Korrektur:**
```css
:root{--line-strong:#8f857a}                 /* 3,5:1 auf weiß */
:root[data-theme=dark]{--line-strong:#7a7290} /* 3,6:1 auf #1b1722 */
@media (prefers-color-scheme:dark){:root:not([data-theme=light]){--line-strong:#7a7290}}
.searchbox{border-color:var(--line-strong)}
```

### T12 · P2 · Freitext-Bewertung im Probetest wird beim letzten Tipp sofort endgültig
- **Fundstelle:** `app.js:656` (speichert, sobald `allRated`), `app.js:666` (danach „Dieser Test ist schon gewertet“)
- **Problem:** Wer sich beim fünften Freitext vertippt, kann den Wert nicht mehr ändern. Ergebnis und Leitner-Stand sind dann fest.
- **Reproduktion:** Probetest abgeben, alle 5 Freitexte mit „1 Punkt“ bewerten, danach bei einem auf „2 Punkte“ tippen → Toast „Dieser Test ist schon gewertet“ (`t6.py`).
- **Korrektur:** Erst mit einem ausdrücklichen Knopf speichern.
```js
// app.js:656 – automatische Wertung entfernen
// if (sc.allRated && !r.saved) {...}  →  nur noch über Knopf:
// im Template statt #again-Zeile:
${sc.allRated && !r.saved ? `<button class="btn block" id="commit">Ergebnis speichern</button>` : ""}
${r.saved ? `<div class="row" …><a class="btn ghost" href="#pruefung">Zurück</a><button class="btn" id="again">Neuer Test</button></div>` : ""}
// Handler:
$("#commit")?.addEventListener("click", () => { r.saved = true; qs.forEach((q, i) => grade(q.key, q.t === "frei" ? r.rated[i] === 1 : istRichtig(q, r.ans[i]), false)); S.tests.push(testScore(r).pct); save(); viewAuswertung(); });
```

### T13 · P2 · Fragen-Schlüssel hängen am Fragetext – eine Tippfehler-Korrektur löscht Lernstand endgültig
- **Fundstelle:** `app.js:139` (`qkey = "q:" + text.slice(0,60)`), `app.js:152–153` (unbekannte Schlüssel werden **gelöscht**)
- **Problem:** Ändert eine Inhaltskorrektur die ersten 60 Zeichen einer Frage, verwaist der Schlüssel. `normalizeState` löscht ihn dann beim nächsten Start aus `S.q` und `S.srs`, ohne Weg zurück, auch bei einer späteren Wiederherstellung. Die laufenden Inhaltsreviews (01–05) werden genau solche Textänderungen erzeugen.
- **Beleg:** Derzeit 419 Fragen und 419 Schlüssel, keine Kollisionen (`keys.mjs`). Kein einziges `id`-Feld in `FRAGEN`.
- **Korrektur:** (1) Verwaiste Schlüssel parken statt löschen. (2) Optionales `id`-Feld bevorzugen und künftig bei jeder Textänderung `alt: "alter Fragetext"` mitgeben.
```js
// app.js:139
const qkey = q => q.id ? "id:" + q.id : "q:" + q.q.trim().slice(0, 60);
// app.js:147–153 ersetzen
S.orph = S.orph || {};
for (const p of POOL) for (const old of [...LEGACY_MODS.map(m => m + ":" + p.q.slice(0, 40)), "q:" + p.q.trim().slice(0, 60), ...(p.alt ? ["q:" + p.alt.trim().slice(0, 60)] : [])]) {
  if (old === p.key) continue;
  const src = old in S.q ? S : old in (S.orph.q || {}) ? { q: S.orph.q, srs: S.orph.srs } : null;
  if (src && !(p.key in S.q)) { S.q[p.key] = src.q[old]; if (src.srs?.[old]) S.srs[p.key] = src.srs[old]; }
}
S.orph.q = S.orph.q || {}; S.orph.srs = S.orph.srs || {};
for (const k of Object.keys(S.q)) if (!POOL_KEYS.has(k)) { S.orph.q[k] = S.q[k]; delete S.q[k]; }
for (const k of Object.keys(S.srs)) if (!POOL_KEYS.has(k)) { S.orph.srs[k] = S.srs[k]; delete S.srs[k]; }
```
  Hinweis: `DEF()` um `orph: {}` ergänzen.

---

## P3 – Feinschliff

### T14 · P3 · iOS zoomt beim Tippen in Textfelder, wenn die Schriftgröße „Klein“ gewählt ist
- **Fundstelle:** `app.css:192` (textarea `1rem`), `298` (Suche), `262` (Datum). Bei `data-size=s` ergibt das 14,72 px.
- **Problem:** Safari vergrößert die Seite bei Eingabefeldern unter 16 px und zoomt danach nicht zurück. Gemessen: 14,72 px in Freitext und Suche. Das iOS-Verhalten ist bekannt, hier aber nur in Chromium nachgestellt.
- **Korrektur:** `textarea, .searchbox input, input[type=date]{font-size:max(16px,1rem)}`

### T15 · P3 · Doppelte Übersetzung im Lektionstext: „PR (Public Relations) (Öffentlichkeitsarbeit)“
- **Fundstelle:** `app.js:436` (`linkTerms`)
- **Problem:** Steht hinter dem Begriff schon eine Klammer, hängt die App trotzdem ihre Übersetzung an. Beispiele aus „Grundwortschatz Marketing“, Karte „Wer macht was?“: PR, Social Selling, HR, Employer Branding (`05-lektion-karte2-375x667-xl.png`). Vorlesen liest beide Klammern.
- **Korrektur:**
```js
// app.js:436 – Bedingung ergänzen
const folgtKlammer = /^\s*\(/.test(txt.slice(m.index + m[0].length));
if (kurz && !folgtKlammer && kurz.length <= 32 && …)
```

### T16 · P3 · Begriff-Knöpfe brechen ungünstig um („die „“ ↵ „Customer Journey“?“)
- **Fundstelle:** `app.js:433` (`<button class="term">`), `app.css:406`
- **Problem:** Ein `<button>` ist trotz `all:unset` ein nicht teilbares Inline-Element. Mehrwortbegriffe können nicht innerhalb umbrechen, und vor dem Knopf entsteht eine Umbruchstelle direkt nach dem Anführungszeichen (`25-quiz-feedback-dunkel-390.png`).
- **Korrektur:** Echtes Inline-Element mit Button-Rolle verwenden.
```js
const b = document.createElement("span"); b.className = "term"; b.setAttribute("role", "button"); b.tabIndex = 0; b.dataset.g = i; b.textContent = m[0];
// global:
document.addEventListener("keydown", e => { const t = e.target.closest?.(".term"); if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); termSheet(+t.dataset.g); } });
```
  In `acceptNode` (`app.js:425`) `.term` bleibt ausgeschlossen. `say()`/`linkTerms` brauchen sonst keine Änderung.

### T17 · P3 · Begriffsblatt und Rückfrage-Dialog: Fokus geht beim Schließen verloren, kein Escape im Rückfrage-Dialog
- **Fundstelle:** `app.js:442–453` (`termSheet`), `app.js:670–679` (`confirmBox`)
- **Beleg:** Nach Escape im Begriffsblatt steht der Fokus auf `BODY.no-scroll` (`t4.py`). `confirmBox` hat keinen Escape-Handler, keine Fokusfalle und gibt den Fokus nicht zurück.
- **Korrektur:**
```js
// termSheet: am Anfang
const opener = document.activeElement;
const close = () => { el.remove(); opener?.focus?.({ preventScroll: true }); };
// confirmBox: analog + Escape + Falle
const opener = document.activeElement;
const close = () => { el.remove(); opener?.focus?.({ preventScroll: true }); };
el.addEventListener("keydown", e => { if (e.key === "Escape") close(); if (e.key === "Tab") { const a = $("#cno", el), z = $("#cyes", el); if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } } });
```

### T18 · P3 · Einstellungen: Zurück-Knopf heißt „Start“ und Reiter „Start“ ist aktiv, obwohl man aus „Prüfung“ kam
- **Fundstelle:** `app.js:945` (`page("start", …<a class="back" href="#start">… Start</a>`)
- **Reproduktion:** Reiter Prüfung → Zahnrad → Knopf zeigt „Start“, führt aber (richtig) zurück zu `#pruefung`.
- **Korrektur:**
```js
const fromTab = (NAV.st[0] || "#start").slice(1), fromName = { start: "Start", pruefung: "Prüfung", lehrgang: "Lehrgang" }[fromTab] || "Zurück";
page(fromTab, `<a class="back" href="#${fromTab}">${ic("left")} ${fromName}</a>…`, { keep: o.keep });
```

### T19 · P3 · Glossar-Suche: keine Rangfolge, Bindestrich und Umlaut-Umschreibung werden nicht erkannt
- **Fundstelle:** `app.js:901–905`
- **Beleg:**
  - „reich“ ergibt 15 Treffer, „Reichweite“ steht nicht unter den ersten sechs (alphabetisch)
  - „Engagement Rate“ findet die Formel „Engagement-Rate“ nicht (0 Treffer)
  - „oeffentlichkeit“ ergibt 0 Treffer
- **Korrektur:**
```js
const norm = t => t.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[-\s_/]+/g,"");
const score = g => { const w = norm(g.w + " " + (g.syn||[]).join(" ")), q = norm(qy); return w.startsWith(q) ? 0 : w.includes(q) ? 1 : 2; };
const items = GLOSSAR.filter(g => !qy || norm(g.w + " " + (g.syn||[]).join(" ") + " " + g.d).includes(norm(qy)))
  .sort((a, b) => (qy ? score(a) - score(b) : 0) || a.w.localeCompare(b.w, "de"));
```

### T20 · P3 · Probetest: Fortschrittsbalken zählt leere Freitexte und abgewählte Mehrfachantworten als beantwortet
- **Fundstelle:** `app.js:614` und `624` (`Object.keys(r.ans).length`). Richtig wäre `answered()` wie in `623`/`632`.
- **Korrektur:** In `614` und `624` `qs.filter((_, i) => answered(i)).length` verwenden. Beim Freitext (`622`) zusätzlich nach jeder Eingabe `$(".bar i").style.width = …` aktualisieren.

### T21 · P3 · Probetest-Freitext: die letzten Zeichen können beim App-Wechsel verloren gehen
- **Fundstelle:** `app.js:622` (Speichern 400 ms verzögert, sonst nur bei `blur`). iOS feuert beim Wechsel in den App-Umschalter nicht zuverlässig `blur`.
- **Korrektur (global):** `addEventListener("visibilitychange", () => { if (document.hidden) save(); }); addEventListener("pagehide", save);`

### T22 · P3 · Zeitwarnung 5 Minuten nur farblich
- **Fundstelle:** `app.js:606` (`el.classList.toggle("low", …)`). `role="timer"` ist implizit nicht live, Screenreader erfahren nichts.
- **Korrektur:** `if (ms < 5*60000 && !r.warned) { r.warned = true; save(); toast("Noch 5 Minuten"); }` (der Toast hat `role=status`).

### T23 · P3 · Quiz: Bei jeder neuen Frage landet der Fokus auf einer unsichtbaren Überschrift statt auf der Frage
- **Fundstelle:** `app.js:184` (Fokus auf h1) zusammen mit `app.js:504` (`<h1 class="sr-only">Schnell-Quiz</h1>`)
- **Problem:** VoiceOver sagt bei jeder Frage „Schnell-Quiz“ statt den Fragetext.
- **Korrektur:** In `next()` nach `page(...)`: `const qt = $("#qt"); qt.tabIndex = -1; qt.focus({ preventScroll: true });`. Gleiches gilt in `runTest` (`app.js:612`).

### T24 · P3 · Touch-Ziele unter 44 px (Apple-Richtlinie, WCAG 2.5.8 mit 24 px ist erfüllt)
- **Beleg (`t9.py`):**
  - Zahnrad 38×38 (`app.css:437`)
  - Vorlesen im Quiz 36×36 (`372/401`)
  - Lektion schließen/vorlesen 40×40 (`165/400`)
  - Zurück-/Beenden-/Abbrechen-Pillen 39 hoch (`50`)
  - Segment-Knöpfe 40 hoch (`292`)
  - Einklapp-Überschriften 43 hoch (`456`)
- **Korrektur:**
```css
.compact .top .iconbtn,.qtop .say,.story .x,.story .shead .say{min-width:44px;min-height:44px}
.back{min-height:44px}.seg button{min-height:44px}.compact details.fold>summary{min-height:44px}
```

### T25 · P3 · Querformat: Safe Areas links/rechts fehlen, Lektionskarten bis 10 px und abgeschnitten
- **Fundstelle:** `index.html` (`viewport-fit=cover`), `app.css:41` (`.wrap` 18 px fest), `app.css:180/156` (Story), `manifest.webmanifest` (`orientation:any`)
- **Beleg:** 844×390: 2 von 6 Karten auf 10 px verkleinert (Untergrenze 0,5), eine davon 32 px abgeschnitten (`27-lektion-quer-844x390.png`). Notch/Dynamic Island überdeckt im Querformat den Rand, Hypothese ohne echtes Gerät.
- **Korrektur:**
```css
.wrap{padding-left:max(18px,env(safe-area-inset-left));padding-right:max(18px,env(safe-area-inset-right))}
.story{padding-left:env(safe-area-inset-left);padding-right:env(safe-area-inset-right)}
@media (orientation:landscape) and (max-height:500px){.story .shead{padding-block:4px}.story .snav{padding-block:6px calc(6px + var(--safe-b))}.story .snav .btn{padding-block:8px}}
```
  Oder im Manifest `"orientation": "portrait"`, wenn Querformat nicht gewollt ist.

### T26 · P3 · `100vh` in Safari (nicht installiert): Seite lässt sich um die Toolbar-Höhe scrollen
- **Fundstelle:** `app.css:34` (`body{min-height:100vh}`). In iOS Safari ist `100vh` die große Ansicht ohne Leisten. Hypothese aus dem bekannten Safari-Verhalten, in Chromium nicht reproduzierbar.
- **Korrektur:** `body{min-height:100vh;min-height:100dvh}`

### T27 · P3 · Statusleisten-/Theme-Farbe folgt nicht der App-Einstellung Hell/Dunkel
- **Fundstelle:** `index.html` (zwei `theme-color` nach Systemmodus), `app.js:94–100`
- **Problem:** Steht das System auf hell und die App auf „Dunkel“, bleibt die Browser-/Statusleiste hell.
- **Korrektur:**
```js
// applySettings() ergänzen
const dark = S.set?.theme === "dark" || (S.set?.theme !== "light" && matchMedia("(prefers-color-scheme: dark)").matches);
$$('meta[name="theme-color"]').forEach(m => { m.removeAttribute("media"); m.content = dark ? "#110e16" : "#f7f4f1"; });
```
  Zusätzlich passt `manifest.webmanifest` `"theme_color": "#e83e8c"` nicht zum ruhigen Design. Besser `#f7f4f1`.

### T28 · P3 · Toast „Lernstand wiederhergestellt“ nach IndexedDB-Rettung erscheint nie
- **Fundstelle:** `app.js:83`. Gleich nach `localStorage.setItem(KEY, …S)` wird geprüft, ob `localStorage` **keinen** Fortschritt hat. Das ist immer falsch.
- **Korrektur:** Zustand vorher merken: `const lsHatte = hasProgress(JSON.parse(localStorage.getItem(KEY) || "null"));` vor dem Überschreiben, danach `if (!lsHatte) toast(…)`.

### T29 · P3 · Zweiter Tab/zweites Fenster setzt eine laufende Lektion auf Karte 1 zurück
- **Fundstelle:** `app.js:90–93`. Bei jedem `storage`-Ereignis läuft `route()`, außer im Test. Der andere Tab speichert schon beim Start (`app.js:85`).
- **Korrektur:** `if (!storyEl && !/^#(quiz|test|auswertung)/.test(location.hash)) route();`

### T30 · P3 · Schritt für Schritt: Neu aufgedeckte Sätze werden Screenreadern nicht angesagt; Vorlesen liest auch verdeckte Teile
- **Fundstelle:** `app.js:319` (Aufdecken nur per Klasse), `app.js:477–479` (`say` klont die Karte inklusive `.rv.h`, hängt „. “ auch an Überschriften mit „?“ an)
- **Korrektur:**
```js
// app.js:319
if (d > 0 && parts.length && rev < parts.length) { const el = parts[rev]; el.classList.remove("h"); el.tabIndex = -1; el.focus({ preventScroll: true }); rev++; buzz(8); return; }
// app.js:477 – verdeckte Teile nicht vorlesen, doppelte Satzzeichen vermeiden
c.querySelectorAll(".chip,.kind,[data-say],.l,.mark,.small,textarea,.fbx,.sr-only,.rv.h").forEach(x => x.remove());
c.querySelectorAll("li,.opt,h2,p").forEach(x => { if (!/[.!?:]\s*$/.test(x.textContent)) x.append(". "); else x.append(" "); });
```

### T31 · P3 · Hervorhebungen in Lektionen erzeugen Lücken vor Satzzeichen („Dialog .“)
- **Fundstelle:** `app.css:173` (`padding:0 .2em` an `strong`) → sichtbarer Abstand vor „.“ und „:“ (`27-lektion-quer-844x390.png`, `05-…`)
- **Korrektur:** `.story .body strong,.story li strong{padding:0 .12em;margin:0 -.12em;-webkit-box-decoration-break:clone;box-decoration-break:clone}`

### T32 · P3 · Code-Pflege
- `app.js:801–803`: Der Kommentar sagt „gilt 6 Stunden“, der Code merkt das Überspringen aber dauerhaft (`gateSkipped`, `app.js:850`). Kommentar korrigieren.
- `app.js:492`: `isErr = false` ist toter Code (Fehlerkiste wurde in „Üben“ zusammengeführt).
- `app.css:189–220`: ungenutzt (`.field`, `.progress-steps`, `pre.outline`, `.flip`, „Fachgespräch-Karten“). Entfernen spart ca. 2 KB und Verwirrung.
- `VERSION` (`app.js:59`) und `CACHE` (`sw.js:3`) werden doppelt gepflegt. Vorschlag: `sw.js` mit `importScripts('version.js')` oder `CACHE = 'smm-' + new URL(location).searchParams.get('v')` und `register('sw.js?v=' + VERSION)`.

---

## Geprüft und unauffällig
- **Erststart:** Install-Hinweis erscheint nur mobil im Browser und nicht in der installierten App. Fokus auf der Überschrift. „Ohne Installation weiter“ zeigt danach den Hinweisbalken oben.
- **Hauptseiten** bei leerem Lernstand in m/xl, hell/dunkel, 390×844 und 375×667 ohne Scrollen (Ausnahme Lehrgang xl SE, siehe T1).
- **Lektion:**
  - „Weiterlernen“ öffnet die nächste neue Lektion und ersetzt den Verlaufseintrag.
  - Schritt für Schritt deckt Teile einzeln auf (`rv` 4 → 3 → 2 → 1 → 0, dann nächste Karte).
  - Wischen nach unten schließt die Lektion. Danach öffnet „Zurück“ sie nicht erneut.
  - „Nächste Lektion“ ersetzt den Verlauf, und Schließen führt zurück zum Modul.
  - Begriff antippen öffnet das Blatt (auch unter den Tippzonen). Vorlesen im Blatt und in der Karte funktioniert (Sprachausgabe abgefangen).
- **Modul → Quiz**, **Üben**, **Schnell-Quiz** mit Wiedervorlage falscher Antworten, Mehrfachauswahl mit „Antwort prüfen“ und „übersehen“-Markierung, Freitext üben (Knopf bleibt, Lösung darunter, Selbstbewertung).
- **Probetest:**
  - 30 Fragen (bei Stichproben 22–23 Einfach-MC, 2–3 Mehrfach, 5 Freitext)
  - Vor/Zurück behält die Antworten, Markieren, Übersicht mit offenen und markierten Fragen
  - „Trotzdem abgeben“-Warnung, Fortsetzen nach Neuladen (in Frage und Übersicht)
  - Tab-Leiste und System-Zurück während des Tests behalten den Test
  - Zeitablauf gibt automatisch ab, Teilpunkte werden richtig verrechnet (6 MC + 5 × 1 Punkt = 11/35 = 31 %)
- **Einstellungen:**
  - Alle Schalter wirken (`data-size`, `data-theme`, `data-focus`, `data-calm`) und bleiben gespeichert. `aria-pressed` stimmt.
  - Sicherung als Download, Import mit Vergleich, ungültige Datei wird abgelehnt.
  - Zurücksetzen behält Einstellungen und `lastBackup`. Die Rückfrage liegt im sichtbaren Bereich.
- **Performance:**
  - App: 99,5 KB JS, 38 KB CSS; dazu 337 KB `data/*.js` ungepackt (GitHub Pages liefert gzip)
  - Lokal `DOMContentLoaded` 91 ms
  - Begriffs-Regex: 635 Alternativen, 8,7 k Zeichen, Aufbau 0,2 ms, alle 280 Lektionskarten durchsucht in 5 ms. Kein Handlungsbedarf.
- **Speicher:** `localStorage` und IndexedDB (`smm-coach`/`kv`), Migration der alten Schlüssel (Modul + 40 Zeichen, Modul/Lektion), `mig1`-Standardwerte, `navigator.storage.persist()`, Hinweis bei Quota-Fehler. Lektion-IDs sind eindeutig (50), keine Kollision der Fragen-Schlüssel (419).
- **Kontraste hell und ruhig:** keine Textverstöße. Weiß auf `--grad-strong` mindestens 4,62 : 1, Fokusring 3,49–5,0 : 1, `--ok`/`--bad` auf Soft-Flächen 4,77/4,81 : 1.

---

## Zusammenfassung

| Priorität | Anzahl | Befunde |
|---|---|---|
| P1 | 2 | T1, T2 |
| P2 | 11 | T3–T13 |
| P3 | 19 | T14–T32 |

**Die 5 wichtigsten Empfehlungen**
1. **Start ohne Scrollen auch mit echtem Lernstand (T1):** Hinweis-Karten auf 1–2 nach Priorität begrenzen und die Begrüßung in den Kicker verschieben. Sonst liegt „Probetest läuft“ unter der Tab-Leiste.
2. **Lektionsschrift an die Schriftstufe koppeln (T2):** rem statt px, Untergrenze 14 px, gewählte Optionen nach der Antwort ausblenden, 8 überlange Karten teilen. Heute macht „Sehr groß“ den Lerntext kleiner.
3. **Quiz-Feedback in den Blick holen (T3):** nach jeder Antwort zur Erklärung scrollen und die Tab-Leiste im Quiz ausblenden. Auf dem iPhone SE sieht man „Weiter“ heute nie ohne Scrollen.
4. **Navigation und Fokusmodus reparieren (T4, T5):** Reiterwechsel ohne Verlaufseintrag, damit System-Zurück nie in einen anderen Reiter springt. Tab-Leiste im Fokusmodus behalten, damit Prüfung erreichbar bleibt.
5. **Robustheit von Daten und Updates (T7, T8, T13):** Fallback statt endlosem „Lädt …“ und ein Versionsstand pro Service Worker; importierte Sicherungen säubern (XSS); verwaiste Fragen-Schlüssel parken statt löschen und stabile `id`s einführen, bevor die Inhaltskorrekturen aus den anderen Reviews eingespielt werden.
