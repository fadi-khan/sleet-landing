import {
    FaVideo, FaThermometerHalf, FaGasPump, FaQrcode, FaIdCard,
    FaShieldAlt, FaShoppingCart, FaTruckMoving
} from 'react-icons/fa'

// Feature and customer-type landing pages. Each entry is one public URL:
//   /features/<slug>    (group: 'features')
//   /industries/<slug>  (group: 'industries')
// The text lives in the locale files under `landing.pages.<key>`.
//
// screenshots: import an image at the top of this file and put it here in
// place of null (e.g. `main: DashcamShot`). While it is null the page shows a
// labelled placeholder box. `main` sits beside the intro, `secondary` beside
// the "how it works" steps.
//
// enabled: false removes the page everywhere (route, sitemap, home page,
// footer, related links).
const allLandingPages = [
    {
        key: 'dashcam',
        group: 'features',
        slug: 'fleet-dashcam-live-video',
        Icon: FaVideo,
        related: ['temperature', 'fuel', 'transport'],
        screenshots: { main: null, secondary: null },
    },
    {
        key: 'temperature',
        group: 'features',
        slug: 'truck-temperature-monitoring',
        Icon: FaThermometerHalf,
        related: ['dashcam', 'proofOfDelivery', 'ecommerce'],
        screenshots: { main: null, secondary: null },
    },
    {
        key: 'fuel',
        group: 'features',
        slug: 'fleet-fuel-monitoring',
        Icon: FaGasPump,
        related: ['documentExpiry', 'dashcam', 'transport'],
        screenshots: { main: null, secondary: null },
    },
    {
        key: 'proofOfDelivery',
        group: 'features',
        slug: 'proof-of-delivery',
        Icon: FaQrcode,
        related: ['temperature', 'ecommerce', 'fuel'],
        screenshots: { main: null, secondary: null },
    },
    {
        key: 'documentExpiry',
        group: 'features',
        slug: 'vehicle-document-expiry-alerts',
        Icon: FaIdCard,
        related: ['fuel', 'dashcam', 'transport'],
        screenshots: { main: null, secondary: null },
    },
    {
        key: 'wasl',
        group: 'features',
        slug: 'wasl-integration',
        Icon: FaShieldAlt,
        related: ['dashcam', 'documentExpiry', 'transport'],
        screenshots: { main: null, secondary: null },
        // Wasl approval is still pending, so this page only exists on the
        // dev server and is left out of production builds. Set to `true`
        // once the integration is approved and live.
        enabled: process.env.NODE_ENV !== 'production',
    },
    {
        key: 'ecommerce',
        group: 'industries',
        slug: 'ecommerce-retail-delivery',
        Icon: FaShoppingCart,
        related: ['proofOfDelivery', 'temperature', 'transport'],
        screenshots: { main: null, secondary: null },
    },
    {
        key: 'transport',
        group: 'industries',
        slug: 'transport-fleet-companies',
        Icon: FaTruckMoving,
        related: ['dashcam', 'fuel', 'documentExpiry'],
        screenshots: { main: null, secondary: null },
    },
];

const LandingPages = allLandingPages.filter((page) => page.enabled !== false);

export const landingPath = (page) => `/${page.group}/${page.slug}`;

export const getLandingPage = (group, slug) =>
    LandingPages.find((page) => page.group === group && page.slug === slug);

export const getLandingPagesByGroup = (group) =>
    LandingPages.filter((page) => page.group === group);

export const getLandingPageByKey = (key) =>
    LandingPages.find((page) => page.key === key);

export default LandingPages;
