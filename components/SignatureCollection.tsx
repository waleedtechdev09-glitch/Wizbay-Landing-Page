"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignatureCollection = () => {
  const collectionItems = [
    {
      id: 1,
      alt: "Signature Dark Green Bag",
      image: "/assets/collection/black-bag.png",
    },
    {
      id: 2,
      alt: "Signature Floral Pattern Bag",
      image: "/assets/collection/pink-bag.png",
    },
    {
      id: 3,
      alt: "Signature Taupe Crossbody Bag",
      image: "/assets/collection/gray-bag.png",
    },
    {
      id: 4,
      alt: "Signature Light Grey Tote Bag",
      image: "/assets/collection/light-gray.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col items-start justify-center order-2 lg:order-1 lg:w-[45%] lg:pr-4">
            <h2 className="text-[32px] font-normal tracking-tight text-[#222222] sm:text-[38px] md:text-[42px]">
              Signature Bag Collection
            </h2>

            <p className="mt-4 max-w-[480px] text-[14px] font-normal leading-relaxed text-[#666666] sm:text-[15px]">
              A curated selection of timeless silhouettes crafted for everyday
              elegance.
            </p>

            <Link
              href="#explore-signature"
              className="mt-8 inline-block w-full max-w-[240px] border border-[#222222] py-3 text-center text-[12px] font-medium tracking-[0.08em] text-[#222222] uppercase transition-all duration-200 hover:bg-[#222222] hover:text-white"
            >
              EXPLORE COLLECTION
            </Link>
          </div>

          <div className="w-full order-1 lg:order-2 lg:w-[55%]">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {collectionItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-square w-full overflow-hidden bg-[#F5F5F5] p-4 flex items-center justify-center transition-all duration-300 hover:bg-[#EAEAEA]"
                >
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
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
