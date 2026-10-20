/**
 * ============================================================================
 *  BRANCHES — one entry per branch. Edit this file to update branch details.
 * ============================================================================
 *
 *  Each branch keeps its OWN services, location and photo. Never copy one
 *  branch's details into another.
 *
 *  - name:     leave "" to show "Branch 1", "الفرع 1", … until the real name is known.
 *  - address:  leave "" to hide the address line.
 *  - image:    put the branch's front photo in public/images/branches/ and set
 *              { src, width, height }. Leave undefined to show the card without a photo.
 *  - whatsapp / phone: leave "" to use the main shop number from site.ts.
 */
import type { Localized } from "./site";

/** Services that a branch can offer (wording taken from the owner's branch list). */
export const branchServiceLabels = {
  tyres: { ar: "إطارات", en: "Tyres" },
  batteries: { ar: "بطاريات", en: "Batteries" },
  oilsFilters: { ar: "زيوت وفلاتر", en: "Oils & Filters" },
  laserAlignment: { ar: "ميزان ليزر إلكتروني", en: "Electronic Laser Alignment" },
  laserBalancing: { ar: "ترصيص ليزر", en: "Laser Wheel Balancing" },
  sensors: { ar: "حساسات", en: "Tyre Sensors (TPMS)" },
  mechanics: { ar: "ميكانيكا السيارات", en: "Car Mechanics" },
} satisfies Record<string, Localized>;

export type BranchService = keyof typeof branchServiceLabels;

export type Branch = {
  id: string;
  name: Localized;
  address: Localized;
  mapsUrl: string;
  services: BranchService[];
  /** focus = CSS object-position, to keep the signboard in view when the card crops the photo. */
  image?: { src: string; width: number; height: number; focus?: string };
  whatsapp?: string;
  phone?: string;
};

export const branches: Branch[] = [
  {
    id: "branch-1",
    name: { ar: "فرع محاسن", en: "Mahasen Branch" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/uRg96cTmEQpLxduH6",
    services: ["tyres", "batteries", "laserAlignment", "laserBalancing", "sensors", "mechanics"],
    image: { src: "/images/branches/branch-1.jpg", width: 640, height: 640 },
  },
  {
    id: "branch-2",
    name: { ar: "فرع الصناعية", en: "Industrial Area Branch" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/xUknSh3pnWZW3gHm6",
    services: ["tyres", "batteries", "laserAlignment", "laserBalancing", "sensors", "mechanics"],
    image: { src: "/images/branches/branch-2.jpg", width: 640, height: 640 },
  },
  {
    id: "branch-3",
    name: { ar: "فرع خط قطر", en: "Qatar Road Branch" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/6JXsBs2EPgWg47et6",
    services: ["tyres", "batteries", "oilsFilters", "laserAlignment", "laserBalancing", "mechanics"],
    image: { src: "/images/branches/branch-3.jpg", width: 1280, height: 960 },
  },
  {
    id: "branch-4",
    name: { ar: "فرع الغسانية", en: "Al Ghassaniyah Branch" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/tnu3QBoy4AA3vGwQ8",
    services: ["tyres", "batteries", "laserAlignment", "laserBalancing", "sensors", "mechanics"],
    image: { src: "/images/branches/branch-4.jpg", width: 1600, height: 1200 },
  },
  {
    id: "branch-5",
    name: { ar: "فرع الصناعية 2", en: "Industrial Area 2 Branch" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/yDqk9Ax84WK2rrKQ9",
    services: ["tyres", "batteries", "oilsFilters", "laserAlignment", "laserBalancing", "mechanics"],
    image: { src: "/images/branches/branch-5.jpg", width: 1600, height: 1200 },
  },
  {
    id: "branch-6",
    name: { ar: "فرع الستين", en: "Al Sitteen Branch" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/uqEUoEyEmLq2kup9A",
    services: ["tyres", "batteries", "oilsFilters", "laserAlignment", "laserBalancing", "mechanics"],
    image: { src: "/images/branches/branch-6.jpg", width: 1600, height: 1200 },
  },
];
