"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import DecoratedApparelNavbar from "@/components/DecoratedApparelNavbar";
import Footer from "@/components/Footer";
import DecoratedApparelFooter from "@/components/DecoratedApparelFooter";
import StickyCTA from "@/components/StickyCTA";
import TourWizard from "@/components/TourWizard";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const isDecoratedApparel = pathname.startsWith("/decorated-apparel");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <TopBanner />
      {isDecoratedApparel ? <DecoratedApparelNavbar /> : <Navbar />}
      <main id="main-content">{children}</main>
      {isDecoratedApparel ? <DecoratedApparelFooter /> : <Footer />}
      <StickyCTA />
      <TourWizard />
    </>
  );
}
