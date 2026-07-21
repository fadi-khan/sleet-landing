"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

import Slider1 from '../../images/slider/sleet-hero-bg.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HeroSlider = () => {
    const t = useTranslations();
    const language = useLocale(); // 'en' | 'ar'

    return (
        <section className="hero-section ">
            <div className="slider-item">
                <div className="bg-image">
                    <Image className="animated" priority={true} src={Slider1} alt="truck on road" fill
                        sizes="100vw" data-animation-in="zoomInImage" loading='eager' />
                </div>
                <div className="container">
                    <div className="content mt-5 pt-lg-5">
                        <h2 className="animated pt-5 fs-1  " data-animation-in="fadeInUp">{t('home.hero.title')}</h2>
                        <h3 className="animated d-lg-none " data-animation-in="fadeInUp">{t('home.hero.subtitle')}</h3>
                        <h3
                        style={{fontSize:'60px'}}
                        className="animated d-none d-lg-block " data-animation-in="fadeInUp">{t('home.hero.subtitle')}</h3>

                        <p className="animated" data-animation-in="fadeInUp">{t('home.hero.description')}</p>
                        <div className="hero-btn animated d-flex gap-4" data-animation-in="fadeInUp">
                            <div className="btn-1">
                                <a onClick={ClickHandler} href="https://app.sleet.sa" target="_blank" rel="noopener noreferrer" className="theme-btn">{t('common.getStarted')}</a>
                            </div>
                            <Link onClick={ClickHandler} href="/contact" className="hero-btn text-info fs-5 fw-bold ">
                                <span className=''>{t('common.bookADemo')}</span> <i className={` ${language === 'ar' ? 'ti-angle-left ms-2' : 'ti-angle-right '} `}></i>
                            </Link>
                        </div>
                        <ul className="hero-social-list animated d-flex gap-3 mt-4 pb-5" data-animation-in="fadeInUp">
                            <li><a href="https://www.linkedin.com/company/sleet-sa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="https://www.instagram.com/sleet.sa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://x.com/sleet_sa?s=21&t=Pp3MNfVjHFWqTcUrnmTAmw" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fa fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="down-shape">
                    <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                        <path
                            d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z"
                            fill="white" fillOpacity="0.2" />
                        <path
                            d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z"
                            fill="white" />
                        <path
                            d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z"
                            fill="white" fillOpacity="0.2" />
                        <path
                            d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z"
                            fill="white" fillOpacity="0.2" />
                        <path
                            d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z"
                            fill="white" fillOpacity="0.2" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;