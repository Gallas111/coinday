# -*- coding: utf-8 -*-
"""
Generate a static image-dimension map for body images referenced in MDX content.
Reads actual pixel dimensions via PIL and writes lib/image-dims.json:
  { "/images/posts/foo-body-1.webp": [width, height], ... }
Only images that (a) are referenced in content/posts/*.mdx and (b) exist on disk
under public/ are included. Missing/undecodable files are skipped silently so the
runtime falls back to no-dimension (current safe behavior).
"""
import os
import re
import json
import sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_DIR = os.path.join(ROOT, "content", "posts")
PUBLIC_DIR = os.path.join(ROOT, "public")
OUT_PATH = os.path.join(ROOT, "lib", "image-dims.json")

# Markdown image syntax: ![alt](/images/...)
IMG_RE = re.compile(r"!\[[^\]]*\]\((/images/[^)\s]+)\)")

def collect_refs():
    refs = set()
    for name in os.listdir(CONTENT_DIR):
        if not name.endswith(".mdx"):
            continue
        path = os.path.join(CONTENT_DIR, name)
        with open(path, "r", encoding="utf-8") as f:
            text = f.read()
        for m in IMG_RE.finditer(text):
            refs.add(m.group(1))
    return refs

def main():
    refs = collect_refs()
    dims = {}
    missing = []
    for ref in sorted(refs):
        # ref like /images/posts/foo.webp -> public/images/posts/foo.webp
        rel = ref.lstrip("/")
        fpath = os.path.join(PUBLIC_DIR, *rel.split("/"))
        if not os.path.isfile(fpath):
            missing.append(ref)
            continue
        try:
            with Image.open(fpath) as im:
                w, h = im.size
            dims[ref] = [int(w), int(h)]
        except Exception as e:
            missing.append(ref + " (decode-fail: %s)" % e)
            continue

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(dims, f, ensure_ascii=False, indent=0, sort_keys=True)
        f.write("\n")

    print("referenced images:", len(refs))
    print("with dimensions  :", len(dims))
    print("skipped (missing):", len(missing))
    for m in missing:
        print("  SKIP", m)

if __name__ == "__main__":
    main()
