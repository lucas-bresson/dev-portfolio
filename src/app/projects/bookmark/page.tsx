'use client';

import { rubik } from '@fonts';
import DownloadSection from './components/DownloadSection';
import FAQSection from './components/FAQSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavMenu from './components/NavMenu';
import NewsletterSection from './components/NewsletterSection';

export default function Page() {
  return (
    <div className={`${rubik.className} overflow-x-hidden`}>
      <NavMenu />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
