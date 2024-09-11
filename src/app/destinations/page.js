"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Destinations.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export default function DestinationsPage() {
  const destination = "Destinations";
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/destinations");
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setError("Something went wrong. Please try again later.");
      }
    };

    fetchDestinations();
  }, []);

  const SkeletonCard = () => (
    <div className={`${styles.destinationCard} ${styles.skeletonCard}`}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonReadMore}></div>
      </div>
    </div>
  );

  return (
    <div>
      <Breadcrumbs
        title={destination}
        links={[
          { href: "/", text: "Home" },
          { href: "/destinations", text: "Destinations" },
        ]}
      />
      <div className={styles.destinationsContainer}>
        {/* Breadcrumbs */}

        <h1 className={styles.title}>Destinations</h1>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.destinationList}>
          {loading || error // Conditional rendering for loading state
            ? // Display 6 skeleton cards while loading or if there's an error
              Array(6)
                .fill()
                .map((_, index) => <SkeletonCard key={index} />) // Skeleton cards
            : destinations.map((destination) => (
                <div key={destination.id} className={styles.destinationCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={`http://127.0.0.1:8000/api/${destination.image_url}`}
                      alt={destination.name}
                      className={styles.destinationImage}
                    />
                    <div className={styles.tourCount}>
                      {destination.tour_count} 1 Tours via {destination.name}
                    </div>
                  </div>
                  <div className={styles.destinationContent}>
                    <h2>{destination.name}</h2>
                    <p>{destination.description.substring(0, 100)}...</p>
                    <Link
                      href={`/destinations/${destination.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className={styles.readMore}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
}
