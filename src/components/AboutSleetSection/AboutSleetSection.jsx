"use client";

import React from 'react';
import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';
import Services from '../../api/Services';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const AboutSleetSection = (props) => {
    const t = useTranslations();
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
        <section className={"wpo-about-sleet-section section-padding" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <h2>{t('home.aboutSleet.title')}</h2>
                            <h3>{t('home.aboutSleet.subtitle')}</h3>
                        </div>
                        <p>{t('home.aboutSleet.p1')}</p>
                        <p>{t('home.aboutSleet.p2')}</p>
                        <Link onClick={scrollToServices} href="#services" className="theme-btn">{t('common.exploreMore')} <i className="ti-angle-right"></i></Link>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-sleet-grid">
                            {Services.map((service, index) => (
                                <Link href={`/service-single/${service.slug}`} onClick={ClickHandler} className="about-sleet-card" key={index}>
                                    {service.isCommingSoon && <span className="soon-tag">{t('serviceSingle.comingSoon')}</span>}
                                    <service.Icon />
                                    <h3>{t(`servicesData.${service.key}.title`)}</h3>
                                    <p>{t(`servicesData.${service.key}.subtitle`)}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSleetSection;
