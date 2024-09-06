import React from 'react';
import styles from './Destinations.module.css';

const DestinationSkeleton = () => (
  <div className={`${styles.destinationCard} ${styles.skeleton}`}>
    <div className={styles.skeletonImage}></div>
    <div className={styles.skeletonContent}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonDescription}></div>
    </div>
  </div>
);

export default DestinationSkeleton;