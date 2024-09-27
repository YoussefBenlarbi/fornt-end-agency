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

export default function ThreeDaysSaharaDesertTourFromFesToMarrakech() {
  const destination =
    "3 Days Sahara Desert Tour from Fes to Marrakech, Morocco";
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
        backgroundImage="/images/3-days-sahara-desert-tour-from-fes-to-marrakech-morocco.webp"
        category="Tour from Fes"
        title="3 Days Sahara Desert Tour from Fes to Marrakech, Morocco"
        description="An escorted Morocco adventure through the stunning landscapes and ancient culture of the Sahara Desert to connect with the natural wonders of Morocco. Our expert guides will take you on a journey from Fes through the Middle Atlas Mountains, the Ziz Valley, and the dunes of Erg Chebbi, where you will witness breathtaking sunsets and sunrises. Experience traditional Berber hospitality, ride camels through the desert, and spend the night in a luxury desert camp under a blanket of stars."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="/images/3-days-sahara-desert-tour-from-fes-to-marrakech-morocco-hero-image.jpg"
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
                title="Day 1 : From Fes to Sahara Desert via Ifrane, Azrou Forest, Midelt and Ziz Oases, Midelt to Merzouga"
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
                      city before our main destination Merzouga Desert.
                    </p>
                    <p>
                      We will reach Erg Chebbi dunes in Merzouga. A pleasant pit
                      stop in our hotel in the dune lines before you start your
                      camel ride adventure to our camp inside the dunes.
                    </p>
                    <p>
                      Overnight in a desert camp inside the dunes with a
                      traditional local music live show around the fire at
                      night.
                    </p>
                    <p>
                      Overnight <strong> Merzouga Desert</strong> at luxury
                      desert Camp. (HB)
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Heading out towards Dades Valley via Rissani, Arfoud, Todgha Gorges annd Tinghir"
                firstState={true}
                content={
                  <>
                    <p>
                      Today, a morning walk to the tallest dune nearby to enjoy
                      a spectacular sunrise, then shower and breakfast before we
                      leave the desert camp.
                    </p>
                    <p>
                      As we leave Merzouga desert, our first stop will be in
                      Rissani town which is used to be one of Morocco first
                      trading posts of gold and slaves.
                    </p>
                    <p>
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
                      the Dedes valley.
                    </p>
                    <p>
                      We will spend the night inside the Dades Gorges and enjoy
                      a spectacular view of the green fields filled with a lot
                      of fig, and walnut trees.
                    </p>
                    <p>
                      Overnight in <strong> Dades Valley </strong>. (HB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 3 : From Dades Gorges to Marrakech via Roses Valley, Ouarzazate and Ait Benhaddou"
                content={
                  <>
                    <p>
                      After breakfast, your Morocco tour will continue toward
                      Marrakech. We will drive via the Imgoun valley or the
                      valley of roses and Skoura Oases. A pleasant stop in the
                      Oases to visit the famous Amridil Kasbahs from the 17th
                      century, one of Morocco’s most authentic Kasbahs.
                    </p>
                    <p>
                      Our way continues to Ouarzazate city known as Cinema
                      capital of Morocco since it is a Hollywood backdrop of
                      many international movies and series. We will visit the
                      Touaririrt Kasabah one of the city’s main sights before we
                      drive for more few kilometres to arrive to the famous
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
                      accommodation inside the old city of{" "}
                      <strong>Marrakech. </strong>(HB)
                    </p>
                  </>
                }
              />
              <div className={styles.inclusions}>
                <h3 style={{ fontWeight: "bold" }}>Inclusions</h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                  <li>Air-conditioned Vehicle</li>
                  <li>English speaking driver/guide</li>
                  <li>Overnight in a desert camp dinner (HB)</li>
                  <li>Recommended accommodations for 2 nights (HB)</li>
                  <li>Camel ride</li>
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
