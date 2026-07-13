import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.png';


const ContactPage = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={t('contact.pageTitle')} pagesub={t('contact.pageSub')} />
            <Contactpage />
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar /> 
        </Fragment>
    )
};
export default ContactPage;





