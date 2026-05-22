import React from "react";
import SideBar from "../SideBar";

const JEWELRY_DATA = [
  {
    id: 1,
    brand: "Swarovski",
    name: "Crystal Pavé Pendant Necklace",
    originalPrice: 145.0,
    discount: 30,
    currentPrice: 101.5,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    brand: "Pandora",
    name: "Silver Snake Chain Charm Bracelet",
    originalPrice: 85.0,
    discount: 15,
    currentPrice: 72.25,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    brand: "Tiffany & Co.",
    name: "18k Gold Classic Band Ring",
    originalPrice: 1150.0,
    discount: 20,
    currentPrice: 920.0,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
  },
];

const Jewelry = () => {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans text-neutral-800">
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1600px] mx-auto items-start">
        <div className="w-full lg:w-[300px] shrink-0 sticky top-4">
          <SideBar />
        </div>
        <div className="flex-1 w-full">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
            {JEWELRY_DATA.map((product) => (
              <div key={product.id} className="group flex flex-col w-full">
                <div className="relative aspect-[4/3] w-full bg-[#f4f4f4] flex items-center justify-center p-8 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="mt-4 flex flex-col space-y-1 px-1">
                  <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                    {product.brand}
                  </h3>
                  <p className="text-xs text-neutral-400 font-normal truncate">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-2.5 pt-1 text-xs font-medium">
                    <span className="text-neutral-400 line-through">
                      €{product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-neutral-400">
                      -{product.discount}%
                    </span>
                    <span className="text-[#dc2626] font-semibold">
                      €{product.currentPrice.toFixed(2)}
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

export default Jewelry;
