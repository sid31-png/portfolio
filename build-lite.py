#!/usr/bin/env python3
"""Build a LIGHTWEIGHT, easily-downloadable single HTML (~2 MB).

Heavy media (the 14 MB RCH site, the 7 MB video) are NOT embedded — they are
replaced by an optimized poster image — so the file stays small and downloads
reliably. The full experience (live RCH site + video) lives in the zip / once
deployed. Run: python3 build-lite.py
"""
import base64, io, pathlib, html as htmllib
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

# Swap heavy embeds for the light poster
html = html.replace(
    '<iframe class="compare__frame" id="rchFrame" src="projects/rch-saudi.html" title="RCH Saudi — live site" loading="lazy"></iframe>',
    '<img class="compare__frame" src="assets/rch-workspace-tour.png" style="object-fit:cover" alt="RCH Saudi redesign" />'
)
html = html.replace(
    '<video class="card-video" src="assets/showreel.mp4" muted loop playsinline preload="metadata"></video>',
    '<img class="card-video" src="assets/rch-workspace-tour.png" alt="Showreel poster" />'
)
# Disable the now-empty video lightbox (no video embedded in the lite build)
html = html.replace('class="card reveal card--play" id="videoCard"', 'class="card reveal card--play"')

# Inline light assets
html = html.replace("assets/rch-workspace-tour.png", poster)
html = html.replace("assets/ahmed-headshot.jpg", data_uri("assets/ahmed-headshot.jpg", "image/jpeg"))
html = html.replace("assets/Ahmed-Bouamama-CV.pdf", data_uri("assets/Ahmed-Bouamama-CV.pdf", "application/pdf"))

# Inline CSS + JS
html = html.replace('<link rel="stylesheet" href="css/styles.css" />', f"<style>\n{css}\n</style>")
html = html.replace('<script src="js/i18n.js"></script>', f"<script>\n{i18n}\n</script>")
html = html.replace('<script src="js/script.js"></script>', f"<script>\n{js}\n</script>")

out = root / "Ahmed-Bouamama-Portfolio.html"
out.write_text(html, encoding="utf-8")
print(f"Built {out.name} ({out.stat().st_size/1024:.0f} KB)")
