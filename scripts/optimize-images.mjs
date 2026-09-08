import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const TEAM_DIR = path.resolve("public/team");

// Image extensions we want to process
const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".tif",
  ".tiff",
]);

// Don't process these directories
const EXCLUDED_DIRECTORIES = [
  TEAM_DIR,
];

function isInsideExcludedDirectory(filePath) {
  return EXCLUDED_DIRECTORIES.some((directory) => {
    return (
      filePath === directory ||
      filePath.startsWith(directory + path.sep)
    );
  });
}

function getAllImages(directory) {
  const results = [];

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (isInsideExcludedDirectory(fullPath)) {
        continue;
      }

      results.push(...getAllImages(fullPath));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (IMAGE_EXTENSIONS.has(extension)) {
      results.push(fullPath);
    }
  }

  return results;
}

async function optimizeImage(inputPath) {
  const extension = path.extname(inputPath);
  const basePath = inputPath.slice(
    0,
    -extension.length
  );

  const outputPath = `${basePath}.webp`;

  // Don't process a WebP into itself
  if (inputPath === outputPath) {
    return;
  }

  const originalStats = fs.statSync(inputPath);

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const originalWidth = metadata.width ?? 0;
  const originalHeight = metadata.height ?? 0;

  await image
    .resize({
      width: 1600,
      height: 1600,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(outputPath);

  const optimizedStats = fs.statSync(outputPath);

  const originalKB =
    originalStats.size / 1024;

  const optimizedKB =
    optimizedStats.size / 1024;

  const reduction =
    (1 -
      optimizedStats.size /
        originalStats.size) *
    100;

  console.log(
    `${path.relative(PUBLIC_DIR, inputPath)}`
  );

  console.log(
    `  ${originalWidth}x${originalHeight}`
  );

  console.log(
    `  ${originalKB.toFixed(0)} KB → ${optimizedKB.toFixed(0)} KB`
  );

  console.log(
    `  ${reduction.toFixed(1)}% smaller`
  );

  console.log(
    `  → ${path.relative(PUBLIC_DIR, outputPath)}`
  );

  console.log("");
}

async function main() {
  console.log("Scanning public/ for images...\n");

  const images = getAllImages(PUBLIC_DIR);

  console.log(
    `Found ${images.length} images.`
  );

  console.log(
    "Skipping public/team/.\n"
  );

  for (const image of images) {
    try {
      await optimizeImage(image);
    } catch (error) {
      console.error(
        `Failed to optimize: ${image}`
      );

      console.error(error);
      console.log("");
    }
  }

  console.log(
    "========================================"
  );

  console.log(
    "Image optimization complete!"
  );

  console.log(
    "========================================"
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});