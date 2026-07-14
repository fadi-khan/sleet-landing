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
    const dataKey = `servicesData.${serviceDetails.key}`
    const title = t(`${dataKey}.title`)
    const subtitle = t(`${dataKey}.subtitle`)
    const description = t(`${dataKey}.description`)
    const features = t(`${dataKey}.features`, { returnObjects: true, defaultValue: [] })
    const note = t(`${dataKey}.note`, { defaultValue: '' })
    const sampleQuestions = t(`${dataKey}.sampleQuestions`, { returnObjects: true, defaultValue: [] })
    const outputFormats = t(`${dataKey}.outputFormats`, { returnObjects: true, defaultValue: [] })

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

                                {serviceDetails.slug === 'sleet-ai' && (
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
                                    {serviceDetails.isCommingSoon && (
                                        <span className="coming-soon-badge">{t('serviceSingle.comingSoon')}</span>
                                    )}
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
