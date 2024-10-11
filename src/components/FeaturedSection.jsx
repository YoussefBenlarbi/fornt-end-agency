import React from "react";
import { MdAccessTime } from "react-icons/md";
import CityLink from "./CityLink";
import "./FeaturedSection.css";
import Link from "next/link";
import ClientSideImage from "./ClientSideImage";

const FeaturedSection = () => {
  const featuredTours = [
    {
      id: 1,
      image:
        "/images/7-days-adventure-through-time-and-culture-morocco-hero-image.jpg",
      title: "7 Days Adventure through time and Culture Morocco",
      itinerary: ["Marrakech", "Fez"],
      link: "7-days-adventure-through-time-and-culture-morocco",
    },
    {
      id: 2,
      image:
        "/images/2-days-sahara-desert-tour-marrakech-to-zagora-morocco-hero-image.jpg",
      title: "2 Days Sahara Desert Tour from Marrakech to Zagora",
      itinerary: ["Merzouga", "Zagora"],
      link: "2-days-sahara-desert-tour-marrakech-to-zagora-morocco",
    },
    {
      id: 3,
      image:
        "/images/3-days-sahara-tour-marrakech-to-fes-via-merzouga-morocco-hero-image.jpg",
      title: "3 Day Sahara Desert Tour From Marrakech to Fes",
      itinerary: ["Toubkal", "Imlil"],
      link: "3-days-sahara-tour-marrakech-to-fes-via-merzouga-morocco",
    },
    {
      id: 4,
      image:
        "/images/3-day-2-night-camp-adventure-from-fes-to-marrakech-hero-image.jpg",
      title: "3 Days - 2 Overnight camp experience from Fes to Marrakech",
      itinerary: ["Essaouira", "Agadir"],
      link: "3-day-2-night-camp-adventure-from-fes-to-marrakech",
    },
    {
      id: 5,
      image:
        "/images/2-days-sahara-desert-tour-marrakech-to-zagora-morocco-hero-image.jpg",
      title: "2 Days Sahara Desert Tour from Marrakech to Zagora",
      itinerary: ["Marrakech", "Atlas Mountains", "Zagora"],
      link: "2-days-sahara-desert-tour-marrakech-to-zagora-morocco",
    },
    {
      id: 6,
      image:
        "/images/7-days-adventure-through-time-and-culture-morocco-hero-image.jpg",
      title: "Local Cuisine",
      itinerary: ["Casablanca", "Rabat"],
      link: "",
    },
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
                <ClientSideImage       src={tour.image}
                  alt={tour.title} className={""}/>
                {/* <img
                  src={tour.image}
                  alt={tour.title}
                /> */}
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
                  {tour.itinerary.map((city, index, array) => (
                    <React.Fragment key={city}>
                      <CityLink city={city} />
                      {index < array.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </p>
                <Link href={`/tours/${tour.link}`} passHref>
                  <span className="book-now">BOOK NOW</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
