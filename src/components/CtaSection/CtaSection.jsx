import React from "react";
import { Link } from "react-router-dom";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSection = (props) => {
    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="cta-wrapr">
                    <div className="wpo-section-title">
                        <h2>Trusted transport service</h2>
                        <h3>Transport & Logistics
                            proejcts that we providde</h3>
                        <Link onClick={ClickHandler} to="/contact" className="theme-btn">Contact support</Link>
                    </div>
                    <div className="contact-info">
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-phone-call"></i>
                            </div>
                            <div className="text">
                                <span>Call For Inquiry</span>
                                <p>+236 (456) 896 22</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-email"></i>
                            </div>
                            <div className="text">
                                <span>Send Us Email</span>
                                <p>contact@logistika.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CtaSection;


