import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TeamMember from '../components/TeamMember';
import wiring from '../assets/wiring.webp';
import img from '../assets/img6.jpg';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ramjit Chaurasia',
      position: 'Master Electrician',
      bio: 'With over 25 years of experience, Ramjit specializes in commercial electrical systems and complex installations.',
      image: wiring
    },
    {
      id: 2,
      name: 'Markanday',
      position: 'Residential Electrician',
      bio: 'Markanday has been with our team for 15 years, focusing on home wiring, renovations, and smart home installations.',
      image: wiring
    },
    {
      id: 3,
      name: 'Santram',
      position: 'Electrical Engineer',
      bio: 'Santram handles our most technical projects including industrial systems and energy efficiency solutions.',
      image: wiring
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Professional Electrical Services</title>
        <meta
          name="description"
          content="Learn about our electrical services company with 30+ years of experience. Meet our team of certified electricians dedicated to quality work and customer satisfaction."
        />
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
              <p>
                With over <strong>30 years of experience</strong>, we started with a clear goal — to provide safe, reliable, and high-quality electrical services to homes and businesses across India.
                What began as a small team has grown into a trusted name, completing over <strong>15,000 projects</strong> for banks, institutions, showrooms, and private residences.
              </p>
              <p>
                We handle <strong>all types of electrical work</strong> — whether it’s a large-scale commercial setup, a mid-sized renovation, or a small residential repair. Every project is delivered with the same commitment to safety, quality, and professionalism.
              </p>
              <p>
                Today, we proudly serve in <strong>Delhi, Noida, Gurugram, Faridabad, Jaipur</strong>, and many other cities — continuing our journey with one promise: quality work, done right.
              </p>
            </div>
            <div className="story-image">
              <img src={img} alt="Our team at work" />
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
          <h2 className="section-title">Meet Our Team Members</h2>
          <p className="text-center mb-5">
            Our licensed and certified electricians bring expertise and professionalism to every job.
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
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

export default About;
