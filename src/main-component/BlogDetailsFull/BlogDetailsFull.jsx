import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import CtaSection from '../../components/CtaSection/CtaSection';
import MapSection from '../../components/MapSection/MapSection';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Logo from '../../images/logo.svg'

const BlogDetailsFull = () => {
    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Internation Logistics'} pagesub={BlogDetails.title} />
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'} />
            <MapSection />
            <CtaSection hclass={'wpo-cta-section-s2'} />
            <FooterS2 />
            <Scrollbar /> 
        </Fragment>
    )
};
export default BlogDetailsFull;