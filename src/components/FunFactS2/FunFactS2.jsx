import React from 'react';
import CountUp from 'react-countup';
import Shape1 from '../../images/left-shape-fun.svg'
import Shape2 from '../../images/right-shape-fun.svg'
import { IoIosPeople } from "react-icons/io";
import { FaSmile } from "react-icons/fa";


const FunFactS2 = (props) => {
    return (
        <section className={"" +props.hclass}>
            <h3 className="d-none"> section title</h3>
            <div className="container">
                <div className="wraper">
                    <div className="row g-0">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <IoIosPeople size={60} />

                                <h2><CountUp end={5000} enableScrollSpy />+</h2>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <FaSmile size={42} className='mb-3' />
                                <h2><CountUp end={100} enableScrollSpy />%</h2>
                                <p>Customer Satisfaction</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-globe"></i>
                                <h2><CountUp end={10} enableScrollSpy />+</h2>
                                <p>Cities Covered</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="item">
                                <i className="flaticon-order"></i>
                                <h2><CountUp end={30} enableScrollSpy />+</h2>
                                <p>Total Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-shape">
                <img src={Shape1} alt="" />
            </div>
            <div className="right-shape">
                <img src={Shape2} alt="" />
            </div>
        </section>
    );
};

export default FunFactS2;