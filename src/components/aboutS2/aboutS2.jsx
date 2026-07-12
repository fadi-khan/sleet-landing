import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';



import Ab21 from '../../images/about-shape.svg'
import Ab22 from '../../images/homepage/aboutS2Left.png'
import Ab23 from '../../images/about/profile.jpg'
import Ab24 from '../../images/about/signature.png'
import Ab25 from '../../images/homepage/delivery-man.jpeg'

const aboutS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

        const scrollToServices = (e) => {
        e.preventDefault();
        const scroll = () => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };
        if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '/home-2') {
            scroll();
        } else {
            navigate('/home');
            setTimeout(scroll, 300);
        }
    };

    return (
        <section className="wpo-about-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <h3>Built for <span>modern fleets</span></h3>
                            <div className="people">
                                <h2><CountUp end={20} enableScrollSpy />k+</h2>
                                <p>Fleet Trips <br />
                                    Tracked</p>
                            </div>
                            <div className="shape">
                                <img src={Ab21} alt="" />
                            </div>
                            <div className="image">
                                <img src={Ab22} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="wpo-section-title">
                                <h2>Powering modern logistics</h2>
                                <h3>One platform for your
                                    entire fleet</h3>
                            </div>
                            <p>Sleet Automation Logistics is a logistics technology company that provides
                                intelligent transportation solutions through four integrated services — Sleet
                                Logistics, Sleet SaaS, Sleet TNC, and Sleet AI.
                            </p>
                            <ul>
                                <li>
                                    <i className="flaticon-logistics"></i>
                                    <h3>Real-Time Fleet
                                        Visibility</h3>
                                </li>
                                <li>
                                    <i className="flaticon-nanotechnology"></i>
                                    <h3>End-to-End Trip
                                        Management</h3>
                                </li>
                            </ul>
                            <ul className="logistics">
                                <li>Live GPS Tracking</li>
                                <li>Maintenance Scheduling</li>
                            </ul>

                            <div className="about-btn">
                                <div className="btn-1">
                                    <Link onClick={scrollToServices} to={'#services'} className="theme-btn">Explore more about <i
                                        className="ti-angle-right"></i></Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-img">
                <img src={Ab25} alt="" width={240} height={324}  />
            </div>
        </section>
    );
};

export default aboutS2;
