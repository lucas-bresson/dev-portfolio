import { alata, josefinSans } from '@fonts';
import imageCuriosity from '@images/loopstudios/desktop/image-curiosity.jpg';
import imageDeepEarth from '@images/loopstudios/desktop/image-deep-earth.jpg';
import imageFisheye from '@images/loopstudios/desktop/image-fisheye.jpg';
import imageFromAbove from '@images/loopstudios/desktop/image-from-above.jpg';
import imageGrid from '@images/loopstudios/desktop/image-grid.jpg';
import imageNightArcade from '@images/loopstudios/desktop/image-night-arcade.jpg';
import imagePocket from '@images/loopstudios/desktop/image-pocket-borealis.jpg';
import imageSoccerTeam from '@images/loopstudios/desktop/image-soccer-team.jpg';
import imageCuriosityMobile from '@images/loopstudios/mobile/image-curiosity.jpg';
import imageDeepEarthMobile from '@images/loopstudios/mobile/image-deep-earth.jpg';
import imageFisheyeMobile from '@images/loopstudios/mobile/image-fisheye.jpg';
import imageFromAboveMobile from '@images/loopstudios/mobile/image-from-above.jpg';
import imageGridMobile from '@images/loopstudios/mobile/image-grid.jpg';
import imageNightArcadeMobile from '@images/loopstudios/mobile/image-night-arcade.jpg';
import imagePocketMobile from '@images/loopstudios/mobile/image-pocket-borealis.jpg';
import imageSoccerTeamMobile from '@images/loopstudios/mobile/image-soccer-team.jpg';
import Image, { StaticImageData } from 'next/image';

const CreationItem = ({
  text,
  imageDesktop,
  imageMobile,
  alt,
}: {
  text: string;
  imageDesktop: StaticImageData;
  imageMobile: StaticImageData;
  alt: string;
}) => (
  <div className="loopstudios-item group">
    <Image
      src={imageDesktop}
      className="hidden w-full duration-200 group-hover:scale-110 md:block"
      alt={alt}
    />
    <Image src={imageMobile} className="w-full md:hidden" alt={alt} />
    <div className="loopstudios-item-gradient" />
    <h5 className="loopstudios-h5">{text}</h5>
  </div>
);

export default function CreationsSection() {
  return (
    <section id="creations">
      <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900">
        <div className="mb-20 flex justify-center md:justify-between">
          <h2
            className={`${josefinSans.className} text-center text-4xl uppercase md:text-left md:text-5xl`}
          >
            Our creations
          </h2>
          <button
            className={`${alata.className} loopstudios-button hidden md:block`}
          >
            See all
          </button>
        </div>

        <div className="loopstudios-items-container">
          <CreationItem
            text="Deep Earth"
            imageDesktop={imageDeepEarth}
            imageMobile={imageDeepEarthMobile}
            alt="deep earth"
          />
          <CreationItem
            text="Night Arcade"
            imageDesktop={imageNightArcade}
            imageMobile={imageNightArcadeMobile}
            alt="night arcade"
          />
          <CreationItem
            text="Soccer Team VR"
            imageDesktop={imageSoccerTeam}
            imageMobile={imageSoccerTeamMobile}
            alt="soccer team vr"
          />
          <CreationItem
            text="The Grid"
            imageDesktop={imageGrid}
            imageMobile={imageGridMobile}
            alt="the grid"
          />
        </div>

        <div className="loopstudios-items-container mt-10">
          <CreationItem
            text="From Up Above VR"
            imageDesktop={imageFromAbove}
            imageMobile={imageFromAboveMobile}
            alt="from up above vr"
          />
          <CreationItem
            text="Pocket Borealis"
            imageDesktop={imagePocket}
            imageMobile={imagePocketMobile}
            alt="pocket borealis"
          />
          <CreationItem
            text="The Curiosity"
            imageDesktop={imageCuriosity}
            imageMobile={imageCuriosityMobile}
            alt="the curiosity"
          />
          <CreationItem
            text="Make It Fisheye"
            imageDesktop={imageFisheye}
            imageMobile={imageFisheyeMobile}
            alt="make it fisheye"
          />
        </div>
        <div className="mt-10 flex justify-center md:hidden">
          <button
            className={`${alata.className} loopstudios-button w-full md:hidden`}
          >
            See all
          </button>
        </div>
      </div>
    </section>
  );
}
