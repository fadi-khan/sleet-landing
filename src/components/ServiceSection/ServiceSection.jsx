import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow = true, ServiceAllBtn = true } = props

    const swiperParams = {
        modules: [Pagination, Autoplay],
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: {
            delay: 30000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    };


    return (
        <div className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-7 col-12">
                        {SectionTitleShow && (
                            <SectionTitle subtitle={'Trusted transport service'} title={'Transport & Logistics Services We are the best'} />
                        )}
                    </div>
                    <div className="col-lg-5 col-12">
                        {ServiceAllBtn && (
                            <div className="service-all-btn">
                                <Link onClick={ClickHandler} to="/services" className="theme-btn">All Services</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0">
                <Swiper {...swiperParams} className="service-slider">
                    {Services.map((service, item) => (
                        <SwiperSlide key={item}>
                            <div className="service-card">
                                {service.isCommingSoon && (
                                    <span className="coming-soon-badge">Coming Soon</span>
                                )}
                                <img className="image " src={service.image} alt="" />
                                <div className="content">
                                    <service.Icon />
                                    <div className="text">
                                        <h2><Link to={`/service-single/${service.slug}`} onClick={ClickHandler}>{service.title}</Link></h2>
                                        <p className="">{service.subtitle}</p>
                                        <Link to={`/service-single/${service.slug}`} onClick={ClickHandler} className="service-single-link">
                                            <i className="flaticon-right-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>

    );
}

export default ServiceSection;



