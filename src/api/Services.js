
import { FaTruck, FaCloud, FaTaxi, FaRobot } from 'react-icons/fa'

import Simg1 from '../images/homepage/service1.png'
import Simg2 from '../images/homepage/service2.jpg'
import Simg3 from '../images/homepage/service3.png'
import Simg4 from '../images/homepage/service4.png'

const Services = [
    {
        id: 1,
        image: Simg1,
        simag: Simg1,
        Icon: FaTruck,
        subtitle: 'Our Fleet Management Solution For Your Business ',
        title: 'Sleet Logistics',
        description: 'Operate your fleet with complete visibility using Sleet\'s intelligent logistics platform. Our fleet management system combines advanced tracking technology with a powerful dashboard to help businesses monitor vehicles, drivers, trips, fuel consumption, maintenance, and operational performance in real time.',
        slug: 'sleet-logistics',
        features: [
            'Live GPS Tracking',
            'Trip Management',
            'Driver Management',
            'Fleet Analytics',
            'Fuel Monitoring',
            'Vehicle Health Monitoring',
            'Maintenance Scheduling',
            'Route Optimization',
            'Real-Time Dashboard',
            'Performance Reports'
        ]
    },
    {
        id: 2,
        image: Simg2,
        simag: Simg2,
        Icon: FaCloud,
        subtitle: 'Your Fleet. Your Brand. Our Technology.',
        title: 'Sleet SaaS',
        description: 'Sleet SaaS allows logistics companies to run their entire operations using our cloud-based platform. Instead of building expensive software from scratch, businesses can subscribe to Sleet and instantly access enterprise-grade logistics technology.',
        slug: 'sleet-saas',
        features: [
            'Cloud Dashboard',
            'Mobile Application',
            'Order Management',
            'Fleet Management',
            'Driver Portal',
            'Customer Portal',
            'Reporting & Analytics',
            'API Integration',
            'Role-Based Access Control',
            'Secure Cloud Infrastructure'
        ],
        note: 'Perfect for logistics companies, freight operators, transport businesses, and enterprise fleets.'
    },
    {
        id: 3,
        image: Simg3,
        simag: Simg3,
        Icon: FaTaxi,
        subtitle: 'The Uber for Trucks',
        title: 'Sleet TNC',
        isCommingSoon: true,
        description: 'Sleet TNC connects businesses with available trucks through a fast and intelligent digital marketplace. Customers can request transportation in minutes while fleet owners receive new delivery opportunities without unnecessary paperwork or long phone calls.',
        slug: 'sleet-tnc',
        features: [
            'Instant Truck Booking',
            'Live Driver Tracking',
            'Smart Matching',
            'Digital Payments',
            'Delivery Status Updates',
            'Route Optimization',
            'Ratings & Reviews',
            'Fleet Partner Network'
        ],
        note: 'Whether you need one truck or hundreds, Sleet TNC helps businesses find reliable transportation quickly.'
    },
    {
        id: 4,
        image: Simg4,
        simag: Simg4,
        Icon: FaRobot,
        subtitle: 'Your Intelligent Logistics Assistant',
        title: 'Sleet AI',
        isCommingSoon: true,
        description: 'Sleet AI transforms operational data into meaningful insights with the power of artificial intelligence. Simply describe what you need in plain language, and Sleet AI will analyze your logistics data, generate reports, summarize operations, and provide actionable recommendations.',
        slug: 'sleet-ai'
    }
];
export default Services;
