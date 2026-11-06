# UI/UX-Review „SMM Coach“ 0.14.2 – Sicht einer Designerin

Stand 06.11.2026 · Prüfgerät: Playwright/Chromium, iPhone-Format 390×844 @3x, iOS-Safari-UA, als installierte App simuliert (`navigator.standalone`).
Screenshots: `/home/claude/review5/shots/` – 75 Ansichten × 4 Varianten = 300 Dateien. Namensschema `NN-ansicht_<hell|dunkel>-<m|xl>.png` (`light-m` = hell/normal, `dark-m` = dunkel/normal, `light-xl`/`dark-xl` = Schrift „Sehr groß“). Übersichtsbögen zum Durchsehen: `/home/claude/review5/sheets/`. Skript: `/home/claude/review5/tools/shoot.py`.

Hinweis zu den Screenshots: Toast-Einblendungen, die über mehrere Bilder stehen bleiben (z. B. „Tagesziel geschafft“ in 05–12), stammen aus meinem Testskript (Toast ohne Ausblende-Timer eingefügt). In der App verschwinden sie nach 2,2 s. **Breite und Position** des Toasts sind aber echt (siehe U-05).

Die festen Nutzervorgaben (Story-Karten ohne Scrollen, Wischen nach unten, drei Symbol-Reiter, Install-Hinweis, „Jetzt aktualisieren“, Lernhilfen …) stelle ich nicht in Frage. Ich prüfe nur, ob sie gut umgesetzt sind. Zeilenangaben beziehen sich auf `app.js` bzw. `app.css` in Version 0.14.2.

---

## Gesamteindruck

Die App wirkt hochwertig und ruhig: warmer Papier-Hintergrund, weiche Karten, gute Typografie (Poppins für Überschriften, Systemschrift für Text), klare Story-Karten. Ausdrücklich gut gelöst sind:
- Story-Player mit Schritt für Schritt
- Schaubild-Karten
- Begriffsblatt
- Tagesziel-Balken
- Probetest mit Übersicht und Markieren
- leere Zustände mit Ausweg
- Install-Anleitung je Browser
- Dunkelmodus insgesamt

Die Schwächen liegen weniger im Look als in **Bedeutung und Folgerichtigkeit**:
1. **Pink ist gleichzeitig Marke, Akzent und „falsch“.** Richtig/Falsch-Rückmeldungen und Fehler-Hinweise teilen sich die Farbe mit jedem Haupt-Button.
2. **Zustände sind teils unklar oder falsch:**
   - „Modul-Quiz“ trägt ein Schloss, ist aber offen.
   - Im Mehrfach-Quiz bleibt die falsche Auswahl lila.
   - In der Test-Übersicht sind „beantwortet“ und „offen“ kaum zu unterscheiden.
   - Im Kurz-Check sieht „Weiter“ aktiv aus, obwohl es blockiert ist.
3. **Kleine Darstellungsfehler, die das Vertrauen kosten:**
   - „undefined“ als Buchstabe bei 5 Antworten im Quiz
   - Toasts brechen auf halbe Breite um
   - „(23 %)“ bricht vor dem Prozentzeichen um
   - Modulnamen werden abgeschnitten
4. **Lernfluss nach dem Ergebnis:** Quiz- und Testergebnisse enden ohne klaren nächsten Schritt.

---

## Befunde

### P1 – stört oder verwirrt deutlich

#### U-01 · P1 · Quiz: „undefined“ statt Buchstabe bei 5 Antworten
- **Ansicht:** Quiz, Mehrfachauswahl mit 5 Antworten – `19b-quiz-mehrfach-nach_dark-m.png` (5. Antwort zeigt „undefined“ im Buchstabenfeld)
- **Problem:** In `quizCard` steht `"ABCD"[n]` (app.js Z. 544, ebenso im Story-Kurz-Check Z. 409). Der Probetest nutzt richtig `"ABCDE"` (Z. 684). Im Schnell-Quiz, Modul-Quiz und in „Üben“ erscheint bei Fragen mit 5 Antworten das Wort „undefined“, das sich mit dem Antworttext überlagert. Das wirkt kaputt.
- **Vorschlag:** Eine Konstante für alle Stellen.
```js
// app.js, oben bei den Hilfen (nach Z. 15)
const LET = "ABCDEFGH";
// Z. 409, 544, 684, 685 und Z. 537 (Vorlesen): "ABCD"[n] / "ABCDE"[n] → LET[n]
```

#### U-02 · P1 · Fokusmodus blendet die einzige Modul-Navigation aus
- **Ansicht:** Start im Fokusmodus – `04c-start-fokus_light-m.png`
- **Problem:** Die Modul-Ringe stecken in `<div class="fx">` (Z. 312). `.fx` wird im Fokusmodus ausgeblendet (app.css Z. 388). Danach führt **kein Weg** mehr zu den Modulseiten, also auch nicht zu „Das Wichtigste auf einen Blick“, zum Modul-Quiz oder zur gezielten Wahl einer Lektion. Der Fokusmodus soll laut Beschreibung nur „Statistiken und Extras“ ausblenden; die Module sind aber Navigation.
- **Vorschlag:** Die Ringe bleiben sichtbar, nur die Statistik verschwindet. Zusätzlich im Fokusmodus die Ringe als ruhige, einfarbige Leiste zeigen.
```js
// app.js Z. 312–313: Wrapper ohne .fx
 <div><h2 class="sr-only">Deine Module</h2>
 ${ringsHtml()}</div>
```
```css
/* app.css, unter Z. 389 */
:root[data-focus] .ring .ic{filter:saturate(.4)}
:root[data-focus] .ring svg.prog{opacity:.5}
```

#### U-03 · P1 · Mehrfachauswahl: falsch gewählte Antwort bleibt lila statt rot
- **Ansicht:** `19b-quiz-mehrfach-nach_light-m.png` (Antwort A: lila Rahmen, lila Fläche, nur der Buchstabe rot)
- **Problem:** Nach „Antwort prüfen“ entfernt Z. 586 zwar die Klasse `sel`, aber `aria-pressed="true"` bleibt stehen. app.css Z. 403 (`.opt[aria-pressed="true"]`) gewinnt dann gegen `.opt.bad`. Die eigene falsche Wahl sieht weiter „ausgewählt“ aus statt „falsch“. Gerade bei Mehrfachfragen ist diese Rückmeldung der Kern.
- **Vorschlag:**
```js
// app.js Z. 586, in der forEach-Schleife ergänzen:
x.removeAttribute("aria-pressed");
```
```css
/* zusätzlich absichern, app.css nach Z. 403 */
.opt.bad[aria-pressed],.opt.ok[aria-pressed]{background:revert-layer}
.opt.bad{border-color:var(--bad)!important;background:var(--bad-soft)!important}
.opt.ok{border-color:var(--ok)!important;background:var(--ok-soft)!important}
```

#### U-04 · P1 · Pink bedeutet zugleich „Marke/Los“ und „Falsch“
- **Ansichten:**
  - `12b-lektion-check-nach_light-m.png`
  - `18b-quiz-mc-nach_light-m.png`
  - `20b-quiz-freitext-muster_light-m.png` (die ganze Musterlösung ist rosa)
  - `28b-probetest-abgeben-warnung_light-m.png`
- **Problem:** `--bad:#c2255c` und `--bad-soft:#fde7ee` (app.css Z. 11) liegen fast auf `--brand:#e83e8c` und `--brand-soft:#fde8f1` (Z. 10). Der Weiter-Button, die Kicker, die Segmentleiste der Story, die Fortschrittsringe und „falsch“ sind alle pink-magenta. Folgen:
  - Falsch-Rückmeldungen wirken nicht eindeutig.
  - Neutrale Inhalte wirken wie Fehler: Die Musterlösung erscheint bei weniger erkannten Punkten in Fehlerfarbe, die Warnbox in der Test-Übersicht gleicht dem Button darunter.
  - Für Menschen mit ADHS und Prüfungsangst ist eine dauernd „alarmrote“ Fläche ungünstig.
- **Vorschlag:**
  - „Falsch“ bekommt ein eigenes, wärmeres Rot (Ziegel) mit Symbol.
  - Neutrale Inhalte wie die Musterlösung bekommen eine neutrale Fläche.
  - Die Marke bleibt Magenta-Violett.
```css
/* app.css Z. 11 und Z. 23/29 ersetzen */
:root{--bad:#b42318;--bad-soft:#fdecea}
:root[data-theme=dark]{--bad:#ff8a7a;--bad-soft:#3a1d1a}
@media (prefers-color-scheme:dark){:root:not([data-theme=light]){--bad:#ff8a7a;--bad-soft:#3a1d1a}}
/* neutrale Musterlösung statt Fehlerfarbe */
.fb.muster-box{background:var(--surface-2)}
```
```js
// app.js Z. 548: Klasse nicht nach Treffern färben
return `<div class="fb muster-box" style="margin-top:12px">…
```

---

### P2 – spürbar besser

#### U-05 · P2 · Toasts brechen auf halbe Bildschirmbreite um und verdecken Knöpfe
- **Ansichten:**
  - `30-toast-tagesziel_light-m.png`, `12a-lektion-check-toast_light-m.png` (zweizeilig)
  - `08b-lektion-liste-alles_light-xl.png` (dreizeilig, verdeckt Karteninhalt)
  - `20c-quiz-freitext-bewertet_light-m.png` (verdeckt den „Weiter“-Knopf)
- **Problem:** `#toast` hat `left:50%` ohne Breitenangabe (app.css Z. 228). Die verfügbare Breite ist deshalb nur die halbe Bildschirmbreite. Außerdem steht der Toast bei `bottom:96px`; in Quiz und Story liegt dort der Haupt-Button.
- **Vorschlag:**
```css
/* app.css Z. 228 ergänzen */
#toast{width:max-content;max-width:calc(100vw - 32px);text-align:center;line-height:1.35}
/* Ohne Reiterleiste (Quiz/Test) und in der Story höher setzen */
body:has(.qcard:not(.result)) #toast, body.no-scroll #toast{bottom:calc(96px + 60px + var(--safe-b))}
```

#### U-06 · P2 · „Modul-Quiz“ mit Schloss, obwohl es offen ist
- **Ansicht:** `05b-modul-full_light-m.png` (letzter Eintrag)
- **Problem:** Z. 350 zeigt `ic("lock")`, solange nicht alle Lektionen erledigt sind. Der Eintrag ist aber antippbar. Ein Schloss heißt in jeder Lern-App „gesperrt“. Manche tippen deshalb nicht, andere wundern sich, dass es doch geht.
- **Vorschlag:** Stattdessen ein Ziel-Symbol mit Hinweistext.
```js
// app.js Z. 350
<div class="dot" style="${all ? "background:var(--grad);color:#fff" : ""}">${ic(all ? "bolt" : "focus")}</div>
// Untertitel bleibt: „… · empfohlen nach den Lektionen“
```

#### U-07 · P2 · Kurz-Check: „Weiter“ wirkt aktiv, gibt aber nur einen Toast
- **Ansicht:** `12-lektion-check-vor_light-m.png` → `12a-lektion-check-toast_light-m.png`
- **Problem:** Vor dem Antworten ist der Haupt-Button voll farbig (Z. 418). Ein Tipp darauf liefert nur „Wähle zuerst eine Antwort“. Das ist eine Sackgasse statt eines klaren Zustands.
- **Vorschlag:** Den Knopf sichtbar zurücknehmen und beschriften. Er bleibt fokussierbar, damit Screenreader den Grund hören.
```js
// app.js Z. 418, im else-Zweig von last:
: f.k === "check" && !(i in answered)
  ? `<button class="btn next" aria-disabled="true">Antwort wählen</button>`
  : `<button class="btn next">Weiter ${ic("right")}</button>`
```
```css
.story .btn[aria-disabled=true]{background:var(--surface-2);color:var(--ink-3);box-shadow:none}
```
Dabei auch Z. 420 (`mehr()`) anpassen, damit die Beschriftung nicht überschrieben wird: `if (nb && nb.getAttribute("aria-disabled")) return;`

#### U-08 · P2 · Probetest-Übersicht: beantwortet und offen kaum zu unterscheiden; Reiterleiste sichtbar
- **Ansichten:**
  - `28-probetest-uebersicht_light-m.png`
  - `28-probetest-uebersicht_dark-m.png` (im Dunkelmodus praktisch identisch)
  - `28b-probetest-abgeben-warnung_light-m.png`
- **Problem:**
  1. „Beantwortet“ = leicht graue Fläche mit dunklerem Rahmen; „offen“ = weiß mit Rahmen (app.css Z. 349–350). Die Legende „Rahmen = markiert“ stimmt nicht, denn alle Felder haben einen Rahmen. Wichtig ist aber gerade: **Was ist noch offen?**
  2. Die Übersicht enthält keine `.qcard`, deshalb erscheint die Reiterleiste (app.css Z. 491) mitten im laufenden Test.
  3. Die Warnung „8 Fragen sind noch offen“ bietet nur „Trotzdem abgeben“ als Haupt-Button an, keinen Weg zur ersten offenen Frage.
- **Vorschlag:**
```css
/* app.css nach Z. 352 */
.ovgrid button{border:2px dashed var(--line-strong);background:var(--surface)}
.ovgrid button.done{border:2px solid transparent;background:color-mix(in srgb,var(--c3) 16%,var(--surface));color:var(--ink)}
.ovgrid button.mk{box-shadow:inset 0 0 0 2px var(--c1)}
.ovgrid button.mk::after{color:var(--c1)}
body:has(.ovgrid) .tabbar{display:none}
```
```js
// app.js Z. 703: Legende
<p class="small muted">Gestrichelt = offen · ⚑ = markiert · T = Freitext</p>
// app.js Z. 704–705: bei offenen Fragen zuerst dorthin führen
${sure && open.length ? `<div class="tip">…</div><button class="btn block" id="toopen">Zur ersten offenen Frage (${open[0] + 1})</button><button class="btn ghost-w block" id="submit" style="margin-top:8px">Trotzdem abgeben</button>` : `<button class="btn block" id="submit">Test abgeben</button>`}
// danach:
$("#toopen")?.addEventListener("click", () => { r.view = null; r.p = open[0]; save(); runTest(); });
```

#### U-09 · P2 · Schwache Kontur der Zweit-Buttons (`.btn.ghost`) auf Karten
- **Ansichten:**
  - `20-quiz-freitext-vor_light-m.png` („Ohne eigene Antwort zur Lösung“)
  - `20b-quiz-freitext-muster_light-m.png` („Daneben/Teilweise/Richtig“)
  - `21-quiz-ergebnis_light-m.png` („Zurück“)
  - `25b-lernkarte-hinten_light-m.png`
  - `29b-auswertung-bewertet_light-m.png`
- **Problem:** `.btn.ghost` ist weiß auf weißer Karte mit kaum sichtbarem Schatten (app.css Z. 123). Er sieht nicht wie ein Knopf aus. Die Selbstbewertung „Daneben/Teilweise/Richtig“ bricht dazu auf zwei Zeilen um („Richtig“ steht allein unten), „0 Punkte“ ebenfalls. Die vorgeschlagene Bewertung ist nur zartlila hinterlegt; man hält sie leicht für schon gewählt.
- **Vorschlag:** Es gibt schon `.btn.ghost-w` mit Rahmen (Z. 368). Diese Variante innerhalb von Karten generell nutzen, die Bewertungsreihe einzeilig halten und den Vorschlag als Badge zeigen statt als Auswahl.
```css
.card .btn.ghost,.qcard .btn.ghost{background:var(--surface);border:2px solid var(--line-strong);box-shadow:none}
.rate-row{flex-wrap:nowrap}.rate-row .btn,[aria-label=Bewertung] .btn{padding:12px 8px;white-space:nowrap;min-width:0}
.rate-row .btn.sel::after{content:"Vorschlag";display:block;font-size:.7rem;font-weight:600;color:var(--ink-3)}
.rate-row .btn.sel{flex-direction:column;gap:0;background:var(--surface)}
```
Die Punkte-Beschriftung im Probetest (Z. 729) kürzen: `[[0,"0 P."],[.5,"1 P."],[1,"2 P."]]` mit `aria-label="0 Punkte"` usw.

#### U-10 · P2 · Modul-Ringe: nur 5 von 7 Modulen sichtbar, Namen abgeschnitten
- **Ansichten:**
  - `03-start-fortschritt_light-m.png` („Controlling“ angeschnitten; „Umsetzung“ und „Social Ads“ unsichtbar)
  - `03-start-fortschritt_light-xl.png` („Plattfor…“, „Einbettu…“, „Controll…“)
- **Problem:** Die waagerechte Leiste scrollt ohne erkennbaren Hinweis. Das 6. Prüfungsmodul „Umsetzung“ entdeckt man so leicht nicht. Unten auf dem Startbildschirm bleiben 25–30 % ungenutzt (`03-…`, `04c-…`), Platz wäre also da. Die Vorgabe „Start ohne Scrollen“ betrifft das senkrechte Scrollen; eine zweizeilige Darstellung hält sie ein.
- **Vorschlag:** Raster aus 4 + 3 Kacheln statt Scroll-Leiste, mit kurzen Namen. Bei Schrift „Sehr groß“ zwei Zeilen Text erlauben.
```css
/* app.css nach Z. 464 */
.compact .rings{display:grid;grid-template-columns:repeat(4,1fr);gap:8px 4px;overflow:visible;margin:0;padding:2px 0 8px}
.compact .ring{width:auto}
.compact .ring .lbl{white-space:normal;font-size:.7rem;line-height:1.15;overflow:visible}
:root[data-size=xl] .compact .ring .r{width:50px;height:50px}
```
`fitMain()` blendet bei Platzmangel ohnehin Hinweiskarten aus. Das bitte auf einem iPhone SE (667 pt) gegenprüfen.

#### U-11 · P2 · Quiz-Seiten ohne sichtbaren Titel – Üben, Schnell-Quiz und Modul-Quiz sehen gleich aus
- **Ansichten:**
  - `22-ueben_light-m.png`
  - `18-quiz-mc-vor_light-m.png`
  - `20-quiz-freitext-vor_light-m.png`
- **Problem:** Der Titel steht nur als `sr-only` (Z. 563). Wer von „Üben: 10 Fragen“ kommt, sieht dieselbe Ansicht wie beim Schnell-Quiz. Dass die Fragen gerade **Fehler und Wiederholungen** sind, motiviert („die sitzen noch nicht“) und gehört sichtbar dazu. Zusätzlich steht der Zähler „1 / 10“ mitten zwischen Chip und Vorlese-Knopf und wirkt verloren.
- **Vorschlag:**
```js
// app.js Z. 563: sichtbarer Kopf statt sr-only
<div class="row" style="justify-content:space-between;margin-bottom:10px"><a class="back" href="${backHref}" style="margin:0">${ic("x")} Beenden</a><span class="chip">${isFrei ? "Freitext üben" : isWdh ? "Üben · Fehler & Wiederholung" : m ? "Modul-Quiz" : isMini ? "Kurz-Quiz" : "Schnell-Quiz"} · ${Math.min(n, total)}/${total}</span></div>
// und in quizCard (Z. 542/544) meta nur noch für „Wiederholung“ nutzen
```

#### U-12 · P2 · Ergebnis-Bildschirme ohne nächsten Schritt
- **Ansichten:**
  - `21-quiz-ergebnis_light-m.png` (nur „Zurück“ und „Nochmal“)
  - `29d-auswertung-gespeichert_light-m.png`
  - `29c-auswertung-bewertet-full_light-m.png` (21 falsche MC-Fragen als lange Liste; Seite ca. 13.000 px hoch)
- **Problem:**
  - Duolingo und Brilliant schließen jede Einheit mit genau **einem** großen nächsten Schritt ab. Hier landet man in einer Sackgasse oder in einer sehr langen Leseliste.
  - „Ergebnis speichern“ steht erst nach allen Freitexten und der Themenliste, ist also leicht zu übersehen. Bleibt es ungespeichert, verschwindet das Ergebnis aus dem Verlauf.
  - „Nach Themen“ ist reiner Text ohne Balken, die Empfehlung nur ein unterstrichener Link.
- **Vorschlag:**
  1. Quiz-Ergebnis: Haupt-Button „Weiterlernen“ (`#mini`), daneben „Nochmal“ als Zweit-Button. Bei Fehlern zusätzlich „Fehler jetzt üben (n)“ → `#quiz-ueben`.
  2. Auswertung: Sobald alle Freitexte bewertet sind, automatisch speichern mit Toast „Ergebnis gespeichert“. Der Knopf entfällt.
  3. Die Nacharbeiten-Liste einklappen (`<details>` je Modul) und darüber ein Knopf „Diese n Fragen üben“. Die falschen Fragen sind nach dem Speichern schon in `errorKeys()`, also reicht `#quiz-ueben`.
  4. „Nach Themen“ mit Mini-Balken in Modulfarbe und dem Vorschlag als Button.
```js
// app.js Z. 604
<div class="row" style="justify-content:center;margin-top:18px"><button class="btn ghost-w" id="again">Nochmal</button><a class="btn" href="#mini">${ic("play")} Weiterlernen</a></div>
${miss.size ? `<a class="btn ghost-w block" href="#quiz-ueben" style="margin-top:10px">${ic("repeat")} ${miss.size} Fehler gleich üben</a>` : ""}
// app.js Z. 735: nach dem Bewerten automatisch speichern
if (testScore(r).allRated && !r.saved) { $("#commit")?.click(); }
// app.js Z. 730, Zeile je Thema:
`<div style="padding:6px 0"><div class="row" style="justify-content:space-between"><span>${esc(x.m.kurz)}</span><b>${x.ok}/${x.n}</b></div><div class="bar2"><i class="s" style="width:${x.p*100}%;background:${x.m.farbe}"></i></div></div>`
```

#### U-13 · P2 · Dunkelmodus: weiße Schrift auf hellem Modul-Ton (Schaubild, Story-Avatar)
- **Ansichten:**
  - `09-lektion-schaubild_dark-m.png` (Ziffern 1–7 weiß auf Hellrosa)
  - `08b-lektion-liste-alles_dark-m.png` (Avatar oben links)
- **Problem:** Im Dunkelmodus wird `--m-ink` aufgehellt (`color-mix(… 55%, #fff)`, app.css Z. 153). `.f1` (Schaubild-Kreise) und `.story .shead .av` nutzen diese Farbe als **Fläche** mit weißer Schrift. Bei Einbettung (#e83e8c) ergibt das etwa #f295c0 mit Weiß, Kontrast ca. 2:1 (Soll 4,5:1 bzw. 3:1 für große Ziffern).
- **Vorschlag:** Im Dunkelmodus dunkle Schrift auf hellen Flächen.
```css
/* app.css nach Z. 154 */
[data-theme=dark] .story .shead .av,[data-theme=dark] .dg text.w{color:#110e16;fill:#110e16}
@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .story .shead .av,:root:not([data-theme=light]) .dg text.w{color:#110e16;fill:#110e16}}
```

#### U-14 · P2 · Übersetzung reißt Komposita auseinander und verdoppelt sich
- **Ansichten:**
  - `07b-lektion-intro-alles_light-m.png`: „Eine Social-Media **(soziale Medien)**-Strategie“
  - `08b-lektion-liste-alles_light-m.png`: „Ist-Zustand **(Ist-Analyse)**“ (Übersetzung erklärt nichts)
  - `10b-lektion-text-alles_light-m.png`: in einer H2 dreimal Begriff + Klammer + Fettung + Markierung + gepunktete Unterstreichung
- **Problem:** Die Vorgabe „Übersetzung beim ersten Auftreten“ ist umgesetzt. Die Regel in `linkTerms` (Z. 489–492) prüft aber nicht, ob der Begriff Teil eines Bindestrich-Wortes ist, und setzt die Übersetzung auch in Überschriften. Ergebnis sind vier gleichzeitige Auszeichnungen in einer Zeile: Fettung, rosa Markierung, gepunktete Linie und graue Klammer. Für die ADHS-Zielgruppe ist das zu viel Rauschen.
- **Vorschlag:**
```js
// app.js Z. 490: als „schon erklärt“ gilt auch ein direkt folgender Bindestrich, und Überschriften bekommen keine Übersetzung
const schonErklaert = /^(-|\s*(\(|ist\b|heißt\b|sind\b|bedeutet\b|:|–))/i.test(after) || !!node.parentElement.closest("h1,h2,h3");
// Z. 492: auch dann nichts anhängen, wenn die Übersetzung mit dem Begriff anfängt (Ist-Zustand → Ist-Analyse)
&& !kurz.toLowerCase().startsWith(m[0].toLowerCase().split(/[- ]/)[0])
```
```css
/* Fettung in Story nicht zusätzlich markieren, wenn sie ein Fachbegriff ist */
.story strong:has(> .term){background:none;padding:0;margin:0}
```

#### U-15 · P2 · Endspurt-Text widerspricht dem Endspurt-Knopf
- **Ansicht:** `04b-start-endspurt_light-m.png` – „Noch 10 Tage“, Text „Vorschlag: **6 Lektionen pro Tag**“, Knopf „Endspurt heute“
- **Problem:** Der Knopf führt zuerst zu „Üben“ (Z. 240–245). Der Text verlangt 6 neue Lektionen täglich. Das ist widersprüchlich und für die Zielgruppe entmutigend. Bei 44 offenen Lektionen in 7 Tagen sollte die App priorisieren statt hochrechnen.
- **Vorschlag:** Ab einer Last von mehr als 3 Lektionen pro Tag umschalten. Fertiger Text für Z. 309:
```js
const planText = !(dl > 0) ? "" : offen === 0 ? "Alle Lektionen geschafft. Jetzt täglich „Üben“ und pro Woche zwei Probetests."
 : dl <= 3 ? "Endspurt: keine neuen Lektionen mehr – nur noch „Üben“, „Das Wichtigste“ und ein Probetest."
 : proTag > 3 ? `Zu viel für alle Lektionen. Plan: täglich „Üben“, dann das schwächste Modul kompakt. ${Math.min(offen, lernTage * 3)} Lektionen schaffst du noch gut.`
 : `Vorschlag: ${proTag} Lektion${proTag === 1 ? "" : "en"} pro Tag, danach „Üben“. Die letzten 3 Tage bleiben für Wiederholung und Probetests.`;
```

#### U-16 · P2 · Vorlesungsplan markiert den 23.11. als „nächste“, obwohl am 9.11. und 16.11. Termine sind
- **Ansichten:**
  - `31b-lehrgang-vorlesungsplan_light-m.png` (am 06.11.)
  - `04e-start-wiederkehr-vorlesung_light-m.png` (Karte erscheint erst ab 8 Tage vorher)
- **Problem:** `naechsteVorlesung()` (Z. 296) überspringt Termine ohne Lektionen. Die nächste echte Vorlesung (Mo 09.11., Social Networks) wird nicht markiert, die Kennzeichnung „nächste“ zeigt auf den 23.11. Während der fünf Social-Networks-Wochen erscheint die Start-Karte „Vorlesung …“ nie, denn die Plattform-Lektionen hängen nur am 12.10.
- **Vorschlag:**
  - Die Markierung „nächste“ immer für den nächsten Termin setzen. Die Start-Karte darf weiter den nächsten Termin **mit** Lektionen nutzen.
  - In `data/vorlesungen.js` den Wochen 43–46 dieselben Plattform-Lektionen zuordnen (oder Teilmengen), damit die Karte im laufenden Kurs auftaucht.
```js
// app.js Z. 781: getrennt markieren
const naechsteTermin = VORLESUNGEN.find(v => v.datum >= dayLocal());
// … nv = naechsteTermin === v
```
Die Datumsspalte bricht zweizeilig um („Mo.,/12.10.“). Das Wochentagskürzel weglassen, es ist immer Montag, und die Überschrift auf „Montags-Vorlesungen“ ändern:
```js
const datumDE = d => new Date(d + "T12:00").toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
```

#### U-17 · P2 · Prüfungstermin-Feld abgeschnitten
- **Ansichten:**
  - `31-lehrgang_light-m.png` („02/20/:“)
  - `31-lehrgang_light-xl.png` (nur noch „02“)
- **Problem:** Label, Datumsfeld und Löschen-Knopf stehen in einer Zeile mit `min-width:0` (Z. 775). Bei großer Schrift bleibt dem Feld kaum Platz. Auf iOS sieht das Feld anders aus als in Chromium, eng wird es aber auch dort ab „Groß“.
- **Vorschlag:** Label über das Feld setzen.
```css
.card.termin .row{flex-wrap:wrap}
.card.termin label{flex:1 0 100%}
.card.termin input[type=date]{flex:1;min-width:150px}
```

#### U-18 · P2 · Segment-Schalter brechen um
- **Ansichten:**
  - `23-glossar-begriffe_light-m.png` („Begriffe (170)“ zweizeilig)
  - `32-einstellungen_light-m.png` („Sehr groß“)
- **Problem:** Die Höhe springt je nach Auswahl, und ungleich hohe Pillen wirken unruhig.
- **Vorschlag:** Zahlen nicht in die Beschriftung schreiben (stattdessen Trefferzahl unter der Suche) und `nowrap` setzen.
```css
.seg button{white-space:nowrap;padding:9px 6px;font-size:.88rem}
```
```js
// app.js Z. 983: nur noch „Begriffe“, „Formeln“, „Lernkarten“; Trefferzahl sichtbar statt sr-only
$("#gcount").className = "small muted"; // Z. 976 „sr-only“ → sichtbar
```

#### U-19 · P2 · Kleine Symbol-Kacheln: sieben verschiedene Verläufe ohne Bedeutung
- **Ansichten:**
  - `04-start-hinweiskarten_light-m.png`
  - `26-pruefung_light-m.png` (Schnell-Quiz in Orange-Rot)
  - `02-start-leer_light-m.png`
- **Problem:** Die `.thumb`-Flächen nutzen je Karte eigene Verläufe:
  - Grün→Blau für Glossar, Vorlesung und Lernhilfen
  - Blau→Violett für Üben
  - Orange→Rot für Schnell-Quiz
  - Grau-Schwarz für Sicherung
  - Marke für Prüfungstermin

  Die Modulfarben (Ringe) sind eine zweite Farbsprache. Zusammen ist das die lauteste Stelle der App und widerspricht der Vorgabe „zurückhaltende Farben“. Das Orange-Rot von „Schnell-Quiz“ liest sich wie eine Warnung.
- **Vorschlag:** Farbe nur, wo sie Bedeutung trägt (Modul). Alle Werkzeug-Kacheln einheitlich, getönt in der Markenfarbe.
```css
/* app.css am Ende */
.cont .thumb{background:color-mix(in srgb,var(--c3) 12%,var(--surface))!important;color:color-mix(in srgb,var(--c3) 70%,var(--ink))}
.cont .thumb.warn{background:var(--bad-soft)!important;color:var(--bad)}
```
Die Inline-Styles `style="background:…"` an den `.thumb` in Z. 322, 323, 348, 626, 627, 635, 636 entfernen. Ausnahme ist das Modul-Thumbnail auf der Modulseite (Z. 348); dort darf die Modulfarbe bleiben.

#### U-20 · P2 · Begriffsblatt zeigt einen Griff, lässt sich aber nicht wegwischen
- **Ansicht:** `16-begriffsblatt_light-m.png`
- **Problem:** `.ts-grip` (Z. 502) verspricht nach iOS-Konvention „nach unten ziehen“. Es gibt aber keinen Wisch-Handler. In der Lektion schließt Wischen nach unten die ganze Story; die Geste ist also gelernt, wird hier aber nicht erfüllt. Im schlimmsten Fall schließt ein Wischen auf dem Blatt die Lektion dahinter.
- **Vorschlag:**
```js
// app.js nach Z. 509
let y0 = null; const box = $(".ts-in", el);
box.addEventListener("touchstart", e => { y0 = e.touches[0].clientY; e.stopPropagation(); }, { passive: true });
box.addEventListener("touchmove", e => { if (y0 === null) return; const dy = Math.max(0, e.touches[0].clientY - y0); box.style.transform = `translateY(${dy}px)`; e.stopPropagation(); }, { passive: true });
box.addEventListener("touchend", e => { const dy = (e.changedTouches[0].clientY - y0); y0 = null; e.stopPropagation(); if (dy > 80) close(); else box.style.transform = ""; });
```

#### U-21 · P2 · Sichtbarer Fokus-Ring beim Öffnen einer Lektion
- **Ansichten:**
  - `07-lektion-intro_light-m.png` (dicker pinker Ring um „Schließen“)
  - `07f-lektion-fokus_light-m.png`
  - `17-lektion-wischen_light-m.png` (Ring um den Fachbegriff nach Schließen des Blatts)
- **Problem:** Z. 429 setzt beim Öffnen per Programm den Fokus auf „X“. Safari und Chrome zeigen dabei `:focus-visible`, also sieht der Schließen-Knopf beim Antippen „markiert“ aus. Das ist das erste, worauf das Auge fällt.
- **Vorschlag:** Den Fokus auf den unsichtbaren Live-Text bzw. die Karte legen statt auf den Knopf. Die Ansage für Screenreader bleibt.
```js
// app.js Z. 429
if (draw.first !== false) { draw.first = false; const s = $(".slide", storyEl); s.tabIndex = -1; s.focus({ preventScroll: true }); }
```
```css
.story .slide:focus{outline:none}
```

#### U-22 · P2 · Mehrfachauswahl sieht aus wie Einfachauswahl
- **Ansicht:** `19a-quiz-mehrfach-auswahl_light-m.png`
- **Problem:** Nur ein Text „☑ Mehrere Antworten richtig“ unterscheidet die Fragetypen; die Antworten tragen wie immer A/B/C/D. In der echten Prüfung steckt in genau dieser Unterscheidung ein Punkt.
- **Vorschlag:** Bei Mehrfachfragen Kästchen statt Buchstaben, angehakt bei Auswahl (in Quiz und Probetest).
```css
.opt[aria-pressed] .l,.opt[role=checkbox] .l{border-radius:7px;border:2px solid var(--line-strong);background:var(--surface);color:transparent}
.opt[aria-pressed=true] .l,.opt[role=checkbox][aria-checked=true] .l{background:var(--c3);border-color:var(--c3);color:#fff}
.opt[aria-pressed=true] .l::after,.opt[aria-checked=true] .l::after{content:"✓";color:#fff;position:absolute}
.opt .l{position:relative}
```
Den Hinweis kürzer und farbig: „**Mehrere richtig** – wähle alle passenden“ als Chip in `--c3`.

#### U-23 · P2 · Zahlen und Einheiten brechen um
- **Ansichten:**
  - `29b-auswertung-bewertet_light-m.png` („Grenze (23 / %)“)
  - `26-pruefung_light-xl.png` („ab 50 / %“)
- **Vorschlag:** Schmales geschütztes Leerzeichen.
```js
const pct = n => `${n} %`; // in Z. 631, 727, 728, 319, 632 statt `${x} %`
```
Zur Überschrift der Auswertung (Z. 727) kürzer und weniger entmutigend:
```js
sc.pct >= ZIEL ? "Ziel erreicht" : sc.pct >= PASS ? "Bestanden – weiter Richtung 70 %" : "Noch nicht bestanden – das holst du auf"
```
Die Prozentzahl steht ohnehin groß im Ring.

#### U-24 · P2 · Bezeichnungen uneinheitlich
- **Ansichten:** mehrere
- **Problem:**

  | Stelle | Text | Uneinheitlich mit |
  |---|---|---|
  | Start-Hero (Z. 317) | „7 von 15 **Antworten**“ | Einstellung „15 **Fragen**“ (Z. 1044), Toast „Tagesziel geschafft: 15 **Fragen**“ (Z. 125); Lernkarten zählen ebenfalls mit |
  | Start (Z. 319) | „16/**60** Lektionen“ (mit Social Ads) | „21 % insgesamt“ (nur Kernmodule, Z. 179) |
  | Prüfung | „Schnell-Quiz“ (10 MC, Prüfung) | `#mini` = 5 Fragen, auch „Schnell-Quiz“ genannt (Leer-Zustand Z. 555) |
  | Hero-Knopf | „Loslegen“ / „Weiterlernen“ / „Endspurt heute“ | ok, aber „Endspurt“ erscheint ab 21 Tagen, der Text sagt erst ab 3 Tagen „Endspurt“ |
  | Quiz | „Beenden“ | Probetest „Abbrechen“ – passt (Abbrechen = verwerfen) |
  | Toast | „Eingeschaltet“ (Z. 1060) | ohne Bezug, welche Funktion |
  | Ergebnis | „Zurück“ | Ziel unklar |

- **Vorschlag (fertige Texte):**
  - Z. 317: `${Math.min(h, g)} von ${g} Fragen`
  - Z. 319: Lektionen nur Kernmodule zählen: `${kernDone}/${kernAll}`
  - Z. 1060: ``toast(`${{focus:"Fokusmodus",step:"Schritt für Schritt",calm:"Ruhige Darstellung",vibe:"Vibration"}[c.dataset.opt]} ${c.checked ? "an" : "aus"}`)``
  - Z. 555 und 239: Den Fünfer-Fallback nicht „Schnell-Quiz“ nennen. Im Leer-Zustand reichen „Weiterlernen“ und „Schnell-Quiz (10 Fragen)“.
  - Z. 310: „Endspurt“ erst ab ≤ 14 Tagen, oder Planungstext anpassen (siehe U-15).

---

### P3 – Feinschliff

| Nr. | Ansicht (Screenshot) | Problem | Vorschlag |
|---|---|---|---|
| U-25 | `14-lektion-beispiel_light-m.png` | Kind-Etikett „BEISPIEL“ + Titel „Beispiel Abhängigkeit“ doppelt | In Daten Titel ohne „Beispiel“ (z. B. `h: "Abhängig von einer Plattform"`) |
| U-26 | `13-lektion-ende_light-m.png` | Ende-Karte: Emoji-Konfetti + Merksatz-Wiederholung, aber kein Fortschritt („Lektion 3 von 16 im Modul“, „+1 Tagesziel“) | Unter dem Merksatz: `<p class="small muted">${lekDone(m)} von ${m.lektionen.length} Lektionen in ${esc(m.kurz)}</p>` und Mini-Balken; wie Duolingo/Headway „Lektion abgeschlossen“-Moment |
| U-27 | `12b-lektion-check-nach_light-m.png` | Nach der Antwort verschwinden die nicht gewählten Antworten (`.story .opt.dim{display:none}`, app.css Z. 475): Inhalt springt, Buchstaben B/C ohne A/D | Statt ausblenden: `opacity:.35; transform:scale(.97)`; nur bei `fitSlide`-Platzmangel ausblenden |
| U-28 | `07-lektion-intro_light-m.png` | Knopf „Mehr (1)“ ist kryptisch | `Weiter lesen` bzw. `Nächster Punkt` (bei Listen); Zähler als Punkte statt Zahl: `●●○` |
| U-29 | `23b-glossar-suche_light-m.png` | Native Löschen-Taste der Suche ist systemblau | `.searchbox input::-webkit-search-cancel-button{filter:grayscale(1);opacity:.6}` |
| U-30 | `23-glossar-begriffe_light-m.png` | 170 Karten mit H2 (1,375 rem) – sehr lange, schwere Liste, kein A–Z | Begriff als `h3` 1.05 rem; Buchstaben-Zwischenüberschriften (`A`, `B` …) |
| U-31 | `25-lernkarte-vorne_light-m.png`, `25b-lernkarte-hinten_light-m.png` | Umdrehen ohne Animation; Rückseite: Begriff klein grau, Übersetzung groß – Hierarchie umgekehrt; „0 von 170 sicher“ entmutigt am Anfang | Rückseite: Begriff `b`, darunter Übersetzung `.ts-de`; Zähler „Runde: 1/15“ zuerst, „sicher“ erst ab ≥ 1; Flip mit `.flip`-CSS (Z. 209 ff., schon vorhanden) |
| U-32 | `26b-pruefung-aufgeklappt_light-m.png` | Verlaufs-Balken ohne 50-%- und 70-%-Linie | Zwei gestrichelte Linien `position:absolute;bottom:50px` / `70px` mit Beschriftung „bestanden“ / „Ziel“ |
| U-33 | `27a-probetest-frage_light-m.png` | Testleiste bricht um: „Abbrechen“ + „Übersicht“ in Zeile 1, Timer allein in Zeile 2 | „Abbrechen“ als reines X-Symbol (44 px) mit `aria-label`; Timer in die Mitte: `.testbar{flex-wrap:nowrap}.testbar #abort{padding:0;width:44px;justify-content:center}` und Text in `sr-only` |
| U-34 | `27a-probetest-frage_light-m.png` | Deaktivierter Zurück-Pfeil bei Frage 1 ist ein leerer weißer Kasten | `#prev[disabled]{visibility:hidden}` oder `opacity:.3` mit Rahmen |
| U-35 | `28-probetest-uebersicht_light-xl.png` | „T“-Markierung kollidiert mit zweistelligen Zahlen | `.ovgrid button small{bottom:1px;right:3px;font-size:.55rem}` und `padding-right:8px` |
| U-36 | `34-update-banner_dark-m.png` | Update-Banner im Dunkelmodus weiß (invertiertes `--ink`) – grell; ohne „Später“ | Dunkel: `background:var(--surface-2);color:var(--ink);border:1px solid var(--line)`; Text „Später“ als Link ergänzen (Knopf „Jetzt aktualisieren“ bleibt wie gefordert) |
| U-37 | `04d-start-ruhig_light-m.png`, `07r-lektion-ruhig_light-m.png` | Ruhige Darstellung: Knöpfe grau, aber Kicker magenta, Story-Segmente und Kartenrand in Modulfarbe, Ring-Fortschritt im Verlauf | `:root[data-calm]{--brand:#5c5470}` `:root[data-calm] .hero .kicker{color:var(--ink-2)}` `:root[data-calm] .story{--m:#7a7290}` `:root[data-calm] .ring svg.prog circle+circle{stroke:var(--ink-3)}` |
| U-38 | `01c-browser-nag-start_light-m.png` | Schwarzer Balken „App nicht installiert“ ist die dunkelste Fläche der App | `.nag{background:var(--surface-2);color:var(--ink);border-bottom:1px solid var(--line)}` `.nag .go{color:var(--c3)}` |
| U-39 | `01-install-gate_light-m.png` | Anleitung nur als Text; Schritt 1 sehr lang | Je Schritt ein kleines Symbolbild (Teilen-Icon groß, „Zum Home-Bildschirm“ als Pille); Schritt 1 kürzen: „Unten auf Teilen ⬆︎ tippen (bei neuem iOS: erst ⋯).“ |
| U-40 | `20-quiz-freitext-vor_light-m.png`, `27b-probetest-freitext_light-m.png` | Freitextfragen in Sie-Form („regeln Sie?“), sonst Du-Form | Bewusst prüfungsnah – dann einmal erklären: Tipp-Box „Im Test wirst du gesiezt – hier üben wir genau so.“ |
| U-41 | `22b-ueben-leer_light-m.png` | Guter leerer Zustand; „Lern mit …“ grammatisch knapp | „Alles sitzt gerade. Lerne mit der nächsten Lektion weiter oder mach ein Schnell-Quiz.“ |
| U-42 | `32-einstellungen_light-m.png` | „Schalter“ sind native Kästchen in Pink | iOS-artiger Schalter: `label.check.sw input{appearance:none;width:44px;height:26px;border-radius:99px;background:var(--line-strong);position:relative;transition:background .2s}` `…:checked{background:var(--ok)}` + `::after`-Knopf |
| U-43 | `18-quiz-mc-vor_light-m.png` | Grauer Fortschrittsbalken bei Frage 1 leer – wirkt wie Trennlinie | Mindestbreite 4 % oder Segmente wie in der Story (`.progress-steps`, schon in CSS Z. 200) |

---

## Vergleich mit guten Lern-Apps – was sich übernehmen lässt (ohne Vorgaben zu verletzen)

| Vorbild | Muster | Umsetzung im SMM Coach |
|---|---|---|
| Duolingo | Abschluss-Bildschirm mit **einem** großen „Weiter“ + kleine Belohnung (Serie, XP) | Ende-Karte und Quiz-Ergebnis: Tagesziel-Ring + „Weiterlernen“ als einziger Haupt-Button (U-12, U-26). Serie in Tagen („3 Tage am Stück“) statt „richtig in Folge“ – motiviert für tägliches Lernen, aber ohne Druck (keine verlorenen Serien anzeigen, nur positive). |
| Duolingo | Feedback-Leiste unten, fest an der Daumenposition, grün/rot mit Text | Im Quiz die Erklärung + „Weiter“ als feste untere Leiste statt Scrollen zu `.fbx` – Daumen bleibt unten, kein Springen. |
| Brilliant | Fehler sind „Lernchancen“, Erklärung kommt zuerst | Bei „Nicht ganz“ zuerst einen Satz „Darum:“ und den Fachbegriff, dann die Erklärung. Ton bereits gut. |
| Headway / Blinkist | „Key Insights“-Karte am Ende, speicherbar | „Das nimmst du mit“ ist schon da – zusätzlich „Merken“-Stern, der in „Das Wichtigste“ landet. |
| Blinkist | Kapitel-Übersicht mit Häkchen und Restzeit | Modulseite: Restzeit „noch ca. 38 Min.“ im Modulkopf; leicht machbar aus `l.min`. |
| Anki / Brainscape | Lernkarten mit Selbsteinschätzung in 3 Stufen | Lernkarten haben 2 Stufen – für ADHS reicht das; Kartenstapel-Optik (zweite Karte leicht versetzt dahinter) zeigt „es gibt noch mehr“. |

---

## Top 10 Empfehlungen

1. **„undefined“ bei 5 Antworten beheben** (U-01): eine Buchstaben-Konstante, 5 Minuten Aufwand, sichtbarer Fehler.
2. **Farbbedeutung trennen** (U-04, U-19): „falsch“ in Ziegelrot, Musterlösung neutral, Werkzeug-Kacheln einheitlich getönt. Das bringt die größte Ruhe ins Bild.
3. **Fokusmodus darf die Module nicht verstecken** (U-02).
4. **Zustände ehrlich machen:**
   - Modul-Quiz ohne Schloss (U-06)
   - Kurz-Check-Knopf „Antwort wählen“ (U-07)
   - falsche Mehrfach-Wahl rot (U-03)
   - Kästchen für Mehrfachfragen (U-22)
5. **Test-Übersicht:** „offen“ deutlich, Reiterleiste ausblenden, „Zur ersten offenen Frage“ (U-08).
6. **Nach jedem Ergebnis genau ein nächster Schritt;** Probetest automatisch speichern, Fehlerliste einklappen und „Fehler üben“ anbieten (U-12).
7. **Toasts:** volle Breite, nicht über Haupt-Knöpfen (U-05).
8. **Alle 7 Module auf Start sichtbar** (Raster 4+3), keine abgeschnittenen Namen (U-10).
9. **Endspurt-Plan realistisch** und Vorlesungsplan „nächste“ korrekt (U-15, U-16).
10. **Zeichen- und Textfeinschliff:**
    - geschützte Leerzeichen vor %
    - einheitlich „Fragen“ statt „Antworten“
    - Toast-Texte mit Bezug
    - Übersetzungen nicht in Komposita und Überschriften (U-14, U-23, U-24)

## Gesamtnoten je Bereich (Schulnoten)

| Bereich | Note | Kurzbegründung |
|---|---|---|
| Visuelle Hierarchie & Typografie | 2 | Klare Karten, gute Schriftpaarung; Hero etwas überladen (4 Ebenen), Glossar zu schwer |
| Konsistenz (Abstände, Radien, Buttons, Icons) | 2– | Einheitliche Radien/Icons; Zweit-Buttons zu schwach, Thumb-Farben uneinheitlich, viele Inline-Styles |
| Farbe & Zurückhaltung | 3+ | Hintergründe ruhig, aber Pink überall und mit „falsch“ verwechselbar; bunte Thumbs |
| Dunkelmodus | 2 | Sorgfältig abgestimmt; Kontrastproblem bei aufgehellter Modulfarbe, grelles Update-Banner/Toast |
| Informationsarchitektur & Navigation | 2– | 3 Reiter tragen gut; Module hinter horizontalem Scroll und im Fokusmodus weg, Quiz-Arten ohne sichtbaren Titel |
| Interaktion & Zustände | 3+ | Story-Player und Gesten gut; mehrere irreführende Zustände (Schloss, Weiter, lila Falsch, Übersicht) |
| Microcopy | 2 | Freundlich, einfach, Du-Form; kleine Uneinheitlichkeiten (Antworten/Fragen, „Eingeschaltet“, Sie-Fragen) |
| Motivation & Lernfluss | 2– | Tagesziel, Weiterlernen, Üben sind stark; Ergebnisse ohne nächsten Schritt, Endspurt-Plan überfordert |
| Barrierefreiheit (sichtbar) | 2 | Große Ziele, Symbol + Farbe, XL passt meist; Fokus-Ring auf Touch, Toast-Umbruch, abgeschnittene Labels |
| **Gesamt** | **2** | Reife, angenehme App – die Befunde sind überwiegend schnelle Korrekturen |

## Zusammenfassung

**43 Befunde: 4 × P1, 20 × P2, 19 × P3.** Alle mit Screenshot-Datei, Fundstelle und Code- bzw. Textvorschlag. Keine Projektdateien geändert.
