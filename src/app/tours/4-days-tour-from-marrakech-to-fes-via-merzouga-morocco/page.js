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

export default function FourDaysTourFromMarrakechToFesViaMerzougaMorocco() {
  const destination = "4 Days Tour from Marrakech to Fes via Merzouga";
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
        backgroundImage="http://localhost:8000/api/images/4-days-tour-from-marrakech-to-fes-via-merzouga-morocco.webp"
        category="Tour from Marrakesh"
        title="4 Days Tour from Marrakech to Fes via Merzouga"
        description="Enjoy camel rides through the dunes, watch a beautiful sunset and sunrise, spend two nights under the stars in a traditional nomadic tent, and experience the warm hospitality of the Berber people. Book your tour now and embark on an unforgettable adventure!"
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="http://localhost:8000/api/images/4-days-tour-from-marrakech-to-fes-via-merzouga-morocco-hero-image.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>4 Days Tour</span>
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
                title="Day 1 :  From Marrakech to the Dades Valley: Exploring the High Atlas Mountains, Ait-Benhaddou, and Ouarzazate."
                firstState={true}
                content={
                  <>
                    <p>
                      Pick from your accommodation in Marrakech and drive into
                      the High Atlas Mountains.
                    </p>
                    <p>
                      We will arrive the Kasbah of Ait-Benhaddou; a fortified
                      village classified by UNESCO as one of the world’s
                      cultural treasures, a backdrop for many Hollywood Movies
                      and series such as Game of Thrones, Gladiator, and
                      Lawrence of Arabia. Besides, the kasbah used to be an
                      important fortress stronghold on the old Road caravan
                      routes from The Sub-Saharan Countries to Marrakech.
                      Continue to the city of Ouarzazate, visit the Touarirt
                      Kasbah and Cinema studios if you prefer to.
                    </p>
                    <p>
                      We continue then across the road of thousand Kasbahs to
                      reach the Dades Valley via Skoura Oases, the city of
                      roses, and Berbere villages along the way
                    </p>
                    <p>
                      Overnight in Dades<strong> Gorges</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : From Dades Valley to the Sahara Desert via Tinghir, Todgha Gorges, Arfoud."
                content={
                  <>
                    <p>
                      After breakfast, we drive to Tinghir; one of the most
                      trading positions for the caravans in the past, inside the
                      old city still the Jewish quarter and cemetery.
                    </p>
                    <p>
                      We then continue to <strong>Todgha Gorges</strong> a 300m
                      canyons towered by rocks. A short walk inside the canyons
                      before we drive to Arfoud, the city of dates and fossils.
                    </p>
                    <p>
                      We will reach <strong>Merzouga Desert</strong> before the
                      sunset and a quick stop in the hotel at the sand dunes
                      where you will switch the car for the camels. The camel
                      ride to your desert camp will take 1h30 with stops for
                      pictures in the middle of the dunes.
                    </p>
                    <p>
                      When you arrive the camp, hot shower, and dinner followed
                      by a traditional music live show around the fire.
                    </p>
                    <p>
                      Overnight at a luxury desert camp in{" "}
                      <strong>Merzouga Desert</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="​Day 3 : Merzouga Sahara Desert excursion"
                content={
                  <>
                    <p>
                      Today, we will enjoy exploring Merzouga Desert and get to
                      know about the nomad's life. After picking you up from
                      your desert camp, we will drive through the Erg Chebbi
                      sand dunes. A dramatic scenery and one of Morocco’s top
                      sights. Our first stop will be at the Nomad’s tent where
                      we will be invited to a traditional cup of tea while
                      chatting with the nomads and discover their culture and
                      their way of life. We then, move closer to the coal mines
                      located in Mefis village. tunnels and holes where local
                      people used to work during the French occupation.
                    </p>
                    <p>
                      Next, we head to Khamlia village, whose inhabitants are
                      believed to be descended from the slave that were escaped
                      from the slave trading caravans. This village is known for
                      their traditional type of music known as Gnaoua. We will
                      enjoy together traditional music live show before we treat
                      ourselves for with a local traditional lunch in a local
                      restaurant specialized in Berber Pizza.
                    </p>
                    <p>
                      After lunch, we will continues to another hidden treasures
                      of the desert. A surprising lake in the middle of the
                      desert, and a life source for many desert birds such as
                      the desert warblers and flocks of flamingos. At the end of
                      our excursion, we will take you back to the hotel in the
                      dune lines to rest and enjoy the dunes view from your
                      terrace. After you rest, a multiple optional desert sports
                      and activities can be arranged for you if you prefer to.{" "}
                    </p>
                    <p>
                      Overnight in a luxury desert camp inside the dunes of{" "}
                      <strong>Merzouga Desert (HB)</strong>.
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 4 : From Sahara Desert to Fes via Ziz Oases, Midelt, Azrou forest and Ifrane"
                content={
                  <>
                    <p>
                      Today, you will return to the hotel by camels or a 4x4 car
                      if you prefer.
                    </p>
                    <p>
                      We will meet in the hotel and drive to Arfoud city where
                      we change direction toward the Ziz Oases.{" "}
                    </p>
                    <p>
                      A short break in panoramic view of the Oases and we
                      continue our way toward Midelt where we will stop for
                      lunch. Then, drive to Azrou Forest where we will visit the
                      Macaque Barbary Monkeys inside the forest. Next, we move
                      to Ifrane city nicknamed as a Switzerland of Morocco.
                    </p>
                    <p>
                      A pet stop in Ifrane before we drive to Fes; one of the
                      oldest medieval cities in the world.
                    </p>
                    <p>
                      A pet stop in Ifrane before we drive to{" "}
                      <strong>Fes'</strong> (BB).
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
