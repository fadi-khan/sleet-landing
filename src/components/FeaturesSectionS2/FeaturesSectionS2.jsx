import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="top-wraper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-section-title">
                                <h2>Trusted transport service</h2>
                                <h3>Logistics features
                                    that we can provideing</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="f-btn">
                                <Link onClick={ClickHandler} to="/services" className="theme-btn">All Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-wraper">
                <div className="container">
                    <div className="bottom-content">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-distribution-center"></i>
                                    </div>
                                    <div className="content">
                                        <h3>Warehouse</h3>
                                        <p>Warehouse: hub for storage, distribution, and logistics.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-customer-support-1"></i>
                                    </div>
                                    <div className="content">
                                        <h3>Support 24/7</h3>
                                        <p>Warehouse: hub for storage, distribution, and logistics.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-delivery-box"></i>
                                    </div>
                                    <div className="content">
                                        <h3>Cargo Insurance</h3>
                                        <p>Warehouse: hub for storage, distribution, and logistics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSectionS2;