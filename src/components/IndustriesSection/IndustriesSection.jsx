"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import { getLandingPagesByGroup, landingPath } from '../../lib/api/landingPages';

// The customer types Sleet serves, each linking to its landing page.
const IndustriesSection = (props) => {
    const t = useTranslations();
    const industries = getLandingPagesByGroup('industries');

    return (
        <section className={"wpo-industries-section section-padding" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="wpo-section-title">
                    <h2 role="presentation">{t('landing.home.industriesEyebrow')}</h2>
                    <h3 aria-level={2}>{t('landing.home.industriesTitle')}</h3>
                </div>
                <div className="landing-link-grid">
                    {industries.map((page) => (
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

export default IndustriesSection;
