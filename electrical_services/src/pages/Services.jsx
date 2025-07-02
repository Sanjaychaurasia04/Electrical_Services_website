import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceDetails from '../components/ServiceDetails';
import { services } from '../components/servicesData'; // 👈 Importing from external data
import './Services.css';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Electrical Services | Our Professional Services</title>
        <meta
          name="description"
          content="Comprehensive electrical services including wiring, repairs, installations, and more. 30+ years of experience serving residential and commercial clients."
        />
      </Helmet>

      <section className="section services-page" aria-labelledby="services-heading">
        <div className="container">
          <header className="services-header">
            <h1 id="services-heading" className="section-title">Our Electrical Services</h1>
            <p className="subtitle">
              With over 30 years of experience, we provide professional electrical services with a focus on safety, quality, and customer satisfaction.
            </p>
          </header>

          <div className="services-list">
            {services.map((service) => (
              <ServiceDetails key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
