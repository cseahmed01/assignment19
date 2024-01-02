import React from 'react'
import bg1 from "../../assets/images/hero/bg/hero-bg-1.webp";
import innerimage1 from "../../assets/images/hero/inner-img/hero-1-1.png";
import innerimage2 from "../../assets/images/hero/inner-img/hero-1-2.png";
export default function HeroSection() {
    return (
        <>
            {/* Hero/Intro Slider Start */}
            <div className="section ">
                <div className="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1">
                    {/* Hero slider Active */}
                    <div className="swiper-wrapper">
                        {/* Single slider item */}
                        <div
                            className="hero-slide-item slider-height swiper-slide bg-color1"
                            data-bg-image={bg1}
                        >
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                        <div className="hero-slide-content slider-animated-1">
                                            <span className="category">Welcome To Hmart</span>
                                            <h2 className="title-1">
                                                Your Home <br />
                                                Smart Devices &amp; <br />
                                                Best Solution{" "}
                                            </h2>
                                            <a
                                                href="shop-left-sidebar.html"
                                                className="btn btn-primary text-capitalize"
                                            >
                                                Shop All Devices
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-end">
                                        <div className="show-case">
                                            <div className="hero-slide-image">
                                                <img
                                                    src={innerimage1}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single slider item */}
                        <div
                            className="hero-slide-item slider-height swiper-slide bg-color1"
                            data-bg-image="assets/images/hero/bg/hero-bg-1.webp"
                        >
                            <div className="container h-100">
                                <div className="row h-100">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 align-self-center sm-center-view">
                                        <div className="hero-slide-content slider-animated-1">
                                            <span className="category">Welcome To Hmart</span>
                                            <h2 className="title-1">
                                                Your Home <br />
                                                Smart Devices &amp; <br />
                                                Best Solution{" "}
                                            </h2>
                                            <a
                                                href="shop-left-sidebar.html"
                                                className="btn btn-primary text-capitalize"
                                            >
                                                Shop All Devices
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center position-relative align-items-end">
                                        <div className="show-case">
                                            <div className="hero-slide-image">
                                                <img
                                                    src={innerimage2}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add Pagination */}
                    <div className="swiper-pagination swiper-pagination-white" />
                    {/* Add Arrows */}
                    <div className="swiper-buttons">
                        <div className="swiper-button-next" />
                        <div className="swiper-button-prev" />
                    </div>
                </div>
            </div>
            {/* Hero/Intro Slider End */}
        </>

    )
}
