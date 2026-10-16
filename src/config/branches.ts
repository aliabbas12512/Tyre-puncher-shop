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
  image?: { src: string; width: number; height: number };
  whatsapp?: string;
  phone?: string;
};

export const branches: Branch[] = [
  {
    id: "branch-1",
    name: { ar: "", en: "" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/uRg96cTmEQpLxduH6",
    services: ["tyres", "batteries", "laserAlignment", "laserBalancing", "sensors", "mechanics"],
  },
  {
    id: "branch-2",
    name: { ar: "", en: "" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/xUknSh3pnWZW3gHm6",
    services: ["tyres", "batteries", "laserAlignment", "laserBalancing", "sensors", "mechanics"],
  },
  {
    id: "branch-3",
    name: { ar: "", en: "" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/6JXsBs2EPgWg47et6",
    services: ["tyres", "batteries", "oilsFilters", "laserAlignment", "laserBalancing", "mechanics"],
  },
  {
    id: "branch-4",
    name: { ar: "", en: "" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/tnu3QBoy4AA3vGwQ8",
    services: ["tyres", "batteries", "laserAlignment", "laserBalancing", "sensors", "mechanics"],
  },
  {
    id: "branch-5",
    name: { ar: "", en: "" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/yDqk9Ax84WK2rrKQ9",
    services: ["tyres", "batteries", "oilsFilters", "laserAlignment", "laserBalancing", "mechanics"],
  },
  {
    id: "branch-6",
    name: { ar: "", en: "" },
    address: { ar: "", en: "" },
    mapsUrl: "https://maps.app.goo.gl/uqEUoEyEmLq2kup9A",
    services: ["tyres", "batteries", "oilsFilters", "laserAlignment", "laserBalancing", "mechanics"],
  },
];
