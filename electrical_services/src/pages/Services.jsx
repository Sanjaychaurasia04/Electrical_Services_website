import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceDetails from '../components/ServiceDetails';
import './Services.css'; // Optional: create this for custom styling

const Services = () => {
  const allServices = [
    {
      id: 'wiring',
      title: 'Electrical Wiring',
      description: 'We provide comprehensive electrical wiring services for both residential and commercial properties. Our expert electricians ensure safe and efficient wiring installations that meet all local codes and regulations.',
      details: [
        'Complete home/office wiring',
        'Rewiring of old properties',
        'Circuit design and implementation',
        'Safety inspections and testing',
        'Conduit and trunking installation'
      ],
      icon: '/icons/wiring.png',
      image: '/images/wiring.jpg'
    },
    {
      id: 'switch-repair',
      title: 'Switch Board Repair',
      description: 'Professional repair and maintenance of all types of switch boards. We diagnose and fix issues quickly to restore your electrical system to optimal performance.',
      details: [
        'Switch replacement',
        'Fault diagnosis',
        'Wiring repairs',
        'Safety upgrades',
        'Load testing'
      ],
      icon: '/icons/switch.png',
      image: '/images/switch-repair.jpg'
    },
    {
      id: 'mcb-repair',
      title: 'MCB Board Repair',
      description: 'Expert services for MCB (Miniature Circuit Breaker) boards. We handle everything from simple repairs to complete replacements.',
      details: [
        'MCB replacement',
        'Circuit breaker testing',
        'Load balancing',
        'Safety upgrades',
        'Emergency repairs'
      ],
      icon: '/icons/mcb.png',
      image: '/images/mcb-repair.jpg'
    },
    {
      id: 'fault-repair',
      title: 'Electric Wiring Fault Repair',
      description: 'Identification and repair of electrical wiring faults to ensure safety and prevent potential hazards.',
      details: [
        'Short circuit repair',
        'Ground fault detection',
        'Wire insulation testing',
        'Voltage drop analysis',
        'Complete fault diagnosis'
      ],
      icon: '/icons/fault.png',
      image: '/images/fault-repair.jpg'
    },
    {
      id: 'power-repair',
      title: 'Power Board Repair',
      description: 'Professional repair and replacement of power boards for optimal electrical distribution.',
      details: [
        'Power board testing',
        'Component replacement',
        'Wiring repairs',
        'Safety inspections',
        'Upgrades and modifications'
      ],
      icon: '/icons/power.png',
      image: '/images/power-repair.jpg'
    },
    {
      id: 'main-repair',
      title: 'Main Board Repair',
      description: 'Expert services for main electrical board issues, ensuring your property has reliable power distribution.',
      details: [
        'Main board diagnostics',
        'Component replacement',
        'Load testing',
        'Safety upgrades',
        'Complete board replacement'
      ],
      icon: '/icons/main-board.png',
      image: '/images/main-repair.jpg'
    },
    {
      id: 'remodeling',
      title: 'Electrical Remodeling',
      description: 'Complete electrical remodeling services for renovations and upgrades.',
      details: [
        'Wiring updates',
        'Fixture relocation',
        'Code compliance upgrades',
        'Lighting redesign',
        'Smart home integration'
      ],
      icon: '/icons/remodeling.png',
      image: '/images/remodeling.jpg'
    },
    {
      id: 'fan-installation',
      title: 'Fan Installation',
      description: 'Professional installation of ceiling fans, exhaust fans, and other ventilation systems.',
      details: [
        'Ceiling fan installation',
        'Exhaust fan setup',
        'Wiring and switching',
        'Safety testing',
        'Remote control integration'
      ],
      icon: '/icons/fan.png',
      image: '/images/fan-installation.jpg'
    }
  ];

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
            {allServices.map((service) => (
              <ServiceDetails key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
