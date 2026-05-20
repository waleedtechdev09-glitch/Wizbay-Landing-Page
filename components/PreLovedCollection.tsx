"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PreLovedCollection = () => {
  // Array holding placeholder data matching the 4 items shown in your layout
  const collectionItems = [
    {
      id: 1,
      alt: "Pre-loved Leather Jacket",
      image: "/assets/collection/jacket.png",
    },
    {
      id: 2,
      alt: "Pre-loved Strawberry Necklace",
      image: "/assets/collection/chain.png",
    },
    {
      id: 3,
      alt: "Pre-loved Prada Shoulder Bag",
      image: "/assets/collection/brown-hand-bag.png",
    },
    {
      id: 4,
      alt: "Pre-loved Trousers",
      image: "/assets/collection/baggy-pant.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Main layout container: stacked column structure on mobile viewports, row layout on desktop screens */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* =========================================================
              LEFT BLOCK: 2x2 Balanced Product Grid
             ========================================================= */}
          <div className="w-full lg:w-[55%]">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {collectionItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-square w-full overflow-hidden bg-[#F5F5F5] p-4 flex items-center justify-center transition-all duration-300 hover:bg-[#EAEAEA]"
                >
                  {/* Container ensuring images scale proportionally up to 85% bounds */}
                  <div className="relative h-[85%] w-[85%] transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-w-768px) 50vw, 30vw"
                      className="object-contain object-center"
                      priority={item.id <= 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              RIGHT BLOCK: Title, Text Paragraph & Action CTA Button
             ========================================================= */}
          <div className="flex flex-col items-start justify-center lg:w-[45%] lg:pl-4">
            {/* Component Section Title Headline */}
            <h2 className="text-[32px] font-normal tracking-tight text-[#222222] sm:text-[38px] md:text-[42px]">
              Pre-loved Collection
            </h2>

            {/* Supporting Content Sub-Text */}
            <p className="mt-4 max-w-[480px] text-[14px] font-normal leading-relaxed text-[#666666] sm:text-[15px]">
              A curated selection of gently used designer items at affordable
              prices, find your next treasure.
            </p>

            {/* Minimalist Outlined Action Button Component Link */}
            <Link
              href="#explore-preloved"
              className="mt-8 inline-block w-full max-w-[240px] border border-[#222222] py-3 text-center text-[12px] font-medium tracking-[0.08em] text-[#222222] uppercase transition-all duration-200 hover:bg-[#222222] hover:text-white"
            >
              EXPLORE COLLECTION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLovedCollection;
