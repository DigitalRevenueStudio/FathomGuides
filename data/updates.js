/*
  FATHOM GUIDES: SITE UPDATES
  ---------------------------------------------------------------
  This is the only file you need to edit for day-to-day updates.
  Save it, upload it to GitHub, and the website updates itself.

  Rules:
  - Keep the quote marks and commas exactly as they are.
  - Dates are written as "YYYY-MM-DD", for example "2026-10-07".
  - To remove an item, delete everything from its { to its },
*/

window.FATHOM = {

  /* ---------- WHITEOUT SURVIVAL GIFT CODES ----------
     Shown in the carousel on the Whiteout Survival page.
     expires: leave as "" if you do not know the expiry date.
     Codes past their expiry date are hidden automatically.
     sample: true shows a "SAMPLE" label. Delete the sample
     codes below when you add your first real ones.          */
  wosCodes: [
    { code: "SAMPLE2026", rewards: "Speedups, Fire Crystals and Stamina", expires: "", added: "2026-10-07", sample: true },
    { code: "FATHOMTEST", rewards: "Example only: replace with a live code", expires: "", added: "2026-10-07", sample: true }
  ],

  /* ---------- WHITEOUT SURVIVAL NEWS ---------- */
  wosNews: [
    { date: "2026-10-07", title: "Fathom Guides launches", text: "The full Whiteout Survival series is now available: the Starter Guide plus three Guide Companions, or all four in the Complete Bundle." },
    { date: "2026-10-07", title: "Gift codes will appear here", text: "We will post new gift codes here as they are released. Codes disappear automatically once they expire." }
  ],

  /* ---------- MINECRAFT NEWS ---------- */
  mcNews: [
    { date: "2026-10-07", title: "Ultimate Minecraft Survival Manual in production", text: "Parts I to IV are written. The full manual launches at £9.99, with Part I free to download." },
    { date: "2026-09-15", title: "Wilderness Bound is out", text: "Java 26.3 and Bedrock 26.50 added the dappled forest, poplar trees, abandoned camps, explorer maps and straw beds. All covered in the 2026 manual." }
  ],

  /* ---------- WHITEOUT SURVIVAL: OTHER MERCHANDISE (AMAZON) ----------
     Same rules as the Minecraft list below.                  */
  wosMerch: [
    { title: "Phone cooling fan", text: "Clips onto your phone and keeps it cool through long events like SvS and Frostfire Mine.", icon: "fan", url: "" },
    { title: "Power bank", text: "A fast-charging power bank so a flat battery never costs you a rally.", icon: "battery", url: "" },
    { title: "Phone and tablet stand", text: "Hands-free viewing for gathering runs, rallies and checking the guide alongside the game.", icon: "stand", url: "" },
    { title: "App store gift cards", text: "Google Play and App Store gift cards. A safe way to give in-game spending as a present.", icon: "card", url: "" }
  ],

  /* ---------- MINECRAFT: OTHER MERCHANDISE (AMAZON) ----------
     url: paste your Amazon Associates link between the quotes.
     If url is "", the card shows "Link coming soon".
     icon: one of "game", "brick", "book", "plush", "gear",
           "fan", "battery", "stand", "card"     */
  mcMerch: [
    { title: "Minecraft for Nintendo Switch", text: "The full game for Switch, ideal as a first copy for younger players.", icon: "game", url: "" },
    { title: "Minecraft building sets", text: "Brick sets based on Minecraft biomes and mobs. Great for builders away from the screen.", icon: "brick", url: "" },
    { title: "Official Minecraft books", text: "Guidebooks, stories and annuals that pair nicely with the Fathom manual.", icon: "book", url: "" },
    { title: "Plush toys and figures", text: "Creepers, axolotls and more. An easy stocking filler.", icon: "plush", url: "" }
  ]
};
