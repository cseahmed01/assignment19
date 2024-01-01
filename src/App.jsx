import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import HomePage from './pages/HomePage'

 
export default function App() {
  return (
    <>
   <BrowserRouter>
        <AppNav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        <AppFooter/>
      </BrowserRouter>
    </>
  )
}
