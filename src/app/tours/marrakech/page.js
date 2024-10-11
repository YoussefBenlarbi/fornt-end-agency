import Breadcrumbs from "@/components/Breadcrumbs";
import TourCard from "@/components/TourCard";
import styles from "../Tours.module.css";

export default function MarrakechPage() {
  const destination = "Marrakech";

  const tours = [
    {
      id: 1,
      title: "Sahara Desert Adventure",
      duration: "3 Days",
      price: "$299",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      itinerary: ["Marrakech", "Sahara", "Marrakech"],
      startingLocation: "Marrakech",
    },
    {
      id: 2,
      title: "Atlas Mountains Trek",
      duration: "2 Days",
      price: "$199",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      itinerary: ["Marrakech", "Atlas Mountains", "Marrakech"],
      startingLocation: "Marrakech",
    },
    {
      id: 3,
      title: "Medina Food Tour",
      duration: "1 Day",
      price: "$79",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      itinerary: ["Marrakech"],
      startingLocation: "Marrakech",
    },
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
