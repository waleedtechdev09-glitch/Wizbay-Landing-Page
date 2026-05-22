"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  audienceTabs,
  categoryTabs,
  localeSelectors,
  utilityLinks,
} from "./navigation/nav-data";

function isActiveCategory(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileMenuDrawer({
  onClose,
  pathname,
  activeAudience,
}: Readonly<{
  onClose: () => void;
  pathname: string;
  activeAudience: string;
}>) {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-white px-5 py-6 font-sans text-[#303030]">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h2 className="text-[20px] font-medium tracking-tight text-slate-800">Menu</h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-black"
          aria-label="Close Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-6 py-6">
        <section>
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Audience
          </p>
          <div className="grid grid-cols-2 gap-3">
            {audienceTabs.map((tab) => {
              const active = activeAudience === tab.value;
              return (
                <Link
                  key={tab.value}
                  href={`/?audience=${tab.value}`}
                  onClick={onClose}
                  className={`border px-4 py-3 text-center text-[14px] tracking-[0.08em] transition ${
                    active
                      ? "border-black bg-black text-white"
                      : "border-slate-200 text-slate-700 hover:border-black hover:text-black"
                  }`}
                >
                  {tab.label.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Categories
          </p>
          <div className="grid gap-2">
            {categoryTabs.map((category) => {
              const active = isActiveCategory(pathname, category.href);
              return (
                <Link
                  key={category.label}
                  href={category.href}
                  onClick={onClose}
                  className={`flex items-center justify-between border px-4 py-3 text-[15px] transition ${
                    active
                      ? "border-black bg-black text-white"
                      : "border-slate-200 text-slate-700 hover:border-black hover:text-black"
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="text-xs opacity-70">Open</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Links
          </p>
          <div className="grid gap-2">
            {utilityLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="border border-slate-200 px-4 py-3 text-[15px] text-slate-700 transition hover:border-black hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Locale
          </p>
          <div className="grid gap-2">
            {localeSelectors.map((label) => (
              <button
                key={label}
                type="button"
                className="flex items-center justify-between border border-slate-200 px-4 py-3 text-left text-[15px] text-slate-700 transition hover:border-black hover:text-black"
              >
                <span>{label}</span>
                <svg
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeAudience = searchParams.get("audience") ?? "men";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#ececec] bg-white font-sans text-[#303030]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="hidden items-center justify-between gap-4 py-4 md:flex">
          <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap text-[13px] font-medium tracking-[0.08em] text-[#666666] no-scrollbar">
            {audienceTabs.map((tab) => {
              const active = activeAudience === tab.value;
              return (
                <Link
                  key={tab.value}
                  href={`/?audience=${tab.value}`}
                  className={`relative shrink-0 pb-1 transition-colors hover:text-black ${
                    active ? "text-black" : "text-[#666666]"
                  }`}
                >
                  {tab.label.toUpperCase()}
                  {active && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-black" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mx-4 flex max-w-[430px] flex-1 items-center justify-center">
            <label className="relative w-full">
              <svg
                className="pointer-events-none absolute left-0.5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a8a8a8]"
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
                className="w-full border-b border-[#d8d8d8] bg-transparent py-1 pl-[4.5rem] pr-2 text-[16px] text-[#2b2b2b] placeholder:text-[#a3a3a3] transition-colors focus:border-black focus:outline-none"
              />
            </label>
          </div>

          <div className="flex items-center gap-4 text-[#444] sm:gap-5">
            <Link
              href="/auth/login"
              className="transition hover:text-black"
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
            </Link>

            <Link
              href="/auth/verification"
              className="transition hover:text-black"
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
            </Link>

            <Link
              href="/auth/verification"
              className="transition hover:text-black"
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
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-32 py-4 md:flex">
          <Link href="/" className="inline-block shrink-0">
            <div className="relative h-[18px] w-[85px]">
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

          <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap text-[17px] font-normal text-[#3C4242] no-scrollbar">
            {categoryTabs.map((category) => {
              const active = isActiveCategory(pathname, category.href);
              return (
                <Link
                  key={category.label}
                  href={category.href}
                  className={`shrink-0 transition ${
                    active
                      ? "font-semibold text-black underline underline-offset-4"
                      : "hover:text-black hover:underline"
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between py-4 md:hidden">
          <Link href="/" className="inline-block shrink-0">
            <div className="relative h-[20px] w-[95px]">
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

          <button
            type="button"
            className="cursor-pointer p-2 -mr-2 text-[#333] transition hover:text-black"
            onClick={() => setMobileDrawerOpen(true)}
            aria-label="Open Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setMobileDrawerOpen(false)}
        />
      )}

      {mobileDrawerOpen && (
        <div className="fixed inset-y-0 left-0 z-50 h-full w-full overflow-hidden bg-white shadow-2xl md:hidden">
          <MobileMenuDrawer
            onClose={() => setMobileDrawerOpen(false)}
            pathname={pathname}
            activeAudience={activeAudience}
          />
        </div>
      )}
    </nav>
  );
}
