import React from 'react';
import { Helmet } from 'react-helmet-async';
import TeamMember from '../components/TeamMember';
import './About.css';
const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Master Electrician',
      bio: 'With over 25 years of experience, John specializes in commercial electrical systems and complex installations.',
      image: '/images/team1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Residential Electrician',
      bio: 'Sarah has been with our team for 15 years, focusing on home wiring, renovations, and smart home installations.',
      image: '/images/team2.jpg'
    },
    {
      id: 3,
      name: 'Mike Williams',
      position: 'Electrical Engineer',
      bio: 'Mike handles our most technical projects including industrial systems and energy efficiency solutions.',
      image: '/images/team3.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Professional Electrical Services</title>
        <meta name="description" content="Learn about our electrical services company with 30+ years of experience. Meet our team of certified electricians dedicated to quality work and customer satisfaction." />
      </Helmet>

      <section className="section about-hero">
        <div className="container">
          <h1>About Our Electrical Services</h1>
          <p>30+ years of trusted electrical expertise for homes and businesses</p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 1993, Electrical Services began as a small family business with a commitment to quality workmanship and customer satisfaction. What started as a local electrical repair service has grown into a full-service electrical contractor serving residential and commercial clients throughout the region.</p>
              <p>Over the past three decades, we've completed over 15,000 projects, from simple outlet repairs to complex commercial installations. Our team of certified electricians brings expertise, professionalism, and a dedication to safety to every job.</p>
              <p>We take pride in our reputation for reliability and quality. Many of our clients have been with us for years, trusting us with their electrical needs time and time again.</p>
            </div>
            <div className="story-image">
              <img src="/images/about-story.jpg" alt="Our team at work" />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <img src="/icons/safety.png" alt="Safety" />
              </div>
              <h3>Safety First</h3>
              <p>We adhere to the highest safety standards to protect our clients, team, and property.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img src="/icons/quality.png" alt="Quality" />
              </div>
              <h3>Quality Workmanship</h3>
              <p>Every job is completed to the highest standards with attention to detail.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img src="/icons/integrity.png" alt="Integrity" />
              </div>
              <h3>Integrity</h3>
              <p>Honest advice and fair pricing with no hidden costs or unnecessary work.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <img src="/icons/customer-service.png" alt="Customer Service" />
              </div>
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We listen to your needs and deliver solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="text-center mb-5">Our licensed and certified electricians bring expertise and professionalism to every job.</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Quality Electrical Service?</h2>
            <p>Contact us today to schedule an appointment or get a free estimate.</p>
            <div className="cta-btns">
              <a href="tel:+1234567890" className="btn btn-primary">
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

export default About;