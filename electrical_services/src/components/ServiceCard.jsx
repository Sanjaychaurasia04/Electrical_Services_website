import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'; // Import the styles

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <img
          src={service.icon}
          alt={`${service.title} icon`}
          loading="lazy"
        />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>
      <Link
        to={`/services#${service.id}`}
        className="service-card__button"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ServiceCard;
