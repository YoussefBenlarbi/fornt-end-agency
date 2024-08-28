import React from 'react';
import Navbar from './components/Navbar';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Other components */}
      <FeaturedSection />
      <Footer />
    </div>
  );
}

export default App;