"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Accordion from './Accordion';

const FaqSection = (props) => {
    const t = useTranslations();
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-6 col-12">
                        <div className="faq-left-content">
                            <div className="wpo-section-title">
                                <h2>{t('home.faq.title')}</h2>
                                <h3>{t('home.faq.subtitle')}</h3>
                                <p>{t('home.faq.description')}</p>
                            </div>
                            <ul className="item">
                                <li>{t('home.faq.item1')}</li>
                                <li>{t('home.faq.item2')}</li>
                            </ul>
                            <ul className="item-service">
                                <li>
                                    <i className="flaticon-circuit"></i>
                                    <span>{t('home.faq.fleetManagement')}</span>
                                </li>
                                <li>
                                    <i className="flaticon-circuit"></i>
                                    <span>{t('home.faq.cloudBasedPlatform')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Accordion/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;