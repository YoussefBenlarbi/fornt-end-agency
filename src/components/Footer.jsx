import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <h3 className="footer-logo">Moroccan experience tours</h3>
          <p className="footer-description">Your company's brief description goes here. Make it concise and engaging.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Blog</h4>
          <ul>
            <li><a href="#">Travel Tips</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Adventures</a></li>
            <li><a href="#">Travel Gear</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><MdEmail /> <a href="mailto:info@example.com">info@example.com</a></li>
            <li><MdPhone /> <a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li><MdLocationOn /> 123 Travel Street, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Moroccan experience tours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;