import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import PricingPage from '../PricingPage/PricingPage';
import TrackingPage from '../TrackingPage/TrackingPage';
import TeamPage from '../TeamPage/TeamPage';
import FaqPage from '../FaqPage/FaqPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectPageS2 from '../ProjectPageS2/ProjectPageS2';
import ProjectPageS3 from '../ProjectPageS3/ProjectPageS3';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import ServicePages from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ShopPage from '../ShopPage/ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="home" element={<HomePage2 />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="Faq" element={<FaqPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-2" element={<ProjectPageS2 />} />
          <Route path="project-3" element={<ProjectPageS3 />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path="services" element={<ServicePages />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='shop-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
