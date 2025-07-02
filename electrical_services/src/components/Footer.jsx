import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Electrical Services</h3>
            <p>Providing professional electrical services for over 30 years. We deliver quality workmanship with safety as our top priority.</p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/book-service">Book a Service</Link></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/services">Electrical Wiring</Link></li>
              <li><Link to="/services">Switch Board Repair</Link></li>
              <li><Link to="/services">MCB Board Repair</Link></li>
              <li><Link to="/services">Electric Wiring Fault Repair</Link></li>
              <li><Link to="/services">Power Board Repair</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FaPhoneAlt />
                <a href="tel:+919711117051">+919711117051</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:ramjitchaurasia6@gmail.com">ramjitchaurasia6@gmail.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Gali no. 2 JantaVihar, Mukandpur Delhi 110042 </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Electrical Services. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;