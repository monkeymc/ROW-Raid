"""Generate scenes.json for rp_render.py. Coordinates: arena radius 100, x east, y south (screen down).
Usage, from the project root: .venv/bin/python -I scripts/diagrams/scenes.py scripts/diagrams/scenes.json
"""
import json, math, sys

BOSS = {"t": "marker", "asset": "game/ffxiv/enemy/large.png", "x": 0, "y": 0, "size": 18}
# Spaced so the role icons and their labels below them never overlap.
STACK = {"T": (0, 14), "D1": (-13, 14), "D2": (13, 14), "H": (-7, 32), "D3": (7, 32)}


def party(pos=None, skip=()):
    pos = {**STACK, **(pos or {})}
    return [{"t": "player", "role": r, "x": x, "y": y} for r, (x, y) in pos.items() if r not in skip]


def polar(r, deg):
    a = math.radians(deg - 90)  # 0 deg = north, clockwise
    return round(r * math.cos(a), 2), round(r * math.sin(a), 2)


def beam(deg, w=3.5, r0=10, r1=100, color="beam"):
    return {"t": "line", "from": list(polar(r0, deg)), "to": list(polar(r1, deg)), "w": w, "color": color}


def text(x, y, s, size=6, color="label"):
    return {"t": "text", "x": x, "y": y, "text": s, "size": size, "color": color}


def arrow(a, b, w=4, color="arrow", dash=False):
    return {"t": "arrow", "from": list(a), "to": list(b), "w": w, "color": color, "dash": dash}


def arc_arrow(r, start, end, step=30, w=4, color="arrow"):
    pts = [polar(r, d) for d in range(start, end + 1, step)]
    segs = [{"t": "line", "from": list(p), "to": list(q), "w": w, "color": color} for p, q in zip(pts, pts[1:-1])]
    return segs + [arrow(pts[-2], pts[-1], w, color)]


DIAG = [45, 135, 225, 315]
scenes = []
S = lambda sid, *objs: scenes.append({"id": sid, "objects": [o for grp in objs for o in (grp if isinstance(grp, list) else [grp])]})

S("position_01",
  {"t": "circle", "x": 0, "y": 12, "r": 33, "fill": "safe", "dash": True},
  BOSS, party(), text(0, 53, "STACK AT HIS FEET", 6, "safeEdge"))

S("abyss-gaze_01a",
  {"t": "circle", "x": 34, "y": 0, "r": 60, "fill": "blue"},
  {"t": "circle", "x": -34, "y": 0, "r": 60, "fill": "danger"},
  BOSS, party(), arrow((14, 20), (36, 20)), text(-52, -66, "RED = STUN", 6, "dangerEdge"))
S("abyss-gaze_01b",
  {"t": "rect", "x": 0, "y": 38, "w": 180, "h": 44, "fill": "blue"},
  {"t": "rect", "x": 0, "y": -10, "w": 150, "h": 90, "fill": "danger"},
  BOSS, party(), text(0, -64, "LOW DAMAGE, SHORT STUN", 5.5, "dangerEdge"))
S("abyss-gaze_02",
  {"t": "donut", "x": 0, "y": 0, "r": 66, "inner": 60, "fill": "danger"},
  {"t": "donut", "x": 0, "y": 0, "r": 30, "inner": 26, "fill": "danger"},
  arrow((0, -68), (0, -92), 4, "dangerEdge"), arrow((47, 47), (64, 64), 4, "dangerEdge"), arrow((-47, 47), (-64, 64), 4, "dangerEdge"),
  BOSS, party({"T": (0, 12), "D1": (-11, 7), "D2": (11, 7), "H": (-6, 19), "D3": (6, 19)}),
  text(0, -52, "RINGS EXPAND OUTWARD", 5.5, "dangerEdge"))

S("shadow-might_01",
  {"t": "circle", "x": 0, "y": 0, "r": 99, "fill": "gold", "sw": 2},
  {"t": "donut", "x": 0, "y": 0, "r": 99, "inner": 88, "fill": "goldRim"},
  [arrow(polar(30, d), polar(78, d), 4, "goldEdge") for d in (0, 90, 180, 270)],
  BOSS, party(), text(0, -42, "EVERY 10% HP", 7, "goldEdge"), text(0, 62, "WHOLE ARENA, NO DODGE", 5.5, "label"))
S("shadow-might_02",
  {"t": "donut", "x": 0, "y": 0, "r": 20, "inner": 11, "fill": "danger"},
  BOSS, party({"T": (0, 30), "D1": (-14, 32), "D2": (14, 32), "H": (-7, 43), "D3": (7, 43)}),
  text(0, -36, "BELOW 20%", 8, "dangerEdge"), text(0, -26, "DMG ▲  DMG REDUCTION ▲", 5, "label"),
  text(0, 66, "≈10 s per 1% HP", 6, "label"))

def lane(k):
    d = abs(k) * math.sqrt(2); half = math.sqrt(100 ** 2 - d ** 2) - 3
    return {"t": "rect", "x": k, "y": k, "w": 26, "h": round(2 * half, 1), "angle": 45, "fill": "danger"}, half
def lane_end(k, back):
    _, half = lane(k); u = (half - back) / math.sqrt(2)
    return (round(k + u, 1), round(k - u, 1))
lanes = [lane(k)[0] for k in (-40, 0, 40)]
S("abyssal-surge_01", lanes,
  [{"t": "rect", "x": x, "y": y, "w": 26, "h": 10, "angle": 45, "fill": "water"} for x, y in (lane_end(0, 8), lane_end(40, 8))],
  [arrow(lane_end(k, 18), lane_end(k, 46), 4, "waterEdge") for k in (0, 40)],
  BOSS, party(), text(-46, -72, "LANES, THEN WAVE", 5.5, "dangerEdge"))
S("abyssal-surge_02", lanes[1],
  BOSS, party(skip=("D1",)), {"t": "player", "role": "D1", "x": -44, "y": 46},
  arrow((-12, 17), (-40, 42), 4, "waterEdge", True), arrow((-38, 36), (-16, 18), 4, "safeEdge"),
  text(-56, 62, "PUSHED", 5.5, "waterEdge"), text(-4, 52, "WALK BACK", 5.5, "safeEdge"))
S("abyssal-surge_03",
  [{"t": "circle", "x": x, "y": y, "r": 20, "fill": "water"} for x, y in ((-62, -62), (62, -62), (-62, 62), (62, 62))],
  [arrow((x * .62, y * .62), (x * .36, y * .36), 4, "waterEdge") for x, y in ((-62, -62), (62, -62), (-62, 62), (62, 62))],
  [{"t": "circle", "x": x, "y": y, "r": 9, "fill": "safe", "dash": True} for x, y in ((0, -36), (36, 0), (0, 36), (-36, 0))],
  BOSS, party({"T": (0, -36), "D1": (-36, 0), "D2": (36, 0), "H": (-8, 36), "D3": (8, 36)}),
  text(0, -86, "STEP N / S / E / W", 5.5, "safeEdge"))

starburst = [beam(d) for d in range(15, 360, 30)]
GAPS = {"T": polar(52, 180), "D1": polar(58, 210), "D2": polar(58, 150), "H": polar(76, 180), "D3": polar(76, 150)}
S("blue-beams_01", starburst,
  [{"t": "circle", "x": x, "y": y, "r": 8, "fill": "safe", "dash": True} for x, y in GAPS.values()],
  [arrow(STACK[r], (x * .82 + STACK[r][0] * .18, y * .82 + STACK[r][1] * .18), 3.5, "safeEdge") for r, (x, y) in GAPS.items() if r in ("T", "D1", "D2")],
  BOSS, party(GAPS), text(-52, 84, "STEP INTO A GAP", 5.5, "safeEdge"))
cw = [beam(d, 4.5) for d in range(0, 360, 45)]
S("blue-beams_02a", cw,
  [text(*polar(90, d), str(i + 1), 6.5, "beam") for i, d in enumerate(range(0, 360, 45))],
  BOSS, arc_arrow(34, 30, 300, 30, 4, "safeEdge"), party({"T": polar(34, 15), "D1": polar(40, 0), "D2": polar(28, 2), "H": polar(34, -14), "D3": polar(46, 10)}))
S("blue-beams_02b", [beam(d, 13, 10, 100) for d in (0, 120, 240)], BOSS,
  party({"T": polar(76, 55), "D1": polar(76, 68), "D2": polar(74, 170), "H": polar(76, 295), "D3": polar(76, 308)}),
  text(0, 0 + 26, "CENTRE = DEATH", 5.5, "dangerEdge"), text(0, 94, "angles illustrative", 4.5, "label"))

PORT = [polar(62, d) for d in DIAG]
rings = [{"t": "donut", "x": x, "y": y, "r": 12, "inner": 8, "fill": "portal"} for x, y in PORT]
S("phantom-portals_01", rings,
  {"t": "donut", "x": 0, "y": 0, "r": 15, "inner": 11, "fill": "gold"}, BOSS, party(),
  text(0, -22, "INVINCIBLE", 6, "goldEdge"), text(0, 94, "portal positions approximate", 4.5, "label"))
S("phantom-portals_02", rings,
  [{"t": "circle", "x": x * .8 + dx, "y": y * .8 + dy, "r": 3.5, "fill": "minion"} for x, y in PORT for dx, dy in ((5, 0), (-3, 5))],
  BOSS,
  party({"D1": polar(46, 315), "D2": polar(46, 45), "D3": polar(46, 135), "T": polar(42, 225), "H": (0, 22)}),
  [arrow(polar(18, d), polar(36, d), 4, "safeEdge") for d in DIAG])
S("phantom-portals_03", rings[:2],
  [{"t": "circle", "x": x, "y": y, "r": 12, "fill": "puddle", "dash": True} for x, y in ((-30, 22), (16, 40), (-52, -8))],
  [text(x, y, "20s", 5, "puddleEdge") for x, y in ((-30, 22), (16, 40), (-52, -8))],
  BOSS, party({"D2": (-30, 26), "H": (24, 18), "D3": (36, 6), "D1": (-14, -30), "T": (12, -34)}),
  {"t": "circle", "x": -5, "y": 9, "r": 4, "fill": "ball"}, arrow((-2, 4), (-24, 22), 4, "ballEdge", True),
  {"t": "circle", "x": -30, "y": 26, "r": 10, "fill": "danger"}, text(-30, 48, "BALL + PUDDLE = DEAD", 5, "dangerEdge"))
S("phantom-portals_04", BOSS,
  party({"T": (-36, -30), "D1": (34, -34), "D2": (38, 30), "D3": (-38, 34), "H": (0, 40)}),
  [arrow(a, b, 4, "safeEdge") for a, b in (((-30, -25), (-8, -6)), ((28, -28), (8, -6)), ((32, 25), (9, 7)), ((-32, 28), (-9, 7)))],
  text(0, -60, "BACK TO HIS FEET", 6, "safeEdge"), text(0, 72, "≥ 1:40 LEFT AFTER LAST SET", 5.5, "label"))

S("phantom-spring_01",
  [{"t": "circle", "x": x, "y": y, "r": 13, "fill": "water"} for x, y in (polar(66, d) for d in range(0, 360, 45))],
  {"t": "circle", "x": 0, "y": 12, "r": 33, "fill": "safe", "dash": True},
  BOSS, party(), text(0, -88, "VORTICES HURT", 5.5, "waterEdge"))

json.dump(scenes, open(sys.argv[1], "w"), indent=1, ensure_ascii=False)
print(len(scenes), "scenes")
