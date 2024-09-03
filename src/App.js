
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';
import InfiniteSlider from './components/InfiniteSlider';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CTASection from './components/CTASection';
import InformationSection from './components/InformationSection';
import TourGuideSection from './components/TourGuideSection';
import DestinationSection from './components/DestinationSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CTASection />
      <HeroSection />
      <InformationSection />
      <DestinationSection />
      <FeaturedSection />
      <InfiniteSlider />
      <TourGuideSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;