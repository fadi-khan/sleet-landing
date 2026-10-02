"use client";

import React, { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import { Link } from '../../i18n/navigation';
import Accordion from '../../components/FaqSection/Accordion';
import ScreenshotPlaceholder from '../../components/ScreenshotPlaceholder/ScreenshotPlaceholder';
import CtaSection from '../../components/CtaSection/CtaSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { getLandingPageByKey, landingPath } from '../../lib/api/landingPages';
import Logo from '../../images/logo.png'

const LandingPage = ({ pageKey }) => {
    const t = useTranslations();
    const page = getLandingPageByKey(pageKey);
    const base = `landing.pages.${pageKey}`;

    const intro = t.raw(`${base}.intro`);
    const challenges = t.raw(`${base}.challenges`);
    const capabilities = t.raw(`${base}.capabilities`);
    const steps = t.raw(`${base}.steps`);
    const faq = t.raw(`${base}.faq`);
    const related = page.related.map(getLandingPageByKey).filter(Boolean);

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={t(`landing.common.groups.${page.group}`)} pagesub={t(`${base}.title`)} />

            <section className="landing-intro section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="landing-intro-text">
                                <div className="landing-icon"><page.Icon /></div>
                                <h2>{t(`${base}.heading`)}</h2>
                                {intro.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <div className="landing-actions">
                                    <Link href="/contact" className="theme-btn">{t('common.bookADemo')}</Link>
                                    <a href="https://app.sleet.sa/login" target="_blank" rel="noopener noreferrer" className="landing-link">{t('common.getStarted')}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <ScreenshotPlaceholder
                                image={page.screenshots.main}
                                label={t(`${base}.screenshot`)}
                                note={t('landing.common.screenshotNote')}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="landing-challenges section-padding">
                <div className="container">
                    <div className="wpo-section-title">
                        <h2 role="presentation">{t('landing.common.challengesEyebrow')}</h2>
                        <h3 aria-level={2}>{t(`${base}.challengesTitle`)}</h3>
                    </div>
                    <div className="landing-card-grid">
                        {challenges.map((item, index) => (
                            <div className="landing-card" key={index}>
                                <span className="number">{String(index + 1).padStart(2, '0')}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="landing-capabilities section-padding">
                <div className="container">
                    <div className="wpo-section-title">
                        <h2 role="presentation">{t('landing.common.capabilitiesEyebrow')}</h2>
                        <h3 aria-level={2}>{t(`${base}.capabilitiesTitle`)}</h3>
                    </div>
                    <ul className="landing-capability-grid">
                        {capabilities.map((item, index) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="landing-steps section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <ScreenshotPlaceholder
                                image={page.screenshots.secondary}
                                label={t(`${base}.screenshot2`)}
                                note={t('landing.common.screenshotNote')}
                            />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="landing-steps-text">
                                <div className="wpo-section-title">
                                    <h2 role="presentation">{t('landing.common.stepsEyebrow')}</h2>
                                    <h3 aria-level={2}>{t('landing.common.stepsTitle')}</h3>
                                </div>
                                <ol>
                                    {steps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wpo-faq-section landing-faq section-padding">
                <div className="container">
                    <div className="wpo-section-title">
                        <h2 role="presentation">{t('landing.common.faqEyebrow')}</h2>
                        <h3 aria-level={2}>{t('landing.common.faqTitle')}</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-12">
                            <Accordion items={faq} />
                        </div>
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="landing-related section-padding">
                    <div className="container">
                        <div className="wpo-section-title">
                            <h2 role="presentation">{t('landing.common.relatedEyebrow')}</h2>
                            <h3 aria-level={2}>{t('landing.common.relatedTitle')}</h3>
                        </div>
                        <div className="landing-link-grid">
                            {related.map((item) => (
                                <Link href={landingPath(item)} className="landing-link-card" key={item.key}>
                                    <item.Icon />
                                    <h3>{t(`landing.pages.${item.key}.navTitle`)}</h3>
                                    <p>{t(`landing.pages.${item.key}.cardText`)}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaSection hclass={'wpo-cta-section-s2 landing-cta'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default LandingPage;
