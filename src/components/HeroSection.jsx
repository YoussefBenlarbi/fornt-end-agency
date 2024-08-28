'use client';

import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Discover Morocco</h1>
          <p>Experience the magic of Morocco with our guided tours</p>
        </div>
        <button className="play-button" onClick={handlePlayClick} aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 21.6c-5.304 0-9.6-4.296-9.6-9.6S6.696 2.4 12 2.4s9.6 4.296 9.6 9.6-4.296 9.6-9.6 9.6zm-2.4-14.4v9.6l7.2-4.8z"/>
          </svg>
        </button>
      </div>
      {showVideo && (
        <div className="video-overlay" onClick={() => setShowVideo(false)}>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/kGmd5DMwxSs?si=C-hieIlAMZBP11EF&autoplay=1"
              title="YouTube video player"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;