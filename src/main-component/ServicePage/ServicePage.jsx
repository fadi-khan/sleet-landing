import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import FunFact from '../../components/FunFact/FunFact';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FeaturesSectionS2 from '../../components/FeaturesSectionS2/FeaturesSectionS2';
import TestimonialS2 from '../../components/TestimonialS2/TestimonialS2';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
const ServicePage = () => {
    
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Services'} />
            <ServiceSectionS3 hclass={"wpo-service-section-s4 section-padding"} SectionTitleShow={true} ServiceBtn={true}  />
            <FunFact hclass={'wpo-funfact-section section-padding'} />
            <ServiceSection hclass={"wpo-service-section section-padding"}  />
            <FeaturesSectionS2 hclass={'wpo-features-section-s2'}/>
            <TestimonialS2 hclass={'wpo-testimonial-section-s2 s4 section-padding'} />
            <BlogSection hclass={'wpo-blog-section section-padding'}/>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
