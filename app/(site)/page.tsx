"use client";

import { useSearchParams } from "next/navigation";
import { FilterContent } from "@/components/SideBar";

import Brands from "@/components/Brands";
import DolceGabana from "@/components/DolceGabana";
import FAQs from "@/components/FAQs";
import HeroPage from "@/components/HeroPage";
import JustInSection from "@/components/JustInSection";
import KidsSection from "@/components/KidsSection";
import OurCategory from "@/components/OurCategory";
import PopularProducts from "@/components/PopularProducts";
import PreLovedCollection from "@/components/PreLovedCollection";
import ReferSection from "@/components/ReferSection";
import SignatureCollection from "@/components/SignatureCollection";

export default function Home() {
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience");

  // If no audience param in URL, show the original full-width landing page.
  // Clicking any audience tab in Navbar sets the param → sidebar appears + tab-related content.
  if (!audience) {
    return (
      <>
        <HeroPage />
        <OurCategory />
        <PopularProducts />
        <JustInSection />
        <Brands />
        <DolceGabana />
        <SignatureCollection />
        <PreLovedCollection />
        <KidsSection />
        <FAQs />
        <ReferSection />
      </>
    );
  }

  // Split view: Sidebar (filters) on the side + tab-related content on the other side
  return (
    <div className="flex flex-col lg:flex-row min-h-[70vh]">
      {/* Left: Sidebar (reusing FilterContent for the filter panel) */}
      <div className="w-full lg:w-[340px] lg:border-r border-slate-200 bg-white flex-shrink-0 lg:sticky lg:top-0 lg:h-[70vh] lg:overflow-y-auto">
        <FilterContent />
      </div>

      {/* Right: Tab-related content */}
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1e293b]">
            {audience}
          </h1>
          <p className="text-slate-500 mt-1">Browse products and collections for {audience.toLowerCase()}.</p>
        </div>

        {/* Placeholder for actual tab-specific product grid / sections.
            You can swap in filtered versions of PopularProducts, JustIn etc. here. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Example product cards (replace with real components later) */}
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition">
              <div className="h-48 bg-slate-100 rounded mb-3" />
              <div className="text-sm font-medium">Product Name {n}</div>
              <div className="text-xs text-slate-500">{audience} • Size M • €120</div>
            </div>
          ))}
        </div>

        {/* You can also embed existing sections if they work in narrower container */}
        {/* <PopularProducts /> */}
      </div>
    </div>
  );
}
