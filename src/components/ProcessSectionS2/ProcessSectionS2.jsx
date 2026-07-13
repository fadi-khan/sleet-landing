import React from 'react';
import { useTranslation } from 'react-i18next';
import Shape from '../../images/process-arrow-shape.svg'

const ProcessSectionS2 = (props) => {
    const { t } = useTranslation();
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="wrape">
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-order"></i>
                            <span>01</span>
                        </div>
                        <h2>{t('home.process.step1')}</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-worker"></i>
                            <span>02</span>
                        </div>
                        <h2>{t('home.process.step2')}</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-tracking"></i>
                            <span>03</span>
                        </div>
                        <h2>{t('home.process.step3')}</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <i className="flaticon-check"></i>
                            <span>04</span>
                        </div>
                        <h2>{t('home.process.step4')}</h2>
                        <div className="shape">
                            <img src={Shape} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProcessSectionS2;