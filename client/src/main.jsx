import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'
import HomePage from './landingPage/home/HomePage'
import PricingPage from './landingPage/pricing/PricingPage'
import ProductPage from './landingPage/products/ProductPage'
import Signup from './landingPage/signup/signup'
import AboutPage from './landingPage/about/AboutPage'
import SupportPage from './landingPage/support/SupportPage'
import NotFound from "./NotFound"
import Navbar from './landingPage/Navbar'
import Footer from './landingPage/Footer'
import ScrollToTop from './ScrollToTop'
import Home from "./dashboard/Home"
import VerifyEmail from "./landingPage/signup/verifyEmail";
import Login from "./landingPage/signup/login";
import Verify from "./landingPage/signup/verify";
import ProtectedRoute from "./ProtectedRoute";
import ForgetPassword from "./landingPage/signup/ForgetPassword";
import VerifyOtp from "./landingPage/signup/VerifyOtp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "./landingPage/signup/ChangePassword";


function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* Landing Pages */}
        <Route path="/" element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        } />


        <Route path="/about" element={
          <>
            <Navbar />
            <AboutPage />
            <Footer />
          </>
        } />

        <Route path="/product" element={
          <>
            <Navbar />
            <ProductPage />
            <Footer />
          </>
        } />

        <Route path="/pricing" element={
          <>
            <Navbar />
            <PricingPage />
            <Footer />
          </>
        } />

        <Route path="/login" element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        } />
         <Route path="/signup" element={
          <>
            <Navbar />
            <Signup />
            <Footer />
          </>
        } />
         <Route path="/verify-email" element={
          <>
            <Navbar />
            <VerifyEmail />
            <Footer />
          </>
        } />
 <Route path="/verify/:token" element={
          <>
            <Navbar />
            <Verify />
            <Footer />
          </>
        } />
         <Route path="/support" element={
          <>
            <Navbar />
            <SupportPage />
            <Footer />
          </>
        } />

         <Route path="/forget-password" element={
          <>
            <Navbar />
            <ForgetPassword />
            <Footer />
          </>
        } />
        <Route path="/verify-otp" element={
         <>
            <Navbar />
            <VerifyOtp />
            <Footer />
          </>
          } />


          <Route path="/change-password/:email" element={
          <>
            <Navbar />
            <ChangePassword />
            <Footer />
          </>
        } />
        {/* Dashboard */}
        <Route path="/dashboard/*" element={
             <ProtectedRoute>
          <Home />
            </ProtectedRoute>
          } />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  </StrictMode>
)