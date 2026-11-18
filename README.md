# ROW-Raid

A one-screen fight guide for the Shadow Owl Duke, the boss of Baron's Night Banquet (Final Mirage, Lv 95) in Ragnarok: The New World.

Open the guide at https://monkeymc.github.io/ROW-Raid/.

The header shows the boss's element this week, the attack element to switch to, and the cards to bring. The element rotates every Monday at 05:00 server time, and the header follows it. Below the header is the fight timeline by boss HP. Click an event to open its arena diagram and an in-game clip of that moment.

## Find your way around the repository

- `presentation/index.html` is the guide. It reads all of its text, the timeline, and the weekly loadout from `presentation/guide.js`.
- `presentation/deck.html` is an older slide-deck version of the guide. It reads `presentation/data.js`.
- `presentation/diagrams/` holds the arena diagrams, and `presentation/clips/` holds the in-game clips.
- `scripts/` holds the tools that rebuild the data, the clips, and the diagrams.
- `data/` holds the boss data from roworlddb and `data/mechanics.md`, the mechanics notes the guide is written from.

## View the guide locally

Serve the `presentation` folder with a static file server:

	python3 -m http.server 8000 --directory presentation

Then open http://localhost:8000/.

## Rebuild the content

The scripts need Python 3 with `playwright` and `crawl4ai`, and `ffmpeg`. Run them from the repository root.

To change the guide text, the timeline, or the loadout, edit `presentation/guide.js`. No build step is needed.

To refresh the boss data from roworlddb:

	curl -o data/fm_en-US.json https://www.roworlddb.com/sea/dungeon/data/final_mirage_en-US.json
	curl -o data/fm_th-TH.json https://www.roworlddb.com/sea/dungeon/data/final_mirage_th-TH.json
	python -I scripts/get_videos.py data
	python -I scripts/build_data.py data presentation

`build_data.py` writes `presentation/data.js`, which only `deck.html` uses.

To cut the in-game clips, download the source video (https://www.youtube.com/watch?v=jPYYMamAacg) to `raw/yt/jPYYMamAacg.mp4`, then run:

	scripts/cut_clips.sh raw/yt/jPYYMamAacg.mp4 presentation/clips

To redraw the arena diagrams, edit the scenes in `scripts/diagrams/scenes.py`, then run:

	python -I scripts/diagrams/scenes.py scripts/diagrams/scenes.json
	python -I scripts/diagrams/rp_render.py scripts/diagrams/style.json scripts/diagrams/scenes.json presentation/diagrams

`rp_render.py` opens the RaidPlan.io editor in a headless browser, builds each scene from RaidPlan's own shapes and markers, and saves each one as a PNG. It needs network access to raidplan.io. A change to RaidPlan's editor can break it.

## Deploy

Every push to `main` runs `.github/workflows/pages.yml`, which publishes the `presentation` folder to GitHub Pages.

## Credits

- Boss data, skill text, the element counter table, and card data come from [roworlddb.com](https://www.roworlddb.com/sea/dungeon/?lang=en-US&dungeon=final_mirage).
- The in-game clips are cut from 阿萬's [mechanics guide on YouTube](https://www.youtube.com/watch?v=jPYYMamAacg). Each clip in the guide links back to its moment in the video.
- The arena diagrams are drawn with the [RaidPlan.io](https://raidplan.io/ffxiv) editor.

Ragnarok: The New World, its names, and its art belong to their owners. This is a fan project and is not affiliated with them.
