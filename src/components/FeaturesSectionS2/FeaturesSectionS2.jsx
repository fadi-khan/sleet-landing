"use client";

import React from 'react';
import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';

const FeaturesSectionS2 = (props) => {
    const t = useTranslations();
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="top-wraper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-section-title">
                                <h2>{t('home.features.subtitle')}</h2>
                                <h3>{t('home.features.title')}</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="f-btn">
                                <Link onClick={ClickHandler} href="/services" className="theme-btn">{t('common.allServices')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-wraper">
                <div className="container">
                    <div className="bottom-content">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-distribution-center"></i>
                                    </div>
                                    <div className="content">
                                        <h3>{t('home.features.warehouseTitle')}</h3>
                                        <p>{t('home.features.warehouseDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-customer-support-1"></i>
                                    </div>
                                    <div className="content">
                                        <h3>{t('home.features.supportTitle')}</h3>
                                        <p>{t('home.features.supportDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="item">
                                    <div className="icon">
                                        <i className="flaticon-delivery-box"></i>
                                    </div>
                                    <div className="content">
                                        <h3>{t('home.features.cargoTitle')}</h3>
                                        <p>{t('home.features.cargoDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSectionS2;