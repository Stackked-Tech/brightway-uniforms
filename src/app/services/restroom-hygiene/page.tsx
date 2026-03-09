import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Restroom & Hygiene Solutions | Bright Way",
  description:
    "Restroom supplies, hand hygiene programs, air fresheners, dispenser systems, and antimicrobial mats. Keep your Charlotte-area facility clean and guest-ready.",
};
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";

const serviceBlocks = [
  {
    title: "Restroom Supplies",
    description:
      "Toilet paper, seat covers, paper towels, and soap — the basics your facility can't run without. We keep your restrooms fully stocked on a schedule that matches your traffic, so you never face an empty dispenser.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    title: "Hand Hygiene Solutions",
    description:
      "Promote a healthier workplace with our hand soap, sanitizer, and touchless dispenser programs. From foam and lotion soaps to industrial-strength hand cleaners — we have the right fit for every environment.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
  },
  {
    title: "Air Fresheners & Odor Control",
    description:
      "A clean restroom should smell like one. Our air care programs use timed dispensers and odor-neutralizing technology to keep restrooms, breakrooms, and common areas fresh around the clock.",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
  },
  {
    title: "Restroom Mats & Floor Care",
    description:
      "Reduce slip hazards and keep restroom floors clean with antimicrobial mats designed specifically for wet environments. Serviced and replaced on a regular rotation to maintain hygiene standards.",
    image:
      "https://ultimatemats.com/wp-content/uploads/2022/01/MicroLuxx-Commercial-Floor-Mats-in-place-midnight-grey-website.jpg",
  },
  {
    title: "Dispenser Systems",
    description:
      "Upgrade from refillable bottles to sealed, hygienic dispenser systems for soap, sanitizer, and paper products. We install the hardware and handle ongoing refills — no maintenance on your end.",
    image:
      "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
  },
];

export default function RestroomHygienePage() {
  return (
    <>
      <Hero
        tag="RESTROOM & HYGIENE"
        heading="Restroom & Hygiene Solutions"
        subtext="Complete restroom supply and hygiene programs that keep your facilities clean, stocked, and guest-ready at all times."
        backgroundImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
      />

      <section className="section-padding bg-ivory">
        <div className="container-wide space-y-20 lg:space-y-28">
          {serviceBlocks.map((block, i) => (
            <ServiceBlock
              key={block.title}
              {...block}
              reversed={i % 2 !== 0}
              index={i}
            />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
