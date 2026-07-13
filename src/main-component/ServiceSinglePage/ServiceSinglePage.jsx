import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png'

const ServiceSinglePage = (props) => {

    const { t } = useTranslation();
    const { slug } = useParams()
    const serviceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            {/* <HeaderTop /> */}
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={t('serviceSingle.pageTitle')} pagesub={serviceDetails.title} bgimg={serviceDetails.banner} />
            <section className="wpo-service-single-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 order-lg-2">
                            <div className="service-single-wrap">
                                <div className="title-image">
                                    {serviceDetails.isCommingSoon && (
                                        <span className="coming-soon-badge">{t('serviceSingle.comingSoon')}</span>
                                    )}
                                    <img src={serviceDetails.simag} alt={serviceDetails.title} />
                                </div>

                                <span className="s-subtitle">{serviceDetails.subtitle}</span>
                                <h2>{serviceDetails.title}</h2>
                                <p>{serviceDetails.description}</p>

                                {serviceDetails.features && serviceDetails.features.length > 0 && (
                                    <div className="feature-block">
                                        <h3>{t('serviceSingle.features')}</h3>
                                        <ul className="feature-grid">
                                            {serviceDetails.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {serviceDetails.slug === 'sleet-ai' && (
                                    <div className="ai-extra-block">
                                        <h3>{t('serviceSingle.generateReports')}</h3>
                                        <p>{t('serviceSingle.askQuestions')}</p>
                                        <ul className="sample-questions">
                                            {serviceDetails.sampleQuestions.map((question, index) => (
                                                <li key={index}>“{question}”</li>
                                            ))}
                                        </ul>

                                        <h3>{t('serviceSingle.outputFormats')}</h3>
                                        <ul className="feature-grid">
                                            {serviceDetails.outputFormats.map((format, index) => (
                                                <li key={index}>{format}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {serviceDetails.note && (
                                    <h3 className="quate">{serviceDetails.note}</h3>
                                )}
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
