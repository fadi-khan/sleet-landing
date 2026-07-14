import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from "../../api/Services";

const ServiceSectionS2 = (props) => {
    const { t } = useTranslation();
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { SectionTitleShow = true } = props
    return (
        <div className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                        {SectionTitleShow && (
                            <SectionTitle subtitle={t('home.service.subtitle')} title={t('home.service.title')} />
                        )}
                    </div>
                </div>
                <div className="row">
                    {Services.map((service, item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item}>
                            <div className="service-card-s2">
                                {service.isCommingSoon && (
                                    <span className="coming-soon-badge">{t('serviceSingle.comingSoon')}</span>
                                )}
                                <div className="icon">
                                    <service.Icon />
                                </div>
                                <div className="content">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{t(`servicesData.${service.key}.title`)}</Link></h2>
                                    <p>{t(`servicesData.${service.key}.description`)}</p>
                                    <div className="services-btn">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{t('common.seeDetails')}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionS2;


