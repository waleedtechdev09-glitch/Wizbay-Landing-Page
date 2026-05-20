import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIZBAY",
  description: "WIZBAY fashion landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
