import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "First Aid & Safety | Bright Way",
  description:
    "First aid cabinet stocking, PPE supplies, AEDs, eyewash stations, and office water coolers. Workplace safety programs for Charlotte-area businesses.",
};
import ServiceBlock from "@/components/ServiceBlock";
import CTABanner from "@/components/CTABanner";

const serviceBlocks = [
  {
    title: "First Aid Supplies",
    description:
      "Be ready when it matters most. We keep your first aid cabinets stocked with bandages, antiseptics, burn care, and over-the-counter essentials — inspected and replenished on a regular schedule so nothing expires or runs out.",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&q=80",
  },
  {
    title: "Safety & PPE Supplies",
    description:
      "From hard hats and safety glasses to gloves, ear protection, and hi-vis gear — we supply the personal protective equipment your team needs to stay compliant and protected on the job.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    title: "AEDs & Emergency Equipment",
    description:
      "Every second counts in a cardiac emergency. We provide automated external defibrillators, emergency signage, and supporting supplies to help your workplace respond quickly and confidently.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
  },
  {
    title: "Office Water Coolers",
    description:
      "Keep your team hydrated and productive with bottleless water coolers that deliver filtered, great-tasting water on demand. No jugs to swap, no deliveries to schedule — just clean water, always available.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80",
  },
  {
    title: "Eyewash Stations",
    description:
      "OSHA-compliant eyewash stations are a must for any facility handling chemicals, dust, or debris. We install, maintain, and restock eyewash units so your team has immediate access when they need it.",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80",
  },
];

export default function FirstAidSafetyPage() {
  return (
    <>
      <Hero
        tag="FIRST AID & SAFETY"
        heading="First Aid & Safety"
        subtext="Workplace safety supplies and emergency preparedness programs that keep your team protected and your facility compliant."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
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
