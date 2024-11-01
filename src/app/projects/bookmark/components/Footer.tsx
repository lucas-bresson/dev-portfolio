import iconFacebook from '@images/bookmark/icon-facebook.svg';
import iconTwitter from '@images/bookmark/icon-twitter.svg';
import logoBookmarkFooter from '@images/bookmark/logo-bookmark-footer.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-shadowyNavy py-16">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light text-fadedSteel md:flex-row md:space-x-14 md:space-y-0">
          <Image src={logoBookmarkFooter} alt="logo" className="mb-1" />

          <a href="#features" className="uppercase hover:text-softRed">
            Features
          </a>
          <a href="#download" className="uppercase hover:text-softRed">
            Download
          </a>
          <a href="#faq" className="uppercase hover:text-softRed">
            FAQ
          </a>
        </div>

        <div className="flex space-x-10">
          <a href="#">
            <Image src={iconFacebook} alt="facebook" className="ficon h-6" />
          </a>
          <a href="#">
            <Image src={iconTwitter} alt="twitter" className="ficon h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
