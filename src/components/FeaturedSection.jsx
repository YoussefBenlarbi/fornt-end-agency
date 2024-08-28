import React from "react";
import { MdAccessTime } from "react-icons/md";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  const featuredTours = [
    { id: 1, title: "Bustling Cities", location: "Marrakech, Fez" },
    { id: 2, title: "Sahara Desert", location: "Merzouga, Zagora" },
    { id: 3, title: "Atlas Mountains", location: "Toubkal, Imlil" },
    { id: 4, title: "Coastal Escapes", location: "Essaouira, Agadir" },
    { id: 5, title: "Historical Sites", location: "Volubilis, Chefchaouen" },
    { id: 6, title: "Local Cuisine", location: "Casablanca, Rabat" },
  ];

  return (
    <section className="featured-section">
      <div className="featured-content">
        <h2 className="perfect-for-you">Perfect for You</h2>
        <h3 className="choose-package">Choose Your Package</h3>
        <p className="featured-description">
          Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
          hendrerit a id lectus. Suspendissendt eget consectetur. blandit
          interdum. Sed pellentesque at nunc eget consectetur. eget consectetur.
        </p>
        <div className="tour-grid">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-card-image-container">
                <div className="tour-card-tag">
                  <MdAccessTime className="tour-card-icon" />
                  <span className="tour-card-duration">3 Days 4 Nights</span>
                </div>
                <img
                  src="https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg"
                  alt={tour.title}
                />
              </div>
              <div className="tour-info">
                <h4>{tour.title}</h4>
                <p className="location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="location-icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tour.location}
                </p>
                <button className="book-now">BOOK NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
