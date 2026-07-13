import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';



import Ab21 from '../../images/about-shape.svg'
import Ab22 from '../../images/homepage/aboutS2Left.png'
import Ab23 from '../../images/about/profile.jpg'
import Ab24 from '../../images/about/signature.png'
import Ab25 from '../../images/homepage/delivery-man.jpeg'

const AboutS2 = () => {
    const { t } = useTranslation();
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
                                    <Link onClick={scrollToServices} to={'#services'} className="theme-btn">{t('common.exploreMore')} <i
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

export default AboutS2;
