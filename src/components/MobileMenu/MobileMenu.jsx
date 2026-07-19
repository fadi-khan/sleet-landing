"use client";

import React, { useState } from 'react';
import ListItem from "@mui/material/List";
import { Link, useRouter, usePathname } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';

const MobileMenu = () => {

    const t = useTranslations();
    const [menuActive, setMenuState] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

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
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem key={mn}>
                                <Link
                                    onClick={item.isServicesLink ? scrollToServices : ClickHandler}
                                    href={item.link}
                                >{item.title}</Link>
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
