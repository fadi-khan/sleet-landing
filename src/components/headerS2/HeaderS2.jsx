import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderTopS2 from '../HeaderTopS2/HeaderTopS2'
import { useDispatch, useSelector } from "react-redux";
import { totalPrice } from "../../utils";

// ✅ redux toolkit action
import { removeFromCart } from "../../store/slices/cartSlice";
import LogoLight from '../../images/logo-light.png'

const Header = (props) => {
    const ClickHandler = () => window.scrollTo(10, 0);
    const navigate = useNavigate();
    const location = useLocation();

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
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                                        <img className="" src={LogoLight} width="100" height="90" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/home">Home</Link>
                                        
                                        </li>
                                        
                                        <li className="menu-item-has-children">
                                            <Link onClick={scrollToServices} to="/home#services">services </Link>

                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/faq">FAQ</Link>
                                          
                                        </li>
                                        
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    
                                    {/* CART */}
                                    
                                    <div className="close-form">
                                        <Link className="theme-btn" to="https://app.sleet.sa/login" target="_blank">Get Started</Link>
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