import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/Services';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const AboutSleetSection = (props) => {
    const scrollToServices = (e) => {
        e.preventDefault();
        const scroll = () => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };
        if (location.pathname === '/' || location.pathname === '/home' || location.pathname === '/home-2') {
            scroll();
        } else {
            navigate('/home');
            setTimeout(scroll, 300);
        }
    };
    return (
        <section className={"wpo-about-sleet-section section-padding" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <h2>About Sleet</h2>
                            <h3>Driving the future of logistics</h3>
                        </div>
                        <p>Sleet Automation Logistics is transforming the logistics industry through
                            technology. Our integrated ecosystem brings together transportation, fleet
                            management, artificial intelligence, and digital logistics services into one
                            powerful platform.</p>
                        <p>Whether you manage a single fleet or thousands of vehicles, Sleet gives you
                            complete visibility, automation, and control through intelligent software
                            built for modern logistics.</p>
                        <Link onClick={scrollToServices} to="#services" className="theme-btn">Explore more about <i className="ti-angle-right"></i></Link>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-sleet-grid">
                            {Services.map((service, index) => (
                                <Link to={`/service-single/${service.slug}`} onClick={ClickHandler} className="about-sleet-card" key={index}>
                                    {service.isCommingSoon && <span className="soon-tag">Soon</span>}
                                    <service.Icon />
                                    <h3>{service.title}</h3>
                                    <p>{service.subtitle}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSleetSection;
