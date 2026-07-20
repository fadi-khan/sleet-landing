"use client";

import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';


import Shape from '../../images/pric-shape-3.png'
import pricingPlans from '../../api/pricingPlans';

const PricingSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subtitle={'Trusted transport service'} title={'Our business pricing plan you might like'} />
                    </div>
                </div>
                <div className="row">
                    {pricingPlans.slice(3, 6).map((plan, item) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={item}>
                            <div className="pric-card-s2">
                                <div className="title">
                                    <h3>{plan.title}</h3>
                                    <span>Save {plan.parsent}%</span>
                                </div>
                                <div className="mid-title">
                                    <h3>{plan.Mbps}<span>Mbps</span></h3>
                                    <h4>UNLIMITED TRAFFIC</h4>
                                </div>
                                <ul>
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="pric-btn">
                                    <h4>{plan.price} Tk/<span>mo</span></h4>
                                    <div className="shape">
                                        <svg width="126" height="6" viewBox="0 0 126 6" fill="none">
                                            <path
                                                d="M0.901114 4.45546C42.064 3.00123 82.9905 2.77009 124.124 5.1296C125.562 5.21628 125.542 3.04938 124.124 2.94345C83.2564 -0.061317 41.6799 -0.147993 0.901114 4.00282C0.605616 4.03171 0.595766 4.46509 0.901114 4.45546Z"
                                                fill="#04cfe6ad" />
                                        </svg>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} to="#" className="theme-btn">Get started</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-rigth">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default PricingSectionS2;