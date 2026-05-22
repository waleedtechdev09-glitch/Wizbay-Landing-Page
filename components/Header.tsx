"use client";

import Link from "next/link";
import { useState } from "react";
import { localeSelectors, utilityLinks } from "./navigation/nav-data";

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <header className="w-full bg-[#F5F5F5] font-sans text-[#3f3f3f]">
      <div className="hidden border-b border-[#ececec] md:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-end gap-5 px-4 py-2 sm:px-6 lg:px-10">
          <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap text-[14px] font-medium text-[#555555] no-scrollbar">
            {utilityLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="shrink-0 transition hover:text-black text-[#3C4242]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <span className="select-none text-[13px] text-[#dddddd] hidden sm:inline">
            |
          </span>

          <div className="flex shrink-0 items-center gap-5 text-[12px] font-normal text-[#2d2d2d]">
            {localeSelectors.map((label) => (
              <button
                key={label}
                type="button"
                className="inline-flex cursor-pointer items-center gap-1 text-[14px] font-normal transition hover:text-black"
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

      {showBanner && (
        <div className="relative w-full border-b border-[#2d2f31] bg-[#333537] px-10 py-3 text-center text-white">
          <p className="px-4 text-[12px] font-light tracking-wide sm:text-[13px]">
            Free Delivery on Orders Over €200!{" "}
            <Link
              href="#buy-now"
              className="ml-1 inline-block font-normal underline decoration-white/70 underline-offset-2 transition hover:text-[#e7e7e7]"
            >
              Buy Now
            </Link>
          </p>

          <button
            type="button"
            onClick={() => setShowBanner(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-gray-400 transition hover:text-white sm:right-4"
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
}
