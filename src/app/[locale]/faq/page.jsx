import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import FaqPage from "@/main-component/FaqPage/FaqPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("faq.title"),
    description: t("faq.description"),
    keywords: t("faq.keywords"),
    alternates: localeAlternates("/faq"),
    openGraph: {
      title: t("faq.title"),
      description: t("faq.description"),
      type: "website",
      siteName: "Sleet Logistics",
    },
    twitter: {
      card: "summary_large_image",
      title: t("faq.title"),
      description: t("faq.description"),
    },
  };
}

export default function FaqRoute() {
  return <FaqPage />;
}
