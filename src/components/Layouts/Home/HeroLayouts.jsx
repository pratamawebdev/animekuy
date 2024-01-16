"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const HeroLayouts = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <section className="flex justify-center w-full min-h-screen gap-0 px-8 bg-center bg-no-repeat bg-cover sm:py-48 py-36 bg-hero sm:p-16 lg:items-center max-lg:flex-col sm:gap-16">
        <div className="flex flex-1 gap-10">
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            Immerse in <span className="red-gradient">Anime Magic</span>,
            Infinite Adventures.
          </h1>
        </div>
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image
            src="https://res.cloudinary.com/dnrorybws/image/upload/v1705301166/pngwing.com_lkjiw8.png"
            alt="anime"
            fill
            className="object-contain"
          />
        </div>
      </section>
    );
  }
};

export default HeroLayouts;
