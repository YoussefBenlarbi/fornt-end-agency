"use client";

import { useState } from "react";
import styles from "../ToursEnquiry.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import CTASection from "@/components/CTASection";
import TourHero from "@/components/TourHero";
import Accordion from "@/components/Accordion";
import TourEnquiryForm from "@/components/TourEnquiryForm";
import PopularDestinations from "@/components/PopularDestinations";
import PopularTours from "@/components/PopularTours";

export default function TwoDaysMoroccoDesertTourFromMarrakechToFes() {
  const destination = "2-Day Morocco Desert Tour from Marrakech to Fes";
  const destinations = [
    { name: "Marrakech", slug: "marrakech" },
    { name: "Casablanca", slug: "casablanca" },
    { name: "Fes", slug: "fes" },
    { name: "Chefchaouen", slug: "chefchaouen" },
    { name: "Sahara Desert", slug: "sahara-desert" },
    { name: "All tours", slug: "" },
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
        backgroundImage="http://localhost:8000/api/images/2-day-morocco-desert-tour-from-marrakech-to-fes.webp"
        category="Tours from Marrakech"
        title="2-Day Morocco Desert Tour from Marrakech to Fes"
        description="Embark on a journey of a lifetime with our captivating 2-day desert tour from Marrakech to Fes. Join us for an unforgettable adventure through the mesmerizing landscapes, where every moment is etched with the magic of Morocco. Immerse yourself in the rich cultural tapestry, experience the allure of the desert, and create lasting memories. Let us guide you through this extraordinary expedition, where the charm of Marrakech meets the enchantment of Fes, leaving you with an indelible mark of wonder and discovery."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="http://localhost:8000/api/images/2-day-morocco-desert-tour-from-marrakech-to-fes-hero-image.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>2 Days Tour</span>
                <h2 className={styles.tourTitle}>{destination}</h2>
                <p className={styles.tourLocation}>
                  <FaMapMarkerAlt /> Morocco
                </p>
              </div>
            </div>

            <div className={styles.itinerary}>
              <p>
                Come along with us on a thrilling 2-day adventure, immersing
                yourself in the mesmerizing landscapes of Morocco with our
                Merzouga Desert Tour from Fes to Marrakech.
              </p>
              <h3
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textDecorationColor: "gold",
                  textDecorationThickness: "4px",
                  marginTop: "20px",
                }}
              >
                Itinerary
              </h3>
              <Accordion
                title="Day 1 : Arrival at Marrakech - Drive to Ouirgane home stay in High Atlas Mountains:"
                firstState={true}
                content={
                  <>
                    <p>
                      Your adventure kicks off with a scenic drive through the
                      Atlas Mountains, revealing breathtaking views and
                      picturesque landscapes. En route, visit traditional Berber
                      villages and witness the authentic way of life. As you
                      approach the desert, the terrain transforms, offering a
                      glimpse of the vast and mesmerizing Sahara Desert.
                    </p>

                    <p>
                      Upon reaching Merzouga Desert, the gateway to the desert,
                      you'll be welcomed by the golden dunes and the unique
                      charm of the Sahara Desert. Take part in a camel trek to
                      witness the sunset over the dunes, casting a warm glow
                      over the vast desert expanse. The evening brings a
                      traditional Berber camp experience, complete with a
                      delicious dinner under the stars and local music to
                      enhance the desert ambiance.
                    </p>
                    <p>
                      Overnight in a Luxury Desert Camp
                      <strong> Merzouga Desert HB</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : High Atlas Mountains Trekking Experience with Picnic Lunch - Cooking class in the evening:"
                firstState={true}
                content={
                  <>
                    <p>
                      Wake up to the serene beauty of the Sahara Desert as the
                      sun paints the dunes with hues of gold and orange. After
                      breakfast, set out to explore more of the desert, with
                      opportunities for sandboarding and capturing incredible
                      photos amidst the ever-changing dunes.
                    </p>
                    <p>
                      Bid farewell to <strong>Merzouga Desert</strong> and begin
                      your return journey to Fes, stopping at noteworthy sites
                      along the way. Marvel at the Ziz Oasis impressive canyon
                      walls of Ziz Gorges and explore the little Switzerland
                      Ziz Gorges and explore the little Switzerland of Morocco
                      Ifrane. As you venture to Fes, reflect on the
                      unforgettable moments and experiences gained during this
                      immersive <strong>2-day desert adventure in Morocco</strong>.
                    </p>
                    <p>
                      <strong>
                        Drop off in your accommodation in <strong>Fes</strong>
                      </strong>
                    </p>
                  </>
                }
              />
              <div className={styles.inclusions}>
                <h3 style={{ fontWeight: "bold" }}>Inclusions</h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                  <li>Air-conditioned Vehicle</li>
                  <li>English speaking driver/guide</li>
                  <li>1 Night in Luxury Desert Camp</li>
                  <li>Traditional Music live show in desert</li>
                  <li>Camel ride (one camel per individual) </li>
                  <li>Meals as stated (HB) - Dinner & Breakfast included </li>
                </ul>
              </div>
              <h4 style={{ fontWeight: "bold" }}>Exclusions</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>Tips, entrance fees, drinks & personal items</li>
                <li>Lunch.</li>
                <li>Flight tickets</li>
              </ul>
              <h4 style={{ fontWeight: "bold" }}>Notes</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>
                  Our tours are open for further customization,{" "}
                  <a href="http://localhost:3000/contact-us">contact us </a> to
                  help you design your trip{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className={`${styles.column} ${styles.rightColumn}`}>
            <TourEnquiryForm tour_id={1} />
            <PopularDestinations destinations={destinations} />
            <PopularTours tours={popularTours} />
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
