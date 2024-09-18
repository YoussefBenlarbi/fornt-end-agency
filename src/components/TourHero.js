import React from 'react';
import styles from './TourHero.module.css';

const TourHero = ({ backgroundImage, category, title, description }) => {
  return (
    <div className={styles.heroContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <span className={styles.category}>{category}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TourHero;