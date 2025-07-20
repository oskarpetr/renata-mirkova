import { baseUrl } from "@/utils/seo";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/adr/",
        "/obchodni-podminky/",
        "/ochrana-udaju/",
        "/zasady-cookies/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
