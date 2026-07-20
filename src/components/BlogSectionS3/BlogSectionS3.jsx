"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import blogs from '../../api/blogs'

import Icon from '../../images/blog/heart.svg'

const BlogSectionS3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <section className="wpo-blog-section-s3 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subtitle={'Trusted transport service'} title={'Get Every Single Updates News & Blog'} />
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(7, 10).map((bloge, bkye) => (
                        <div className="col-lg-4 col-md-6 col-12" key={bkye}>
                            <div className="blog-card-s3">
                                <div className="image">
                                    <img src={bloge.screens} alt="" />
                                    <span>Business</span>
                                </div>
                                <div className="content">
                                    <ul className="comment">
                                        <li><i className="flaticon-calendar"></i> <span>12 Apr 2026</span></li>
                                        <li><i className="flaticon-comments"></i> <span>Comments(5)</span></li>
                                    </ul>
                                    <h2>
                                       <Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link>
                                    </h2>
                                    <div className="blog-btn-content">
                                        <Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>Read More <i className="flaticon-right-arrow-1"></i></Link>
                                        <div className="icon">
                                            <img src={Icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default BlogSectionS3;


