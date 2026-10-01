"use client";

import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
    return (
        // the small eyebrow is styled as an h2 but is not a heading; the h3 is
        // the section's real heading, so it is announced one level up
        <div className="wpo-section-title">
            <h2 role="presentation">{subtitle}</h2>
            <h3 aria-level={2}>{title}</h3>
        </div>
    );
};

export default SectionTitle;