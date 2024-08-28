import React from 'react';
import Image from 'next/image';
import './DestinationSection.css';

const DestinationSection = () => {
  const destinations = [
    { id: 1, name: 'Marrakech', image: '/images/essaouira.jpeg', tours: 15 },
    { id: 2, name: 'Fes', image: '/images/essaouira.jpeg', tours: 12 },
    { id: 3, name: 'Chefchaouen', image: '/images/essaouira.jpeg', tours: 8 },
    { id: 4, name: 'Sahara Desert', image: '/images/essaouira.jpeg', tours: 10 },
    { id: 5, name: 'Essaouira', image: '/images/essaouira.jpeg', tours: 10 },
    { id: 6, name: 'Atlas Mountains', image: '/images/essaouira.jpeg', tours: 9 },
  ];

  return (
    <section className="destination-section">
      <div className="destination-content">
        <h2 className="section-title">Top Destinations</h2>
        <p className="section-description">
          Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
          Suspendissendt blandit interdum.
        </p>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image">
                <Image 
                  src={destination.image} 
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="destination-overlay">
                  <h3>{destination.name}</h3>
                  <div className="tour-count">
                    <div className="separator"></div>
                    <span>{destination.tours} tours</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;