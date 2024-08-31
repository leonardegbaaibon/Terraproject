import React from 'react';
import email from '../assets/images/email.png'; 
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter-section">
      <div className="bg-section bg-[url('assets/images/Section.png')]">
        <div className="subscription-box">
          <div className="subscription-text">
            SUBSCRIBE TO OUR NEWSLETTER
          </div>
          <div className="subscription-heading">
            Explore the <br /> beauties of Africa and get special deals.
          </div>
          <div className="subscription-input">
            <div className="input-group">
              <img src={email} alt="email" />
              <span>Your email</span>
            </div>
            <div className="subscribe-btn">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
