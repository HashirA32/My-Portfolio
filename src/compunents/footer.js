import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="footer-top">
        <h2 className="logo-f">
          <span>HA</span>-Portfolio
        </h2>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100070978224922" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/hashir-ali-68946a306/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <nav className="footer-nav">
          {/* Navigation Links */}
          <Link to="/work">MY WORK</Link>
          <Link to="/">MY CLIENTS</Link>
          <Link to="/contact">CONTACT ME</Link>
        </nav>
        <p className="footer-text">
          HA-Portfolio Powered by{" "}
          <a href="https://mobirise.com" target="_blank" rel="noopener noreferrer">
            @hashirofficiala32
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;