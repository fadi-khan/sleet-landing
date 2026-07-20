import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/i18n/metadata";
import Services from "@/api/Services";
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
  const title = t(`${dataKey}.title`);
  const description = t(`${dataKey}.description`);

  return {
    title,
    description,
    alternates: localeAlternates(`/service-single/${slug}`),
    openGraph: {
      title,
      description,
      images: [{ url: service.banner }],
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
