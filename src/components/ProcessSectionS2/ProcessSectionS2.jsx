import React from 'react';
import Shape from '../../images/process-arrow-shape.svg'

const ProcessSectionS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="wrape">
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-order"></i>
                            <span>01</span>
                        </div>
                        <h2>Enter Delivery Details</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-worker"></i>
                            <span>02</span>
                        </div>
                        <h2>Assign Driver & Vehicle</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-tracking"></i>
                            <span>03</span>
                        </div>
                        <h2>Track Delivery in Real-Time</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-check"></i>
                            <span>04</span>
                        </div>
                        <h2>Delivery Completed</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessSectionS2;