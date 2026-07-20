"use client";

import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const t = useTranslations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const [validator, setValidator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validator.showMessageFor(name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validator.allValid()) {
            validator.showMessages();
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Request failed');
            }

            toast.success("Thanks for reaching out! We'll get back to you shortly.");
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setValidator(new SimpleReactValidator());
        } catch {
            toast.error('Something went wrong sending your message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="input-item">
                <div className="fild-wrap">
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
                    <label><i className="flaticon-user"></i></label>
                </div>
                {validator.message('name', formData.name, 'required|alpha_space')}
            </div>
            <div className="input-item">
                <div className="fild-wrap">
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
                    <label><i className="flaticon-email"></i></label>
                </div>
                {validator.message('email', formData.email, 'required|email')}
            </div>
            <div className="input-item">
                <div className="fild-wrap">
                    <textarea
                        id="message"
                        name="message"
                        className="fild textarea"
                        placeholder={t('contact.form.message')}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <label><i className="flaticon-edit"></i></label>
                </div>
                <small className="field-hint">Briefly describe your logistics needs.</small>
                {validator.message('message', formData.message, 'required')}
            </div>
            <div className="input-item submitbtn">
                <input className="fild" type="submit" value={submitting ? 'Sending...' : t('contact.form.getInTouch')} disabled={submitting} />
                <label><i className="flaticon-send"></i></label>
            </div>
        </form>
    );
};

export default ContactForm;
