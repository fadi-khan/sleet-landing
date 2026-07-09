import React from 'react';
import Accordion from './Accordion';

const FaqSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="faq-left-content">
                            <div className="wpo-section-title">
                                <h2>Frequently asked questions</h2>
                                <h3>Everything you need to know
                                    about Sleet</h3>
                                <p>Sleet Automation Logistics brings four integrated services — Sleet
                                    Logistics, Sleet SaaS, Sleet TNC, and Sleet AI — together on one platform
                                    so you can manage fleets and make data-driven decisions with ease.</p>
                            </div>
                            <ul className="item">
                                <li>Manage your entire fleet from a single intelligent dashboard</li>
                                <li>Built for logistics companies, fleet owners, and enterprises alike</li>
                            </ul>
                            <ul className="item-service">
                                <li>
                                    <i className="flaticon-circuit"></i>
                                    <span>Fleet Management</span>
                                </li>
                                <li>
                                    <i className="flaticon-circuit"></i>
                                    <span>Cloud-Based Platform</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;