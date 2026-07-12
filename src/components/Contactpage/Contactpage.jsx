import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import Img01 from '../../images/homepage/get-in-touch.jpeg'



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
                                        <p>Street 1b, Al Khaleej road, Al Muhammadiyah, Dammam</p>
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
                                        <p>+966 53 775 0600</p>
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
                                        <p><a href="mailto:mohammad@sleet.sa" target="_blank" rel="noopener noreferrer">mohammad@sleet.sa</a></p>
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
                                    <p>Have questions about our logistics services? Need a customized shipping solution? Our team is here to help you optimize your supply chain and streamline your operations. Reach out to us today and let's discuss how we can support your business needs.</p>
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
