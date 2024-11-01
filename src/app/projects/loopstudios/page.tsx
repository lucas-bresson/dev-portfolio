'use client';

import CreationsSection from './components/CreationsSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CreationsSection />
      <Footer />
    </div>
  );
}
