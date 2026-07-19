"use client";

import React, { useEffect } from 'react';

const ProgressCard = ({ title, description, percentage }) => {
    useEffect(() => {
        const block = document.querySelectorAll('.block');
        block.forEach(item => {
            let numElement = item.querySelector('.num');
            let num = parseInt(numElement.innerText);
            let count = 0;
            let time = 2000 / num;
            let circle = item.querySelector('.circle');
            const interval = setInterval(() => {
                if (count === num) {
                    clearInterval(interval);
                } else {
                    count += 1;
                    numElement.innerText = count;
                }
            }, time);

            circle.style.strokeDashoffset = 503 - (503 * (num / 100));
        });
    }, []);

    return (
        <div className="progres-card">
            <div className="block">
                <div className="box"></div>
                <p className="number">
                    <span className="num">{percentage}</span>
                    <span className="sub">%</span>
                </p>
                <svg className="svg">
                    <defs>
                        <linearGradient id="gradientStyle">
                            <stop offset="100%" stopColor="#0B3742" />
                            <stop offset="100%" stopColor="#0B3742" />
                        </linearGradient>
                    </defs>
                    <circle className="circle" cx="65" cy="65" r="55" />
                </svg>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    );
};

const ProgressWrapper = () => {
    return (
        <div className="wrap">
            <ProgressCard
                title="Dedicated Speed"
                description="End to end fiber optic cable connectivity for stable"
                percentage={99}
            />
            <ProgressCard
                title="Guaranteed Uptime"
                description="End to end fiber optic cable connectivity for stable"
                percentage={80}
            />
        </div>
    );
};

export default ProgressWrapper;
