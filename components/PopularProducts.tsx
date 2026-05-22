"use client";

import React, { useRef } from "react";
import Image from "next/image";

const PopularProducts = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Mock data representing the products in your design image
  const products = [
    {
      id: 1,
      brand: "Gucci",
      price: "€550",
      image: "/assets/gucci.png",
      onSale: false,
    },
    {
      id: 2,
      brand: "Burberry",
      originalPrice: "€550",
      discount: "-50%",
      price: "€269",
      image: "/assets/burberry.png",
      onSale: true,
    },
    {
      id: 3,
      brand: "Chanel",
      price: "€750",
      image: "/assets/chanel.png",
      onSale: false,
    },
    {
      id: 4,
      brand: "Prada",
      price: "€600",
      image: "/assets/prada.png",
      onSale: false,
    },
    {
      id: 5,
      brand: "Jimmy Choo",
      price: "€650",
      image: "/assets/jimmychoo.png",
      onSale: false,
    },
  ];

  // Optional simple click scroll handler for navigation arrows
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - 300 : scrollLeft + 300;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-white py-12 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Section Title */}
        <h2 className="mb-10 text-[20px] font-medium tracking-tight text-[#222222] sm:text-[22px]">
          Popular Products
        </h2>

        {/* Outer Slider Container with Hover Arrows */}
        <div className="relative group">
          {/* Left Arrow Icon Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] z-10 -translate-y-1/2 p-2 text-[#999999] hover:text-black transition-colors hidden sm:block cursor-pointer"
            aria-label="Previous products"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Icon Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-[40%] z-10 -translate-y-1/2 p-2 text-[#999999] hover:text-black transition-colors hidden sm:block cursor-pointer"
            aria-label="Next products"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Horizontal Grid / Scroll Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-2 sm:px-8"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[240px] flex-1 flex flex-col items-center group/card"
              >
                {/* 1. Product Image Frame */}
                <div className="relative w-full aspect-[1/1.1] flex items-center justify-center p-4">
                  <div className="relative w-[85%] h-[85%] transition-transform duration-300 group-hover/card:scale-102">
                    <Image
                      src={product.image}
                      alt={product.brand}
                      fill
                      sizes="(max-w-768px) 50vw, 20vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* 2. Top Minimal Horizontal Border Divider Line */}
                <div className="w-full border-t border-[#e8e8e8] pt-4 mt-2 flex flex-col items-center" />

                {/* 3. Brand Text Header */}
                <h3 className="text-[15px] font-normal tracking-wide text-[#333333]">
                  {product.brand}
                </h3>

                {/* 4. Price Matrix Container */}
                <div className="mt-2 text-[13px] tracking-normal flex items-center gap-2">
                  {product.onSale ? (
                    <>
                      {/* Original Strikethrough Price */}
                      <span className="text-[#999999] line-through font-light">
                        {product.originalPrice}
                      </span>
                      {/* Percent Tag */}
                      <span className="text-[#999999] font-light">
                        {product.discount}
                      </span>
                      {/* Highlighted Sale Label Color */}
                      <span className="text-[#E76363] font-medium">
                        {product.price}
                      </span>
                    </>
                  ) : (
                    /* Default Price Color */
                    <span className="text-[#707070] font-normal">
                      {product.price}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
