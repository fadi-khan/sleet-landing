import React from 'react';
import { Link } from 'react-router-dom';
import QuoteForm from '../QuoteForm/QuoteForm';


import get1 from '../../images/get1.png'
import get2 from '../../images/get2.svg'
import get3 from '../../images/get3.svg'
import get4 from '../../images/get4.png'


const GetQuateSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="left-content">
                            <div className="wpo-section-title">
                                <h2>Trusted transport service</h2>
                                <h3>Transportation service
                                    area often consider</h3>
                            </div>
                            <div className="quat">
                                <p>Transportation service areas often consider factors like
                                    coverage, efficiency, cost, accessibility, reliability and
                                    sustainability for optimal performance.</p>
                            </div>
                            <ul className="get-item">
                                <li>
                                    <i className="flaticon-logistics"></i>
                                    <h3>Domestic and
                                        International Service</h3>
                                </li>
                                <li>
                                    <i className="flaticon-nanotechnology"></i>
                                    <h3>End to End Tracking
                                        Service system</h3>
                                </li>
                            </ul>
                            <ul className="quate-item">
                                <li>
                                    <i className="flaticon-check"></i>
                                    <h3>Dedicated Transport wise</h3>
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    <h3>Domestics & Logistics</h3>
                                </li>
                            </ul>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn">more about us</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="quote-form">
                            <div className="title">
                                <h3>Request a quote form</h3>
                            </div>
                           <QuoteForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-bg">
                <div className="img1">
                    <img src={get1} alt="" />
                </div>
                <div className="img2">
                    <img src={get2} alt="" />
                </div>
                <div className="img3">
                    <img src={get3} alt="" />
                </div>
            </div>
            <div className="rigth-bg">
                <img src={get4} alt="" />
            </div>
        </section>
    );
};

export default GetQuateSection;