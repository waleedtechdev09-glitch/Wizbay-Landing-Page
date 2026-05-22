import React from "react";
import SideBar from "../SideBar";

const PRODUCTS_DATA = [
  {
    id: 1,
    brand: "Burberry",
    name: "Beige Silk Scarf",
    originalPrice: 548.08,
    discount: 33,
    currentPrice: 368.28,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    brand: "Antony Morato",
    name: "Gray Suede Leather Chelsea Boots",
    originalPrice: 168.64,
    discount: 75,
    currentPrice: 42.28,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    brand: "Gucci",
    name: "Silver Stainless Steel Dress Watch",
    originalPrice: 1264.8,
    discount: 44,
    currentPrice: 705.19,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80",
  },
];

const NewArrival = () => {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans text-neutral-800">
      
      {/* 1. Main Flex Container: Jo Sidebar aur Content Area ko horizontally align karega */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto items-start">
        
        {/* SIDEBAR: Desktop par left side par rahega, width fixed ki hai */}
        <div className="w-full lg:w-[300px] shrink-0 sticky top-4">
          <SideBar />
        </div>

        {/* 2. Content Area Wrapper (Dropdown + Products Grid) */}
        <div className="flex-1 w-full">
          
          {/* Top Filter Bar (New Arrivals Dropdown) */}
          <div className="flex justify-end mb-6">
            <div className="relative inline-block text-left">
              <button className="inline-flex items-center justify-between gap-4 bg-[#f4f4f5] px-4 py-2.5 text-xs tracking-wide text-neutral-700 font-medium hover:bg-neutral-200/80 transition-colors">
                <span>New Arrivals</span>
                <svg className="w-3.5 h-3.5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Responsive Products Grid */}
          {/* Note: `lg:grid-cols-3` lagaya hai taake sidebar ke sath 3 products perfectly fit ho saken */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {PRODUCTS_DATA.map((product) => (
              <div key={product.id} className="group flex flex-col w-full">
                
                {/* Image Wrapper Box */}
                <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.brand} - ${product.name}`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Product Meta Details */}
                <div className="mt-4 flex flex-col space-y-1 px-1">
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                    {product.brand}
                  </h3>

                  <p className="text-xs text-neutral-400 font-normal truncate">
                    {product.name}
                  </p>

                  {/* Price Row */}
                  <div className="flex items-center gap-2.5 pt-1 text-xs font-medium">
                    <span className="text-neutral-400 line-through">
                      €{product.originalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>

                    <span className="text-neutral-400">-{product.discount}%</span>

                    <span className="text-[#dc2626] font-semibold">
                      €{product.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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

export default NewArrival;