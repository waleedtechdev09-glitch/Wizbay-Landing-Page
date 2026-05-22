import React from "react";
import SideBar from "../SideBar";

// Mock Product Data representing the shoes from the image
const SHOES_DATA = [
  {
    id: 1,
    brand: "Calvin Klein",
    name: "Bianco Polyurethane Men Sneaker",
    originalPrice: 160.21,
    discount: 60,
    currentPrice: 64.11,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80", // Premium sneaker placeholder
  },
  {
    id: 2,
    brand: "Cerruti 1881",
    name: "Black Cowhide Men Sandal",
    originalPrice: 235.04,
    discount: 74,
    currentPrice: 61.38,
    image:
      "https://images.unsplash.com/photo-1546515479-c8e8637874fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    brand: "Cerruti 1881",
    name: "Black Leather Men Sandal",
    originalPrice: 235.04,
    discount: 74,
    currentPrice: 61.38,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80",
  },
];

const Shoes = () => {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans text-neutral-800">
      {/* Main Container: Aligns Sidebar and Products Grid Side-by-Side */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto items-start">
        {/* Persistent Filter Sidebar Column */}
        <div className="w-full lg:w-[300px] shrink-0 sticky top-4">
          <SideBar />
        </div>

        {/* Products Display Area */}
        <div className="flex-1 w-full">
          {/* Top Sort By Action Bar */}
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

          {/* Product Cards Grid System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {SHOES_DATA.map((product) => (
              <div key={product.id} className="group flex flex-col w-full">
                {/* Image Framing Container */}
                <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.brand} - ${product.name}`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Typography Details Spacing */}
                <div className="mt-4 flex flex-col space-y-1 px-1">
                  {/* Brand Identifier */}
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                    {product.brand}
                  </h3>

                  {/* Product Descriptive Subtitle */}
                  <p className="text-xs text-neutral-400 font-normal truncate">
                    {product.name}
                  </p>

                  {/* Retail Value Metrics Rows */}
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

export default Shoes;
