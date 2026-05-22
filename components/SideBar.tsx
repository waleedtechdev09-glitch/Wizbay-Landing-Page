"use client"
import React, { useState } from "react";

// 1. Move configuration data outside the component to prevent re-creation
const FILTER_CATEGORIES = [
  "Category",
  "Brands",
  "Sizes",
  "Colors",
  "Conditions",
  "Prices",
  "Discount",
  "Materials",
];

// 2. DECLARE THIS COMPONENT OUTSIDE OF THE RENDER FUNCTION
const FilterContent = () => (
  <div className="flex flex-col h-full bg-white px-5 py-6 font-sans text-[#1e293b]">
    {/* Header section with Clear All link */}
    <div className="flex items-center justify-between pb-5 border-b border-slate-100">
      <h2 className="text-xl font-semibold tracking-wide">All Filters</h2>
      <button
        onClick={() => alert("Filters Cleared")}
        className="text-sm font-medium text-slate-500 underline underline-offset-2 hover:text-black transition-colors"
      >
        Clear All
      </button>
    </div>

    {/* Accordion Filter Items */}
    <div className="flex-1 overflow-y-auto space-y-1 mt-2 pr-1 custom-scrollbar">
      {FILTER_CATEGORIES.map((category, index) => (
        <div
          key={index}
          className="group flex items-center justify-between py-5 border-b border-slate-100 cursor-pointer hover:bg-slate-50/50 px-1 rounded-sm transition-all"
        >
          <span className="text-base font-medium text-slate-700 group-hover:text-black transition-colors">
            {category}
          </span>
          {/* Minimal Down Chevron Arrow Icon */}
          <svg
            className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-transform duration-200"
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
        </div>
      ))}
    </div>
  </div>
);

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- DESKTOP VIEWBOARD CONTAINER --- */}
      <aside className="hidden lg:block w-[340px] h-screen border-r border-slate-200 bg-white shadow-sm fixed left-0 top-0 overflow-hidden">
        {/* This works perfectly now! */}
        <FilterContent />
      </aside>

      {/* --- MOBILE & TABLET RESPONSIVE LAYOUT --- */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-black text-white px-5 py-3.5 rounded-full shadow-xl hover:bg-slate-800 active:scale-95 transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <span className="text-sm font-semibold tracking-wide">Filters</span>
        </button>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full max-w-[320px] h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-4 z-50 p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close Filter Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <FilterContent />
      </div>
    </>
  );
};

export default SideBar;

export { FilterContent, FILTER_CATEGORIES };
