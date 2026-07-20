import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import ContactPage from "@/main-component/ContactPage/ContactPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("contact.title"),
    description: t("contact.description"),
    alternates: localeAlternates("/contact"),
  };
}

export default function ContactRoute() {
  return <ContactPage />;
}
