import iconFacebook from '@images/shortly/icon-facebook.svg';
import iconInstagram from '@images/shortly/icon-instagram.svg';
import iconPinterest from '@images/shortly/icon-pinterest.svg';
import iconTwitter from '@images/shortly/icon-twitter.svg';
import logo from '@images/shortly/logo.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-veryDarkViolet py-16">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0">
        <Image src={logo} alt="logo" />
        <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Link shortening
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Branded links
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Analytics
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Blog
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Developers
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Support
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-center md:items-start">
            <div className="mb-5 font-bold capitalize text-white">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                About
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Our Team
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Careers
              </a>
              <a
                href="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#">
            <Image src={iconFacebook} alt="facebook" className="ficon" />
          </a>
          <a href="#">
            <Image src={iconTwitter} alt="twitter" className="ficon" />
          </a>
          <a href="#">
            <Image src={iconPinterest} alt="pinterest" className="ficon" />
          </a>
          <a href="#">
            <Image src={iconInstagram} alt="instagram" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
