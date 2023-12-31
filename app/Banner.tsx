"use client";
import Link from "next/link";
import React, { Suspense } from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(/bgImage.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
      className="text-white snap-center min-h-screen md:h-screen w-full text-center overflow-x-hidden flex flex-col items-center justify-center  relative md:py-0"
    >
      <div
        className="absolute bottom-0 z-0 h-[100vh] w-full "
        style={{
          background: "rgba(0,0,0,0.3)",
          backgroundImage: `linear-gradient(to top, rgba(0,0,0, 3) 0, rgba(0,0,0,.0) 60%, rgba(0,0,0,0.3) 100%)`,
        }}
      />
      <div className="w-full z-10  justify-center items-center px-4 md:px-0  flex flex-col space-y-3">
        <p className="uppercase tracking-widest text-xl font-bold text-[#6f8ee3]">
          Nurturing Dreams, Building Futures
        </p>
        <h1 className="text-3xl uppercase tracking-wide font-medium">
          Guiding Dreams, Paving Paths: Your College Journey Starts Here
        </h1>
        <div className="flex flex-col space-y-4 items-center justify-center md:space-y-0 md:flex-row md:space-x-4">
          <Link
            href="#about"
            className="px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#587ce0] bg-[#587ce0] transition-all duration-200 ease-in"
          >
            More About us
          </Link>
          <Link
            href="mailto:sameembaba22@gmail.com"
            className="px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#587ce0] transition-all duration-200 ease-in"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
