#!/usr/bin/env python3
"""Build a downloadable single HTML (~11 MB).

The 15 MB live RCH site is swapped for an optimized poster (kept light), but the
real showreel VIDEO is embedded so it plays in place. The full live RCH site
lives in the zip / on the deployed URL. Run: python3 build-lite.py
"""
import base64, io, pathlib
from PIL import Image

root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "css/styles.css").read_text(encoding="utf-8")
js = (root / "js/script.js").read_text(encoding="utf-8")
i18n = (root / "js/i18n.js").read_text(encoding="utf-8")

def data_uri(path, mime):
    b = (root / path).read_bytes()
    return f"data:{mime};base64,{base64.b64encode(b).decode()}"

# Optimized poster from the RCH brand visual (downscaled JPEG)
img = Image.open(root / "assets/rch-workspace-tour.png").convert("RGB")
img.thumbnail((900, 900))
buf = io.BytesIO(); img.save(buf, "JPEG", quality=82, optimize=True)
poster = "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()

# 'After' panel: poster instead of the 15 MB live site (keeps the file small)
html = html.replace(
    '<iframe class="compare__frame" id="rchFrame" src="projects/rch-saudi.html" title="RCH Saudi, live site" loading="lazy"></iframe>',
    '<img class="compare__frame" src="assets/rch-workspace-tour.png" style="object-fit:cover" alt="RCH Saudi redesign" />'
)

# Inline assets — including the real showreel video so it plays in place
html = html.replace("assets/rch-workspace-tour.png", poster)
html = html.replace("assets/ahmed-headshot.jpg", data_uri("assets/ahmed-headshot.jpg", "image/jpeg"))
html = html.replace("assets/Ahmed-Bouamama-CV.pdf", data_uri("assets/Ahmed-Bouamama-CV.pdf", "application/pdf"))
html = html.replace("assets/showreel.mp4", data_uri("assets/showreel.mp4", "video/mp4"))

# Inline CSS + JS
html = html.replace('<link rel="stylesheet" href="css/styles.css" />', f"<style>\n{css}\n</style>")
html = html.replace('<script src="js/i18n.js"></script>', f"<script>\n{i18n}\n</script>")
html = html.replace('<script src="js/script.js"></script>', f"<script>\n{js}\n</script>")

out = root / "Ahmed-Bouamama-Portfolio.html"
out.write_text(html, encoding="utf-8")
print(f"Built {out.name} ({out.stat().st_size/1024/1024:.1f} MB)")
