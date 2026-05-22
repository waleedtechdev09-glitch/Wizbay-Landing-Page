import React from "react";
import SideBar from "../SideBar";

// Mock Product Data customized explicitly for a luxury Preloved marketplace
const PRELOVED_DATA = [
  {
    id: 1,
    brand: "Chanel Pre-Owned",
    name: "1995 Vintage Black Quilted Double Flap Bag",
    originalPrice: 8400.0,
    discount: 25,
    currentPrice: 6300.0,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    condition: "Excellent Vintage",
  },
  {
    id: 2,
    brand: "Louis Vuitton Pre-Owned",
    name: "Monogram Canvas Keepall Bandoulière 50",
    originalPrice: 2200.0,
    discount: 30,
    currentPrice: 1540.0,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
    condition: "Gently Used",
  },
  {
    id: 3,
    brand: "Hermès Pre-Owned",
    name: "Classic H-Belts Epsom Gold Leather Strap",
    originalPrice: 875.0,
    discount: 15,
    currentPrice: 743.75,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb8ef555d?auto=format&fit=crop&w=600&q=80",
    condition: "Pristine Condition",
  },
];

const Preloved = () => {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans text-neutral-800">
      {/* Main Container Layout for Side-By-Side Design compatibility */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto items-start">
        {/* Sticky Filtering Column */}
        <div className="w-full lg:w-[300px] shrink-0 sticky top-4">
          <SideBar />
        </div>

        {/* Products Core Area */}
        <div className="flex-1 w-full">
          {/* Top Selection Action bar */}
          <div className="flex justify-end mb-6">
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

          {/* Product Items Responsive Layout Frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {PRELOVED_DATA.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col w-full relative"
              >
                {/* Product Box Image Aspect Frame with Muted Light Gray Styling */}
                <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center p-8 overflow-hidden">
                  {/* Condition Badge Indicator on Top-Left Corner */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[9px] font-semibold tracking-wider text-neutral-700 uppercase px-2 py-1 shadow-xs z-10 border border-neutral-100">
                    {product.condition}
                  </span>

                  <img
                    src={product.image}
                    alt={`${product.brand} - ${product.name}`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Structured Metadata Text Area */}
                <div className="mt-4 flex flex-col space-y-1 px-1">
                  {/* Brand Row Label */}
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                    {product.brand}
                  </h3>

                  {/* Subtitle Name String */}
                  <p className="text-xs text-neutral-400 font-normal truncate">
                    {product.name}
                  </p>

                  {/* Pricing Matrix */}
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

export default Preloved;
