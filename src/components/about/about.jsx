"use client";

import React from 'react';
import { Link } from '../../i18n/navigation';
import CountUp from 'react-countup';
import { useTranslations } from 'next-intl';

// image
import Ab from '../../images/about/ab5.png'
import Abd1 from '../../images/about/ab4.png'
import Abd2 from '../../images/about/ab1.jpg'
import Abd3 from '../../images/about/ab2.jpg'
import Abd4 from '../../images/about/ab3.jpg'
import Abd5 from '../../images/about/shape.png'
import Abd6 from '../../images/about/profile.jpg'
import Abd7 from '../../images/about/signature.png'

const About = (props) => {
    const t = useTranslations();
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="shape">
                <img src={Ab.src} alt="" />
            </div>
            <div className="side-img">
                <img src={Abd1.src} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left">
                            <div className="image-1">
                                <img src={Abd2.src} alt="" />
                            </div>
                            <div className="image-2">
                                <img src={Abd3.src} alt="" />
                            </div>
                            <div className="image-3">
                                <img src={Abd4.src} alt="" />
                            </div>
                            <div className="image-4">
                                <img src={Abd5.src} alt="" />
                            </div>

                            <div className="since">
                                <div>
                                    <h2> <CountUp end={1999} enableScrollSpy>00</CountUp></h2>
                                    <p>{t('about.since')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-content">
                            <div className="title">
                                <h2>{t('about.trustedTransport')} </h2>
                                <h3>{t('about.heading')}</h3>
                            </div>
                            <div className="sub-content">
                                <span>{t('about.subContent')}</span>
                            </div>
                            <h4>{t('about.operations')}</h4>
                            <ul>
                                <li>{t('about.list.0')}</li>
                                <li>{t('about.list.1')}</li>
                                <li>{t('about.list.2')}</li>
                            </ul>

                            <div className="author-btn">
                                <div className="author">
                                    <div className="image">
                                        <img src={Abd6.src} alt="" />
                                    </div>
                                    <div className="text">
                                        <img src={Abd7.src} alt="" />
                                        <span>{t('about.ceoFounder')}</span>
                                    </div>
                                </div>
                                <div className="about-btn">
                                    <Link onClick={ClickHandler} href="/about" className="theme-btn">
                                        {t('common.moreAboutUs')}
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

export default About;

