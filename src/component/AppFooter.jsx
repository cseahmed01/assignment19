import React from 'react'

export default function AppFooter() {
  return (
    <>
      {/* Footer Area Start */}
      <div className="footer-area">
        <div className="footer-container">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                {/* Start single blog */}
                <div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
                  <div className="single-wedge">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/images/logo/footer-logo.png" alt="" />
                      </a>
                    </div>
                    <p className="about-text">
                      Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
                      templ incididunt ut labore
                    </p>
                    <ul className="link-follow">
                      <li>
                        <a
                          className="m-0"
                          title="Twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          title="Tumblr"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                        >
                          <i className="fa fa-tumblr" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          title="Facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          title="Instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="#"
                        >
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End single blog */}
                {/* Start single blog */}
                <div className="col-md-6 col-lg-3 col-sm-6 mb-lm-30px pl-lg-60px">
                  <div className="single-wedge">
                    <h4 className="footer-herading">Services</h4>
                    <div className="footer-links">
                      <div className="footer-row">
                        <ul className="align-items-center">
                          <li className="li">
                            <a className="single-link" href="my-account.html">
                              My Account
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="contact.html">
                              Contact
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="cart.html">
                              Shopping cart
                            </a>
                          </li>
                          <li className="li">
                            <a
                              className="single-link"
                              href="shop-left-sidebar.html"
                            >
                              Shop
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="login.html">
                              Services Login
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End single blog */}
                {/* Start single blog */}
                <div className="col-md-6 col-lg-3 col-sm-6 mb-lm-30px pl-lg-40px">
                  <div className="single-wedge">
                    <h4 className="footer-herading">My Account</h4>
                    <div className="footer-links">
                      <div className="footer-row">
                        <ul className="align-items-center">
                          <li className="li">
                            <a className="single-link" href="my-account.html">
                              My Account
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="contact.html">
                              Contact
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="cart.html">
                              Shopping cart
                            </a>
                          </li>
                          <li className="li">
                            <a
                              className="single-link"
                              href="shop-left-sidebar.html"
                            >
                              Shop
                            </a>
                          </li>
                          <li className="li">
                            <a className="single-link" href="login.html">
                              Services Login
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End single blog */}
                {/* Start single blog */}
                <div className="col-md-6 col-lg-3 col-sm-12">
                  <div className="single-wedge">
                    <h4 className="footer-herading">Contact Info</h4>
                    <div className="footer-links">
                      {/* News letter area */}
                      <p className="address">Address: Your Address Goes Here.</p>
                      <p className="phone">
                        Phone/Fax:<a href="tel:0123456789"> 0123456789</a>
                      </p>
                      <p className="mail">
                        Email:
                        <a href="mailto:demo@example.com"> demo@example.com</a>
                      </p>
                      <p className="mail">
                        <a href="https://demo@example.com"> demo@example.com</a>
                      </p>
                      {/* News letter area  End */}
                    </div>
                  </div>
                </div>
                {/* End single blog */}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="line-shape-top line-height-1">
                <div className="row flex-md-row-reverse align-items-center">
                  <div className="col-md-6 text-center text-md-end">
                    <div className="payment-mth">
                      <a href="#">
                        <img
                          className="img img-fluid"
                          src="assets/images/icons/payment.png"
                          alt="payment-image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 text-center text-md-start">
                    <p className="copy-text">
                      Copyright © 2021.Company name All rights reserved.
                      <a target="_blank" href="https://sc.chinaz.com/moban/">
                        网页模板
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Area End */}
    </>

  )
}
