"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DestinationCard from "../../components/DestinationCard";
import Breadcrumbs from "../../components/Breadcrumbs";
import DestinationSkeleton from "./DestinationSkeleton";
import TourSkeleton from "./TourSkeleton";
import DestinationList from "./DestinationList";
import TourList from "./TourList";
import styles from './Destinations.module.css';

export default function DynamicDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchDestinations();
    fetchTours();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/destinations", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setDestinations(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching destinations:", error);
      setError("Failed to fetch destinations. Please try again later.");
      setIsLoading(false);
    }
  };

  const fetchTours = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tours", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setTours(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
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
        <div className={styles.pageLayout}>
          <div className={styles.mainContent}>
            {error && <p className={styles.error}>{error}</p>}
            {isLoading ? (
              <div className={styles.grid}>
                {[...Array(6)].map((_, index) => (
                  <DestinationSkeleton key={index} />
                ))}
              </div>
            ) : destinations.length > 0 ? (
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
              <p>No destinations found.</p>
            )}
          </div>
          <div className={styles.sidebar}>
            <input
              type="text"
              placeholder="Search tours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <h1 className={styles.listTitre}>Tours via {searchTerm}</h1>
            <TourList isLoading={isLoading} tours={tours} searchTerm={searchTerm} />
            
            <h2 className={styles.listTitre} style={{marginTop: "4rem"}}>All Destinations</h2>
            <DestinationList isLoading={isLoading} destinations={destinations} router={router} />
          </div>
        </div>
      </div>
    </>
  );
}