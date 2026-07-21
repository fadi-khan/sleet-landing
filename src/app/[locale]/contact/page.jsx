import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import ContactPage from "@/main-component/ContactPage/ContactPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("contact.title"),
    description: t("contact.description"),
    keywords: t("contact.keywords"),
    alternates: localeAlternates("/contact"),
    openGraph: {
      title: t("contact.title"),
      description: t("contact.description"),
      type: "website",
      siteName: "Sleet Logistics",
    },
    twitter: {
      card: "summary_large_image",
      title: t("contact.title"),
      description: t("contact.description"),
    },
  };
}

export default function ContactRoute() {
  return <ContactPage />;
}
