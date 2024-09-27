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

export default function DiscoverMorocco2DayFesToFesMerzougaDesertAdventure() {
  const destination =
    "Discover Morocco 2 Day Fes to Fes Merzouga Desert Adventure";
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
        backgroundImage="/images/discover-morocco-2-day-fes-to-fes-merzouga-desert-adventure.webp"
        category="Fes to Fes: Embark on a 2-Day trip through Morocco's Merzouga Desert Bliss"
        title="Discover Morocco: 2-Day Fes to Fes Merzouga Desert Adventure"
        description="Come along with us on an unforgettable 2-day journey with our Fes to Fes Merzouga Desert Tour in Morocco. Immerse yourself in the enchanting landscapes, rich culture, and captivating experiences of the Sahara. Join us for a curated adventure, where every moment is a step into the heart of Morocco's desert beauty."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="/images/discover-morocco-2-day-fes-to-fes-merzouga-desert-adventure-hero-image.jpg"
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
                Join us on an extraordinary 2-day Merzouga Desert Tour from Fes,
                a curated journey that promises to immerse you in the
                captivating landscapes and cultural richness of Morocco.
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
                title="Day 1 : Fes to Merzouga Desert:"
                firstState={true}
                content={
                  <>
                    <p>
                      Your Morocco adventure begins in the historic city of Fes,
                      where you'll traverse the Atlas Mountains, unveiling
                      picturesque scenes and traditional Berber villages along
                      the way. As the landscapes shift from lush valleys to the
                      arid beauty of the desert, you'll arrive in Merzouga
                      Desert, the gateway to the Sahara Desert.
                    </p>
                    <p>
                      Experience the magic of the desert with a camel trek
                      through golden dunes, witnessing a breathtaking sunset.
                      Spend the night in a Luxury Berber camp, relishing a
                      delightful dinner beneath the stars, accompanied by the
                      rhythmic beats of local music.
                    </p>
                    <p>
                      Overnight in a Desert Luxury Camp in{" "}
                      <strong>Merzouga Desert</strong>. (HB)
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2: Merzouga Desert to Fes"
                firstState={true}
                content={
                  <>
                    <p>
                      Wake up to the serene beauty of the Sahara Desert at
                      sunrise, setting the tone for another day of exploration.
                      After breakfast, venture through diverse landscapes. As
                      you journey back to Fes, the scenery unfolds in a visual
                      symphony of mountains, valleys, and historic villages.
                      Concluding your 2-day Merzouga Desert Tour, you'll return
                      to Fes, bringing with you cherished memories of an
                      immersive adventure through Morocco's heart. This curated
                      experience blends the charm of Fes with the enchantment of
                      Merzouga, creating a tapestry of culture, landscapes, and
                      the enduring spirit of the Sahara Desert. Join us for a
                      journey that transcends the ordinary, where every moment
                      is a step into the soul-stirring beauty of Morocco's
                      desert landscape.
                    </p>
                    <p>
                      Drop off in your accommodation in <strong>Fes</strong>.
                    </p>
                  </>
                }
              />

              <div className={styles.inclusions}>
                <h3 style={{ fontWeight: "bold" }}>Inclusions</h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                  <li>Overnight in a Desert Luxury Camp in Merzouga Desert (HB)</li>
                  <li>Drop off in your accommodation in Fes</li>
                  <li>Air-conditioned vehicle</li>
                  <li>English Speaking driver/guide</li>
                  <li>1 Night in Luxury Desert Camp</li>
                  <li>Traditional Music live show in desert</li>
                  <li>Camel ride (one camel per individual)</li>
                  <li>Meals as stated (HB) - Dinner & Breakfast included</li>
                </ul>
              </div>
              <h4 style={{ fontWeight: "bold" }}>Exclusions</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>Tips, entrance fees, drinks & personal items</li>
                <li>Lunch</li>
                <li>Flight tickets</li>
              </ul>
              <h4 style={{ fontWeight: "bold" }}>Notes</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>
                  Our tours are open for further customization,{" "}
                  <a href="http://localhost:3000/contact-us" style={{ color: 'gold', fontWeight: 'bold', textDecoration: 'underline' }}>contact us</a> to
                  help you design your tour.
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
