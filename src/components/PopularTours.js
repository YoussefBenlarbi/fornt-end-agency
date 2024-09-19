import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './PopularTours.module.css';

const PopularTours = ({ tours }) => {

  return (
    <div className={styles.popularTours}>
      <h3 className={styles.title}>Popular Tours</h3>
      <ul className={styles.toursList}>
        {tours.map((tour, index) => (
          <li key={index} className={styles.tourItem}>
            <Link
              href={`/tours/${tour.title.toLowerCase().replace(/ /g, "-")}`}
              className={styles.tourLink}
            >
              <div className={styles.tourImageContainer}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className={styles.tourImage}
                />
              </div>
              <div className={styles.tourInfo}>
                <h4 className={styles.tourTitle}>{tour.title}</h4>
                <p className={styles.tourDestination}>
                  <FaMapMarkerAlt />
                  <span>{tour.destination}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTours;