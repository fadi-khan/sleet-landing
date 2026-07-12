import React from 'react';

const VisionSection = (props) => {
    return (
        <section className={"wpo-vision-section" + (props.hclass ? ' ' + props.hclass : '')}>
            <div className="container">
                <div className="vision-wrap">
                    <span className="s-subtitle">Our Vision</span>
                    <h2>To become the world's leading intelligent logistics ecosystem by combining
                        transportation, artificial intelligence, cloud software, and automation into one
                        connected platform that empowers businesses to move goods more efficiently,
                        sustainably, and intelligently.</h2>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
