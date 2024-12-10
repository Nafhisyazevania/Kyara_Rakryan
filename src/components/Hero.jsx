import React from 'react';
import './Hero.css';
import Facebook from '../assets/Facebook.svg'; 
import Instagram from '../assets/Instagram.svg'; 
import Linkedin from '../assets/Linkedin.svg'; 
import Twitter from '../assets/Twitter.svg'; 

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-logo">FAWZIUIUX</div><br /><br />
      <nav className="hero-nav">
        <ul className="hero-menu">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul><br />
      </nav>
      <div className="social-icons d-flex justify-content-center gap-3 mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter" style={{ width: '20px', height: '20px' }} />
        </a>
      </div><br />
    </div>
  );
};

export default Hero;