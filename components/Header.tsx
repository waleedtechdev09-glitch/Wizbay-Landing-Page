"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);

  const utilityLinks = [
    "Invite a Friend",
    "Articles",
    "About Us",
    "Help",
    "Logout",
  ];

  const selectors = ["Kreuzberg", "€ Euro", "English"];

  return (
    <header className="w-full bg-[#F5F5F5] text-[#3f3f3f] font-sans">
      {/* Top Utility Row - Hidden on mobile, opens inside Hamburger Menu Drawer instead */}
      <div className="border-b border-[#ececec] hidden md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-end gap-5 px-4 py-2 sm:px-6 lg:px-10">
          {/* Utility Links Links */}
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar whitespace-nowrap text-[12px] font-normal text-[#555555]">
            {utilityLinks.map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="shrink-0 transition text-[#3C4242] hover:text-black text-[14px] font-medium"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Divider Line */}
          <span className="text-[#dddddd] text-[13px] select-none hidden sm:inline">
            |
          </span>

          {/* Selector Dropdowns */}
          <div className="flex shrink-0 items-center gap-5 text-[12px] font-normal text-[#2d2d2d]">
            {selectors.map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center gap-1 text-[14px] font-normal cursor-pointer transition hover:text-black"
                aria-label={label}
              >
                <span>{label}</span>
                <svg
                  className="h-3 w-3 text-[#777777]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Promo Notification Banner - Always remains visible and dynamic across screens */}
      {showBanner && (
        <div className="relative w-full border-b border-[#2d2f31] bg-[#333537] px-10 py-3 text-center text-white">
          <p className="text-[12px] sm:text-[13px] font-light tracking-wide px-4">
            Free Delivery on Orders Over €200!{" "}
            <Link
              href="#buy-now"
              className="underline decoration-white/70 underline-offset-2 font-normal inline-block ml-1 transition hover:text-[#e7e7e7]"
            >
              Buy Now
            </Link>
          </p>

          <button
            type="button"
            onClick={() => setShowBanner(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 cursor-pointer text-gray-400 transition hover:text-white"
            aria-label="Close banner"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
