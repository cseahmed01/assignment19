import React from 'react'
import Testimonial1 from '../../assets/images/testimonial/1.png'
import Testimonial2 from '../../assets/images/testimonial/2.png'
export default function Testimonial() {
    return (
        <>
            {/* Testimonial area start */}
            <div className="trstimonial-area pt-100px pb-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center m-0">
                                <h2 className="title">Client Feedback</h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Swiper */}
                            <div className="swiper-container content-top slider-nav-style-1">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testi-inner">
                                            <div className="testi-content">
                                                <p>
                                                    Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll
                                                    tempor incididunt ut laborj et dolore magna sed do eiusll
                                                    tempor dolore.
                                                </p>
                                            </div>
                                            <div className="testi-author">
                                                <div className="author-image">
                                                    <img
                                                        className="img-responsive"
                                                        src={Testimonial1}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-name">
                                                    <h4 className="name">
                                                        Regan Rosen<span>Client</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-inner">
                                            <div className="testi-content">
                                                <p>
                                                    Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll
                                                    tempor incididunt ut laborj et dolore magna sed do eiusll
                                                    tempor dolore.
                                                </p>
                                            </div>
                                            <div className="testi-author">
                                                <div className="author-image">
                                                    <img
                                                        className="img-responsive"
                                                        src={Testimonial2}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-name">
                                                    <h4 className="name">
                                                        Regan Rosen<span>Client</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-inner">
                                            <div className="testi-content">
                                                <p>
                                                    Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll
                                                    tempor incididunt ut laborj et dolore magna sed do eiusll
                                                    tempor dolore.
                                                </p>
                                            </div>
                                            <div className="testi-author">
                                                <div className="author-image">
                                                    <img
                                                        className="img-responsive"
                                                        src="assets/images/testimonial/1.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-name">
                                                    <h4 className="name">
                                                        Regan Rosen<span>Client</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testi-inner">
                                            <div className="testi-content">
                                                <p>
                                                    Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll
                                                    tempor incididunt ut laborj et dolore magna sed do eiusll
                                                    tempor dolore.
                                                </p>
                                            </div>
                                            <div className="testi-author">
                                                <div className="author-image">
                                                    <img
                                                        className="img-responsive"
                                                        src="assets/images/testimonial/2.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="author-name">
                                                    <h4 className="name">
                                                        Regan Rosen<span>Client</span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Add Arrows */}
                                <div className="swiper-buttons">
                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial area end*/}
        </>

    )
}
