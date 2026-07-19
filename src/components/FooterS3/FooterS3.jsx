"use client";

import React, { useState } from 'react';
import Services from '../../api/Services';
import { Link } from 'react-router-dom';
import { useTranslations } from 'next-intl';
import SimpleReactValidator from 'simple-react-validator';



import Map from '../../images/footer-map.svg'
import FooterBg from '../../images/footer-bg.jpg'
import Shape from '../../images/shape-right.svg'

const FooterS3 = () => {
    const t = useTranslations();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [email, setEmail] = useState('');
    const [validator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        setEmail(e.target.value);
        validator.showMessageFor('email');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setEmail('');
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };



    return (
        <footer className="wpo-site-footer-s3">
            <div className="footer-socialicon">
                <ul>
                    <li><i className="flaticon-facebook-app-symbol"></i> <span>Facebook</span></li>
                    <li><i className="flaticon-twitter"></i> <span>Twitter</span></li>
                    <li><i className="ti-pinterest-alt"></i> <span>Pinterest</span></li>
                    <li><i className="flaticon-linkedin-big-logo"></i> <span>Linkedin</span></li>
                    <li><i className="flaticon-vimeo"></i> <span>Vimeo</span></li>
                </ul>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-s2">
                                <div className="widget-title">
                                    <h3>Subscribe Newsletter</h3>
                                </div>
                                <p>These agencies specialize leveraging various digital channels, such as social media
                                    advertising</p>
                                <form className="form-fild" onSubmit={handleSubmit}>
                                    <input
                                        className="fild"
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    {validator.message('email', email, 'required|email')}
                                    <button type="submit">
                                        <i className="flaticon-right-arrow"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, item) => (
                                        <li key={item}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{t(`servicesData.${service.key}.title`)}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">How it Works</Link></li>
                                    <li><Link onClick={ClickHandler} to="/services">Help Link</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Terms & Conditions</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget">
                                <div className="widget-title">
                                    <h3>Locations</h3>
                                </div>
                                <p>Street 1b, Al Khaleej road, Al Muhammadiyah,
                                    Dammam</p>
                                <ul>
                                    <li>Contact</li>
                                    <li><a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer">mohammad@sleet.sa</a></li>
                                    <li>+966 53 775 0600</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-map">
                    <img src={Map} alt="" />
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2026 <Link to="/">wpOcean</Link> - Logistics service. All
                                rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-image">
                <img src={FooterBg} alt="" />
            </div>
            <div className="shape">
                <svg width="191" height="208" viewBox="0 0 191 208" fill="none">
                    <path d="M125.53 208.291H118.13L0 12.271V0.00102234L125.53 208.291Z" fill="white" />
                    <path d="M0 43.1711L99.93 209.121H0V43.1711Z" fill="#04cfe6ad" />
                    <path d="M190.33 209.121H138.45L68.9102 93.7311H120.79L190.33 209.121Z" fill="#144754" />
                    <path d="M98.0897 69.1602H72.8097L38.9297 12.9402H64.2097L98.0897 69.1602Z" fill="#04cfe6ad" />
                </svg>
            </div>
            <div className="shape-right">
                <img src={Shape} alt="" />
            </div>
        </footer>
    );
};

export default FooterS3;