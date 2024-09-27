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
  const destination =
    "3 Day - 2 Overnight camp experience from Fes to Marrakech";
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
        backgroundImage="/images/3-day-2-night-camp-adventure-from-fes-to-marrakech.webp"
        category="Morocco Desert Tours from Fes"
        title="3 Day - 2 Overnight camp experience from Fes to Marrakech"
        description="Start an extraordinary 3-day, 2-night camp adventure from Fes to Marrakech, where every moment is a blend of cultural immersion and natural wonder. Traverse the enchanting landscapes of Morocco, savoring the unique charm of our overnight camps. From the historic city of Fes to the vibrant tapestry of Marrakech, this journey promises unforgettable experiences, rich with cultural discovery and the magic of starlit nights in the desert. Join us for an immersive exploration that will leave you enchanted and inspired."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="/images/3-day-2-night-camp-adventure-from-fes-to-marrakech-hero-image.jpg"
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
                      Merzouga Desert.{" "}
                    </p>
                    <p>
                      When we reach the Erg Chebbi dunes, we'll take a pit stop
                      at our hotel in the dune line and then start your camel
                      ride adventure to our camp within the dunes. The night
                      will be spent in a desert camp, where we'll enjoy a
                      traditional local music performance around the fire.
                    </p>
                    <p>
                      Overnight in a Desert Luxury camp in
                      <strong> Merzouga Desert HB</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Merzouga Desert Excursion and Tea with Nomads"
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
                      {" "}
                      After lunch, continue your desert excursion to one of the
                      most incredible sights, a seasonal lake in the middle of
                      the desert, a haven for desert birds like desert warblers
                      and flamingos. At the end of the day, relax at your hotel
                      in the dune lines and enjoy the breathtaking dune views
                      from your terrace.{" "}
                    </p>
                    <p>
                      For those seeking additional adventure, there are plenty
                      of optional desert sports and activities to choose from.
                      So, rest and rejuvenate, and we'll be ready to take you on
                      another exciting adventure tomorrow!
                    </p>
                    <p>
                      Overnight in a Desert Luxury camp in
                      <strong> Merzouga Desert HB</strong>.
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 3 : Leave Merzouga Desert and Head toward Marrakech"
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
                      {" "}
                      After lunch, continue your desert excursion to one of the
                      most incredible sights, a seasonal lake in the middle of
                      the desert, a haven for desert birds like desert warblers
                      and flamingos. At the end of the day, relax at your hotel
                      in the dune lines and enjoy the breathtaking dune views
                      from your terrace.{" "}
                    </p>
                    <p>
                      For those seeking additional adventure, there are plenty
                      of optional desert sports and activities to choose from.
                      So, rest and rejuvenate, and we'll be ready to take you on
                      another exciting adventure tomorrow!
                    </p>
                    <p>
                      Next, we will drive through the{" "}
                      <strong>High Atlas Mountains</strong> and Drop off in your
                      accommodation in <strong>Marrakech.</strong>
                    </p>
                  </>
                }
              />
              <div className={styles.inclusions}>
                <h3 style={{ fontWeight: "bold" }}>Inclusions</h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                  <li>Air-conditioned Vehicle</li>
                  <li>English speaking driver/guide</li>
                  <li>2 Night in Luxury Desert Camp</li>
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
