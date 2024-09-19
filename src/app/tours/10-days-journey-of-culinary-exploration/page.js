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

export default function TenDaysJourneyOfCulinaryExploration() {
  const destination = "10 Days Journey of Culinary Exploration";
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
        backgroundImage="http://localhost:8000/api/images/10-days-journey-of-culinary-exploration.webp"
        category="Escorted Morocco Tours Discover Morocco : A Unique Cultural Expedition"
        title="10 Days Journey of Culinary Exploration"
        description="Experience the essence of Morocco on our unique cultural tour. Led by locals, explore vibrant markets, ancient medinas, and picturesque villages. From cooking classes to trekking adventures, immerse yourself in the rich heritage of this enchanting country. Join us for an unforgettable journey through Morocco's diverse landscapes and warm hospitality. "
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="http://localhost:8000/api/images/10-days-journey-of-culinary-exploration-home-image.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>10 Days Tour</span>
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
                      We eagerly anticipate your arrival at Marrakech airport,
                      where we'll whisk you away to the enchanting heart of the
                      Atlas Mountains. Our accommodations for the night will be
                      at a charming local guest house. You'll enjoy a delightful
                      dinner and spend the night in Ouirgane.
                    </p>

                    <p>
                      Overnight in
                      <strong> Ouirgane (HB)</strong>.
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
                      We will start our day with unforgettable trekking
                      adventure amidst the breathtaking landscapes of Ouirgane
                      village nestled in the High Atlas Mountains. As you set
                      off on your journey, you'll be captivated by the rugged
                      beauty of the terrain, with towering peaks and verdant
                      valleys stretching out before you.
                    </p>
                    <p>
                      Traverse winding trails that lead you through traditional
                      Berber villages, where you'll have the opportunity to
                      immerse yourself in local culture and hospitality. Along
                      the way, your senses will be delighted by the sights and
                      sounds of nature, from cascading waterfalls to the
                      chirping of birds in the lush forests.
                    </p>
                    <p>
                      After a morning of exploration, pause to enjoy a
                      picturesque picnic lunch surrounded by stunning panoramic
                      views. Savor the flavors of freshly prepared local
                      delicacies while basking in the tranquility of your
                      natural surroundings. With renewed energy, trek back to
                      your accommodation, soaking in the beauty of the High
                      Atlas Mountains at every turn. Whether you're a seasoned
                      hiker or a novice adventurer, this experience promises to
                      leave you with memories to last a lifetime. Once you get
                      back to your accommodation you will be granted some time
                      to refreshen up and in the evening you will be enjoying an
                      authentic local cooking class in your stay as you will be
                      tutored by a local berbers on preparing a traditional
                      local Moroccan meal which will be your dinner
                    </p>
                    <p>
                      Overnight in
                      <strong> Ouirgane (HB)</strong>.
                    </p>
                  </>
                }
              />
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
