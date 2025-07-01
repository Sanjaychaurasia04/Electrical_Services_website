import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import './Hero.css'; // Import the CSS for this component

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Professional Electrical Services</h1>
          <p>
            30+ years of experience providing reliable and safe electrical
            solutions for homes and businesses.
          </p>
          <div className="hero-buttons">
            <Link to="/book-service" className="btn btn-primary">
              Book a Service <FaArrowRight className="icon" />
            </Link>
            <a href="tel:+1234567890" className="btn btn-secondary">
              <FaPhoneAlt className="icon" /> Call Now
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-electrician.png" alt="Electrician" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
