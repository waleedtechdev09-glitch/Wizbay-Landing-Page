"use client";

import Link from "next/link";
import { localeSelectors } from "./navigation/nav-data";

type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

type SocialLink = {
  label: string;
  icon: string;
};

const footerColumns: FooterColumn[] = [
  {
    title: "Get to Know Us",
    links: [
      { label: "About WizBay", href: "#about" },
      { label: "Our Mission & Values", href: "#mission" },
      { label: "Partnership Opportunities", href: "#partnerships" },
      { label: "Corporate News", href: "#news" },
    ],
  },
  {
    title: "Manage Account",
    links: [
      { label: "Account", href: "#account" },
      { label: "Your Orders", href: "#orders" },
    ],
  },
  {
    title: "WizBay Seller Central",
    links: [
      { label: "Create Account", href: "#create-seller" },
      { label: "Seller Central Guide", href: "#seller-guide" },
      { label: "Why Sell on WizBay", href: "#why-sell" },
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Articles", href: "#articles" },
      { label: "Chat Live Support", href: "#chat" },
    ],
  },
];

const paymentMethods = ["VISA", "MasterCard", "PayPal", "Apple Pay", "Google Pay"];
const shippingMethods = ["UPS", "DHL", "FedEx", "ACS", "TNT", "Aramex"];

const socialLinks: SocialLink[] = [
  {
    label: "Discord",
    icon: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z",
  },
  {
    label: "Facebook",
    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Pinterest",
    icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.175-.105-.945-.199-2.399.041-3.431.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.347 1.413c-.055.225-.186.272-.43.157-1.602-.746-2.601-3.093-2.601-4.979 0-4.053 2.946-7.779 8.5-7.779 4.463 0 7.931 3.18 7.931 7.429 0 4.434-2.796 8.002-6.674 8.002-1.303 0-2.53-.677-2.947-1.479l-.803 3.061c-.29 1.11-1.077 2.499-1.603 3.354A11.982 11.982 0 0012.017 24c6.62 0 11.983-5.367 11.983-11.987C24 5.367 18.637 0 12.017 0z",
  },
  {
    label: "YouTube",
    icon: "M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Instagram",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "X (Twitter)",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#3A4041] pb-6 pt-16 font-sans text-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          <div className="flex flex-col items-start pr-4 md:col-span-1 lg:col-span-2">
            <span className="select-none font-serif text-[26px] font-black uppercase tracking-wider">
              WIZBAY
            </span>
            <p className="mt-4 max-w-[280px] text-[13px] font-normal leading-relaxed text-[#D1D5D6]">
              Discover styles that fit your identity - from women&apos;s fashion
              to men&apos;s essentials.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col items-start">
              <h4 className="mb-4 text-[14px] font-semibold tracking-wide text-white">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-normal text-[#C4C9CA] transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 border-b border-[#52595A] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#A0A7A8]">
                Our Payment Methods
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="flex h-7 items-center justify-center rounded bg-white/10 px-2.5 text-[10px] font-bold tracking-wider text-white"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-wider text-[#A0A7A8]">
                We Ship With
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {shippingMethods.map((method) => (
                  <div
                    key={method}
                    className="flex h-7 items-center justify-center rounded bg-white/10 px-2.5 text-[10px] font-semibold tracking-wide text-white"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start lg:self-end">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={`#social-${social.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#3A4041] transition-transform duration-200 hover:scale-110"
                aria-label={social.label}
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-[12px] font-normal text-[#C4C9CA] sm:flex-row sm:items-center sm:justify-between">
          <div>&copy; 2025 All rights reserved. WizBay Limited</div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="#terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="#refunds" className="transition-colors hover:text-white">
              Refund Policies
            </Link>
            <Link href="#privacy" className="transition-colors hover:text-white">
              Privacy Policies
            </Link>

            <span className="hidden h-4 w-[1px] bg-[#52595A] sm:inline-block" />

            <div className="flex items-center gap-4">
              {localeSelectors.map((selector) => (
                <button
                  key={selector}
                  type="button"
                  className="inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-white"
                >
                  <span>{selector}</span>
                  <svg
                    className="h-3 w-3 pt-[2px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
