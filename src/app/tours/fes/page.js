import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "../Tours.module.css";

export default function FesPage() {
  const destination = "Fes";

  const tours = [
    {
      id: 1,
      title: "3 Days - 2 Overnight camp experience from Fes to Marrakech",
      duration: "3 Days",
      price: "$299",
      image:
        "/images/3-day-2-night-camp-adventure-from-fes-to-marrakech-hero-image.jpg",
      link: "3-day-2-night-camp-adventure-from-fes-to-marrakech"
    },
    {
      id: 2,
      title: "4 Days Tour from Fes to Marrakech via Merzouga",
      duration: "4 Days",
      price: "$399",
      image:
        "/images/4-days-tour-from-fes-to-marrakech-via-merzouga-morocco-hero-image.jpg",
      link: "4-days-tour-from-fes-to-marrakech-via-merzouga-morocco"
    },
    {
      id: 3,
      title: "3 Days Morocco Sahara Desert Tour from Fes to Marrakech",
      duration: "3 Days",
      price: "$299",
      image:
        "/images/3-days-sahara-desert-tour-from-fes-to-marrakech-morocco-hero-image.jpg",
      link: "3-days-sahara-desert-tour-from-fes-to-marrakech-morocco"
    },
    {
      id: 4,
      title: "Discover the Merzouga Desert on a 3-Day, 2-Night Adventure from Fes",
      duration: "3 Days",
      price: "$349",
      image:
        "/images/explore-merzouga-desert-a-3-day-2-night-adventure-hero-image.jpg",
      link: "explore-merzouga-desert-a-3-day-2-night-adventure"
    },
    {
      id: 5,
      title: "6 Days Sahara Desert Tour From Fes to Marrakech",
      duration: "6 Days",
      price: "$599",
      image:
        "/images/6-days-sahara-desert-tour-from-fes-to-marrakesh-morocco-hero-image.jpg",
      link: "6-days-sahara-desert-tour-from-fes-to-marrakesh-morocco"
    },
    {
      id: 6,
      title: "Ultimate Morocco Escorted Tour via Chefchaouen - Fes - Desert - Essaouira",
      duration: "12 Days",
      price: "$1299",
      image:
        "/images/12-days-ultimate-guided-tour-fes-to-tangier-morocco-desert-hero-image.jpg",
      link: "12-days-ultimate-guided-tour-fes-to-tangier-morocco-desert"
    },
    {
      id: 7,
      title: "5 Days Morocco Desert Tour from Fes to Marrakech",
      duration: "5 Days",
      price: "$499",
      image:
        "/images/5-days-morocco-desert-tour-from-fes-to-marrakesh-morocco-hero-image.jpg",
      link: "5-days-morocco-desert-tour"
    },
    {
      id: 8,
      title: "2 Days/2 Nights Merzouga Desert Tour in Morocco",
      duration: "2 Days",
      price: "$199",
      image:
        "/images/discover-morocco-2-day-fes-to-fes-merzouga-desert-adventure-hero-image.jpg",
      link: "discover-morocco-2-day-fes-to-merzouga-desert-adventure"
    },
    {
      id: 9,
      title: "8 Days guided Tour Fes to Casablanca via Desert and Essaouira",
      duration: "8 Days",
      price: "$899",
      image:
        "/images/8-days-desert-coastal-guided-tour-fes-to-casablanca-hero-image.jpg",
      link: "8-days-desert-coastal-guided-tour-fes-to-casablanca"
    },
  ];

  return (
    <div className={styles.container}>
      <Breadcrumbs
        title={destination}
        links={[
          { href: "/", text: "Home" },
          { href: "/Tours", text: "Tours" },
          { text: "Tours From Fes" },
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
              <a href={tour.link}>
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
                  <p className={styles.tourLocation}>
                    <span className={styles.locationIcon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className={styles.destinationLink}>
                      {destination}
                    </span>
                  </p>
                  <p className={styles.tourPrice}>{tour.price}</p>
                  <button className={styles.bookNowBtn}>Book Now</button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
