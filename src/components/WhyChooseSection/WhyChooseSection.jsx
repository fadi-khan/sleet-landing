import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FaProjectDiagram, FaBrain, FaSatelliteDish, FaCloud, FaExpandArrowsAlt,
    FaShieldAlt, FaPlug, FaLaptopCode, FaChartLine, FaRocket
} from 'react-icons/fa';

const icons = [
    FaProjectDiagram, FaBrain, FaSatelliteDish, FaCloud, FaExpandArrowsAlt,
    FaShieldAlt, FaPlug, FaLaptopCode, FaChartLine, FaRocket
];

const WhyChooseSection = (props) => {
    const { t } = useTranslation();
    const items = t('home.whyChoose.items', { returnObjects: true });
    return (
        <section className={"wpo-why-choose-section section-padding" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="wpo-section-title">
                    <h2>{t('home.whyChoose.title')}</h2>
                    <h3>{t('home.whyChoose.subtitle')}</h3>
                    <p>{t('home.whyChoose.description')}</p>
                </div>
                <div className="why-choose-grid">
                    {items.map((title, index) => {
                        const Icon = icons[index];
                        return (
                            <div className="why-choose-item" key={index}>
                                <div className="icon">
                                    <Icon />
                                </div>
                                <h3>{title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
