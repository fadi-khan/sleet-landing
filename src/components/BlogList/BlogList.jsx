import React from 'react';
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import blogs from '../../api/blogs'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogList = (props) => {
    return (
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            {blogs.slice(0, 3).map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <img src={blog.blogSingleImg} alt='' />
                                        <span>{blog.day} <br />
                                            Feb</span>
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i><Link onClick={ClickHandler} to="#">{blog.author}</Link>
                                            </li>
                                            <li><i className="fi flaticon-comments"></i> <Link onClick={ClickHandler} to="#">Coments (03)</Link></li>
                                            <li><i className="fi flaticon-clock"></i><Link onClick={ClickHandler} to="#">3 min Read</Link></li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>The whimsically named Egg Canvas brainch </Link>
                                        </h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but majority have
                                            suffered
                                            teration in some form, by injected humour, or randomised words which don't look
                                            even slight
                                            believable. If you are going to use a passage of Lorem Ipsum.</p>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="read-more">Read More</Link>
                                    </div>
                                </div>
                            ))}
                          
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-left-sidebar">1</Link></li>
                                    <li><Link to="/blog-left-sidebar">2</Link></li>
                                    <li><Link to="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>

    )

}

export default BlogList;
