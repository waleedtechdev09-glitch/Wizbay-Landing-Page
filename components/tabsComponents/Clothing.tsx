import React from "react";
import SideBar from "../SideBar";

// Mock Product Data representing the sweatshirts from the image
const SWEATSHIRTS_DATA = [
  {
    id: 1,
    brand: "U.S. Grand",
    name: "Blue Polyester Men Sweatshirt",
    originalPrice: 113.83,
    discount: 82,
    currentPrice: 20.46,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80", // High-quality mockup placeholder
  },
  {
    id: 2,
    brand: "U.S. Grand",
    name: "Black Polyester Men Sweatshirt",
    originalPrice: 113.83,
    discount: 82,
    currentPrice: 20.46,
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    brand: "U.S. Grand",
    name: "Black Cotton Men Sweatshirt",
    originalPrice: 113.83,
    discount: 82,
    currentPrice: 20.46,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
  },
];

const Clothing = () => {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans text-neutral-800">
      {/* Main Structural Wrapper for Side-by-Side View */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto items-start">
        {/* Sticky Filter Sidebar Column */}
        <div className="w-full lg:w-[300px] shrink-0 sticky top-4">
          <SideBar />
        </div>

        {/* Dynamic Products Grid Section */}
        <div className="flex-1 w-full">
          {/* Top Sort By Dropdown Action Bar */}
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

          {/* Product Items Responsive Grid Structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {SWEATSHIRTS_DATA.map((product) => (
              <div key={product.id} className="group flex flex-col w-full">
                {/* Product Image Light Gray Muted Box */}
                <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.brand} - ${product.name}`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Meta details matching layout spacing perfectly */}
                <div className="mt-4 flex flex-col space-y-1 px-1">
                  {/* Brand Row */}
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                    {product.brand}
                  </h3>

                  {/* Description / Item Info */}
                  <p className="text-xs text-neutral-400 font-normal truncate">
                    {product.name}
                  </p>

                  {/* Price Markup Values */}
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

export default Clothing;
