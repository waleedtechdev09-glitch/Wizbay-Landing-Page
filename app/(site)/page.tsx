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
