import HeroPage from "@/components/HeroPage";
import OurCategory from "@/components/OurCategory";
import PopularProducts from "@/components/PopularProducts";
import JustInSection from "@/components/JustInSection";
import Brands from "@/components/Brands";
import DolceGabana from "@/components/DolceGabana";
import SignatureCollection from "@/components/SignatureCollection";
import PreLovedCollection from "@/components/PreLovedCollection";
import KidsSection from "@/components/KidsSection";
import FAQs from "@/components/FAQs";
import ReferSection from "@/components/ReferSection";
import FilterSidebar from "@/components/layout/FilterSidebar";
import AudienceCatalog from "@/components/tabs/AudienceCatalog";
import type { AudienceKey } from "@/components/tabs/audience-data";

type HomePageProps = {
  searchParams: Promise<{ audience?: string | string[] }>;
};

function getAudience(value: string | string[] | undefined): AudienceKey | null {
  const selected = Array.isArray(value) ? value[0] : value;
  if (selected === "women" || selected === "men" || selected === "kids" || selected === "life") {
    return selected;
  }
  return null;
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const audience = getAudience(params.audience);

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

  return (
    <div className="flex min-h-[70vh] flex-col lg:flex-row">
      <div className="hidden w-full flex-shrink-0 bg-white lg:sticky lg:top-0 lg:block lg:h-[70vh] lg:w-[340px] lg:overflow-y-auto lg:border-r lg:border-slate-200">
        <FilterSidebar />
      </div>

      <div className="flex-1 overflow-auto p-4 lg:p-8">
        <AudienceCatalog audience={audience} />
      </div>
    </div>
  );
}
