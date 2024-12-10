import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <header className="contact" id='contact'>
      <h1 className="contact-title">Let's Design Together</h1>
      <p className="contact-description">
      Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus<br /> in. Aliquet donec morbi convallis pretium
      </p>
      <div className="email-container">
        <input type="email" placeholder="Enter Your Email" className="email-input" />
        <button className="contact-button">Contact Me</button>
      </div>
    </header>
  );
};

export default Contact;