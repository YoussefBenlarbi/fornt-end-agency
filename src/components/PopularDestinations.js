import React from 'react';
import Link from 'next/link';
import styles from './PopularDestinations.module.css';

const PopularDestinations = ({ destinations }) => {
  return (
    <div className={styles.destinationsList}>
      <h3 className={styles.title}>Popular Destinations</h3>
      <ul className={styles.list}>
        {destinations.map((dest, index) => (
          <li key={index} className={styles.destinationItem}>
            <Link
              href={`/destinations/${dest.slug}`}
              className={styles.destinationLink}
            >
              <span className={styles.destinationText}>{dest.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularDestinations;