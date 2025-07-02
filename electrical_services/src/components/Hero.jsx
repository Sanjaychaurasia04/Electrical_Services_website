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
          <h1>Complete Electrical Solutions You Can Trust</h1>
          <p>
            With over <strong>30+ years of experience</strong> and more than <strong>15,000 successful projects</strong>, we are a leading name in electrical services across India. 
            From <strong>residential wiring to commercial installations</strong>, we handle everything — from scratch to finish — with unmatched professionalism and care.
          </p>
          <p>
            We’ve proudly delivered end-to-end electrical solutions for major banks like <strong>HDFC, Canara Bank, Axis Bank</strong>, luxurious <strong>Delhi kothis</strong>, high-end <strong>showrooms</strong>, and institutions like the <strong>CCBI Secretariat</strong>.
          </p>
          <p>
            Our team of highly skilled electricians ensures <strong>safe, timely, and reliable service</strong> — no matter how big or small the job.
          </p>
          <p>
            We provide services in <strong>Delhi, Noida, Gurugram, Faridabad, Jaipur</strong>, and other major cities and states across India.
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
