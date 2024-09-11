"use client";
import Link from 'next/link';
import styles from './Destinations.module.css';

const destinations = [
  "Ait Ben Haddou",
  "Ouarzazate",
  "Fes",
  "Rabat",
  "Merzouga",
  "Boumalne Dades",
  "Agadir",
  "Tangier",
  "Marrakech",
  "Chefchaouen",
  "Essaouira",
  "Casablanca",
  "Meknes",
];

export default function DestinationsPage() {
  return (
    <div className={styles.destinationsContainer}>
      <h1>Destinations</h1>
      <ul className={styles.destinationList}>
        {destinations.map((destination) => (
          <li key={destination}>
            <Link href={`/destinations/${destination.toLowerCase().replace(' ', '-')}`}>
              {destination}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}