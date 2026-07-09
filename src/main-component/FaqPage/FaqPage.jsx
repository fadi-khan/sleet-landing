import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from '../../components/FaqSection/FaqSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import MyForm from '../../components/GetTouchSection/MyForm';

const FaqPage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Faq'} />
            <FaqSection hclass={'wpo-faq-section section-padding'} />
            <section className="wpo-get-touch-section-s2 section-padding pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                           <MyForm />
                        </div>
                    </div>
                </div>
            </section>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    );
};

export default FaqPage;
