 import { metadataBase } from "@/i18n/metadata";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: new URL("/sitemap.xml", metadataBase).toString(),
  };
}
