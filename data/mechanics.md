# Shadow Owl Duke (幽影鴞梟首領) mechanics breakdown

Fight: Final Mirage, Baron's Night Banquet (男爵夜宴), Lv95 shadow dungeon. Party 1-5. HP 200,000,000. Time limit 10:00.
Primary source: 阿萬, "這SSS門檻也太高!? 新副本幽影鴞梟首領 打法及走位機制說明" (local file `raw/yt/jPYYMamAacg.mp4`, 8:53, https://www.youtube.com/watch?v=jPYYMamAacg).
Official skill text: `presentation/data.js` (English and Thai).

## How to read this document

- **Scratch files.** The frame grabs, montages and helper scripts named below (`research/tools/`, `research/frames/`, `best/`) were working files. They are not in this repository.

- **Video time vs fight clock.** `@m:ss` is the video position. `[clock 07:06, x46]` is what the in-game HUD shows at that moment. The clock counts **down** from 10:00 (`[seen @0:49]` shows 09:54). `xN` is the boss HP-bar multiplier. It starts at x100 `[seen @0:44]`, so one bar is 1% (2,000,000 HP) `[inferred: 200M / 100 bars]`.
- **The video is edited.** It has fast-forwards, a 1-minute freeze-frame (`@3:58-4:55` stays on clock 05:28), and replays (`@2:10-2:30` jumps back to clock 07:26). Gaps between two clock values are real, but the video time between them is not fight time.
- **Confidence tags.** `[seen @m:ss]` is visible in the video. `[subtitle @m:ss]` is what the narrator says (burned-in Chinese subtitles). `[data.js]` is the official skill text. `[inferred]` is my reading, with a reason. No web source added anything (see "Web search" at the end).
- **Tools.** `research/tools/subs.py` detects subtitle changes (276 segments) and builds montages with the clock and bar crops. `research/tools/scan.py` template-matches the two system banners and OCRs the clock and bars at 2 fps into `research/frames/scan.tsv`. `research/tools/grid.py` builds the timestamped frame grids in `research/frames/g/`. Full transcript with English: `research/transcript.tsv`.

## Arena and camera

- **Shape.** A large round floor ringed by glowing blue runes `[seen @0:45, @0:47-0:48 wide shots; @2:44-2:50 rune ring at the arena edge]`. No walls or pillars are visible. The narrator's "凹槽/縫隙" (gaps or notches) are gaps between beams, not terrain (see Blue stripes) `[inferred: the notches move with the beams, and the floor has no physical recesses in any frame]`.
- **Size.** The boss model is roughly 1/8 to 1/10 of the arena diameter `[inferred: estimated from the @0:47 wide shot]`. In the diagram units (arena radius 100) use **boss radius ≈ 10**.
- **Boss position.** The boss stays near the arena center and is tanked there. The whole party stacks at its feet for most of the fight `[seen throughout, e.g. @0:50-0:55, @3:12-3:18]`. The narrator says to do this even as a ranged class `[subtitle @3:18-3:22]`.
- **North.** **North = top of the screen in the video's default camera.** The camera is a fixed, tilted top-down view, with the boss above the player character on screen. Angles below are compass degrees: 0° = north (up), 90° = east (right). The camera is in perspective, so all distances are estimates `[inferred]`.
- **Minimap.** The top-right minimap shows only a small radar circle and coordinates (around 211,131 in the arena) `[seen @0:45, @1:25]`. It shows no portals or AoEs. Most of the time the damage-meter panel covers it.

## Fight timeline

| Video | Clock | Bars | Event | Confidence |
|---|---|---|---|---|
| 0:46 | 10:00 | x100 | "戰鬥開始!" (Battle start) | [seen @0:46] |
| 0:56-1:01 | 09:44-09:39 | x96-x94 | First red/blue floor AoE; player gets **暈眩 (Stun)** | [seen @0:59.5] |
| ~1:10 | ~09:30 | x89-90 | **Shadow Might #1** banner | [seen; scan.tsv first hit @1:09.5, clock 09:30, x89] |
| 1:14-1:19 | 09:20 | x84-x82 | First **waves** (Abyssal Surge), diagonal lanes | [seen @1:14.5-1:18] |
| 1:25 | 09:08 | x80 | **Shadow Might #2** | [seen; scan @1:25.5] |
| 1:28-1:33 | 09:03-08:58 | x78-x77 | First **blue stripes / beam burst**; player gets **混亂 (Confuse)**; the recording player dies @1:33 (death popup with a revive-in-place button) | [seen @1:30, @1:33 "死亡" popup] |
| 1:41-1:45 | 08:33-08:29 | x69-x67 | Red/blue floor, **rectangle variant** | [seen @1:41.5-1:45] |
| 1:46 | 08:28 | x67 | **Shadow Might #3** (≈70%) | [seen; scan @1:46] |
| 1:53 | 08:06 | x59 | **Shadow Might #4** (≈60%) | [seen; scan @1:53.5] |
| 1:55-1:57 | 07:56-07:47 | x55-x52 | Waves (red lanes plus cyan wave) | [seen @1:55.5-1:56.5] |
| 1:57.5 | 07:40 | x50 | **Shadow Might #5** (50%) | [seen @1:57.5, banner text read] |
| 1:58-2:05 | 07:36-07:17 | x49-x48 | **Clockwise sequential beams** | [seen; subtitle @2:20-2:26] |
| 2:41.5 | 07:06 | x46 | **Phantom Portals #1**. Banner: "擊殺所有傳送門以解除Boss的無敵!" | [seen @2:41.5] |
| 2:44 | 07:04 | x45 | Gold dome burst across the arena | [seen @2:44] |
| 2:45-2:58 | 07:01-06:44 | x45-x44 | Portals, purple minions, dark puddles, blue ball | [seen] |
| 2:58-3:01 | 06:44-06:41 | x44-x43 | Red/blue floor, ring variant | [seen @2:58-3:01] |
| 3:08 | 06:31 | x40 | **Shadow Might #6** (40%), gold dome @3:10 | [seen; scan @3:08] |
| 3:11-3:18 | 06:18-06:11 | x37-x36 | **Tornado / vortex ring** (龍捲風) | [seen @3:11-3:15; subtitle @3:12] |
| 3:28-3:36 | 06:00-05:50 | x33-x31 | Waves: diagonal lanes | [seen @3:28-3:36] |
| 3:36-3:40 | 05:50-05:46 | x31-x30 | Waves: four-corner variant | [seen @3:36-3:39.5] |
| 3:41 | 05:44 | x30 | **Shadow Might #7** (30%), gold shock wave @3:43.5 | [seen @3:41-3:43.5] |
| 3:46-3:59 | 05:37-05:28 | x29-x28 | Beam bursts (stand in a gap, then move to the next gap) | [seen; subtitle @3:46-3:53] |
| 4:59.5 | 05:14 | x27 | **Phantom Portals #2** | [seen @4:59.5-5:07] |
| 5:24-5:28 | 04:33-04:30 | x23 | Red/blue floor, half-and-half variant | [seen @5:23-5:28] |
| 5:36-5:38 | 04:22-04:20 | x21 | Red concentric rings | [seen @5:37-5:38] |
| 5:47 | 04:09 | x20 | **Shadow Might #8** (20%). **Below-20% enrage** from here | [seen; scan @5:47; data.js] |
| 6:20-6:43 | 03:05-02:27 | x13-x11 | Waves, red lanes, then the **"three at once" beams** (lethal) | [seen; subtitle @6:23-6:43] |
| 6:46 | 02:24 | x10 | **Shadow Might #9** (10%) | [seen; scan @6:46] |
| 6:49.5 | 02:19 | x10 | **Phantom Portals #3** | [seen @6:49.5-6:59] |
| 6:58 | 02:10 | x10 | Portals cleared ("基本上打完傳送門") | [subtitle @6:58] |
| 7:19-7:23 | 01:44 → 00:34 | x8 → x1 | Fast-forwarded to the end | [seen; subtitle @7:19] |
| 7:27-7:29 | 00:26 → 00:00 | x1 → cleared | Kill. The kill moment is cut. The clear shows about 0:26 left | [seen @7:27-7:29] |

**HP triggers.**
- **Shadow Might fires every 10 bars (10% HP).** Banners appear near x90, x80, x70, x60, x50, x40, x30, x20, and x10 `[seen: 9 banner onsets in scan.tsv at x89, x80, x67, x59, x50, x40, x30, x20, x10]`. The odd first-seen values (x89, x67, x59) fall right after video cuts `[inferred: these come from the edits, not the trigger]`.
- **Below 20% enrage.** The boss's ATK and damage reduction rise sharply below 20% `[data.js]`. The narrator says each of the last 10 bars took "almost 10 s" for his party `[subtitle @5:23-5:28]`.
- **Portals open three times.** They opened at **x46, x27, and x10**. Each wave came after the 50%, 30%, and 10% Shadow Might banners, by about 34 s, 30 s, and 3.5 s of fight clock `[seen: clock 07:40→07:06, 05:44→05:14, 02:24→02:19]`. The trigger itself is **not determined**. One reading is that the portals follow the odd-ten Shadow Might casts `[inferred: three for three, but the delay varies, so the trigger could be time-based or chance-based]`. Two narrator lines conflict on the trigger: "打到20層以下 ... 還會出一次傳送門" said while the bar showed x27, and "王20條血以下後 還會再出一次傳送門" `[subtitle @5:00-5:12]`. Neither matches the bar values on screen.
- **Time budget.** Keep **≥1:40 on the clock when the last portal wave is cleared** and the boss enters its last 10 bars. With less, "you basically can't clear" `[subtitle @5:31-5:43, @7:00-7:17]`. Keep **≥4:00** when you push it under 20 bars `[subtitle @5:14-5:17]`.
- **Deaths.** Each death costs **5 seconds** of timer `[subtitle @4:07-4:09]`.
- **DPS check.** The narrator says an average of **≥9,000,000 DPS per player** is needed to clear `[subtitle @6:16-6:18]`.

## Skill name mapping

| Official skill (data.js) | Video mechanic | Mapping confidence |
|---|---|---|
| **Abyss Gaze** (Stun on hit from any non-basic skill) | The stun shows on the **red/blue floor AoEs** | Stun [seen @0:59.5]. data.js describes a passive that applies to all skills, so "Abyss Gaze = red/blue floor" is [inferred]. The narrator calls the floor move "紅色藍色的暈眩" (red/blue stun) [subtitle @3:24] |
| **Abyssal Surge** (waves from all directions, Knockback) | **海浪 (waves)**: red lane telegraphs, then cyan water waves | High. [subtitle @1:14-1:19 "it only pushes you away"] matches Knockback |
| **Phantom Spring** (water spheres from all directions converge into a central geyser, Confuse) | **Not resolved.** Candidate A is the **tornado/vortex ring** (龍捲風) @3:11, the earlier lead. Candidate B is the **blue stripes / beam burst**, where **Confuse is seen** @1:30 | Low. See the Phantom Spring section |
| **Phantom Portals** (4 portals, minions, 20 s damage zones, boss invincible) | **傳送門**: blue floor rings, purple minions, dark puddles | High [seen @2:41.5 banner, @2:45-2:58] |
| **Shadow Might** (massive AoE ranged M.DMG at HP thresholds, stat boost, <20% enrage) | Banner "首領獲得了幽影之力，屬性大幅提升", then a gold dome or shock wave | High [seen @1:57.5, @3:10, @3:41-3:43.5] |
| Unnamed "other skills" | **Blue ball** (藍色的球, a random-target projectile); possibly the beams | See "Other skills" |

---

## 1. Abyss Gaze: red/blue floor AoEs (Stun)

**Official text.** "The Baron's skills (excluding Basic Attacks) inflict a Stun effect on hit. Dodge carefully!" Label: Move `[data.js]`.

**What the narrator says.**
- `@0:58` "然後現在的地板招藍紅這個" means "Then this current floor move, the blue-red one."
- `@1:00` "是要稍微閃避" means "You should dodge it a bit."
- `@1:02-1:05` "他不太會痛 / 甚至到後面都不會痛 / 他只是會稍微的暈眩" means "It doesn't hurt much, even later on it doesn't hurt, it just stuns you briefly."
- `@1:07-1:11` "所以如果你的輸出 / 是需要持續攻擊的話 / 被他暈到可能會有一點影響" means "So if your damage relies on attacking continuously, getting stunned costs you a bit."
- `@1:43-1:47` "再來又是這個紅藍 / 稍微閃一下不太會有傷害 / 但是會讓你降低輸出" means "Next, this red-blue one again. Dodge a bit and you take little damage, but it lowers your output."
- `@3:22-3:28` "所有的招都會比較好閃 / 像他的紅色藍色的暈眩胸(招) / 在王的四周 / 這樣子閃比較好閃" means "All moves are easier to dodge [from the boss's feet], like his red/blue stun move. Being around the boss makes it easier to dodge."

**Raid-guide steps.** Three visual variants appear in the video.

*Variant A, two big circles (blue then red)* `[seen @0:57-1:01, @5:23-5:28]`
1. A **pale blue circular zone** appears on one side of the boss. The side varies: east at 0:57.5, west at 5:24.5 `[seen]`.
2. About 0.5-1 s later, a **red circular zone** appears on the opposite side. Its rim is a bright red ring that sweeps across the arena `[seen @0:58.5, @5:25.5-5:26]`.
3. The red zone flashes full red, and players inside are **stunned**. The player at the boss's feet got "暈眩" @0:59.5 `[seen]`.
4. Each zone covers most of its half of the arena, about 60-70 units from the boss, and the two overlap near the boss `[inferred: perspective estimate]`. A small sidestep out of the zone that is about to go off avoids it `[subtitle @1:00 "稍微閃避"]`. **I could not see which colour detonates first or whether blue deals damage.** Only the stun after the red flash is confirmed.

*Variant B, rectangles* `[seen @1:41.5-1:45.2]`
1. A **blue rectangular frame** outlines a wide band across the arena south of the boss `[seen @1:41.5-1:42.5]`.
2. At about 1:42.8 a **red rectangular frame** appears. It is larger and encloses the boss and the party area. Its interior turns red at about 1:44.5-1:45.0 `[seen]`.
3. It resolves at about 1:45.2. The party stayed at the boss and the narrator calls it low damage `[subtitle @1:45]`.

*Variant C, red concentric rings* `[seen @5:37-5:38, @6:06, @2:58-3:01]`
1. Two **bright red rings** centered on the boss appear: an inner ring at about r 20-25 and an outer ring `[seen @5:37]`.
2. The outer ring **expands outward** to about r 80 or more, then the effect clears about 1 s later `[seen @5:37.5-5:38.5]`. At 2:58-3:01 a blue ring was followed by a red ring that swept outward the same way `[seen]`.
3. The party stayed stacked inside the inner ring at the boss and kept attacking `[seen]`. Whether being crossed by the ring stuns you could not be confirmed from the footage.

**What each player should do.**
- Stay at the boss's feet. From there one step clears these zones `[subtitle @3:20-3:28]`.
- Sidestep out of the coloured zone that is about to flash. Do not run far, because the damage is low `[subtitle @1:02, @1:45]`.
- Players who rely on continuous attacks (channelers, melee rotations) care most, because the stun interrupts output `[subtitle @1:07-1:11]`.

**Debuffs.**
- **Stun (暈眩).** You cannot act for a short time `[seen @0:59.5-1:00.5, red "暈眩" tag above the player for about 1 s]`. Exact duration unknown.
- Damage is low ("不太會痛") `[subtitle @1:02]`.

**Diagram spec: Abyss Gaze**
- Step 1, blue telegraph (Variant A):
  - `boss(0,0, facing=180)`
  - `player(dps,0,-12)`, `player(dps,-6,-10)`, `player(healer,6,-14)`
  - `circle(30,0,60)` colour **info** (pale blue fill, label "blue zone")
  - Note: this side flips between casts.
- Step 2, red telegraph (Variant A):
  - `circle(30,0,60)` **info** (blue)
  - `circle(-30,0,60)` **danger** (red fill, bright red rim)
  - `arrow((0,-12),(25,-25))` "small sidestep out of the zone about to flash" [inferred]
- Step 3, red detonation (Variant A):
  - `circle(-30,0,60)` **danger** (solid red, label "Stun on hit")
  - `circle(30,0,60)` **safe**, labelled "safe after blue resolves [inferred]"
- Step 4, rectangle variant (Variant B):
  - `rect(-90,-15,90,-60, width=n/a)` **info** (blue frame)
  - then `rect(-75,-35,75,55)` **danger** (red frame and fill)
  - `boss(0,0)`, party at (0,-12)
- Step 5, ring variant (Variant C):
  - `donut(0,0,20,24)` **danger** (inner red ring)
  - `donut(0,0,60,66)` **danger** with `arrow((0,66),(0,90))` "expands outward"
  - party at (0,-10) inside the inner ring, **safe**

**Image candidates.**
- `best/abyss-gaze_0057.jpg` (blue zone appears)
- `best/abyss-gaze_0058.jpg` (red zone with sweeping rim)
- `best/abyss-gaze_0059.jpg` (red flash, "暈眩" tag on the player)
- `best/abyss-gaze_0141.jpg` (blue rectangle frame)
- `best/abyss-gaze_0143.jpg` (red rectangle frame)
- `best/abyss-gaze_0525.jpg` (Variant A mirrored, blue on west)
- `best/abyss-gaze_0537.jpg` (concentric red rings)

---

## 2. Abyssal Surge: waves (Knockback)

**Official text.** "The Baron calmly waves his umbrella, elegantly summoning waves from all directions. Players hit will suffer an additional Knockback effect. Dodge carefully!" Label: Move `[data.js]`.

**What the narrator says.**
- `@1:14` "然後再來這個是海浪" means "Next, this one is the waves."
- `@1:16-1:19` "海浪這邊的話 / 也是一個不太會痛的技能 / 他只會把你推遠" means "The waves are also a skill that doesn't hurt much. It only pushes you away."
- `@1:25-1:27` "反正正常來講 / 就是一直往中間走 / 然後不用理他" means "Anyway, normally just keep walking toward the middle and ignore it."
- `@3:29-3:34` "然後海浪的話 / 他有分這種斜的 / 斜的就不閃了 / 直接給它衝完以後跑回去" means "As for waves, there's this diagonal kind. Don't bother dodging the diagonal kind. Let it push you, then run back."
- `@3:36-3:43` "那有另一種是四邊形四個角的 / 它可以上下左右去閃 / 也是站在中間最好閃 / 所以打這隻王 / 我建議是站在正中間" means "There's another kind, from the four corners of a square. You can dodge it up, down, left, or right. It's also easiest to dodge from the middle. So for this boss I recommend standing dead center."

**Raid-guide steps.**

*Diagonal-lane waves* `[seen @1:14.5-1:18.5, @1:55-1:57, @3:28-3:36, @6:20-6:24]`
1. **Red lane telegraphs** fill the floor as parallel diagonal bands with bright red-pink edge lines. They cover large strips of the arena, some crossing near the boss `[seen @1:14.5, @3:28-3:29]`.
2. About 0.5-2 s later, a **cyan water wave** enters from the arena edge and rolls along the lanes. At 1:15 it came from the east or southeast and swept west. At 3:31 it came from the east and northeast and swept toward the southwest `[seen]`. The telegraph-to-hit time was about 0.5-1 s at 1:14.5→1:15.0 and about 2 s at 3:29→3:31 `[seen]`.
3. Players in a lane are **knocked back** along the wave's direction, away from the boss `[subtitle @1:19 "他只會把你推遠"]`.
4. Walk straight back to the boss `[subtitle @1:26, @3:34]`.

*Four-corner waves* `[seen @3:36-3:39.5]`
1. Waves spawn from the **four corners of a square** around the boss. In this cast: south-west @3:36, south-east @3:38, north-west @3:38.5, north-east @3:39.5 `[seen]`. The order may differ between casts.
2. Each wave sweeps diagonally toward the center, which leaves **cardinal-direction gaps** (N, S, E, W) between them `[inferred: from "它可以上下左右去閃", you can dodge up/down/left/right]`.
3. Stand at the boss, the center, and step N, S, E, or W into whichever lane is clear `[subtitle @3:39-3:43]`.

**What each player should do.**
- Default: stand at the boss and ignore diagonal waves. If one pushes you, run back. The damage is low `[subtitle @1:17, @3:33-3:34]`.
- Four-corner version: hold the center and sidestep in a cardinal direction.
- **Do not get pushed into portal puddles or tornadoes** `[inferred: knockback plus the high-damage ground hazards]`.

**Debuffs.**
- **Knockback.** You are displaced away from the boss along the wave's travel direction `[data.js; subtitle @1:19]`. In practice you lose uptime, and melee classes lose DPS.

**Diagram spec: Abyssal Surge**
- Step 1, lane telegraph:
  - `boss(0,0)`, party at (0,-12)
  - `rect(-100,40,100,-40, width=30)` rotated 45° (NE-SW band) **danger** (red, "lane")
  - `rect(-100,-10,100,-90, width=30)` rotated 45° **danger**
  - Show 2-4 parallel diagonal bands with gaps of about 20 [inferred spacing]
- Step 2, wave arrives:
  - `line(95,30,-95,-30, width=35)` **danger** (cyan, "wave")
  - `arrow((80,25),(-60,-20))` "wave travel"
  - `arrow((0,-12),(-30,-25))` **info** "knockback on player"
- Step 3, recover:
  - `arrow((-30,-25),(0,-12))` **safe** "walk back to boss"
- Step 4, four-corner variant:
  - `boss(0,0)`, party at (0,0) to (0,-10)
  - `arrow((-70,-70),(-15,-15))`, `arrow((70,-70),(15,-15))`, `arrow((-70,70),(-15,15))`, `arrow((70,70),(15,15))`, all **danger** (cyan waves from corners)
  - `circle(0,-35,10)`, `circle(0,35,10)`, `circle(35,0,10)`, `circle(-35,0,10)` **safe** (cardinal gaps) [inferred]

**Image candidates.**
- `best/abyssal-surge_0114.jpg` (red diagonal lanes)
- `best/abyssal-surge_0115.jpg` (cyan wave enters)
- `best/abyssal-surge_0329.jpg` (dense red lane grid)
- `best/abyssal-surge_0331.jpg` (wave sweeping from the east)
- `best/abyssal-surge_0338.jpg` (four-corner waves, two visible)

---

## 3. Blue stripes / beam bursts (Confuse). The most dangerous mechanic

The narrator calls this "藍色的條紋" (blue stripes), "條狀物" (striped objects), and "一次三條" (three at once). It is **the one mechanic he says you must dodge**. It may be the official **Phantom Spring**, because Confuse is seen on it. It may instead be one of the unnamed "other skills". See section 4.

**What the narrator says.**
- `@1:28-1:32` "那再來這個藍色的條紋 / 是一定要閃的技能 / 他光第一波就很痛了" means "Next, this blue stripes one is a skill you must dodge. Just its first wave already hurts a lot."
- `@1:34-1:38` "正常來講就是往旁邊的 / 凹槽閃一下" means "Normally you dodge sideways into the gap."
- `@2:00-2:01` "這個階段的話 / 是可以跟他繞圈" means "In this phase you can circle around with it."
- `@2:20-2:26` "那只有這個階段是繞圈的 / 就是他會一條一條依序的出來 / 那其實你這樣 / 順時針繞一圈過去 / 是可以躲掉所有傷害的" means "Only this phase is the circling one. The lines come out one by one in sequence, so if you go clockwise around a full circle you can dodge all the damage."
- `@2:37-2:42` "如果你對自己的走位是有信心的 / 你可以繞圈 / ... / 走位沒什麼信心 / 那你就站在外面的縫隙" means "If you're confident in your positioning you can circle. If not, stand in the outer gap."
- `@3:46-3:55` "先站在這個凹槽 / 然後再走到這個凹槽 / 可以貪一些刀 / 那如果你夠硬的話 / 可以在兩邊跑啦 / 就種兩根 / 還不太會死" means "First stand in this gap, then walk to this gap, and you can greed some hits. If you're tanky you can run between the two sides. Taking two [beams] you still won't really die."
- `@3:58-4:07` "就像一般玩家 / 可能機體沒有那麼好的話 / 那建議站在外面這裡 / 這裡 / 就直接站出去 / 這邊就不要貪輸出了 / 因為你死掉的話會扣5秒" means "For a typical player whose build isn't strong, stand out here. Just step out, don't greed damage, because dying costs 5 seconds."
- `@4:28-4:30` "跟剛剛那個 / 順時針依次發射的條狀物" means "Same as the earlier clockwise, sequentially fired stripes."
- `@6:23-6:27` "就除了那一個一次三條的那個 / 那個真的很痛 / 那一定要閃" means "Except for that one with three at once. That one really hurts, you must dodge it."
- `@6:43-6:48` "但是第一次的三條是一定要躲掉 / 如果你站在正中間 / 應該大部分人是扛不住的" means "But the first set of three must be dodged. If you stand dead center, most people won't survive."

**Raid-guide steps.**

*Burst version* `[seen @1:28-1:33, @3:46-3:48, @3:59, @4:56]`
1. **Bright cyan beams** shoot out from the boss in a starburst covering all directions. In the frames this is about 12-16 thin beams plus a few wide ones, and they fan out to the arena edge `[seen @1:29, @3:46-3:48]`. The exact count could not be read.
2. **Gaps** (凹槽) remain between beams at mid-to-outer range `[subtitle @1:35, @3:46]`.
3. Step sideways into a gap. A tanky player can step from one gap to the next and greed hits. A fragile player should **stand out in an outer gap** and stop attacking until it ends `[subtitle @3:46-4:07]`.
4. On hit: high damage plus **Confuse**. The recording player died on the first cast at 1:33 `[seen @1:33 "死亡" (death) popup with a "原地復活" revive button]`.

*Clockwise sequential version* `[seen @1:58-2:05; subtitle @2:20-2:26]`
1. Beams fire **one at a time in clockwise order** around the boss.
2. Run **clockwise around the boss**, staying just behind the last beam fired, and every beam misses you `[subtitle @2:24-2:26]`.
3. Otherwise stand still in an outer gap `[subtitle @2:42]`.

*"Three at once" version* (late fight, about x13-x10) `[subtitle @6:23-6:48; seen @6:32-6:38]`
1. Three heavy beams fire together. The first set is lethal to most players standing at the center `[subtitle @6:43-6:48]`.
2. Dodge "first to this edge, then to this edge" `[subtitle @6:33-6:35]`. That is two sidesteps to the outer edge of the gaps.
3. **The geometry of the three (angles, width) cannot be determined** from the frames I sampled.

**What each player should do.**
- Everyone: never eat the first wave. Get into a gap.
- Fragile builds: pre-position at the outer edge of a gap and do not greed `[subtitle @3:58-4:07, @4:45]`.
- Tanky melee: gap-hop near the boss, at most "two" beam hits `[subtitle @3:51-3:54]`.
- Healers: top people up after the first wave.

**Debuffs.**
- **Confuse (混亂).** A red "混亂" tag shows above the player, plus a system message "該技能不允許釋放" ("this skill cannot be used") `[seen @1:30, @1:31.5]`. You cannot cast skills while confused, and movement may be scrambled `[inferred: RO-style Confuse; only the skill lock is visible]`.

**Diagram spec: blue stripes**
- Step 1, burst telegraph:
  - `boss(0,0)`
  - beams as `line(0,0,100cosθ,100sinθ, width=4)` for θ = 0°, 22.5°, 45° … (16 beams) **danger** (cyan). The count is [inferred]. Use 12-16.
  - Gap wedges `cone(0,0,θ+11.25°,15°,100)` between beams **safe**, strongest at r 50-90.
  - party at (0,-12)
- Step 2, dodge:
  - `arrow((0,-12),(15,-55))` **safe** "step into a gap (凹槽)"
  - `player(dps,15,-55)`
- Step 3, clockwise sequential:
  - `line(0,0,0,100, width=6)` **danger** labelled "1"
  - `line(0,0,71,71, width=6)` "2"
  - `line(0,0,100,0, width=6)` "3", and so on
  - `arrow` arc around the boss at r≈25 going **clockwise** (N→E→S→W) **safe** "follow behind the beams"
- Step 4, three at once:
  - three `line(0,0,…, width=12)` **danger**, angles unknown
  - `player` moved to the outer edge of a gap at r≈80 **safe**
  - Note: "center = death for most"

**Image candidates.**
- `best/blue-stripes_0129.jpg` (starburst)
- `best/blue-stripes_0131.jpg` ("混亂" Confuse tag)
- `best/blue-stripes_0158.jpg` (sequential beams start)
- `best/blue-stripes_0201.jpg` (sequential, mid-rotation)
- `best/blue-stripes_0348.jpg` (big burst at x28)

---

## 4. Phantom Spring: tornado / vortex ring (mapping unresolved)

**Official text.** "The Baron swings his umbrella once more, summoning water spheres from all directions that converge into a central geyser. Players hit will suffer an additional Confuse effect. Dodge carefully!" Label: Move `[data.js]`.

**The problem.** No clip shows "spheres converging into a central geyser" with certainty.
- **Candidate A (earlier lead @3:11): the tornado / vortex ring.** **Swirling cyan water vortices** appear around the arena and ring the party at mid-to-outer range `[seen @3:11-3:15]`. The text's "from all directions" fits. I did not see the vortices converge or a geyser erupt at the center. The party stood at the boss center and kept attacking unharmed through it `[seen @3:12-3:18]`. That **argues against** a central geyser, or means it is aimed elsewhere. The narrator calls it "龍捲風" (tornado), says it "hurts quite a lot", and says don't get caught `[subtitle @3:12-3:15]`. Large cyan swirls also appear at the sides @5:40 and @6:10 `[seen]`.
- **Candidate B: the blue stripes (section 3).** The **Confuse debuff matches** `[seen @1:30]`, but the shape (beams radiating outward) does not match "converging spheres".
- **Verdict.** The mapping is **undetermined**. Call the tornado Phantom Spring only with this caveat. Phantom Spring is the only official skill with Confuse, and Confuse is confirmed on the beams.

**What the narrator says.**
- `@3:12` "這個哦還有這個龍捲風" means "There's also this tornado."
- `@3:13` "龍捲風的話還蠻痛的" means "The tornado hurts quite a lot."
- `@3:15` "所以建議就是不要被他捲到" means "So don't get caught by it."
- `@3:18-3:20` "所以這關即使是遠距離 / 我都是建議站在王的腳下去打" means "So in this stage, even ranged classes should stand at the boss's feet."

**Raid-guide steps (tornado as seen).**
1. The boss casts, and **6-8 cyan vortices** form in a loose ring around the boss at about r 45-85 `[seen @3:11.5-3:15; count inferred from the visible screen area]`.
2. They persist for about 4-6 s `[seen @3:11-3:16]`, then fade `[seen @3:16.5]`.
3. Stay stacked at the boss. The center ring inside about r 35 stayed clear `[seen]`.
4. Do not get knocked into a vortex by a wave `[inferred]`.

**Debuffs.** Confuse per data.js, if this is Phantom Spring. No debuff tag was visible on the player during the tornado `[seen @3:11-3:18: no tag observed]`.

**Diagram spec: Phantom Spring (tornado)**
- Step 1, vortices form:
  - `boss(0,0)`, party at (0,-10)
  - `circle(rcosθ, rsinθ, 14)` for 8 positions θ = 0°, 45° … at r = 65 **danger** (cyan swirl)
  - `circle(0,0,35)` **safe** "stack at boss"
- Step 2, optional convergence (data.js text, **not seen**):
  - `arrow` from each vortex toward (0,0) **info** dashed, "per official text, converge, not observed"
  - `circle(0,0,15)` **danger** dashed "geyser? (unconfirmed)"
- Step 3, resolve:
  - vortices removed; party unchanged.

**Image candidates.**
- `best/phantom-spring_0312.jpg` (vortices forming)
- `best/phantom-spring_0313.jpg` (full vortex ring)
- `best/phantom-spring_0315.jpg` (party safe at center)

---

## 5. Phantom Portals (boss Invincible)

**Official text.** "The Baron opens 4 otherworldly portals that continuously spawn minions. Defeated minions leave behind a damaging zone that lasts for 20s. While the portals are active, the Baron is Invincible. Prioritize destroying the portals to stop the minions!" Label: Focus on Solving. Warning banner: "Destroy all portals to break the Boss's invulnerability!" `[data.js]`. On screen in Chinese: "擊殺所有傳送門以解除Boss的無敵!" `[seen @2:41.5, @5:00, @6:50]`.

**What the narrator says.**
- `@2:44` "然後這個地方就是打傳送門" means "Then here it's the portals."
- `@2:46-2:47` "傳送門的話 / 其實沒有到非常的痛" means "The portals don't actually hurt that much."
- `@2:48-2:52` "但是他配合的這個藍球 / 有沒有剛剛有一顆藍色的球 / 很快啊那個很痛 / 非常痛" means "But combined with this blue ball (see, there was just a blue ball), it's fast and it really hurts."
- `@2:53-2:55` "那他有時候會亂目標了 / 所以補師要去盯他的血量" means "Sometimes it targets randomly, so healers must watch HP."
- `@2:57-3:06` "然後再來就是傳送點的那個黑水 / 如果那個人 / 剛好又被藍色的球砸到的話 / 可能啊就會暴斃 / 所以這個要稍微注意一下" means "Next is the black water at the portal spots. If that person also gets hit by the blue ball, they may die instantly, so be careful."
- `@5:00-5:21` "接著就是打到20層以下的時候 / 我們會去換引擎 / 然後這個階段 / 還會出一次傳送門 / 然後接著在大概 / 王20條血以下後 / 還會再出一次傳送門 / ... / 傳送門會蠻浪費時間的" means "Next, when you get below 20 [bars], we swap engines [a gear set]. In this phase portals appear once more. Then at around 20 bars and below they come out again. Portals waste a lot of time."
- `@6:52-7:02` "OK那個傳送門 / 有沒有還剩2分15秒 / 基本上打完傳送門 / 還要留個1分40秒 / 比較好去通關了啦" means "OK, the portals. See, 2:15 left. After clearing the portals you want 1:40 left to clear comfortably."

**Raid-guide steps.**
1. The banner "Destroy all portals to break the Boss's invulnerability!" appears. The boss becomes **Invincible** `[seen @2:41.5; data.js]`. A **gold burst dome** expands across the arena right after the first portal cast `[seen @2:44]`. Whether this burst belongs to the portals or to Shadow Might is unclear.
2. **Four portals** appear as glowing **blue rings on the floor**, spread around the boss at mid-to-outer radius `[data.js: 4; seen @2:45, @6:50-6:53: up to three visible at once, to the left, upper-right, and lower-right of the boss on screen]`. The exact layout cannot be determined. Placing them on the four diagonals is `[inferred]`.
3. Portals keep spawning **minions: dark purple orbs** that drift toward the party `[seen @2:47-2:50, @5:03-5:06, @6:55-6:59]`.
4. Killed minions leave a **dark purple / black puddle (黑水)** that damages anyone standing in it for **20 s** `[data.js; seen @2:47-2:50, @6:56-6:59 purple pools under the party; subtitle @2:57]`.
5. During the portal phase the boss keeps throwing the **blue ball** at random targets `[subtitle @2:48-2:55]`. Ball damage plus puddle damage can **one-shot** a player `[subtitle @3:01-3:04]`.
6. The party splits to destroy all four portals. Invincibility ends, and you return to the boss `[data.js; seen @6:52 the player running between portals]`. Duration: the third wave went from **clock 02:19 to about 02:10**, about 9 s `[seen @6:49.5; subtitle @6:58]`. The first two cannot be timed because of the edits.

**What each player should do.**
- DPS: kill portals first, not minions, and not the boss, which is immune `[data.js]`.
- Do not fight minions on top of the party. Their death puddles last 20 s `[data.js]`. Step out of puddles before you keep fighting `[subtitle @2:57-3:06]`.
- Healers: watch for the blue ball on random targets `[subtitle @2:55]`.
- Pace the fight. When the last portal wave is cleared, have **≥1:40** left on the clock `[subtitle @5:31-5:43, @7:00]`.

**Debuffs.** None named. Invincible applies to the boss. The puddles deal damage over time `[data.js]`.

**Diagram spec: Phantom Portals**
- Step 1, portals open:
  - `boss(0,0)` with a gold shield ring `donut(0,0,10,13)` **info** "Invincible"
  - `portal(-55,45)`, `portal(55,45)`, `portal(-55,-45)`, `portal(55,-45)` (diagonal placement [inferred])
  - party at (0,-12)
- Step 2, minions spawn:
  - `minion` ×2 near each portal moving toward the party
  - `arrow(portal → party)` **danger**
- Step 3, kill portals:
  - party split: `player(dps,-50,40)`, `player(dps,50,40)`, `player(dps,-50,-40)`, `player(dps,50,-40)`, `player(healer,0,-10)`
  - `arrow` from the center to each portal **safe** "go break portals"
- Step 4, puddles:
  - `puddle(x,y,10)` at each minion death point **danger**, label "20 s"
  - blue-ball impact `circle(px,py,12)` **danger** on a random player [inferred size]
- Step 5, invincibility drops:
  - portals removed; gold shield removed; `arrow` everyone back to the boss **safe**

**Image candidates.**
- `best/phantom-portals_0245.jpg` (blue portal ring, banner)
- `best/phantom-portals_0247.jpg` (purple minions and puddle)
- `best/phantom-portals_0505.jpg` (second wave, purple puddles)
- `best/phantom-portals_0652.jpg` (three portals visible)
- `best/phantom-portals_0656.jpg` (portal kill on a purple pool)

---

## 6. Shadow Might (HP-threshold AoE, stat boost, <20% enrage)

**Official text.** "Upon losing a certain amount of HP, the Shadow Owl Duke deals massive AoE Ranged M.DMG and gains Attribute boosts. When its HP falls below 20%, its damage output and DMG Reduction are significantly increased." Warning banner: "The Boss has gained Shadow Might, its attributes greatly boosted!" `[data.js]`. On screen in Chinese: "首領獲得了幽影之力，屬性大幅提升" `[seen @1:57.5, @3:41]`.

**What the narrator says.**
- `@1:49` "再來王就會越來越強了" means "After that the boss gets stronger and stronger."
- `@5:23-5:37` "然後最後10條的血量 / 我們當時打的時候是一條 / 大概要快10秒左右 / 所以我都會算 / 進入最底部10條血的時候 / 還需要有1分40秒左右 / 我們才有辦法去通關" means "For the last 10 bars, one bar took almost 10 seconds for us. So I calculate that you need about 1:40 left when you enter the bottom 10 bars to clear."
- `@5:45-5:47` "這邊我會換致命終結啊 / 因為要進入20條了" means "Here I switch to Fatal Finish, because we're entering 20 bars."

**Raid-guide steps.**
1. Every **10% HP** (x90, x80 … x10), the warning banner appears `[seen: 9 onsets]`.
2. A **gold dome or shock wave** expands from the boss across the whole arena. This is the massive ranged AoE `[seen @3:10 gold dome, @3:43.5 gold wave front sweeping the arena, @2:44 and @6:50 large gold sphere]`. It covers the whole arena. No safe spot is visible `[inferred: the wave reaches the arena edge]`.
3. The boss gains stats, cumulatively `[data.js]`. Below **20%** (banner @5:47, clock 04:09) its damage and damage reduction rise sharply, so the kill slows to about 10 s per bar `[data.js; subtitle @5:28]`.

**What each player should do.**
- Everyone: be topped up before each 10% threshold. Use a defensive or heal cooldown on the banner `[inferred: unavoidable arena-wide damage]`.
- DPS: save burst and execute tools for the last 20%. The narrator swaps to "致命終結" (Fatal Finish) at x20 `[subtitle @5:45]`.
- Raid lead: track the clock against bars. Keep ≥4:00 at x20 and ≥1:40 at x10 after the portals `[subtitle @5:14-5:17, @5:31-5:43]`.

**Debuffs.** None on players. A boss buff (attribute boost) stacks with each trigger `[data.js]`.

**Diagram spec: Shadow Might**
- Step 1, banner:
  - `boss(0,0)`, party at (0,-12)
  - text overlay "Shadow Might, every 10% HP" **info**
- Step 2, AoE:
  - `circle(0,0,100)` **danger** (gold fill)
  - `donut(0,0,85,100)` bright gold rim with `arrow((0,20),(0,95))` "expanding wave"
- Step 3, enrage below 20%:
  - `boss(0,0)` with a red aura `donut(0,0,10,16)` **danger**, label "<20%: ↑DMG, ↑DMG reduction (~10 s per 1%)"

**Image candidates.**
- `best/shadow-might_0157.jpg` (banner text)
- `best/shadow-might_0310.jpg` (gold dome)
- `best/shadow-might_0343.jpg` (gold wave front)
- `best/shadow-might_0244.jpg` (gold burst during portal open)

---

## 7. Other skills (data.js "others") and the blue ball

data.js lists 7 unnamed or basic entries. The ones with a range of 100 are listed in the same unit. Each is matched against what the video shows.

| # | Element | Dmg % | Warning | Best video match | Confidence |
|---|---|---|---|---|---|
| 1 | Neutral | 500 | none | **Basic Attack** (named in data.js) | [data.js] |
| 2 | Ghost | 500 | none | Possibly the red/blue floor (low damage, stun) | [inferred: the narrator calls the floor low damage] |
| 3 | Ghost | 1200 | none | Possibly the waves or beams | undetermined |
| 4 | Ghost | 1800 | none | Possibly the **blue ball** ("很痛, 非常痛") or the "three at once" beams | [inferred: these are the two hits the narrator calls very painful] |
| 5 | Ghost | none | "Destroy all portals to break the Boss's invulnerability!" | **Phantom Portals** | [data.js warning text matches the banner seen @2:41.5] |
| 6 | Ghost | none | none | A non-damaging cast, possibly a summon or vortex setup | undetermined |
| 7 | Ghost | 800 | "The Boss has gained Shadow Might…" | **Shadow Might AoE** | [data.js warning matches the banner seen @1:57.5] |

**Blue ball (藍色的球).**
- Besides basic attacks, the boss throws a blue ball that hurts a lot `[subtitle @0:54-0:56]`. It is fast, very painful, and **sometimes targets randomly** `[subtitle @2:50-2:55]`.
- A blue-violet orb followed by a pink-white impact burst on the party is visible at about 2:50-2:51. The narrator says "see, there was just a blue ball" `[seen @2:50.5-2:51; identified by subtitle]`. I could not isolate a clean telegraph (a target marker or travel time) for it.
- Diagram: `circle(px,py,12)` **danger** on a random player, with `arrow((0,0),(px,py))` **info** "fast projectile".

---

## Overall positioning rule (from the narrator)

- **Stack at the boss's feet, even as ranged** `[subtitle @3:18-3:22, @3:42-3:43 "我建議是站在正中間"]`. From there the red/blue floor, the waves, and the vortices are all easy to step out of.
- **Exception: blue stripes / beams.** Move to a gap. Fragile players go to the **outer** gap and stop attacking `[subtitle @3:58-4:07]`.
- Carry composition: for 3S, "4 carry 1" is about the minimum. "3 carry 2 still wipes easily" `[subtitle @0:34-0:37]`. The narrator's group cleared in 8:19 with three heavily geared players `[subtitle @0:27-0:30]`. The shown run ended with about 0:26 left, so it is a different, slower run `[seen @7:27]`.

## Web search

I searched for 幽影鴞梟首領, 男爵夜宴 with 攻略, and "Shadow Owl Duke Baron's Night Banquet". No guide for this fight came up. The only loosely related hit was a Divine Pride map page listing "Owl Duke" monsters from classic RO, a different game: https://archive.divine-pride.net/database/map/tha_t05. Nothing here relies on web sources.

## Open uncertainties

1. **Phantom Spring mapping.** Confuse is seen on the blue stripes (beams). The earlier lead pointed at the tornado, and no converging spheres or central geyser were observed.
2. **Portal trigger.** Portals were seen at x46, x27, and x10, each after the 50%, 30%, and 10% Shadow Might. Whether HP or a timer triggers them is not determined, and the narrator's "20 bars" lines conflict with the on-screen bars.
3. **Portal layout.** The count of 4 comes from data.js. Up to three are visible at once, and their exact positions are not determinable.
4. **Exact geometry.** All radii and angles are perspective estimates. Beam counts and the "three at once" angles are unknown. The red/blue detonation order is not confirmed.
5. **Debuff durations** (Stun, Confuse) and telegraph timings are only roughly measured (about 0.5-2 s).
