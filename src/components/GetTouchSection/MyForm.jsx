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
                    <small id="name-hint" className="field-hint">{t('contact.form.nameHint')}</small>
                    <input
                        id="name"
                        className="fild"
                        type="text"
                        autoComplete="name"
                        aria-label={t('contact.form.name')}
                        aria-describedby="name-hint"
                        placeholder={t('contact.form.name')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('name', formData.name, 'required|alpha_space')}
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <small id="email-hint" className="field-hint">{t('contact.form.emailHint')}</small>
                    <input
                        id="email"
                        className="fild"
                        type="email"
                        autoComplete="email"
                        aria-label={t('contact.form.email')}
                        aria-describedby="email-hint"
                        placeholder={t('contact.form.email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('email', formData.email, 'required|email')}
                </div>
                <div className="col-12">
                    <small id="phone-hint" className="field-hint">{t('contact.form.phoneHint')}</small>
                    <input
                        id="phone"
                        className="fild"
                        type="tel"
                        autoComplete="tel"
                        aria-label={t('contact.form.phone')}
                        aria-describedby="phone-hint"
                        placeholder={t('contact.form.phone')}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('phone', formData.phone, 'required|phone')}
                </div>
                <div className="col-12">
                    <small id="message-hint" className="field-hint">{t('contact.form.messageHint')}</small>
                    <textarea
                        id="message"
                        className="fild fild-textarea"
                        aria-label={t('contact.form.message')}
                        aria-describedby="message-hint"
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
