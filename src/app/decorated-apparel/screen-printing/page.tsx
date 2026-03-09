import type { Metadata } from "next";
import {
  Palette,
  Zap,
  Settings,
  Shirt,
  Users,
  Award,
  ShoppingBag,
  Dumbbell,
  Package,
} from "lucide-react";
import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Screen Printing | Bright Way — Custom Prints, Charlotte NC",
  description:
    "Custom screen printing on t-shirts, hoodies, hats, bags, and more. In-house art department, vibrant inks, and fast turnaround for the Charlotte metro area.",
};

const categories = [
  {
    icon: Shirt,
    title: "Event T-Shirts",
    description:
      "Fundraisers, festivals, 5Ks, and company outings — we print runs of any size with bold, lasting graphics.",
  },
  {
    icon: Users,
    title: "School & Sports Teams",
    description:
      "Spirit wear, practice gear, and fan apparel for every team, club, and booster organization.",
  },
  {
    icon: Award,
    title: "Staff Uniforms",
    description:
      "Branded workwear that builds identity and keeps your crew looking sharp on the job.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Brand Apparel",
    description:
      "Merch-ready garments printed to retail standards — perfect for selling your brand.",
  },
  {
    icon: Dumbbell,
    title: "Performance Wear",
    description:
      "Moisture-wicking and athletic fabrics printed with specialty inks designed to move and breathe.",
  },
  {
    icon: Package,
    title: "Bags & Accessories",
    description:
      "Tote bags, drawstring packs, caps, and more — extend your branding beyond the shirt.",
  },
];

const features = [
  {
    icon: Palette,
    title: "In-House Art Department",
    description:
      "Have an idea but no design? Our creative team works with you from concept to print-ready artwork — at no extra design charge for qualifying orders.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Rush orders? No problem. We deliver across the Charlotte metro area and can turn projects around fast when deadlines are tight.",
  },
  {
    icon: Settings,
    title: "Premium Equipment & Inks",
    description:
      "State-of-the-art presses and industry-leading inks produce prints that stay vibrant wash after wash — not just for the first few wears.",
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

export default function ScreenPrintingPage() {
  return (
    <>
      <Hero
        tag="SCREEN PRINTING"
        heading="Screen Printing"
        subtext="Vibrant, long-lasting custom prints on apparel, bags, and accessories — powered by state-of-the-art equipment and premium inks."
        backgroundImage="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"
      />

      {/* Intro */}
      <section className="section-padding bg-ivory">
        <div className="container-wide">
          <AnimateOnScroll variant="fadeUp">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-tag">FROM DESIGN TO PRINT</span>
              <h2 className="heading-section text-navy mt-5 mb-6">
                We&apos;ve Got You Covered
              </h2>
              <p className="text-slate text-lg leading-relaxed">
                Our in-house art department and expert print team bring your
                vision to life — whether you have a finished design or just a
                rough idea on a napkin. From small personal runs to large
                corporate orders, we deliver sharp, colorful prints that hold up
                to real-world wear.
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
              <span className="section-tag">WHAT WE PRINT</span>
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
                We Print on the Best
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
                Choose from the industry&apos;s most trusted apparel brands — or bring
                your own garments and we&apos;ll print on those.
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
