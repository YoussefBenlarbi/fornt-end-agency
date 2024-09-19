"use client";

import { useState } from "react";
import styles from "../ToursEnquiry.module.css";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TourHero from "@/components/TourHero";
import Accordion from "@/components/Accordion";
import TourEnquiryForm from "@/components/TourEnquiryForm";
import PopularDestinations from "@/components/PopularDestinations";
import PopularTours from "@/components/PopularTours";

export default function EightDaysImperialSaharaDesertTourFromMarrakechToTangier() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const destination =
    "8 Days Imperial Sahara Desert Tour from Marrakech to Tangier";

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
        backgroundImage="http://localhost:8000/api/images/8-days-imperial-sahara-desert-tour-from-marrakesh-to-tangier.webp"
        category="Imperial Cities & Sahara Desert"
        title="8 Days Imperial Sahara Desert Tour from Marrakech to Tangier"
        description="Join us on an unforgettable journey through the heart of Morocco on our Desert and Imperial Tour from Marrakech. Immerse yourself in the vibrant culture, fascinating history, and breathtaking landscapes of this enchanting country. From the bustling streets of Marrakech to the vast expanse of the Sahara Desert, you'll explore ancient cities, visit traditional Berber villages, and discover the architectural wonders of imperial cities such as Fez and Meknes"
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="http://localhost:8000/api/images/8-days-imperial-sahara-desert-tour-from-marrakesh-to-tangier-hero-image.jpg"
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
              <p>
                Embark on an exhilarating{" "}
                <strong>2-day Morocco desert adventure</strong>, traversing the
                captivating landscapes from <strong>Marrakech</strong> to{" "}
                <strong>Merzouga Desert</strong>, Morocco. This carefully
                crafted journey promises an immersive experience, allowing you
                to delve into the rich cultural tapestry of the region. Begin
                your expedition in Marrakech, where the vibrant energy of the
                city sets the stage for the adventure ahead.
              </p>
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
                title="Day 1 : Depart from Marrakech towards Dades Gorges via Atlas Mountains, Ait Benhaddou and Ouarzazate"
                firstState={true}
                content={
                  <>
                    <p>
                      We will pick you up from your Riad or Hotel in{" "}
                      <strong>Marrakech</strong>
                      and embark on a journey to the{" "}
                      <strong>High Atlas Mountains</strong>, North Africa's
                      highest mountain range, passing through beautiful fertile
                      valleys along the way. We will cross the Tizi N'Tichka
                      Pass, at an elevation of 2260 meters, and drive through
                      dramatic Berber villages and the Ounila Valley to reach
                      the famous <strong>Kasbah of Ait-Benhaddou</strong>. This
                      fortified village dates back to the 12th century and its
                      buildings were recognized by UNESCO in 1987.
                    </p>
                    <p>
                      The Kasbah is also famous for being a backdrop for many
                      international movies and series, such as Gladiator and
                      Game of Thrones. We will escort you to the Kasbah and take
                      you on a tour to explore this authentic and traditional
                      site. You will walk through its small mud-brick alleys to
                      reach the granaries, the most fortified spot in the
                      Kasbah. After a lunch break at a local restaurant near the
                      Kasbah, we will continue our journey to{" "}
                      <strong>Ouarzazate</strong>, known as the Cinema Capital
                      of<strong> Morocco</strong>, with its movie studios and
                      sets.
                    </p>
                    <p>
                      In the center of the city, we will visit the ancient
                      Kasbah of Tourirt, a charming pit stop before we continue
                      on to the Valley of Roses through the "Road of Thousand
                      Kasbahs." We will then drive through the Valley of Roses
                      to reach the <strong>Dades Valley</strong>, a region of
                      stunning landscapes filled with fields of wheat, walnuts,
                      and figs. At the end of the day, we will drop you off at
                      your Riad or Hotel in the <strong>Dades Valley</strong>.
                    </p>
                    <p>
                      <strong>
                        Overnight in a Luxury Desert Camp in Merzouga Desert. HB
                      </strong>
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : From Dades Gorges to the Sahara Desert Merzouga via Tinghir, Todgha Gorges and Arfoud"
                content={
                  <>
                    <p>
                      We'll meet once again at your Riad or hotel in the{" "}
                      <strong>Dades Valley</strong>, and start our journey
                      through the breathtaking landscapes. Our first stop will
                      be the town of Tinerhir, which was once a bustling transit
                      hub for miners and a key trading center for caravans. A
                      short drive from the town, you'll come across a palm oasis
                      and the abandoned 19th-century village.
                    </p>
                    <p>
                      Next, we'll head to <strong>Todgha Gorges</strong>, where
                      300m-high orange canyons, filled with a crystal-clear
                      river, run through the limestone cliffs. Our journey to
                      the desert continues, taking us through the{" "}
                      <strong>Anti-Atlas Mountains</strong>, dotted with Berber
                      towns, villages, and oases. During the drive, you'll
                      encounter nomads tending to their sheep, goats, and
                      camels.
                    </p>
                    <p>
                      We'll then arrive in the small city of Erfoud, a fossil
                      town and one of Morocco's largest exporters of dates. A
                      40-minute drive from Erfoud will take us to the{" "}
                      <strong>Merzouga</strong>
                      Desert, also known as one of the last paradises on Earth.
                      We'll arrive at a hotel in the dune line just before
                      sunset, giving you time to relax and make use of the
                      facilities before joining your camels. Our camel guide
                      will escort you through the Erg Chebbi dunes, making a
                      memorable stop at the highest dune to enjoy the
                      spectacular sunset. After the sunset, you'll continue your
                      camel trek to the desert camp where you'll be greeted with
                      traditional Berber music performed live around the
                      campfire.
                    </p>
                    <p>
                      Overnight at a luxury desert camp in{" "}
                      <strong>Merzouga Desert</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 3 : Merzouga Desert Excursion and Sightseeing"
                content={
                  <>
                    <p>
                      Join us on a mesmerizing journey through Morocco's Erg
                      Chebbi sand dunes and the Merzouga Desert, one of
                      Morocco's most stunning attractions. We'll pick you up
                      from your desert camp and set out to explore. Our first
                      stop is at a Nomad's tent, where you'll enjoy a
                      traditional cup of tea and learn about their rich culture
                      and way of life. Then, visit one of the oldest coal mines
                      in Mfis village, a remnant from the French occupation.
                      Next, discover the Khamlia village, home to descendants of
                      escaped slaves and famous for their traditional Gnaoua
                      music. Enjoy a live show before a delicious lunch at a
                      local Berber Pizza restaurant. After lunch, continue your
                      desert excursion to one of the most incredible sights, a
                      seasonal lake in the middle of the desert, a haven for
                      desert birds like desert warblers and flamingos. At the
                      end of the day, relax at your hotel in the dune lines and
                      enjoy the breathtaking dune views from your terrace. For
                      those seeking additional adventure, there are plenty of
                      optional desert sports and activities to choose from.
                      Next, we will take you with a 4wd car through the dunes to
                      our desert luxury camp.
                    </p>
                    <p>
                      Overnight at a luxury desert camp in{" "}
                      <strong>Merzouga Desert (HB)</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 4 : From Merzouga Desert to Fes via Rissani, Ziz Oasis and Ifrane"
                content={
                  <>
                    <p>
                      Embark on a magical journey through Morocco, starting with
                      a breathtaking sunrise hike to the tallest sand dune near
                      the camp. Admire the sun shining on the golden dunes and
                      return to the camp for a refreshing shower and delicious
                      breakfast. Then, get ready to be picked up and continue
                      towards the historic city of Fes. Our first stop is the
                      bustling town of <strong>Rissani</strong>, where you'll
                      visit the bustling Souq, a local market filled with a
                      variety of local products like dates, vegetables, and
                      more. Then, we'll drive through the lush{" "}
                      <strong>Ziz Oases</strong>, dotted with dramatic palm
                      groves along the <strong>Ziz Valley</strong>, the life
                      source of all Berber villages in the area. Cross the
                      awe-inspiring Ziz gorges and stop in Midelt, the "Apple
                      city", for a delicious lunch at a local restaurant. Later,
                      experience the stunning beauty of the{" "}
                      <strong>Middle Atlas Mountains</strong>, a snowy mountain
                      range, and visit the majestic cedar trees forest, home to
                      the playful Barbary Apes. Not far from the forest lies the
                      picturesque city of Ifrane, built during the French
                      occupation, with its charming European-style architecture.
                      Finally, we'll arrive in <strong>Fes</strong> and drop you
                      off at your Riad in the heart of the old city, where your{" "}
                      <strong>Morocco</strong> adventure continues to shine.
                    </p>
                    <p>
                      Overnight in <strong>Fes'</strong> (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 5 : Fes Old City Walking Tour & Sightseeingg"
                content={
                  <>
                    <p>
                      Today, we will enjoy a full-day walking tour of the
                      historic city of Fes with an experienced local guide. As
                      we explore the ancient streets of <strong>Fes</strong>, it
                      will feel like stepping back in time to a world of
                      traditional charm and heritage.
                    </p>
                    <p>
                      We will visit the famous Blue Gate, known as Bab Bou
                      Jloud, which serves as the entrance to the Medina from the
                      west. Our next stop will be the Quaraouine Mosque, one of
                      the oldest universities in the world. After that, we will
                      visit the Madrassa Bou Inania, one of{" "}
                      <strong>Fes'</strong> finest theological colleges.
                    </p>
                    <p>
                      We will then stroll through the Medina Souks, the oldest
                      marketplace in <strong>Fes</strong>, where you can find
                      unique handcrafted goods and souvenirs. Our tour will
                      continue to the Tanneries, one of <strong>Fes'</strong>{" "}
                      most iconic sights, where you can witness the traditional
                      process of producing high-quality leather that has
                      remained unchanged since medieval times.
                    </p>
                    <p>
                      Our guide will be there to assist you should you wish to
                      see or discover anything else in the city. At the end of
                      the tour, our guide will escort you back to your Riad in
                      <strong>Fes</strong>.
                    </p>
                    <p>
                      Overnight stay in <strong>Fes'</strong> old city (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 6 : From Fes to Chefchaouen via Meknes, Volubilis and Rif Mountains"
                content={
                  <>
                    <p>
                      Your historic experience grandeur of Morocco's most
                      imperial tour will start today with a departure from your
                      Riad or Hotel in Fes, we'll take you to the fortified city
                      of Meknes, which was built in the 17th century. During the
                      tour, you will explore the El-Hedim Square, the heart of
                      the Meknes Medina, and witness the stunning Bab El-Mansour
                      gate. We will also visit the Heri Es-Souani, a
                      breathtaking lake with an underground water system.
                    </p>
                    <p>
                      Our next stop will be the Roman ruins of Volubilis,
                      established by Carthaginian traders in the 3rd century BC
                      and once a remote outpost of the Romans. The tour will
                      also include the holy city of Moulay Idriss, located in
                      the scenic Zerhoun Mountains.
                    </p>
                    <p>
                      We will then drive through the beautiful fields of barley
                      and wheat, cross the Rif Mountains, and arrive at the
                      famed blue-washed city of Chefchaouen. We'll drop you off
                      at your accommodation in the blue streets of the city,
                      allowing you to explore the charming city at your leisure
                      and discover the rich cultural and historical treasures of
                      <strong>Morocco</strong>.
                    </p>
                    <p>
                      Overnight in <strong>Chefchaouen</strong> (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 7 : From Chefchaouen to Tangier via Rif Mountains and Tetouan"
                content={
                  <>
                    <p>
                      Today, we'll depart the Blue City in the morning and
                      journey through the verdant <strong>Rif Mountains</strong>
                      . Our first stop will be at <strong>Tetouan</strong>,
                      nicknamed the "White Dove City" due to its white buildings
                      on a mountain top.
                    </p>
                    <p>
                      We'll then continue our journey through the{" "}
                      <strong>Rif Mountains</strong>
                      to reach <strong>Tangier</strong>, Europe's gateway to
                      Africa. We'll visit the Medina, which is one of{" "}
                      <strong>Tangier's </strong>main attractions, with its maze
                      of 15th century-era walls and alleyways. Tangier offers
                      stunning views, including the Cap Spartel, where the
                      Atlantic Ocean and Mediterranean Sea meet.
                    </p>
                    <p>
                      After that,we'll visit the Hercules Caves, a stunning rock
                      formation and cave system formed by the force of ocean
                      waves against the sea cliffs.
                    </p>
                    <p>
                      At the end of the day, we'll return to the old Medina,
                      where we'll spend the night.
                    </p>

                    <p>
                      Overnight in <strong>Tangier</strong> (BB).
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 8 : Tangier at leisure & Transfer to Tangier Airport/Port"
                content={
                  <>
                    <p>
                      At the end of your <strong>Morocco</strong> tour, our
                      driver and guide will be available for further sightseeing
                      of Tangier city before your transfer to{" "}
                      <strong>Tangier</strong> airport or port. This additional
                      exploration will provide you with the opportunity to
                      experience more of <strong>Tangier</strong>'s cultural and
                      historical landmarks. Ensure you make the most of your
                      last moments in <strong>Morocco</strong>.
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
