import React from "react";
import SideBar from "../SideBar";

// Mock Product Data matching the premium bags from the uploaded reference
const BAGS_DATA = [
  {
    id: 1,
    brand: "Tommy Hilfiger",
    name: "Black Canvas Crossbody Pouch Bag",
    originalPrice: 89.9,
    discount: 35,
    currentPrice: 58.43,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", // Premium bag placeholder
  },
  {
    id: 2,
    brand: "Calvin Klein",
    name: "Minimalist Black Structured Shoulder Bag",
    originalPrice: 110.0,
    discount: 40,
    currentPrice: 66.0,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    brand: "Tommy Hilfiger",
    name: "Corporate Statement Logo Utility Bag",
    originalPrice: 95.0,
    discount: 25,
    currentPrice: 71.25,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
  },
];

const Bags = () => {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans text-neutral-800">
      {/* Main Structural Layout: Side-by-Side Flex Grid */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto items-start">
        {/* Sticky Filter Sidebar Column */}
        <div className="w-full lg:w-[300px] shrink-0 sticky top-4">
          <SideBar />
        </div>

        {/* Products Dynamic Grid Area */}
        <div className="flex-1 w-full">
          {/* Top Sort Action Sub-Header */}
          <div className="flex justify-end mb-6">
            <div className="relative inline-block text-left">
              <button className="inline-flex items-center justify-between gap-4 bg-[#f4f4f5] px-4 py-2.5 text-xs tracking-wide text-neutral-700 font-medium hover:bg-neutral-200/80 transition-colors">
                <span>Sort By</span>
                <svg
                  className="w-3.5 h-3.5 text-neutral-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Product Items Adaptive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {BAGS_DATA.map((product) => (
              <div key={product.id} className="group flex flex-col w-full">
                {/* Image Aspect Wrapper with Muted Backdrop Color */}
                <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.brand} - ${product.name}`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Typography metadata with precise luxury line-spacing */}
                <div className="mt-4 flex flex-col space-y-1 px-1">
                  {/* Brand Row Label */}
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                    {product.brand}
                  </h3>

                  {/* Sub-Title Content Descriptor */}
                  <p className="text-xs text-neutral-400 font-normal truncate">
                    {product.name}
                  </p>

                  {/* Numerical Price Row */}
                  <div className="flex items-center gap-2.5 pt-1 text-xs font-medium">
                    <span className="text-neutral-400 line-through">
                      €
                      {product.originalPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>

                    <span className="text-neutral-400">
                      -{product.discount}%
                    </span>

                    <span className="text-[#dc2626] font-semibold">
                      €
                      {product.currentPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bags;
