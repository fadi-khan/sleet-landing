"use client";

import React from 'react';
import blogs from '../../api/blogs'
// import SectionTitle from '../SectionTitle/SectionTitle';
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from '../../i18n/navigation';


const BlogSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="wpo-blog-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <h2>Trusted transport service</h2>
                            <h3>Read our News & Blogs</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="f-btn">
                            <Link onClick={ClickHandler} href="/blog" className="theme-btn">All Blogs</Link>
                        </div>
                    </div>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, A11y]}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="blog-slider"
                >
                    {blogs.slice(3, 7).map((bloge, bkye) => (
                        <SwiperSlide key={bkye}>
                            <div className="blog-card-s2">
                                <img src={bloge.screens} alt="Blog 1" />
                                <div className="content">
                                    <ul className="comment">
                                        <li><i className="flaticon-profile"></i> <span>Roger J. Spaulding</span></li>
                                        <li><i className="flaticon-comments"></i> <span>Comments(5)</span></li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} href={`/blog-single/${bloge.slug}`}>{bloge.title}</Link>
                                    </h2>
                                    <div className="b-btn">
                                        <Link onClick={ClickHandler} href={`/blog-single/${bloge.slug}`}>Read More <i className="flaticon-right-arrow"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
};

export default BlogSectionS2;
