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

export default function ExploreMerzougaDesertA3Day2NightAdventure() {
  const destination = "Explore Merzouga Desert : A 3-Day, 2-Night Adventure";
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
        backgroundImage="/images/explore-merzouga-desert-a-3-day-2-night-adventure.webp"
        category="Tour from Fes"
        title="Explore Merzouga Desert: A 3-Day, 2-Night Adventure"
        description="Come along with us on an extraordinary journey with our 3-day, 2-night Morocco Desert Tours from Fes. Immerse yourself in the rich tapestry of Morocco's diverse landscapes as you traverse the enchanting desert terrain. From the historic city of Fes to the vast expanse of the desert, this adventure promises an unforgettable blend of culture, history, and natural beauty. Discover the magic of ancient traditions, experience the warmth of local hospitality, and create lasting memories against the backdrop of the mesmerizing Moroccan desert. Join us for a transformative exploration that will leave you captivated by the allure of this fascinating destination."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="/images/explore-merzouga-desert-a-3-day-2-night-adventure-hero-image.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>3 Days Tour</span>
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
                title="Day 1 : Early Departure and Drive to Merzouga Desert via Ifrane, Midelt, and Ziz Valley:"
                firstState={true}
                content={
                  <>
                    <p>
                      Early in the morning, we'll meet you at your Riad and set
                      off for the Merzouga Desert. Our first stop will be in
                      Ifrane, known as the "Switzerland of Morocco" due to its
                      clean, modern, and well-ordered appearance. A few
                      kilometers from the city is the cedar tree forest of
                      Azrou, home to the Barbary apes, a type of Macaque. We'll
                      take some time to observe these fascinating creatures
                      before we hit the road again.
                    </p>

                    <p>
                      Our next stop is Midelt, the "country of apples," where
                      we'll have lunch before heading towards the Atlas
                      Mountains, following the Ziz Valley. We'll arrive at the
                      city of Er-Rachidia, which is the gateway to the desert
                      and southern Morocco.
                    </p>
                    <p>
                      We'll continue driving south, passing through the Ziz
                      Oasis, filled with palm groves and Berber villages along
                      the way, until we reach Erfoud. This city is famous for
                      its fossils that date back hundreds of millions of years,
                      and it's the last stop before our final destination, the
                      Merzouga Desert.
                    </p>
                    <p>
                      When we reach the Erg Chebbi dunes, we'll take a pit stop
                      at our hotel in the dune line and then start your camel
                      ride adventure to our camp within the dunes. The night
                      will be spent in a desert camp, where we'll enjoy a
                      traditional local music performance around the fire.
                    </p>

                    <p>
                      Overnight in a luxury desert Camp in{" "}
                      <strong> Merzouga Desert</strong> (HB)
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Merzouga Desert Excursion and Tea with Nomads:"
                firstState={true}
                content={
                  <>
                    <p>
                      Join us on a mesmerizing journey through Morocco's Erg
                      Chebbi sand dunes and the Merzouga Desert, one of
                      Morocco's most stunning attractions. We'll pick you up
                      from your Sahara Desert Camp and set out to explore.
                    </p>
                    <p>
                      Our first stop is at a Nomad's tent, where you'll enjoy a
                      traditional cup of tea and learn about their rich culture
                      and way of life. Then, visit one of the oldest coal mines
                      in Mfis village, a remnant from the French occupation.
                      Next, discover the Khamlia village, home to descendants of
                      escaped slaves and famous for their traditional Gnaoua
                      music. Enjoy a live show before a delicious lunch at a
                      local Berber Pizza restaurant.
                    </p>
                    <p>
                      After lunch, continue your desert excursion to one of the
                      most incredible sights, a seasonal lake in the middle of
                      the desert, a haven for desert birds like desert warblers
                      and flamingos. At the end of the day, relax at your hotel
                      in the dune lines and enjoy the breathtaking dune views
                      from your terrace.
                    </p>
                    <p>
                      For those seeking additional adventure, there are plenty
                      of optional desert sports and activities to choose from.
                      So, rest and rejuvenate, and we'll be ready to take you on
                      another exciting adventure tomorrow!
                    </p>

                    <p>
                      Overnight in a luxury desert Camp in{" "}
                      <strong> Merzouga Desert</strong> (HB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 3 : Leave Merzouga Desert and Head back toward Fes:"
                content={
                  <>
                    <p>
                      Today, we will continuie our magical journey through
                      Morocco, starting with a breathtaking sunrise hike to the
                      tallest sand dune near the camp. Admire the sun shining on
                      the golden dunes and return to the Desert Camp for a
                      refreshing shower and delicious breakfast. Then, get ready
                      to be picked up and continue towards the historic city of
                      Fes.
                    </p>
                    <p>
                      Our first stop is the bustling town of Rissani, where
                      you'll visit the bustling Souq, a local market filled with
                      a variety of local products like dates, vegetables, and
                      more. Then, we'll drive through the lush Ziz Oases, dotted
                      with dramatic palm groves along the Ziz Valley, the life
                      source of all Berber villages in the area. Cross the
                      awe-inspiring Ziz Gorges and stop in Midelt, the "Apple
                      city", for a delicious lunch at a local restaurant.
                    </p>
                    <p>
                      Later, experience the stunning beauty of the Middle Atlas
                      Mountains, a snowy mountain range, and visit the majestic
                      cedar trees forest, home to the playful Barbary Apes. Not
                      far from the forest lies the picturesque city of Ifrane,
                      built during the French occupation, with its charming
                      European-style architecture.
                    </p>
                    <p>
                      Finally, we'll arrive in Fes and drop you off at your Riad
                      in the heart of the old city, where your Morocco adventure
                      continues to shine.
                    </p>
                  </>
                }
              />
              <div className={styles.inclusions}>
                <h3 style={{ fontWeight: "bold" }}>Inclusions</h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                  <li>Air-conditioned Vehicle</li>
                  <li>English speaking driver/guide</li>
                  <li>Traditional Music live show in desert</li>
                  <li>2 Night in Luxury Desert Camp</li>
                  <li>Camel ride (one camel per individual)</li>
                  <li>Meals as stated (HB) - Dinner & Breakfast included</li>
                </ul>
              </div>
              <h4 style={{ fontWeight: "bold" }}>Exclusions</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>Tips, entrance fees, drinks & personal items </li>
                <li>Lunch.</li>
                <li>Flight tickets .</li>
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
