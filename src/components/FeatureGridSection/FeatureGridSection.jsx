"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import { getLandingPagesByGroup, landingPath } from '../../lib/api/landingPages';

// Home page grid linking to each feature landing page.
const FeatureGridSection = () => {
    const t = useTranslations();
    const features = getLandingPagesByGroup('features');

    return (
        <section className="wpo-feature-grid-section section-padding">
            <div className="container">
                <div className="wpo-section-title">
                    <h2 role="presentation">{t('landing.home.featuresEyebrow')}</h2>
                    <h3 aria-level={2}>{t('landing.home.featuresTitle')}</h3>
                    <p>{t('landing.home.featuresText')}</p>
                </div>
                <div className="landing-link-grid">
                    {features.map((page) => (
                        <Link href={landingPath(page)} className="landing-link-card" key={page.key}>
                            <page.Icon />
                            <h3>{t(`landing.pages.${page.key}.navTitle`)}</h3>
                            <p>{t(`landing.pages.${page.key}.cardText`)}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGridSection;
