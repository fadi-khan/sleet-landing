"use client";

import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';

const MyForm = () => {
    const t = useTranslations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const [validator, setValidator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        validator.showMessageFor(e.target.id);
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
                phone: '',
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
        <form id="myForm" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <small className="field-hint">Enter your full name.</small>
                    <input
                        id="name"
                        className="fild"
                        type="text"
                        placeholder={t('contact.form.name')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('name', formData.name, 'required|alpha_space')}
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <small className="field-hint">We&apos;ll reply to this email address.</small>
                    <input
                        id="email"
                        className="fild"
                        type="email"
                        placeholder={t('contact.form.email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('email', formData.email, 'required|email')}
                </div>
                <div className="col-12">
                    <small className="field-hint">Include country code, e.g. +966 5X XXX XXXX.</small>
                    <input
                        id="phone"
                        className="fild"
                        type="text"
                        placeholder={t('contact.form.phone')}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('phone', formData.phone, 'required|phone')}
                </div>
                <div className="col-12">
                    <small className="field-hint">Tell us how we can help.</small>
                    <textarea
                        id="message"
                        className="fild fild-textarea"
                        placeholder={t('contact.form.message')}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('message', formData.message, 'required')}
                </div>
                <div className="col-12">
                    <button type="submit" className="theme-btn" disabled={submitting}>{submitting ? 'Sending...' : t('common.sendUsMessages')} <i className="ti-angle-right"></i></button>
                </div>
            </div>
        </form>
    );
};

export default MyForm;
