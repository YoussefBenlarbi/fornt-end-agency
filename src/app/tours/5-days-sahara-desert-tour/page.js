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

export default function FiveDaysSaharaDesertTourFromMarrakechToFes() {
  const destination = "5 Days Sahara Desert Tour from Marrakech to Fes";
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
        backgroundImage="http://localhost:8000/api/images/5-days-sahara-desert-tour.webp"
        category="Tour from Marrakesh"
        title="5 Days Sahara Desert Tour from Marrakech to Fes"
        description="Embark on an unforgettable 5 days guided tour through the Sahara desert in Morocco. Explore the vibrant cities Fes, Marrakesh, traditional Berber villages, and breathtaking natural landscapes as you make your way across the vast desert. With experienced guides and comfortable accommodations, this tour is the perfect blend of adventure and culture. "
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="http://localhost:8000/api/images/5-days-sahara-desert-tour-hero-image.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>5 Days Tour</span>
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
                title="Day 1 : Depart from Marrakech to Dades Valley via High Atlas Mountains, Ait-Benhaddou and Ouarzazate"
                firstState={true}
                content={
                  <>
                    <p>
                      Commencing your journey from Marrakech, embark on a scenic
                      drive through the picturesque High Atlas Mountains. The
                      first stop will be at the historic Kasbah of
                      Ait-Benhaddou, a UNESCO World Heritage Site, known for its
                      stunning architecture and as a popular film location for
                      movies such as Game of Thrones, Gladiator and Lawrence of
                      Arabia. This former fortress stronghold served as an
                      important stopover point on the old trade routes
                      connecting Sub-Saharan Africa to Marrakech. After visiting
                      the Kasbah, continue on to Ouarzazate, where you can opt
                      to visit the Touarirt Kasbah and Cinema Studios.
                    </p>
                    <p>
                      From Ouarzazate, travel along the road of thousand Kasbas
                      to reach the Dades Valley, passing through Skoura Oases,
                      the city of roses, and Berbere villages along the way.
                    </p>
                    <p>
                      Spend the night in the stunning{" "}
                      <strong> Dades Gorges</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : From Dades Valley to the Sahara Desert Merzouga via Tinghir, Todgha Gorges, Arfoud"
                content={
                  <>
                    <p>
                      After breakfast, drive to Tinghir, a former trading post
                      for caravans. Explore the Jewish quarter and cemetery
                      before continuing on to Todgha Gorges, a 300m canyon with
                      towering rocks. Take a short walk inside the canyon before
                      driving to Arfoud, known for its dates and fossils. Arrive
                      in Merzouga Desert just before sunset and switch from car
                      to camel for a 1h30 ride to your desert camp, with stops
                      for pictures along the way. Upon arrival, enjoy a hot
                      shower and dinner, followed by a traditional music show
                      around the fire.
                    </p>
                    <p>
                      Overnight at a desert camp in{" "}
                      <strong>Merzouga Desert</strong> (HB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 3 : Explore Merzouga life and traditions on a day Sahara Desert excursion"
                content={
                  <>
                    <p>
                      After witnessing the sunrise over the dunes, start your
                      day with breakfast and embark on a 4x4 off-roading tour of
                      the Sahara Desert. Visit Merzouga Oases, a Nomadic family
                      in their Berbere tent, the Gnawa Black people's village,
                      and a fossil site showcasing animal water fossils on the
                      surface of volcanic rocks. Enjoy a traditional lunch and
                      end the day at a hotel in the dune lines, where you can
                      relax by the pool and rest.
                    </p>
                    <p>
                      Overnight at a luxury desert camp in (HB){" "}
                      <strong>Merzouga Desert </strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 4 : From Sahara Desert to Fes via Ziz Oases, Midelt, Azrou forest and Ifrane"
                content={
                  <>
                    <p>
                      Return to the hotel by either camel or 4x4 car and set off
                      for Arfoud, where you will change direction towards the
                      Ziz Oases. Take a short break to admire the panoramic
                      views before continuing on to Midelt for lunch. Drive to
                      Azrou Forest to visit the Macaque Barbary Monkeys and then
                      on to Ifrane, nicknamed the "Switzerland of Morocco". Make
                      a pit stop in Ifrane before continuing to Fes, one of the
                      oldest medieval cities in the world. Upon arrival, you
                      will be dropped off at your accommodation in Fes.
                    </p>
                    <p>
                      Overnight in <strong>Fes'</strong> (BB).
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 5 : Fes city tour & Sightseeing"
                content={
                  <>
                    <p>
                      Today, join us on a comprehensive and guided city tour of
                      the renowned Old Medina of Fes. Experience all the
                      fascinating attractions that the Old Medina of Fes has to
                      offer, including the renowned handicrafts, the iconic
                      tanneries, the historic Al-Quaraouine University, the
                      captivating Madrasas, and the bustling narrow local
                      markets of the old city. This city tour is highly
                      customizable, catering to your individual preferences and
                      needs.
                    </p>
                    <p>
                      In the evening, be escorted by our knowledgeable local
                      city guide to your traditional Riad accommodation located
                      in the heart of the Old City of Fes. Enjoy your evening at
                      leisure and savor the peaceful ambiance of the city.
                    </p>
                    <p>
                      Overnight in <strong>Fes'</strong>  in a traditional Riad (BB) .
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
                <li>
                  Recommended accommodations for 4 nights: (3 HB and 1 BB)
                </li>
                <li>Camel ride</li>
                <li>Full day guided city tour of Fes</li>
                <li>Guided visit of the Roman Ruins</li>
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
                <a href="http://localhost:3000/contact-us">contact us </a> to
                help you design your trip{" "}
              </li>
            </ul>
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
