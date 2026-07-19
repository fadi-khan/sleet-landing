"use client";

import React from 'react';
import { Link } from '../../i18n/navigation';
import Slider from "react-slick";
import SectionTitle from '../SectionTitle/SectionTitle';
import TeamData from '../../api/TeamData';

const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }

        ]
    };


    const { SectionTitleShow = true, TeamAllBtn = true } = props;
    return (
        <section className={"" + props.hclass}>
            {SectionTitleShow && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <SectionTitle subtitle={'Best Logistic consultant team for company'} title={'Trusted transport service'} />
                        </div>
                    </div>
                </div>
            )}
            <div className="container-fluid">
                <div className="team-slider">
                    <Slider {...settings}>
                        {TeamData.slice(0, 6).map((team, index) => (
                            <div className="team-card" key={index}>
                                <div className="image">
                                    <img src={team.Imga} alt="" />
                                    <div className="icon">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="#"><i className="flaticon-vimeo"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="#"><i className="flaticon-linkedin-big-logo"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="#"><i className="flaticon-twitter"></i></Link></li>
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
                        ))}
                    </Slider>
                </div>
                {TeamAllBtn && (
                    <div className="all-team-btn">
                        <Link onClick={ClickHandler} href="/team" className="theme-btn">All Member</Link>
                    </div>
                )}
            </div>
            <div className="shape">
                <svg width="59" height="58" viewBox="0 0 59 58" fill="none">
                    <rect x="29" width="30" height="30" fill="#04cfe6ad" />
                    <rect y="30" width="29" height="28" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default TeamSection;











