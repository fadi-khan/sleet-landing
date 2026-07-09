import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

// image
import Ab from '../../images/about/ab5.png'
import Abd1 from '../../images/about/ab4.png'
import Abd2 from '../../images/about/ab1.jpg'
import Abd3 from '../../images/about/ab2.jpg'
import Abd4 from '../../images/about/ab3.jpg'
import Abd5 from '../../images/about/shape.png'
import Abd6 from '../../images/about/profile.jpg'
import Abd7 from '../../images/about/signature.png'

const about = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="shape">
                <img src={Ab} alt="" />
            </div>
            <div className="side-img">
                <img src={Abd1} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <div className="image-1">
                                <img src={Abd2} alt="" />
                            </div>
                            <div className="image-2">
                                <img src={Abd3} alt="" />
                            </div>
                            <div className="image-3">
                                <img src={Abd4} alt="" />
                            </div>
                            <div className="image-4">
                                <img src={Abd5} alt="" />
                            </div>

                            <div className="since">
                                <div>
                                    <h2> <CountUp end={1999} enableScrollSpy>00</CountUp></h2>
                                    <p>Since</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="title">
                                <h2>Trusted transport service </h2>
                                <h3>Transport & Logistics
                                    Services We are the best</h3>
                            </div>
                            <div className="sub-content">
                                <span>Logistika is the world's leading global logistics provider — we expertly
                                    facilitate industry and commerce in the international exchange of goods through land
                                    transport.</span>
                            </div>
                            <h4>operations around the world and across various transporation sectors.</h4>
                            <ul>
                                <li>Domestic and International Service emergency support</li>
                                <li>Compliance and Enforcement actions</li>
                                <li>Becoming a registered provider Today</li>
                            </ul>

                            <div className="author-btn">
                                <div className="author">
                                    <div className="image">
                                        <img src={Abd6} alt="" />
                                    </div>
                                    <div className="text">
                                        <img src={Abd7} alt="" />
                                        <span>Ceo & Founder</span>
                                    </div>
                                </div>
                                <div className="about-btn">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">
                                        more about us
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

export default about;

