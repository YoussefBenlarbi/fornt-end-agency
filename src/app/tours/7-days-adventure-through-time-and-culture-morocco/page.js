"use client";

import { useState } from "react";
import styles from "../ToursEnquiry.module.css";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TourHero from "@/components/TourHero";
import Accordion from "@/components/Accordion";
import TourEnquiryForm from "@/components/TourEnquiryForm";
import PopularDestinations from '@/components/PopularDestinations';
import PopularTours from '@/components/PopularTours';

export default function SevenDaysAdventureThroughTimeAndCultureMoroccoPage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const destination = "7 Days Adventure through time and Culture Morocco";

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
        backgroundImage="https://www.escortedmoroccotours.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F7y3hy4cc%2Fproduction%2F7c4e46bcc25badefb3ffc5f7e1d76b35639a07c7-1920x1080.jpg&w=3840&q=75"
        category="Cultural Tour"
        title="7 Days Adventure through time and Culture Morocco"
        description="Explore Morocco's rich history and vibrant culture with our 7-day tour. Visit ancient cities, trek the Sahara Desert, and experience local traditions."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="https://i.ibb.co/qFydJ9z/New-Project-2.webp"
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
                title="Day 1: Depart from Marrakech towards Dades Valley via High Atlas Mountains, Ait-Benhaddou and Ouarzazate"
                content={
                  <>
                    <p>
                      Commencing your journey from <strong>Marrakech</strong>,
                      embark on a scenic drive through the picturesque{" "}
                      <strong>High Atlas Mountains</strong>. The first stop will
                      be at the historic Kasbah of{" "}
                      <strong>Ait-Benhaddou</strong>, a UNESCO World Heritage
                      Site, known for its stunning architecture and as a popular
                      film location for movies such as Game of Thrones,
                      Gladiator and Lawrence of Arabia. This former fortress
                      stronghold served as an important stopover point on the
                      old trade routes connecting Sub-Saharan Africa to
                      Marrakech. After visiting the Kasbah, continue on to{" "}
                      <strong>Ouarzazate</strong>, where you can opt to visit
                      the Touarirt Kasbah and Cinema Studios. From Ouarzazate,
                      travel along the road of Thousand Kasbas to reach the{" "}
                      <strong>Dades Valley</strong>, passing through{" "}
                      <strong>Skoura Oases</strong>, the city of roses, and
                      Berbere villages along the way.
                    </p>
                    <p>
                      Spend the night in the stunning{" "}
                      <strong>Dades Gorges</strong>. (HB)
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2: From Dades Valley to Sahara Desert Merzouga via Tinghir, Todgha Gorges and Arfoud"
                content={
                  <>
                    <p>
                      After breakfast, drive to <strong>Tinghir</strong>, a
                      former trading post for caravans. Explore the Jewish
                      quarter and cemetery before continuing on to{" "}
                      <strong>Todgha Gorges</strong>, a 300m canyon with
                      towering rocks. Take a short walk inside the canyon before
                      driving to <strong>Arfoud</strong>, known for its dates
                      and fossils. Arrive in <strong>Merzouga Desert</strong>{" "}
                      just before sunset and switch from car to camel for a 1h30
                      ride to your desert camp, with stops for pictures along
                      the way. Upon arrival, enjoy a hot shower and dinner,
                      followed by a traditional music show around the fire.
                    </p>
                    <p>
                      Overnight in (HB) <strong>Merzouga Desert</strong> in a
                      desert camp in the dunes.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 3: Sahara Desert excursion – Merzouga life and traditions"
                content={
                  <>
                    <p>
                      After witnessing the sunrise over the dunes, start your
                      day with breakfast and embark on a 4x4 off-roading tour of
                      the <strong>Sahara Desert</strong>. Visit{" "}
                      <strong>Merzouga Oases</strong>, a Nomadic family in their
                      Berbere tent, the Gnawa Black people's village, and a
                      fossil site showcasing animal water fossils on the surface
                      of volcanic rocks. Enjoy a traditional lunch and end the
                      day at a hotel in the dune lines, where you can relax by
                      the pool and rest.
                    </p>
                    <p>
                      Overnight in (HB) <strong>Merzouga Desert</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 4: From Sahara Desert to Fes via Ziz Oases, Midelt, Azrou forest and Ifrane"
                content={
                  <>
                    <p>
                      Return to the hotel by either camel or 4x4 car and set off
                      for <strong>Arfoud</strong>, where you will change
                      direction towards the <strong>Ziz Oases</strong>. Take a
                      short break to admire the panoramic views before
                      continuing on to <strong>Midelt</strong> for lunch. Drive
                      to <strong>Azrou Forest</strong> to visit the Macaque
                      Barbary Monkeys and then on to <strong>Ifrane</strong>,
                      nicknamed the Switzerland of Morocco. Make a pit stop in
                      Ifrane before continuing to <strong>Fes</strong>, one of
                      the oldest medieval cities in the world. Upon arrival, you
                      will be dropped off at your accommodation in Fes.
                    </p>
                    <p>
                      Overnight in <strong>Fes</strong> (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 5: Fes city tour & Sightseeing"
                content={
                  <>
                    <p>
                      Today, join us on a comprehensive and guided city tour of
                      the renowned Old Medina of <strong>Fes</strong>.
                      Experience all the fascinating attractions that the Old
                      Medina of Fes has to offer, including the renowned
                      handicrafts, the iconic tanneries, the historic
                      Al-Quaraouine University, the captivating Madrasas,
                      and the bustling narrow local markets of the old city.
                      This city tour is highly customizable, catering to your
                      individual preferences and needs. In the evening, be
                      escorted by our knowledgeable local city guide to your
                      traditional Riad accommodation located in the heart of the
                      Old City of Fes. Enjoy your evening at leisure and savor
                      the peaceful ambiance of the city.
                    </p>
                    <p>
                      Overnight stay in <strong>Fes</strong> in the traditional
                      Riad (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 6: From Fes to Chefchaouen via Meknes, Volubilis and Rif Mountains"
                content={
                  <>
                    <p>
                      Join us for another exciting day tour as we drive to the
                      imperial city of <strong>Meknes</strong>. Meknes is
                      renowned for being the most fortified old city in Morocco
                      and is home to several captivating landmarks, including
                      the Bab Mansour, the grandiose granaries, and the city's
                      most significant highlights. Following our visit to
                      Meknes, we will make our way to the UNESCO World Heritage
                      site of <strong>Volubilis</strong>, the Roman Ruins.
                      Admire the ancient architectural remains before we embark
                      on a scenic drive through the picturesque{" "}
                      <strong>Rif mountains</strong> to reach the enchanting
                      Blue City of <strong>Chefchaouen</strong> by the evening.
                      Enjoy some well-deserved rest and spend your evening at
                      leisure in this beautiful and tranquil city.
                    </p>
                    <p>
                      Overnight accommodation in <strong>Chefchaouen</strong> is
                      provided in a traditional Riad (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 7: Chefchaouen at leisure and optional hiking activity trip to Akchor Waterfalls"
                content={
                  <>
                    <p>
                      Today, enjoy a day of leisure in the charming Blue City of{" "}
                      <strong>Chefchaouen</strong>. For those seeking an
                      adventure, we offer an optional excursion to the
                      breathtaking <strong>Akchor Waterfalls</strong>, located
                      within the lush Rif Mountains. This scenic destination is
                      ideal for hiking and offers a serene resort area to unwind
                      and relax amidst the tranquil surroundings of the
                      waterfalls and natural water pools.
                    </p>
                    <p>
                      Overnight accommodation in <strong>Chefchaouen</strong> is
                      provided in a traditional Riad (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 8: From Chefchaouen to Casablanca via Rif Mountains and Rabat"
                content={
                  <>
                    <p>
                      Depart from <strong>Chefchaouen</strong> in the morning
                      and embark on a scenic journey through the{" "}
                      <strong>Rif Mountains</strong> to reach{" "}
                      <strong>Rabat</strong>, the current capital of Morocco.
                      Discover the iconic landmarks of Rabat, including the
                      unfinished Hassan Mosque, the historic Ouadaya Kasbahs,
                      and other significant highlights of the city. Next, we
                      will make our way to <strong>Casablanca</strong>, the
                      largest city in Morocco. Here, we will visit the grand
                      Hassan 2 Mosque, the largest mosque in the country, and
                      for those seeking a cultural experience, we will also
                      visit the famous Rick's Café.
                    </p>
                    <p>
                      At the end of a fulfilling day, our tour comes to a close
                      as we drop you off at your hotel in{" "}
                      <strong>Casablanca</strong>, providing a memorable
                      conclusion to your Moroccan adventure.
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
                  Recommended accommodations for 6 nights: (2 HB and 4 BB)
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
                <a href="http://localhost:3000/contact-us">contact us </a> to help
                you design your trip{" "}
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
