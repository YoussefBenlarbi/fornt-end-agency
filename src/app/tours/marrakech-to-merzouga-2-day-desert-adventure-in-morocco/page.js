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

export default function MarrakechToMerzouga2DayDesertAdventureInMoroccoPage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const destination = "Marrakech to Merzouga 2 Day Desert Adventure in Morocco";

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
        backgroundImage="http://localhost:8000/api/images/marrakech-to-merzouga-2-day-desert-adventure-in-morocco.webp"
        category="Cultural Tour"
        title="Marrakech to Merzouga 2 Day Desert Adventure in Morocco"
        description="Explore Morocco's rich history and vibrant culture with our 7-day tour. Visit ancient cities, trek the Sahara Desert, and experience local traditions."
      />

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.column}>
            <div className={styles.imageContainer}>
              <img
                src="http://localhost:8000/api/images/marrakech-to-merzouga-2-day-desert-adventure-in-morocco-Hero-image.jpg"
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
                  marginTop: "20px",
                }}
              >
                Itinerary
              </h3>
              <Accordion
                title="Day 1 : Early departure from Marrakech and drive straight to Merzouga Desert "
                firstState={true}
                content={
                  <>
                    <p>
                      Your adventure kicks off with a scenic drive through the
                      <strong>Atlas Mountains</strong>, revealing breathtaking
                      views and picturesque landscapes. En route, visit
                      traditional Berber villages and witness the authentic way
                      of life. As you approach the desert, the terrain
                      transforms, offering a glimpse of the vast and mesmerizing{" "}
                      <strong>Sahara Desert</strong>.
                    </p>
                    <p>
                      Upon reaching <strong>Merzouga Desert</strong>, the
                      gateway to the desert, you'll be welcomed by the golden
                      dunes and the unique charm of the{" "}
                      <strong>Sahara Desert</strong>. Take part in a camel trek
                      to witness the sunset over the dunes, casting a warm glow
                      over the vast desert expanse. The evening brings a
                      traditional Berber camp experience, complete with a
                      delicious dinner under the stars and local music to
                      enhance the desert ambiance.
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
                title="Day 2: Leave Merzouga Desert and Drive Back to Marrakech"
                content={
                  <>
                    <p>
                      Wake up to the serene beauty of the Sahara Desert as the
                      sun paints the dunes with hues of gold and orange. After
                      breakfast, set out to explore more of the desert, with
                      opportunities for sandboarding and capturing incredible
                      photos amidst the ever-changing dunes.
                    </p>
                    <p>
                      Bid farewell to <strong>Merzouga Desert</strong> and begin
                      your return journey to <strong>Marrakech</strong>,
                      stopping at noteworthy sites along the way. Marvel at the{" "}
                      <strong>Todra Gorge's</strong> impressive canyon walls and
                      explore the ancient Kasbah of Ait Ben Haddou, a UNESCO
                      World Heritage site. As you venture back to Marrakech,
                      reflect on the unforgettable moments and experiences
                      gained during this immersive 2-day desert adventure in
                      Morocco.
                    </p>
                    <p>
                      Drop off in your accommodation in{" "}
                      <strong>Marrakech</strong>.
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
