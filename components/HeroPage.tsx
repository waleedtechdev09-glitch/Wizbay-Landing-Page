"use client";

import React, { useEffect, useState } from "react";

const SLIDE_DURATION = 4500;

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    title: "Your Weekly Luxury Drop is Here",
    description:
      "Top-tier brands. Exclusive prices. Shop now to get up to 60% off before it's gone.",
    cta: "Shop Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    title: "Fresh Edit, New Arrival",
    description:
      "Curated fashion staples and standout accessories, designed to move fast and feel premium.",
    cta: "Discover More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    title: "Pre-Loved, Still Iconic",
    description:
      "Explore premium pieces with timeless style and sharp prices, refreshed automatically every few seconds.",
    cta: "Explore Deals",
  },
];

const HeroPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const nextProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(nextProgress);

      if (elapsed < SLIDE_DURATION) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      setActiveIndex((current) => (current + 1) % slides.length);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [activeIndex]);

  const slide = slides[activeIndex];

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
    setProgress(0);
  };

  return (
    <section className="w-full px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:px-10 lg:pt-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid overflow-hidden bg-[#454b49] md:grid-cols-[1.12fr_1fr]">
          <div
            className="min-h-[280px] bg-cover bg-center transition-all duration-700 ease-out sm:min-h-[380px] md:min-h-[520px]"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
            aria-label="Fashion hero image"
            role="img"
          />

          <div className="flex min-h-[280px] flex-col justify-between px-5 py-6 text-white sm:min-h-[380px] sm:px-8 sm:py-8 md:min-h-[520px] md:px-10 md:py-10 lg:px-12 lg:py-12">
            <div className="max-w-[420px] pt-4 md:pt-10">
              <h1 className="max-w-[11ch] text-[1.95rem] font-light leading-[1.12] tracking-[-0.03em] sm:text-[2.4rem] md:text-[2.55rem] lg:text-[2.85rem]">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-[34ch] text-[0.95rem] font-light leading-6 text-white/88 sm:mt-6 sm:text-[1rem]">
                {slide.description}
              </p>
              <a
                href="#shop-now"
                className="mt-7 inline-flex items-center gap-2 text-[0.98rem] font-light text-white transition hover:text-white/80"
              >
                <span className="border-b border-white/80 pb-0.5">
                  {slide.cta}
                </span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="mt-8 flex items-end justify-between gap-6">
              <div className="flex w-full max-w-[176px] items-center gap-1.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className="relative h-[2px] flex-1 overflow-hidden bg-white/30"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span
                      className="absolute inset-y-0 left-0 bg-white transition-[width] duration-75 ease-linear"
                      style={{
                        width:
                          index < activeIndex
                            ? "100%"
                            : index > activeIndex
                              ? "0%"
                            : `${progress}%`,
                      }}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-5 text-white/78">
                <button
                  type="button"
                  className="transition hover:text-white"
                  aria-label="Previous slide"
                  onClick={goPrev}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="transition hover:text-white"
                  aria-label="Next slide"
                  onClick={goNext}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
