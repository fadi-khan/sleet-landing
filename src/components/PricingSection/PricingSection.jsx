"use client";

import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PricingCard from './PricingCard';
import pricingPlans from '../../api/pricingPlans'; 
import Shape from '../../images/pric-shape.svg'
import Shape2 from '../../images/pric-shape2.svg'

const PricingSection = (props) => {
    const {SectionTitleShow = true} = props

    return (
        <section className={"" +props.hclass}>
            <div className="container">
                {SectionTitleShow && (
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <SectionTitle subtitle={'Trusted transport service'} title={'Our business pricing plan you might like'}/>
                        </div>
                    </div>
                )}
                <div className="row align-item-center">
                    {pricingPlans.slice(0,3).map((plan, index) => (
                        <PricingCard
                            key={index}
                            title={plan.title}
                            Rtitle={plan.Rtitle}
                            price={plan.price}
                            plan={plan.plan}
                            features={plan.features}
                        />
                    ))}
                </div>
            </div>
            <div className="shape-left">
                <img src={Shape.src} alt="" />
            </div>
            <div className="shape-rigth">
                <img src={Shape2.src} alt="" />
            </div>
        </section>
    );
};

export default PricingSection;