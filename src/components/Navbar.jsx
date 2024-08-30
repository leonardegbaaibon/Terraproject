// src/Navbar.js
import React, { useState } from 'react';
import logo from '../assets/Terra Origin Logo 1.png'; // Import the logo image
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="navbar">
    <img className="logo" src={logo} />
    <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
      <li className="home current">
        <div className="home-1 current-1">
          Home
        </div>
        <div className="rectangle-5">
        </div>
      </li>
      <li className="about">
        <span className="about-1">
          About
        </span>
      </li>
      <li className="services">
        <span className="services-1">
          Services
        </span>
      </li>
      <li className="blog">
        <span className="blog-1">
          Blog
        </span>
      </li>
      <li className="contact-us">
         <span className="contact-us-1">
          Contact Us
        </span>
      </li> 

      <li className='buttons'><span>
      <div className="cta">
      <div className="log-in">
        Log In
      </div>
      <div className="register">
        <span className="register-1">
          Register
        </span>
      </div>
    </div>
      </span></li>
      
    </ul>
    
    <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? '✖' : '☰'}
      </button>
    
  </div>
    

  );
};

export default Navbar;
