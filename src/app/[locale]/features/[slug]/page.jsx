import { notFound } from "next/navigation";
import { getLandingPage } from "@/lib/api/landingPages";
import { landingJsonLd, landingMetadata, landingStaticParams } from "@/lib/landingRoute";
import LandingPage from "@/main-component/LandingPage/LandingPage";

const GROUP = "features";

export function generateStaticParams() {
  return landingStaticParams(GROUP);
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  return landingMetadata(GROUP, await params);
}

export default async function FeatureRoute({ params }) {
  const resolved = await params;
  const page = getLandingPage(GROUP, resolved.slug);

  if (!page) {
    notFound();
  }

  const jsonLd = await landingJsonLd(GROUP, resolved);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage pageKey={page.key} />
    </>
  );
}
