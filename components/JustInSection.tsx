"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const JustInSection = () => {
  // Items matching the product drops in your design image
  const products = [
    { id: 1, name: "HANDBAGS", image: "/assets/handbag.png" },
    { id: 2, name: "PUMPS", image: "/assets/pumps.png" },
    { id: 3, name: "SWEATSHIRTS", image: "/assets/sweatshirt.png" },
    { id: 4, name: "SHOULDER BAGS", image: "/assets/shoulderbag.png" },
  ];

  return (
    <section className="w-full bg-white py-12 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Main Flexible Split Row Layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-8">
          {/* =========================================================
              LEFT BLOCK: Call To Action (Text Header & Button)
             ========================================================= */}
          <div className="flex flex-col items-start justify-center text-left lg:w-[25%] shrink-0">
            {/* Main Headline */}
            <h2 className="text-[36px] font-light tracking-[0.05em] text-[#222222] uppercase sm:text-[42px] md:text-[46px]">
              JUST IN
            </h2>

            {/* Supporting Text Label */}
            <p className="mt-2 text-[13px] font-normal tracking-wide text-[#666666] md:text-[14px]">
              Move fast, add today's beauties to your bag
            </p>

            {/* Border Call To Action Button Link */}
            <Link
              href="#shop-new"
              className="mt-6 inline-block w-full max-w-[200px] border border-[#222222] py-2.5 text-center text-[12px] font-medium tracking-[0.06em] text-[#222222] uppercase transition-all duration-200 hover:bg-[#222222] hover:text-white"
            >
              SHOP NOW
            </Link>
          </div>

          {/* =========================================================
              RIGHT BLOCK: Product Category Grid Layout
             ========================================================= */}
          <div className="w-full lg:flex-1">
            {/* Grid structure: 2 cols on mobile/tablet, 4 cols on desktop screens */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col items-center cursor-pointer text-center"
                >
                  {/* Subtle grey rectangle container frame */}
                  <div className="relative aspect-[1/1.25] w-full overflow-hidden rounded-xs bg-[#F5F5F5] p-5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#EAEAEA]">
                    {/* Inner image wrapper with continuous hardware scale properties */}
                    <div className="relative w-[90%] h-[90%] transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={item.image}
                        alt={`${item.name} Showcase`}
                        fill
                        sizes="(max-w-640px) 50vw, (max-w-1024px) 25vw, 20vw"
                        priority={item.id <= 2}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Clean text label matching image footprint metrics */}
                  <span className="mt-4 text-[11px] font-medium tracking-[0.08em] text-[#555555] transition-colors duration-200 group-hover:text-black">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JustInSection;
