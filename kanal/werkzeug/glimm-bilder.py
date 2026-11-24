# Rendert Glimm in allen Launen als PNG mit durchsichtigem Grund: python3 glimm.py <glimm.html> <zielordner> [groesse]
import sys, asyncio, base64
from playwright.async_api import async_playwright
src, out = sys.argv[1], sys.argv[2]; gr = int(sys.argv[3]) if len(sys.argv) > 3 else 1000
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(); pg.on("pageerror", lambda e: print("FEHLER", e))
        await pg.goto("file://"+src)
        for l in await pg.evaluate("Object.keys(GLIMM_LAUNEN)"):
            d = await pg.evaluate(f"Glimm.bild('{l}', {gr})")
            open(f"{out}/{l}.png","wb").write(base64.b64decode(d.split(",")[1]))
        await b.close()
asyncio.run(main())
