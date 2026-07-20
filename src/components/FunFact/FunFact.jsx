"use client";

import React from 'react';
import CountUp from 'react-countup';

const FunFact = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="titel-image">
                    <h1>Logistisc</h1>
                    <h3>Manufacturing software that goes beyondthe benchmark</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h2><CountUp end={100} enableScrollSpy />+</h2>
                            <h3>Cities we have connected</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h2><CountUp end={1} enableScrollSpy />.<CountUp end={2} enableScrollSpy />m</h2>
                            <h3>Deliver goods every week</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h2><CountUp end={10} enableScrollSpy />types</h2>
                            <h3>Delivery transit system</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h2><CountUp end={95} enableScrollSpy />%</h2>
                            <h3>Clients Positive review</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default FunFact;




