# 10foldfounders.com

Landing page for [10Fold Founders](https://10foldfounders.com) — a faith-led community for trades and home-services founders.

## Stack

Static site served via **GitHub Pages** with a custom domain (`10foldfounders.com`).

- `index.html` — single-page landing built with the [design-canvas](https://claude.ai/design) runtime
- `support.js` / `image-slot.js` — design-canvas runtime helpers
- `_ds/` — design system (Plus Jakarta Sans fonts, color/spacing/typography tokens, component styles)
- `assets/` — logos and photos referenced by the landing page
- `CNAME` — custom domain config for GitHub Pages

## Deployment

Pushes to `main` trigger a GitHub Pages build. The `CNAME` file maps the repo to `10foldfounders.com`.

## Local preview

Open `index.html` in a browser, or serve from the repo root:

```sh
npx serve .
```
