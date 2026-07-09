import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx'
import HeroSlider from '../../components/HeroSlider/HeroSlider.jsx';
import About from '../../components/about/about.jsx';
import ServiceSection from '../../components/ServiceSection/ServiceSection.jsx';
import FunFact from '../../components/FunFact/FunFact.jsx';
import GetQuateSection from '../../components/GetQuateSection/GetQuateSection.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';
import ProcessSection from '../../components/ProcessSection/ProcessSection.jsx';
import ProjectSection from '../../components/ProjectSection/ProjectSection.jsx';
import Testimonial from '../../components/Testimonial/Testimonial.jsx';
import PartnersSection from '../../components/PartnersSection/PartnersSection.jsx';
import CtaSection from '../../components/CtaSection/CtaSection.jsx';
import TeamSection from '../../components/TeamSection/TeamSection.jsx';
import BlogSection from '../../components/BlogSection/BlogSection.jsx';
import MapSection from '../../components/MapSection/MapSection.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Scrollbar from '../../components/scrollbar/scrollbar.jsx';
import Logo from '../../images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <HeroSlider />
            <About hclass={'wpo-about-section'} />
            <ServiceSection hclass={"wpo-service-section section-padding"} SectionTitleShow={true} ServiceBtn={true} />
            <FunFact hclass={'wpo-funfact-section section-padding'} />
            <GetQuateSection hclass={'wpo-get-quate-section section-padding'}/>
            <FeaturesSection hclass={'wpo-features-section section-padding'}/>
            <ProcessSection hclass={'wpo-process-section section-padding'}/>
            <ProjectSection hclass={'wpo-project-section section-padding'} SectionTitleShow={true} projectBtn={true} />
            <Testimonial hclass={'wpo-testimonial-section section-padding'} />
            <PartnersSection CollClass={'wpo-partner-section section-padding'} />
            <CtaSection hclass={'wpo-cta-section'} />
            <TeamSection hclass={'wpo-team-section section-padding'} />
            <BlogSection hclass={'wpo-blog-section section-padding'}/>
            <MapSection/>
            <Footer hclass={'wpo-site-footer'}  />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;