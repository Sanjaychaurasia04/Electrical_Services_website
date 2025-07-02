import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import { services } from '../components/servicesData'; // Make sure this path is correct
import './Home.css'; // Import your custom styles

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Professional Electrical Services | Home</title>
        <meta
          name="description"
          content="Professional electrical services including wiring, repairs, installations and more. 30+ years of experience serving residential and commercial clients."
        />
      </Helmet>

      <Hero />
      <Stats />

      <section className="section services-section" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading" className="section-title">Our Services</h2>
          <div className="services-grid">
            
            {services.map((service) => (
              
              
           
              <ServiceCard key={service.id} service={service} />
              
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" role="region" aria-label="Call to action">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Need Electrical Help?</h2>
            <p>Contact us today for reliable and professional electrical services.</p>
            <div className="cta-btns">
              <a href="tel:+919711117051" className="btn btn-primary">
                Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
