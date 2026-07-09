import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3.jsx';
import Hero3 from '../../components/hero3/Hero3.jsx';
import GetQuateSectionS2 from '../../components/GetQuateSectionS2/GetQuateSectionS2.jsx';
import PartnersSection from '../../components/PartnersSection/PartnersSection.jsx';
import IntroCounterSection from '../../components/IntroCounterSection/IntroCounterSection.jsx';
import FeaturesSectionS3 from '../../components/FeaturesSectionS3/FeaturesSectionS3.jsx';
import FunFactS2 from '../../components/FunFactS2/FunFactS2.jsx';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3.jsx';
import GetQuateSectionS3 from '../../components/GetQuateSectionS3/GetQuateSectionS3.jsx';
import PricingSectionS2 from '../../components/PricingSectionS2/PricingSectionS2.jsx';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3.jsx';
import TestimonialS3 from '../../components/TestimonialS3/TestimonialS3.jsx';
import ProcessSectionS2 from '../../components/ProcessSectionS2/ProcessSectionS2.jsx';
import FaqSectionS2 from '../../components/FaqSectionS2/FaqSectionS2.jsx';
import CtaSection from '../../components/CtaSection/CtaSection.jsx';
import BlogSectionS3 from '../../components/BlogSectionS3/BlogSectionS3.jsx';
import FooterS3 from '../../components/FooterS3/FooterS3.jsx';
import Scrollbar from '../../components/scrollbar/scrollbar.jsx';
import Logo from '../../images/logo.svg'
const HomePage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <Hero3 />
            <GetQuateSectionS2 hclass={'wpo-get-quate-section-s2'} />
            <PartnersSection CollClass={'wpo-partner-section-s3 section-padding'} />
            <IntroCounterSection />
            <FeaturesSectionS3   />
            <FunFactS2 hclass={'wpo-funfact-section-s3'} />
            <ServiceSectionS3 hclass={'wpo-service-section-s3 section-padding'}/>
            <GetQuateSectionS3 />
            <PricingSectionS2 hclass={'wpo-pricing-section-s2 section-padding'} />
            <ProjectSectionS3 hclass={'wpo-project-section-s3'}/>
            <ProcessSectionS2 hclass={'wpo-process-section-s3'}/>
            <TestimonialS3 />
            <FaqSectionS2 hclass={'wpo-faq-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section-s3'} />
            <BlogSectionS3 />
            <FooterS3 />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;