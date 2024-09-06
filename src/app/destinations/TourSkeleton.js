import React from 'react';
import styles from './Destinations.module.css';

const TourSkeleton = () => (
  <div className={`${styles.tourItem} ${styles.skeleton}`}>
    <div className={styles.skeletonTourImage}></div>
    <div className={styles.skeletonTourInfo}>
      <div className={styles.skeletonTourTitle}></div>
      <div className={styles.skeletonTourDuration}></div>
    </div>
  </div>
);

export default TourSkeleton;