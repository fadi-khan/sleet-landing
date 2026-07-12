import React from 'react';
import {
    FaTruckMoving, FaShippingFast, FaIndustry, FaStore, FaHardHat,
    FaOilCan, FaWarehouse, FaBoxes, FaShoppingCart, FaLandmark
} from 'react-icons/fa';

const industries = [
    { icon: FaTruckMoving, title: 'Logistics Companies' },
    { icon: FaShippingFast, title: 'Transportation Providers' },
    { icon: FaIndustry, title: 'Manufacturing' },
    { icon: FaStore, title: 'Retail' },
    { icon: FaHardHat, title: 'Construction' },
    { icon: FaOilCan, title: 'Oil & Gas' },
    { icon: FaWarehouse, title: 'Distribution Companies' },
    { icon: FaBoxes, title: 'Freight Forwarders' },
    { icon: FaShoppingCart, title: 'E-commerce' },
    { icon: FaLandmark, title: 'Government & Enterprise Fleets' },
];

const IndustriesSection = (props) => {
    return (
        <section className={"wpo-industries-section section-padding" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="wpo-section-title">
                    <h2>Industries We Serve</h2>
                    <h3>Built for every kind of fleet</h3>
                </div>
                <div className="industries-grid">
                    {industries.map((industry, index) => (
                        <div className="industries-item" key={index}>
                            <div className="icon">
                                <industry.icon />
                            </div>
                            <span>{industry.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
