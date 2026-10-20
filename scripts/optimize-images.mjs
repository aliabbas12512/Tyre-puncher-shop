// Copies the shop's original photographs into public/images with descriptive
// names and crops the logo out of the supplied screenshot.
// Usage: node scripts/optimize-images.mjs <folder-with-original-photos>
// Photos are copied untouched (they are already web-sized); Next.js <Image>
// serves resized WebP/AVIF versions automatically.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const src = process.argv[2];
if (!src) {
  console.error("Usage: node scripts/optimize-images.mjs <source-folder>");
  process.exit(1);
}

const out = path.resolve("public/images");
fs.mkdirSync(out, { recursive: true });

// original upload name -> descriptive file name
const map = {
  "7b9f8d9c-image.jpg": "shop-front-signboard-night.jpg",
  "f08f1de1-image.jpg": "shop-front-hankook-cars.jpg",
  "8538bbc9-image.jpg": "shop-front-hankook-services-sign.jpg",
  "a3ac8024-image.jpg": "engine-oil-display.jpg",
  "8ee4108c-image.jpg": "oil-change-equipment.jpg",
  "2b496eeb-image.jpg": "tpms-sensors-batteries-banner.jpg",
  "8fe42614-image.jpg": "showroom-services-banner.jpg",
  "065e7a70-image.jpg": "wheel-alignment-land-cruiser.jpg",
  "1fbfb908-image.jpg": "hankook-tyres-rack.jpg",
  "407b26b7-image.jpg": "wheel-alignment-bay.jpg",
  "b36f2799-image.jpg": "services-banner-premium-tyres.jpg",
  "375a7ee0-image.jpg": "tyre-stock-wall.jpg",
  "a9704b27-image.jpg": "alignment-bay-tyre-stock.jpg",
  "e204d388-image.jpg": "company-banner-workshop.jpg",
  "e392732b-image.jpg": "wheel-balancing-team.jpg",
  "3cd05ad6-image.jpg": "two-post-car-lifts.jpg",
  "4ec98963-image.jpg": "wheel-balancing-machines.jpg",
  "3c0ab4b6-image.jpg": "workshop-floor-night.jpg",
  "175ac8d3-image.jpg": "laser-alignment-system.jpg",
};

for (const [from, to] of Object.entries(map)) {
  const p = path.join(src, from);
  if (!fs.existsSync(p)) { console.warn("missing:", from); continue; }
  // Copy byte-for-byte: re-encoding would only lose quality or add weight.
  fs.copyFileSync(p, path.join(out, to));
  console.log("ok", to);
}

// Batteries / TPMS cards: crop each half of the in-store banner photo.
const banner = path.join(src, "2b496eeb-image.jpg");
if (fs.existsSync(banner)) {
  await sharp(banner).extract({ left: 40, top: 300, width: 600, height: 450 }).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(out, "tpms-sensors-crop.jpg"));
  await sharp(banner).extract({ left: 660, top: 300, width: 600, height: 450 }).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(out, "batteries-crop.jpg"));
  console.log("ok banner crops");
}

// Branch front photos (in the order the owner sent them: branch 1 … 6).
// An optional crop box removes only a blurred social-media frame, if a photo has one.
const branchPhotos = [
  ["e9eabf21-image.jpg", "branch-1.jpg"],
  ["ef0c81dd-image.jpg", "branch-2.jpg"],
  ["7daf4b6d-image.jpg", "branch-3.jpg"],
  // Branches 4–6: higher-resolution replacements sent later by the owner.
  ["2090b35e-image.jpg", "branch-4.jpg"],
  ["37076c59-image.jpg", "branch-5.jpg"],
  ["d4cc24c9-image.jpg", "branch-6.jpg"],
];
fs.mkdirSync(path.join(out, "branches"), { recursive: true });
for (const [from, to, box] of branchPhotos) {
  const p = path.join(src, from);
  if (!fs.existsSync(p)) continue;
  const dest = path.join(out, "branches", to);
  if (box) await sharp(p).extract(box).jpeg({ quality: 92, mozjpeg: true }).toFile(dest);
  else fs.copyFileSync(p, dest);
  console.log("ok branches/" + to);
}

// Logo: crop the artwork out of the PDF-viewer screenshot (740x1600).
const logoSrc = path.join(src, "24b02d8a-image.jpg");
if (fs.existsSync(logoSrc)) {
  await sharp(logoSrc).extract({ left: 6, top: 450, width: 728, height: 724 }).png().toFile(path.join(out, "logo.png"));
  // Favicon / app icon: the eagle + MZ emblem only.
  await sharp(logoSrc).extract({ left: 40, top: 470, width: 670, height: 500 })
    .resize(512, 512, { fit: "contain", background: "#ffffff" }).png().toFile(path.resolve("src/app/icon.png"));
  await sharp(logoSrc).extract({ left: 40, top: 470, width: 670, height: 500 })
    .resize(180, 180, { fit: "contain", background: "#ffffff" }).png().toFile(path.resolve("src/app/apple-icon.png"));
  // Emblem only (no text) for the header badge.
  await sharp(logoSrc).extract({ left: 40, top: 470, width: 670, height: 500 }).png().toFile(path.join(out, "logo-emblem.png"));
  console.log("ok logo.png + icons");
}
