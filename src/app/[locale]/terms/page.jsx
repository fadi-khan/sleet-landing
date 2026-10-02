import { localeAlternates } from "@/i18n/metadata";
import TermsPage from "@/main-component/TermsPage/TermsPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: "Terms & Conditions",
    description: "The terms that govern use of the Sleet Logistics website and services.",
    alternates: localeAlternates("/terms", locale),
    openGraph: {
      title: "Terms & Conditions",
      description: "The terms that govern use of the Sleet Logistics website and services.",
      type: "website",
      siteName: "Sleet Logistics",
    },
  };
}

export default function TermsRoute() {
  return <TermsPage />;
}
