import React from 'react';
import { Link } from 'react-router-dom';


const PricingCard = ({ title, price, plan, features, Rtitle }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className="col col-lg-4 col-md-6 col-12">
            <div className="pric-card">
                <h4>{Rtitle}</h4>
                <h3 className="title">{title}</h3>
                <h2 className="pric"><span>$</span>{price}<span>/ {plan}</span></h2>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="pric-btn">
                    <Link onClick={ClickHandler} to="#">choose pricing plan <i className="ti-angle-right"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
