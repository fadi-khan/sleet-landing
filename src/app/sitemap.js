import { routing } from "@/i18n/routing";
import { metadataBase } from "@/i18n/metadata";
import Services from "@/lib/api/Services";
import LandingPages, { landingPath } from "@/lib/api/landingPages";

// /about is left out on purpose: it is still template content and is marked
// noindex until rewritten.
const staticPaths = ["", "/faq", "/contact", "/terms", "/privacy-policy"];
const servicePaths = Services.map((service) => `/solutions/${service.slug}`);
const landingPaths = LandingPages.map(landingPath);

export default function sitemap() {
  const paths = [...staticPaths, ...servicePaths, ...landingPaths];

  return paths.map((path) => ({
    url: new URL(`/${routing.defaultLocale}${path}`, metadataBase).toString(),
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
