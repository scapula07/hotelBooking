import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Booking from './pages/Booking'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ErrorBoundary from "./ErrorBoundary"
import NotFound from './pages/ErrorPage/NotFound'
import FAQ from './pages/Faq'


function App() {


  return (
  <PayPalScriptProvider options={{ clientId: "AfgLqsLLxM0AEQ_xRR4HHOv0cf6k7EggV7J1x8PfXCf1LsL-GQ1pKbjuWDXDMk66DBatdAeGGlvK83PV" }}>
     <ErrorBoundary>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/hotels" element={<Hotels />} />
      <Route exact path="/booking/:id" element={<Booking />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/payment" element={<Payment/>} />
      <Route exact path="/faq" element={<FAQ/>} />
       <Route exact path="*" element={<NotFound />} />
   </Routes>

   </ErrorBoundary>
   </PayPalScriptProvider>
  )
}

export default App


