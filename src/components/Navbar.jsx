import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        
        <a className="navbar-brand fw-bold" href="#">
          FAWZIUIUX
        </a>

        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center gap-4">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        
        <a
          href="#cv"
          className="btn text-white fw-bold"
          style={{
            padding: "8px 20px",
            marginLeft: "20px",
            backgroundColor: "#ff7733", 
            borderColor: "#ff7733", 
          }}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

