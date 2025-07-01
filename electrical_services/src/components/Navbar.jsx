import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Navbar.css'; // CSS styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Professional electrical services for homes and businesses. 30+ years of experience in wiring, repairs, installations and more."
        />
        <meta
          name="keywords"
          content="electrician, electrical services, wiring, repairs, installation, electrical contractor"
        />
      </Helmet>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span>Electrical</span>Services
          </Link>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <a href="tel:+1234567890" className="btn-primary call-btn" onClick={() => setIsOpen(false)}>
              <FaPhoneAlt /> Call Now
            </a>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
