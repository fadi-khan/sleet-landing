"use client";

import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import FunFactS2 from '../../components/FunFactS2/FunFactS2';
import AboutS2 from '../../components/aboutS2/aboutS2';
import ProcessSectionS2 from '../../components/ProcessSectionS2/ProcessSectionS2';
import FeaturesSectionS2 from '../../components/FeaturesSectionS2/FeaturesSectionS2';
import FaqSection from '../../components/FaqSection/FaqSection';
import GetTouchSection from '../../components/GetTouchSection/GetTouchSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-2.svg'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import AboutSleetSection from '../../components/AboutSleetSection/AboutSleetSection';
import WhyChooseSection from '../../components/WhyChooseSection/WhyChooseSection';
import IndustriesSection from '../../components/IndustriesSection/IndustriesSection';
import VisionSection from '../../components/VisionSection/VisionSection';

const HomePage2 = () => {
    return (
        <Fragment>
            <NavbarS2 Logo={Logo} />
            <HeroSlider />
            <FunFactS2 hclass={'wpo-funfact-section-s2 section-padding'} />

            <ServiceSection hclass={"wpo-service-section section-padding"} SectionTitleShow={true} ServiceBtn={true} />
            <AboutSleetSection />
            <AboutS2 />
            <WhyChooseSection />
            <ProcessSectionS2 hclass={'wpo-process-section-s2'} />
            <FeaturesSectionS2 hclass={'wpo-features-section-s2'} />
            <IndustriesSection />
            {/* <ProjectTestimonialSection /> */}
            {/* <PartnersSection CollClass={'wpo-partner-section-s2 section-padding'} /> */}
            <VisionSection />
            <FaqSection hclass={'wpo-faq-section section-padding'} />
            <GetTouchSection hclass={'wpo-get-touch-section section-padding'} />
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;