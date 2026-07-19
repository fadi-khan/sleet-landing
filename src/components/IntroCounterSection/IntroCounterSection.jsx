"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const IntroCounterSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="wpo-introCounter-section section-padding pb-0">
            <div className="container">
                <div className="top-content">
                    <div className="count-wrap">
                        <div className="count-item">
                            <h2><CountUp end={200} enableScrollSpy /></h2>
                            <p>Daily Customer</p>
                        </div>
                        <div className="count-item s2">
                            <h2><CountUp end={400} enableScrollSpy /></h2>
                            <p>Daily Customer</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-content">
                    <p>The most advanced revenue than this. Iwill refer everyone I know What
                        I like Level more and more each day because it makes my life a lot excuse
                        easier. It really saves me time and effort off.vel is exactly what ou</p>
                    <Link onClick={ClickHandler} to="/content"><i className="flaticon-right-arrow"></i></Link>
                </div>
            </div>
            <div className="bg-text ">
                <h3>Transport & Logistics service</h3>
            </div>
        </section>
    );
};

export default IntroCounterSection;