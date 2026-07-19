"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'

import Athut from '../../images/blog/about-widget.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setError(''); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === '') {
            setError('Search term cannot be empty.');
            return;
        }
    };

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={Athut} alt='' />
                    </div>
                    <h4>Rosalina D. Willaim</h4>
                    <span>Blogger/Photographer</span>
                    <p>he whimsically named Egg Canvas is the
                        design director and photographer
                        in New York. Why the nam</p>
                    <ul>
                        <li><Link onClick={ClickHandler} to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="#"><i className="flaticon-linkedin-big-logo"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="#"><i className="ti-pinterest"></i></Link></li>
                        <li><Link onClick={ClickHandler} to="#"><i className="flaticon-twitter"></i></Link></li>
                    </ul>
                </div>
                <div className="widget search-widget">
                    <h3>search here</h3>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Post.."
                                value={searchTerm}
                                onChange={handleInputChange}
                                style={{ flexGrow: 1, borderColor: error ? 'red' : 'initial' }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '0 10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <i className="ti-search"></i>
                            </button>
                        </div>
                        {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Air Transport<span>03</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack" className="active">Road Transport <span>02</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Ocean Transport <span>04</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Land Transport <span>05</span></Link></li>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0, 3).map((bloge, indx) => (
                            <div className="post" key={indx}>
                                <div className="img-holder">
                                    <img src={bloge.SingleImg} alt='' />
                                </div>
                                <div className="details">
                                    <span className="date"><i className="flaticon-calendar"></i>30 Nov 2023 </span>
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>
                                        {bloge.title}</Link>
                                    </h4>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Populer Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="#">Air Freight</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Road Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Air Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Train Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Ocean Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Logistics</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Packeging</Link></li>
                        <li><Link onClick={ClickHandler} to="#">Land</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
