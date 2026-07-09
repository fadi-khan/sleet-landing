import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../api/Services";

const ServiceSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { SectionTitleShow = true } = props
    return (
        <div className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                        {SectionTitleShow && (
                            <SectionTitle subtitle={'Trusted transport service'} title={'Transport & Logistics Services We are the best'} />
                        )}
                    </div>
                </div>
                <div className="row">
                    {Services.map((service, item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item}>
                            <div className="service-card-s2">
                                {service.isCommingSoon && (
                                    <span className="coming-soon-badge">Coming Soon</span>
                                )}
                                <div className="icon">
                                    <service.Icon />
                                </div>
                                <div className="content">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                    <div className="services-btn">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>See Details </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionS2;


