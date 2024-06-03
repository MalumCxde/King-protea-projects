// src/components/Quote.js
import React from 'react';
import '../styles/styles.css'; 

function Quote() {
  return (
    <section id="quote">
      <h2>Request A Quote</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Quote;
