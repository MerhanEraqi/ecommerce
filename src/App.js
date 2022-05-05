import React from 'react';
import { lazy , Suspense } from "react";
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
// import ShippingCart from './Pages/ShippingCart';
// import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(()  => import("./Pages/Home"));
const ShippingCart = React.lazy(()  => import("./Pages/ShippingCart"));



function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShippingCart />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
