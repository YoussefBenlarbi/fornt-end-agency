import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import DestinationSection from '../components/DestinationSection';
import TourGuideSection from '../components/TourGuideSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <DestinationSection />
      <TourGuideSection />
      <Footer />
    </>
  );
}
