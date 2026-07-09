import React, { useState } from 'react';
import Services from '../../api/Services';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

import logo from '../../images/logo-2.svg'
import Fbg from '../../images/footer-bg-s2.jpg'

import Img1 from '../../images/banck/1.png'
import Img2 from '../../images/banck/2.png'
import Img3 from '../../images/banck/3.png'
import Img4 from '../../images/banck/4.png'
import Img5 from '../../images/banck/5.png'
import Img6 from '../../images/banck/6.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const FooterS2 = () => {

    const [formData, setFormData] = useState({
        email: '',
        agree: false,
    });

    const [validator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });

        validator.showMessageFor(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setFormData({ email: '', agree: false });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };


    return (
        <footer className="wpo-site-footer-s2">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget address-widget">
                                <div className="widget-title">
                                    <h3>Address</h3>
                                </div>
                                <p>570 8th Ave, New York,NY 10018
                                    United States</p>
                                <h4>Opening Hours</h4>
                                <ul>
                                    <li>9.30am – 6.30pm</li>
                                    <li>Monday to Friday</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, item) => (
                                        <li key={item}><Link onClick={ClickHandler} to={`/services-single/${service.slug}`}>{service.title}</Link></li>
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
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>newsletter</h3>
                                </div>
                                <div className="newsletter">
                                    <form className="form-fild" onSubmit={handleSubmit}>
                                        <input
                                            className="fild"
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {validator.message('email', formData.email, 'required|email')}
                                        <button type="submit"><i className="flaticon-arrowhead-up"></i></button>

                                        <div className="terms">
                                            <input
                                                type="checkbox"
                                                id="Insurance"
                                                name="agree"
                                                checked={formData.agree}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="Insurance">
                                                I agree to all your <Link onClick={handleChange} to="/">terms</Link> and policies
                                            </label>
                                            {validator.message('agree', formData.agree, 'accepted')}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col col-lg-2 col-12">
                            <div className="logo">
                                <img src={logo} alt="blog" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> &copy; 2026 <Link onClick={ClickHandler} to="/home">wpOcean</Link> - Logistics service. All
                                rights reserved.</p>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} to="/"><img src={Img1} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={Img2} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={Img3} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={Img4} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={Img5} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} to="/"><img src={Img6} alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-image">
                <img src={Fbg} alt="" />
            </div>
            <div className="shape">
                <svg width="191" height="208" viewBox="0 0 191 208" fill="none">
                    <path d="M125.53 208.291H118.13L0 12.271V0.00102234L125.53 208.291Z" fill="white" />
                    <path d="M0 43.1711L99.93 209.121H0V43.1711Z" fill="#04cfe6ad" />
                    <path d="M190.33 209.121H138.45L68.9102 93.7311H120.79L190.33 209.121Z" fill="#144754" />
                    <path d="M98.0897 69.1602H72.8097L38.9297 12.9402H64.2097L98.0897 69.1602Z" fill="#04cfe6ad" />
                </svg>
            </div>
        </footer>
    );
};

export default FooterS2;