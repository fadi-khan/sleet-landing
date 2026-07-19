"use client";

import React, { useEffect, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import VideoModal from '../ModalVideo/VideoModal';


import Timg from '../../images/video-bg-1.jpg'
import Timg1 from '../../images/video-bg-2.jpg'

const RequestQuateSection = (props) => {
    const [activeTab, setActiveTab] = useState('Tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        openTab('Tab1');
    }, []);


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        freightType: '',
        cityOfDeparture: '',
        deliveryCity: '',
        cityOfDeparture2: '',
        weight: '',
        additionalDetails: '',
        volume: '',
        expressDelivery: false,
        fragile: false,
        insurance1: false,
        insurance2: false,
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
    }));

    const handleChange = e => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
        validator.showMessageFor(id);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validator.allValid()) {
            
            setFormData({
                fullName: '',
                email: '',
                subject: '',
                freightType: '',
                cityOfDeparture: '',
                deliveryCity: '',
                cityOfDeparture2: '',
                weight: '',
                additionalDetails: '',
                volume: '',
                expressDelivery: false,
                fragile: false,
                insurance1: false,
                insurance2: false,
            });
            validator.hideMessages();
        } else {
            validator.showMessages();
            setFormData({ ...formData });
        }
    };
    
    return (
        <section className="wpo-request-quate-section">
            <div className="container">
                <div className="title">
                    <h1>SLEET</h1>
                </div>
                <div className="tab-wrap">
                    <div className="tab">
                        <button className={`tablinks ${activeTab === 'Tab1' ? 'active' : ''}`} onClick={() => openTab('Tab1')}>Request a quate</button>
                        <button className={`tablinks ${activeTab === 'Tab2' ? 'active' : ''}`} onClick={() => openTab('Tab2')}>Track & Trace</button>
                    </div>
                    <div id="Tab1" className="tabcontent" style={{ display: activeTab === 'Tab1' ? 'block' : 'none' }}>
                        <div className="tab-wraper">
                            <div className="form-wrap">
                                <form id="shippingForm" onSubmit={handleSubmit}>
                                    <div className="row align-items-end">
                                        <div className="col-12">
                                            <div className="row align-items-end">
                                                <div className="col-lg-5 col-12">
                                                    <div className="form-fild">
                                                        <label htmlFor="fullName">Personal information</label>
                                                        <input
                                                            id="fullName"
                                                            className="fild"
                                                            type="text"
                                                            placeholder="Full name"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            onBlur={() => validator.showMessageFor('fullName')}
                                                            required
                                                        />
                                                        {validator.message('fullName', formData.fullName, 'required|alpha_space')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="email"
                                                                    className="fild"
                                                                    type="email"
                                                                    placeholder="Email address"
                                                                    value={formData.email}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('email')}
                                                                    required
                                                                />
                                                                {validator.message('email', formData.email, 'required|email')}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="subject"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="Subject"
                                                                    value={formData.subject}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('subject')}
                                                                    required
                                                                />
                                                                {validator.message('subject', formData.subject, 'required')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row align-items-end">
                                                <div className="col-lg-5 col-12">
                                                    <div className="form-fild">
                                                        <label htmlFor="freightType">Shipment Data</label>
                                                        <select
                                                            id="freightType"
                                                            className="fild"
                                                            value={formData.freightType}
                                                            onChange={handleChange}
                                                            onBlur={() => validator.showMessageFor('freightType')}
                                                            required
                                                        >
                                                            <option value="" disabled>
                                                                Freight Type
                                                            </option>
                                                            <option value="type1">Freight Type 1</option>
                                                            <option value="type2">Freight Type 2</option>
                                                        </select>
                                                        {validator.message('freightType', formData.freightType, 'required')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="cityOfDeparture"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="City of departure"
                                                                    value={formData.cityOfDeparture}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('cityOfDeparture')}
                                                                    required
                                                                />
                                                                {validator.message('cityOfDeparture', formData.cityOfDeparture, 'required')}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="deliveryCity"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="Delivery City"
                                                                    value={formData.deliveryCity}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('deliveryCity')}
                                                                    required
                                                                />
                                                                {validator.message('deliveryCity', formData.deliveryCity, 'required')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row align-items-end">
                                                <div className="col-lg-4 col-12">
                                                    <div className="form-fild">
                                                        <select
                                                            id="cityOfDeparture2"
                                                            className="fild"
                                                            value={formData.cityOfDeparture2}
                                                            onChange={handleChange}
                                                            onBlur={() => validator.showMessageFor('cityOfDeparture2')}
                                                            required
                                                        >
                                                            <option value="" disabled>
                                                                City of departure
                                                            </option>
                                                            <option value="city1">City 1</option>
                                                            <option value="city2">City 2</option>
                                                        </select>
                                                        {validator.message('cityOfDeparture2', formData.cityOfDeparture2, 'required')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="weight"
                                                                    className="fild"
                                                                    type="number"
                                                                    placeholder="Weight, kg"
                                                                    value={formData.weight}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('weight')}
                                                                    required
                                                                    min="0"
                                                                />
                                                                {validator.message('weight', formData.weight, 'required|numeric|min:0,num')}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="additionalDetails"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="Additional details"
                                                                    value={formData.additionalDetails}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="volume"
                                                                    className="fild"
                                                                    type="number"
                                                                    placeholder="Volume, m3"
                                                                    value={formData.volume}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('volume')}
                                                                    required
                                                                    min="0"
                                                                />
                                                                {validator.message('volume', formData.volume, 'required|numeric|min:0,num')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-12">
                                            <div className="row chack">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="expressDelivery"
                                                            checked={formData.expressDelivery}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="expressDelivery">
                                                            Express delivery
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="fragile"
                                                            checked={formData.fragile}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="fragile">
                                                            Fragile
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="insurance1"
                                                            checked={formData.insurance1}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="insurance1">
                                                            Insurance
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="insurance2"
                                                            checked={formData.insurance2}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="insurance2">
                                                            Insurance
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-fild mb-0">
                                                <button type="submit" className="theme-btn">
                                                    Request For a Quote
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="video-content">
                                <img src={Timg.src} alt="" />
                                <div className="video-holder">
                                    <VideoModal/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Tab2" className="tabcontent" style={{ display: activeTab === 'Tab2' ? 'block' : 'none' }}>
                        <div className="tab-wraper">
                            <div className="form-wrap">
                                <form id="shippingForm" onSubmit={handleSubmit}>
                                    <div className="row align-items-end">
                                        <div className="col-12">
                                            <div className="row align-items-end">
                                                <div className="col-lg-5 col-12">
                                                    <div className="form-fild">
                                                        <label htmlFor="fullName">Personal information</label>
                                                        <input
                                                            id="fullName"
                                                            className="fild"
                                                            type="text"
                                                            placeholder="Full name"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            onBlur={() => validator.showMessageFor('fullName')}
                                                            required
                                                        />
                                                        {validator.message('fullName', formData.fullName, 'required|alpha_space')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="email"
                                                                    className="fild"
                                                                    type="email"
                                                                    placeholder="Email address"
                                                                    value={formData.email}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('email')}
                                                                    required
                                                                />
                                                                {validator.message('email', formData.email, 'required|email')}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="subject"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="Subject"
                                                                    value={formData.subject}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('subject')}
                                                                    required
                                                                />
                                                                {validator.message('subject', formData.subject, 'required')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row align-items-end">
                                                <div className="col-lg-5 col-12">
                                                    <div className="form-fild">
                                                        <label htmlFor="freightType">Shipment Data</label>
                                                        <select
                                                            id="freightType"
                                                            className="fild"
                                                            value={formData.freightType}
                                                            onChange={handleChange}
                                                            onBlur={() => validator.showMessageFor('freightType')}
                                                            required
                                                        >
                                                            <option value="" disabled>
                                                                Freight Type
                                                            </option>
                                                            <option value="type1">Freight Type 1</option>
                                                            <option value="type2">Freight Type 2</option>
                                                        </select>
                                                        {validator.message('freightType', formData.freightType, 'required')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="cityOfDeparture"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="City of departure"
                                                                    value={formData.cityOfDeparture}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('cityOfDeparture')}
                                                                    required
                                                                />
                                                                {validator.message('cityOfDeparture', formData.cityOfDeparture, 'required')}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="deliveryCity"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="Delivery City"
                                                                    value={formData.deliveryCity}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('deliveryCity')}
                                                                    required
                                                                />
                                                                {validator.message('deliveryCity', formData.deliveryCity, 'required')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row align-items-end">
                                                <div className="col-lg-4 col-12">
                                                    <div className="form-fild">
                                                        <select
                                                            id="cityOfDeparture2"
                                                            className="fild"
                                                            value={formData.cityOfDeparture2}
                                                            onChange={handleChange}
                                                            onBlur={() => validator.showMessageFor('cityOfDeparture2')}
                                                            required
                                                        >
                                                            <option value="" disabled>
                                                                City of departure
                                                            </option>
                                                            <option value="city1">City 1</option>
                                                            <option value="city2">City 2</option>
                                                        </select>
                                                        {validator.message('cityOfDeparture2', formData.cityOfDeparture2, 'required')}
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="weight"
                                                                    className="fild"
                                                                    type="number"
                                                                    placeholder="Weight, kg"
                                                                    value={formData.weight}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('weight')}
                                                                    required
                                                                    min="0"
                                                                />
                                                                {validator.message('weight', formData.weight, 'required|numeric|min:0,num')}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="additionalDetails"
                                                                    className="fild"
                                                                    type="text"
                                                                    placeholder="Additional details"
                                                                    value={formData.additionalDetails}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-12">
                                                            <div className="form-fild">
                                                                <input
                                                                    id="volume"
                                                                    className="fild"
                                                                    type="number"
                                                                    placeholder="Volume, m3"
                                                                    value={formData.volume}
                                                                    onChange={handleChange}
                                                                    onBlur={() => validator.showMessageFor('volume')}
                                                                    required
                                                                    min="0"
                                                                />
                                                                {validator.message('volume', formData.volume, 'required|numeric|min:0,num')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-12">
                                            <div className="row chack">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="expressDelivery"
                                                            checked={formData.expressDelivery}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="expressDelivery">
                                                            Express delivery
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="fragile"
                                                            checked={formData.fragile}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="fragile">
                                                            Fragile
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="insurance1"
                                                            checked={formData.insurance1}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="insurance1">
                                                            Insurance
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="form-fild s2">
                                                        <input
                                                            type="checkbox"
                                                            id="insurance2"
                                                            checked={formData.insurance2}
                                                            onChange={handleChange}
                                                        />
                                                        <label className="chack-leval" htmlFor="insurance2">
                                                            Insurance
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-fild mb-0">
                                                <button type="submit" className="theme-btn">
                                                    Request For a Quote
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="video-content">
                                <img src={Timg1.src} alt="" />
                                <div className="video-holder">
                                    <VideoModal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src="assets/images/shape-1212.png" alt="" />
            </div>
        </section>
    );
};

export default RequestQuateSection;


<div className="tab-wraper">
    <div className="form-wrap">
        <form id="shippingForm">
            <div className="row align-items-end">
                <div className="col-12">
                    <div className="row align-items-end">
                        <div className="col-lg-5 col-12">
                            <div className="form-fild">
                                <label for="fullName">Personal information</label>
                                <input id="fullName" className="fild" type="text"
                                    placeholder="Full name" required />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-fild">
                                        <input id="email" className="fild" type="email"
                                            placeholder="Email address" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-fild">
                                        <input id="subject" className="fild" type="text"
                                            placeholder="Subject" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row align-items-end">
                        <div className="col-lg-5 col-12">
                            <div className="form-fild">
                                <label for="freightType">Shipment Data</label>
                                <select id="freightType" className="fild" required>
                                    <option value="" disabled selected>Freight Type</option>
                                    <option value="type1">Freight Type 1</option>
                                    <option value="type2">Freight Type 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-fild">
                                        <input id="cityOfDeparture" className="fild" type="text"
                                            placeholder="City of departure" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-fild">
                                        <input id="deliveryCity" className="fild" type="text"
                                            placeholder="Delivery City" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row align-items-end">
                        <div className="col-lg-4 col-12">
                            <div className="form-fild">
                                <select id="cityOfDeparture2" className="fild" required>
                                    <option value="" disabled selected>City of departure
                                    </option>
                                    <option value="city1">City 1</option>
                                    <option value="city2">City 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="form-fild">
                                        <input id="weight" className="fild" type="number"
                                            placeholder="Weight, kg" required min="0" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="form-fild">
                                        <input id="additionalDetails" className="fild" type="text"
                                            placeholder="Additional details" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="form-fild">
                                        <input id="volume" className="fild" type="number"
                                            placeholder="Volume, m3" required min="0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-12">
                    <div className="row chack">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="form-fild s2">
                                <input type="checkbox" id="expressDelivery" />
                                <label className="chack-leval" for="expressDelivery">Express
                                    delivery</label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="form-fild s2">
                                <input type="checkbox" id="fragile" />
                                <label className="chack-leval" for="fragile">Fragile</label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="form-fild s2">
                                <input type="checkbox" id="insurance1" />
                                <label className="chack-leval" for="insurance1">Insurance</label>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="form-fild s2">
                                <input type="checkbox" id="insurance2" />
                                <label className="chack-leval" for="insurance2">Insurance</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-fild mb-0">
                        <button type="submit" className="theme-btn">Request For a Quote</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div className="video-content">
        <img src="assets/images/video-bg-1.jpg" alt="" />
        <div className="video-holder">
            <a href="https://www.youtube.com/embed/7Jv48RQ_2gk" className="video-btn"
                data-type="iframe"><i className="flaticon-play-button-arrowhead"></i></a>
        </div>
    </div>
</div>