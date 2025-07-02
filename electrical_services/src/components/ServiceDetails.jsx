import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'; // Import the CSS

const ServiceDetails = ({ service }) => {
  return (
    <section className="service-details" id={service.id}>
      <div className="service-header">
        <div className="service-icon">
          <img
            src={service.icon}
            alt={`${service.title} icon`}
            loading="lazy"
          />
        </div>
        <h2 className="service-title">{service.title}</h2>
      </div>

      <div className="service-body">
        <div className="service-image">
          <img
            src={service.image}
            alt={`${service.title} visual`}
            loading="lazy"
          />
        </div>

        <div className="service-info">
          <p className="service-description">{service.description}</p>

          <h3 className="features-heading">Service Includes:</h3>
          <ul className="service-features">
            {service.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          <div className="service-cta">
            <Link
              to="/book-service"
              state={{ service: service.title }}
              className="btn btn-primary"
              aria-label={`Book ${service.title} service`}
            >
              Book This Service
            </Link>
            <a href="tel:+919711117051" className="btn btn-secondary">
              Call for Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
