import sys, asyncio
from playwright.async_api import async_playwright
src, out = sys.argv[1], sys.argv[2]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width":1080,"height":1920})
        await pg.goto("file://"+src); await pg.evaluate("document.fonts.ready")
        for el in await pg.query_selector_all(".blatt"):
            i = await el.get_attribute("id"); await el.screenshot(path=f"{out}/{i}.png")
        await b.close()
asyncio.run(main())
