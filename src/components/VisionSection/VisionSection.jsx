"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

const VisionSection = (props) => {
    const t = useTranslations();
    return (
        <section className={"wpo-vision-section" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="vision-wrap">
                    <h2 className="s-subtitle">{t('home.vision.subtitle')}</h2>
                    <p className="vision-text">{t('home.vision.title')}</p>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
