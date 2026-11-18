import asyncio, json, sys
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode

URL = "https://www.roworlddb.com/sea/dungeon/?lang=en-US&dungeon=final_mirage#dungeon=2"
OUT = sys.argv[1]

async def main():
    run = CrawlerRunConfig(cache_mode=CacheMode.BYPASS, wait_until="networkidle",
                           delay_before_return_html=5.0, page_timeout=90000,
                           capture_network_requests=True)
    async with AsyncWebCrawler(config=BrowserConfig(headless=True)) as c:
        r = await c.arun(URL, config=run)
        open(f"{OUT}/page.html", "w").write(r.html or "")
        open(f"{OUT}/page.md", "w").write(str(r.markdown or ""))
        json.dump(r.media, open(f"{OUT}/media.json", "w"), indent=1, default=str)
        json.dump(r.network_requests or [], open(f"{OUT}/net.json", "w"), indent=1, default=str)
        print(r.success, len(r.html or ""), r.error_message)

asyncio.run(main())
