import React from "react";
import human from "../assets/human.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Header = () => {
  return (
    <header
      className="py-5 bg-light"
      style={{ paddingTop: "80px" }} 
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
        
        <div className="text-section flex-grow-1 mb-4 mb-lg-0">
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "0.2rem",
            }}
          >
            Hi, I am
          </p>
          <h1
            className="text-warning"
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "0.2rem",
            }}
          >
            Fawzi Sayed
          </h1>
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "4rem",
            }}
          >
            Website <br />
            Developer
          </h2>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed<br />
            maecenas nibh lectus netus in. Aliquet donec morbi convallis<br />
            pretium. Turpis tempus pharetra.
          </p>
          <a
            href="#contact"
            className="btn btn-primary px-4 py-2"
            style={{
              backgroundColor: "#FD6F00", 
              borderColor: "#FD6F00",
            }}
          >
            Hire Me
          </a>
        </div>

        
        <div
          className="photo-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            transform: "translateX(-40px)", 
          }}
        >
          <img
            src={human}
            alt="Profile"
            className="mb-3"
            style={{
              width: "280px",
              height: "340px", 
              objectFit: "cover",
              borderRadius: "50% / 50%",
            }}
          />

          
          <div
            className="social-icons d-flex gap-3"
            style={{
              justifyContent: "center",
              marginTop: "-10px", 
            }}
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "20px", height: "20px" }} 
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "20px", height: "20px" }} 
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                alt="LinkedIn"
                style={{ width: "20px", height: "20px" }} 
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src={twitter}
                alt="Twitter"
                style={{ width: "20px", height: "20px" }} 
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
