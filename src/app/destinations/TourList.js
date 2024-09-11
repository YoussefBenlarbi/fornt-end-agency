import React from 'react';
import styles from './Destinations.module.css';

const TourList = ({ destination }) => {
  // This is a placeholder. In a real application, you'd fetch tours based on the destination
  const tours = [
    { id: 1, name: `${destination} City Tour`, duration: '4 hours', image: 'http://127.0.0.1:8000/api/images/2024-09-10_09-57-33_66e0180d0ce54.jpeg' },
    { id: 2, name: `${destination} Food Tour`, duration: '3 hours', image: 'http://127.0.0.1:8000/api/images/2024-09-10_09-57-33_66e0180d0ce54.jpeg' },
    { id: 3, name: `${destination} Historical Tour`, duration: '5 hours', image: 'http://127.0.0.1:8000/api/images/2024-09-10_09-57-33_66e0180d0ce54.jpeg' },
  ];

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.listTitre}>Tours in {destination}</h2>
      <div className={styles.tourList}>
        {tours.map((tour) => (
          <div key={tour.id} className={styles.tourItem}>
            <img src={tour.image} alt={tour.name} className={styles.tourImage} />
            <div className={styles.tourInfo}>
              <h3>{tour.name}</h3>
              <p>Duration: {tour.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourList;