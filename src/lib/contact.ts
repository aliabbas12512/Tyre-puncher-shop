import { siteConfig, type Lang } from "@/config/site";

/** Keeps digits only; returns "" unless it looks like a full international number. */
function normalize(number: string): string {
  const digits = number.replace(/\D/g, "");
  return digits.length >= 10 ? digits : "";
}

export type ContactLinks = {
  whatsapp: string | null;
  call: string | null;
  maps: string | null;
  phoneDisplay: string | null;
};

export function getContactLinks(lang: Lang): ContactLinks {
  const phone = normalize(siteConfig.phone);
  const wa = normalize(siteConfig.whatsapp);
  const message = siteConfig.whatsappMessage[lang];
  const maps = siteConfig.mapsUrl.trim();

  return {
    whatsapp: wa ? `https://wa.me/${wa}${message ? `?text=${encodeURIComponent(message)}` : ""}` : null,
    call: phone ? `tel:+${phone}` : null,
    maps: /^https:\/\//.test(maps) ? maps : null,
    phoneDisplay: phone ? formatPhone(phone) : null,
  };
}

/** 9665XXXXXXXX -> +966 5X XXX XXXX */
function formatPhone(digits: string): string {
  const m = digits.match(/^966(\d{2})(\d{3})(\d{4})$/);
  return m ? `+966 ${m[1]} ${m[2]} ${m[3]}` : `+${digits}`;
}

export function getSiteUrl(): string {
  const configured = siteConfig.siteUrl.trim().replace(/\/$/, "");
  if (configured) return configured;
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "http://localhost:3000";
}

export const isDev = process.env.NODE_ENV !== "production";
