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

## Run locally
Just open `index.html`, or serve it:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy
Works out of the box on **GitHub Pages**, **Vercel** or **Netlify** —
it's a plain static site, no configuration needed.
