# Ahmed Bouamama — Portfolio

Clean, Apple-inspired one-page portfolio for **Ahmed Bouamama** —
Designer & Front-End Designer (Doha, Qatar).

Built as a static site (HTML / CSS / vanilla JS) — no build step, deploy anywhere.

## Structure
```
index.html        # all the page content / sections
css/styles.css    # design system + layout (Apple-style tokens at the top)
js/script.js      # nav, scroll reveals, animated counters
assets/           # photos
```

## Sections
Hero · Stats · Selected Work · RCH Saudi case study · About · Services ·
Experience timeline · Contact.

## How to edit
- **Text / content:** open `index.html` and edit directly.
- **Colours / spacing / fonts:** edit the `:root` variables at the top of `css/styles.css`.
- **RCH Saudi case study:** fill in the live link, screenshots and full
  walkthrough in the `#rch` section. Replace the placeholder "browser" mockup
  with a real screenshot when ready.
- **Photo:** swap `assets/ahmed-headshot.jpg`.

## Quick preview — `demo.html`
`demo.html` is a **single self-contained file** (CSS, JS, photo and CV all
inlined). Just double-click it — opens in any browser, no server needed.
Regenerate it after any edit with:
```bash
python3 build-demo.py
```

## Run locally (multi-file version)
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy
- **GitHub Pages:** a workflow lives in `.github/workflows/deploy.yml`.
  In the repo go to **Settings → Pages → Source: GitHub Actions** once;
  every push then publishes automatically.
- **Vercel / Netlify:** import the repo (no config) — or drag `demo.html`
  onto netlify.com/drop for an instant link.
