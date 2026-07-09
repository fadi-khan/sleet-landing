import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import Services from '../../api/Services';
import VideoModal from '../../components/ModalVideo/VideoModal';
import Accordion from '../../components/FaqSection/Accordion';
import ServiceSidebar from './sidebar'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'



import Gimg1 from '../../images/image-gallery/1.jpg'
import Gimg2 from '../../images/image-gallery/2.jpg'
import Gimg3 from '../../images/image-gallery/3.jpg'
import Gimg4 from '../../images/image-gallery/4.jpg'
import Gvideo from '../../images/service-single/video.jpg'

const ServiceSinglePage = (props) => {
  

    const { slug } = useParams()
    const serviceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={serviceDetails.title} />
            <section className="wpo-service-single-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 order-lg-2">
                            <div className="service-single-wrap">
                                <div className="title-image">
                                    <img src={serviceDetails.simag} alt="" />
                                </div>
                                <h2>{serviceDetails.title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?
                                    perspiciatis
                                    accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
                                    Repudiandae
                                    provident to
                                    consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut
                                    perspiciatis?
                                    Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
                                <h3>Sed ut perspiciatis unde omnis iste natus et</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?
                                    perspiciatis
                                    accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
                                    Repudiandae
                                    provident to
                                    consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut
                                    perspiciatis?
                                    Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
                                <div className="video-wrap">
                                    <div className="video-img">
                                        <img src={Gvideo} alt="" />
                                        <div className="video-holder">
                                            <VideoModal />
                                        </div>
                                    </div>
                                    <div className="video-content">
                                        <h2>Why Marketing Important ?</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisici
                                            sed do eiusmod tempor incididunt ut labore et </p>
                                        <ul>
                                            <li>Research beyond the business plan</li>
                                            <li>Marketing options and rates</li>
                                            <li>The ability to turnaround consulting</li>
                                        </ul>

                                    </div>
                                </div>
                                <p>There are many variations of passages of lorem ipsum is simply free text available in the
                                    market, but the
                                    majority time you put aside to be in our office. Lorem ipsum dolor sit amet,
                                    consectetLorem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliqua.</p>
                                <h3 className="quate">Business is the activity of making one's living or making money by produ
                                    The NDIS
                                    Cing or buying and selling products akes a lifetime</h3>

                                <div className="image-gallery">
                                    <h2>Eligibility checklist :</h2>
                                    <ul>
                                        <li><img src={Gimg1} alt="" /></li>
                                        <li><img src={Gimg2} alt="" /></li>
                                        <li><img src={Gimg3} alt="" /></li>
                                        <li><img src={Gimg4} alt="" /></li>
                                    </ul>
                                </div>
                                <Accordion />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 order-lg-1">
                            <ServiceSidebar/>
                        </div>
                    </div>
                </div>
            </section>
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;



