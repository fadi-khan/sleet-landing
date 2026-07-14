
import { FaTruck, FaCloud, FaTaxi, FaRobot } from 'react-icons/fa'

import Simg1 from '../images/homepage/service1.png'
import Simg2 from '../images/homepage/service2.jpg'
import Simg3 from '../images/homepage/service3.png'
import Simg4 from '../images/homepage/service4.png'

import sassBanner from '../images/homepage/sass-banner.jpg'

const Services = [
    {
        id: 1,
        key: 'sleetLogistics',
        image: Simg1,
        simag: Simg1,
        banner: Simg1,
        Icon: FaTruck,
        slug: 'sleet-logistics'
    },
    {
        id: 2,
        key: 'sleetSaas',
        image: Simg2,
        simag: Simg2,
        banner: Simg2,
        Icon: FaCloud,
        slug: 'sleet-saas'
    },
    {
        id: 3,
        key: 'sleetTnc',
        image: Simg3,
        simag: Simg3,
        banner: Simg3,
        Icon: FaTaxi,
        isCommingSoon: true,
        slug: 'sleet-tnc'
    },
    {
        id: 4,
        key: 'sleetAi',
        image: Simg4,
        simag: Simg4,
        banner: Simg4,
        Icon: FaRobot,
        isCommingSoon: true,
        slug: 'sleet-ai'
    }
];
export default Services;
