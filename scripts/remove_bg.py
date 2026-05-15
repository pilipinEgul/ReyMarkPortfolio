from pathlib import Path
from rembg import remove, new_session
from PIL import Image

SRC = Path(r"d:\PARA SA GABI\hack4G\691122732_1890859328242920_7273774726690614356_n.jpg")
DST = Path(r"D:\My Portfolio\public\portrait.png")

DST.parent.mkdir(parents=True, exist_ok=True)

with Image.open(SRC) as im:
    im = im.convert("RGBA")
    session = new_session("u2net_human_seg")
    out = remove(im, session=session, alpha_matting=True,
                 alpha_matting_foreground_threshold=240,
                 alpha_matting_background_threshold=20,
                 alpha_matting_erode_size=10)
    out.save(DST, "PNG", optimize=True)

print(f"saved {DST} ({DST.stat().st_size // 1024} KB)")
