import Breadcrumbs from "@/components/Breadcrumbs";
import Accordion from "@/components/Accordion";
import styles from "../ToursEnquiry.module.css";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TourHero from "@/components/TourHero";

export default function SevenDaysAdventureThroughTimeAndCultureMoroccoPage() {
  const destination = "7 Days Adventure through time and Culture Morocco";

  const destinations = [
    "Marrakech",
    "Casablanca",
    "Fes",
    "Chefchaouen",
    "Sahara Desert",
  ];

  const itinerary = [
    { id: 1, day: "Day 1 : Depart from Marrakech towards Dades Valley via High Atlas Mountains, Ait-Benhaddou and Ouarzazate", description: "Commencing your journey from Marrakech, embark on a scenic drive through the picturesque High Atlas Mountains. The first stop will be at the historic Kasbah of Ait-Benhaddou, a UNESCO World Heritage Site, known for its stunning architecture and as a popular film location for movies such as Game of Thrones, Gladiator and Lawrence of Arabia. This former fortress stronghold served as an important stopover point on the old trade routes connecting Sub-Saharan Africa to Marrakech. After visiting the Kasbah, continue on to Ouarzazate, where you can opt to visit the Touarirt Kasbah and Cinema Studios. From Ouarzazate, travel along the road of Thousand Kasbas to reach the Dades Valley, passing through Skoura Oases, the city of roses, and Berbere villages along the way." },
    { id: 2, day: "Day 2 : From Dades Valley to Sahara Desert Merzouga via Tinghir, Todgha Gorges and Arfoud", description: "After breakfast, drive to Tinghir, a former trading post for caravans. Explore the Jewish quarter and cemetery before continuing on to Todgha Gorges, a 300m canyon with towering rocks. Take a short walk inside the canyon before driving to Arfoud, known for its dates and fossils. Arrive in Merzouga Desert just before sunset and switch from car to camel for a 1h30 ride to your desert camp, with stops for pictures along the way. Upon arrival, enjoy a hot shower and dinner, followed by a traditional music show around the fire." },
    { id: 3, day: "Day 3 : Sahara Desert excursion – Merzouga life and traditions", description: "After witnessing the sunrise over the dunes, start your day with breakfast and embark on a 4x4 off-roading tour of the Sahara Desert. Visit Merzouga Oases, a Nomadic family in their Berbere tent, the Gnawa Black people's village, and a fossil site showcasing animal water fossils on the surface of volcanic rocks. Enjoy a traditional lunch and end the day at a hotel in the dune lines, where you can relax by the pool and rest." },
    { id: 4, day: "Day 4 : From Sahara Desert to Fes via Ziz Oases, Midelt, Azrou forest and Ifrane", description: "Return to the hotel by either camel or 4x4 car and set off for Arfoud, where you will change direction towards the Ziz Oases. Take a short break to admire the panoramic views before continuing on to Midelt for lunch. Drive to Azrou Forest to visit the Macaque Barbary Monkeys and then on to Ifrane, nicknamed the Switzerland of Morocco. Make a pit stop in Ifrane before continuing to Fes, one of the oldest medieval cities in the world. Upon arrival, you will be dropped off at your accommodation in Fes." },
    { id: 5, day: "Day 5 : Fes city tour & Sightseeing", description: "Today, join us on a comprehensive and guided city tour of the renowned Old Medina of Fes. Experience all the fascinating attractions that the Old Medina of Fes has to offer, including the renowned handicrafts, the iconic tanneries, the historic Al-Quaraouine University, the captivating Madrasas, and the bustling narrow local markets of the old city. This city tour is highly customizable, catering to your individual preferences and needs. In the evening, be escorted by our knowledgeable local city guide to your traditional Riad accommodation located in the heart of the Old City of Fes. Enjoy your evening at leisure and savor the peaceful ambiance of the city." },
    { id: 6, day: "Day 6 : From Fes to Chefchaouen via Meknes, Volubilis and Rif Mountains", description: "Join us for another exciting day tour as we drive to the imperial city of Meknes. Meknes is renowned for being the most fortified old city in Morocco and is home to several captivating landmarks, including the Bab Mansour, the grandiose granaries, and the city's most significant highlights. Following our visit to Meknes, we will make our way to the UNESCO World Heritage site of Volubilis, the Roman Ruins. Admire the ancient architectural remains before we embark on a scenic drive through the picturesque Rif mountains to reach the enchanting Blue City of Chefchaouen by the evening. Enjoy some well-deserved rest and spend your evening at leisure in this beautiful and tranquil city." },
    { id: 7, day: "Day 7 : Chefchaouen at leisure and optional hiking activity trip to Akchor Waterfalls:", description: "Today, enjoy a day of leisure in the charming Blue City of Chefchaouen. For those seeking an adventure, we offer an optional excursion to the breathtaking Akchor Waterfalls, located within the lush Rif Mountains. This scenic destination is ideal for hiking and offers a serene resort area to unwind and relax amidst the tranquil surroundings of the waterfalls and natural water pools." },
    { id: 8, day: "Day 8 : From Chefchaouen to Casablanca via Rif Mountains and Rabat", description: " Depart from Chefchaouen in the morning and embark on a scenic journey through the Rif Mountains to reach Rabat, the current capital of Morocco. Discover the iconic landmarks of Rabat, including the unfinished Hassan Mosque, the historic Ouadaya Kasbahs, and other significant highlights of the city. Next, we will make our way to Casablanca, the largest city in Morocco. Here, we will visit the grand Hassan 2 Mosque, the largest mosque in the country, and for those seeking a cultural experience, we will also visit the famous Rick's Café." },
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
          <div className={styles.leftColumn}>
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
              <h3 style={{ fontWeight: "bold", textDecoration: "underline", textDecorationColor: "gold", textDecorationThickness: "4px" }}>Itinerary</h3>
              {itinerary.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.day}
                  content={
                    <>
                      {item.description}
                      {item.id === 1 && (
                        <p>Spend the night in the stunning <strong>Dades Gorges.</strong> (HB)</p>
                      )}
                      {item.id === 2 && (
                        <p>Overnight in   (HB) <strong>Merzouga Desert</strong> in a desert camp in the dunes.</p>
                      )}
                      {item.id === 3 && (
                        <p>Overnight in  (HB) <strong>Merzouga Desert</strong>.</p>
                      )}
                      {item.id === 4 && (
                        <p>Overnight in <strong>Fes</strong> (BB).</p>
                      )}
                      {item.id === 5 && (
                        <p>Overnight stay in   <strong>Fes</strong> in the traditional Riad (BB).</p>
                      )}
                      {item.id === 6 && (
                        <p>Overnight accommodation in  <strong>Chefchaouen</strong> is provided in a traditional Riad (BB).</p>
                      )}
                      {item.id === 7 && (
                        <p>Overnight accommodation in  <strong>Chefchaouen</strong> is provided in a traditional Riad (BB).</p>
                      )}
                      {item.id === 8 && (
                        <p>At the end of a fulfilling day, our tour comes to a close as we drop you off at your hotel in <strong>Casablanca</strong>, providing a memorable conclusion to your Moroccan adventure. </p>
                      )}
                    </>
                  }
                />
              ))}
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
              <li>Our tours are open for further customization, <a href="http://localhost:3000/tours">contact us </a> to help you design your trip  </li>
         
            </ul>
          </div>

          <div
            className={styles.rightColumn}
            style={{ backgroundColor: "#F8F8F8" }}
          >
            <form className={styles.enquiryForm}>
              <h3 style={{ fontWeight: "bold" }}>Request a quote now!</h3>
              <p className={styles.enquiryParagragh}>Let Us Take You on a Journey Through Time and Culture in Morocco</p>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="date" placeholder="Arrival Date" required />
              <input type="date" placeholder="Departure Date" required />
              <input
                type="number"
                placeholder="Number of Travelers"
                required
                min="1"
              />
              <textarea placeholder="Your message" required></textarea>
              <button type="submit">Send Enquiry</button>
            </form>
            <div className={styles.destinationsList}>
              <h3 style={{ fontWeight: "bold" }}>Popular Destinations</h3>
              <ul>
                {destinations.map((dest, index) => (
                  <li key={index} className={styles.destinationItem}>
                    <a
                      href={`/destinations/${dest.toLowerCase()}`}
                      className={styles.destinationLink}
                    >
                      <span className={styles.destinationText}>{dest}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.popularTours}>
              <h3 style={{ fontWeight: "bold" }}>Popular Tours</h3>
              <ul className={styles.toursList}>
                {popularTours.map((tour, index) => (
                  <li key={index} className={styles.tourItem}>
                    <Link
                      href={`/tours/${tour.title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className={styles.tourLink}
                    >
                      <div className={styles.tourImageContainer}>
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className={styles.tourImage}
                        />
                      </div>
                      <div className={styles.tourInfo}>
                        <h4 className={styles.tourTitle}>{tour.title}</h4>
                        <p className={styles.tourDestination}>
                          <FaMapMarkerAlt />
                          <span>{tour.destination}</span>
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
