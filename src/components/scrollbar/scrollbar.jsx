"use client";

import React from 'react';

const scrollToTop = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
}

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><a href='#' onClick={scrollToTop}><i className="ti-arrow-up"></i></a></li>
                </ul>
            </div>
        </div>

    )
}

export default Scrollbar;
