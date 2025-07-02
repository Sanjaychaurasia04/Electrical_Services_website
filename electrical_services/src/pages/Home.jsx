import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import { Helmet } from 'react-helmet-async';



import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.webp';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img10.jpg'; // You may want to check this duplication
import img16 from '../assets/img16.webp';



const Home = () => {
  const services = [
    {
    id: 'security-system-installation',
    title: 'Security System Installation',
    image: img1,
    description: 'Professional installation of security systems including cameras and alarms',
  },
  {
    id: 'outlet-switch-relocation',
    title: 'Outlet & Switch Relocation',
    image: img2,
    description: 'Moving existing electrical outlets and switches to new locations',
  },
  {
    id: 'panel-upgrade',
    title: 'Panel Upgrade',
    image: img3,
    description: 'Upgrading your electrical panel for increased capacity and safety',
  },
  {
    id: 'power-restoration',
    title: 'Power Restoration',
    image: img4,
    description: 'Emergency service to restore power after outages or faults',
  },
  {
    id: 'fan-repair',
    title: 'Fan Repair',
    image: img5,
    description: 'Diagnosis and repair of ceiling and exhaust fans',
  },
  {
    id: 'light-fixture-repair',
    title: 'Light Fixture Repair',
    image: img6,
    description: 'Fixing and replacing damaged light fixtures',
  },
  {
    id: 'outlet-switch-repair',
    title: 'Outlet & Switch Repair',
    image: img7,
    description: 'Repairing faulty electrical outlets and switches',
  },
  {
    id: 'panel-repair',
    title: 'Panel Repair',
    image: img8,
    description: 'Diagnosing and fixing issues with electrical panels',
  },
  {
    id: 'switch-board-repair',
    title: 'SwitchBoard Installation',
    image: img9,
    description: 'Professional installation of main switchboards',
  },
  {
    id: 'mcb-board-repair',
    title: 'Distribution Board Services',
    image: img10,
    description: 'Installation and repair of distribution boards',
  },
  {
    id: 'wiring-fault-repair',
    title: 'Wiring Fault Repair',
    image: img11,
    description: 'Identifying and repairing wiring faults throughout your property',
  },
  {
    id: 'ground-wire-installation',
    title: 'Ground Wire Installation',
    image: img16,
    description: 'Proper grounding installation for electrical safety',
  },
];

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
