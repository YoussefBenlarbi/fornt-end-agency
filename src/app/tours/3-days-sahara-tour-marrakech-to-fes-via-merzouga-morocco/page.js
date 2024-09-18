"use client";

import { useState } from "react";
import styles from "../ToursEnquiry.module.css";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TourHero from "@/components/TourHero";
import Accordion from "@/components/Accordion";
import TourEnquiryForm from "@/components/TourEnquiryForm";

export default function ThreeDaysSaharaTourMarrakechToFesViaMerzougaMoroccoPage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const destination =
    "3 Day Sahara Tour - Marrakech to Fes via Merzouga, Morocco";

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

  return (
    <div>
      <TourHero
        backgroundImage="https://www.escortedmoroccotours.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7y3hy4cc%2Fproduction%2F2140df7b75f079e56c2fb9a5ccb659fc057a031e-1920x1080.jpg&w=3840&q=75"
        category="Cultural Tour"
        title="3 Day Sahara Tour - Marrakech to Fes via Merzouga, Morocco"
        description="An immersion that takes you through some of the most beautiful and diverse landscapes in Morocco, including the High Atlas Mountains, the stunning Kasbah of Ait Ben Haddou, Ouarzazate the Hollywood of Africa and the breathtaking sand dunes of the Sahara desert Erg Chebbi. "
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <div className={styles.imageContainer}>
              <img
                src="https://i.ibb.co/q9y5s7R/f34688e0441a504fea22b8d86e64b36ab29572b7-2048x1536.jpg"
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
                title="Day 1 : Adventure from Marrakech to High Atlas Mountains, Ouarzazate, Roses Valley, and Boumalne Dades"
                content={
                  <>
                    <p>
                      We will start our 3 day Sahara Desert tour from{" "}
                      <strong>Marrakech</strong>
                      to the High Atlas Mountains, Ouarzazate, and Boumalne
                      Dades. Witness the majestic landscapes of Tizi n'Tichka
                      Pass and explore the famous{" "}
                      <strong>Aït Benhaddou Kasbah</strong>. Passinng through
                      the charming city of <strong>Ouarzazate</strong>, known as
                      the gateway to the Sahara Desert of Merzouga. Explore the
                      city's historical and cultural sites, including the Kasbah
                      Taourirt and Atlas Film Studio. End our day with a visit
                      to <strong>Boumalne Dades</strong>, located in the{" "}
                      <strong>Dades Gorges</strong>. Take a walk along the
                      gorges and admire the unique rock formations before
                      spending the night in a traditional riad or guesthouse.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Heading out towards the Sahara Desert via Tinghir, Todgha Gorges, and Arfoud on the Way to Merzouga."
                content={
                  <>
                    <p>
                      After breakfast, we drive to Tinghir; one of the most
                      trading positions for the caravans in the past, inside the
                      old city still the Jewish quarter and cemetery. We then
                      continue to Todgha Gorges; a 300m canyons towered by
                      rocks. A short walk inside the canyons before we drive to
                      Arfoud, the city of dates and fossils. We will reach
                      Merzouga Sahara Desert before the sunset and a quick stop
                      in the hotel at the sand dunes where you will switch the
                      car for the camels. The camel ride to your Desert Camp
                      will take 1h30 with stops for pictures in the middle of
                      the dunes. When you arrive the camp, hot shower, and
                      dinner followed by a traditional music live show around
                      the fire.
                    </p>
                    <p>
                      Overnight at a <strong>Desert</strong> camp inside the
                      dunes
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 3: From Sahara Desert to Fes via Ziz Oases, Midelt, Azrou Forest and Ifrane"
                content={
                  <>
                    <p>
                      Today, you will return to the hotel by camels or a 4x4 car
                      if you prefer. We will meet in the hotel and drive to
                      Arfoud city where we change direction toward the Ziz
                      Oases. A short break in panoramic view of the Oases and we
                      continue our way toward Midelt where we will stop for
                      lunch. Then, drive to Azrou Forest where we will visit the
                      Macaque Barbary Monkeys inside the forest. Next, we move
                      to Ifrane city nicknamed as a Switzerland of Morocco. A
                      pet stop in Ifrane before we drive to Fes; one of the
                      oldest medieval cities in the world. When we arrive.
                    </p>
                    <p>
                      we will drop you at your accommodation in{" "}
                      <strong>Fes</strong>.
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
            <TourEnquiryForm tour_id={3} />
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
