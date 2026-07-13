import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MobileMenu from '../MobileMenu/MobileMenu'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import Call from '../../images/call.svg'
import { useSelector } from 'react-redux'

const Header = (props) => {
    const { t } = useTranslation();
    const language = useSelector((state) => state.language.language); // 'en' | 'ar'

    const [menuActive, setMenuState] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

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
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo} style={{width: '95px'}} alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0 gap-3">
                                        <li className="menu-item">
                                            <Link onClick={ClickHandler} to="/home">{t('nav.home')}</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link onClick={scrollToServices} to="/home#services">{t('nav.services')}</Link>
                                        </li>
                                        {/* <li className="menu-item">
                                            <Link onClick={ClickHandler} to="/about">About</Link>
                                        </li> */}
                                        <li className="menu-item">
                                            <Link onClick={ClickHandler} to="/faq">{t('nav.faq')}</Link>
                                        </li>

                                        <li><Link onClick={ClickHandler} to="/contact">{t('nav.contact')}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right d-flex align-items-center gap-3">
                                    <LanguageSelector />
                                    <div className="close-form">
                                        
                                        <Link onClick={ClickHandler}  className="theme-btn" to="https://app.sleet.sa/login" target="_blank">
                                           <i className={`flaticon-next ${language === 'ar' ? 'rotate-180' : 'd-none'}`}></i>
                                            {t('common.getStarted')}
                                            <i
                                                className={`flaticon-next ${language === 'ar' ? 'd-none' : 'ms-2'}`}></i>
                                        </Link>
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

















