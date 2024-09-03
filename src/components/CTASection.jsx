import React from 'react';
import './CTASection.css';

const CTASection = () => {
    console.log('CTASection is rendering');
    console.log('CTASection rendered at', new Date().toISOString());
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Tailor Your Dream Morocco Vacation with Our Expert Team</h2>
        <p>
          Whether you're interested in exploring the imperial cities, the Sahara desert, or the picturesque coastal towns, we can help you plan a customized itinerary that meets your unique preferences and interests.
        </p>
        <a
          href="https://wa.me/212690713090"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;