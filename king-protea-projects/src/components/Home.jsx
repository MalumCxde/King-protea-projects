// src/components/Home.jsx
import React from 'react';
import '../styles/styles.css'; 

function Home() {
  return (
    <section id="home">
      <div className="hero">
        <h1>King Protea Projects</h1>
        <p>Where nature meets design.</p>
        <button className="cta-button">Get a Free Quote</button>
      </div>
      <div className="overview">
        <p>King Protea Projects is a leading landscaping company in South Africa, founded in 2024 by Njabulo Prince Motha who has a deep passion for both people and business. We specialize in creating beautiful, sustainable designs that blend seamlessly with nature.</p>
      </div>
    </section>
  );
}

export default Home;
