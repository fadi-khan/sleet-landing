import React, {Fragment} from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from '../../components/CheckoutSection'
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useSelector } from "react-redux";
import Logo from '../../images/logo.svg'

const CheckoutPage =() => {

    const cartList = useSelector((state) => state.cart.cart);

    return(
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />   
        </Fragment>
    )
};

export default CheckoutPage;

