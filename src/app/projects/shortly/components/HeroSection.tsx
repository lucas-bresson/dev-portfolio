import hero from '@images/shortly/illustration-working.svg';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="container mx-auto flex flex-col-reverse p-6 lg:flex-row">
        <div className="mb-44 flex flex-col space-y-10 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-center text-5xl font-bold lg:max-w-md lg:text-left lg:text-6xl">
            More than just shorter links
          </h1>
          <p className="text-center text-2xl text-gray-400 lg:max-w-md lg:text-left">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href="#"
              className="rounded-full bg-cyan px-10 py-5 text-2xl font-bold text-white hover:opacity-70 lg:py-4"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-128 mx-auto mb-24 lg:mb-0 lg:w-1/2">
          <Image src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
}
