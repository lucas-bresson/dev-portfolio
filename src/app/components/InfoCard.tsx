import imageUrl from '@images/berlin.webp';
import Image from 'next/image';

// const GradientLight = () => {
//   return (
//     <div className="pointer-events-none absolute left-1/4 top-4 aspect-square w-full bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70%" />
//   );
// };

const ClipPath = () => {
  return (
    <svg className="block" width={0} height={0}>
      <clipPath id="benefits" clipPathUnits="objectBoundingBox">
        <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
      </clipPath>
    </svg>
  );
};

const InfoCard = () => {
  return (
    <div
      id="card"
      className="block max-w-[32rem] translate-x-16 bg-[length:100%_100%] bg-no-repeat p-0.5 opacity-0"
      style={{ backgroundImage: `url('assets/images/card.svg')` }}
    >
      <div className="pointer-events-none relative z-10 flex h-[21rem] flex-col justify-between p-[2.4rem]">
        <div>
          <h2 className="mb-2 text-xl font-medium text-slate-200">
            Located in Berlin
          </h2>
          <p>
            available{' '}
            <span className="font-medium text-slate-200">
              on site, hybrid or fully remote
            </span>{' '}
            in the EU.
          </p>
        </div>
        <p>
          I have worked with international teams and clients for the past five
          years, using{' '}
          <span className="font-medium text-slate-200">
            English, French, and German.
          </span>
        </p>
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <p className="text-xl text-slate-200">Currently available</p>
            <div className="notification-mark">
              <span />
            </div>
          </div>
        </div>
      </div>

      {/* <GradientLight /> */}

      <div
        className="absolute inset-0.5 bg-slate-900"
        style={{ clipPath: 'url(#benefits)' }}
      >
        <div className="absolute inset-0 opacity-10 transition-opacity md:opacity-0 md:hover:opacity-15">
          <Image
            src={imageUrl}
            width={380}
            height={362}
            alt="tet"
            className="h-full w-full object-cover"
          />
          <ClipPath />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
