import "./Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoBlack } from "assets/icons/logo-black.svg";
import { ReactComponent as LogoWhite } from "assets/icons/logo-white.svg";
import { ReactComponent as ChatsMobile } from "assets/icons/logo-white.svg";
import { ReactComponent as Open } from "assets/icons/logo-white.svg";
import { ReactComponent as Close } from "assets/icons/logo-white.svg";

const Header = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu container">
        <Link
          to="/"
          className={`logo ${theme === "white" ? "theme-white" : ""}`}
        >
          {theme === "white" ? <LogoWhite /> : <LogoBlack />}
          PowrAI Token
        </Link>
        <nav className={`nav ${theme === "white" ? "theme-white" : ""}`}>
          <Link to="/about-us" className={`nav-desktop`}>
            About Us
          </Link>

          <Link to="/how-it-works" className={`nav-desktop`}>
            How It Works
          </Link>

          <Link to="/products-services" className={`nav-desktop`}>
            Products & Services
          </Link>

          <Link to="/tokenomics" className={`nav-desktop`}>
            Tokenomics
          </Link>

          <Link to="/roadmap" className={`nav-desktop`}>
            Roadmap
          </Link>

          <Link to="/faq" className={`nav-desktop`}>
            FAQ
          </Link>

          <Link to="/blog" className={`nav-desktop`}>
            Blog
          </Link>
        </nav>
        <div className="contact">
          <Link to="/contact-us">Contact us</Link>
        </div>
        <div className="contact-mobile" style={{ display: "none" }}>
          <Link to="/contact-us">
            <ChatsMobile />
          </Link>
          {isMenuOpen ? (
            <Close onClick={toggleMenu} />
          ) : (
            <Open onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link to="/about-us" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/sustainability" onClick={toggleMenu}>
              Sustainability
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
