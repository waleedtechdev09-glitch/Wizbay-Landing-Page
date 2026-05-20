"use client";

import React, { useRef } from "react";
import Link from "next/link";

const Brands = () => {
  const sliderRef = useRef(null);

  const brandLogos = [
    { id: 1, name: "GANT" },
    { id: 2, name: "PRADA" },
    { id: 3, name: "FILA" },
    { id: 4, name: "GUCCI" },
    { id: 5, name: "ADDIDAS" },
    { id: 6, name: "FENDI" },
    { id: 7, name: "HUGO" },
    { id: 8, name: "VERSACE" },
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const scrollAmount = direction === "left" ? -360 : 360;
      sliderRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-12 font-sans text-[#222222]">
      {/* नीचे दिया गया <style> टैग बिना किसी बाहरी CSS फ़ाइल के 
        हॉरिज़ॉन्टल स्क्रॉल बार को पूरी तरह से छुपा देगा।
      */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari और Opera के लिए */
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE और Edge के लिए */
          scrollbar-width: none; /* Firefox के लिए */
        }
      `}</style>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <h2 className="mb-8 text-[20px] font-medium tracking-tight sm:text-[22px]">
          Brands
        </h2>

        {/* Outer Slider Wrapper */}
        <div className="relative w-full">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#888888] shadow-xs transition-all hover:border-black hover:text-black sm:left-0 cursor-pointer"
            aria-label="Scroll left"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececec] bg-white text-[#888888] shadow-xs transition-all hover:border-black hover:text-black sm:right-0 cursor-pointer"
            aria-label="Scroll right"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Horizontal Text-Only Scroll Strip */}
          {/* यहाँ हमने 'hide-scrollbar' क्लास का इस्तेमाल किया है */}
          <div
            ref={sliderRef}
            className="hide-scrollbar flex w-full gap-4 overflow-x-auto scroll-smooth pb-4 px-2 sm:px-6"
          >
            {brandLogos.map((brand) => (
              <div
                key={brand.id}
                className="group flex aspect-[16/9] w-[140px] shrink-0 items-center justify-center rounded-xs border border-[#f3f3f3] bg-white p-4 transition-all duration-300 hover:border-black hover:shadow-xs sm:w-[160px] md:w-[170px]"
              >
                <span className="font-serif text-[15px] font-bold tracking-[0.15em] text-[#222222] uppercase select-none transition-transform duration-200 group-hover:scale-105 sm:text-[17px]">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA "View all brands" */}
        <div className="mt-6 flex justify-center">
          <Link
            href="#all-brands"
            className="inline-flex items-center gap-1.5 text-[12px] font-normal text-[#666666] underline underline-offset-4 decoration-[#cccccc] transition-colors hover:text-black hover:decoration-black"
          >
            <span>View all brands</span>
            <svg
              className="h-3 w-3 pt-[1px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brands;
