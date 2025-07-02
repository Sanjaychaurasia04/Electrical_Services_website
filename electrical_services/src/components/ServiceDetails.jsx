import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const DEFAULT_DETAILS = [
  'Professional certified electricians',
  'Quality materials and equipment',
  'Safety compliance guarantee',
  'Clean work environment',
];

const ServiceDetails = ({ service }) => {
  if (!service) {
    return <div className="service-error">Service not found</div>;
  }

  return (
    <section className="service-details" id={service.id}>
      <div className="service-header">
        <h2 className="service-title">{service.title}</h2>
      </div>

      <div className="service-body">
        <div className="service-image">
          <img
            src={service.image}
            alt={`${service.title} visual`}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/default-service-image.jpg';
            }}
          />
        </div>

        <div className="service-info">
          <p className="service-description">{service.description}</p>

          <h3 className="features-heading">Service Includes:</h3>
          <ul className="service-features">
            {(service.details || DEFAULT_DETAILS).map((detail, index) => (
              <li key={index} className="service-feature">
                {detail}
              </li>
            ))}
          </ul>

          <div className="service-cta">
            <Link
              to="/book-service"
              state={{ service: service.title }}
              className="btn btn-primary"
            >
              Book This Service
            </Link>
            <a href="tel:+919711117051" className="btn btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
