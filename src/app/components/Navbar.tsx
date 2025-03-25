'use client';

import { sendGAEvent } from '@/utils/analytics';
import { useGSAP } from '@gsap/react';
import cvIcon from '@images/cv.svg';
import githubIcon from '@images/github.svg';
import linkedInIcon from '@images/linkedIn.svg';
import logo from '@images/logo.svg';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  useGSAP(() => {
    gsap.to('#logo', { opacity: 1, duration: 1 });
    gsap.to('#cv', { opacity: 1, y: 0, delay: 0.2 });
    gsap.to('#github', { opacity: 1, y: 0, delay: 0.3 });
    gsap.to('#linkedIn', { opacity: 1, y: 0, delay: 0.4 });
    gsap.to('#contact', { opacity: 1, y: 0, delay: 0.5 });
  }, []);

  return (
    <header className="lg:fixed top-0 z-10 flex w-screen items-center justify-between px-5 py-5 sm:px-10 sm:py-8">
      <Image
        id="logo"
        src={logo}
        alt="logo"
        className="h-9 w-9 cursor-pointer opacity-0"
      />
      <nav>
        <ul className="flex items-center gap-4 sm:gap-8">
          <li id="cv" className="-translate-y-10 opacity-0">
            <Link
              href="/assets/CV_Lucas_Bresson.pdf"
              className="flex cursor-pointer items-center gap-2 text-sm hover:text-teal-400"
              target="_blank"
              onClick={() =>
                sendGAEvent({
                  action: 'buttonClicked',
                  category: 'Navbar',
                  label: 'CV',
                })
              }
            >
              <Image id="cv-icon" src={cvIcon} alt="CV" className="h-5 w-5" />
              <span className="hidden sm:block">CV</span>
            </Link>
          </li>
          <li id="github" className="-translate-y-10 opacity-0">
            <a
              href="https://github.com/lucas-bresson"
              target="_blank"
              className="flex cursor-pointer items-center gap-2 text-sm hover:text-teal-400"
              onClick={() =>
                sendGAEvent({
                  action: 'buttonClicked',
                  category: 'Navbar',
                  label: 'Github',
                })
              }
            >
              <Image
                id="github-icon"
                src={githubIcon}
                alt="Github"
                className="h-5 w-5"
              />
              <span className="hidden sm:block">Github</span>
            </a>
          </li>
          <li id="linkedIn" className="-translate-y-10 opacity-0">
            <a
              href="https://www.linkedin.com/in/lucas-bresson/"
              target="_blank"
              className="flex cursor-pointer items-center gap-2 text-sm hover:text-teal-400"
              onClick={() =>
                sendGAEvent({
                  action: 'buttonClicked',
                  category: 'Navbar',
                  label: 'LinkedIn',
                })
              }
            >
              <Image
                id="linkedIn-icon"
                src={linkedInIcon}
                alt="LinkedIn"
                className="h-7 w-7"
              />
              <span className="hidden sm:block">LinkedIn</span>
            </a>
          </li>
          <li id="contact" className="-translate-y-10 opacity-0">
            <a
              href="https://www.linkedin.com/in/lucas-bresson/"
              target="_blank"
              onClick={() =>
                sendGAEvent({
                  action: 'buttonClicked',
                  category: 'Navbar',
                  label: 'Contact',
                })
              }
            >
              <button className="rounded-sm border-2 border-teal-400 px-4 py-2 text-sm font-medium text-teal-400 duration-500 hover:bg-teal-400 hover:text-teal-900">
                Contact
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
