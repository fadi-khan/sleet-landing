"use client";

import React from 'react';
import ProjectSectionS2 from '../ProjectSectionS2/ProjectSectionS2'
import TestimonialS2 from '../TestimonialS2/TestimonialS2'

const ProjectTestimonialSection = () => {
    return (
        <div className="wpo-project-testimonial-section section-padding">


            <ProjectSectionS2 hclass={'wpo-project-section-s2'} />
            <TestimonialS2 hclass={'wpo-testimonial-section-s2'} />
            <div className="left-shape">
                <svg width="241" height="402" viewBox="0 0 241 402" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M241 402L-51.1328 0L50.4737 251.634L111.162 402H241Z" fill="#04cfe6ad" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M-122 0L50.4447 252.64L-51.2944 0H-122Z"
                        fill="#135464" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M0.263084 173L-53 402H4.32965L41 234.863L0.263084 173Z" fill="#FFCB37" />
                </svg>
            </div>
            <div className="right-shape">
                <svg width="229" height="506" viewBox="0 0 229 506" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M461 506L90 0L219.037 316.733L296.11 506H461Z"
                        fill="#04cfe6ad" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L219 318L89.7942 0H0Z" fill="#135464" />
                </svg>
            </div>
        </div>
    );
};

export default ProjectTestimonialSection;