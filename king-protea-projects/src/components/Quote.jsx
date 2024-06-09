import React from 'react';
import '../styles/styles.css';

const Quote = () => {
  return (
    <section className="contact" id="quote">
      <h2 className="heading">Request A <span>Quote</span></h2>

      <form>
        <div className="input-box">
          <input type="text" placeholder="Full name" name="name" required />
          <input type="email" placeholder="Email address" name="email" required />
        </div>

        <div className="input-box">
          <input type="number" placeholder="Mobile number" name="phone-number" />
          <input type="text" placeholder="Email subject" name="subject" required/>
        </div>

        <textarea cols="30" rows="10" placeholder="Your message" name="message" required></textarea>

        {/* Form submit settings */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />

        <input type="submit" value="Request A Quote" className="btn" />
      </form>
    </section>
  );
};

export default Quote;