import React from 'react'
import LatestBlog from '../component/HomePage/LatestBlog'
import BannerArea from '../component/HomePage/BannerArea'
import Brand from '../component/HomePage/Brand'
import Testimonial from '../component/HomePage/Testimonial'
import FeaturedOffers from '../component/HomePage/FeaturedOffers'
import FashionArea from '../component/HomePage/FashionArea'
import ProductArea from '../component/HomePage/ProductArea'
import HeroSection from '../component/HomePage/HeroSection'

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <BannerArea/>
      <ProductArea/>
      <FashionArea/>
      <FeaturedOffers/>
      <Testimonial/>
      <Brand/>
      <LatestBlog />
    </>
  )
}
