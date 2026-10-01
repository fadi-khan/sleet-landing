"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

const MapSection = () => {
    const t = useTranslations();
    return (
        <section className="wpo-map-section">
            <div className="wpo-map">
                <iframe
                    title={t('contact.mapTitle')}
                    loading="lazy"
                    src="https://www.google.com/maps?q=Al%20Khaleej%20Road%2C%20Al%20Muhammadiyah%2C%20Dammam%2C%20Saudi%20Arabia&z=15&output=embed"
                    ></iframe>
            </div>
        </section>
    );
};

export default MapSection;
