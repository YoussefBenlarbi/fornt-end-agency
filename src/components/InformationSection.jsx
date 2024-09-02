import React from 'react';
import './InformationSection.css';

export default function InformationSection() {
  return (
    <section className="information-section">
      <div className="information-content">
        <div className="image-container">
          <img src="/images/jamaefna.jpg" alt="Description of image" />
        </div>
        <div className="text-container">
          <h2 className="title">Perfect Immersion Experiences with <span style={{ color: 'black' }}>Moroccan experience tours</span></h2>
          <p className="description">At we offer customizable travel experiences for every type of traveler. Our expert guides provide authentic and enriching journeys that go beyond sightseeing, immersing you in diverse cultures and creating lasting memories. Whether you're a first-time traveler or a seasoned adventurer, we'll tailor your experience to match your unique interests.</p>
        </div>
      </div>
    </section>
  );
}