"use client";

import { FilterContent } from "@/components/SideBar";
import { useState } from "react";

type CatalogMobileFiltersProps = {
  enabled?: boolean;
};

export default function CatalogMobileFilters({
  enabled = true,
}: CatalogMobileFiltersProps) {
  const [open, setOpen] = useState(false);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div className="mb-4 flex lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Filters"
          className="inline-flex items-center justify-center rounded border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-black hover:text-black"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="fixed inset-y-0 left-0 z-50 h-full w-full overflow-hidden bg-white shadow-2xl lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-black"
            aria-label="Close Filters"
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

          <FilterContent />
        </div>
      )}
    </>
  );
}
