"use client";

import { useState } from "react";

type CheckboxItem = {
  label: string;
  count?: number;
};

type Swatch = {
  label: string;
  color: string;
};

type FilterSectionKey =
  | "category"
  | "brands"
  | "sizes"
  | "colors"
  | "conditions"
  | "prices"
  | "discount"
  | "materials";

const categoryItems: CheckboxItem[] = [
  { label: "Clothing", count: 6670 },
  { label: "Accessories", count: 4361 },
  { label: "Bags", count: 2097 },
  { label: "Shoes", count: 1582 },
];

const brandItems: CheckboxItem[] = [
  { label: "Acht", count: 86 },
  { label: "Alexander McQueen", count: 32 },
  { label: "Armani Exchange", count: 60 },
  { label: "Baldinini Trend", count: 106 },
  { label: "Balenciaga", count: 75 },
];

const colorItems: Swatch[] = [
  { label: "Arancione", color: "#8a8a8a" },
  { label: "Army", color: "#7e7f73" },
  { label: "Beige", color: "#f1edcc" },
  { label: "Black", color: "#111111" },
  { label: "Blue", color: "#5877d7" },
  { label: "Brown", color: "#85573d" },
  { label: "Gray", color: "#b9b9b9" },
  { label: "Green", color: "#71a96d" },
];

const sizeItems = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "EU 36", "EU 38", "EU 40"];
const conditionItems = ["New", "Like New", "Very Good", "Good", "Fair"];
const discountItems = [
  "10-19% Discount",
  "20-29% Discount",
  "30-39% Discount",
  "40-49% Discount",
  "50-59% Discount",
  "60-69% Discount",
  "70-79% Discount",
  "80-89% Discount",
];
const materialItems = ["Cotton", "Leather", "Polyester", "Canvas", "Silk", "Suede", "Wool"];

function PlainCheckboxList({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="space-y-3">
      {items.map((label) => (
        <li key={label}>
          <label className="flex cursor-pointer items-center gap-3 text-[15px] text-slate-700 transition hover:text-black">
            <input
              type="checkbox"
              className="h-6 w-6 rounded border-slate-300 text-black focus:ring-black"
            />
            <span className="flex-1">{label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function CountCheckboxList({ items }: Readonly<{ items: CheckboxItem[] }>) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          <label className="flex cursor-pointer items-center gap-3 text-[15px] text-slate-700 transition hover:text-black">
            <input
              type="checkbox"
              className="h-6 w-6 rounded border-slate-300 text-black focus:ring-black"
            />
            <span className="flex-1">{item.label}</span>
            {item.count ? <span className="text-sm text-slate-400">({item.count})</span> : null}
          </label>
        </li>
      ))}
    </ul>
  );
}

function SectionShell({
  title,
  isOpen,
  toggle,
  children,
}: Readonly<{
  title: string;
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}>) {
  return (
    <section className="border-b border-slate-100 py-5 last:border-b-0">
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <h3 className="text-[20px] font-normal tracking-tight text-slate-800">{title}</h3>
        <svg
          className={`h-4 w-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen ? <div className="pt-5">{children}</div> : null}
    </section>
  );
}

function BrandList() {
  return (
    <div className="space-y-4">
      <label className="relative block">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.2-5.2m1.7-4.3a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Brands"
          className="w-full border-b border-slate-200 bg-transparent py-3 pl-12 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-black focus:outline-none"
        />
      </label>

      <div className="max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
        <CountCheckboxList items={brandItems} />
      </div>

      <button
        type="button"
        className="text-sm text-slate-600 underline underline-offset-2 transition hover:text-black"
      >
        Show more
      </button>
    </div>
  );
}

function ColorList() {
  return (
    <div className="max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
      <ul className="space-y-3">
        {colorItems.map((color) => (
          <li key={color.label}>
            <label className="flex cursor-pointer items-center gap-3 text-[15px] text-slate-700 transition hover:text-black">
              <input
                type="checkbox"
                className="h-6 w-6 rounded border-slate-300 text-black focus:ring-black"
              />
              <span
                className="h-8 w-8 rounded-full border border-slate-300 shadow-sm"
                style={{ backgroundColor: color.color }}
                aria-hidden="true"
              />
              <span className="flex-1">{color.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-5">
        <label className="space-y-2">
          <span className="block text-sm text-slate-500">Minimum Price</span>
          <input
            type="text"
            placeholder="Min"
            className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-black focus:outline-none"
          />
        </label>

        <label className="space-y-2">
          <span className="block text-sm text-slate-500">Maximum Price</span>
          <input
            type="text"
            placeholder="Max"
            className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-black focus:outline-none"
          />
        </label>
      </div>

      <div className="h-2 rounded-full bg-slate-200">
        <div className="h-2 w-full rounded-full bg-[#404040]" />
      </div>

      <PlainCheckboxList
        items={[
          "Under €100",
          "Under €200",
          "Under €300",
          "Under €400",
          "Under €500",
          "€500+",
        ]}
      />
    </div>
  );
}

export function FilterContent() {
  const [openSections, setOpenSections] = useState<Record<FilterSectionKey, boolean>>({
    category: false,
    brands: false,
    sizes: false,
    colors: false,
    conditions: false,
    prices: false,
    discount: false,
    materials: false,
  });

  const toggleSection = (key: FilterSectionKey) => {
    setOpenSections((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <div className="flex h-full flex-col bg-white px-5 py-6 font-sans text-[#1e293b]">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <h2 className="text-[20px] font-normal tracking-tight text-slate-800">All Filters</h2>
        <button
          type="button"
          className="text-[15px] font-normal text-slate-600 underline underline-offset-2 transition hover:text-black"
        >
          Clear All
        </button>
      </div>

      <div className="mt-2 flex-1 space-y-1 overflow-y-auto pr-1 custom-scrollbar">
        <SectionShell
          title="Category"
          isOpen={openSections.category}
          toggle={() => toggleSection("category")}
        >
          <ul className="space-y-3">
            {categoryItems.map((item) => (
              <li key={item.label}>
                <label className="flex cursor-pointer items-center gap-3 text-[15px] text-slate-700 transition hover:text-black">
                  <input
                    type="checkbox"
                    className="h-6 w-6 rounded border-slate-300 text-black focus:ring-black"
                  />
                  <span className="flex-1">{item.label}</span>
                  {item.count ? <span className="text-sm text-slate-400">({item.count})</span> : null}
                  <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </label>
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          title="Brands"
          isOpen={openSections.brands}
          toggle={() => toggleSection("brands")}
        >
          <BrandList />
        </SectionShell>

        <SectionShell
          title="Sizes"
          isOpen={openSections.sizes}
          toggle={() => toggleSection("sizes")}
        >
          <div className="max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
            <PlainCheckboxList items={sizeItems} />
          </div>
        </SectionShell>

        <SectionShell
          title="Colors"
          isOpen={openSections.colors}
          toggle={() => toggleSection("colors")}
        >
          <ColorList />
        </SectionShell>

        <SectionShell
          title="Conditions"
          isOpen={openSections.conditions}
          toggle={() => toggleSection("conditions")}
        >
          <PlainCheckboxList items={conditionItems} />
        </SectionShell>

        <SectionShell
          title="Prices"
          isOpen={openSections.prices}
          toggle={() => toggleSection("prices")}
        >
          <PriceSection />
        </SectionShell>

        <SectionShell
          title="Discount"
          isOpen={openSections.discount}
          toggle={() => toggleSection("discount")}
        >
          <PlainCheckboxList items={discountItems} />
        </SectionShell>

        <SectionShell
          title="Materials"
          isOpen={openSections.materials}
          toggle={() => toggleSection("materials")}
        >
          <PlainCheckboxList items={materialItems} />
        </SectionShell>
      </div>
    </div>
  );
}

export default function SideBar() {
  return (
    <aside className="hidden h-screen overflow-hidden border-r border-slate-200 bg-white shadow-sm lg:block">
      <FilterContent />
    </aside>
  );
}
