import React from 'react'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'



const Error = (props) => {
    const { t } = useTranslation();
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error-message">
                                <h3>{t('errorPage.code')}</h3>
                                <h4>{t('errorPage.message')}</h4>
                                <Link onClick={ClickHandler} to="/" className="theme-btn">{t('common.backToHome')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;