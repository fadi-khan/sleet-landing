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
                        <h2>Ready to transform your logistics operations?</h2>
                        <h3>Join businesses embracing
                            smarter logistics with Sleet</h3>
                        <Link onClick={ClickHandler} to="/contact" className="theme-btn">Request a Demo</Link>
                    </div>
                    <div className="contact-info">
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-phone-call"></i>
                            </div>
                            <div className="text">
                                <span>Call For Inquiry</span>
                                <p>+966 53 775 0600</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-email"></i>
                            </div>
                            <div className="text">
                                <span>Send Us Email</span>
                                <p><a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer">mohammad@sleet.sa</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CtaSection;


