import React from 'react';
import { useTranslation } from 'react-i18next';
import MyForm from './MyForm';

const GetTouchSection = (props) => {
    const { t } = useTranslation();

    return (
        <section className="wpo-get-touch-section section-padding">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7 col-12">
                        <div className="wpo-section-title">
                            <h2>{t('home.getTouch.subtitle')}</h2>
                            <h3>{t('home.getTouch.title')}</h3>
                        </div>
                        <MyForm />
                    </div>
                </div>
            </div>
            <div className="shape">
                <svg width="100%" height="100%" viewBox="0 0 579 909" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M358.873 909L277 382L87.7578 760V909H358.873Z"
                        fill="#1C7991" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M0.703125 909L465.828 0L304.102 569.065L207.458 909H0.703125Z" fill="#04cfe6ad" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M579.001 0L304.154 571.371L466.229 0H579.001Z"
                        fill="#124855" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M369.718 0L280.523 361.342L465.827 0H369.718Z"
                        fill="#1C7990" />
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M364.445 446.031L443.443 909H358.413L304.154 571.128L364.445 446.031Z" fill="#1C7991" />
                </svg>
            </div>
        </section>
    );
};

export default GetTouchSection;