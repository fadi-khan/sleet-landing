import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/Services';


const ServiceSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="service-sidebar">
            <div className="service-catagory">
                <ul>
                    {Services.map((serves, index) => (
                        <li key={index}>
                            <Link to={`/service-single/${serves.slug}`}  onClick={ClickHandler}>
                                <span>{serves.title}{serves.isCommingSoon && <span className="soon-tag">Soon</span>}</span>
                                <i className="flaticon-right-arrow-1"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="service-info">
                <div className="icon">
                    <i className="flaticon-phone-call"></i>
                </div>
                <h2>Looking for
                    logistics service
                    Provider?</h2>
                <span>Call anytime</span>
                <div className="num">
                    <span>+966 53 775 0600</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceSidebar;

