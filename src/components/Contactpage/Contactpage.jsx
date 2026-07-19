"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from '../ContactFrom/ContactForm'
import Img01 from '../../images/homepage/get-in-touch.jpeg'



const Contactpage = () => {
    const t = useTranslations();

    return (
        <div>

            <section className="wpo-contact-page section-padding">
                <div className="container">
                    <div className="office-info">
                        <div className="row">
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-location-1"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>{t('contact.addressLine')}</h2>
                                        <p>{t('contact.addressText')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item active">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>{t('contact.phoneNumber')}</h2>
                                        <p>+966 53 775 0600</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>{t('contact.addressLabel')}</h2>
                                        <p><a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer">mohammad@sleet.sa</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-left">
                                    <h2>{t('contact.getInTouch')}</h2>
                                    <p>{t('contact.getInTouchDesc')}</p>
                                    <img className="image" src={Img01.src} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-right">
                                    <div className="title">
                                        <h2>{t('contact.fillForm')}</h2>
                                        <p>{t('contact.fillFormDesc')}</p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </div >
    )


}

export default Contactpage;
