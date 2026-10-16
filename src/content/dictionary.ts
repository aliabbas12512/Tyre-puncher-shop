import type { Lang } from "@/config/site";

const ar = {
  nav: { home: "الرئيسية", branches: "فروعنا", services: "خدماتنا", products: "منتجاتنا", gallery: "الصور", contact: "تواصل معنا" },
  switchTo: "English",
  switchToLabel: "Switch to English",
  menu: "القائمة",
  close: "إغلاق",
  hero: {
    eyebrow: "إطارات • بطاريات • زيوت • ميزان • ترصيص",
    intro: "إطارات وبطاريات وزيوت محركات، مع التركيب والترصيص وميزان الأذرعة بالليزر — كل ما تحتاجه سيارتك في مكان واحد.",
  },
  actions: {
    whatsapp: "تواصل واتساب",
    call: "اتصل الآن",
    callShort: "اتصال",
    location: "موقعنا على الخريطة",
    services: "شاهد خدماتنا",
    gallery: "صور المحل",
  },
  highlights: [
    { title: "ميزان أذرعة بالليزر", text: "منصات ميزان مخصصة" },
    { title: "ترصيص إلكتروني", text: "أجهزة موازنة حديثة" },
    { title: "مخزون إطارات كبير", text: "مقاسات متعددة داخل المحل" },
    { title: "رافعات حديثة", text: "ورشة مجهزة بالكامل" },
  ],
  branches: {
    kicker: "فروعنا",
    title: "6 فروع لخدمتكم",
    text: "اختر الفرع الأقرب إليك — لكل فرع موقعه وخدماته الخاصة.",
    branch: "الفرع",
    servicesLabel: "خدمات الفرع:",
    directions: "موقع الفرع على الخريطة",
    greeting: "السلام عليكم، أرغب في الاستفسار من",
    photoOf: "واجهة",
  },
  services: { kicker: "خدماتنا", title: "خدمات متكاملة لسيارتك", text: "اضغط على زر واتساب في أي خدمة لتصلنا رسالتك مع تفاصيلها مباشرة.", ask: "استفسر عبر واتساب", greeting: "السلام عليكم، أرغب في الاستفسار عن خدمة:", productGreeting: "السلام عليكم، أرغب في الاستفسار عن توفر:" },
  products: {
    kicker: "منتجاتنا",
    title: "منتجات من علامات معروفة",
    text: "تختلف المقاسات المتوفرة من وقت لآخر — تواصل معنا للتأكد من توفر مقاس سيارتك.",
    brandsLabel: "علامات ظاهرة في المحل:",
    ask: "اسأل عن التوفر",
  },
  gallery: { kicker: "معرض الصور", title: "جولة داخل المحل", text: "اضغط على أي صورة لعرضها بحجم أكبر.", open: "عرض الصورة", prev: "الصورة السابقة", next: "الصورة التالية", of: "من" },
  contact: {
    kicker: "تواصل معنا",
    title: "زورونا أو تواصلوا معنا",
    text: "تواصل معنا عبر الواتساب أو الاتصال، أو افتح الموقع على الخريطة للوصول إلينا.",
    address: "العنوان",
    hours: "أوقات العمل",
    phone: "الهاتف",
    whatsapp: "واتساب",
    directions: "الاتجاهات",
    openMaps: "افتح في خرائط Google",
    comingSoon: "سيتم إضافة بيانات التواصل قريبًا.",
    devNote: "غير مُعدّ — أضفه في src/config/site.ts",
  },
  footer: { closing: "نخدمكم بأمانة وجودة — نتشرف بزيارتكم.", rights: "جميع الحقوق محفوظة." },
};

type Dictionary = typeof ar;

const en: Dictionary = {
  nav: { home: "Home", branches: "Branches", services: "Services", products: "Products", gallery: "Gallery", contact: "Contact" },
  switchTo: "العربية",
  switchToLabel: "التبديل إلى العربية",
  menu: "Menu",
  close: "Close",
  hero: {
    eyebrow: "Tyres • Batteries • Oils • Alignment • Balancing",
    intro: "Tyres, batteries and engine oils — with fitting, wheel balancing and laser alignment. Everything your car needs, in one place.",
  },
  actions: {
    whatsapp: "WhatsApp Us",
    call: "Call Now",
    callShort: "Call",
    location: "View Location",
    services: "Our Services",
    gallery: "Shop Photos",
  },
  highlights: [
    { title: "Laser Alignment", text: "Dedicated alignment lifts" },
    { title: "Electronic Balancing", text: "Modern balancing machines" },
    { title: "Large Tyre Stock", text: "Many sizes in store" },
    { title: "Modern Lifts", text: "Fully equipped workshop" },
  ],
  branches: {
    kicker: "Our Branches",
    title: "6 branches to serve you",
    text: "Choose the branch nearest to you — each has its own location and services.",
    branch: "Branch",
    servicesLabel: "Branch services:",
    directions: "Branch location on map",
    greeting: "Hello, I have an inquiry for",
    photoOf: "Front of",
  },
  services: { kicker: "Services", title: "Complete care for your car", text: "Tap the WhatsApp button on any service to message us with its details instantly.", ask: "Ask on WhatsApp", greeting: "Hello, I would like to ask about this service:", productGreeting: "Hello, I would like to check availability of:" },
  products: {
    kicker: "Products",
    title: "Products from trusted brands",
    text: "Available sizes change over time — contact us to confirm your size is in stock.",
    brandsLabel: "Brands seen in our shop:",
    ask: "Ask about availability",
  },
  gallery: { kicker: "Gallery", title: "A look inside our shop", text: "Tap any photo to view it larger.", open: "View photo", prev: "Previous photo", next: "Next photo", of: "of" },
  contact: {
    kicker: "Contact",
    title: "Visit us or get in touch",
    text: "Message us on WhatsApp, give us a call, or open the map for directions.",
    address: "Address",
    hours: "Opening hours",
    phone: "Phone",
    whatsapp: "WhatsApp",
    directions: "Directions",
    openMaps: "Open in Google Maps",
    comingSoon: "Contact details will be added soon.",
    devNote: "Not configured — add it in src/config/site.ts",
  },
  footer: { closing: "Honest, quality service — we look forward to your visit.", rights: "All rights reserved." },
};

export const dictionaries: Record<Lang, Dictionary> = { ar, en };
export type { Dictionary };
