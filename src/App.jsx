import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "pages/About";
import Home from "pages/Home";
import ProductsServices from "pages/ProductsServices";
import ContactUs from "pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
