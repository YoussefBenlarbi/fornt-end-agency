import Breadcrumbs from "@/components/Breadcrumbs";
import TourCard from "@/components/TourCard";
import styles from "../Tours.module.css";

export default function TangierPage() {
  const destination = "Tangier";

  const tours = [
    {
      id: 1,
      title: "5 Days Morocco Tour via Tangier - Chefchaouen- Fes - Rabat",
      duration: "5 Days",
      price: "$1199",
      image: "/images/5-days-morocco-tour-via-tangier-chefchaouen-fes-rabat-hero-image.jpg",
      itinerary: ["Tangier", "Chefchaouen", "Meknes", "Fes", "Rabat"],
      startingLocation: "Tangier",
      link: "5-days-morocco-tour-via-tangier-chefchaouen-fes-rabat"
    },
    {
      id: 2,
      title: "11-Day Special Morocco Expedition from Tangier to Marrakech",
      duration: "11 Days",
      price: "$1199",
      image: "/images/11-days-special-morocco-tour-from-tangier-to-marrakech-hero-image.jpg",
      itinerary: ["Tangier", "Chefchaouen", "Merzouga", "Boumalne Dades", "Marrakesh"],
      startingLocation: "Tangier",
      link: "11-days-special-morocco-tour-from-tangier-to-marrakech"
    },
    {
      id: 3,
      title: "7 Days Morocco Sahara Desert Tour From Tangier to Marrakesh",
      duration: "7 Days",
      price: "$1199",
      image: "/images/7-days-morocco-sahara-desert-tour-from-tangier-to-marrakesh-hero-image.jpg",
      itinerary: ["Tangier", "Chefchaouen", "Fes", "Merzouga", "Boumalne Dades", "Ouarzazate", "Ait Ben Haddou", "Marrakesh"],
      startingLocation: "Tangier",
      link: "7-days-morocco-sahara-desert-tour-from-tangier-to-marrakesh"
    },
  ];

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={destination}
        links={[
          { href: "/", text: "Home" },
          { href: "/Tours", text: "Tours" },
          { text: "Tours From Tangier" },
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