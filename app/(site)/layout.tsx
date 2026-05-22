import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="h-14 md:h-16 border-b bg-white" />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={null}>
        <main className="flex-1">{children}</main>
      </Suspense>
      <Footer />
    </>
  );
}
