// Source: 阿萬's mechanics video (jPYYMamAacg) for what happens, roworlddb for official skill text.
window.GUIDE = {
  boss: {
    name: "Shadow Owl Duke", nameZh: "幽影鴞梟首領",
    dungeon: "Baron's Night Banquet", dungeonTh: "งานเลี้ยงยามค่ำของบารอน", dungeonZh: "男爵夜宴",
    mode: "Final Mirage", level: 95, element: "Ghost", race: "Demon", size: "Large",
    hp: 200000000, party: "1–5", timeLimit: "10:00", art: "img/boss.webp",
    grades: [["D", 5], ["C", 10], ["B", 20], ["A", 40], ["S", 65], ["SS", 80], ["SSS", 100]],
  },
  // Weekly element loadout, from roworlddb's element counter table and card database.
  loadout: {
    "rotation": {
      "start": 1792965600,
      "period": 604800,
      "order": [
        "Ghost",
        "Undead",
        "Water",
        "Earth",
        "Fire",
        "Wind"
      ]
    },
    "note": "Only the boss's defense element rotates each week; its skills always deal Ghost damage, so Ghost damage reduction helps every week.",
    "elementIcons": {
      "Ghost": "img/loadout/ghost.webp",
      "Undead": "img/loadout/undead.webp",
      "Water": "img/loadout/water.webp",
      "Earth": "img/loadout/earth.webp",
      "Fire": "img/loadout/fire.webp",
      "Wind": "img/loadout/wind.webp"
    },
    "elements": {
      "Ghost": {
        "use": "Ghost",
        "mult": "150%",
        "how": "Ghost skills only, such as the Mage line's Napalm Beat and Soul Strike or High Wizard's Napalm Vulcan; no item gives Ghost. Any non-Neutral attack (for example Red Blood) still lifts Neutral's 70% to 100%.",
        "cards": [
          {
            "name": "Whisper Card",
            "slot": "Accessory card",
            "effect": "Ghost DMG% +3%~5%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12633004",
            "icon": "img/loadout/whisper.webp"
          }
        ],
        "item": "Ghost skills"
      },
      "Undead": {
        "use": "Holy",
        "mult": "175%",
        "how": "A Priest's Aspersio gives the party a Holy weapon (and +8% vs Demon), or use Holy skills. Without a Priest, Red Blood (Fire) reaches 150%.",
        "cards": [
          {
            "name": "Cookie Card",
            "slot": "Accessory card",
            "effect": "Holy DMG% +3%~5%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12833034",
            "icon": "img/loadout/cookie.webp"
          }
        ],
        "item": "Aspersio"
      },
      "Water": {
        "use": "Wind",
        "mult": "175%",
        "how": "Wind of Verdure (Element Conversion, Supply Shop), or Wind skills.",
        "cards": [
          {
            "name": "Drainliar Card",
            "slot": "Weapon card",
            "effect": "DMG vs Water% +9%~15%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12933038",
            "icon": "img/loadout/drainliar.webp"
          },
          {
            "name": "Rotar Zairo Card",
            "slot": "Weapon card",
            "effect": "Wind DMG% +4.80%~8%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12933037",
            "icon": "img/loadout/rotar-zairo.webp"
          },
          {
            "name": "Creamy Card",
            "slot": "Accessory card",
            "effect": "Wind DMG% +3%~5%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12833001",
            "icon": "img/loadout/creamy.webp"
          }
        ],
        "item": "Wind of Verdure"
      },
      "Earth": {
        "use": "Fire",
        "mult": "175%",
        "how": "Red Blood (Element Conversion, Supply Shop), or Fire skills. Swordman's Magnum Break also sets Fire for 10 sec.",
        "cards": [
          {
            "name": "Injustice Card",
            "slot": "Weapon card",
            "effect": "DMG vs Earth% +9%~15%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=13033020",
            "icon": "img/loadout/injustice.webp"
          },
          {
            "name": "Goblin Steamrider Card",
            "slot": "Weapon card",
            "effect": "Fire DMG% +4.80%~8%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12933036",
            "icon": "img/loadout/goblin-steamrider.webp"
          },
          {
            "name": "Joker Card",
            "slot": "Accessory card",
            "effect": "Fire DMG% +3%~5%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=13033054",
            "icon": "img/loadout/joker.webp"
          }
        ],
        "item": "Red Blood"
      },
      "Fire": {
        "use": "Water",
        "mult": "175%",
        "how": "Crystal Blue (Element Conversion, Supply Shop), or Water skills.",
        "cards": [
          {
            "name": "Vadon Card",
            "slot": "Weapon card",
            "effect": "DMG vs Fire% +9%~15%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12933042",
            "icon": "img/loadout/vadon.webp"
          },
          {
            "name": "Miyabi Doll Card",
            "slot": "Weapon card",
            "effect": "Water DMG% +4.80%~8%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=13033112",
            "icon": "img/loadout/miyabi-doll.webp"
          },
          {
            "name": "Poporing Card",
            "slot": "Accessory card",
            "effect": "Water DMG% +3%~5%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12833008",
            "icon": "img/loadout/poporing.webp"
          }
        ],
        "item": "Crystal Blue"
      },
      "Wind": {
        "use": "Earth",
        "mult": "175%",
        "how": "Green Live (Element Conversion, Supply Shop), or Earth skills.",
        "cards": [
          {
            "name": "Mandragora Card",
            "slot": "Weapon card",
            "effect": "DMG vs Wind% +9%~15%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12833003",
            "icon": "img/loadout/mandragora.webp"
          },
          {
            "name": "Pitman Card",
            "slot": "Weapon card",
            "effect": "Earth DMG% +4.80%~8%",
            "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=13033097",
            "icon": "img/loadout/pitman.webp"
          }
        ],
        "item": "Green Live"
      }
    },
    "always": [
      {
        "name": "Strouf Card",
        "slot": "Weapon card",
        "effect": "DMG vs Demon% +12%~20%",
        "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12933048",
        "icon": "img/loadout/strouf.webp"
      },
      {
        "name": "Minorous Card",
        "slot": "Weapon card",
        "effect": "DMG vs Large% +10.80%~18%",
        "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=12933044",
        "icon": "img/loadout/minorous.webp"
      },
      {
        "name": "Revived Abysmal Knight Card",
        "slot": "Weapon card",
        "effect": "Damage to Boss, MVP, and Mini monsters +10%",
        "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=13033048",
        "icon": "img/loadout/revived-abysmal-knight.webp"
      }
    ],
    "defense": [
      {
        "name": "Constant Card",
        "slot": "Cape card",
        "effect": "Ghost DMG Reduction% +7.20%~12%",
        "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=13033122",
        "icon": "img/loadout/constant.webp"
      },
      {
        "name": "Elder Card",
        "slot": "Cape card",
        "effect": "Ghost DMG Reduction% +6%~10%",
        "url": "https://www.roworlddb.com/sea/items/?lang=en-US#id=13033055",
        "icon": "img/loadout/elder.webp"
      }
    ]
  },
  party: [
    { id: "T", name: "Tank" }, { id: "H", name: "Healer" },
    { id: "D1", name: "DPS 1" }, { id: "D2", name: "DPS 2" }, { id: "D3", name: "DPS 3" },
  ],
  intro: "The Baron is a 10-minute damage race. Your chest grade is the share of his 200M HP you remove, so SSS means killing him. Most of his attacks barely hurt; they cost you time through stuns, knockbacks and invincible phases. Two things kill: the blue beams, and the blue ball landing on someone standing in a puddle.",
  pacing: [
    ["At 20% HP", "4:00 or more left on the clock"],
    ["Last portals broken (around 10%)", "1:40 or more left"],
    ["Each death", "costs 5 seconds"],
    ["Damage needed", "about 9M DPS per player"],
  ],
  timelineNote: "Order seen in one recorded run. The 10% Shadow Might steps are fixed; the rest may shuffle.",
  // [boss HP %, section key, short label, [step index, variant index] the event jumps to]
  timeline: [
    [100, "position", "Pull", [0]],
    [96, "abyss-gaze", "Red/blue floor", [0, 0]], [90, "shadow-might", "Shadow Might", [0]], [84, "abyssal-surge", "Diagonal waves", [0]],
    [80, "shadow-might", "Shadow Might", [0]], [78, "blue-beams", "Beam burst", [0]], [70, "shadow-might", "Shadow Might", [0]],
    [69, "abyss-gaze", "Rectangles", [0, 1]], [60, "shadow-might", "Shadow Might", [0]], [55, "abyssal-surge", "Waves", [0]],
    [50, "shadow-might", "Shadow Might", [0]], [49, "blue-beams", "Clockwise beams", [1, 0]], [46, "phantom-portals", "Portals 1/3", [0]],
    [44, "abyss-gaze", "Rings", [1]], [40, "shadow-might", "Shadow Might", [0]], [37, "phantom-spring", "Vortex ring", [0]],
    [33, "abyssal-surge", "Diagonal waves", [0]], [31, "abyssal-surge", "Corner waves", [2]], [30, "shadow-might", "Shadow Might", [0]],
    [29, "blue-beams", "Beam bursts", [0]], [27, "phantom-portals", "Portals 2/3", [0]], [23, "abyss-gaze", "Two circles", [0, 0]],
    [21, "abyss-gaze", "Rings", [1]], [20, "shadow-might", "Shadow Might, enrage", [1]], [13, "abyssal-surge", "Waves", [0]],
    [12, "blue-beams", "Three at once", [1, 1]], [10, "shadow-might", "Shadow Might", [0]], [10, "phantom-portals", "Portals 3/3", [0]],
  ],
  sections: [
    {
      key: "position", name: "Where to Stand", nameTh: "ตำแหน่งยืน", tags: [],
      intro: "One rule covers most of the fight.",
      clip: { src: "clips/position.mp4", poster: "clips/position.jpg", at: "3:16", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=196s" },
      steps: [
        { text: ["Stack at the Baron's feet, ranged classes included.", "From here the floor AoEs, the waves and the vortices are each one step away. The narrator plays a ranged class and still stands here."],
          img: "diagrams/position_01.png" },
      ],
    },
    {
      key: "abyss-gaze", name: "Abyss Gaze", nameTh: "สายตาอเวจี", tags: ["Move"], tagsTh: ["ระวังตำแหน่ง"],
      intro: "The red and blue floor. It barely hurts, but red stuns you, and a stun costs damage.",
      skill: {
        en: "The Baron's skills (excluding Basic Attacks) inflict a Stun effect on hit. Dodge carefully!",
        th: "สกิลทั่วไป (ไม่ใช่โจมตีปกติ) ของบารอนเมื่อ HIT จะทำให้ติดสตั๊น โปรดหลบหลีก",
      },
      mapNote: "The game words this as stun-on-hit for every skill. In the video the stun shows on this floor attack, which the narrator calls the red/blue stun.",
      clip: { src: "clips/abyss-gaze.mp4", poster: "clips/abyss-gaze.jpg", at: "0:52", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=52s" },
      steps: [
        { text: ["Blue and red zones light up on the floor. The red part flashes and stuns anyone inside.", "Take one step out of red if one step clears it. If it doesn't, stay on the boss and keep attacking: the damage is low."],
          variants: [
            { label: "Two circles", img: "diagrams/abyss-gaze_01a.png", bullets: ["Blue on one side, red on the other. The sides swap between casts.", "Step out of red, toward the blue side."] },
            { label: "Rectangles", img: "diagrams/abyss-gaze_01b.png", clip: { src: "clips/abyss-gaze-rect.mp4", poster: "clips/abyss-gaze-rect.jpg", at: "1:40", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=100s" }, bullets: ["A blue band, then a larger red frame.", "In the video the party stayed on the boss and took it."] },
          ] },
        { text: ["Red rings appear around the Baron, and the outer ring sweeps out to the edge.", "Stay inside the inner ring, tight on the boss."],
          img: "diagrams/abyss-gaze_02.png", clip: { src: "clips/abyss-gaze-rings.mp4", poster: "clips/abyss-gaze-rings.jpg", at: "5:35", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=335s" }, note: "The video doesn't show whether the sweeping ring stuns." },
      ],
      statuses: [
        { name: "Stun", nameTh: "สตั๊น", desc: "Cannot act for about a second.", bullets: ["Hurts builds that attack non-stop the most. The narrator singles them out."] },
      ],
    },
    {
      key: "shadow-might", name: "Shadow Might", nameTh: "พลังเงาเร้น", tags: [],
      intro: "Every 10% of his HP the Baron powers up and hits the whole arena.",
      skill: {
        en: "Upon losing a certain amount of HP, the Shadow Owl Duke deals massive AoE Ranged M.DMG and gains Attribute boosts. When its HP falls below 20%, its damage output and DMG Reduction are significantly increased.",
        th: "ทุกครั้งที่ HP ลดลงถึงระดับหนึ่ง Shadow Owl Duke Leader จะ M.DMG ระยะไกลเป็นวงกว้างมาก พร้อมกับเพิ่มคุณสมบัติให้ตัวเอง นอกจากนี้ เมื่อ HP ต่ำกว่า 20% ATK และการลด DMG จะเพิ่มขึ้นอย่างมหาศาล",
      },
      warning: "The Boss has gained Shadow Might, its attributes greatly boosted!",
      clip: { src: "clips/shadow-might.mp4", poster: "clips/shadow-might.jpg", at: "3:39", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=219s" },
      steps: [
        { text: ["At 90%, 80% and every 10% after, the banner appears and a gold shockwave covers the whole arena. There is no safe spot.", "Be topped up before each 10% mark."],
          img: "diagrams/shadow-might_01.png" },
        { text: ["Each cast buffs him for the rest of the fight. Below <b>20%</b> his damage and damage reduction jump. In the video, one 1% bar took about 10 seconds.", "Save burst and execute skills for the last 20%."],
          img: "diagrams/shadow-might_02.png", clip: { src: "clips/shadow-might-enrage.mp4", poster: "clips/shadow-might-enrage.jpg", at: "5:43", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=343s" }, },
      ],
    },
    {
      key: "abyssal-surge", name: "Abyssal Surge", nameTh: "คลื่นคะนองจากห้วงลึก", tags: ["Move"], tagsTh: ["ระวังตำแหน่ง"],
      intro: "Red lanes, then water. It only pushes you.",
      skill: {
        en: "The Baron calmly waves his umbrella, elegantly summoning waves from all directions. Players hit will suffer an additional Knockback effect. Dodge carefully!",
        th: "บารอนกวัดแกว่งไม้เท้าร่มอย่างสง่างาม เรียกคลื่นลมจำนวนมากจากทุกทิศทาง ผู้เล่นที่โดน HIT จะได้รับเอฟเฟกต์ผลักกระเด็นเพิ่มเติม ระวังหลบหลีกให้ดี",
      },
      clip: { src: "clips/abyssal-surge.mp4", poster: "clips/abyssal-surge.jpg", at: "3:26", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=206s" },
      steps: [
        { text: ["Red lanes cross the floor diagonally. Half a second to two seconds later, a cyan wave rolls along them from the edge."], img: "diagrams/abyssal-surge_01.png" },
        { text: ["Ignore the diagonal waves. If one knocks you back, walk straight back to the Baron."], img: "diagrams/abyssal-surge_02.png",
          note: "Don't let a wave carry you into a portal puddle or a vortex." },
        { text: ["The other kind comes from the four corners of a square around him. Step north, south, east or west into the gap between them."], img: "diagrams/abyssal-surge_03.png", clip: { src: "clips/abyssal-surge-corner.mp4", poster: "clips/abyssal-surge-corner.jpg", at: "3:34", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=214s" }, },
      ],
      statuses: [
        { name: "Knockback", nameTh: "ผลักกระเด็น", desc: "Pushes you along the wave, away from the boss.", bullets: ["Low damage. The cost is the walk back, which hurts melee uptime."] },
      ],
    },
    {
      key: "blue-beams", name: "Blue Beams", nameTh: "ลำแสงสีฟ้า", nameZh: "藍色條紋", tags: ["Must dodge"],
      intro: "The one attack you must dodge. The first wave alone hurts a lot, and the player in the video dies to it at 78%.",
      unofficial: "Not named in the skill list. The narrator calls it 藍色的條紋, blue stripes. It applies Confuse, the effect the game lists under Phantom Spring.",
      clip: { src: "clips/blue-beams.mp4", poster: "clips/blue-beams.jpg", at: "1:27", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=87s" },
      steps: [
        { text: ["Beams burst out of the Baron in every direction. Step sideways into a gap, out at mid range where the gaps are wider.",
                 "Fragile builds: stand in an outer gap and stop attacking until it ends. A death costs 5 seconds.",
                 "Strong builds can hop from gap to gap and keep attacking. The narrator says two beams won't kill them."],
          img: "diagrams/blue-beams_01.png" },
        { text: ["Two later versions change the dodge."],
          variants: [
            { label: "One by one, clockwise", img: "diagrams/blue-beams_02a.png", clip: { src: "clips/blue-beams-clockwise.mp4", poster: "clips/blue-beams-clockwise.jpg", at: "1:58", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=118s" }, bullets: ["Seen around 49%.", "Confident: run clockwise right behind the beams as they fire.", "Not confident: stand still in an outer gap."] },
            { label: "Three at once", img: "diagrams/blue-beams_02b.png", clip: { src: "clips/blue-beams-three.mp4", poster: "clips/blue-beams-three.jpg", at: "6:29", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=389s" }, bullets: ["Seen around 12%.", "Most players standing in the centre die to the first set.", "Move out to the edge of a gap, then to the next edge."] },
          ],
          note: "Beam counts and the three-beam angles are illustrative. The video doesn't show them clearly." },
      ],
      statuses: [
        { name: "Confuse", nameTh: "สับสน", desc: "Skills are locked: \"this skill cannot be used\".", bullets: ["Movement may also scramble, as with RO's Confuse. Only the skill lock shows in the video."] },
      ],
    },
    {
      key: "phantom-portals", name: "Phantom Portals", nameTh: "อุบายประตูมิติ", tags: ["Focus on Solving"], tagsTh: ["ตั้งใจไขปริศนา"],
      intro: "Three times in the recorded run the Baron goes invincible and opens portals. This is where SSS runs lose their time.",
      skill: {
        en: "The Baron opens 4 otherworldly portals that continuously spawn minions. Defeated minions leave behind a damaging zone that lasts for 20s. While the portals are active, the Baron is Invincible. Prioritize destroying the portals to stop the minions!",
        th: "บารอนจะเปิดประตูวาร์ปต่างมิติ 4 บานเพื่อเรียกสมุนออกมาไม่หยุด เมื่อสมุนถูกกำจัดจะทิ้งพื้นที่สร้าง DMG ต่อเนื่องไว้บนพื้นเป็นเวลา 20s ขณะที่ประตูวาร์ปยังอยู่ บารอนจะเป็นอมตะ ควรรีบทำลายประตูวาร์ปเป็นอันดับแรกเพื่อหยุดการเกิดของสมุน",
      },
      warning: "Destroy all portals to break the Boss's invulnerability!",
      clip: { src: "clips/phantom-portals.mp4", poster: "clips/phantom-portals.jpg", at: "2:41", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=161s" },
      steps: [
        { text: ["The banner reads <em>Destroy all portals to break the Boss's invulnerability!</em> Four portals open on the floor as blue rings."],
          img: "diagrams/phantom-portals_01.png", note: "Portal positions are approximate. At most three were on screen at once in the video." },
        { text: ["Split up and break the portals, then the last one together. Hitting the Baron does nothing, and minions keep coming until the portals break.",
                 "Keep minions away from the group and watch HP. The Baron throws a fast blue ball at random players."],
          img: "diagrams/phantom-portals_02.png" },
        { text: ["Killed minions leave a dark puddle for <b>20 s</b>. The blue ball plus a puddle can kill outright, so step out of puddles before you keep hitting."],
          img: "diagrams/phantom-portals_03.png", note: "In this example, D2 stands in a puddle and takes the blue ball." },
        { text: ["When the last portal breaks, everyone goes back to his feet.", "After the third set, around 10%, you want at least 1:40 left on the clock."],
          img: "diagrams/phantom-portals_04.png", clip: { src: "clips/phantom-portals-last.mp4", poster: "clips/phantom-portals-last.jpg", at: "6:50", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=410s" }, },
      ],
    },
    {
      key: "phantom-spring", name: "Phantom Spring", nameTh: "คุกธาราเนตรทมิฬ", tags: ["Move"], tagsTh: ["ระวังตำแหน่ง"],
      intro: "A ring of water vortices. Stay inside it.",
      skill: {
        en: "The Baron swings his umbrella once more, summoning water spheres from all directions that converge into a central geyser. Players hit will suffer an additional Confuse effect. Dodge carefully!",
        th: "บารอนกวัดแกว่งร่มอีกครั้ง เรียกบอลน้ำจากทุกทิศทางแล้วรวมเป็นเสาน้ำพุ่งโจมตีที่ใจกลาง ผู้เล่นที่โดน HIT จะได้รับเอฟเฟกต์สับสนเพิ่มเติม ระวังหลบหลีกให้ดี",
      },
      mapNote: "Matched by the water spheres in the skill text. The converging geyser it describes never appears in the video, and no Confuse shows on players during it.",
      clip: { src: "clips/phantom-spring.mp4", poster: "clips/phantom-spring.jpg", at: "3:11", url: "https://www.youtube.com/watch?v=jPYYMamAacg&t=191s" },
      steps: [
        { text: ["Six to eight water vortices form a ring around the Baron at mid range and stay for a few seconds. They hurt a lot.", "The centre stays clear. Stay stacked at his feet."],
          img: "diagrams/phantom-spring_01.png" },
      ],
    },
  ],
  faq: [
    { tag: "General", q: "Why stand at his feet as a ranged class?", a: "Everything except the beams is one step away from there, and the floor AoEs are easiest to dodge from the middle. The narrator plays ranged and recommends it." },
    { tag: "Blue Beams", q: "Can I keep attacking through the beams?", a: "Only with a build that can take two beams. Otherwise stand in an outer gap and wait. A death costs 5 seconds, more than you would gain." },
    { tag: "Phantom Spring", q: "Which attack is Phantom Spring?", a: "Not confirmed. Its skill text says water spheres converge into a geyser and confuse you. Confuse shows on the blue beams, but the beams fire outward. The vortex ring matches the water spheres, but no geyser appears." },
    { tag: "Phantom Portals", q: "What triggers the portals?", a: "Not confirmed. In the recorded run they opened at 46%, 27% and 10%, each shortly after the 50%, 30% and 10% Shadow Might." },
    { tag: "General", q: "What party clears SSS?", a: "The narrator says four strong players carrying one is about the minimum, and three carrying two still wipes easily. His group's best clear took 8:19." },
  ],
  credits: {
    video: { title: "阿萬 · mechanics guide", url: "https://www.youtube.com/watch?v=jPYYMamAacg" },
    data: "roworlddb.com (SEA, en-US / th-TH)",
    diagrams: "RaidPlan.io editor (XIV Playground arena)",
  },
};
