import { routing } from "./routing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadataBase = new URL(siteUrl);

// Builds the `alternates` block for a page: its canonical URL plus the
// hreflang map, e.g. localeAlternates("/about", "ar") ->
//   { canonical: "/ar/about",
//     languages: { en: "/en/about", ar: "/ar/about", "x-default": "/en/about" } }
// Pass the locale being rendered; without it no canonical is emitted.
export function localeAlternates(pathname = "", locale) {
  const languages = Object.fromEntries(
    routing.locales.map((item) => [item, `/${item}${pathname}`])
  );
  languages["x-default"] = `/${routing.defaultLocale}${pathname}`;

  return {
    ...(locale ? { canonical: `/${locale}${pathname}` } : {}),
    languages,
  };
}
