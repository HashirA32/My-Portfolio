// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="footer-top">
        <h2 className="logo-f"><span>HA</span>-Portfolio</h2>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
          <FaRss />
        </div>
        <nav className="footer-nav">
          <a href="#work">MY WORK</a>
          <a href="#clients">MY CLIENTS</a>
          <a href="#contact">CONTACT ME</a>
        </nav>
        <p className="footer-text">HA-Portfolio Powered by <a href="https://mobirise.com">
        @hashirofficiala32</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
