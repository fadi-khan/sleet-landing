import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import FaqPage from "@/main-component/FaqPage/FaqPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("faq.title"),
    description: t("faq.description"),
    alternates: localeAlternates("/faq"),
  };
}

export default function FaqRoute() {
  return <FaqPage />;
}
