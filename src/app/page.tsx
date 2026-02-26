import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    image:
      "https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg",
    title: "Industrial",
    description:
      "Durable uniforms for manufacturing, automotive, HVAC, and other demanding industries. Built for safety and performance.",
    linkText: "Gear Up the Crew →",
    linkHref: "/services/industrial",
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
      <Hero
        tag="CHARLOTTE'S PREMIER UNIFORM PARTNER"
        heading="Finally, Uniform Services Made Simple"
        subtext="No long-term contracts. No surprise fees. Just fast installs, fair pricing, and real people who answer the phone."
        backgroundImage="https://www.generallinen.com/wp-content/uploads/2021/10/Manufacturing-Industrial-Uniforms-Cover-Image.jpg"
        showScrollIndicator
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Get Started
            <ArrowRight size={18} />
          </Link>
          <Link href="/about" className="btn-outlined">
            Learn Our Story
          </Link>
        </div>
      </Hero>

      {/* Services Section */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center mb-16">
              <span className="section-tag">WHAT WE DO</span>
              <h2 className="heading-section text-navy mt-5 mb-4">
                Services &amp; Solutions
              </h2>
              <p className="text-slate text-lg max-w-2xl mx-auto">
                Outfit your team with dependable uniforms and facility essentials
                built for every industry.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <ValueProps />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
