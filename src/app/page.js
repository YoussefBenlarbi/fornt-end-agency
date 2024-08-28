import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import InfiniteSlider from '../components/InfiniteSlider';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import DestinationSection from '../components/DestinationSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <DestinationSection />
      <InfiniteSlider />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
