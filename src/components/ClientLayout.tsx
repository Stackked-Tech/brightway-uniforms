import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import TourWizard from "@/components/TourWizard";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyCTA />
      <TourWizard />
    </>
  );
}
