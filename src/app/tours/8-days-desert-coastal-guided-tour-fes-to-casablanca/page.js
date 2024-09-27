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

export default function EightDaysDesertCoastalGuidedTourFesToCasablanca() {
  const destination = "8 Days Desert Coastal Guided Tour Fes to Casablanca";
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
        backgroundImage="/images/8-days-desert-coastal-guided-tour-fes-to-casablanca.webp"
        category="Tour from Fes"
        title="8 Days Desert - Coastal Guided Tour - From Fes to Casablanca"
        description="From the High Atlas Mountains to the Sahara Desert, and from the ancient Kasbah of Ait-Benhaddou to the vibrant cities of Marrakech and Fez, Our guided tour will take you on a journey of a lifetime. Discover the canyons and the charming coastal town of Essaouira."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="/images/8-days-desert-coastal-guided-tour-fes-to-casablanca-hero-image.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>8 Days Tour</span>
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
                title="Day 1 : Discover the Wonders of Fes, Ifrane, Midelt, Arfoud, and Merzouga Desert"
                firstState={true}
                content={
                  <>
                    <p>
                      Embark on a thrilling journey towards the Merzouga Desert.
                      First, we'll visit the charming city of Ifrane, known as
                      the "Switzerland of Morocco," nestled in the Middle Atlas
                      Mountains. Then, we'll explore the lush cedar tree forest
                      of Azrou and meet the Barbary apes.
                    </p>
                    <p>
                      After lunch in Midelt, "the apple capital," we'll travel
                      through the Atlas Mountains and the Ziz Valley to reach
                      Er-Rachidia, the gateway to the desert. Driving through
                      the Berber villages and the Ziz Oases, we'll arrive in
                      Erfoud, a city filled with ancient fossils, before
                      reaching our main destination, the Merzouga Desert.
                    </p>
                    <p>
                      Our hotel is situated in the dune lines, where we'll have
                      a chance to rest and relax before embarking on a camel
                      ride adventure to our desert camp inside the dunes.
                      Overnight in a desert camp with a traditional live music
                      show around the fire.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Venture into the Merzouga Desert on an Excursion to Remember"
                content={
                  <>
                    <p>
                      Today, we'll explore the Merzouga Desert and experience
                      the life of nomads. We'll start with a drive through the
                      breathtaking Erg Chebbi sand dunes, one of Morocco's top
                      attractions. Then, we'll visit the Nomad's tent, where
                      we'll have traditional tea and learn about their culture
                      and way of life.
                    </p>
                    <p>
                      Our next stop is Mefis village to see the coal mines, a
                      remnant of the French occupation. We'll also visit Khamlia
                      village and enjoy their traditional Gnaoua music before
                      having a Berber Pizza lunch at a local restaurant.
                    </p>
                    <p>
                      After lunch, we'll explore a hidden treasure of the
                      desert, a beautiful lake that attracts a variety of desert
                      birds, including the desert warblers and flocks of
                      flamingos. In the evening, we'll take you back to the
                      hotel for some rest, and you can also choose to
                      participate in optional desert sports and activities.
                    </p>
                    <p>Overnight in a desert camp.</p>
                  </>
                }
              />
              <Accordion
                title="Day 3 : Journey through Rissani, Tinghir, and Dades Valley"
                content={
                  <>
                    <p>
                      Start your day with a morning walk to the tallest dune
                      nearby to witness a stunning sunrise. After breakfast and
                      a refreshing shower, we'll leave the{" "}
                      <strong>desert camp</strong> and head towards{" "}
                      <strong>Rissani</strong>, one of Morocco's earliest
                      trading posts of gold and slaves, and explore the city's
                      souks and markets.
                    </p>
                    <p>
                      Then, we'll head towards <strong>Tinghir</strong>, a
                      former trading place for the caravans many hundred years
                      ago, and arrive at the <strong>Todgha Gorges</strong>, a
                      natural rock formation of 300 meters canyons, creating a
                      limestone path filled with water from the roots of the{" "}
                      <strong>Anti-Atlas Mountains</strong>.
                    </p>
                    <p>
                      Next, we'll drive through the{" "}
                      <strong> road of thousands of Kasbahs</strong> to reach
                      the Dades Valley, also known as the country of figs, and
                      enjoy the spectacular view of the green fields filled with
                      fig and walnut trees.
                    </p>
                    <p>
                      Overnight in <strong>Dades Valley</strong>.
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 4 : Dades Valley to Marrakech via Ouarzazate and Ait-Benhaddou"
                content={
                  <>
                    <p>
                      After breakfast, we'll continue our journey towards{" "}
                      <strong>Marrakech</strong>, passing through the{" "}
                      <strong>Imgoun Valley</strong> or the valley of roses and{" "}
                      <strong>Skoura Oases</strong>. We'll stop at the famous{" "}
                      <strong>Amridil Kasbahs</strong> from the 17th century,
                      one of Morocco's most authentic Kasbahs, before arriving
                      in <strong>Ouarzazate</strong>, the Hollywood backdrop of
                      many international movies and series. We'll visit the{" "}
                      <strong>Touarirt Kasabah</strong>, one of the city's main
                      sights, before heading towards the famous kasbahs of{" "}
                      <strong>Ait-Benhaddou</strong>. A Unesco-protected red
                      mudbrick village which most of its buildings dates back to
                      the caravans era in the 11th century. This fortified
                      village is also a significant backdrop for many famous
                      films and series such as <strong>Gladiator</strong> and{" "}
                      <strong>Game of Thrones</strong>.
                    </p>
                    <p>
                      Next, we will drive to <strong>Marrakech</strong> crossing
                      the <strong>High Atlas Mountains</strong>, we will enjoy
                      the dramatic scenery of the{" "}
                      <strong>Tizi N’tichka pass</strong> 2260m.
                    </p>
                    <p>
                      Once we reach <strong>Marrakech</strong>, we will drop you
                      at your accommodation inside the old city of{" "}
                      <strong>Marrakech</strong>.
                    </p>
                    <p>
                      Overnight in <strong>Marrakech</strong>.(BB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 5 : Immerse Yourself in the Beauty of Marrakech"
                content={
                  <>
                    <p>
                      Our official local guide will meet you at your Riad and
                      start your <strong>Marrakech</strong> walking tour. You
                      will start from the main square{" "}
                      <strong>Djemaa El-Fna</strong>, a Unesco declared sight
                      which represents the true authenticity of Moroccan
                      culture; a drama in progress. The Halqa (street theatre),
                      acrobats, snake-charmers, musical performers, and Henna
                      tattoo artists etc… Next, our guide will introduce you to{" "}
                      <strong>Marrakech</strong>’s one of the main sights,{" "}
                      <strong>Kotoubia Mosque</strong>; built in the 12th
                      century. Then, to{" "}
                      <strong>Ali Ben Youssef Madrassa</strong> served as a
                      Qur’anic school for over than six centuries ago,{" "}
                      <strong>Bahia Palace</strong> which is a true magnificent
                      Moroccan decoration built in 1908. A short walk to another{" "}
                      <strong>Morocco</strong>’s top sights{" "}
                      <strong>Badi Palace</strong>; a beautiful ruin from the
                      16th century. Our guide then, will escort you to the{" "}
                      <strong>Saadian tombs</strong>. A historic royal
                      necropolis in <strong>Marrakech</strong> from the 16th
                      century. Then, your tour continues to the{" "}
                      <strong>Souks</strong>; <strong>Marrakech</strong>’s most
                      colorful markets. When you are done touring the old city,
                      you will move to the new part of{" "}
                      <strong>Marrakech</strong> where we will visit the famous{" "}
                      <strong>Majorelle Gardens</strong> and{" "}
                      <strong>Yves Saint Laurent museum</strong>. At the end of
                      the tour, our guide will escort you back to your Riad
                      inside the Medina.
                    </p>
                    <p>
                      Overnight in <strong>Marrakech</strong>. (BB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 6 : Depart from Marrakech to Essaouira, Discovering the Best of Coastal Morocco"
                content={
                  <>
                    <p>
                      Today, we will be heading to the dramatic coastal city of
                      Essaouira. A wonderful place for rambling the Medina, the
                      Souqs, port, and the beach are all a perfect way to enjoy
                      what this city offers. Also, the city is a perfect
                      destination for many artists who are specialized in
                      calligraphy, galleries selling their work inside the
                      walled medina. Likewise, the city holds many national and
                      international music festivals, The city of Essaouira is a
                      perfect place to relax and also a good place for water
                      sports lovers. When arrive this beautiful city, you will
                      have a day at leisure to discover the city and enjoy its
                      wonderful beach.
                    </p>
                    <p>
                      Overnight in <strong>Essaouira</strong>(BB).
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 7 : Journeying from Essaouira to Casablanca via El Jadida"
                content={
                  <>
                    <p>
                      Morning at leisure in this beautiful city before we start
                      driving through the Atlantic Ocean toward Casablanca. A 3
                      hours drive through the green fields of barley and olive
                      trees to reach the economic capital of Morocco,
                      Casablanca. Then, we will head toward the famous Hassan 2
                      Mosque. The biggest and the only mosque that is allowed
                      for Non-Muslims visitors in the country.
                    </p>
                    <p>
                      At the end of the mosque visit, we will take to your
                      accommodation to rest and then a walk in the Kournish by
                      the Atlantic Ocean,
                    </p>

                    <p>
                      Overnight in <strong>Casablanca</strong>. (BB).
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 8 : Transfer to Casablanca Airport"
                content={
                  <>
                    <p>
                      We will meet you on an agreed time and transfer you to the
                      Casablanca airport for your flight back home.​
                    </p>
                  </>
                }
              />
              <div className={styles.inclusions}>
                <h3 style={{ fontWeight: "bold" }}>Inclusions</h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                  <li>Air-conditioned vehicle</li>
                  <li>English-speaking driver/guide</li>
                  <li>Overnight in a desert camp (HB)</li>
                  <li>Recommended accommodations for 7 nights (HB)</li>
                  <li>Camel ride in the desert</li>
                  <li>Dinner and breakfast included</li>
                  <li>Airport transfers</li>
                </ul>
              </div>
              <h4 style={{ fontWeight: "bold" }}>Exclusions</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>Drinks and personal items </li>
                <li>Lunch.</li>
                <li>Entry fees to monuments and sites.</li>
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
