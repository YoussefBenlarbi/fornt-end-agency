import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './TourGuideSection.css';

const TourGuideSection = () => {
  const guides = [
    { id: 1, name: 'Ahmed Hassan', image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/tour-guide-three.jpg' },
    { id: 2, name: 'Fatima Zahra', image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/tour-guide-three.jpg' },
    { id: 3, name: 'Youssef Amrani', image: 'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/tour-guide-three.jpg' },
  ];

  return (
    <section className="tour-guide-section">
      <div className="tour-guide-content">
        <h2 className="section-title">Tour Guides</h2>
        <p className="section-description">
          Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
          Suspendissendt blandit interdum.
        </p>
        <div className="guide-grid">
          {guides.map((guide) => (
            <div key={guide.id} className="guide-card">
              <div className="guide-image" style={{ backgroundImage: `url(${guide.image})` }}>
                <div className="social-icons">
                  <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
                  <a href="#" className="social-icon facebook"><FaFacebookF /></a>
                  <a href="#" className="social-icon instagram"><FaInstagram /></a>
                  <a href="#" className="social-icon whatsapp"><FaWhatsapp /></a>
                </div>
                <div className="guide-overlay">
                  <h3>{guide.name}</h3>
                  <p>Tour Guide</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGuideSection;