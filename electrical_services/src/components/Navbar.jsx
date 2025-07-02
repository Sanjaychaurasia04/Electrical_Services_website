import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import './Navbar.css';

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

  // Function to handle phone call initiation
  const handleCallClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    // Fallback for devices that don't support tel: links
    if (window.innerWidth > 768) {
      window.open('tel:+919711117051', '_blank');
    } else {
      window.location.href = 'tel:+919711117051';
    }
  };

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

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-container">
          <Link to="/" className="nav-logo" aria-label="Electrical Services Home">
            <span>Electrical</span>Services
          </Link>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)} aria-current="page">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <a 
              href="tel:+919711117051" 
              className="btn-primary call-btn" 
              onClick={handleCallClick}
              aria-label="Call us at +91 97111 17051"
            >
              <FaPhoneAlt aria-hidden="true" /> Call Now
            </a>
          </div>

          <button 
            className="nav-toggle" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;