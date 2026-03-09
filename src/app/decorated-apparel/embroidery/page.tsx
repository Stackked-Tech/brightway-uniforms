import type { Metadata } from "next";
import {
  Palette,
  Zap,
  Settings,
  HardHat,
  Briefcase,
  ShoppingBag,
  Shirt,
  Stethoscope,
  Trophy,
  Backpack,
} from "lucide-react";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Embroidery | Bright Way — Custom Embroidery, Charlotte NC",
  description:
    "Professional custom embroidery on polos, caps, jackets, bags, and corporate gear. Precision stitching, in-house digitizing, and fast turnaround in the Charlotte metro area.",
};

const categories = [
  {
    icon: HardHat,
    title: "Caps & Headwear",
    description:
      "Structured caps, beanies, visors, and bucket hats — embroidered with your logo for a clean, professional look.",
  },
  {
    icon: Shirt,
    title: "Polo Shirts",
    description:
      "The go-to for corporate casual. Custom-embroidered polos that give your team a polished, unified appearance.",
  },
  {
    icon: Briefcase,
    title: "Woven & Dress Shirts",
    description:
      "Elevate your professional image with embroidered button-downs and oxfords for client-facing teams.",
  },
  {
    icon: Trophy,
    title: "Outerwear & Jackets",
    description:
      "Fleece, softshell, rain jackets, and vests — embroidered outerwear that looks sharp in any weather.",
  },
  {
    icon: Backpack,
    title: "Bags & Totes",
    description:
      "Backpacks, duffels, messenger bags, and tote bags embroidered with your brand for everyday visibility.",
  },
  {
    icon: ShoppingBag,
    title: "Corporate Gear",
    description:
      "Quarter-zips, vests, golf shirts, and executive gifts — premium embroidered pieces that represent your brand well.",
  },
  {
    icon: Stethoscope,
    title: "Scrubs & Medical Apparel",
    description:
      "Professional embroidered scrubs, lab coats, and medical uniforms with names, titles, and facility logos.",
  },
];

const features = [
  {
    icon: Palette,
    title: "In-House Digitizing",
    description:
      "Our art team converts your logo into a stitch-ready file optimized for clean lines, proper density, and accurate color — no outsourcing, no delays.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Need it quick? We deliver across the Charlotte metro area and offer expedited production for time-sensitive orders.",
  },
  {
    icon: Settings,
    title: "Precision Equipment",
    description:
      "Multi-head embroidery machines with high-quality threads produce detailed, consistent designs — from small text to complex logos.",
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

export default function EmbroideryPage() {
  return (
    <>
      <Hero
        tag="EMBROIDERY"
        heading="Custom Embroidery"
        subtext="Precision-stitched logos, names, and designs on premium apparel — crafted in-house with high-quality threads and state-of-the-art machines."
        backgroundImage="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
      />

      {/* Intro */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-tag">EXPERT CRAFTSMANSHIP</span>
              <h2 className="heading-section text-navy mt-5 mb-6">
                Every Stitch Counts
              </h2>
              <p className="text-slate text-lg leading-relaxed">
                Custom embroidery adds a professional edge that screen printing
                can&apos;t match. From corporate polos and executive gifts to team
                outerwear and medical scrubs — our in-house digitizing and
                multi-head machines deliver detailed, durable embroidery that
                elevates any garment.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center mb-14">
              <span className="section-tag">WHAT WE EMBROIDER</span>
              <h2 className="heading-section text-navy mt-5">
                Products & Categories
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimateOnScroll key={cat.title} variant="fadeUp" delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-7 h-full shadow-card hover:shadow-card-hover transition-shadow duration-400">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-cyan/5 flex items-center justify-center mb-5">
                    <cat.icon size={22} className="text-cyan" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg text-navy mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-slate text-[0.9375rem] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="text-center mb-14">
              <span className="section-tag">WHY BRIGHT WAY</span>
              <h2 className="heading-section text-navy mt-5">
                The Bright Way Difference
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feat, i) => (
              <AnimateOnScroll key={feat.title} variant="fadeUp" delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 md:p-10 h-full shadow-card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/10 to-cyan/5 flex items-center justify-center mx-auto mb-6">
                    <feat.icon
                      size={26}
                      className="text-cyan"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-slate text-[0.9375rem] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
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
              <span className="section-tag section-tag-white">
                THE BRANDS YOU KNOW
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-white mt-5">
                We Embroider on the Best
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
                Choose from the industry&apos;s most trusted apparel brands — or
                supply your own garments and we&apos;ll handle the embroidery.
              </p>
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
