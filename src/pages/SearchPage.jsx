import React from 'react'
import product1 from '../assets/images/product-image/1.webp';
import product2 from '../assets/images/product-image/2.webp';
import product3 from '../assets/images/product-image/3.webp';
import product4 from '../assets/images/product-image/4.webp';
import product5 from '../assets/images/product-image/5.webp';
import product6 from '../assets/images/product-image/6.webp';
import product7 from '../assets/images/product-image/7.webp';
import product8 from '../assets/images/product-image/8.webp';
export default function SearchPage() {
  return (
    <>
      {/* breadcrumb-area start */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <h2 className="breadcrumb-title">Search Product Page</h2>
              {/* breadcrumb-list start */}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Your Serach Product Item</li>
              </ul>
              {/* breadcrumb-list end */}
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area end */}
      {/* Shop Page Start  */}
      <div className="shop-category-area pt-100px pb-100px">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Shop Top Area Start */}
              <div className="shop-top-bar d-flex">
                <p className="compare-product">
                  {" "}
                  <span>12</span> Product Found of <span>30</span>
                </p>
                {/* Left Side End */}
                <div className="shop-tab nav">
                  <button
                    className="active"
                    data-bs-target="#shop-grid"
                    data-bs-toggle="tab"
                  >
                    <i className="fa fa-th" aria-hidden="true" />
                  </button>
                  <button data-bs-target="#shop-list" data-bs-toggle="tab">
                    <i className="fa fa-list" aria-hidden="true" />
                  </button>
                </div>
                {/* Right Side Start */}
                <div className="select-shoing-wrap d-flex align-items-center">
                  <div className="shot-product">
                    <p>Sort By:</p>
                  </div>
                  {/* Single Wedge End */}
                  <div className="header-bottom-set dropdown">
                    <button
                      className="dropdown-toggle header-action-btn"
                      data-bs-toggle="dropdown"
                    >
                      Default <i className="fa fa-angle-down" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a className="dropdown-item" href="#">
                          Name, A to Z
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Name, Z to A
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Price, low to high
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Price, high to low
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort By new
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort By old
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Single Wedge Start */}
                </div>
                {/* Right Side End */}
              </div>
              {/* Shop Top Area End */}
              {/* Shop Bottom Area Start */}
              <div className="shop-bottom-area">
                {/* Tab Content Area Start */}
                <div className="row">
                  <div className="col">
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="shop-grid">
                        <div className="row mb-n-30px">
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                    ssrc={product1}
                                    alt="Product"
                                  />
                                </a>
                              </div>
                              <div className="content">
                                <span className="category">
                                  <a href="#">Accessories</a>
                                </span>
                                <h5 className="title">
                                  <a href="single-product.html">
                                    Modern Smart Phone
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                  <a href="single-product.html">
                                    Bluetooth Headphone
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                    ssrc={product4}
                                    alt="Product"
                                  />
                                </a>
                              </div>
                              <div className="content">
                                <span className="category">
                                  <a href="#">Accessories</a>
                                </span>
                                <h5 className="title">
                                  <a href="single-product.html">
                                    Air Pods 25Hjkl Black
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                  <a href="single-product.html">
                                    Smart Table Camera
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                  <a href="single-product.html">
                                    Round Pocket Router
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                  <a href="single-product.html">
                                    Power Bank 10000Mhp
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                  <a href="single-product.html">
                                    Modern Smart Phone
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                            {/* Single Prodect */}
                            <div className="product">
                              <span className="badges">
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
                                  <a href="single-product.html">
                                    Modern Smart Phone
                                  </a>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
                            {/* Single Prodect */}
                            <div className="product">
                              <span className="badges">
                                <span className="sale">-8%</span>
                              </span>
                              <div className="thumb">
                                <a href="single-product.html" className="image">
                                  <img
                                    src="assets/images/product-image/4.webp"
                                    alt="Product"
                                  />
                                  <img
                                    className="hover-image"
                                    src="assets/images/product-image/4.webp"
                                    alt="Product"
                                  />
                                </a>
                              </div>
                              <div className="content">
                                <span className="category">
                                  <a href="#">Accessories</a>
                                </span>
                                <h5 className="title">
                                  <a href="single-product.html">
                                    Modern Smart Phone
                                  </a>
                                </h5>
                                <span className="price">
                                  <span className="old">$38.50</span>
                                  <span className="new">$30.50</span>
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
                          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-30px">
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
                                  <a href="single-product.html">
                                    Modern Smart Phone
                                  </a>
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
                        </div>
                      </div>
                      <div className="tab-pane fade mb-n-30px" id="shop-list">
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
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
                                  <span className="badges">
                                    <span className="new">New</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Modern Smart Phone
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
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
                                  <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Bluetooth Headphone{" "}
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="old">$48.50</span>
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
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
                                  <span className="badges">
                                    <span className="new">Sale</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Smart Music Box
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
                                <div className="thumb">
                                  <a href="single-product.html" className="image">
                                    <img
                                      src="assets/images/product-image/4.webp"
                                      alt="Product"
                                    />
                                    <img
                                      className="hover-image"
                                      src="assets/images/product-image/4.webp"
                                      alt="Product"
                                    />
                                  </a>
                                  <span className="badges">
                                    <span className="new">New</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Air Pods 25Hjkl Black
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
                                <div className="thumb">
                                  <a href="single-product.html" className="image">
                                    <img
                                      src="assets/images/product-image/5.webp"
                                      alt="Product"
                                    />
                                    <img
                                      className="hover-image"
                                      src="assets/images/product-image/6.webp"
                                      alt="Product"
                                    />
                                  </a>
                                  <span className="badges"></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Smart Hand Watch
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
                                <div className="thumb">
                                  <a href="single-product.html" className="image">
                                    <img
                                      src="assets/images/product-image/7.webp"
                                      alt="Product"
                                    />
                                    <img
                                      className="hover-image"
                                      src="assets/images/product-image/7.webp"
                                      alt="Product"
                                    />
                                  </a>
                                  <span className="badges">
                                    <span className="sale">-10%</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Smart Table Camera
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="old">$48.50</span>
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
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
                                  <span className="badges"></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Round Pocket Router
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
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
                                  <span className="badges">
                                    <span className="sale">-10%</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Power Bank 10000Mhp
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="old">$48.50</span>
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
                                <div className="thumb">
                                  <a href="single-product.html" className="image">
                                    <img
                                      src="assets/images/product-image/2.webp"
                                      alt="Product"
                                    />
                                    <img
                                      className="hover-image"
                                      src="assets/images/product-image/1.webp"
                                      alt="Product"
                                    />
                                  </a>
                                  <span className="badges"></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Power Bank 10000Mhp
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="old">$58.50</span>
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
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
                                  <span className="badges">
                                    <span className="new">New</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Modern Smart Phone
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
                                <div className="thumb">
                                  <a href="single-product.html" className="image">
                                    <img
                                      src="assets/images/product-image/4.webp"
                                      alt="Product"
                                    />
                                    <img
                                      className="hover-image"
                                      src="assets/images/product-image/5.webp"
                                      alt="Product"
                                    />
                                  </a>
                                  <span className="badges">
                                    <span className="new">Sale</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Bluetooth Headphone{" "}
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                        <div className="shop-list-wrapper mb-30px">
                          <div className="row">
                            <div className="col-md-5 col-lg-5 col-xl-4 mb-lm-30px">
                              <div className="product">
                                <div className="thumb">
                                  <a href="single-product.html" className="image">
                                    <img
                                      src="assets/images/product-image/6.webp"
                                      alt="Product"
                                    />
                                    <img
                                      className="hover-image"
                                      src="assets/images/product-image/7.webp"
                                      alt="Product"
                                    />
                                  </a>
                                  <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-7 col-xl-8">
                              <div className="content-desc-wrap">
                                <div className="content">
                                  <span className="category">
                                    <a href="#">Accessories</a>
                                  </span>
                                  <h5 className="title">
                                    <a href="single-product.html">
                                      Smart Music Box
                                    </a>
                                  </h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmodol tempor
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veni quis nostrud exercitation
                                    ullamco laboris{" "}
                                  </p>
                                </div>
                                <div className="box-inner">
                                  <span className="price">
                                    <span className="old">$48.50</span>
                                    <span className="new">$38.50</span>
                                  </span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab Content Area End */}
                {/*  Pagination Area Start */}
                <div
                  className="pro-pagination-style text-center text-lg-end"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="pages">
                    <ul>
                      <li className="li">
                        <a className="page-link" href="#">
                          <i className="fa fa-angle-left" />
                        </a>
                      </li>
                      <li className="li">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="li">
                        <a className="page-link active" href="#">
                          2
                        </a>
                      </li>
                      <li className="li">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="li">
                        <a className="page-link" href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*  Pagination Area End */}
              </div>
              {/* Shop Bottom Area End */}
            </div>
          </div>
        </div>
      </div>
      {/* Shop Page End  */}
    </>
  )
}
