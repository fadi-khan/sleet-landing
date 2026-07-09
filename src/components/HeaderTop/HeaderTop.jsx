import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const HeaderTop = () => {
    return (
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                        <ul className="contact-info">
                            <li>
                                <i className="ti-email"></i><span>support@logistika.com</span>
                            </li>
                            <li>
                                <a href="tel:+887869587496">
                                    <i className="flaticon-call"></i><span>+88 7869 5874 96</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="contact-into">
                            <LanguageSelector/>
                            <div className="pryment-selector">
                                <select>
                                    <option value="usd">USD</option>
                                    <option value="aud">AUD</option>
                                </select>
                            </div>
                            <ul className="social-media">
                                <li><span>Follow Us :</span></li>
                                <li><Link to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                <li><Link to="#"><i className="flaticon-linkedin-big-logo"></i></Link></li>
                                <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                                <li><Link to="#"><i className="flaticon-vimeo"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;