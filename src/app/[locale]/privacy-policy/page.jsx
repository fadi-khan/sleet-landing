import { localeAlternates } from "@/i18n/metadata";
import PrivacyPolicyPage from "@/main-component/PrivacyPolicyPage/PrivacyPolicyPage";

export async function generateMetadata() {
  return {
    title: "Privacy Policy",
    description: "How Sleet Logistics collects, uses, and protects your data.",
    alternates: localeAlternates("/privacy-policy"),
    openGraph: {
      title: "Privacy Policy",
      description: "How Sleet Logistics collects, uses, and protects your data.",
      type: "website",
      siteName: "Sleet Logistics",
    },
  };
}

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage />;
}
