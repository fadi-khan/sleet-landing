import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { DM_Sans, Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { routing } from "@/i18n/routing";
import { metadataBase, localeAlternates } from "@/i18n/metadata";
import ToastProvider from "@/components/ToastProvider/ToastProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/font-awesome.min.css";
import "../../css/themify-icons.css";
import "../../css/flaticon_logistics.css";
import "../../sass/style.scss";
import "react-toastify/dist/ReactToastify.css";
import "../../components/FaqSection/Accordion.css";
import "../../components/MobileMenu/style.css";
import "../../components/scrollbar/style.css";
import "../globals.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase,
    title: {
      template: t("titleTemplate"),
      default: t("home.title"),
    },
    description: t("home.description"),
    keywords: t("home.keywords"),
    alternates: localeAlternates(""),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sleet Logistics",
    alternateName: "Sleet Automation Logistics",
    url: metadataBase.toString(),
    logo: new URL("/icon.png", metadataBase).toString(),
    description:
      "Sleet Automation Logistics is an all-in-one logistics technology platform combining intelligent fleet management, SaaS solutions, AI-powered automation, and a digital truck marketplace for goods delivery.",
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${dmSans.variable} ${plusJakartaSans.variable} ${tajawal.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AppRouterCacheProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <ToastProvider />
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
