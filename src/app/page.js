import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import DestinationSection from '../components/DestinationSection';
import TourGuideSection from '../components/TourGuideSection';
import InformationSection from '../components/InformationSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InformationSection />
      <FeaturedSection />
      <DestinationSection />
      <TourGuideSection />
      <CTASection />
      {/* <InfiniteSlider /> */}
    </main>
  );
}
