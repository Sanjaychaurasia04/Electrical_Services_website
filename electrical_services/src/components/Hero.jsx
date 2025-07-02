import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import img from '../assets/connection.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Professional Electrical Services</h1>
          <p>
            Over 30 years of experience providing reliable and safe electrical
            solutions for homes and businesses.
          </p>
          <div className="hero-buttons">
            <Link to="/book-service" className="btn btn-primary">
              Book a Service <FaArrowRight className="icon" />
            </Link>
            <a href="tel:+919711117051" className="btn btn-secondary">
              <FaPhoneAlt className="icon" /> Call Now
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={img} alt="Electrician at work" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
