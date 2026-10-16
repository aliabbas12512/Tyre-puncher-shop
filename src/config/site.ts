/**
 * ============================================================================
 *  SHOP CONFIGURATION — edit this file to update the website.
 * ============================================================================
 *
 *  Anything left empty ("") is automatically hidden on the live website.
 *  Nothing here is made up: fill in only real, verified details.
 *
 *  Phone / WhatsApp format: international, digits only, no "+" or spaces.
 *    Saudi mobile 05X XXX XXXX  ->  9665XXXXXXXX   (drop the leading 0, add 966)
 *
 *  Google Maps link: open the shop in Google Maps -> Share -> Copy link,
 *  and paste it below (e.g. https://maps.app.goo.gl/xxxxxxxx).
 */

export type Lang = "ar" | "en";
export type Localized = Record<Lang, string>;

export const siteConfig = {
  /** Name as written on the shop signboard and logo. */
  name: {
    ar: "شركة إطارات الأداء المميز لخدمات السيارات",
    // English rendering of the Arabic signboard name.
    // TODO: confirm or replace with your officially registered English name.
    en: "Premium Performance Tyres Co. for Car Services",
  } satisfies Localized,

  /** Short name used in the header on small screens. */
  shortName: {
    ar: "الأداء المميز",
    en: "Premium Performance Tyres",
  } satisfies Localized,

  /** Slogan printed on the in-store banner. */
  slogan: {
    ar: "جودة نضمنها... وثقة نبنيها",
    en: "Quality we guarantee… trust we build",
  } satisfies Localized,

  /** Main phone number for calls, e.g. "9665XXXXXXXX". */
  phone: "966506866253",

  /** WhatsApp number, e.g. "9665XXXXXXXX". Can be the same as phone. */
  whatsapp: "966506866253",

  /** Pre-filled WhatsApp message (optional). */
  whatsappMessage: {
    ar: "السلام عليكم، أرغب في الاستفسار عن خدماتكم.",
    en: "Hello, I would like to ask about your services.",
  } satisfies Localized,

  /** Exact Google Maps share link of the shop. */
  mapsUrl: "https://maps.app.goo.gl/xz4cHXEKuZVKKk6u9",

  /** Street address, e.g. "طريق ..., حي ..., الرياض". */
  address: {
    ar: "",
    en: "",
  } satisfies Localized,

  /**
   * Opening hours. Example entry:
   * { days: { ar: "السبت – الخميس", en: "Sat – Thu" }, time: { ar: "8 ص – 11 م", en: "8 AM – 11 PM" } }
   */
  hours: [] as { days: Localized; time: Localized }[],

  /**
   * Final website address, e.g. "https://www.example.com".
   * Optional on Vercel (the production URL is detected automatically).
   */
  siteUrl: "",
};

/* ----------------------------------------------------------------------------
 *  SERVICES — every entry below is confirmed by the shop's own signage,
 *  banners or photographs. Set `enabled: false` to hide a service.
 * ------------------------------------------------------------------------- */
export type Service = {
  id: string;
  enabled: boolean;
  title: Localized;
  description: Localized;
  image: string;
  /** CSS object-position, to focus on part of a photo. */
  focus?: string;
};

export const services: Service[] = [
  {
    id: "tyres",
    enabled: true,
    title: { ar: "بيع الإطارات", en: "Tyre Sales" },
    description: {
      ar: "تشكيلة واسعة من الإطارات بمقاسات متعددة، منها إطارات هانكوك.",
      en: "A wide range of tyres in many sizes, including Hankook.",
    },
    image: "/images/hankook-tyres-rack.jpg",
  },
  {
    id: "fitting",
    enabled: true,
    // Puncture repair is listed per the owner's brief (not visible on signage).
    title: { ar: "تركيب الإطارات وإصلاح البنشر", en: "Tyre Fitting & Puncture Repair" },
    description: {
      ar: "فك وتركيب الإطارات بأجهزة حديثة، وإصلاح ثقوب الإطارات بسرعة وإتقان.",
      en: "Tyre fitting with modern machines, plus fast, careful puncture repair.",
    },
    image: "/images/wheel-balancing-team.jpg",
  },
  {
    id: "balancing",
    enabled: true,
    title: { ar: "ترصيص الكفرات", en: "Wheel Balancing" },
    description: {
      ar: "ترصيص بأجهزة موازنة إلكترونية لقيادة سلسة بدون اهتزاز.",
      en: "Electronic wheel balancing for a smooth, vibration-free drive.",
    },
    image: "/images/wheel-balancing-machines.jpg",
  },
  {
    id: "alignment",
    enabled: true,
    title: { ar: "ميزان أذرعة بالليزر", en: "Laser Wheel Alignment" },
    description: {
      ar: "ضبط زوايا الإطارات بنظام ليزر على منصات ميزان مخصصة.",
      en: "Precise wheel alignment with a laser system on dedicated alignment lifts.",
    },
    image: "/images/wheel-alignment-land-cruiser.jpg",
  },
  {
    id: "oil",
    enabled: true,
    title: { ar: "زيوت وتغيير الزيت", en: "Engine Oil & Oil Change" },
    description: {
      ar: "زيوت محركات من علامات معروفة، وتغيير الزيت بمعدات تصريف وشفط مخصصة.",
      en: "Engine oils from well-known brands, changed with dedicated drain and extraction equipment.",
    },
    image: "/images/oil-change-equipment.jpg",
  },
  {
    id: "batteries",
    enabled: true,
    title: { ar: "بطاريات السيارات", en: "Car Batteries" },
    description: {
      ar: "بطاريات سيارات بمقاسات مختلفة لمختلف أنواع السيارات.",
      en: "Car batteries in different sizes for a variety of vehicles.",
    },
    image: "/images/batteries-crop.jpg",
  },
  {
    id: "tpms",
    enabled: true,
    title: { ar: "حساسات الكفرات", en: "Tyre Pressure Sensors (TPMS)" },
    description: {
      ar: "حساسات ضغط الإطارات وفحصها بأجهزة متخصصة.",
      en: "Tyre pressure sensors, checked with dedicated diagnostic tools.",
    },
    image: "/images/tpms-sensors-crop.jpg",
  },
  {
    id: "mechanical",
    enabled: true,
    title: { ar: "ميكانيكا عامة", en: "General Mechanical Work" },
    description: {
      ar: "أعمال ميكانيكية عامة على رافعات حديثة داخل الورشة.",
      en: "General mechanical work on modern vehicle lifts in our workshop.",
    },
    image: "/images/two-post-car-lifts.jpg",
  },
];

/* ----------------------------------------------------------------------------
 *  PRODUCTS — brands listed are only those visible in the shop photographs.
 * ------------------------------------------------------------------------- */
export type Product = {
  id: string;
  title: Localized;
  description: Localized;
  brands: string[];
  image: string;
  focus?: string;
};

export const products: Product[] = [
  {
    id: "tyres",
    title: { ar: "الإطارات", en: "Tyres" },
    description: {
      ar: "مخزون كبير داخل المحل من إطارات هانكوك وعلامات أخرى.",
      en: "Large in-store stock of Hankook and other tyre brands.",
    },
    brands: ["Hankook"],
    image: "/images/tyre-stock-wall.jpg",
  },
  {
    id: "oils",
    title: { ar: "زيوت المحركات", en: "Engine Oils" },
    description: {
      ar: "زيوت محركات بلزوجات مختلفة تناسب سيارتك.",
      en: "Engine oils in different grades to suit your car.",
    },
    brands: ["Toyota", "Shell Helix", "Castrol", "TotalEnergies"],
    image: "/images/engine-oil-display.jpg",
    focus: "50% 70%",
  },
  {
    id: "batteries",
    title: { ar: "البطاريات", en: "Batteries" },
    description: {
      ar: "بطاريات من علامات معروفة بمقاسات متعددة.",
      en: "Batteries from well-known brands in multiple sizes.",
    },
    brands: ["ACDelco", "Exide", "Amaron", "Varta", "Bosch", "Panasonic", "Hankook"],
    image: "/images/batteries-crop.jpg",
  },
  {
    id: "tpms",
    title: { ar: "حساسات ضغط الإطارات", en: "TPMS Sensors" },
    description: {
      ar: "حساسات ضغط الإطارات وأجهزة فحصها.",
      en: "Tyre pressure sensors and diagnostic tools.",
    },
    brands: [],
    image: "/images/tpms-sensors-crop.jpg",
  },
];

/* ----------------------------------------------------------------------------
 *  GALLERY — every shop photograph, in display order.
 * ------------------------------------------------------------------------- */
/** `wide: true` shows the photo across two grid columns (keeps the grid evenly filled). */
export type Photo = { src: string; width: number; height: number; alt: Localized; wide?: boolean };

export const gallery: Photo[] = [
  { src: "/images/shop-front-signboard-night.jpg", width: 1600, height: 1200, alt: { ar: "واجهة المحل ولوحة شركة إطارات الأداء المميز ليلاً", en: "Shop front and signboard at night" } },
  { src: "/images/shop-front-hankook-services-sign.jpg", width: 1280, height: 960, alt: { ar: "واجهة هانكوك مع لوحة الخدمات: بيع الإطارات والبطاريات، تركيب، ترصيص، ميزان ليزر", en: "Hankook storefront with services sign: tyres, batteries, fitting, balancing, laser alignment" } },
  { src: "/images/shop-front-hankook-cars.jpg", width: 1280, height: 960, alt: { ar: "سيارات داخل مداخل الورشة أمام لوحة هانكوك", en: "Cars in the workshop bays under the Hankook sign" } },
  { src: "/images/workshop-floor-night.jpg", width: 1280, height: 960, alt: { ar: "أرضية الورشة مع الرافعات وأجهزة الترصيص", en: "Workshop floor with lifts and balancing machines" } },
  { src: "/images/wheel-balancing-team.jpg", width: 960, height: 1280, alt: { ar: "فني يعمل على جهاز ترصيص الكفرات", en: "Technician working on a wheel balancing machine" } },
  { src: "/images/wheel-alignment-land-cruiser.jpg", width: 1600, height: 1200, alt: { ar: "لاندكروزر على منصة الميزان", en: "Land Cruiser on the wheel alignment lift" } },
  { src: "/images/laser-alignment-system.jpg", width: 1280, height: 960, alt: { ar: "جهاز ميزان الأذرعة بالليزر", en: "Laser wheel alignment system" } },
  { src: "/images/alignment-bay-tyre-stock.jpg", width: 960, height: 1280, alt: { ar: "منصة الميزان ومخزون الإطارات", en: "Alignment bay and tyre stock" } },
  { src: "/images/wheel-alignment-bay.jpg", width: 960, height: 1280, alt: { ar: "منصة ميزان أذرعة جاهزة للعمل", en: "Wheel alignment bay ready for work" } },
  { src: "/images/two-post-car-lifts.jpg", width: 960, height: 1280, alt: { ar: "رافعات سيارات حديثة داخل الورشة", en: "Modern two-post vehicle lifts" } },
  { src: "/images/wheel-balancing-machines.jpg", width: 960, height: 1280, alt: { ar: "أجهزة ترصيص وتركيب الإطارات", en: "Wheel balancing and tyre fitting machines" } },
  { src: "/images/oil-change-equipment.jpg", width: 1200, height: 1600, alt: { ar: "معدات تصريف وتغيير الزيت", en: "Oil drain and oil change equipment" } },
  { src: "/images/engine-oil-display.jpg", width: 1200, height: 1600, alt: { ar: "عرض زيوت المحركات", en: "Engine oil display" } },
  { src: "/images/hankook-tyres-rack.jpg", width: 1200, height: 1600, alt: { ar: "رفوف إطارات هانكوك", en: "Racks of Hankook tyres" } },
  { src: "/images/tyre-stock-wall.jpg", width: 1280, height: 960, wide: true, alt: { ar: "جدار مخزون الإطارات", en: "Wall of tyre stock" } },
  { src: "/images/tpms-sensors-batteries-banner.jpg", width: 1280, height: 960, alt: { ar: "لوحة حساسات الكفرات والبطاريات", en: "Tyre sensors and batteries banner" } },
  { src: "/images/services-banner-premium-tyres.jpg", width: 1280, height: 960, alt: { ar: "لوحة خدماتنا: كفرات، زيوت، ميكانيكي، ترصيص، ميزان، بطاريات", en: "Our services banner: tyres, oils, mechanical, balancing, alignment, batteries" } },
  { src: "/images/showroom-services-banner.jpg", width: 1280, height: 960, alt: { ar: "صالة العرض ولوحة الخدمات", en: "Showroom with services banner" } },
  { src: "/images/company-banner-workshop.jpg", width: 1280, height: 960, wide: true, alt: { ar: "لوحة الشركة: جودة نضمنها وثقة نبنيها", en: "Company banner: quality we guarantee, trust we build" } },
];

/** The hero photograph (shop front with full company name). */
export const heroImage = gallery[0];
