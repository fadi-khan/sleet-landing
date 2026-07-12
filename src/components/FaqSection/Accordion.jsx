import React, { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'What is Sleet Automation Logistics?',
            content: 'Sleet Automation Logistics is a logistics technology company that provides intelligent transportation solutions through four integrated services: Sleet Logistics, Sleet SaaS, Sleet TNC, and Sleet AI. Our platform helps businesses manage fleets, automate operations, and make data-driven decisions from a single dashboard.'
        },
        {
            title: 'What is Sleet SaaS?',
            content: 'Sleet SaaS is a cloud-based logistics management platform designed for logistics companies, transport providers, and enterprises. It enables businesses to manage fleets, drivers, customers, deliveries, and operations without developing software from scratch.'
        },
        {
            title: 'Who can use Sleet SaaS?',
            content: 'Sleet SaaS is ideal for Logistics Companies, Fleet Owners, Freight Forwarders, Manufacturing Companies, Retail & E-commerce Businesses, Construction Companies, Oil & Gas Companies, and Distribution & Supply Chain Businesses.'
        },
        {
            title: 'What is Sleet Logistics?',
            content: 'Sleet Logistics is our end-to-end fleet management solution that combines Sleet\'s own fleet of trucks with a powerful management dashboard. Businesses can monitor vehicles, drivers, deliveries, fuel usage, maintenance, and overall fleet performance in real time.'
        },
        {
            title: 'What is Sleet TNC?',
            content: 'Sleet TNC is a digital truck-booking marketplace that works similarly to ride-hailing platforms, but specifically for commercial transportation. Businesses can book trucks on demand, while fleet owners receive delivery requests through the platform.'
        },
        {
            title: 'How does Sleet AI work?',
            content: 'Sleet AI is your intelligent logistics assistant built directly into the Sleet dashboard. Simply type your request in natural language, and Sleet AI analyzes your operational data to generate reports, summaries, insights, and recommendations within seconds.'
        },
        {
            title: 'What types of reports can Sleet AI generate?',
            content: 'Sleet AI can generate reports for Fleet Performance, Driver Performance, Fuel Consumption, Delivery Status, Trip History, Vehicle Utilization, Operational KPIs, Financial Summaries, and Custom Business Reports.'
        },
        {
            title: 'Which file formats does Sleet AI support?',
            content: 'Sleet AI can export reports in multiple formats, including PDF, Microsoft Word (.docx), Microsoft Excel (.xlsx), CSV, Charts & Graphs, and presentation-ready summaries.'
        },
        {
            title: 'Can Sleet integrate with my existing systems?',
            content: 'Yes. Sleet provides secure APIs that allow integration with ERP systems, accounting software, GPS tracking devices, telematics hardware, IoT sensors, and other third-party business applications.'
        },
        {
            title: 'Is my business data secure?',
            content: 'Absolutely. We prioritize enterprise-grade security through encrypted data transmission, secure cloud infrastructure, role-based access control, regular backups, and industry best practices to keep your data protected.'
        },
        {
            title: 'Can I monitor my fleet in real time?',
            content: 'Yes. Sleet provides live vehicle tracking, trip monitoring, driver activity, route visibility, fuel analytics, and operational insights through a centralized dashboard accessible from anywhere.'
        },
        {
            title: 'Is Sleet suitable for small businesses?',
            content: 'Yes. Whether you manage a handful of vehicles or a large enterprise fleet, Sleet scales with your business and provides the tools needed to optimize logistics operations efficiently.'
        },
        {
            title: 'Can I customize the platform for my business?',
            content: 'Yes. Sleet offers customizable dashboards, reports, workflows, user roles, and integrations to match your operational requirements.'
        },
        {
            title: 'Does Sleet offer mobile applications?',
            content: 'Yes. Sleet includes mobile applications for drivers, fleet managers, and administrators, enabling seamless communication, trip updates, delivery tracking, and operational management on the go.'
        },
        {
            title: 'What industries does Sleet serve?',
            content: 'Sleet supports a wide range of industries, including Logistics & Transportation, Freight & Distribution, Manufacturing, Retail & E-commerce, Construction, Oil & Gas, Cold Chain Logistics, Government Fleets, and Enterprise Fleet Operations.'
        },
        {
            title: 'Can Sleet reduce operational costs?',
            content: 'Yes. By automating workflows, optimizing routes, improving fleet utilization, reducing fuel consumption, and providing AI-powered insights, Sleet helps businesses lower operational costs and improve overall efficiency.'
        },
        {
            title: 'How do I get started with Sleet?',
            content: 'Getting started is simple. Contact our team to schedule a personalized demo, discuss your business requirements, and choose the Sleet solution that best fits your operations. Our onboarding specialists will help you every step of the way.'
        },
        {
            title: 'Why choose Sleet over other logistics platforms?',
            content: 'Sleet brings everything together in one intelligent ecosystem. Instead of juggling multiple systems, you get fleet management, cloud-based logistics software, AI-powered reporting, and an on-demand truck marketplace, all connected through a single platform. This means less complexity, greater visibility, faster decision-making, and a smarter way to manage logistics.'
        }
    ];

    return (
        <div className="accordion">
            {accordionData.map((item, index) => (
                <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                    <button className="accordion-header" onClick={() => handleToggle(index)}>
                        {item.title}
                    </button>
                    <div className="accordion-content">
                        {activeIndex === index && <p>{item.content}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
