import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const languages = { ar: url, en: `${url}/en` };
  return [
    { url, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${url}/en`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
