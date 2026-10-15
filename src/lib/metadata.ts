import type { Metadata, Viewport } from "next";
import { heroImage, siteConfig, type Lang } from "@/config/site";
import { getSiteUrl } from "./contact";

const keywords: Record<Lang, string[]> = {
  ar: ["إطارات", "كفرات", "بنشر", "تركيب إطارات", "ترصيص", "ميزان ليزر", "بطاريات سيارات", "زيوت محركات", "تغيير زيت", "حساسات كفرات", "هانكوك", "خدمات السيارات", "السعودية"],
  en: ["tyres", "tyre shop", "puncture repair", "tyre fitting", "wheel balancing", "laser wheel alignment", "car batteries", "engine oil", "oil change", "TPMS sensors", "Hankook", "car services", "Saudi Arabia"],
};

const descriptions: Record<Lang, string> = {
  ar: "بيع الإطارات والبطاريات وزيوت المحركات، تركيب الإطارات وإصلاح البنشر، ترصيص وميزان أذرعة بالليزر وحساسات الكفرات — شركة إطارات الأداء المميز لخدمات السيارات.",
  en: "Tyres, batteries and engine oils; tyre fitting and puncture repair, wheel balancing, laser wheel alignment and TPMS sensors — Premium Performance Tyres Co. for Car Services.",
};

export function buildMetadata(lang: Lang): Metadata {
  const url = getSiteUrl();
  const title = `${siteConfig.name[lang]} | ${lang === "ar" ? "إطارات • بطاريات • زيوت" : "Tyres • Batteries • Oils"}`;
  return {
    metadataBase: new URL(url),
    title,
    description: descriptions[lang],
    keywords: keywords[lang],
    alternates: {
      canonical: lang === "ar" ? "/" : "/en",
      languages: { ar: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      title,
      description: descriptions[lang],
      url: lang === "ar" ? "/" : "/en",
      siteName: siteConfig.name[lang],
      locale: lang === "ar" ? "ar_SA" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_SA",
      images: [{ url: heroImage.src, width: heroImage.width, height: heroImage.height, alt: heroImage.alt[lang] }],
    },
    twitter: { card: "summary_large_image", title, description: descriptions[lang], images: [heroImage.src] },
  };
}

export const viewport: Viewport = {
  themeColor: "#0e0f12",
  width: "device-width",
  initialScale: 1,
};
