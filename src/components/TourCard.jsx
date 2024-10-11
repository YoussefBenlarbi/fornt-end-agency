import React from 'react';
import Link from 'next/link';
import styles from './TourCard.module.css';

const TourCard = ({ tour, destination }) => {
  return (
    <div className={styles.tourCard}>
      <div className={styles.tourImageContainer}>
        <img src={tour.image} alt={tour.title} className={styles.tourImage} />
        <span className={styles.tourDuration}>{tour.duration}</span>
      </div>
      <div className={styles.tourInfo}>
        <p className={styles.startsFrom}>
          Starts from{' '}
          <Link href={`/destinations/${tour.startingLocation.toLowerCase()}`} className={styles.startingLocationLink}>
            {tour.startingLocation}
          </Link>
        </p>
        <h4 className={styles.tourTitle}>{tour.title}</h4>
        <p className={styles.tourLocation}>
          <span className={styles.locationIcon}>📍</span>
          <span className={styles.destinationsWrapper}>
           
            {tour.itinerary.map((dest, index) => (
              <React.Fragment key={index}>
                <Link href={`/destinations/${dest.toLowerCase()}`} className={styles.destinationLink}>
                  {dest}
                </Link>
                {index < tour.itinerary.length - 1 && ', '}
              </React.Fragment>
            ))}
          </span>
        </p>

        <button className={styles.bookNowBtn}>Book Now</button>
      </div>
    </div>
  );
};

export default TourCard;