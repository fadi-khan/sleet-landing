
import { FaTruck, FaCloud, FaTaxi, FaRobot } from 'react-icons/fa'

import Simg1 from '../../images/homepage/service1.png'
import Simg2 from '../../images/homepage/service2.jpg'
import Simg3 from '../../images/homepage/service3.png'
import Simg4 from '../../images/homepage/service4.png'

import sassBanner from '../../images/homepage/sass-banner.jpg'

const Services = [
    {
        id: 1,
        key: 'sleetLogistics',
        image: Simg1.src,
        simag: Simg1.src,
        banner: Simg1.src,
        Icon: FaTruck,
        slug: 'sleet-logistics'
    },
    {
        id: 2,
        key: 'sleetSaas',
        image: Simg2.src,
        simag: Simg2.src,
        banner: Simg2.src,
        Icon: FaCloud,
        slug: 'sleet-saas'
    },
    {
        id: 3,
        key: 'sleetTnc',
        image: Simg3.src,
        simag: Simg3.src,
        banner: Simg3.src,
        Icon: FaTaxi,
        isCommingSoon: true,
        slug: 'sleet-tnc'
    },
    {
        id: 4,
        key: 'sleetAi',
        image: Simg4.src,
        simag: Simg4.src,
        banner: Simg4.src,
        Icon: FaRobot,
        isCommingSoon: true,
        slug: 'sleet-ai'
    }
];
export default Services;
