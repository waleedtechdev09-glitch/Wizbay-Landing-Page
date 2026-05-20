"use client";

import React, { useState } from "react";
import Image from "next/image";

const ReferSection = () => {
  const referralLink = "www.wizbay.com/en/auth/register/?code=KH40L2A8FC7Y5M4L";
  const [copied, setCopied] = useState(false);

  // Function to copy the referral link code directly to the user's clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset feedback message state after 2 seconds
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <section className="w-full bg-white py-12 font-sans text-[#222222]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Main Banner Shell Container Frame with a subtle 50px rounded corner profile */}
        <div className="relative w-full overflow-hidden rounded-[32px] bg-[#F2F2F2] px-6 py-12 md:px-12 lg:py-0">
          {/* Decorative CSS Concentric Circle Vector Pattern Background layer */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.25] flex items-center justify-center">
            <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-gray-600 sm:h-[450px] sm:w-[450px]" />
            <div className="absolute h-[450px] w-[450px] rounded-full border border-gray-600 sm:h-[650px] sm:w-[650px]" />
            <div className="absolute h-[600px] w-[600px] rounded-full border border-dashed border-gray-600 sm:h-[850px] sm:w-[850px]" />
          </div>

          {/* Flex Row Container Layout arranging models and text block layer */}
          <div className="relative z-10 flex flex-col items-center justify-between lg:flex-row lg:h-[360px]">
            {/* LEFT MODEL IMAGE FRAME CONTAINER */}
            <div className="hidden lg:block relative w-[290px] h-[360px] self-end">
              <Image
                src="/assets/collection/left-men.png"
                alt="Male model wearing a casual dark hoodie jacket look"
                fill
                sizes="220px"
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* MIDDLE TEXT CONTENT AND ACTION BLOCK SHELL */}
            <div className="flex flex-1 flex-col items-center text-center max-w-[560px] mx-auto py-4">
              {/* Dynamic Action Headline Section Header */}
              <h2 className="inline-flex items-center flex-wrap justify-center gap-x-2 text-[26px] font-medium tracking-tight text-[#222222] sm:text-[32px] md:text-[36px]">
                <span>Refer a Friend</span>
                <span className="font-light text-gray-500">→</span>
                <span className="font-semibold text-black">Get 10%</span>
              </h2>

              {/* Informative Content Message Description Text Block */}
              <p className="mt-3 text-[12px] font-normal leading-relaxed text-[#555555] sm:text-[13px] max-w-[440px]">
                Share The Joy! Invite Your Friends To Join Us And You'll Both
                Enjoy Exclusive Discounts On Your Next Purchase.
              </p>

              {/* COPY CLIPBOARD CONTROL ROW BLOCK CONTAINER */}
              <div className="relative mt-6 flex w-full items-center bg-white border border-[#e2e2e2] rounded-md px-3 py-2.5 shadow-xs">
                <input
                  type="text"
                  title="Referral Link Input Field"
                  readOnly
                  placeholder=""
                  value={referralLink}
                  className="w-full bg-transparent text-left font-mono text-[11px] text-[#444444] outline-none pr-8 select-all sm:text-[12px]"
                />

                {/* Micro Clipboard Trigger Push Icon Button Element */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="absolute right-3 flex items-center justify-center p-1 text-[#888888] transition-colors hover:text-black cursor-pointer"
                  title="Copy link to clipboard"
                  aria-label="Copy referral link"
                >
                  {copied ? (
                    <span className="text-[10px] font-sans text-green-600 font-semibold animate-fade-in">
                      Copied!
                    </span>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 016.548 0c1.131.094 1.976 1.057 1.976 2.192V16.5b0 1.135-.845 2.098-1.976 2.192a48.424 48.424 0 01-1.25.047m-7.5-11.25C5.466 7.5 4.5 8.466 4.5 9.608v7.884c0 1.142.966 2.108 2.108 2.108h5.784c1.142 0 2.108-.966 2.108-2.108V9.608c0-1.142-.966-2.108-2.108-2.108H6.75z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* ACTION CTA CONVERSION CONTEXT SUBMIT BUTTON BUTTON ELEMENT */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="mt-6 inline-flex w-full max-w-[180px] items-center justify-center gap-2 bg-[#333333] py-3 text-[13px] font-normal tracking-wide text-white transition-all duration-200 hover:bg-black shadow-sm hover:shadow cursor-pointer"
              >
                <span>Invite Now</span>
                <svg
                  className="h-3.5 w-3.5 pt-[1px] transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            {/* RIGHT MODEL IMAGE FRAME CONTAINER */}
            <div className="hidden lg:block relative w-[290px] h-[360px] self-end">
              <Image
                src="/assets/collection/right-men.png"
                alt="Male model showcasing smart casual outfit styling with shorts"
                fill
                sizes="220px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferSection;
