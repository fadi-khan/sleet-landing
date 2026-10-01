"use client";

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const scrollToTop = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
}

const Scrollbar = () => {
    const t = useTranslations();
    const [visible, setVisible] = useState(false);

    // only offered once there is somewhere to scroll back from
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className={`smothscroll ${visible ? 'show' : ''}`}>
                    <li><a href='#' onClick={scrollToTop} aria-label={t('common.backToTop')}><i className="ti-arrow-up"></i></a></li>
                </ul>
            </div>
        </div>

    )
}

export default Scrollbar;
