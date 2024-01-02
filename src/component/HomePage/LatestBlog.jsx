import React from 'react'
import blog1 from '../../assets/images/blog-image/1.webp'
import blog2 from '../../assets/images/blog-image/2.webp'
export default function LatestBlog() {
    return (
        <>
            {/* Blog area start from here */}
            <div className="main-blog-area pb-100px">
                <div className="container">
                    {/* section title start */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center mb-30px0px">
                                <h2 className="title">Latest Blog</h2>
                                <p>
                                    {" "}
                                    There are many variations of passages of Lorem Ipsum available
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* section title start */}
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 mb-xs-30px">
                            <div className="single-blog">
                                <div className="blog-image">
                                    <a href="blog-single-left-sidebar.html">
                                        <img
                                            src={blog1}
                                            className="img-responsive w-100"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <div className="blog-athor-date line-height-1">
                                        <span className="blog-date">
                                            <i className="fa fa-calendar" aria-hidden="true" /> 27,Jun
                                            2030
                                        </span>
                                        <span>
                                            <a className="blog-author" href="blog-grid.html">
                                                <i className="fa fa-user" aria-hidden="true" /> Wild Nick
                                            </a>
                                        </span>
                                    </div>
                                    <h5 className="blog-heading">
                                        <a
                                            className="blog-heading-link"
                                            href="blog-single-left-sidebar.html"
                                        >
                                            10 Quick Tips About Smart Product
                                        </a>
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
                                        templ incididunt ut labore
                                    </p>
                                    <a
                                        href="blog-single-left-sidebar.html"
                                        className="btn btn-primary blog-btn"
                                    >
                                        {" "}
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End single blog */}
                        <div className="col-lg-6 col-sm-6">
                            <div className="single-blog">
                                <div className="blog-image">
                                    <a href="blog-single-left-sidebar.html">
                                        <img
                                            src={blog2}
                                            className="img-responsive w-100"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="blog-text">
                                    <div className="blog-athor-date line-height-1">
                                        <span className="blog-date">
                                            <i className="fa fa-calendar" aria-hidden="true" /> 27,Jun
                                            2030
                                        </span>
                                        <span>
                                            <a className="blog-author" href="blog-grid.html">
                                                <i className="fa fa-user" aria-hidden="true" /> Oaklee Odom
                                            </a>
                                        </span>
                                    </div>
                                    <h5 className="blog-heading">
                                        <a
                                            className="blog-heading-link"
                                            href="blog-single-left-sidebar.html"
                                        >
                                            5 Real-Life Lessons About Smart Product
                                        </a>
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
                                        templ incididunt ut labore
                                    </p>
                                    <a
                                        href="blog-single-left-sidebar.html"
                                        className="btn btn-primary blog-btn"
                                    >
                                        {" "}
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End single blog */}
                    </div>
                </div>
            </div>
            {/* Blog area end here */}
        </>

    )
}
