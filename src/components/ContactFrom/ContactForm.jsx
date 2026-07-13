import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [validator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validator.showMessageFor(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    return (
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="input-item">
                <input
                    id="name"
                    name="name"
                    className="fild"
                    type="text"
                    placeholder={`${t('contact.form.name')}*`}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {validator.message('name', formData.name, 'required|alpha_space')}
                <label><i className="flaticon-user"></i></label>
            </div>
            <div className="input-item">
                <input
                    id="email"
                    name="email"
                    className="fild"
                    type="email"
                    placeholder={`${t('contact.form.email')}*`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {validator.message('email', formData.email, 'required|email')}
                <label><i className="flaticon-email"></i></label>
            </div>
            <div className="input-item">
                <textarea
                    id="message"
                    name="message"
                    className="fild textarea"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {validator.message('message', formData.message, 'required')}
                <label><i className="flaticon-edit"></i></label>
            </div>
            <div className="input-item submitbtn">
                <input className="fild" type="submit" value={t('contact.form.getInTouch')} />
                <label><i className="flaticon-send"></i></label>
            </div>
        </form>
    );
};

export default ContactForm;
