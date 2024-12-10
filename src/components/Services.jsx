import React from "react";
import uiux from "../assets/uiux.svg"; 
import website from "../assets/website.svg";
import appdesign from "../assets/appdesign.svg";
import graphic from "../assets/graphic.svg";

function Services() {
  return (
    <section
      id="services"
      className="py-5 w-100"
      style={{ backgroundColor: "#fff6e7" }}
    >
      <div className="container-fluid text-center">
        <h2 style={{ fontWeight: "bolder" }}>Services</h2> <br />
        <p
          className="text-muted"
        >
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed
          maecenas nibh lectus<br /> netus in. Aliquet donec morbi convallis
          pretium. Turpis tempus pharetra.
        </p><br />
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img
                  src={uiux}
                  alt="vector1"
                  style={{ width: "30px", height: "30px" }}
                />
                <h5 className="card-title">UI/UX</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img
                  src={website}
                  alt="vector1"
                  style={{ width: "30px", height: "30px" }}
                />
                <h5 className="card-title">Web Design</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img
                  src={appdesign}
                  alt="vector1"
                  style={{ width: "30px", height: "30px" }}
                />
                <h5 className="card-title">App Design</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img
                  src={graphic}
                  alt="vector1"
                  style={{ width: "30px", height: "30px" }}
                />
                <h5 className="card-title">Graphic Design</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
