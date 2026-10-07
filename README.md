# Fathom Guides website

A free static website for GitHub Pages. No build tools needed once it is uploaded.

## Pages

- `index.html` – home page
- `shop.html` – the store: a card for each game and platform
- `about.html` – about Fathom and our partner
- `whiteout-survival.html` and `minecraft.html` – game pages, all on the same template:
  guides, top tip, updates (gift codes or commands, plus news), then other merchandise

## Day-to-day updates

Edit **`data/updates.js`** only. It holds:

- **wosCodes** – Whiteout Survival gift codes for the carousel. Codes past their expiry date hide themselves. Delete the two sample codes when you add real ones.
- **wosNews** and **mcNews** – news items. Newest date shows first.
- **wosMerch** and **mcMerch** – the Other merchandise cards (Amazon). Paste your Amazon Associates link into `url`. Empty links show "Link coming soon".

Keep the quote marks and commas as they are. Dates are written `YYYY-MM-DD`.

## Publishing on GitHub Pages

1. Upload everything in this folder to the root of your repository (keep the folders).
2. In the repository go to **Settings > Pages**.
3. Under **Build and deployment** choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

To update later, upload the changed file (usually `data/updates.js`) and commit. The site refreshes within a couple of minutes.
