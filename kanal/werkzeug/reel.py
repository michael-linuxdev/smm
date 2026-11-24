# Rendert ein Reel Bild für Bild: python3 reel3d.py <reel.html> <ziel.mp4> <dauer> [von bis]  bzw.  ... --bilder 0.3,1.5 <zielordner>
import sys, asyncio, subprocess, os, shutil
from playwright.async_api import async_playwright
src, out, dauer, fps = sys.argv[1], sys.argv[2], float(sys.argv[3]), 30
tmp = "/tmp/reelframes"; os.makedirs(tmp, exist_ok=True)
einzel = [float(x) for x in sys.argv[5].split(",")] if len(sys.argv) > 5 and sys.argv[4] == "--bilder" else None
von, bis = (int(sys.argv[4]), int(sys.argv[5])) if len(sys.argv) > 5 and not einzel else (0, int(dauer*fps))
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":1080,"height":1920}); pg.on("pageerror", lambda e: print("FEHLER", e))
        await pg.goto("file://"+src); await pg.evaluate("document.fonts.ready")
        if einzel:
            for i, t in enumerate(einzel):
                await pg.evaluate(f"zeige({t})"); await pg.screenshot(path=f"{out}/probe{i}.jpg", type="jpeg", quality=88)
        else:
            for i in range(von, bis):
                await pg.evaluate(f"zeige({i/fps})"); await pg.screenshot(path=f"{tmp}/{i:04d}.jpg", type="jpeg", quality=92)
        await b.close()
asyncio.run(main())
if not einzel and bis >= int(dauer*fps):
    subprocess.run(["ffmpeg","-loglevel","error","-y","-framerate",str(fps),"-i",f"{tmp}/%04d.jpg","-c:v","libx264","-pix_fmt","yuv420p","-crf","19",out],check=True)
