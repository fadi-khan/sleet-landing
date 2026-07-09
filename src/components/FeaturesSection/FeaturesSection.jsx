import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const FeaturesSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { SectionTitleShow = true } = props
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                {SectionTitleShow && (
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <SectionTitle subtitle={'Trusted transport service'} title={'We provide quick & safe transportation all over the world'} />
                        </div>
                    </div>
                )}
                <div className="features-wrap">
                    <div className="features-card">
                        <i className="flaticon-logistics"></i>
                        <h3>Complete
                            Logistics System</h3>
                    </div>
                    <div className="features-card">
                        <i className="flaticon-fast-delivery-1"></i>
                        <h3>Shipping
                            All Over the world</h3>
                    </div>
                    <div className="features-card">
                        <i className="flaticon-locations"></i>
                        <h3>Online
                            Product Tracking </h3>
                    </div>
                    <div className="features-card">
                        <i className="flaticon-logistics-1"></i>
                        <h3>International
                            shipping services</h3>
                    </div>
                    <div className="features-card">
                        <i className="flaticon-customer-support"></i>
                        <h3>Great
                            logistical support.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4>Bring them together and you overcome the ordinary. <Link onClick={ClickHandler} to="/">View More Features
                            <span>+</span></Link></h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;