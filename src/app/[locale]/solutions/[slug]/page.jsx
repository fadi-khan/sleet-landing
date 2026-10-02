import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import Services from "@/lib/api/Services";
import ServiceSinglePage from "@/main-component/ServiceSinglePage/ServiceSinglePage";

export function generateStaticParams() {
  return Services.map((service) => ({ slug: service.slug }));
}

// The service catalog is a fixed, build-time-known set; anything outside
// generateStaticParams should 404 immediately rather than render on demand.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const service = Services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "servicesData" });
  const dataKey = service.key;
  // metaTitle/metaDescription are written for search results (keyword-led,
  // length-limited); the on-page title and description stay as they are.
  const title = `${t(`${dataKey}.metaTitle`)} | Sleet`;
  const description = t(`${dataKey}.metaDescription`);
  const keywords = t(`${dataKey}.keywords`);

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: localeAlternates(`/solutions/${slug}`, locale),
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Sleet Logistics",
      images: [{ url: service.banner }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.banner],
    },
  };
}

export default async function ServiceSingleRoute({ params }) {
  const { slug } = await params;
  const service = Services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  // Icon is a react-icons component (a function) and can't cross the
  // Server -> Client boundary as a prop.
  const { Icon, ...serviceDetails } = service;

  return <ServiceSinglePage serviceDetails={serviceDetails} />;
}
