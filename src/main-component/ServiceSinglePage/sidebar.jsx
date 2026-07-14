import React from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Services from '../../api/Services';


const ServiceSidebar = (props) => {
    const { t } = useTranslation();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="service-sidebar">
            <div className="service-catagory">
                <ul>
                    {Services.map((serves, index) => (
                        <li key={index}>
                            <Link to={`/service-single/${serves.slug}`}  onClick={ClickHandler}>
                                <span>{t(`servicesData.${serves.key}.title`)}{serves.isCommingSoon && <span className="soon-tag">{t('serviceSingle.soon')}</span>}</span>
                                <i className="flaticon-right-arrow-1"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="service-info">
                <div className="icon">
                    <i className="flaticon-phone-call"></i>
                </div>
                <h2>{t('serviceSingle.sidebarCta.title')}</h2>
                <span>{t('serviceSingle.sidebarCta.callAnytime')}</span>
                <div className="num">
                    <span>+966 53 775 0600</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceSidebar;

