"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const Accordion = () => {
    const t = useTranslations();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = t.raw('faqPage.accordion');

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
