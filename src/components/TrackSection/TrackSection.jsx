"use client";

import React, { useState } from 'react';
import CountUp from 'react-countup';

const TrackSection = () => {
    const [trackingId, setTrackingId] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="wpo-track-section">
            <div className="container">
                <div className="cta-wrap">
                    <div className="tracking">
                        <h2>Track your shipment</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter your tracking id"
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value)}
                            />
                            <button type="submit" className="theme-btn">Track order</button>
                        </form>
                    </div>
                    <ul className="funfact">
                        <li>
                            <h2><CountUp end={853} enableScrollSpy />+</h2>
                            <p>Countries
                                Represented</p>
                            <div className="shape">
                                <svg viewBox="0 0 213 216" fill="none">
                                    <path d="M0 0H213V216H0V0Z" fill="white" fillOpacity="0.07" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <h2><CountUp end={32} enableScrollSpy />+</h2>
                            <p>Countries Covered</p>
                            <div className="shape">
                                <svg viewBox="0 0 213 216" fill="none">
                                    <path d="M0 0H213V216H0V0Z" fill="#281D1D" fillOpacity="0.07" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TrackSection;