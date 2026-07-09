import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamData from '../../api/TeamData';
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

const TeamPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={'Team'} />
            <section className="wpo-team-section-s3 section-padding">
                <div className="container">
                    <div className="row">
                        {TeamData.slice(0, 6).map((team, index) => (
                            <div className="col-lg-4 col-md-6 col-12" key={index}>
                                <div className="team-card" >
                                    <div className="image">
                                        <img src={team.Imga} alt="" />
                                        <div className="icon">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="#"><i className="flaticon-vimeo"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="#"><i className="flaticon-linkedin-big-logo"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="#"><i className="flaticon-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="text">
                                            <h2>{team.title}</h2>
                                            <span>{team.subtitle}</span>
                                        </div>
                                        <div className="hover-icon"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="shape">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none">
                        <rect x="29" width="30" height="30" fill="#04cfe6ad" />
                        <rect y="30" width="29" height="28" fill="white" />
                    </svg>
                </div>
            </section>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
