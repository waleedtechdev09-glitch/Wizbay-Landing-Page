"use client";

import Link from "next/link";
import React from "react";

const FAQs = () => {
  // Array holding structural data for the info help blocks
  const helpCards = [
    {
      id: 1,
      title: "HOW TO SHOP",
      description: "Your guide to shopping and placing orders",
      link: "#how-to-shop",
      // Coat hanger custom inline SVG icon
      icon: (
        <svg
          className="h-6 w-6 text-[#222222]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3a3 3 0 00-3 3v1c0 1.1-.9 2-2 2H5.5A2.5 2.5 0 003 11.5v.75a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 12.25v-.75A2.5 2.5 0 0018.5 9H17a2 2 0 01-2-2V6a3 3 0 00-3-3z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v14" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "FAQ",
      description: "Your questions answered",
      link: "#faq-answers",
      // Help/Question circle custom inline SVG icon
      icon: (
        <svg
          className="h-6 w-6 text-[#222222]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "SELL ON WIZBAY?",
      description: "Check this now & be a seller",
      link: "#sell-with-us",
      // Chat message box bubble custom inline SVG icon
      icon: (
        <svg
          className="h-6 w-6 text-[#222222]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Responsive Grid Layout: 1 column on mobile, 3 columns on tablet/desktop viewports */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {helpCards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="group flex flex-col items-start justify-center border border-[#e5e5e5] bg-white p-6 transition-all duration-200 hover:border-black hover:shadow-xs"
            >
              {/* Dynamic Icon Shell Element */}
              <div className="mb-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                {card.icon}
              </div>

              {/* Text Meta Blocks Row */}
              <div className="flex flex-col">
                {/* Bold Category Target String Identifier */}
                <h3 className="text-[13px] font-bold tracking-wider text-[#222222] uppercase sm:text-[14px]">
                  {card.title}
                </h3>

                {/* Descriptive Label Note */}
                <p className="mt-1 text-[12px] font-normal leading-normal text-[#666666] sm:text-[13px]">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
