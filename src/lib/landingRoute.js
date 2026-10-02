import { getTranslations } from "next-intl/server";
import { localeAlternates, metadataBase } from "@/i18n/metadata";
import { getLandingPage, getLandingPagesByGroup, landingPath } from "@/lib/api/landingPages";

// Shared by the /features/[slug] and /industries/[slug] routes.

export function landingStaticParams(group) {
  return getLandingPagesByGroup(group).map((page) => ({ slug: page.slug }));
}

export async function landingMetadata(group, { locale, slug }) {
  const page = getLandingPage(group, slug);

  if (!page) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: `landing.pages.${page.key}` });
  const title = `${t("metaTitle")} | Sleet`;
  const description = t("metaDescription");

  return {
    title: { absolute: title },
    description,
    alternates: localeAlternates(landingPath(page), locale),
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Sleet Logistics",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// Breadcrumb + FAQ structured data for one landing page.
export async function landingJsonLd(group, { locale, slug }) {
  const page = getLandingPage(group, slug);
  const t = await getTranslations({ locale, namespace: "landing" });
  const url = (path) => new URL(`/${locale}${path}`, metadataBase).toString();

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sleet", item: url("") },
        {
          "@type": "ListItem",
          position: 2,
          name: t(`pages.${page.key}.title`),
          item: url(landingPath(page)),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.raw(`pages.${page.key}.faq`).map((item) => ({
        "@type": "Question",
        name: item.title,
        acceptedAnswer: { "@type": "Answer", text: item.content },
      })),
    },
  ];
}
