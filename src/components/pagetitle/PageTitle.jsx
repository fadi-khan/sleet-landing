"use client";

import React from 'react'
import Slider1 from '../../images/slider/sleet-hero-bg.jpg'

const PageTitle = (props) => {
    return (
        <section
            className="wpo-breadcumb-area"
            style={{ backgroundImage: `url(${Slider1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container">
                <div className="row text-center">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <p className="breadcumb-brand">{props.pageTitle}</p>
                            {/* long titles drop to a smaller size so they don't fill the banner */}
                            <h1 className={String(props.pagesub).length > 22 ? 'is-long' : undefined}>{props.pagesub}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;




