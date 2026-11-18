"""Render arena diagrams with raidplan.io's own editor objects and export each scene as PNG.

Scene coordinates: arena centre (0,0), radius 100, north up (+y is south, +x is east).
Usage, from the project root:
  .venv/bin/python -I scripts/diagrams/rp_render.py scripts/diagrams/style.json scripts/diagrams/scenes.json presentation/diagrams [--only id,id]
"""
import asyncio, base64, json, sys
from pathlib import Path
from playwright.async_api import async_playwright

STYLE, SPEC, OUT = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])
ONLY = set(sys.argv[sys.argv.index("--only") + 1].split(",")) if "--only" in sys.argv else None
HERE = Path(__file__).parent

FIND_CANVAS = r"""
() => {
  let el = document.querySelector('canvas.lower-canvas'), fk = null;
  while (el && !(fk = Object.keys(el).find(k => k.startsWith('__reactFiber$')))) el = el.parentElement;
  const isCanvas = v => v && typeof v === 'object' && typeof v.getObjects === 'function' && typeof v.renderAll === 'function';
  for (let f = el && el[fk], n = 0; f && n < 200; f = f.return, n++) {
    for (let h = f.memoizedState, i = 0; h && i < 80; h = h.next, i++) {
      if (isCanvas(h.memoizedState)) return (window.__rp = h.memoizedState), true;
      if (h.memoizedState && isCanvas(h.memoizedState.current)) return (window.__rp = h.memoizedState.current), true;
    }
  }
  return false;
}
"""

KEEP_CTORS = r"""
() => {
  const c = window.__rp, C = {};
  const want = {PlanMarker: 'Marker', PlanWaypoint: 'Waypoint', PlanAbility: 'Ability', PlanCircle: 'Circle', PlanCone: 'Cone',
                PlanRect: 'Rect', PlanLine: 'Line', PlanIText: 'IText', PlanArena: 'Arena'};
  const lines = [];
  for (const o of c.getObjects()) {
    const k = want[o.constructor.type]; if (k) C[k] = o.constructor;
    if (o.constructor.type === 'PlanLine') lines.push({startType: o.startType, endType: o.endType, sw: o.strokeWidth, stroke: o.stroke});
  }
  window.__C = C;
  return {have: Object.keys(C), lines};
}
"""

async def bootstrap(pg):
    """Create one object per class through the real UI so their constructors can be reused."""
    async def drag_img(sub, to):
        box = await pg.locator(f'img[src*="{sub}"]').first.bounding_box()
        sx, sy = box["x"] + box["width"] / 2, box["y"] + box["height"] / 2
        await pg.mouse.move(sx, sy); await pg.mouse.down(); await pg.mouse.move(sx + 15, sy + 5, steps=4)
        await pg.mouse.move(*to, steps=12); await pg.mouse.up(); await pg.wait_for_timeout(500)
    await drag_img("role_tank", (700, 500))
    await drag_img("way_a", (784, 330))
    await drag_img("ff-area-prox", (650, 400))
    for key in ["o", "c", "r", "l", "Shift+L", "t"]:
        await pg.mouse.click(1250, 950); await pg.keyboard.press("Escape")
        await pg.keyboard.press(key); await pg.wait_for_timeout(200)
        await pg.mouse.move(560, 700); await pg.mouse.down(); await pg.mouse.move(640, 760, steps=8); await pg.mouse.up()
        await pg.wait_for_timeout(400); await pg.keyboard.press("Escape"); await pg.wait_for_timeout(200)
    assert await pg.evaluate(FIND_CANVAS), "fabric canvas not found"
    info = await pg.evaluate(KEEP_CTORS)
    missing = {"Marker", "Waypoint", "Ability", "Circle", "Cone", "Rect", "Line", "IText", "Arena"} - set(info["have"])
    assert not missing, f"missing constructors {missing}"

async def main():
    spec = {"config": json.loads(STYLE.read_text()), "scenes": json.loads(SPEC.read_text())}
    OUT.mkdir(parents=True, exist_ok=True)
    build_js = (HERE / "build_scene.js").read_text()
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await (await b.new_context(viewport={"width": 1600, "height": 1000})).new_page()
        await pg.goto("https://raidplan.io/plan/create?raid=ffxiv.arena.arena", wait_until="networkidle", timeout=90000)
        await pg.wait_for_timeout(4000)
        await bootstrap(pg)
        await pg.evaluate(f"window.__build = {build_js}; true")
        for sc in spec["scenes"]:
            if ONLY and sc["id"] not in ONLY: continue
            n = await pg.evaluate("([sc, cfg]) => window.__build(sc, cfg)", [sc, spec["config"]])
            await pg.wait_for_timeout(spec["config"].get("settleMs", 900))
            url = await pg.evaluate("(cfg) => window.__export(cfg)", spec["config"])
            (OUT / f"{sc['id']}.png").write_bytes(base64.b64decode(url.split(",", 1)[1]))
            print(sc["id"], n, "objects")
        await b.close()

asyncio.run(main())
