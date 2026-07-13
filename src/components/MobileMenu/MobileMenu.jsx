import React, { useState } from 'react';
import ListItem from "@mui/material/List";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './style.css';

const MobileMenu = () => {

    const { t } = useTranslation();
    const [menuActive, setMenuState] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
        if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '/home-2') {
            scroll();
        } else {
            navigate('/home');
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
                                <NavLink
                                    onClick={item.isServicesLink ? scrollToServices : ClickHandler}
                                    to={item.link}
                                >{item.title}</NavLink>
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
