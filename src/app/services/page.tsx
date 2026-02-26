import { Footprints, SprayCanIcon, Shirt } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const industries = [
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

const additionalServices = [
  {
    icon: Footprints,
    title: "Floor Care & Mat Programs",
    description:
      "Your floors see a lot—dirt, moisture, wear. We provide high-quality mats and floor care solutions to enhance safety, protect your facility, and support your branding.",
  },
  {
    icon: SprayCanIcon,
    title: "Restroom & Facility Stocking",
    description:
      "Avoid supply runs and empty dispensers. Bright Way ensures your restrooms, kitchens, and common areas are always clean, stocked, and guest-ready.",
  },
  {
    icon: Shirt,
    title: "Branded Apparel & Promotional Products",
    description:
      "Your team is your brand. We make sure they look the part with customized apparel and promotional gear that carries your message further.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        tag="OUR SERVICES"
        heading="Our Services"
        subtext="Tailored solutions for every industry."
        backgroundImage="https://cityuniformsandlinen.com/wp-content/uploads/2021/07/Manufacturing-Industrial-Uniforms-Web-Header-City-Uniforms-Linen.jpg"
      />

      {/* Intro */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate text-lg leading-relaxed mb-4">
                At Bright Way, we understand that each industry has unique demands, and
                we&apos;re committed to meeting those needs with precision and care.
                Whether your business is industrial, in hospitality, or professional
                services, our tailored solutions—ranging from uniforms and shop rags to
                safety gear and custom apparel—keep your team looking professional,
                working safely, and performing at their best.
              </p>
              <p className="text-navy font-semibold text-lg">
                We believe service should simplify your day, not complicate it.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center mb-16">
              <span className="section-tag">INDUSTRIES</span>
              <h2 className="heading-section text-navy mt-5">
                Solutions by Industry
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, i) => (
              <ServiceCard key={industry.title} {...industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center mb-16">
              <span className="section-tag">BEYOND UNIFORMS</span>
              <h2 className="heading-section text-navy mt-5">
                Additional Services
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {additionalServices.map((service, i) => (
              <AnimateOnScroll key={service.title} variant="fadeUp" delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-card hover:shadow-card-hover transition-all duration-400">
                  <div className="w-12 h-12 rounded-xl bg-cyan/8 flex items-center justify-center mb-6">
                    <service.icon size={22} className="text-cyan" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate text-[0.9375rem] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="section-padding-sm bg-ivory-dark">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-tag">SCALABLE SOLUTIONS</span>
              <h2 className="heading-section text-navy mt-5 mb-6">
                Built for Businesses of Every Size
              </h2>
              <p className="text-slate text-lg leading-relaxed">
                A small business shouldn&apos;t have to choose between quality and
                service—and neither should a national chain. Bright Way scales to meet
                your needs, offering consistent, high-quality programs for businesses
                of every size.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABanner />
    </>
  );
}
