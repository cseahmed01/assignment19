import React from 'react'
import fashion1 from "../../assets/images/fashion/fashion-bg.webp"
export default function FashionArea() {
  return (
    <>
  {/* Fashion Area Start */}
  <div
    className="fashion-area"
    data-bg-image={fashion1}
  >
    <div className="container h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 text-center">
          <h2 className="title">
            {" "}
            <span>Smart Fashion</span> With Smart Devices{" "}
          </h2>
          <a
            href="shop-left-sidebar.html"
            className="btn btn-primary text-capitalize m-auto"
          >
            Shop All Devices
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Fashion Area End */}
</>

  )
}
