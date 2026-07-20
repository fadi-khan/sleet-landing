"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import testimonials from '../../api/testimonialData';

const TestimonialS2 = (props) => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="testimonial-wrap testimonial-slider">
                    <div className="image slider-for">
                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} arrows={false} fade={true}>
                            {testimonials.slice(0, 2).map((testimonial, item) => (
                                <div className="item" key={item}>
                                    <span className="feedback"><i className="flaticon-mark"></i></span>
                                    <img src={testimonial.img} alt="" />
                                    <ul>
                                        <li><i className="flaticon-star"></i></li>
                                        <li><i className="flaticon-star"></i></li>
                                        <li><i className="flaticon-star"></i></li>
                                        <li><i className="flaticon-star"></i></li>
                                        <li><i className="flaticon-star"></i></li>
                                    </ul>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="content-wrap">
                        <div className="slider-nav">
                            <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={1} swipeToSlide={true} focusOnSelect={true} fade={true }>
                                {testimonials.slice(0, 2).map((testimonial, item) => (
                                    <div className="content" key={item}>
                                        <p>{testimonial.Des}</p>
                                        <div className="client-name">
                                            <h4>{testimonial.title}/</h4>
                                            <span>{testimonial.sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialS2;
