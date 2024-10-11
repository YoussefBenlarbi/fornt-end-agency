import React from "react";
import Link from "next/link";
import styles from "./TourCard.module.css";
import ClientSideImage from "./ClientSideImage.js";

// Functional component for the tour card
const TourCard = ({ tour }) => {
  return (
    <div className={styles.tourCard}>
      <div className={styles.tourImageContainer}>
        <ClientSideImage
          src={tour.image}
          alt={tour.title}
          className={styles.tourImage}
        />
        <span className={styles.tourDuration}>{tour.duration}</span>
      </div>

      <div className={styles.tourInfo}>
        {/* Displaying the starting location with a link */}
        <p className={styles.startsFrom}>
          Starts from{" "}
          <Link
            href={`/destinations/${tour.startingLocation.toLowerCase()}`}
            className={styles.startingLocationLink}
          >
            {tour.startingLocation}
          </Link>
        </p>

        {/* Tour Title */}
        <h4 className={styles.tourTitle}>{tour.title}</h4>

        {/* Tour Itinerary with destination links */}
        <p className={styles.tourLocation}>
          <span className={styles.locationIcon}>📍</span>
          <span className={styles.destinationsWrapper}>
            {tour.itinerary.map((dest, index) => (
              <React.Fragment key={index}>
                <Link
                  href={`/destinations/${dest.toLowerCase()}`}
                  className={styles.destinationLink}
                >
                  {dest}
                </Link>
                {index < tour.itinerary.length - 1 && ", "}
              </React.Fragment>
            ))}
          </span>
        </p>

        {/* Book Now Button */}
        <Link href={tour.link}>
          <button className={styles.bookNowBtn}>Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
