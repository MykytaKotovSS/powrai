import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "pages/About";
import Home from "pages/Home";
import ProductsServices from "pages/ProductsServices";
import ContactUs from "pages/ContactUs";
import Roadmap from "pages/Roadmap";
import HowItWorks from "pages/HowItWorks";
import Tokenomics from "pages/Tokenomics";
import Faq from "pages/Faq";
import Blog from "pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
