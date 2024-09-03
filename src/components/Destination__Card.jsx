import React from 'react';
import Image from 'next/image';
import styles from './DestinationCard.module.css';

const DestinationCard = ({ name, image, tours }) => {
  return (
    <div className={styles.destinationCard}>
      <div className={styles.destinationImage}>
        <Image 
          src={image} 
          alt={name}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.destinationOverlay}>
          <h3>{name}</h3>
          <div className={styles.tourCount}>
            <div className={styles.separator}></div>
            <span>{tours} tours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;