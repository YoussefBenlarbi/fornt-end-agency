import Breadcrumbs from "@/components/Breadcrumbs";
import TourCard from "@/components/TourCard";
import styles from "../Tours.module.css";

export default function CasablancaPage() {
  const destination = "Casablanca";

  const tours = [
    {
      id: 1,
      title: "Ideal Escorted Tour to Marrakesh via Chefchaouen - Fes - Desert",
      duration: "11 Days",
      price: "$1199",
      image: "/images/11-days-ideal-guided-tour-casablanca-to-marrakech-hero-image.jpg",
      itinerary: ["Casablanca", "Chefchaouen", "Fes", "Sahara Desert", "Marrakesh"],
      startingLocation: "Casablanca",
      link: "11-days-ideal-guided-tour-casablanca-to-marrakech"
    },
    {
      id: 2,
      title: "7 Days Morocco Desert Tour from Casablanca to Marrakesh",
      duration: "7 Days",
      price: "$999",
      image: "/images/7-days-morocco-desert-tour-from-casablanca-to-marrakesh-hero-image.jpg",
      itinerary: ["Casablanca", "Fes", "Sahara Desert", "Marrakesh"],
      startingLocation: "Casablanca",
      link: "7-days-morocco-desert-tour-from-casablanca-to-marrakesh"
    },
    {
      id: 3,
      title: "6 Days Special Morocco Tour from Casablanca",
      duration: "6 Days",
      price: "$899",
      image: "/images/6-days-special-morocco-tour-from-casablanca-hero-image.jpg",
      itinerary: ["Casablanca", "Rabat", "Fes", "Marrakesh"],
      startingLocation: "Casablanca",
      link: "6-days-special-morocco-tour-from-casablanca"
    },
    {
      id: 4,
      title: "Supreme Guided Tour - Chefchaouen - Fes - Desert - Essaouira",
      duration: "13 Days",
      price: "$1499",
      image: "/images/13-days-supreme-guided-tour-from-casablanca-morocco-hero-image.jpg",
      itinerary: ["Casablanca", "Chefchaouen", "Fes", "Sahara Desert", "Essaouira", "Marrakesh"],
      startingLocation: "Casablanca",
      link: "13-days-supreme-guided-tour-from-casablanca-morocco"
    },
    {
      id: 5,
      title: "5 Days Imperial Cities Tour",
      duration: "5 Days",
      price: "$799",
      image: "/images/5-days-moroccan-imperial-tour-from-casablanca-to-fes-hero-image.jpg",
      itinerary: ["Casablanca", "Rabat", "Meknes", "Fes"],
      startingLocation: "Casablanca",
      link: "5-days-moroccan-imperial-tour-from-casablanca-to-fes"
    },
    {
      id: 6,
      title: "8 Days Desert Tour from Casablanca via Chefchaouen",
      duration: "8 Days",
      price: "$1099",
      image: "/images/8-days-desert-imperial-tour-casablanca-to-marrakesh-morocco-hero-image.jpg",
      itinerary: ["Casablanca", "Chefchaouen", "Fes", "Sahara Desert", "Marrakesh"],
      startingLocation: "Casablanca",
      link: "8-days-desert-imperial-tour-casablanca-to-marrakesh-morocco"
    },
  ];

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={destination}
        links={[
          { href: "/", text: "Home" },
          { href: "/Tours", text: "Tours" },
          { text: "Tours From Casablanca" },
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