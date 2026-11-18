"""Crawl the Final Mirage page with crawl4ai, open the Videos panel, and save the video list.

Usage: python -I scripts/get_videos.py <out_dir>
Writes <out_dir>/videos.json (all videos) and <out_dir>/baron_videos.json (tagged for dungeon 2).
"""
import asyncio, html, json, re, sys
from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode

URL = "https://www.roworlddb.com/sea/dungeon/?lang=en-US&dungeon=final_mirage#dungeon=2"
BARON = 2
OUT = sys.argv[1]

# Runs in the page: wait for the Videos toggle to un-hide (data loaded), open it, and stash the
# page's own data file in the DOM so the boss tags travel back with the HTML.
CLICK = """
const sleep = ms => new Promise(r => setTimeout(r, ms));
let b;
for (let i = 0; i < 100; i++) {
  b = document.querySelector('.cz-toggle[data-panel="videos"]');
  if (b && !b.hidden) break;
  await sleep(200);
}
b.click();
const res = await fetch('/sea/dungeon/data/final_mirage_en-US.json');
const el = document.createElement('script');
el.type = 'application/json'; el.id = 'fm-data'; el.textContent = await res.text();
document.body.appendChild(el);
"""

def parse_cards(page):
    cards = re.findall(r'<button type="button" class="cz-video-card".*?</button>', page, re.S)
    out = []
    for c in cards:
        g = lambda cls: (re.search(rf'class="{cls}">(.*?)</span>', c, re.S) or [None, ""])[1].strip()
        vid = re.search(r'i\.ytimg\.com/vi/([^/]+)/', c)[1]
        out.append({"id": vid, "title": g("cz-video-title"), "meta": g("cz-video-meta"),
                    "length": g("cz-video-length"), "lang": g("cz-video-lang")})
    return out

async def main():
    run = CrawlerRunConfig(cache_mode=CacheMode.BYPASS, js_code=CLICK,
                           wait_for="js:() => !!document.querySelector('.cz-video-card') && !!document.getElementById('fm-data')", page_timeout=90000)
    async with AsyncWebCrawler(config=BrowserConfig(headless=True)) as c:
        r = await c.arun(URL, config=run)
    cards = parse_cards(r.html)
    # The rendered cards omit which boss a video covers; the page's own data file carries that tag.
    data = re.search(r'<script type="application/json" id="fm-data">(.*?)</script>', r.html, re.S)[1]
    tags = {v["id"]: v.get("dungeons", []) for v in json.loads(html.unescape(data))["videos"]}
    for v in cards:
        v["dungeons"] = tags.get(v["id"], [])
        v["url"] = f"https://www.youtube.com/watch?v={v['id']}"
    json.dump(cards, open(f"{OUT}/videos.json", "w"), ensure_ascii=False, indent=1)
    baron = [v for v in cards if BARON in v["dungeons"]]
    json.dump(baron, open(f"{OUT}/baron_videos.json", "w"), ensure_ascii=False, indent=1)
    print(f"{len(cards)} videos, {len(baron)} tagged Baron's Night Banquet")
    for v in baron: print(v["id"], v["length"], v["title"])

asyncio.run(main())
