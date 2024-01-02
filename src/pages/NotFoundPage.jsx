import React from 'react'

export default function NotFoundPage() {
  return (
    <>
      {/* Empty Cart area start */}
      <div
        className="section-404 section"
        data-bg-image="assets/images/404/bg-404.webp"
      >
        <div className="container">
          <div className="content-404">
            <h1 className="title">Oops!</h1>
            <h2 className="sub-title">Page not found!</h2>
            <p>You could either go back or go to homepage</p>
            <div className="buttons">
              <a
                className="btn btn-primary btn-outline-hover-dark"
                href="index.html"
              >
                Go back
              </a>
              <a className="btn btn-dark btn-outline-hover-dark" href="index.html">
                Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Empty Cart area end */}
    </>

  )
}
