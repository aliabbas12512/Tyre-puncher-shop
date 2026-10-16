# شركة إطارات الأداء المميز لخدمات السيارات — Website

A fast, bilingual (Arabic / English) one-page website for the shop, built with
**Next.js 16, TypeScript and Tailwind CSS 4**. It has no database and no backend,
and it uses only the shop's real photographs.

- Arabic (RTL): `/` (default)
- English (LTR): `/en`

---

## 1. Before going live: fill in the shop details

Edit **one file**: [`src/config/site.ts`](src/config/site.ts)

| Field | Example format | What happens if it's empty |
|---|---|---|
| `phone` | `9665XXXXXXXX` (drop the leading 0, add 966) | "Call Now" buttons are hidden |
| `whatsapp` | `9665XXXXXXXX` | WhatsApp buttons are hidden |
| `mapsUrl` | `https://maps.app.goo.gl/...` (Google Maps → Share → Copy link) | Directions buttons are hidden |
| `address.ar` / `address.en` | Street, district, city | Address line is hidden |
| `hours` | See example in the file | Hours are hidden |
| `name.en` | Your registered English name | Currently an English rendering of the Arabic signboard name. **Please confirm it.** |
| `siteUrl` | `https://www.your-domain.com` | Optional on Vercel (detected automatically) |

While you run the site locally (`npm run dev`), any missing detail is marked with an amber
⚠ note so you can see what still needs filling. On the live (production) site, missing
details are simply hidden. No placeholder numbers or fake links are ever shown.

You can also edit service and product texts in the same file. To hide a service, set
`enabled: false`.

### Branches (6)

Each branch is defined in [`src/config/branches.ts`](src/config/branches.ts) with its **own**
Google Maps link and service list. For each branch you can also set:

- `name`: real branch name (until it's filled, the site shows "الفرع 1" / "Branch 1", and so on)
- `address`: shown under the branch name when filled
- `image`: the branch front photo. Put the file in `public/images/branches/` and set
  `image: { src: "/images/branches/branch-1.jpg", width: 1600, height: 1200 }`
- `whatsapp` / `phone`: only if that branch has its own number. Otherwise the main
  number from `site.ts` is used.

Each branch's WhatsApp button sends a message that names the branch and lists its services.

## 2. Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000  (Arabic)  and  /en  (English)
```

Production check:

```bash
npm run lint       # TypeScript type-check
npm run build      # production build
npm start          # serve the production build
```

## 3. Photos

All shop photos are in `public/images/` with descriptive names. Next.js serves them
automatically as resized WebP/AVIF files, so each phone only downloads the size it needs.

| File | Used in |
|---|---|
| `shop-front-signboard-night.jpg` | Hero (main photo) + gallery |
| `hankook-tyres-rack.jpg`, `wheel-balancing-team.jpg`, `wheel-balancing-machines.jpg`, `wheel-alignment-land-cruiser.jpg`, `oil-change-equipment.jpg`, `two-post-car-lifts.jpg` | Service cards + gallery |
| `batteries-crop.jpg`, `tpms-sensors-crop.jpg` | Crops of the shop's own banner photo, used in the Batteries / TPMS cards |
| `tyre-stock-wall.jpg`, `engine-oil-display.jpg` | Product cards + gallery |
| `shop-front-hankook-services-sign.jpg` | Contact section + gallery |
| All other photos | Gallery |
| `logo.png`, `logo-emblem.png` | Footer / header (cropped from the supplied logo) |

To add a photo later, put it in `public/images/` and add a line to the `gallery` list
in `src/config/site.ts` with its width, height and Arabic/English description.

`scripts/optimize-images.mjs` is the script that originally copied and renamed the
uploaded photos and cropped the logo. You don't need it for normal edits.

## 4. Put the code on GitHub

The code is already in the GitHub repository `aliabbas12512/tyre-puncher-shop`
(branch `ccr-594c1303-ttsrhn`). To make it your main version:

1. Open the repository on GitHub. Open a **Pull Request** from `ccr-594c1303-ttsrhn`
   into your default branch (for example `main`), then **Merge** it.
   *If the repository has no default branch yet, set this branch as the default in
   Settings → General → Default branch.*
2. Later edits: change the files, then run `git add . && git commit -m "Update details" && git push`.
   Or edit `src/config/site.ts` directly on github.com with the pencil icon.

## 5. Deploy on Vercel (free plan is enough)

1. Go to <https://vercel.com>. Sign in with your GitHub account. *(This step needs your login.)*
2. Click **Add New → Project** and **Import** `tyre-puncher-shop`.
   *(The first time, Vercel asks you to allow access to the repository.)*
3. Vercel detects **Next.js** automatically. Keep the default settings and click **Deploy**.
4. After about one minute you get a live link such as `https://tyre-puncher-shop.vercel.app`.
5. Every later push to the production branch redeploys the site automatically.
6. Optional: to use your own domain, open Project → Settings → Domains and follow
   Vercel's DNS instructions. Then set `siteUrl` in the config.

## 6. Project structure

```
src/
  config/site.ts          ← all business details, services, products, gallery (edit this)
  content/dictionary.ts   ← Arabic/English interface text
  lib/contact.ts          ← builds WhatsApp / tel / Maps links
  lib/metadata.ts         ← SEO titles, descriptions, keywords, social preview
  components/             ← Header, Gallery (lightbox), SitePage sections
  app/(ar)/               ← Arabic root layout (RTL) + page  →  /
  app/(en)/en/            ← English root layout (LTR) + page →  /en
  app/sitemap.ts, robots.ts, icon.png, apple-icon.png
public/images/            ← shop photographs
```
