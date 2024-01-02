import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import HomePage from './pages/HomePage'
import ThankyouPage from './pages/ThankyouPage'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage' 
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactsPage';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';
import Privacy from './pages/Privacy'
import ProductsPage from './pages/ProductsPage';
import RegistrationPage from './pages/RegistrationPage';
import ReviewPage from './pages/ReviewPage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <>
   <BrowserRouter>
        <AppNav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/thankyou" element={<ThankyouPage/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          <Route path="/Privacy" element={<Privacy/>}/>
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />
          <Route path="/Review" element={<ReviewPage/>} />
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        
 
        </Routes>
        <AppFooter/>
      </BrowserRouter>
    </>
  )
}
