"use client";

import React from 'react';
import Accordion from '../FaqSection/Accordion';
import Shape from '../../images/faq-icon.svg'

const FaqSectionS2 = () => {
    return (
        <section className="wpo-faq-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <h2>Trusted transport service</h2>
                            <h3>Transport & Logistics
                                Services We are the best</h3>
                        </div>
                        <Accordion />
                    </div>
                </div>
            </div>
            <div className="shape">
                <svg width="100%" height="100%" viewBox="0 0 579 909" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M358.873 909L277 382L87.7578 760V909H358.873Z"
                        fill="#1C7991" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M0.703125 909L465.828 0L304.102 569.065L207.458 909H0.703125Z" fill="#FF7236" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M579.001 0L304.154 571.371L466.229 0H579.001Z"
                        fill="#124855" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M369.718 0L280.523 361.342L465.827 0H369.718Z"
                        fill="#1C7990" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M364.445 446.031L443.443 909H358.413L304.154 571.128L364.445 446.031Z" fill="#FFCB37" />
                </svg>
            </div>
            <div className="shape-right">
                <svg width="170" height="189" viewBox="0 0 170 189" fill="none">
                    <path d="M57.9913 187.379H64.6136L170.33 11.9574V0.976797L57.9913 187.379Z" fill="white" />
                    <path d="M170.33 39.6097L80.9011 188.121H170.33V39.6097Z" fill="#FF7236" />
                    <path d="M-0.000549824 188.121H46.4277L108.66 84.8567H62.2319L-0.000549824 188.121Z"
                        fill="#0B3742" />
                    <path d="M82.549 62.8691H105.172L135.492 12.557H112.869L82.549 62.8691Z" fill="#FF7236" />
                </svg>
            </div>
            <div className="icon">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default FaqSectionS2;