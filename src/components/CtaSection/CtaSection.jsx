import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSection = (props) => {
    const { t } = useTranslation();
    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="cta-wrapr">
                    <div className="wpo-section-title">
                        <h2>{t('cta.title')}</h2>
                        <h3>{t('cta.subtitle')}</h3>
                        <Link onClick={ClickHandler} to="/contact" className="theme-btn">{t('cta.requestDemo')}</Link>
                    </div>
                    <div className="contact-info">
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-phone-call"></i>
                            </div>
                            <div className="text">
                                <span>{t('cta.callForInquiry')}</span>
                                <p dir="ltr">+966 53 775 0600</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-email"></i>
                            </div>
                            <div className="text">
                                <span>{t('cta.sendUsEmail')}</span>
                                <p dir="ltr"><a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer">mohammad@sleet.sa</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CtaSection;


