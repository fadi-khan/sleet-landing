import React from 'react';
import Image from 'next/image';

// Shows a product screenshot, or a labelled placeholder box until one is
// supplied (see the `screenshots` field in src/lib/api/landingPages.js).
const ScreenshotPlaceholder = ({ image, label, note }) => {
    if (image) {
        return (
            <div className="landing-screenshot">
                <Image src={image} alt={label} sizes="(max-width: 991px) 100vw, 600px" style={{ width: '100%', height: 'auto' }} />
            </div>
        );
    }

    return (
        <div className="landing-screenshot is-placeholder" role="img" aria-label={label}>
            <span className="note">{note}</span>
            <span className="label">{label}</span>
        </div>
    );
};

export default ScreenshotPlaceholder;
