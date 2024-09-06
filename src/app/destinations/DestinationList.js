import React from 'react';
import styles from './Destinations.module.css';

const DestinationList = ({ isLoading, destinations, router }) => (
  <div className={styles.destinationList}>
    {isLoading ? (
      [...Array(5)].map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && <hr className={styles.destinationSeparator} />}
          <div className={`${styles.destinationItem} ${styles.skeleton}`}>
            <div className={styles.skeletonDestinationName}></div>
          </div>
        </React.Fragment>
      ))
    ) : (
      destinations.map((destination, index) => (
        <React.Fragment key={destination.id}>
          {index > 0 && <hr className={styles.destinationSeparator} />}
          <div 
            className={styles.destinationItem}
            onClick={() => router.push(`/destinations/${destination.id}`)}
          >
            <h3 className={styles.destinationName}>
              {destination.name}
              <span className={styles.destinationNumber}>{`(${index + 1})`}</span>
            </h3>
          </div>
        </React.Fragment>
      ))
    )}
  </div>
);

export default DestinationList;