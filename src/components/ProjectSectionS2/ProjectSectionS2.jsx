import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../api/projects';
import SectionTitle from '../SectionTitle/SectionTitle';


const ProjectSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow = true } = props
    return (

        <section className={"" + props.hclass}>
            <div className="container">
                {SectionTitleShow && (
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <SectionTitle subtitle={'Trusted transport service'} title={'Transport & Logistics Projects We are the best'} />
                        </div>
                    </div>
                )}

            </div>
            <div className="project-wrap">
                <div className="row">
                    {Projects.slice(4, 7).map((project, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="project-card-s2">
                                <div className="image">
                                    <img src={project.pimg} alt="" />
                                </div>
                                <div className="content">
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        <p>{project.subtitle}</p>
                                    </div>
                                    <Link onClick={ClickHandler} to={`/project-single/${project.slug}`} className="icon">
                                        <i className="flaticon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    );
};

export default ProjectSectionS2;





