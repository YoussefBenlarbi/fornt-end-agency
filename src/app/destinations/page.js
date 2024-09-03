"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DestinationCard from "../../components/DestinationCard";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from './Destinations.module.css';

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/destinations", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setDestinations(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
      setError("Failed to fetch destinations. Please try again later.");
    }
  };

  return (
    <>
      <Breadcrumbs 
        title="Destinations"
        links={[
          { href: "/", text: "Home" },
          { text: "Destinations" }
        ]}
      />
      <div className={styles.container}>
        {error && <p className={styles.error}>{error}</p>}
        {destinations.length > 0 ? (
          <div className={styles.grid}>
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                name={destination.name}
                title={destination.title}
                description={destination.description}
                imageUrl={destination.image_url}
              />
            ))}
          </div>
        ) : (
          <p>Loading destinations...</p>
        )}
      </div>
    </>
  );
}