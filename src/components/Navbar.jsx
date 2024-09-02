'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Moroccan experience tours</div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link href="/" onClick={toggleMenu}>HOME</Link>
          <Link href="/about" onClick={toggleMenu}>ABOUT</Link>
          <Link href="/services" onClick={toggleMenu}>SERVICES</Link>
          <Link href="/contact" onClick={toggleMenu}>CONTACT</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;