"use client";

import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import blogs from '../../api/blogs'
import Shape from '../../images/blog/bg-img.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="bg-img">
                <img src={Shape} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subtitle={'Trusted transport service'} title={'Get Every Single Updates News & Blog'} />
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(0, 3).map((bloge, bkye) => (
                        <div className="col-lg-4 col-md-6 col-12" key={bkye}>
                            <div className="blog-card">
                                <img src={bloge.screens} alt="" />
                                <div className="content">
                                    <div className="date">
                                        <h3>20</h3>
                                        <span>Sep</span>
                                    </div>
                                    <div className="text">
                                        <span>{bloge.tag}</span>
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h2>
                                    </div>
                                    <ul className="comment">
                                        <li><i className="flaticon-profile"></i> <span>{bloge.author}</span></li>
                                        <li><i className="flaticon-comments"></i> <span>Comments(5)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default BlogSection;

