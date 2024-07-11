import "./Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/icons/logo-white.svg";
import { ReactComponent as Chats } from "assets/icons/logo-white.svg";
import { ReactComponent as ChatsMobile } from "assets/icons/logo-white.svg";
import { ReactComponent as Open } from "assets/icons/logo-white.svg";
import { ReactComponent as Close } from "assets/icons/logo-white.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu container">
        <nav className="nav">
          <Link to="/" className="logo">
            <Logo />
            Libralink
          </Link>
          <Link to="/about-us" className={`nav-desktop `}>
            About Us
          </Link>

          <Link to="/services" className={`nav-desktop`}>
            Services
          </Link>

          <Link to="/sustainability" className={`nav-desktop`}>
            Sustainability
          </Link>
        </nav>
        <div className="contact">
          <Link to="/contact-us">
            <Chats />
            Contact us
          </Link>
        </div>
        <div className="contact-mobile">
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
