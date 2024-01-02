import React from 'react'
import brand1 from '../../assets/images/partner/1.png'
import brand2 from '../../assets/images/partner/2.png'
import brand3 from '../../assets/images/partner/3.png'
import brand4 from '../../assets/images/partner/4.png'
export default function Brand() {
  return (
    <>
    {/* Brand area start */}
    <div className="brand-area pt-100px pb-100px">
      <div className="container">
        <div className="brand-slider swiper-container">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide brand-slider-item text-center">
              <a href="#">
                <img
                  className=" img-fluid"
                  src={brand1}
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide brand-slider-item text-center">
              <a href="#">
                <img
                  className=" img-fluid"
                  src={brand2}
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide brand-slider-item text-center">
              <a href="#">
                <img
                  className=" img-fluid"
                  src={brand3}
                  alt=""
                />
              </a>
            </div>
            <div className="swiper-slide brand-slider-item text-center">
              <a href="#">
                <img
                  className=" img-fluid"
                  src={brand4}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Brand area end */}
  </>
  
  )
}
