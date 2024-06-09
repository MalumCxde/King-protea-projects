import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Us</h2>

        <div className="overview">
          <h3>Overview</h3>
          <p>
            At King Protea Projects, we pride ourselves on delivering innovative
            and sustainable architectural, interior, and landscape design
            solutions. Our team of dedicated professionals is committed to
            transforming spaces to reflect the unique vision and lifestyle of
            each client.
          </p>
        </div>

        <div className="company-statement">
          <h3>Company Statement</h3>
          <p>
            Our mission is to blend aesthetics with functionality, creating
            environments that are not only visually appealing but also practical
            and eco-friendly. We believe in fostering strong client
            relationships, built on trust, integrity, and exceptional service.
          </p>
        </div>

        <div className="client-feedback">
          <h3>Client Feedback</h3>
          <div className="feedback-container">
            <div className="feedback">
              <div className="stars">
                &#9733;&#9733;&#9733;&#9733;&#9733; {/* 5 stars */}
              </div>
              <p>
                "King Protea Projects transformed our backyard into a beautiful
                oasis. Their attention to detail and commitment to
                sustainability exceeded our expectations."
              </p>
            </div>
            <div className="feedback">
              <div className="stars">
                &#9733;&#9733;&#9733;&#9733;&#9733; {/* 5 stars */}
              </div>
              <p>
                "The team at King Protea Projects is incredibly professional and
                creative. They delivered a design that perfectly matched our
                vision."
              </p>
            </div>
          </div>
        </div>

        <div className="contact-us">
          <h3>Get in Touch</h3>
          <p>
            We would love to hear from you! Whether you have a question about
            our services, need a consultation, or just want to say hello, please
            feel free to contact us.
          </p>
          <p>Email: kingproteaprojects@gmail.com</p>
          <p>Phone: +27 12 345 6789</p>
        </div>
      </div>
    </section>
  );
}

export default About;
