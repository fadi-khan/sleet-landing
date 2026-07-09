import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import ArrowShape from '../../images/process-arrow-shape.svg'

const TrackingPage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Tracking'} />
            <section className="track-page section-padding">
                <div className="container">
                    <div className="track-Shipment">
                        <h2>Shipment Tracking</h2>
                        <div className="wrape">
                            <div className="item active">
                                <div className="icon">
                                    <i className="flaticon-order"></i>
                                    <span>01</span>
                                </div>
                                <h2>Order
                                    confirmed</h2>
                                <div className="shape">
                                    <img src={ArrowShape} alt="" />
                                </div>
                            </div>
                            <div className="item active">
                                <div className="icon">
                                    <i className="flaticon-boxes"></i>
                                    <span>02</span>
                                </div>
                                <h2>Processing
                                    order</h2>
                                <div className="shape">
                                    <img src={ArrowShape} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-product-return-1"></i>
                                    <span>03</span>
                                </div>
                                <h2>Quality
                                    check</h2>
                                <div className="shape">
                                    <img src={ArrowShape} alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i className="flaticon-truck"></i>
                                    <span>04</span>
                                </div>
                                <h2>Product
                                    delivered</h2>
                                <div className="shape">
                                    <img src={ArrowShape} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-detail">
                        <h3>Order Detail</h3>
                        <ul>
                            <li><span>Order form</span> <span>1551 Poplar Lane Miami, FL 33176</span></li>
                            <li><span>Order Id</span> <span>#5489415</span></li>
                            <li><span>Order Date</span> <span> Feb 17, 2025</span></li>
                            <li><span>Ship to</span> <span>James C. Smith</span></li>
                        </ul>
                    </div>
                    <div className="order-detail">
                        <h3>Order Summary</h3>
                        <ul>
                            <li><span>Shipping address:</span> <span>2784 Hershell Hollow Road Seattle, WA 98109</span></li>
                            <li><span>Order Status:</span> <span>Pending</span></li>
                            <li><span>Total order amount:</span> <span>$150</span></li>
                            <li><span>Payment method:</span> <span>Cash on delivery</span></li>
                        </ul>
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
export default TrackingPage;
