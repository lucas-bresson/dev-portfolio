import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import ProjectGallery from '@components/ProjectGallery';
import Spotlight from '@components/Spotlight';

import { inter } from './fonts';

export default function Home() {
  return (
    <main
      className={`bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 ${inter.className}`}
    >
      <Spotlight>
        <Navbar />
        <Hero />
        <ProjectGallery />
        <Footer />
      </Spotlight>
    </main>
  );
}
