import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "../Tours.module.css";

export default function CasablancaPage() {
  const destination = "Casablanca";

  const tours = [
    {
      id: 1,
      title: "Ideal Escorted Tour to Marrakesh via Chefchaouen - Fes - Desert",
      duration: "11 Days",
      price: "$1199",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      link: "11-days-ideal-guided-tour-casablanca-to-marrakech",
    },
    {
      id: 2,
      title: "7 Days Morocco Desert Tour from Casablanca to Marrakesh",
      duration: "7 Days",
      price: "$999",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg.",
      link: "7-days-morocco-desert-tour-from-casablanca-to-marrakesh",
    },
    {
      id: 3,
      title: "6 Days Special Morocco Tour from Casablanca",
      duration: "6 Days",
      price: "$899",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      link: "6-days-special-morocco-tour-from-casablanca",
    },
    {
      id: 4,
      title: "Supreme Guided Tour - Chefchaouen - Fes - Desert -Essaouira",
      duration: "13 Days",
      price: "$1499",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      link: "13-days-supreme-guided-tour-from-casablanca-morocco",
    },
    {
      id: 5,
      title: "5 Days Imperial Cities Tour",
      duration: "5 Days",
      price: "$799",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      link: "5-days-moroccan-imperial-tour-from-casablanca-to-fes",
    },
    {
      id: 6,
      title: "8 Days Desert Tour from Casablanca via Chefchaouen",
      duration: "8 Days",
      price: "$1099",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
      link: "8-days-desert-imperial-tour-casablanca-to-marrakesh-morocco",
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
            Make the Most of Your Time in Morocco with a Well-Planned packages
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
            <div key={tour.id} className={styles.tourCard}>
              <div className={styles.tourImageContainer}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className={styles.tourImage}
                />
                <span className={styles.tourDuration}>{tour.duration}</span>
              </div>
              <div className={styles.tourInfo}>
                <h4 className={styles.tourTitle}>{tour.title}</h4>
                <p>
                  <span className={styles.tourLocation}>
                    <i
                      className={`fas fa-map-marker-alt ${styles.locationIcon}`}
                    ></i>
                    <span className={styles.locationIcon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <a
                      href="#"
                      className={styles.destinationLink}
                      style={{ color: "gray" }}
                    >
                      {destination}
                    </a>
                  </span>
                </p>
                <p className={styles.tourPrice}>{tour.price}</p>
                <button className={styles.bookNowBtn}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
