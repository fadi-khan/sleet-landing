"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

// `items` ({ title, content }[]) overrides the default site-wide FAQ list.
const Accordion = ({ limit, items }) => {
    const t = useTranslations();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const allItems = items || t.raw('faqPage.accordion');
    const accordionData = limit ? allItems.slice(0, limit) : allItems;

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <button type="button" className="accordion-header" onClick={() => handleToggle(index)} aria-expanded={activeIndex === index}>
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
