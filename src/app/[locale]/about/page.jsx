import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import AboutPage from "@/main-component/AboutPage/AboutPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("about.title"),
    description: t("about.description"),
    alternates: localeAlternates("/about"),
  };
}

export default function AboutRoute() {
  return <AboutPage />;
}
