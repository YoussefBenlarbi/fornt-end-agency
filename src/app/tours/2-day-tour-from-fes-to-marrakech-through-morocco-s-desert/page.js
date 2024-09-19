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

export default function TwoDaysTourFromFesToMarrakechThroughMoroccoSDesert() {
  const destination =
    "2 Days Tour from Fes to Marrakech through Morocco's Desert";
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
        backgroundImage="http://localhost:8000/api/images/2-day-tour-from-fes-to-marrakech-through-morocco-s-desert.jpg"
        category="2 Days Private Desert Tour from Fes to Marrakech"
        title="2-Day Tour from Fes to Marrakech Through Morocco's Desert"
        description="Enjoy with us a mesmerizing 2-day journey through Morocco's Sahara Desert, traveling from Fes to Marrakech. Immerse yourself in the captivating beauty of the desert landscape, capturing unforgettable moments along the way. Join us for an enriching experience as we commence on a remarkable adventure through the heart of the Sahara, creating memories that will last a lifetime."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="http://localhost:8000/api/images/2-day-tour-from-fes-to-marrakech-through-morocco-s-desert-hero-image.jpg"
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
                      Your journey begins in Fes, a city steeped in history and
                      culture. Depart in the morning, traversing the Atlas
                      Mountains and exploring charming Berber villages along the
                      way. Marvel at the changing scenery, from lush valleys to
                      arid landscapes, as you approach the gateway to the Sahara
                      – <strong>Merzouga Desert</strong>.
                    </p>

                    <p>
                      Upon arrival, experience the magic of the desert with a{" "}
                      <strong>camel trek</strong> through the golden dunes.
                      Witness a breathtaking sunset over the{" "}
                      <strong>Sahara Desert</strong>, painting the sky in hues
                      of orange and pink. Your night in
                      <strong> Merzouga Desert</strong> includes a stay at a
                      Luxury traditional
                      <strong> Berber camp</strong>, complete with a delicious
                      dinner under the stars and the rhythmic beats of local
                      music.
                    </p>
                    <p>
                      Overnight in a Desert Luxury Camp
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
                      Wake up to the serenity of the desert at sunrise, a truly
                      magical experience. After breakfast, set out for the next
                      leg of your journey, passing through diverse landscapes
                      and stopping at iconic sites. Explore the Todra Gorge,
                      with its towering canyon walls, and visit the ancient
                      Kasbah of Ait Ben Haddou, a UNESCO World Heritage site.
                    </p>
                    <p>
                      As you continue toward Marrakech, the landscapes evolve,
                      providing a visual feast of mountains, valleys, and
                      traditional villages. Your 2-day Merzouga Desert Tour
                      concludes in Marrakech, leaving you with cherished
                      memories of an unforgettable adventure through the heart
                      of Morocco.
                    </p>
                    <p>
                      Join us for an immersive experience, where the charm of
                      Fes meets the enchantment of Merzouga Desert, and the
                      journey itself becomes a tapestry of culture, landscapes,
                      and the enduring spirit of the Sahara Desert.
                    </p>
                    <p>
                      <strong>
                        Drop off in your accomodzation in Marrakech
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
                  <li>Overnight in Luxury Desert Camp</li>
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
