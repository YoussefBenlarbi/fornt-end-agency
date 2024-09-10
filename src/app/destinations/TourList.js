import React from 'react';
import TourSkeleton from './TourSkeleton';
import styles from './Destinations.module.css';

const TourList = ({ isLoading, tours, searchTerm }) => (
  <div className={styles.tourList}>
    {isLoading ? (
      [...Array(3)].map((_, index) => (
        <TourSkeleton key={index} />
      ))
    ) : (
      tours
        .filter(tour => 
          tour && tour.title && tour.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((tour) => (
          <div key={tour.id} className={styles.tourItem}>
            <img src={`http://127.0.0.1:8000/api/${tour.image_url}`} alt={tour.title} className={styles.tourImage} />
            <div className={styles.tourInfo}>
              <h3>{tour.title}</h3>
              <p>{tour.duration} days</p>
            </div>
          </div>
        ))
    )}
  </div>
);

export default TourList;