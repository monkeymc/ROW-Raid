"""Merge English + Thai boss data and the crawled video list into presentation/data.js.

Usage: python -I scripts/build_data.py <data_dir> <presentation_dir>
"""
import json, sys

DATA, OUT = sys.argv[1], sys.argv[2]
BARON = 2
SOURCE = {"id": "jPYYMamAacg", "channel": "阿萬"}
# Clip file and its start second in SOURCE, in on-page skill order.
CLIPS = ["abyssal-surge", "phantom-spring", "abyss-gaze", "phantom-portals", "shadow-might"]
STARTS = {"abyss-gaze": 52, "phantom-portals": 161, "phantom-spring": 191,
          "abyssal-surge": 206, "shadow-might": 219}

def load(lang):
    d = json.load(open(f"{DATA}/fm_{lang}.json"))
    dungeon = next(x for x in d["dungeons"] if x["id"] == BARON)
    return dungeon, d["skillSets"][dungeon["boss"]["skillSet"]]

en_d, en_s = load("en-US")
th_d, th_s = load("th-TH")
assert len(en_s["skills"]) == len(th_s["skills"]) == len(CLIPS)

skills = [{
    "key": clip, "name": e["name"], "nameTh": t["name"], "desc": e["desc"], "descTh": t["desc"],
    "labels": [l["name"] for l in e["labels"]], "labelsTh": [l["name"] for l in t["labels"]],
    "clip": f"clips/{clip}.mp4", "poster": f"clips/{clip}.jpg",
    "source": f"https://www.youtube.com/watch?v={SOURCE['id']}&t={STARTS[clip]}s",
    "sourceAt": f"{STARTS[clip] // 60}:{STARTS[clip] % 60:02d}",
} for clip, e, t in zip(CLIPS, en_s["skills"], th_s["skills"])]

others = []
for e, t in zip(en_s["otherSkills"], th_s["otherSkills"]):
    v, vt = e["variants"][0], t["variants"][0]
    dmg = v.get("damage", [{}])[0].get("PveDamageValue1")
    others.append({"name": e["name"], "nameTh": t["name"], "element": v["element"]["name"],
                   "elementTh": vt["element"]["name"], "range": v["range"],
                   "dmgPct": dmg // 100 if dmg else None,
                   "warning": v.get("warning"), "warningTh": vt.get("warning")})

b, bt = en_d["boss"], th_d["boss"]
boss = {"dungeon": en_d["name"], "dungeonTh": th_d["name"], "name": b["name"], "nameTh": bt["name"],
        "level": b["level"], "race": b["race"], "size": b["size"], "sizeTh": bt["size"],
        "element": b["element"]["name"], "elementTh": bt["element"]["name"],
        "team": en_d.get("team"), "timeLimit": en_d.get("timeLimit"),
        "stats": [{"label": s["label"], "labelTh": st["label"], "value": s["value"]}
                  for s, st in zip(b["stats"], bt["stats"])]}

videos = json.load(open(f"{DATA}/baron_videos.json"))
payload = {"boss": boss, "skills": skills, "others": others, "videos": videos, "source": SOURCE}
with open(f"{OUT}/data.js", "w") as f:
    f.write("window.BARON = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n")
print(json.dumps(boss, ensure_ascii=False)[:600])
