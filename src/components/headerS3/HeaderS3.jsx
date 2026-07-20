"use client";

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Call from '../../images/call.svg'



const HeaderS3 = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


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
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo}
                                        alt=""  /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home-3">Home style 3</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="#">Project</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/project">Project style 1</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/project-2">Project style 2</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/project-3">Project style 3</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/project-single/Special-Transport-Solutions">Project Single</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} to="/tracking">Tracking</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">services </Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/services">services </Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Maritime-transportation">air transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Train-Transportation">road transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Cargo-Ship-Freight23">ocean transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Road-Freight-Service">train transport</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/Maritime-transportation">services Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} to="/shop-single/Fresh-key-Lime">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="#">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <a href="tel:+025757576560" className="call">
                                        <div className="icon">
                                            <img src={Call} alt="Call Icon" />
                                        </div>
                                        <div className="text">
                                            <span>Phone:</span>
                                            <h4>+88 1900 6789 56</h4>
                                        </div>
                                    </a>

                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ${menuActive ? "ti-close" : "flaticon-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" to="/contact">Get an quate <i
                                            className="flaticon-next"></i></Link>
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


export default HeaderS3;

















