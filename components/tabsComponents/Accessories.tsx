import React from "react";
import SideBar from "../SideBar";

const ACCESSORIES_DATA = [
  {
    id: 1,
    brand: "Montblanc",
    name: "Sartorial Leather Business Card Holder",
    originalPrice: 195.0,
    discount: 25,
    currentPrice: 146.25,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    brand: "Gucci",
    name: "Signature Web Detail Canvas Belt",
    originalPrice: 360.0,
    discount: 30,
    currentPrice: 252.0,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb8ef555d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    brand: "Bottega Veneta",
    name: "Intrecciato Nappa Leather Key Ring",
    originalPrice: 280.0,
    discount: 15,
    currentPrice: 238.0,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
  },
];

const Accessories = () => {
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
            {ACCESSORIES_DATA.map((product) => (
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

export default Accessories;
