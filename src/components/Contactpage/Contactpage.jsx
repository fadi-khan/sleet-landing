import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import Img01 from '../../images/contact-left-img.jpg'



const Contactpage = () => {

    return (
        <div>

            <section className="wpo-contact-page section-padding">
                <div className="container">
                    <div className="office-info">
                        <div className="row">
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-location-1"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>address line</h2>
                                        <p>Bowery St, New York, 37 USA
                                            <br /> NY 10013,USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item active">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-phone-call"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Phone Number</h2>
                                        <p>+1255 - 568 - 6523 4374-221 <br />
                                            +1255 - 568 - 6523</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-md-6 col-12">
                                <div className="office-info-item">
                                    <div className="office-info-icon">
                                        <div className="icon">
                                            <i className="fi flaticon-email"></i>
                                        </div>
                                    </div>
                                    <div className="office-info-text">
                                        <h2>Address</h2>
                                        <p>contact@logistika.com <br /> info@logistika.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="contact-left">
                                    <h2>Get in touch</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                                        faucibus odio feugiat arc dolor.</p>
                                    <img className="image" src={Img01} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="contact-right">
                                    <div className="title">
                                        <h2>Fill Up The Form</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </div >
    )


}

export default Contactpage;
