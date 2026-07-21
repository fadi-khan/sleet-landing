"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pimg1 from '../../images/partners/img-1.png';
import Pimg2 from '../../images/partners/img-2.png';
import Pimg3 from '../../images/partners/img-3.png';
import Pimg4 from '../../images/partners/img-4.png';
import Pimg5 from '../../images/partners/img-5.png';
import Pimg6 from '../../images/partners/img-6.png';

const PartnersSection = (props) => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    };


    return (
        <section className={"" + props.CollClass}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <Slider {...settings} className='partner-grids partners-slider'>
                            <div className="grid">
                                <img src={Pimg1.src} alt="Maxton Design partner logo" />
                            </div>
                            <div className="grid">
                                <img src={Pimg2.src} alt="Turbologo partner logo" />
                            </div>
                            <div className="grid">
                                <img src={Pimg3.src} alt="Mondi Business Paper partner logo" />
                            </div>
                            <div className="grid">
                                <img src={Pimg4.src} alt="Logotype partner logo" />
                            </div>
                            <div className="grid">
                                <img src={Pimg5.src} alt="Duragas partner logo" />
                            </div>
                            <div className="grid">
                                <img src={Pimg6.src} alt="ConsultingNG partner logo" />
                            </div>
                            <div className="grid">
                                <img src={Pimg1.src} alt="Maxton Design partner logo" />
                            </div>
                            <div className="grid">
                                <img src={Pimg2.src} alt="Turbologo partner logo" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;




