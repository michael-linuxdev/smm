# smm.mit.ki – Instagram-Kanal

Inhalte für den Instagram-Kanal **smm.mit.ki** (KI-Werkzeuge für neue Social Media Manager). Liegt neben der App SMM Coach und gehört nicht zu ihr: nichts hier steht in `sw.js`, der Fragenpool der App bleibt unberührt.

- `vorlage/` – Aussehen des Kanals: `vorlage.css` (Farben, Schrift, Seitentypen) und `glimm.js` (die 3D-Figur Glimm samt Büro, als berechnetes Modell).
- `vorlage/glimm/` – Glimm als Standbild je Laune, durchsichtiger Grund.
- `profil/` – Profilbild.
- `reels/<nr>-<name>/` – je Reel: `reel.html` (Ablauf), `reel.mp4`, `titelbild.jpg`, `beschreibung.txt`, `kommentar.txt` (voller Prompt für den angehefteten Kommentar).
- `werkzeug/` – Skripte zum Rechnen (Python mit Playwright, Chrome, ffmpeg).

## Regeln

- Rubriken: Mo „Prompt der Woche“, Mi „Claude am Rechner“, Fr „Werkzeug-Check“, So Karussell als Spickzettel.
- Gelb gibt es nur für Glimms Lampe und für Markierungen in Prompts (das, was man ersetzt).
- Glimms Lampe zeigt, wie gut der Prompt ist: aus, flackert, an.
- Kleinste Schrift 40 px. Im Reel bleiben oben 270 px und unten 440 px frei von Wichtigem.
- Im Reel steht die Kurzfassung des Prompts, der volle Prompt kommt in den angehefteten Kommentar.

## Rechnen

    python3 werkzeug/reel.py <pfad>/reel.html <pfad>/reel.mp4 <dauer> [von bis]

Ein Reel in Büro-Kulisse braucht etwa 2,3 Sekunden pro Bild. Lange Reels in Abschnitten rechnen (Bildnummern `von bis`), der letzte Abschnitt setzt das Video zusammen.
