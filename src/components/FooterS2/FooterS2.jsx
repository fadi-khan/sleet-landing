"use client";

import React, { useState } from 'react';
import Services from '../../api/Services';
import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';
import SimpleReactValidator from 'simple-react-validator';

import logo from '../../images/logo-light.png'

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
    const t = useTranslations();

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
                                    <h3>{t('footer.address')}</h3>
                                </div>
                                <p>{t('footer.addressText')}</p>
                                <ul>
                                    <li dir="ltr"><a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer">mohammad@sleet.sa</a></li>
                                    <li dir="ltr">+966 53 775 0600</li>
                                </ul>
                                <ul className="social-list">
                                    <li><a href="https://www.linkedin.com/company/sleet-sa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/sleet.sa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="https://x.com/sleet_sa?s=21&t=Pp3MNfVjHFWqTcUrnmTAmw" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{t('footer.services')}</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, item) => (
                                        <li key={item}><Link onClick={ClickHandler} href={`/service-single/${service.slug}`}>{t(`servicesData.${service.key}.title`)}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{t('footer.usefulLinks')}</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/contact">{t('footer.termsConditions')}</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">{t('footer.contactUs')}</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">{t('footer.privacyPolicy')}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>{t('footer.newsletter')}</h3>
                                </div>
                                <div className="newsletter">
                                    <form className="form-fild" onSubmit={handleSubmit}>
                                        <input
                                            className="fild"
                                            type="email"
                                            name="email"
                                            placeholder={t('footer.enterEmail')}
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
                                                {t('footer.agreeText')} <Link onClick={handleChange} href="/">{t('footer.terms')}</Link> {t('footer.andPolicies')}
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
                                <img src={logo.src} alt="blog" />
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> &copy; 2026 <Link onClick={ClickHandler} href="/home">Sleet Logistics</Link> - {t('footer.copyrightSuffix')}</p>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <ul>
                                <li><Link onClick={ClickHandler} href="/"><img src={Img1.src} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><img src={Img2.src} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><img src={Img3.src} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><img src={Img4.src} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><img src={Img5.src} alt="" /></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><img src={Img6.src} alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
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