// src/components/Header.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavItemClick = () => {
    setNavOpen(false);
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo">King Protea Projects</div>
        <FontAwesomeIcon
          icon={faBars}
          className={`nav-icon ${navOpen ? 'rotate' : ''}`}
          onClick={handleNavToggle}
        />
        <nav className={navOpen ? 'nav-open' : ''}>
          <ul>
            <li><a href="#home" onClick={handleNavItemClick}>Home</a></li>
            <li><a href="#services" onClick={handleNavItemClick}>Services</a></li>
            <li><a href="#gallery" onClick={handleNavItemClick}>Gallery</a></li>
            <li><a href="#team" onClick={handleNavItemClick}>Our Team</a></li>
            <li><a href="#testimonials" onClick={handleNavItemClick}>Testimonials</a></li>
            <li><a href="#about" onClick={handleNavItemClick}>About</a></li>
            <li><a href="#quote" onClick={handleNavItemClick}>Request a Quote</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



