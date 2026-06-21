#!/usr/bin/env python3
"""Build a single self-contained demo.html with CSS, JS and assets inlined.
Open the result with a double-click — no server needed.
Run: python3 build-demo.py
"""
import base64, pathlib, html as htmllib

root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "css/styles.css").read_text(encoding="utf-8")
js = (root / "js/script.js").read_text(encoding="utf-8")
i18n = (root / "js/i18n.js").read_text(encoding="utf-8")

def data_uri(path, mime):
    b = (root / path).read_bytes()
    return f"data:{mime};base64,{base64.b64encode(b).decode()}"

# Inline assets
html = html.replace("assets/ahmed-headshot.jpg", data_uri("assets/ahmed-headshot.jpg", "image/jpeg"))
html = html.replace("assets/Ahmed-Bouamama-CV.pdf", data_uri("assets/Ahmed-Bouamama-CV.pdf", "application/pdf"))

# Inline the live RCH site into the iframe via srcdoc (self-contained, offline)
rch = (root / "projects/rch-saudi.html").read_text(encoding="utf-8")
html = html.replace('src="projects/rch-saudi.html"', 'srcdoc="' + htmllib.escape(rch, quote=True) + '"')

# Inline CSS + JS
html = html.replace('<link rel="stylesheet" href="css/styles.css" />', f"<style>\n{css}\n</style>")
html = html.replace('<script src="js/i18n.js"></script>', f"<script>\n{i18n}\n</script>")
html = html.replace('<script src="js/script.js"></script>', f"<script>\n{js}\n</script>")

out = root / "demo.html"
out.write_text(html, encoding="utf-8")
print(f"Built {out} ({out.stat().st_size/1024:.0f} KB)")
