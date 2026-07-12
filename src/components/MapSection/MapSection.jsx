import React from 'react';

const MapSection = () => {
    return (
        <section className="wpo-map-section">
            <h2 className="hidden">Contact map</h2>
            <div className="wpo-map">
                <iframe
                    src="https://www.google.com/maps?q=Al%20Khaleej%20Road%2C%20Al%20Muhammadiyah%2C%20Dammam%2C%20Saudi%20Arabia&z=15&output=embed"
                    ></iframe>
            </div>
        </section>
    );
};

export default MapSection;