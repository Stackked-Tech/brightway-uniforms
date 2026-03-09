import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Decorated Apparel | Bright Way — Screen Printing & Embroidery",
  description:
    "Custom screen printing and embroidery services in the Charlotte metro area. In-house art department, premium brands, and fast turnaround for businesses, teams, and events.",
};

const services = [
  {
    title: "Screen Printing",
    description:
      "Bold, vibrant prints that last. From event tees and team uniforms to branded retail apparel — we produce high-quality screen prints on virtually any garment or accessory.",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    href: "/decorated-apparel/screen-printing",
  },
  {
    title: "Embroidery",
    description:
      "Polished, professional embroidery for a premium look. Logos, names, and custom designs stitched with precision on polos, caps, jackets, bags, and more.",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    href: "/decorated-apparel/embroidery",
  },
];

const brands = [
  "Augusta",
  "Badger",
  "Carhartt",
  "Columbia",
  "Comfort Colors",
  "Champion",
  "Gildan",
  "Next Level",
  "Nike",
  "The North Face",
  "OGIO",
  "Polo Ralph Lauren",
  "Richardson",
  "Under Armour",
];

export default function DecoratedApparelPage() {
  return (
    <>
      <Hero
        tag="DECORATED APPAREL"
        heading="Custom Screen Printing & Embroidery"
        subtext="In-house art department, premium brands, and fast turnaround — custom-decorated apparel for businesses, teams, and events across the Charlotte metro area."
        backgroundImage="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
      />

      {/* Intro */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate text-lg leading-relaxed mb-4">
                Whether you need branded uniforms for your crew, spirit wear for
                your team, or custom merch for your next event — Bright Way handles
                it all under one roof. Our in-house art department works with you
                from concept to finished product, using state-of-the-art equipment
                and premium inks and threads.
              </p>
              <p className="text-navy font-semibold text-lg">
                Two locations. One standard of excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-4 text-slate text-sm">
                <span>Mount Holly, NC: <a href="tel:7048273796" className="text-cyan font-semibold hover:underline">704-827-3796</a></span>
                <span>Rock Hill, SC: <a href="tel:8032301557" className="text-cyan font-semibold hover:underline">803-230-1557</a></span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} variant="fadeUp" delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group block h-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
                >
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="h-0.5 bg-gradient-to-r from-cyan via-cyan-light to-transparent" />

                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-2xl text-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate text-[0.9375rem] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-cyan font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      Explore {service.title} &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="section-padding-sm bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container-wide relative z-10">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center mb-10">
              <span className="section-tag section-tag-white">THE BRANDS YOU KNOW</span>
              <h2 className="font-display text-3xl md:text-4xl text-white mt-5">
                Premium Brands, Custom Decorated
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeUp" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-white/[0.06] border border-white/[0.08] rounded-lg text-white/70 text-sm font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
