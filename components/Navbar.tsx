"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("WOMEN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const targetAudience = ["WOMEN", "MEN", "KIDS", "LIFE"];

  const categories = [
    "New Arrivals",
    "Brands",
    "Clothing",
    "Shoes",
    "Bags",
    "Sunglasses",
    "Accessories",
    "Jewelry",
    "Watches",
    "Pre-Loved",
    "Flash Sales",
  ];

  const utilityLinks = [
    "Invite a Friend",
    "Articles",
    "About Us",
    "Help",
    "Logout",
  ];

  const selectors = ["Kreuzberg", "€ Euro", "English"];

  return (
    <nav className="w-full border-b border-[#ececec] bg-white text-[#303030] font-sans sticky top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* =========================================================
            DESKTOP & TABLET ROW 1: Audience, Search, Icons
           ========================================================= */}
        <div className="hidden md:flex items-center justify-between py-4 gap-4">
          {/* Left Side: Target Audience Tabs */}
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar whitespace-nowrap text-[12px] font-medium tracking-[0.08em] text-[#666666] sm:text-[13px]">
            {targetAudience.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative shrink-0 pb-1 cursor-pointer transition-colors duration-200 hover:text-black ${
                  activeTab === tab
                    ? "text-[#3C4242] text-[12px] font-semibold"
                    : "text-normal"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-neutral-800 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Center: Desktop Search Bar */}
          <div className="flex flex-1 items-center  justify-center max-w-[430px] mx-4 ">
            <label className="relative w-full ">
              <svg
                className="pointer-events-none absolute left-0.5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a8a8a8] "
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full border-b border-[#d8d8d8] bg-transparent py-1 pl-18 pr-2 text-[16px] text-[#2b2b2b] placeholder:text-[#a3a3a3] focus:border-black focus:outline-none transition-colors "
              />
            </label>
          </div>

          {/* Right Side: Action Icons */}
          <div className="flex items-center gap-4 text-[#444] sm:gap-5">
            {/* Account */}
            <button
              className="transition hover:text-black cursor-pointer"
              aria-label="Account"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>

            {/* Wishlist */}
            <button
              className="transition hover:text-black cursor-pointer"
              aria-label="Wishlist"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            {/* Cart */}
            <button
              className="transition hover:text-black cursor-pointer"
              aria-label="Cart"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* =========================================================
            DESKTOP ROW 2: Logo & Main Categories Navigation
           ========================================================= */}
        <div className="hidden md:flex items-center gap-32 py-4">
          <Link href="/" className="inline-block shrink-0">
            <div className="relative w-[85px] h-[18px]">
              <Image
                src="/assets/wizbay-logo.png"
                alt="WIZBAY Logo"
                fill
                priority
                sizes="85px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap text-[17px] font-normal text-[#3C4242]">
            {categories.map((category) => (
              <Link
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="shrink-0 transition hover:text-black hover:underline"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================================
            MOBILE & SMALL TABLET HEADER (Wizbay Logo Left, Hamburger Right)
           ========================================================= */}
        <div className="flex md:hidden items-center justify-between py-4">
          {/* Wizbay Logo Left */}
          <Link href="/" className="inline-block shrink-0">
            <div className="relative w-[95px] h-[20px]">
              <Image
                src="/assets/wizbay-logo.png"
                alt="WIZBAY Logo"
                fill
                priority
                sizes="95px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Hamburger Menu Right */}
          <button
            className="p-2 -mr-2 transition text-[#333] hover:text-black cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* =========================================================
          RESPONSIVE MOBILE OVERLAY DRAWER
         ========================================================= */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#ececec] px-5 py-6 space-y-6 max-h-[85vh] overflow-y-auto shadow-xl animate-fadeIn">
          {/* 1. Mobile Search Bar */}
          <div className="w-full">
            <label className="relative w-full">
              <svg
                className="pointer-events-none absolute left-0.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a8a8a8]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border-b border-[#d8d8d8] bg-transparent py-2 pl-8 pr-2 text-[15px] focus:border-black focus:outline-none"
              />
            </label>
          </div>

          {/* 2. Target Audience Mobile Switcher */}
          <div className="flex items-center gap-4 border-b border-[#f5f5f5] pb-3 overflow-x-auto no-scrollbar">
            {targetAudience.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[13px] font-bold tracking-wider pb-1 transition-all ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black"
                    : "text-[#888888]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3. Main Navigation Links Categories */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#999999] font-bold mb-3">
              Categories
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[14px] font-medium text-[#444444] hover:text-black transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <hr className="border-[#ececec]" />

          {/* 4. Action / Utility Links inside Drawer for Mobile Layouts */}
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-widest text-[#999999] font-bold">
              Account & Settings
            </p>

            {/* Displaying Utility Links dynamically */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-[#555]">
              {utilityLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-black"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Displaying Dropdown Locales horizontally on mobile */}
            <div className="flex flex-wrap gap-4 pt-2 text-[13px] font-medium text-[#2b2b2b]">
              {selectors.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1 border border-[#e5e5e5] px-2.5 py-1 rounded-md bg-[#f9f9f9]"
                >
                  <span>{item}</span>
                  <svg
                    className="w-3 h-3 text-[#777]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
