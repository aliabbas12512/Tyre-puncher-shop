import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/contact";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${getSiteUrl()}/sitemap.xml` };
}
