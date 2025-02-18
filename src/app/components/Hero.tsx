'use client';

import { TECHNOLOGIES } from '@/constants';
import { useGSAP } from '@gsap/react';
import { sendGAEvent } from '@utils/analytics';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Image from 'next/image';
import Card from './InfoCard';

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, y: 0, delay: 1 });
    gsap.to('#hero-subtitle', { opacity: 1, y: 0, delay: 1.1 });
    gsap.to('#hero-text', { opacity: 1, y: 0, delay: 1.2 });
    gsap.to('#technologies', {
      opacity: 1,
      delay: 1.7,
      x: 0,
      duration: 1.5,
    });
    gsap.to('#card', {
      opacity: 1,
      delay: 1.9,
      x: 0,
      duration: 1,
    });
    gsap.to('#contact-cta', {
      opacity: 1,
      delay: 2.5,
    });
    gsap.to('#see-projects', {
      opacity: 1,
      delay: 3.5,
      y: 0,
      duration: 1,
    });
  }, []);

  const handleScrollToProjects = () => {
    const targetElement = document.getElementById('project-gallery');

    if (targetElement) {
      gsap.to(window, {
        duration: 2, // Set duration in seconds for a slower scroll
        scrollTo: { y: targetElement, offsetY: 20 }, // Adjust offset as needed
        ease: 'power2.inOut', // Smooth easing for a more natural scroll
      });
    }

    sendGAEvent({
      action: 'buttonClicked',
      category: 'Hero',
      label: 'SeeMyWork',
    });
  };

  return (
    <div className="mx-auto max-w-screen-xl lg:min-h-[100vh]">
      <div className="mt-48 flex flex-col gap-20 lg:flex-row">
        <div className="px-5 lg:w-1/2 lg:px-10">
          <h1
            id="hero-title"
            className="translate-y-20 text-4xl font-bold tracking-tight text-teal-400 opacity-0 lg:text-5xl"
          >
            Lucas Bresson
          </h1>
          <h2
            id="hero-subtitle"
            className="mt-3 translate-y-20 text-lg font-medium tracking-tight text-slate-200 opacity-0 lg:text-xl"
          >
            Senior Frontend Engineer
          </h2>
          <p
            id="hero-text"
            className="mt-4 max-w-xs translate-y-20 leading-normal opacity-0"
          >
            I build engaging and accessible websites, using modern technologies.
          </p>
          <div
            id="technologies"
            className="mt-20 flex flex-wrap gap-5 opacity-0"
          >
            {TECHNOLOGIES.map(({ icon, name }) => (
              <span
                key={name}
                className="flex cursor-default gap-1 rounded-lg bg-slate-800 p-2 hover:bg-slate-700"
              >
                <Image src={icon} alt="name" className="h-6 w-6" />
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col justify-end gap-12 px-5 lg:w-1/2">
          <Card />
        </div>
      </div>
      <div className="mt-32 flex w-full flex-col items-center justify-center gap-8">
        <a
          href="https://www.linkedin.com/in/lucas-bresson/"
          target="_blank"
          onClick={() =>
            sendGAEvent({
              action: 'buttonClicked',
              category: 'Hero',
              label: 'ContactMe',
            })
          }
        >
          <button
            id="contact-cta"
            className="rounded-sm border border-teal-400 px-12 py-3 font-medium text-teal-400 opacity-0 duration-500 hover:bg-teal-400 hover:text-teal-900"
          >
            Contact me
          </button>
        </a>
        <div
          id="see-projects"
          className="mt-12 hidden translate-y-32 cursor-pointer text-slate-600 opacity-0 hover:text-slate-500 lg:flex"
          onClick={handleScrollToProjects}
        >
          See my work
        </div>
      </div>
    </div>
  );
};

export default Hero;
