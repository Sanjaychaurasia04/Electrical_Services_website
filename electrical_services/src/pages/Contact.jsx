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
            {/* <div className="contact-form">
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
            </div> */}

            
            <div className="contact-info">
              <h3>Get in Touch</h3>

              <div className="info-item">
                <h4>Address</h4>
                <p>Gali no .2 JantaVihar, Mukandpur  Delhi </p>
              </div>

              <div className="info-item">
                <h4>Phone</h4>
                <a href="tel:+919711117051">+919711117051</a>
                <p>Emergency: <a href="tel:+917827694516">+917827694516</a></p>
              </div>

              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:ramjitchaurasia6@gmail.com">ramjitchaurasia6@gmail.com</a>
              </div>

              <div className="info-item">
                <h4>Business Hours</h4>
                <p>Monday–Sunday: 9:00 AM – 8:00 PM</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
