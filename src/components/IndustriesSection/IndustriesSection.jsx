import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FaTruckMoving, FaShippingFast, FaIndustry, FaStore, FaHardHat,
    FaOilCan, FaWarehouse, FaBoxes, FaShoppingCart, FaLandmark
} from 'react-icons/fa';

const icons = [
    FaTruckMoving, FaShippingFast, FaIndustry, FaStore, FaHardHat,
    FaOilCan, FaWarehouse, FaBoxes, FaShoppingCart, FaLandmark
];

const IndustriesSection = (props) => {
    const { t } = useTranslation();
    const items = t('home.industries.items', { returnObjects: true });
    return (
        <section className={"wpo-industries-section section-padding" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="wpo-section-title">
                    <h2>{t('home.industries.title')}</h2>
                    <h3>{t('home.industries.subtitle')}</h3>
                </div>
                <div className="industries-grid">
                    {items.map((title, index) => {
                        const Icon = icons[index];
                        return (
                            <div className="industries-item" key={index}>
                                <div className="icon">
                                    <Icon />
                                </div>
                                <span>{title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
