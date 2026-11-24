# Rechnet ein Reel Bild für Bild und setzt es mit ffmpeg zusammen. Lässt sich unterbrechen und fortsetzen.
#   python3 werkzeug/reel.py <ordner mit reel.html> [--zeit 540]      rechnet höchstens so viele Sekunden, dann Abbruch (Rückgabe 3 = noch nicht fertig)
#   python3 werkzeug/reel.py <ordner> --bilder 0.5,3.2 <zielordner>   nur einzelne Probebilder
# Ergebnis: reel.mp4 und titelbild.jpg (Bild bei Sekunde 1,6) im Ordner. Die Dauer kommt aus der Seite (DAUER).
import sys, asyncio, subprocess, os, shutil, time, hashlib
from playwright.async_api import async_playwright
ordner = os.path.abspath(sys.argv[1]); src = ordner + "/reel.html"; fps = 30
zeit = float(sys.argv[sys.argv.index("--zeit")+1]) if "--zeit" in sys.argv else 1e9
probe = sys.argv.index("--bilder") if "--bilder" in sys.argv else 0
tmp = "/tmp/reel-" + hashlib.md5(ordner.encode()).hexdigest()[:10]; os.makedirs(tmp, exist_ok=True)
fertig = False
async def main():
    global fertig
    t0 = time.time()
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":1080,"height":1920}); pg.on("pageerror", lambda e: print("FEHLER", e))
        await pg.goto("file://"+src); await pg.evaluate("document.fonts.ready")
        dauer = await pg.evaluate("DAUER")
        if probe:
            for i, t in enumerate(float(x) for x in sys.argv[probe+1].split(",")):
                await pg.evaluate(f"zeige({t})"); await pg.screenshot(path=f"{sys.argv[probe+2]}/probe{i}.jpg", type="jpeg", quality=88)
            print("Dauer", dauer); await b.close(); return
        n = int(round(dauer*fps))
        for i in range(n):
            f = f"{tmp}/{i:04d}.jpg"
            if os.path.exists(f): continue
            if time.time()-t0 > zeit: await b.close(); print(f"{os.path.basename(ordner)}: Pause bei Bild {i} von {n}"); return
            await pg.evaluate(f"zeige({i/fps})"); await pg.screenshot(path=f+".teil", type="jpeg", quality=92); os.rename(f+".teil", f)
        await b.close(); fertig = True
asyncio.run(main())
if probe: sys.exit(0)
if not fertig: sys.exit(3)
subprocess.run(["ffmpeg","-loglevel","error","-y","-framerate",str(fps),"-i",f"{tmp}/%04d.jpg","-c:v","libx264","-pix_fmt","yuv420p","-crf","20",ordner+"/reel.mp4"],check=True)
shutil.copy(f"{tmp}/0048.jpg", ordner+"/titelbild.jpg"); shutil.rmtree(tmp); print(os.path.basename(ordner), "fertig")
