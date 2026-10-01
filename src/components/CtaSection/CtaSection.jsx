"use client";

import React from "react";
import { Link } from "../../i18n/navigation";
import { useTranslations } from "next-intl";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSection = (props) => {
    const t = useTranslations();
    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="cta-wrapr">
                    <div className="wpo-section-title">
                        <h2 role="presentation">{t('cta.title')}</h2>
                        <h3 aria-level={2}>{t('cta.subtitle')}</h3>
                        <Link onClick={ClickHandler} href="/contact" className="theme-btn">{t('cta.requestDemo')}</Link>
                    </div>
                    <div className="contact-info">
                        <div className="item">
                            <div className="icon">
                                <i className="flaticon-phone-call"></i>
                            </div>
                            <div className="text">
                                <span>{t('cta.callForInquiry')}</span>
                                <p dir="ltr"><a href="tel:+966537750600">+966 53 775 0600</a></p>
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


