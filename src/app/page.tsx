import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import ValueProps from "@/components/ValueProps";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import ServicesGrid from "@/components/ServicesGrid";

const services = [
  {
    image:
      "https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg",
    title: "Industrial",
    description:
      "Durable uniforms for manufacturing, automotive, HVAC, and other demanding industries. Built for safety and performance.",
    linkText: "Gear Up the Crew →",
    linkHref: "/services/industrial",
    featured: true,
  },
  {
    image:
      "https://images.ctfassets.net/9hll0m1ctx1b/4aaLhZoUpPeT9WkRDNxebo/14da3b42a593c82d82768a7c699cdf3d/Chef.jpg?w=1000&h=666&fl=progressive&q=80&fm=jpg",
    title: "Restaurants",
    description:
      "Crisp chef coats, aprons, server attire, and quality linens to enhance your establishment's image.",
    linkText: "Style That Handles the Heat →",
    linkHref: "/services/restaurants",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/5b0ba6af36099bd6c699181b/1752570110820-ZYZFXRFHVXFMQR090K2W/corporate-uniforms-guide-Professional-business-attire-team-banner.jpg",
    title: "Professional",
    description:
      "Smart and comfortable uniforms for front office, municipalities, healthcare (non-clinical), and other professional environments.",
    linkText: "Dress to Impress →",
    linkHref: "/services/professional",
  },
];

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

      {/* Services Section */}
      <div data-tour="services">
        <ServicesGrid services={services} />
      </div>

      {/* How It Works */}
      <div data-tour="how-it-works">
        <HowItWorks />
      </div>

      {/* Value Props */}
      <div data-tour="why-bright-way">
        <ValueProps />
      </div>

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
