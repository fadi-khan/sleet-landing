"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

const VisionSection = (props) => {
    const t = useTranslations();
    return (
        <section className={"wpo-vision-section" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="vision-wrap">
                    <span className="s-subtitle">{t('home.vision.subtitle')}</span>
                    <h2>{t('home.vision.title')}</h2>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
