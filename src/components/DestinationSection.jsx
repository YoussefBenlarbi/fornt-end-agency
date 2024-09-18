import React from 'react';
import DestinationCard from './DestinationCard';
import './DestinationSection.css';

const DestinationSection = () => {
  const destinations = [
    { id: 1, name: 'Marrakech', image: '/images/marrakech.jpg', tours: 15 },
    { id: 2, name: 'Fes', image: '/images/fes.jpg', tours: 12 },
    { id: 3, name: 'Chefchaouen', image: '/images/chefchaouen.jpg', tours: 8 },
    { id: 4, name: 'Sahara Desert', image: '/images/Sahara_desert.jpg', tours: 10 },
    { id: 5, name: 'Essaouira', image: '/images/essaouira.jpeg', tours: 10 },
    { id: 6, name: 'Atlas Mountains', image: '/images/atlas.jpg', tours: 9 },
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
            <DestinationCard
              key={destination.id}
              name={destination.name}
              image={destination.image}
              tours={destination.tours}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;