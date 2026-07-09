import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        trackingId: '',
        message: '',
    });

    const [validator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        validator.showMessageFor(e.target.id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                trackingId: '',
                message: '',
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    return (
        <form id="myForm" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <input
                        id="name"
                        className="fild"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('name', formData.name, 'required|alpha_space')}
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <input
                        id="email"
                        className="fild"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('email', formData.email, 'required|email')}
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <input
                        id="phone"
                        className="fild"
                        type="text"
                        placeholder="Your Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('phone', formData.phone, 'required|phone')}
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <input
                        id="trackingId"
                        className="fild"
                        type="text"
                        placeholder="Enter your tracking id"
                        value={formData.trackingId}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('trackingId', formData.trackingId, 'required')}
                </div>
                <div className="col-12">
                    <textarea
                        id="message"
                        className="fild fild-textarea"
                        placeholder="Write Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('message', formData.message, 'required')}
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn">Send Us Messages <i className="ti-angle-right"></i></button>
                </div>
            </div>
        </form>
    );
};

export default MyForm;
