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
    ];
  },
};

export default withNextIntl(nextConfig);
