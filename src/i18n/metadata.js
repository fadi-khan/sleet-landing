import { routing } from "./routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadataBase = new URL(siteUrl);

// Builds the `alternates.languages` (hreflang) map for a given path, e.g.
// localeAlternates("/about") -> { en: "/en/about", ar: "/ar/about" }
export function localeAlternates(pathname = "") {
  return {
    languages: Object.fromEntries(
      routing.locales.map((locale) => [locale, `/${locale}${pathname}`])
    ),
  };
}
