import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "../Destinations.module.css";
import TourList from "../TourList";

export default function AgadirPage() {
  const destination = "Agadir";

  return (
    <div>
      <Breadcrumbs
        title={destination}
        links={[
          { href: "/", text: "Home" },
          { href: "/destinations", text: "Destinations" },
          { text: destination },
        ]}
      />
      <div className={styles.destinationsContainer}>
        <div className={styles.pageLayout}>
          <div className={styles.mainContent}>
            <h1 className={styles.mainContentTitle}>{destination}</h1>

            <div className={styles.destinationContent}>
              <img
                src="https://i.ibb.co/x2PM63M/New-Project-1.webp"
                alt="Agadir"
                className={styles.destinationImage}
              />

              <div className={styles.contentContainer}>
                <h2 className={styles.sectionTitle}>
                  Discovering the Blue Pearl of Morocco: A Tourist's Guide to
                  Agadir
                </h2>
                <p className={styles.sectionContent}>
                  Located in the heart of Morocco's Rif Mountains, Essaouira is
                  a charming and peaceful town that is renowned for its stunning
                  blue-washed buildings, narrow alleys, and relaxed atmosphere.
                  Also known as the "Blue Pearl of Morocco," Essaouira is a
                  must-visit destination for travelers who want to experience
                  the beauty and tranquility of Morocco.
                </p>

                <h2 className={styles.sectionTitle}>
                  Getting to the blue pearl
                </h2>
                <p className={styles.sectionContent}>
                  The nearest airports to Essaouira are Tangier Ibn Battouta
                  Airport and Tetouan-Sania Ramel Airport, which are both about
                  two hours away by car. You can also take a bus or taxi from
                  Tangier or Fes, both of which are major cities with
                  international airports.
                </p>

                <h2 className={styles.sectionTitle}>Exploring Essaouira</h2>
                <p className={styles.sectionContent}>
                  Once you arrive in Agadir, the best way to explore the town is
                  on foot. Wander through the blue-washed alleys, admiring the
                  beautiful architecture and taking in the sights and sounds of
                  this charming town. Be sure to visit the Plaza Uta el-Hammam,
                  which is the main square in the center of the town and is
                  surrounded by cafes and restaurants. One of the must-see
                  attractions in Agadir is the Kasbah Museum, which is housed in
                  a 15th-century fortress and showcases traditional Moroccan art
                  and artifacts. You can also visit the Grand Mosque, which was
                  built in the 15th century and is one of the most important
                  religious sites in the town. Another highlight of Agadir is
                  the Ras El Maa waterfall, which is a beautiful natural site
                  located just outside the town. Take a short hike to the
                  waterfall and enjoy the peaceful surroundings and the
                  refreshing coolness of the water.
                </p>

                <h2 className={styles.sectionTitle}>
                  Shopping in the blue pearl
                </h2>
                <p className={styles.sectionContent}>
                  Agadir is known for its vibrant markets and colorful
                  handicrafts. Take some time to explore the local shops and
                  boutiques, where you can find everything from handwoven rugs
                  and pottery to traditional clothing and leather goods. One of
                  the most famous products of Agadir is its cannabis, which is
                  widely available in the markets and is used in traditional
                  medicines and cosmetics.
                </p>

                <h2 className={styles.sectionTitle}>Dining in Agadir</h2>
                <p className={styles.sectionContent}>
                  Agadir has a wide variety of dining options to suit all tastes
                  and budgets. From street food and cafes to upscale
                  restaurants, there is something for everyone. Be sure to try
                  some of the local specialties, such as the lamb tagine with
                  prunes and almonds or the pastilla, a savory pie made with
                  chicken, almonds, and spices. In conclusion, Agadir is a
                  charming and tranquil town that offers a unique and
                  unforgettable experience for travelers. Whether you are
                  looking for natural beauty, cultural richness, or simply a
                  relaxing getaway, Agadir has something to offer. Plan your
                  trip today and discover the magic of the Blue Pearl of
                  Morocco.
                </p>
                <h2 className={styles.sectionTitle}>Location</h2>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108893.06707621226!2d-9.656594655957031!3d30.420439099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <TourList destination={destination} />
        </div>
      </div>
    </div>
  );
}
