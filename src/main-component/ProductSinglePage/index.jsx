import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'


const ProductSinglePage =(props) => {
    const { slug } = useParams();
    const dispatch = useDispatch();

    const products = api();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const found = products.find((p) => String(p.slug) === String(slug));
        setProduct(found || null);
    }, [slug, products]);

    const addToCartProduct = (item, qty = 1) => {
        dispatch(addToCart({ ...item, qty }));
    };

    return(
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Shop Single'}/> 
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {product && (
                        <Product item={product} addToCart={addToCartProduct} />
                    )}
                    <ProductTabs/>
                </div>
            </section>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};

export default ProductSinglePage;
