import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import InfiniteSlider from '../components/InfiniteSlider';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import DestinationSection from '../components/DestinationSection';
import TourGuideSection from '@/components/TourGuideSection';
import InformationSection from '../components/InformationSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InformationSection /> {/* Add the new section here */}
      <FeaturedSection />
      <DestinationSection />
      <TourGuideSection />
      <InfiniteSlider />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
