import React from 'react'
import Slider1 from '../../images/slider/sleet-hero-bg.jpg'

const PageTitle = (props) => {
    return (
        <section
            className="wpo-breadcumb-area"
            style={{ backgroundImage: `url(${Slider1}) cover`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <h3>{props.pagesub}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;




