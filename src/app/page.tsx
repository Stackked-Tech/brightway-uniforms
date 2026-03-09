import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bright Way | Charlotte's Premier Uniform & Facility Solutions",
  description:
    "Uniforms, facility services, flame resistant clothing, and hygiene solutions for Charlotte-area businesses. No long-term contracts, no hidden fees. Get a free quote today.",
};
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SolutionsGrid from "@/components/SolutionsGrid";
import HowItWorks from "@/components/HowItWorks";
import ValueProps from "@/components/ValueProps";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import WhySwitch from "@/components/WhySwitch";
import IndustriesServed from "@/components/IndustriesServed";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div data-tour="hero">
        <Hero
          tag="CHARLOTTE'S PREMIER UNIFORM PARTNER"
          heading="Finally, Uniform Services Made Simple"
          subtext="No long-term contracts. No surprise fees. Just fast installs, fair pricing, and real people who answer the phone."
          backgroundImage="https://www.generallinen.com/wp-content/uploads/2021/10/Manufacturing-Industrial-Uniforms-Cover-Image.jpg"
          showScrollIndicator
        >
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Outfit Your Team
              <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="btn-outlined">
              See How We&apos;re Different
            </Link>
          </div>
        </Hero>
      </div>

      {/* Trust Stats Bar */}
      <TrustBar />

      {/* Solutions */}
      <div data-tour="services">
        <SolutionsGrid />
      </div>

      {/* Industries We Serve */}
      <IndustriesServed />

      {/* How It Works */}
      <div data-tour="how-it-works">
        <HowItWorks />
      </div>

      {/* Value Props */}
      <div data-tour="why-bright-way">
        <ValueProps />
      </div>

      {/* Why Switch */}
      <WhySwitch />

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials */}
      <div data-tour="testimonials">
        <Testimonials />
      </div>

      {/* FAQ */}
      <FAQ />

      {/* Bottom CTA */}
      <div data-tour="cta">
        <CTABanner />
      </div>
    </>
  );
}
