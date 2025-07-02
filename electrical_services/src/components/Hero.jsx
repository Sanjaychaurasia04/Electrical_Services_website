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
          <h2>⚡ 30+ Years of Trusted Electrical Expertise</h2>
          <p>
            Providing complete electrical solutions for homes, offices, banks, and institutions with 15,000+ successful projects across India.
          </p>
          <p>
            Trusted by top clients like HDFC Bank, Canara Bank, Axis Bank, Kothis, showrooms, and the CCBI Secretariat Delhi.
          </p>
          <p>
            Serving Delhi, Noida, Gurugram, Faridabad, Jaipur, and more — with skilled professionals and guaranteed satisfaction.
          </p>
          <p>
            We handle all types of electrical projects — whether it's a large-scale commercial setup, a medium-sized renovation, or a small residential repair, our team delivers with the same commitment to quality, safety, and precision.
          </p>
          <div className="hero-buttons">
            {/* <Link to="/book-service" className="btn btn-primary">
              Book a Service <FaArrowRight className="icon" />
            </Link> */}
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
