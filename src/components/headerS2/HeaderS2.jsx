"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Link, useRouter, usePathname } from '../../i18n/navigation'
import { useTranslations } from 'next-intl'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderTopS2 from '../HeaderTopS2/HeaderTopS2'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import LogoLight from '../../images/logo-light.png'

const Header = (props) => {
    const t = useTranslations();
    const ClickHandler = () => window.scrollTo(10, 0);
    const router = useRouter();
    const pathname = usePathname();

    const scrollToServices = (e) => {
        e.preventDefault();
        const scroll = () => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };
        if (pathname === '/' || pathname === '/home' || pathname === '/home-2') {
            scroll();
        } else {
            router.push('/home');
            setTimeout(scroll, 300);
        }
    };

    return (
        <header id="header" className='wpo-site-header-s2'>
            
            {/* <HeaderTopS2 /> */}
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home">
                                        <Image src={LogoLight} width={105} height={65} alt="Sleet Logistics logo" priority />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/home">{t('nav.home')}</Link>

                                        </li>

                                        <li className="menu-item-has-children">
                                            <Link onClick={scrollToServices} href="/home#services">{t('nav.services')}</Link>

                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/faq">{t('nav.faq')}</Link>

                                        </li>

                                        <li><Link onClick={ClickHandler} href="/contact">{t('nav.contact')}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">

                                    {/* CART */}
                                    <LanguageSelector />
                                    <div className="close-form">
                                        <a className="theme-btn" href="https://app.sleet.sa/login" target="_blank" rel="noopener noreferrer">{t('common.getStarted')}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;