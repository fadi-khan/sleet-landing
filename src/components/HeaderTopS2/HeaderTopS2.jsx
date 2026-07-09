import React from 'react';
import { Link } from 'react-router-dom';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HeaderTopS2 = () => {
    return (
            <div className="topbar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <ul className="contact-info">
                                <li>
                                    <i className="flaticon-location"></i><span>55 Main Street, 2nd block, Malborne
                                        ,Australia</span>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="contact-into">
                                <ul className="social-help">
                                    <li><Link onClick={ClickHandler} to="#">Help</Link></li>
                                    <li><Link onClick={ClickHandler} to="#">Support</Link></li>
                                    <li><Link onClick={ClickHandler} to="#">Faqs</Link></li>
                                </ul>
                                <ul className="social-media">
                                    <li><Link onClick={ClickHandler} to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="#"><i className="flaticon-linkedin-big-logo"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="#"><i className="flaticon-twitter"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="#"><i className="flaticon-vimeo"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default HeaderTopS2;