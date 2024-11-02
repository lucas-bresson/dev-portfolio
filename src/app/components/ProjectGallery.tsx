'use client';

import { PROJECTS } from '@/constants';
import { sendGAEvent } from '@/utils/analytics';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const ProjectGallery = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 85%',
      },
    });
    gsap.to('#gallery', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top 85%',
      },
    });
    gsap.to('.preview', {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <div id="project-gallery" className="mt-20 min-h-[78vh] w-full lg:mt-0">
      <div
        id="title"
        className="mx-auto mb-32 mt-20 max-w-screen-xl translate-y-32 px-5 opacity-0 lg:px-10"
      >
        <h2 className="text-3xl font-medium tracking-tight text-slate-200 lg:text-4xl">
          Projects
        </h2>
        <p className="mt-4 leading-normal">
          A selection of projects I have recenly worked on.
        </p>
      </div>
      <div
        id="gallery"
        className="relative mx-5 grid max-w-screen-2xl grid-cols-1 justify-items-center gap-16 opacity-0 lg:mx-auto lg:grid-cols-4 lg:gap-8"
      >
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            onClick={() =>
              sendGAEvent({
                action: 'buttonClicked',
                category: 'Project',
                label: project.id,
              })
            }
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              width={500}
              height={500}
              className="preview scale-75 cursor-pointer rounded-lg object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
