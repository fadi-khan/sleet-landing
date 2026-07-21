"use client";

import React from 'react';
import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../lib/api/Services";
import Shape from '../../images/service/top-shape.svg'
import Shape2 from '../../images/service/bottom-shape.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSectionS3 = (props) => {
    const t = useTranslations();
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: true,
        autoplay: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1499,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }

        ]
    };

    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subtitle={t('home.service.subtitle')} title={t('home.service.title')} />
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="service-btn">
                            <Link onClick={ClickHandler} href="/services" className="theme-btn">{t('common.allServices')}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-slider-s2">
                <Slider {...settings}>
                    {Services.map((service, item) => (
                        <div className="service-card-s2" key={item}>
                            {service.isCommingSoon && (
                                <span className="coming-soon-badge">{t('serviceSingle.comingSoon')}</span>
                            )}
                            <div className="icon">
                                <service.Icon />
                            </div>
                            <div className="content">
                                <h2><Link href={`/service-single/${service.slug}`} onClick={ClickHandler}>{t(`servicesData.${service.key}.title`)}</Link></h2>
                                <p>{t(`servicesData.${service.key}.description`)}</p>
                                <div className="services-btn">
                                    <Link href={`/service-single/${service.slug}`} onClick={ClickHandler}>{t('common.seeDetails')} </Link>
                                </div>
                            </div>
                            <div className="top-shape">
                                <img src={Shape.src} alt="" />
                            </div>
                            <div className="bottom-shape">
                                <img src={Shape2.src} alt="" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ServiceSectionS3;