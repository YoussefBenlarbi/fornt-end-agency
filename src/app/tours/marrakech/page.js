import Breadcrumbs from "@/components/Breadcrumbs";
import TourCard from "@/components/TourCard";
import styles from "../Tours.module.css";

export default function MarrakechPage() {
  const destination = "Marrakech";

  const tours = [
    {
      id: 1,
      title: "7 Days Adventure through time and Culture Morocco",
      duration: "7 Days",
      price: "$799",
      image: "/images/7-days-adventure-through-time-and-culture-morocco-hero-image.jpg",
      itinerary: ["Marrakech", "Essaouira", "Atlas Mountains", "Sahara Desert", "Fes"],
      startingLocation: "Marrakech",
      link: "7-days-adventure-through-time-and-culture-morocco"
    },
    {
      id: 2,
      title: "2 Days Sahara Desert Tour from Marrakech to Zagora",
      duration: "2 Days",
      price: "$249",
      image: "/images/2-days-sahara-desert-tour-marrakech-to-zagora-morocco-hero-image.jpg",
      itinerary: ["Marrakech", "Atlas Mountains", "Zagora"],
      startingLocation: "Marrakech",
      link: "2-days-sahara-desert-tour-marrakech-to-zagora-morocco"
    },
    {
      id: 3,
      title: "3 Day Sahara Desert Tour From Marrakech to Fes",
      duration: "3 Days",
      price: "$349",
      image: "/images/3-days-sahara-tour-marrakech-to-fes-via-merzouga-morocco-hero-image.jpg",
      itinerary: ["Marrakech", "Atlas Mountains", "Merzouga", "Fes"],
      startingLocation: "Marrakech",
      link: "3-days-sahara-tour-marrakech-to-fes-via-merzouga-morocco"
    },
    {
      id: 4,
      title: "Discover the Magic: Marrakech to Merzouga - A 2-Day Moroccan Desert Adventure",
      duration: "2 Days",
      price: "$299",
      image: "/images/marrakech-to-merzouga-2-day-desert-adventure-in-morocco-hero-image.jpg",
      itinerary: ["Marrakech", "Atlas Mountains", "Merzouga"],
      startingLocation: "Marrakech",
      link: "marrakech-to-merzouga-2-day-desert-adventure-in-morocco"
    },
    {
      id: 5,
      title: "8 Days Desert & Chefchaouen Tour from Marrakech to Tangier",
      duration: "8 Days",
      price: "$899",
      image: "/images/8-days-imperial-sahara-desert-tour-from-marrakesh-to-tangier-hero-image.jpg",
      itinerary: ["Marrakech", "Sahara Desert", "Fes", "Chefchaouen", "Tangier"],
      startingLocation: "Marrakech",
      link: "8-days-imperial-sahara-desert-tour-from-marrakesh-to-tangier"
    },
    {
      id: 6,
      title: "4 Days Tour from Marrakech to Fes via Merzouga",
      duration: "4 Days",
      price: "$449",
      image: "/images/4-days-tour-from-marrakech-to-fes-via-merzouga-morocco-hero-image.jpg",
      itinerary: ["Marrakech", "Atlas Mountains", "Merzouga", "Fes"],
      startingLocation: "Marrakech",
      link: "4-days-tour-from-marrakech-to-fes-via-merzouga-morocco"
    },
    {
      id: 7,
      title: "5 Days Sahara Desert Tour From Marrakesh to Fes",
      duration: "5 Days",
      price: "$549",
      image: "/images/5-days-sahara-desert-tour-hero-image.jpg",
      itinerary: ["Marrakech", "Atlas Mountains", "Sahara Desert", "Merzouga", "Fes"],
      startingLocation: "Marrakech",
      link: "5-days-sahara-desert-tour"
    },
    {
      id: 8,
      title: "Moroccan Odyssey: A 10-Day Journey of Culinary Exploration, Trekking Adventures, and Cultural Immersion",
      duration: "10 Days",
      price: "$1199",
      image: "/images/10-days-journey-of-culinary-exploration-hero-image.jpg",
      itinerary: ["Marrakech", "Atlas Mountains", "Sahara Desert", "Fes", "Chefchaouen"],
      startingLocation: "Marrakech",
      link: "10-days-journey-of-culinary-exploration"
    },
    {
      id: 9,
      title: "2 Days Morocco Sahara Desert Tour from Fes to Marrakech",
      duration: "2 Days",
      price: "$299",
      image: "/images/2-day-tour-from-fes-to-marrakech-through-morocco-s-desert-hero-image.jpg",
      itinerary: ["Fes", "Sahara Desert", "Marrakech"],
      startingLocation: "Fes",
      link: "2-day-tour-from-fes-to-marrakech-through-morocco-s-desert"
    },
    {
      id: 10,
      title: "2 Days Morocco Desert Tour from Marrakech to Fes",
      duration: "2 Days",
      price: "$299",
      image: "/images/2-day-morocco-desert-tour-from-marrakech-to-fes-hero-image.jpg",
      itinerary: ["Marrakech", "Sahara Desert", "Fes"],
      startingLocation: "Marrakech",
      link: "2-day-morocco-desert-tour-from-marrakech-to-fes"
    }
  ];

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={destination}
        links={[
          { href: "/", text: "Home" },
          { href: "/Tours", text: "Tours" },
          { text: "Tours From Marrakesh" },
        ]}
      />
      <section className={styles.featuredSection}>
        <div className={styles.featuredContent}>
          <h2 className={styles.perfectForYou}>
            Make the Most of Your Time in Morocco with Well-Planned Packages
          </h2>
          <h3 className={styles.choosePackage}>Morocco Immersion Tours</h3>
          <p className={styles.descSecDescription}>
            Whether you're looking for a private tour or a group excursion, our
            experienced guides can tailor your itinerary to your liking
          </p>
        </div>
      </section>

      <section className={styles.toursSection}>
        <div className={styles.toursGrid}>
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} destination={destination} />
          ))}
        </div>
      </section>
    </div>
  );
}
