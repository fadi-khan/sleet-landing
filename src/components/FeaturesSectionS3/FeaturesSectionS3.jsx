"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import HoverImg from '../../images/feature/4.jpg'

const FeaturesSectionS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-features-section-s3 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div className="feature-card-s3">
                            <span>01</span>
                            <img className="image" src={HoverImg} alt="" />
                            <div className="content">
                                <i className="flaticon-worker"></i>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} to="#">Expert Employees</Link></h2>
                                    <p>Our products are handcrafted and tested
                                        with care, then hand mixed and hand
                                        poured, inspired and connected to nature.</p>
                                    <Link onClick={ClickHandler} to="#" className="feature-single-link">
                                        View More
                                        <i className="flaticon-right-arrow-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div className="feature-card-s3">
                            <span>02</span>
                            <img className="image" src={HoverImg} alt="" />
                            <div className="content">
                                <i className="flaticon-warehouse"></i>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} to="#">Warehouse Facility</Link></h2>
                                    <p>Our products are handcrafted and tested
                                        with care, then hand mixed and hand
                                        poured, inspired and connected to nature.</p>
                                    <Link onClick={ClickHandler} to="#" className="feature-single-link">
                                        View More
                                        <i className="flaticon-right-arrow-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div className="feature-card-s3">
                            <span>03</span>
                            <img className="image" src={HoverImg} alt="" />
                            <div className="content">
                                <i className="flaticon-air-plane"></i>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} to="#">Priority Transportation</Link></h2>
                                    <p>Our products are handcrafted and tested
                                        with care, then hand mixed and hand
                                        poured, inspired and connected to nature.</p>
                                    <Link onClick={ClickHandler} to="#" className="feature-single-link">
                                        View More
                                        <i className="flaticon-right-arrow-1"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSectionS3;