// Generate a static image-dimension map for BODY images referenced in MDX content.
// Reads actual pixel dimensions via the `image-size` package (pure JS, no native
// deps, supports webp/png/jpg headers) and writes lib/image-dims.json:
//   { "/images/posts/foo-body-1.webp": [width, height], ... }
//
// Only images that (a) are referenced as markdown body images ![alt](/images/...)
// in content/posts/*.mdx and (b) exist on disk under public/ are included.
// Missing/undecodable files are WARNED about (not fatal) so the build never fails
// and the runtime falls back to no-dimension (current safe behavior).
//
// frontmatter `image:` (thumbnail) is intentionally NOT included — body images only.
//
// This script is run automatically at the front of `npm run build` so that newly
// added posts get their body-image dims regenerated without any manual step.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { imageSize } from "image-size";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(__dirname);
const CONTENT_DIR = path.join(ROOT, "content", "posts");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUT_PATH = path.join(ROOT, "lib", "image-dims.json");

// Markdown image syntax: ![alt](/images/...). The alt segment uses a lazy
// [\s\S]*? so nested square brackets inside alt text don't break the match;
// the URL is anchored to the first /images/... up to the closing paren.
const IMG_RE = /!\[[\s\S]*?\]\((\/images\/[^)\s]+)\)/g;

// Recursively collect all .mdx files under a directory.
function walkMdx(dir) {
  const out = [];
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...walkMdx(full));
    } else if (ent.isFile() && ent.name.endsWith(".mdx")) {
      out.push(full);
    }
  }
  return out;
}

function collectRefs() {
  const refs = new Set();
  for (const file of walkMdx(CONTENT_DIR)) {
    const text = fs.readFileSync(file, "utf-8");
    for (const m of text.matchAll(IMG_RE)) {
      refs.add(m[1]);
    }
  }
  return refs;
}

function main() {
  const refs = collectRefs();
  const dims = {};
  const missing = [];

  for (const ref of [...refs].sort()) {
    // ref like /images/posts/foo.webp -> public/images/posts/foo.webp
    const rel = ref.replace(/^\/+/, "");
    const fpath = path.join(PUBLIC_DIR, ...rel.split("/"));
    if (!fs.existsSync(fpath) || !fs.statSync(fpath).isFile()) {
      missing.push(ref);
      continue;
    }
    try {
      const buf = fs.readFileSync(fpath);
      const { width, height } = imageSize(buf);
      if (!width || !height) {
        missing.push(`${ref} (no-dims)`);
        continue;
      }
      dims[ref] = [Math.round(width), Math.round(height)];
    } catch (e) {
      missing.push(`${ref} (decode-fail: ${e.message})`);
    }
  }

  // Match the Python json.dump(..., indent=0, sort_keys=True) output format
  // exactly so the committed JSON diff stays stable and the runtime import is
  // byte-identical in shape. indent=0 means a newline (no spaces) before every
  // element, with a single space after each object colon. e.g.:
  //   {\n"key": [\n896,\n512\n],\n"key2": [\n...\n]\n}
  const sortedKeys = Object.keys(dims).sort();
  let out;
  if (sortedKeys.length === 0) {
    out = "{}";
  } else {
    const lines = sortedKeys.map((k) => {
      const [w, h] = dims[k];
      return `${JSON.stringify(k)}: [\n${w},\n${h}\n]`;
    });
    out = "{\n" + lines.join(",\n") + "\n}";
  }

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, out + "\n", "utf-8");

  console.log("referenced images:", refs.size);
  console.log("with dimensions  :", Object.keys(dims).length);
  console.log("skipped (missing):", missing.length);
  for (const m of missing) console.log("  SKIP", m);
}

main();
