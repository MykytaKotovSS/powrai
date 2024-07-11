import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "components/Footer";
import About from "pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<p>Home</p>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
