import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFound.css'; // Custom CSS styling

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Electrical Services</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage for professional electrical services." />
      </Helmet>

      <section className="not-found-section">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-code">404</h1>
            <h2 className="not-found-title">Page Not Found</h2>
            <p className="not-found-message">
              The page you are looking for might have been removed,<br />
              had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary">
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
