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

export default function FourDaysMoroccoDesertTourFromFesToMarrakechViaMerzouga() {
  const destination =
    "4 Days Tour from Fes to Marrakech via Merzouga, Morocco";
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
        backgroundImage="/images/4-days-tour-from-fes-to-marrakech-via-merzouga-morocco.webp"
        category="Tour from Fes"
        title="4 Days Tour from Fes to Marrakech via Merzouga, Morocco"
        description="An escorted Morocco adventure through the stunning landscapes and ancient culture of the Sahara Desert to connect with the natural wonders of Morocco. Our expert guides will take you on a journey from Fes through the Middle Atlas Mountains, the Ziz Valley, and the dunes of Erg Chebbi, where you will witness breathtaking sunsets and sunrises. Experience traditional Berber hospitality, ride camels through the desert, and spend the night in a luxury desert camp under a blanket of stars."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="/images/4-days-tour-from-fes-to-marrakech-via-merzouga-morocco-hero-image.jpg"
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
                title="Day 1 : From Fes to Merzouga via Ifrane, Midelt, Arfoud to Merzouga"
                firstState={true}
                content={
                  <>
                    <p>
                      Early Morning, we will meet you in your Riad and start our
                      tour toward Merzouga Desert.
                    </p>

                    <p>
                      Our first stop will be in Ifrane city. nicknamed as
                      Switzerland of Morocco in the Middle Atlas.
                    </p>
                    <p>
                      We will drive Few kilometers from the city is where the
                      cedar tree forest of Azrou, hosting a type of Macaque
                      called the Barbary apes. We will have a moment to enjoy
                      with the monkeys before we get back on the road again.
                    </p>
                    <p>
                      Our next stop will be in Midelt, the country of apples. We
                      will have lunch in this beautiful city and then drive
                      through the Atlas Mountains alongside the Ziz Valley to
                      reach the city of Er-Rachidia which is the gate to the
                      Desert and the southern parts of Morocco.
                    </p>
                    <p>
                      We will drive more south via the Ziz Oases filed with palm
                      tree groves and Berber villages along the way.
                    </p>
                    <p>
                      We will reach Erfoud, which is a place of fossils that
                      dates back hundreds of million years, and its is the last
                      city before our main destination Merzouga Desert.{" "}
                    </p>
                    <p>
                      We will reach Erg Chebbi dunes in Merzouga Desert. A
                      pleasant pit stop in our hotel in the dune lines before
                      you start your camel ride adventure to our camp inside the
                      dunes.
                    </p>
                    <p>
                      Overnight in a desert camp inside the dunes of Merzouga
                      Desert with a traditional local music live show around the
                      fire at night.
                    </p>
                    <p>
                      Overnight in a luxury desert camp in
                      <strong> Merzouga Desert HB</strong>. (HB)
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Merzouga Sahara Desert excursion"
                firstState={true}
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
                      their way of life.
                    </p>
                    <p>
                      We then, move closer to the coal mines located in Mefis
                      village. tunnels and holes where local people used to work
                      during the French occupation.
                    </p>
                    <p>
                      Next, we head to Khamlia Berber village, whose inhabitants
                      are believed to be descended from the slave that were
                      escaped from the slave trading caravans. This village is
                      known for their traditional type of music known as Gnaoua.
                      We will enjoy together traditional music live show before
                      we treat ourselves for with a local traditional lunch in a
                      local restaurant specialized in Berber Pizza.
                    </p>
                    <p>
                      After lunch,we will continues to another hidden treasures
                      of the desert. A surprising lake in the middle of the
                      desert, and a life source for many desert birds such as
                      the desert warblers and flocks of flamingos.
                    </p>
                    <p>
                      At the end of our excursion, we will take you back to the
                      hotel in the dune lines to rest and enjoy the dunes view
                      from your terrace. After you rest, a multiple optional
                      desert sports and activities can be arranged for you if
                      you prefer to.{" "}
                    </p>
                    <p>
                      Overnight in a luxury desert camp in
                      <strong> Merzouga Desert</strong>.(HB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 3 : From Merzouga Desert to Dades Valley via Rissani, Todgha Gorges and Tinghir"
                content={
                  <>
                    <p>
                      Today, a morning walk to the tallest dune nearby to enjoy
                      a spectacular sunrise, then shower and breakfast before we
                      leave the desert camp.
                    </p>
                    <p>
                      As we leave the desert, our first stop will be in Rissani
                      town which is used to be one of Morocco first trading
                      posts of gold and slaves.
                    </p>
                    <p>
                      {" "}
                      The city also is an important commercial point with its
                      crowded Souks and local markets. We will take a walk in
                      the Souks and enjoy the authentic way of life that this
                      small city offers.
                    </p>
                    <p>
                      Our way then, continues toward Tinghir, a former trading
                      place for the caravans many hundred years ago. Few
                      kilometers from the city, we will arrive the Todgha
                      Gorges. A natural rock formation of 300 meters canyons
                      forming a limestone path filled with water coming from the
                      roots of the Anti-Atlas Mountains.
                    </p>
                    <p>
                      Next, we drive through the road of thousands of Kasbahs to
                      reach the country of figs; Dades Valley. A beautiful
                      scenery filled with different dramatic landscapes along
                      the Dades valley.{" "}
                    </p>
                    <p>
                      We will spend the night inside the Dades Gorges and enjoy
                      a spectacular view of the green fields filled with a lot
                      of fig, and walnut trees.
                    </p>
                    <p>
                      Overnight in <strong>Dades Valley. (HB)</strong>
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 4 : From Dades Valley to Marrakech via Roses Valley, Ouarzazate, Ait-Benhaddou"
                content={
                  <>
                    <p>
                      After breakfast, we will continue our tour toward
                      Marrakech. We will drive via the Imgoun valley or the
                      Valley of Roses and Skoura Oases. A pleasant stop in the
                      Oases to visit the famous Amridil Kasbahs from the 17th
                      century, one of Morocco’s most authentic Kasbahs.
                    </p>
                    <p>
                      Our way continues to Ouarzazate city known as Cinema
                      capital of Morocco since it is a Hollywood backdrop of
                      many international movies and series. We will visit the
                      Touaririrt Kasabah one of the city’s main sights before we
                      drive for more few kilometers to arrive to the famous
                      kasbahs of Ait-Benhaddou. A Unesco-protected red mudbrick
                      village which most of its buildings dates back to the
                      caravans era in the 11th century. This fortified village
                      is also a significant backdrop for many famous films and
                      series such as Gladiator and Game of Thrones.
                    </p>
                    <p>
                      Next, we will drive to Marrakech crossing the High Atlas
                      Mountains, we will enjoy the dramatic scenery of the Tizi
                      N’tichka pass 2260m.
                    </p>
                    <p>
                      Once we reach Marrakech, we will drop you at your
                      accommodation inside the old city of Marrakech.
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
