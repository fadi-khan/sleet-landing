import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    deviceSizes: [425, 551, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [
      "import",
      "color-functions",
      "slash-div",
      "global-builtin",
    ],
  },
  async redirects() {
    return [
      {
        source: "/:locale/home",
        destination: "/:locale",
        permanent: true,
      },
      // service pages moved from /service-single/<product name> to
      // keyword-led /solutions/<slug> URLs
      ...Object.entries({
        "sleet-logistics": "fleet-management-system",
        "sleet-saas": "logistics-management-system",
        "sleet-tnc": "truck-booking-marketplace",
        "sleet-ai": "ai-logistics-reporting",
      }).map(([from, to]) => ({
        source: `/:locale/service-single/${from}`,
        destination: `/:locale/solutions/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default withNextIntl(nextConfig);
