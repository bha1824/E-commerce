import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Electronics from "./Pages/Electronics";
import Jewllery from "./Pages/Jewllery";
import Mens from "./Pages/Mens";
import Furniture from "./Pages/Furniture";
// import Myapi2 from "./Pages/Myapi2";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewels" element={<Jewllery />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/furniture" element={<Furniture />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
