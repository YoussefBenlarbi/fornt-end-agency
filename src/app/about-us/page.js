"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutUs.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';

const AboutUs = () => {
  const [showVideo, setShowVideo] = React.useState(false);

  const values = [
    { icon: '🌍', title: 'Explore', color: '#3498db' },
    { icon: '🏞️', title: 'Adventure', color: '#2ecc71' },
    { icon: '🤝', title: 'Community', color: '#e74c3c' },
    { icon: '🌿', title: 'Sustainability', color: '#f39c12' },
  ];

  const breadcrumbsProps = {
    title: "About Us",
    links: [
      { href: "/", text: "Home" },
      { text: "About Us" }
    ]
  };

  const drivers = [
    {
      name: "Mohammed",
      image: "https://www.escortedmoroccotours.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7y3hy4cc%2Fproduction%2F660b1e623d3bb59b00727f67ded0b63af25eb149-1080x1075.jpg&w=1920&q=75",
      message: "As a driver with over 15 years of experience, I take pride in showcasing the beauty of Morocco to our guests. Safety, comfort, and creating unforgettable memories are my top priorities."
    },
    {
      name: "Ahmed",
      image: "https://www.escortedmoroccotours.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7y3hy4cc%2Fproduction%2F660b1e623d3bb59b00727f67ded0b63af25eb149-1080x1075.jpg&w=1920&q=75",
      message: "I love sharing the rich culture and hidden gems of Morocco with our travelers. Every journey is an opportunity to make new friends and create lasting impressions of our beautiful country."
    }
  ];

  return (
    <div className={styles.container}>
      <Breadcrumbs {...breadcrumbsProps} />

      <section className={styles.ceoSection}>
        <div className={styles.ceoWords}>
          <h2>A Message from Our CEO</h2>
          <p>
            "At our core, we believe in the transformative power of travel. Our mission is to create unforgettable experiences that not only showcase the beauty of Morocco but also foster cultural understanding and respect. We are committed to sustainable tourism practices that benefit local communities while providing our guests with authentic, immersive adventures."
          </p>
          <p>- John Doe, CEO</p>
        </div>
        <div className={styles.ceoImage}>
          <Image
            src="/images/42ca1d2ab6.jpg"
            alt="CEO John Doe"
            width={400}
            height={500}
            objectFit="cover"
          />
        </div>
      </section>
      <section className={styles.driversSection}>
        <h2>Our Expert Drivers</h2>
        <div className={styles.driversGrid}>
          {drivers.map((driver, index) => (
            <div key={index} className={styles.driverCard}>
              <div className={styles.driverImageContainer}>
                <img
                  src={driver.image}
                  alt={driver.name}
                  className={styles.driverImage}
                />
              </div>
              <div className={styles.driverInfo}>
                <h3>{driver.name}</h3>
                <p>{driver.message}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ourValues}>
        <h2>Our Travel Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueItem} style={{ backgroundColor: value.color }}>
              <span className={styles.valueIcon}>{value.icon}</span>
              <h3>{value.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.videoSection}>
        <button className={styles.videoButton} onClick={() => setShowVideo(true)}>
          ▶
        </button>
        {showVideo && (
          <div className={styles.videoOverlay} onClick={() => setShowVideo(false)}>
            <div className={styles.videoWrapper} onClick={(e) => e.stopPropagation()}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/15oVrS4mnYY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button className={styles.closeButton} onClick={() => setShowVideo(false)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </section>

      
    </div>
  );
};

export default AboutUs;
