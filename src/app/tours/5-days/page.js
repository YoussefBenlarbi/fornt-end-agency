import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "../Tours.module.css";

export default function FiveDaysPage() {
  const destination = "FiveDays";

  const tours = [
    {
      id: 1,
      title: "Sahara Desert Adventure",
      duration: "3 Days",
      price: "$299",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
    },
    {
      id: 2,
      title: "Atlas Mountains Trek",
      duration: "2 Days",
      price: "$199",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
    },
    {
      id: 3,
      title: "Medina Food Tour",
      duration: "1 Day",
      price: "$79",
      image:
        "https://moroccanexperiencetours.com/wp-content/uploads/2022/07/Destination-Image-10-1-768x519.jpg",
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
