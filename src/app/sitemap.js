import { routing } from "@/i18n/routing";
import { metadataBase } from "@/i18n/metadata";
import Services from "@/lib/api/Services";

const staticPaths = ["", "/about", "/faq", "/contact"];
const servicePaths = Services.map((service) => `/service-single/${service.slug}`);

export default function sitemap() {
  const paths = [...staticPaths, ...servicePaths];

  return paths.map((path) => ({
    url: new URL(`/${routing.defaultLocale}${path}`, metadataBase).toString(),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          new URL(`/${locale}${path}`, metadataBase).toString(),
        ])
      ),
    },
  }));
}
