"use client";

import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        type: '',
        incoter: '',
        fragile: false,
        express: false,
        insurance: false,
    });
    const [submitting, setSubmitting] = useState(false);

    const [validator, setValidator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
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
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error('Request failed');
            }

            toast.success("Thanks! We'll send your quote shortly.");
            setFormData({
                name: '',
                email: '',
                phone: '',
                city: '',
                type: '',
                incoter: '',
                fragile: false,
                express: false,
                insurance: false,
            });
            setValidator(new SimpleReactValidator());
        } catch {
            toast.error('Something went wrong requesting your quote. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form id="quoteForm" onSubmit={handleSubmit}>
            <div className="row">
                <div className="item col-lg-12">
                    <label>Personal information</label>
                    <small className="field-hint">Enter your full name.</small>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('name', formData.name, 'required|alpha_space')}
                </div>
                <div className="item col-lg-6 col-12">
                    <small className="field-hint">We&apos;ll send your quote to this address.</small>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('email', formData.email, 'required|email')}
                </div>
                <div className="item col-lg-6 col-12">
                    <small className="field-hint">Include country code, e.g. +966 5X XXX XXXX.</small>
                    <input
                        className="form-control"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {validator.message('phone', formData.phone, 'required|phone')}
                </div>
                <div className="item col-lg-12">
                    <label>Delivery information</label>
                    <small className="field-hint">Choose the destination city for delivery.</small>
                    <select
                        name="city"
                        id="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Delivery City</option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                    </select>
                    {validator.message('city', formData.city, 'required')}
                </div>
                <div className="item col-lg-6 col-12">
                    <label>Freight Type</label>
                    <small className="field-hint">Select the freight type for your shipment.</small>
                    <select
                        name="type"
                        id="type"
                        className="form-control"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Freight Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                    </select>
                    {validator.message('type', formData.type, 'required')}
                </div>
                <div className="item col-lg-6 col-12">
                    <label>Incoterms</label>
                    <small className="field-hint">Choose the applicable Incoterm for this shipment.</small>
                    <select
                        name="incoter"
                        id="incoter"
                        className="form-control"
                        value={formData.incoter}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Incoterms</option>
                        <option value="incoter1">Incoterm 1</option>
                        <option value="incoter2">Incoterm 2</option>
                    </select>
                    {validator.message('incoter', formData.incoter, 'required')}
                </div>
                <div className="item col-12">
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                id="fragile"
                                name="fragile"
                                checked={formData.fragile}
                                onChange={handleChange}
                            />
                            <label htmlFor="fragile">Fragile</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="express"
                                name="express"
                                checked={formData.express}
                                onChange={handleChange}
                            />
                            <label htmlFor="express">Express delivery</label>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                id="insurance"
                                name="insurance"
                                checked={formData.insurance}
                                onChange={handleChange}
                            />
                            <label htmlFor="insurance">Insurance</label>
                        </li>
                    </ul>
                </div>
                <div className="item col-12">
                    <input className="theme-btn" type="submit" value={submitting ? 'Sending...' : 'Get A Quote'} disabled={submitting} />
                </div>
            </div>
        </form>
    );
};

export default QuoteForm;
