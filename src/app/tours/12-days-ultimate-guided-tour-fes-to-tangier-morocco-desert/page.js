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

export default function TwelveDaysUltimateGuidedTourFesToTangierMoroccoDesert() {
  const destination =
    "Ultimate Morocco Escorted Tour via Chefchaouen - Fes - Desert - Essaouira";
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
        backgroundImage="/images/6-days-sahara-desert-tour-from-fes-to-marrakesh-morocco.webp"
        category="Morocco Tour from Fes"
        title="12 Days Ultimate Morocco Guided Tour Fes to Tanger"
        description="Immerse yourself in the vibrant culture and stunning scenery of Morocco on this 12 days tour from Fes. From the bustling souks of Marrakech to the tranquil beaches of Essaouira, experience the best of what this North African country has to offer."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="/images/6-days-sahara-desert-tour-from-fes-to-marrakesh-morocco-hero-image.jpg"
                alt="Morocco Tour"
                className={styles.tourImage}
              />
              <div className={styles.tourCard}>
                <span className={styles.tourType}>12 Days Tour</span>
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
                title="Day 1 : Arrival at Fes Airport and transfer to your hotel"
                firstState={true}
                content={
                  <>
                    <p>
                      We will be waiting for you outside the terminal of Fes
                      Airport to welcome you and transfer you to your
                      accommodation inside the old city of Fes where your
                      Moroccan adventure begins.
                    </p>
                    <p>
                      Overnight in <strong>Fes</strong> (BB){" "}
                    </p>
                  </>
                }
              />

              <Accordion
                title="Day 2 : Journeying from Fes to Merzouga Desert via Ifrane, Midelt and Erfoud."
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
                      We will reach Erg Chebbi dunes in Merzouga. A pleasant pit
                      stop in our hotel in the dune lines before you start your
                      camel ride adventure to our camp inside the dunes.
                    </p>
                    <p>
                      Overnight in a desert camp inside the dunes with a
                      traditional local music live show around the fire at
                      night.{" "}
                    </p>
                    <p>
                      Overnight in a Luxury Desert Camp -{" "}
                      <strong>Merzouga Desert</strong>. (HB){" "}
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 3 : Merzouga desert day excursion"
                content={
                  <>
                    <p>
                      Today, we will enjoy exploring Merzouga Desert and get to
                      know about the nomad's life. After picking you up from
                      your desert camp, we will drive through the Erg Chebbi
                      sand dunes.
                    </p>
                    <p>
                      A dramatic scenery and one of Morocco’s top sights. Our
                      first stop will be at the Nomad’s tent where we will be
                      invited to a traditional cup of tea while chatting with
                      the nomads and discover their culture and their way of
                      life. We then, move closer to the coal mines located in
                      Mefis village. Tunnels and holes where local people used
                      to work during the French occupation.
                    </p>
                    <p>
                      Next, we head to Khamlia village, whose inhabitants are
                      believed to be descended from the slave that were escaped
                      from the slave trading caravans. This village is known for
                      their traditional type of music known as Gnaoua. We will
                      enjoy together traditional music live show before we treat
                      ourselves for with a local traditional lunch in a local
                      restaurant specialized in Berber Pizza. After lunch,we
                      will continues to another hidden treasures of the desert.
                      A surprising lake in the middle of the desert, and a life
                      source for many desert birds such as the desert warblers
                      and flocks of flamingos. At the end of our excursion, we
                      will take you back to the hotel in the dune lines to rest
                      and enjoy the dunes view from your terrace. After you
                      rest, a multiple optional desert sports and activities can
                      be arranged for you if you prefer to.
                    </p>
                    <p>
                      Overnight in a Luxury Desert Camp -{" "}
                      <strong>Merzouga Desert</strong>. (HB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 4 : Immerse Yourself in the Charm of Rissani and Tinghir on Your Merzouga Desert Tour towards Dades Valley"
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
                      The city also is an important commercial point with its
                      crowded Souks and local markets. We will take a walk in
                      the Souks and enjoy the authentic way of life that this
                      small city offers.
                    </p>
                    <p>
                      Our way then, continues toward Tinghir, a former trading
                      place for the caravans many hundred years ago. Few
                      kilometres from the city, we will arrive the Todgha
                      Gorges. A natural rock formation of 300 meters canyons
                      forming a limestone path filled with water coming from the
                      roots of the Anti-Atlas Mountains.
                    </p>
                    <p>
                      Next, we drive through the road of thousands of Kasbahs to
                      reach the country of figs; Dedes. A beautiful scenery
                      filled with different dramatic landscapes along the Dedes
                      valley.
                    </p>
                    <p>
                      We will spend the night inside the Dades Gorges and enjoy
                      a spectacular view of the green fields filled with a lot
                      of fig, and walnut trees.{" "}
                    </p>
                    <p>
                      Overnight in <strong>Dades Valley</strong>. (HB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 5 : From the Dades Valley to Marrakech, Exploring Ouarzazate and Ait-Benhaddou"
                content={
                  <>
                    <p>
                      After breakfast, we will continue our tour toward
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
                    <p>
                      Overnight in <strong>Marrakech</strong>.(BB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 6 : Marrakech Sightseeing"
                content={
                  <>
                    <p>
                      Our official local guide will meet you at your Riad and
                      start your Marrakech walking tour. You will start from the
                      main square Djemaa El-Fna, a Unesco declared sight which
                      represent the true authenticity of Moroccan culture; a
                      drama in progress. The Halqa (street theatre), acrobats,
                      snake-charmers, musical performers, and Henna tattoo
                      artists etc… Next, our guide will introduce you to
                      Marrakech’s one of the main sights, Kotoubia Mosque; built
                      in the 12th century. Then, to Ali Ben Youssef Madrassa
                      served as a Qur’anic school for over than six centuries
                      ago, Bahia Palace which is a true magnificent Moroccan
                      decoration built in 1908. A short walk to another
                      Morocco’s top sights Badi Palace; a beautiful ruin from
                      the 16th century. Our guide then, will escort you to the
                      Saadian tombs. A historic royal necropolis in Marrakech
                      from the 16th century. Then, your tour continues to the
                      Souks; Marrakech’s most colourful markets. When you are
                      done touring the old city, you will move the new part of
                      Marrakech where we will visit the famous Majorelle Gardens
                      and Yves Saint Laurent museum. At the end of the tour, our
                      guide will escort you back to your Riad inside the Medina.
                    </p>
                    <p>
                      Overnight in <strong>Marrakech</strong>(BB).
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 7 : Marrakech to Essaouira"
                content={
                  <>
                    <p>
                      Today, we will be heading to the dramatic coastal city of
                      Essaouira. A wonderful place for rambling the Medina, the
                      Souqs, port, and the beach are all a perfect way to enjoy
                      what this city offers. Also, the city is a perfect
                      destination for many artists who are specialised in
                      calligraphy, galleries selling their work inside the
                      walled medina. Likewise, the city holds many national and
                      international music festivals, The city of Essaouira is a
                      perfect place to relax and also a good place for water
                      sports lovers.
                    </p>
                    <p>
                      When arrive this beautiful city, you will have a day at
                      leisure to discover the city and enjoy its wonderful
                      beach.
                    </p>

                    <p>
                      Overnight in <strong>Essaouira</strong>. (BB).
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 8 : From Essaouira to Casablanca via El-Jadida"
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
                      at the end of the mosque visit, we will take to your
                      accommodation to rest and then a walk in the Kournish by
                      the Atlantic Ocean,
                    </p>
                    <p>
                      Overnight in <strong>Casablanca</strong>. (BB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 9 : Experience the Charms of Casablanca, Rabat, and Chefchaouen"
                content={
                  <>
                    <p>
                      Today, we will drive by the Atlantic Ocean to toward
                      Rabat. The current capital and one of the imperial cities
                      of Morocco. We will first visit the Oudaya Kasbahs, an
                      authentic fortress against the Atlantic Ocean. Next, we
                      take a walk inside the Hassan Tower. Rabat’s most
                      prominent landmark and next to the tower, we will have the
                      chance to take a look of the Mausoleum of the former kings
                      of the Royal Family. We then, move to the Royal palace
                      where the current royal family based. Next, a visit to the
                      Chalah which is a Phoenician sloping site above the Bou
                      Regreg river. Next, we will drive through the green fields
                      of wheat and barley, and the spectacular scenery of the
                      Rif Mountains. Early evening, we arrive Chefchaouen, a
                      beautifully perched city beneath the peaks of the Rif
                      Mountains with its blue washed houses and streets. We will
                      drop you at your accommodation, rest and then, treat
                      yourself with a memorable walk inside the prettiest town
                      in Morocco.
                    </p>

                    <p>
                      Overnight in <strong>Chefchaouen</strong>. (BB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 10 : Chefchaouen sightseeing"
                content={
                  <>
                    <p>
                      Today, a full day at leisure in Chefchaouen. A walk in the
                      blue city in the morning is recommended. This city is one
                      of the most attractive sights in Morocco. Small,
                      uncrowded, and easy to explore. Most of its buildings are
                      painted in blue, giving them a clean and fresh look. The
                      city also has many other sights, such as the Jewish
                      Mellah, the Kasbah from the 14th century, the waterfalls
                      of Ras El-maa, and the Spanish mosque on a hilltop not far
                      from the Medina. Beside the Kasbah, a small square where
                      people gather in the evening and it is full of local
                      restaurants, shops, and different shows. An optional
                      trekking activity is possible if you are a trekking lover.
                    </p>
                    <p>
                      Akchour waterfalls which is a green national park located
                      40km from Chefchaouen. We will drive there where we meet
                      one of the local guides that will escort you in this
                      trekking activity. A magnificent ranges, Gorges, and
                      valleys, with forest of cedar trees. At the end of the
                      day, we will drive back to the Blue city and drop you at
                      your accommodation.
                    </p>
                    <p>
                      Overnight in <strong>Chefchaouen</strong>(BB).
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 11 : Northern Morocco From Chefchaouen to Tangier via Tetouan"
                content={
                  <>
                    <p>
                      Morning, we will leave the Blue City and cross through the
                      green Rif Mountains. our first stop will be at Tetouan
                      city nicknamed as the White Dove city. a white city filled
                      with whitewashed houses in a top of a mountain. Then, we
                      continue crossing the green Rif Mountains to arrive
                      Tangier city which Europe’s gateway to Africa. We will
                      head to the Medina which is Tangier’s top attractions with
                      its labyrinth of alleyways and it is surrounded with walls
                      from the 15th century.
                    </p>
                    <p>
                      Tangier, likewise, offers you one of the most magnificent
                      sights in Morocco and in Africa which is the Cap Spartel.
                      We will enjoy a dramatic drive through the pine-covered
                      lands to reach the Cap Spartel where the Atlantic Ocean
                      and the Mediterranean meet. Next, we move to the Hercules
                      caves, a beautiful rock formation and caves that were
                      formed due to the strong waves that against the side rocks
                      of the sea. At the end of the day we will drive back to
                      the old Medina where we will spend the night.
                    </p>
                    <p>
                      Overnight in <strong>Tangier</strong>. (BB)
                    </p>
                  </>
                }
              />
              <Accordion
                title="Day 12 : Tangier city at leisure and transfer to the port/airport:"
                content={
                  <>
                    <p>
                      Today, is our last day together and you will have some
                      free time before we pick you for the port/airport transfer
                      for your your fairy/flight back home.
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
                  <li>Recommended accommodations for 11 nights (HB)</li>
                  <li>Camel ride in the desert</li>
                  <li>Dinner and Breakfast</li>
                  <li>Airport transfer</li>
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
