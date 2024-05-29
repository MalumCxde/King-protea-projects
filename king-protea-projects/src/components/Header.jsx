// src/components/Header.jsx
import React from 'react';
import '../styles/styles.css';

function Header({ toggleDarkMode }) {
  return (
    <header>
      <div className="logo">King Protea Projects</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#quote">Request a Quote</a></li>
        </ul>
      </nav>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;


