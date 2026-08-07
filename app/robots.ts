import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://mcmastervc.com/sitemap.xml",
    host: "https://mcmastervc.com",
  };
}
