import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import { useDispatch } from "react-redux";
// ✅ Redux Toolkit action
import { addToCart } from "../../store/slices/cartSlice";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'



const ShopPage = () => {

    const dispatch = useDispatch();

    const productsArray = api();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const totalProducts = productsArray.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    const currentProducts = productsArray.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    // ✅ RTK dispatch
    const addToCartProduct = (product, qty = 1) => {
        dispatch(addToCart({ ...product, qty }));
    };


    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Shop'} />
            <section className="wpo-shop-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ShopProduct
                                addToCartProduct={addToCartProduct}
                                products={currentProducts}
                            />
                            {/* PAGINATION */}
                            <div className="pagination-wrapper pagination-wrapper-center">
                                <ul className="pg-pagination">

                                    <li>
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            <i className="ti-angle-left"></i>
                                        </button>
                                    </li>

                                    {[...Array(totalPages)].map((_, index) => (
                                        <li
                                            key={index}
                                            className={currentPage === index + 1 ? "active" : ""}
                                        >
                                            <button
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}

                                    <li>
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            <i className="ti-angle-right"></i>
                                        </button>
                                    </li>

                                </ul>
                            </div>
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

export default ShopPage;