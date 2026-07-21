"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from '../../i18n/navigation';
import CountUp from 'react-countup';
import { useTranslations } from 'next-intl';



import Ab21 from '../../images/about-shape.svg'
import Ab22 from '../../images/homepage/aboutS2Left.png'
import Ab23 from '../../images/about/profile.jpg'
import Ab24 from '../../images/about/signature.png'
import Ab25 from '../../images/homepage/delivery-man.jpeg'

const AboutS2 = () => {
    const t = useTranslations();
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
                            <h3>{t('home.aboutS2.builtFor')} <span>{t('home.aboutS2.modernFleets')}</span></h3>
                            <div className="people">
                                <h2><CountUp end={20} enableScrollSpy />k+</h2>
                                <p>{t('home.aboutS2.fleetTripsTracked')} <br />
                                    {t('home.aboutS2.tracked')}</p>
                            </div>
                            <div className="shape">
                                <img src={Ab21.src} alt="" width={155} height={165} />
                            </div>
                            <div className="image">
                                <Image src={Ab22} alt="Sleet fleet management platform showing live GPS tracking and maintenance scheduling for trucks and delivery vans" sizes="(max-width: 991px) 100vw, 551px" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="wpo-section-title">
                                <h2>{t('home.aboutS2.poweringTitle')}</h2>
                                <h3>{t('home.aboutS2.poweringSubtitle')}</h3>
                            </div>
                            <p>{t('home.aboutS2.description')}
                            </p>
                            <ul>
                                <li>
                                    <i className="flaticon-logistics"></i>
                                    <h3>{t('home.aboutS2.realTimeVisibility')}</h3>
                                </li>
                                <li>
                                    <i className="flaticon-nanotechnology"></i>
                                    <h3>{t('home.aboutS2.tripManagement')}</h3>
                                </li>
                            </ul>
                            <ul className="logistics">
                                <li>{t('home.aboutS2.liveGps')}</li>
                                <li>{t('home.aboutS2.maintenanceScheduling')}</li>
                            </ul>

                            <div className="about-btn">
                                <div className="btn-1">
                                    <Link onClick={scrollToServices} href={'#services'} className="theme-btn">{t('common.exploreMore')} <i
                                        className="ti-angle-right"></i></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-img">
                <img src={Ab25.src} alt="Sleet delivery driver holding a clipboard next to packages ready for goods delivery" width={240} height={324}  />
            </div>
        </section>
    );
};

export default AboutS2;
