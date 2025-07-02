// ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';


const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card__image-container">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>

      <div className="service-card__content">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.description}</p>
        <ul className="service-card__features">
          <li className="service-card__feature">Certified electricians</li>
          <li className="service-card__feature">24/7 emergency service</li>
          <li className="service-card__feature">1-year service guarantee</li>
        </ul>
      </div>

      <div className="service-card__footer">
        <Link to={`/services#${service.id}`} className="service-card__button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
