import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import Logo from '../../images/logo-2.svg'
import BgImage from '../../images/footer-bg.jpg'
import Services from '../../api/Services';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const Footer = (props) => {


    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <footer className={"" +props.hclass}>
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <h2>Join Our Newsletter</h2>
                            <p>We Provide Best Pricing package to grow your lead capture</p>
                            <form className="newsletter" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit">
                                    Subscribe <i className="flaticon-right-arrow"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="blog" />
                                </div>
                                <p>Logistika excels in transport and logistics solutions with global service
                                    capabilities.</p>
                                <ul>
                                    <li>
                                        <div className="icon"><svg width="23" height="28" viewBox="0 0 23 28" fill="none">
                                            <path
                                                d="M12.3108 2C7.55184 2 3.68164 5.86831 3.68164 10.625C3.68164 16.6036 11.4709 24.4581 11.8017 24.7901C11.9427 24.9296 12.1268 25 12.3108 25C12.4949 25 12.679 24.9296 12.82 24.7901C13.1508 24.4581 20.9401 16.6036 20.9401 10.625C20.9401 5.86831 17.0699 2 12.3108 2ZM12.3108 23.2419C10.5936 21.4048 5.11984 15.1919 5.11984 10.625C5.11984 6.66181 8.34573 3.4375 12.3108 3.4375C16.276 3.4375 19.5019 6.66181 19.5019 10.625C19.5019 15.1876 14.0281 21.4048 12.3108 23.2419Z"
                                                fill="#04cfe6ad" />
                                            <path
                                                d="M12.3107 6.3125C9.93191 6.3125 7.99609 8.24737 7.99609 10.625C7.99609 13.0026 9.93191 14.9375 12.3107 14.9375C14.6895 14.9375 16.6253 13.0026 16.6253 10.625C16.6253 8.24737 14.6895 6.3125 12.3107 6.3125ZM12.3107 13.5C10.7244 13.5 9.43429 12.2106 9.43429 10.625C9.43429 9.03944 10.7244 7.75 12.3107 7.75C13.897 7.75 15.1871 9.03944 15.1871 10.625C15.1871 12.2106 13.897 13.5 12.3107 13.5Z"
                                                fill="#04cfe6ad" />
                                        </svg></div>
                                        <span>Street 1b, Al Khaleej road,
                                            Al Muhammadiyah, Dammam</span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none">
                                                <g clipPath="url(#clip0_20_22892)">
                                                    <path
                                                        d="M1.97766 17.6352C1.63708 17.6334 1.31097 17.4974 1.07014 17.2567C0.829309 17.016 0.693213 16.69 0.691406 16.3496V5.77586C0.693222 5.07078 0.974257 4.39509 1.47307 3.89652C1.97189 3.39795 2.6479 3.11705 3.35333 3.11523H15.9063C16.6129 3.11523 17.2907 3.39533 17.791 3.89409C18.2913 4.39286 18.5733 5.06959 18.5751 5.77586V12.8227C18.5751 13.529 18.2949 14.2065 17.7959 14.7065C17.2969 15.2066 16.6198 15.4884 15.9132 15.4902H5.44435C5.32544 15.4912 5.20989 15.5297 5.11419 15.6002L2.75491 17.3809C2.52995 17.547 2.25738 17.6362 1.97766 17.6352ZM3.35333 4.49023C3.01275 4.49204 2.68664 4.62807 2.44581 4.86878C2.20498 5.10949 2.06888 5.43545 2.06708 5.77586V16.1777L4.28878 14.5002C4.62307 14.2521 5.02795 14.1172 5.44435 14.1152H15.9063C16.2493 14.1152 16.5782 13.9791 16.8207 13.7367C17.0632 13.4943 17.1994 13.1655 17.1994 12.8227V5.77586C17.1976 5.43545 17.0615 5.10949 16.8207 4.86878C16.5799 4.62807 16.2538 4.49204 15.9132 4.49023H3.35333Z"
                                                        fill="#04cfe6ad" />
                                                    <path
                                                        d="M12.3438 10.0527C12.7234 10.0527 13.0312 9.74493 13.0312 9.36524C13.0312 8.98554 12.7234 8.67773 12.3438 8.67773C11.9641 8.67773 11.6562 8.98554 11.6562 9.36524C11.6562 9.74493 11.9641 10.0527 12.3438 10.0527Z"
                                                        fill="#04cfe6ad" />
                                                    <path
                                                        d="M9.67383 10.0527C10.0535 10.0527 10.3613 9.74493 10.3613 9.36524C10.3613 8.98554 10.0535 8.67773 9.67383 8.67773C9.29413 8.67773 8.98633 8.98554 8.98633 9.36524C8.98633 9.74493 9.29413 10.0527 9.67383 10.0527Z"
                                                        fill="#04cfe6ad" />
                                                    <path
                                                        d="M6.92188 10.0527C7.30157 10.0527 7.60938 9.74493 7.60938 9.36524C7.60938 8.98554 7.30157 8.67773 6.92188 8.67773C6.54218 8.67773 6.23438 8.98554 6.23438 9.36524C6.23438 9.74493 6.54218 10.0527 6.92188 10.0527Z"
                                                        fill="#04cfe6ad" />
                                                    <path
                                                        d="M20.6389 10.6777C20.4565 10.6777 20.2815 10.6053 20.1525 10.4764C20.0235 10.3474 19.9511 10.1726 19.9511 9.99023V3.02586C19.9493 2.68545 19.8132 2.35949 19.5723 2.11878C19.3315 1.87807 19.0054 1.74204 18.6648 1.74023H4.81869C4.63627 1.74023 4.46132 1.6678 4.33232 1.53887C4.20333 1.40994 4.13086 1.23507 4.13086 1.05273C4.13086 0.870398 4.20333 0.69553 4.33232 0.566598C4.46132 0.437667 4.63627 0.365234 4.81869 0.365234H18.6648C19.3702 0.367049 20.0463 0.647947 20.5451 1.14652C21.0439 1.64509 21.3249 2.32078 21.3267 3.02586V9.99023C21.3267 10.1726 21.2543 10.3474 21.1253 10.4764C20.9963 10.6053 20.8213 10.6777 20.6389 10.6777Z"
                                                        fill="#04cfe6ad" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_20_22892">
                                                        <rect width="22.0107" height="22" fill="white"
                                                            transform="translate(0.00390625)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer"><span>mohammad@sleet.sa</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0,6).map((service,item) => (
                                        <li key={item}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">How it Works</Link></li>
                                    <li><Link onClick={ClickHandler} to="/services">Help Link</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Terms & Conditions</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget locations-widget">
                                <div className="widget-title">
                                    <h3>Locations</h3>
                                </div>
                                <p>Street 1b, Al Khaleej road, Al Muhammadiyah,
                                    Dammam</p>
                                <ul>
                                    <li>Contact</li>
                                    <li><a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer">mohammad@sleet.sa</a></li>
                                    <li>+966 53 775 0600</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-map">
                    <img src="assets/images/footer-map.svg" alt="" />
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2026 <Link onClick={ClickHandler} to="index.html">wpOcean</Link> - Logistics service. All
                                rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-image">
                <img src={BgImage} alt="" />
            </div>
            <div className="shape">
                <svg width="191" height="208" viewBox="0 0 191 208" fill="none">
                    <path d="M125.53 208.291H118.13L0 12.271V0.00102234L125.53 208.291Z" fill="white" />
                    <path d="M0 43.1711L99.93 209.121H0V43.1711Z" fill="#04cfe6ad" />
                    <path d="M190.33 209.121H138.45L68.9102 93.7311H120.79L190.33 209.121Z" fill="#144754" />
                    <path d="M98.0897 69.1602H72.8097L38.9297 12.9402H64.2097L98.0897 69.1602Z" fill="#04cfe6ad" />
                </svg>
            </div>
            <div className="shape-1">
                <svg width="109" height="109" viewBox="0 0 109 109" fill="none">
                    <g clipPath="url(#clip0_20_22861)">
                        <path
                            d="M89.2238 70.0989C96.8421 52.9453 83.0134 34.3526 64.3055 38.1509C63.3593 38.3037 62.349 38.6611 61.473 38.9482C64.7448 51.0903 62.3701 65.8435 53.3269 71.7703C45.1535 77.0712 38.0365 69.6765 39.8509 61.3734C42.0436 51.5042 47.9756 42.2447 56.7624 37.1361C54.0501 29.6612 48.588 23.7955 39.7724 23.6173C24.9222 23.3457 13.7687 39.9537 15.1025 53.6225C15.3318 55.0418 13.1707 55.488 12.9415 54.0686C9.22601 36.1726 26.7675 16.7366 45.2082 20.6033C52.3546 22.1676 57.4777 28.0396 60.3243 35.4443C69.9479 31.6083 80.9223 34.9331 88.1673 41.9185C96.5176 50.0363 96.5233 61.4922 91.8885 71.2704C91.1716 72.8428 88.6409 71.6006 89.2238 70.0989ZM46.3634 54.2047C44.5327 57.8986 42.6503 62.4747 43.338 66.7328C43.9554 70.8563 49.4223 69.5367 51.6411 68.547C54.3972 67.2766 55.8312 64.1322 56.7982 61.4031C59.0649 55.6001 59.5304 47.6604 57.9109 40.6401C52.8841 43.7822 49.1156 49.0027 46.3634 54.2047Z"
                            fill="#04cfe6ad" />
                        <path
                            d="M88.1881 80.2176C86.2215 76.4573 84.4532 72.4223 83.4969 68.3047C83.1273 66.617 85.4928 66.2347 85.9969 67.8526C87.0049 71.0881 88.7546 74.1066 90.4341 76.9908C92.1095 75.9436 93.9194 74.826 95.5247 73.6443C96.7272 72.6734 98.25 70.6798 100.014 70.7832C100.897 70.8348 101.248 71.5062 101.33 72.3183C101.502 74.281 98.6815 75.756 97.3447 76.7971C95.1379 78.4644 92.9252 79.7924 90.5077 81.0567C89.7024 81.4779 88.6095 81.0233 88.1881 80.2176Z"
                            fill="#04cfe6ad" />
                    </g>
                    <defs>
                        <clipPath id="clip0_20_22861">
                            <rect width="80" height="80" fill="white"
                                transform="matrix(0.463446 0.886125 0.886125 -0.463446 0.679688 37.7559)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;