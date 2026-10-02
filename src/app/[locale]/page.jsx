import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import HomePage2 from "@/main-component/HomePage2/HomePage2";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    // absolute: the home title already ends with the brand, so the layout's
    // "%s | Sleet Logistics" template must not be appended to it
    title: { absolute: t("home.title") },
    description: t("home.description"),
    keywords: t("home.keywords"),
    alternates: localeAlternates("", locale),
    authors: [{ name: "Sleet Logistics" }],
    openGraph: {
      title: t("home.title"),
      description: t("home.description"),
      type: "website",
      siteName: "Sleet Logistics",
    },
    twitter: {
      card: "summary_large_image",
      title: t("home.title"),
      description: t("home.description"),
    },
  };
}

export default function HomeRoute() {
  return <HomePage2 />;
}
