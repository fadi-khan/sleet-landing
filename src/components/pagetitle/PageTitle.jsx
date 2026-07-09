import React from 'react'

const PageTitle = (props) => {
    return (
        <section className="wpo-breadcumb-area">
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




