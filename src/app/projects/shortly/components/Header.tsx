import logo from '@images/shortly/logo.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Image src={logo} className="" alt="logo" />

          <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>

        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" className="hover:text-veryDarkViolet">
            Login
          </a>
          <a
            href="#"
            className="rounded-full bg-cyan px-8 py-3 font-bold text-white hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        <button
          id="menu-btn"
          type="button"
          className={`hamburger block bg-white focus:outline-none lg:hidden ${
            hamburger ? 'open' : ''
          }`}
          onClick={() => setHamburger((prevState) => !prevState)}
        >
          <span className="hamburger-top h-[3px] bg-[#9c9aa6]"></span>
          <span className="hamburger-middle h-[3px] bg-[#9c9aa6]"></span>
          <span className="hamburger-bottom h-[3px] bg-[#9c9aa6]"></span>
        </button>
      </div>

      <div
        className={`z-100 absolute left-6 right-6 top-20 rounded-lg bg-darkViolet p-6 ${
          hamburger ? 'visible flex' : 'hidden'
        }`}
      >
        <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white">
          <a href="#" className="w-full text-center">
            Features
          </a>
          <a href="#" className="w-full text-center">
            Pricing
          </a>
          <a href="#" className="w-full text-center">
            Resources
          </a>
          <a
            href="#"
            className="w-full border-t border-gray-400 pt-6 text-center"
          >
            Login
          </a>
          <a href="#" className="w-full rounded-full bg-cyan py-3 text-center">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
