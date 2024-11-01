'use client';

import { useEffect, useRef } from 'react';

const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Play video after 3 seconds
    const playVideo = setTimeout(() => {
      videoRef.current?.play();
    }, 1000);

    return () => {
      clearTimeout(playVideo);
    };
  }, []);

  return (
    <div className="relative z-10 flex h-[20vh] w-full items-end justify-center">
      <div>
        <p className="cursor-default p-5 text-center text-sm font-semibold text-slate-400 hover:text-teal-400">
          Designed & developed by Lucas Bresson
        </p>
      </div>
      {/* <video
        ref={videoRef}
        muted
        autoPlay
        loop
        className="z-1 absolute bottom-0 left-0 h-full w-full object-cover"
      >
        <source src="/assets/videos/autumn-leaves.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Footer;
