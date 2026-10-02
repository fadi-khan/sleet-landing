"use client";

import React, { useEffect, useState } from 'react';
import { Link, useRouter, usePathname } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';
import { useServicesMenuGroups } from '../ServicesMegaMenu/ServicesMegaMenu';

const MobileMenu = () => {

    const t = useTranslations();
    const [menuActive, setMenuState] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const serviceGroups = useServicesMenuGroups();
    const router = useRouter();
    const pathname = usePathname();

    // while the drawer is open: Escape closes it and the page behind doesn't scroll
    useEffect(() => {
        if (!menuActive) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuState(false);
        };
        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [menuActive]);

    const menus = [
        {
            id: 1,
            title: t('nav.home'),
            link: '/home',
        },
        {
            id: 2,
            title: t('nav.services'),
            link: '/home#services',
            isServicesLink: true,
        },
        {
            id: 3,
            title: t('nav.faq'),
            link: '/faq',
        },
        {
            id: 4,
            title: t('nav.contact'),
            link: '/contact',
        }
    ];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
        setMenuState(false);
    }

    const scrollToServices = (e) => {
        e.preventDefault();
        setMenuState(false);
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
        <div>
            <div className={`mobileMenu-backdrop ${menuActive ? "show" : ""}`} onClick={() => setMenuState(false)}></div>

            <div id="mobile-menu" className={`mobileMenu ${menuActive ? "show" : ""}`} aria-hidden={!menuActive}>
                <div className="menu-close">
                    <button type="button" className="clox" onClick={() => setMenuState(false)} aria-label={t('nav.closeMenu')}><i className="ti-close"></i></button>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        if (item.isServicesLink) {
                            return (
                                <li key={mn}>
                                    <button
                                        type="button"
                                        className="submenu-toggle"
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        aria-expanded={servicesOpen}
                                        aria-controls="mobile-services-menu"
                                    >
                                        {item.title}
                                        <i className="ti-angle-down"></i>
                                    </button>
                                    {servicesOpen && (
                                        <div id="mobile-services-menu" className="submenu-panel">
                                            <Link onClick={scrollToServices} href={item.link}>{t('common.allServices')}</Link>
                                            {serviceGroups.map((group) => (
                                                <React.Fragment key={group.key}>
                                                    <span className="submenu-title">{group.title}</span>
                                                    {group.links.map((link) => (
                                                        <Link onClick={ClickHandler} href={link.href} key={link.key}>{link.title}</Link>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            )
                        }

                        return (
                            <li key={mn}>
                                <Link
                                    onClick={ClickHandler}
                                    href={item.link}
                                >{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="mobileMenu-cta">
                    <a className="theme-btn" href="https://app.sleet.sa/login" target="_blank" rel="noopener noreferrer">{t('common.getStarted')}</a>
                </div>

            </div>

            <div className="showmenu mobail-menu">
                <button
                    type="button"
                    className="navbar-toggler open-btn"
                    onClick={() => setMenuState(!menuActive)}
                    aria-label={t('nav.openMenu')}
                    aria-expanded={menuActive}
                    aria-controls="mobile-menu"
                >
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
