import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Solutions | Bright Way Uniforms & Facility Services",
  description:
    "Explore Bright Way's full range of solutions: uniform rental, facility services, flame resistant clothing, restroom and hygiene programs, and first aid supplies for Charlotte-area businesses.",
};
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const solutions = [
  {
    image:
      "https://www.serviceuniform.com/wp-content/uploads/2022/10/manufacturing-uniforms-colorado-scaled.jpg",
    title: "Uniforms & Work Apparel",
    description:
      "Managed uniform rental programs, work shirts, pants, culinary apparel, scrubs, outerwear, and more — for every role and every industry.",
    href: "/services/uniforms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    title: "Facility Services",
    description:
      "Floor mats, janitorial supplies, restroom stocking, kitchen supplies, and industrial cleaning products to keep your facility running smoothly.",
    href: "/services/facility",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    title: "Flame Resistant Clothing",
    description:
      "Arc-rated and FR workwear — shirts, pants, coveralls, outerwear, and hi-vis options that meet NFPA and ASTM safety standards.",
    href: "/services/flame-resistant",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    title: "Restroom & Hygiene Solutions",
    description:
      "Restroom supplies, hand hygiene, air fresheners, dispenser systems, and antimicrobial mats to keep your facilities clean and guest-ready.",
    href: "/services/restroom-hygiene",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
    title: "First Aid & Safety",
    description:
      "First aid cabinet stocking, PPE supplies, AEDs, eyewash stations, and office water coolers — everything you need to keep your team safe.",
    href: "/services/first-aid-safety",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        tag="OUR SOLUTIONS"
        heading="What We Provide"
        subtext="Comprehensive uniform and facility solutions for businesses of every size and industry."
        backgroundImage="https://cityuniformsandlinen.com/wp-content/uploads/2021/07/Manufacturing-Industrial-Uniforms-Web-Header-City-Uniforms-Linen.jpg"
      />

      {/* Intro */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate text-lg leading-relaxed mb-4">
                From workwear and facility supplies to safety equipment and
                hygiene programs, Bright Way delivers everything your business
                needs under one roof. No juggling multiple vendors — just one
                partner who keeps your team outfitted, your facility stocked,
                and your workplace safe.
              </p>
              <p className="text-navy font-semibold text-lg">
                We believe service should simplify your day, not complicate it.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, i) => (
              <AnimateOnScroll key={solution.title} variant="fadeUp" delay={i * 0.08}>
                <Link
                  href={solution.href}
                  className="group block h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
                >
                  {/* Image */}
                  <div className="relative h-52 md:h-56 overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Cyan accent */}
                  <div className="h-0.5 bg-gradient-to-r from-cyan via-cyan-light to-transparent" />

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-xl text-navy mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-slate text-[0.9375rem] leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-cyan font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Learn More &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="section-padding-sm bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-tag">SCALABLE SOLUTIONS</span>
              <h2 className="heading-section text-navy mt-5 mb-6">
                Built for Businesses of Every Size
              </h2>
              <p className="text-slate text-lg leading-relaxed">
                A small business shouldn&apos;t have to choose between quality and
                service — and neither should a national chain. Bright Way scales to
                meet your needs, offering consistent, high-quality programs for
                businesses of every size.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
