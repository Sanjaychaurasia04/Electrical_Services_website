import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Helmet } from 'react-helmet-async';
import './BookService.css'; // Custom styling

const BookService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: location.state?.service || '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    const booking = {
      ...formData,
      date: date.toISOString(),
      id: Date.now(),
      status: 'Pending'
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, booking]));

    toast.success('Booking submitted successfully! We will contact you shortly.');

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Book Electrical Service | Schedule an Appointment</title>
        <meta
          name="description"
          content="Book professional electrical services online. Schedule an appointment with our certified electricians for wiring, repairs, installations and more."
        />
      </Helmet>

      <section className="book-service">
        <div className="container">
          <div className="booking-container">
            {/* FORM SIDE */}
            {/* <div className="booking-form">
              <h2>Book a Service</h2>
              <p>Fill out the form below to schedule an appointment with our electrical experts.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Full Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-label="Phone Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    aria-label="Service Needed"
                  >
                    <option value="">Select a service</option>
                    <option value="Electrical Wiring">Electrical Wiring</option>
                    <option value="Switch Board Repair">Switch Board Repair</option>
                    <option value="MCB Board Repair">MCB Board Repair</option>
                    <option value="Electric Wiring Fault Repair">Electric Wiring Fault Repair</option>
                    <option value="Power Board Repair">Power Board Repair</option>
                    <option value="Main Board Repair">Main Board Repair</option>
                    <option value="Electrical Remodeling">Electrical Remodeling</option>
                    <option value="Fan Installation">Fan Installation</option>
                    <option value="Other Electrical Service">Other Electrical Service</option>
                  </select>
                </div>

                <div className="form-group calendar-group">
                  <label>Preferred Date *</label>
                  <Calendar
                    onChange={setDate}
                    value={date}
                    minDate={new Date()}
                    tileDisabled={({ date }) => date.getDay() === 0} // Disable Sundays
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    aria-label="Additional Details"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Booking...' : 'Book Service'}
                </button>
              </form>
            </div> */}

            {/* INFO SIDE */}
            <div className="booking-info">
              <h3>Why Choose Our Services?</h3>
              <ul>
                <li>30+ Years of Electrical Experience</li>
                <li>Certified and Licensed Electricians</li>
                <li>Same Day Service Available</li>
                <li>Upfront Pricing with No Hidden Fees</li>
                <li>100% Satisfaction Guarantee</li>
              </ul>

              <div className="emergency-contact">
                <h4>For Emergency Services:</h4>
                <a href="tel:+919711117051" className="emergency-phone">
                  Call: +91 97111 7051
                </a>
                <p>Available 24/7 for urgent electrical issues</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookService;
