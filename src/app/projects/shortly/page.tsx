'use client';

import { poppins } from '@fonts';
import CTASection from './components/CTASection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ShortenSection from './components/ShortenSection';
import StatsSection from './components/StatsSection';

export default function Page() {
  return (
    <div className={poppins.className}>
      <Header />
      <HeroSection />
      <ShortenSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
