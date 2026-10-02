"use client";

import React, { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import ServiceSidebar from './sidebar'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import { Link } from '../../i18n/navigation';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { getLandingPageByKey, landingPath } from '../../lib/api/landingPages';
import Logo from '../../images/logo.png'

const ServiceSinglePage = ({ serviceDetails }) => {

    const t = useTranslations();
    const dataKey = `servicesData.${serviceDetails.key}`
    const title = t(`${dataKey}.title`)
    const subtitle = t(`${dataKey}.subtitle`)
    const description = t(`${dataKey}.description`)
    const features = t.has(`${dataKey}.features`) ? t.raw(`${dataKey}.features`) : []
    const details = t.has(`${dataKey}.details`) ? t.raw(`${dataKey}.details`) : []
    const related = (serviceDetails.related || []).map(getLandingPageByKey).filter(Boolean)
    const note = t.has(`${dataKey}.note`) ? t(`${dataKey}.note`) : ''
    const sampleQuestions = t.has(`${dataKey}.sampleQuestions`) ? t.raw(`${dataKey}.sampleQuestions`) : []
    const outputFormats = t.has(`${dataKey}.outputFormats`) ? t.raw(`${dataKey}.outputFormats`) : []

    return (
        <Fragment>
            {/* <HeaderTop /> */}
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={t('serviceSingle.pageTitle')} pagesub={title} bgimg={serviceDetails.banner} />
            <section className="wpo-service-single-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 order-lg-2 px-5">
                            <div className="service-single-wrap">
                                <span className="s-subtitle">{subtitle}</span>
                                <h2>{title}</h2>

                                {serviceDetails.isCommingSoon && (
                                    <div className="coming-soon-notice">
                                        <span className="soon-tag">{t('serviceSingle.comingSoon')}</span>
                                        <p>{t('serviceSingle.comingSoonNotice')}</p>
                                        <Link href="/contact" className="theme-btn">{t('serviceSingle.notifyMe')}</Link>
                                    </div>
                                )}

                                <p>{description}</p>

                                {features.length > 0 && (
                                    <div className="feature-block">
                                        <h3>{t('serviceSingle.features')}</h3>
                                        <ul className="feature-grid">
                                            {features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {details.length > 0 && (
                                    <div className="detail-block">
                                        <h3>{t('serviceSingle.detailsTitle')}</h3>
                                        {details.map((item, index) => (
                                            <div className="detail-item" key={index}>
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {related.length > 0 && (
                                    <div className="detail-block">
                                        <h3>{t('serviceSingle.relatedTitle')}</h3>
                                        <div className="related-links">
                                            {related.map((page) => (
                                                <Link href={landingPath(page)} key={page.key}>{t(`landing.pages.${page.key}.navTitle`)}</Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {serviceDetails.key === 'sleetAi' && (
                                    <div className="ai-extra-block">
                                        <h3>{t('serviceSingle.generateReports')}</h3>
                                        <p>{t('serviceSingle.askQuestions')}</p>
                                        <ul className="sample-questions">
                                            {sampleQuestions.map((question, index) => (
                                                <li key={index}>“{question}”</li>
                                            ))}
                                        </ul>

                                        <h3>{t('serviceSingle.outputFormats')}</h3>
                                        <ul className="feature-grid">
                                            {outputFormats.map((format, index) => (
                                                <li key={index}>{format}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {note && (
                                    <h3 className="quate">{note}</h3>
                                )}

                                <div className="title-image">
                                    <img src={serviceDetails.simag} alt={title} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 order-lg-1">
                            <ServiceSidebar/>
                        </div>
                    </div>
                </div>
            </section>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
