import React, { useState } from 'react';
import './Accordion.css'; 

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'What is Sleet Automation Logistics?',
            content: 'Sleet Automation Logistics is a logistics technology company that provides intelligent transportation solutions through four integrated services: Sleet Logistics, Sleet SaaS, Sleet TNC, and Sleet AI. Our platform helps businesses manage fleets, automate operations, and make data-driven decisions from a single dashboard.'
        },
        {
            title: 'What is Sleet SaaS?',
            content: 'Sleet SaaS is a cloud-based logistics management platform designed for logistics companies, transport providers, and enterprises. It enables businesses to manage fleets, drivers, customers, deliveries, and operations without developing software from scratch.'
        },
        {
            title: 'Who can use Sleet SaaS?',
            content: 'Sleet SaaS is ideal for Logistics Companies, Fleet Owners, Freight Forwarders, Manufacturing Companies, Retail & E-commerce Businesses, Construction Companies, Oil & Gas Companies, and Distribution & Supply Chain Businesses.'
        },
        {
            title: 'What is Sleet Logistics?',
            content: 'Sleet Logistics is our end-to-end fleet management solution that combines Sleet\'s own fleet of trucks with a powerful management dashboard. Businesses can monitor vehicles, drivers, deliveries, fuel usage, maintenance, and overall fleet performance in real time.'
        }
    ];

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <button className="accordion-header" onClick={() => handleToggle(index)}>
                        {item.title}
                    </button>
                    <div className="accordion-content">
                        {activeIndex === index && <p>{item.content}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
