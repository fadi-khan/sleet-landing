import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import HomePage2 from "@/main-component/HomePage2/HomePage2";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("home.title"),
    description: t("home.description"),
    alternates: localeAlternates(""),
  };
}

export default function HomeRoute() {
  return <HomePage2 />;
}
