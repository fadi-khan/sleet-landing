import React from 'react';
import {
    FaProjectDiagram, FaBrain, FaSatelliteDish, FaCloud, FaExpandArrowsAlt,
    FaShieldAlt, FaPlug, FaLaptopCode, FaChartLine, FaRocket
} from 'react-icons/fa';

const benefits = [
    { icon: FaProjectDiagram, title: 'End-to-End Logistics Platform' },
    { icon: FaBrain, title: 'AI-Powered Decision Making' },
    { icon: FaSatelliteDish, title: 'Real-Time Fleet Visibility' },
    { icon: FaCloud, title: 'Cloud-Based Infrastructure' },
    { icon: FaExpandArrowsAlt, title: 'Scalable for Any Business Size' },
    { icon: FaShieldAlt, title: 'Enterprise-Level Security' },
    { icon: FaPlug, title: 'Easy Integration' },
    { icon: FaLaptopCode, title: 'Modern User Experience' },
    { icon: FaChartLine, title: 'Actionable Analytics' },
    { icon: FaRocket, title: 'Built for the Future of Logistics' },
];

const WhyChooseSection = (props) => {
    return (
        <section className={"wpo-why-choose-section section-padding" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="wpo-section-title">
                    <h2>Why Choose Sleet?</h2>
                    <h3>One platform. Endless possibilities.</h3>
                    <p>Instead of using separate software for fleet management, reporting, AI, and
                        transportation services, Sleet combines everything into one intelligent
                        ecosystem.</p>
                </div>
                <div className="why-choose-grid">
                    {benefits.map((benefit, index) => (
                        <div className="why-choose-item" key={index}>
                            <div className="icon">
                                <benefit.icon />
                            </div>
                            <h3>{benefit.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
