import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Accordion.css';

const Accordion = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = t('faqPage.accordion', { returnObjects: true });

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
