import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider1 from '../../images/slider/sleet-hero-bg.jpg'
import Slider2 from '../../images/slider/slide-1.jpg'
import Shape from '../../images/slider/icon.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HeroSlider = () => {

    const settings = {
        autoplay: true,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    return (
        <section className="hero-section">
            <Slider {...settings} className="hero-slider">
                <div>
                    <div className="slider-item">
                        <div className="bg-image">
                            <img className="animated" src={Slider1} alt=""
                                data-animation-in="zoomInImage" />
                        </div>
                        <div className="container">
                            <div className="content">
                                <h2 className="animated" data-animation-in="fadeInUp">Sleet</h2>
                                <h3 className="animated" data-animation-in="fadeInUp">Future of Smart Logistics</h3>
                                <p className="animated" data-animation-in="fadeInUp">Sleet Automation Logistics is an all-in-one logistics technology platform that combines intelligent fleet management, SaaS solutions, AI-powered automation, and a digital truck marketplace to help businesses move faster, operate smarter, and scale with confidence.</p>
                                <div className="hero-btn animated d-flex gap-4" data-animation-in="fadeInUp">
                                    <div className="btn-1">
                                        <Link onClick={ClickHandler} to="/about" className="theme-btn">Get Started</Link>
                                    </div>
                                    <Link onClick={ClickHandler} to="/about" className="hero-btn text-info fs-5 fw-bold ">
                                        <span className='text-decoration-underline'>Learn More</span> <i className="ti-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="down-shape">
                            <svg width="19" height="86" viewBox="0 0 19 86" fill="none">
                                <path
                                    d="M0.000800801 0.240602L0.0525983 6.64872L8.95468 14.2473L17.8817 6.38959L17.8301 0L17.8046 0.000184758L8.90289 7.83917L0.000800801 0.240602Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.145332 18.0912L0.19713 24.4993L9.09922 32.0979L18.0263 24.2402L17.9746 17.8506L17.9492 17.8508L9.04742 25.6898L0.145332 18.0912Z"
                                    fill="white" />
                                <path
                                    d="M0.289863 35.9418L0.341661 42.3499L9.24375 49.9485L18.1708 42.0908L18.1191 35.7012L18.0937 35.7014L9.19195 43.5403L0.289863 35.9418Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.434395 53.7924L0.486213 60.2031L9.3883 67.8017L18.3153 59.9413L18.2637 53.5518L18.2382 53.5519L9.33648 61.3909L0.434395 53.7924Z"
                                    fill="white" fillOpacity="0.2" />
                                <path
                                    d="M0.576951 71.6432L0.62877 78.054L9.53086 85.6526L18.4579 77.7922L18.4062 71.4053L18.3808 71.4055L9.47904 79.2418L0.576951 71.6432Z"
                                    fill="white" fillOpacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>
              
            </Slider>
          
        </section>
    );
};

export default HeroSlider;