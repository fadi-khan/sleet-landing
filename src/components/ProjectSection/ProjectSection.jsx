import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../api/projects';
import SectionTitle from '../SectionTitle/SectionTitle';

// image
import Shape from '../../images/project/side-img.png'

const ProjectSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { SectionTitleShow = true, projectBtn = true } = props


    return (
        <section className="wpo-project-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    {SectionTitleShow && (
                        <div className="col-lg-8 col-12">
                            <SectionTitle subtitle={'Trusted transport service'} title={'Transport & Logistics proejcts that we providde'} />
                        </div>
                    )}
                    {projectBtn && (
                        <div className="col-lg-4 col-12">
                            <div className="project-all">
                                <Link onClick={ClickHandler} to="/project" className="theme-btn">All projects</Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="project-slider">
                    <div className="row">
                        {Projects.slice(0, 4).map((project, item) => (
                            <div className="col-lg-3 col-md-6 col-12" key={item}>
                                <div className="project-card">
                                    <span>{project.id}</span>
                                    <img src={project.pimg} alt="" />
                                    <div className="content">
                                        <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        <h4>{project.subtitle}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="side-img">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default ProjectSection;