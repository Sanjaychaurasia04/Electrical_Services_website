import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSending(true);

    const contact = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    localStorage.setItem('contacts', JSON.stringify([...existingContacts, contact]));

    toast.success('Message sent successfully! We will contact you shortly.');

    setTimeout(() => {
      setIsSending(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Professional Electrical Services</title>
        <meta name="description" content="Contact our professional electrical services team for inquiries, quotes, and service requests. We're here to help with all your electrical needs." />
      </Helmet>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Form Section */}
            <div className="contact-form">
              <h2>Contact Us</h2>
              <p>Have questions or need electrical services? Fill out the form below and we'll get back to you promptly.</p>

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
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-label="Phone"
                    pattern="[0-9]{10,15}"
                    title="Enter a valid phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-label="Subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-label="Message"
                  />
                </div>

                <button type="submit" className="btn" disabled={isSending}>
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="contact-info">
              <h3>Get in Touch</h3>

              <div className="info-item">
                <h4>Address</h4>
                <p>123 Electric Ave, City, State 12345</p>
              </div>

              <div className="info-item">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
                <p>Emergency: <a href="tel:+1234567891">+1 (234) 567-891</a></p>
              </div>

              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:info@electricalservices.com">info@electricalservices.com</a>
              </div>

              <div className="info-item">
                <h4>Business Hours</h4>
                <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                <p>Sat: 9:00 AM – 4:00 PM</p>
                <p>Sun: Emergency Only</p>
              </div>

              <div className="map-container">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179041!2d-73.9878449245252!3d40.74844047138953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1690834257825!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
