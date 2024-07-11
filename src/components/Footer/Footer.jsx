import "./Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/logo-blue.svg";
import { ReactComponent as Copyright } from "assets/icons/copyright.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav container">
        <Link to="/" className="logo">
          <Logo />
          PowrAI Token
        </Link>
        <div className="group">
          <Link to="/about-us">About Us</Link>

          <Link to="#">How It Works</Link>

          <Link to="#">Products & Services</Link>

          <Link to="#">Tokenomics</Link>

          <Link to="#">Roadmap</Link>

          <Link to="#">FAQ</Link>

          <Link to="#">Blog</Link>
        </div>
      </nav>
      <nav className="links container">
        <span>Privacy Policy | Terms of Service</span>
        <span className="logo">
          All rights reserved
          <Copyright /> 2024 PowrAI Token
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
