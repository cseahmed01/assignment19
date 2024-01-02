import React from 'react'
import product1 from "../../assets/images/product-image/1.webp";
import product2 from "../../assets/images/product-image/2.webp";
import product3 from "../../assets/images/product-image/3.webp";
import product4 from "../../assets/images/product-image/4.webp";
import product5 from "../../assets/images/product-image/5.webp";
import product6 from "../../assets/images/product-image/6.webp";
import product7 from "../../assets/images/product-image/7.webp";
import product8 from "../../assets/images/product-image/8.webp";

export default function ProductArea() {
    return (
        <>
            {/* Product Area Start */}
            <div className="product-area pb-100px">
                <div className="container">
                    {/* Section Title & Tab Start */}
                    <div className="row">
                        <div className="col-12">
                            {/* Tab Start */}
                            <div className="tab-slider d-md-flex justify-content-md-between align-items-md-center">
                                <ul className="product-tab-nav nav justify-content-start align-items-center">
                                    <li className="nav-item">
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#newarrivals"
                                        >
                                            New Arrivals
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#toprated"
                                        >
                                            Top Rated
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#featured"
                                        >
                                            Featured
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* Tab End */}
                        </div>
                    </div>
                    {/* Section Title & Tab End */}
                    <div className="row">
                        <div className="col">
                            <div className="tab-content mt-60px">
                                {/* 1st tab start */}
                                <div className="tab-pane fade show active" id="newarrivals">
                                    <div className="row mb-n-30px">
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src={product1}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product1}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Modern Smart Phone</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-10%</span>
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                           src={product2}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product2}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Bluetooth Headphone</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$48.50</span>
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                           src={product3}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product3}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Music Box</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src={product4}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product4}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Air Pods 25Hjkl Black</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges"></span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src={product5}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product5}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Hand Watch</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-8%</span>
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                           src={product6}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product6}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Table Camera</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$138.50</span>
                                                        <span className="new">$112.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src={product7}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product7}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Round Pocket Router</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-5%</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src={product8}
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src={product8}
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Power Bank 10000Mhp</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$260.00</span>
                                                        <span className="new">$238.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 1st tab end */}
                                {/* 2nd tab start */}
                                <div className="tab-pane fade" id="toprated">
                                    <div className="row">
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Modern Smart Phone</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-10%</span>
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/2.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/2.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Bluetooth Headphone</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$48.50</span>
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/3.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/3.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Music Box</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/4.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Air Pods 25Hjkl Black</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges"></span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/5.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/5.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Hand Watch</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-8%</span>
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/6.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/6.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Table Camera</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$138.50</span>
                                                        <span className="new">$112.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/7.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Round Pocket Router</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-5%</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/8.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/8.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Power Bank 10000Mhp</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$260.00</span>
                                                        <span className="new">$238.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd tab end */}
                                {/* 3rd tab start */}
                                <div className="tab-pane fade" id="featured">
                                    <div className="row">
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Modern Smart Phone</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-10%</span>
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/2.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/2.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Bluetooth Headphone</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$48.50</span>
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/3.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/3.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Music Box</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">New</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/4.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Air Pods 25Hjkl Black</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges"></span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/5.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/5.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Hand Watch</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-8%</span>
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/6.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/6.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Smart Table Camera</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$138.50</span>
                                                        <span className="new">$112.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="new">Sale</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/7.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/1.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Round Pocket Router</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="new">$38.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px">
                                            {/* Single Prodect */}
                                            <div className="product">
                                                <span className="badges">
                                                    <span className="sale">-5%</span>
                                                </span>
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img
                                                            src="assets/images/product-image/8.webp"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/8.webp"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <span className="category">
                                                        <a href="#">Accessories</a>
                                                    </span>
                                                    <h5 className="title">
                                                        <a href="single-product.html">Power Bank 10000Mhp</a>
                                                    </h5>
                                                    <span className="price">
                                                        <span className="old">$260.00</span>
                                                        <span className="new">$238.50</span>
                                                    </span>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        title="Add To Cart"
                                                        className="action add-to-cart"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Cart"
                                                    >
                                                        <i className="pe-7s-shopbag" />
                                                    </button>
                                                    <button
                                                        className="action wishlist"
                                                        title="Wishlist"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Wishlist"
                                                    >
                                                        <i className="pe-7s-like" />
                                                    </button>
                                                    <button
                                                        className="action quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look" />
                                                    </button>
                                                    <button
                                                        className="action compare"
                                                        title="Compare"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal-Compare"
                                                    >
                                                        <i className="pe-7s-refresh-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 3rd tab end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Area End */}
        </>

    )
}
