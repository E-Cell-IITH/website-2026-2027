/**
 * convert-images.mjs
 *
 * Converts all .jpg / .jpeg / .png files inside the `public/` folder
 * (recursively) to .webp using the `sharp` library.
 *
 * Usage:
 *   1.  npm install --save-dev sharp          (one-time)
 *   2.  node scripts/convert-images.mjs
 *
 * What it does:
 *   - Scans public/ recursively for *.jpg, *.jpeg, *.png
 *   - Creates a .webp copy next to each file
 *   - Prints a rename map so you know which src strings to update in code
 *   - Does NOT delete the originals (safe to run multiple times)
 *
 * After running:
 *   - Update every image src in your .tsx / .ts files:
 *       "/Emerge 2.0.webp"  →  "/Emerge 2.0.webp"
 *   - Commit both the new .webp files and the updated source references.
 *   - Optionally delete the old originals once everything is verified.
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const SUPPORTED = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  console.log(`\n🔍  Scanning ${PUBLIC_DIR} …\n`);

  const files = await walk(PUBLIC_DIR);

  if (files.length === 0) {
    console.log("✅  No .jpg / .jpeg / .png files found — nothing to convert.");
    return;
  }

  console.log(`Found ${files.length} image(s) to convert:\n`);

  const renameMap = [];

  for (const src of files) {
    const ext = extname(src).toLowerCase();
    const dest = src.slice(0, -ext.length) + ".webp";

    // Relative paths for display / src-update instructions
    const relSrc = src.replace(join(__dirname, ".."), "").replace(/\\/g, "/");
    const relDest = dest.replace(join(__dirname, ".."), "").replace(/\\/g, "/");

    try {
      await sharp(src).webp({ quality: 85 }).toFile(dest);
      console.log(`  ✓  ${relSrc}  →  ${relDest}`);
      renameMap.push({ from: relSrc, to: relDest });
    } catch (err) {
      console.error(`  ✗  Failed: ${relSrc}\n     ${err.message}`);
    }
  }

  console.log("\n─────────────────────────────────────────────────────────────");
  console.log("📋  SRC STRING UPDATE GUIDE");
  console.log(
    "     Search-and-replace these strings in your .tsx / .ts files:\n"
  );

  for (const { from, to } of renameMap) {
    // Strip the leading /public prefix that Next.js resolves automatically
    const srcStr = from.replace("/public", "");
    const destStr = to.replace("/public", "");
    console.log(`     "${srcStr}"  →  "${destStr}"`);
  }

  console.log("\n─────────────────────────────────────────────────────────────");
  console.log(
    "⚠️   Originals are kept. Delete them manually once everything looks good."
  );
  console.log("✅  Done.\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
