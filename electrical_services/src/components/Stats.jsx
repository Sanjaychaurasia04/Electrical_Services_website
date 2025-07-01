import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import './Stats.css';

const Stats = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.stats');
      if (element) {
        const rect = element.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 100;
        if (inView) {
          setStartCounting(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statData = [
    { id: 1, end: 30, suffix: '+', label: 'Years of Experience' },
    { id: 2, end: 15000, suffix: '+', label: 'Projects Completed' },
    { id: 3, end: 100, suffix: '%', label: 'Satisfied Customers' }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {statData.map((stat) => (
            <div className="stat-item" key={stat.id}>
              <h3>
                {startCounting && (
                  <CountUp start={0} end={stat.end} duration={2} suffix={stat.suffix} />
                )}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
