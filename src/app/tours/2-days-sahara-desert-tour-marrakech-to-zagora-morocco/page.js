"use client";

import { useState } from "react";
import styles from "../ToursEnquiry.module.css";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TourHero from "@/components/TourHero";
import Accordion from "@/components/Accordion";
import axios from "axios";

export default function TwoDaysSaharaDesertTourMarrakechToZagoraMoroccoPage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const destination = "2 Days Sahara Desert Tour Marrakech to Zagora Morocco";

  const destinations = [
    "Marrakech",
    "Casablanca",
    "Fes",
    "Chefchaouen",
    "Sahara Desert",
  ];

  const popularTours = [
    {
      title: "3 Day Sahara Desert Tour From Marrakech to Fes",
      destination: "Sahara Desert",
      image:
        "https://cdn.sanity.io/images/7y3hy4cc/production/f34688e0441a504fea22b8d86e64b36ab29572b7-2048x1536.jpg",
    },
    {
      title: "Marrakech City Tour",
      destination: "Marrakech",
      image:
        "https://cdn.sanity.io/images/7y3hy4cc/production/f34688e0441a504fea22b8d86e64b36ab29572b7-2048x1536.jpg",
    },
    {
      title: "Fes Cultural Experience",
      destination: "Fes",
      image:
        "https://cdn.sanity.io/images/7y3hy4cc/production/f34688e0441a504fea22b8d86e64b36ab29572b7-2048x1536.jpg",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    arrival_date: "",
    departure_date: "",
    number_of_travelers: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enquiryData = {
      tour_id: 1, // Assuming this is the tour ID for this page
      ...formData,
      status: "pending",
    };

    try {
      const API_ENDPOINT =
        process.env.NEXT_PUBLIC_API_ENDPOINT ||
        "http://localhost:8000/api/enquiry-data";
      const response = await axios.post(API_ENDPOINT, enquiryData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      // Check if the response is successful
      if (response.status >= 200 && response.status < 300) {
        alert("Enquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          arrival_date: "",
          departure_date: "",
          number_of_travelers: "",
          message: "",
        });
      } else {
        // Log the response for debugging
        console.error("Response status:", response.status);
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div>
      <TourHero
        backgroundImage="https://www.escortedmoroccotours.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7y3hy4cc%2Fproduction%2F2140df7b75f079e56c2fb9a5ccb659fc057a031e-1920x1080.jpg&w=3840&q=75"
        category="Cultural Tour"
        title="2 Days Sahara Desert Tour Marrakech to Zagora Morocco"
        description="A 2 days Morocco desert tour is a brief but exciting adventure that takes you through the stunning landscapes of the High Atlas Mountains to Daraa Valley towards the Sahara desert of Zagora. Stoping by Ait Ben-Haddou and Ouarzazate the cinema city, and experiencing traditional Berber culture, and Explore ancient berber villages, ride camels through the dunes, watch a breathtaking sunset and spend a night in a traditional nomadic tent under the starry sky."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <div className={styles.imageContainer}>
              <img
                src="https://i.ibb.co/xzMPdQH/Sahara-desert.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>Cultural Tour</span>
                <h2 className={styles.tourTitle}>{destination}</h2>
                <p className={styles.tourLocation}>
                  <FaMapMarkerAlt /> Morocco
                </p>
              </div>
            </div>

            <div className={styles.itinerary}>
              <h3
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textDecorationColor: "gold",
                  textDecorationThickness: "4px",
                }}
              >
                Itinerary
              </h3>
              <Accordion
                title="Day 1 : Adventure from Marrakech to High Atlas Mountains, Ouarzazate, Draa Valley, and Zagora"
                content={
                  <>
                    <p>
                      We will initiate our journey by picking you up from your
                      accommodation in Marrakech and embarking on a drive
                      through the picturesque High Atlas Mountain range via
                      <strong> Tizi N'tichka</strong>. Our destination will be
                      the Cinema Capital of Morocco,{" "}
                      <strong> Ouarzazate</strong>, where we will visit the
                      historic
                      <strong> Touarirt Casbah</strong> and, upon request, the
                      Cinema Studios. Subsequently, we will traverse the
                      Ait-Saouen Mountains, the <strong>Agdez city</strong>, and
                      the Draa Oases in route to Zagora desert. We aim to arrive
                      at <strong> Zagora</strong> prior to sunset and will
                      transfer you to a designated meeting point where you will
                      have the opportunity to embark on a camel ride to your
                      Berber desert camp.
                    </p>
                    <p>
                      An overnight stay is planned at a Berber desert camp in
                      <strong> Zagora</strong>, complete with a live Berber
                      music show.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Journey from Zagora to Draa Valley, Kasbah Ait-Benhaddou, High Atlas Mountains, and Back to Marrakech"
                content={
                  <>
                    <p>
                      After a nourishing breakfast, we will greet you at the
                      camp and embark on a journey through the picturesque{" "}
                      <strong>Draa Valley</strong> to reach the historical site
                      of Ksar/Kasbah <strong>Ait-Benhaddou</strong>. This UNESCO
                      World Heritage site has served as a backdrop for numerous
                      international films and television series, television
                      series, including Game of Thrones. We will take the
                      opportunity to visit the Kasbah before returning to
                      Marrakech, traveling through the majestic{" "}
                      <strong>Atlas Mountains</strong>.
                    </p>
                  </>
                }
              />
            </div>
            <div className={styles.inclusions}>
              <h3 style={{ fontWeight: "bold" }}>Inclusions</h3>
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>Air-conditioned Vehicle</li>
                <li>English speaking driver/guide</li>
                <li>Overnight in a desert camp dinner (HB)</li>
                <li>Camel ride</li>
              </ul>
            </div>
            <h4 style={{ fontWeight: "bold" }}>Exclusions</h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
              <li>Drinks and personal items.</li>
              <li>Lunch.</li>
              <li>Entry fees to monuments and historical sites.</li>
            </ul>
            <h4 style={{ fontWeight: "bold" }}>Notes</h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
              <li>
                Our tours are open for further customization,{" "}
                <a href="http://localhost:3000/tours">contact us </a> to help
                you design your trip{" "}
              </li>
            </ul>
          </div>

          <div
            className={styles.rightColumn}
            style={{ backgroundColor: "#F8F8F8" }}
          >
            <form className={styles.enquiryForm} onSubmit={handleSubmit}>
              <h3 style={{ fontWeight: "bold" }}>Request a quote now!</h3>
              <p className={styles.enquiryParagragh}>
                Let Us Take You on a Journey Through Time and Culture in Morocco
              </p>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="arrival_date"
                placeholder="Arrival Date"
                required
                value={formData.arrival_date}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="departure_date"
                placeholder="Departure Date"
                required
                value={formData.departure_date}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="number_of_travelers"
                placeholder="Number of Travelers"
                required
                min="1"
                value={formData.number_of_travelers}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>

              <button type="submit">Send Enquiry</button>
            </form>
            <div className={styles.destinationsList}>
              <h3 style={{ fontWeight: "bold" }}>Popular Destinations</h3>
              <ul>
                {destinations.map((dest, index) => (
                  <li key={index} className={styles.destinationItem}>
                    <a
                      href={`/destinations/${dest.toLowerCase()}`}
                      className={styles.destinationLink}
                    >
                      <span className={styles.destinationText}>{dest}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.popularTours}>
              <h3 style={{ fontWeight: "bold" }}>Popular Tours</h3>
              <ul className={styles.toursList}>
                {popularTours.map((tour, index) => (
                  <li key={index} className={styles.tourItem}>
                    <Link
                      href={`/tours/${tour.title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className={styles.tourLink}
                    >
                      <div className={styles.tourImageContainer}>
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className={styles.tourImage}
                        />
                      </div>
                      <div className={styles.tourInfo}>
                        <h4 className={styles.tourTitle}>{tour.title}</h4>
                        <p className={styles.tourDestination}>
                          <FaMapMarkerAlt />
                          <span>{tour.destination}</span>
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
