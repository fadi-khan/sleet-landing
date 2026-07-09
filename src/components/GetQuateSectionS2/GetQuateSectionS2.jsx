import React from 'react';
import QuoteForm from '../QuoteForm/QuoteForm';

import Img1 from '../../images/avatar/1.jpg'
import Img2 from '../../images/avatar/2.jpg'
import Img3 from '../../images/avatar/3.jpg'
import Img4 from '../../images/avatar/4.jpg'

const GetQuateSectionS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-5 col-12">
                        <div className="quote-form">
                            <div className="title">
                                <h3>Request a quote form</h3>
                            </div>
                           <QuoteForm />
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="get-quate-content">
                            <div className="wpo-section-title">
                                <h2>Trusted transport service</h2>
                                <h3>Transportation service</h3>
                                <h4>" Every great dream begins with a dreamer. Always
                                    remember, you have within you the strength, the
                                    patience, and the passion to reach for the stars to
                                    change the world. " </h4>
                                <span>Harriet Tubman</span>
                                <div className="avatar">
                                    <ul className="image">
                                        <li><img src={Img1} alt="" /></li>
                                        <li><img src={Img2} alt="" /></li>
                                        <li><img src={Img3} alt="" /></li>
                                        <li><img src={Img4} alt="" /></li>
                                    </ul>
                                    <p>10m+ Trusted Global Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </section>
    );
};

export default GetQuateSectionS2;