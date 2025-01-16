import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container">
      {/* Form Section */}
      <div className="form-section">
        <form>
          <h3>Get in Touch With Us</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <br />

          <label htmlFor="number">Phone Number:</label>
          <input type="number" id="number" name="number" placeholder="Phone Number" />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write your message"></textarea>
          <br />

          <button type="submit">Send Message</button>
        </form>
      </div>

      
      <div className="contact-cards-section">
        <div className="contact-card">
        <FaMapMarkerAlt className="card-icon" />
          <p>
            ITL Knowledge Solutions Pvt. Ltd., A27 Darshanam Celestial, Bhayali, Vadodara - 391410
          </p>
        </div>
        <div className="contact-card">
        <FaPhoneAlt className="card-icon" />
          <p>Contact Us</p>
        </div>
        <div className='message'>
        By providing us your email address via our website you agree to be added to our mailing list and receive emails from Init Tech Labs. about new courses, offers, requirements & announcements. You'll be able to unsubscribe at any time and we never share your information.
        </div>
      </div>
    </div>
  );
};

export default Contact;
