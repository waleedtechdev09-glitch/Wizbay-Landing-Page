"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const KidsSection = () => {
  // Collection promo blocks layout structure
  const promoSections = [
    {
      id: 1,
      title: "Must-haves for little ones",
      subtitle: "Footies, Rompers, Jackets",
      image: "/assets/collection/kids-clothing.png",
      alt: "Kids denim overalls and woven toys layout",
      link: "#kids-clothing",
    },
    {
      id: 2,
      title: "Luxury Accessories",
      subtitle:
        "Shop stylish accessories including hats, scarves, wallets, and statement essentials.",
      image: "/assets/collection/luxury-accessories.png",
      alt: "Summer hat, sunglasses, and striped cotton scarf layout",
      link: "#luxury-accessories",
    },
  ];

  return (
    <section className="w-full bg-white py-12 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Responsive grid split: 1 column on mobile, 2 columns on desktop screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
          {promoSections.map((promo) => (
            <div
              key={promo.id}
              className="flex flex-col border border-[#e5e5e5] bg-white transition-shadow duration-300 hover:shadow-xs"
            >
              {/* Product Layout Asset Container Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
                <div className="relative h-full w-full transition-transform duration-500 hover:scale-102">
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority={promo.id === 1}
                  />
                </div>
              </div>

              {/* Bottom Card Content Blocks Details */}
              <div className="flex flex-1 items-end justify-between p-5 pt-6 sm:p-6">
                <div className="flex flex-col pr-4">
                  {/* Headline Title Label */}
                  <h3 className="text-[18px] font-normal tracking-tight text-[#222222] sm:text-[20px]">
                    {promo.title}
                  </h3>

                  {/* Accompanying Subtitle Text Block */}
                  <p className="mt-1.5 text-[12px] font-normal leading-normal text-[#666666] sm:text-[13px] max-w-[340px]">
                    {promo.subtitle}
                  </p>
                </div>

                {/* Micro Action Direct Target Button Link */}
                <div className="shrink-0 mb-1">
                  <Link
                    href={promo.link}
                    className="inline-flex items-center gap-1.5 border border-[#999999] px-3 py-1.5 text-[11px] font-normal tracking-wide text-[#222222] transition-colors duration-200 hover:border-black hover:bg-black hover:text-white"
                  >
                    <span>Explore Now</span>
                    <svg
                      className="h-3 w-3 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KidsSection;
