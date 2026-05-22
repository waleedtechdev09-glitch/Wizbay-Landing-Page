import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

type SiteFrameProps = {
  children: React.ReactNode;
};

export default function SiteFrame({ children }: SiteFrameProps) {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="h-14 border-b bg-white md:h-16" />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<main className="flex-1 bg-white" />}>
        <main className="flex-1">{children}</main>
      </Suspense>
      <Footer />
    </>
  );
}
