import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import FunFact from '../../components/FunFact/FunFact';
import FeaturesSectionS2 from '../../components/FeaturesSectionS2/FeaturesSectionS2';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import GetTouchSection from '../../components/GetTouchSection/GetTouchSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png'

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            {/* <HeaderTop /> */}
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={t('about.pageTitle')} pagesub={t('about.pageSub')} />
            <About hclass={'wpo-about-section section-padding'} />
            <FunFactS2 hclass={'wpo-funfact-section-s3'} />
            <ServiceSectionS3 hclass={'wpo-service-section-s3 section-padding'}/>
            <ProcessSection hclass={'wpo-process-section section-padding'} />
            <FunFact hclass={'wpo-funfact-section section-padding'} />
            <FeaturesSectionS2 hclass={'wpo-features-section-s2'} />
            <Testimonial hclass={'wpo-testimonial-section section-padding'} />
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <TeamSection hclass={'wpo-team-section-s2 section-padding'} />
            <GetTouchSection/>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar /> 
        </Fragment>
    )
};
export default AboutPage;
