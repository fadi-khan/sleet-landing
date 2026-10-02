import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import AboutPage from "@/main-component/AboutPage/AboutPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("about.title"),
    description: t("about.description"),
    keywords: t("about.keywords"),
    alternates: localeAlternates("/about", locale),
    // The page body is still template content; keep it out of search results
    // until it is rewritten.
    robots: { index: false, follow: true },
    openGraph: {
      title: t("about.title"),
      description: t("about.description"),
      type: "website",
      siteName: "Sleet Logistics",
    },
    twitter: {
      card: "summary_large_image",
      title: t("about.title"),
      description: t("about.description"),
    },
  };
}

export default function AboutRoute() {
  return <AboutPage />;
}
